'use client';

import React, { useState, useMemo } from 'react';
import { Filter, RotateCcw, ShieldCheck } from 'lucide-react';
import { useLanguage } from '@/context/LanguageContext';
import { GUESTHOUSES } from '@/data/guesthouses';
import { DESTINATIONS } from '@/data/destinations';
import { GuesthouseCard } from '@/components/GuesthouseCard';
import { Breadcrumbs } from '@/components/Breadcrumbs';
import { ScrollReveal } from '@/components/ScrollReveal';

export default function GuesthousesDirectoryPage() {
  const { locale, t, localize } = useLanguage();

  const [selectedIsland, setSelectedIsland] = useState<string>('all');
  const [selectedTransfer, setSelectedTransfer] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredGuesthouses = useMemo(() => {
    return GUESTHOUSES.filter((gh) => {
      if (selectedIsland !== 'all' && gh.destinationSlug !== selectedIsland) {
        return false;
      }
      if (selectedTransfer === 'speedboat') {
        const hasSpeedboat = gh.locationAndTransfer.transferMethods.some(
          (m) => m.method === 'speedboat'
        );
        if (!hasSpeedboat) return false;
      }
      if (selectedTransfer === 'domestic_flight') {
        const hasFlight = gh.locationAndTransfer.transferMethods.some(
          (m) => m.method === 'domestic_flight_speedboat'
        );
        if (!hasFlight) return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchName = gh.officialName.toLowerCase().includes(q);
        const matchIsland =
          gh.islandName.en.toLowerCase().includes(q) ||
          gh.islandName.zh.toLowerCase().includes(q);
        const matchAtoll =
          gh.atollName.en.toLowerCase().includes(q) ||
          gh.atollName.zh.toLowerCase().includes(q);
        const matchDesc =
          gh.conciseDescription.en.toLowerCase().includes(q) ||
          gh.conciseDescription.zh.toLowerCase().includes(q);
        if (!matchName && !matchIsland && !matchAtoll && !matchDesc) {
          return false;
        }
      }
      return true;
    });
  }, [selectedIsland, selectedTransfer, searchQuery]);

  const resetFilters = () => {
    setSelectedIsland('all');
    setSelectedTransfer('all');
    setSearchQuery('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-14 space-y-10">
      <Breadcrumbs
        items={[
          { name: t.nav.home, path: '/' },
          { name: t.nav.guesthouses, path: '/guesthouses' },
        ]}
      />

      {/* Header */}
      <ScrollReveal>
        <div className="space-y-3">
          <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#FFF2EA] text-[#F47732] text-xs font-bold tracking-wider uppercase">
            {locale === 'zh'
              ? '认证海岛民宿名录 · 6家真实运营物业'
              : 'VERIFIED ACCOMMODATION DIRECTORY · 6 ESTABLISHED PROPERTIES'}
          </span>
          <h1 className="text-3xl sm:text-5xl font-bold text-[#0D2E3D] tracking-tight">
            {locale === 'zh'
              ? '六家经核实的马尔代夫居民岛精品民宿'
              : 'Curated Maldivian Guesthouses'}
          </h1>
          <p className="text-sm sm:text-base text-[#5B6B73] max-w-3xl leading-relaxed">
            {locale === 'zh'
              ? '我们精选跨越四大环礁、六座居民岛的六家代表性合法持牌民宿与海滨酒店。每份档案均呈现经核实的房型配置、餐饮说明、维拉纳国际机场（MLE）交通方式及官方联络信息，绝不展示虚假评分或虚构房价。'
              : 'We feature six established, licensed properties across six distinct inhabited islands and four atolls. Each dossier provides verified room categories, dining specifications, transfer logistics from Velana International Airport (MLE), and official property references.'}
          </p>
        </div>
      </ScrollReveal>

      {/* Filter Bar */}
      <ScrollReveal delayMs={80}>
        <div className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.05)] p-5 sm:p-6 grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
          <div className="md:col-span-4">
            <label
              htmlFor="gh-search"
              className="block text-xs font-semibold text-[#0D2E3D] mb-1.5"
            >
              {locale === 'zh' ? '关键词搜索' : 'Search by Name, Island, or Feature'}
            </label>
            <input
              id="gh-search"
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={
                locale === 'zh'
                  ? '搜索 Kaani, Bliss, 鲸鲨, 无边泳池...'
                  : 'e.g. Kaani, Bliss, infinity pool, whale shark...'
              }
              className="w-full px-4 py-3 text-sm rounded-xl bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:bg-white focus:border-[#0D2E3D] transition-colors outline-none"
            />
          </div>

          <div className="md:col-span-4">
            <label
              htmlFor="gh-island-filter"
              className="block text-xs font-semibold text-[#0D2E3D] mb-1.5"
            >
              <Filter className="w-3.5 h-3.5 inline mr-1 text-[#F47732]" />
              {locale === 'zh' ? '按居民岛筛选' : 'Filter by Inhabited Island'}
            </label>
            <select
              id="gh-island-filter"
              value={selectedIsland}
              onChange={(e) => setSelectedIsland(e.target.value)}
              className="w-full px-4 py-3 text-sm rounded-xl bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:bg-white focus:border-[#0D2E3D] transition-colors outline-none"
            >
              <option value="all">
                {locale === 'zh' ? '全部 6 座居民岛' : 'All 6 Inhabited Islands'}
              </option>
              {DESTINATIONS.map((d) => (
                <option key={d.id} value={d.slug}>
                  {localize(d.name)} — {d.administrativeAtoll}
                </option>
              ))}
            </select>
          </div>

          <div className="md:col-span-3">
            <label
              htmlFor="gh-transfer-filter"
              className="block text-xs font-semibold text-[#0D2E3D] mb-1.5"
            >
              {locale === 'zh' ? '按机场接驳方式筛选' : 'Transfer Mode from MLE'}
            </label>
            <select
              id="gh-transfer-filter"
              value={selectedTransfer}
              onChange={(e) => setSelectedTransfer(e.target.value)}
              className="w-full px-4 py-3 text-sm rounded-xl bg-[#F4F8FA] border border-[#E6ECEF] text-[#182226] focus:bg-white focus:border-[#0D2E3D] transition-colors outline-none"
            >
              <option value="all">
                {locale === 'zh' ? '全部交通方式' : 'All Transfer Modes'}
              </option>
              <option value="speedboat">
                {locale === 'zh' ? '机场直达快艇 (30–110分钟)' : 'Direct Speedboat from MLE'}
              </option>
              <option value="domestic_flight">
                {locale === 'zh' ? '支持内陆航班衔接 (VAM / KDO)' : 'Domestic Flight Connection'}
              </option>
            </select>
          </div>

          <div className="md:col-span-1">
            <button
              type="button"
              onClick={resetFilters}
              title={locale === 'zh' ? '重置筛选' : 'Reset Filters'}
              className="w-full h-[46px] rounded-xl inline-flex items-center justify-center bg-[#EDF6F6] text-[#0D2E3D] hover:bg-[#F47732] hover:text-white transition-colors cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
          </div>
        </div>
      </ScrollReveal>

      {/* Results Grid or Designed Empty State */}
      {filteredGuesthouses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filteredGuesthouses.map((gh, idx) => (
            <ScrollReveal key={gh.id} delayMs={idx * 75}>
              <GuesthouseCard guesthouse={gh} />
            </ScrollReveal>
          ))}
        </div>
      ) : (
        <div className="bg-white rounded-3xl border border-[#E6ECEF] p-12 text-center space-y-4">
          <p className="text-xs font-bold uppercase tracking-widest text-[#F47732]">
            {locale === 'zh' ? '无匹配结果' : 'NO MATCHING PROPERTIES'}
          </p>
          <h2 className="text-xl font-bold text-[#0D2E3D]">
            {locale === 'zh'
              ? '当前筛选条件下未找到对应的认证民宿'
              : 'No guesthouses match your current filter combination'}
          </h2>
          <p className="text-sm text-[#5B6B73] max-w-md mx-auto">
            {locale === 'zh'
              ? '请点击下方按钮重置筛选条件，查看全部 6 家经过严格核实的马尔代夫居民岛民宿。'
              : 'Reset your active filters below to view all six verified Maldivian guesthouses.'}
          </p>
          <button
            type="button"
            onClick={resetFilters}
            className="px-6 py-3 rounded-full bg-[#F47732] text-white text-xs font-bold hover:bg-[#E06520] transition-colors cursor-pointer"
          >
            {locale === 'zh' ? '重置筛选条件' : 'Reset All Filters'}
          </button>
        </div>
      )}

      {/* Comparison Matrix Table for Easy Mobile & Desktop Scanning */}
      <ScrollReveal>
        <section className="bg-white rounded-3xl border border-[#E6ECEF] shadow-[0_12px_36px_rgba(13,46,61,0.04)] p-6 sm:p-8 space-y-5 overflow-x-auto">
          <div className="flex items-center gap-2.5">
            <ShieldCheck className="w-5 h-5 text-[#F47732]" />
            <h2 className="text-xl font-bold text-[#0D2E3D]">
              {locale === 'zh'
                ? '六家认证民宿核心参数横向对比表'
                : 'Verified Property Comparison Matrix'}
            </h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#E6ECEF]">
            <table className="w-full text-left border-collapse text-xs sm:text-sm min-w-[720px]">
              <thead>
                <tr className="text-[#0D2E3D] bg-[#F4F8FA] border-b border-[#E6ECEF]">
                  <th className="py-3.5 px-4 font-bold">
                    {locale === 'zh' ? '民宿官方名称' : 'Official Property Name'}
                  </th>
                  <th className="py-3.5 px-4 font-bold">
                    {locale === 'zh' ? '所在居民岛与环礁' : 'Island & Atoll'}
                  </th>
                  <th className="py-3.5 px-4 font-bold">
                    {locale === 'zh' ? '机场接驳耗时' : 'Transfer from MLE'}
                  </th>
                  <th className="py-3.5 px-4 font-bold">
                    {locale === 'zh' ? '核心特色与房礁条件' : 'Signature Feature'}
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#E6ECEF]">
                {GUESTHOUSES.map((gh) => (
                  <tr key={gh.id} className="hover:bg-[#F4F8FA]/70 transition-colors">
                    <td className="py-3.5 px-4 font-bold text-[#0D2E3D]">{gh.officialName}</td>
                    <td className="py-3.5 px-4 text-[#182226]">
                      {localize(gh.islandName)} · {localize(gh.atollName)}
                    </td>
                    <td className="py-3.5 px-4 text-[#5B6B73]">
                      {localize(gh.locationAndTransfer.transferMethods[0]?.duration)}
                    </td>
                    <td className="py-3.5 px-4 text-[#182226]">
                      {localize(gh.localizedSubtitle)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
