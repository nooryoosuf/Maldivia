import { z } from 'zod';

export const enquirySchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(2, 'Please enter your full name (at least 2 characters).')
      .max(120, 'Name must be 120 characters or fewer.'),
    email: z
      .string()
      .trim()
      .email('Please provide a valid email address for receiving your itinerary proposal.')
      .max(160),
    countryOfResidence: z
      .string()
      .trim()
      .min(2, 'Please specify your country or region of residence.')
      .max(100),
    preferredLanguage: z.enum(['en', 'zh']),
    arrivalDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, 'Please select a valid arrival date (YYYY-MM-DD).'),
    departureDate: z
      .string()
      .regex(/^\d{4}-\d{2}-\d{2}$/, 'Please select a valid departure date (YYYY-MM-DD).'),
    adults: z.coerce
      .number()
      .int()
      .min(1, 'At least 1 adult traveller is required.')
      .max(20, 'For groups larger than 20 adults, please note details in requirements.'),
    children: z.coerce
      .number()
      .int()
      .min(0, 'Number of children cannot be negative.')
      .max(20),
    preferredDestinationOrGuesthouse: z.string().trim().max(200).optional().default(''),
    selectedGuesthouses: z.array(z.string()).optional().default([]),
    selectedDestinations: z.array(z.string()).optional().default([]),
    interestedExperiences: z.array(z.string()).optional().default([]),
    additionalRequirements: z
      .string()
      .trim()
      .max(2000, 'Additional notes must be under 2,000 characters.')
      .optional()
      .default(''),
    privacyConsent: z.literal(true, {
      errorMap: () => ({
        message: 'You must acknowledge the Privacy Policy and consent to enquiry processing.',
      }),
    }),
    honeypot: z.string().max(0).optional().default(''),
  })
  .refine(
    (data) => {
      const arrival = new Date(data.arrivalDate);
      const departure = new Date(data.departureDate);
      return departure > arrival;
    },
    {
      message: 'Departure date must be after the arrival date.',
      path: ['departureDate'],
    }
  );

export type ValidatedEnquiryInput = z.infer<typeof enquirySchema>;
