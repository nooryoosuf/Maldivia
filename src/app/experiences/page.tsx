'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { ArrowUpRight, Check, Plus, Clock, MapPin } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTripPlanner } from '@/context/TripPlannerContext';
import { EXPERIENCES } from '@/data/experiences';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EnquiryForm } from '@/components/EnquiryForm';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function ExperiencesPage() {
  const { locale, t, localize, localizeList } = useLanguage();
  const { draft, toggleExperience } = useTripPlanner();
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: locale === 'zh' ? '全部 8 项体验' : 'All 8 Experiences' },
    { id: 'snorkelling', label: locale === 'zh' ? '珊瑚礁浮潜' : 'Snorkelling' },
    { id: 'scuba-diving', label: locale === 'zh' ? '水肺深潜与鲸鲨' : 'Scuba Diving' },
    { id: 'sandbank', label: locale === 'zh' ? '无人拖尾沙洲' : 'Sandbanks' },
    { id: 'dolphin-cruise', label: locale === 'zh' ? '飞旋海豚巡航' : 'Dolphin Cruises' },
    { id: 'sunset-fishing', label: locale === 'zh' ? '多尼船日落海钓' : 'Sunset Fishing' },
    { id: 'island-hopping', label: locale === 'zh' ? '环礁跳岛游' : 'Island Hopping' },
    { id: 'cultural', label: locale === 'zh' ? '海岛人文与果园' : 'Island Culture' },
    { id: 'beach-relaxation', label: locale === 'zh' ? '比基尼白沙滩' : 'Beach Relaxation' },
  ];

  const filtered =
    selectedCategory === 'all'
      ? EXPERIENCES
      : EXPERIENCES.filter((e) => e.category === selectedCategory);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 space-y-12">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: t.nav.experiences, path: '/experiences' },
        ]}
      />

      {/* Header */}
      <ScrollReveal>
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2EA] text-[#F47732] text-xs font-bold tracking-wider uppercase">
            {locale === 'zh'
              ? '印度洋海洋与海岛体验目录'
              : 'CURATED INDIAN OCEAN & ATOLL EXPERIENCES'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0D2E3D] tracking-tight">
            {locale === 'zh'
              ? '八项纯正的马尔代夫海洋与海岛文化体验'
              : 'Authentic Maldives Marine & Island Experiences'}
          </h1>
          <p className="text-sm sm:text-base text-[#5B6B73] max-w-3xl leading-relaxed">
            {locale === 'zh'
              ? '所有出海与陆地活动均由各居民岛持牌潜水中心与认证民宿船队执行。我们严格遵循马尔代夫海洋保护规范，仅展示经核实的活动内容、适用岛屿与安全要求，绝不虚构排期或报价。'
              : 'Every excursion is operated by licensed island dive centres and experienced local dhoni captains. Below you will find verified operational details, relevant islands, inclusions, and safety requirements.'}
          </p>
        </div>
      </ScrollReveal>

      {/* Category Filter Pills */}
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

      {/* Experiences Grid (Clean Visual Cards) */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filtered.map((exp, idx) => {
          const isSelected = draft.selectedExperiences.includes(exp.slug);
          return (
            <ScrollReveal key={exp.id} delayMs={idx * 65}>
              <article className="h-full bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.05)] overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(13,46,61,0.12)] transition-all duration-500">
                <div className="aspect-[4/3] w-full overflow-hidden bg-[#EDF6F6] relative">
                  <Link href={`/experiences/${exp.slug}`} className="block w-full h-full">
                    <img
                      src={exp.heroImage.url}
                      alt={localize(exp.heroImage.alt)}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#071C26]/70 via-transparent to-black/10" />
                  </Link>
                  <button
                    type="button"
                    onClick={() => toggleExperience(exp.slug)}
                    title={isSelected ? t.common.addedToPlanner : t.common.addToPlanner}
                    className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-full inline-flex items-center justify-center shadow-md cursor-pointer transition-all ${
                      isSelected
                        ? 'bg-[#F47732] text-white'
                        : 'bg-white/95 backdrop-blur-md text-[#0D2E3D] hover:bg-[#F47732] hover:text-white'
                    }`}
                  >
                    {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </button>

                  {exp.typicalDuration && (
                    <div className="absolute bottom-3.5 left-3.5 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium inline-flex items-center gap-1.5 pointer-events-none">
                      <Clock className="w-3.5 h-3.5 text-[#F47732]" />
                      {localize(exp.typicalDuration)}
                    </div>
                  )}
                </div>

                <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
                  <div>
                    <span className="text-[11px] font-bold text-[#F47732] inline-flex items-center gap-1 mb-1">
                      <MapPin className="w-3 h-3" />
                      {localize(exp.relevantIslandsLabel)}
                    </span>
                    <h2 className="text-lg sm:text-xl font-bold text-[#0D2E3D] group-hover:text-[#F47732] transition-colors">
                      <Link href={`/experiences/${exp.slug}`}>{localize(exp.title)}</Link>
                    </h2>
                    <p className="text-xs text-[#5B6B73] line-clamp-2 mt-1.5 leading-relaxed">
                      {localize(exp.subtitle)}
                    </p>
                  </div>

                  <div className="pt-3.5 border-t border-[#E6ECEF] flex items-center justify-between text-xs">
                    <span className="text-[#5B6B73]">
                      {exp.typicallyIncluded.en.length} {locale === 'zh' ? '项包含服务' : 'Inclusions'}
                    </span>
                    <Link
                      href={`/experiences/${exp.slug}`}
                      className="inline-flex items-center gap-1 font-bold text-[#0D2E3D] group-hover:text-[#F47732] transition-colors"
                    >
                      <span>{locale === 'zh' ? '查看详情' : 'View Details'}</span>
                      <ArrowUpRight className="w-4 h-4 text-[#F47732]" />
                    </Link>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          );
        })}
      </div>

      <section className="pt-8 border-t border-[#E6ECEF]">
        <EnquiryForm />
      </section>
    </div>
  );
}
