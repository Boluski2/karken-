import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  jsonLd?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  canonical,
  ogImage = '/og-image.jpg',
  ogType = 'website',
  jsonLd,
}) => {
  const siteName = 'Karken Company';
  const fullTitle = `${title} | ${siteName}`;
  const baseUrl = 'https://karken.lt';
  const canonicalUrl = canonical ? `${baseUrl}${canonical}` : baseUrl;

  const defaultJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Karken Company, UAB',
    description: 'Official distributor of Indomie instant noodles in Lithuania and the Baltic region',
    url: baseUrl,
    logo: `${baseUrl}/karken-logo.png`,
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Pramonės g. 5',
      addressLocality: 'Vilnius',
      postalCode: 'LT-12345',
      addressCountry: 'LT',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+370-600-12345',
      contactType: 'sales',
      availableLanguage: ['Lithuanian', 'English'],
    },
    sameAs: [],
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="title" content={fullTitle} />
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="author" content="Karken Company, UAB" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={`${baseUrl}${ogImage}`} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${baseUrl}${ogImage}`} />

      {/* JSON-LD Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || defaultJsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
