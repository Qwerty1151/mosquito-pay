import React from 'react';

interface SuccessPageProps {
  onNavigate: (page: string) => void;
}

export function SuccessPage({ onNavigate }: SuccessPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-medium-blue to-deep-blue flex items-center justify-center">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-gradient-to-br from-medium-blue/50 to-light-blue/30 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/10">
          
          {/* Success icon */}
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>

          <h1 className="text-3xl lg:text-4xl font-bold text-warm-white mb-4">
            Оплата прошла успешно!
          </h1>
          
          <p className="text-xl text-soft-gray mb-8">
            Ваша Premium подписка активирована. Лицензионный ключ отправлен на вашу почту.
          </p>

          {/* Instructions */}
          <div className="bg-deep-blue/50 rounded-2xl p-6 mb-8 text-left">
            <h3 className="font-semibold text-warm-white mb-4">Что делать дальше:</h3>
            <ol className="space-y-3 text-soft-gray">
              <li className="flex items-start gap-3">
                <span className="bg-neon-blue text-deep-blue w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">1</span>
                Проверьте вашу почту (включая папку спам)
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-neon-blue text-deep-blue w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">2</span>
                Скопируйте лицензионный ключ из письма
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-neon-blue text-deep-blue w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">3</span>
                Откройте расширение в браузере и введите ключ
              </li>
              <li className="flex items-start gap-3">
                <span className="bg-neon-blue text-deep-blue w-6 h-6 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-0.5">4</span>
                Наслаждайтесь Premium защитой от комаров!
              </li>
            </ol>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('home')}
              className="bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue px-8 py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-200"
            >
              Вернуться на главную
            </button>
            
            <a
              href="mailto:support@navilon.tech"
              className="border-2 border-neon-blue text-neon-blue px-8 py-3 rounded-xl font-semibold hover:bg-neon-blue hover:text-deep-blue transition-all duration-200"
            >
              Связаться с поддержкой
            </a>
          </div>

          {/* Additional info */}
          <div className="mt-8 text-sm text-soft-gray">
            <p>Возникли проблемы с активацией? Мы готовы помочь!</p>
            <p className="mt-2">
              Email: <a href="mailto:support@navilon.tech" className="text-neon-cyan hover:text-neon-blue">support@navilon.tech</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}