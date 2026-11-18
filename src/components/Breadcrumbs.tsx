'use client';

import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { buildBreadcrumbJsonLd } from '@/lib/seo';

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  const jsonLd = buildBreadcrumbJsonLd(items);

  return (
    <nav aria-label="Breadcrumb" className="py-3">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ol className="flex flex-wrap items-center gap-1.5 text-xs text-[#525B5E]">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={item.path} className="inline-flex items-center gap-1.5">
              {idx > 0 && (
                <ChevronRight className="w-3.5 h-3.5 text-[#525B5E]/60" aria-hidden="true" />
              )}
              {isLast ? (
                <span className="font-semibold text-[#123B4A]" aria-current="page">
                  {item.name}
                </span>
              ) : (
                <Link
                  href={item.path}
                  className="hover:text-[#F47732] transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
