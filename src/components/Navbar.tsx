'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, Compass, Search, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTripPlanner } from '@/context/TripPlannerContext';

export function Navbar() {
  const pathname = usePathname();
  const { locale, setLocale, t } = useLanguage();
  const { totalSelectedCount } = useTripPlanner();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { href: '/', label: t.nav.home },
    { href: '/guesthouses', label: t.nav.guesthouses },
    { href: '/destinations', label: t.nav.destinations },
    { href: '/experiences', label: t.nav.experiences },
    { href: '/travel-guide', label: t.nav.travelGuide },
    { href: '/about', label: t.nav.aboutUs },
    { href: '/contact', label: t.nav.contact },
  ];

  const isActive = (href: string) => {
    if (href === '/') return pathname === '/';
    return pathname?.startsWith(href);
  };

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-xl shadow-[0_4px_30px_rgba(13,46,61,0.06)] border-b border-[#E6ECEF]'
          : 'bg-white/80 backdrop-blur-md border-b border-[#E6ECEF]/70'
      }`}
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-20 flex items-center justify-between gap-4"
        aria-label="Primary Navigation"
      >
        {/* Brand Identity */}
        <Link href="/" className="group flex items-center gap-3 shrink-0">
          <div className="w-10 h-10 rounded-2xl bg-[#0D2E3D] group-hover:bg-[#F47732] transition-colors flex items-center justify-center text-white font-bold text-lg shadow-sm">
            M
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-extrabold tracking-[0.12em] text-[#0D2E3D] group-hover:text-[#F47732] transition-colors leading-none">
              MALDIVIA
            </span>
            <span className="text-[10px] tracking-[0.06em] text-[#5A6970] font-medium mt-1">
              {locale === 'zh' ? '马尔代夫群岛策展平台' : 'Maldives Island Curators'}
            </span>
          </div>
        </Link>

        {/* Desktop Pill Navigation */}
        <div className="hidden xl:flex items-center gap-1 bg-[#F3F6F8] p-1.5 rounded-full border border-[#E6ECEF]">
          {navItems.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-200 ${
                  active
                    ? 'bg-[#0D2E3D] text-white shadow-sm'
                    : 'text-[#182226] hover:text-[#F47732] hover:bg-white/70'
                }`}
                aria-current={active ? 'page' : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* Desktop Right Actions */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          {/* Search Icon Pill */}
          <Link
            href="/search"
            className="w-9 h-9 rounded-full bg-[#F3F6F8] hover:bg-[#EAF6F6] text-[#0D2E3D] hover:text-[#F47732] flex items-center justify-center border border-[#E6ECEF] transition-colors"
            aria-label={locale === 'zh' ? '搜索全站' : 'Search platform'}
            title={locale === 'zh' ? '搜索' : 'Search'}
          >
            <Search className="w-4 h-4" />
          </Link>

          {/* Language Segmented Pill */}
          <div
            className="inline-flex items-center bg-[#F3F6F8] p-1 rounded-full border border-[#E6ECEF] text-xs"
            role="group"
            aria-label={t.nav.languageLabel}
          >
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer font-semibold ${
                locale === 'en'
                  ? 'bg-white text-[#0D2E3D] shadow-xs'
                  : 'text-[#5A6970] hover:text-[#0D2E3D]'
              }`}
              aria-pressed={locale === 'en'}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale('zh')}
              className={`px-2.5 py-1 rounded-full transition-all cursor-pointer font-semibold ${
                locale === 'zh'
                  ? 'bg-white text-[#0D2E3D] shadow-xs'
                  : 'text-[#5A6970] hover:text-[#0D2E3D]'
              }`}
              aria-pressed={locale === 'zh'}
            >
              中文
            </button>
          </div>

          {/* Trip Planner Pill */}
          <Link
            href="/trip-planner"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-[#0D2E3D] bg-[#EDF6F6] hover:bg-[#D5E8E8] border border-[#D5E8E8] transition-all"
          >
            <Compass className="w-3.5 h-3.5 text-[#F47732]" aria-hidden="true" />
            <span>{t.nav.planYourTrip}</span>
            {totalSelectedCount > 0 && (
              <span
                className="px-1.5 py-0.5 bg-[#F47732] text-white text-[10px] font-bold rounded-full leading-none"
                aria-label={`${totalSelectedCount} items in trip planner`}
              >
                {totalSelectedCount}
              </span>
            )}
          </Link>

          {/* Primary CTA Pill */}
          <Link
            href="/contact#enquiry-form"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-[#F47732] hover:bg-[#E0631E] shadow-[0_4px_14px_rgba(244,119,50,0.32)] hover:shadow-[0_6px_20px_rgba(244,119,50,0.45)] transition-all"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.nav.enquireNow}</span>
          </Link>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex lg:hidden items-center gap-2">
          <div className="inline-flex items-center bg-[#F3F6F8] p-0.5 rounded-full border border-[#E6ECEF] text-[11px]">
            <button
              type="button"
              onClick={() => setLocale('en')}
              className={`px-2 py-1 rounded-full font-semibold ${
                locale === 'en' ? 'bg-white text-[#0D2E3D] shadow-xs' : 'text-[#5A6970]'
              }`}
            >
              EN
            </button>
            <button
              type="button"
              onClick={() => setLocale('zh')}
              className={`px-2 py-1 rounded-full font-semibold ${
                locale === 'zh' ? 'bg-white text-[#0D2E3D] shadow-xs' : 'text-[#5A6970]'
              }`}
            >
              中文
            </button>
          </div>

          <Link
            href="/trip-planner"
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-bold text-[#0D2E3D] bg-[#EDF6F6] border border-[#D5E8E8]"
          >
            <Compass className="w-3.5 h-3.5 text-[#F47732]" />
            {totalSelectedCount > 0 && (
              <span className="px-1.5 bg-[#F47732] text-white text-[10px] rounded-full">
                {totalSelectedCount}
              </span>
            )}
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            className="p-2 rounded-full bg-[#F3F6F8] text-[#0D2E3D] hover:text-[#F47732]"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-nav-drawer"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden border-t border-[#E6ECEF] bg-white/98 backdrop-blur-xl px-4 pt-4 pb-6 space-y-4 shadow-xl"
        >
          <div className="flex flex-col space-y-1">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                    active
                      ? 'bg-[#0D2E3D] text-white'
                      : 'text-[#182226] hover:bg-[#F3F6F8]'
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/search"
              onClick={() => setMobileMenuOpen(false)}
              className="px-4 py-2.5 rounded-xl text-sm font-semibold text-[#182226] hover:bg-[#F3F6F8] flex items-center gap-2"
            >
              <Search className="w-4 h-4 text-[#F47732]" />
              <span>{locale === 'zh' ? '全站搜索' : 'Search Directory'}</span>
            </Link>
          </div>
          <div className="pt-3 border-t border-[#E6ECEF] grid grid-cols-2 gap-3">
            <Link
              href="/trip-planner"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 rounded-full text-center text-xs font-bold text-[#0D2E3D] bg-[#EDF6F6] border border-[#D5E8E8]"
            >
              {t.nav.planYourTrip}{' '}
              {totalSelectedCount > 0 ? `(${totalSelectedCount})` : ''}
            </Link>
            <Link
              href="/contact#enquiry-form"
              onClick={() => setMobileMenuOpen(false)}
              className="py-3 rounded-full text-center text-xs font-bold text-white bg-[#F47732]"
            >
              {t.nav.enquireNow}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
