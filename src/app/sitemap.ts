import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/seo';
import { GUESTHOUSES } from '@/data/guesthouses';
import { DESTINATIONS } from '@/data/destinations';
import { EXPERIENCES } from '@/data/experiences';
import { TRAVEL_GUIDES } from '@/data/travelGuides';
import { POLICY_DOCUMENTS } from '@/data/policies';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    '',
    '/guesthouses',
    '/destinations',
    '/experiences',
    '/travel-guide',
    '/trip-planner',
    '/about',
    '/contact',
    '/search',
    '/sitemap-page',
  ].map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '' ? 1.0 : 0.9,
  }));

  const guesthouseRoutes: MetadataRoute.Sitemap = GUESTHOUSES.map((gh) => ({
    url: `${SITE_URL}/guesthouses/${gh.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.9,
  }));

  const destinationRoutes: MetadataRoute.Sitemap = DESTINATIONS.map((dest) => ({
    url: `${SITE_URL}/destinations/${dest.slug}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  const experienceRoutes: MetadataRoute.Sitemap = EXPERIENCES.map((exp) => ({
    url: `${SITE_URL}/experiences/${exp.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const guideRoutes: MetadataRoute.Sitemap = TRAVEL_GUIDES.map((guide) => ({
    url: `${SITE_URL}/travel-guide/${guide.slug}`,
    lastModified: new Date(guide.lastReviewedDate),
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  const policyRoutes: MetadataRoute.Sitemap = POLICY_DOCUMENTS.map((policy) => ({
    url: `${SITE_URL}/policies/${policy.slug}`,
    lastModified: new Date(policy.lastReviewed),
    changeFrequency: 'monthly',
    priority: 0.5,
  }));

  return [
    ...staticRoutes,
    ...guesthouseRoutes,
    ...destinationRoutes,
    ...experienceRoutes,
    ...guideRoutes,
    ...policyRoutes,
  ];
}
