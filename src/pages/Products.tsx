import React from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import heroImage from '@/assets/ikhsan-baihaqi-pbc2wXbQYpI-unsplash.jpg';
import spicesImage from '@/assets/spices-flatlay.jpg';
import cookingImage from '@/assets/Drink.png';
import marketImage from '@/assets/grains.png';
import { Shield } from 'lucide-react';

const Products: React.FC = () => {
  const { t, language } = useLanguage();

  const categories = [
    {
      key: 'grains',
      image: heroImage,
      title: t('products.categories.grains.title'),
      description: t('products.categories.grains.description'),
      items: t('products.categories.grains.items') as unknown as string[],
    },
    {
      key: 'packaged',
      image: marketImage,
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
      image: cookingImage,
      title: t('products.categories.specialty.title'),
      description: t('products.categories.specialty.description'),
      items: t('products.categories.specialty.items') as unknown as string[],
    },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: language === 'lt' ? 'Indomie produktai' : 'Indomie Products',
    description: language === 'lt'
      ? 'Indomie greitai paruošiamų makaronų asortimentas'
      : 'Indomie instant noodles product range',
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
          ? 'Atraskite Indomie greitai paruošiamų makaronų asortimentą. Įvairūs skoniai ir formatai didmeninei prekybai Lietuvoje ir Baltijos šalyse.'
          : 'Discover the Indomie instant noodles range. Various flavors and formats for wholesale in Lithuania and the Baltic States.'}
        keywords="Indomie products, instant noodles, Mi Goreng, noodle flavors, wholesale, Baltic"
        canonical="/products"
        jsonLd={jsonLd}
      />

      {/* Hero Banner */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src={spicesImage}
            alt="Indomie product varieties"
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
            <div className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start`}>
              <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                <div className="sticky top-28">
                  <OptimizedImage
                    src={category.image}
                    alt={String(category.title)}
                    className="w-full h-[400px] lg:h-[500px] object-cover rounded-lg shadow-2xl"
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
          </div>
        </section>
      ))}

         {/* Compliance Note */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto bg-muted p-8 rounded-xl border-l-4 border-primary">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-foreground">
                  {t('products.note')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
