export interface SEOData {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
  canonical?: string;
}

export interface StructuredData {
  "@context": string;
  "@type": string;
  [key: string]: any;
}

export function generatePageTitle(pageTitle: string, siteName: string = "Navilon Dev"): string {
  return `${pageTitle} | ${siteName}`;
}

export function truncateDescription(description: string, maxLength: number = 160): string {
  if (description.length <= maxLength) return description;
  return description.substring(0, maxLength - 3) + '...';
}

export function generateKeywords(baseKeywords: string[], pageSpecificKeywords: string[] = []): string {
  const allKeywords = [...baseKeywords, ...pageSpecificKeywords];
  return allKeywords.join(', ');
}

export const defaultSEOData: SEOData = {
  title: "Navilon Dev - International IT Company | Software Development & AI Solutions",
  description: "Navilon Dev is an international IT company specializing in software development, game development, AI solutions, and IT consulting. Transform your ideas into cutting-edge digital solutions.",
  keywords: "navilon dev, international IT company, software development, game development, AI solutions, IT consulting, web development, mobile apps, artificial intelligence"
};

export const baseKeywords = [
  "navilon dev",
  "international IT company",
  "software development",
  "IT consulting",
  "digital solutions",
  "technology services"
];

export function createOrganizationStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Navilon Dev",
    "alternateName": "Navilon Dev International",
    "description": "International IT company specializing in software development, game development, AI solutions, and IT consulting.",
    "url": "https://navilon-dev.com",
    "logo": "https://navilon-dev.com/logo.png",
    "foundingDate": "2016",
    "numberOfEmployees": "50-200",
    "industry": "Information Technology",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "Multiple"
    },
    "contactPoint": [
      {
        "@type": "ContactPoint",
        "contactType": "customer service",
        "email": "contact@navilon-dev.com",
        "availableLanguage": ["English", "Russian", "German", "French", "Spanish", "Polish", "Chinese"]
      },
      {
        "@type": "ContactPoint",
        "contactType": "sales",
        "email": "sales@navilon-dev.com",
        "availableLanguage": ["English", "Russian", "German", "French", "Spanish", "Polish", "Chinese"]
      }
    ],
    "sameAs": [
      "https://linkedin.com/company/navilon-dev",
      "https://github.com/navilon-dev",
      "https://twitter.com/navilon_dev"
    ],
    "services": [
      "Software Development",
      "Game Development", 
      "AI & Machine Learning Solutions",
      "IT Consulting",
      "Cloud Solutions",
      "Mobile Development"
    ]
  };
}

export function createWebsiteStructuredData(): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Navilon Dev",
    "url": "https://navilon-dev.com",
    "description": "International IT company specializing in software development, game development, AI solutions, and IT consulting.",
    "inLanguage": ["en", "ru", "de", "fr", "es", "pl", "zh"],
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://navilon-dev.com/search?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };
}

export function createServiceStructuredData(serviceName: string, description: string): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": serviceName,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": "Navilon Dev"
    },
    "areaServed": "Worldwide",
    "availableChannel": {
      "@type": "ServiceChannel",
      "serviceUrl": "https://navilon-dev.com/contact",
      "serviceSmsNumber": "+1-555-123-4567",
      "servicePhone": "+1-555-123-4567"
    }
  };
}

export function createBreadcrumbStructuredData(breadcrumbs: Array<{name: string; url: string}>): StructuredData {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };
}

export const openGraphDefaults = {
  siteName: "Navilon Dev",
  type: "website",
  locale: "en_US",
  imageWidth: 1200,
  imageHeight: 630
};

export const twitterCardDefaults = {
  card: "summary_large_image",
  site: "@navilon_dev",
  creator: "@navilon_dev"
};

export function generateCanonicalUrl(path: string, baseUrl: string = "https://navilon-dev.com"): string {
  return `${baseUrl}${path.startsWith('/') ? path : '/' + path}`;
}

export function generateAlternateLanguageLinks(currentPath: string, languages: string[], baseUrl: string = "https://navilon-dev.com"): Array<{hreflang: string; href: string}> {
  return languages.map(lang => ({
    hreflang: lang,
    href: `${baseUrl}/${lang}${currentPath}`
  }));
}