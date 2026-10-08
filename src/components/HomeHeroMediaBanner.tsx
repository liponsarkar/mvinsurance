import React, { useState, useRef } from 'react';
import {
  Sparkles,
  ShieldCheck,
  Star,
  Phone,
  MessageCircle,
  Play,
  Pause,
  Volume2,
  VolumeX,
  CheckCircle2,
  Car,
  Heart,
  Shield,
  Coins,
  ArrowRight,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';
import { JanetLopezPhoto } from './VisualShowcase';

interface HomeHeroMediaBannerProps {
  lang: Language;
  onOpenQuote: (insuranceId?: string) => void;
  setCurrentPage: (page: PageId) => void;
}

export const HomeHeroMediaBanner: React.FC<HomeHeroMediaBannerProps> = ({
  lang,
  onOpenQuote,
  setCurrentPage,
}) => {
  const t = translations[lang];

  // Video State
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Moving car video sources
  const carVideoLocal = '/videos/hero-car.mp4';
  const carVideoRemote = 'https://cdn.coverr.co/videos/coverr-red-ford-gt-car-7551/720p.mp4';
  const carPoster = 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1920&q=80';

  // Toggle Video Play / Pause
  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  // Toggle Video Mute / Unmute
  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  // Interactive Quick Coverage Selector for Right Column
  const [selectedQuickProduct, setSelectedQuickProduct] = useState('auto');
  const quickProducts = [
    {
      id: 'auto',
      title: lang === 'es' ? 'Auto Full Cover' : 'Full Cover Auto',
      tag: lang === 'es' ? '100% Puerto Rico' : '100% Puerto Rico',
      icon: <Car className="w-4 h-4 text-[#D90070]" />,
      desc:
        lang === 'es'
          ? 'Choques, robo, huracán y cristales sin deducible con grúa 24/7.'
          : 'Collision, theft, hurricane and zero-deductible glass with 24/7 towing.',
    },
    {
      id: 'life',
      title: lang === 'es' ? 'Vida en Vida' : 'Living Life Benefit',
      tag: lang === 'es' ? 'Protección Familiar' : 'Family Protection',
      icon: <Heart className="w-4 h-4 text-[#D90070]" />,
      desc:
        lang === 'es'
          ? 'Cobro en vida ante enfermedades graves o incapacidad certificada.'
          : 'Collect while living upon critical illness or certified disability.',
    },
    {
      id: 'cancer',
      title: lang === 'es' ? 'Póliza de Cáncer' : 'Cancer Protection',
      tag: lang === 'es' ? '40+ Beneficios' : '40+ Benefits',
      icon: <Shield className="w-4 h-4 text-[#D90070]" />,
      desc:
        lang === 'es'
          ? 'Apoyo económico directo desde el primer día de diagnóstico.'
          : 'Direct financial cash support from day one of medical diagnosis.',
    },
    {
      id: 'retirement',
      title: lang === 'es' ? 'Retiro Modo Futuro' : 'Future-Mode Pension',
      tag: lang === 'es' ? 'Cero Pérdida Bursátil' : 'Zero Market Loss',
      icon: <Coins className="w-4 h-4 text-amber-400" />,
      desc:
        lang === 'es'
          ? 'Crecimiento de interés compuesto con garantía de capital principal.'
          : 'Compound interest growth with 100% principal capital guarantee.',
    },
  ];

  return (
    <section className="relative -mx-4 sm:-mx-6 lg:-mx-8 -mt-6 sm:-mt-10 overflow-hidden bg-neutral-950 text-white rounded-b-3xl sm:rounded-b-4xl shadow-2xl border-b border-neutral-800">
      {/* =========================================================================
          BACKGROUND LAYER: MOVING CAR FREE STOCK VIDEO
      ========================================================================= */}
      <div className="absolute inset-0 w-full h-full overflow-hidden select-none pointer-events-none">
        <video
          ref={videoRef}
          className="w-full h-full object-cover object-center scale-105"
          autoPlay
          loop
          muted={isMuted}
          playsInline
          poster={carPoster}
          onError={() => setVideoError(true)}
        >
          <source src={carVideoLocal} type="video/mp4" />
          <source src={carVideoRemote} type="video/mp4" />
        </video>

        {/* Fallback image if video fails to load */}
        {videoError && (
          <img
            src={carPoster}
            alt="Moving car background"
            className="w-full h-full object-cover object-center"
          />
        )}
      </div>

      {/* =========================================================================
          LIGHT & COLOR-MATCHED OVERLAY (হালকা ওভারলে কালার সাদৃশ্য করে)
          Subtle gradient allowing the moving car to be clearly seen while
          giving optimal contrast for readable text.
      ========================================================================= */}
      {/* Light horizontal gradient: dark indigo on left for text readability, blending to soft brand magenta tint */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to right, rgba(15, 23, 42, 0.78) 0%, rgba(15, 23, 42, 0.58) 42%, rgba(217, 0, 112, 0.22) 78%, rgba(15, 23, 42, 0.45) 100%)',
        }}
      />

      {/* Gentle vertical vignette */}
      <div
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background:
            'linear-gradient(to bottom, rgba(10, 15, 28, 0.55) 0%, rgba(10, 15, 28, 0.20) 45%, rgba(10, 15, 28, 0.72) 100%)',
        }}
      />

      {/* Soft brand glow at the corner (Janet López Signature Magenta #D90070) */}
      <div
        className="absolute -top-24 -right-24 w-80 h-80 rounded-full pointer-events-none z-10 blur-3xl opacity-30"
        style={{
          background: 'radial-gradient(circle, #D90070 0%, transparent 70%)',
        }}
      />

      {/* =========================================================================
          HERO MAIN CONTENT
      ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 pb-14 sm:pb-16 lg:pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading, Pitch, Value Props, CTAs */}
          <div className="lg:col-span-7 space-y-6 sm:space-y-7">
            {/* Clean Eyebrow Badge */}
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white bg-black/40 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#D90070]/40 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#FF2D92]" />
              <span>{t.hero.eyebrow}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse ml-1" />
              <span className="text-[10px] text-emerald-300 font-semibold uppercase tracking-wide">
                {lang === 'es' ? 'En Vivo PR' : 'Live PR'}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.08] text-balance drop-shadow-md">
              {lang === 'es' ? (
                <>
                  ¿Buscas <span className="text-[#FF2D92] drop-shadow-sm">seguro</span>
                  <span className="font-serif-editorial italic block text-4xl sm:text-6xl lg:text-7xl text-white font-normal mt-1 tracking-normal">
                    que te proteja en verdad?
                  </span>
                </>
              ) : (
                <>
                  Looking for <span className="text-[#FF2D92] drop-shadow-sm">insurance</span>
                  <span className="font-serif-editorial italic block text-4xl sm:text-6xl lg:text-7xl text-white font-normal mt-1 tracking-normal">
                    that truly protects you?
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle with High Readability over Video */}
            <p className="text-base sm:text-lg lg:text-xl text-neutral-100 leading-relaxed max-w-2xl font-normal drop-shadow-sm">
              {t.hero.subtitle}
            </p>

            {/* Quick Benefits Bullet Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 max-w-xl">
              {[
                lang === 'es'
                  ? 'Cotización inmediata y sin compromiso'
                  : 'Free instant quote with zero obligation',
                lang === 'es'
                  ? 'Representación de 7+ aseguradoras líderes'
                  : 'Representing 7+ top Puerto Rico insurers',
                lang === 'es'
                  ? 'Pólizas con beneficios en vida directos'
                  : 'Policies with direct living benefits',
                lang === 'es'
                  ? 'Atención humana directa con Janet López'
                  : 'Direct personal care with Janet López',
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-100 drop-shadow-sm">
                  <CheckCircle2 className="w-4 h-4 text-[#FF2D92] shrink-0" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3.5 pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="px-7 py-4 rounded-xl bg-[#D90070] hover:bg-[#EC1685] text-white font-extrabold text-base transition-all shadow-lg shadow-[#D90070]/30 hover:shadow-[#EC1685]/40 hover:scale-102 cursor-pointer active:scale-98 flex items-center gap-2"
              >
                <span>{t.hero.quoteCta}</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href="tel:7863565990"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-black/40 hover:bg-black/60 text-white font-bold text-base border border-white/20 backdrop-blur-md transition-all shadow-md cursor-pointer"
              >
                <Phone className="w-4 h-4 text-[#FF2D92]" />
                <span>{t.hero.talkJanetCta}</span>
              </a>

              <a
                href="https://wa.me/17863565990?text=Hola%20Janet,%20quisiera%20recibir%20orientación%20sobre%20un%20seguro."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-4 rounded-xl bg-emerald-600/90 hover:bg-emerald-600 text-white font-bold text-sm border border-emerald-400/40 backdrop-blur-md transition-all shadow-md cursor-pointer"
                title="WhatsApp directo con Janet López"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>WhatsApp</span>
              </a>
            </div>

            {/* Trust line and ratings */}
            <div className="flex flex-wrap items-center gap-4 pt-1 text-xs text-neutral-200 font-medium drop-shadow-sm">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                ))}
                <span className="text-white font-bold ml-1">4.9 / 5</span>
              </div>
              <span className="text-neutral-400">·</span>
              <span>{t.hero.trustPills}</span>
            </div>

            {/* Janet López Floating Contact Card (Frosted Glassmorphic) */}
            <div className="pt-1">
              <div className="inline-flex items-center gap-4 p-3 sm:p-3.5 bg-black/50 backdrop-blur-xl rounded-2xl border border-white/20 shadow-xl hover:border-[#D90070]/50 transition-all">
                <JanetLopezPhoto size="sm" showBadge={false} className="shrink-0" />
                <div className="text-left">
                  <div className="flex items-center gap-2">
                    <span className="font-bold text-white text-sm">
                      {t.hero.agentCard.name}
                    </span>
                    <span className="text-[10px] bg-[#D90070]/25 text-[#FF65A8] border border-[#D90070]/40 font-bold px-2 py-0.5 rounded-full">
                      {lang === 'es' ? 'Agente Licenciada OCS' : 'Licensed Agent PR'}
                    </span>
                  </div>
                  <a
                    href="tel:7863565990"
                    className="text-xs text-neutral-200 hover:text-[#FF65A8] font-semibold flex items-center gap-1.5 mt-0.5 transition-colors"
                  >
                    <Phone className="w-3 h-3 text-[#EC1685]" />
                    <span>{t.hero.agentCard.phone}</span>
                    <span className="text-neutral-400">·</span>
                    <span className="text-neutral-300 font-normal">
                      {t.hero.agentCard.directHelp}
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Quick Coverage Showcase Card */}
          <div className="lg:col-span-5">
            <div className="bg-neutral-900/85 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/20 shadow-2xl relative overflow-hidden group">
              {/* Card top badge */}
              <div className="flex items-center justify-between gap-3 mb-5">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-[#D90070]/20 border border-[#D90070]/40 flex items-center justify-center text-[#EC1685]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold text-[#FF65A8] uppercase tracking-wider block">
                      {lang === 'es' ? 'Cotizador Rápido PR' : 'Fast PR Quote'}
                    </span>
                    <h3 className="text-sm font-bold text-white">
                      {lang === 'es' ? 'Elige tu Protección' : 'Choose Your Coverage'}
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                  {lang === 'es' ? 'Asesoría Gratis' : 'Free Advice'}
                </span>
              </div>

              {/* Product Selector Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {quickProducts.map((p) => {
                  const isSelected = selectedQuickProduct === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setSelectedQuickProduct(p.id)}
                      className={`p-3 rounded-2xl text-left transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-[#D90070]/25 border-[#D90070] text-white shadow-md'
                          : 'bg-black/40 border-white/10 hover:border-white/25 text-neutral-300'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="p-1.5 rounded-lg bg-black/40">{p.icon}</span>
                        {isSelected && <span className="w-2 h-2 rounded-full bg-[#EC1685]" />}
                      </div>
                      <div className="text-xs font-bold text-white truncate">{p.title}</div>
                      <div className="text-[10px] text-neutral-400 truncate">{p.tag}</div>
                    </button>
                  );
                })}
              </div>

              {/* Selected Product Detail */}
              {(() => {
                const current = quickProducts.find((p) => p.id === selectedQuickProduct) || quickProducts[0];
                return (
                  <div className="p-4 rounded-2xl bg-black/50 border border-white/10 mb-6 space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">{current.title}</span>
                      <span className="text-[10px] text-[#FF65A8] font-bold uppercase tracking-wide">
                        {current.tag}
                      </span>
                    </div>
                    <p className="text-xs text-neutral-300 leading-relaxed font-normal">
                      {current.desc}
                    </p>
                  </div>
                );
              })()}

              {/* Direct Quote CTA */}
              <button
                onClick={() => onOpenQuote(selectedQuickProduct)}
                className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#D90070] to-[#EC1685] hover:opacity-95 text-white font-extrabold text-sm transition-all shadow-md shadow-[#D90070]/30 cursor-pointer flex items-center justify-center gap-2 active:scale-98"
              >
                <span>
                  {lang === 'es' ? 'Cotizar Este Seguro Ahora' : 'Quote This Policy Now'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>

              {/* Bottom Card Footer */}
              <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-neutral-400">
                <span>📍 Las Piedras & Todo Puerto Rico</span>
                <button
                  onClick={() => setCurrentPage('contact')}
                  className="text-[#FF65A8] hover:underline font-semibold cursor-pointer"
                >
                  {lang === 'es' ? 'Ver Oficina →' : 'View Office →'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* =========================================================================
          DISCREET VIDEO PLAYBACK CONTROLS (Bottom-right, clean and unobtrusive)
      ========================================================================= */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 z-30 flex items-center gap-1.5 bg-black/40 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-white/10 opacity-70 hover:opacity-100 transition-opacity">
        <button
          onClick={togglePlay}
          className="w-6 h-6 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
          title={isPlaying ? 'Pause video' : 'Play video'}
          aria-label={isPlaying ? 'Pause video' : 'Play video'}
        >
          {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
        </button>
        <button
          onClick={toggleMute}
          className="w-6 h-6 rounded-full flex items-center justify-center text-white/80 hover:text-white transition-colors cursor-pointer"
          title={isMuted ? 'Unmute video' : 'Mute video'}
          aria-label={isMuted ? 'Unmute video' : 'Mute video'}
        >
          {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
        </button>
      </div>
    </section>
  );
};
