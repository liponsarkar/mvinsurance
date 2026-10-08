import React, { useState, useEffect } from 'react';
import { Language, PageId } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MobileStickyBar } from './components/MobileStickyBar';
import { QuoteModal } from './components/QuoteModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { InsurancePage } from './pages/InsurancePage';
import { BusinessAutoPage } from './pages/BusinessAutoPage';
import { RetirementPage } from './pages/RetirementPage';
import { ContactPage } from './pages/ContactPage';
import { JanetPhotoProvider } from './context/JanetPhotoContext';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [lang, setLang] = useState<Language>('es');
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteDefaultInsurance, setQuoteDefaultInsurance] = useState<string | undefined>(undefined);

  // Sync with URL hash if present
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (['home', 'about', 'insurance', 'business', 'retirement', 'contact'].includes(hash)) {
        setCurrentPage(hash as PageId);
      }
    };

    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handlePageChange = (page: PageId) => {
    setCurrentPage(page);
    window.location.hash = page === 'home' ? '' : page;
  };

  const handleOpenQuote = (insuranceId?: string) => {
    setQuoteDefaultInsurance(insuranceId);
    setIsQuoteModalOpen(true);
  };

  return (
    <JanetPhotoProvider>
      <div className="min-h-screen flex flex-col bg-[#F5F5F7] text-[#292929] antialiased">
        {/* Top Navigation */}
        <Navbar
          currentPage={currentPage}
          setCurrentPage={handlePageChange}
          lang={lang}
          setLang={setLang}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Main Page Content */}
        <main className="flex-1 pb-16 lg:pb-0">
          {currentPage === 'home' && (
            <HomePage
              lang={lang}
              setCurrentPage={handlePageChange}
              onOpenQuote={handleOpenQuote}
            />
          )}
          {currentPage === 'about' && (
            <AboutPage
              lang={lang}
              setCurrentPage={handlePageChange}
              onOpenQuote={() => handleOpenQuote()}
            />
          )}
          {currentPage === 'insurance' && (
            <InsurancePage
              lang={lang}
              setCurrentPage={handlePageChange}
              onOpenQuote={handleOpenQuote}
            />
          )}
          {currentPage === 'business' && (
            <BusinessAutoPage
              lang={lang}
              setCurrentPage={handlePageChange}
              onOpenQuote={handleOpenQuote}
            />
          )}
          {currentPage === 'retirement' && (
            <RetirementPage
              lang={lang}
              setCurrentPage={handlePageChange}
              onOpenQuote={handleOpenQuote}
            />
          )}
          {currentPage === 'contact' && (
            <ContactPage
              lang={lang}
              setCurrentPage={handlePageChange}
            />
          )}
        </main>

        {/* Global Footer */}
        <Footer
          setCurrentPage={handlePageChange}
          lang={lang}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Mobile Sticky Action Bar */}
        <MobileStickyBar
          lang={lang}
          onOpenQuote={() => handleOpenQuote()}
        />

        {/* Interactive Global Quote & Consultation Modal */}
        <QuoteModal
          isOpen={isQuoteModalOpen}
          onClose={() => setIsQuoteModalOpen(false)}
          lang={lang}
          defaultInsurance={quoteDefaultInsurance}
        />
      </div>
    </JanetPhotoProvider>
  );
}
