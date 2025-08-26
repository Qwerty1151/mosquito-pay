import React from 'react';
import { Users, Target, Award, Globe, ArrowRight } from '../ui/icons';
import { useTranslation } from '../../hooks/useTranslation';

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const { t } = useTranslation();

  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We constantly push the boundaries of technology to deliver cutting-edge solutions.'
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Quality is at the heart of everything we do, from code to customer service.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and transparent communication.'
    },
    {
      icon: Globe,
      title: 'Global Impact',
      description: 'Our solutions make a difference in businesses and communities worldwide.'
    }
  ];

  const teamMembers = [
    {
      name: 'Alex Johnson',
      role: 'CEO & Founder',
      avatar: '👨‍💼',
      description: 'Visionary leader with 15+ years in tech innovation.'
    },
    {
      name: 'Sarah Chen',
      role: 'CTO',
      avatar: '👩‍💻',
      description: 'Technical expert leading our engineering excellence.'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of AI',
      avatar: '👨‍🔬',
      description: 'AI researcher pushing the boundaries of machine learning.'
    },
    {
      name: 'Emma Thompson',
      role: 'Head of Design',
      avatar: '👩‍🎨',
      description: 'Creative director crafting exceptional user experiences.'
    }
  ];

  return (
    <div className="min-h-screen bg-deep-blue">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-deep-blue to-medium-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              {t.about.title}
            </h1>
            <p className="text-xl text-soft-gray mb-8">
              {t.about.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-warm-white">Our Mission</h2>
              <p className="text-lg text-soft-gray mb-6 leading-relaxed">
                {t.about.mission}
              </p>
              <p className="text-lg text-soft-gray leading-relaxed">
                Since our founding, we've been committed to transforming the digital landscape through innovative solutions that empower businesses and enhance user experiences.
              </p>
            </div>
            <div className="glass-effect rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-4 text-neon-blue">Our Vision</h3>
              <p className="text-soft-gray leading-relaxed">
                {t.about.vision}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-medium-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-warm-white">Our Values</h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto">
              {t.about.values}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6 glass-effect rounded-2xl hover:neon-glow transition-all duration-300">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full mb-4 neon-glow">
                  <value.icon className="h-8 w-8 text-deep-blue" />
                </div>
                <h3 className="text-xl font-semibold text-warm-white mb-2">
                  {value.title}
                </h3>
                <p className="text-soft-gray">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-warm-white">{t.about.team}</h2>
            <p className="text-xl text-soft-gray max-w-3xl mx-auto">
              Meet the passionate individuals driving innovation at Navilon Dev.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="text-center p-6 glass-effect rounded-2xl hover:neon-glow transition-all duration-300">
                <div className="w-20 h-20 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center text-3xl mb-4 mx-auto neon-glow">
                  {member.avatar}
                </div>
                <h3 className="text-xl font-semibold text-warm-white mb-1">
                  {member.name}
                </h3>
                <p className="text-neon-blue font-medium mb-3">
                  {member.role}
                </p>
                <p className="text-soft-gray text-sm">
                  {member.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16 bg-gradient-to-r from-medium-blue to-deep-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-12 text-center text-warm-white">{t.about.history}</h2>
            
            <div className="space-y-8">
              <div className="flex gap-8 items-start">
                <div className="w-4 h-4 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-white mb-2">2016 - Foundation</h3>
                  <p className="text-soft-gray">Navilon Dev was founded with a vision to bridge the gap between innovative technology and practical business solutions.</p>
                </div>
              </div>
              
              <div className="flex gap-8 items-start">
                <div className="w-4 h-4 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-white mb-2">2018 - Global Expansion</h3>
                  <p className="text-soft-gray">Expanded operations to multiple countries, establishing our presence as a truly international IT company.</p>
                </div>
              </div>
              
              <div className="flex gap-8 items-start">
                <div className="w-4 h-4 bg-electric-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-white mb-2">2020 - AI Innovation</h3>
                  <p className="text-soft-gray">Launched our AI and Machine Learning division, pioneering cutting-edge solutions for enterprise clients.</p>
                </div>
              </div>
              
              <div className="flex gap-8 items-start">
                <div className="w-4 h-4 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                <div>
                  <h3 className="text-xl font-semibold text-warm-white mb-2">2024 - Continued Growth</h3>
                  <p className="text-soft-gray">Today, we serve clients in 25+ countries with a team of 150+ professionals, continuing to push the boundaries of technology.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-warm-white mb-4">
            Ready to work with us?
          </h2>
          <p className="text-soft-gray mb-8 max-w-2xl mx-auto">
            Let's discuss how Navilon Dev can help transform your business with innovative technology solutions.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue font-semibold py-3 px-8 rounded-lg hover:scale-105 transition-all duration-300 neon-glow"
          >
            {t.common.getInTouch}
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}