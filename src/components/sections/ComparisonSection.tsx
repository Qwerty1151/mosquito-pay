import React from 'react';

export function ComparisonSection() {
  const comparisons = [
    {
      category: "Устройства в розетку",
      problems: ["Нужны батарейки", "Химические пластины", "Ограниченный радиус"],
      icon: "🔌",
      color: "red"
    },
    {
      category: "Мобильные приложения",
      problems: ["Сажают батарею", "Работают только при открытом приложении", "Неэффективны"],
      icon: "📱",
      color: "yellow"
    },
    {
      category: "Наше решение",
      problems: ["Работает в браузере", "Никаких батареек", "Постоянная защита"],
      icon: "💻",
      color: "green"
    }
  ];

  return (
    <section id="comparison" className="py-20 bg-medium-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-warm-white mb-6">
            Почему мы <span className="gradient-text">лучше?</span>
          </h2>
          <p className="text-xl text-soft-gray max-w-3xl mx-auto">
            Сравните наше решение с традиционными методами защиты от комаров
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {comparisons.map((item, index) => (
            <div key={index} className={`relative group ${index === 2 ? 'md:scale-105' : ''}`}>
              <div className={`bg-gradient-to-br ${
                index === 2 
                  ? 'from-neon-blue/20 to-neon-cyan/20 border-neon-blue/50' 
                  : 'from-medium-blue/50 to-light-blue/30 border-white/10'
              } backdrop-blur-lg rounded-2xl p-8 border transition-all duration-300 h-full`}>
                
                {/* Category header */}
                <div className="text-center mb-6">
                  <div className="text-4xl mb-3">{item.icon}</div>
                  <h3 className={`text-xl font-semibold ${
                    index === 2 ? 'text-neon-cyan' : 'text-warm-white'
                  }`}>
                    {item.category}
                  </h3>
                </div>

                {/* Features/Problems list */}
                <ul className="space-y-3">
                  {item.problems.map((problem, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5 ${
                        index === 2 
                          ? 'bg-green-500' 
                          : 'bg-red-500'
                      }`}>
                        {index === 2 ? (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        ) : (
                          <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        )}
                      </div>
                      <span className="text-soft-gray">{problem}</span>
                    </li>
                  ))}
                </ul>

                {/* Special badge for our solution */}
                {index === 2 && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <div className="bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue px-4 py-1 rounded-full text-sm font-semibold">
                      Рекомендуется
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-medium-blue/50 to-light-blue/30 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-4xl mx-auto">
            <h3 className="text-2xl font-semibold text-warm-white mb-4">
              Итог: простота, эффективность, удобство
            </h3>
            <p className="text-soft-gray text-lg leading-relaxed">
              Пока другие решения требуют постоянного обслуживания, замены батареек или создают неудобства, 
              наше расширение просто работает в фоне, обеспечивая надежную защиту без лишних хлопот.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}