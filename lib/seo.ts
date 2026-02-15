/**
 * SEO Configuration - Ayyubi Accountants
 * Centralised meta tags, schema, and SEO constants
 */

export const SITE_CONFIG = {
  name: 'Ayyubi Accountants',
  url: 'https://ayyubiaccountants.co.uk',
  description: 'Expert accountants in London & UK. Tax, bookkeeping, payroll & HMRC support for SMEs, startups & individuals. Free consultation.',
  phone: '+44 7402 448109',
  email: 'info@ayyubiaccountants.co.uk',
  address: {
    street: '149 Commercial Road',
    locality: 'London',
    postalCode: 'E1 1PX',
    country: 'GB',
    full: '149 Commercial Road, London E1 1PX, United Kingdom',
  },
  geo: {
    latitude: '51.5158',
    longitude: '-0.0986',
  },
  openingHours: ['Mo-Fr 09:00-18:00', 'Sa 10:00-14:00'],
  sameAs: [
    'https://www.facebook.com/ayyubiaccountants',
    'https://www.linkedin.com/company/ayyubi-accountants',
  ],
  ogImage: 'https://images.pexels.com/photos/7683100/pexels-photo-7683100.jpeg?auto=compress&cs=tinysrgb&w=1200&h=630&dpr=2',
} as const;

export const PAGE_METADATA = {
  home: {
    title: 'Accountants in London | Tax & Bookkeeping Services UK | Ayyubi Accountants',
    description: 'Leading accountants in London. Expert tax, bookkeeping, payroll & HMRC support for small businesses, startups & individuals. Free consultation. Call +44 7402 448109.',
    keywords: 'accountants in London, tax accountant London, small business accountant UK, bookkeeping services UK, HMRC tax help, affordable accountant London',
  },
  about: {
    title: 'Who We Are | Trusted Accountants in London Since 2009',
    description: 'Meet Ayyubi Accountants - your trusted accounting firm in London. 15+ years serving SMEs, startups & individuals. HMRC expertise, compliance focus, free consultation.',
    keywords: 'accounting firm London, accountants London, UK accounting services, trusted accountant',
  },
  services: {
    title: 'Accounting Services London | Tax, Bookkeeping, Payroll & VAT',
    description: 'Full range of UK accounting services: limited company accounts, self assessment, VAT, payroll, corporation tax. Expert accountants for London businesses. Get a free quote.',
    keywords: 'accounting services London, UK accounting services, bookkeeping services UK, payroll services London, VAT services UK',
  },
  contact: {
    title: 'Contact Us | Free Quote | Ayyubi Accountants London',
    description: 'Get a free consultation from London accountants. Call +44 7402 448109, WhatsApp, or visit 149 Commercial Road, London E1 1PX. Same-day response guaranteed.',
    keywords: 'contact accountant London, free tax consultation UK, accountant quote London',
  },
  faq: {
    title: 'FAQ | Accounting & Tax Questions Answered | Ayyubi Accountants',
    description: 'Common questions about our accounting services, fees, HMRC support, cloud accounting (Xero, QuickBooks) & Making Tax Digital. Expert answers from London accountants.',
    keywords: 'accountant FAQ, tax questions UK, HMRC help, accounting software',
  },
  blog: {
    title: 'Accounting & Tax Insights | Ayyubi Accountants Blog',
    description: 'Expert tax tips, HMRC updates, bookkeeping advice & business insights from London accountants. Stay compliant, save tax, grow your business.',
    keywords: 'accounting blog UK, tax tips London, HMRC updates, business tax advice',
  },
  careers: {
    title: 'Careers | Join Our Accounting Team | Ayyubi Accountants London',
    description: 'Build your career with a leading London accounting firm. ACCA/ACA study support, flexible working, great culture. View current vacancies.',
    keywords: 'accounting jobs London, accountant careers UK, finance jobs London',
  },
  privacy: {
    title: 'Privacy Policy | Ayyubi Accountants',
    description: 'Privacy policy for Ayyubi Accountants. How we collect, use and protect your data. GDPR compliant.',
  },
  terms: {
    title: 'Terms & Conditions | Ayyubi Accountants',
    description: 'Terms and conditions for Ayyubi Accountants services.',
  },
} as const;

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'AccountingService',
    '@id': `${SITE_CONFIG.url}/#organization`,
    name: SITE_CONFIG.name,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.locality,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: SITE_CONFIG.geo.latitude,
      longitude: SITE_CONFIG.geo.longitude,
    },
    openingHours: SITE_CONFIG.openingHours,
    sameAs: SITE_CONFIG.sameAs,
    areaServed: [
      { '@type': 'City', name: 'London' },
      { '@type': 'Country', name: 'United Kingdom' },
    ],
    priceRange: '££',
    image: SITE_CONFIG.ogImage,
  };
}

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_CONFIG.name,
    url: SITE_CONFIG.url,
    logo: `${SITE_CONFIG.url}/favicon.ico`,
    telephone: SITE_CONFIG.phone,
    email: SITE_CONFIG.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: SITE_CONFIG.address.street,
      addressLocality: SITE_CONFIG.address.locality,
      postalCode: SITE_CONFIG.address.postalCode,
      addressCountry: SITE_CONFIG.address.country,
    },
    sameAs: SITE_CONFIG.sameAs,
  };
}

export function getBreadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}
