import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Container } from '../layout/Container';
import { useToast } from '../ui/Toast';

export interface ContactCalendlyBannerSectionProps {
  onOpenCalendly?: () => void;
}

export const ContactCalendlyBannerSection: React.FC<ContactCalendlyBannerSectionProps> = ({
  onOpenCalendly,
}) => {
  const { addToast } = useToast();

  const handleBookClick = () => {
    if (onOpenCalendly) {
      onOpenCalendly();
    } else {
      addToast({
        type: 'info',
        title: 'Calendly Consultation',
        description: 'Opening instant 15-minute discovery booking calendar.',
      });
    }
  };

  return (
    <section className="relative py-12 sm:py-16 bg-white overflow-hidden select-none">
      <Container>
        {/* ============================================================== */}
        {/* BANNER CARD CONTAINER: EXACT MATCH TO Frame 2121455058.png     */}
        {/* ============================================================== */}
        <div className="relative w-full rounded-[28px] sm:rounded-[34px] bg-[#2573B7] text-white overflow-hidden px-7 py-10 sm:px-12 sm:py-12 lg:px-16 lg:py-14 shadow-[0_12px_36px_rgba(24,82,155,0.18)]">
          {/* Subtle darker blue watermark ring on the right matching Frame 2121455058.png */}
          <div
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-[440px] h-[440px] rounded-full border-[54px] border-black/10 pointer-events-none"
            aria-hidden="true"
          />
          <div
            className="absolute -right-36 top-1/2 -translate-y-1/2 w-[580px] h-[580px] rounded-full border-[36px] border-white/[0.04] pointer-events-none"
            aria-hidden="true"
          />

          {/* DESKTOP & TABLET VIEW (>= 768px): Row Layout */}
          <div className="relative z-10 hidden md:flex items-center justify-between gap-10">
            {/* Left Content */}
            <div className="space-y-3 max-w-2xl">
              <h3 className="text-3xl sm:text-[36px] lg:text-[40px] font-bold text-white tracking-tight leading-[1.12]">
                Prefer to skip the form?
              </h3>
              <p className="text-[15px] sm:text-[17px] text-white/90 font-normal leading-relaxed">
                Book a 15-minute slot directly on Calendly. We will help you create a plan tailored to your business goals and budget. No pitch, no pressure.
              </p>
            </div>

            {/* Right Action Button */}
            <div className="shrink-0">
              <button
                onClick={handleBookClick}
                className="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#18529B] font-semibold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <span>Book on Calendly</span>
                <span className="text-lg leading-none">→</span>
              </button>
            </div>
          </div>

          {/* MOBILE VIEW (< 768px: "only in bleow 768 show one by one") */}
          <div className="relative z-10 md:hidden flex flex-col space-y-5">
            {/* Item 1: Heading */}
            <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              Prefer to skip the form?
            </h3>

            {/* Item 2: Description */}
            <p className="text-sm sm:text-base text-white/90 font-normal leading-relaxed">
              Book a 15-minute slot directly on Calendly. We will help you create a plan tailored to your business goals and budget. No pitch, no pressure.
            </p>

            {/* Item 3: Button */}
            <div className="pt-2">
              <button
                onClick={handleBookClick}
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-[#18529B] font-semibold text-sm sm:text-base px-6 py-3.5 rounded-full shadow-md transition-all cursor-pointer whitespace-nowrap active:scale-[0.98]"
              >
                <span>Book on Calendly</span>
                <span className="text-lg leading-none">→</span>
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
