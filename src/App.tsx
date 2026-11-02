import { LegalPage } from './pages/LegalPage';
import { PageMetadata } from './components/layout/PageMetadata';
import React, { useState, useEffect } from 'react';
import { ToastProvider } from './components/ui/Toast';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { HowWeWorkPage } from './pages/HowWeWorkPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BlogPage } from './pages/BlogPage';
import { BlogPostPage } from './pages/BlogPostPage';
import { AdminPage } from './pages/AdminPage';
import { ProjectInquiryModal } from './components/modals/ProjectInquiryModal';
import { PageId } from './types';
import { parseRoute, navigateTo, getRouteUrl } from './utils/router';

export default function App({ pathname }: { pathname?: string }) {
  const initialRoute = pathname === undefined ? parseRoute() : parseRoute(pathname, '');
  const [currentPage, setCurrentPage] = useState<PageId>(initialRoute.page);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    initialRoute.detailId || 'mobile-app'
  );
  const [selectedPostId, setSelectedPostId] = useState<string>(
    initialRoute.detailId || '1'
  );
  // Sync state whenever the URL link changes in the browser
  useEffect(() => {
    const hadHash = Boolean(window.location.hash);
    // If the browser address bar still has a /#/ or # from before, clean it to clean path immediately
    if (window.location.hash) {
      const { page, detailId } = parseRoute();
      const cleanUrl = getRouteUrl(page, detailId);
      window.history.replaceState(null, '', cleanUrl);
    }

    const handleUrlChange = () => {
      const { page, detailId } = parseRoute();
      setCurrentPage(page);
      if (page === 'service-detail' && detailId) {
        setSelectedServiceId(detailId);
      } else if (page === 'blog-post' && detailId) {
        setSelectedPostId(detailId);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    if (hadHash) handleUrlChange();

    window.addEventListener('popstate', handleUrlChange);
    // Also listen to hashchange just in case an external anchor or old link is hit
    window.addEventListener('hashchange', handleUrlChange);

    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  const handleNavigate = (page: PageId, detailId?: string) => {
    navigateTo(page, detailId);
  };

  const handleOpenConsultation = () => handleNavigate('contact');

  if (currentPage === 'admin') return <><PageMetadata page="admin" /><AdminPage /></>;

  return (
    <ToastProvider>
      <PageMetadata page={currentPage} detailId={currentPage === 'service-detail' ? selectedServiceId : currentPage === 'blog-post' ? selectedPostId : undefined} />
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-[#18529B]">
        {/* Fixed / Floating Top Navbar matching BrightByte screenshots */}
        <Navbar
          currentPage={currentPage}
          currentServiceId={currentPage === 'service-detail' ? selectedServiceId : undefined}
          onNavigate={handleNavigate}
          onOpenConsultation={handleOpenConsultation}
        />

        {currentPage === 'privacy-policy' && <LegalPage type="privacy" />}
        {currentPage === 'terms-of-service' && <LegalPage type="terms" />}
        {/* Dynamic Page Views matching all 16 user screenshot designs */}
        <div className="flex-1">
          {currentPage === 'home' && (
            <HomePage
              onOpenConsultation={handleOpenConsultation}
              onOpenConsultationWithScope={handleOpenConsultation}
              onNavigate={handleNavigate}
            />
          )}

          {currentPage === 'services' && (
            <ServicesPage
              onNavigate={handleNavigate}
              onOpenConsultation={handleOpenConsultation}
            />
          )}

          {currentPage === 'service-detail' && (
            <ServiceDetailPage
              serviceId={selectedServiceId}
              onNavigate={handleNavigate}
              onOpenConsultation={handleOpenConsultation}
            />
          )}

          {currentPage === 'how-we-work' && (
            <HowWeWorkPage
              onNavigate={handleNavigate}
              onOpenConsultation={handleOpenConsultation}
            />
          )}

          {currentPage === 'about' && (
            <AboutPage
              onNavigate={handleNavigate}
              onOpenConsultation={handleOpenConsultation}
            />
          )}

          {currentPage === 'blog' && (
            <BlogPage
              onNavigate={handleNavigate}
              onOpenConsultation={handleOpenConsultation}
            />
          )}

          {currentPage === 'blog-post' && (
            <BlogPostPage
              postId={selectedPostId}
              onNavigate={handleNavigate}
              onOpenConsultation={handleOpenConsultation}
            />
          )}

          {currentPage === 'contact' && (
            <ContactPage onOpenConsultation={handleOpenConsultation} />
          )}
        </div>

        {/* Global Footer with Toronto address, columns, and legal notices */}
        <Footer
          onNavigate={handleNavigate}
          onOpenConsultation={handleOpenConsultation}
        />


      </div>
    </ToastProvider>
  );
}
