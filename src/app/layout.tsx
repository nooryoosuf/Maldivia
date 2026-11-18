import type { Metadata } from 'next';
import './globals.css';
import { Providers } from '@/components/Providers';
import { buildOrganizationJsonLd, SITE_URL } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'MALDIVIA | Curated Maldives Local Island & Guesthouse Travel Platform',
    template: '%s | MALDIVIA',
  },
  description:
    'Editorial travel platform specialising in verified local island guesthouses, Velana International Airport speedboat transfers, and marine excursions across the Republic of Maldives. English & 简体中文.',
  keywords: [
    'Maldives guesthouses',
    'Maldives local islands',
    'Maafushi',
    'Dhigurah whale sharks',
    'Fulidhoo',
    'Thoddoo',
    'Ukulhas',
    'Laamu Gan',
    '马尔代夫居民岛',
    '马尔代夫民宿',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['zh_CN'],
    url: SITE_URL,
    siteName: 'MALDIVIA',
    title: 'MALDIVIA — Curated Maldives Local Island & Guesthouse Travel',
    description:
      'Explore six verified inhabited Maldivian islands and guesthouses across Kaafu, Ari, Vaavu, and Laamu Atolls with transparent transfer logistics.',
    images: [
      {
        url: 'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/Maldives_tropical_island_%28Unsplash%29.jpg/1920px-Maldives_tropical_island_%28Unsplash%29.jpg',
        width: 1920,
        height: 1080,
        alt: 'Aerial view of a lush coral island ringed by white sand and a turquoise lagoon in the Maldives',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgJsonLd = buildOrganizationJsonLd();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className="antialiased selection:bg-[#F47732] selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
