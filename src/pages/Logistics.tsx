import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import ScrollReveal from '@/components/ScrollReveal';
import { Ship, Truck, Package, Handshake, CheckCircle } from 'lucide-react';
import shippingImage from '@/assets/shipping-logistics.jpg';
import warehouseImage from '@/assets/food-warehouse.jpg';

const Logistics: React.FC = () => {
  const { t, language } = useLanguage();

  const deliveryOptions = t('logistics.flexibility.items') as unknown as string[];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    provider: {
      '@type': 'Organization',
      name: 'Karken Company, UAB',
    },
    serviceType: 'Logistics and Distribution',
    areaServed: ['Lithuania', 'Latvia', 'Estonia', 'European Union'],
    description: language === 'lt'
      ? 'Tarptautinė logistika ir lankstus pristatymas visoje Lietuvoje ir Baltijos šalyse'
      : 'International logistics and flexible delivery across Lithuania and the Baltic States',
  };

  return (
    <Layout>
      <SEO
        title={language === 'lt' ? 'Logistika' : 'Logistics'}
        description={language === 'lt'
          ? 'Karken Company logistikos paslaugos: tarptautinis gabenimas, lankstus pristatymas ir sandėliavimas Lietuvoje bei Baltijos šalyse.'
          : 'Karken Company logistics services: international shipping, flexible delivery, and warehousing in Lithuania and the Baltic States.'}
        keywords="logistics, shipping, delivery, warehousing, Baltic logistics, international transport"
        canonical="/logistics"
        jsonLd={jsonLd}
      />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src={shippingImage}
            alt="Shipping and logistics operations"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container-wide relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 animate-fade-up">
            {t('logistics.title')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t('logistics.subtitle')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('logistics.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* International Shipping */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Ship className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  {t('logistics.shipping.title')}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('logistics.shipping.p1')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('logistics.shipping.p2')}
              </p>
            </div>
            <div>
               <OptimizedImage
                 src={shippingImage}
                 alt="International shipping services"
                 className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
                 loading="lazy"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Flexible Delivery */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <header className="text-center mb-12">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Truck className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
              {t('logistics.flexibility.title')}
            </h2>
          </header>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {Array.isArray(deliveryOptions) && deliveryOptions.map((option, index) => (
              <article
                key={index}
                className="flex items-center space-x-4 bg-card p-6 rounded-lg shadow-lg hover-lift"
              >
                <CheckCircle className="w-8 h-8 text-secondary flex-shrink-0" />
                <span className="text-foreground font-medium">{option}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Scalability */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="lg:order-2">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                  <Package className="w-8 h-8 text-primary-foreground" />
                </div>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                  {t('logistics.scalability.title')}
                </h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {t('logistics.scalability.text')}
              </p>
            </div>
            <div className="lg:order-1">
               <OptimizedImage
                 src={warehouseImage}
                 alt="Scalable warehouse operations"
                 className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
                 loading="lazy"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Partnership */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
              <Handshake className="w-8 h-8 text-primary-foreground" />
            </div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              {t('logistics.partnership.title')}
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('logistics.partnership.text')}
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Logistics;
