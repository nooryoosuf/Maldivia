import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { GUESTHOUSES, getGuesthouseBySlug } from '@/data/guesthouses';
import { buildPageMetadata, buildLodgingBusinessJsonLd } from '@/lib/seo';
import { GuesthouseDetailClient } from './GuesthouseDetailClient';

export function generateStaticParams() {
  return GUESTHOUSES.map((gh) => ({ slug: gh.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const guesthouse = getGuesthouseBySlug(slug);
  if (!guesthouse) {
    return buildPageMetadata({
      title: 'Guesthouse Not Found',
      description: 'Requested Maldivian guesthouse profile could not be found.',
      path: '/guesthouses',
    });
  }

  return buildPageMetadata({
    title: `${guesthouse.officialName} — ${guesthouse.islandName.en}, ${guesthouse.atollName.en}`,
    description: guesthouse.conciseDescription.en,
    path: `/guesthouses/${guesthouse.slug}`,
    ogImage: guesthouse.heroImage.url,
  });
}

export default async function GuesthouseDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const guesthouse = getGuesthouseBySlug(slug);
  if (!guesthouse) {
    notFound();
  }

  const jsonLd = buildLodgingBusinessJsonLd(guesthouse);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <GuesthouseDetailClient guesthouse={guesthouse} />
    </>
  );
}
