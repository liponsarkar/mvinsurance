import React from 'react';
import {
  Shield,
  Heart,
  Car,
  Home,
  Plane,
  Coins,
  ArrowRight,
  Phone,
  MessageCircle,
  ShieldCheck,
  UserCheck,
  Layers,
  PhoneCall,
  CheckCircle2,
  HelpCircle,
  Sparkles,
  Star,
  Quote,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';
import { CarrierLogos } from '../components/CarrierLogos';
import {
  HeroLifestyleVisual,
  TeamConsultantsVisual,
  JanetLopezPhoto,
  TeamHeroBanner,
} from '../components/VisualShowcase';
import { AutoHeroBannerWithOverlay } from '../components/AutoHeroBannerWithOverlay';
import { HomeHeroMediaBanner } from '../components/HomeHeroMediaBanner';
import { stockPhotos } from '../data/stockPhotos';

interface HomePageProps {
  lang: Language;
  setCurrentPage: (page: PageId) => void;
  onOpenQuote: (insuranceId?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ lang, setCurrentPage, onOpenQuote }) => {
  const t = translations[lang];

  const navigateTo = (page: PageId) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const productIcons: Record<string, React.ReactNode> = {
    health: <Heart className="w-5 h-5 text-[#D90070]" />,
    cancer: <Shield className="w-5 h-5 text-[#EC1685]" />,
    life: <ShieldCheck className="w-5 h-5 text-[#D90070]" />,
    auto: <Car className="w-5 h-5 text-[#292929]" />,
    property: <Home className="w-5 h-5 text-[#292929]" />,
    travel: <Plane className="w-5 h-5 text-cyan-600" />,
    retirement: <Coins className="w-5 h-5 text-amber-600" />,
    disability: <Shield className="w-5 h-5 text-[#D90070]" />,
  };

  const getProductImage = (productId: string) => {
    const stock = (stockPhotos.products as any)[productId];
    return stock?.url || (stockPhotos.products as any).health.url;
  };

  const trustIcons: Record<string, React.ReactNode> = {
    'shield-check': <ShieldCheck className="w-5 h-5 text-[#D90070]" />,
    'user-check': <UserCheck className="w-5 h-5 text-[#D90070]" />,
    layers: <Layers className="w-5 h-5 text-[#D90070]" />,
    'phone-call': <PhoneCall className="w-5 h-5 text-[#D90070]" />,
  };

  return (
    <div className="space-y-20 sm:space-y-28">
      {/* 1. HERO SECTION WITH BACKGROUND VIDEO / SLIDESHOW & BRAND COLOR OVERLAY */}
      <HomeHeroMediaBanner
        lang={lang}
        onOpenQuote={onOpenQuote}
        setCurrentPage={setCurrentPage}
      />

      {/* 2. TRUST BAR */}
      <section className="bg-white py-12 border-y border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#D90070]">
              {t.trustBar.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.trustBar.items.map((item, idx) => (
              <div
                key={idx}
                className="flex items-start gap-4 p-4 rounded-2xl hover:bg-neutral-50 transition-colors"
              >
                <div className="w-11 h-11 rounded-xl bg-[#FFF1F7] flex items-center justify-center shrink-0 border border-[#D90070]/15">
                  {trustIcons[item.icon] || <Shield className="w-5 h-5 text-[#D90070]" />}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#292929] tracking-tight">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. PRODUCT CARDS ("Encuentra la protección que necesitas") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#292929] tracking-tight">
            {lang === 'es' ? (
              <>
                Encuentra el <span className="text-[#D90070]">seguro</span>
                <span className="font-serif-editorial italic font-normal text-[#1C1C1E] ml-2">
                  que necesitas
                </span>
              </>
            ) : (
              <>
                Find the right <span className="text-[#D90070]">insurance</span>
                <span className="font-serif-editorial italic font-normal text-[#1C1C1E] ml-2">
                  for what matters
                </span>
              </>
            )}
          </h2>
          <p className="text-neutral-600 text-base sm:text-lg">{t.products.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {t.products.items.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200 shadow-2xs hover:shadow-xl hover:border-[#D90070]/40 transition-all duration-300 flex flex-col justify-between overflow-hidden"
            >
              <div>
                {/* Photo header with overlay */}
                <div className="relative h-44 -mx-6 -mt-6 sm:-mx-7 sm:-mt-7 mb-5 overflow-hidden bg-neutral-900">
                  <img
                    src={getProductImage(product.id)}
                    alt={product.title}
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).src = '/images/auto-full-cover.jpg';
                    }}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md flex items-center justify-center shadow-md">
                      {productIcons[product.id] || <Shield className="w-5 h-5 text-[#D90070]" />}
                    </div>
                    {product.badge && (
                      <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#D90070] px-2.5 py-1 rounded-full shadow-md">
                        {product.badge}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-[#292929] group-hover:text-[#D90070] transition-colors">
                  {product.title}
                </h3>
                <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
                  {product.shortDesc}
                </p>

                {/* Key feature bullets */}
                <div className="mt-4 pt-4 border-t border-neutral-100 space-y-2">
                  {product.features.slice(0, 3).map((feat, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-neutral-600">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#D90070] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Actions */}
              <div className="pt-6 mt-6 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={() => navigateTo('insurance')}
                  className="text-xs font-bold text-neutral-700 hover:text-[#D90070] inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>{t.products.learnMore}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => onOpenQuote(product.id)}
                  className="text-xs font-bold text-white bg-[#292929] hover:bg-[#D90070] px-3.5 py-2 rounded-lg transition-colors cursor-pointer shadow-xs"
                >
                  {t.products.getQuote}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED AUTO FULL COVER BANNER WITH BACKGROUND IMAGE AND OVERLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AutoHeroBannerWithOverlay lang={lang} onOpenQuote={onOpenQuote} />
      </section>

      {/* TEAM HERO BANNER: Full corporate team background */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TeamHeroBanner onQuoteClick={() => onOpenQuote()} lang={lang} />
      </section>

      {/* 4. TEAM STORY BRIDGE */}
      <section className="bg-white py-16 sm:py-20 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <TeamConsultantsVisual />
            </div>

            <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
              <span className="text-xs font-bold uppercase tracking-widest text-[#D90070] bg-[#FFF1F7] px-3 py-1 rounded-full">
                {t.storyIntro.eyebrow}
              </span>

              <h2 className="text-3xl sm:text-5xl font-extrabold text-[#292929] tracking-tight leading-tight">
                {lang === 'es' ? (
                  <>
                    No vendemos <span className="text-[#D90070]">seguros.</span>
                    <span className="font-serif-editorial italic block text-3xl sm:text-5xl text-[#1C1C1E] font-normal mt-1">
                      Te ayudamos a proteger tu futuro.
                    </span>
                  </>
                ) : (
                  <>
                    We don’t just sell <span className="text-[#D90070]">policies.</span>
                    <span className="font-serif-editorial italic block text-3xl sm:text-5xl text-[#1C1C1E] font-normal mt-1">
                      We protect your future.
                    </span>
                  </>
                )}
              </h2>

              <p className="text-base text-neutral-700 leading-relaxed">{t.storyIntro.p1}</p>

              <p className="text-base text-neutral-600 leading-relaxed">{t.storyIntro.p2}</p>

              {/* Stats Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-neutral-100">
                {t.storyIntro.stats.map((st, i) => (
                  <div key={i} className="text-left">
                    <span className="text-2xl sm:text-3xl font-black text-[#D90070] font-display block">
                      {st.value}
                    </span>
                    <span className="text-xs text-neutral-500 font-semibold">{st.label}</span>
                  </div>
                ))}
              </div>

              <div>
                <button
                  onClick={() => navigateTo('about')}
                  className="inline-flex items-center gap-2 text-sm font-bold text-white bg-[#D90070] hover:bg-[#EC1685] px-6 py-3.5 rounded-xl transition-colors shadow-sm cursor-pointer"
                >
                  <span>{t.storyIntro.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. JANET LÓPEZ PERSONAL BRAND SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-[#FFF1F7] via-white to-pink-50/50 rounded-3xl p-8 sm:p-12 border border-[#D90070]/20 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Photo & Badges */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="flex flex-col items-center">
                <JanetLopezPhoto
                  size="lg"
                  variant="primary"
                  showBadge={true}
                  subtitle={lang === 'es' ? 'Fundadora & Agente Licenciada' : 'Founder & Licensed Agent'}
                />
              </div>

              <div className="mt-5">
                <h3 className="text-xl sm:text-2xl font-extrabold text-[#292929]">{t.janet.title}</h3>
                <p className="text-xs font-semibold text-[#D90070] uppercase tracking-wider">
                  {t.janet.subtitle}
                </p>
                <div className="mt-1.5 text-xs text-neutral-500">
                  <span>Licencia Autorizada de Seguros · Puerto Rico</span>
                </div>
              </div>
            </div>

            {/* Right Quotes & Bio */}
            <div className="lg:col-span-7 space-y-5">
              <div className="border-l-4 border-[#D90070] pl-4 sm:pl-6 space-y-2">
                <p className="text-2xl sm:text-3xl font-extrabold text-[#292929] leading-tight">
                  “Tener seguro <span className="text-[#D90070]">no es una opción.</span>
                  <span className="font-serif-editorial italic block text-2xl sm:text-4xl text-[#1C1C1E] font-normal mt-1">
                    Es una importancia.”
                  </span>
                </p>
                <p className="text-sm sm:text-base text-neutral-700 italic">{t.janet.quote2}</p>
                <p className="text-xs text-[#D90070] font-semibold">{t.janet.quote3}</p>
              </div>

              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {t.janet.bio}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href={`tel:${t.janet.phone}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#292929] hover:bg-black text-white font-bold text-sm transition-colors shadow-xs"
                >
                  <Phone className="w-4 h-4 text-[#D90070]" />
                  <span>
                    {t.janet.callBtn}: {t.janet.phone}
                  </span>
                </a>

                <a
                  href="https://wa.me/17863565990?text=Hola%20Janet,%20quisiera%20recibir%20orientación%20sobre%20un%20seguro."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm transition-colors shadow-xs"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.janet.whatsappBtn}</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. EDUCATIONAL SECTION ("¿Sabías que...?") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D90070]">
            {t.education.eyebrow}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292929] tracking-tight">
            {t.education.title}
          </h2>
          <p className="text-sm sm:text-base text-neutral-600">{t.education.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.education.cards.map((card, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-neutral-200/90 shadow-2xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              <div>
                {/* Real Photographic Card Header */}
                <div className="relative h-44 overflow-hidden bg-neutral-900">
                  <img
                    src={stockPhotos.education[i]?.url || stockPhotos.products.health.url}
                    alt={stockPhotos.education[i]?.alt || card.q}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between">
                    <span className="text-xs font-bold text-white bg-[#D90070] px-3 py-1 rounded-full shadow-md">
                      Consejo 0{i + 1}
                    </span>
                    <span className="text-[11px] font-semibold text-white/90 bg-black/50 backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/20">
                      Puerto Rico
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-base sm:text-lg font-bold text-[#292929] leading-snug group-hover:text-[#D90070] transition-colors">
                    {card.q}
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-3 leading-relaxed">
                    {card.ans}
                  </p>
                </div>
              </div>
              <div className="px-6 pb-6 pt-2 border-t border-neutral-100 flex items-center justify-between">
                <button
                  onClick={() => onOpenQuote()}
                  className="text-xs font-bold text-[#D90070] hover:underline inline-flex items-center gap-1 cursor-pointer"
                >
                  <span>{lang === 'es' ? 'Consultar con Janet' : 'Ask Janet'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                <span className="text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                  MV Insurance
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <button
            onClick={() => navigateTo('insurance')}
            className="inline-flex items-center gap-2 text-sm font-bold text-[#292929] hover:text-[#D90070] transition-colors cursor-pointer"
          >
            <span>{t.education.cta}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 6.5. REAL CLIENT TESTIMONIALS (REAL STOCK PORTRAITS & REVIEWS) */}
      <section className="bg-gradient-to-b from-neutral-50 to-white py-16 sm:py-20 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#D90070] bg-[#FFF1F7] px-3.5 py-1 rounded-full border border-[#D90070]/20">
              {lang === 'es' ? 'TESTIMONIOS REALES DE CLIENTES' : 'REAL CLIENT STORIES'}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292929] tracking-tight">
              {lang === 'es' ? (
                <>
                  Familias y comerciantes que <span className="text-[#D90070]">confían</span>
                  <span className="font-serif-editorial italic block text-3xl sm:text-4xl text-[#1C1C1E] font-normal mt-1">
                    en nuestro respaldo
                  </span>
                </>
              ) : (
                <>
                  Families and business owners who <span className="text-[#D90070]">trust</span>
                  <span className="font-serif-editorial italic block text-3xl sm:text-4xl text-[#1C1C1E] font-normal mt-1">
                    our guidance
                  </span>
                </>
              )}
            </h2>
            <p className="text-sm text-neutral-600">
              {lang === 'es'
                ? 'Opiniones verificadas de asegurados en Puerto Rico asesorados por Janet López y MV Insurance.'
                : 'Verified client reviews from Puerto Rico guided by Janet López and MV Insurance.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stockPhotos.testimonials.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-7 border border-neutral-200/90 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars & Quote Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400" />
                      ))}
                    </div>
                    <Quote className="w-6 h-6 text-[#D90070]/30" />
                  </div>

                  <p className="text-sm text-neutral-700 leading-relaxed italic mb-6">
                    “{review.quote}”
                  </p>
                </div>

                {/* Real Person Profile */}
                <div className="flex items-center gap-3.5 pt-4 border-t border-neutral-100">
                  <img
                    src={review.avatarUrl}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover border-2 border-white shadow-sm ring-2 ring-[#D90070]/30"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#292929]">{review.name}</h4>
                    <div className="flex items-center gap-2 text-xs text-neutral-500">
                      <span>{review.location}</span>
                      <span>·</span>
                      <span className="text-[#D90070] font-semibold">{review.insurance}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. CARRIER LOGOS SECTION */}
      <section className="bg-white py-12 border-b border-neutral-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CarrierLogos title={t.carriers.title} subtitle={t.carriers.subtitle} />
        </div>
      </section>

      {/* 8. FINAL CONVERSION CTA WITH REAL BACKGROUND PHOTOGRAPHY & OVERLAY */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        <div className="relative rounded-3xl overflow-hidden text-white p-8 sm:p-14 border border-neutral-800 shadow-2xl bg-neutral-900 group">
          {/* Real Photo Background */}
          <div className="absolute inset-0 w-full h-full">
            <img
              src={stockPhotos.ctaBackground.primary}
              alt="Protección Patrimonial Puerto Rico"
              className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-102"
            />
          </div>

          {/* Deep dark gradient overlay scrim for contrast */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/85 to-black/60 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 z-10" />

          <div className="relative z-20 max-w-2xl space-y-6">
            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight text-balance">
              {lang === 'es' ? (
                <>
                  ¿Listo para <span className="text-[#EC1685]">proteger</span>
                  <span className="font-serif-editorial italic block text-4xl sm:text-6xl text-white font-normal mt-1">
                    lo que más importa?
                  </span>
                </>
              ) : (
                <>
                  Ready to <span className="text-[#EC1685]">protect</span>
                  <span className="font-serif-editorial italic block text-4xl sm:text-6xl text-white font-normal mt-1">
                    what matters most?
                  </span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-neutral-200 leading-relaxed font-normal">
              {t.finalCta.desc}
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onOpenQuote()}
                className="px-7 py-4 rounded-xl bg-[#D90070] hover:bg-[#EC1685] text-white font-bold text-sm sm:text-base transition-all shadow-lg shadow-[#D90070]/30 cursor-pointer active:scale-98"
              >
                {t.finalCta.btnQuote}
              </button>

              <a
                href="https://wa.me/17863565990?text=Hola%20Janet,%20quisiera%20recibir%20orientación%20sobre%20un%20seguro."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm sm:text-base transition-colors shadow-sm"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{t.finalCta.btnWhatsapp}</span>
              </a>
            </div>

            <div className="pt-2 text-xs text-neutral-300">
              <span>{t.finalCta.phoneText} </span>
              <a href="tel:7863565990" className="text-white font-bold hover:underline">
                786-356-5990
              </a>
              <span> / </span>
              <a href="tel:7877101313" className="text-white font-bold hover:underline">
                787-710-1313
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
