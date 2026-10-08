import React from 'react';
import {
  Car,
  Building2,
  ShieldAlert,
  Wind,
  AlertTriangle,
  Flame,
  Truck,
  CheckCircle2,
  Phone,
  FileCheck2,
  ArrowRight,
  Star,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';
import { AutoFullCoverVisual } from '../components/VisualShowcase';
import { AutoHeroBannerWithOverlay } from '../components/AutoHeroBannerWithOverlay';
import { CarrierLogos } from '../components/CarrierLogos';
import { Breadcrumb } from '../components/Breadcrumb';
import { stockPhotos } from '../data/stockPhotos';

interface BusinessAutoPageProps {
  lang: Language;
  setCurrentPage: (page: PageId) => void;
  onOpenQuote: (insuranceId?: string) => void;
}

export const BusinessAutoPage: React.FC<BusinessAutoPageProps> = ({ lang, setCurrentPage, onOpenQuote }) => {
  const t = translations[lang];

  return (
    <div className="space-y-16 pb-16">
      {/* Breadcrumb */}
      <Breadcrumb
        items={[{ label: lang === 'es' ? 'Empresas & Auto' : 'Business & Auto', active: true }]}
        setCurrentPage={setCurrentPage}
        lang={lang}
      />

      {/* 1. HERO BANNER WITH BACKGROUND IMAGE AND OVERLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AutoHeroBannerWithOverlay lang={lang} onOpenQuote={onOpenQuote} />
      </section>

      {/* 2. AUTO FULL COVER DEEP DIVE */}
      <section className="bg-white py-16 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 space-y-3">
            <div className="flex items-center gap-1.5 text-amber-400 mb-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-amber-400" />
              ))}
            </div>
            <h2 className="text-3xl font-extrabold text-[#292929] tracking-tight">
              {t.businessPage.autoSection.title}
            </h2>
            <p className="text-neutral-600 text-base">{t.businessPage.autoSection.subtitle}</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {t.businessPage.autoSection.features.map((feat, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-[#F5F5F7] border border-neutral-200/80 flex items-start gap-3.5"
              >
                <div className="w-8 h-8 rounded-lg bg-[#D90070] text-white flex items-center justify-center shrink-0 mt-0.5 font-bold text-xs">
                  ✓
                </div>
                <div>
                  <h4 className="text-sm font-bold text-[#292929] leading-snug">{feat}</h4>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 bg-[#FFF1F7] rounded-2xl border border-[#D90070]/20 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#D90070]">
                {lang === 'es' ? '¿Vehículo financiado?' : 'Financed vehicle?'}
              </span>
              <p className="text-sm font-semibold text-[#292929] mt-0.5">
                {lang === 'es'
                  ? 'Aceptado por bancos, cooperativas y agencias de financiamiento automotriz de Puerto Rico.'
                  : 'Accepted by all major banks and credit unions across Puerto Rico.'}
              </p>
            </div>
            <button
              onClick={() => onOpenQuote('auto')}
              className="px-5 py-2.5 rounded-xl bg-[#D90070] text-white font-bold text-xs whitespace-nowrap hover:bg-[#EC1685] transition-colors"
            >
              {lang === 'es' ? 'Cotizar mi prima' : 'Quote my premium'}
            </button>
          </div>
        </div>
      </section>

      {/* 3. SEGUROS COMERCIALES & PROPIEDAD WITH BACKGROUND IMAGE AND OVERLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Commercial Banner with photo backdrop */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl mb-10 bg-neutral-900 border border-neutral-800">
          <div className="absolute inset-0 w-full h-full">
            <img
              src={stockPhotos.commercialHero.primary}
              alt="Propiedad Comercial en Puerto Rico"
              onError={(e) => {
                (e.currentTarget as HTMLImageElement).src = stockPhotos.commercialHero.secondary;
              }}
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/50 z-10" />

          <div className="relative z-20 p-8 sm:p-12 max-w-3xl space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EC1685]/20 border border-[#EC1685]/40 text-[#EC1685] text-xs font-bold uppercase tracking-wider">
              {lang === 'es' ? 'CONTINUIDAD OPERACIONAL' : 'BUSINESS CONTINUITY'}
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
              {lang === 'es' ? (
                <>
                  Seguros para <span className="text-[#EC1685]">empresas</span>
                  <span className="font-serif-editorial italic block text-3xl sm:text-5xl text-neutral-100 font-normal mt-1">
                    y propiedad comercial en Puerto Rico
                  </span>
                </>
              ) : (
                <>
                  Commercial <span className="text-[#EC1685]">coverage</span>
                  <span className="font-serif-editorial italic block text-3xl sm:text-5xl text-neutral-100 font-normal mt-1">
                    for businesses and property in Puerto Rico
                  </span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed">
              {t.businessPage.commercialSection.subtitle}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.businessPage.commercialSection.cards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-neutral-200 shadow-2xs hover:shadow-lg hover:border-[#D90070]/40 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#FFF1F7] flex items-center justify-center mb-4 border border-[#D90070]/15">
                  <Building2 className="w-6 h-6 text-[#D90070]" />
                </div>
                <h3 className="text-xl font-bold text-[#292929] mb-2">{card.title}</h3>
                <p className="text-sm text-neutral-600 leading-relaxed">{card.desc}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-neutral-100">
                <button
                  onClick={() => onOpenQuote('property')}
                  className="text-xs font-bold text-[#D90070] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{lang === 'es' ? 'Cotizar protección comercial' : 'Request commercial quote'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Puerto Rico Catastrophic & Legal Perils Badge Bar */}
        <div className="mt-12 bg-[#292929] text-white p-8 rounded-3xl shadow-lg border border-neutral-700">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-amber-400" />
            <span>
              {lang === 'es'
                ? '¿Ante qué riesgos protegemos tu negocio en Puerto Rico?'
                : 'What perils do we protect your Puerto Rico business against?'}
            </span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 text-xs font-semibold text-neutral-300">
            <div className="flex items-center gap-2 bg-neutral-800 p-3 rounded-xl border border-neutral-700">
              <Wind className="w-4 h-4 text-cyan-400" />
              <span>{lang === 'es' ? 'Huracanes & Tormentas' : 'Hurricanes & Storms'}</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-800 p-3 rounded-xl border border-neutral-700">
              <ShieldAlert className="w-4 h-4 text-amber-400" />
              <span>{lang === 'es' ? 'Terremotos & Sismos' : 'Earthquakes'}</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-800 p-3 rounded-xl border border-neutral-700">
              <Flame className="w-4 h-4 text-rose-400" />
              <span>{lang === 'es' ? 'Incendios & Explosiones' : 'Fire & Explosions'}</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-800 p-3 rounded-xl border border-neutral-700">
              <FileCheck2 className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'es' ? 'Demandas Civiles (CGL)' : 'Lawsuits (CGL)'}</span>
            </div>
            <div className="flex items-center gap-2 bg-neutral-800 p-3 rounded-xl border border-neutral-700">
              <Truck className="w-4 h-4 text-purple-400" />
              <span>{lang === 'es' ? 'Robo & Vandalismo' : 'Theft & Vandalism'}</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CARRIERS */}
      <section className="bg-white py-12 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CarrierLogos />
        </div>
      </section>
    </div>
  );
};
