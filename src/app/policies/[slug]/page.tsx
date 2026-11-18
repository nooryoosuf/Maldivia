import React from 'react';
import { notFound } from 'next/navigation';
import { POLICY_DOCUMENTS, getPolicyBySlug } from '@/data/policies';
import { PolicyDetailClient } from './PolicyDetailClient';

export function generateStaticParams() {
  return POLICY_DOCUMENTS.map((doc) => ({ slug: doc.slug }));
}

export default async function PolicyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const policy = getPolicyBySlug(slug);

  if (!policy) {
    notFound();
  }

  return <PolicyDetailClient policy={policy} />;
}
