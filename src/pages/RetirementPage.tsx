import React from 'react';
import {
  Coins,
  ShieldCheck,
  TrendingUp,
  Smile,
  CheckCircle2,
  Phone,
  MessageCircle,
  Sparkles,
  ArrowRight,
  Heart,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';
import { HeroLifestyleVisual } from '../components/VisualShowcase';
import { PageHeaderBanner } from '../components/PageHeaderBanner';
import { stockPhotos } from '../data/stockPhotos';

interface RetirementPageProps {
  lang: Language;
  setCurrentPage: (page: PageId) => void;
  onOpenQuote: (insuranceId?: string) => void;
}

export const RetirementPage: React.FC<RetirementPageProps> = ({ lang, setCurrentPage, onOpenQuote }) => {
  const t = translations[lang];

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO WITH BACKGROUND IMAGE, OVERLAY AND BREADCRUMB */}
      <PageHeaderBanner
        bgImageUrl={stockPhotos.retirementHero.primary}
        breadcrumbItems={[{ label: lang === 'es' ? 'Retiro y Protección' : 'Retirement & Future', active: true }]}
        setCurrentPage={setCurrentPage}
        lang={lang}
        eyebrow={lang === 'es' ? 'RETIRO & PLANIFICACIÓN FINANCIERA' : 'RETIREMENT & FINANCIAL PLANNING'}
        title={
          lang === 'es' ? (
            <>
              Asegúrate. <span className="text-[#EC1685]">Piensa en modo</span>
              <span className="font-serif-editorial italic block text-3xl sm:text-5xl lg:text-6xl text-white font-normal mt-1">
                futuro.
              </span>
            </>
          ) : (
            <>
              Secure your life. <span className="text-[#EC1685]">Think in future</span>
              <span className="font-serif-editorial italic block text-3xl sm:text-5xl lg:text-6xl text-white font-normal mt-1">
                mode.
              </span>
            </>
          )
        }
        subtitle={t.retirementPage.heroSubtitle}
        ctaText={t.retirementPage.cta}
        onCtaClick={() => onOpenQuote('retirement')}
      />

      {/* 1.5. LIFESTYLE HIGHLIGHT */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            {/* Quote banner from flyer */}
            <div className="bg-gradient-to-r from-[#FFF1F7] to-white p-6 rounded-3xl border-l-4 border-[#D90070] shadow-sm">
              <p className="text-xl sm:text-2xl font-extrabold text-[#292929] italic leading-snug">
                “{t.retirementPage.quoteBanner}”
              </p>
              <span className="text-xs text-[#D90070] font-bold mt-2 block uppercase tracking-wider">
                {t.retirementPage.quoteAuthor}
              </span>
            </div>

            <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
              {lang === 'es'
                ? 'Con un plan de retiro bien estructurado, no dependes únicamente de la pensión o el Seguro Social. Garantizas un ingreso mensual y acumulación libre de impuestos para tus años dorados.'
                : 'With a well-structured retirement plan, you do not rely solely on pension or Social Security. You guarantee monthly income and tax-advantaged growth for your golden years.'}
            </p>

            <div className="flex flex-wrap gap-4 pt-2">
              <button
                onClick={() => onOpenQuote('retirement')}
                className="px-7 py-3.5 rounded-xl bg-[#D90070] hover:bg-[#EC1685] text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                {t.retirementPage.cta}
              </button>

              <a
                href="https://wa.me/17863565990?text=Hola%20Janet,%20quisiera%20orientación%20sobre%20un%20plan%20de%20retiro."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 text-emerald-800 font-bold text-sm border border-emerald-200 transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>{lang === 'es' ? 'Consultar por WhatsApp' : 'Chat on WhatsApp'}</span>
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <HeroLifestyleVisual />
          </div>
        </div>
      </section>

      {/* 2. TIMELINE VISUAL ROADMAP (Hoy -> Planifica -> Protege -> Crece -> Disfruta) */}
      <section className="bg-white py-16 border-y border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292929] tracking-tight">
              {t.retirementPage.timelineTitle}
            </h2>
            <p className="text-neutral-600 text-sm sm:text-base">
              {lang === 'es'
                ? 'Un plan estructurado de 5 pasos para blindar tus años dorados sin sobresaltos financieros.'
                : 'A structured 5-step roadmap to protect your golden years without market crashes.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {t.retirementPage.timelineSteps.map((step, idx) => (
              <div
                key={idx}
                className="relative bg-[#F5F5F7] p-6 rounded-2xl border border-neutral-200/90 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#D90070] text-white flex items-center justify-center font-black text-sm mb-4 shadow-sm">
                    {step.step}
                  </div>
                  <h3 className="text-lg font-bold text-[#292929] mb-2">{step.title}</h3>
                  <p className="text-xs text-neutral-600 leading-relaxed">{step.desc}</p>
                </div>
                {idx < 4 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-neutral-300 z-10">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. BENEFICIOS EN VIDA SECTION (Living benefits) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-white via-[#FFF1F7]/40 to-white rounded-3xl p-8 sm:p-12 border border-[#D90070]/25 shadow-md">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#D90070] bg-white px-3 py-1 rounded-full border border-[#D90070]/20">
              <Heart className="w-3.5 h-3.5 text-[#D90070]" />
              <span>{lang === 'es' ? 'Innovación en Pólizas' : 'Modern Policy Innovation'}</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#292929] tracking-tight">
              {t.retirementPage.livingBenefitsTitle}
            </h2>

            <p className="text-base text-neutral-600 leading-relaxed">
              {t.retirementPage.livingBenefitsDesc}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-4 bg-white rounded-xl border border-neutral-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D90070] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#292929]">
                    {lang === 'es' ? 'Enfermedades Críticas' : 'Critical Illness'}
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    {lang === 'es'
                      ? 'Adelantos de capital ante cáncer, infartos o fallas de órganos mayores.'
                      : 'Accelerated cash benefits for cancer, heart attacks, or major organ failure.'}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-white rounded-xl border border-neutral-200 flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-[#D90070] shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-[#292929]">
                    {lang === 'es' ? 'Incapacidad Crónica' : 'Chronic Disability'}
                  </h4>
                  <p className="text-xs text-neutral-600 mt-0.5">
                    {lang === 'es'
                      ? 'Fondos para cubrir cuidados diarios si no puedes realizar actividades básicas.'
                      : 'Funds to cover daily assisted care if unable to perform daily activities.'}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onOpenQuote('life')}
                className="px-6 py-3 rounded-xl bg-[#292929] hover:bg-black text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer"
              >
                {lang === 'es' ? 'Evaluar Póliza con Beneficios en Vida' : 'Evaluate Living Benefits Policy'}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
