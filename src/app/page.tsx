'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import {
  ArrowUpRight,
  Compass,
  MapPin,
  Ship,
  ShieldCheck,
  Clock,
  BookOpen,
  Languages,
  Anchor,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Check,
  Plus,
  Plane,
  Waves,
  Play,
  Pause,
} from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTripPlanner } from '@/context/TripPlannerContext';
import { DESTINATIONS } from '@/data/destinations';
import { GUESTHOUSES } from '@/data/guesthouses';
import { EXPERIENCES } from '@/data/experiences';
import { TRAVEL_GUIDES } from '@/data/travelGuides';
import { GuesthouseCard } from '@/components/GuesthouseCard';
import { InteractiveMaldivesMap } from '@/components/InteractiveMaldivesMap';
import { EnquiryForm } from '@/components/EnquiryForm';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function HomePage() {
  const router = useRouter();
  const { locale, t, localize, localizeList } = useLanguage();
  const { draft, toggleExperience } = useTripPlanner();

  // 1. HERO SLIDING CATALOGUE STATE
  const [activeSlideIndex, setActiveSlideIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const heroCatalogSlides = [
    {
      destination: DESTINATIONS[1], // Dhigurah
      guesthouse: GUESTHOUSES[1], // Bliss Dhigurah
      badge: {
        en: 'SOUTH ARI MARINE PROTECTED AREA · 365-DAY WHALE SHARKS',
        zh: '南阿里海洋保护区 · 全年偶遇野生鲸鲨',
      },
      headline: {
        en: 'Swim Beside Wild Whale Sharks Along Dhigurah’s 3 km Ribbon Reef.',
        zh: '在迪古拉岛3公里原始白沙滩与南阿里保护区，邂逅全年栖息的野生鲸鲨。',
      },
    },
    {
      destination: DESTINATIONS[0], // Maafushi
      guesthouse: GUESTHOUSES[0], // Kaani Palm Beach
      badge: {
        en: 'KAAFU ATOLL · 30 MIN DIRECT SPEEDBOAT FROM VELANA AIRPORT',
        zh: '卡夫环礁 · 距马累维拉纳国际机场仅30分钟快艇',
      },
      headline: {
        en: 'Step Off Your Plane at Malé and Onto Maafushi Bikini Beach in 30 Minutes.',
        zh: '下飞机后乘快艇30分钟直达马富士岛，饱览屋顶无边泳池与印度洋落日。',
      },
    },
    {
      destination: DESTINATIONS[3], // Thoddoo
      guesthouse: GUESTHOUSES[3], // Karaa Village
      badge: {
        en: 'NORTH ARI ATOLL · SEA TURTLE HOUSE REEF & FRUIT PLANTATIONS',
        zh: '北阿里环礁 · 岸潜海龟房礁与热带西瓜果园骑行',
      },
      headline: {
        en: 'Cycle Through Tropical Fruit Farms to Thoddoo’s Sea Turtle Lagoon.',
        zh: '骑单车穿越绿意盎然的热带西瓜果园，从沙滩直接游入野生海龟栖息的房礁。',
      },
    },
    {
      destination: DESTINATIONS[2], // Fulidhoo
      guesthouse: GUESTHOUSES[2], // Kinan Retreat
      badge: {
        en: 'VAAVU ATOLL · CAR-FREE CORAL VILLAGE & SHORELINE STINGRAYS',
        zh: '瓦武环礁 · 无车静谧珊瑚岛与岸边野生黄貂鱼',
      },
      headline: {
        en: 'Unwind on Car-Free Fulidhoo Where Wild Stingrays Glide to the Shore.',
        zh: '在瓦武环礁无车原生态的富力杜岛慢享时光，看野生黄貂鱼每日游至岸边浅滩。',
      },
    },
    {
      destination: DESTINATIONS[4], // Ukulhas
      guesthouse: GUESTHOUSES[4], // Coral Reef View Inn
      badge: {
        en: 'NORTH ARI ATOLL · ECO-MODEL ISLAND & 1 KM CRESCENT REEF',
        zh: '北阿里环礁 · 国家级环保模范岛与1公里岸潜海滩',
      },
      headline: {
        en: 'Snorkel Directly Off Ukulhas’ 1-Kilometre Crescent Bikini Beach.',
        zh: '漫步乌库拉斯岛1公里新月形比基尼白沙滩，出门数步即可探索珊瑚花园与蝠鲼清洁站。',
      },
    },
    {
      destination: DESTINATIONS[5], // Laamu Gan
      guesthouse: GUESTHOUSES[5], // Reveries Diving Village
      badge: {
        en: 'LAAMU ATOLL · 18 KM CAUSEWAY & UNTOUCHED SOUTHERN CHANNELS',
        zh: '南部拉姆环礁 · 18公里跨海连岛公路与免快艇直达',
      },
      headline: {
        en: 'Journey Two Degrees North of the Equator to Untouched Laamu Gan.',
        zh: '飞往赤道以北两度的南部拉姆甘岛，内陆航班落地后沿18公里跨海大桥专车直达。',
      },
    },
  ];

  const nextSlide = useCallback(() => {
    setActiveSlideIndex((prev) => (prev + 1) % heroCatalogSlides.length);
  }, [heroCatalogSlides.length]);

  const prevSlide = useCallback(() => {
    setActiveSlideIndex(
      (prev) => (prev - 1 + heroCatalogSlides.length) % heroCatalogSlides.length
    );
  }, [heroCatalogSlides.length]);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, nextSlide]);

  const currentSlide = heroCatalogSlides[activeSlideIndex];

  // Quick Bar State
  const [quickIsland, setQuickIsland] = useState<string>('dhigurah');
  const [quickExperience, setQuickExperience] = useState<string>(
    'padi-scuba-diving-whale-sharks-mantas'
  );

  // 2. EXPANDABLE ACCORDION ISLAND STATE (Section B)
  const [expandedIslandSlug, setExpandedIslandSlug] = useState<string>('dhigurah');

  // 3. GUESTHOUSE FILTER PILL STATE (Section C)
  const [ghFilter, setGhFilter] = useState<
    'all' | 'fast-transfer' | 'megafauna' | 'shore-reef'
  >('all');

  const filteredGuesthouses = GUESTHOUSES.filter((gh) => {
    if (ghFilter === 'fast-transfer') {
      return gh.slug === 'kaani-palm-beach-maafushi' || gh.slug === 'kinan-retreat-fulidhoo';
    }
    if (ghFilter === 'megafauna') {
      return (
        gh.slug === 'bliss-dhigurah' ||
        gh.slug === 'coral-reef-view-inn-ukulhas' ||
        gh.slug === 'reveries-diving-village-laamu-gan'
      );
    }
    if (ghFilter === 'shore-reef') {
      return (
        gh.slug === 'karaa-village-thoddoo' ||
        gh.slug === 'coral-reef-view-inn-ukulhas' ||
        gh.slug === 'bliss-dhigurah'
      );
    }
    return true;
  });

  // 4. INTERACTIVE SPLIT-SCREEN EXPERIENCE STAGE STATE (Section D)
  const [activeExpIndex, setActiveExpIndex] = useState<number>(1); // Default to Scuba & Whale Sharks
  const activeExp = EXPERIENCES[activeExpIndex] || EXPERIENCES[0];

  // 5. TRAVEL GUIDE PILL TAB STATE (Section F)
  const [guideCat, setGuideCat] = useState<string>('all');
  const displayedGuides =
    guideCat === 'all'
      ? TRAVEL_GUIDES.slice(0, 6)
      : TRAVEL_GUIDES.filter((g) => g.category === guideCat);

  const handleQuickExplore = (e: React.FormEvent) => {
    e.preventDefault();
    if (quickIsland) {
      router.push(`/destinations/${quickIsland}`);
    }
  };

  return (
    <div className="space-y-24 sm:space-y-32 pb-12">
      {/* =====================================================================
          SECTION A: FLUID SLIDING CATALOGUE HERO (ROUNDED 3XL SHOWCASE)
         ===================================================================== */}
      <section className="px-3 sm:px-6 lg:px-8 pt-3">
        <div
          className="relative rounded-[2.25rem] overflow-hidden bg-[#071C26] text-white min-h-[86vh] flex flex-col justify-between shadow-[0_24px_70px_rgba(7,28,38,0.18)]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          {/* Cross-fading Background Slides with Ken Burns Fluid Motion */}
          {heroCatalogSlides.map((slide, idx) => {
            const isCurrent = idx === activeSlideIndex;
            return (
              <div
                key={slide.destination.id}
                className={`absolute inset-0 transition-opacity duration-1000 ease-out ${
                  isCurrent ? 'opacity-100 z-0' : 'opacity-0 z-0 pointer-events-none'
                }`}
                aria-hidden={!isCurrent}
              >
                <img
                  src={slide.destination.heroImage.url}
                  alt={localize(slide.destination.heroImage.alt)}
                  className={`w-full h-full object-cover object-center ${
                    isCurrent ? 'animate-ken-burns' : ''
                  }`}
                />
                {/* Clean, breathable gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#071C26]/90 via-[#071C26]/55 to-[#071C26]/25" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C26]/95 via-transparent to-[#071C26]/25" />
              </div>
            );
          })}

          {/* Top Bar Inside Hero: Slide Counter & Coordinates */}
          <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 pt-8 flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/12 backdrop-blur-xl border border-white/20 text-xs font-bold tracking-wider text-white">
              <span className="w-2 h-2 rounded-full bg-[#F47732] animate-pulse" />
              <span>{localize(currentSlide.badge)}</span>
            </div>

            <div className="hidden sm:flex items-center gap-3 bg-black/35 backdrop-blur-xl px-4 py-1.5 rounded-full border border-white/15 text-xs font-mono text-[#EAF3F2]">
              <MapPin className="w-3.5 h-3.5 text-[#F47732]" />
              <span>
                {currentSlide.destination.coordinates.lat.toFixed(4)}° N,{' '}
                {currentSlide.destination.coordinates.lng.toFixed(4)}° E
              </span>
            </div>
          </div>

          {/* Center Grid: Editorial Story (Left) + Sliding Catalogue Cards (Right) */}
          <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 py-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
            {/* Left 7 Columns: Dynamic Island Headline & Actions */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-widest text-[#F47732]">
                <span>0{activeSlideIndex + 1} / 06</span>
                <span className="w-8 h-[1px] bg-[#F47732]" />
                <span>{localize(currentSlide.destination.atollName)}</span>
              </div>

              <h1
                key={`title-${activeSlideIndex}`}
                className="text-3xl sm:text-5xl lg:text-[3.35rem] font-extrabold text-white tracking-tight leading-[1.12] transition-all duration-500"
              >
                {localize(currentSlide.headline)}
              </h1>

              {/* Featured Property & Transfer Pill on Current Slide */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <Link
                  href={`/guesthouses/${currentSlide.guesthouse.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/12 hover:bg-white/20 backdrop-blur-xl border border-white/20 text-xs transition-all"
                >
                  <span className="text-[#F47732] font-bold">
                    {locale === 'zh' ? '推荐民宿：' : 'Featured Stay:'}
                  </span>
                  <span className="font-bold text-white">
                    {currentSlide.guesthouse.officialName}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#F47732]" />
                </Link>

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-black/35 backdrop-blur-xl border border-white/15 text-xs text-[#EAF3F2]">
                  <Ship className="w-3.5 h-3.5 text-[#F47732]" />
                  <strong className="text-white">
                    {localize(currentSlide.destination.transferOptions[0]?.duration)}
                  </strong>
                </div>
              </div>

              {/* Hero CTA Pills */}
              <div className="flex flex-wrap items-center gap-3.5 pt-2">
                <Link
                  href={`/destinations/${currentSlide.destination.slug}`}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full bg-[#F47732] hover:bg-[#E0631E] text-white text-xs sm:text-sm font-bold shadow-[0_8px_25px_rgba(244,119,50,0.4)] transition-all"
                >
                  <span>
                    {locale === 'zh'
                      ? `探索 ${localize(currentSlide.destination.name)}`
                      : `Explore ${localize(currentSlide.destination.name)}`}
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </Link>

                <Link
                  href="/trip-planner"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white/15 hover:bg-white hover:text-[#0D2E3D] backdrop-blur-xl border border-white/30 text-white text-xs sm:text-sm font-bold transition-all"
                >
                  <Compass className="w-4 h-4" />
                  <span>{t.hero.primaryCta}</span>
                </Link>
              </div>
            </div>

            {/* Right 5 Columns: Interactive Sliding Catalogue Deck */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold uppercase tracking-wider text-white/80">
                  {locale === 'zh'
                    ? '滑动目录 · 6座精选马尔代夫居民岛'
                    : 'SLIDING ISLAND CATALOGUE (6)'}
                </span>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setIsAutoPlaying((prev) => !prev)}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                    aria-label={isAutoPlaying ? 'Pause slideshow' : 'Play slideshow'}
                  >
                    {isAutoPlaying ? (
                      <Pause className="w-3.5 h-3.5" />
                    ) : (
                      <Play className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    type="button"
                    onClick={prevSlide}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                    aria-label="Previous island slide"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={nextSlide}
                    className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/25 backdrop-blur-md border border-white/20 flex items-center justify-center text-white cursor-pointer transition-colors"
                    aria-label="Next island slide"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Sliding Catalogue Cards Rail */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {heroCatalogSlides.map((slide, idx) => {
                  const active = idx === activeSlideIndex;
                  return (
                    <button
                      key={slide.destination.id}
                      type="button"
                      onClick={() => setActiveSlideIndex(idx)}
                      className={`group text-left rounded-2xl p-2.5 transition-all duration-300 cursor-pointer border relative overflow-hidden ${
                        active
                          ? 'bg-white text-[#0D2E3D] border-white shadow-xl scale-[1.03]'
                          : 'bg-white/10 hover:bg-white/20 backdrop-blur-xl text-white border-white/15'
                      }`}
                    >
                      <div className="aspect-[16/10] w-full rounded-xl overflow-hidden mb-2 bg-[#0D2E3D]">
                        <img
                          src={slide.destination.heroImage.url}
                          alt={localize(slide.destination.name)}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                      <p
                        className={`text-[10px] font-bold uppercase tracking-wider truncate ${
                          active ? 'text-[#F47732]' : 'text-[#EAF3F2]/75'
                        }`}
                      >
                        {slide.destination.administrativeAtoll}
                      </p>
                      <p
                        className={`text-xs font-bold truncate ${
                          active ? 'text-[#0D2E3D]' : 'text-white'
                        }`}
                      >
                        {locale === 'zh'
                          ? slide.destination.name.zh.split(' ')[0]
                          : slide.destination.name.en.replace(' Island', '')}
                      </p>
                      {active && isAutoPlaying && (
                        <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#E6ECEF]">
                          <div
                            key={`prog-${activeSlideIndex}`}
                            className="h-full bg-[#F47732] animate-progress-bar"
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Bottom Floating Glassmorphic Search & Filter Dock */}
          <div className="relative z-10 max-w-7xl w-full mx-auto px-6 sm:px-10 pb-8">
            <form
              onSubmit={handleQuickExplore}
              className="bg-white/95 backdrop-blur-2xl text-[#182226] rounded-3xl sm:rounded-full p-3 sm:pl-6 sm:pr-3 sm:py-2.5 border border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.25)] grid grid-cols-1 sm:grid-cols-12 gap-3 items-center"
              aria-label={
                locale === 'zh'
                  ? '快速探索居民岛与海岛体验'
                  : 'Quick Island and Experience Explorer'
              }
            >
              <div className="sm:col-span-5 flex items-center gap-3 border-b sm:border-b-0 sm:border-r border-[#E6ECEF] pb-2 sm:pb-0 sm:pr-4">
                <div className="w-9 h-9 rounded-full bg-[#FFF4ED] flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#F47732]" />
                </div>
                <div className="w-full min-w-0">
                  <label
                    htmlFor="hero-island-select"
                    className="block text-[10px] font-bold uppercase tracking-wider text-[#5A6970]"
                  >
                    {t.hero.quickFilterIsland}
                  </label>
                  <select
                    id="hero-island-select"
                    value={quickIsland}
                    onChange={(e) => setQuickIsland(e.target.value)}
                    className="w-full text-xs sm:text-sm font-bold text-[#0D2E3D] bg-transparent focus:outline-none truncate cursor-pointer"
                  >
                    {DESTINATIONS.map((dest) => (
                      <option key={dest.id} value={dest.slug}>
                        {localize(dest.name)} — {localize(dest.atollName)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-5 flex items-center gap-3 pb-2 sm:pb-0 sm:pl-2">
                <div className="w-9 h-9 rounded-full bg-[#EDF6F6] flex items-center justify-center shrink-0">
                  <Waves className="w-4 h-4 text-[#0D2E3D]" />
                </div>
                <div className="w-full min-w-0">
                  <label
                    htmlFor="hero-experience-select"
                    className="block text-[10px] font-bold uppercase tracking-wider text-[#5A6970]"
                  >
                    {t.hero.quickFilterExperience}
                  </label>
                  <select
                    id="hero-experience-select"
                    value={quickExperience}
                    onChange={(e) => setQuickExperience(e.target.value)}
                    className="w-full text-xs sm:text-sm font-bold text-[#0D2E3D] bg-transparent focus:outline-none truncate cursor-pointer"
                  >
                    {EXPERIENCES.map((exp) => (
                      <option key={exp.id} value={exp.slug}>
                        {localize(exp.title)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <button
                  type="submit"
                  className="w-full py-3.5 px-5 rounded-full bg-[#0D2E3D] hover:bg-[#F47732] text-white text-xs font-bold tracking-wider transition-colors cursor-pointer shadow-sm"
                >
                  {t.hero.quickFilterButton}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION B: INTERACTIVE EXPANDABLE PANORAMIC ISLAND ACCORDION + MAP
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4ED] text-[#F47732] text-xs font-bold tracking-wide">
                <Sparkles className="w-3.5 h-3.5" />
                {t.home.destinationsEyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-[#0D2E3D]">
                {t.home.destinationsTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#5A6970] leading-relaxed">
                {t.home.destinationsSubtitle}
              </p>
            </div>
            <Link
              href="/destinations"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E6ECEF] hover:border-[#F47732] text-xs font-bold text-[#0D2E3D] hover:text-[#F47732] shadow-xs transition-all shrink-0"
            >
              <span>{t.home.exploreAllDestinations}</span>
              <ArrowUpRight className="w-4 h-4 text-[#F47732]" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Interactive Panoramic Expanding Accordion (Desktop) & Rounded Cards (Mobile) */}
        <ScrollReveal delayMs={100}>
          <div className="flex flex-col lg:flex-row gap-3.5 lg:h-[500px]">
            {DESTINATIONS.map((dest) => {
              const isExpanded = dest.slug === expandedIslandSlug;
              return (
                <div
                  key={dest.id}
                  onMouseEnter={() => setExpandedIslandSlug(dest.slug)}
                  onClick={() => setExpandedIslandSlug(dest.slug)}
                  className={`relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col justify-end p-6 ${
                    isExpanded
                      ? 'lg:flex-[3.4] min-h-[360px] lg:min-h-0 shadow-[0_20px_50px_rgba(13,46,61,0.14)]'
                      : 'lg:flex-[1] min-h-[120px] lg:min-h-0 opacity-90 hover:opacity-100'
                  }`}
                >
                  <img
                    src={dest.heroImage.url}
                    alt={localize(dest.heroImage.alt)}
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover object-center transition-transform duration-700 scale-105"
                  />
                  <div
                    className={`absolute inset-0 transition-opacity duration-500 ${
                      isExpanded
                        ? 'bg-gradient-to-t from-[#071C26]/95 via-[#071C26]/40 to-black/10'
                        : 'bg-[#071C26]/65 hover:bg-[#071C26]/50'
                    }`}
                  />

                  {/* Top Atoll Pill */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                    <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[#0D2E3D] text-[11px] font-bold">
                      {dest.administrativeAtoll}
                    </span>
                    {isExpanded && (
                      <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-[11px] font-mono">
                        {localize(dest.transferOptions[0]?.duration)}
                      </span>
                    )}
                  </div>

                  {/* Bottom Content */}
                  <div className="relative z-10 text-white space-y-3">
                    <h3
                      className={`font-bold text-white transition-all ${
                        isExpanded ? 'text-2xl sm:text-3xl' : 'text-base lg:text-lg'
                      }`}
                    >
                      {locale === 'zh'
                        ? dest.name.zh.split(' ')[0]
                        : dest.name.en.replace(' Island', '')}
                    </h3>

                    {isExpanded && (
                      <div className="space-y-3 animate-editorial">
                        <div className="flex flex-wrap gap-2">
                          {localizeList(dest.activities)
                            .slice(0, 2)
                            .map((act) => (
                              <span
                                key={act}
                                className="text-[11px] bg-white/15 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20"
                              >
                                {act}
                              </span>
                            ))}
                        </div>

                        <div className="pt-1 flex flex-wrap items-center gap-3">
                          <Link
                            href={`/destinations/${dest.slug}`}
                            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#F47732] hover:bg-[#E0631E] text-white text-xs font-bold transition-colors"
                          >
                            <span>{t.common.exploreDestination}</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Interactive Maldives Atoll Radar & Corridor Explorer */}
        <ScrollReveal delayMs={150}>
          <InteractiveMaldivesMap initialSelectedSlug="dhigurah" />
        </ScrollReveal>
      </section>

      {/* =====================================================================
          SECTION C: FEATURED GUESTHOUSES (INTERACTIVE PILL FILTER + 6 STAYS)
         ===================================================================== */}
      <section className="py-20 bg-gradient-to-b from-[#EDF6F6]/60 via-[#EDF6F6]/90 to-[#FAFBFD] rounded-[2.5rem] mx-2 sm:mx-4 lg:mx-6 border border-[#D5E8E8]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
          <ScrollReveal>
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
              <div className="max-w-2xl space-y-2.5">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-[#F47732] text-xs font-bold shadow-xs">
                  <Sparkles className="w-3.5 h-3.5" />
                  {t.home.guesthousesEyebrow}
                </span>
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0D2E3D]">
                  {t.home.guesthousesTitle}
                </h2>
                <p className="text-sm sm:text-base text-[#5A6970] leading-relaxed">
                  {t.home.guesthousesSubtitle}
                </p>
              </div>

              {/* Interactive Quick Filter Pills */}
              <div className="flex flex-wrap gap-1.5 bg-white p-1.5 rounded-2xl border border-[#D5E8E8] shadow-xs">
                {[
                  {
                    id: 'all' as const,
                    label: locale === 'zh' ? '全部 6 家民宿' : 'All 6 Stays',
                  },
                  {
                    id: 'megafauna' as const,
                    label: locale === 'zh' ? '鲸鲨与蝠鲼潜点' : 'Whale Sharks & Mantas',
                  },
                  {
                    id: 'shore-reef' as const,
                    label: locale === 'zh' ? '出门即达岸潜房礁' : 'Shore-Entry Reef',
                  },
                  {
                    id: 'fast-transfer' as const,
                    label: locale === 'zh' ? '近马累快艇直达' : 'Quick Speedboat',
                  },
                ].map((pill) => (
                  <button
                    key={pill.id}
                    type="button"
                    onClick={() => setGhFilter(pill.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      ghFilter === pill.id
                        ? 'bg-[#0D2E3D] text-white shadow-xs'
                        : 'text-[#5A6970] hover:text-[#0D2E3D]'
                    }`}
                  >
                    {pill.label}
                  </button>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* 6 Verified Guesthouse Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {filteredGuesthouses.map((gh, idx) => (
              <ScrollReveal key={gh.id} delayMs={idx * 70}>
                <GuesthouseCard guesthouse={gh} />
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal>
            <div className="p-6 rounded-3xl bg-white border border-[#D5E8E8] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-xs">
              <div className="flex items-center gap-3 text-xs sm:text-sm text-[#182226]">
                <ShieldCheck className="w-5 h-5 text-[#F47732] shrink-0" />
                <span>{t.common.noPricingDisclaimer}</span>
              </div>
              <Link
                href="/guesthouses"
                className="px-5 py-2.5 rounded-full bg-[#0D2E3D] hover:bg-[#F47732] text-white text-xs font-bold shrink-0 transition-colors inline-flex items-center gap-1.5"
              >
                <span>{t.home.exploreAllGuesthouses}</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* =====================================================================
          SECTION D: INTERACTIVE SPLIT-SCREEN EXPERIENCE CINEMA EXPLORER
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-12">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4ED] text-[#F47732] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                {t.home.experiencesEyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0D2E3D]">
                {t.home.experiencesTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#5A6970] leading-relaxed">
                {t.home.experiencesSubtitle}
              </p>
            </div>
            <Link
              href="/experiences"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white border border-[#E6ECEF] hover:border-[#F47732] text-xs font-bold text-[#0D2E3D] hover:text-[#F47732] shadow-xs transition-all shrink-0"
            >
              <span>{t.home.exploreAllExperiences}</span>
              <ArrowUpRight className="w-4 h-4 text-[#F47732]" />
            </Link>
          </div>
        </ScrollReveal>

        {/* Interactive Split-Screen Stage (Replaces 8 generic small cards) */}
        <ScrollReveal delayMs={100}>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            {/* Left 5 Columns: Interactive Selector Rail */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-2">
              {EXPERIENCES.map((exp, idx) => {
                const active = idx === activeExpIndex;
                return (
                  <button
                    key={exp.id}
                    type="button"
                    onClick={() => setActiveExpIndex(idx)}
                    onMouseEnter={() => setActiveExpIndex(idx)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between gap-3 ${
                      active
                        ? 'bg-[#0D2E3D] text-white border-[#0D2E3D] shadow-lg translate-x-1'
                        : 'bg-white text-[#182226] border-[#E6ECEF] hover:border-[#F47732]/50 hover:bg-[#FAFBFD]'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      <span
                        className={`w-7 h-7 rounded-xl text-xs font-bold flex items-center justify-center shrink-0 ${
                          active
                            ? 'bg-[#F47732] text-white'
                            : 'bg-[#F3F6F8] text-[#5A6970]'
                        }`}
                      >
                        0{idx + 1}
                      </span>
                      <div className="min-w-0">
                        <p
                          className={`text-sm font-bold truncate ${
                            active ? 'text-white' : 'text-[#0D2E3D]'
                          }`}
                        >
                          {localize(exp.title)}
                        </p>
                        <p
                          className={`text-[11px] truncate ${
                            active ? 'text-[#EAF3F2]/75' : 'text-[#5A6970]'
                          }`}
                        >
                          {localize(exp.relevantIslandsLabel)}
                        </p>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-4 h-4 shrink-0 transition-transform ${
                        active ? 'text-[#F47732] translate-x-0.5' : 'text-[#5A6970]'
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Right 7 Columns: Large Rounded-3xl Visual Experience Stage */}
            <div className="lg:col-span-7 bg-white rounded-[2rem] border border-[#E6ECEF] overflow-hidden flex flex-col justify-between shadow-[0_20px_60px_rgba(13,46,61,0.06)]">
              <div className="relative aspect-[16/10] w-full bg-[#0D2E3D] overflow-hidden flex-1 min-h-[320px]">
                <img
                  key={activeExp.heroImage.url}
                  src={activeExp.heroImage.url}
                  alt={localize(activeExp.heroImage.alt)}
                  className="w-full h-full object-cover animate-ken-burns"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#071C26]/90 via-[#071C26]/25 to-black/15" />

                <div className="absolute top-5 left-5 right-5 flex items-center justify-between gap-2">
                  <span className="px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-[#0D2E3D] text-xs font-bold shadow-sm">
                    {localize(activeExp.relevantIslandsLabel)}
                  </span>

                  <button
                    type="button"
                    onClick={() => toggleExperience(activeExp.slug)}
                    className={`px-4 py-1.5 rounded-full text-xs font-bold inline-flex items-center gap-1.5 cursor-pointer transition-all shadow-sm ${
                      draft.selectedExperiences.includes(activeExp.slug)
                        ? 'bg-[#F47732] text-white'
                        : 'bg-white/95 backdrop-blur-md text-[#0D2E3D] hover:bg-[#F47732] hover:text-white'
                    }`}
                  >
                    {draft.selectedExperiences.includes(activeExp.slug) ? (
                      <>
                        <Check className="w-3.5 h-3.5" />
                        <span>{t.common.addedToPlanner}</span>
                      </>
                    ) : (
                      <>
                        <Plus className="w-3.5 h-3.5" />
                        <span>{t.common.addToPlanner}</span>
                      </>
                    )}
                  </button>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
                  {activeExp.typicalDuration && (
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/45 backdrop-blur-md text-xs font-semibold text-[#F47732]">
                      <Clock className="w-3.5 h-3.5" />
                      {localize(activeExp.typicalDuration)}
                    </span>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-bold text-white">
                    {localize(activeExp.title)}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/85 line-clamp-2 max-w-xl">
                    {localize(activeExp.subtitle)}
                  </p>
                </div>
              </div>

              <div className="p-6 bg-white flex flex-wrap items-center justify-between gap-4">
                <div className="flex flex-wrap gap-2">
                  {localizeList(activeExp.typicallyIncluded)
                    .slice(0, 3)
                    .map((inc) => (
                      <span
                        key={inc}
                        className="text-xs font-medium text-[#0D2E3D] bg-[#F4F8FA] border border-[#E6ECEF] px-3 py-1.5 rounded-full inline-flex items-center gap-1.5"
                      >
                        <Check className="w-3.5 h-3.5 text-[#F47732]" />
                        <span className="truncate max-w-[180px]">{inc}</span>
                      </span>
                    ))}
                </div>

                <Link
                  href={`/experiences/${activeExp.slug}`}
                  className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full bg-[#0D2E3D] hover:bg-[#F47732] text-white text-xs font-bold transition-colors shrink-0"
                >
                  <span>
                    {locale === 'zh' ? '查看详情' : 'Explore Activity'}
                  </span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =====================================================================
          SECTION E: INTERACTIVE JOURNEY TIMELINE & BENTO ASSURANCE (WHY US)
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <ScrollReveal>
          <div className="bg-[#071C26] text-white rounded-[2.5rem] p-8 sm:p-12 lg:p-16 space-y-12 overflow-hidden relative">
            <div className="max-w-3xl space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#F47732]/20 text-[#F47732] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                {t.home.whyUsEyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white">
                {t.home.whyUsTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#EAF3F2]/80 leading-relaxed">
                {t.home.whyUsSubtitle}
              </p>
            </div>

            {/* 4-Step Visual Journey Flow */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {[
                {
                  step: '01',
                  icon: Anchor,
                  title:
                    locale === 'zh'
                      ? '海岛房礁与季节精准匹配'
                      : 'Island & Reef Matching',
                  desc:
                    locale === 'zh'
                      ? '清晰区分托杜/乌库拉斯的岸潜海龟礁、迪古拉的全年鲸鲨带与拉姆甘岛的免快艇跨海大桥。'
                      : 'We match your travel window with shore-entry turtle reefs (Thoddoo, Ukulhas), whale shark sanctuaries (Dhigurah), or road-linked southern islands.',
                },
                {
                  step: '02',
                  icon: Clock,
                  title:
                    locale === 'zh'
                      ? '马累机场快艇时刻表核验'
                      : 'MLE Transfer Synchronisation',
                  desc:
                    locale === 'zh'
                      ? '在确认房间前先行核对您的国际航班落地维拉纳机场（MLE）时间与当日快艇或内陆航班衔接。'
                      : 'Scheduled speedboats adjust on Fridays for Jumu’ah prayers. We verify your flight arrival against boat manifests before locking rooms.',
                },
                {
                  step: '03',
                  icon: ShieldCheck,
                  title:
                    locale === 'zh'
                      ? '100% 透明税费分项报价'
                      : 'Itemised Maldivian Taxes',
                  desc:
                    locale === 'zh'
                      ? '报价单清晰列明 17% TGST、10% 服务费与每人每晚 6/12 美元绿色税，杜绝隐形消费与虚假评分。'
                      : 'Every proposal itemises 17% TGST, 10% Service Charge, and statutory Green Tax (USD 6 or USD 12/night) with zero hidden fees.',
                },
                {
                  step: '04',
                  icon: Languages,
                  title:
                    locale === 'zh'
                      ? '中英双语与行前通关指引'
                      : 'Bilingual EN & 简体中文 Care',
                  desc:
                    locale === 'zh'
                      ? '提供 IMUGA 免费电子申报防坑指南、2013版崭新美元准备提醒及在岛期间全程双语协助。'
                      : 'Complete guidance on 30-day free visa entry, IMUGA declarations, post-2013 USD cash rules, and on-island support.',
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.step}
                    className="p-6 rounded-3xl bg-[#0D2E3D]/90 border border-white/10 hover:border-[#F47732]/60 transition-all flex flex-col justify-between space-y-6"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-11 h-11 rounded-2xl bg-[#F47732]/15 border border-[#F47732]/30 flex items-center justify-center">
                        <Icon className="w-5 h-5 text-[#F47732]" />
                      </div>
                      <span className="text-xs font-mono font-bold text-white/40">
                        STEP {item.step}
                      </span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-bold text-white">{item.title}</h3>
                      <p className="text-xs sm:text-sm text-[#EAF3F2]/75 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* =====================================================================
          SECTION F: MALDIVES TRAVEL GUIDE (CATEGORY-SWITCHED EDITORIAL CARDS)
         ===================================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-10">
        <ScrollReveal>
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
            <div className="max-w-2xl space-y-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4ED] text-[#F47732] text-xs font-bold">
                <BookOpen className="w-3.5 h-3.5" />
                {t.home.guideEyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0D2E3D]">
                {t.home.guideTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#5A6970] leading-relaxed">
                {t.home.guideSubtitle}
              </p>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 bg-[#F3F6F8] p-1.5 rounded-2xl border border-[#E6ECEF]">
              {[
                { id: 'all', label: locale === 'zh' ? '精选专题' : 'Featured' },
                {
                  id: 'arrival-transfers',
                  label: locale === 'zh' ? '入境与交通' : 'Arrival & Boats',
                },
                {
                  id: 'practical-info',
                  label: locale === 'zh' ? '货币与网络' : 'USD & eSIM',
                },
                {
                  id: 'culture-etiquette',
                  label: locale === 'zh' ? '习俗与着装' : 'Island Etiquette',
                },
                {
                  id: 'weather-safety',
                  label: locale === 'zh' ? '气候与安全' : 'Weather & Safety',
                },
              ].map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setGuideCat(cat.id)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold cursor-pointer transition-all ${
                    guideCat === cat.id
                      ? 'bg-[#0D2E3D] text-white shadow-xs'
                      : 'text-[#5A6970] hover:text-[#0D2E3D]'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGuides.map((guide, idx) => (
            <ScrollReveal key={guide.id} delayMs={idx * 60}>
              <article className="bg-white rounded-3xl border border-[#E6ECEF] overflow-hidden h-full flex flex-col justify-between group hover:-translate-y-1.5 hover:shadow-[0_18px_45px_rgba(13,46,61,0.07)] hover:border-[#D5E8E8] transition-all">
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
                    <h3 className="text-lg font-bold text-[#0D2E3D] group-hover:text-[#F47732] transition-colors line-clamp-2">
                      <Link href={`/travel-guide/${guide.slug}`}>
                        {localize(guide.title)}
                      </Link>
                    </h3>
                  </div>
                </div>

                <div className="px-5 sm:px-6 py-4 border-t border-[#E6ECEF] flex items-center justify-between text-xs">
                  <span className="text-[#5A6970] font-medium">
                    {guide.readingTimeMinutes} {locale === 'zh' ? '分钟阅读' : 'min read'}
                  </span>
                  <Link
                    href={`/travel-guide/${guide.slug}`}
                    className="font-bold text-[#0D2E3D] group-hover:text-[#F47732] inline-flex items-center gap-1"
                  >
                    <span>{t.common.readArticle}</span>
                    <ArrowUpRight className="w-3.5 h-3.5 text-[#F47732]" />
                  </Link>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="text-center pt-2">
            <Link
              href="/travel-guide"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#0D2E3D] hover:bg-[#F47732] text-white text-xs font-bold transition-colors"
            >
              <span>{t.home.exploreAllGuides}</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </ScrollReveal>
      </section>

      {/* =====================================================================
          SECTION H: FINAL ENQUIRY SHOWCASE
         ===================================================================== */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-10">
        <ScrollReveal>
          <div className="space-y-8">
            <div className="text-center max-w-2xl mx-auto space-y-2.5">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF4ED] text-[#F47732] text-xs font-bold">
                <Sparkles className="w-3.5 h-3.5" />
                {t.home.finalCtaEyebrow}
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0D2E3D]">
                {t.home.finalCtaTitle}
              </h2>
              <p className="text-sm sm:text-base text-[#5A6970] leading-relaxed">
                {t.home.finalCtaSubtitle}
              </p>
            </div>

            <EnquiryForm />
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
}
