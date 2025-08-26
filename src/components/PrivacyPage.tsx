import React from 'react';

interface PrivacyPageProps {
  onNavigate: (page: string) => void;
}

export function PrivacyPage({ onNavigate }: PrivacyPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-medium-blue to-deep-blue">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <button
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 text-soft-gray hover:text-neon-cyan transition-colors mb-8"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Назад
        </button>

        <div className="bg-gradient-to-br from-medium-blue/50 to-light-blue/30 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/10">
          <h1 className="text-3xl lg:text-4xl font-bold text-warm-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-soft-gray">
              
              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Сбор информации</h2>
                <p>
                  Мы собираем только минимальную информацию, необходимую для работы нашего сервиса:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Email адрес для отправки лицензионного ключа</li>
                  <li>Данные об использовании расширения (анонимно)</li>
                  <li>Информацию о платежах (обрабатывается Payeer)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Использование данных</h2>
                <p>Ваши данные используются исключительно для:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Предоставления доступа к Premium функциям</li>
                  <li>Отправки лицензионных ключей</li>
                  <li>Улучшения качества нашего продукта</li>
                  <li>Связи с вами по вопросам поддержки</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Защита данных</h2>
                <p>
                  Мы применяем современные методы защиты информации, включая SSL-шифрование 
                  всех передаваемых данных. Платежная информация обрабатывается исключительно 
                  через защищенную систему Payeer и не сохраняется на наших серверах.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Передача третьим лицам</h2>
                <p>
                  Мы не продаем, не передаем и не предоставляем ваши персональные данные 
                  третьим лицам без вашего согласия, за исключением случаев, предусмотренных 
                  законодательством.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Cookies и аналитика</h2>
                <p>
                  Мы используем минимальное количество cookies для обеспечения работы сайта. 
                  Анонимная аналитика использования помогает нам улучшать продукт.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Ваши права</h2>
                <p>Вы имеете право:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Запросить удаление ваших данных</li>
                  <li>Получить копию хранящихся о вас данных</li>
                  <li>Исправить неточную информацию</li>
                  <li>Отозвать согласие на обработку данных</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Контакты</h2>
                <p>
                  По всем вопросам, связанным с обработкой персональных данных, 
                  обращайтесь по адресу: 
                  <a href="mailto:privacy@navilon.tech" className="text-neon-cyan hover:text-neon-blue ml-1">
                    privacy@navilon.tech
                  </a>
                </p>
              </section>

              <section className="border-t border-white/10 pt-6 mt-8">
                <p className="text-sm">
                  Последнее обновление: 26 августа 2024 года<br />
                  Действует с момента публикации
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}