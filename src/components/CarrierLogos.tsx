import React from 'react';

export const CarrierLogos: React.FC<{ title?: string; subtitle?: string }> = ({
  title,
  subtitle,
}) => {
  return (
    <div className="w-full">
      {title && (
        <div className="text-center mb-6">
          <h3 className="text-base font-semibold text-[#292929]">{title}</h3>
          {subtitle && <p className="text-sm text-neutral-500 mt-1">{subtitle}</p>}
        </div>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6 items-center justify-items-center">
        {/* Universal De Seguros */}
        <div className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-xl border border-neutral-200/80 shadow-xs hover:border-[#D90070]/30 hover:shadow-sm transition-all w-full h-20">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-md bg-[#008542] flex items-center justify-center text-white font-black text-sm">
              U
            </div>
            <div className="leading-none text-left">
              <span className="font-extrabold text-[#008542] text-sm tracking-tight block">Universal</span>
              <span className="text-[9px] uppercase tracking-wider text-neutral-500 font-semibold block mt-0.5">De Seguros</span>
            </div>
          </div>
        </div>

        {/* Multinational */}
        <div className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-xl border border-neutral-200/80 shadow-xs hover:border-[#D90070]/30 hover:shadow-sm transition-all w-full h-20">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex flex-col justify-between py-0.5">
              <span className="h-1 bg-[#8B0000] rounded-full w-full"></span>
              <span className="h-1 bg-[#B22222] rounded-full w-4/5"></span>
              <span className="h-1 bg-[#D90070] rounded-full w-3/5"></span>
            </div>
            <div className="leading-none text-left">
              <span className="font-bold text-[#292929] text-xs block">Multinational</span>
              <span className="text-[8px] text-neutral-500 italic block mt-0.5">Seguro te Responde</span>
            </div>
          </div>
        </div>

        {/* Seguros Múltiples */}
        <div className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-xl border border-neutral-200/80 shadow-xs hover:border-[#D90070]/30 hover:shadow-sm transition-all w-full h-20">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#006847] flex items-center justify-center text-white font-bold text-xs">
              ≡
            </div>
            <div className="leading-none text-left">
              <span className="font-extrabold text-[#006847] text-[11px] uppercase tracking-tight block">Seguros</span>
              <span className="font-extrabold text-[#006847] text-[11px] uppercase tracking-tight block">Múltiples</span>
            </div>
          </div>
        </div>

        {/* Guardian */}
        <div className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-xl border border-neutral-200/80 shadow-xs hover:border-[#D90070]/30 hover:shadow-sm transition-all w-full h-20">
          <div className="flex items-center gap-1.5">
            <div className="w-6 h-6 rounded-full border-2 border-[#009688] flex items-center justify-center text-[#009688] font-black text-xs">
              G
            </div>
            <span className="font-bold text-[#009688] text-sm tracking-tight">Guardian</span>
          </div>
        </div>

        {/* MAPFRE */}
        <div className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-xl border border-neutral-200/80 shadow-xs hover:border-[#D90070]/30 hover:shadow-sm transition-all w-full h-20">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-[#D8232A] flex items-center justify-center text-white text-[10px] font-bold">
              ☎
            </div>
            <div className="leading-none text-left">
              <span className="font-black text-[#D8232A] text-sm tracking-wide block">MAPFRE</span>
              <span className="text-[8px] text-neutral-500 block mt-0.5">Cuidamos de ti</span>
            </div>
          </div>
        </div>

        {/* One Alliance */}
        <div className="flex items-center justify-center p-3 sm:p-4 bg-white rounded-xl border border-neutral-200/80 shadow-xs hover:border-[#D90070]/30 hover:shadow-sm transition-all w-full h-20">
          <div className="flex items-center gap-1.5">
            <div className="w-5 h-5 rounded-full bg-cyan-600 flex items-center justify-center text-white text-[10px] font-bold">
              ✈
            </div>
            <div className="leading-none text-left">
              <span className="font-extrabold text-[#1a365d] text-[11px] block">ONE ALLIANCE</span>
              <span className="text-[8px] text-cyan-700 uppercase font-semibold block mt-0.5">Travel Assist</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
