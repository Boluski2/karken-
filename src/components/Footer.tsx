import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '@/contexts/LanguageContext';
import { MapPin, Phone, Mail } from 'lucide-react';
import karkenLogo from '@/assets/karken-logo.jpg';
const currentYear = new Date().getFullYear();

const Footer: React.FC = () => {
  const { t } = useLanguage();

  const quickLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/services', label: t('nav.services') },
    { path: '/products', label: t('nav.products') },
    { path: '/compliance', label: t('nav.compliance') },
    { path: '/logistics', label: t('nav.logistics') },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-wide section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-6">
              <img src={karkenLogo} alt="Karken Company" className="h-14 w-auto" />
            </Link>
            <p className="text-background/70 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">
              {t('footer.quickLinks')}
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-background/70 text-sm hover:text-background transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">
              {t('footer.contact')}
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  Smolensko g. 10-95, Vilnius, LT-04312
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  +370 604 87253
                </span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="text-background/70 text-sm">
                  hello@karkencompany.lt
                </span>
              </li>
            </ul>
            <div className="mt-6 pt-4 border-t border-background/10">
              <p className="text-background/60 text-xs">
                {t('contact.info.regNumber')}
              </p>
              <p className="text-background/60 text-xs">
                {t('contact.info.vatNote')}
              </p>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-heading font-semibold mb-6">
              {t('footer.legal')}
            </h4>
            <ul className="space-y-3">
              <li>
                <Link to="/privacy-policy" className="text-background/70 text-sm hover:text-background transition-colors">
                  {t('footer.privacy')}
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-background/70 text-sm hover:text-background transition-colors">
                  {t('footer.terms')}
                </Link>
              </li>
              <li>
                <Link to="/cookie-policy" className="text-background/70 text-sm hover:text-background transition-colors">
                  {t('footer.cookies')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-background/10">
          <p className="text-center text-background/50 text-sm">
            {t('footer.copyright')}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
