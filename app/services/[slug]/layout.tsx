import type { Metadata } from 'next';
import { services } from '@/data/services';
import { SITE_CONFIG } from '@/lib/seo';

interface ServiceLayoutProps {
  children: React.ReactNode;
  params: { slug: string };
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const service = services.find((s) => s.slug === params.slug);
  if (!service) {
    return { title: 'Service Not Found' };
  }

  const title = `${service.title} | London Accountants | Ayyubi Accountants`;
  const description = `${service.shortDescription} Expert ${service.category.toLowerCase()} services in London. From ${service.pricing}. Free consultation.`;
  const url = `${SITE_CONFIG.url}/services/${service.slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
    },
  };
}

export default function ServiceSlugLayout({ children }: ServiceLayoutProps) {
  return children;
}
