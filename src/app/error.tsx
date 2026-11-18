'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import { AlertTriangle, RefreshCw } from 'lucide-react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 py-24 text-center space-y-6">
      <div className="inline-flex items-center justify-center w-14 h-14 bg-[#FDF1EA] text-[#F47732] border border-[#F47732]/30">
        <AlertTriangle className="w-7 h-7" />
      </div>
      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#F47732]">
        SYSTEM INTERRUPT · 页面加载异常
      </p>
      <h1 className="text-3xl font-bold text-[#123B4A]">
        We encountered an unexpected issue loading this view
      </h1>
      <p className="text-sm text-[#525B5E] max-w-lg mx-auto">
        Please try reloading the section or return to the main directory. Your Trip Planner selections remain safely stored in your browser.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
        <button
          type="button"
          onClick={() => reset()}
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#F47732] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#DC621F] cursor-pointer"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Try Again / 重试</span>
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 bg-[#123B4A] text-white text-xs font-bold uppercase tracking-wider"
        >
          Return Home / 返回首页
        </Link>
      </div>
    </div>
  );
}
