'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Clock, Check, AlertCircle, ShieldCheck, Plus } from 'lucide-react';
import type { Experience } from '@/types/domain';
import { DESTINATIONS } from '@/data/destinations';
import { useLanguage } from '@/context/LanguageContext';
import { useTripPlanner } from '@/context/TripPlannerContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EnquiryForm } from '@/components/EnquiryForm';

export function ExperienceDetailClient({ experience }: { experience: Experience }) {
  const { locale, t, localize, localizeList } = useLanguage();
  const { draft, toggleExperience } = useTripPlanner();

  const isSelected = draft.selectedExperiences.includes(experience.slug);
  const matchingDestinations = DESTINATIONS.filter((d) =>
    experience.relevantIslands.includes(d.slug)
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 space-y-12">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: t.nav.experiences, path: '/experiences' },
          { name: localize(experience.title), path: `/experiences/${experience.slug}` },
        ]}
      />

      <header className="border-b border-[#E6ECEF] pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF2EA] text-xs font-bold uppercase tracking-wider text-[#F47732]">
            <MapPin className="w-3.5 h-3.5" />
            <span>{localize(experience.relevantIslandsLabel)}</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0D2E3D] tracking-tight">
            {localize(experience.title)}
          </h1>
          <p className="text-base sm:text-lg text-[#5B6B73]">
            {localize(experience.subtitle)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => toggleExperience(experience.slug)}
            className={`px-5 py-3 rounded-full text-xs font-bold inline-flex items-center gap-2 border cursor-pointer transition-all ${
              isSelected
                ? 'bg-[#0D2E3D] text-white border-[#0D2E3D]'
                : 'bg-white text-[#0D2E3D] border-[#E6ECEF] hover:border-[#0D2E3D]'
            }`}
          >
            {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            <span>{isSelected ? t.common.addedToPlanner : t.common.addToPlanner}</span>
          </button>
          <a
            href="#enquiry-form"
            className="px-6 py-3 rounded-full bg-[#F47732] text-white text-xs font-bold hover:bg-[#E06520] shadow-[0_6px_20px_rgba(244,119,50,0.3)] transition-all"
          >
            {locale === 'zh' ? '咨询该项体验安排' : 'Enquire About This Experience'}
          </a>
        </div>
      </header>

      {/* Hero Photo */}
      <div className="aspect-[16/8] w-full bg-[#EDF6F6] rounded-3xl border border-[#E6ECEF] overflow-hidden relative">
        <img
          src={experience.heroImage.url}
          alt={localize(experience.heroImage.alt)}
          className="w-full h-full object-cover"
        />
        {experience.heroImage.credit && (
          <span className="absolute bottom-3 right-3 bg-[#071C26]/70 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full">
            {experience.heroImage.credit}
          </span>
        )}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 space-y-8">
          <section className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl font-bold text-[#0D2E3D]">
              {locale === 'zh' ? '体验详细介绍' : 'Experience Overview'}
            </h2>
            {experience.description.map((para, idx) => (
              <p key={idx} className="text-sm sm:text-base text-[#182226] leading-relaxed">
                {localize(para)}
              </p>
            ))}
          </section>

          <section className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-4">
            <h2 className="text-xl font-bold text-[#0D2E3D]">
              {locale === 'zh' ? '重要参与要求与安全须知' : 'Important Requirements & Safety Guidelines'}
            </h2>
            <ul className="space-y-2.5">
              {localizeList(experience.importantRequirements).map((req) => (
                <li
                  key={req}
                  className="p-4 rounded-2xl bg-[#FFF2EA] border border-[#F47732]/30 text-xs sm:text-sm text-[#182226] flex items-start gap-2.5"
                >
                  <AlertCircle className="w-4 h-4 text-[#F47732] shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
            <div className="p-4 rounded-2xl bg-[#EDF6F6] border border-[#D4E8E8] flex items-start gap-2.5 text-xs sm:text-sm text-[#0D2E3D]">
              <ShieldCheck className="w-5 h-5 text-[#F47732] shrink-0 mt-0.5" />
              <span>{localize(experience.sustainabilityAndSafetyNote)}</span>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_16px_44px_rgba(13,46,61,0.07)] p-6 space-y-4">
            <span className="inline-block px-3 py-1 rounded-full bg-[#FFF2EA] text-xs font-bold uppercase tracking-widest text-[#F47732]">
              {locale === 'zh' ? '核实活动要素' : 'VERIFIED ACTIVITY DETAILS'}
            </span>
            {experience.typicalDuration && (
              <div className="flex items-start gap-2.5 text-xs sm:text-sm">
                <Clock className="w-4 h-4 text-[#F47732] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#0D2E3D] block">
                    {locale === 'zh' ? '常规时长：' : 'Typical Duration:'}
                  </strong>
                  <span className="text-[#5B6B73]">{localize(experience.typicalDuration)}</span>
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-[#E6ECEF] space-y-2">
              <strong className="text-xs font-bold uppercase tracking-wider text-[#0D2E3D] block">
                {locale === 'zh' ? '常规包含项目：' : 'What is Typically Included:'}
              </strong>
              <ul className="space-y-1.5 text-xs text-[#182226]">
                {localizeList(experience.typicallyIncluded).map((inc) => (
                  <li key={inc} className="flex items-start gap-2">
                    <Check className="w-3.5 h-3.5 text-[#F47732] shrink-0 mt-0.5" />
                    <span>{inc}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-3 border-t border-[#E6ECEF] space-y-2">
              <strong className="text-xs font-bold uppercase tracking-wider text-[#0D2E3D] block">
                {locale === 'zh' ? '可开展该体验的居民岛：' : 'Relevant Inhabited Islands:'}
              </strong>
              <div className="flex flex-wrap gap-2">
                {matchingDestinations.map((dest) => (
                  <Link
                    key={dest.id}
                    href={`/destinations/${dest.slug}`}
                    className="px-3.5 py-1.5 rounded-full bg-[#EDF6F6] text-[#0D2E3D] hover:bg-[#F47732] hover:text-white text-xs font-semibold transition-colors"
                  >
                    {localize(dest.name)}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </aside>
      </div>

      <section className="pt-8 border-t border-[#E6ECEF]">
        <EnquiryForm />
      </section>
    </div>
  );
}
