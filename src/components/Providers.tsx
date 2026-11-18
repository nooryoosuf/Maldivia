'use client';

import React from 'react';
import { LanguageProvider } from '@/context/LanguageContext';
import { TripPlannerProvider } from '@/context/TripPlannerContext';
import { CookieConsentProvider } from '@/context/CookieConsentContext';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { CookieBannerAndModal } from '@/components/CookieBannerAndModal';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <CookieConsentProvider>
        <TripPlannerProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-5 focus:py-2.5 focus:rounded-full focus:bg-[#F47732] focus:text-white focus:font-bold"
          >
            Skip to main content
          </a>
          <div className="min-h-screen flex flex-col bg-[#FAFBFD] text-[#182226]">
            <Navbar />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <Footer />
            <CookieBannerAndModal />
          </div>
        </TripPlannerProvider>
      </CookieConsentProvider>
    </LanguageProvider>
  );
}
