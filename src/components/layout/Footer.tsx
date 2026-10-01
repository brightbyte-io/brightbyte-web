import React from 'react';
import { Container } from './Container';
import { Logo } from '../ui/Logo';
import { PageId } from '../../types';

// Social SVGs matching Footer.png
const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4.5 h-4.5' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

// Exact modern X (Twitter) icon SVG matching Footer.png
const XIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export interface FooterProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation?: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="relative bg-gradient-to-r from-[#DFEBF7] via-[#EBF2F9] to-[#E5EFF8] text-slate-700 pt-14 pb-5 sm:pb-6 overflow-hidden">
      {/* ============================================================== */}
      {/* AMBIENT CURVED LIGHT ARCS MATCHING Footer.png                  */}
      {/* ============================================================== */}
      {/* Large sweeping white curve arc on the left behind logo */}
      <div className="absolute -left-32 -top-20 w-[680px] h-[680px] rounded-full border-[70px] border-white/50 blur-2xl pointer-events-none -z-0" />
      <div className="absolute -left-12 top-8 w-[480px] h-[480px] rounded-full border-[45px] border-blue-50/60 blur-xl pointer-events-none -z-0" />

      {/* Soft ambient white glow on right */}
      <div className="absolute -right-28 top-1/3 w-[520px] h-[520px] rounded-full border-[60px] border-white/40 blur-2xl pointer-events-none -z-0" />

      <Container className="relative z-10">
        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): ALL IN THE SAME ROW/LAYOUT    */}
        {/* Exactly matching Footer.png                                    */}
        {/* ============================================================== */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-10 pb-10">
          {/* Left Column: Brand Logo, Headline, Social Icons */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-between pr-2">
            <div className="space-y-6">
              <a
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                  onNavigate('home');
                }}
                className="text-left cursor-pointer focus:outline-none block"
                aria-label="BrightByte Home"
              >
                <Logo size="lg" textColor="text-[#18529B]" />
              </a>

              <h3 className="text-2xl lg:text-[25px] font-extrabold text-slate-900 leading-snug tracking-tight max-w-[280px]">
                We build software that moves businesses forward.
              </h3>
            </div>

            {/* Social Media Icons with pastel blue rounded containers */}
            <div className="pt-8 flex items-center gap-2.5 sm:gap-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-10 h-10 rounded-[14px] bg-[#D7E3F1] hover:bg-[#C9DAEC] border border-[#A8C4DE] hover:border-[#91B3D5] text-[#18529B] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
              >
                <FacebookIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-10 h-10 rounded-[14px] bg-[#D7E3F1] hover:bg-[#C9DAEC] border border-[#A8C4DE] hover:border-[#91B3D5] text-[#18529B] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
              >
                <InstagramIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-[14px] bg-[#D7E3F1] hover:bg-[#C9DAEC] border border-[#A8C4DE] hover:border-[#91B3D5] text-[#18529B] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
              >
                <LinkedinIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-10 h-10 rounded-[14px] bg-[#D7E3F1] hover:bg-[#C9DAEC] border border-[#A8C4DE] hover:border-[#91B3D5] text-[#18529B] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
              >
                <YoutubeIcon className="w-[18px] h-[18px]" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-10 h-10 rounded-[14px] bg-[#D7E3F1] hover:bg-[#C9DAEC] border border-[#A8C4DE] hover:border-[#91B3D5] text-[#18529B] flex items-center justify-center transition-all shadow-2xs cursor-pointer"
              >
                <XIcon className="w-[18px] h-[18px]" />
              </a>
            </div>
          </div>

          {/* Middle Column: SERVICES + CONTACT */}
          <div className="md:col-span-5 lg:col-span-5 space-y-8">
            {/* SERVICES */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                SERVICES
              </h4>
              <div className="w-full border-b border-[#B8D0E8]" />

              <div className="grid grid-cols-2 gap-x-6 gap-y-3 pt-1 text-sm text-slate-600 font-normal">
                {/* Services Column 1 */}
                <div className="space-y-3">
                  <div>
                    <a
                      href="/services/mobile-app"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service-detail', 'mobile-app');
                      }}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                    >
                      Mobile App Development
                    </a>
                  </div>
                  <div>
                    <a
                      href="/services/web-enterprise"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service-detail', 'web-enterprise');
                      }}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                    >
                      Web & Enterprise App Development
                    </a>
                  </div>
                  <div>
                    <a
                      href="/services/ai-app"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service-detail', 'ai-app');
                      }}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                    >
                      AI App Development
                    </a>
                  </div>
                  <div>
                    <a
                      href="/services/devops"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service-detail', 'devops');
                      }}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                    >
                      DevOps
                    </a>
                  </div>
                  <div>
                    <a
                      href="/services/seo-marketing"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service-detail', 'seo-marketing');
                      }}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                    >
                      SEO & Social Media Marketing
                    </a>
                  </div>
                </div>

                {/* Services Column 2 */}
                <div className="space-y-3">
                  <div>
                    <a
                      href="/services/erp"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service-detail', 'erp');
                      }}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                    >
                      Enterprise Resource Planning (ERP)
                    </a>
                  </div>
                  <div>
                    <a
                      href="/services/business-auditing"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service-detail', 'business-auditing');
                      }}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                    >
                      Business Auditing
                    </a>
                  </div>
                  <div>
                    <a
                      href="/services/project-management"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service-detail', 'project-management');
                      }}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                    >
                      Project Management
                    </a>
                  </div>
                  <div>
                    <a
                      href="/services/oem-sourcing"
                      onClick={(e) => {
                        e.preventDefault();
                        onNavigate('service-detail', 'oem-sourcing');
                      }}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                    >
                      OEM Global Sourcing
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* CONTACT */}
            <div className="space-y-3">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
                CONTACT
              </h4>
              <div className="w-full border-b border-[#B8D0E8]" />

              <div className="grid grid-cols-2 gap-x-6 pt-1 text-sm text-slate-600 font-normal">
                <div>
                  <a
                    href="mailto:contact@brightbyte.io"
                    className="hover:text-[#18529B] transition-colors cursor-pointer"
                  >
                    contact@brightbyte.io
                  </a>
                </div>
                <div>
                  <a
                    href="tel:0512719015"
                    className="hover:text-[#18529B] transition-colors cursor-pointer"
                  >
                    051 2719015
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: COMPANY */}
          <div className="md:col-span-3 lg:col-span-3 space-y-3 pl-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              COMPANY
            </h4>
            <div className="w-full border-b border-[#B8D0E8]" />

            <ul className="space-y-3 pt-1 text-sm text-slate-600 font-normal">
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/how-we-work"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('how-we-work');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  How we work
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('blog');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-8 pb-7">
          {/* 1. Brand Logo & Headline */}
          <div className="space-y-4">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('home');
              }}
              className="text-left cursor-pointer focus:outline-none block"
              aria-label="BrightByte Home"
            >
              <Logo size="lg" textColor="text-[#18529B]" />
            </a>
            <h3 className="text-xl font-extrabold text-slate-900 leading-snug tracking-tight">
              We build software that moves businesses forward.
            </h3>
          </div>

          {/* 2. SERVICES section (one by one list) */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              SERVICES
            </h4>
            <div className="w-full border-b border-[#B8D0E8]" />

            <div className="space-y-2.5 pt-1 text-sm text-slate-600 font-normal">
              <div>
                <a
                  href="/services/mobile-app"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('service-detail', 'mobile-app');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  Mobile App Development
                </a>
              </div>
              <div>
                <a
                  href="/services/web-enterprise"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('service-detail', 'web-enterprise');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  Web & Enterprise App Development
                </a>
              </div>
              <div>
                <a
                  href="/services/ai-app"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('service-detail', 'ai-app');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  AI App Development
                </a>
              </div>
              <div>
                <a
                  href="/services/devops"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('service-detail', 'devops');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  DevOps
                </a>
              </div>
              <div>
                <a
                  href="/services/seo-marketing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('service-detail', 'seo-marketing');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  SEO & Social Media Marketing
                </a>
              </div>
              <div>
                <a
                  href="/services/erp"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('service-detail', 'erp');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  Enterprise Resource Planning (ERP)
                </a>
              </div>
              <div>
                <a
                  href="/services/business-auditing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('service-detail', 'business-auditing');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  Business Auditing
                </a>
              </div>
              <div>
                <a
                  href="/services/project-management"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('service-detail', 'project-management');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  Project Management
                </a>
              </div>
              <div>
                <a
                  href="/services/oem-sourcing"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('service-detail', 'oem-sourcing');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  OEM Global Sourcing
                </a>
              </div>
            </div>
          </div>

          {/* 3. COMPANY section */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              COMPANY
            </h4>
            <div className="w-full border-b border-[#B8D0E8]" />

            <ul className="space-y-2.5 pt-1 text-sm text-slate-600 font-normal">
              <li>
                <a
                  href="/about"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('about');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/how-we-work"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('how-we-work');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  How we work
                </a>
              </li>
              <li>
                <a
                  href="/blog"
                  onClick={(e) => {
                    e.preventDefault();
                    onNavigate('blog');
                  }}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left block"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* 4. CONTACT section */}
          <div className="space-y-3 pt-2">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-800">
              CONTACT
            </h4>
            <div className="w-full border-b border-[#B8D0E8]" />

            <div className="space-y-2 pt-1 text-sm text-slate-600 font-normal">
              <div>
                <a
                  href="mailto:contact@brightbyte.io"
                  className="hover:text-[#18529B] transition-colors"
                >
                  contact@brightbyte.io
                </a>
              </div>
              <div>
                <a
                  href="tel:0512719015"
                  className="hover:text-[#18529B] transition-colors"
                >
                  051 2719015
                </a>
              </div>
            </div>
          </div>

          {/* 5. Social Media Icons */}
          <div className="pt-2 flex items-center gap-2.5">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-10 h-10 rounded-[14px] bg-[#D7E3F1] hover:bg-[#C9DAEC] border border-[#A8C4DE] hover:border-[#91B3D5] text-[#18529B] flex items-center justify-center transition-all shadow-2xs"
            >
              <FacebookIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-10 h-10 rounded-[14px] bg-[#D7E3F1] hover:bg-[#C9DAEC] border border-[#A8C4DE] hover:border-[#91B3D5] text-[#18529B] flex items-center justify-center transition-all shadow-2xs"
            >
              <InstagramIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-[14px] bg-[#D7E3F1] hover:bg-[#C9DAEC] border border-[#A8C4DE] hover:border-[#91B3D5] text-[#18529B] flex items-center justify-center transition-all shadow-2xs"
            >
              <LinkedinIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-10 h-10 rounded-[14px] bg-[#D7E3F1] hover:bg-[#C9DAEC] border border-[#A8C4DE] hover:border-[#91B3D5] text-[#18529B] flex items-center justify-center transition-all shadow-2xs"
            >
              <YoutubeIcon className="w-[18px] h-[18px]" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="w-10 h-10 rounded-[14px] bg-[#D7E3F1] hover:bg-[#C9DAEC] border border-[#A8C4DE] hover:border-[#91B3D5] text-[#18529B] flex items-center justify-center transition-all shadow-2xs"
            >
              <XIcon className="w-[18px] h-[18px]" />
            </a>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BOTTOM BAR: COPYRIGHT & LEGAL                                  */}
        {/* ============================================================== */}
        <div className="pt-5 border-t border-[#B8D0E8]/70 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500 font-normal">
          <p>© 2026 Bright Byte Consulting Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('about');
              }}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              Terms of Service
            </a>
            <a
              href="/about"
              onClick={(e) => {
                e.preventDefault();
                onNavigate('about');
              }}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              Privacy Policy
            </a>
          </div>
        </div>
      </Container>
    </footer>
  );
};
