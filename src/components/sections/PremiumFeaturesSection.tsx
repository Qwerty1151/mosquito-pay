import React from 'react';

export function PremiumFeaturesSection() {
  const features = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19V6l12 5.5M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2z" />
        </svg>
      ),
      title: "Автоматическая смена частот",
      description: "Система постоянно меняет частоты, чтобы комары не привыкли к звуку"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
        </svg>
      ),
      title: "Два режима работы",
      description: "Комфортный для дома и активный для улицы — выберите нужную интенсивность"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: "Фоновая работа",
      description: "Работает даже при закрытых вкладках, обеспечивая постоянную защиту"
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
        </svg>
      ),
      title: "Синхронизация устройств",
      description: "Одна лицензия работает на всех ваших устройствах автоматически"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-medium-blue to-deep-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue px-4 py-2 rounded-full font-medium mb-6">
            Premium Features
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-warm-white mb-6">
            Максимальная <span className="gradient-text">защита</span>
          </h2>
          <p className="text-xl text-soft-gray max-w-3xl mx-auto">
            Расширенные функции для тех, кто хочет полную защиту от комаров
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-medium-blue/50 to-light-blue/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10 group-hover:border-neon-blue/50 transition-all duration-300 h-full">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 rounded-xl flex items-center justify-center group-hover:bg-gradient-to-br group-hover:from-neon-blue/30 group-hover:to-neon-cyan/30 transition-all duration-300">
                      <div className="text-neon-cyan">
                        {feature.icon}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold text-warm-white mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-soft-gray leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <div className="bg-gradient-to-br from-medium-blue/30 to-light-blue/20 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
          <div className="grid grid-cols-3 gap-0">
            {/* Header */}
            <div className="p-6 bg-light-blue/30">
              <h4 className="text-lg font-semibold text-warm-white">Функция</h4>
            </div>
            <div className="p-6 bg-light-blue/30 text-center">
              <h4 className="text-lg font-semibold text-soft-gray">Бесплатная версия</h4>
            </div>
            <div className="p-6 bg-gradient-to-r from-neon-blue/20 to-neon-cyan/20 text-center">
              <h4 className="text-lg font-semibold text-neon-cyan">Premium</h4>
            </div>

            {/* Rows */}
            {[
              ['Базовая защита', true, true],
              ['Автосмена частот', false, true],
              ['Режимы работы', false, true],
              ['Фоновая работа', false, true],
              ['Синхронизация', false, true],
            ].map(([feature, free, premium], index) => (
              <React.Fragment key={index}>
                <div className="p-4 border-t border-white/10">
                  <span className="text-soft-gray">{feature}</span>
                </div>
                <div className="p-4 border-t border-white/10 text-center">
                  {free ? (
                    <svg className="w-5 h-5 text-neon-cyan mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-soft-gray mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  )}
                </div>
                <div className="p-4 border-t border-white/10 text-center">
                  <svg className="w-5 h-5 text-neon-cyan mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}