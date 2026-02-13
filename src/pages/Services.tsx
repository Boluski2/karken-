import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import ScrollReveal from '@/components/ScrollReveal';
import { FileCheck, Package, DollarSign, Truck, HeadphonesIcon, CheckCircle } from 'lucide-react';
import shippingImage from '@/assets/shipping-logistics.jpg';
import warehouseImage from '@/assets/food-warehouse.jpg';
import partnershipImage from '@/assets/business-partnership.jpg';

const Services: React.FC = () => {
  const { t, language } = useLanguage();

  const benefits = [
    {
      key: 'compliant',
      icon: FileCheck,
      title: t('services.compliant.title'),
      description: t('services.compliant.text'),
    },
    {
      key: 'flexible',
      icon: Package,
      title: t('services.flexible.title'),
      description: t('services.flexible.text'),
    },
    {
      key: 'transparent',
      icon: DollarSign,
      title: t('services.transparent.title'),
      description: t('services.transparent.text'),
    },
    {
      key: 'logistics',
      icon: Truck,
      title: t('services.logistics.title'),
      description: t('services.logistics.text'),
    },
    {
      key: 'support',
      icon: HeadphonesIcon,
      title: t('services.support.title'),
      description: t('services.support.text'),
    },
  ];

  const idealForItems = t('services.idealFor.items') as unknown as string[];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'Organization',
      name: 'Karken Company, UAB',
    },
    serviceType: 'Food Distribution',
    areaServed: ['Lithuania', 'Baltic States', 'European Union'],
    description: language === 'lt'
      ? 'Afrikietiškų maisto produktų importas, sandėliavimas ir platinimas Lietuvoje'
      : 'African food product import, warehousing, and distribution in Lithuania',
  };

  return (
    <Layout>
      <SEO
        title={language === 'lt' ? 'Mažmenininkams' : 'For Retailers'}
        description={language === 'lt'
          ? 'Karken Company paslaugos: afrikietiškų maisto produktų tiekimas, importas, sandėliavimas ir platinimas Lietuvoje bei Baltijos šalyse.'
          : 'Karken Company services: African food product sourcing, import, warehousing, and distribution in Lithuania and the Baltic States.'}
        keywords="food distribution services, import services, warehousing, logistics, Baltic distribution, African food"
        canonical="/services"
        jsonLd={jsonLd}
      />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src={shippingImage}
            alt="Shipping and logistics services"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container-wide relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 animate-fade-up">
            {t('services.title')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t('services.subtitle')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed mb-6">
              {t('services.intro')}
            </p>
            <p className="text-lg font-medium text-foreground">
              {t('services.easyStart')}
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit) => (
              <article
                key={benefit.key}
                className="bg-card p-8 rounded-lg shadow-lg hover-lift"
              >
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-heading font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
               <OptimizedImage
                 src={warehouseImage}
                 alt="Karken Company warehouse"
                 className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
                 loading="lazy"
               />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                {t('services.idealFor.title')}
              </h2>
              <ul className="space-y-4">
                {Array.isArray(idealForItems) && idealForItems.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground text-lg">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
               <OptimizedImage
                 src={partnershipImage}
                 alt="Business partnership and collaboration"
                 className="w-full h-[350px] object-cover rounded-lg shadow-2xl"
                 loading="lazy"
               />
            </div>
            <div className="text-primary-foreground">
              <p className="text-xl leading-relaxed mb-6">
                {t('services.cta')}
              </p>
              <Button asChild variant="heroLight" size="xl">
                <Link to="/contact">{t('nav.contact')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
