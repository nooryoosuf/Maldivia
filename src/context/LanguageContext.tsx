'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import type { Locale, LocalizedText, LocalizedStringArray } from '@/types/domain';
import enMessages from '@/i18n/en.json';
import zhMessages from '@/i18n/zh.json';

type Messages = typeof enMessages;

interface LanguageContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  t: Messages;
  localize: (text: LocalizedText | undefined) => string;
  localizeList: (list: LocalizedStringArray | undefined) => string[];
  formatDate: (isoDate: string) => string;
  formatNumber: (value: number) => string;
}

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

const STORAGE_KEY = 'maldivia_preferred_locale';

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en');

  useEffect(() => {
    try {
      const saved = window.localStorage.getItem(STORAGE_KEY) as Locale | null;
      if (saved === 'en' || saved === 'zh') {
        setLocaleState(saved);
        document.documentElement.lang = saved === 'zh' ? 'zh-CN' : 'en';
      }
    } catch {
      // Ignore storage access restrictions
    }
  }, []);

  const setLocale = (nextLocale: Locale) => {
    setLocaleState(nextLocale);
    try {
      window.localStorage.setItem(STORAGE_KEY, nextLocale);
      document.documentElement.lang = nextLocale === 'zh' ? 'zh-CN' : 'en';
    } catch {
      // Ignore storage access restrictions
    }
  };

  const t = locale === 'zh' ? zhMessages : enMessages;

  const localize = (text: LocalizedText | undefined): string => {
    if (!text) return '';
    return text[locale] || text.en || '';
  };

  const localizeList = (list: LocalizedStringArray | undefined): string[] => {
    if (!list) return [];
    return list[locale] || list.en || [];
  };

  const formatDate = (isoDate: string): string => {
    if (!isoDate) return '';
    try {
      const date = new Date(isoDate);
      if (Number.isNaN(date.getTime())) return isoDate;
      return new Intl.DateTimeFormat(locale === 'zh' ? 'zh-CN' : 'en-GB', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }).format(date);
    } catch {
      return isoDate;
    }
  };

  const formatNumber = (value: number): string => {
    return new Intl.NumberFormat(locale === 'zh' ? 'zh-CN' : 'en-US').format(value);
  };

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t,
        localize,
        localizeList,
        formatDate,
        formatNumber,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
