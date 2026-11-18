'use client';

import React, { useEffect, useRef, useState, useMemo } from 'react';
import Link from 'next/link';
import * as maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import {
  MapPin,
  Ship,
  Plane,
  Compass,
  ArrowUpRight,
  Sparkles,
  ShieldCheck,
  Building2,
  Palmtree,
  Hotel,
  Maximize2,
  RotateCcw,
  X,
  ChevronRight,
  Info,
  Calendar,
  Layers,
  CheckCircle2
} from 'lucide-react';

import atollsGeoJson from '@/data/geo/atolls.json';
import islandsGeoJson from '@/data/geo/islands.json';
import { MALDIVES_ISLANDS } from '@/data/geo/islandsData';
import {
  getAtollAccommodationStats,
  OFFICIAL_MOT_ATOLL_REGISTRY,
  STRUCTURED_ACCOMMODATIONS
} from '@/data/accommodations';
import { DESTINATIONS } from '@/data/destinations';
import { GUESTHOUSES } from '@/data/guesthouses';
import { EXPERIENCES } from '@/data/experiences';
import { TRAVEL_GUIDES } from '@/data/travelGuides';
import { useLanguage } from '@/context/LanguageContext';
import type { AtollAccommodationStats } from '@/types/domain';

interface InteractiveMaldivesMapProps {
  initialSelectedSlug?: string;
  initialAtollCode?: string;
}

export function InteractiveMaldivesMap({
  initialSelectedSlug = 'dhigurah',
  initialAtollCode = 'ADh'
}: InteractiveMaldivesMapProps) {
  const { locale } = useLanguage();

  // State
  const [selectedAtollCode, setSelectedAtollCode] = useState<string>(initialAtollCode);
  const [hoveredAtollCode, setHoveredAtollCode] = useState<string | null>(null);
  const [hoverTooltip, setHoverTooltip] = useState<{
    x: number;
    y: number;
    atollCode: string;
    stats: AtollAccommodationStats;
  } | null>(null);
  const [selectedIslandSlug, setSelectedIslandSlug] = useState<string | null>(initialSelectedSlug);
  const [isMobileSheetOpen, setIsMobileSheetOpen] = useState(false);
  const [mapLoaded, setMapLoaded] = useState(false);

  // References
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapRef = useRef<maplibregl.Map | null>(null);

  // Initial geographic bounds of Maldives: from Addu (-0.7°S) to Haa Alif (7.1°N)
  const fullArchipelagoBounds: [number, number, number, number] = [
    72.4, -0.85, 73.85, 7.25
  ];

  // Selected Atoll Stats (Dynamically Computed)
  const currentAtollStats = useMemo(() => {
    return getAtollAccommodationStats(selectedAtollCode);
  }, [selectedAtollCode]);

  // Selected Island
  const currentIsland = useMemo(() => {
    if (!selectedIslandSlug) return null;
    return MALDIVES_ISLANDS.find((i) => i.slug === selectedIslandSlug) || null;
  }, [selectedIslandSlug]);

  // Matching Destination dossier (if featured)
  const matchingDestination = useMemo(() => {
    if (!selectedIslandSlug) return null;
    return DESTINATIONS.find((d) => d.slug === selectedIslandSlug) || null;
  }, [selectedIslandSlug]);

  // Matching Featured Guesthouses
  const matchingGuesthouses = useMemo(() => {
    if (!selectedIslandSlug) {
      // Return featured guesthouses in the selected atoll
      return GUESTHOUSES.filter((gh) => {
        const dest = DESTINATIONS.find((d) => d.slug === gh.destinationSlug);
        if (!dest) return false;
        if (selectedAtollCode === 'K') return dest.atollId === 'atoll-kaafu';
        if (selectedAtollCode === 'ADh') return dest.atollId === 'atoll-alif-dhaal';
        if (selectedAtollCode === 'AA') return dest.atollId === 'atoll-alif-alif';
        if (selectedAtollCode === 'V') return dest.atollId === 'atoll-vaavu';
        if (selectedAtollCode === 'L') return dest.atollId === 'atoll-laamu';
        return false;
      });
    }
    return GUESTHOUSES.filter((gh) => gh.destinationSlug === selectedIslandSlug);
  }, [selectedIslandSlug, selectedAtollCode]);

  // Relevant Experiences in this atoll / island
  const relevantExperiences = useMemo(() => {
    return EXPERIENCES.filter((exp) => {
      if (selectedIslandSlug && exp.relevantIslands.includes(selectedIslandSlug)) {
        return true;
      }
      return false;
    }).slice(0, 3);
  }, [selectedIslandSlug]);

  // Relevant Travel Guides
  const relevantGuides = useMemo(() => {
    return TRAVEL_GUIDES.slice(0, 2);
  }, []);

  // Initialize MapLibre GL
  useEffect(() => {
    if (!mapContainerRef.current || mapRef.current) return;

    // Define clean custom vector style with deep ocean marine aesthetic
    const style: maplibregl.StyleSpecification = {
      version: 8,
      name: 'Maldivian Deep Ocean GIS Chart',
      sources: {
        'atolls-source': {
          type: 'geojson',
          data: atollsGeoJson as GeoJSON.FeatureCollection
        },
        'islands-source': {
          type: 'geojson',
          data: islandsGeoJson as GeoJSON.FeatureCollection
        }
      },
      layers: [
        // 1. Deep Ocean Base Canvas
        {
          id: 'ocean-base',
          type: 'background',
          paint: {
            'background-color': '#071C26'
          }
        },

        // 2. Interactive Atoll Polygons (Subtle Inactive, Vibrant Hover/Active)
        {
          id: 'atolls-fill',
          type: 'fill',
          source: 'atolls-source',
          paint: {
            'fill-color': [
              'case',
              ['==', ['get', 'id'], selectedAtollCode],
              'rgba(244, 119, 50, 0.28)',
              ['==', ['get', 'id'], hoveredAtollCode || ''],
              'rgba(244, 119, 50, 0.16)',
              'rgba(18, 59, 74, 0.38)'
            ],
            'fill-opacity': 0.95
          }
        },

        // 3. Atoll Outer Reef Boundary Line
        {
          id: 'atolls-stroke',
          type: 'line',
          source: 'atolls-source',
          paint: {
            'line-color': [
              'case',
              ['==', ['get', 'id'], selectedAtollCode],
              '#F47732',
              ['==', ['get', 'id'], hoveredAtollCode || ''],
              '#F47732',
              '#205B73'
            ],
            'line-width': [
              'case',
              ['==', ['get', 'id'], selectedAtollCode],
              2.5,
              ['==', ['get', 'id'], hoveredAtollCode || ''],
              2.0,
              1.2
            ],
            'line-opacity': 0.9
          }
        },

        // 4. Atoll Ambient Labels
        {
          id: 'atolls-labels',
          type: 'symbol',
          source: 'atolls-source',
          layout: {
            'text-field': locale === 'zh' ? ['get', 'name_zh'] : ['get', 'admin_code'],
            'text-font': ['Open Sans Semibold', 'Arial Unicode MS Bold'],
            'text-size': 11,
            'text-offset': [0, 0],
            'text-anchor': 'center',
            'text-allow-overlap': false
          },
          paint: {
            'text-color': '#A6C5D0',
            'text-halo-color': '#071C26',
            'text-halo-width': 1.5
          }
        },

        // 5. Island Geographic Dots (Halo)
        {
          id: 'islands-halo',
          type: 'circle',
          source: 'islands-source',
          filter: ['==', ['get', 'is_featured'], true],
          paint: {
            'circle-color': '#F47732',
            'circle-radius': 9,
            'circle-opacity': 0.3,
            'circle-blur': 0.5
          }
        },

        // 6. Island Geographic Dots (Core)
        {
          id: 'islands-core',
          type: 'circle',
          source: 'islands-source',
          paint: {
            'circle-color': [
              'case',
              ['==', ['get', 'slug'], selectedIslandSlug || ''],
              '#FFFFFF',
              ['get', 'is_featured'],
              '#F47732',
              '#EAF3F2'
            ],
            'circle-radius': [
              'case',
              ['==', ['get', 'slug'], selectedIslandSlug || ''],
              6.5,
              ['get', 'is_featured'],
              5,
              3.2
            ],
            'circle-stroke-color': [
              'case',
              ['==', ['get', 'slug'], selectedIslandSlug || ''],
              '#F47732',
              ['get', 'is_featured'],
              '#FFFFFF',
              '#123B4A'
            ],
            'circle-stroke-width': 1.5
          }
        },

        // 7. Island Labels (Featured or Inhabited)
        {
          id: 'islands-labels',
          type: 'symbol',
          source: 'islands-source',
          minzoom: 5.5,
          layout: {
            'text-field': locale === 'zh' ? ['get', 'name_zh'] : ['get', 'name_en'],
            'text-font': ['Open Sans Bold', 'Arial Unicode MS Bold'],
            'text-size': [
              'case',
              ['get', 'is_featured'],
              12,
              10
            ],
            'text-offset': [0.8, 0.2],
            'text-anchor': 'left',
            'text-allow-overlap': false
          },
          paint: {
            'text-color': [
              'case',
              ['get', 'is_featured'],
              '#FFFFFF',
              '#D2E4EA'
            ],
            'text-halo-color': '#071C26',
            'text-halo-width': 2
          }
        }
      ]
    };

    const map = new maplibregl.Map({
      container: mapContainerRef.current,
      style: style,
      bounds: [72.3, -0.9, 73.9, 7.3],
      fitBoundsOptions: {
        padding: { top: 40, bottom: 40, left: 30, right: 30 }
      },
      minZoom: 4.8,
      maxZoom: 14,
      attributionControl: false
    });

    map.addControl(new maplibregl.NavigationControl({ showCompass: true }), 'top-right');

    map.on('load', () => {
      setMapLoaded(true);
      mapRef.current = map;

      // Fit initially to full archipelago
      map.fitBounds(
        [
          [fullArchipelagoBounds[0], fullArchipelagoBounds[1]],
          [fullArchipelagoBounds[2], fullArchipelagoBounds[3]]
        ],
        { padding: 35, duration: 800 }
      );
    });

    // Hover interactions on Atolls
    map.on('mousemove', 'atolls-fill', (e) => {
      if (!e.features || e.features.length === 0) return;
      const feat = e.features[0];
      const atollCode = (feat.properties?.code || feat.properties?.id || '') as string;
      map.getCanvas().style.cursor = 'pointer';

      setHoveredAtollCode(atollCode);

      const stats = getAtollAccommodationStats(atollCode);
      const rect = mapContainerRef.current?.getBoundingClientRect();
      if (rect) {
        setHoverTooltip({
          x: e.point.x,
          y: e.point.y,
          atollCode,
          stats
        });
      }
    });

    map.on('mouseleave', 'atolls-fill', () => {
      map.getCanvas().style.cursor = '';
      setHoveredAtollCode(null);
      setHoverTooltip(null);
    });

    // Click interaction on Atoll Polygon
    map.on('click', 'atolls-fill', (e) => {
      if (!e.features || e.features.length === 0) return;
      const feat = e.features[0];
      const atollCode = (feat.properties?.code || feat.properties?.id || '') as string;
      const bbox = feat.properties?.bbox;

      setSelectedAtollCode(atollCode);
      setSelectedIslandSlug(null);
      setIsMobileSheetOpen(true);

      if (bbox) {
        try {
          const parsedBbox = typeof bbox === 'string' ? JSON.parse(bbox) : bbox;
          map.fitBounds(
            [
              [parsedBbox[0], parsedBbox[1]],
              [parsedBbox[2], parsedBbox[3]]
            ],
            { padding: 60, duration: 1100 }
          );
        } catch {
          // Fallback center
        }
      }
    });

    // Click interaction on Island Point
    map.on('click', 'islands-core', (e) => {
      if (!e.features || e.features.length === 0) return;
      const feat = e.features[0];
      const slug = feat.properties?.slug as string;
      const atollCode = feat.properties?.atoll_code as string;
      const coords = (feat.geometry as GeoJSON.Point).coordinates as [number, number];

      setSelectedIslandSlug(slug);
      if (atollCode) setSelectedAtollCode(atollCode);
      setIsMobileSheetOpen(true);

      map.flyTo({
        center: coords,
        zoom: 10.5,
        speed: 1.2,
        duration: 1200
      });
    });

    map.on('mouseenter', 'islands-core', () => {
      map.getCanvas().style.cursor = 'pointer';
    });

    map.on('mouseleave', 'islands-core', () => {
      map.getCanvas().style.cursor = '';
    });

    return () => {
      map.remove();
      mapRef.current = null;
    };
  }, [locale]);

  // Update dynamic layers styling when selectedAtollCode, hoveredAtollCode, or selectedIslandSlug changes
  useEffect(() => {
    const map = mapRef.current;
    if (!map || !mapLoaded) return;

    if (map.getLayer('atolls-fill')) {
      map.setPaintProperty('atolls-fill', 'fill-color', [
        'case',
        ['==', ['get', 'id'], selectedAtollCode],
        'rgba(244, 119, 50, 0.28)',
        ['==', ['get', 'id'], hoveredAtollCode || ''],
        'rgba(244, 119, 50, 0.16)',
        'rgba(18, 59, 74, 0.38)'
      ]);
    }

    if (map.getLayer('atolls-stroke')) {
      map.setPaintProperty('atolls-stroke', 'line-color', [
        'case',
        ['==', ['get', 'id'], selectedAtollCode],
        '#F47732',
        ['==', ['get', 'id'], hoveredAtollCode || ''],
        '#F47732',
        '#205B73'
      ]);
      map.setPaintProperty('atolls-stroke', 'line-width', [
        'case',
        ['==', ['get', 'id'], selectedAtollCode],
        2.5,
        ['==', ['get', 'id'], hoveredAtollCode || ''],
        2.0,
        1.2
      ]);
    }

    if (map.getLayer('islands-core')) {
      map.setPaintProperty('islands-core', 'circle-color', [
        'case',
        ['==', ['get', 'slug'], selectedIslandSlug || ''],
        '#FFFFFF',
        ['get', 'is_featured'],
        '#F47732',
        '#EAF3F2'
      ]);
      map.setPaintProperty('islands-core', 'circle-radius', [
        'case',
        ['==', ['get', 'slug'], selectedIslandSlug || ''],
        6.5,
        ['get', 'is_featured'],
        5,
        3.2
      ]);
      map.setPaintProperty('islands-core', 'circle-stroke-color', [
        'case',
        ['==', ['get', 'slug'], selectedIslandSlug || ''],
        '#F47732',
        ['get', 'is_featured'],
        '#FFFFFF',
        '#123B4A'
      ]);
    }
  }, [selectedAtollCode, hoveredAtollCode, selectedIslandSlug, mapLoaded]);

  // Handler to select an Atoll from UI
  const handleSelectAtoll = (code: string) => {
    setSelectedAtollCode(code);
    setSelectedIslandSlug(null);
    setIsMobileSheetOpen(true);

    const feat = (atollsGeoJson as GeoJSON.FeatureCollection).features.find(
      (f) => f.id === code
    );
    if (feat && mapRef.current) {
      const bbox = (feat.properties as Record<string, unknown>)?.bbox as [number, number, number, number];
      if (bbox) {
        mapRef.current.fitBounds(
          [
            [bbox[0], bbox[1]],
            [bbox[2], bbox[3]]
          ],
          { padding: 60, duration: 1100 }
        );
      }
    }
  };

  // Handler to select an Island from UI
  const handleSelectIsland = (slug: string) => {
    setSelectedIslandSlug(slug);
    setIsMobileSheetOpen(true);

    const isl = MALDIVES_ISLANDS.find((i) => i.slug === slug);
    if (isl && mapRef.current) {
      setSelectedAtollCode(isl.atollCode);
      mapRef.current.flyTo({
        center: [isl.coordinates[0], isl.coordinates[1]],
        zoom: 11,
        speed: 1.2,
        duration: 1200
      });
    }
  };

  // Reset to full archipelago
  const handleResetArchipelago = () => {
    setSelectedIslandSlug(null);
    if (mapRef.current) {
      mapRef.current.fitBounds(
        [
          [fullArchipelagoBounds[0], fullArchipelagoBounds[1]],
          [fullArchipelagoBounds[2], fullArchipelagoBounds[3]]
        ],
        { padding: 35, duration: 1000 }
      );
    }
  };

  return (
    <div className="bg-white rounded-[2.5rem] border border-[#E6ECEF] p-5 sm:p-7 lg:p-9 shadow-[0_12px_44px_rgba(18,59,74,0.06)] font-sans">
      
      {/* Top Header & Context Description */}
      <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-4 pb-6 border-b border-[#E6ECEF]">
        <div>
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#FFF4ED] text-[#F47732] text-xs font-black tracking-wide border border-[#F47732]/20">
              <Sparkles className="w-3.5 h-3.5" />
              {locale === 'zh'
                ? '官方地理 GIS 实景交互地图'
                : 'Verified Maldives GIS Geographic Map'}
            </span>
            <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#EAF3F2] text-[#123B4A] text-xs font-bold border border-[#123B4A]/10">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              <span>{locale === 'zh' ? '旅游部 2026 官方注册核定' : 'MOT 2026 Registered Data'}</span>
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-[#123B4A] tracking-tight">
            {locale === 'zh'
              ? '马尔代夫全境群岛与环礁地理探索'
              : 'Interactive Archipelago & Atoll Destination Explorer'}
          </h3>
          <p className="text-xs sm:text-sm text-[#5A6970] mt-1 max-w-2xl">
            {locale === 'zh'
              ? '基于马尔代夫国家测绘局（OneMap GIS）精确测绘数据与旅游部注册设施目录。点击任意环礁或居民岛，解锁经纬度坐标、合规民宿数量与真实登岛航线。'
              : 'Built with official Maldives Land & Survey Authority GIS boundaries and Ministry of Tourism licensed facility registry. Click atolls or islands to inspect verified capacities and airport corridors.'}
          </p>
        </div>

        {/* Atoll Fast-Jump Selector Pills */}
        <div className="flex flex-wrap items-center gap-1.5 bg-[#F8F6F0] p-1.5 rounded-2xl border border-[#E6ECEF] max-w-full overflow-x-auto">
          <button
            type="button"
            onClick={handleResetArchipelago}
            className="px-3 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1 text-[#123B4A] hover:bg-white border border-transparent hover:border-[#E6ECEF]"
            title="Reset to Full Maldives Archipelago View"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>{locale === 'zh' ? '全境概览' : 'Full Map'}</span>
          </button>

          {['K', 'ADh', 'AA', 'V', 'B', 'L', 'Gn', 'S'].map((code) => {
            const isSelected = selectedAtollCode === code;
            const atollInfo = OFFICIAL_MOT_ATOLL_REGISTRY[code];
            return (
              <button
                key={code}
                type="button"
                onClick={() => handleSelectAtoll(code)}
                className={`px-3 py-1.5 rounded-xl text-xs font-black transition cursor-pointer shrink-0 ${
                  isSelected
                    ? 'bg-[#123B4A] text-white shadow-sm'
                    : 'text-[#252B2D] hover:bg-white hover:text-[#F47732]'
                }`}
              >
                {code} · {locale === 'zh' ? atollInfo?.nameZh.replace('环礁', '') : code}
              </button>
            );
          })}
        </div>
      </div>

      {/* Main Grid: Interactive Map (Left 7 cols) + Selected Atoll/Island Dossier Panel (Right 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 pt-6 items-stretch">
        
        {/* Left: MapLibre GL Real Geographical Canvas */}
        <div className="lg:col-span-7 flex flex-col space-y-3">
          
          <div className="relative w-full h-[520px] sm:h-[580px] lg:h-[660px] rounded-3xl overflow-hidden border border-[#123B4A]/20 shadow-2xl bg-[#071C26]">
            
            {/* The MapLibre GL Canvas Container */}
            <div ref={mapContainerRef} className="w-full h-full" />

            {/* Top-Left Floating Compass HUD */}
            <div className="absolute top-4 left-4 z-10 bg-[#071C26]/90 backdrop-blur-md border border-white/15 px-3.5 py-2 rounded-2xl shadow-xl pointer-events-auto text-white">
              <div className="flex items-center gap-2 text-xs font-black text-[#EAF3F2]">
                <Compass className="w-4 h-4 text-[#F47732] animate-spin-slow" />
                <span>INDIAN OCEAN · 0.7°S – 7.1°N WGS84</span>
              </div>
              <p className="text-[10px] text-gray-300 font-mono mt-0.5">
                EPSG:4326 Official GIS Atolls
              </p>
            </div>

            {/* Top-Right Island Quick Filter Bar */}
            <div className="absolute top-4 right-14 z-10 hidden sm:flex items-center gap-1.5 bg-[#071C26]/85 backdrop-blur-md border border-white/15 p-1 rounded-2xl pointer-events-auto">
              {['dhigurah', 'maafushi', 'thoddoo', 'fulidhoo', 'ukulhas', 'laamu-gan'].map((slug) => {
                const isSelected = selectedIslandSlug === slug;
                const isl = MALDIVES_ISLANDS.find((i) => i.slug === slug);
                return (
                  <button
                    key={slug}
                    type="button"
                    onClick={() => handleSelectIsland(slug)}
                    className={`px-2.5 py-1 rounded-xl text-[11px] font-bold transition ${
                      isSelected
                        ? 'bg-[#F47732] text-white shadow-md'
                        : 'text-gray-300 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {locale === 'zh' ? isl?.nameZh.replace('岛', '') : isl?.nameEn}
                  </button>
                );
              })}
            </div>

            {/* Hover Tooltip Overlay (Desktop Cursor-following) */}
            {hoverTooltip && (
              <div
                className="absolute z-30 pointer-events-none transform -translate-x-1/2 -translate-y-full mb-3 bg-[#0D2E3D]/95 backdrop-blur-md border border-[#F47732]/60 p-3.5 rounded-2xl shadow-2xl text-white min-w-[220px]"
                style={{
                  left: `${hoverTooltip.x}px`,
                  top: `${hoverTooltip.y - 12}px`
                }}
              >
                <div className="flex items-center justify-between gap-2 pb-1.5 border-b border-white/15">
                  <span className="font-mono text-xs font-black text-[#F47732]">
                    {hoverTooltip.stats.adminCode}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-gray-300 bg-white/10 px-1.5 py-0.5 rounded">
                    Atoll
                  </span>
                </div>
                <h4 className="text-sm font-black text-white mt-1">
                  {locale === 'zh'
                    ? hoverTooltip.stats.atollName.zh
                    : hoverTooltip.stats.atollName.en}
                </h4>

                <div className="grid grid-cols-2 gap-2 mt-2 pt-2 border-t border-white/10 text-xs">
                  <div>
                    <span className="text-[10px] text-gray-400 block">Registered Guesthouses</span>
                    <strong className="text-emerald-400 font-mono font-bold text-sm">
                      {hoverTooltip.stats.registeredGuesthouses}
                    </strong>
                  </div>
                  <div>
                    <span className="text-[10px] text-gray-400 block">Resorts & Hotels</span>
                    <strong className="text-amber-300 font-mono font-bold text-sm">
                      {hoverTooltip.stats.registeredResorts + hoverTooltip.stats.registeredHotels}
                    </strong>
                  </div>
                </div>

                <div className="mt-1.5 text-[10px] text-gray-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                  <span>{hoverTooltip.stats.islandsWithAccommodation} inhabited islands with stays</span>
                </div>
              </div>
            )}

            {/* Bottom Floating Map Legend */}
            <div className="absolute bottom-4 left-4 z-10 bg-[#071C26]/90 backdrop-blur-md border border-white/15 px-4 py-2.5 rounded-2xl shadow-xl pointer-events-auto text-white flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#F47732] ring-2 ring-[#F47732]/40" />
                <span className="text-gray-200 font-medium">
                  {locale === 'zh' ? '精选合作居民岛' : 'Featured Islands'}
                </span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#EAF3F2]" />
                <span className="text-gray-300 font-medium">
                  {locale === 'zh' ? '持牌居民岛/机场' : 'Licensed Island'}
                </span>
              </div>
              <div className="hidden sm:flex items-center gap-1.5">
                <span className="w-4 h-2 rounded border border-[#F47732] bg-[#F47732]/20" />
                <span className="text-gray-300 font-medium">
                  {locale === 'zh' ? '真实地理环礁' : 'Atoll Polygon'}
                </span>
              </div>
            </div>

          </div>

          {/* Map Attribution Bar */}
          <div className="px-2 flex items-center justify-between text-xs text-[#5A6970]">
            <p className="flex items-center gap-1.5">
              <Info className="w-3.5 h-3.5 text-[#F47732] shrink-0" />
              <span>
                Geographic data: <strong>Maldives Geomatics Department & OneMap</strong>.
                Accommodation data: <strong>Ministry of Tourism & Civil Aviation</strong>.
                Last verified: <strong>{currentAtollStats.lastVerifiedDate}</strong>.
              </span>
            </p>
            <span className="font-mono text-[11px] hidden sm:inline">WGS84 / EPSG:4326</span>
          </div>

        </div>

        {/* Right: Selected Atoll / Island Interactive Destination Dossier */}
        <div className="lg:col-span-5 flex flex-col justify-between space-y-5 bg-[#F8F6F0] p-6 sm:p-7 rounded-3xl border border-[#E6ECEF] shadow-sm">
          
          <div className="space-y-5">
            {/* Atoll Title & Administrative Profile */}
            <div className="pb-4 border-b border-[#E6ECEF] space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-xs font-black uppercase tracking-wider text-[#F47732] bg-[#FFF4ED] px-3 py-1 rounded-full border border-[#F47732]/20">
                  {currentAtollStats.adminCode}
                </span>
                <span className="text-xs font-bold text-[#123B4A] bg-[#EAF3F2] px-3 py-1 rounded-full border border-[#123B4A]/10">
                  {currentAtollStats.islandsWithAccommodation} {locale === 'zh' ? '座有人居住岛设接待' : 'Islands with Stays'}
                </span>
              </div>

              <h4 className="text-2xl font-black text-[#123B4A] mt-1">
                {locale === 'zh' ? currentAtollStats.atollName.zh : currentAtollStats.atollName.en}
              </h4>
              <p className="text-xs text-[#5A6970]">
                {locale === 'zh'
                  ? '官方认证旅游接待环礁，涵盖合规持牌民宿、国际品牌度假村与居民岛生态。'
                  : 'Official Maldives tourism atoll with verified operational capacities, licensed local guesthouses, and resort corridors.'}
              </p>
            </div>

            {/* Dynamic Verified Accommodation Statistics Grid */}
            <div className="grid grid-cols-3 gap-2.5">
              
              {/* Stat 1: Registered Guesthouses */}
              <div className="p-3.5 rounded-2xl bg-white border border-[#E6ECEF] shadow-2xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#5A6970] font-bold">
                  <Building2 className="w-3.5 h-3.5 text-[#F47732]" />
                  <span>{locale === 'zh' ? '注册民宿' : 'Guesthouses'}</span>
                </div>
                <p className="text-xl sm:text-2xl font-black text-[#123B4A] font-mono">
                  {currentAtollStats.registeredGuesthouses}
                </p>
                <p className="text-[10px] text-gray-400">
                  {currentAtollStats.guesthouseBeds.toLocaleString()} {locale === 'zh' ? '张床位' : 'beds'}
                </p>
              </div>

              {/* Stat 2: Registered Resorts */}
              <div className="p-3.5 rounded-2xl bg-white border border-[#E6ECEF] shadow-2xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#5A6970] font-bold">
                  <Palmtree className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{locale === 'zh' ? '海岛度假村' : 'Resorts'}</span>
                </div>
                <p className="text-xl sm:text-2xl font-black text-[#123B4A] font-mono">
                  {currentAtollStats.registeredResorts}
                </p>
                <p className="text-[10px] text-gray-400">
                  {currentAtollStats.resortBeds.toLocaleString()} {locale === 'zh' ? '张床位' : 'beds'}
                </p>
              </div>

              {/* Stat 3: Hotels / City Hotels */}
              <div className="p-3.5 rounded-2xl bg-white border border-[#E6ECEF] shadow-2xs space-y-1">
                <div className="flex items-center gap-1.5 text-xs text-[#5A6970] font-bold">
                  <Hotel className="w-3.5 h-3.5 text-blue-600" />
                  <span>{locale === 'zh' ? '注册酒店' : 'Hotels'}</span>
                </div>
                <p className="text-xl sm:text-2xl font-black text-[#123B4A] font-mono">
                  {currentAtollStats.registeredHotels > 0 ? currentAtollStats.registeredHotels : 'N/A'}
                </p>
                <p className="text-[10px] text-gray-400">
                  {currentAtollStats.hotelBeds > 0 ? `${currentAtollStats.hotelBeds} beds` : 'None'}
                </p>
              </div>

            </div>

            {/* Selected Island Highlight (if an island is chosen) */}
            {currentIsland ? (
              <div className="p-4 rounded-2xl bg-white border-2 border-[#F47732]/30 shadow-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-black uppercase tracking-wider text-[#F47732] flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{locale === 'zh' ? '当前查看海岛' : 'Active Island Focus'}</span>
                  </span>
                  <span className="font-mono text-xs text-gray-400">
                    {currentIsland.coordinates[1].toFixed(4)}°N, {currentIsland.coordinates[0].toFixed(4)}°E
                  </span>
                </div>

                <h5 className="text-lg font-black text-[#123B4A]">
                  {locale === 'zh' ? currentIsland.nameZh : currentIsland.nameEn}
                </h5>

                <p className="text-xs text-[#5A6970]">
                  {locale === 'zh' ? currentIsland.transferSummary.zh : currentIsland.transferSummary.en}
                </p>

                {matchingDestination && (
                  <div className="pt-2 flex items-center justify-between border-t border-[#E6ECEF]">
                    <span className="text-xs text-emerald-700 font-bold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      <span>{locale === 'zh' ? '平台精选深度目的地' : 'Curated Destination Dossier'}</span>
                    </span>
                    <Link
                      href={`/destinations/${matchingDestination.slug}`}
                      className="text-xs font-black text-[#F47732] hover:underline flex items-center gap-1"
                    >
                      <span>{locale === 'zh' ? '查看完整岛屿攻略' : 'Read Island Guide'}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                )}
              </div>
            ) : (
              /* No specific island clicked: Show islands list in this atoll */
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#5A6970] uppercase tracking-wider block">
                  {locale === 'zh' ? '本环礁精选居民岛' : 'Featured Local Islands in Atoll'}
                </span>
                <div className="flex flex-wrap gap-2">
                  {currentAtollStats.featuredIslands.length > 0 ? (
                    currentAtollStats.featuredIslands.map((isl) => (
                      <button
                        key={isl.slug}
                        type="button"
                        onClick={() => handleSelectIsland(isl.slug)}
                        className="px-3.5 py-2 rounded-xl bg-white hover:bg-[#FFF4ED] border border-[#E6ECEF] hover:border-[#F47732]/40 text-xs font-bold text-[#123B4A] transition flex items-center gap-1.5 active:scale-95 shadow-2xs"
                      >
                        <MapPin className="w-3.5 h-3.5 text-[#F47732]" />
                        <span>{locale === 'zh' ? isl.name.zh.replace('岛', '') : isl.name.en}</span>
                        <span className="text-[10px] text-gray-400 font-mono">({isl.guesthouseCount} stays)</span>
                      </button>
                    ))
                  ) : (
                    <p className="text-xs text-[#5A6970] italic">
                      {locale === 'zh'
                        ? '本环礁拥有多座持牌居民岛与度假村，支持定制行程。'
                        : 'Explore individual islands on the map to inspect licensed facilities.'}
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Featured Guesthouses Card in this destination */}
            {matchingGuesthouses.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#5A6970] uppercase tracking-wider block">
                  {locale === 'zh' ? '精选严选特色民宿' : 'Curated Verified Guesthouses'}
                </span>
                <div className="space-y-2">
                  {matchingGuesthouses.map((gh) => (
                    <Link
                      key={gh.id}
                      href={`/guesthouses/${gh.slug}`}
                      className="group p-3 rounded-2xl bg-white border border-[#E6ECEF] hover:border-[#F47732] shadow-2xs flex items-center justify-between gap-3 transition"
                    >
                      <div className="flex items-center gap-3 min-w-0">
                        {gh.heroImage && (
                          <img
                            src={gh.heroImage.url}
                            alt={gh.heroImage.alt.en}
                            className="w-12 h-12 rounded-xl object-cover shrink-0 border border-[#E6ECEF]"
                          />
                        )}
                        <div className="min-w-0">
                          <h6 className="text-sm font-black text-[#123B4A] group-hover:text-[#F47732] truncate transition">
                            {gh.officialName}
                          </h6>
                          <p className="text-[11px] text-[#5A6970] truncate">
                            {locale === 'zh' ? gh.islandName.zh : gh.islandName.en} · {gh.totalRoomsInfo?.en || 'Beachfront'}
                          </p>
                        </div>
                      </div>

                      <div className="text-right shrink-0">
                        <span className="text-xs font-bold text-[#F47732] flex items-center justify-end gap-1 group-hover:translate-x-0.5 transition-transform">
                          {locale === 'zh' ? '查看详情' : 'View Details'}
                          <ChevronRight className="w-3.5 h-3.5" />
                        </span>
                        <span className="text-[10px] text-gray-400">
                          {gh.roomTypes?.length || 1} {locale === 'zh' ? '种房型' : 'room types'}
                        </span>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Relevant Island Experiences */}
            {relevantExperiences.length > 0 && (
              <div className="space-y-2">
                <span className="text-xs font-bold text-[#5A6970] uppercase tracking-wider block">
                  {locale === 'zh' ? '专属海岛出海体验' : 'Available Signature Experiences'}
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {relevantExperiences.map((exp) => (
                    <Link
                      key={exp.id}
                      href={`/experiences/${exp.slug}`}
                      className="px-3 py-1.5 rounded-xl bg-white hover:bg-[#EAF3F2] border border-[#E6ECEF] text-xs font-bold text-[#123B4A] transition flex items-center gap-1 shadow-2xs"
                    >
                      <span>{locale === 'zh' ? exp.title.zh : exp.title.en}</span>
                      <ArrowUpRight className="w-3 h-3 text-[#5A6970]" />
                    </Link>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Action CTA Button */}
          <div className="pt-4 border-t border-[#E6ECEF] flex items-center gap-3">
            {matchingDestination ? (
              <Link
                href={`/destinations/${matchingDestination.slug}`}
                className="flex-1 py-3.5 px-5 rounded-2xl bg-[#123B4A] hover:bg-[#0D2E3D] text-white font-black text-xs sm:text-sm text-center shadow-lg transition active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{locale === 'zh' ? `探索 ${matchingDestination.name.zh} 详情` : `Explore ${matchingDestination.name.en}`}</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            ) : (
              <Link
                href="/destinations"
                className="flex-1 py-3.5 px-5 rounded-2xl bg-[#123B4A] hover:bg-[#0D2E3D] text-white font-black text-xs sm:text-sm text-center shadow-lg transition active:scale-95 flex items-center justify-center gap-2"
              >
                <span>{locale === 'zh' ? '浏览全部 6 大精选目的地' : 'Explore All 6 Destinations'}</span>
                <ChevronRight className="w-4 h-4" />
              </Link>
            )}

            <Link
              href="/contact"
              className="py-3.5 px-4 rounded-2xl bg-[#F47732] hover:bg-[#E06320] text-white font-black text-xs sm:text-sm text-center shadow-lg shadow-[#F47732]/20 transition active:scale-95 whitespace-nowrap"
            >
              {locale === 'zh' ? '咨询行程' : 'Plan Trip'}
            </Link>
          </div>

        </div>

      </div>

      {/* MOBILE BOTTOM SHEET (Responsive Touch Experience for Small Screens) */}
      {isMobileSheetOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col justify-end">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsMobileSheetOpen(false)}
          />

          {/* Drawer Sheet */}
          <div className="relative z-10 bg-[#F8F6F0] rounded-t-[2.5rem] p-6 max-h-[85vh] overflow-y-auto space-y-4 shadow-2xl border-t border-white/20 animate-in slide-in-from-bottom duration-300">
            {/* Drag Handle & Close */}
            <div className="flex items-center justify-between pb-2 border-b border-[#E6ECEF]">
              <span className="w-12 h-1.5 rounded-full bg-gray-300 mx-auto" />
              <button
                type="button"
                onClick={() => setIsMobileSheetOpen(false)}
                className="p-1.5 rounded-full bg-white text-gray-500 hover:text-black shadow-xs absolute right-6 top-5"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Atoll Title */}
            <div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs font-black uppercase text-[#F47732] bg-[#FFF4ED] px-2.5 py-0.5 rounded-md border border-[#F47732]/20">
                  {currentAtollStats.adminCode}
                </span>
                <span className="text-xs font-bold text-[#123B4A]">
                  {currentAtollStats.islandsWithAccommodation} {locale === 'zh' ? '座有人岛' : 'Inhabited Islands'}
                </span>
              </div>
              <h4 className="text-xl font-black text-[#123B4A] mt-1">
                {locale === 'zh' ? currentAtollStats.atollName.zh : currentAtollStats.atollName.en}
              </h4>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div className="p-3 rounded-2xl bg-white border border-[#E6ECEF]">
                <span className="text-[10px] text-gray-400 block">{locale === 'zh' ? '持牌民宿' : 'Guesthouses'}</span>
                <strong className="text-lg font-black text-[#123B4A] font-mono">
                  {currentAtollStats.registeredGuesthouses}
                </strong>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#E6ECEF]">
                <span className="text-[10px] text-gray-400 block">{locale === 'zh' ? '度假村' : 'Resorts'}</span>
                <strong className="text-lg font-black text-[#123B4A] font-mono">
                  {currentAtollStats.registeredResorts}
                </strong>
              </div>
              <div className="p-3 rounded-2xl bg-white border border-[#E6ECEF]">
                <span className="text-[10px] text-gray-400 block">{locale === 'zh' ? '注册床位' : 'Total Beds'}</span>
                <strong className="text-lg font-black text-[#123B4A] font-mono">
                  {currentAtollStats.totalBeds.toLocaleString()}
                </strong>
              </div>
            </div>

            {/* Active Island If Any */}
            {currentIsland && (
              <div className="p-4 rounded-2xl bg-white border border-[#F47732]/40 space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-black text-[#F47732] flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{locale === 'zh' ? '当前查看' : 'Island'}</span>
                  </span>
                  <span className="font-mono text-gray-400">
                    {currentIsland.coordinates[1].toFixed(3)}°N, {currentIsland.coordinates[0].toFixed(3)}°E
                  </span>
                </div>
                <h5 className="text-base font-black text-[#123B4A]">
                  {locale === 'zh' ? currentIsland.nameZh : currentIsland.nameEn}
                </h5>
                <p className="text-xs text-[#5A6970]">
                  {locale === 'zh' ? currentIsland.transferSummary.zh : currentIsland.transferSummary.en}
                </p>
              </div>
            )}

            {/* CTAs */}
            <div className="pt-2 flex gap-2">
              {matchingDestination ? (
                <Link
                  href={`/destinations/${matchingDestination.slug}`}
                  onClick={() => setIsMobileSheetOpen(false)}
                  className="flex-1 py-3 px-4 rounded-2xl bg-[#123B4A] text-white font-black text-xs text-center"
                >
                  {locale === 'zh' ? '阅读完整海岛攻略' : 'Open Destination Page'}
                </Link>
              ) : (
                <Link
                  href="/destinations"
                  onClick={() => setIsMobileSheetOpen(false)}
                  className="flex-1 py-3 px-4 rounded-2xl bg-[#123B4A] text-white font-black text-xs text-center"
                >
                  {locale === 'zh' ? '浏览全部精选目的地' : 'Explore All Destinations'}
                </Link>
              )}
              <button
                type="button"
                onClick={() => setIsMobileSheetOpen(false)}
                className="py-3 px-4 rounded-2xl bg-white border border-[#E6ECEF] text-[#123B4A] font-bold text-xs"
              >
                {locale === 'zh' ? '返回地图' : 'Back to Map'}
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
