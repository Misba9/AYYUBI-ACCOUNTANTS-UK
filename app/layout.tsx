import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Layout from '@/components/Layout';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Ayyubi Accountants | Financial Accountants in the UK',
    template: '%s | Ayyubi Accountants'
  },
  description: 'Expert accounting, tax, and financial services for businesses and individuals across the UK. Professional advice from qualified accountants since 2009.',
  keywords: 'accountants, tax services, bookkeeping, VAT, payroll, London, UK, accounting services, business advisory',
  authors: [{ name: 'Ayyubi Accountants' }],
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
    url: 'https://ayyubiaccountants.co.uk',
    siteName: 'Ayyubi Accountants',
    title: 'Ayyubi Accountants | Financial Accountants',
    description: 'Expert accounting, tax, and financial services for businesses and individuals across the UK.',
    images: [
      {
        url: 'https://images.pexels.com/photos/7683100/pexels-photo-7683100.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2',
        width: 1200,
        height: 630,
        alt: 'Ayyubi Accountants - Financial Accountants',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ayyubi Accountants | Financial Accountants',
    description: 'Expert accounting, tax, and financial services for businesses and individuals across the UK.',
    images: ['https://images.pexels.com/photos/7683100/pexels-photo-7683100.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2'],
  },
  verification: {
    google: 'your-google-verification-code',
  },
  alternates: {
    canonical: 'https://ayyubiaccountants.co.uk',
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
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "AccountingService",
              "name": "Ayyubi Accountants",
              "description": "Professional accounting, tax, and financial services for businesses and individuals across the UK.",
              "url": "https://ayyubiaccountants.co.uk",
              "telephone": "+44 7402 448109",
              "email": "info@ayyubiaccountants.co.uk",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "149 Commercial Road",
                "addressLocality": "London",
                "postalCode": "E1 1PX",
                "addressCountry": "GB"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "51.5158",
                "longitude": "-0.0986"
              },
              "openingHours": ["Mo-Fr 09:00-18:00", "Sa 10:00-14:00"],
              "sameAs": [
                "https://www.facebook.com/ayyubiaccountants",
                "https://www.linkedin.com/company/ayyubi-accountants"
              ]
            })
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