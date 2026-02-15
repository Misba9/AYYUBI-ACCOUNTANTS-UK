import type { Metadata } from 'next';
import { PAGE_METADATA, SITE_CONFIG, getFAQSchema } from '@/lib/seo';
import { faqs } from '@/data/faqs';

export const metadata: Metadata = {
  title: PAGE_METADATA.faq.title,
  description: PAGE_METADATA.faq.description,
  keywords: PAGE_METADATA.faq.keywords,
  alternates: {
    canonical: `${SITE_CONFIG.url}/faq`,
  },
  openGraph: {
    title: PAGE_METADATA.faq.title,
    description: PAGE_METADATA.faq.description,
    url: `${SITE_CONFIG.url}/faq`,
  },
};

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const faqSchema = getFAQSchema(
    faqs.map((f) => ({ question: f.question, answer: f.answer }))
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {children}
    </>
  );
}
