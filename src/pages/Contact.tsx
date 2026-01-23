import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { z } from 'zod';
import { useLanguage } from '@/contexts/LanguageContext';
import Layout from '@/components/Layout';
import SEO from '@/components/SEO';
import OptimizedImage from '@/components/OptimizedImage';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { EMAILJS_CONFIG } from '@/config/emailjs';

// Form validation schema
const contactSchema = z.object({
  name: z.string().trim().min(1, 'Name is required').max(100, 'Name must be less than 100 characters'),
  company: z.string().trim().max(100, 'Company must be less than 100 characters').optional(),
  email: z.string().trim().email('Invalid email address').max(255, 'Email must be less than 255 characters'),
  phone: z.string().trim().max(20, 'Phone must be less than 20 characters').optional(),
  interest: z.string().optional(),
  message: z.string().trim().min(1, 'Message is required').max(2000, 'Message must be less than 2000 characters'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const Contact: React.FC = () => {
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    interest: '',
    message: '',
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});

  const interestOptions = t('contact.form.interestOptions') as string[];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const result = contactSchema.safeParse(formData);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactFormData, string>> = {};
      result.error.errors.forEach(err => {
        if (err.path[0]) {
          fieldErrors[err.path[0] as keyof ContactFormData] = err.message;
        }
      });
      setErrors(fieldErrors);
      return;
    }

    if (
      EMAILJS_CONFIG.SERVICE_ID === 'YOUR_SERVICE_ID' ||
      EMAILJS_CONFIG.TEMPLATE_ID === 'YOUR_TEMPLATE_ID' ||
      EMAILJS_CONFIG.PUBLIC_KEY === 'YOUR_PUBLIC_KEY'
    ) {
      toast({
        title: language === 'lt' ? 'Konfigūracija reikalinga' : 'Configuration Required',
        description: language === 'lt' 
          ? 'Prašome sukonfigūruoti EmailJS kredencialus src/config/emailjs.ts faile'
          : 'Please configure EmailJS credentials in src/config/emailjs.ts',
        variant: 'destructive',
      });
      return;
    }

    setIsLoading(true);

    try {
      await emailjs.send(
        EMAILJS_CONFIG.SERVICE_ID,
        EMAILJS_CONFIG.TEMPLATE_ID,
        {
          from_name: result.data.name,
          from_email: result.data.email,
          company: result.data.company || 'Not provided',
          phone: result.data.phone || 'Not provided',
          interest: result.data.interest || 'Not specified',
          message: result.data.message,
        },
        EMAILJS_CONFIG.PUBLIC_KEY
      );

      setIsSubmitted(true);
      toast({
        title: language === 'lt' ? 'Žinutė išsiųsta!' : 'Message Sent!',
        description: language === 'lt' 
          ? 'Netrukum susisieksime su Jumis.' 
          : 'We will get back to you soon.',
      });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: language === 'lt' ? 'Klaida' : 'Error',
        description: language === 'lt'
          ? 'Nepavyko išsiųsti žinutės. Bandykite vėliau.'
          : 'Failed to send message. Please try again later.',
        variant: 'destructive',
      });
    } finally {
      setIsLoading(false);
    }
  };

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    mainEntity: {
      '@type': 'Organization',
      name: 'Karken Company, UAB',
      telephone: '+370 609 09398',
      email: 'hello@karkencompany.lt',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Smolensko g. 10-95',
        addressLocality: 'Vilnius',
        postalCode: 'LT-04312',
        addressCountry: 'LT',
      },
    },
  };

  // Image URLs
  const heroImageUrl = "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop";

  return (
    <Layout>
      <SEO
        title={t('contact.title') as string}
        description={t('contact.subtitle') as string}
        keywords="contact Karken Company, African food distributor Lithuania, wholesale inquiry, business partnership"
        canonical="/contact"
        jsonLd={jsonLd}
      />

      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[350px] flex items-center">
        <div className="absolute inset-0">
          <OptimizedImage
            src={heroImageUrl}
            alt="Contact Karken Company for partnership"
            className="w-full h-full object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/40" />
        </div>
        <div className="container-wide relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4 animate-fade-up">
            {t('contact.title')}
          </h1>
          <p className="text-xl text-white/90 max-w-2xl animate-fade-up" style={{ animationDelay: '0.1s' }}>
            {t('contact.subtitle')}
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-background">
        <div className="container-wide">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <p className="text-xl text-muted-foreground leading-relaxed">
              {t('contact.intro')}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Form */}
            <div>
              {isSubmitted ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-8 text-center">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-4">
                    {language === 'lt' ? 'Sėkmingai išsiųsta!' : 'Successfully Sent!'}
                  </h3>
                  <p className="text-lg text-muted-foreground">{t('contact.form.success')}</p>
                  <Button 
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        interest: '',
                        message: '',
                      });
                    }}
                    className="mt-6"
                  >
                    {language === 'lt' ? 'Siųsti naują žinutę' : 'Send New Message'}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <Input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className={`h-12 ${errors.name ? 'border-destructive' : ''}`}
                        placeholder={language === 'lt' ? 'Jūsų vardas ir pavardė' : 'Your full name'}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive mt-1">{errors.name}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.form.company')}
                      </label>
                      <Input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className={`h-12 ${errors.company ? 'border-destructive' : ''}`}
                        placeholder={language === 'lt' ? 'Jūsų įmonė' : 'Your company'}
                      />
                      {errors.company && (
                        <p className="text-sm text-destructive mt-1">{errors.company}</p>
                      )}
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.form.email')} *
                      </label>
                      <Input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className={`h-12 ${errors.email ? 'border-destructive' : ''}`}
                        placeholder={language === 'lt' ? 'el.paštas@pavyzdys.lt' : 'email@example.com'}
                      />
                      {errors.email && (
                        <p className="text-sm text-destructive mt-1">{errors.email}</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                        {t('contact.form.phone')}
                      </label>
                      <Input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`h-12 ${errors.phone ? 'border-destructive' : ''}`}
                        placeholder="+370 XXX XXXXX"
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive mt-1">{errors.phone}</p>
                      )}
                    </div>
                  </div>
                  {/* <div>
                    <label htmlFor="interest" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.interest')}
                    </label>
                    <select
                      id="interest"
                      name="interest"
                      value={formData.interest}
                      onChange={handleChange}
                      className="w-full h-12 px-4 rounded-md border border-input bg-background text-foreground"
                    >
                      <option value="">{language === 'lt' ? 'Pasirinkite domėjimąsi' : 'Select interest'}</option>
                      {interestOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  </div> */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className={`resize-none ${errors.message ? 'border-destructive' : ''}`}
                      placeholder={language === 'lt' 
                        ? 'Jūsų žinutė arba užklausa...' 
                        : 'Your message or inquiry...'}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive mt-1">{errors.message}</p>
                    )}
                  </div>
                  <div className="flex gap-4">
                    <Button type="submit" size="xl" className="flex-1 sm:flex-none" disabled={isLoading}>
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {language === 'lt' ? 'Siunčiama...' : 'Sending...'}
                        </>
                      ) : (
                        t('contact.form.submit')
                      )}
                    </Button>
                  </div>
                </form>
              )}
            </div>

            {/* Contact Info */}
            <aside>
              <div className="bg-card rounded-lg p-8 shadow-lg border border-border">
                <h2 className="text-2xl font-heading font-bold text-foreground mb-8">
                  {t('contact.info.company')}
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {t('contact.info.address')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {t('contact.info.phone')}
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">
                        {t('contact.info.email')}
                      </p>
                    </div>
                  </li>
                  {/* <li className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Clock className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground mb-1">
                        {language === 'lt' ? 'Darbo laikas' : 'Business Hours'}
                      </p>
                      <p className="text-muted-foreground">
                        {language === 'lt' ? 'Pirmadienis - Penktadienis: 9:00-17:00' : 'Monday - Friday: 9:00-17:00'}
                      </p>
                    </div>
                  </li> */}
                </ul>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="text-muted-foreground text-sm mb-2">
                    {t('contact.info.regNumber')}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {t('contact.info.vatNote')}
                  </p>
                </div>
                <div className="mt-6 bg-muted/50 p-4 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    {t('contact.legal')}
                  </p>
                </div>
                
                {/* Quick Action Buttons */}
                {/* <div className="mt-8 space-y-3">
                  <a 
                    href={`mailto:${t('contact.info.email')}?subject=${language === 'lt' ? 'Produktų katalogo užklausa' : 'Product Catalog Request'}`}
                    className="block w-full text-center bg-primary text-primary-foreground px-4 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    {t('contact.form.catalog')}
                  </a>
                  <a 
                    href={`mailto:${t('contact.info.email')}?subject=${language === 'lt' ? 'Konsultacijos užklausa' : 'Consultation Request'}`}
                    className="block w-full text-center border-2 border-primary text-primary px-4 py-3 rounded-lg hover:bg-primary/5 transition-colors"
                  >
                    {t('contact.form.consultation')}
                  </a>
                </div> */}
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {/* <section className="section-padding bg-primary/5">
        <div className="container-wide text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
            {t('cta.title')}
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            {t('cta.text')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`tel:${t('contact.info.phone')}`} className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
              <Phone className="w-5 h-5" />
              {language === 'lt' ? 'Skambinti' : 'Call Now'}
            </a>
            <a href={`mailto:${t('contact.info.email')}`} className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-8 py-3 rounded-lg hover:bg-primary/5 transition-colors">
              <Mail className="w-5 h-5" />
              {language === 'lt' ? 'Rašyti el. laišką' : 'Send Email'}
            </a>
          </div>
        </div>
      </section> */}
    </Layout>
  );
};

export default Contact;