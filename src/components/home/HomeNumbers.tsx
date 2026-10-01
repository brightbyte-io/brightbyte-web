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
  { target: 2, suffix: '×', label: 'Avg. Velocity Gain' },
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
    <div className="bg-white rounded-[22px] sm:rounded-[26px] py-7 px-4 sm:py-10 sm:px-6 border-t-4 border-t-[#18529B] border-x border-b border-slate-100 shadow-[0_10px_28px_rgba(24,82,155,0.06),0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center flex flex-col items-center justify-center space-y-2 group">
      {/* Reduced thickness to font-semibold */}
      <div className="text-4xl sm:text-[46px] lg:text-[50px] font-semibold text-[#18529B] tabular-nums tracking-tight leading-none group-hover:scale-105 transition-transform duration-300">
        {isVisible ? count : 1}
        {stat.suffix}
      </div>
      <div className="text-xs sm:text-sm font-medium text-slate-600 leading-snug">
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
      className="py-14 sm:py-18 lg:py-20 bg-gradient-to-b from-[#EFF6FD] via-[#E6F1FD] to-[#EFF6FD] relative overflow-hidden"
    >
      {/* Background ambient curve */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[350px] bg-white/50 blur-3xl pointer-events-none rounded-full" />

      <Container className="relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-extrabold text-slate-950 tracking-tight leading-tight">
            It's all there in the numbers!
          </h2>
        </div>

        {/* ============================================================== */}
        {/* STATS GRID: 2 cols on mobile, 4 cols on desktop                */}
        {/* All numbers count up smoothly from 1 upon scroll into view      */}
        {/* ============================================================== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
          {STATS.map((stat) => (
            <StatCard key={stat.label} stat={stat} isVisible={isVisible} />
          ))}
        </div>
      </Container>
    </section>
  );
};
