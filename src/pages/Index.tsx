import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import ScrollReveal from '@/components/ScrollReveal';
import { Button } from '@/components/ui/button';
import { ArrowRight, Truck, Shield, Globe2, Package, ChevronDown } from 'lucide-react';
import heroImage from '@/assets/hero-nigerian-food.jpg';
import rootsImage from '@/assets/african-roots-display.jpg';
// import sourcingImage from '@/assets/african-sourcing-farm.jpg';
// import marketDemandImage from '@/assets/african-market-demand.jpg';
import warehouseImage from '@/assets/food-warehouse.jpg';
import shippingImage from '@/assets/shipping-logistics.jpg';
import marketDemandImage from '@/assets/food-warehouse.jpg';
import partnershipImage from '@/assets/business-partnership.jpg';
import cookingImage from '@/assets/business-partnership.jpg';
// import cookingImage from '@/assets/african-home-cooking.jpg';
import sourcingImage from '@/assets/warehouse.jpg';

const Index: React.FC = () => {
  const { t, language } = useLanguage();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  interface FAQItem {
  question: string;
  answer: string;
}


  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Karken Company, UAB',
    description: language === 'lt' 
      ? 'Autentiškų afrikietiškų maisto produktų platintojas Lietuvoje'
      : 'Authentic African food product distributor in Lithuania',
    url: 'https://karkencompany.lt',
    logo: 'https://karkencompany.lt/karken-logo.png',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Smolensko g. 10-95',
      addressLocality: 'Vilnius',
      postalCode: 'LT-04312',
      addressCountry: 'LT',
    },
    areaServed: ['Lithuania', 'Baltic States'],
    knowsAbout: ['African Food', 'Food Distribution', 'Import Export', 'B2B Wholesale'],
  };

  return (
    <Layout>
      <SEO
        title={language === 'lt' ? 'Pradžia' : 'Home'}
        description={language === 'lt' 
          ? 'Karken Company, UAB – autentiškų afrikietiškų maisto produktų platintojas Lietuvoje. Aukšta kokybė, ES atitiktis.'
          : 'Karken Company, UAB – authentic African food product distributor in Lithuania. High quality, EU compliance.'}
        keywords="African food, food distribution, Lithuania, Baltic, Karken Company, wholesale"
        canonical="/"
        jsonLd={jsonLd}
      />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src={heroImage}
            alt="Authentic African food products"
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
        <ScrollReveal className="container-wide">
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
               <div>
                 <OptimizedImage
                    src={rootsImage}
                    alt="Authentic African food ingredients and spices"
                   className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
                   loading="lazy"
                 />
              </div>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* What We Do */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <ScrollReveal>
            <header className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
                {t('services.title')}
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {t('services.subtitle')}
              </p>
            </header>
          </ScrollReveal>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Sourcing */}
            <ScrollReveal direction="left">
              <article className="group bg-card rounded-lg overflow-hidden shadow-lg hover-lift">
                <div className="relative h-64 overflow-hidden">
                   <OptimizedImage
                    src={sourcingImage}
                    alt="African farmers sourcing fresh produce"
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     loading="lazy"
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
            </ScrollReveal>

            {/* Export */}
            <ScrollReveal direction="right">
              <article className="group bg-card rounded-lg overflow-hidden shadow-lg hover-lift">
                <div className="relative h-64 overflow-hidden">
                   <OptimizedImage
                     src={shippingImage}
                     alt="Export logistics and shipping"
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     loading="lazy"
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
            </ScrollReveal>

            {/* Import */}
            <ScrollReveal direction="left">
              <article className="group bg-card rounded-lg overflow-hidden shadow-lg hover-lift">
                <div className="relative h-64 overflow-hidden">
                   <OptimizedImage
                     src={warehouseImage}
                     alt="Import and warehouse operations"
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     loading="lazy"
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
            </ScrollReveal>

            {/* Distribution */}
            <ScrollReveal direction="right">
              <article className="group bg-card rounded-lg overflow-hidden shadow-lg hover-lift">
                <div className="relative h-64 overflow-hidden">
                   <OptimizedImage
                     src={partnershipImage}
                     alt="Business distribution partnerships"
                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                     loading="lazy"
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
            </ScrollReveal>
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
        <ScrollReveal className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
             <div className="relative">
               <OptimizedImage
                src={marketDemandImage}
                alt="Vibrant African food market showing growing demand"
                 className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
                 loading="lazy"
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
        </ScrollReveal>
      </section>

       {/* FAQ Section */}
      <section className="section-padding bg-muted">
        <ScrollReveal className="container-wide">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8 text-center">
              {t('faq.title')}
            </h2>

            <div>
              {t('faq.items').map((item: any, index: number) => (
                  <article key={index} className="mb-4 bg-card rounded-lg shadow-md overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-muted transition-colors"
                    >
                      <h3 className="text-lg font-semibold text-foreground text-left">
                        {item.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ml-4 ${
                          openFaqIndex === index ? 'rotate-180' : ''
                        }`}
                      />
                    </button>
                    {openFaqIndex === index && (
                      <div className="px-6 py-4 border-t border-muted bg-background">
                        {item.answer.includes('•') ? (
                          <ul className="text-muted-foreground leading-relaxed space-y-2 list-none">
                            {item.answer.split('\n').map((line: string, lineIndex: number) => {
                              const trimmedLine = line.trim();
                              if (trimmedLine.startsWith('•')) {
                                return (
                                  <li key={lineIndex} className="flex items-start gap-3">
                                    <span className="text-primary font-bold flex-shrink-0 mt-1">•</span>
                                    <span>{trimmedLine.substring(1).trim()}</span>
                                  </li>
                                );
                              }
                              if (trimmedLine) {
                                return <p key={lineIndex}>{trimmedLine}</p>;
                              }
                              return null;
                            })}
                          </ul>
                        ) : (
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        )}
                      </div>
                    )}
                  </article>
                ))}
              </div>

              <div className="mt-8 text-center">
                <p className="text-muted-foreground mb-6">
                  {language === 'lt' ? 'Dar turite klausimų?' : "Still have questions?"}
                </p>
                <Button asChild variant="default" size="lg">
                  <Link to="/contact">
                    {t('hero.ctaSecondary')}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </div>
          {/* </div> */}
        </ScrollReveal>
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
