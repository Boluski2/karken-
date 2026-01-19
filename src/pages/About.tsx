import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import { CheckCircle } from 'lucide-react';
import marketImage from '@/assets/african-market.jpg';
import warehouseImage from '@/assets/warehouse.jpg';
import shippingImage from '@/assets/shipping-port.jpg';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const values = [
    { key: 'quality', title: t('about.values.quality'), text: t('about.values.qualityText') },
    { key: 'reliability', title: t('about.values.reliability'), text: t('about.values.reliabilityText') },
    { key: 'transparency', title: t('about.values.transparency'), text: t('about.values.transparencyText') },
    { key: 'partnership', title: t('about.values.partnership'), text: t('about.values.partnershipText') },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'AboutPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Karken Company, UAB',
      foundingDate: '2020',
      description: language === 'lt'
        ? 'Oficialus Indomie platintojas Lietuvoje ir Baltijos šalyse'
        : 'Official Indomie distributor in Lithuania and the Baltic States',
    },
  };

  return (
    <Layout>
      <SEO
        title={language === 'lt' ? 'Apie mus' : 'About Us'}
        description={language === 'lt'
          ? 'Sužinokite apie Karken Company – oficialų Indomie greitai paruošiamų makaronų platintoją Lietuvoje. Mūsų misija, vertybės ir istorija.'
          : 'Learn about Karken Company – the official Indomie instant noodles distributor in Lithuania. Our mission, values, and story.'}
        keywords="Karken Company, about us, Indomie distributor, Lithuania, company values, food import"
        canonical="/about"
        jsonLd={jsonLd}
      />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src={marketImage}
            alt="Karken Company operations"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container-wide relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 animate-fade-up">
            {t('about.title')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t('about.subtitle')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              {t('about.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                {t('about.mission.title')}
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.mission.text')}
              </p>
            </div>
            <div className="relative">
              <OptimizedImage
                src={warehouseImage}
                alt="Karken Company warehouse operations"
                className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            {t('about.values.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value) => (
              <article key={value.key} className="text-center p-6 bg-card rounded-lg shadow-lg hover-lift">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-foreground mb-3">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {value.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <OptimizedImage
                src={shippingImage}
                alt="Karken Company logistics and shipping"
                className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                {t('about.story.title')}
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('about.story.p1')}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t('about.story.p2')}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {t('about.story.p3')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
