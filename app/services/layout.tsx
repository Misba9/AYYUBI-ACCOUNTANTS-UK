import type { Metadata } from 'next';
import { PAGE_METADATA, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: PAGE_METADATA.services.title,
  description: PAGE_METADATA.services.description,
  keywords: PAGE_METADATA.services.keywords,
  alternates: {
    canonical: `${SITE_CONFIG.url}/services`,
  },
  openGraph: {
    title: PAGE_METADATA.services.title,
    description: PAGE_METADATA.services.description,
    url: `${SITE_CONFIG.url}/services`,
  },
};

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
