'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  MapPin,
  Ship,
  BedDouble,
  Utensils,
  Check,
  Plus,
  ExternalLink,
  Info,
  Compass,
  Phone,
  Mail,
} from 'lucide-react';
import type { Guesthouse } from '@/types/domain';
import { useLanguage } from '@/context/LanguageContext';
import { useTripPlanner } from '@/context/TripPlannerContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EnquiryForm } from '@/components/EnquiryForm';

export function GuesthouseDetailClient({ guesthouse }: { guesthouse: Guesthouse }) {
  const { locale, t, localize, localizeList } = useLanguage();
  const { draft, toggleGuesthouse } = useTripPlanner();
  const [activeTab, setActiveTab] = useState<'overview' | 'rooms' | 'transfers' | 'guestInfo'>(
    'overview'
  );

  const isSelected = draft.selectedGuesthouses.includes(guesthouse.slug);
  const allImages = [guesthouse.heroImage, ...guesthouse.gallery];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-8 sm:py-12 space-y-12">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: t.nav.guesthouses, path: '/guesthouses' },
          { name: guesthouse.officialName, path: `/guesthouses/${guesthouse.slug}` },
        ]}
      />

      {/* Property Header */}
      <header className="border-b border-[#E6ECEF] pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#F47732]">
            <span className="px-3 py-1 rounded-full bg-[#FFF2EA]">
              {localize(guesthouse.propertyCategory)}
            </span>
            <Link
              href={`/destinations/${guesthouse.destinationSlug}`}
              className="px-3 py-1 rounded-full bg-[#EDF6F6] text-[#0D2E3D] hover:bg-[#0D2E3D] hover:text-white transition-colors"
            >
              {localize(guesthouse.islandName)}, {localize(guesthouse.atollName)}
            </Link>
          </div>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0D2E3D] tracking-tight">
            {guesthouse.officialName}
          </h1>
          <p className="text-base sm:text-lg text-[#5B6B73]">
            {localize(guesthouse.localizedSubtitle)}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3 shrink-0">
          <button
            type="button"
            onClick={() => toggleGuesthouse(guesthouse.slug)}
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
            {t.common.enquireProperty}
          </a>
        </div>
      </header>

      {/* Editorial Image Gallery */}
      <section aria-label={locale === 'zh' ? '民宿实景与海岛图集' : 'Property & Island Gallery'}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
          <div className="lg:col-span-8 aspect-[16/10] bg-[#EDF6F6] rounded-3xl border border-[#E6ECEF] overflow-hidden relative group">
            <img
              src={guesthouse.heroImage.url}
              alt={localize(guesthouse.heroImage.alt)}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            {guesthouse.heroImage.credit && (
              <span className="absolute bottom-3 right-3 bg-[#071C26]/70 backdrop-blur-md text-white text-[10px] px-3 py-1 rounded-full">
                {guesthouse.heroImage.credit}
              </span>
            )}
          </div>
          <div className="lg:col-span-4 grid grid-cols-2 lg:grid-cols-1 gap-4">
            {allImages.slice(1, 3).map((img, i) => (
              <div
                key={i}
                className="aspect-[16/10] bg-[#EDF6F6] rounded-3xl border border-[#E6ECEF] overflow-hidden relative group"
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
      </section>

      {/* Section Navigation Tabs for Mobile & Desktop Scanning */}
      <div
        className="flex flex-wrap gap-2 bg-[#F4F8FA] p-1.5 rounded-2xl border border-[#E6ECEF] w-fit"
        role="tablist"
        aria-label="Property Dossier Sections"
      >
        {[
          {
            id: 'overview' as const,
            label: locale === 'zh' ? '01 · 民宿概览与设施' : '01 · Overview & Amenities',
          },
          {
            id: 'rooms' as const,
            label: locale === 'zh' ? '02 · 核实房型与配置' : '02 · Verified Room Categories',
          },
          {
            id: 'transfers' as const,
            label: locale === 'zh' ? '03 · 位置、海岛地图与交通' : '03 · Location & Transfers',
          },
          {
            id: 'guestInfo' as const,
            label: locale === 'zh' ? '04 · 餐饮、周边与入住须知' : '04 · Dining & Guest Info',
          },
        ].map((tab) => (
          <button
            key={tab.id}
            type="button"
            role="tab"
            aria-selected={activeTab === tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-4 py-2.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
              activeTab === tab.id
                ? 'bg-[#0D2E3D] text-white shadow-sm'
                : 'text-[#5B6B73] hover:text-[#0D2E3D]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Main Two-Column Content Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left 8 Columns: Detailed Verified Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* 1. Overview & Amenities */}
          <section id="section-overview" className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-6">
            <h2 className="text-2xl font-bold text-[#0D2E3D]">
              {locale === 'zh' ? '关于该民宿（已核实信息）' : 'Verified Property Overview'}
            </h2>
            <div className="space-y-4 text-sm sm:text-base text-[#182226] leading-relaxed">
              {guesthouse.editorialOverview.map((para, idx) => (
                <p key={idx}>{localize(para)}</p>
              ))}
            </div>

            <div className="pt-4 border-t border-[#E6ECEF]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#F47732] mb-4">
                {locale === 'zh' ? '核实亮点与物业设施' : 'Verified Property Amenities & Highlights'}
              </h3>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {localizeList(guesthouse.propertyAmenities).map((amenity) => (
                  <li
                    key={amenity}
                    className="flex items-start gap-2.5 text-xs sm:text-sm text-[#182226] bg-[#F4F8FA] p-3.5 rounded-2xl border border-[#E6ECEF]"
                  >
                    <Check className="w-4 h-4 text-[#F47732] shrink-0 mt-0.5" />
                    <span>{amenity}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>

          {/* 2. Verified Room Categories */}
          <section id="section-rooms" className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5">
              <BedDouble className="w-6 h-6 text-[#F47732]" />
              <h2 className="text-2xl font-bold text-[#0D2E3D]">
                {locale === 'zh' ? '核实房型与房内配置' : 'Verified Room Categories & Facilities'}
              </h2>
            </div>

            <div className="space-y-5">
              {guesthouse.roomTypes.map((room, idx) => (
                <div
                  key={idx}
                  className="p-5 sm:p-6 bg-[#F4F8FA] rounded-2xl border border-[#E6ECEF] space-y-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-2 border-b border-[#E6ECEF] pb-3">
                    <div>
                      <h3 className="text-lg font-bold text-[#0D2E3D]">
                        {localize(room.name)}
                      </h3>
                      {room.viewType && (
                        <p className="text-xs text-[#F47732] font-semibold mt-0.5">
                          {localize(room.viewType)}
                        </p>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-[#0D2E3D] bg-white px-3.5 py-1.5 rounded-full border border-[#E6ECEF]">
                      {localize(room.occupancy)}
                      {room.bedConfiguration ? ` · ${localize(room.bedConfiguration)}` : ''}
                    </div>
                  </div>

                  <p className="text-sm text-[#182226] leading-relaxed">
                    {localize(room.description)}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {localizeList(room.verifiedFacilities).map((fac) => (
                      <span
                        key={fac}
                        className="text-xs bg-white text-[#182226] px-3 py-1 rounded-full border border-[#E6ECEF]"
                      >
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* 3. Dining & Accessibility */}
          <section id="section-dining" className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5">
              <Utensils className="w-6 h-6 text-[#F47732]" />
              <h2 className="text-2xl font-bold text-[#0D2E3D]">
                {locale === 'zh' ? '餐饮服务与无障碍信息' : 'Dining & Accessibility Information'}
              </h2>
            </div>

            {guesthouse.diningInformation.restaurantName && (
              <p className="text-xs font-bold uppercase tracking-wider text-[#F47732]">
                {guesthouse.diningInformation.restaurantName}
              </p>
            )}
            <p className="text-sm sm:text-base text-[#182226] leading-relaxed">
              {localize(guesthouse.diningInformation.summary)}
            </p>
            <div className="p-4 rounded-2xl bg-[#EDF6F6] border border-[#D4E8E8] text-xs sm:text-sm text-[#0D2E3D]">
              <strong>
                {locale === 'zh' ? '清真与饮食说明：' : 'Dietary & Halal Note: '}
              </strong>
              {localize(guesthouse.diningInformation.dietaryAndHalalNote)}
            </div>

            <div className="pt-4 border-t border-[#E6ECEF]">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0D2E3D] mb-2">
                {locale === 'zh' ? '无障碍与行动便利说明' : 'Accessibility Information'}
              </h3>
              <p className="text-sm text-[#182226] leading-relaxed">
                {localize(guesthouse.accessibilityInformation)}
              </p>
            </div>
          </section>

          {/* 4. Location, Coordinates & Transfer Logistics */}
          <section id="section-transfers" className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5">
              <Ship className="w-6 h-6 text-[#F47732]" />
              <h2 className="text-2xl font-bold text-[#0D2E3D]">
                {locale === 'zh'
                  ? '地理位置、坐标与维拉纳机场接驳方案'
                  : 'Island Location, Map Coordinates & Airport Transfers'}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#182226] leading-relaxed">
              {localize(guesthouse.locationAndTransfer.islandLocationNote)}
            </p>

            {/* Coordinate & Atoll Map Box */}
            <div className="p-5 rounded-2xl bg-[#0D2E3D] text-white space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-2 text-xs text-white/80">
                <span className="font-bold uppercase tracking-wider text-[#F47732]">
                  {t.common.coordinates}
                </span>
                <span className="font-mono">
                  {guesthouse.coordinates.lat.toFixed(4)}° N,{' '}
                  {guesthouse.coordinates.lng.toFixed(4)}° E
                </span>
              </div>
              <p className="text-sm font-semibold">
                {guesthouse.officialContact.address}
              </p>
              <p className="text-xs text-white/75">
                {localize(guesthouse.locationAndTransfer.distanceFromAirport)}
              </p>
            </div>

            {/* Transfer Methods */}
            <div className="space-y-3">
              <h3 className="text-sm font-bold uppercase tracking-wider text-[#0D2E3D]">
                {locale === 'zh' ? '已核实交通方式' : 'Verified Transfer Methods'}
              </h3>
              {guesthouse.locationAndTransfer.transferMethods.map((tr, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF] space-y-1 text-xs sm:text-sm"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 font-bold text-[#0D2E3D]">
                    <span>{localize(tr.methodLabel)}</span>
                    <span className="text-[#F47732]">{localize(tr.duration)}</span>
                  </div>
                  <p className="text-[#182226]">{localize(tr.frequencySummary)}</p>
                  <p className="text-xs text-[#5B6B73]">
                    {locale === 'zh' ? '出发点：' : 'Departure Point: '}
                    {localize(tr.departurePoint)}
                  </p>
                </div>
              ))}
            </div>

            <p className="text-xs text-[#5B6B73] italic">
              {localize(guesthouse.locationAndTransfer.transferArrangementNote)}
            </p>
          </section>

          {/* 5. Nearby Attractions & Important Guest Information */}
          <section className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-6">
            <h2 className="text-xl font-bold text-[#0D2E3D]">
              {locale === 'zh' ? '周边海滩、潜点与重要入住须知' : 'Nearby Attractions & Important Guest Notes'}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {guesthouse.nearbyAttractions.map((attr, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF] space-y-1">
                  <p className="text-xs font-bold text-[#0D2E3D]">{localize(attr.name)}</p>
                  <p className="text-xs text-[#5B6B73]">{localize(attr.distanceOrNote)}</p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-[#FFF2EA] border border-[#F47732]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D2E3D]">
                <Info className="w-4 h-4 text-[#F47732]" />
                <span>
                  {locale === 'zh' ? '重要住客须知' : 'Important Guest Information'}
                </span>
              </div>
              <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-[#182226]">
                {localizeList(guesthouse.importantGuestInformation).map((info) => (
                  <li key={info}>{info}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>

        {/* Right 4 Columns: Sticky Verified Dossier Sidebar */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          <div className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_18px_48px_rgba(13,46,61,0.08)] p-6 space-y-5">
            <div className="border-b border-[#E6ECEF] pb-4">
              <span className="inline-block px-2.5 py-1 rounded-full bg-[#FFF2EA] text-[10px] font-bold uppercase tracking-widest text-[#F47732]">
                {t.common.verifiedFacts}
              </span>
              <h3 className="text-xl font-bold text-[#0D2E3D] mt-2">
                {guesthouse.officialName}
              </h3>
              <p className="text-xs text-[#5B6B73] mt-0.5">
                {guesthouse.officialContact.address}
              </p>
            </div>

            {/* Verified Official Contact Details */}
            <div className="space-y-2.5 text-xs">
              {guesthouse.officialContact.officialPhone && (
                <div className="flex items-center gap-2 text-[#182226]">
                  <Phone className="w-3.5 h-3.5 text-[#F47732]" />
                  <span className="font-medium">
                    {guesthouse.officialContact.officialPhone}
                  </span>
                </div>
              )}
              {guesthouse.officialContact.officialEmail && (
                <div className="flex items-center gap-2 text-[#182226]">
                  <Mail className="w-3.5 h-3.5 text-[#F47732]" />
                  <span className="font-medium">
                    {guesthouse.officialContact.officialEmail}
                  </span>
                </div>
              )}
              {guesthouse.officialContact.websiteUrl && (
                <div className="flex items-center gap-2 text-[#182226]">
                  <ExternalLink className="w-3.5 h-3.5 text-[#F47732]" />
                  <a
                    href={guesthouse.officialContact.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline text-[#0D2E3D] hover:text-[#F47732] font-medium"
                  >
                    {t.common.officialWebsite}
                  </a>
                </div>
              )}
            </div>

            <div className="p-4 rounded-2xl bg-[#EDF6F6] border border-[#D4E8E8] text-xs text-[#0D2E3D] space-y-1.5">
              <p className="font-bold">
                {locale === 'zh' ? '预订与询价方式：' : 'Booking & Quotation Method:'}
              </p>
              <p className="leading-relaxed">
                {localize(guesthouse.officialContact.bookingMethod)}
              </p>
            </div>

            <div className="text-[11px] text-[#5B6B73] leading-relaxed">
              {localize(guesthouse.officialContact.cancellationPolicyNote)}
            </div>

            <div className="space-y-2.5 pt-2">
              <a
                href="#enquiry-form"
                className="block w-full py-3.5 rounded-full text-center bg-[#F47732] text-white text-xs font-bold hover:bg-[#E06520] shadow-[0_6px_18px_rgba(244,119,50,0.28)] transition-all"
              >
                {t.common.enquireProperty}
              </a>
              <Link
                href={`/destinations/${guesthouse.destinationSlug}`}
                className="w-full py-3 rounded-full text-center bg-[#F4F8FA] border border-[#E6ECEF] text-[#0D2E3D] text-xs font-bold hover:border-[#0D2E3D] inline-flex items-center justify-center gap-1.5 transition-colors"
              >
                <Compass className="w-3.5 h-3.5 text-[#F47732]" />
                <span>
                  {locale === 'zh'
                    ? `查看 ${localize(guesthouse.islandName)} 目的地指南`
                    : `Explore ${localize(guesthouse.islandName)} Profile`}
                </span>
              </Link>
            </div>
          </div>
        </aside>
      </div>

      {/* Dedicated Property Enquiry Form */}
      <section className="pt-8 border-t border-[#E2DFD5]">
        <EnquiryForm
          defaultPropertyOrIsland={`${guesthouse.officialName} (${guesthouse.islandName.en})`}
        />
      </section>
    </div>
  );
}
