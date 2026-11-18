'use client';

import React from 'react';
import Link from 'next/link';
import { Globe, ShieldCheck, Compass, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useCookieConsent } from '@/context/CookieConsentContext';
import { GUESTHOUSES } from '@/data/guesthouses';
import { DESTINATIONS } from '@/data/destinations';
import { POLICY_DOCUMENTS } from '@/data/policies';

export function Footer() {
  const { locale, setLocale, t, localize } = useLanguage();
  const { setModalOpen } = useCookieConsent();

  return (
    <footer className="bg-[#071C26] text-white pt-16 pb-12 rounded-t-[2.5rem] mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 space-y-14">
        {/* Top Floating Assurance Pill Box */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#0D2E3D] border border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-11 h-11 rounded-2xl bg-[#F47732]/15 border border-[#F47732]/30 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-5 h-5 text-[#F47732]" aria-hidden="true" />
            </div>
            <div className="space-y-1">
              <p className="text-xs font-bold uppercase tracking-widest text-[#F47732]">
                {locale === 'zh' ? '100% 真实核实承诺' : 'VERIFIED MALDIVES CURATION'}
              </p>
              <p className="text-xs sm:text-sm text-[#EAF3F2]/90 max-w-2xl leading-relaxed">
                {t.footer.editorialDisclosure}
              </p>
            </div>
          </div>
          <Link
            href="/trip-planner"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#F47732] text-white hover:bg-[#E0631E] shadow-lg transition-all shrink-0"
          >
            <Compass className="w-4 h-4" />
            <span>{t.nav.planYourTrip}</span>
          </Link>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Identity */}
          <div className="lg:col-span-2 space-y-5 pr-0 lg:pr-8">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#F47732] flex items-center justify-center text-white font-bold">
                M
              </div>
              <div>
                <Link
                  href="/"
                  className="text-xl font-extrabold tracking-[0.14em] text-white hover:text-[#F47732] transition-colors"
                >
                  MALDIVIA
                </Link>
                <p className="text-[11px] uppercase tracking-widest text-[#F47732]">
                  {t.brand.subtitle}
                </p>
              </div>
            </div>

            <p className="text-sm text-[#EAF3F2]/75 leading-relaxed">
              {t.brand.description}
            </p>

            {/* Verified Maldives Emergency Reference Card */}
            <div className="p-4 rounded-2xl bg-[#0D2E3D]/90 border border-white/10 text-xs space-y-1.5">
              <p className="font-bold text-[#F47732] uppercase tracking-wider">
                {locale === 'zh'
                  ? '马尔代夫官方应急电话（已核实）'
                  : 'Verified Maldives Official Emergency Numbers'}
              </p>
              <p className="text-[#EAF3F2]/90">
                {locale === 'zh'
                  ? '警察：119 · 急救：102 · 海岸警卫队：191 · 旅游警察：1478'
                  : 'Police: 119 · Ambulance: 102 · Coast Guard: 191 · Tourist Police: 1478'}
              </p>
              <p className="text-[#EAF3F2]/65">
                {locale === 'zh'
                  ? '官方免费电子入境申报：imuga.immigration.gov.mv'
                  : 'Official Free Traveller Declaration: imuga.immigration.gov.mv'}
              </p>
            </div>

            {/* Language Selector Pills */}
            <div className="pt-1 flex items-center gap-2.5">
              <Globe className="w-4 h-4 text-[#F47732]" aria-hidden="true" />
              <button
                type="button"
                onClick={() => setLocale('en')}
                className={`px-3.5 py-1.5 rounded-full text-xs cursor-pointer transition-all ${
                  locale === 'en'
                    ? 'bg-[#F47732] text-white font-bold'
                    : 'bg-white/10 text-[#EAF3F2] hover:bg-white/20'
                }`}
              >
                English
              </button>
              <button
                type="button"
                onClick={() => setLocale('zh')}
                className={`px-3.5 py-1.5 rounded-full text-xs cursor-pointer transition-all ${
                  locale === 'zh'
                    ? 'bg-[#F47732] text-white font-bold'
                    : 'bg-white/10 text-[#EAF3F2] hover:bg-white/20'
                }`}
              >
                简体中文
              </button>
            </div>
          </div>

          {/* Column 2: Main Navigation */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#F47732] mb-4">
              {t.footer.navigation}
            </h2>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: '/', label: t.nav.home },
                { href: '/guesthouses', label: t.nav.guesthouses },
                { href: '/destinations', label: t.nav.destinations },
                { href: '/experiences', label: t.nav.experiences },
                { href: '/travel-guide', label: t.nav.travelGuide },
                { href: '/trip-planner', label: t.nav.tripPlanner },
                { href: '/about', label: t.nav.aboutUs },
                { href: '/contact', label: t.nav.contact },
                { href: '/sitemap-page', label: t.footer.sitemap },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-[#EAF3F2]/80 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Verified Guesthouses */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#F47732] mb-4">
              {t.footer.verifiedGuesthouses}
            </h2>
            <ul className="space-y-3 text-sm">
              {GUESTHOUSES.map((gh) => (
                <li key={gh.id}>
                  <Link
                    href={`/guesthouses/${gh.slug}`}
                    className="group block text-[#EAF3F2]/85 hover:text-white transition-colors"
                  >
                    <span className="font-semibold group-hover:text-[#F47732] transition-colors inline-flex items-center gap-1">
                      {gh.officialName}
                      <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </span>
                    <span className="block text-xs text-[#EAF3F2]/55">
                      {localize(gh.islandName)}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Island Destinations */}
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#F47732] mb-4">
              {t.footer.islandDestinations}
            </h2>
            <ul className="space-y-3 text-sm">
              {DESTINATIONS.map((dest) => (
                <li key={dest.id}>
                  <Link
                    href={`/destinations/${dest.slug}`}
                    className="group block text-[#EAF3F2]/85 hover:text-white transition-colors"
                  >
                    <span className="font-semibold group-hover:text-[#F47732] transition-colors">
                      {localize(dest.name)}
                    </span>
                    <span className="block text-xs text-[#EAF3F2]/55">
                      {dest.administrativeAtoll}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Legal & Policies Row */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-wrap gap-x-5 gap-y-2.5 text-xs text-[#EAF3F2]/70">
            {POLICY_DOCUMENTS.map((policy) => (
              <Link
                key={policy.slug}
                href={`/policies/${policy.slug}`}
                className="hover:text-white transition-colors"
              >
                {localize(policy.title)}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => setModalOpen(true)}
              className="text-left text-[#F47732] hover:underline font-semibold cursor-pointer"
            >
              {t.footer.cookiePreferences}
            </button>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-xs text-[#EAF3F2]/55">
          <p>© {new Date().getFullYear()} {t.footer.copyright}</p>
          <p>
            {locale === 'zh'
              ? '专为国际与中国旅行者呈现真实的马尔代夫群岛信息'
              : 'Engineered for International & Mainland Chinese Accessibility'}
          </p>
        </div>
      </div>
    </footer>
  );
}
