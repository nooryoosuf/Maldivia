'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Shield, X } from 'lucide-react';
import { useCookieConsent } from '@/context/CookieConsentContext';
import { useLanguage } from '@/context/LanguageContext';

export function CookieBannerAndModal() {
  const {
    preferences,
    savePreferences,
    acceptAll,
    essentialOnly,
    isModalOpen,
    setModalOpen,
  } = useCookieConsent();
  const { locale } = useLanguage();

  const [functional, setFunctional] = useState(preferences.functionalLocaleAndPlanner);
  const [analytics, setAnalytics] = useState(preferences.privacyConsciousAnalytics);

  useEffect(() => {
    setFunctional(preferences.functionalLocaleAndPlanner);
    setAnalytics(preferences.privacyConsciousAnalytics);
  }, [preferences]);

  return (
    <>
      {/* Bottom Banner (shown only before user has responded) */}
      {!preferences.hasResponded && !isModalOpen && (
        <aside
          aria-label={locale === 'zh' ? 'Cookie 与隐私偏好提示' : 'Cookie and Privacy Notice'}
          className="fixed bottom-4 inset-x-4 sm:inset-x-6 lg:inset-x-10 z-50 max-w-6xl mx-auto bg-[#0D2E3D]/95 backdrop-blur-xl text-white border border-white/15 rounded-3xl shadow-[0_24px_60px_rgba(7,28,38,0.35)] p-5 sm:px-7 sm:py-5"
        >
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
            <div className="flex items-start gap-3.5 max-w-3xl">
              <div className="w-9 h-9 rounded-2xl bg-[#F47732]/20 flex items-center justify-center shrink-0 mt-0.5">
                <Shield className="w-4 h-4 text-[#F47732]" aria-hidden="true" />
              </div>
              <div className="text-xs sm:text-sm space-y-1">
                <p className="font-bold text-white">
                  {locale === 'zh'
                    ? '透明的隐私与本地存储说明'
                    : 'Transparent Browser Storage & Cookie Preferences'}
                </p>
                <p className="text-white/75 leading-relaxed text-xs">
                  {locale === 'zh'
                    ? '我们使用必要的本地存储来保存您的中英文语言选择与行程规划单。未经您的明确授权，我们不会加载任何非必要的分析脚本。详情请参阅'
                    : 'We use essential browser storage to remember your language selection (EN / 简体中文) and your Trip Planner draft. Optional analytics remain disabled unless you opt in. Read our'}{' '}
                  <Link
                    href="/policies/cookie-policy"
                    className="underline text-[#F47732] hover:text-white font-semibold"
                  >
                    {locale === 'zh' ? '《Cookie 政策》' : 'Cookie Policy'}
                  </Link>
                  .
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2.5 shrink-0">
              <button
                type="button"
                onClick={() => setModalOpen(true)}
                className="px-4 py-2 rounded-full text-xs font-semibold border border-white/25 text-white/90 hover:bg-white/10 transition-colors cursor-pointer"
              >
                {locale === 'zh' ? '自定义偏好' : 'Customise'}
              </button>
              <button
                type="button"
                onClick={essentialOnly}
                className="px-4 py-2 rounded-full text-xs font-semibold bg-white/10 border border-white/15 text-white hover:bg-white/20 transition-colors cursor-pointer"
              >
                {locale === 'zh' ? '仅必要项' : 'Essential Only'}
              </button>
              <button
                type="button"
                onClick={acceptAll}
                className="px-5 py-2 rounded-full text-xs font-bold bg-[#F47732] text-white hover:bg-[#E06520] shadow-md transition-colors cursor-pointer"
              >
                {locale === 'zh' ? '全部接受' : 'Accept All'}
              </button>
            </div>
          </div>
        </aside>
      )}

      {/* Accessible Preferences Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#071C26]/65 backdrop-blur-sm p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="cookie-modal-title"
        >
          <div className="bg-white text-[#182226] border border-[#E6ECEF] rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-[0_24px_60px_rgba(13,46,61,0.25)]">
            <div className="flex items-start justify-between gap-4 border-b border-[#E6ECEF] pb-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-[#F47732]">
                  {locale === 'zh' ? '隐私与存储控制' : 'Privacy & Storage Controls'}
                </p>
                <h2 id="cookie-modal-title" className="text-xl font-bold text-[#0D2E3D] mt-1">
                  {locale === 'zh' ? '管理 Cookie 与本地存储偏好' : 'Cookie Preferences'}
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setModalOpen(false)}
                className="p-2 rounded-full bg-[#F4F8FA] text-[#5B6B73] hover:text-[#0D2E3D] cursor-pointer"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3.5 text-sm">
              {/* Essential */}
              <div className="p-4 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF] flex items-start justify-between gap-4">
                <div>
                  <p className="font-bold text-[#0D2E3D]">
                    {locale === 'zh'
                      ? '1. 严格必要的安全与会话存储（始终启用）'
                      : '1. Strictly Necessary Security & Consent Storage (Always Active)'}
                  </p>
                  <p className="text-xs text-[#5B6B73] mt-1">
                    {locale === 'zh'
                      ? '用于记录您的隐私授权状态及保护表单免受垃圾请求攻击。'
                      : 'Required to store your consent choice and protect enquiry forms against automated spam.'}
                  </p>
                </div>
                <span className="text-[11px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#EDF6F6] text-[#0D2E3D] shrink-0">
                  {locale === 'zh' ? '必需' : 'Required'}
                </span>
              </div>

              {/* Functional */}
              <label className="p-4 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF] flex items-start justify-between gap-4 cursor-pointer hover:border-[#0D2E3D]/30 transition-colors">
                <div>
                  <p className="font-bold text-[#0D2E3D]">
                    {locale === 'zh'
                      ? '2. 功能性偏好（语言选择与行程规划单保存）'
                      : '2. Functional Preferences (Language & Trip Planner Draft)'}
                  </p>
                  <p className="text-xs text-[#5B6B73] mt-1">
                    {locale === 'zh'
                      ? '在浏览器本地记住您的中英文切换偏好以及加入行程规划器的居民岛和民宿。'
                      : 'Remembers your English / 简体中文 preference and selected islands in your Trip Planner across page visits.'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={functional}
                  onChange={(e) => setFunctional(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#F47732]"
                />
              </label>

              {/* Analytics */}
              <label className="p-4 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF] flex items-start justify-between gap-4 cursor-pointer hover:border-[#0D2E3D]/30 transition-colors">
                <div>
                  <p className="font-bold text-[#0D2E3D]">
                    {locale === 'zh'
                      ? '3. 隐私友好型匿名访问统计（可选）'
                      : '3. Privacy-Conscious Anonymous Analytics (Optional)'}
                  </p>
                  <p className="text-xs text-[#5B6B73] mt-1">
                    {locale === 'zh'
                      ? '帮助我们了解哪些海岛指南与民宿页面最受旅行者关注，不追踪跨站个人身份。'
                      : 'Helps us understand which island guides and guesthouse dossiers are most useful without cross-site tracking.'}
                  </p>
                </div>
                <input
                  type="checkbox"
                  checked={analytics}
                  onChange={(e) => setAnalytics(e.target.checked)}
                  className="mt-1 h-4 w-4 accent-[#F47732]"
                />
              </label>
            </div>

            <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-[#E6ECEF]">
              <button
                type="button"
                onClick={essentialOnly}
                className="px-5 py-2.5 rounded-full text-xs font-semibold border border-[#E6ECEF] text-[#0D2E3D] hover:bg-[#F4F8FA] cursor-pointer"
              >
                {locale === 'zh' ? '仅保留必需项' : 'Essential Only'}
              </button>
              <button
                type="button"
                onClick={() =>
                  savePreferences({
                    functionalLocaleAndPlanner: functional,
                    privacyConsciousAnalytics: analytics,
                  })
                }
                className="px-6 py-2.5 rounded-full text-xs font-bold bg-[#F47732] text-white hover:bg-[#E06520] shadow-md cursor-pointer"
              >
                {locale === 'zh' ? '保存我的偏好设置' : 'Save Preferences'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
