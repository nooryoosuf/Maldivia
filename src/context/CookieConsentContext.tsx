'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface CookiePreferencesState {
  essential: true; // Always required
  functionalLocaleAndPlanner: boolean;
  privacyConsciousAnalytics: boolean;
  hasResponded: boolean;
  updatedAt?: string;
}

interface CookieConsentContextValue {
  preferences: CookiePreferencesState;
  savePreferences: (prefs: {
    functionalLocaleAndPlanner: boolean;
    privacyConsciousAnalytics: boolean;
  }) => void;
  acceptAll: () => void;
  essentialOnly: () => void;
  isModalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}

const STORAGE_KEY = 'maldivia_cookie_consent_v1';

const DEFAULT_PREFS: CookiePreferencesState = {
  essential: true,
  functionalLocaleAndPlanner: true,
  privacyConsciousAnalytics: false,
  hasResponded: false,
};

const CookieConsentContext = createContext<CookieConsentContextValue | undefined>(undefined);

export function CookieConsentProvider({ children }: { children: React.ReactNode }) {
  const [preferences, setPreferences] = useState<CookiePreferencesState>(DEFAULT_PREFS);
  const [isModalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved) as CookiePreferencesState;
        setPreferences({
          essential: true,
          functionalLocaleAndPlanner: Boolean(parsed.functionalLocaleAndPlanner),
          privacyConsciousAnalytics: Boolean(parsed.privacyConsciousAnalytics),
          hasResponded: true,
          updatedAt: parsed.updatedAt,
        });
      }
    } catch {
      // Ignore storage access errors
    }
  }, []);

  const persist = (next: CookiePreferencesState) => {
    setPreferences(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage access errors
    }
  };

  const savePreferences = (prefs: {
    functionalLocaleAndPlanner: boolean;
    privacyConsciousAnalytics: boolean;
  }) => {
    persist({
      essential: true,
      functionalLocaleAndPlanner: prefs.functionalLocaleAndPlanner,
      privacyConsciousAnalytics: prefs.privacyConsciousAnalytics,
      hasResponded: true,
      updatedAt: new Date().toISOString(),
    });
    setModalOpen(false);
  };

  const acceptAll = () => {
    savePreferences({
      functionalLocaleAndPlanner: true,
      privacyConsciousAnalytics: true,
    });
  };

  const essentialOnly = () => {
    savePreferences({
      functionalLocaleAndPlanner: false,
      privacyConsciousAnalytics: false,
    });
  };

  return (
    <CookieConsentContext.Provider
      value={{
        preferences,
        savePreferences,
        acceptAll,
        essentialOnly,
        isModalOpen,
        setModalOpen,
      }}
    >
      {children}
    </CookieConsentContext.Provider>
  );
}

export function useCookieConsent(): CookieConsentContextValue {
  const context = useContext(CookieConsentContext);
  if (!context) {
    throw new Error('useCookieConsent must be used within a CookieConsentProvider');
  }
  return context;
}
