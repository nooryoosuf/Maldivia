'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export interface TripPlanDraft {
  arrivalDate: string;
  departureDate: string;
  adults: number;
  children: number;
  selectedDestinations: string[]; // slugs
  selectedGuesthouses: string[]; // slugs
  selectedExperiences: string[]; // slugs
  notes: string;
}

interface TripPlannerContextValue {
  draft: TripPlanDraft;
  updateDraft: (partial: Partial<TripPlanDraft>) => void;
  toggleDestination: (slug: string) => void;
  toggleGuesthouse: (slug: string) => void;
  toggleExperience: (slug: string) => void;
  clearDraft: () => void;
  totalSelectedCount: number;
}

const DEFAULT_DRAFT: TripPlanDraft = {
  arrivalDate: '',
  departureDate: '',
  adults: 2,
  children: 0,
  selectedDestinations: [],
  selectedGuesthouses: [],
  selectedExperiences: [],
  notes: '',
};

const STORAGE_KEY = 'maldivia_trip_planner_v1';

const TripPlannerContext = createContext<TripPlannerContextValue | undefined>(undefined);

export function TripPlannerProvider({ children }: { children: React.ReactNode }) {
  const [draft, setDraft] = useState<TripPlanDraft>(DEFAULT_DRAFT);

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as Partial<TripPlanDraft>;
        setDraft((prev) => ({
          ...prev,
          ...parsed,
          selectedDestinations: Array.isArray(parsed.selectedDestinations)
            ? parsed.selectedDestinations
            : [],
          selectedGuesthouses: Array.isArray(parsed.selectedGuesthouses)
            ? parsed.selectedGuesthouses
            : [],
          selectedExperiences: Array.isArray(parsed.selectedExperiences)
            ? parsed.selectedExperiences
            : [],
        }));
      }
    } catch {
      // Ignore storage errors
    }
  }, []);

  const persist = (next: TripPlanDraft) => {
    setDraft(next);
    try {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage errors
    }
  };

  const updateDraft = (partial: Partial<TripPlanDraft>) => {
    persist({ ...draft, ...partial });
  };

  const toggleItem = (list: string[], slug: string): string[] =>
    list.includes(slug) ? list.filter((item) => item !== slug) : [...list, slug];

  const toggleDestination = (slug: string) => {
    persist({
      ...draft,
      selectedDestinations: toggleItem(draft.selectedDestinations, slug),
    });
  };

  const toggleGuesthouse = (slug: string) => {
    persist({
      ...draft,
      selectedGuesthouses: toggleItem(draft.selectedGuesthouses, slug),
    });
  };

  const toggleExperience = (slug: string) => {
    persist({
      ...draft,
      selectedExperiences: toggleItem(draft.selectedExperiences, slug),
    });
  };

  const clearDraft = () => {
    persist(DEFAULT_DRAFT);
  };

  const totalSelectedCount =
    draft.selectedDestinations.length +
    draft.selectedGuesthouses.length +
    draft.selectedExperiences.length;

  return (
    <TripPlannerContext.Provider
      value={{
        draft,
        updateDraft,
        toggleDestination,
        toggleGuesthouse,
        toggleExperience,
        clearDraft,
        totalSelectedCount,
      }}
    >
      {children}
    </TripPlannerContext.Provider>
  );
}

export function useTripPlanner(): TripPlannerContextValue {
  const context = useContext(TripPlannerContext);
  if (!context) {
    throw new Error('useTripPlanner must be used within a TripPlannerProvider');
  }
  return context;
}
