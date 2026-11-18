'use client';

import React from 'react';
import Link from 'next/link';
import { AlertTriangle, ShieldCheck, Settings } from 'lucide-react';
import type { PolicyDocument } from '@/types/domain';
import { POLICY_DOCUMENTS } from '@/data/policies';
import { useLanguage } from '@/context/LanguageContext';
import { useCookieConsent } from '@/context/CookieConsentContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';

export function PolicyDetailClient({ policy }: { policy: PolicyDocument }) {
  const { locale, t, localize, localizeList, formatDate } = useLanguage();
  const { preferences, savePreferences, acceptAll, essentialOnly } = useCookieConsent();

  const flags = localizeList(policy.requiresBusinessInputFlags);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 space-y-10">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: localize(policy.title), path: `/policies/${policy.slug}` },
        ]}
      />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left Navigation Sidebar for all 10 Legal & Policy Documents */}
        <aside className="lg:col-span-4 bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 space-y-4">
          <h2 className="text-xs font-bold uppercase tracking-[0.14em] text-[#F47732]">
            {t.footer.legalAndPolicies} (10)
          </h2>
          <nav aria-label="Legal and Policy Documents">
            <ul className="space-y-1.5 text-xs sm:text-sm">
              {POLICY_DOCUMENTS.map((doc) => {
                const active = doc.slug === policy.slug;
                return (
                  <li key={doc.slug}>
                    <Link
                      href={`/policies/${doc.slug}`}
                      className={`block px-3.5 py-2.5 rounded-xl transition-colors ${
                        active
                          ? 'bg-[#0D2E3D] text-white font-bold'
                          : 'text-[#182226] hover:bg-[#F4F8FA]'
                      }`}
                    >
                      {localize(doc.title)}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </aside>

        {/* Main Policy Content */}
        <article className="lg:col-span-8 bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-10 space-y-8">
          <header className="border-b border-[#E6ECEF] pb-6 space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47732]">
              {t.common.lastReviewed}: {formatDate(policy.lastReviewed)}
            </span>
            <h1 className="text-3xl sm:text-4xl font-bold text-[#0D2E3D]">
              {localize(policy.title)}
            </h1>
            <p className="text-sm sm:text-base text-[#5B6B73]">
              {localize(policy.subtitle)}
            </p>
          </header>

          {/* Pre-Launch Legal / Business Review Flag Banner */}
          {flags.length > 0 && (
            <div className="p-5 rounded-2xl bg-[#FFF2EA] border border-[#F47732]/30 space-y-2">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#0D2E3D]">
                <AlertTriangle className="w-4 h-4 text-[#F47732]" />
                <span>
                  {locale === 'zh'
                    ? '上线前企业主与法务审核清单（遵循零虚构注册信息原则）'
                    : 'PRE-LAUNCH BUSINESS & LEGAL REVIEW CHECKLIST'}
                </span>
              </div>
              <p className="text-xs text-[#5B6B73]">
                {locale === 'zh'
                  ? '为严格遵守不编造虚假公司注册号、虚假地址或未授权法律管辖条款的要求，以下字段已标记待企业主在正式商业发布前填入：'
                  : 'In strict compliance with our policy against inventing corporate registration details, addresses, or statutory refund periods, the following items are flagged for business owner insertion prior to commercial launch:'}
              </p>
              <ul className="list-disc list-inside text-xs font-medium text-[#0D2E3D] space-y-1">
                {flags.map((flag) => (
                  <li key={flag}>{flag}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Policy Sections */}
          <div className="space-y-6">
            {policy.sections.map((sec, idx) => (
              <section key={idx} className="space-y-3">
                <h2 className="text-xl font-bold text-[#0D2E3D]">
                  {localize(sec.heading)}
                </h2>
                {sec.body.map((para, pIdx) => (
                  <p
                    key={pIdx}
                    className="text-sm sm:text-base text-[#182226] leading-relaxed"
                  >
                    {localize(para)}
                  </p>
                ))}
              </section>
            ))}
          </div>

          {/* Interactive Cookie Preferences Panel when on /policies/cookie-preferences */}
          {policy.slug === 'cookie-preferences' && (
            <div className="p-6 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF] space-y-5">
              <div className="flex items-center gap-2 text-sm font-bold text-[#0D2E3D]">
                <Settings className="w-4 h-4 text-[#F47732]" />
                <span>
                  {locale === 'zh'
                    ? '当前浏览器 Cookie 与本地存储授权状态'
                    : 'Your Live Browser Storage & Consent Settings'}
                </span>
              </div>

              <div className="space-y-3 text-xs sm:text-sm">
                <div className="p-4 rounded-2xl bg-white border border-[#E6ECEF] flex items-center justify-between">
                  <div>
                    <p className="font-bold text-[#0D2E3D]">
                      {locale === 'zh' ? '严格必要的安全存储' : 'Strictly Necessary Storage'}
                    </p>
                    <p className="text-xs text-[#5B6B73]">
                      {locale === 'zh' ? '始终启用' : 'Always Active'}
                    </p>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-[#F47732]" />
                </div>

                <label className="p-4 rounded-2xl bg-white border border-[#E6ECEF] flex items-center justify-between cursor-pointer">
                  <div>
                    <p className="font-bold text-[#0D2E3D]">
                      {locale === 'zh'
                        ? '功能性偏好（语言选择与行程规划单）'
                        : 'Functional Storage (Language & Trip Planner)'}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.functionalLocaleAndPlanner}
                    onChange={(e) =>
                      savePreferences({
                        functionalLocaleAndPlanner: e.target.checked,
                        privacyConsciousAnalytics: preferences.privacyConsciousAnalytics,
                      })
                    }
                    className="h-4 w-4 accent-[#F47732]"
                  />
                </label>

                <label className="p-4 rounded-2xl bg-white border border-[#E6ECEF] flex items-center justify-between cursor-pointer">
                  <div>
                    <p className="font-bold text-[#0D2E3D]">
                      {locale === 'zh'
                        ? '隐私友好型匿名访问统计'
                        : 'Privacy-Conscious Anonymous Analytics'}
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.privacyConsciousAnalytics}
                    onChange={(e) =>
                      savePreferences({
                        functionalLocaleAndPlanner: preferences.functionalLocaleAndPlanner,
                        privacyConsciousAnalytics: e.target.checked,
                      })
                    }
                    className="h-4 w-4 accent-[#F47732]"
                  />
                </label>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                <button
                  type="button"
                  onClick={essentialOnly}
                  className="px-5 py-2.5 rounded-full text-xs font-bold border border-[#0D2E3D] text-[#0D2E3D] hover:bg-[#EDF6F6] cursor-pointer"
                >
                  {locale === 'zh' ? '仅保留必要项' : 'Essential Only'}
                </button>
                <button
                  type="button"
                  onClick={acceptAll}
                  className="px-5 py-2.5 rounded-full text-xs font-bold bg-[#F47732] text-white hover:bg-[#E06520] cursor-pointer"
                >
                  {locale === 'zh' ? '全部启用' : 'Enable All'}
                </button>
              </div>
            </div>
          )}
        </article>
      </div>
    </div>
  );
}
