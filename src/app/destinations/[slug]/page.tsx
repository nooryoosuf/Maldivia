import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { DESTINATIONS, getDestinationBySlug } from '@/data/destinations';
import { getGuesthousesByDestination } from '@/data/guesthouses';
import { buildPageMetadata, buildTouristDestinationJsonLd } from '@/lib/seo';
import { DestinationDetailClient } from './DestinationDetailClient';

export function generateStaticParams() {
  return DESTINATIONS.map((d) => ({ slug: d.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) {
    return buildPageMetadata({
      title: 'Destination Not Found',
      description: 'Requested Maldivian island destination could not be found.',
      path: '/destinations',
    });
  }

  return buildPageMetadata({
    title: `${destination.name.en}, ${destination.atollName.en} — Island & Transfer Guide`,
    description: destination.shortSummary.en,
    path: `/destinations/${destination.slug}`,
    ogImage: destination.heroImage.url,
  });
}

export default async function DestinationDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const destination = getDestinationBySlug(slug);
  if (!destination) {
    notFound();
  }

  const guesthouses = getGuesthousesByDestination(destination.slug);
  const jsonLd = buildTouristDestinationJsonLd(destination);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <DestinationDetailClient destination={destination} guesthouses={guesthouses} />
    </>
  );
}
