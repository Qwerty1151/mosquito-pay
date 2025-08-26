import React from 'react';

interface FailPageProps {
  onNavigate: (page: string) => void;
}

export function FailPage({ onNavigate }: FailPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-medium-blue to-deep-blue flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-medium-blue/50 to-light-blue/30 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/10">
          
          {/* Error icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-warm-white mb-4">
            Оплата не прошла
          </h1>
          
          <p className="text-xl text-soft-gray mb-8">
            К сожалению, произошла ошибка при обработке платежа. Попробуйте еще раз или свяжитесь с поддержкой.
          </p>

          {/* Common reasons */}
          <div className="bg-deep-blue/50 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-warm-white mb-4">Возможные причины:</h3>
            <ul className="space-y-2 text-soft-gray">
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                Недостаточно средств на карте
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                Карта заблокирована для интернет-платежей
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                Временные технические проблемы
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-400 mt-1">•</span>
                Неверно введены данные карты
              </li>
            </ul>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('pricing')}
              className="bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-200"
            >
              Попробовать снова
            </button>
            
            <button
              onClick={() => onNavigate('home')}
              className="border-2 border-neon-blue text-neon-blue px-8 py-3 rounded-xl font-semibold hover:bg-neon-blue hover:text-deep-blue transition-all duration-200"
            >
              Вернуться на главную
            </button>
          </div>

          {/* Support info */}
          <div className="mt-8 p-4 bg-medium-blue/30 rounded-xl">
            <h4 className="font-semibold text-warm-white mb-2">Нужна помощь?</h4>
            <p className="text-sm text-soft-gray mb-3">
              Наша команда поддержки готова помочь вам с оплатой и активацией Premium подписки.
            </p>
            <a
              href="mailto:support@navilon.tech"
              className="inline-flex items-center gap-2 text-neon-cyan hover:text-neon-blue transition-colors text-sm"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              support@navilon.tech
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}