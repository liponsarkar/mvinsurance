import React from 'react';
import { Phone, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';
import { MVLogo } from './MVLogo';

interface FooterProps {
  setCurrentPage: (page: PageId) => void;
  lang: Language;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ setCurrentPage, lang, onOpenQuote }) => {
  const t = translations[lang];

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#1C1C1E] text-white pt-16 pb-24 lg:pb-12 border-t border-neutral-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          {/* Column 1: Brand & Bio (Spans 2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => navigateTo('home')}
              className="focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D90070] rounded-lg p-0.5"
            >
              <MVLogo variant="white" className="h-10 w-auto" />
            </button>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              {t.footer.tagline}
            </p>
            <div className="pt-2 flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 text-xs text-neutral-300 bg-neutral-800/80 px-3 py-1.5 rounded-lg border border-neutral-700/60">
                <ShieldCheck className="w-4 h-4 text-[#EC1685]" />
                <span>{t.footer.licenseNote}</span>
              </span>
            </div>
          </div>

          {/* Column 2: Seguros */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-neutral-200 mb-4">
              {t.footer.productsTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => navigateTo('insurance')}
                  className="hover:text-[#EC1685] transition-colors cursor-pointer"
                >
                  {t.products.items[0].title}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('insurance')}
                  className="hover:text-[#EC1685] transition-colors cursor-pointer"
                >
                  {t.products.items[1].title}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('insurance')}
                  className="hover:text-[#EC1685] transition-colors cursor-pointer"
                >
                  {t.products.items[2].title}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('business')}
                  className="hover:text-[#EC1685] transition-colors cursor-pointer"
                >
                  {t.products.items[3].title}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('business')}
                  className="hover:text-[#EC1685] transition-colors cursor-pointer"
                >
                  {t.products.items[4].title}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('retirement')}
                  className="hover:text-[#EC1685] transition-colors cursor-pointer"
                >
                  {t.products.items[6].title}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Empresa */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-neutral-200 mb-4">
              {t.footer.companyTitle}
            </h4>
            <ul className="space-y-2.5 text-sm text-neutral-400">
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#EC1685] transition-colors cursor-pointer"
                >
                  {t.nav.about}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('about')}
                  className="hover:text-[#EC1685] transition-colors cursor-pointer"
                >
                  {lang === 'es' ? 'Nuestra Historia' : 'Our Story'}
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigateTo('contact')}
                  className="hover:text-[#EC1685] transition-colors cursor-pointer"
                >
                  {t.nav.contact}
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenQuote}
                  className="text-[#EC1685] hover:underline font-semibold transition-colors cursor-pointer"
                >
                  {t.nav.quoteBtn}
                </button>
              </li>
            </ul>
          </div>

          {/* Column 4: Contacto */}
          <div>
            <h4 className="text-sm font-bold tracking-wider uppercase text-neutral-200 mb-4">
              {t.footer.contactTitle}
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-neutral-400">
              <a
                href="tel:7863565990"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D90070] shrink-0" />
                <span>786-356-5990 (Janet)</span>
              </a>
              <a
                href="tel:7877101313"
                className="flex items-center gap-2.5 hover:text-white transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D90070] shrink-0" />
                <span>787-710-1313 (Oficina)</span>
              </a>
              <a
                href="mailto:oficina@mvinsurancespr.com"
                className="flex items-center gap-2.5 hover:text-white transition-colors break-all"
              >
                <Mail className="w-4 h-4 text-[#D90070] shrink-0" />
                <span>oficina@mvinsurancespr.com</span>
              </a>
              <div className="flex items-start gap-2.5 text-neutral-400">
                <MapPin className="w-4 h-4 text-[#D90070] shrink-0 mt-0.5" />
                <span>4 Calle Ramos Antonini, Las Piedras, PR 00771</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-center sm:text-left">
            <p>{t.footer.rights}</p>
            <span className="hidden sm:inline text-neutral-700">·</span>
            <p className="text-neutral-400">
              Design &amp; Developed by{' '}
              <a
                href="https://insurifydigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#EC1685] hover:text-white font-medium hover:underline transition-colors"
              >
                insurifydigital.com
              </a>{' '}
              — Thanks Lipon
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              {t.footer.privacy}
            </span>
            <span>·</span>
            <span className="hover:text-neutral-400 transition-colors cursor-pointer">
              {t.footer.terms}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
