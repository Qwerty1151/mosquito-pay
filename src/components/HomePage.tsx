import React from 'react';
import { HeroSection } from './HeroSection';
import { ServicesSection } from './ServicesSection';
import { WhyUsSection } from './WhyUsSection';
import { TestimonialsSection } from './TestimonialsSection';

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen">
      <HeroSection onNavigate={onNavigate} />
      <ServicesSection onNavigate={onNavigate} />
      <WhyUsSection />
      <TestimonialsSection />
    </div>
  );
}