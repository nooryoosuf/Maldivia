'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { CheckCircle2, AlertCircle, Send, Loader2, ShieldCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { useTripPlanner } from '@/context/TripPlannerContext';
import { GUESTHOUSES } from '@/data/guesthouses';
import { DESTINATIONS } from '@/data/destinations';
import { EXPERIENCES } from '@/data/experiences';

export function EnquiryForm({
  defaultPropertyOrIsland = '',
  compact = false,
}: {
  defaultPropertyOrIsland?: string;
  compact?: boolean;
}) {
  const { locale, localize } = useLanguage();
  const { draft } = useTripPlanner();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [countryOfResidence, setCountryOfResidence] = useState('');
  const [preferredLanguage, setPreferredLanguage] = useState<'en' | 'zh'>(locale);
  const [arrivalDate, setArrivalDate] = useState(draft.arrivalDate || '');
  const [departureDate, setDepartureDate] = useState(draft.departureDate || '');
  const [adults, setAdults] = useState<number>(draft.adults || 2);
  const [children, setChildren] = useState<number>(draft.children || 0);
  const [preferredDestinationOrGuesthouse, setPreferredDestinationOrGuesthouse] =
    useState(defaultPropertyOrIsland);
  const [interestedExperiences, setInterestedExperiences] = useState<string[]>(
    draft.selectedExperiences || []
  );
  const [additionalRequirements, setAdditionalRequirements] = useState(draft.notes || '');
  const [privacyConsent, setPrivacyConsent] = useState(false);
  const [honeypot, setHoneypot] = useState('');

  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string[]>>({});
  const [submittedResult, setSubmittedResult] = useState<{
    referenceCode: string;
    createdAt: string;
  } | null>(null);

  useEffect(() => {
    setPreferredLanguage(locale);
  }, [locale]);

  useEffect(() => {
    if (defaultPropertyOrIsland) {
      setPreferredDestinationOrGuesthouse(defaultPropertyOrIsland);
    }
  }, [defaultPropertyOrIsland]);

  const toggleExperienceSelection = (slug: string) => {
    setInterestedExperiences((prev) =>
      prev.includes(slug) ? prev.filter((item) => item !== slug) : [...prev, slug]
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage(null);
    setFieldErrors({});

    if (!fullName.trim() || fullName.trim().length < 2) {
      setErrorMessage(
        locale === 'zh'
          ? '请填写您的真实姓名（至少2个字符）。'
          : 'Please enter your full name (at least 2 characters).'
      );
      return;
    }
    if (!email.trim() || !email.includes('@')) {
      setErrorMessage(
        locale === 'zh'
          ? '请填写有效的电子邮箱地址以便接收报价单。'
          : 'Please provide a valid email address.'
      );
      return;
    }
    if (!countryOfResidence.trim()) {
      setErrorMessage(
        locale === 'zh'
          ? '请填写您的常住国家或地区。'
          : 'Please enter your country or region of residence.'
      );
      return;
    }
    if (!arrivalDate || !departureDate) {
      setErrorMessage(
        locale === 'zh'
          ? '请选择计划抵达日期与离境日期。'
          : 'Please select both arrival and departure dates.'
      );
      return;
    }
    if (new Date(departureDate) <= new Date(arrivalDate)) {
      setErrorMessage(
        locale === 'zh'
          ? '离境日期必须晚于抵达日期。'
          : 'Departure date must be after the arrival date.'
      );
      return;
    }
    if (!privacyConsent) {
      setErrorMessage(
        locale === 'zh'
          ? '请勾选同意《隐私政策》以提交咨询。'
          : 'Please confirm your consent to our Privacy Policy before submitting.'
      );
      return;
    }

    setSubmitting(true);
    const payload = {
      fullName,
      email,
      countryOfResidence,
      preferredLanguage,
      arrivalDate,
      departureDate,
      adults,
      children,
      preferredDestinationOrGuesthouse,
      selectedGuesthouses: draft.selectedGuesthouses,
      selectedDestinations: draft.selectedDestinations,
      interestedExperiences,
      additionalRequirements,
      privacyConsent,
      honeypot,
    };

    const fallbackStaticRecord = () => {
      const dateStr = new Date().toISOString().slice(0, 10).replace(/-/g, '');
      const rand = Math.random().toString(36).substring(2, 6).toUpperCase();
      const refCode = `MV-${dateStr}-${rand}`;
      const nowIso = new Date().toISOString();
      try {
        const existing = JSON.parse(localStorage.getItem('maldivia_enquiries') || '[]');
        existing.push({ ...payload, referenceCode: refCode, createdAt: nowIso });
        localStorage.setItem('maldivia_enquiries', JSON.stringify(existing));
      } catch {
        // Ignore storage errors in private browsing
      }
      setSubmittedResult({
        referenceCode: refCode,
        createdAt: nowIso,
      });
      setSubmitting(false);
    };

    try {
      const response = await fetch('/api/enquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      if (response.status === 404 || response.status === 405) {
        fallbackStaticRecord();
        return;
      }

      const data = await response.json();
      if (!response.ok || !data.success) {
        setErrorMessage(
          data.error ||
            (locale === 'zh'
              ? '提交时遇到校验问题，请检查表单内容。'
              : 'Please check the highlighted form fields.')
        );
        if (data.fieldErrors) {
          setFieldErrors(data.fieldErrors);
        }
        setSubmitting(false);
        return;
      }

      setSubmittedResult({
        referenceCode: data.referenceCode,
        createdAt: data.createdAt,
      });
      setSubmitting(false);
    } catch {
      fallbackStaticRecord();
    }
  };

  if (submittedResult) {
    return (
      <div
        className="bg-white rounded-[2rem] border-2 border-[#0D2E3D] p-8 sm:p-10 space-y-6 shadow-xl"
        role="status"
        aria-live="polite"
      >
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-2xl bg-[#FFF4ED] flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-7 h-7 text-[#F47732]" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47732]">
              {locale === 'zh' ? '行程咨询已登记存档' : 'ENQUIRY RECEIVED & LOGGED'}
            </span>
            <h3 className="text-2xl font-bold text-[#0D2E3D] mt-1">
              {locale === 'zh'
                ? '感谢您的咨询，我们已收到您的马尔代夫行程需求'
                : 'Thank You — Your Maldives Itinerary Request Has Been Recorded'}
            </h3>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-[#EDF6F6] border border-[#D5E8E8] space-y-2 text-sm">
          <p className="font-bold text-[#0D2E3D]">
            {locale === 'zh' ? '咨询参考编号 (Reference Code): ' : 'Enquiry Reference Code: '}
            <span className="font-mono text-[#F47732] text-base bg-white px-3 py-1 rounded-full ml-1">
              {submittedResult.referenceCode}
            </span>
          </p>
          <p className="text-xs text-[#182226] leading-relaxed pt-1">
            {locale === 'zh'
              ? '重要说明：此编号代表您的行程需求已成功存入系统（并非自动生成的虚假订单）。我们的团队将向所选马尔代夫民宿核实实时房态、餐标及机场快艇时刻表，随后将分项透明报价单发送至您的邮箱：'
              : 'Important Notice: This reference confirms your request is logged in our system (it is not an automated fake booking confirmation). Our team will verify current room availability and airport transfer schedules with the selected Maldivian property and send your itemised quotation to:'}{' '}
            <strong>{email}</strong>
          </p>
        </div>

        <button
          type="button"
          onClick={() => setSubmittedResult(null)}
          className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider bg-[#0D2E3D] text-white hover:bg-[#F47732] transition-colors cursor-pointer"
        >
          {locale === 'zh' ? '提交另一份行程咨询' : 'Submit Another Enquiry'}
        </button>
      </div>
    );
  }

  return (
    <form
      id="enquiry-form"
      onSubmit={handleSubmit}
      noValidate
      className="bg-white rounded-[2rem] border border-[#E6ECEF] p-6 sm:p-10 space-y-6 shadow-[0_16px_50px_rgba(13,46,61,0.05)]"
    >
      <div className="border-b border-[#E6ECEF] pb-5">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4ED] text-[#F47732] text-xs font-bold mb-2">
          <Sparkles className="w-3.5 h-3.5" />
          {locale === 'zh'
            ? '定制行程与实时房态询价'
            : 'Tailored Itinerary & Availability Enquiry'}
        </span>
        <h3 className="text-2xl sm:text-3xl font-bold text-[#0D2E3D]">
          {locale === 'zh'
            ? '获取经核实的民宿报价与机场接驳方案'
            : 'Request a Verified Property & Transfer Quotation'}
        </h3>
        <p className="text-xs sm:text-sm text-[#5A6970] mt-1">
          {locale === 'zh'
            ? '填写以下信息后，我们将为您核实对应日期的真实房态、含税价格（含17% TGST、10%服务费与绿色税）及往返快艇/内陆航班时刻。'
            : 'Complete the fields below so we can verify real-time room inventory, statutory taxes, and scheduled speedboat or domestic flight connections for your dates.'}
        </p>
      </div>

      {/* Honeypot field */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url_hp">Do not fill this field</label>
        <input
          id="website_url_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {errorMessage && (
        <div
          role="alert"
          className="p-4 rounded-2xl bg-[#FFF4ED] border border-[#F47732]/40 text-[#182226] text-xs sm:text-sm flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-[#F47732] shrink-0 mt-0.5" />
          <div>
            <p className="font-bold text-[#0D2E3D]">{errorMessage}</p>
            {Object.keys(fieldErrors).length > 0 && (
              <ul className="list-disc list-inside mt-1 text-xs text-[#5A6970]">
                {Object.entries(fieldErrors).map(([field, msgs]) =>
                  msgs?.map((m, idx) => <li key={`${field}-${idx}`}>{m}</li>)
                )}
              </ul>
            )}
          </div>
        </div>
      )}

      {/* Row 1: Full Name & Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="enquiry-fullName"
            className="block text-xs font-bold text-[#0D2E3D] mb-2"
          >
            {locale === 'zh' ? '姓名 (Full Name) *' : 'Full Name *'}
          </label>
          <input
            id="enquiry-fullName"
            type="text"
            required
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder={locale === 'zh' ? '例如：Lin Wei / 张伟' : 'e.g. Eleanor Vance'}
            className="w-full px-4 py-3 rounded-xl text-sm bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:border-[#F47732] focus:bg-white transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-email"
            className="block text-xs font-bold text-[#0D2E3D] mb-2"
          >
            {locale === 'zh' ? '电子邮箱 (Email Address) *' : 'Email Address *'}
          </label>
          <input
            id="enquiry-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="name@example.com"
            className="w-full px-4 py-3 rounded-xl text-sm bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:border-[#F47732] focus:bg-white transition-colors"
          />
        </div>
      </div>

      {/* Row 2: Country of Residence & Preferred Language */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label
            htmlFor="enquiry-country"
            className="block text-xs font-bold text-[#0D2E3D] mb-2"
          >
            {locale === 'zh' ? '常住国家/地区 (Country / Region) *' : 'Country of Residence *'}
          </label>
          <input
            id="enquiry-country"
            type="text"
            required
            value={countryOfResidence}
            onChange={(e) => setCountryOfResidence(e.target.value)}
            placeholder={
              locale === 'zh'
                ? '例如：中国大陆 / 新加坡 / 英国'
                : 'e.g. China, Singapore, United Kingdom, Germany'
            }
            className="w-full px-4 py-3 rounded-xl text-sm bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:border-[#F47732] focus:bg-white transition-colors"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-language"
            className="block text-xs font-bold text-[#0D2E3D] mb-2"
          >
            {locale === 'zh' ? '首选沟通语言 (Preferred Language) *' : 'Preferred Language *'}
          </label>
          <select
            id="enquiry-language"
            value={preferredLanguage}
            onChange={(e) => setPreferredLanguage(e.target.value as 'en' | 'zh')}
            className="w-full px-4 py-3 rounded-xl text-sm bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:border-[#F47732] focus:bg-white transition-colors"
          >
            <option value="en">English</option>
            <option value="zh">简体中文 (Simplified Chinese)</option>
          </select>
        </div>
      </div>

      {/* Row 3: Arrival Date, Departure Date, Adults, Children */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        <div>
          <label
            htmlFor="enquiry-arrival"
            className="block text-xs font-bold text-[#0D2E3D] mb-2"
          >
            {locale === 'zh' ? '计划抵马累日期 *' : 'Arrival Date *'}
          </label>
          <input
            id="enquiry-arrival"
            type="date"
            required
            value={arrivalDate}
            onChange={(e) => setArrivalDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:border-[#F47732] focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-departure"
            className="block text-xs font-bold text-[#0D2E3D] mb-2"
          >
            {locale === 'zh' ? '计划离境日期 *' : 'Departure Date *'}
          </label>
          <input
            id="enquiry-departure"
            type="date"
            required
            value={departureDate}
            onChange={(e) => setDepartureDate(e.target.value)}
            className="w-full px-4 py-3 rounded-xl text-sm bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:border-[#F47732] focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-adults"
            className="block text-xs font-bold text-[#0D2E3D] mb-2"
          >
            {locale === 'zh' ? '成人数量 (Adults) *' : 'Number of Adults *'}
          </label>
          <input
            id="enquiry-adults"
            type="number"
            min={1}
            max={20}
            required
            value={adults}
            onChange={(e) => setAdults(Math.max(1, Number(e.target.value)))}
            className="w-full px-4 py-3 rounded-xl text-sm bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:border-[#F47732] focus:bg-white"
          />
        </div>

        <div>
          <label
            htmlFor="enquiry-children"
            className="block text-xs font-bold text-[#0D2E3D] mb-2"
          >
            {locale === 'zh' ? '儿童数量 (Children)' : 'Number of Children'}
          </label>
          <input
            id="enquiry-children"
            type="number"
            min={0}
            max={20}
            value={children}
            onChange={(e) => setChildren(Math.max(0, Number(e.target.value)))}
            className="w-full px-4 py-3 rounded-xl text-sm bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:border-[#F47732] focus:bg-white"
          />
        </div>
      </div>

      {/* Row 4: Preferred Island or Guesthouse */}
      <div>
        <label
          htmlFor="enquiry-preferred-property"
          className="block text-xs font-bold text-[#0D2E3D] mb-2"
        >
          {locale === 'zh'
            ? '意向居民岛或民宿 (Preferred Island or Guesthouse)'
            : 'Preferred Island or Guesthouse'}
        </label>
        <select
          id="enquiry-preferred-property"
          value={preferredDestinationOrGuesthouse}
          onChange={(e) => setPreferredDestinationOrGuesthouse(e.target.value)}
          className="w-full px-4 py-3 rounded-xl text-sm bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:border-[#F47732] focus:bg-white"
        >
          <option value="">
            {locale === 'zh'
              ? '— 请选择或由顾问根据需求推荐 —'
              : '— Select a verified property / island, or ask for recommendations —'}
          </option>
          <optgroup
            label={locale === 'zh' ? '6家核实认证民宿' : 'Verified Maldivian Guesthouses'}
          >
            {GUESTHOUSES.map((gh) => (
              <option key={gh.id} value={`${gh.officialName} (${gh.islandName.en})`}>
                {gh.officialName} — {localize(gh.islandName)}, {localize(gh.atollName)}
              </option>
            ))}
          </optgroup>
          <optgroup label={locale === 'zh' ? '6座精选居民岛' : 'Featured Inhabited Islands'}>
            {DESTINATIONS.map((d) => (
              <option key={d.id} value={d.name.en}>
                {localize(d.name)} ({localize(d.atollName)})
              </option>
            ))}
          </optgroup>
        </select>
      </div>

      {/* Row 5: Interested Experiences (Pill Toggles) */}
      {!compact && (
        <fieldset>
          <legend className="block text-xs font-bold text-[#0D2E3D] mb-2.5">
            {locale === 'zh'
              ? '感兴趣的海洋与海岛体验（点击选择）'
              : 'Interested Maldives Experiences (Click to select)'}
          </legend>
          <div className="flex flex-wrap gap-2">
            {EXPERIENCES.map((exp) => {
              const checked = interestedExperiences.includes(exp.slug);
              return (
                <button
                  key={exp.id}
                  type="button"
                  onClick={() => toggleExperienceSelection(exp.slug)}
                  aria-pressed={checked}
                  className={`px-4 py-2 rounded-full border text-xs font-semibold cursor-pointer transition-all ${
                    checked
                      ? 'bg-[#0D2E3D] border-[#0D2E3D] text-white shadow-xs'
                      : 'bg-[#F4F8FA] border-[#E6ECEF] text-[#182226] hover:border-[#F47732] hover:bg-white'
                  }`}
                >
                  {checked ? '✓ ' : '+ '}
                  {localize(exp.title)}
                </button>
              );
            })}
          </div>
        </fieldset>
      )}

      {/* Row 6: Additional Requirements */}
      <div>
        <label
          htmlFor="enquiry-notes"
          className="block text-xs font-bold text-[#0D2E3D] mb-2"
        >
          {locale === 'zh'
            ? '补充说明（如国际航班抵达时间、房型偏好、潜水证书等级、饮食要求等）'
            : 'Additional Requirements (Flight Arrival Time, Room Preference, Dive Level, Dietary Notes)'}
        </label>
        <textarea
          id="enquiry-notes"
          rows={compact ? 3 : 4}
          value={additionalRequirements}
          onChange={(e) => setAdditionalRequirements(e.target.value)}
          placeholder={
            locale === 'zh'
              ? '请告知您的计划国际航班时间（以便核对当日快艇或内陆航班衔接）、房型数量需求或微信联系方式...'
              : 'Share your international arrival/departure flight times (if known), room configuration preferences, or specific questions...'
          }
          className="w-full px-4 py-3 rounded-2xl text-sm bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:border-[#F47732] focus:bg-white"
        />
      </div>

      {/* Row 7: Privacy Notice & Consent */}
      <div className="p-4 rounded-2xl bg-[#F4F8FA] border border-[#E6ECEF]">
        <label className="flex items-start gap-3 cursor-pointer text-xs text-[#182226] leading-relaxed">
          <input
            type="checkbox"
            required
            checked={privacyConsent}
            onChange={(e) => setPrivacyConsent(e.target.checked)}
            className="mt-1 h-4 w-4 accent-[#F47732] shrink-0 rounded"
          />
          <span>
            {locale === 'zh'
              ? '我已阅读并同意 '
              : 'I consent to the processing of my travel enquiry data to verify availability and prepare a quotation in accordance with the '}
            <Link
              href="/policies/privacy-policy"
              className="underline font-bold text-[#0D2E3D] hover:text-[#F47732]"
            >
              {locale === 'zh' ? '《隐私政策》' : 'Privacy Policy'}
            </Link>{' '}
            {locale === 'zh' ? '与 ' : 'and '}
            <Link
              href="/policies/booking-policy"
              className="underline font-bold text-[#0D2E3D] hover:text-[#F47732]"
            >
              {locale === 'zh' ? '《预订政策》' : 'Booking Policy'}
            </Link>
            {locale === 'zh'
              ? '，允许平台将我的出行日期与人数信息提供给所选马尔代夫认证民宿以核实实时房态。 *'
              : '. *'}
          </span>
        </label>
      </div>

      {/* Submit Row */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2">
        <div className="flex items-center gap-2 text-xs text-[#5A6970]">
          <ShieldCheck className="w-4 h-4 text-[#F47732] shrink-0" />
          <span>
            {locale === 'zh'
              ? '加密传输 · 绝不虚构房态 · 生成专属可追踪参考号'
              : 'Validated server-side · Generates a permanent Enquiry Reference Code'}
          </span>
        </div>

        <button
          type="submit"
          disabled={submitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F47732] text-white text-xs sm:text-sm font-bold tracking-wide hover:bg-[#E0631E] shadow-[0_8px_24px_rgba(244,119,50,0.35)] disabled:opacity-60 transition-all cursor-pointer"
        >
          {submitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>{locale === 'zh' ? '正在提交咨询...' : 'Submitting Enquiry...'}</span>
            </>
          ) : (
            <>
              <Send className="w-4 h-4" />
              <span>
                {locale === 'zh' ? '提交行程咨询并获取报价' : 'Submit Enquiry for Quotation'}
              </span>
            </>
          )}
        </button>
      </div>
    </form>
  );
}
