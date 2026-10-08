import React, { useState } from 'react';
import { Star, ShieldCheck, Phone, MessageCircle, ArrowRight, CheckCircle2 } from 'lucide-react';
import { Language } from '../types';
import { stockPhotos } from '../data/stockPhotos';

interface AutoHeroBannerProps {
  lang: Language;
  onOpenQuote: (insuranceId?: string) => void;
}

export const AutoHeroBannerWithOverlay: React.FC<AutoHeroBannerProps> = ({
  lang,
  onOpenQuote,
}) => {
  const imageCandidates = [
    stockPhotos.autoHero.primary,
    stockPhotos.autoHero.secondary,
    stockPhotos.autoHero.local,
    '/images/auto-full-cover.jpg',
  ];

  const [srcIndex, setSrcIndex] = useState(0);

  const handleImgError = () => {
    if (srcIndex < imageCandidates.length - 1) {
      setSrcIndex(srcIndex + 1);
    }
  };

  const currentSrc = imageCandidates[srcIndex];

  return (
    <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 bg-[#141416] text-white">
      {/* 1. Real Photographic Background (No Cartoon) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={currentSrc}
          alt="Auto Seguro Full Cover Puerto Rico"
          onError={handleImgError}
          className="w-full h-full object-cover object-center transition-all duration-700 brightness-95"
        />
      </div>

      {/* 2. Measured Contrast Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/50 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/30 z-10" />

      {/* 3. Foreground Content */}
      <div className="relative z-20 p-8 sm:p-14 lg:p-16 max-w-4xl space-y-6">
        {/* Top Badges */}
        <div className="flex flex-wrap items-center gap-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EC1685]/20 border border-[#EC1685]/40 text-[#EC1685] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" />
            <span>Full Cover 100% Puerto Rico</span>
          </div>
          <div className="flex items-center gap-1 text-amber-400 bg-black/40 px-3 py-1 rounded-full border border-white/10">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
            ))}
            <span className="text-[11px] font-bold text-white ml-1">5 Estrellas</span>
          </div>
        </div>

        {/* The Exact Typography: Sans white "¿Buscas" + Sans magenta "seguro" + Serif italic "De auto?" */}
        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.05] text-balance">
          {lang === 'es' ? (
            <>
              ¿Buscas <span className="text-[#EC1685]">seguro</span>
              <span className="font-serif-editorial italic block text-4xl sm:text-6xl lg:text-7xl text-white font-normal mt-1 tracking-normal">
                De auto?
              </span>
            </>
          ) : (
            <>
              Looking for <span className="text-[#EC1685]">auto</span>
              <span className="font-serif-editorial italic block text-4xl sm:text-6xl lg:text-7xl text-white font-normal mt-1 tracking-normal">
                Insurance?
              </span>
            </>
          )}
        </h1>

        <p className="text-base sm:text-lg text-neutral-200 max-w-2xl leading-relaxed font-normal">
          {lang === 'es'
            ? 'Protege tu vehículo personal o flota con las mejores tarifas en Puerto Rico. Cobertura completa ante choque, robo, huracán y rotura de cristales sin deducible.'
            : 'Protect your vehicle or commercial fleet with the best rates in Puerto Rico. Comprehensive collision, theft, hurricane, and zero-deductible glass coverage.'}
        </p>

        {/* Feature Checkpoints */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 max-w-xl">
          {[
            lang === 'es' ? 'Colisión y volcamiento (Collision)' : 'Collision & Rollover Coverage',
            lang === 'es' ? 'Fuego, hurto y huracán (Comprehensive)' : 'Comprehensive Storm & Theft',
            lang === 'es' ? 'Cristales sin deducible' : 'Zero-Deductible Glass Breakage',
            lang === 'es' ? 'Asistencia en carretera y grúa 24/7' : '24/7 Roadside Assistance & Towing',
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-200">
              <CheckCircle2 className="w-4 h-4 text-[#EC1685] shrink-0" />
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Action CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <button
            onClick={() => onOpenQuote('auto')}
            className="px-7 py-4 rounded-xl bg-[#D90070] hover:bg-[#EC1685] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#D90070]/30 cursor-pointer active:scale-98 flex items-center gap-2"
          >
            <span>{lang === 'es' ? 'Cotiza tu Full Cover Ahora' : 'Quote Full Cover Now'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <a
            href="https://wa.me/17863565990?text=Hola%20Janet,%20quisiera%20cotizar%20un%20seguro%20de%20auto%20Full%20Cover."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-colors shadow-sm"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Directo</span>
          </a>

          <a
            href="tel:7863565990"
            className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-sm backdrop-blur-md transition-colors"
          >
            <Phone className="w-4 h-4 text-[#EC1685]" />
            <span>786-356-5990</span>
          </a>
        </div>

        {/* Bottom Carrier Alliances Strip */}
        <div className="pt-6 border-t border-white/15">
          <span className="text-[11px] font-bold uppercase tracking-wider text-neutral-400 block mb-2">
            {lang === 'es'
              ? 'Cotizamos y comparamos directamente con:'
              : 'Directly quoted and compared with:'}
          </span>
          <div className="flex flex-wrap items-center gap-3 sm:gap-6 text-xs font-bold text-white/90">
            <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">Universal</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">Multinational</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">Seguros Múltiples</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">Guardian</span>
            <span className="bg-white/10 px-3 py-1.5 rounded-lg border border-white/10">MAPFRE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
