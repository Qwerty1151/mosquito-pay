import React from 'react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface HeroSectionProps {
  onNavigate: (page: string) => void;
}

export function HeroSection({ onNavigate }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-deep-blue via-medium-blue to-deep-blue">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.1)_0%,transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(0,255,255,0.1)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">Ultrasonic Mosquito</span>
              <br />
              <span className="text-warm-white">Repellent</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-soft-gray mb-8">
              Защита от комаров прямо в браузере.<br />
              <span className="text-neon-cyan">Включите защиту одним кликом. Без химии, без запаха.</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => onNavigate('pricing')}
                className="bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300 transform hover:scale-105"
              >
                Купить Premium
              </button>
              
              <button
                className="border-2 border-neon-blue text-neon-blue px-8 py-4 rounded-xl font-semibold text-lg hover:bg-neon-blue hover:text-deep-blue transition-all duration-300"
                onClick={() => {
                  document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                Как это работает
              </button>
            </div>

            {/* Trust indicators */}
            <div className="mt-12 flex flex-wrap items-center gap-6 text-soft-gray text-sm justify-center lg:justify-start">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-neon-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Без химии
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-neon-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Работает в фоне
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-neon-cyan" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                Простота установки
              </div>
            </div>
          </div>

          {/* Right content - Product visualization */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-medium-blue/50 to-light-blue/30 backdrop-blur-lg rounded-3xl p-8 border border-white/10">
              {/* Browser mockup */}
              <div className="bg-deep-blue rounded-2xl overflow-hidden shadow-2xl">
                {/* Browser header */}
                <div className="bg-medium-blue px-4 py-3 flex items-center gap-2">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-light-blue rounded px-4 py-1 mx-4">
                    <span className="text-soft-gray text-sm">mosquito.navilon.tech</span>
                  </div>
                  
                  {/* Extension icon in toolbar */}
                  <div className="bg-neon-blue rounded-lg p-2 animate-pulse-neon">
                    <svg className="w-4 h-4 text-deep-blue" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                  </div>
                </div>
                
                {/* Browser content */}
                <div className="p-8 text-center">
                  <div className="mb-4">
                    <div className="inline-block p-4 bg-neon-blue/20 rounded-full">
                      <svg className="w-12 h-12 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12 5.5M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
                      </svg>
                    </div>
                  </div>
                  <div className="text-neon-cyan font-semibold text-lg mb-2">Защита активна</div>
                  <div className="text-soft-gray text-sm">Ультразвуковые волны отпугивают комаров</div>
                  
                  {/* Sound waves animation */}
                  <div className="mt-6 flex justify-center">
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-1 bg-neon-cyan rounded-full animate-pulse"
                          style={{
                            height: `${Math.random() * 20 + 10}px`,
                            animationDelay: `${i * 0.1}s`
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}