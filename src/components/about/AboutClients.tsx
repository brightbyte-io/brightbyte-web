import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Container } from '../layout/Container';

// Exact SVG Image for HexLink Brand Icon matching Frame 2121455059.png
const hexLinkImage = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 30' fill='none'><g stroke='%234B5563' stroke-width='2.4' stroke-linecap='round' stroke-linejoin='round'><path d='M13 5H7.5L3 13L7.5 21H13'/><path d='M20.5 21H26L30.5 13L26 5H20.5'/><path d='M11 13H22.5'/></g><text x='42' y='20.5' fill='%234B5563' font-family='system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif' font-size='16' font-weight='600' letter-spacing='-0.01em'>Brand Icon</text></svg>`;

// Exact SVG Image for Overlapping Circles Brand Icon matching Frame 2121455059.png
const circlesImage = `data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 160 30' fill='none'><g stroke='%234B5563' stroke-width='2.4'><circle cx='15' cy='13' r='10.5'/><circle cx='28' cy='13' r='10.5'/></g><text x='51' y='20.5' fill='%234B5563' font-family='system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, sans-serif' font-size='16' font-weight='600' letter-spacing='-0.01em'>Brand Icon</text></svg>`;

interface Brand {
  id: number;
  name: string;
  image: string;
}

// Alternating brands matching Frame 2121455059.png
const BASE_BRANDS: Brand[] = [
  { id: 1, name: 'Brand Icon', image: hexLinkImage },
  { id: 2, name: 'Brand Icon', image: circlesImage },
  { id: 3, name: 'Brand Icon', image: hexLinkImage },
  { id: 4, name: 'Brand Icon', image: circlesImage },
  { id: 5, name: 'Brand Icon', image: hexLinkImage },
  { id: 6, name: 'Brand Icon', image: circlesImage },
];

export const AboutClients: React.FC = () => {
  // Desktop sliding position (in index steps)
  const [currentIndex, setCurrentIndex] = useState(0);
  // Mobile single active index
  const [mobileIndex, setMobileIndex] = useState(0);

  // Mouse drag state for cursor interactions
  const isDragging = useRef(false);
  const dragStartX = useRef(0);
  const dragDistance = useRef(0);
  const [dragOffset, setDragOffset] = useState(0);

  // Move forward by cursor click
  const moveForward = useCallback(() => {
    setCurrentIndex((prev) => prev + 1);
    setMobileIndex((prev) => (prev + 1) % BASE_BRANDS.length);
  }, []);

  // Move backward by cursor click
  const moveBackward = useCallback(() => {
    setCurrentIndex((prev) => prev - 1);
    setMobileIndex((prev) => (prev - 1 + BASE_BRANDS.length) % BASE_BRANDS.length);
  }, []);

  // Mouse cursor dragging handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    dragStartX.current = e.clientX;
    dragDistance.current = 0;
    setDragOffset(0);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const diff = e.clientX - dragStartX.current;
    dragDistance.current = Math.abs(diff);
    setDragOffset(diff);
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    isDragging.current = false;
    const diff = e.clientX - dragStartX.current;
    if (diff < -30) {
      moveForward();
    } else if (diff > 30) {
      moveBackward();
    }
    setDragOffset(0);
  };

  const handleMouseLeave = () => {
    if (isDragging.current) {
      isDragging.current = false;
      setDragOffset(0);
    }
  };

  // Cursor click handler on track: click right side to move forward, left side to move backward
  const handleTrackClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // If it was a drag, don't trigger click
    if (dragDistance.current > 10) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    if (clickX > rect.width / 2) {
      moveForward();
    } else {
      moveBackward();
    }
  };

  // Touch handlers for mobile swipe
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - touchStartX.current;
    if (diff < -30) moveForward();
    else if (diff > 30) moveBackward();
  };

  // Seamless repeated array for endless smooth scrolling
  const repeatedBrands = [
    ...BASE_BRANDS,
    ...BASE_BRANDS,
    ...BASE_BRANDS,
    ...BASE_BRANDS,
  ];

  // Modulo normalization for the transform offset
  const normalizedIndex = ((currentIndex % BASE_BRANDS.length) + BASE_BRANDS.length) % BASE_BRANDS.length;

  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-white border-b border-slate-100 select-none">
      <Container>
        {/* ============================================================== */}
        {/* SECTION HEADER                                                 */}
        {/* Exactly matching Frame 2121455059.png                          */}
        {/* ============================================================== */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-20 space-y-3.5">
          <span className="inline-block text-xs sm:text-[13px] font-extrabold uppercase tracking-widest text-[#18529B]">
            OUR CLIENTS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-[46px] font-extrabold text-slate-950 tracking-tight leading-[1.16]">
            Only the best choose to work<br className="hidden sm:inline" /> with BrightByte
          </h2>
        </div>

        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): SAME ROW                     */}
        {/* Pure seamless design matching Frame 2121455059.png             */}
        {/* NO arrows - moves by cursor click & drag forward or backward   */}
        {/* ============================================================== */}
        <div className="hidden md:block relative w-full">
          {/* Left & Right gradient edge fades matching Frame 2121455059.png */}
          <div className="absolute left-0 top-0 bottom-0 w-24 lg:w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 lg:w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Clean row track: click right to move forward, click left to move backward, or drag */}
          <div
            onClick={handleTrackClick}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            className="overflow-hidden py-4 cursor-pointer"
            title="Click or drag to move forward / backward"
          >
            <div
              className="flex items-center gap-16 lg:gap-24 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]"
              style={{
                transform: `translateX(calc(-${(normalizedIndex + BASE_BRANDS.length) * 220}px + ${dragOffset}px))`,
              }}
            >
              {repeatedBrands.map((brand, idx) => (
                <div
                  key={`${brand.id}-${idx}`}
                  className="shrink-0 flex items-center justify-center transition-transform hover:scale-105"
                >
                  {/* Brand icon rendered strictly as an image */}
                  <img
                    src={brand.image}
                    alt={brand.name}
                    className="h-8 w-auto max-w-[170px] object-contain select-none pointer-events-none"
                    draggable={false}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px): SHOW ONE BY ONE                          */}
        {/* Requirement: "only in bleow 768 show one by one"                 */}
        {/* NO arrows - click or swipe to move forward / backward           */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-4 max-w-xs mx-auto select-none pt-2">
          {/* ACTIVE BRAND SHOWN ONE BY ONE AS CLEAN IMAGE */}
          <div
            onClick={moveForward}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="flex items-center justify-center py-6 min-h-[70px] cursor-pointer active:scale-95 transition-transform"
          >
            <img
              src={BASE_BRANDS[mobileIndex].image}
              alt={BASE_BRANDS[mobileIndex].name}
              className="h-8 w-auto max-w-[190px] object-contain select-none pointer-events-none"
              draggable={false}
            />
          </div>

          {/* Indicator dots for mobile navigation */}
          <div className="flex items-center justify-center gap-1.5">
            {BASE_BRANDS.map((brand, idx) => (
              <button
                key={brand.id}
                onClick={() => setMobileIndex(idx)}
                aria-label={`Go to client ${idx + 1}`}
                className={`transition-all rounded-full h-1.5 cursor-pointer ${
                  mobileIndex === idx
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
