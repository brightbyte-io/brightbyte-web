import { MainHeading } from '../ui/MainHeading';
import { RightArrow } from '../ui/RightArrow';
import React from 'react';
import { Container } from '../layout/Container';
import { PageId } from '../../types';
import './HomeHero.css';

export interface HomeHeroProps {
  onOpenConsultation: () => void;
  onNavigate: (page: PageId, detailId?: string) => void;
}

export const HomeHero: React.FC<HomeHeroProps> = ({ onOpenConsultation, onNavigate }) => (
  <section className="home-laptop-hero">
    <Container className="home-laptop-hero-container">
      <div className="home-laptop-hero-layout">
        <div className="home-laptop-hero-copy">
          <MainHeading headingKey="HomeHero" as="h1" variant="hero" className="text-slate-950" />
          <p>Custom mobile apps, web platforms, AI integration and ERP systems, with cloud delivery and technical support from one team.</p>
          <div className="home-laptop-hero-actions">
            <button onClick={onOpenConsultation} className="home-laptop-primary"><span>Get a free consultation</span><RightArrow /></button>
            <a href="/services" onClick={event => { if (!event.ctrlKey && !event.metaKey && !event.shiftKey && !event.altKey) { event.preventDefault(); onNavigate('services'); } }} className="home-laptop-secondary">View Services<RightArrow /></a>
          </div>
        </div>
        <div className="home-laptop-hero-art"><img src="/images/home-blue-laptop.svg" alt="Blue-lit laptop displaying a custom software development website" width={1536} height={1024} fetchPriority="high" /></div>
      </div>
    </Container>
  </section>
);
