'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, CheckCircle2, ExternalLink, ArrowLeft } from 'lucide-react';
import type { TravelGuideArticle } from '@/types/domain';
import { TRAVEL_GUIDES } from '@/data/travelGuides';
import { useLanguage } from '@/context/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export function TravelGuideDetailClient({ article }: { article: TravelGuideArticle }) {
  const { locale, t, localize, localizeList, formatDate } = useLanguage();

  const relatedArticles = TRAVEL_GUIDES.filter((g) => g.slug !== article.slug).slice(0, 4);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 space-y-10">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: t.nav.travelGuide, path: '/travel-guide' },
          { name: localize(article.title), path: `/travel-guide/${article.slug}` },
        ]}
      />

      <article className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_14px_40px_rgba(13,46,61,0.05)] p-6 sm:p-10 lg:p-12 space-y-8">
        <header className="space-y-4 border-b border-[#E6ECEF] pb-8">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="px-3.5 py-1.5 rounded-full bg-[#EDF6F6] text-[#0D2E3D] font-bold uppercase tracking-wider">
              {localize(article.categoryLabel)}
            </span>
            <span className="text-[#5B6B73] inline-flex items-center gap-1">
              <BookOpen className="w-3.5 h-3.5 text-[#F47732]" />
              {article.readingTimeMinutes}{' '}
              {locale === 'zh' ? '分钟阅读' : 'min read'}
            </span>
            <span className="text-[#5B6B73]">
              {t.common.lastReviewed}: {formatDate(article.lastReviewedDate)}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0D2E3D] leading-tight tracking-tight">
            {localize(article.title)}
          </h1>

          <p className="text-base sm:text-lg text-[#5B6B73] leading-relaxed">
            {localize(article.summary)}
          </p>
        </header>

        {/* Hero Image */}
        <div className="aspect-[16/9] w-full bg-[#EDF6F6] rounded-3xl border border-[#E6ECEF] overflow-hidden relative">
          <img
            src={article.heroImage.url}
            alt={localize(article.heroImage.alt)}
            className="w-full h-full object-cover"
          />
          {article.heroImage.credit && (
            <span className="absolute bottom-3 right-3 bg-[#071C26]/70 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full">
              {article.heroImage.credit}
            </span>
          )}
        </div>

        {/* Key Takeaways Box */}
        <div className="p-6 rounded-2xl bg-[#EDF6F6] border border-[#D4E8E8] space-y-3">
          <h2 className="text-xs font-bold uppercase tracking-widest text-[#F47732]">
            {locale === 'zh' ? '核心要点速览 (Key Takeaways)' : 'KEY VERIFIED TAKEAWAYS'}
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm text-[#0D2E3D]">
            {localizeList(article.keyTakeaways).map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#F47732] shrink-0 mt-0.5" />
                <span className="font-medium leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Article Sections */}
        <div className="space-y-8">
          {article.sections.map((sec, idx) => (
            <section key={idx} className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-bold text-[#0D2E3D]">
                {localize(sec.heading)}
              </h2>
              {sec.paragraphs.map((p, pIdx) => (
                <p
                  key={pIdx}
                  className="text-sm sm:text-base text-[#182226] leading-relaxed"
                >
                  {localize(p)}
                </p>
              ))}
              {sec.bulletPoints && (
                <ul className="list-disc list-inside space-y-2 text-sm text-[#182226] bg-[#F4F8FA] p-5 rounded-2xl border border-[#E6ECEF]">
                  {localizeList(sec.bulletPoints).map((bp) => (
                    <li key={bp} className="leading-relaxed">
                      {bp}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Official Reference Link if applicable */}
        {article.officialReferenceUrl && (
          <div className="p-5 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F47732] block">
                {locale === 'zh' ? '官方权威机构链接' : 'OFFICIAL AUTHORITY PORTAL'}
              </span>
              <span className="text-sm font-bold text-[#0D2E3D]">
                {localize(article.officialReferenceLabel)}
              </span>
            </div>
            <a
              href={article.officialReferenceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0D2E3D] text-white text-xs font-bold hover:bg-[#F47732] transition-colors"
            >
              <span>{article.officialReferenceUrl}</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        )}
      </article>

      {/* Related Briefings */}
      <section className="space-y-5">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#0D2E3D]">
            {locale === 'zh' ? '更多马尔代夫出行指南' : 'More Maldives Travel Briefings'}
          </h2>
          <Link
            href="/travel-guide"
            className="text-xs font-bold text-[#F47732] inline-flex items-center gap-1"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>{t.common.backToAll}</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {relatedArticles.map((rel) => (
            <Link
              key={rel.id}
              href={`/travel-guide/${rel.slug}`}
              className="p-5 rounded-2xl bg-white border border-[#E6ECEF] hover:border-[#F47732] hover:-translate-y-0.5 space-y-1 transition-all"
            >
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#F47732]">
                {localize(rel.categoryLabel)}
              </span>
              <h3 className="text-base font-bold text-[#0D2E3D]">{localize(rel.title)}</h3>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
