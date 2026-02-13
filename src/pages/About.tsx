import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import ScrollReveal from '@/components/ScrollReveal';
import { CheckCircle, Target, ShieldCheck, Handshake, TrendingUp, Leaf, Users, Store, Building2, UtensilsCrossed } from 'lucide-react';
import marketImage from '@/assets/african-food-market.jpg';
import warehouseImage from '@/assets/food-warehouse.jpg';
import shippingImage from '@/assets/shipping-logistics.jpg';
import marketDemandImage from '@/assets/food-warehouse.jpg';
import partnershipImage from '@/assets/business-partnership.jpg';
// import warehouseImage from '@/assets/warehouse.jpg';

const About: React.FC = () => {
  const { t, language } = useLanguage();

  const aims = [
    { key: 'cultural', icon: Users, title: t('about.aims.cultural.title'), text: t('about.aims.cultural.text') },
    { key: 'regulatory', icon: ShieldCheck, title: t('about.aims.regulatory.title'), text: t('about.aims.regulatory.text') },
    { key: 'retailer', icon: Handshake, title: t('about.aims.retailer.title'), text: t('about.aims.retailer.text') },
    { key: 'market', icon: TrendingUp, title: t('about.aims.market.title'), text: t('about.aims.market.text') },
    { key: 'ethical', icon: Leaf, title: t('about.aims.ethical.title'), text: t('about.aims.ethical.text') },
    { key: 'community', icon: Target, title: t('about.aims.community.title'), text: t('about.aims.community.text') },
  ];

  const channels = t('about.businessModel.channels') as unknown as Array<{ title: string; text: string }>;
  const channelIcons = [Store, Building2, UtensilsCrossed];

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
      foundingDate: '2024',
      description: language === 'lt'
        ? 'Autentiškų afrikietiškų maisto produktų platintojas Lietuvoje ir Baltijos šalyse'
        : 'Authentic African food product distributor in Lithuania and the Baltic States',
    },
  };

  return (
    <Layout>
      <SEO
        title={language === 'lt' ? 'Apie mus' : 'About Us'}
        description={language === 'lt'
          ? 'Sužinokite apie Karken Company – autentiškų afrikietiškų maisto produktų platintoją Lietuvoje. Mūsų misija, vertybės ir istorija.'
          : 'Learn about Karken Company – authentic African food product distributor in Lithuania. Our mission, values, and story.'}
        keywords="Karken Company, about us, African food distributor, Lithuania, company values, food import"
        canonical="/about"
        jsonLd={jsonLd}
      />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src={warehouseImage}
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

      {/* Rich Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto space-y-6">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('about.intro')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.intro2')}
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {t('about.intro3')}
            </p>
            <p className="text-lg text-foreground font-medium leading-relaxed">
              {t('about.intro4')}
            </p>
          </div>
        </div>
      </section>

      {/* Company Info & Name */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t('about.companyInfo')}
              </p>
              <blockquote className="border-l-4 border-primary pl-6 py-2 mb-6">
                <p className="text-lg text-foreground font-medium italic leading-relaxed">
                  {t('about.nameExplanation')}
                </p>
              </blockquote>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {t('about.enrichment')}
              </p>
            </div>
            <div className="relative">
               <OptimizedImage
                 src={marketDemandImage}
                 alt="African home cooking traditions"
                 className="w-full h-[400px] object-cover rounded-lg shadow-2xl"
                 loading="lazy"
               />
            </div>
          </div>
        </div>
      </section>

      {/* Business Model */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <header className="text-center mb-4">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-3">
              {t('about.businessModel.title')}
            </h2>
            <p className="text-lg text-primary font-medium mb-2">
              {t('about.businessModel.subtitle')}
            </p>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              {t('about.businessModel.intro')}
            </p>
          </header>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {Array.isArray(channels) && channels.map((channel, idx) => {
              const Icon = channelIcons[idx];
              return (
                <article key={idx} className="bg-card p-8 rounded-lg shadow-lg hover-lift border-t-4 border-primary">
                  <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-semibold text-foreground mb-4">
                    {channel.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {channel.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center text-primary-foreground">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">
              {t('about.mission.title')}
            </h2>
            <p className="text-xl leading-relaxed opacity-95">
              {t('about.mission.text')}
            </p>
          </div>
        </div>
      </section>

      {/* Strategic Aims */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-12 text-center">
            {t('about.aims.title')}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aims.map((aim) => (
              <article key={aim.key} className="bg-card p-6 rounded-lg shadow-lg hover-lift">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                  <aim.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-heading font-semibold text-foreground mb-3">
                  {aim.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {aim.text}
                </p>
              </article>
            ))}
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
