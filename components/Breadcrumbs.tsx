'use client';

import Link from 'next/link';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { getBreadcrumbSchema } from '@/lib/seo';

export interface BreadcrumbNavItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbNavItem[];
  className?: string;
  /** Full path for schema (e.g. /services/bookkeeping) - used for last item when no href */
  currentPath?: string;
}

const BASE_URL = 'https://ayyubiaccountants.co.uk';

/**
 * SEO-friendly breadcrumb navigation with Schema.org support
 * Use for internal linking and search engine understanding
 */
export default function Breadcrumbs({ items, className = '', currentPath }: BreadcrumbsProps) {
  if (!items?.length) return null;

  const schemaItems = [
    { name: 'Home', url: BASE_URL },
    ...items.map((item, i) => ({
      name: item.label,
      url: item.href ? `${BASE_URL}${item.href}` : (currentPath ? `${BASE_URL}${currentPath}` : BASE_URL),
    })),
  ];
  const schema = getBreadcrumbSchema(schemaItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <Breadcrumb className={className}>
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <Link href="/">Home</Link>
          </BreadcrumbLink>
        </BreadcrumbItem>
        {items.map((item, index) => (
          <span key={index} className="contents">
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              {item.href && index < items.length - 1 ? (
                <BreadcrumbLink asChild>
                  <Link href={item.href}>{item.label}</Link>
                </BreadcrumbLink>
              ) : (
                <BreadcrumbPage>{item.label}</BreadcrumbPage>
              )}
            </BreadcrumbItem>
          </span>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
    </>
  );
}
