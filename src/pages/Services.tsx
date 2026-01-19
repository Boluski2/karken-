import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import { Globe2, Truck, Shield, Package, CheckCircle } from 'lucide-react';
import marketImage from '@/assets/african-market.jpg';
import shippingImage from '@/assets/shipping-port.jpg';
import warehouseImage from '@/assets/warehouse.jpg';
import retailImage from '@/assets/retail-shelves.jpg';

const Services: React.FC = () => {
  const { t, language } = useLanguage();

  const services = [
    {
      key: 'sourcing',
      icon: Globe2,
      image: marketImage,
      title: t('services.sourcing.title'),
      description: t('services.sourcing.description'),
      features: t('services.sourcing.features') as unknown as string[],
    },
    {
      key: 'export',
      icon: Truck,
      image: shippingImage,
      title: t('services.export.title'),
      description: t('services.export.description'),
      features: t('services.export.features') as unknown as string[],
    },
    {
      key: 'import',
      icon: Shield,
      image: warehouseImage,
      title: t('services.import.title'),
      description: t('services.import.description'),
      features: t('services.import.features') as unknown as string[],
    },
    {
      key: 'distribution',
      icon: Package,
      image: retailImage,
      title: t('services.distribution.title'),
      description: t('services.distribution.description'),
      features: t('services.distribution.features') as unknown as string[],
    },
  ];

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
      ? 'Indomie produktų importas, sandėliavimas ir platinimas Lietuvoje'
      : 'Indomie product import, warehousing, and distribution in Lithuania',
  };

  return (
    <Layout>
      <SEO
        title={language === 'lt' ? 'Paslaugos' : 'Services'}
        description={language === 'lt'
          ? 'Karken Company paslaugos: Indomie produktų tiekimas, importas, sandėliavimas ir platinimas Lietuvoje bei Baltijos šalyse.'
          : 'Karken Company services: Indomie product sourcing, import, warehousing, and distribution in Lithuania and the Baltic States.'}
        keywords="food distribution services, import services, warehousing, logistics, Baltic distribution"
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

      {/* Services */}
      {services.map((service, index) => (
        <section
          key={service.key}
          className={`section-padding ${index % 2 === 0 ? 'bg-background' : 'bg-muted'}`}
        >
          <div className="container-wide">
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="relative">
                  <OptimizedImage
                    src={service.image}
                    alt={String(service.title)}
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
                  />
                  <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-primary rounded-lg flex items-center justify-center shadow-xl">
                    <service.icon className="w-10 h-10 text-primary-foreground" />
                  </div>
                </div>
              </div>
              <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  {service.description}
                </p>
                <ul className="space-y-4">
                  {Array.isArray(service.features) && service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      ))}
    </Layout>
  );
};

export default Services;
