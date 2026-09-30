import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

// Exact double quotation mark SVG matching Group 1171278493.png
const QuoteMarkIcon: React.FC<{ className?: string; isMuted?: boolean }> = ({
  className = 'w-12 h-9',
  isMuted = false,
}) => (
  <svg
    viewBox="0 0 46 36"
    className={`${className} ${isMuted ? 'text-[#82A2C6]' : 'text-[#18529B]'} fill-current transition-colors duration-450`}
    aria-hidden="true"
  >
    <path d="M13.2 0C5.9 0 0 5.9 0 13.2c0 7.3 4.4 13.3 10.9 14.8l-2 8h7.2l3.3-10.1c.8-2.3 1.3-4.8 1.3-7.5C20.7 5.9 17.3 0 13.2 0zm25.3 0C31.2 0 25.3 5.9 25.3 13.2c0 7.3 4.4 13.3 10.9 14.8l-2 8h7.2l3.3-10.1c.8-2.3 1.3-4.8 1.3-7.5C46 5.9 42.6 0 38.5 0z" />
  </svg>
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
  const [stepPx, setStepPx] = useState(628);

  // Measure card step (card width + gap) for exact sliding physics
  useEffect(() => {
    const updateDimensions = () => {
      if (centerCardRef.current) {
        const width = centerCardRef.current.offsetWidth;
        const gap = window.innerWidth >= 1024 ? 32 : 24;
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

    // Mobile animation: old goes back (shrinks & slides left)
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

    // Mobile animation: old goes back (shrinks & slides right)
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
    <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-100 overflow-hidden relative select-none">
      <Container>
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* ============================================================== */}
        <div className="max-w-3xl mx-auto text-center mb-12 sm:mb-16 space-y-2.5">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#18529B]">
            CLIENT REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-slate-950 tracking-tight leading-tight">
            Our work has got people vouching for us!
          </h2>
        </div>
      </Container>

      {/* ================================================================ */}
      {/* DESKTOP & TABLET VIEW (>= 768px): MATCHING Group 1171278493.png   */}
      {/* Equal-height solid cards with active center & muted side cards   */}
      {/* ================================================================ */}
      <div className="hidden md:block relative w-full overflow-hidden py-3">
        <div className="relative max-w-[1440px] mx-auto flex items-center justify-center">
          {/* FLOATING NAVIGATION BUTTONS ON JUNCTIONS */}
          <button
            onClick={handlePrev}
            disabled={isAnimating}
            aria-label="Previous client review"
            className="absolute left-[calc(50%-280px)] lg:left-[calc(50%-325px)] top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:text-[#18529B] hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={handleNext}
            disabled={isAnimating}
            aria-label="Next client review"
            className="absolute right-[calc(50%-280px)] lg:right-[calc(50%-325px)] top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-white shadow-lg border border-slate-100 flex items-center justify-center text-slate-700 hover:text-[#18529B] hover:scale-105 active:scale-95 transition-all cursor-pointer disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* SLIDING CAROUSEL TRACK */}
          <div
            className="flex items-center justify-center gap-6 lg:gap-8 will-change-transform"
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
                  className={`w-[540px] lg:w-[600px] h-[340px] shrink-0 bg-[#EEF2F6] rounded-[32px] p-9 sm:p-10 lg:p-12 flex flex-col justify-between border border-slate-200/50 transition-all duration-450 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isSlotActive
                      ? 'cursor-default shadow-xs'
                      : 'cursor-pointer hover:bg-[#E9EFF5]'
                  }`}
                >
                  <div className="space-y-5">
                    {/* Double quotation mark icon matching Group 1171278493.png */}
                    <QuoteMarkIcon
                      isMuted={!isSlotActive}
                      className="w-12 h-9"
                    />

                    {/* Review quote text: exactly 3 lines in center card */}
                    <p
                      className={`text-lg sm:text-[19px] lg:text-[20px] leading-[1.65] tracking-[-0.01em] transition-colors duration-450 ${
                        isSlotActive
                          ? 'text-slate-900 font-normal'
                          : 'text-[#7A8A9C] font-normal line-clamp-3'
                      }`}
                    >
                      {review.quote}
                    </p>
                  </div>

                  {/* Author Name and Location */}
                  <div className="pt-4">
                    <h4
                      className={`text-base sm:text-[17px] font-bold transition-colors duration-450 ${
                        isSlotActive ? 'text-slate-950' : 'text-[#617284]'
                      }`}
                    >
                      {review.author}
                    </h4>
                    <p
                      className={`text-xs sm:text-sm font-normal mt-0.5 transition-colors duration-450 ${
                        isSlotActive ? 'text-slate-500' : 'text-[#93A2B3]'
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

        {/* Carousel indicator dots */}
        <div className="flex items-center justify-center gap-2 pt-8">
          {reviews.map((rev, idx) => (
            <button
              key={rev.id}
              onClick={() => {
                if (isAnimating || currentIndex === idx) return;
                if (idx > currentIndex) handleNext();
                else handlePrev();
              }}
              aria-label={`Go to review ${idx + 1}`}
              className={`transition-all rounded-full h-1.5 cursor-pointer ${
                currentIndex === idx
                  ? 'w-7 bg-[#18529B]'
                  : 'w-2 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================================================================ */}
      {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
      {/* Requirement: "only in bleow 768 show one by one"                 */}
      {/* ================================================================ */}
      <div className="md:hidden px-4 max-w-md mx-auto space-y-5">
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
              className="w-8 h-8 rounded-full bg-white text-slate-700 shadow-xs hover:bg-slate-50 flex items-center justify-center transition-colors cursor-pointer border border-slate-200 disabled:opacity-50"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={handleNext}
              disabled={isAnimating}
              aria-label="Next review"
              className="w-8 h-8 rounded-full bg-[#18529B] text-white shadow-xs hover:bg-[#133F77] flex items-center justify-center transition-colors cursor-pointer disabled:opacity-50"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ACTIVE CARD SHOWN ONE BY ONE MATCHING Group 1171278493.png */}
        <div className="relative overflow-hidden min-h-[280px] flex items-center justify-center">
          <div
            className={`w-full bg-[#EEF2F6] rounded-[32px] p-8 shadow-sm border border-slate-200/50 flex flex-col justify-between min-h-[280px] space-y-6 transition-all duration-300 ease-out will-change-transform ${mobileAnimClass}`}
          >
            <div className="space-y-4">
              <QuoteMarkIcon className="w-11 h-8" />
              <p className="text-base text-slate-900 leading-relaxed font-normal">
                {reviews[currentIndex].quote}
              </p>
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-950">
                {reviews[currentIndex].author}
              </h4>
              <p className="text-xs text-slate-500 font-normal mt-0.5">
                {reviews[currentIndex].location}
              </p>
            </div>
          </div>
        </div>

        {/* Indicator dots for mobile navigation */}
        <div className="flex items-center justify-center gap-1.5 pt-1">
          {reviews.map((rev, idx) => (
            <button
              key={rev.id}
              onClick={() => {
                if (isAnimating || currentIndex === idx) return;
                if (idx > currentIndex) handleNext();
                else handlePrev();
              }}
              aria-label={`Go to review ${idx + 1}`}
              className={`transition-all rounded-full h-1.5 cursor-pointer ${
                currentIndex === idx
                  ? 'w-6 bg-[#18529B]'
                  : 'w-1.5 bg-slate-300 hover:bg-slate-400'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
