import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  ChevronDown,
  ShieldCheck,
  Building,
} from 'lucide-react';
import { Language, PageId } from '../types';
import { translations } from '../data/translations';
import { PageHeaderBanner } from '../components/PageHeaderBanner';
import { JanetLopezPhoto } from '../components/VisualShowcase';
import { stockPhotos } from '../data/stockPhotos';

interface ContactPageProps {
  lang: Language;
  setCurrentPage: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ lang, setCurrentPage }) => {
  const t = translations[lang];

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    insuranceType: 'auto',
    preferredContact: 'whatsapp',
    notes: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 600);
  };

  const getWhatsAppUrl = () => {
    const text = encodeURIComponent(
      `Hola Janet, me comunico a través del sitio web de MV Insurance:\n\n• Nombre: ${formData.firstName} ${formData.lastName}\n• Teléfono: ${formData.phone}\n• Seguro de interés: ${formData.insuranceType}\n• Contacto preferido: ${formData.preferredContact}\n• Mensaje: ${formData.notes || 'Quisiera recibir una cotización'}`
    );
    return `https://wa.me/17863565990?text=${text}`;
  };

  return (
    <div className="space-y-16 pb-16">
      {/* 1. HERO WITH BACKGROUND IMAGE, OVERLAY AND BREADCRUMB */}
      <PageHeaderBanner
        bgImageUrl={stockPhotos.lifestyleSunset.primary}
        breadcrumbItems={[{ label: lang === 'es' ? 'Contacto' : 'Get a Quote', active: true }]}
        setCurrentPage={setCurrentPage}
        lang={lang}
        eyebrow={lang === 'es' ? 'COMUNICACIÓN DIRECTA' : 'DIRECT COMMUNICATION'}
        title={
          lang === 'es' ? (
            <>
              Estamos <span className="text-[#EC1685]">aquí</span>
              <span className="font-serif-editorial italic block text-3xl sm:text-5xl lg:text-6xl text-white font-normal mt-1">
                para orientarte.
              </span>
            </>
          ) : (
            <>
              We are <span className="text-[#EC1685]">here</span>
              <span className="font-serif-editorial italic block text-3xl sm:text-5xl lg:text-6xl text-white font-normal mt-1">
                to guide you.
              </span>
            </>
          )
        }
        subtitle={t.contactPage.heroSubtitle}
      />

      {/* 2. MAIN FORM & DIRECT CONTACT CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Form Column (Left) */}
          <div className="lg:col-span-7 bg-white p-7 sm:p-10 rounded-3xl border border-neutral-200 shadow-sm">
            <h2 className="text-2xl font-bold text-[#292929] mb-1">
              {t.contactPage.form.title}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mb-6">
              {lang === 'es'
                ? 'Completa el formulario y te enviaremos una comparativa sin costo.'
                : 'Fill out the form and we will send a no-cost comparison.'}
            </p>

            {submitted ? (
              <div className="p-8 text-center space-y-4 bg-emerald-50/50 rounded-2xl border border-emerald-200">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-[#292929]">
                  {t.contactPage.form.successTitle}
                </h3>
                <p className="text-sm text-neutral-600 max-w-md mx-auto">
                  {t.contactPage.form.successMsg}
                </p>
                <div className="pt-2">
                  <a
                    href={getWhatsAppUrl()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow-sm transition-colors"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>{t.contactPage.form.continueWhatsapp}</span>
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      {t.contactPage.form.firstName}
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      placeholder="Juan"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#D90070]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      {t.contactPage.form.lastName}
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      placeholder="Rivera"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#D90070]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      {t.contactPage.form.phone}
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="787-123-4567"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#D90070]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                      {t.contactPage.form.email}
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="correo@ejemplo.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#D90070]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    {t.contactPage.form.insuranceType}
                  </label>
                  <select
                    value={formData.insuranceType}
                    onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#D90070] bg-white"
                  >
                    <option value="auto">
                      {lang === 'es' ? 'Seguro de Auto / Full Cover' : 'Auto Insurance / Full Cover'}
                    </option>
                    <option value="health">
                      {lang === 'es' ? 'Plan Médico' : 'Health Insurance'}
                    </option>
                    <option value="cancer">
                      {lang === 'es' ? 'Seguro de Cáncer (40+ Beneficios)' : 'Cancer Insurance'}
                    </option>
                    <option value="life">
                      {lang === 'es' ? 'Seguro de Vida (Beneficios en Vida)' : 'Life Insurance'}
                    </option>
                    <option value="property">
                      {lang === 'es' ? 'Seguro de Propiedad y Negocio' : 'Property & Commercial'}
                    </option>
                    <option value="commercial">
                      {lang === 'es' ? 'Responsabilidad Pública Comercial (CGL)' : 'Commercial General Liability'}
                    </option>
                    <option value="retirement">
                      {lang === 'es' ? 'Plan de Retiro y Anualidad' : 'Retirement Plan'}
                    </option>
                    <option value="travel">
                      {lang === 'es' ? 'Seguro de Viaje' : 'Travel Insurance'}
                    </option>
                    <option value="disability">
                      {lang === 'es' ? 'Incapacidad y Fianzas' : 'Disability & Surety'}
                    </option>
                    <option value="other">{lang === 'es' ? 'Otro Seguro' : 'Other'}</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    {t.contactPage.form.preferredContact}
                  </label>
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { id: 'whatsapp', label: t.contactPage.form.contactWhatsApp },
                      { id: 'phone', label: t.contactPage.form.contactPhone },
                      { id: 'email', label: t.contactPage.form.contactEmail },
                    ].map((opt) => (
                      <label
                        key={opt.id}
                        className={`flex items-center justify-center p-2.5 text-xs font-semibold rounded-xl border cursor-pointer transition-colors ${
                          formData.preferredContact === opt.id
                            ? 'bg-[#FFF1F7] text-[#D90070] border-[#D90070]'
                            : 'bg-neutral-50 text-neutral-700 border-neutral-200'
                        }`}
                      >
                        <input
                          type="radio"
                          name="preferredContact"
                          value={opt.id}
                          checked={formData.preferredContact === opt.id}
                          onChange={() =>
                            setFormData({ ...formData, preferredContact: opt.id as any })
                          }
                          className="sr-only"
                        />
                        <span>{opt.label}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1.5">
                    {t.contactPage.form.notes}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder={t.contactPage.form.notesPlaceholder}
                    className="w-full px-3.5 py-2.5 text-sm rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#D90070] resize-none"
                  />
                </div>

                <div className="flex items-start gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="contact-consent"
                    required
                    checked={formData.consent}
                    onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                    className="mt-1 rounded text-[#D90070] focus:ring-[#D90070]"
                  />
                  <label htmlFor="contact-consent" className="text-xs text-neutral-500 leading-snug">
                    {t.contactPage.form.consent}
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 px-6 rounded-xl bg-[#D90070] hover:bg-[#EC1685] text-white font-bold text-sm shadow-md shadow-[#D90070]/20 flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-70"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isSubmitting ? t.contactPage.form.sending : t.contactPage.form.submitBtn}</span>
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* Right Direct Info Cards Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Janet Card */}
            <div className="bg-[#1C1C1E] text-white p-7 rounded-3xl border border-neutral-800 shadow-md">
              <div className="flex items-center gap-4 mb-4">
                <JanetLopezPhoto size="sm" showBadge={true} className="shrink-0" />
                <div>
                  <span className="text-[11px] font-bold text-[#EC1685] uppercase tracking-wider block mb-0.5">
                    Representante Personal
                  </span>
                  <h3 className="text-2xl font-bold leading-tight">Janet López</h3>
                  <p className="text-xs text-neutral-400 mt-0.5">Agente Autorizada de Seguros · PR</p>
                </div>
              </div>

              <div className="mt-6 space-y-3.5 text-sm">
                <a
                  href="tel:7863565990"
                  className="flex items-center gap-3 p-3 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-white transition-colors"
                >
                  <Phone className="w-4 h-4 text-[#EC1685] shrink-0" />
                  <span className="font-semibold">786-356-5990</span>
                </a>

                <a
                  href="https://wa.me/17863565990?text=Hola%20Janet,%20quisiera%20recibir%20orientación%20sobre%20un%20seguro."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-400 transition-colors border border-emerald-500/30"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span className="font-semibold">WhatsApp Directo: 786-356-5990</span>
                </a>

                <a
                  href="tel:7877101313"
                  className="flex items-center gap-3 p-3 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-white transition-colors"
                >
                  <Building className="w-4 h-4 text-neutral-400 shrink-0" />
                  <span className="font-semibold">Oficina Central: 787-710-1313</span>
                </a>

                <a
                  href="mailto:oficina@mvinsurancespr.com"
                  className="flex items-center gap-3 p-3 rounded-xl bg-neutral-800/80 hover:bg-neutral-800 text-white transition-colors text-xs"
                >
                  <Mail className="w-4 h-4 text-[#EC1685] shrink-0" />
                  <span>oficina@mvinsurancespr.com</span>
                </a>
              </div>
            </div>

            {/* Office location card */}
            <div className="bg-white p-7 rounded-3xl border border-neutral-200 shadow-xs space-y-4">
              <div className="flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#D90070]" />
                <h4 className="text-base font-bold text-[#292929]">
                  {t.contactPage.directCards.officeTitle}
                </h4>
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed">
                {t.contactPage.directCards.address}
              </p>

              <div className="pt-2 border-t border-neutral-100 flex items-start gap-2 text-xs text-neutral-500">
                <Clock className="w-4 h-4 text-neutral-400 shrink-0 mt-0.5" />
                <span>{t.contactPage.directCards.hours}</span>
              </div>

              {/* Interactive map snippet visual */}
              <div className="mt-2 h-32 rounded-xl bg-neutral-100 border border-neutral-200 overflow-hidden relative flex items-center justify-center text-center p-4">
                <div className="space-y-1">
                  <MapPin className="w-6 h-6 text-[#D90070] mx-auto" />
                  <span className="text-xs font-bold text-[#292929] block">
                    Las Piedras, Puerto Rico
                  </span>
                  <a
                    href="https://maps.google.com/?q=4+calle+Ramos+Antonini+Las+Piedras+PR+00771"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-[#D90070] hover:underline font-semibold block"
                  >
                    {lang === 'es' ? 'Ver en Google Maps →' : 'Open in Google Maps →'}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. FAQ ACCORDION */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#D90070]">
            {lang === 'es' ? 'RESOLVEMOS TUS DUDAS' : 'FREQUENT QUESTIONS'}
          </span>
          <h2 className="text-3xl font-extrabold text-[#292929] tracking-tight">
            {t.contactPage.faqTitle}
          </h2>
        </div>

        <div className="space-y-4">
          {t.contactPage.faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-2xl border border-neutral-200/90 shadow-2xs overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : idx)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50/50"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold text-[#292929]">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-neutral-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#D90070]' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};
