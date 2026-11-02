import React, { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { PageId } from '../../types';
import { asPublicPost, usePublicBlogs, refreshPublishedBlogs } from '../../utils/blogContent';

export interface BlogItem {
  id: string;
  category: string;
  readTime: string;
  title: string;
  description: string;
  image: string;
  isFeatured?: boolean;
}

export interface BlogListSectionProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  searchFilter?: string;
}

export const BlogListSection: React.FC<BlogListSectionProps> = ({
  onNavigate,
  searchFilter = '',
}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const postsPerPage = 7;
  const { posts: managed, loading, error } = usePublicBlogs();
  const allItems: BlogItem[] = [
    ...managed.filter(post => post.status === 'published').map(post => ({
      id: post.slug, title: post.title, category: post.category, description: post.summary,
      image: post.image || '/images/home-hero.svg', readTime: asPublicPost(post).readTime,
    })),
  ];


  // Filter items if user searched
  const items = searchFilter
    ? allItems.filter(
        (b) =>
          b.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
          b.category.toLowerCase().includes(searchFilter.toLowerCase()) ||
          b.description.toLowerCase().includes(searchFilter.toLowerCase())
      )
    : allItems;

  const totalPages = Math.max(1, Math.ceil(items.length / postsPerPage));
  const page = Math.min(currentPage, totalPages);
  const pageStart = (page - 1) * postsPerPage;
  const pageItems = items.slice(pageStart, pageStart + postsPerPage);
  const featured = pageItems.find(item => item.isFeatured) || pageItems[0];
  const gridCards = pageItems.filter(item => item.id !== featured?.id);
  useEffect(() => { setCurrentPage(1); }, [searchFilter]);
  useEffect(() => { setCurrentPage(value => Math.min(value, totalPages)); }, [totalPages]);
  const goToPage = (next: number) => {
    setCurrentPage(Math.max(1, Math.min(totalPages, next)));
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const pageNumbers: (number | string)[] = [];
  const visiblePages = Array.from({ length: totalPages }, (_, i) => i + 1).filter(value => totalPages <= 7 || value === 1 || value === totalPages || Math.abs(value - page) <= 1);
  visiblePages.forEach((value, index) => {
    if (index && value - visiblePages[index - 1] > 1) pageNumbers.push('gap-' + value);
    pageNumbers.push(value);
  });

  if (loading || error) return <section className="py-16 text-center" role="status"><p>{loading ? 'Loading articles…' : error}</p>{error && <button className="mt-4 text-[#18529B]" onClick={() => void refreshPublishedBlogs()}>Try again</button>}</section>;
  if (!items.length) return <section className="py-16 text-center"><p>{searchFilter ? 'No articles match your search.' : 'No published articles yet.'}</p></section>;

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 bg-white overflow-hidden scroll-mt-28">
      <Container>
        {/* ============================================================== */}
        {/* DESKTOP & TABLET VIEW (>= 768px): EXACT MATCH TO Frame 1171276730.png */}
        {/* ============================================================== */}
        <div className="space-y-10 md:space-y-16 lg:space-y-20">
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

          <div className="flex flex-wrap items-center justify-between gap-4 pt-6">
            <p className="text-sm text-slate-500" role="status">Showing {pageStart + 1}-{Math.min(pageStart + postsPerPage, items.length)} of {items.length} posts ({postsPerPage} per page)</p>
            <nav className="flex flex-wrap items-center gap-2" aria-label="Blog pagination">
              <button onClick={() => goToPage(1)} disabled={page === 1} aria-label="First page" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 disabled:opacity-40 disabled:cursor-not-allowed"><ChevronsLeft className="w-4 h-4" /></button>
              <button onClick={() => goToPage(page - 1)} disabled={page === 1} aria-label="Previous page" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 disabled:opacity-40 disabled:cursor-not-allowed"><ChevronLeft className="w-4 h-4" /></button>
              {pageNumbers.map(value => typeof value === 'string' ? <span key={value} className="px-1 text-slate-400" aria-hidden="true">...</span> : <button key={value} onClick={() => goToPage(value)} aria-label={`Page ${value}`} aria-current={page === value ? 'page' : undefined} className={`w-9 h-9 rounded-full text-xs font-bold border transition-colors ${page === value ? 'bg-[#D7E6F6] text-[#18529B] border-slate-900' : 'bg-white border-slate-200 text-slate-600 hover:border-slate-400'}`}>{value}</button>)}
              <button onClick={() => goToPage(page + 1)} disabled={page === totalPages} aria-label="Next page" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 disabled:opacity-40 disabled:cursor-not-allowed"><ChevronRight className="w-4 h-4" /></button>
              <button onClick={() => goToPage(totalPages)} disabled={page === totalPages} aria-label="Last page" className="w-9 h-9 rounded-full border border-slate-200 flex items-center justify-center text-slate-500 disabled:opacity-40 disabled:cursor-not-allowed"><ChevronsRight className="w-4 h-4" /></button>
            </nav>
          </div>
        </div>

        {/* ============================================================== */}
        {/* MOBILE VIEW (< 768px: "only in bleow 768 show one by one")      */}
      </Container>
    </section>
  );
};
