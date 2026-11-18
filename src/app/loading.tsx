import React from 'react';

export default function Loading() {
  return (
    <div
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 space-y-8"
      role="status"
      aria-label="Loading content"
    >
      <div className="h-6 w-48 bg-[#E2DFD5] animate-pulse" />
      <div className="h-12 w-3/4 max-w-2xl bg-[#E2DFD5] animate-pulse" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <div className="aspect-[16/10] bg-[#EAF3F2] border border-[#E2DFD5] animate-pulse" />
        <div className="aspect-[16/10] bg-[#EAF3F2] border border-[#E2DFD5] animate-pulse" />
        <div className="aspect-[16/10] bg-[#EAF3F2] border border-[#E2DFD5] animate-pulse" />
      </div>
    </div>
  );
}
