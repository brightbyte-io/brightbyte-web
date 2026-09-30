import React from 'react';
import { Container } from './Container';
import { Logo } from '../ui/Logo';
import { PageId } from '../../types';

// Social SVGs matching Footer.png
const FacebookIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);

const InstagramIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const LinkedinIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
  </svg>
);

const YoutubeIcon: React.FC<{ className?: string }> = ({ className = 'w-4 h-4' }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
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
    <footer className="relative bg-gradient-to-r from-[#DFEBF7] via-[#EBF2F9] to-[#E5EFF8] text-slate-700 pt-16 pb-12 overflow-hidden select-none">
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
        <div className="hidden md:grid md:grid-cols-12 gap-8 lg:gap-10 pb-14">
          {/* Left Column: Brand Logo, Headline, Social Icons */}
          <div className="md:col-span-4 lg:col-span-4 flex flex-col justify-between pr-2">
            <div className="space-y-6">
              <button
                onClick={() => onNavigate('home')}
                className="text-left cursor-pointer focus:outline-none block"
              >
                <Logo size="md" textColor="text-[#18529B]" />
              </button>

              <h3 className="text-2xl lg:text-[28px] font-extrabold text-slate-900 leading-snug tracking-tight max-w-[280px]">
                We build software that moves businesses forward.
              </h3>
            </div>

            {/* Social Media Icons with pastel blue rounded containers */}
            <div className="pt-8 flex items-center gap-2.5">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
                className="w-9 h-9 rounded-xl bg-[#C6DCF3] hover:bg-[#B3D0EE] text-[#18529B] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
                className="w-9 h-9 rounded-xl bg-[#C6DCF3] hover:bg-[#B3D0EE] text-[#18529B] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-9 h-9 rounded-xl bg-[#C6DCF3] hover:bg-[#B3D0EE] text-[#18529B] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              >
                <LinkedinIcon className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                aria-label="YouTube"
                className="w-9 h-9 rounded-xl bg-[#C6DCF3] hover:bg-[#B3D0EE] text-[#18529B] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              >
                <YoutubeIcon className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                aria-label="X (Twitter)"
                className="w-9 h-9 rounded-xl bg-[#C6DCF3] hover:bg-[#B3D0EE] text-[#18529B] flex items-center justify-center transition-colors shadow-2xs cursor-pointer"
              >
                <XIcon className="w-4 h-4" />
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
                    <button
                      onClick={() => onNavigate('service-detail', 'mobile-app')}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                    >
                      Mobile App Development
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => onNavigate('service-detail', 'web-enterprise')}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                    >
                      Web & Enterprise App Development
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => onNavigate('service-detail', 'ai-app')}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                    >
                      AI App Development
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => onNavigate('service-detail', 'devops')}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                    >
                      DevOps
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => onNavigate('service-detail', 'seo-marketing')}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                    >
                      SEO & Social Media Marketing
                    </button>
                  </div>
                </div>

                {/* Services Column 2 */}
                <div className="space-y-3">
                  <div>
                    <button
                      onClick={() => onNavigate('service-detail', 'erp')}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                    >
                      Enterprise Resource Planning (ERP)
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => onNavigate('service-detail', 'business-auditing')}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                    >
                      Business Auditing
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => onNavigate('service-detail', 'project-management')}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                    >
                      Project Management
                    </button>
                  </div>
                  <div>
                    <button
                      onClick={() => onNavigate('service-detail', 'oem-sourcing')}
                      className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                    >
                      OEM Global Sourcing
                    </button>
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
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-we-work')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  How we work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  Blog
                </button>
              </li>
            </ul>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-8 pb-10">
          {/* 1. Brand Logo & Headline */}
          <div className="space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="text-left cursor-pointer focus:outline-none block"
            >
              <Logo size="md" textColor="text-[#18529B]" />
            </button>
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
                <button
                  onClick={() => onNavigate('service-detail', 'mobile-app')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  Mobile App Development
                </button>
              </div>
              <div>
                <button
                  onClick={() => onNavigate('service-detail', 'web-enterprise')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  Web & Enterprise App Development
                </button>
              </div>
              <div>
                <button
                  onClick={() => onNavigate('service-detail', 'ai-app')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  AI App Development
                </button>
              </div>
              <div>
                <button
                  onClick={() => onNavigate('service-detail', 'devops')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  DevOps
                </button>
              </div>
              <div>
                <button
                  onClick={() => onNavigate('service-detail', 'seo-marketing')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  SEO & Social Media Marketing
                </button>
              </div>
              <div>
                <button
                  onClick={() => onNavigate('service-detail', 'erp')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  Enterprise Resource Planning (ERP)
                </button>
              </div>
              <div>
                <button
                  onClick={() => onNavigate('service-detail', 'business-auditing')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  Business Auditing
                </button>
              </div>
              <div>
                <button
                  onClick={() => onNavigate('service-detail', 'project-management')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  Project Management
                </button>
              </div>
              <div>
                <button
                  onClick={() => onNavigate('service-detail', 'oem-sourcing')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  OEM Global Sourcing
                </button>
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
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('how-we-work')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  How we work
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('blog')}
                  className="hover:text-[#18529B] transition-colors cursor-pointer text-left"
                >
                  Blog
                </button>
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
              className="w-9 h-9 rounded-xl bg-[#C6DCF3] hover:bg-[#B3D0EE] text-[#18529B] flex items-center justify-center transition-colors shadow-2xs"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-xl bg-[#C6DCF3] hover:bg-[#B3D0EE] text-[#18529B] flex items-center justify-center transition-colors shadow-2xs"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-xl bg-[#C6DCF3] hover:bg-[#B3D0EE] text-[#18529B] flex items-center justify-center transition-colors shadow-2xs"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-xl bg-[#C6DCF3] hover:bg-[#B3D0EE] text-[#18529B] flex items-center justify-center transition-colors shadow-2xs"
            >
              <YoutubeIcon className="w-4 h-4" />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="X (Twitter)"
              className="w-9 h-9 rounded-xl bg-[#C6DCF3] hover:bg-[#B3D0EE] text-[#18529B] flex items-center justify-center transition-colors shadow-2xs"
            >
              <XIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* ============================================================== */}
        {/* BOTTOM BAR: COPYRIGHT & LEGAL                                  */}
        {/* ============================================================== */}
        <div className="pt-8 border-t border-[#B8D0E8]/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 font-normal">
          <p>© 2026 Bright Byte Consulting Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="hover:text-slate-800 transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
          </div>
        </div>
      </Container>
    </footer>
  );
};
