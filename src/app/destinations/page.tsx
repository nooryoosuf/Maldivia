'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { MapPin, Ship, ArrowUpRight, RotateCcw } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { ATOLLS, DESTINATIONS } from '@/data/destinations';
import { GUESTHOUSES } from '@/data/guesthouses';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { InteractiveMaldivesMap } from '@/components/InteractiveMaldivesMap';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function DestinationsPage() {
  const { locale, t, localize, localizeList } = useLanguage();
  const [selectedAtollId, setSelectedAtollId] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS.filter((dest) => {
      if (selectedAtollId !== 'all' && dest.atollId !== selectedAtollId) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName =
          dest.name.en.toLowerCase().includes(q) || dest.name.zh.toLowerCase().includes(q);
        const matchAtoll =
          dest.atollName.en.toLowerCase().includes(q) ||
          dest.atollName.zh.toLowerCase().includes(q);
        const matchSummary =
          dest.shortSummary.en.toLowerCase().includes(q) ||
          dest.shortSummary.zh.toLowerCase().includes(q);
        if (!matchName && !matchAtoll && !matchSummary) {
          return false;
        }
      }
      return true;
    });
  }, [selectedAtollId, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 space-y-14">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: t.nav.destinations, path: '/destinations' },
        ]}
      />

      {/* Page Header */}
      <ScrollReveal>
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2EA] text-[#F47732] text-xs font-bold tracking-wider uppercase">
            {locale === 'zh'
              ? '马尔代夫群岛与居民岛探索'
              : 'MALDIVES ARCHIPELAGO & LOCAL ISLAND DIRECTORY'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0D2E3D] tracking-tight">
            {locale === 'zh'
              ? '探索五大环礁与六座特色马尔代夫居民岛'
              : 'Inhabited Islands & Atolls of the Maldives'}
          </h1>
          <p className="text-sm sm:text-base text-[#5B6B73] max-w-3xl leading-relaxed">
            {locale === 'zh'
              ? '从距离马累维拉纳国际机场仅30分钟快艇航程的卡夫环礁马富士岛，到全年栖息野生鲸鲨的南阿里环礁迪古拉岛，再到赤道附近的南部拉姆甘岛——按环礁地貌、房礁生态与交通航线规划您的目的地。'
              : 'Explore verified island profiles across Kaafu, South Ari, North Ari, Vaavu, and Laamu Atolls—complete with accurate geographic coordinates, airport transfer durations, house reef profiles, and resident guesthouses.'}
          </p>
        </div>
      </ScrollReveal>

      {/* Interactive Archipelago Map */}
      <ScrollReveal delayMs={80}>
        <InteractiveMaldivesMap initialSelectedSlug="maafushi" />
      </ScrollReveal>

      {/* Atoll Profiles Section */}
      <section className="space-y-6">
        <ScrollReveal>
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F47732]">
              {locale === 'zh' ? '环礁概览' : 'ATOLL GEOGRAPHY'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0D2E3D] mt-1">
              {locale === 'zh' ? '五大核心马尔代夫环礁档案' : 'Five Maldivian Atolls Compared'}
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ATOLLS.map((atoll, idx) => (
            <ScrollReveal key={atoll.id} delayMs={idx * 65}>
              <div className="h-full bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 flex flex-col justify-between space-y-4 hover:-translate-y-1 transition-all">
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="px-3 py-1 rounded-full bg-[#FFF2EA] font-bold uppercase tracking-wider text-[#F47732]">
                      {atoll.administrativeCode}
                    </span>
                    <span className="text-[#5B6B73] font-medium">{atoll.distanceFromMaleKm}</span>
                  </div>
                  <h3 className="text-lg font-bold text-[#0D2E3D]">
                    {localize(atoll.officialName)}
                  </h3>
                  <p className="text-xs text-[#5B6B73] line-clamp-2 leading-relaxed">
                    {localize(atoll.description)}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#E6ECEF]">
                  <button
                    type="button"
                    onClick={() =>
                      setSelectedAtollId((prev) => (prev === atoll.id ? 'all' : atoll.id))
                    }
                    className={`text-xs font-bold cursor-pointer transition-colors ${
                      selectedAtollId === atoll.id
                        ? 'text-[#F47732]'
                        : 'text-[#0D2E3D] hover:text-[#F47732]'
                    }`}
                  >
                    {selectedAtollId === atoll.id
                      ? locale === 'zh'
                        ? '✓ 已筛选该环礁（点击取消）'
                        : '✓ Filtering by this Atoll'
                      : locale === 'zh'
                      ? '筛选该环礁下的居民岛 →'
                      : 'Filter Islands →'}
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Search & Atoll Filter Bar */}
      <div className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.05)] p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
        <div className="md:col-span-6">
          <label
            htmlFor="dest-search"
            className="block text-xs font-semibold text-[#0D2E3D] mb-1.5"
          >
            {locale === 'zh' ? '搜索居民岛、环礁或海洋生物' : 'Search Islands, Atolls, or Marine Life'}
          </label>
          <input
            id="dest-search"
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder={
              locale === 'zh'
                ? '例如：Dhigurah, 鲸鲨, 海龟, 托杜...'
                : 'e.g. Dhigurah, whale shark, sea turtle, Thoddoo...'
            }
            className="w-full px-4 py-3 text-sm rounded-xl bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:bg-white focus:border-[#0D2E3D] outline-none"
          />
        </div>
        <div className="md:col-span-5">
          <label
            htmlFor="dest-atoll-select"
            className="block text-xs font-semibold text-[#0D2E3D] mb-1.5"
          >
            {locale === 'zh' ? '按环礁筛选' : 'Filter by Atoll'}
          </label>
          <select
            id="dest-atoll-select"
            value={selectedAtollId}
            onChange={(e) => setSelectedAtollId(e.target.value)}
            className="w-full px-4 py-3 text-sm rounded-xl bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:bg-white focus:border-[#0D2E3D] outline-none"
          >
            <option value="all">
              {locale === 'zh' ? '全部 5 大环礁' : 'All 5 Maldivian Atolls'}
            </option>
            {ATOLLS.map((a) => (
              <option key={a.id} value={a.id}>
                {localize(a.officialName)}
              </option>
            ))}
          </select>
        </div>
        <div className="md:col-span-1">
          <button
            type="button"
            onClick={() => {
              setSelectedAtollId('all');
              setSearchQuery('');
            }}
            className="w-full h-[46px] rounded-xl inline-flex items-center justify-center bg-[#EDF6F6] text-[#0D2E3D] hover:bg-[#F47732] hover:text-white transition-colors cursor-pointer"
            title="Reset"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Filtered Destinations Grid (Clean Visual Cards) */}
      {filteredDestinations.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredDestinations.map((dest, idx) => {
            const islandGuesthouses = GUESTHOUSES.filter(
              (gh) => gh.destinationSlug === dest.slug
            );
            return (
              <ScrollReveal key={dest.id} delayMs={idx * 70}>
                <article className="h-full bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.05)] overflow-hidden flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-[0_24px_56px_rgba(13,46,61,0.12)] transition-all duration-500">
                  <div className="aspect-[4/3] w-full overflow-hidden bg-[#EDF6F6] relative">
                    <Link href={`/destinations/${dest.slug}`} className="block w-full h-full">
                      <img
                        src={dest.heroImage.url}
                        alt={localize(dest.heroImage.alt)}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#071C26]/70 via-transparent to-black/10" />
                    </Link>
                    <div className="absolute top-3.5 left-3.5 bg-white/95 backdrop-blur-md text-[#0D2E3D] px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                      {localize(dest.atollName)}
                    </div>
                    <div className="absolute bottom-3.5 left-3.5 right-3.5 flex items-center justify-between text-white text-xs pointer-events-none">
                      <span className="inline-flex items-center gap-1.5 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full font-medium">
                        <Ship className="w-3.5 h-3.5 text-[#F47732]" />
                        {localize(dest.transferOptions[0]?.duration)}
                      </span>
                      <span className="font-mono text-[11px] bg-black/50 backdrop-blur-md px-2.5 py-1 rounded-full">
                        {dest.coordinates.lat.toFixed(2)}°N
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-6 flex flex-col justify-between flex-1 gap-4">
                    <div>
                      <h2 className="text-xl font-bold text-[#0D2E3D] group-hover:text-[#F47732] transition-colors">
                        <Link href={`/destinations/${dest.slug}`}>{localize(dest.name)}</Link>
                      </h2>
                      <p className="text-xs text-[#5B6B73] line-clamp-2 mt-1.5 leading-relaxed">
                        {localize(dest.shortSummary)}
                      </p>
                    </div>

                    <div className="pt-3.5 border-t border-[#E6ECEF] flex items-center justify-between text-xs">
                      {islandGuesthouses.length > 0 ? (
                        <Link
                          href={`/guesthouses/${islandGuesthouses[0].slug}`}
                          className="text-[#5B6B73] hover:text-[#F47732] truncate max-w-[160px]"
                        >
                          {islandGuesthouses[0].officialName}
                        </Link>
                      ) : (
                        <span />
                      )}
                      <Link
                        href={`/destinations/${dest.slug}`}
                        className="inline-flex items-center gap-1 font-bold text-[#0D2E3D] group-hover:text-[#F47732] transition-colors shrink-0"
                      >
                        <span>{t.common.exploreDestination}</span>
                        <ArrowUpRight className="w-4 h-4 text-[#F47732]" />
                      </Link>
                    </div>
                  </div>
                </article>
              </ScrollReveal>
            );
          })}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-[#E6ECEF] p-12 text-center space-y-4">
          <h3 className="text-xl font-bold text-[#0D2E3D]">
            {locale === 'zh'
              ? '未找到匹配的马尔代夫居民岛'
              : 'No islands match your search query'}
          </h3>
          <button
            type="button"
            onClick={() => {
              setSelectedAtollId('all');
              setSearchQuery('');
            }}
            className="px-6 py-3 rounded-full bg-[#F47732] text-white text-xs font-bold cursor-pointer"
          >
            {locale === 'zh' ? '显示全部6座居民岛' : 'Show All 6 Islands'}
          </button>
        </div>
      )}
    </div>
  );
}
