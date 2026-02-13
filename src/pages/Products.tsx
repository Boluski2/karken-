import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import ScrollReveal from '@/components/ScrollReveal';
import { CheckCircle, Info } from 'lucide-react';
import noodlesImage from '@/assets/product-noodles.jpg';
import specialtyImage from '@/assets/product-packaged.jpg';
import spicesImage from '@/assets/product-spices.jpg';
import packagedImage from '@/assets/product-specialty.jpg';
// packagedImage
const Products: React.FC = () => {
  const { t, language } = useLanguage();

  const categories = [
    {
      key: 'grains',
      image: noodlesImage,
      title: t('products.categories.grains.title'),
      description: t('products.categories.grains.description'),
      items: t('products.categories.grains.items') as unknown as string[],
    },
    {
      key: 'packaged',
      image: packagedImage,
      title: t('products.categories.packaged.title'),
      description: t('products.categories.packaged.description'),
      items: t('products.categories.packaged.items') as unknown as string[],
    },
    {
      key: 'spices',
      image: spicesImage,
      title: t('products.categories.spices.title'),
      description: t('products.categories.spices.description'),
      items: t('products.categories.spices.items') as unknown as string[],
    },
    {
      key: 'specialty',
      image: specialtyImage,
      title: t('products.categories.specialty.title'),
      description: t('products.categories.specialty.description'),
      items: t('products.categories.specialty.items') as unknown as string[],
    },
  ];

  const qualityItems = t('products.quality.items') as unknown as string[];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: language === 'lt' ? 'Afrikietiški maisto produktai' : 'African Food Products',
    description: language === 'lt'
      ? 'Autentiški afrikietiški maisto produktai Baltijos rinkai'
      : 'Authentic African food products for the Baltic market',
    itemListElement: categories.map((cat, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: cat.title,
    })),
  };

  return (
    <Layout>
      <SEO
        title={language === 'lt' ? 'Produktai' : 'Products'}
        description={language === 'lt'
          ? 'Atraskite autentiškų afrikietiškų maisto produktų asortimentą. Grūdai, prieskoniai, gėrimai ir daugiau didmeninei prekybai Lietuvoje.'
          : 'Discover our range of authentic African food products. Grains, spices, beverages and more for wholesale in Lithuania.'}
        keywords="African food products, instant noodles, grains, spices, wholesale, Baltic"
        canonical="/products"
        jsonLd={jsonLd}
      />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src={spicesImage}
            alt="African food product varieties"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-hero-overlay" />
        </div>
        <div className="container-wide relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-primary-foreground mb-4 animate-fade-up">
            {t('products.title')}
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t('products.subtitle')}
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('products.intro')}
            </p>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      {categories.map((category, index) => (
        <section
          key={category.key}
          className={`section-padding ${index % 2 === 0 ? 'bg-muted' : 'bg-background'}`}
        >
          <div className="container-wide">
            <ScrollReveal direction={index % 2 === 0 ? 'left' : 'right'}>
              <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start`}>
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="sticky top-28">
                     <OptimizedImage
                       src={category.image}
                       alt={String(category.title)}
                       className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
                       loading="lazy"
                     />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
                    {category.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                    {category.description}
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {Array.isArray(category.items) && category.items.map((item, idx) => (
                      <article
                        key={idx}
                        className="bg-card p-4 rounded-lg shadow-md border border-border hover-lift"
                      >
                        <span className="text-foreground font-medium">{item}</span>
                      </article>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      ))}

      {/* Quality Criteria */}
      <section className="section-padding bg-primary">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-primary-foreground mb-8 text-center">
              {t('products.quality.title')}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {Array.isArray(qualityItems) && qualityItems.map((item, idx) => (
                <div key={idx} className="flex items-start space-x-3 bg-primary-foreground/10 backdrop-blur-sm rounded-lg p-4">
                  <CheckCircle className="w-5 h-5 text-primary-foreground flex-shrink-0 mt-0.5" />
                  <span className="text-primary-foreground text-sm font-medium">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Disclaimer Note */}
      <section className="section-padding bg-muted">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start space-x-4 bg-card p-6 rounded-lg border border-border shadow-sm">
              <Info className="w-6 h-6 text-muted-foreground flex-shrink-0 mt-0.5" />
              <p className="text-muted-foreground text-sm leading-relaxed italic">
                {t('products.note')}
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
