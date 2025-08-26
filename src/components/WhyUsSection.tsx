import React, { useState, useEffect, useRef } from 'react';
import { Award, TrendingUp, Globe, Users } from './ui/icons';
import { useTranslation } from '../hooks/useTranslation';

export function WhyUsSection() {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    {
      icon: Award,
      number: '8+',
      label: t.whyUs.experience,
      color: 'text-neon-blue'
    },
    {
      icon: TrendingUp,
      number: '200+',
      label: t.whyUs.projects,
      color: 'text-neon-cyan'
    },
    {
      icon: Globe,
      number: '25+',
      label: t.whyUs.countries,
      color: 'text-electric-blue'
    },
    {
      icon: Users,
      number: '150+',
      label: t.whyUs.clients,
      color: 'text-neon-blue'
    }
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-deep-blue to-medium-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {t.whyUs.title}
          </h2>
          <p className="text-xl text-soft-gray max-w-3xl mx-auto">
            {t.whyUs.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 glass-effect rounded-2xl transition-all duration-700 hover:neon-glow ${
                isVisible ? 'animate-float' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full mb-6 neon-glow">
                <stat.icon className="h-8 w-8 text-deep-blue" />
              </div>
              <div className={`text-4xl font-bold mb-2 ${stat.color} neon-text`}>
                {stat.number}
              </div>
              <div className="text-warm-white font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}