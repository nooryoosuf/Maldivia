'use client';

import React from 'react';
import Link from 'next/link';
import { ShieldCheck, Compass, Anchor, Languages, ArrowUpRight } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { GUESTHOUSES } from '@/data/guesthouses';

export default function AboutPage() {
  const { locale, t } = useLanguage();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 space-y-16">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: t.nav.aboutUs, path: '/about' },
        ]}
      />

      {/* Editorial Hero */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center border-b border-[#E2DFD5] pb-12">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F47732]">
            {locale === 'zh'
              ? '关于 MALDIVIA 马尔代夫雅途 · 编辑级旅行策展原则'
              : 'ABOUT MALDIVIA · OUR EDITORIAL CURATION STANDARD'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#123B4A] leading-tight">
            {locale === 'zh'
              ? '以严谨核实与本地视角，连接全球旅行者与马尔代夫真实居民岛。'
              : 'Connecting International Travellers with the Inhabited Islands of the Maldives.'}
          </h1>
          <p className="text-base text-[#252B2D] leading-relaxed">
            {locale === 'zh'
              ? '长期以来，马尔代夫旅行往往被简化为千篇一律的私人度假村宣传册或充斥着虚假低价与过期船表的旅游模板。我们创立本平台的初衷，是以高端旅行杂志的视觉品质与严谨核实的地理交通数据，帮助国际与中国自由行旅客安心探索马尔代夫最具魅力的有人居住海岛。'
              : 'For decades, international coverage of the Maldives focused almost exclusively on private resort enclaves. Following the opening of inhabited islands to community guesthouses, a wealth of authentic marine and cultural experiences emerged—yet reliable, consolidated information on inter-atoll speedboat schedules, house reefs, and verified properties remained scattered.'}
          </p>
        </div>

        <div className="lg:col-span-5 aspect-[4/3] bg-[#EAF3F2] border border-[#E2DFD5] overflow-hidden">
          <img
            src="https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Dhoni_Sailboat_in_the_Maldives_6968.jpg/1920px-Dhoni_Sailboat_in_the_Maldives_6968.jpg"
            alt={
              locale === 'zh'
                ? '航行在马尔代夫碧绿泻湖上的传统木制多尼帆船'
                : 'Traditional wooden Maldivian dhoni boat gliding across a turquoise lagoon in the Maldives'
            }
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Four Pillars of Our Approach */}
      <section className="space-y-8">
        <div>
          <span className="text-xs font-bold uppercase tracking-[0.16em] text-[#F47732]">
            {locale === 'zh' ? '四大核心准则' : 'OUR FOUR OPERATING PRINCIPLES'}
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-[#123B4A] mt-1">
            {locale === 'zh'
              ? '我们如何为您筛选与规划每一段海岛旅程'
              : 'How We Research, Verify & Plan'}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-[#E2DFD5] p-6 sm:p-8 space-y-3">
            <ShieldCheck className="w-6 h-6 text-[#F47732]" />
            <h3 className="text-xl font-bold text-[#123B4A]">
              {locale === 'zh'
                ? '1. 零虚构内容与100%客观核实承诺'
                : '1. Strict Verification & Zero Fabricated Claims'}
            </h3>
            <p className="text-sm text-[#252B2D] leading-relaxed">
              {locale === 'zh'
                ? '我们绝不在网站上展示任何虚构评分、编造的住客评论、模拟的虚假库存或未含税的诱饵低价。本平台收录的每一座岛屿经纬度、维拉纳机场距离、快艇航程及民宿设施均经过严格核实。'
                : 'We never publish fabricated guest reviews, invented star ratings, simulated booking widgets, or placeholder pricing. Every coordinate, transfer duration from Velana International Airport (MLE), and property facility listed on this platform is verified.'}
            </p>
          </div>

          <div className="bg-white border border-[#E2DFD5] p-6 sm:p-8 space-y-3">
            <Compass className="w-6 h-6 text-[#F47732]" />
            <h3 className="text-xl font-bold text-[#123B4A]">
              {locale === 'zh'
                ? '2. 跨越四大环礁的差异化海岛策展'
                : '2. Distinct Island Profiles Across Four Atolls'}
            </h3>
            <p className="text-sm text-[#252B2D] leading-relaxed">
              {locale === 'zh'
                ? '我们精心挑选的6家认证民宿分别代表了截然不同的海岛体验：马富士岛的屋顶无边泳池与便捷快艇、迪古拉岛的南阿里鲸鲨保护区、富力杜岛的浅滩野生黄貂鱼、托杜岛的热带果园与海龟房礁、乌库拉斯岛的1公里岸潜海滩，以及拉姆甘岛的免快艇跨海大桥与南部深潜。'
                : 'Rather than listing hundreds of unvetted rooms, we focus on six established properties across Kaafu, South Ari, North Ari, Vaavu, and Laamu Atolls—each chosen for a specific marine or geographical strength.'}
            </p>
          </div>

          <div className="bg-white border border-[#E2DFD5] p-6 sm:p-8 space-y-3">
            <Anchor className="w-6 h-6 text-[#F47732]" />
            <h3 className="text-xl font-bold text-[#123B4A]">
              {locale === 'zh'
                ? '3. 严谨的岛际交通与航班时刻衔接'
                : '3. Practical Inter-Atoll Transfer Logistics'}
            </h3>
            <p className="text-sm text-[#252B2D] leading-relaxed">
              {locale === 'zh'
                ? '前往马尔代夫居民岛最关键的环节是交通衔接。我们的行程规划团队熟知各岛定期快艇时刻表、MTCC 公共渡轮班期（含周五主麻日停航规则）及内陆航班（MLE–VAM / MLE–KDO）行李与转机时间要求。'
                : 'Reaching an inhabited island smoothly requires matching your international arrival at Velana Airport with scheduled speedboats or domestic flights—accounting for Friday prayer adjustments and weather windows.'}
            </p>
          </div>

          <div className="bg-white border border-[#E2DFD5] p-6 sm:p-8 space-y-3">
            <Languages className="w-6 h-6 text-[#F47732]" />
            <h3 className="text-xl font-bold text-[#123B4A]">
              {locale === 'zh'
                ? '4. 深度适配中国与全球旅行者需求'
                : '4. Dedicated Support for International & Chinese Travellers'}
            </h3>
            <p className="text-sm text-[#252B2D] leading-relaxed">
              {locale === 'zh'
                ? '我们特别针对中国旅行者提供全套简体中文指南、中马30天免签与 IMUGA 免费电子申报防坑提示、2013版崭新美元准备贴士，且全站技术架构针对中国大陆网络环境进行了直连优化。'
                : 'Our platform is engineered with full bilingual support (English & Simplified Chinese 简体中文) and zero reliance on map or font services blocked in mainland China.'}
            </p>
          </div>
        </div>
      </section>

      {/* Our 6 Verified Partner Properties */}
      <section className="bg-[#123B4A] text-white p-8 sm:p-10 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-white/15 pb-5">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-[#F47732]">
              {locale === 'zh' ? '核实民宿名录' : 'VERIFIED PORTFOLIO'}
            </span>
            <h2 className="text-2xl font-bold mt-1">
              {locale === 'zh'
                ? '本平台首批精选的六家马尔代夫真实民宿'
                : 'Our Six Featured Maldivian Properties'}
            </h2>
          </div>
          <Link
            href="/guesthouses"
            className="text-xs font-bold uppercase tracking-wider text-[#F47732] hover:underline inline-flex items-center gap-1"
          >
            <span>{locale === 'zh' ? '查看全部详情' : 'View Full Directory'}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {GUESTHOUSES.map((gh) => (
            <Link
              key={gh.id}
              href={`/guesthouses/${gh.slug}`}
              className="p-4 bg-[#0C2934] border border-white/10 hover:border-[#F47732] transition-colors space-y-1"
            >
              <p className="font-bold text-white">{gh.officialName}</p>
              <p className="text-xs text-[#F47732]">
                {locale === 'zh' ? gh.islandName.zh : gh.islandName.en} ·{' '}
                {locale === 'zh' ? gh.atollName.zh : gh.atollName.en}
              </p>
              <p className="text-xs text-[#EAF3F2]/75">{gh.officialContact.address}</p>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
