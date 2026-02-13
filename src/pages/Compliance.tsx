import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import { Shield, CheckCircle, FileCheck, Search } from 'lucide-react';
import qualityImage from '@/assets/food-quality-lab.jpg';
import warehouseImage from '@/assets/food-warehouse.jpg';

const Compliance: React.FC = () => {
  const { t, language } = useLanguage();

  const certifications = t('compliance.certifications.items') as unknown as string[];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: language === 'lt' ? 'ES atitiktis ir sertifikatai' : 'EU Compliance and Certifications',
    description: language === 'lt'
      ? 'Karken Company ES maisto saugos standartai ir sertifikatai'
      : 'Karken Company EU food safety standards and certifications',
    mainEntity: {
      '@type': 'Organization',
      name: 'Karken Company, UAB',
      hasCredential: certifications,
    },
  };

  return (
    <Layout>
      <SEO
        title={language === 'lt' ? 'ES atitiktis' : 'EU Compliance'}
        description={language === 'lt'
          ? 'Karken Company užtikrina pilną ES maisto saugos reglamentų atitiktį. HACCP, ISO sertifikatai ir produktų atsekamumas.'
          : 'Karken Company ensures full EU food safety regulation compliance. HACCP, ISO certifications, and product traceability.'}
        keywords="EU compliance, food safety, HACCP, ISO certification, traceability, food regulations"
        canonical="/compliance"
        jsonLd={jsonLd}
      />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src={qualityImage}
            alt="Quality control and compliance"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container-wide relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 animate-fade-up">
            {t('compliance.title')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t('compliance.subtitle')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('compliance.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* EU Regulations */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Shield className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  {t('compliance.euRegulations.title')}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('compliance.euRegulations.p1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('compliance.euRegulations.p2')}
              </p>
            </div>
            <div>
              <OptimizedImage
                src={qualityImage}
                alt="EU compliance certification"
                className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <header className="text-center mb-12">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <FileCheck className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t('compliance.certifications.title')}
            </h2>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {Array.isArray(certifications) && certifications.map((cert, index) => (
              <article
                key={index}
                className="flex items-center space-x-4 bg-card p-6 rounded-lg shadow-lg hover-lift"
              >
                <CheckCircle className="w-8 h-8 text-secondary flex-shrink-0" />
                <span className="text-foreground font-medium">{cert}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Traceability */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Search className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  {t('compliance.traceability.title')}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t('compliance.traceability.text')}
              </p>
            </div>
            <div className="lg:order-1">
              <OptimizedImage
                src={warehouseImage}
                alt="Product traceability system"
                className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Retail Compliance */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              {t('compliance.retailCompliance.title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('compliance.retailCompliance.text')}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Compliance;
