import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { TRAVEL_GUIDES, getTravelGuideBySlug } from '@/data/travelGuides';
import { buildPageMetadata, buildArticleJsonLd } from '@/lib/seo';
import { TravelGuideDetailClient } from './TravelGuideDetailClient';

export function generateStaticParams() {
  return TRAVEL_GUIDES.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getTravelGuideBySlug(slug);
  if (!article) {
    return buildPageMetadata({
      title: 'Guide Not Found',
      description: 'Requested Maldives travel guide article could not be found.',
      path: '/travel-guide',
    });
  }

  return buildPageMetadata({
    title: article.title.en,
    description: article.summary.en,
    path: `/travel-guide/${article.slug}`,
    ogImage: article.heroImage.url,
  });
}

export default async function TravelGuideArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getTravelGuideBySlug(slug);
  if (!article) {
    notFound();
  }

  const jsonLd = buildArticleJsonLd(article);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <TravelGuideDetailClient article={article} />
    </>
  );
}
