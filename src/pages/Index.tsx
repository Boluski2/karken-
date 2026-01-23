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
import retailImage from '@/assets/junseong-lee-WKMOPVvlLvo-unsplash.jpg';
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




// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useLanguage } from '@/contexts/LanguageContext';
// import Layout from '@/components/Layout';
// import SEO from '@/components/SEO';
// import OptimizedImage from '@/components/OptimizedImage';
// import { Button } from '@/components/ui/button';
// import { ArrowRight, Truck, Shield, Globe2, Package, CheckCircle, Users, Target, Award, BarChart, Mail } from 'lucide-react';

// const Index: React.FC = () => {
//   const { t, language } = useLanguage();

//   // Image URLs
//   const imageUrls = {
//     hero: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?q=80&w=2070", // African food products
//     about: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?q=80&w=2070", // African market
//     sourcing: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?q=80&w=2070", // Market sourcing
//     export: "https://images.unsplash.com/photo-1586511925558-a4c6376fe65f?q=80&w=2070", // Shipping port
//     import: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070", // Warehouse
//     distribution: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070", // Retail shelves
//     market: "https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?q=80&w=2070", // Market demand
//     cta: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070", // Partnership meeting
//     values: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070", // Logistics
//   };

//   // Services
//   const services = [
//     { key: 'sourcing', icon: Globe2, image: imageUrls.sourcing, title: t('services.sourcing.title'), description: t('services.sourcing.description') },
//     { key: 'export', icon: Truck, image: imageUrls.export, title: t('services.export.title'), description: t('services.export.description') },
//     { key: 'import', icon: Shield, image: imageUrls.import, title: t('services.import.title'), description: t('services.import.description') },
//     { key: 'distribution', icon: Package, image: imageUrls.distribution, title: t('services.distribution.title'), description: t('services.distribution.description') },
//   ];

//   // Partner Benefits
//   const partnerBenefits = [
//     { key: 'compliant', icon: Shield, title: t('services.compliant.title'), text: t('services.compliant.text') },
//     { key: 'flexible', icon: Target, title: t('services.flexible.title'), text: t('services.flexible.text') },
//     { key: 'transparent', icon: BarChart, title: t('services.transparent.title'), text: t('services.transparent.text') },
//     { key: 'logistics', icon: Truck, title: t('services.logistics.title'), text: t('services.logistics.text') },
//   ];

//   // Values
//   const values = [
//     { key: 'quality', title: t('about.values.quality'), text: t('about.values.qualityText'), icon: Award },
//     { key: 'reliability', title: t('about.values.reliability'), text: t('about.values.reliabilityText'), icon: CheckCircle },
//     { key: 'transparency', title: t('about.values.transparency'), text: t('about.values.transparencyText'), icon: Shield },
//     { key: 'partnership', title: t('about.values.partnership'), text: t('about.values.partnershipText'), icon: Users },
//   ];

//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'Organization',
//     name: 'Karken Company, UAB',
//     description: t('about.mission.text') as string,
//     url: 'https://karkencompany.lt',
//     logo: '/logo.png',
//     address: {
//       '@type': 'PostalAddress',
//       streetAddress: 'Smolensko g. 10-95',
//       addressLocality: 'Vilnius',
//       postalCode: 'LT-04312',
//       addressCountry: 'LT',
//     },
//     areaServed: ['Lithuania', 'Baltic States', 'European Union'],
//     knowsAbout: ['African food products', 'Food distribution', 'Import export', 'Logistics', 'Compliance'],
//   };

//   return (
//     <Layout>
//       <SEO
//         title={language === 'lt' ? 'Karken Company - Afrikietiško maisto platinimas' : 'Karken Company - African Food Distribution'}
//         description={t('hero.subheadline') as string}
//         keywords="African food distribution, Lithuania, authentic products, import, wholesale, Baltic States"
//         canonical="/"
//         jsonLd={jsonLd}
//       />

//       {/* Hero Section */}
//       <section className="relative min-h-[90vh] flex items-center">
//         <div className="absolute inset-0">
//           <OptimizedImage
//             src={imageUrls.hero}
//             alt="Authentic African food products from Karken Company"
//             className="w-full h-full object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
//         </div>
//         <div className="container-wide relative z-10">
//           <div className="max-w-3xl">
//             <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 animate-fade-up">
//               {t('hero.headline')}
//             </h1>
//             <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed animate-fade-up" style={{ animationDelay: '0.1s' }}>
//               {t('hero.subheadline')}
//             </p>
//             <div className="flex flex-col sm:flex-row gap-4 animate-fade-up" style={{ animationDelay: '0.2s' }}>
//               <Button asChild variant="default" size="xl" className="bg-white text-primary hover:bg-white/90">
//                 <Link to="/contact">
//                   {t('hero.cta')}
//                   <ArrowRight className="w-5 h-5 ml-2" />
//                 </Link>
//               </Button>
//               <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
//                 <Link to="/about">{t('hero.ctaSecondary')}</Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* About Snapshot */}
//       <section className="section-padding bg-background">
//         <div className="container-wide">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <div className="order-2 lg:order-1">
//               <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
//                 {t('about.subtitle')}
//               </h2>
//               <div className="space-y-4 mb-8">
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {t('about.intro')}
//                 </p>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {t('about.intro2')}
//                 </p>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {t('about.intro3')}
//                 </p>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {t('about.intro4')}
//                 </p>
//               </div>
//               <Button asChild variant="default" size="lg">
//                 <Link to="/about">
//                   {t('nav.about')}
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </Link>
//               </Button>
//             </div>
//             <div className="order-1 lg:order-2">
//               <div className="relative">
//                 <OptimizedImage
//                   src={imageUrls.about}
//                   alt="African market sourcing for authentic products"
//                   className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Values */}
//       <section className="section-padding bg-muted">
//         <div className="container-wide">
//           <header className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
//               {t('about.values.title')}
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               {language === 'lt' 
//                 ? 'Principai, kuriais vadovaujamės kiekvieną dieną' 
//                 : 'Principles that guide us every day'}
//             </p>
//           </header>

//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value) => (
//               <article key={value.key} className="bg-card p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <value.icon className="w-8 h-8 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-4">
//                   {value.title}
//                 </h3>
//                 <p className="text-muted-foreground text-sm">
//                   {value.text}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* What We Do */}
//       <section className="section-padding bg-background">
//         <div className="container-wide">
//           <header className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
//               {t('services.title')}
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               {t('services.subtitle')}
//             </p>
//           </header>

//           <div className="grid md:grid-cols-2 gap-8">
//             {services.map((service) => (
//               <article key={service.key} className="group bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
//                 <div className="relative h-64 overflow-hidden">
//                   <OptimizedImage
//                     src={service.image}
//                     alt={String(service.title)}
//                     className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
//                   <div className="absolute bottom-4 left-4 flex items-center space-x-3">
//                     <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
//                       <service.icon className="w-6 h-6 text-white" />
//                     </div>
//                     <h3 className="text-xl font-bold text-white">
//                       {service.title}
//                     </h3>
//                   </div>
//                 </div>
//                 <div className="p-6">
//                   <p className="text-muted-foreground leading-relaxed">
//                     {service.description}
//                   </p>
//                 </div>
//               </article>
//             ))}
//           </div>

//           <div className="text-center mt-12">
//             <Button asChild variant="default" size="lg">
//               <Link to="/services">
//                 {t('nav.services')}
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* Partner Benefits */}
//       <section className="section-padding bg-primary/5">
//         <div className="container-wide">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
//                 {language === 'lt' ? 'Partnerystės privalumai' : 'Why Partner With Karken?'}
//               </h2>
//               <div className="space-y-6">
//                 {partnerBenefits.map((benefit) => (
//                   <div key={benefit.key} className="flex items-start space-x-4">
//                     <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
//                       <benefit.icon className="w-6 h-6 text-primary" />
//                     </div>
//                     <div>
//                       <h3 className="text-xl font-bold text-foreground mb-2">
//                         {benefit.title}
//                       </h3>
//                       <p className="text-muted-foreground">
//                         {benefit.text}
//                       </p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//               <div className="mt-8">
//                 <Button asChild variant="default" size="lg">
//                   <Link to="/services">
//                     {language === 'lt' ? 'Sužinokite daugiau' : 'Learn More'}
//                     <ArrowRight className="w-4 h-4 ml-2" />
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//             <div>
//               <OptimizedImage
//                 src={imageUrls.values}
//                 alt="Business partnership benefits with Karken Company"
//                 className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Market Demand */}
//       <section className="section-padding bg-background">
//         <div className="container-wide">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <div className="relative">
//               <OptimizedImage
//                 src={imageUrls.market}
//                 alt="Growing market for African food products in Lithuania"
//                 className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
//                 {t('marketDemand.title')}
//               </h2>
//               <p className="text-lg text-primary font-medium mb-6">
//                 {t('marketDemand.subtitle')}
//               </p>
//               <div className="space-y-4 mb-8">
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {t('marketDemand.p1')}
//                 </p>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {t('marketDemand.p2')}
//                 </p>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {t('marketDemand.p3')}
//                 </p>
//               </div>
//               <Button asChild variant="default" size="lg">
//                 <Link to="/products">
//                   {t('nav.products')}
//                   <ArrowRight className="w-4 h-4 ml-2" />
//                 </Link>
//               </Button>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Products Preview */}
//       <section className="section-padding bg-muted">
//         <div className="container-wide">
//           <header className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-4">
//               {t('products.title')}
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               {t('products.subtitle')}
//             </p>
//           </header>

//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-card p-8 rounded-xl">
//               <div className="flex items-start space-x-4 mb-6">
//                 <Package className="w-8 h-8 text-primary flex-shrink-0" />
//                 <div>
//                   <h3 className="text-xl font-bold text-foreground mb-2">
//                     {language === 'lt' ? 'Greitai paruošiami makaronai ir patiekalai' : 'Instant noodles & quick-prep meals'}
//                   </h3>
//                   <p className="text-muted-foreground">
//                     {t('products.categories.grains.description')}
//                   </p>
//                 </div>
//               </div>
//               <ul className="space-y-2">
//                 {(t('products.categories.grains.items') as string[]).slice(0, 3).map((item, idx) => (
//                   <li key={idx} className="flex items-center space-x-2">
//                     <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
//                     <span className="text-foreground">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>

//             <div className="bg-card p-8 rounded-xl">
//               <div className="flex items-start space-x-4 mb-6">
//                 <Globe2 className="w-8 h-8 text-primary flex-shrink-0" />
//                 <div>
//                   <h3 className="text-xl font-bold text-foreground mb-2">
//                     {language === 'lt' ? 'Tradiciniai grūdai ir miltai' : 'Traditional grains & flours'}
//                   </h3>
//                   <p className="text-muted-foreground">
//                     {t('products.categories.packaged.description')}
//                   </p>
//                 </div>
//               </div>
//               <ul className="space-y-2">
//                 {(t('products.categories.packaged.items') as string[]).slice(0, 3).map((item, idx) => (
//                   <li key={idx} className="flex items-center space-x-2">
//                     <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
//                     <span className="text-foreground">{item}</span>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           <div className="text-center mt-12">
//             <Button asChild variant="default" size="lg">
//               <Link to="/products">
//                 {language === 'lt' ? 'Peržiūrėti visą asortimentą' : 'View Full Product Range'}
//                 <ArrowRight className="w-4 h-4 ml-2" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="relative py-24">
//         <div className="absolute inset-0">
//           <OptimizedImage
//             src={imageUrls.cta}
//             alt="Partner with Karken Company for authentic African food distribution"
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
//         </div>
//         <div className="container-wide relative z-10 text-center">
//           <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
//             {t('cta.title')}
//           </h2>
//           <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto mb-10 leading-relaxed">
//             {t('cta.text')}
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Button asChild variant="default" size="xl" className="bg-white text-primary hover:bg-white/90">
//               <Link to="/contact">
//                 <Mail className="w-5 h-5 mr-2" />
//                 {t('hero.cta')}
//               </Link>
//             </Button>
//             <Button asChild variant="outline" size="xl" className="border-white text-white hover:bg-white/10">
//               <Link to="/services">
//                 {t('nav.services')}
//                 <ArrowRight className="w-5 h-5 ml-2" />
//               </Link>
//             </Button>
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Index;