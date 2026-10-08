import React from 'react';
import { ChevronRight, Home } from 'lucide-react';
import { PageId, Language } from '../types';

interface BreadcrumbItem {
  label: string;
  pageId?: PageId;
  active?: boolean;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  setCurrentPage: (page: PageId) => void;
  lang: Language;
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, setCurrentPage, lang }) => {
  return (
    <nav aria-label="Breadcrumb" className="py-3 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <ol className="flex items-center flex-wrap gap-1.5 text-xs text-neutral-500 font-medium">
        {/* Home root */}
        <li className="flex items-center">
          <button
            onClick={() => {
              setCurrentPage('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-1 hover:text-[#D90070] transition-colors cursor-pointer"
          >
            <Home className="w-3.5 h-3.5 text-neutral-400" />
            <span>{lang === 'es' ? 'Inicio' : 'Home'}</span>
          </button>
        </li>

        {/* Dynamic Items */}
        {items.map((item, idx) => (
          <li key={idx} className="flex items-center gap-1.5">
            <ChevronRight className="w-3 h-3 text-neutral-400 shrink-0" />
            {item.pageId && !item.active ? (
              <button
                onClick={() => {
                  setCurrentPage(item.pageId!);
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="hover:text-[#D90070] transition-colors cursor-pointer"
              >
                {item.label}
              </button>
            ) : (
              <span className="text-[#D90070] font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};
