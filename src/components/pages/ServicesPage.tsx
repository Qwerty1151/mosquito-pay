import React from 'react';
import { Code, Gamepad2, Brain, Users, Cloud, Smartphone } from '../ui/icons';
import { useTranslation } from '../../hooks/useTranslation';

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({ onNavigate }: ServicesPageProps) {
  const { t } = useTranslation();

  const services = [
    {
      icon: Code,
      title: t.services.software.title,
      description: t.services.software.description,
      features: ['Web Applications', 'Enterprise Software', 'API Development', 'Database Design']
    },
    {
      icon: Gamepad2,
      title: t.services.games.title,
      description: t.services.games.description,
      features: ['Mobile Games', 'PC Games', 'AR/VR Experiences', 'Game Design']
    },
    {
      icon: Brain,
      title: t.services.ai.title,
      description: t.services.ai.description,
      features: ['Machine Learning', 'Data Analytics', 'Automation', 'Predictive Models']
    },
    {
      icon: Users,
      title: t.services.consulting.title,
      description: t.services.consulting.description,
      features: ['Digital Strategy', 'Technology Audit', 'Process Optimization', 'Team Training']
    },
    {
      icon: Cloud,
      title: t.services.cloud.title,
      description: t.services.cloud.description,
      features: ['Cloud Migration', 'Infrastructure Setup', 'DevOps', 'Monitoring']
    },
    {
      icon: Smartphone,
      title: t.services.mobile.title,
      description: t.services.mobile.description,
      features: ['iOS Development', 'Android Development', 'Cross-Platform', 'App Store Optimization']
    }
  ];

  return (
    <div className="min-h-screen bg-deep-blue">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-deep-blue to-medium-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              {t.services.title}
            </h1>
            <p className="text-xl text-soft-gray mb-8">
              {t.services.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="p-8 glass-effect rounded-2xl hover:neon-glow transition-all duration-300 group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full mb-6 neon-glow group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="h-8 w-8 text-deep-blue" />
                </div>
                
                <h3 className="text-2xl font-bold text-warm-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-soft-gray mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-soft-gray">
                      <div className="w-2 h-2 bg-neon-blue rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-medium-blue to-deep-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-warm-white mb-4">
            Ready to start your project?
          </h2>
          <p className="text-soft-gray mb-8 max-w-2xl mx-auto">
            Let's discuss how our services can help transform your business with cutting-edge technology solutions.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue font-semibold py-3 px-8 rounded-lg hover:scale-105 transition-all duration-300 neon-glow"
          >
            {t.common.getInTouch}
          </button>
        </div>
      </section>
    </div>
  );
}