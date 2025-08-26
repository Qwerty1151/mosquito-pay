import React, { useState } from 'react';

interface PricingPageProps {
  onNavigate: (page: string) => void;
}

export function PricingPage({ onNavigate }: PricingPageProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState('premium');

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsLoading(true);
    
    try {
      // In real implementation, this would call your API
      const response = await fetch(`/api/checkout?plan=${selectedPlan}&email=${encodeURIComponent(email)}`, {
        method: 'GET',
      });
      
      if (response.ok) {
        // Redirect to Payeer payment page
        window.location.href = response.url;
      } else {
        throw new Error('Checkout failed');
      }
    } catch (error) {
      console.error('Checkout error:', error);
      // Show error message
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-medium-blue to-deep-blue">
      {/* Header */}
      <section className="pt-12 pb-8">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center gap-2 text-soft-gray hover:text-neon-cyan transition-colors mb-8"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Назад к описанию
          </button>

          <h1 className="text-3xl lg:text-5xl font-bold text-warm-white mb-6">
            Получите <span className="gradient-text">Premium</span> защиту
          </h1>
          <p className="text-xl text-soft-gray max-w-2xl mx-auto">
            Моментальная активация после оплаты. Лицензия придет на вашу почту.
          </p>
        </div>
      </section>

      {/* Pricing */}
      <section className="pb-20">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Plan selection */}
          <div className="bg-gradient-to-br from-medium-blue/50 to-light-blue/30 backdrop-blur-lg rounded-3xl p-8 border border-white/10 mb-8">
            <div className="text-center mb-8">
              <div className="inline-block bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue px-4 py-2 rounded-full font-semibold mb-4">
                Рекомендуется
              </div>
              <h2 className="text-2xl font-bold text-warm-white mb-2">Premium Subscription</h2>
              <div className="text-4xl font-bold text-neon-cyan mb-2">$4.99</div>
              <div className="text-soft-gray">в месяц</div>
            </div>

            {/* Features */}
            <ul className="space-y-3 mb-8">
              {[
                'Автоматическая смена частот',
                'Комфортный и активный режимы', 
                'Фоновая работа даже при закрытых вкладках',
                'Синхронизация между всеми устройствами',
                'Приоритетная поддержка',
                'Отмена подписки в любое время'
              ].map((feature, index) => (
                <li key={index} className="flex items-center gap-3">
                  <svg className="w-5 h-5 text-neon-cyan flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-soft-gray">{feature}</span>
                </li>
              ))}
            </ul>

            {/* Payment form */}
            <form onSubmit={handleCheckout} className="space-y-6">
              <div>
                <label htmlFor="email" className="block mb-3 text-warm-white font-medium">
                  Email для получения лицензии
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
                disabled={isLoading || !email}
                className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue py-4 px-8 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-neon-blue/30 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <div className="flex items-center justify-center gap-2">
                    <div className="w-5 h-5 border-2 border-deep-blue/30 border-t-deep-blue rounded-full animate-spin"></div>
                    Переход к оплате...
                  </div>
                ) : (
                  'Оплатить через Payeer'
                )}
              </button>
            </form>
          </div>

          {/* Security info */}
          <div className="bg-gradient-to-br from-medium-blue/30 to-light-blue/20 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-neon-blue/20 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-neon-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-warm-white mb-2">Безопасная оплата</h3>
                <p className="text-soft-gray text-sm leading-relaxed">
                  Оплата обрабатывается через защищенную систему Payeer. Мы не сохраняем данные ваших карт. 
                  После успешной оплаты лицензионный ключ будет отправлен на указанный email в течение 5 минут.
                </p>
                
                <div className="flex items-center gap-4 mt-4 text-xs text-soft-gray">
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    SSL шифрование
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    30 дней возврат
                  </div>
                  <div className="flex items-center gap-1">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    24/7 поддержка
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="mt-8 text-center">
            <p className="text-soft-gray text-sm mb-4">
              Есть вопросы? Обратитесь в поддержку: 
              <a href="mailto:support@navilon.tech" className="text-neon-cyan hover:text-neon-blue ml-1">
                support@navilon.tech
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}