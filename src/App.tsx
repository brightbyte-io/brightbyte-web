import React, { useState } from 'react';
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
import { ProjectInquiryModal } from './components/modals/ProjectInquiryModal';
import { PageId } from './types';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageId>('home');
  const [selectedServiceId, setSelectedServiceId] = useState<string>('mobile-app-development');
  const [selectedPostId, setSelectedPostId] = useState<string>('1');
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [initialScope, setInitialScope] = useState<{
    serviceType?: string;
    budget?: string;
    description?: string;
  } | undefined>(undefined);

  const handleNavigate = (page: PageId, detailId?: string) => {
    setCurrentPage(page);
    if (page === 'service-detail' && detailId) {
      setSelectedServiceId(detailId);
    } else if (page === 'blog-post' && detailId) {
      setSelectedPostId(detailId);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenConsultation = () => {
    setInitialScope(undefined);
    setIsConsultationOpen(true);
  };

  const handleOpenConsultationWithScope = (scope: {
    serviceType: string;
    budget: string;
    description: string;
  }) => {
    setInitialScope(scope);
    setIsConsultationOpen(true);
  };

  return (
    <ToastProvider>
      <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans selection:bg-blue-100 selection:text-[#18529B]">
        {/* Fixed / Floating Top Navbar matching BrightByte screenshots */}
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenConsultation={handleOpenConsultation}
        />

        {/* Dynamic Page Views matching all 16 user screenshot designs */}
        <div className="flex-1">
          {currentPage === 'home' && (
            <HomePage
              onOpenConsultation={handleOpenConsultation}
              onOpenConsultationWithScope={handleOpenConsultationWithScope}
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

        {/* Technical Consultation Modal */}
        <ProjectInquiryModal
          isOpen={isConsultationOpen}
          onClose={() => setIsConsultationOpen(false)}
          initialScope={initialScope}
        />
      </div>
    </ToastProvider>
  );
}
