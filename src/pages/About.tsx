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





// import React from 'react';
// import { useLanguage } from '@/contexts/LanguageContext';
// import Layout from '@/components/Layout';
// import SEO from '@/components/SEO';
// import OptimizedImage from '@/components/OptimizedImage';
// import { CheckCircle, Target, Users, Globe, Building, Package, Award } from 'lucide-react';

// const About: React.FC = () => {
//   const { t, language } = useLanguage();

//   // Core aims/objectives
//   const aims = [
//     { 
//       key: 'cultural', 
//       title: t('about.aims.cultural.title'), 
//       text: t('about.aims.cultural.text'),
//       icon: Users 
//     },
//     { 
//       key: 'regulatory', 
//       title: t('about.aims.regulatory.title'), 
//       text: t('about.aims.regulatory.text'),
//       icon: Award 
//     },
//     { 
//       key: 'retailer', 
//       title: t('about.aims.retailer.title'), 
//       text: t('about.aims.retailer.text'),
//       icon: Building 
//     },
//     { 
//       key: 'market', 
//       title: t('about.aims.market.title'), 
//       text: t('about.aims.market.text'),
//       icon: Target 
//     },
//     { 
//       key: 'ethical', 
//       title: t('about.aims.ethical.title'), 
//       text: t('about.aims.ethical.text'),
//       icon: Globe 
//     },
//     { 
//       key: 'community', 
//       title: t('about.aims.community.title'), 
//       text: t('about.aims.community.text'),
//       icon: Users 
//     },
//   ];

//   // Values
//   const values = [
//     { key: 'quality', title: t('about.values.quality'), text: t('about.values.qualityText'), icon: Award },
//     { key: 'reliability', title: t('about.values.reliability'), text: t('about.values.reliabilityText'), icon: Package },
//     { key: 'transparency', title: t('about.values.transparency'), text: t('about.values.transparencyText'), icon: CheckCircle },
//     { key: 'partnership', title: t('about.values.partnership'), text: t('about.values.partnershipText'), icon: Users },
//   ];

//   // Statistics
//   const stats = [
//     { key: 'years', value: t('about.stats.years'), label: t('about.stats.yearsLabel'), icon: Award },
//     { key: 'countries', value: t('about.stats.countries'), label: t('about.stats.countriesLabel'), icon: Building },
//     { key: 'products', value: t('about.stats.products'), label: t('about.stats.productsLabel'), icon: Package },
//     { key: 'partners', value: t('about.stats.partners'), label: t('about.stats.partnersLabel'), icon: Users },
//   ];

//   // Image URLs
//   const imageUrls = {
//     hero: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070", // Business partnership
//     mission: "https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=2070", // Warehouse operations
//     roots: "https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?q=80&w=2070", // African-Lithuanian connection
//     aims: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070", // Diverse business team
//     story: "https://images.unsplash.com/photo-1583468982228-19f19164aee2?q=80&w=2070", // African market sourcing
//     values: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?q=80&w=2070", // Logistics overview
//     company: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=2070", // Modern office
//   };

//   const jsonLd = {
//     '@context': 'https://schema.org',
//     '@type': 'AboutPage',
//     mainEntity: {
//       '@type': 'Organization',
//       name: 'Karken Company, UAB',
//       description: t('about.mission.text'),
//       foundingDate: '2023',
//       address: {
//         '@type': 'PostalAddress',
//         streetAddress: 'Smolensko g. 10-95',
//         addressLocality: 'Vilnius',
//         addressCountry: 'LT',
//       },
//     },
//   };

//   return (
//     <Layout>
//       <SEO
//         title={t('about.title') as string}
//         description={t('about.mission.text') as string}
//         keywords="Karken Company, about us, African food distributor, Lithuania, company values, food import, Baltic States"
//         canonical="/about"
//         jsonLd={jsonLd}
//       />

//       {/* Hero Banner */}
//       <section className="relative h-[50vh] min-h-[400px] flex items-center">
//         <div className="absolute inset-0">
//           <OptimizedImage
//             src={imageUrls.hero}
//             alt="Karken Company - Connecting African heritage with Baltic opportunity"
//             className="w-full h-full object-cover"
//             priority
//           />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
//         </div>
//         <div className="container-wide relative z-10">
//           <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 animate-fade-up">
//             {t('about.title')}
//           </h1>
//           <p className="text-xl text-white/90 max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
//             {t('about.subtitle')}
//           </p>
//         </div>
//       </section>

//       {/* Introduction */}
//       <section className="section-padding bg-background">
//         <div className="container-wide">
//           <div className="max-w-4xl mx-auto space-y-6">
//             <p className="text-xl text-muted-foreground leading-relaxed">
//               {t('about.intro')}
//             </p>
//             <p className="text-xl text-muted-foreground leading-relaxed">
//               {t('about.intro2')}
//             </p>
//             <p className="text-xl text-muted-foreground leading-relaxed">
//               {t('about.intro3')}
//             </p>
//             <p className="text-xl text-muted-foreground leading-relaxed">
//               {t('about.intro4')}
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Company Information */}
//       <section className="section-padding bg-muted">
//         <div className="container-wide">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <div>
//               <OptimizedImage
//                 src={imageUrls.company}
//                 alt="Karken Company operations in Vilnius"
//                 className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
//               />
//             </div>
//             <div>
//               <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
//                 {language === 'lt' ? 'Mūsų įmonė' : 'Our Company'}
//               </h2>
//               <div className="space-y-4">
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {t('about.companyInfo')}
//                 </p>
//                 <div className="bg-primary/5 p-6 rounded-lg border-l-4 border-primary">
//                   <p className="text-lg font-semibold text-foreground mb-2">
//                     {language === 'lt' ? 'Mūsų vardo reikšmė' : 'The Meaning of Our Name'}
//                   </p>
//                   <p className="text-muted-foreground">
//                     {t('about.nameExplanation')}
//                   </p>
//                 </div>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {t('about.enrichment')}
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Mission */}
//       <section className="section-padding bg-background">
//         <div className="container-wide">
//           <div className="max-w-4xl mx-auto text-center">
//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
//               {t('about.mission.title')}
//             </h2>
//             <div className="bg-primary/5 p-8 rounded-xl border-2 border-primary/20">
//               <p className="text-xl text-foreground leading-relaxed">
//                 {t('about.mission.text')}
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Core Aims */}
//       <section className="section-padding bg-muted">
//         <div className="container-wide">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
//               {t('about.aims.title')}
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               {language === 'lt' 
//                 ? 'Mūsų pagrindiniai tikslai ir principai' 
//                 : 'Our core objectives and guiding principles'}
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {aims.map((aim) => (
//               <div 
//                 key={aim.key} 
//                 className="bg-card p-8 rounded-xl shadow-lg border border-border hover:shadow-xl transition-shadow duration-300"
//               >
//                 <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
//                   <aim.icon className="w-7 h-7 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-4">
//                   {aim.title}
//                 </h3>
//                 <p className="text-muted-foreground">
//                   {aim.text}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Statistics */}
//       <section className="section-padding bg-primary text-white">
//         <div className="container-wide">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat) => (
//               <div key={stat.key} className="text-center">
//                 <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
//                   <stat.icon className="w-8 h-8 text-white" />
//                 </div>
//                 <div className="text-4xl md:text-5xl font-bold mb-2">
//                   {stat.value}
//                 </div>
//                 <div className="text-white/80">
//                   {stat.label}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Story */}
//       <section className="section-padding bg-background">
//         <div className="container-wide">
//           <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
//             <div>
//               <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
//                 {t('about.story.title')}
//               </h2>
//               <div className="space-y-6">
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {t('about.story.p1')}
//                 </p>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {t('about.story.p2')}
//                 </p>
//                 <p className="text-lg text-muted-foreground leading-relaxed">
//                   {t('about.story.p3')}
//                 </p>
//               </div>
//             </div>
//             <div>
//               <OptimizedImage
//                 src={imageUrls.story}
//                 alt="Karken Company story - Connecting cultures through food"
//                 className="w-full h-[500px] object-cover rounded-lg shadow-2xl"
//               />
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values */}
//       <section className="section-padding bg-muted">
//         <div className="container-wide">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
//               {t('about.values.title')}
//             </h2>
//             <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//               {language === 'lt' 
//                 ? 'Principai, kuriais vadovaujamės kiekvieną dieną' 
//                 : 'Principles that guide us every day'}
//             </p>
//           </div>
          
//           <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value) => (
//               <article key={value.key} className="bg-card p-8 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
//                 <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
//                   <value.icon className="w-8 h-8 text-primary" />
//                 </div>
//                 <h3 className="text-xl font-bold text-foreground mb-4">
//                   {value.title}
//                 </h3>
//                 <p className="text-muted-foreground">
//                   {value.text}
//                 </p>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Call to Action */}
//       <section className="section-padding bg-primary/5">
//         <div className="container-wide text-center">
//           <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
//             {language === 'lt' ? 'Junkitės į kelionę kartu su mumis' : 'Join Us on This Journey'}
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
//             {language === 'lt' 
//               ? 'Jei dalinatės mūsų vizija apie įtraukią maisto ateitį, susisiekite su mumis. Kartu galime kurti ryšius tarp žemynų ir bendruomenių.' 
//               : 'If you share our vision of an inclusive food future, get in touch. Together we can build bridges between continents and communities.'}
//           </p>
//           <a 
//             href="/contact"
//             className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
//           >
//             {language === 'lt' ? 'Susisiekite su mumis' : 'Contact Us'}
//           </a>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default About;