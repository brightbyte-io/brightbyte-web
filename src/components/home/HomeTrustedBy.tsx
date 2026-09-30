import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Container } from '../layout/Container';

// Helper to generate crisp SVG logo images
const createBrandSvg = (
  type: 'hex' | 'circles',
  isLight: boolean = false
) => {
  const strokeColor = isLight ? '%2394A3B8' : '%23475569';
  const textColor = isLight ? '%2394A3B8' : '%23334155';

  let iconSvg = '';
  if (type === 'hex') {
    iconSvg = `<path d='M13 5H7.5L3 13L7.5 21H13' stroke='${strokeColor}' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'/><path d='M21 21H26.5L31 13L26.5 5H21' stroke='${strokeColor}' stroke-width='2.6' stroke-linecap='round' stroke-linejoin='round'/><path d='M11 13H23' stroke='${strokeColor}' stroke-width='2.6' stroke-linecap='round'/>`;
  } else {
    iconSvg = `<circle cx='16' cy='13' r='11' stroke='${strokeColor}' stroke-width='2.6'/><circle cx='30' cy='13' r='11' stroke='${strokeColor}' stroke-width='2.6'/>`;
  }

  const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 170 30' fill='none'><g>${iconSvg}</g><text x='48' y='20' fill='${textColor}' font-family='system-ui, -apple-system, sans-serif' font-size='16' font-weight='700' letter-spacing='-0.02em'>Brand Icon</text></svg>`;
  return `data:image/svg+xml;utf8,${svg}`;
};

interface BrandItem {
  id: number;
  name: string;
  type: 'circles' | 'hex';
  isLight?: boolean;
  image: string;
}

const BRANDS: BrandItem[] = [
  { id: 1, name: 'Brand Icon', type: 'circles', isLight: true, image: createBrandSvg('circles', true) },
  { id: 2, name: 'Brand Icon', type: 'hex', isLight: false, image: createBrandSvg('hex', false) },
  { id: 3, name: 'Brand Icon', type: 'circles', isLight: false, image: createBrandSvg('circles', false) },
  { id: 4, name: 'Brand Icon', type: 'hex', isLight: false, image: createBrandSvg('hex', false) },
  { id: 5, name: 'Brand Icon', type: 'circles', isLight: false, image: createBrandSvg('circles', false) },
];

export const HomeTrustedBy: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isDragging = useRef(false);
  const dragStartX = useRef(0);

  const moveForward = useCallback(() => {
    setActiveIndex((prev) => (prev + 1) % BRANDS.length);
  }, []);

  const moveBackward = useCallback(() => {
    setActiveIndex((prev) => (prev - 1 + BRANDS.length) % BRANDS.length);
  }, []);

  // Mouse cursor drag support
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = e.clientX - dragStartX.current;
    if (diff < -30) moveForward();
    else if (diff > 30) moveBackward();
  };

  // Auto-advance one by one every 3.2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      moveForward();
    }, 3200);
    return () => clearInterval(timer);
  }, [moveForward]);

  return (
    <section className="bg-white border-y border-slate-100/90 py-6 md:py-8 lg:py-9 select-none">
      <Container>
        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): ALL IN THE SAME ROW           */}
        {/* Clean, no arrows - click or drag to move forward / backward     */}
        {/* ============================================================== */}
        <div
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="hidden md:flex items-center justify-between gap-6 lg:gap-10 cursor-grab active:cursor-grabbing"
        >
          {/* Left Title: "Trusted by the best" */}
          <div className="shrink-0 pr-4 lg:pr-6">
            <h3 className="text-base lg:text-[18px] font-bold text-slate-700 leading-[1.2] tracking-tight">
              Trusted by<br />the best
            </h3>
          </div>

          {/* Brand Logo Images in the same single row */}
          <div className="flex-1 flex items-center justify-between gap-4 lg:gap-8 overflow-hidden">
            {BRANDS.map((brand, idx) => (
              <div
                key={brand.id}
                onClick={moveForward}
                className={`transition-all duration-300 hover:scale-105 cursor-pointer ${
                  activeIndex === idx ? 'opacity-100 scale-105' : 'opacity-70 hover:opacity-100'
                }`}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="h-7 lg:h-8 w-auto object-contain select-none pointer-events-none"
                  draggable={false}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* ============================================================== */}
        <div className="md:hidden flex flex-col items-center justify-center text-center space-y-3 py-1 select-none">
          {/* Active Brand Item image shown ONE BY ONE without arrows */}
          <div
            onClick={moveForward}
            className="min-h-[58px] flex items-center justify-center px-6 py-2.5 rounded-full bg-slate-50/90 border border-slate-200/80 shadow-2xs w-full max-w-[240px] transition-all duration-300 hover:border-[#18529B] cursor-pointer"
          >
            <img
              src={BRANDS[activeIndex].image}
              alt={BRANDS[activeIndex].name}
              className="h-7 w-auto object-contain select-none pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Indicator dots to slide/switch one by one */}
          <div className="flex items-center justify-center gap-1.5 pt-0.5">
            {BRANDS.map((brand, idx) => (
              <button
                key={brand.id}
                onClick={() => setActiveIndex(idx)}
                aria-label={`Show brand ${idx + 1}`}
                className={`transition-all rounded-full h-1.5 cursor-pointer ${
                  activeIndex === idx
                    ? 'w-6 bg-[#18529B]'
                    : 'w-1.5 bg-slate-300 hover:bg-slate-400'
                }`}
              />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};
