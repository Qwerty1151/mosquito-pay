import React from 'react';

export function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Установите расширение",
      description: "Один клик в Chrome Web Store, никаких сложных настроек",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      )
    },
    {
      number: "02",
      title: "Включите отпугиватель",
      description: "Нажмите на иконку в панели браузера и активируйте защиту",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
        </svg>
      )
    },
    {
      number: "03",
      title: "Активируйте Premium",
      description: "Получите доступ к расширенным функциям и максимальной защите",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
        </svg>
      )
    },
    {
      number: "04",
      title: "Спокойный сон",
      description: "Наслаждайтесь жизнью без комаров и надоедливых укусов",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      )
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-medium-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-warm-white mb-6">
            Как это <span className="gradient-text">работает</span>
          </h2>
          <p className="text-xl text-soft-gray max-w-3xl mx-auto">
            Простой процесс из 4 шагов до полной защиты от комаров
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-0.5 bg-gradient-to-r from-neon-blue to-transparent z-0"></div>
              )}
              
              <div className="relative z-10 text-center group">
                {/* Step number */}
                <div className="inline-block mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-neon-blue to-neon-cyan rounded-full flex items-center justify-center text-deep-blue font-bold text-lg group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4">
                  <div className="inline-block p-4 bg-gradient-to-br from-light-blue/50 to-medium-blue/50 rounded-xl border border-white/10 group-hover:border-neon-blue/50 transition-all duration-300">
                    <div className="text-neon-cyan">
                      {step.icon}
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-warm-white mb-3">
                  {step.title}
                </h3>
                
                <p className="text-soft-gray">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Demo visualization */}
        <div className="mt-20 text-center">
          <div className="inline-block bg-gradient-to-br from-medium-blue/50 to-light-blue/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10">
            <div className="flex items-center justify-center gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-neon-blue rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-deep-blue" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <span className="text-sm text-soft-gray">Клик</span>
              </div>
              
              <div className="text-neon-cyan">→</div>
              
              <div className="text-center">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 bg-neon-cyan rounded-full animate-pulse"
                      style={{
                        height: `${Math.random() * 12 + 8}px`,
                        animationDelay: `${i * 0.1}s`
                      }}
                    ></div>
                  ))}
                </div>
                <span className="text-sm text-soft-gray">Ультразвук</span>
              </div>
              
              <div className="text-neon-cyan">→</div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mb-2">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <span className="text-sm text-soft-gray">Защита</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}