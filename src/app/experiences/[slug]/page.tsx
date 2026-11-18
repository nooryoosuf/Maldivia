import React from 'react';
import { notFound } from 'next/navigation';
import { EXPERIENCES, getExperienceBySlug } from '@/data/experiences';
import { ExperienceDetailClient } from './ExperienceDetailClient';

export function generateStaticParams() {
  return EXPERIENCES.map((exp) => ({ slug: exp.slug }));
}

export default async function ExperienceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const experience = getExperienceBySlug(slug);

  if (!experience) {
    notFound();
  }

  return <ExperienceDetailClient experience={experience} />;
}
