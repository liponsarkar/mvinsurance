import React from 'react';
import { Compass, ShieldCheck, HeartHandshake, Award, Users, CheckCircle2, ArrowRight, Phone, MessageCircle } from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';
import { TeamConsultantsVisual, TeamHeroBanner, JanetLopezPhoto } from '../components/VisualShowcase';
import { CarrierLogos } from '../components/CarrierLogos';
import { PageHeaderBanner } from '../components/PageHeaderBanner';
import { stockPhotos } from '../data/stockPhotos';

interface AboutPageProps {
  lang: Language;
  setCurrentPage: (page: PageId) => void;
  onOpenQuote: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ lang, setCurrentPage, onOpenQuote }) => {
  const t = translations[lang];

  const pillarIcons = [
    <Compass className="w-6 h-6 text-[#D90070]" />,
    <ShieldCheck className="w-6 h-6 text-[#D90070]" />,
    <HeartHandshake className="w-6 h-6 text-[#D90070]" />,
  ];

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO WITH BACKGROUND IMAGE, OVERLAY AND BREADCRUMB */}
      <PageHeaderBanner
        bgImageUrl={stockPhotos.teamHero.primary}
        breadcrumbItems={[{ label: lang === 'es' ? 'Nosotros' : 'About Us', active: true }]}
        setCurrentPage={setCurrentPage}
        lang={lang}
        eyebrow={lang === 'es' ? 'SOBRE MV INSURANCE' : 'ABOUT MV INSURANCE'}
        title={
          lang === 'es' ? (
            <>
              Más que <span className="text-[#EC1685]">seguros.</span>
              <span className="font-serif-editorial italic block text-3xl sm:text-5xl lg:text-6xl text-white font-normal mt-1">
                Una relación de confianza.
              </span>
            </>
          ) : (
            <>
              More than <span className="text-[#EC1685]">insurance.</span>
              <span className="font-serif-editorial italic block text-3xl sm:text-5xl lg:text-6xl text-white font-normal mt-1">
                A relationship of trust.
              </span>
            </>
          )
        }
        subtitle={t.aboutPage.heroSubtitle}
        ctaText={lang === 'es' ? 'Habla con Janet' : 'Speak with Janet'}
        onCtaClick={onOpenQuote}
      />

      {/* 1.5. FOUNDER PROFILE SPOTLIGHT: JANET LÓPEZ (DUAL PHOTOS) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-neutral-200 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Photo of Janet */}
            <div className="lg:col-span-5 flex flex-col items-center text-center">
              <div className="flex flex-col items-center">
                <JanetLopezPhoto
                  size="lg"
                  variant="primary"
                  showBadge={true}
                  subtitle={lang === 'es' ? 'Fundadora & Agente' : 'Founder & Agent'}
                />
              </div>

              <div className="mt-4">
                <h3 className="text-2xl font-extrabold text-[#292929]">Janet López</h3>
                <p className="text-xs font-bold text-[#D90070] uppercase tracking-wider mt-0.5">
                  {lang === 'es' ? 'Fundadora & Agente Licenciada' : 'Founder & Licensed Agent'}
                </p>
                <div className="mt-1 text-xs text-neutral-500">
                  <span>Las Piedras, Puerto Rico · 8+ Años de Experiencia</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 bg-[#FFF1F7] text-[#D90070] px-3 py-1 rounded-full text-xs font-bold">
                <ShieldCheck className="w-4 h-4" />
                <span>{lang === 'es' ? 'Líder & Agente Autorizada' : 'Founder & Licensed Agent'}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-[#292929]">
                {lang === 'es' ? 'Compromiso genuino con tu tranquilidad' : 'Genuine commitment to your peace of mind'}
              </h2>
              <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                {t.janet.bio}
              </p>
              <div className="p-4 bg-[#F5F5F7] rounded-2xl border-l-4 border-[#D90070] text-sm text-[#292929] font-medium italic">
                {t.janet.quote2}
              </div>
              <div className="pt-2 flex flex-wrap gap-3">
                <a
                  href="tel:7863565990"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#292929] hover:bg-black text-white text-xs sm:text-sm font-bold transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#D90070]" />
                  <span>786-356-5990</span>
                </a>
                <a
                  href="https://wa.me/17863565990?text=Hola%20Janet,%20quisiera%20conversar%20sobre%20un%20seguro."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs sm:text-sm font-bold transition-colors"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Directo</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Photo Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <TeamHeroBanner onQuoteClick={onOpenQuote} lang={lang} />
      </section>

      {/* 2. TIMELINE HISTORIA */}
      <section className="bg-white py-16 border-y border-neutral-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-2">
            <h2 className="text-3xl font-extrabold text-[#292929] tracking-tight">
              {t.aboutPage.storyTitle}
            </h2>
            <p className="text-sm sm:text-base text-neutral-600">
              {t.aboutPage.storyDesc}
            </p>
          </div>

          <div className="space-y-8 relative before:absolute before:inset-0 before:left-7 sm:before:left-1/2 before:w-0.5 before:bg-neutral-200">
            {t.aboutPage.timeline.map((step, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center ${
                    isEven ? 'sm:flex-row-reverse' : ''
                  }`}
                >
                  {/* Step node */}
                  <div className="absolute left-7 sm:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-[#D90070] text-white flex items-center justify-center font-bold text-xs shadow-md border-4 border-white z-10">
                    {step.num}
                  </div>

                  {/* Content card */}
                  <div
                    className={`ml-16 sm:ml-0 sm:w-1/2 ${
                      isEven ? 'sm:pl-10 text-left' : 'sm:pr-10 text-left sm:text-right'
                    }`}
                  >
                    <div className="bg-[#F5F5F7] p-5 sm:p-6 rounded-2xl border border-neutral-200/80 shadow-2xs">
                      <span className="text-[11px] font-bold text-[#D90070] uppercase tracking-wider block mb-1">
                        Fase {step.num}
                      </span>
                      <h3 className="text-lg font-bold text-[#292929]">{step.title}</h3>
                      <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. NUESTRA MISIÓN Y 3 PILARES */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D90070]">
            {lang === 'es' ? 'NUESTRO PROPÓSITO' : 'OUR PURPOSE'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292929] tracking-tight">
            {t.aboutPage.missionTitle}
          </h2>
          <blockquote className="text-lg sm:text-xl font-semibold text-[#D90070] italic border-y border-[#D90070]/20 py-4 max-w-2xl mx-auto">
            {t.aboutPage.missionStatement}
          </blockquote>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {t.aboutPage.pillars.map((pillar, idx) => (
            <div
              key={idx}
              className="bg-white p-7 rounded-2xl border border-neutral-200/90 shadow-2xs hover:border-[#D90070]/40 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-[#FFF1F7] flex items-center justify-center mb-5 border border-[#D90070]/15">
                {pillarIcons[idx]}
              </div>
              <h3 className="text-xl font-bold text-[#292929] mb-2">{pillar.title}</h3>
              <p className="text-sm text-neutral-600 leading-relaxed">{pillar.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CARRIER LOGOS */}
      <section className="bg-white py-12 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <CarrierLogos
            title={lang === 'es' ? 'Nuestras Alianzas Estratégicas' : 'Strategic Alliances'}
            subtitle={
              lang === 'es'
                ? 'Representamos con orgullo a las principales aseguradoras de Puerto Rico'
                : 'Proudly representing Puerto Rico’s most trusted insurance institutions'
            }
          />
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <h3 className="text-2xl sm:text-3xl font-extrabold text-[#292929]">
          {lang === 'es'
            ? '¿Quieres recibir una orientación personalizada?'
            : 'Looking for personalized insurance guidance?'}
        </h3>
        <p className="text-neutral-600 text-sm sm:text-base max-w-xl mx-auto">
          {lang === 'es'
            ? 'Conversemos sin costo sobre tus metas y te ayudaremos a comparar las mejores alternativas para ti o tu empresa.'
            : 'Let’s discuss your goals at no cost and compare the finest alternatives for you or your business.'}
        </p>
        <div className="pt-2 flex flex-wrap justify-center gap-4">
          <button
            onClick={onOpenQuote}
            className="px-6 py-3.5 rounded-xl bg-[#D90070] hover:bg-[#EC1685] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
          >
            {t.hero.quoteCta}
          </button>
          <button
            onClick={() => {
              setCurrentPage('contact');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="px-6 py-3.5 rounded-xl bg-white hover:bg-neutral-50 text-neutral-800 font-bold text-sm border border-neutral-300 transition-colors"
          >
            {lang === 'es' ? 'Ver Datos de Contacto' : 'Contact Details'}
          </button>
        </div>
      </section>
    </div>
  );
};
