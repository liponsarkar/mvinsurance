import React, { useState } from 'react';
import { X, Send, CheckCircle2, Shield, PhoneCall } from 'lucide-react';
import { Language } from '../types';
import { translations } from '../data/translations';
import { JanetLopezPhoto } from './VisualShowcase';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  lang: Language;
  defaultInsurance?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  lang,
  defaultInsurance,
}) => {
  const t = translations[lang];
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    insuranceType: defaultInsurance || 'auto',
    preferredContact: 'whatsapp',
    notes: '',
    consent: true,
  });

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

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
      `Hola Janet, me gustaría cotizar una póliza con MV Insurance:\n\n• Nombre: ${formData.firstName} ${formData.lastName}\n• Teléfono: ${formData.phone}\n• Tipo de Seguro: ${formData.insuranceType}\n• Detalles: ${formData.notes || 'Orientación general'}`
    );
    return `https://wa.me/17863565990?text=${text}`;
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-200"
    >
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-neutral-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="bg-[#1C1C1E] text-white px-6 py-4 flex items-center justify-between border-b border-neutral-800">
          <div className="flex items-center gap-3">
            <JanetLopezPhoto size="sm" showBadge={false} className="shrink-0" />
            <div>
              <h3 id="quote-modal-title" className="text-base font-bold tracking-tight">
                {t.hero.quoteCta}
              </h3>
              <p className="text-xs text-neutral-400">Janet López · 786-356-5990</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
            aria-label="Cerrar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {submitted ? (
            <div className="text-center py-6 space-y-4">
              <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-xl font-bold text-[#292929]">{t.contactPage.form.successTitle}</h4>
              <p className="text-sm text-neutral-600 max-w-sm mx-auto">
                {t.contactPage.form.successMsg}
              </p>
              <div className="pt-2 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm transition-colors shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  {t.contactPage.form.continueWhatsapp}
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="px-5 py-3 rounded-xl bg-neutral-100 hover:bg-neutral-200 text-neutral-800 font-medium text-sm transition-colors"
                >
                  {lang === 'es' ? 'Cerrar' : 'Close'}
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    {t.contactPage.form.firstName}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#D90070] focus:border-transparent"
                    placeholder="Janet"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    {t.contactPage.form.lastName}
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#D90070] focus:border-transparent"
                    placeholder="López"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    {t.contactPage.form.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#D90070] focus:border-transparent"
                    placeholder="787-000-0000"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-neutral-700 mb-1">
                    {t.contactPage.form.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#D90070] focus:border-transparent"
                    placeholder="cliente@ejemplo.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  {t.contactPage.form.insuranceType}
                </label>
                <select
                  value={formData.insuranceType}
                  onChange={(e) => setFormData({ ...formData, insuranceType: e.target.value })}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#D90070] focus:border-transparent bg-white"
                >
                  <option value="auto">
                    {lang === 'es' ? 'Seguro de Auto / Full Cover' : 'Auto Full Cover'}
                  </option>
                  <option value="health">
                    {lang === 'es' ? 'Plan Médico' : 'Health Insurance'}
                  </option>
                  <option value="cancer">
                    {lang === 'es' ? 'Seguro de Cáncer' : 'Cancer Policy'}
                  </option>
                  <option value="life">
                    {lang === 'es' ? 'Seguro de Vida (Beneficios en Vida)' : 'Life Insurance (Living Benefits)'}
                  </option>
                  <option value="property">
                    {lang === 'es' ? 'Seguro de Propiedad y Negocio' : 'Commercial & Property'}
                  </option>
                  <option value="retirement">
                    {lang === 'es' ? 'Plan de Retiro / Anualidad' : 'Retirement Plan'}
                  </option>
                  <option value="travel">
                    {lang === 'es' ? 'Seguro de Viaje' : 'Travel Insurance'}
                  </option>
                  <option value="disability">
                    {lang === 'es' ? 'Incapacidad y Fianzas' : 'Disability & Surety'}
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-neutral-700 mb-1">
                  {t.contactPage.form.notes}
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={t.contactPage.form.notesPlaceholder}
                  className="w-full px-3 py-2 text-sm rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-[#D90070] focus:border-transparent resize-none"
                />
              </div>

              <div className="flex items-start gap-2 pt-1">
                <input
                  type="checkbox"
                  id="modal-consent"
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  required
                  className="mt-0.5 rounded text-[#D90070] focus:ring-[#D90070]"
                />
                <label htmlFor="modal-consent" className="text-xs text-neutral-500 leading-snug">
                  {t.contactPage.form.consent}
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 px-4 rounded-xl bg-[#D90070] hover:bg-[#EC1685] text-white font-semibold text-sm transition-all shadow-md shadow-[#D90070]/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70"
                >
                  <Send className="w-4 h-4" />
                  {isSubmitting ? t.contactPage.form.sending : t.contactPage.form.submitBtn}
                </button>
              </div>

              <div className="text-center pt-2 border-t border-neutral-100">
                <span className="text-xs text-neutral-500">
                  {lang === 'es' ? '¿Prefieres atención inmediata?' : 'Need immediate assistance?'}{' '}
                </span>
                <a
                  href="tel:7863565990"
                  className="text-xs font-bold text-[#D90070] hover:underline inline-flex items-center gap-1"
                >
                  <PhoneCall className="w-3 h-3" />
                  786-356-5990
                </a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
