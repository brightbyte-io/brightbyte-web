import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';
import { Button } from '../ui/Button';

export interface CtaCardProps {
  onOpenConsultation?: () => void;
  onOpenCalendly?: () => void;
}

export const CtaCard: React.FC<CtaCardProps> = ({
  onOpenConsultation,
  onOpenCalendly,
}) => {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 sm:px-6 my-16 sm:my-20">
      <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#175094] via-[#1A5AA1] to-[#2069BD] px-6 py-14 sm:px-12 sm:py-16 text-center text-white shadow-xl">
        {/* Subtle decorative background circles */}
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
              iconRight={<ArrowRight className="w-4 h-4" />}
              className="w-full sm:w-auto shadow-md"
            >
              Book a Free Call
            </Button>
            <Button
              variant="whiteOutline"
              size="lg"
              rounded="full"
              onClick={onOpenCalendly}
              iconLeft={<Calendar className="w-4 h-4 text-white/80" />}
              className="w-full sm:w-auto"
            >
              Schedule on Calendly
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
