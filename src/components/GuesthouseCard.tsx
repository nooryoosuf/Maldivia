'use client';

import React from 'react';
import Link from 'next/link';
import { MapPin, Ship, Check, Plus, ArrowUpRight, Sparkles } from 'lucide-react';
import type { Guesthouse } from '@/types/domain';
import { useLanguage } from '@/context/LanguageContext';
import { useTripPlanner } from '@/context/TripPlannerContext';

export function GuesthouseCard({ guesthouse }: { guesthouse: Guesthouse }) {
  const { locale, t, localize } = useLanguage();
  const { draft, toggleGuesthouse } = useTripPlanner();

  const isSelected = draft.selectedGuesthouses.includes(guesthouse.slug);
  const primaryTransfer = guesthouse.locationAndTransfer.transferMethods[0];

  return (
    <article className="group bg-white rounded-3xl border border-[#E6ECEF] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_50px_rgba(13,46,61,0.08)] hover:border-[#D5E8E8]">
      {/* Clean Visual Header */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#EDF6F6]">
        <Link href={`/guesthouses/${guesthouse.slug}`} className="block w-full h-full">
          <img
            src={guesthouse.heroImage.url}
            alt={localize(guesthouse.heroImage.alt)}
            loading="lazy"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071C26]/70 via-transparent to-black/15" />
        </Link>

        {/* Top-left Island Badge */}
        <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md text-[#0D2E3D] px-3 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-[#F47732]" aria-hidden="true" />
          <span>{localize(guesthouse.islandName)}</span>
        </div>

        {/* Top-right Minimal Planner Icon Button */}
        <button
          type="button"
          onClick={() => toggleGuesthouse(guesthouse.slug)}
          title={isSelected ? t.common.addedToPlanner : t.common.addToPlanner}
          aria-label={isSelected ? t.common.addedToPlanner : t.common.addToPlanner}
          aria-pressed={isSelected}
          className={`absolute top-3.5 right-3.5 w-9 h-9 rounded-full inline-flex items-center justify-center transition-all cursor-pointer shadow-sm ${
            isSelected
              ? 'bg-[#F47732] text-white'
              : 'bg-white/95 backdrop-blur-md text-[#0D2E3D] hover:bg-[#F47732] hover:text-white'
          }`}
        >
          {isSelected ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </button>

        {/* Bottom-left Transfer Pill */}
        {primaryTransfer && (
          <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs pointer-events-none">
            <span className="inline-flex items-center gap-1.5 font-medium bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
              <Ship className="w-3.5 h-3.5 text-[#F47732]" aria-hidden="true" />
              {localize(primaryTransfer.duration)}
            </span>
            <span className="text-[11px] font-medium text-white/90 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full">
              {localize(guesthouse.propertyCategory)}
            </span>
          </div>
        )}
      </div>

      {/* Minimal, Scannable Card Body */}
      <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#F47732] mb-1">
            {localize(guesthouse.atollName)}
          </p>
          <h3 className="text-lg sm:text-xl font-bold text-[#0D2E3D] group-hover:text-[#F47732] transition-colors">
            <Link href={`/guesthouses/${guesthouse.slug}`} className="focus:outline-none">
              {guesthouse.officialName}
            </Link>
          </h3>
          <p className="text-xs text-[#5A6970] mt-1.5 line-clamp-2 leading-relaxed">
            {localize(guesthouse.localizedSubtitle)}
          </p>
        </div>

        <div className="pt-3.5 border-t border-[#E6ECEF] flex items-center justify-between">
          <span className="text-xs font-medium text-[#5A6970]">
            {guesthouse.roomTypes.length} {locale === 'zh' ? '种核实房型' : 'Room Categories'}
          </span>
          <Link
            href={`/guesthouses/${guesthouse.slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-[#0D2E3D] group-hover:text-[#F47732] transition-colors"
          >
            <span>{locale === 'zh' ? '查看详情' : 'Explore Stay'}</span>
            <ArrowUpRight className="w-4 h-4 text-[#F47732]" />
          </Link>
        </div>
      </div>
    </article>
  );
}
