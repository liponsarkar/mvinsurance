import React, { useState } from 'react';
import { Menu, X, Phone, Globe } from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';
import { MVLogo } from './MVLogo';

interface NavbarProps {
  currentPage: PageId;
  setCurrentPage: (page: PageId) => void;
  lang: Language;
  setLang: (lang: Language) => void;
  onOpenQuote: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  setCurrentPage,
  lang,
  setLang,
  onOpenQuote,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const t = translations[lang];

  const navLinks: { id: PageId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'insurance', label: t.nav.insurance },
    { id: 'business', label: t.nav.business },
    { id: 'retirement', label: t.nav.retirement },
    { id: 'contact', label: t.nav.contact },
  ];

  const handleNavClick = (pageId: PageId) => {
    setCurrentPage(pageId);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white/95 backdrop-blur-md border-b border-neutral-200/80 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Zone 1: Brand Wordmark */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D90070] rounded-lg p-1"
            aria-label="MV Insurance Inicio"
          >
            <MVLogo className="h-10 sm:h-11 w-auto" />
          </button>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium text-neutral-700">
            {navLinks.map((link) => {
              const isActive = currentPage === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1 whitespace-nowrap transition-colors hover:text-[#D90070] cursor-pointer ${
                    isActive ? 'text-[#D90070] font-semibold' : 'text-neutral-700'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D90070] rounded-full animate-in fade-in" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Actions (Language switcher + CTA button) */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Language Switch */}
            <div className="flex items-center bg-neutral-100 p-1 rounded-lg border border-neutral-200 text-xs font-semibold">
              <button
                onClick={() => setLang('es')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  lang === 'es'
                    ? 'bg-white text-[#D90070] shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
                aria-label="Cambiar a Español"
              >
                ES 🇵🇷
              </button>
              <button
                onClick={() => setLang('en')}
                className={`px-2.5 py-1 rounded-md transition-all cursor-pointer ${
                  lang === 'en'
                    ? 'bg-white text-[#D90070] shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
                aria-label="Switch to English"
              >
                EN 🇺🇸
              </button>
            </div>

            {/* Direct Phone link */}
            <a
              href="tel:7863565990"
              className="hidden xl:inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-700 hover:text-[#D90070] px-3 py-2 rounded-lg hover:bg-neutral-50 transition-colors"
              title="Llamar a Janet López"
            >
              <Phone className="w-3.5 h-3.5 text-[#D90070]" />
              <span>786-356-5990</span>
            </a>

            {/* Primary Action Button */}
            <button
              onClick={onOpenQuote}
              className="py-2.5 px-5 text-xs sm:text-sm font-semibold text-white bg-[#D90070] hover:bg-[#EC1685] rounded-xl transition-all shadow-sm shadow-[#D90070]/25 whitespace-nowrap cursor-pointer active:scale-98"
            >
              {t.nav.quoteBtn}
            </button>
          </div>

          {/* Mobile Right Controls: Language toggle + Hamburger */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
              className="px-2 py-1 text-xs font-bold text-neutral-700 bg-neutral-100 rounded-lg border border-neutral-200"
              aria-label="Toggle language"
            >
              {lang === 'es' ? 'EN 🇺🇸' : 'ES 🇵🇷'}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-lg focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-[#D90070]"
              aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-neutral-200 bg-white px-4 pt-3 pb-6 shadow-xl animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  currentPage === link.id
                    ? 'bg-[#FFF1F7] text-[#D90070] font-semibold'
                    : 'text-neutral-800 hover:bg-neutral-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          <div className="mt-4 pt-4 border-t border-neutral-100 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-neutral-600 px-1">
              <span className="flex items-center gap-1.5">
                <Globe className="w-4 h-4 text-[#D90070]" />
                {lang === 'es' ? 'Idioma / Language:' : 'Language / Idioma:'}
              </span>
              <div className="flex gap-1">
                <button
                  onClick={() => setLang('es')}
                  className={`px-2.5 py-1 text-xs rounded font-semibold ${
                    lang === 'es' ? 'bg-[#D90070] text-white' : 'bg-neutral-100 text-neutral-700'
                  }`}
                >
                  Español
                </button>
                <button
                  onClick={() => setLang('en')}
                  className={`px-2.5 py-1 text-xs rounded font-semibold ${
                    lang === 'en' ? 'bg-[#D90070] text-white' : 'bg-neutral-100 text-neutral-700'
                  }`}
                >
                  English
                </button>
              </div>
            </div>

            <a
              href="tel:7863565990"
              className="flex items-center justify-center gap-2 py-2.5 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 text-xs font-semibold rounded-xl"
            >
              <Phone className="w-4 h-4 text-[#D90070]" />
              <span>Llamar: 786-356-5990</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 px-4 bg-[#D90070] hover:bg-[#EC1685] text-white font-semibold text-sm rounded-xl shadow-sm text-center"
            >
              {t.nav.quoteBtn}
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
