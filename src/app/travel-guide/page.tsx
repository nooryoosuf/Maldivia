'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { BookOpen, ArrowUpRight, ShieldAlert, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { TRAVEL_GUIDES } from '@/data/travelGuides';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function TravelGuideDirectoryPage() {
  const { locale, t, localize, localizeList } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: locale === 'zh' ? '全部 11 篇专题' : 'All 11 Briefings' },
    {
      id: 'arrival-transfers',
      label: locale === 'zh' ? '机场入境与交通接驳' : 'Arrival & Transfers',
    },
    {
      id: 'practical-info',
      label: locale === 'zh' ? '货币支付与网络通讯' : 'Currency & Connectivity',
    },
    {
      id: 'culture-etiquette',
      label: locale === 'zh' ? '海岛习俗与比基尼海滩' : 'Customs & Dress Code',
    },
    {
      id: 'weather-safety',
      label: locale === 'zh' ? '气候季节与安全应急' : 'Weather & Safety',
    },
  ];

  const filtered =
    selectedCategory === 'all'
      ? TRAVEL_GUIDES
      : TRAVEL_GUIDES.filter((g) => g.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 space-y-12">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: t.nav.travelGuide, path: '/travel-guide' },
        ]}
      />

      {/* Header */}
      <ScrollReveal>
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2EA] text-[#F47732] text-xs font-bold tracking-wider uppercase">
            {locale === 'zh'
              ? '马尔代夫权威出行指南 · 11项核心专题'
              : 'MALDIVES EDITORIAL TRAVEL GUIDE · 11 FACT-CHECKED BRIEFINGS'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0D2E3D] tracking-tight">
            {locale === 'zh'
              ? '飞往马累前的实用准备与居民岛旅行百科'
              : 'Essential Briefings for Independent Maldives Travel'}
          </h1>
          <p className="text-sm sm:text-base text-[#5B6B73] max-w-3xl leading-relaxed">
            {locale === 'zh'
              ? '涵盖维拉纳国际机场（MLE）抵达流程、IMUGA 免费电子申报、中马免签规则、快艇与内陆航班、拉菲亚与2013版美元使用规范、居民岛风俗礼仪以及官方紧急救援号码。'
              : 'Accurate, regularly reviewed briefings covering Velana International Airport arrivals, IMUGA declarations, speedboat and domestic flight transfers, Rufiyaa & USD payments, local island etiquette, and emergency contacts.'}
          </p>
        </div>
      </ScrollReveal>

      {/* Quick Emergency & IMUGA Highlight Box */}
      <ScrollReveal delayMs={80}>
        <div className="bg-gradient-to-br from-[#071C26] via-[#0D2E3D] to-[#113C4F] rounded-3xl text-white p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-center shadow-[0_18px_50px_rgba(7,28,38,0.18)]">
          <div className="lg:col-span-8 space-y-2.5">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F47732]/20 text-xs font-bold uppercase tracking-wider text-[#F47732]">
              <ShieldAlert className="w-4 h-4" />
              <span>
                {locale === 'zh'
                  ? '入境前 96 小时必办事项提醒'
                  : 'MANDATORY PRE-ARRIVAL CHECKLIST'}
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold">
              {locale === 'zh'
                ? 'IMUGA 官方免费电子入境申报 & 30天免费免签/落地签'
                : 'Free 30-Day Tourist Visa on Arrival & Official IMUGA Declaration'}
            </h2>
            <p className="text-xs sm:text-sm text-white/75 leading-relaxed">
              {locale === 'zh'
                ? '所有旅客必须在抵达马累维拉纳国际机场（MLE）前96小时内通过马尔代夫移民局官方网站（imuga.immigration.gov.mv）免费填写电子入境卡。切勿向任何第三方钓鱼网站支付代填费。'
                : 'All travellers must submit the electronic Traveller Declaration via the official Maldives Immigration portal (imuga.immigration.gov.mv) within 96 hours before arrival. The official government form is 100% free.'}
            </p>
          </div>
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
            <Link
              href="/travel-guide/maldives-visa-and-imuga-entry-requirements"
              className="px-5 py-3.5 rounded-full bg-[#F47732] text-white text-xs font-bold text-center hover:bg-[#E06520] shadow-md transition-all"
            >
              {locale === 'zh' ? '阅读签证与 IMUGA 申报教程' : 'Read Visa & IMUGA Guide'}
            </Link>
            <Link
              href="/travel-guide/safety-medical-facilities-and-emergency-contacts"
              className="px-5 py-3.5 rounded-full bg-white/10 border border-white/20 text-white text-xs font-bold text-center hover:bg-white/20 transition-all"
            >
              {locale === 'zh' ? '查看官方应急电话名录' : 'Verified Emergency Numbers'}
            </Link>
          </div>
        </div>
      </ScrollReveal>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat.id}
            type="button"
            onClick={() => setSelectedCategory(cat.id)}
            className={`px-4 py-2.5 rounded-full text-xs font-bold border cursor-pointer transition-all ${
              selectedCategory === cat.id
                ? 'bg-[#0D2E3D] text-white border-[#0D2E3D] shadow-sm'
                : 'bg-white text-[#5B6B73] border-[#E6ECEF] hover:border-[#0D2E3D] hover:text-[#0D2E3D]'
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Articles Grid (Clean Visual Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.map((guide, idx) => (
          <ScrollReveal key={guide.id} delayMs={idx * 65}>
            <article className="h-full bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.05)] overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(13,46,61,0.12)] transition-all duration-500">
              <div>
                <Link href={`/travel-guide/${guide.slug}`} className="block aspect-[16/10] w-full overflow-hidden bg-[#EDF6F6] relative">
                  <img
                    src={guide.heroImage.url}
                    alt={localize(guide.heroImage.alt)}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-full bg-white/95 backdrop-blur-md text-[#0D2E3D] text-[11px] font-bold shadow-sm">
                    {localize(guide.categoryLabel)}
                  </span>
                </Link>

                <div className="p-5 sm:p-6 space-y-2">
                  <h2 className="text-lg font-bold text-[#0D2E3D] group-hover:text-[#F47732] transition-colors line-clamp-2">
                    <Link href={`/travel-guide/${guide.slug}`}>{localize(guide.title)}</Link>
                  </h2>
                  <p className="text-xs text-[#5B6B73] line-clamp-2 leading-relaxed">
                    {localize(guide.summary)}
                  </p>
                </div>
              </div>

              <div className="px-5 sm:px-6 py-4 border-t border-[#E6ECEF] flex items-center justify-between text-xs">
                <span className="text-[#5B6B73] inline-flex items-center gap-1">
                  <BookOpen className="w-3.5 h-3.5 text-[#F47732]" />
                  {guide.readingTimeMinutes} min
                </span>
                <Link
                  href={`/travel-guide/${guide.slug}`}
                  className="inline-flex items-center gap-1 font-bold text-[#0D2E3D] group-hover:text-[#F47732] transition-colors"
                >
                  <span>{t.common.readArticle}</span>
                  <ArrowUpRight className="w-4 h-4 text-[#F47732]" />
                </Link>
              </div>
            </article>
          </ScrollReveal>
        ))}
      </div>
    </div>
  );
}
