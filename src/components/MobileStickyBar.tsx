import React from 'react';
import { Phone, MessageCircle, Zap } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';

interface MobileStickyBarProps {
  lang: Language;
  onOpenQuote: () => void;
}

export const MobileStickyBar: React.FC<MobileStickyBarProps> = ({ lang, onOpenQuote }) => {
  const t = translations[lang];

  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-neutral-200 px-3 py-2 shadow-lg safe-bottom">
      <div className="grid grid-cols-3 gap-2 max-w-md mx-auto">
        {/* Call button */}
        <a
          href="tel:7863565990"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
          aria-label="Llamar a Janet López"
        >
          <Phone className="w-4 h-4 text-[#292929]" />
          <span className="text-[11px] font-semibold tracking-tight mt-0.5">
            {t.nav.mobileCall}
          </span>
        </a>

        {/* WhatsApp button */}
        <a
          href="https://wa.me/17863565990?text=Hola%20Janet,%20quisiera%20recibir%20orientación%20sobre%20un%20seguro."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-emerald-700 bg-emerald-50/80 hover:bg-emerald-100/80 transition-colors"
          aria-label="Chatear por WhatsApp"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span className="text-[11px] font-semibold tracking-tight mt-0.5">
            {t.nav.mobileWhatsapp}
          </span>
        </a>

        {/* Quote button */}
        <button
          onClick={onOpenQuote}
          className="flex flex-col items-center justify-center py-1.5 px-2 rounded-xl text-white bg-[#D90070] hover:bg-[#EC1685] transition-colors shadow-xs"
          aria-label="Solicitar cotización"
        >
          <Zap className="w-4 h-4" />
          <span className="text-[11px] font-semibold tracking-tight mt-0.5">
            {t.nav.mobileQuote}
          </span>
        </button>
      </div>
    </div>
  );
};
