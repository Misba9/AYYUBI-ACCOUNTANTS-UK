import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';
import { SITE_CONFIG, getLocalBusinessSchema, getOrganizationSchema } from '@/lib/seo';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: 'Accountants in London | Tax & Bookkeeping Services UK | Ayyubi Accountants',
    template: '%s | Ayyubi Accountants',
  },
  description:
    'Leading accountants in London. Expert tax, bookkeeping, payroll & HMRC support for small businesses, startups & individuals. Free consultation. Call +44 7402 448109.',
  keywords:
    'accountants in London, tax accountant London, small business accountant UK, bookkeeping services UK, HMRC tax help, affordable accountant London, accounting firm London',
  authors: [{ name: 'Ayyubi Accountants', url: SITE_CONFIG.url }],
  creator: 'Ayyubi Accountants',
  publisher: 'Ayyubi Accountants',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    title: 'Accountants in London | Tax & Bookkeeping | Ayyubi Accountants',
    description:
      'Expert accountants in London. Tax, bookkeeping, payroll & HMRC support for SMEs. Free consultation.',
    images: [
      {
        url: SITE_CONFIG.ogImage,
        width: 1200,
        height: 630,
        alt: 'Ayyubi Accountants - Expert Accountants in London',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Accountants in London | Ayyubi Accountants',
    description: 'Expert tax, bookkeeping & HMRC support for London businesses. Free consultation.',
    images: [SITE_CONFIG.ogImage],
  },
  alternates: {
    canonical: SITE_CONFIG.url,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <meta name="theme-color" content="#2563eb" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getLocalBusinessSchema()),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(getOrganizationSchema()),
          }}
        />
      </head>
      <body className={inter.className}>
        <Layout>
          {children}
        </Layout>
      </body>
    </html>
  );
}