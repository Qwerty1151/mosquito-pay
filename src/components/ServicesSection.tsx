import React from 'react';
import { Code, Gamepad2, Brain, Cloud, Smartphone, Globe, ArrowRight } from './ui/icons';
import { useTranslation } from '../hooks/useTranslation';

interface ServicesSectionProps {
  onNavigate?: (page: string) => void;
}

export function ServicesSection({ onNavigate }: ServicesSectionProps) {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: t.services.software.title,
      description: t.services.software.description,
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue'
    },
    {
      icon: Gamepad2,
      title: t.services.games.title,
      description: t.services.games.description,
      color: 'text-neon-cyan',
      bgColor: 'bg-neon-cyan'
    },
    {
      icon: Brain,
      title: t.services.ai.title,
      description: t.services.ai.description,
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue'
    },
    {
      icon: Cloud,
      title: t.services.cloud.title,
      description: t.services.cloud.description,
      color: 'text-neon-blue',
      bgColor: 'bg-neon-blue'
    },
    {
      icon: Smartphone,
      title: t.services.mobile.title,
      description: t.services.mobile.description,
      color: 'text-neon-cyan',
      bgColor: 'bg-neon-cyan'
    },
    {
      icon: Globe,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      color: 'text-electric-blue',
      bgColor: 'bg-electric-blue'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-blue to-medium-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {t.services.title}
          </h2>
          <p className="text-xl text-soft-gray max-w-3xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300 hover:scale-105"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 ${service.bgColor} rounded-full mb-6 group-hover:animate-pulse-neon transition-all duration-300`}>
                <service.icon className="h-8 w-8 text-deep-blue" />
              </div>
              
              <h3 className={`text-2xl font-bold mb-4 ${service.color} group-hover:neon-text transition-all duration-300`}>
                {service.title}
              </h3>
              
              <p className="text-soft-gray mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <button 
                onClick={() => onNavigate?.('services')}
                className={`flex items-center gap-2 ${service.color} hover:text-neon-cyan transition-colors duration-300 font-medium`}
              >
                {t.common.learnMore}
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => onNavigate?.('services')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue font-semibold py-4 px-8 rounded-lg hover:scale-105 transition-all duration-300 neon-glow"
          >
            {t.common.viewAll}
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
}