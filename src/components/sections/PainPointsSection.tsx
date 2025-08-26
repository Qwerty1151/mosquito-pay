import React from 'react';

export function PainPointsSection() {
  const painPoints = [
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Комары мешают спать и работать?",
      description: "Жужжание всю ночь, укусы, которые чешутся днями"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636m12.728 12.728L18 21l3-3m-6-6l6-6" />
        </svg>
      ),
      title: "Надоело, что никакая спираль не помогает?",
      description: "Химический запах, дым, постоянная замена пластин"
    },
    {
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
      title: "Хочется простой способ без химии?",
      description: "Безопасно для детей, домашних животных и аллергиков"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-blue to-medium-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-warm-white mb-6">
            Устали от <span className="gradient-text">надоедливых комаров?</span>
          </h2>
          <p className="text-xl text-soft-gray max-w-3xl mx-auto">
            Мы понимаем ваши проблемы. Комары превращают летние вечера в кошмар.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {painPoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="relative mb-6">
                <div className="inline-block p-6 bg-gradient-to-br from-medium-blue to-light-blue rounded-2xl border border-white/10 group-hover:border-neon-blue/50 transition-all duration-300">
                  <div className="text-neon-cyan group-hover:text-neon-blue transition-colors duration-300">
                    {point.icon}
                  </div>
                </div>
                
                {/* Crossed out effect for problems */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-0.5 bg-red-500 rotate-45 opacity-60"></div>
                </div>
              </div>
              
              <h3 className="text-xl font-semibold text-warm-white mb-4">
                {point.title}
              </h3>
              
              <p className="text-soft-gray">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}