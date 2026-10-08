import React from 'react';
import { Sparkles } from 'lucide-react';
import { Language, PageId } from '../types';
import { Breadcrumb } from './Breadcrumb';

interface PageHeaderBannerProps {
  title: React.ReactNode;
  subtitle: string;
  eyebrow?: string;
  bgImageUrl: string;
  breadcrumbItems: Array<{ label: string; pageId?: PageId; active?: boolean }>;
  setCurrentPage: (page: PageId) => void;
  lang: Language;
  ctaText?: string;
  onCtaClick?: () => void;
}

export const PageHeaderBanner: React.FC<PageHeaderBannerProps> = ({
  title,
  subtitle,
  eyebrow,
  bgImageUrl,
  breadcrumbItems,
  setCurrentPage,
  lang,
  ctaText,
  onCtaClick,
}) => {
  return (
    <div className="relative w-full overflow-hidden bg-neutral-900 text-white min-h-[300px] sm:min-h-[360px] flex flex-col justify-between border-b border-neutral-800">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={bgImageUrl}
          alt="MV Insurance Header"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).src =
              'https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&w=1600&q=80';
          }}
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Luxury Dark Photographic Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/60 z-10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/40 z-10" />

      {/* Top Breadcrumb Bar */}
      <div className="relative z-20 pt-3 pb-1 border-b border-white/10 backdrop-blur-xs bg-black/20">
        <Breadcrumb
          items={breadcrumbItems}
          setCurrentPage={setCurrentPage}
          lang={lang}
        />
      </div>

      {/* Main Foreground Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 w-full">
        <div className="max-w-3xl space-y-4">
          {eyebrow && (
            <div className="inline-flex items-center gap-2 bg-[#D90070] text-white px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-sm">
              <Sparkles className="w-3.5 h-3.5" />
              <span>{eyebrow}</span>
            </div>
          )}

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight text-balance">
            {title}
          </h1>

          <p className="text-sm sm:text-base lg:text-lg text-neutral-200 leading-relaxed max-w-2xl font-normal">
            {subtitle}
          </p>

          {ctaText && onCtaClick && (
            <div className="pt-2">
              <button
                onClick={onCtaClick}
                className="px-6 py-3 rounded-xl bg-[#D90070] hover:bg-[#EC1685] text-white font-bold text-sm transition-all shadow-md shadow-[#D90070]/30 cursor-pointer active:scale-98"
              >
                {ctaText}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
