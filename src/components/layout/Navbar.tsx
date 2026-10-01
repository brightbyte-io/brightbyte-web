import React, { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { Logo } from '../ui/Logo';
import { Button } from '../ui/Button';
import { PageId } from '../../types';
import { servicesData } from '../../data/mockData';

export interface NavbarProps {
  currentPage: PageId;
  onNavigate: (page: PageId, serviceId?: string) => void;
  onOpenContact?: () => void;
  onOpenConsultation?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenContact,
  onOpenConsultation,
}) => {
  const triggerContact = onOpenConsultation || onOpenContact || (() => {});
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setServicesDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleNavClick = (pageId: PageId) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleServiceSelect = (serviceId: string) => {
    onNavigate('service-detail', serviceId);
    setServicesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-3 sm:top-4 left-0 right-0 z-40 w-full px-4 sm:px-6 pointer-events-none">
      <div className="max-w-6xl mx-auto pointer-events-auto">
        <nav className="relative flex items-center justify-between px-6 py-2.5 bg-white/95 backdrop-blur-md rounded-2xl border border-slate-200/90 shadow-[0_4px_20px_-4px_rgba(15,23,42,0.06)]">
          {/* Left Group: Logo + Navigation Links */}
          <div className="flex items-center gap-7 lg:gap-9">
            {/* Brand Logo */}
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick('home');
              }}
              className="cursor-pointer transition-opacity hover:opacity-90 flex items-center shrink-0"
              aria-label="BrightByte Home"
            >
              <Logo size="md" />
            </a>

            {/* Desktop Navigation Links - Positioned on the Left */}
            <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
                className={`text-sm font-medium transition-colors hover:text-[#18529B] cursor-pointer ${
                  currentPage === 'home' ? 'text-[#18529B] font-semibold' : 'text-slate-700'
                }`}
              >
                Home
              </a>

              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
                className={`text-sm font-medium transition-colors hover:text-[#18529B] cursor-pointer ${
                  currentPage === 'about' ? 'text-[#18529B] font-semibold' : 'text-slate-700'
                }`}
              >
                About
              </a>

              {/* Services Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setServicesDropdownOpen(!servicesDropdownOpen)}
                  className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#18529B] cursor-pointer ${
                    currentPage === 'services' || currentPage === 'service-detail'
                      ? 'text-[#18529B] font-semibold'
                      : 'text-slate-700'
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${
                      servicesDropdownOpen ? 'rotate-180 text-[#18529B]' : 'text-slate-400'
                    }`}
                  />
                </button>

                {servicesDropdownOpen && (
                  <div className="absolute top-full left-0 mt-3 w-80 rounded-2xl bg-white border border-slate-200 shadow-xl p-3 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1.5">
                      Our Practice Areas
                    </div>
                    <div className="space-y-1">
                      {servicesData.map((service) => (
                        <a
                          key={service.id}
                          href={`/services/${service.id}`}
                          onClick={(e) => {
                            e.preventDefault();
                            handleServiceSelect(service.id);
                          }}
                          className="w-full text-left px-3 py-2 text-xs font-medium text-slate-700 hover:text-[#18529B] hover:bg-slate-50 rounded-lg transition-colors flex items-center justify-between group cursor-pointer"
                        >
                          <span>{service.title}</span>
                          <ArrowRight className="w-3.5 h-3.5 text-slate-300 group-hover:text-[#18529B] transition-colors" />
                        </a>
                      ))}
                    </div>
                    <div className="mt-2 pt-2 border-t border-slate-100 px-2">
                      <a
                        href="/services"
                        onClick={(e) => {
                          e.preventDefault();
                          handleNavClick('services');
                        }}
                        className="block w-full py-1.5 text-center text-xs font-semibold text-[#18529B] hover:underline cursor-pointer"
                      >
                        View All Services Overview →
                      </a>
                    </div>
                  </div>
                )}
              </div>

              <a
                href="/how-we-work"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('how-we-work');
                }}
                className={`text-sm font-medium transition-colors hover:text-[#18529B] cursor-pointer ${
                  currentPage === 'how-we-work' ? 'text-[#18529B] font-semibold' : 'text-slate-700'
                }`}
              >
                How We Work
              </a>

              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('blog');
                }}
                className={`text-sm font-medium transition-colors hover:text-[#18529B] cursor-pointer ${
                  currentPage === 'blog' || currentPage === 'blog-post' ? 'text-[#18529B] font-semibold' : 'text-slate-700'
                }`}
              >
                Blog
              </a>

              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                className={`text-sm font-medium transition-colors hover:text-[#18529B] cursor-pointer ${
                  currentPage === 'contact' ? 'text-[#18529B] font-semibold' : 'text-slate-700'
                }`}
              >
                Contact
              </a>
            </div>
          </div>

          {/* Contact Us Primary Action on the Right */}
          <div className="hidden md:flex items-center">
            <Button
              variant="primary"
              size="md"
              rounded="full"
              onClick={triggerContact}
              className="px-6 py-2.5 shadow-sm text-sm"
            >
              Contact Us
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 rounded-lg"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-2 p-4 bg-white/98 backdrop-blur-md rounded-2xl border border-slate-200 shadow-xl space-y-3 z-50">
            <div className="space-y-1">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('home');
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Home
              </a>
              <a
                href="/about"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('about');
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                About
              </a>
              <a
                href="/services"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('services');
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Services
              </a>
              <div className="pl-4 space-y-1 border-l-2 border-slate-100 my-1">
                {servicesData.slice(0, 5).map((s) => (
                  <a
                    key={s.id}
                    href={`/services/${s.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleServiceSelect(s.id);
                    }}
                    className="block w-full text-left px-2 py-1 text-xs text-slate-600 hover:text-[#18529B]"
                  >
                    • {s.title}
                  </a>
                ))}
              </div>
              <a
                href="/how-we-work"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('how-we-work');
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                How We Work
              </a>
              <a
                href="/blog"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('blog');
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Blog
              </a>
              <a
                href="/contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick('contact');
                }}
                className="block w-full text-left px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 rounded-lg"
              >
                Contact
              </a>
            </div>
            <div className="pt-2 border-t border-slate-100">
              <Button
                variant="primary"
                rounded="full"
                className="w-full py-2.5"
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerContact();
                }}
              >
                Contact Us
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
