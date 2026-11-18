'use client';

import React from 'react';
import Link from 'next/link';
import { Compass, ArrowLeft, Search } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';

export default function NotFound() {
  const { locale } = useLanguage();

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10 py-24 text-center space-y-6">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-[#EAF3F2] text-[#F47732] border border-[#D2E4E2]">
        <Compass className="w-7 h-7" />
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F47732]">
        {locale === 'zh' ? '404 · 未找到该海岛或页面' : '404 · COORDINATES NOT FOUND'}
      </p>
      <h1 className="text-3xl sm:text-5xl font-bold text-[#123B4A]">
        {locale === 'zh'
          ? '您访问的页面不在我们的环礁航线图上'
          : 'This Chart Coordinate Does Not Exist'}
      </h1>
      <p className="text-base text-[#525B5E] max-w-xl mx-auto leading-relaxed">
        {locale === 'zh'
          ? '您所查找的页面可能已移动，或链接地址有误。您可以返回首页、浏览6家核实认证民宿，或使用全站搜索查找目的地。'
          : 'The page or island dossier you requested could not be found. Explore our verified guesthouse directory, destination profiles, or site-wide search below.'}
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#F47732] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#DC621F] transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>{locale === 'zh' ? '返回首页' : 'Return to Homepage'}</span>
        </Link>
        <Link
          href="/guesthouses"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#123B4A] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#0C2934] transition-colors"
        >
          <span>{locale === 'zh' ? '浏览6家认证民宿' : 'Explore 6 Guesthouses'}</span>
        </Link>
        <Link
          href="/search"
          className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-[#E2DFD5] text-[#123B4A] text-xs font-bold uppercase tracking-wider hover:border-[#F47732] transition-colors"
        >
          <Search className="w-4 h-4 text-[#F47732]" />
          <span>{locale === 'zh' ? '全站搜索' : 'Search Directory'}</span>
        </Link>
      </div>
    </div>
  );
}
