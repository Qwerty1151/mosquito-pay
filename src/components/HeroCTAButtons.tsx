import React from 'react';
import { ArrowRight, Mail } from './ui/icons';
import { useTranslation } from '../hooks/useTranslation';

interface HeroCTAButtonsProps {
  onNavigate: (page: string) => void;
}

export function HeroCTAButtons({ onNavigate }: HeroCTAButtonsProps) {
  const { t } = useTranslation();

  return (
    <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
      {/* Primary CTA */}
      <button
        onClick={() => onNavigate('contact')}
        className="group relative px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue font-semibold rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-neon-blue/50 neon-glow"
      >
        <span className="flex items-center gap-2">
          <Mail className="h-5 w-5" />
          {t.hero.ctaContact}
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>

      {/* Secondary CTA */}
      <button
        onClick={() => onNavigate('services')}
        className="group relative px-8 py-4 border-2 border-neon-blue text-neon-blue font-semibold rounded-lg text-lg transition-all duration-300 hover:bg-neon-blue hover:text-deep-blue hover:scale-105 glass-effect"
      >
        <span className="flex items-center gap-2">
          {t.hero.ctaServices}
          <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>

      {/* Ambassador CTA - Special */}
      <button
        onClick={() => onNavigate('ambassador')}
        className="group relative px-6 py-3 bg-gradient-to-r from-electric-blue to-neon-cyan text-deep-blue font-medium rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-electric-blue/50 border border-electric-blue/30"
      >
        <span className="flex items-center gap-2">
          <span className="text-sm">🌟</span>
          Support Projects
          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </button>
    </div>
  );
}