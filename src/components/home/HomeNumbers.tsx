import { MainHeading } from '../ui/MainHeading';
import React, { useState, useEffect, useRef } from 'react';
import { Container } from '../layout/Container';

interface StatItem {
  target: number;
  suffix: string;
  label: string;
}

const STATS: StatItem[] = [
  { target: 50, suffix: '+', label: 'Projects Shipped' },
  { target: 95, suffix: '%', label: 'Client Retention Rate' },
  { target: 2, suffix: '\u00D7', label: 'Avg. Velocity Gain' },
  { target: 30, suffix: '%', label: 'Avg. Cost Reduction' },
];

/**
 * Custom hook to smoothly count up from 1 to target number when triggered
 */
const useCountUp = (target: number, duration: number = 1600, trigger: boolean = false) => {
  const [count, setCount] = useState<number>(1);

  useEffect(() => {
    if (!trigger) return;

    let startTimestamp: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      
      // Smooth easeOutCubic curve for organic acceleration & deceleration
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(1 + easeProgress * (target - 1));
      
      setCount(current);

      if (progress < 1) {
        animationFrameId = window.requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    animationFrameId = window.requestAnimationFrame(step);

    return () => {
      if (animationFrameId) window.cancelAnimationFrame(animationFrameId);
    };
  }, [trigger, target, duration]);

  return count;
};

const StatCard: React.FC<{ stat: StatItem; isVisible: boolean }> = ({ stat, isVisible }) => {
  const count = useCountUp(stat.target, 1600, isVisible);

  return (
    <div className="bg-white rounded-[22px] min-h-[160px] lg:min-h-[186px] py-8 px-4 lg:px-6 border-t-[3px] border-t-[#1E6099] shadow-[0_16px_36px_rgba(0,0,0,0.12)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center space-y-2 group">
      {/* Reduced thickness to font-semibold */}
      <div className="text-4xl sm:text-[46px] lg:text-[60px] font-semibold text-[#1E6099] tabular-nums tracking-tight leading-none group-hover:scale-105 transition-transform duration-300">
        {isVisible ? count : 1}
        {stat.suffix}
      </div>
      <div className="text-xs sm:text-sm lg:text-[18px] font-normal text-[#666666] leading-snug">
        {stat.label}
      </div>
    </div>
  );
};

export const HomeNumbers: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Trigger count-up animation when first entering viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate the first time section is reached
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="pt-14 pb-24 sm:pt-18 sm:pb-36 lg:pt-20 lg:pb-[230px] bg-white bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: "linear-gradient(to bottom, #fff 0%, rgba(255,255,255,0.85) 10%, rgba(255,255,255,0) 38%), url('/images/home-counter-backround.svg')",
        backgroundSize: '100% 100%, cover',
        backgroundPosition: 'center bottom',
      }}
    >
      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <MainHeading headingKey="HomeNumbers" as="h2" variant="section" className="text-3xl sm:text-4xl lg:text-[44px] font-semibold text-[#0A0A0A] tracking-tight leading-tight" />
        </div>

        {/* ============================================================== */}
        {/* STATS GRID: 2 cols on mobile, 4 cols on desktop                */}
        {/* All numbers count up smoothly from 1 upon scroll into view      */}
        {/* ============================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-[1140px] mx-auto">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </Container>
    </section>
  );
};
