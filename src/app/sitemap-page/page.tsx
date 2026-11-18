'use client';

import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { GUESTHOUSES } from '@/data/guesthouses';
import { DESTINATIONS } from '@/data/destinations';
import { EXPERIENCES } from '@/data/experiences';
import { TRAVEL_GUIDES } from '@/data/travelGuides';
import { POLICY_DOCUMENTS } from '@/data/policies';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export default function HtmlSitemapPage() {
  const { locale, t, localize } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 space-y-12">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: t.footer.sitemap, path: '/sitemap-page' },
        ]}
      />

      <div className="border-b border-[#E2DFD5] pb-6 space-y-2">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F47732]">
          COMPLETE PLATFORM INDEX · 网站完整地图
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#123B4A]">
          {t.footer.sitemap}
        </h1>
        <p className="text-sm text-[#525B5E]">
          {locale === 'zh'
            ? '本页汇总了全站所有主要导航页面、6家核实认证民宿、6座居民岛指南、8项海岛体验、11篇出行专题及10项法律条款页面。同时提供搜索引擎专用的动态 XML Sitemap (/sitemap.xml)。'
            : 'Complete directory of all main pages, six verified guesthouse dossiers, six island destination guides, eight experience profiles, eleven travel briefings, and ten legal/policy pages.'}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Core Pages */}
        <section className="bg-white border border-[#E2DFD5] p-6 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#F47732]">
            {t.footer.navigation}
          </h2>
          <ul className="space-y-2 text-sm">
            <li><Link href="/" className="hover:text-[#F47732] font-medium">{t.nav.home}</Link></li>
            <li><Link href="/guesthouses" className="hover:text-[#F47732] font-medium">{t.nav.guesthouses}</Link></li>
            <li><Link href="/destinations" className="hover:text-[#F47732] font-medium">{t.nav.destinations}</Link></li>
            <li><Link href="/experiences" className="hover:text-[#F47732] font-medium">{t.nav.experiences}</Link></li>
            <li><Link href="/travel-guide" className="hover:text-[#F47732] font-medium">{t.nav.travelGuide}</Link></li>
            <li><Link href="/trip-planner" className="hover:text-[#F47732] font-medium">{t.nav.tripPlanner}</Link></li>
            <li><Link href="/about" className="hover:text-[#F47732] font-medium">{t.nav.aboutUs}</Link></li>
            <li><Link href="/contact" className="hover:text-[#F47732] font-medium">{t.nav.contact}</Link></li>
            <li><Link href="/search" className="hover:text-[#F47732] font-medium">Search / 搜索</Link></li>
            <li><a href="/sitemap.xml" className="hover:text-[#F47732] font-mono text-xs">XML Sitemap (/sitemap.xml)</a></li>
          </ul>
        </section>

        {/* 6 Verified Guesthouses */}
        <section className="bg-white border border-[#E2DFD5] p-6 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#F47732]">
            {t.footer.verifiedGuesthouses} (6)
          </h2>
          <ul className="space-y-2 text-sm">
            {GUESTHOUSES.map((gh) => (
              <li key={gh.id}>
                <Link href={`/guesthouses/${gh.slug}`} className="hover:text-[#F47732] font-medium">
                  {gh.officialName} — {localize(gh.islandName)}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* 6 Island Destinations */}
        <section className="bg-white border border-[#E2DFD5] p-6 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#F47732]">
            {t.footer.islandDestinations} (6)
          </h2>
          <ul className="space-y-2 text-sm">
            {DESTINATIONS.map((dest) => (
              <li key={dest.id}>
                <Link href={`/destinations/${dest.slug}`} className="hover:text-[#F47732] font-medium">
                  {localize(dest.name)} ({localize(dest.atollName)})
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* 8 Experiences */}
        <section className="bg-white border border-[#E2DFD5] p-6 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#F47732]">
            {t.nav.experiences} (8)
          </h2>
          <ul className="space-y-2 text-sm">
            {EXPERIENCES.map((exp) => (
              <li key={exp.id}>
                <Link href={`/experiences/${exp.slug}`} className="hover:text-[#F47732] font-medium">
                  {localize(exp.title)}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* 11 Travel Guide Briefings */}
        <section className="bg-white border border-[#E2DFD5] p-6 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#F47732]">
            {t.nav.travelGuide} (11)
          </h2>
          <ul className="space-y-2 text-xs sm:text-sm">
            {TRAVEL_GUIDES.map((guide) => (
              <li key={guide.id}>
                <Link href={`/travel-guide/${guide.slug}`} className="hover:text-[#F47732] font-medium">
                  {localize(guide.title)}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        {/* 10 Legal & Policy Pages */}
        <section className="bg-white border border-[#E2DFD5] p-6 space-y-3">
          <h2 className="text-sm font-bold uppercase tracking-wider text-[#F47732]">
            {t.footer.legalAndPolicies} (10)
          </h2>
          <ul className="space-y-2 text-sm">
            {POLICY_DOCUMENTS.map((doc) => (
              <li key={doc.slug}>
                <Link href={`/policies/${doc.slug}`} className="hover:text-[#F47732] font-medium">
                  {localize(doc.title)}
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
