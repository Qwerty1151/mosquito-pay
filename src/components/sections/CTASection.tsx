import React, { useState } from 'react';

interface CTASectionProps {
  onNavigate: (page: string) => void;
}

export function CTASection({ onNavigate }: CTASectionProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    // Redirect to pricing with email
    onNavigate('pricing');
    
    // In real implementation, would pass email to pricing page
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-deep-blue via-medium-blue to-deep-blue relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-blue/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-cyan/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <div className="inline-block bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue px-6 py-3 rounded-full font-semibold mb-6">
            Получите Premium защиту сейчас
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold text-warm-white mb-6">
            Попробуйте <span className="gradient-text">Premium</span>
          </h2>
          
          <p className="text-xl text-soft-gray max-w-2xl mx-auto mb-8">
            Оплатите подписку и получите ключ активации моментально на вашу почту
          </p>
        </div>

        {/* Main CTA Form */}
        <div className="bg-gradient-to-br from-medium-blue/50 to-light-blue/30 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/10 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-left mb-3 text-warm-white font-medium">
                Ваш email для получения лицензии
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="w-full px-6 py-4 bg-deep-blue border border-white/20 rounded-xl text-warm-white placeholder-soft-gray focus:border-neon-blue focus:outline-none focus:ring-2 focus:ring-neon-blue/20 transition-all duration-200"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-deep-blue/30 border-t-deep-blue rounded-full animate-spin"></div>
                  Переход к оплате...
                </div>
              ) : (
                'Активировать защиту — $4.99/месяц'
              )}
            </button>
          </form>

          <div className="mt-6 text-sm text-soft-gray">
            <p>🔒 Оплата через Payeer • Активация сразу после оплаты</p>
            <p className="mt-2">Отменить подписку можно в любое время</p>
          </div>
        </div>

        {/* Benefits reminder */}
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
          {[
            { icon: "🛡️", text: "Полная защита" },
            { icon: "⚡", text: "Мгновенная активация" },
            { icon: "🔄", text: "Авто-обновление" },
            { icon: "📱", text: "Все устройства" }
          ].map((benefit, index) => (
            <div key={index} className="bg-medium-blue/30 rounded-xl p-4 border border-white/10">
              <div className="text-2xl mb-2">{benefit.icon}</div>
              <div className="text-sm text-soft-gray">{benefit.text}</div>
            </div>
          ))}
        </div>

        {/* Alternative CTA */}
        <div className="mt-12">
          <p className="text-soft-gray mb-4">Нужна дополнительная информация?</p>
          <button
            onClick={() => {
              document.getElementById('comparison')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="text-neon-cyan hover:text-neon-blue transition-colors duration-200 font-medium"
          >
            Сравнить с другими решениями →
          </button>
        </div>
      </div>
    </section>
  );
}