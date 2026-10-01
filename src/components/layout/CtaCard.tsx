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
    <section className={`w-full max-w-6xl mx-auto px-4 sm:px-6 my-12 sm:my-16 ${className}`}>
      <div className="relative overflow-hidden rounded-[32px] bg-gradient-to-r from-[#175094] via-[#1A5AA1] to-[#2069BD] px-6 py-12 sm:px-12 sm:py-16 text-center text-white shadow-xl shadow-blue-900/10">
        {/* Subtle decorative background glow circles */}
        <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none blur-xl" />
        <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-white/5 pointer-events-none blur-xl" />

        <div className="relative z-10 max-w-3xl mx-auto space-y-4">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold tracking-tight text-white leading-tight">
            Ready to build something great?
          </h2>
          <p className="text-blue-100 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
            Book a free 30-minute consultation. We’ll listen to your goals and tell you honestly how we can help. No pitch, no pressure.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Button
              variant="white"
              size="lg"
              rounded="full"
              onClick={onOpenConsultation}
              iconRight={<ArrowRight className="w-4 h-4 ml-1 text-[#18529B]" />}
              className="w-full sm:w-auto shadow-md font-semibold text-sm px-8 py-3.5 bg-white text-[#18529B] hover:bg-blue-50"
            >
              Book a Free Call
            </Button>
            <Button
              variant="whiteOutline"
              size="lg"
              rounded="full"
              onClick={onOpenCalendly || onOpenConsultation}
              iconLeft={<Calendar className="w-4 h-4 text-white/90 mr-1" />}
              className="w-full sm:w-auto border-white/60 hover:bg-white/10 text-white font-medium text-sm px-8 py-3.5"
            >
              Schedule on Calendly
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

