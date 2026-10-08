import React, { useState } from 'react';
import {
  Star,
  Shield,
  Award,
  CheckCircle2,
  Phone,
  Sparkles,
  Heart,
  Car,
  Building2,
  Plane,
  Umbrella,
  MessageCircle,
} from 'lucide-react';
import { stockPhotos } from '../data/stockPhotos';
import { useJanetPhoto } from '../context/JanetPhotoContext';

/**
 * Janet López Portrait Component
 * Displays the authentic photograph of Janet López (CEO/Agent/Founder)
 * Clean, unaltered, high-resolution rendering with executive badge.
 */
export const JanetLopezPhoto: React.FC<{
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showBadge?: boolean;
  photoUrl?: string;
  variant?: 'primary' | 'consulting';
  subtitle?: string;
}> = ({
  className = '',
  size = 'md',
  showBadge = true,
  photoUrl,
  variant = 'primary',
  subtitle,
}) => {
  const { photoUrl: contextPhotoUrl } = useJanetPhoto();
  const sources = [
    photoUrl,
    contextPhotoUrl,
    '/images/janet-lopez.png',
    '/Janet López.png',
    '/Janet%20L%C3%B3pez.png',
    '/janet-lopez.png',
    stockPhotos.janet.official,
    '/images/janet-lopez.jpg',
    '/janet-lopez.jpg',
  ].filter(Boolean) as string[];

  const [srcIndex, setSrcIndex] = useState(0);
  const [imgError, setImgError] = useState(false);

  const handleImgError = () => {
    if (srcIndex < sources.length - 1) {
      setSrcIndex(srcIndex + 1);
    } else {
      setImgError(true);
    }
  };

  const currentSource = sources[srcIndex] || '/images/janet-lopez.png';

  const sizeClasses = {
    sm: 'w-16 h-16',
    md: 'w-32 h-32 sm:w-40 sm:h-40',
    lg: 'w-48 h-48 sm:w-56 sm:h-56',
    hero: 'w-64 h-64 sm:w-80 sm:h-80',
  }[size];

  return (
    <div className={`relative inline-block ${className}`}>
      <div
        className={`${sizeClasses} rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-gradient-to-tr from-[#D90070] via-[#EC1685] to-amber-200 p-1 group`}
      >
        <div className="w-full h-full rounded-[20px] overflow-hidden bg-neutral-900 relative flex items-center justify-center">
          {!imgError ? (
            <img
              src={currentSource}
              alt="Janet López - Agente & Fundadora MV Insurance"
              onError={handleImgError}
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-[#292929] to-[#D90070] text-white p-3 text-center">
              <span className="text-2xl font-bold font-display">JL</span>
              <span className="text-xs font-semibold mt-1">Janet López</span>
              <span className="text-[10px] text-pink-200">MV Insurance</span>
            </div>
          )}

          {/* Overlay name strip */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent p-2 sm:p-2.5 text-center">
            <span className="text-[11px] sm:text-xs font-bold text-white tracking-wide block leading-tight">
              Janet López
            </span>
            <span className="text-[9px] sm:text-[10px] text-[#EC1685] font-semibold block uppercase tracking-wider">
              {subtitle || (variant === 'consulting' ? 'Asesoría Personalizada' : 'Agente Autorizada')}
            </span>
          </div>
        </div>
      </div>

      {showBadge && (
        <div
          className="absolute -bottom-2 -right-2 bg-emerald-500 text-white p-2 rounded-full shadow-lg border-2 border-white"
          title="Agente Licenciada Verificada"
        >
          <CheckCircle2 className="w-4 h-4" />
        </div>
      )}
    </div>
  );
};

/**
 * Team Group Hero Background Component
 * Uses real corporate team photography with rich overlay scrim
 */
export const TeamHeroBanner: React.FC<{
  onQuoteClick?: () => void;
  lang?: 'es' | 'en';
}> = ({ onQuoteClick, lang = 'es' }) => {
  const teamSources = [
    stockPhotos.teamHero.primary,
    stockPhotos.teamHero.secondary,
    stockPhotos.teamHero.local,
  ];

  const [srcIndex, setSrcIndex] = useState(0);

  const handleImgError = () => {
    if (srcIndex < teamSources.length - 1) {
      setSrcIndex(srcIndex + 1);
    }
  };

  return (
    <div className="relative w-full rounded-3xl overflow-hidden border border-neutral-200/80 shadow-2xl bg-[#18181B]">
      {/* Background container */}
      <div className="relative aspect-16/9 sm:aspect-21/9 min-h-[380px] w-full overflow-hidden flex items-center justify-center">
        <img
          src={teamSources[srcIndex]}
          alt="Equipo Profesional MV Insurance Puerto Rico"
          onError={handleImgError}
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-102"
        />

        {/* Content scrim and trust badge overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/60 to-black/30 flex flex-col justify-end p-6 sm:p-10 z-20">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 bg-[#D90070] text-white px-3.5 py-1 rounded-full text-xs font-bold tracking-wide shadow-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Equipo Profesional MV Insurance' : 'MV Insurance Professional Team'}</span>
            </div>

            <h3 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              {lang === 'es'
                ? 'Mujeres profesionales comprometidas con tu tranquilidad'
                : 'Dedicated professional women committed to your peace of mind'}
            </h3>

            <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed max-w-xl">
              {lang === 'es'
                ? 'Lideradas por Janet López desde Las Piedras, Puerto Rico. Más de 8 años guiando a familias y comerciantes con honestidad, respaldo y calidez humana.'
                : 'Led by Janet López from Las Piedras, Puerto Rico. Over 8 years guiding families and local businesses with integrity, backing, and warmth.'}
            </p>

            {onQuoteClick && (
              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={onQuoteClick}
                  className="px-5 py-2.5 rounded-xl bg-[#D90070] hover:bg-[#EC1685] text-white font-bold text-xs sm:text-sm transition-all shadow-md cursor-pointer"
                >
                  {lang === 'es' ? 'Cotiza con Nosotras' : 'Get a Quote With Us'}
                </button>
                <a
                  href="tel:7863565990"
                  className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/20 hover:bg-white/30 text-white font-bold text-xs sm:text-sm backdrop-blur-md transition-colors"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>786-356-5990</span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

/**
 * Editorial Sunset Lifestyle Hero Visual
 * Authentic photographic image of woman enjoying sunset in Puerto Rico with overlay
 */
export const HeroLifestyleVisual: React.FC = () => {
  const lifestyleSources = [
    stockPhotos.lifestyleSunset.primary,
    stockPhotos.lifestyleSunset.secondary,
    stockPhotos.lifestyleSunset.local,
  ];

  const [srcIndex, setSrcIndex] = useState(0);

  const handleImgError = () => {
    if (srcIndex < lifestyleSources.length - 1) {
      setSrcIndex(srcIndex + 1);
    }
  };

  return (
    <div className="relative w-full aspect-16/10 rounded-3xl overflow-hidden shadow-2xl border border-neutral-200/80 bg-neutral-900 group">
      {/* Real Photographic Background */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={lifestyleSources[srcIndex]}
          alt="Tranquilidad y protección en Puerto Rico"
          onError={handleImgError}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Dark & Warm Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />

      {/* Top Floating Badge */}
      <div className="absolute top-4 left-4 z-20">
        <span className="inline-flex items-center gap-1.5 bg-black/60 backdrop-blur-md text-white px-3 py-1 rounded-full text-[11px] font-bold border border-white/20 shadow-md">
          <Sparkles className="w-3.5 h-3.5 text-[#EC1685]" />
          <span>Puerto Rico · Cuidado & Respaldo</span>
        </span>
      </div>

      {/* Bottom Floating Glassmorphism Trust Card */}
      <div className="absolute bottom-4 inset-x-4 z-20 bg-white/95 backdrop-blur-md p-4 sm:p-5 rounded-2xl shadow-xl border border-white/60">
        <div className="flex items-center gap-3 mb-2">
          <div className="w-9 h-9 rounded-xl bg-[#FFF1F7] text-[#D90070] flex items-center justify-center font-bold shrink-0">
            <Sparkles className="w-5 h-5 text-[#D90070]" />
          </div>
          <div>
            <span className="text-[11px] font-bold text-[#D90070] uppercase tracking-wider block">
              Tranquilidad en Puerto Rico
            </span>
            <h4 className="text-sm sm:text-base font-bold text-[#292929]">
              “Asegúrate. Piensa en modo futuro.”
            </h4>
          </div>
        </div>
        <p className="text-xs text-neutral-600 leading-relaxed font-normal">
          Pólizas que te benefician en vida y protegen a tu familia hoy, mañana y siempre con MV Insurance.
        </p>
      </div>
    </div>
  );
};

/**
 * Auto Insurance Full Cover Graphic
 * Uses real vehicle photography instead of cartoon vectors
 */
export const AutoFullCoverVisual: React.FC = () => {
  const [imgError, setImgError] = useState(false);
  const photoSrc = !imgError ? stockPhotos.products.auto.url : stockPhotos.autoHero.primary;

  return (
    <div className="relative w-full aspect-16/10 rounded-3xl overflow-hidden shadow-2xl border border-neutral-800 bg-neutral-900 flex flex-col justify-between group">
      {/* Real vehicle photograph */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={photoSrc}
          alt="Seguro de Auto Full Cover"
          onError={() => setImgError(true)}
          className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/70 to-black/40" />
      </div>

      {/* Top 5 Stars */}
      <div className="relative z-10 p-6 sm:p-8 flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
          ))}
        </div>
        <span className="text-xs font-bold uppercase tracking-wider text-[#EC1685] bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-[#EC1685]/40 shadow-sm">
          Full Cover 100% PR
        </span>
      </div>

      {/* Center typography */}
      <div className="relative z-10 px-6 sm:px-8 py-2 text-left max-w-lg">
        <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
          ¿Buscas <span className="text-[#EC1685]">seguro</span>
          <span className="font-serif-editorial italic block text-3xl sm:text-5xl text-white font-normal mt-0.5 tracking-normal">
            De auto?
          </span>
        </h3>
        <p className="text-xs sm:text-sm text-neutral-300 mt-2 max-w-sm leading-relaxed">
          Full Cover garantizado con Universal, Multinational, Seguros Múltiples, Guardian y MAPFRE.
        </p>
      </div>

      {/* Bottom carrier strip */}
      <div className="relative z-10 m-4 sm:m-6 bg-black/60 backdrop-blur-md rounded-xl p-3 border border-white/15 flex flex-wrap items-center justify-around gap-2 text-[11px] font-bold text-white">
        <span>Universal</span>
        <span>·</span>
        <span>Multinational</span>
        <span>·</span>
        <span>Seguros Múltiples</span>
        <span>·</span>
        <span>MAPFRE</span>
        <span>·</span>
        <span>Guardian</span>
      </div>
    </div>
  );
};

export const TeamConsultantsVisual = TeamHeroBanner;

