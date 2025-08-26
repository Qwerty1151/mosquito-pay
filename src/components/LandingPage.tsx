import React from 'react';
import { HeroSection } from './sections/HeroSection';
import { PainPointsSection } from './sections/PainPointsSection';
import { HowItWorksSection } from './sections/HowItWorksSection';
import { PremiumFeaturesSection } from './sections/PremiumFeaturesSection';
import { CTASection } from './sections/CTASection';
import { ComparisonSection } from './sections/ComparisonSection';
import { TestimonialsSection } from './sections/TestimonialsSection';

interface LandingPageProps {
  onNavigate: (page: string) => void;
}

export function LandingPage({ onNavigate }: LandingPageProps) {
  return (
    <div className="space-y-0">
      <HeroSection onNavigate={onNavigate} />
      <PainPointsSection />
      <HowItWorksSection />
      <PremiumFeaturesSection />
      <CTASection onNavigate={onNavigate} />
      <ComparisonSection />
      <TestimonialsSection />
    </div>
  );
}