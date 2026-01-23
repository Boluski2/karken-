import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import { Globe2, Truck, Shield, Package, CheckCircle, FileText, Percent, BarChart, Users, ShoppingCart, Building, Store, CreditCard, Mail } from 'lucide-react';
import marketImage from '@/assets/african-market.jpg';
import shippingImage from '@/assets/shipping-port.jpg';
import warehouseImage from '@/assets/warehouse.jpg';
import retailImage from '@/assets/junseong-lee-WKMOPVvlLvo-unsplash.jpg';
// import partnershipImage from '@/assets/partnership.jpg';

const Services: React.FC = () => {
  const { t, language } = useLanguage();

  // Core services
  const services = [
    {
      key: 'sourcing',
      icon: Globe2,
      image: marketImage,
      title: t('services.sourcing.title'),
      description: t('services.sourcing.description'),
    },
    {
      key: 'export',
      icon: Truck,
      image: shippingImage,
      title: t('services.export.title'),
      description: t('services.export.description'),
    },
    {
      key: 'import',
      icon: Shield,
      image: warehouseImage,
      title: t('services.import.title'),
      description: t('services.import.description'),
    },
    {
      key: 'distribution',
      icon: Package,
      image: retailImage,
      title: t('services.distribution.title'),
      description: t('services.distribution.description'),
    },
  ];

  // Partner benefits
  const partnerBenefits = [
    {
      key: 'compliant',
      icon: FileText,
      title: t('services.compliant.title'),
      text: t('services.compliant.text'),
    },
    {
      key: 'flexible',
      icon: Percent,
      title: t('services.flexible.title'),
      text: t('services.flexible.text'),
    },
    {
      key: 'transparent',
      icon: CreditCard,
      title: t('services.transparent.title'),
      text: t('services.transparent.text'),
    },
    {
      key: 'logistics',
      icon: Truck,
      title: t('services.logistics.title'),
      text: t('services.logistics.text'),
    },
    {
      key: 'support',
      icon: BarChart,
      title: t('services.support.title'),
      text: t('services.support.text'),
    },
  ];

  // Ideal for target audience
  const idealForItems = t('services.idealFor.items') as string[];

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
        title={t('services.title') as string}
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

      {/* Intro Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {t('services.intro')}
            </p>
            <p className="text-xl font-semibold text-primary mb-6">
              {t('services.easyStart')}
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
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
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Partner Benefits */}
      <section className="section-padding bg-primary/5">
        <div className="container-wide">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              {language === 'lt' ? 'Partnerystės privalumai' : 'Partner Benefits'}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {language === 'lt' 
                ? 'Kodėl verta bendradarbiauti su Karken Company?'
                : 'Why choose Karken Company as your distribution partner?'}
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {partnerBenefits.map((benefit, index) => (
              <div 
                key={benefit.key} 
                className="bg-card p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <benefit.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-4">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideal For Section */}
      <section className="section-padding bg-background">
  <div className="container-wide">
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
      <div>
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
          {t('services.idealFor.title')}
        </h2>
        <ul className="space-y-4 mb-8">
          {idealForItems.map((item, index) => (
            <li key={index} className="flex items-start space-x-3">
              <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
              <span className="text-foreground">{item}</span>
            </li>
          ))}
        </ul>
        <div className="bg-muted p-6 rounded-lg border-l-4 border-primary">
          <p className="text-lg text-foreground">
            {t('services.cta')}
          </p>
          <div className="flex flex-wrap gap-4 mt-6">
            {/* Link to Contact page instead of email */}
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-5 h-5" />
              {t('contact.form.catalog')}
            </a>
            <a 
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg hover:bg-primary/5 transition-colors"
            >
              <FileText className="w-5 h-5" />
              {t('contact.form.consultation')}
            </a>
          </div>
        </div>
      </div>
      <div>
        <OptimizedImage
          src={retailImage}
          alt={t('services.idealFor.title') as string}
          className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
        />
      </div>
    </div>
  </div>
</section>
    </Layout>
  );
};

export default Services;