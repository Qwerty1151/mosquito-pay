import React from 'react';
import { Zap } from './ui/icons';
import { useTranslation } from '../hooks/useTranslation';
import { AnimatedBackground } from './AnimatedBackground';
import { HeroCTAButtons } from './HeroCTAButtons';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background Canvas */}
      <AnimatedBackground />

      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="animate-grid" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 212, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 212, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px'
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Logo Animation */}
          <div className="mb-8 animate-float">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-2xl neon-glow">
              <Zap className="h-10 w-10 text-deep-blue" />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6">
            <span className="gradient-text">{t.hero.title}</span>
          </h1>

          {/* Subtitle */}
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-neon-cyan mb-8 neon-text">
            {t.hero.subtitle}
          </h2>

          {/* Description */}
          <p className="text-lg sm:text-xl text-soft-gray max-w-3xl mx-auto mb-12 leading-relaxed">
            {t.hero.description}
          </p>

          {/* CTA Buttons */}
          <HeroCTAButtons onNavigate={onNavigate} />

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-neon-blue rounded-full flex justify-center">
              <div className="w-1 h-3 bg-neon-blue rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-deep-blue to-transparent" />
    </section>
  );
}