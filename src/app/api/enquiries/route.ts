import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';
import crypto from 'crypto';
import { enquirySchema } from '@/lib/validation';
import { getServerSupabaseClient } from '@/lib/supabase';
import type { StoredEnquiry } from '@/types/domain';

// In-memory rate limiting map (IP hash -> timestamps)
const rateLimitWindowMs = 10 * 60 * 1000; // 10 minutes
const maxRequestsPerWindow = 8;
const rateLimitMap = new Map<string, number[]>();

function getIpHash(req: NextRequest): string {
  const forwarded = req.headers.get('x-forwarded-for') || '127.0.0.1';
  const ip = forwarded.split(',')[0]?.trim() || '127.0.0.1';
  return crypto.createHash('sha256').update(ip).digest('hex').slice(0, 16);
}

function checkRateLimit(ipHash: string): boolean {
  const now = Date.now();
  const timestamps = rateLimitMap.get(ipHash) || [];
  const recent = timestamps.filter((t) => now - t < rateLimitWindowMs);
  if (recent.length >= maxRequestsPerWindow) {
    rateLimitMap.set(ipHash, recent);
    return false;
  }
  recent.push(now);
  rateLimitMap.set(ipHash, recent);
  return true;
}

function generateReferenceCode(): string {
  const datePart = new Date().toISOString().slice(0, 10).replace(/-/g, '');
  const randomSuffix = crypto.randomBytes(2).toString('hex').toUpperCase();
  return `MV-${datePart}-${randomSuffix}`;
}

const LOCAL_STORE_PATH = path.join(process.cwd(), 'data', 'enquiries-store.json');

async function persistToLocalStore(record: StoredEnquiry): Promise<void> {
  const dir = path.dirname(LOCAL_STORE_PATH);
  await fs.mkdir(dir, { recursive: true });
  let existing: StoredEnquiry[] = [];
  try {
    const raw = await fs.readFile(LOCAL_STORE_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed)) {
      existing = parsed;
    }
  } catch {
    existing = [];
  }
  existing.unshift(record);
  await fs.writeFile(LOCAL_STORE_PATH, JSON.stringify(existing, null, 2), 'utf8');
}

export async function POST(req: NextRequest) {
  try {
    const ipHash = getIpHash(req);
    if (!checkRateLimit(ipHash)) {
      return NextResponse.json(
        {
          success: false,
          error:
            'Too many enquiry submissions from this connection. Please wait a few minutes before submitting again.',
        },
        { status: 429 }
      );
    }

    const body = await req.json();

    // Spam honeypot check
    if (body?.honeypot && String(body.honeypot).length > 0) {
      return NextResponse.json(
        {
          success: false,
          error: 'Automated submission rejected.',
        },
        { status: 400 }
      );
    }

    const parsed = enquirySchema.safeParse(body);
    if (!parsed.success) {
      const fieldErrors = parsed.error.flatten().fieldErrors;
      return NextResponse.json(
        {
          success: false,
          error: 'Please check the highlighted fields in your enquiry form.',
          fieldErrors,
        },
        { status: 400 }
      );
    }

    const validData = parsed.data;
    const referenceCode = generateReferenceCode();
    const createdAt = new Date().toISOString();

    const storedRecord: StoredEnquiry = {
      id: crypto.randomUUID(),
      referenceCode,
      createdAt,
      status: 'received',
      ipHash,
      ...validData,
    };

    // 1. Persist to Supabase if configured
    const supabase = getServerSupabaseClient();
    let storedInSupabase = false;
    if (supabase) {
      const { error: dbError } = await supabase.from('enquiries').insert({
        id: storedRecord.id,
        reference_code: storedRecord.referenceCode,
        full_name: storedRecord.fullName,
        email: storedRecord.email,
        country_of_residence: storedRecord.countryOfResidence,
        preferred_language: storedRecord.preferredLanguage,
        arrival_date: storedRecord.arrivalDate,
        departure_date: storedRecord.departureDate,
        adults: storedRecord.adults,
        children: storedRecord.children,
        preferred_destination_or_guesthouse:
          storedRecord.preferredDestinationOrGuesthouse || null,
        selected_guesthouses: storedRecord.selectedGuesthouses || [],
        selected_destinations: storedRecord.selectedDestinations || [],
        interested_experiences: storedRecord.interestedExperiences || [],
        additional_requirements: storedRecord.additionalRequirements || null,
        privacy_consent: storedRecord.privacyConsent,
        status: 'received',
        ip_hash: ipHash,
      });

      if (!dbError) {
        storedInSupabase = true;
      }
    }

    // 2. Always persist to durable local store in development / self-hosted environments so zero submissions are ever lost
    try {
      await persistToLocalStore(storedRecord);
    } catch {
      // If running on a read-only serverless filesystem without Supabase, ensure we report accurately
      if (!storedInSupabase) {
        return NextResponse.json(
          {
            success: false,
            error:
              'Storage backend is currently read-only. Please configure Supabase credentials to persist enquiries.',
          },
          { status: 500 }
        );
      }
    }

    // 3. Optional Admin Webhook Notification if configured
    const webhookUrl = process.env.ENQUIRY_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            event: 'maldivia.enquiry.received',
            referenceCode: storedRecord.referenceCode,
            enquiry: storedRecord,
          }),
        });
      } catch {
        // Non-blocking notification failure
      }
    }

    return NextResponse.json(
      {
        success: true,
        referenceCode: storedRecord.referenceCode,
        createdAt: storedRecord.createdAt,
        summary: {
          fullName: storedRecord.fullName,
          email: storedRecord.email,
          arrivalDate: storedRecord.arrivalDate,
          departureDate: storedRecord.departureDate,
          adults: storedRecord.adults,
          children: storedRecord.children,
        },
      },
      { status: 201 }
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        error: 'An unexpected error occurred while processing your enquiry. Please try again.',
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  // Returns count of stored enquiries for health verification (without exposing PII)
  try {
    const raw = await fs.readFile(LOCAL_STORE_PATH, 'utf8');
    const parsed = JSON.parse(raw);
    return NextResponse.json({
      status: 'operational',
      recordedEnquiriesCount: Array.isArray(parsed) ? parsed.length : 0,
    });
  } catch {
    return NextResponse.json({
      status: 'operational',
      recordedEnquiriesCount: 0,
    });
  }
}
