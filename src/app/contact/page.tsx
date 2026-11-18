'use client';

import React, { use, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { Phone, Mail, ExternalLink, ShieldAlert, MessageSquare } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GUESTHOUSES } from '@/data/guesthouses';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { EnquiryForm } from '@/components/EnquiryForm';

function ContactContent() {
  const searchParams = useSearchParams();
  const preselectedProperty = searchParams.get('property') || '';
  const { locale, t, localize } = useLanguage();

  const officialWeChat = process.env.NEXT_PUBLIC_OFFICIAL_WECHAT_ID;
  const officialEmail = process.env.NEXT_PUBLIC_OFFICIAL_EMAIL;
  const officialWhatsApp = process.env.NEXT_PUBLIC_OFFICIAL_WHATSAPP;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 space-y-14">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: t.nav.contact, path: '/contact' },
        ]}
      />

      {/* Header */}
      <div className="border-b border-[#E2DFD5] pb-8 space-y-3">
        <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F47732]">
          {locale === 'zh'
            ? '联系与行程定制咨询 · 中英双语支持'
            : 'CONTACT & ITINERARY ENQUIRIES · ENGLISH & 简体中文'}
        </span>
        <h1 className="text-3xl sm:text-5xl font-bold text-[#123B4A]">
          {locale === 'zh'
            ? '规划您的马尔代夫居民岛假期'
            : 'Start Planning Your Maldives Journey'}
        </h1>
        <p className="text-sm sm:text-base text-[#525B5E] max-w-3xl leading-relaxed">
          {locale === 'zh'
            ? '通过下方表单提交您的计划出行日期、人数与心仪海岛，我们将为您核实实时房态与机场快艇班次。页面同时附有全部6家精选民宿的官方已核实联络方式及马尔代夫官方应急电话。'
            : 'Submit your travel dates and island preferences below for a verified availability and transfer quotation, or consult our directory of verified property contact details.'}
        </p>
      </div>

      {/* Main Grid: Enquiry Form + Verified Contact Dossier */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-8">
          <EnquiryForm defaultPropertyOrIsland={preselectedProperty} />
        </div>

        {/* Right Sidebar: Agency Channels & Verified Property Directory */}
        <aside className="lg:col-span-4 space-y-6">
          {/* Direct Agency Channels / WeChat Readiness */}
          <div className="bg-[#123B4A] text-white p-6 space-y-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-[#F47732]">
              <MessageSquare className="w-4 h-4" />
              <span>
                {locale === 'zh' ? '平台直联与微信咨询通道' : 'DIRECT CONSULTATION CHANNELS'}
              </span>
            </div>
            <p className="text-xs text-[#EAF3F2]/85 leading-relaxed">
              {locale === 'zh'
                ? '在线咨询表单全天24小时接收行程需求并即时生成咨询参考编号（Reference Code）。'
                : 'Our online enquiry system is active 24/7 and issues an instant Enquiry Reference Code upon submission.'}
            </p>

            {officialWeChat || officialEmail || officialWhatsApp ? (
              <div className="space-y-2 text-xs pt-2 border-t border-white/15">
                {officialWeChat && (
                  <p>
                    <strong>WeChat (微信):</strong> {officialWeChat}
                  </p>
                )}
                {officialWhatsApp && (
                  <p>
                    <strong>WhatsApp:</strong> {officialWhatsApp}
                  </p>
                )}
                {officialEmail && (
                  <p>
                    <strong>Email:</strong> {officialEmail}
                  </p>
                )}
              </div>
            ) : (
              <div className="p-3.5 bg-[#0C2934] border border-white/15 text-xs text-[#EAF3F2]/80 space-y-1">
                <p className="font-semibold text-[#F47732]">
                  {locale === 'zh'
                    ? '信息真实性说明（待配置企业微信/专线）'
                    : 'Pre-Launch Configuration Notice'}
                </p>
                <p className="leading-relaxed">
                  {locale === 'zh'
                    ? '遵循“绝不编造虚假联系方式”准则，平台官方企业微信号与专线电话将在企业主完成配置环境变量（NEXT_PUBLIC_OFFICIAL_WECHAT_ID）后在此自动显示。目前请直接使用左侧在线咨询系统，或参考下方已核实的6家民宿官方联络方式。'
                    : 'In accordance with our strict zero-fabrication policy, agency phone and WeChat IDs are populated via environment variables (NEXT_PUBLIC_OFFICIAL_WECHAT_ID) upon business owner sign-off. Use the validated enquiry form or the verified property contacts below.'}
                </p>
              </div>
            )}
          </div>

          {/* Verified Direct Property Contacts */}
          <div className="bg-white border border-[#E2DFD5] p-6 space-y-4">
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47732]">
              {locale === 'zh'
                ? '6家认证民宿官方已核实联络方式'
                : 'VERIFIED PROPERTY CONTACTS'}
            </span>
            <div className="divide-y divide-[#E2DFD5] text-xs">
              {GUESTHOUSES.map((gh) => (
                <div key={gh.id} className="py-3 first:pt-0 last:pb-0 space-y-1">
                  <p className="font-bold text-[#123B4A] text-sm">{gh.officialName}</p>
                  <p className="text-[#525B5E]">{localize(gh.islandName)}</p>
                  {gh.officialContact.officialPhone && (
                    <p className="flex items-center gap-1.5 text-[#252B2D]">
                      <Phone className="w-3 h-3 text-[#F47732]" />
                      <span>{gh.officialContact.officialPhone}</span>
                    </p>
                  )}
                  {gh.officialContact.officialEmail && (
                    <p className="flex items-center gap-1.5 text-[#252B2D]">
                      <Mail className="w-3 h-3 text-[#F47732]" />
                      <span>{gh.officialContact.officialEmail}</span>
                    </p>
                  )}
                  {gh.officialContact.websiteUrl && (
                    <p className="flex items-center gap-1.5">
                      <ExternalLink className="w-3 h-3 text-[#F47732]" />
                      <a
                        href={gh.officialContact.websiteUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline text-[#123B4A] hover:text-[#F47732]"
                      >
                        {gh.officialContact.websiteUrl}
                      </a>
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Verified Maldives Emergency Contacts */}
          <div className="bg-[#FDF1EA] border border-[#F47732]/40 p-5 space-y-2 text-xs">
            <div className="flex items-center gap-2 font-bold text-[#123B4A] uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-[#F47732]" />
              <span>
                {locale === 'zh'
                  ? '马尔代夫官方紧急服务电话'
                  : 'Verified Maldives Emergency Hotlines'}
              </span>
            </div>
            <ul className="space-y-1 text-[#252B2D]">
              <li>
                <strong>{locale === 'zh' ? '警察报警：' : 'Police Emergency:'}</strong> 119
              </li>
              <li>
                <strong>{locale === 'zh' ? '医疗急救：' : 'Ambulance:'}</strong> 102
              </li>
              <li>
                <strong>{locale === 'zh' ? '海岸警卫队海上搜救：' : 'MNDF Coast Guard:'}</strong>{' '}
                191
              </li>
              <li>
                <strong>{locale === 'zh' ? '旅游警察热线：' : 'Tourist Police:'}</strong> 1478 /
                +960 979-0070
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default function ContactPage() {
  return (
    <Suspense fallback={<div className="max-w-7xl mx-auto p-10">Loading...</div>}>
      <ContactContent />
    </Suspense>
  );
}
