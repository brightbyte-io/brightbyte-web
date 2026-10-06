import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

export interface CtaCardProps {
  onOpenConsultation?: () => void;
  onOpenCalendly?: () => void;
  className?: string;
}

export const CtaCard: React.FC<CtaCardProps> = ({
  onOpenConsultation,
  onOpenCalendly,
  className = '',
}) => {
  return (
    <section className={`w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-12 sm:my-16 lg:my-20 ${className}`}>
      <div className="relative overflow-hidden rounded-[24px] sm:rounded-[32px] bg-[#1E6099] px-6 py-10 sm:px-10 sm:py-12 lg:py-14 min-h-[280px] sm:min-h-[304px] flex items-center justify-center text-center text-white shadow-xl shadow-blue-900/10">
        {/* Background SVG from /images/ctacard-background.svg */}
        <img
          src="/images/ctacard-background.svg"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none select-none -z-0"
          draggable={false}
        />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h2 className="text-2xl sm:text-3xl lg:text-[40px] font-extrabold tracking-tight text-white leading-tight">
            Ready to build something great?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute consultation. We’ll listen to your goals and tell you honestly how we can help. No pitch, no pressure.
          </p>

          <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              variant="white"
              size="lg"
              rounded="full"
              onClick={onOpenConsultation}
              iconRight={<ArrowRight className="w-4 h-4 ml-1 text-[#18529B]" />}
              className="w-full sm:w-auto shadow-md font-semibold text-sm px-8 py-3.5 bg-white text-[#18529B] hover:bg-blue-50 cursor-pointer"
            >
              Book a Free Call
            </Button>
            <Button
              variant="whiteOutline"
              size="lg"
              rounded="full"
              onClick={onOpenCalendly || onOpenConsultation}
              iconLeft={<Calendar className="w-4 h-4 text-white/90 mr-1" />}
              className="w-full sm:w-auto border-white/60 hover:bg-white/10 text-white font-medium text-sm px-8 py-3.5 cursor-pointer"
            >
              Schedule on Calendly
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
