import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

// Double quotation mark icon using /images/quote-mark-icon.svg
const QuoteMarkIcon: React.FC<{ className?: string; isMuted?: boolean }> = ({
  className = 'w-8 h-8',
  isMuted = false,
}) => (
  <img
    src="/images/quote-mark-icon.svg"
    alt="Quote"
    className={`${className} object-contain transition-opacity duration-300 select-none ${
      isMuted ? 'opacity-40' : 'opacity-100'
    }`}
    loading="lazy"
  />
);

export const HomeReviews: React.FC = () => {
  const reviews = [
    {
      id: 'rev-1',
      quote:
        'Impressed with the seamless integration and effective security features. I highly recommend Bright Byte Consulting for bringing your vision to life.',
      author: 'John Smith',
      location: 'Yorkshire, UK',
    },
    {
      id: 'rev-2',
      quote:
        'The engineering quality delivered by BrightByte was extraordinary. They took over our complex cloud architecture and doubled our deployment velocity in less than 3 months.',
      author: 'Sarah Jenkins',
      location: 'Toronto, Canada',
    },
    {
      id: 'rev-3',
      quote:
        'BrightByte acted as true technical partners rather than an outsourced agency. Their team worked flawlessly across timezones to ship our flagship mobile app.',
      author: 'Michael Chang',
      location: 'London, UK',
    },
    {
      id: 'rev-4',
      quote:
        'From supplier sourcing to custom ERP deployment, BrightByte executed with extreme precision. Our operational overhead dropped by 30% in the first quarter.',
      author: 'David Rodriguez',
      location: 'Austin, TX',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [animDirection, setAnimDirection] = useState<'next' | 'prev' | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);
  const [mobileAnimClass, setMobileAnimClass] = useState('opacity-100 scale-100 translate-x-0');

  const centerCardRef = useRef<HTMLDivElement>(null);
  const [stepPx, setStepPx] = useState(500);

  // Measure card step (card width + 20px gap) for exact sliding physics matching Figma
  useEffect(() => {
    const updateDimensions = () => {
      if (centerCardRef.current) {
        const width = centerCardRef.current.offsetWidth;
        const gap = 20;
        setStepPx(width + gap);
      }
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const total = reviews.length;

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimDirection('next');

    // Mobile animation: old goes back
    setMobileAnimClass('opacity-0 scale-95 -translate-x-8');

    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % total);
      setAnimDirection(null);
      setIsAnimating(false);

      // Mobile animation: new comes forward from right
      setMobileAnimClass('opacity-0 scale-95 translate-x-8');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setMobileAnimClass('opacity-100 scale-100 translate-x-0 transition-all duration-300 ease-out');
        });
      });
    }, 450);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setAnimDirection('prev');

    // Mobile animation: old goes back
    setMobileAnimClass('opacity-0 scale-95 translate-x-8');

    setTimeout(() => {
      setCurrentIndex((prev) => (prev === 0 ? total - 1 : prev - 1));
      setAnimDirection(null);
      setIsAnimating(false);

      // Mobile animation: new comes forward from left
      setMobileAnimClass('opacity-0 scale-95 -translate-x-8');
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setMobileAnimClass('opacity-100 scale-100 translate-x-0 transition-all duration-300 ease-out');
        });
      });
    }, 450);
  };

  // 5 slots around currentIndex: [-2, -1, 0, 1, 2]
  const slotIndices = [
    (currentIndex - 2 + total * 2) % total,
    (currentIndex - 1 + total * 2) % total,
    currentIndex,
    (currentIndex + 1) % total,
    (currentIndex + 2) % total,
  ];

  const getTrackTransform = () => {
    if (animDirection === 'next') {
      return `translateX(-${stepPx}px)`;
    }
    if (animDirection === 'prev') {
      return `translateX(${stepPx}px)`;
    }
    return 'translateX(0px)';
  };

  return (
    <section className="pt-6 pb-8 sm:pt-8 sm:pb-10 lg:pt-10 lg:pb-12 bg-white overflow-hidden relative">
      <Container>
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Single line title, exact typography matching Figma              */}
        {/* ============================================================== */}
        <div className="max-w-4xl mx-auto text-center mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-wider text-[#18529B]">
            CLIENT REVIEWS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-slate-950 tracking-tight leading-snug whitespace-normal sm:whitespace-nowrap">
            Our work has got people vouching for us!
          </h2>
        </div>
      </Container>

      {/* ================================================================ */}
      {/* DESKTOP & TABLET VIEW (>= 768px): MATCHING FIGMA SCREENSHOT      */}
      {/* Active card translated down by 18px, generous height for 4 lines */}
      {/* ================================================================ */}
      <div className="hidden md:block relative w-full overflow-hidden py-3">
        {/* Left and right smooth white fade overlays matching Figma */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 lg:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

        {/* Outer navigation buttons placed on the left & right sides matching Figma */}
        <button
          onClick={handlePrev}
          disabled={isAnimating}
          aria-label="Previous client review"
          className="absolute left-3 sm:left-6 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-700 hover:text-[#18529B] hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2]" />
        </button>

        <button
          onClick={handleNext}
          disabled={isAnimating}
          aria-label="Next client review"
          className="absolute right-3 sm:right-6 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-white shadow-md border border-slate-100 flex items-center justify-center text-slate-700 hover:text-[#18529B] hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
        >
          <ChevronRight className="w-5 h-5 stroke-[2]" />
        </button>

        {/* Sliding carousel track */}
        <div className="relative max-w-[1440px] mx-auto flex items-center justify-center">
          <div
            className="flex items-start justify-center gap-5 will-change-transform py-6"
            style={{
              transform: getTrackTransform(),
              transition: animDirection
                ? 'transform 450ms cubic-bezier(0.22, 1, 0.36, 1)'
                : 'none',
            }}
          >
            {slotIndices.map((reviewIdx, slotPos) => {
              const review = reviews[reviewIdx];

              // Target active state during animation
              let isSlotActive = slotPos === 2 && !animDirection;
              if (animDirection === 'next' && slotPos === 3) isSlotActive = true;
              if (animDirection === 'prev' && slotPos === 1) isSlotActive = true;

              return (
                <div
                  key={`${review.id}-${slotPos}`}
                  ref={slotPos === 2 ? centerCardRef : undefined}
                  onClick={() => {
                    if (slotPos < 2) handlePrev();
                    if (slotPos > 2) handleNext();
                  }}
                  className={`w-[440px] md:w-[470px] lg:w-[480px] h-[250px] sm:h-[255px] shrink-0 bg-[#EEF2F5] rounded-[24px] p-6 sm:px-7 sm:py-6 flex flex-col justify-between border border-slate-200/40 transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isSlotActive
                      ? 'cursor-default translate-y-[18px]'
                      : 'cursor-pointer hover:bg-[#E9EFF4] translate-y-0'
                  }`}
                >
                  <div className="space-y-3">
                    {/* Double quotation mark icon */}
                    <QuoteMarkIcon
                      isMuted={!isSlotActive}
                      className="w-8 h-8"
                    />

                    {/* Review quote text: formatted with generous line-height so 4-line quotes never crowd the author */}
                    <p
                      className={`text-sm sm:text-[14.5px] leading-[1.55] tracking-normal transition-colors duration-450 ${
                        isSlotActive
                          ? 'text-slate-800 font-normal'
                          : 'text-[#8C9BA8] font-normal line-clamp-3'
                      }`}
                    >
                      {review.quote}
                    </p>
                  </div>

                  {/* Author Name and Location */}
                  <div className="pt-2">
                    <h4
                      className={`text-sm sm:text-[15px] font-bold transition-colors duration-450 ${
                        isSlotActive ? 'text-slate-950' : 'text-[#8C9BA8]'
                      }`}
                    >
                      {review.author}
                    </h4>
                    <p
                      className={`text-xs font-normal mt-0.5 transition-colors duration-450 ${
                        isSlotActive ? 'text-slate-500' : 'text-[#A3B3C2]'
                      }`}
                    >
                      {review.location}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ================================================================ */}
      {/* MOBILE VIEW (< 768px): SINGLE CARD WITH CONTROLS                 */}
      {/* ================================================================ */}
      <div className="md:hidden px-4 max-w-sm mx-auto space-y-4">
        {/* Header with counter and Prev/Next buttons */}
        <div className="flex items-center justify-between px-1">
          <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
            Review {currentIndex + 1} of {reviews.length}
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={isAnimating}
              aria-label="Previous review"
              className="w-9 h-9 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer border border-slate-200 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4 stroke-[2]" />
            </button>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              aria-label="Next review"
              className="w-9 h-9 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] flex items-center justify-center transition-colors cursor-pointer disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4 stroke-[2]" />
            </button>
          </div>
        </div>

        {/* ACTIVE CARD MATCHING FIGMA STYLING */}
        <div className="relative overflow-hidden min-h-[235px] flex items-center justify-center">
          <div
            className={`w-full bg-[#EEF2F5] rounded-[24px] p-6 shadow-sm border border-slate-200/40 flex flex-col justify-between min-h-[235px] space-y-4 transition-all duration-300 ease-out will-change-transform ${mobileAnimClass}`}
          >
            <div className="space-y-3">
              <QuoteMarkIcon className="w-8 h-8" />
              <p className="text-sm text-slate-800 leading-relaxed font-normal">
                {reviews[currentIndex].quote}
              </p>
            </div>
            <div>
              <h4 className="text-sm font-bold text-slate-950">
                {reviews[currentIndex].author}
              </h4>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                {reviews[currentIndex].location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
