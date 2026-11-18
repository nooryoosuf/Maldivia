'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ArrowUpRight, Compass } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GUESTHOUSES } from '@/data/guesthouses';
import { DESTINATIONS } from '@/data/destinations';
import { EXPERIENCES } from '@/data/experiences';
import { TRAVEL_GUIDES } from '@/data/travelGuides';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function SearchPage() {
  const { locale, t, localize } = useLanguage();
  const [query, setQuery] = useState('');

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      return {
        guesthouses: GUESTHOUSES,
        destinations: DESTINATIONS,
        experiences: EXPERIENCES,
        guides: TRAVEL_GUIDES,
      };
    }

    return {
      guesthouses: GUESTHOUSES.filter(
        (g) =>
          g.officialName.toLowerCase().includes(q) ||
          g.islandName.en.toLowerCase().includes(q) ||
          g.islandName.zh.toLowerCase().includes(q) ||
          g.conciseDescription.en.toLowerCase().includes(q) ||
          g.conciseDescription.zh.toLowerCase().includes(q)
      ),
      destinations: DESTINATIONS.filter(
        (d) =>
          d.name.en.toLowerCase().includes(q) ||
          d.name.zh.toLowerCase().includes(q) ||
          d.atollName.en.toLowerCase().includes(q) ||
          d.atollName.zh.toLowerCase().includes(q) ||
          d.shortSummary.en.toLowerCase().includes(q) ||
          d.shortSummary.zh.toLowerCase().includes(q)
      ),
      experiences: EXPERIENCES.filter(
        (e) =>
          e.title.en.toLowerCase().includes(q) ||
          e.title.zh.toLowerCase().includes(q) ||
          e.subtitle.en.toLowerCase().includes(q) ||
          e.subtitle.zh.toLowerCase().includes(q)
      ),
      guides: TRAVEL_GUIDES.filter(
        (tr) =>
          tr.title.en.toLowerCase().includes(q) ||
          tr.title.zh.toLowerCase().includes(q) ||
          tr.summary.en.toLowerCase().includes(q) ||
          tr.summary.zh.toLowerCase().includes(q)
      ),
    };
  }, [query]);

  const totalMatches =
    results.guesthouses.length +
    results.destinations.length +
    results.experiences.length +
    results.guides.length;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 space-y-10">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: locale === 'zh' ? '全站搜索' : 'Search Directory', path: '/search' },
        ]}
      />

      <div className="space-y-4">
        <h1 className="text-3xl sm:text-4xl font-bold text-[#123B4A]">
          {locale === 'zh'
            ? '搜索马尔代夫居民岛、民宿、体验与出行指南'
            : 'Search Islands, Guesthouses, Experiences & Travel Guides'}
        </h1>

        <div className="relative">
          <Search className="w-5 h-5 text-[#F47732] absolute left-4 top-1/2 -translate-y-1/2" />
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.common.searchPlaceholder}
            aria-label={t.common.searchPlaceholder}
            className="w-full pl-12 pr-4 py-4 bg-white border-2 border-[#123B4A] text-base text-[#252B2D] focus:border-[#F47732]"
          />
        </div>
      </div>

      {totalMatches === 0 ? (
        <div className="bg-white border border-[#E2DFD5] p-12 text-center space-y-4">
          <Compass className="w-8 h-8 text-[#F47732] mx-auto" />
          <h2 className="text-xl font-bold text-[#123B4A]">
            {locale === 'zh'
              ? `未找到与 “${query}” 匹配的内容`
              : `No verified records matched "${query}"`}
          </h2>
          <p className="text-sm text-[#525B5E] max-w-md mx-auto">
            {locale === 'zh'
              ? '请尝试搜索岛屿名称（如 Maafushi、Dhigurah、Thoddoo）、动物（如鲸鲨、海龟）或签证（IMUGA）。'
              : 'Try searching for an island (Maafushi, Dhigurah, Thoddoo), marine life (whale shark, sea turtle, manta), or entry topic (IMUGA, USD, speedboat).'}
          </p>
          <button
            type="button"
            onClick={() => setQuery('')}
            className="px-5 py-2.5 bg-[#F47732] text-white text-xs font-bold uppercase tracking-wider cursor-pointer"
          >
            {locale === 'zh' ? '查看全部目录' : 'Show Complete Directory'}
          </button>
        </div>
      ) : (
        <div className="space-y-10">
          {/* Guesthouses */}
          {results.guesthouses.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg font-bold uppercase tracking-wider text-[#123B4A] border-b border-[#E2DFD5] pb-2">
                {t.nav.guesthouses} ({results.guesthouses.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {results.guesthouses.map((gh) => (
                  <Link
                    key={gh.id}
                    href={`/guesthouses/${gh.slug}`}
                    className="p-5 bg-white border border-[#E2DFD5] hover:border-[#F47732] space-y-1 transition-colors"
                  >
                    <span className="text-xs font-bold text-[#F47732]">
                      {localize(gh.islandName)}
                    </span>
                    <h3 className="font-bold text-[#123B4A] flex items-center justify-between">
                      <span>{gh.officialName}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#F47732]" />
                    </h3>
                    <p className="text-xs text-[#525B5E] line-clamp-2">
                      {localize(gh.conciseDescription)}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Destinations */}
          {results.destinations.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg font-bold uppercase tracking-wider text-[#123B4A] border-b border-[#E2DFD5] pb-2">
                {t.nav.destinations} ({results.destinations.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {results.destinations.map((dest) => (
                  <Link
                    key={dest.id}
                    href={`/destinations/${dest.slug}`}
                    className="p-5 bg-white border border-[#E2DFD5] hover:border-[#F47732] space-y-1 transition-colors"
                  >
                    <span className="text-xs font-bold text-[#F47732]">
                      {localize(dest.atollName)}
                    </span>
                    <h3 className="font-bold text-[#123B4A] flex items-center justify-between">
                      <span>{localize(dest.name)}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#F47732]" />
                    </h3>
                    <p className="text-xs text-[#525B5E] line-clamp-2">
                      {localize(dest.shortSummary)}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Experiences */}
          {results.experiences.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg font-bold uppercase tracking-wider text-[#123B4A] border-b border-[#E2DFD5] pb-2">
                {t.nav.experiences} ({results.experiences.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {results.experiences.map((exp) => (
                  <Link
                    key={exp.id}
                    href={`/experiences/${exp.slug}`}
                    className="p-4 bg-white border border-[#E2DFD5] hover:border-[#F47732] space-y-1 transition-colors"
                  >
                    <h3 className="font-bold text-sm text-[#123B4A]">
                      {localize(exp.title)}
                    </h3>
                    <p className="text-xs text-[#525B5E]">{localize(exp.subtitle)}</p>
                  </Link>
                ))}
              </div>
            </section>
          )}

          {/* Travel Guides */}
          {results.guides.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-lg font-bold uppercase tracking-wider text-[#123B4A] border-b border-[#E2DFD5] pb-2">
                {t.nav.travelGuide} ({results.guides.length})
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {results.guides.map((guide) => (
                  <Link
                    key={guide.id}
                    href={`/travel-guide/${guide.slug}`}
                    className="p-4 bg-white border border-[#E2DFD5] hover:border-[#F47732] space-y-1 transition-colors"
                  >
                    <span className="text-[11px] font-bold uppercase text-[#F47732]">
                      {localize(guide.categoryLabel)}
                    </span>
                    <h3 className="font-bold text-sm text-[#123B4A]">
                      {localize(guide.title)}
                    </h3>
                    <p className="text-xs text-[#525B5E] line-clamp-2">
                      {localize(guide.summary)}
                    </p>
                  </Link>
                ))}
              </div>
            </section>
          )}
        </div>
      )}
    </div>
  );
}
