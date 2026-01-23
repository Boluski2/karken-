import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import qualityImage from '@/assets/quality-control.jpg';

const CookiePolicy: React.FC = () => {
  const { t, language } = useLanguage();

  const sections = t('legal.cookies.sections') as unknown as Array<{title: string; content: string}>;

  return (
    <Layout>
      <SEO
        title={t('legal.cookies.title') as string}
        description={language === 'lt'
          ? 'Karken Company slapukų politika. Sužinokite, kaip naudojame slapukus mūsų svetainėje.'
          : 'Karken Company cookie policy. Learn how we use cookies on our website.'}
        keywords="cookie policy, cookies, website cookies, Karken Company"
        canonical="/cookie-policy"
      />

      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src={qualityImage}
            alt="Karken Company quality control"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container-wide relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 animate-fade-up">
            {t('legal.cookies.title')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t('legal.cookies.subtitle')}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg text-muted-foreground mb-8">
              {t('legal.cookies.lastUpdated')}: {t('legal.lastUpdatedDate')}
            </p>

            <div className="prose prose-lg max-w-none">
              {sections && Array.isArray(sections) && sections.map((section, index) => (
                <div key={index} className="mb-8">
                  <h2 className="text-2xl font-heading font-semibold text-foreground mb-4">
                    {section.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                    {section.content}
                  </p>
                </div>
              ))}
            </div>

            {/* Company Info */}
            <div className="mt-12 pt-8 border-t border-border">
              <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                {t('legal.contact.title')}
              </h3>
              <div className="text-muted-foreground space-y-2">
                <p>{t('contact.info.company')}</p>
                <p>{t('contact.info.address')}</p>
                <p>{t('contact.info.email')}</p>
                <p>{t('contact.info.regNumber')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CookiePolicy;
