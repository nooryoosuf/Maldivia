'use client';

import React from 'react';
import { MapPin, Ship, Check, Plus, Info } from 'lucide-react';
import type { Destination, Guesthouse } from '@/types/domain';
import { useLanguage } from '@/context/LanguageContext';
import { useTripPlanner } from '@/context/TripPlannerContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { GuesthouseCard } from '@/components/GuesthouseCard';
import { EnquiryForm } from '@/components/EnquiryForm';

export function DestinationDetailClient({
  destination,
  guesthouses,
}: {
  destination: Destination;
  guesthouses: Guesthouse[];
}) {
  const { locale, t, localize, localizeList } = useLanguage();
  const { draft, toggleDestination } = useTripPlanner();

  const isSelected = draft.selectedDestinations.includes(destination.slug);
  const allPhotos = [destination.heroImage, ...destination.gallery];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 space-y-12">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: t.nav.destinations, path: '/destinations' },
          { name: localize(destination.name), path: `/destinations/${destination.slug}` },
        ]}
      />

      {/* Header */}
      <header className="border-b border-[#E6ECEF] pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F47732]">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF2EA]">
              <MapPin className="w-3.5 h-3.5" />
              {localize(destination.atollName)}
            </span>
            <span className="px-3 py-1 rounded-full bg-[#EDF6F6] text-[#0D2E3D]">
              {localize(destination.distanceFromAirport)}
            </span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0D2E3D] tracking-tight">
            {localize(destination.name)}
          </h1>
          <p className="text-base sm:text-lg text-[#5B6B73] leading-relaxed">
            {localize(destination.shortSummary)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => toggleDestination(destination.slug)}
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
            {locale === 'zh' ? '定制该岛行程' : 'Plan a Stay on This Island'}
          </a>
        </div>
      </header>

      {/* Gallery */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 aspect-[16/9] bg-[#EDF6F6] rounded-3xl border border-[#E6ECEF] overflow-hidden relative group">
          <img
            src={destination.heroImage.url}
            alt={localize(destination.heroImage.alt)}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          {destination.heroImage.credit && (
            <span className="absolute bottom-3 right-3 bg-[#071C26]/70 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full">
              {destination.heroImage.credit}
            </span>
          )}
        </div>
        <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
          {allPhotos.slice(1, 3).map((img, i) => (
            <div
              key={i}
              className="aspect-[16/9] bg-[#EDF6F6] rounded-3xl border border-[#E6ECEF] overflow-hidden group"
            >
              <img
                src={img.url}
                alt={localize(img.alt)}
                loading="lazy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8 space-y-8">
          {/* Editorial Island Profile */}
          <section className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-5">
            <h2 className="text-2xl font-bold text-[#0D2E3D]">
              {locale === 'zh' ? '海岛地理与人文风貌' : 'Island Profile & Geography'}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#182226] leading-relaxed">
              {destination.editorialDescription.map((para, idx) => (
                <p key={idx}>{localize(para)}</p>
              ))}
            </div>

            {/* Attractions */}
            <div className="pt-4 border-t border-[#E6ECEF] space-y-4">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#F47732]">
                {locale === 'zh' ? '核心地标与潜点' : 'Notable Island Landmarks & Reefs'}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {destination.attractions.map((attr, idx) => (
                  <div
                    key={idx}
                    className="p-5 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF] space-y-1.5"
                  >
                    <h4 className="font-bold text-[#0D2E3D] text-sm">
                      {localize(attr.title)}
                    </h4>
                    <p className="text-xs text-[#5B6B73] leading-relaxed">
                      {localize(attr.description)}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Transfer Options */}
          <section className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-5">
            <div className="flex items-center gap-2.5">
              <Ship className="w-6 h-6 text-[#F47732]" />
              <h2 className="text-2xl font-bold text-[#0D2E3D]">
                {locale === 'zh'
                  ? '如何从维拉纳国际机场 (MLE) 抵达本岛'
                  : 'Transfers from Velana International Airport (MLE)'}
              </h2>
            </div>

            <div className="space-y-4">
              {destination.transferOptions.map((tr, idx) => (
                <div
                  key={idx}
                  className="p-5 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF] space-y-1.5"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="font-bold text-[#0D2E3D] text-base">
                      {localize(tr.methodLabel)}
                    </span>
                    <span className="px-3.5 py-1 rounded-full bg-[#0D2E3D] text-white text-xs font-bold">
                      {localize(tr.duration)}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#182226]">
                    {localize(tr.frequencySummary)}
                  </p>
                  <p className="text-xs text-[#5B6B73]">
                    {locale === 'zh' ? '登船/乘机地点：' : 'Departure Point: '}
                    {localize(tr.departurePoint)}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Activities */}
          <section className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-4">
            <h2 className="text-2xl font-bold text-[#0D2E3D]">
              {locale === 'zh' ? '本岛精选出海与陆地活动' : 'Available Activities & Marine Excursions'}
            </h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {localizeList(destination.activities).map((act) => (
                <li
                  key={act}
                  className="p-4 rounded-2xl bg-[#EDF6F6]/80 border border-[#D4E8E8] text-xs sm:text-sm text-[#0D2E3D] font-medium flex items-start gap-2.5"
                >
                  <Check className="w-4 h-4 text-[#F47732] shrink-0 mt-0.5" />
                  <span>{act}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>

        {/* Right 4 Columns: Practical Visitor Information Dossier */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="bg-[#0D2E3D] rounded-3xl text-white p-6 space-y-4 shadow-[0_16px_44px_rgba(13,46,61,0.16)]">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47732]">
              {locale === 'zh' ? '海岛客观参数' : 'ISLAND SPECIFICATIONS'}
            </span>
            <h3 className="text-xl font-bold">{localize(destination.name)}</h3>
            <dl className="space-y-2.5 text-xs border-t border-white/15 pt-4">
              <div className="flex justify-between">
                <dt className="text-white/70">
                  {locale === 'zh' ? '行政环礁代码：' : 'Atoll Code:'}
                </dt>
                <dd className="font-semibold">{destination.administrativeAtoll}</dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/70">
                  {locale === 'zh' ? '地理经纬度：' : 'Coordinates:'}
                </dt>
                <dd className="font-mono">
                  {destination.coordinates.lat.toFixed(4)}°N,{' '}
                  {destination.coordinates.lng.toFixed(4)}°E
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-white/70">
                  {locale === 'zh' ? '岛屿尺寸：' : 'Dimensions:'}
                </dt>
                <dd className="font-semibold">{localize(destination.islandDimensions)}</dd>
              </div>
            </dl>
          </div>

          <div className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F47732]">
              <Info className="w-4 h-4" />
              <span>{locale === 'zh' ? '实用登岛贴士' : 'Essential Visitor Information'}</span>
            </div>

            <div className="space-y-3 text-xs">
              <div className="p-3.5 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF]">
                <strong className="text-[#0D2E3D] block mb-0.5">
                  {locale === 'zh' ? '比基尼海滩 (Bikini Beach):' : 'Bikini Beach:'}
                </strong>
                <span className="text-[#5B6B73]">
                  {localize(destination.visitorInformation.bikiniBeach)}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF]">
                <strong className="text-[#0D2E3D] block mb-0.5">
                  {locale === 'zh' ? '珊瑚房礁 (House Reef):' : 'House Reef:'}
                </strong>
                <span className="text-[#5B6B73]">
                  {localize(destination.visitorInformation.houseReef)}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF]">
                <strong className="text-[#0D2E3D] block mb-0.5">
                  {locale === 'zh' ? 'ATM取款机与支付:' : 'ATM & Currency:'}
                </strong>
                <span className="text-[#5B6B73]">
                  {localize(destination.visitorInformation.atmAndCurrency)}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF]">
                <strong className="text-[#0D2E3D] block mb-0.5">
                  {locale === 'zh' ? '医疗设施:' : 'Medical Facility:'}
                </strong>
                <span className="text-[#5B6B73]">
                  {localize(destination.visitorInformation.medicalFacility)}
                </span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#FFF2EA] border border-[#F47732]/30">
                <strong className="text-[#0D2E3D] block mb-0.5">
                  {locale === 'zh' ? '当地习俗提示:' : 'Local Etiquette:'}
                </strong>
                <span className="text-[#182226]">
                  {localize(destination.visitorInformation.localCultureNote)}
                </span>
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Verified Guesthouses on this Island */}
      {guesthouses.length > 0 && (
        <section className="pt-8 border-t border-[#E2DFD5] space-y-6">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47732]">
              {locale === 'zh' ? '本岛核实认证住宿' : 'VERIFIED ACCOMMODATION ON THIS ISLAND'}
            </span>
            <h2 className="text-2xl font-bold text-[#123B4A] mt-1">
              {locale === 'zh'
                ? `${localize(destination.name)} 精选民宿`
                : `Where to Stay on ${localize(destination.name)}`}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guesthouses.map((gh) => (
              <GuesthouseCard key={gh.id} guesthouse={gh} />
            ))}
          </div>
        </section>
      )}

      {/* Enquiry Form */}
      <section className="pt-8 border-t border-[#E2DFD5]">
        <EnquiryForm defaultPropertyOrIsland={destination.name.en} />
      </section>
    </div>
  );
}
