import type { Metadata } from 'next';
import { PAGE_METADATA, SITE_CONFIG } from '@/lib/seo';

export const metadata: Metadata = {
  title: PAGE_METADATA.about.title,
  description: PAGE_METADATA.about.description,
  keywords: PAGE_METADATA.about.keywords,
  alternates: {
    canonical: `${SITE_CONFIG.url}/about`,
  },
  openGraph: {
    title: PAGE_METADATA.about.title,
    description: PAGE_METADATA.about.description,
    url: `${SITE_CONFIG.url}/about`,
  },
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
