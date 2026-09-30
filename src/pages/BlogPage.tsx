import React, { useState } from 'react';
import { Container } from '../components/layout/Container';
import { CtaCard } from '../components/layout/CtaCard';
import { BlogHeroSection } from '../components/blog/BlogHeroSection';
import { BlogListSection } from '../components/blog/BlogListSection';
import { PageId } from '../types';

export interface BlogPageProps {
  onNavigate: (page: PageId, detailId?: string) => void;
  onOpenConsultation: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigate,
  onOpenConsultation,
}) => {
  const [searchQuery, setSearchQuery] = useState<string>('');

  return (
    <div className="bg-white">
      {/* 1. First Section: Blog Hero Header (Matching Blog Mainss.png) */}
      <BlogHeroSection
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* 2. Second Section: All Blogs matching Frame 1171276730.png (Featured Post + 6 Grid Cards + Pagination) */}
      <BlogListSection
        onNavigate={onNavigate}
        searchFilter={searchQuery}
      />

      {/* 3. Pre-footer CTA */}
      <div className="pb-16 sm:pb-24">
        <Container>
          <CtaCard
            onOpenConsultation={onOpenConsultation}
            onOpenCalendly={onOpenConsultation}
          />
        </Container>
      </div>
    </div>
  );
};
