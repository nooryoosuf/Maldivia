'use client';

import React from 'react';
import Link from 'next/link';
import {
  Compass,
  Calendar,
  Users,
  Check,
  Trash2,
  MapPin,
  Ship,
  ShieldAlert,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTripPlanner } from '@/context/TripPlannerContext';
import { DESTINATIONS } from '@/data/destinations';
import { GUESTHOUSES } from '@/data/guesthouses';
import { EXPERIENCES } from '@/data/experiences';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EnquiryForm } from '@/components/EnquiryForm';

export default function TripPlannerPage() {
  const { locale, t, localize } = useLanguage();
  const {
    draft,
    updateDraft,
    toggleDestination,
    toggleGuesthouse,
    toggleExperience,
    clearDraft,
    totalSelectedCount,
  } = useTripPlanner();

  const calculateNights = (): number | null => {
    if (!draft.arrivalDate || !draft.departureDate) return null;
    const start = new Date(draft.arrivalDate);
    const end = new Date(draft.departureDate);
    const diff = Math.round((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
    return diff > 0 ? diff : null;
  };

  const nights = calculateNights();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 space-y-12">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: t.nav.tripPlanner, path: '/trip-planner' },
        ]}
      />

      {/* Header */}
      <div className="border-b border-[#E6ECEF] pb-8 flex flex-col lg:flex-row lg:items-end justify-between gap-6">
        <div className="space-y-3 max-w-3xl">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2EA] text-[#F47732] text-xs font-bold tracking-wider uppercase">
            {locale === 'zh'
              ? '结构化行程规划器 · 实时房态与快艇衔接询价'
              : 'STRUCTURED MALDIVES ITINERARY BUILDER'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0D2E3D] tracking-tight">
            {locale === 'zh' ? '规划您的马尔代夫居民岛行程' : 'Plan Your Maldives Island Journey'}
          </h1>
          <p className="text-sm sm:text-base text-[#5B6B73] leading-relaxed">
            {locale === 'zh'
              ? '按步骤选择您的计划出行日期、同行人数、心仪居民岛、认证民宿与出海体验。完成后可直接将您的行程方案提交给我们的顾问团队，以核实实时房态与机场快艇班次。'
              : 'Select your travel dates, party size, preferred islands, verified guesthouses, and marine excursions below, then submit your itinerary to receive a verified quotation.'}
          </p>
        </div>

        {totalSelectedCount > 0 && (
          <button
            type="button"
            onClick={clearDraft}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold border border-[#E6ECEF] bg-white text-[#5B6B73] hover:text-[#F47732] hover:border-[#F47732] transition-colors cursor-pointer shrink-0"
          >
            <Trash2 className="w-3.5 h-3.5" />
            <span>{locale === 'zh' ? '清空规划单' : 'Clear Itinerary Draft'}</span>
          </button>
        )}
      </div>

      {/* Transparency Notice */}
      <div className="p-5 rounded-2xl bg-[#EDF6F6] border border-[#D4E8E8] flex items-start gap-3.5 text-xs sm:text-sm text-[#0D2E3D]">
        <ShieldAlert className="w-5 h-5 text-[#F47732] shrink-0 mt-0.5" />
        <p className="leading-relaxed">
          {locale === 'zh'
            ? '透明声明：本行程规划器用于帮助您自由组合目的地与民宿并生成定制询价单，并非自动生成的虚假即时订单。我们会在收到您的行程草案后，人工核对国际航班抵达马累（MLE）的时间与各岛定期快艇/内陆航班时刻表，确保您的跨岛方案100%可行。'
            : 'Transparency Notice: Building an itinerary below prepares a structured quotation request—it is not an automated reservation. Every submission is reviewed against live room inventory and scheduled speedboat or domestic flight timetables from Velana International Airport (MLE).'}
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left 8 Columns: Step-by-Step Builder */}
        <div className="lg:col-span-8 space-y-8">
          {/* STEP 1: Dates & Guests */}
          <section className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5 border-b border-[#E6ECEF] pb-4">
              <Calendar className="w-5 h-5 text-[#F47732]" />
              <h2 className="text-xl font-bold text-[#0D2E3D]">
                {locale === 'zh'
                  ? '第一步：选择出行日期与同行人数'
                  : 'Step 1 · Travel Dates & Guests'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label
                  htmlFor="planner-arrival"
                  className="block text-xs font-semibold text-[#0D2E3D] mb-1.5"
                >
                  {locale === 'zh' ? '抵达马累日期' : 'Arrival Date'}
                </label>
                <input
                  id="planner-arrival"
                  type="date"
                  value={draft.arrivalDate}
                  onChange={(e) => updateDraft({ arrivalDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#F4F8FA] border border-[#E6ECEF] outline-none focus:border-[#0D2E3D]"
                />
              </div>
              <div>
                <label
                  htmlFor="planner-departure"
                  className="block text-xs font-semibold text-[#0D2E3D] mb-1.5"
                >
                  {locale === 'zh' ? '离开马累日期' : 'Departure Date'}
                </label>
                <input
                  id="planner-departure"
                  type="date"
                  value={draft.departureDate}
                  onChange={(e) => updateDraft({ departureDate: e.target.value })}
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#F4F8FA] border border-[#E6ECEF] outline-none focus:border-[#0D2E3D]"
                />
              </div>
              <div>
                <label
                  htmlFor="planner-adults"
                  className="block text-xs font-semibold text-[#0D2E3D] mb-1.5"
                >
                  <Users className="w-3.5 h-3.5 inline mr-1 text-[#F47732]" />
                  {locale === 'zh' ? '成人数量' : 'Adults'}
                </label>
                <input
                  id="planner-adults"
                  type="number"
                  min={1}
                  max={20}
                  value={draft.adults}
                  onChange={(e) =>
                    updateDraft({ adults: Math.max(1, Number(e.target.value)) })
                  }
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#F4F8FA] border border-[#E6ECEF] outline-none focus:border-[#0D2E3D]"
                />
              </div>
              <div>
                <label
                  htmlFor="planner-children"
                  className="block text-xs font-semibold text-[#0D2E3D] mb-1.5"
                >
                  {locale === 'zh' ? '儿童数量' : 'Children'}
                </label>
                <input
                  id="planner-children"
                  type="number"
                  min={0}
                  max={20}
                  value={draft.children}
                  onChange={(e) =>
                    updateDraft({ children: Math.max(0, Number(e.target.value)) })
                  }
                  className="w-full px-3.5 py-2.5 text-sm rounded-xl bg-[#F4F8FA] border border-[#E6ECEF] outline-none focus:border-[#0D2E3D]"
                />
              </div>
            </div>
          </section>

          {/* STEP 2: Choose Destinations */}
          <section className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5 border-b border-[#E6ECEF] pb-4">
              <MapPin className="w-5 h-5 text-[#F47732]" />
              <h2 className="text-xl font-bold text-[#0D2E3D]">
                {locale === 'zh'
                  ? '第二步：选择心仪的马尔代夫居民岛（可单岛或多岛联游）'
                  : 'Step 2 · Select Inhabited Islands'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {DESTINATIONS.map((dest) => {
                const selected = draft.selectedDestinations.includes(dest.slug);
                return (
                  <button
                    key={dest.id}
                    type="button"
                    onClick={() => toggleDestination(dest.slug)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      selected
                        ? 'bg-[#EDF6F6] border-[#0D2E3D] shadow-sm'
                        : 'bg-[#F4F8FA] border-[#E6ECEF] hover:border-[#0D2E3D]/40'
                    }`}
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F47732] block">
                        {localize(dest.atollName)}
                      </span>
                      <p className="font-bold text-[#0D2E3D] text-sm">
                        {localize(dest.name)}
                      </p>
                      <p className="text-xs text-[#5B6B73]">
                        {localize(dest.transferOptions[0]?.methodLabel)}:{' '}
                        {localize(dest.transferOptions[0]?.duration)}
                      </p>
                    </div>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                        selected
                          ? 'bg-[#F47732] border-[#F47732] text-white'
                          : 'bg-white border-[#E6ECEF]'
                      }`}
                    >
                      {selected && <Check className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* STEP 3: Select Verified Guesthouses */}
          <section className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5 border-b border-[#E6ECEF] pb-4">
              <Ship className="w-5 h-5 text-[#F47732]" />
              <h2 className="text-xl font-bold text-[#0D2E3D]">
                {locale === 'zh'
                  ? '第三步：选择认证民宿'
                  : 'Step 3 · Choose Verified Guesthouses'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {GUESTHOUSES.map((gh) => {
                const selected = draft.selectedGuesthouses.includes(gh.slug);
                return (
                  <button
                    key={gh.id}
                    type="button"
                    onClick={() => toggleGuesthouse(gh.slug)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-start justify-between gap-3 ${
                      selected
                        ? 'bg-[#EDF6F6] border-[#0D2E3D] shadow-sm'
                        : 'bg-[#F4F8FA] border-[#E6ECEF] hover:border-[#0D2E3D]/40'
                    }`}
                  >
                    <div className="space-y-1">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-[#F47732] block">
                        {localize(gh.islandName)}
                      </span>
                      <p className="font-bold text-[#0D2E3D] text-sm">{gh.officialName}</p>
                      <p className="text-xs text-[#5B6B73] line-clamp-2">
                        {localize(gh.localizedSubtitle)}
                      </p>
                    </div>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                        selected
                          ? 'bg-[#F47732] border-[#F47732] text-white'
                          : 'bg-white border-[#E6ECEF]'
                      }`}
                    >
                      {selected && <Check className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>

          {/* STEP 4: Choose Experiences */}
          <section className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-6">
            <div className="flex items-center gap-2.5 border-b border-[#E6ECEF] pb-4">
              <Compass className="w-5 h-5 text-[#F47732]" />
              <h2 className="text-xl font-bold text-[#0D2E3D]">
                {locale === 'zh'
                  ? '第四步：勾选感兴趣的海洋与海岛体验'
                  : 'Step 4 · Select Marine & Island Experiences'}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {EXPERIENCES.map((exp) => {
                const selected = draft.selectedExperiences.includes(exp.slug);
                return (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => toggleExperience(exp.slug)}
                    className={`p-4 rounded-2xl text-left border transition-all cursor-pointer flex items-center justify-between gap-3 ${
                      selected
                        ? 'bg-[#EDF6F6] border-[#0D2E3D] shadow-sm'
                        : 'bg-[#F4F8FA] border-[#E6ECEF] hover:border-[#0D2E3D]/40'
                    }`}
                  >
                    <div>
                      <p className="font-bold text-[#0D2E3D] text-xs sm:text-sm">
                        {localize(exp.title)}
                      </p>
                      <p className="text-[11px] text-[#5B6B73]">
                        {localize(exp.relevantIslandsLabel)}
                      </p>
                    </div>
                    <span
                      className={`w-6 h-6 rounded-full flex items-center justify-center shrink-0 border transition-colors ${
                        selected
                          ? 'bg-[#F47732] border-[#F47732] text-white'
                          : 'bg-white border-[#E6ECEF]'
                      }`}
                    >
                      {selected && <Check className="w-3.5 h-3.5" />}
                    </span>
                  </button>
                );
              })}
            </div>
          </section>
        </div>

        {/* Right 4 Columns: Live Itinerary Summary Dossier */}
        <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-28">
          <div className="bg-[#0D2E3D] rounded-3xl text-white p-6 space-y-5 shadow-[0_18px_50px_rgba(13,46,61,0.18)]">
            <div className="border-b border-white/15 pb-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F47732]">
                {locale === 'zh' ? '您的行程草案汇总' : 'YOUR ITINERARY SUMMARY'}
              </span>
              <h3 className="text-xl font-bold mt-1">
                {nights
                  ? locale === 'zh'
                    ? `${nights} 晚马尔代夫海岛行程`
                    : `${nights}-Night Maldives Journey`
                  : locale === 'zh'
                  ? '待选择出行日期'
                  : 'Dates to be selected'}
              </h3>
              <p className="text-xs text-white/75 mt-1">
                {draft.adults} {locale === 'zh' ? '成人' : 'Adults'}
                {draft.children > 0
                  ? ` · ${draft.children} ${locale === 'zh' ? '儿童' : 'Children'}`
                  : ''}
              </p>
            </div>

            {/* Selected Islands */}
            <div className="space-y-2 text-xs">
              <p className="font-bold uppercase tracking-wider text-[#F47732]">
                {locale === 'zh' ? '已选居民岛' : 'Selected Islands'} (
                {draft.selectedDestinations.length})
              </p>
              {draft.selectedDestinations.length > 0 ? (
                <ul className="space-y-1">
                  {draft.selectedDestinations.map((slug) => {
                    const d = DESTINATIONS.find((item) => item.slug === slug);
                    return (
                      <li key={slug} className="text-white/90">
                        • {d ? localize(d.name) : slug}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-white/50 italic">
                  {locale === 'zh' ? '尚未选择居民岛' : 'No islands selected yet'}
                </p>
              )}
            </div>

            {/* Selected Guesthouses */}
            <div className="space-y-2 text-xs border-t border-white/15 pt-3">
              <p className="font-bold uppercase tracking-wider text-[#F47732]">
                {locale === 'zh' ? '已选认证民宿' : 'Selected Guesthouses'} (
                {draft.selectedGuesthouses.length})
              </p>
              {draft.selectedGuesthouses.length > 0 ? (
                <ul className="space-y-1">
                  {draft.selectedGuesthouses.map((slug) => {
                    const g = GUESTHOUSES.find((item) => item.slug === slug);
                    return (
                      <li key={slug} className="text-white/90">
                        • {g ? g.officialName : slug}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-white/50 italic">
                  {locale === 'zh' ? '尚未选择民宿' : 'No guesthouses selected yet'}
                </p>
              )}
            </div>

            {/* Selected Experiences */}
            <div className="space-y-2 text-xs border-t border-white/15 pt-3">
              <p className="font-bold uppercase tracking-wider text-[#F47732]">
                {locale === 'zh' ? '已选海岛体验' : 'Selected Experiences'} (
                {draft.selectedExperiences.length})
              </p>
              {draft.selectedExperiences.length > 0 ? (
                <ul className="space-y-1">
                  {draft.selectedExperiences.map((slug) => {
                    const e = EXPERIENCES.find((item) => item.slug === slug);
                    return (
                      <li key={slug} className="text-white/90">
                        • {e ? localize(e.title) : slug}
                      </li>
                    );
                  })}
                </ul>
              ) : (
                <p className="text-white/50 italic">
                  {locale === 'zh' ? '尚未选择体验项目' : 'No experiences selected yet'}
                </p>
              )}
            </div>

            <div className="pt-3 border-t border-white/15">
              <a
                href="#enquiry-form"
                className="block w-full py-3.5 rounded-full text-center bg-[#F47732] text-white text-xs font-bold hover:bg-[#E06520] shadow-md transition-all"
              >
                {locale === 'zh'
                  ? '提交该行程方案获取核实报价 ↓'
                  : 'Submit Itinerary for Quotation ↓'}
              </a>
            </div>
          </div>

          <div className="p-5 rounded-3xl bg-white border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] text-xs text-[#5B6B73] space-y-2">
            <p className="font-bold text-[#0D2E3D]">
              {locale === 'zh' ? '关于价格与汇率的说明：' : 'Note on Pricing & Currency:'}
            </p>
            <p className="leading-relaxed">
              {locale === 'zh'
                ? '马尔代夫民宿价格按季节（12月–4月旺季、5月–11月平季）、房型及餐标浮动。收到您的询价单后，我们将提供美元（USD）及按实时汇率折算的人民币（CNY）参考明细。'
                : 'Room rates vary by season, occupancy, and meal plan. Your formal quotation will include exact USD pricing (and CNY reference conversion upon request) with all Maldivian taxes itemised.'}
            </p>
            <Link
              href="/travel-guide/currency-payments-atms-and-taxes-in-maldives"
              className="text-[#F47732] font-semibold hover:underline block"
            >
              {locale === 'zh' ? '查看马尔代夫税费说明 →' : 'Read Maldivian Tax Guide →'}
            </Link>
          </div>
        </aside>
      </div>

      {/* Submit Itinerary via Enquiry Form */}
      <section className="pt-8 border-t border-[#E2DFD5]">
        <EnquiryForm />
      </section>
    </div>
  );
}
