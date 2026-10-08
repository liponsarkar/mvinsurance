import React, { useState } from 'react';
import {
  Heart,
  Shield,
  Car,
  Home,
  Plane,
  Coins,
  CheckCircle2,
  ArrowRight,
  Filter,
  Sparkles,
  Info,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';
import { PageHeaderBanner } from '../components/PageHeaderBanner';
import { stockPhotos } from '../data/stockPhotos';

interface InsurancePageProps {
  lang: Language;
  setCurrentPage: (page: PageId) => void;
  onOpenQuote: (insuranceId?: string) => void;
}

export const InsurancePage: React.FC<InsurancePageProps> = ({ lang, setCurrentPage, onOpenQuote }) => {
  const t = translations[lang];
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filterTabs = [
    { id: 'all', label: t.products.filterAll },
    { id: 'personal', label: t.products.filterPersonal },
    { id: 'family', label: t.products.filterFamily },
    { id: 'vehicle', label: t.products.filterVehicle },
    { id: 'business', label: t.products.filterBusiness },
    { id: 'future', label: t.products.filterFuture },
  ];

  const getProductImage = (productId: string) => {
    const stock = (stockPhotos.products as any)[productId];
    return stock?.url || (stockPhotos.products as any).health.url;
  };

  const filteredProducts =
    activeCategory === 'all'
      ? t.products.items
      : t.products.items.filter((item) => item.category === activeCategory);

  const getProductIcon = (id: string) => {
    switch (id) {
      case 'health':
        return <Heart className="w-6 h-6 text-[#D90070]" />;
      case 'cancer':
        return <Shield className="w-6 h-6 text-[#EC1685]" />;
      case 'life':
        return <Shield className="w-6 h-6 text-[#D90070]" />;
      case 'auto':
        return <Car className="w-6 h-6 text-[#292929]" />;
      case 'property':
        return <Home className="w-6 h-6 text-[#292929]" />;
      case 'travel':
        return <Plane className="w-6 h-6 text-cyan-600" />;
      case 'retirement':
        return <Coins className="w-6 h-6 text-amber-600" />;
      default:
        return <Shield className="w-6 h-6 text-[#D90070]" />;
    }
  };

  return (
    <div className="space-y-12 pb-16">
      {/* 1. HERO WITH BACKGROUND IMAGE, OVERLAY AND BREADCRUMB */}
      <PageHeaderBanner
        bgImageUrl={stockPhotos.familyProtectionHero.primary}
        breadcrumbItems={[{ label: lang === 'es' ? 'Seguros' : 'Insurance Solutions', active: true }]}
        setCurrentPage={setCurrentPage}
        lang={lang}
        eyebrow={lang === 'es' ? 'PORTAFOLIO DE COBERTURAS' : 'INSURANCE PORTFOLIO'}
        title={
          lang === 'es' ? (
            <>
              Soluciones de <span className="text-[#EC1685]">protección</span>
              <span className="font-serif-editorial italic block text-3xl sm:text-5xl lg:text-6xl text-white font-normal mt-1">
                para cada etapa de tu vida
              </span>
            </>
          ) : (
            <>
              Protection <span className="text-[#EC1685]">solutions</span>
              <span className="font-serif-editorial italic block text-3xl sm:text-5xl lg:text-6xl text-white font-normal mt-1">
                for every chapter of your life
              </span>
            </>
          )
        }
        subtitle={
          lang === 'es'
            ? 'Explora las opciones de seguros médicos, vida, auto full cover, propiedad y retiro diseñadas para Puerto Rico.'
            : 'Explore medical, life, full cover auto, property, and retirement options designed for Puerto Rico.'
        }
        ctaText={lang === 'es' ? 'Cotiza tu Cobertura' : 'Get a Quote'}
        onCtaClick={() => onOpenQuote()}
      />

      {/* Filter Tabs & Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        {/* Filter Segmented Control */}
        <div className="flex justify-center">
          <div className="inline-flex p-1.5 bg-neutral-100 rounded-xl border border-neutral-200/90 gap-1 flex-wrap justify-center">
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id)}
                className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-lg transition-all cursor-pointer whitespace-nowrap ${
                  activeCategory === tab.id
                    ? 'bg-white text-[#D90070] shadow-xs'
                    : 'text-neutral-600 hover:text-neutral-900'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Product List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProducts.map((product) => {
            const isExpanded = expandedId === product.id;
            return (
              <div
                key={product.id}
                className="bg-white rounded-2xl p-7 border border-neutral-200 shadow-2xs hover:shadow-xl hover:border-[#D90070]/30 transition-all flex flex-col justify-between overflow-hidden"
              >
                <div>
                  {/* Photo header with overlay */}
                  <div className="relative h-44 -mx-7 -mt-7 mb-6 overflow-hidden bg-neutral-900">
                    <img
                      src={getProductImage(product.id)}
                      alt={product.title}
                      onError={(e) => {
                        (e.currentTarget as HTMLImageElement).src = '/images/auto-full-cover.jpg';
                      }}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                      <div className="w-11 h-11 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md">
                        {getProductIcon(product.id)}
                      </div>
                      {product.badge && (
                        <span className="text-[11px] font-bold text-white bg-[#D90070] px-3 py-1 rounded-full shadow-md">
                          {product.badge}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="flex items-start justify-between gap-4 mb-3">
                    <div>
                      <h2 className="text-2xl font-bold text-[#292929]">{product.title}</h2>
                      <span className="text-[11px] font-semibold text-[#D90070] uppercase tracking-wider">
                        {product.category}
                      </span>
                    </div>
                  </div>

                  <p className="text-sm text-neutral-600 leading-relaxed mb-4">
                    {product.shortDesc}
                  </p>

                  {/* Features list */}
                  <div className="space-y-2 py-3 border-y border-neutral-100">
                    <span className="text-xs font-bold uppercase tracking-wider text-neutral-400 block mb-1">
                      {lang === 'es' ? 'Beneficios destacados:' : 'Key Highlights:'}
                    </span>
                    {product.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-neutral-700">
                        <CheckCircle2 className="w-4 h-4 text-[#D90070] shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Expandable full details */}
                  {isExpanded && (
                    <div className="mt-4 p-4 bg-[#F5F5F7] rounded-xl text-xs sm:text-sm text-neutral-700 leading-relaxed border border-neutral-200/80 animate-in fade-in duration-200 space-y-2">
                      <div className="font-semibold text-[#292929] flex items-center gap-1.5">
                        <Info className="w-4 h-4 text-[#D90070]" />
                        <span>{lang === 'es' ? 'Detalles de Cobertura' : 'Coverage Overview'}</span>
                      </div>
                      <p>{product.fullDesc}</p>
                    </div>
                  )}
                </div>

                {/* Card footer */}
                <div className="pt-6 mt-4 flex items-center justify-between border-t border-neutral-100">
                  <button
                    onClick={() => setExpandedId(isExpanded ? null : product.id)}
                    className="text-xs font-bold text-neutral-600 hover:text-[#D90070] transition-colors cursor-pointer"
                  >
                    {isExpanded
                      ? lang === 'es'
                        ? 'Ocultar detalles'
                        : 'Hide details'
                      : lang === 'es'
                        ? 'Ver más información'
                        : 'Learn more details'}
                  </button>

                  <button
                    onClick={() => onOpenQuote(product.id)}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-[#D90070] hover:bg-[#EC1685] text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                  >
                    <span>{t.products.getQuote}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Assistance callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 rounded-2xl border border-neutral-200 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h3 className="text-lg font-bold text-[#292929]">
              {lang === 'es'
                ? '¿No estás seguro de cuál póliza se adapta mejor a ti?'
                : 'Not sure which policy fits your needs best?'}
            </h3>
            <p className="text-xs sm:text-sm text-neutral-600">
              {lang === 'es'
                ? 'Habla directamente con Janet López para recibir una evaluación personalizada.'
                : 'Speak directly with Janet López for a one-on-one evaluation.'}
            </p>
          </div>
          <button
            onClick={() => onOpenQuote()}
            className="px-6 py-3 rounded-xl bg-[#292929] hover:bg-black text-white text-xs sm:text-sm font-bold shrink-0 transition-colors cursor-pointer"
          >
            {lang === 'es' ? 'Recibir Asesoría Gratis' : 'Get Free Guidance'}
          </button>
        </div>
      </section>
    </div>
  );
};
