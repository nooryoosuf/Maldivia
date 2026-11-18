import type { Metadata } from 'next';
import type { Guesthouse, Destination, TravelGuideArticle } from '@/types/domain';

export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://maldivia.mv';
export const SITE_NAME = 'Maldivia — Curated Maldives Local Island & Guesthouse Travel';

export function buildPageMetadata({
  title,
  description,
  path,
  ogImage,
}: {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}): Metadata {
  const canonicalUrl = `${SITE_URL}${path === '/' ? '' : path}`;
  const defaultImage =
    ogImage ||
    'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Maafushi_Island_Maldives.jpg/1280px-Maafushi_Island_Maldives.jpg';

  return {
    title: `${title} | MALDIVIA`,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': canonicalUrl,
        'zh-CN': canonicalUrl,
      },
    },
    openGraph: {
      title: `${title} | MALDIVIA`,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'en_US',
      alternateLocale: ['zh_CN'],
      type: 'website',
      images: [
        {
          url: defaultImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | MALDIVIA`,
      description,
      images: [defaultImage],
    },
  };
}

/**
 * Schema.org Organization structured data
 * Note: Never includes fabricated aggregate ratings or unverified registration numbers.
 */
export function buildOrganizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TravelAgency',
    name: 'Maldivia',
    alternateName: 'Maldivia 马尔代夫雅途',
    url: SITE_URL,
    description:
      'Curated travel platform specialising in verified inhabited island guesthouses, speedboat transfers, and marine excursions across the Republic of Maldives.',
    areaServed: {
      '@type': 'Country',
      name: 'Maldives',
    },
    knowsLanguage: ['en', 'zh-Hans'],
  };
}

/**
 * Schema.org LodgingBusiness structured data for verified guesthouses.
 * Strictly omits aggregateRating or review counts per project rules.
 */
export function buildLodgingBusinessJsonLd(guesthouse: Guesthouse) {
  return {
    '@context': 'https://schema.org',
    '@type': 'LodgingBusiness',
    name: guesthouse.officialName,
    description: guesthouse.conciseDescription.en,
    url: `${SITE_URL}/guesthouses/${guesthouse.slug}`,
    image: [guesthouse.heroImage.url, ...guesthouse.gallery.map((g) => g.url)],
    address: {
      '@type': 'PostalAddress',
      streetAddress: guesthouse.officialContact.address,
      addressLocality: guesthouse.islandName.en,
      addressRegion: guesthouse.atollName.en,
      addressCountry: 'MV',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: guesthouse.coordinates.lat,
      longitude: guesthouse.coordinates.lng,
    },
    ...(guesthouse.officialContact.officialPhone
      ? { telephone: guesthouse.officialContact.officialPhone }
      : {}),
    ...(guesthouse.officialContact.officialEmail
      ? { email: guesthouse.officialContact.officialEmail }
      : {}),
    ...(guesthouse.officialContact.websiteUrl
      ? { sameAs: [guesthouse.officialContact.websiteUrl] }
      : {}),
    amenityFeature: guesthouse.propertyAmenities.en.map((amenity) => ({
      '@type': 'LocationFeatureSpecification',
      name: amenity,
      value: true,
    })),
  };
}

export function buildTouristDestinationJsonLd(destination: Destination) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: `${destination.name.en}, ${destination.atollName.en}`,
    description: destination.shortSummary.en,
    url: `${SITE_URL}/destinations/${destination.slug}`,
    image: destination.heroImage.url,
    geo: {
      '@type': 'GeoCoordinates',
      latitude: destination.coordinates.lat,
      longitude: destination.coordinates.lng,
    },
    touristType: ['Scuba Divers', 'Snorkellers', 'Independent Island Travellers', 'Families'],
  };
}

export function buildArticleJsonLd(article: TravelGuideArticle) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title.en,
    description: article.summary.en,
    image: [article.heroImage.url],
    dateModified: article.lastReviewedDate,
    datePublished: article.lastReviewedDate,
    author: {
      '@type': 'Organization',
      name: 'Maldivia Editorial Team',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Maldivia',
      url: SITE_URL,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/travel-guide/${article.slug}`,
    },
  };
}

export function buildBreadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, idx) => ({
      '@type': 'ListItem',
      position: idx + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}
