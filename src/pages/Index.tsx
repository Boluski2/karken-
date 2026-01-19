import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Shield, Globe2, Package } from 'lucide-react';
import heroImage from '@/assets/hero-nigerian-food.jpg';
import marketImage from '@/assets/african-market.jpg';
import shippingImage from '@/assets/shipping-port.jpg';
import warehouseImage from '@/assets/warehouse.jpg';
import retailImage from '@/assets/retail-shelves.jpg';
import cookingImage from '@/assets/african-cooking.jpg';

const Index: React.FC = () => {
  const { t, language } = useLanguage();

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Karken Company, UAB',
    description: language === 'lt' 
      ? 'Oficialus Indomie greitai paruošiamų makaronų platintojas Lietuvoje'
      : 'Official distributor of Indomie instant noodles in Lithuania and EU',
    url: 'https://karken.lt',
    logo: 'assets/karken-logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Vilnius',
      addressCountry: 'LT',
    },
    areaServed: ['Lithuania', 'Baltic States', 'European Union'],
    knowsAbout: ['Indomie', 'Instant Noodles', 'Food Distribution', 'Import Export'],
  };

  return (
    <Layout>
      <SEO
        title={language === 'lt' ? 'Pradžia' : 'Home'}
        description={language === 'lt' 
          ? 'Karken Company, UAB – oficialus Indomie greitai paruošiamų makaronų platintojas Lietuvoje ir Baltijos regione. Aukšta kokybė, ES atitiktis.'
          : 'Karken Company, UAB – official distributor of Indomie instant noodles in Lithuania and the Baltic region. High quality, EU compliance.'}
        keywords="Indomie, instant noodles, Lithuania, Baltic, food distribution, Karken Company"
        canonical="/"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src={heroImage}
            alt="Indomie instant noodles products"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container-wide relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-6 animate-fade-up">
              {t('hero.headline')}
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
              {t('hero.subheadline')}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
              {/* <Button asChild variant="heroLight" size="xl">
                <Link to="/contact">
                  {t('hero.cta')}
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button> */}
              <Button asChild variant="heroOutline" size="xl">
                <Link to="/contact">{t('hero.ctaSecondary')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Snapshot */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                {t('about.subtitle')}
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t('about.intro')}
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                {t('about.mission.text')}
              </p>
              <Button asChild variant="default" size="lg">
                <Link to="/about">
                  {t('nav.about')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <OptimizedImage
                  src={marketImage}
                  alt="Indomie products display"
                  className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
                />
                {/* <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary rounded-lg flex items-center justify-center shadow-xl">
                  <div className="text-center text-primary-foreground">
                    <span className="block text-2xl font-bold">LT + EU</span>
                    <span className="text-sm">{t('about.stats.countriesLabel')}</span>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <header className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t('services.title')}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('services.subtitle')}
            </p>
          </header>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sourcing */}
            <article className="group bg-card rounded-lg overflow-hidden shadow-lg hover-lift">
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={marketImage}
                  alt="Product sourcing from Indonesia"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Globe2 className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-foreground">
                    {t('services.sourcing.title')}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {t('services.sourcing.description')}
                </p>
              </div>
            </article>

            {/* Export */}
            <article className="group bg-card rounded-lg overflow-hidden shadow-lg hover-lift">
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={shippingImage}
                  alt="Export logistics and shipping"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Truck className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-foreground">
                    {t('services.export.title')}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {t('services.export.description')}
                </p>
              </div>
            </article>

            {/* Import */}
            <article className="group bg-card rounded-lg overflow-hidden shadow-lg hover-lift">
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={warehouseImage}
                  alt="Import and warehouse operations"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-foreground">
                    {t('services.import.title')}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {t('services.import.description')}
                </p>
              </div>
            </article>

            {/* Distribution */}
            <article className="group bg-card rounded-lg overflow-hidden shadow-lg hover-lift">
              <div className="relative h-64 overflow-hidden">
                <OptimizedImage
                  src={retailImage}
                  alt="Retail distribution network"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                    <Package className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-primary-foreground">
                    {t('services.distribution.title')}
                  </h3>
                </div>
              </div>
              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed">
                  {t('services.distribution.description')}
                </p>
              </div>
            </article>
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="default" size="lg">
              <Link to="/services">
                {t('nav.services')}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Market Demand */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <OptimizedImage
                src={retailImage}
                alt="International food market and retail"
                className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                {t('marketDemand.title')}
              </h2>
              <p className="text-lg text-primary font-medium mb-6">
                {t('marketDemand.subtitle')}
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {t('marketDemand.p1')}
              </p>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {t('marketDemand.p2')}
              </p>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                {t('marketDemand.p3')}
              </p>
              <Button asChild variant="default" size="lg">
                <Link to="/products">
                  {t('nav.products')}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0">
          <OptimizedImage
            src={cookingImage}
            alt="Indomie noodles preparation"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container-wide relative z-10 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary-foreground mb-6">
            {t('hero.cta')}
          </h2>
          <p className="text-lg text-primary-foreground/90 max-w-2xl mx-auto mb-10">
            {t('about.mission.text')}
          </p>
          <Button asChild variant="heroLight" size="xl">
            <Link to="/contact">
              {t('hero.ctaSecondary')}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
