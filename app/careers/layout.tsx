import type { Metadata } from 'next';
import { PAGE_METADATA, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: PAGE_METADATA.careers.title,
  description: PAGE_METADATA.careers.description,
  keywords: PAGE_METADATA.careers.keywords,
  alternates: {
    canonical: `${SITE_CONFIG.url}/careers`,
  },
  openGraph: {
    title: PAGE_METADATA.careers.title,
    description: PAGE_METADATA.careers.description,
    url: `${SITE_CONFIG.url}/careers`,
  },
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
