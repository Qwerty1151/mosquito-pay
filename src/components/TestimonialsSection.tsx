import React from 'react';
import { Star } from './ui/icons';
import { useTranslation } from '../hooks/useTranslation';

export function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CTO, TechCorp",
      content: "Navilon Dev delivered exceptional results on our enterprise software project. Their team's expertise in AI integration was outstanding.",
      rating: 5,
      avatar: "👩‍💼"
    },
    {
      name: "Michael Chen",
      position: "CEO, GameStudio",
      content: "The mobile game they developed for us exceeded all expectations. Great attention to detail and innovative gameplay mechanics.",
      rating: 5,
      avatar: "👨‍💻"
    },
    {
      name: "Elena Rodriguez",
      position: "Founder, StartupXYZ",
      content: "Professional service, timely delivery, and excellent communication throughout the project. Highly recommended!",
      rating: 5,
      avatar: "👩‍🚀"
    }
  ];

  return (
    <section className="py-20 bg-medium-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
            {t.testimonials.title}
          </h2>
          <p className="text-xl text-soft-gray max-w-3xl mx-auto">
            {t.testimonials.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass-effect rounded-2xl p-8 hover:neon-glow transition-all duration-300"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-neon-cyan" />
                ))}
              </div>

              {/* Content */}
              <p className="text-soft-gray mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full flex items-center justify-center text-2xl">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-warm-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-soft-gray">
                    {testimonial.position}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}