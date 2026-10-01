import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { PageId } from '../../types';

export interface BlogItem {
  id: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
  isFeatured?: boolean;
}

export const BLOG_ITEMS: BlogItem[] = [
  // 1. Featured Top Article matching Frame 1171276730.png
  {
    id: 'guide-to-job-success',
    category: 'HIRING',
    readTime: '4 Min Read',
    title: 'Your Complete Guide to Applying for a Job Successfully',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum, cras venenatis euismod malesuada.',
    image:
      'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80',
    isFeatured: true,
  },
  // 2. Row 1, Col 1
  {
    id: 'ai-transforming-industry',
    category: 'TECHNICAL',
    readTime: '2 Min Read',
    title: 'How AI is transforming the industry that we’re serving in',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus.',
    image:
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80',
  },
  // 3. Row 1, Col 2
  {
    id: 'major-llms-way-forward',
    category: 'TECHNICAL',
    readTime: '2 Min Read',
    title: 'Are the major LLMs really the way forward?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
  },
  // 4. Row 1, Col 3
  {
    id: 'teamwork-dream-work',
    category: 'HIRING',
    readTime: '2 Min Read',
    title: 'Team work makes the dream work... Does it really?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    image:
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80',
  },
  // 5. Row 2, Col 1
  {
    id: 'right-place-to-work',
    category: 'HIRING',
    readTime: '2 Min Read',
    title: 'Is this the right place for me to work?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ac leo nunc. Vestibulum et mauris vel ante finibus maximus.',
    image:
      'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80',
  },
  // 6. Row 2, Col 2
  {
    id: 'could-have-been-an-email',
    category: 'TEAMWORK',
    readTime: '2 Min Read',
    title: 'This surely could have been an email right?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    image:
      'https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?auto=format&fit=crop&w=800&q=80',
  },
  // 7. Row 2, Col 3
  {
    id: 'cargo-shipment-insurance',
    category: 'OEM SOURCING',
    readTime: '2 Min Read',
    title: 'Have you gotten the right kind of insurance for your shipment?',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.',
    image:
      'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80',
  },
];

export interface BlogListSectionProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  searchFilter?: string;
}

export const BlogListSection: React.FC<BlogListSectionProps> = ({
  onNavigate,
  searchFilter = '',
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Mobile active index for screens < 768px ("only in bleow 768 show one by one")
  const [mobileIndex, setMobileIndex] = useState(0);

  // Filter items if user searched
  const items = searchFilter
    ? BLOG_ITEMS.filter(
        (b) =>
          b.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
          b.category.toLowerCase().includes(searchFilter.toLowerCase()) ||
          b.description.toLowerCase().includes(searchFilter.toLowerCase())
      )
    : BLOG_ITEMS;

  const featured = items.find((i) => i.isFeatured) || items[0];
  const gridCards = items.filter((i) => i.id !== featured?.id);

  const nextMobile = () => {
    setMobileIndex((prev) => (prev + 1) % items.length);
  };

  const prevMobile = () => {
    setMobileIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentMobileItem = items[mobileIndex] || items[0];

  return (
    <section className="py-12 sm:py-16 bg-white overflow-hidden">
      <Container>
        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): EXACT MATCH TO Frame 1171276730.png */}
        {/* ============================================================== */}
        <div className="hidden md:block space-y-16 lg:space-y-20">
          {/* 1. TOP FEATURED CARD */}
          {featured && (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center">
              {/* Left: Large Rounded Photo */}
              <div className="md:col-span-7 lg:col-span-8">
                <div
                  onClick={() => onNavigate('blog-post', featured.id)}
                  className="relative aspect-[16/10] sm:aspect-[16/9] rounded-[24px] overflow-hidden bg-slate-100 cursor-pointer group shadow-sm hover:shadow-md transition-shadow"
                >
                  <img
                    src={featured.image}
                    alt={featured.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>

              {/* Right: Category, Title, Description, Read More */}
              <div className="md:col-span-5 lg:col-span-4 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#18529B] block">
                  {featured.category}
                </span>

                <h2
                  onClick={() => onNavigate('blog-post', featured.id)}
                  className="text-2xl sm:text-3xl lg:text-[34px] font-bold text-[#0B1528] tracking-tight leading-[1.18] cursor-pointer hover:text-[#18529B] transition-colors"
                >
                  {featured.title}
                </h2>

                <p className="text-sm sm:text-[15px] text-slate-500 font-normal leading-relaxed line-clamp-4">
                  {featured.description}
                </p>

                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('blog-post', featured.id)}
                    className="inline-block px-6 py-2 rounded-full border border-slate-700/80 hover:border-[#18529B] hover:text-[#18529B] text-slate-800 text-xs font-semibold tracking-wide transition-all cursor-pointer bg-white active:scale-95"
                  >
                    Read more
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* 2. 6-CARD GRID (2 ROWS OF 3 CARDS) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
            {gridCards.map((card) => (
              <div
                key={card.id}
                className="flex flex-col justify-between group space-y-4"
              >
                {/* Image */}
                <div
                  onClick={() => onNavigate('blog-post', card.id)}
                  className="relative aspect-[16/10] rounded-[20px] overflow-hidden bg-slate-100 cursor-pointer shadow-xs group-hover:shadow-md transition-shadow"
                >
                  <img
                    src={card.image}
                    alt={card.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                {/* Category & Read Time Row */}
                <div className="flex items-center justify-between text-xs pt-1">
                  <span className="font-bold uppercase tracking-wider text-[#18529B]">
                    {card.category}
                  </span>
                  <span className="font-medium text-slate-400 text-[11px] sm:text-xs">
                    {card.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3
                  onClick={() => onNavigate('blog-post', card.id)}
                  className="text-lg sm:text-[19px] font-bold text-[#0B1528] leading-snug line-clamp-2 cursor-pointer hover:text-[#18529B] transition-colors"
                >
                  {card.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-[13px] text-slate-500 font-normal leading-relaxed line-clamp-3">
                  {card.description}
                </p>

                {/* Read more button */}
                <div className="pt-2">
                  <button
                    onClick={() => onNavigate('blog-post', card.id)}
                    className="inline-block px-5 py-2 rounded-full border border-slate-700/80 hover:border-[#18529B] hover:text-[#18529B] text-slate-800 text-xs font-semibold tracking-wide transition-all cursor-pointer bg-white active:scale-95"
                  >
                    Read more
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* 3. PAGINATION BAR MATCHING Frame 1171276730.png */}
          <div className="flex items-center justify-end gap-2 pt-6">
            {/* First button « */}
            <button
              onClick={() => setCurrentPage(1)}
              aria-label="First page"
              className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-center text-slate-500 text-sm hover:text-slate-800 transition-colors cursor-pointer"
            >
              <ChevronsLeft className="w-4 h-4" />
            </button>

            {/* Prev button ‹ */}
            <button
              onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
              aria-label="Previous page"
              className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-center text-slate-500 text-sm hover:text-slate-800 transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>

            {/* Page 1 (Active) */}
            <button
              onClick={() => setCurrentPage(1)}
              className={`w-9 h-9 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currentPage === 1
                  ? 'bg-[#D7E6F6] text-[#18529B] border border-transparent'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              1
            </button>

            {/* Page 2 */}
            <button
              onClick={() => setCurrentPage(2)}
              className={`w-9 h-9 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currentPage === 2
                  ? 'bg-[#D7E6F6] text-[#18529B] border border-transparent'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              2
            </button>

            {/* Page 3 */}
            <button
              onClick={() => setCurrentPage(3)}
              className={`w-9 h-9 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currentPage === 3
                  ? 'bg-[#D7E6F6] text-[#18529B] border border-transparent'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              3
            </button>

            {/* Ellipsis */}
            <span className="px-1 text-slate-400 text-xs">...</span>

            {/* Page 10 */}
            <button
              onClick={() => setCurrentPage(10)}
              className={`w-9 h-9 rounded-full text-xs font-bold transition-all cursor-pointer ${
                currentPage === 10
                  ? 'bg-[#D7E6F6] text-[#18529B] border border-transparent'
                  : 'bg-white border border-slate-200 text-slate-600 hover:border-slate-300'
              }`}
            >
              10
            </button>

            {/* Next button › */}
            <button
              onClick={() => setCurrentPage((p) => Math.min(10, p + 1))}
              aria-label="Next page"
              className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-center text-slate-500 text-sm hover:text-slate-800 transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            {/* Last button » */}
            <button
              onClick={() => setCurrentPage(10)}
              aria-label="Last page"
              className="w-9 h-9 rounded-full border border-slate-200 hover:border-slate-300 bg-white flex items-center justify-center text-slate-500 text-sm hover:text-slate-800 transition-colors cursor-pointer"
            >
              <ChevronsRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px: "only in bleow 768 show one by one")      */}
        {/* ============================================================== */}
        <div className="md:hidden space-y-5">
          {/* Header Controls */}
          <div className="flex items-center justify-between px-1">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
              Article 0{mobileIndex + 1} of 0{items.length}
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={prevMobile}
                aria-label="Previous article"
                className="w-8 h-8 rounded-full bg-white hover:bg-slate-100 flex items-center justify-center transition-all cursor-pointer text-slate-700 border border-slate-200 shadow-2xs"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextMobile}
                aria-label="Next article"
                className="w-8 h-8 rounded-full bg-[#18529B] text-white hover:bg-[#133F77] flex items-center justify-center transition-all cursor-pointer shadow-2xs"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Active Single Mobile Article Card */}
          {currentMobileItem && (
            <div className="bg-white rounded-3xl p-5 border border-slate-200/90 shadow-sm space-y-4 animate-fadeIn">
              {/* Photo */}
              <div
                onClick={() => onNavigate('blog-post', currentMobileItem.id)}
                className="relative aspect-[16/10] rounded-2xl overflow-hidden bg-slate-100 cursor-pointer shadow-xs"
              >
                <img
                  src={currentMobileItem.image}
                  alt={currentMobileItem.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Category & Read Time */}
              <div className="flex items-center justify-between text-xs pt-1">
                <span className="font-bold uppercase tracking-wider text-[#18529B]">
                  {currentMobileItem.category}
                </span>
                <span className="font-medium text-slate-400 text-xs">
                  {currentMobileItem.readTime}
                </span>
              </div>

              {/* Title */}
              <h3
                onClick={() => onNavigate('blog-post', currentMobileItem.id)}
                className="text-lg font-bold text-[#0B1528] leading-snug cursor-pointer"
              >
                {currentMobileItem.title}
              </h3>

              {/* Description */}
              <p className="text-xs text-slate-500 font-normal leading-relaxed">
                {currentMobileItem.description}
              </p>

              {/* Button */}
              <div className="pt-2">
                <button
                  onClick={() => onNavigate('blog-post', currentMobileItem.id)}
                  className="w-full text-center py-2.5 rounded-full border border-slate-700 hover:border-[#18529B] hover:text-[#18529B] text-slate-800 text-xs font-semibold tracking-wide transition-all cursor-pointer bg-white"
                >
                  Read more
                </button>
              </div>
            </div>
          )}

          {/* Stepper Dots */}
          <div className="flex items-center justify-center gap-1.5 pt-2">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setMobileIndex(idx)}
                aria-label={`Go to article ${idx + 1}`}
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
