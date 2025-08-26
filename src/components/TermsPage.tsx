import React from 'react';

interface TermsPageProps {
  onNavigate: (page: string) => void;
}

export function TermsPage({ onNavigate }: TermsPageProps) {
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
          <h1 className="text-3xl lg:text-4xl font-bold text-warm-white mb-8">Terms of Service & Refunds</h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-soft-gray">
              
              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Условия использования</h2>
                <p>
                  Используя наш сервис Ultrasonic Mosquito Repellent, вы соглашаетесь с данными условиями. 
                  Сервис предоставляется "как есть" для персонального использования.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Premium подписка</h2>
                <p>Premium подписка включает:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Доступ ко всем расширенным функциям</li>
                  <li>Автоматическое продление каждый месяц</li>
                  <li>Техническую поддержку</li>
                  <li>Обновления и новые функции</li>
                </ul>
                <p className="mt-3">
                  Стоимость: $4.99 в месяц. Оплата списывается автоматически каждый месяц 
                  до отмены подписки.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Отмена подписки</h2>
                <p>
                  Вы можете отменить подписку в любое время, отправив запрос на 
                  <a href="mailto:support@navilon.tech" className="text-neon-cyan hover:text-neon-blue ml-1">
                    support@navilon.tech
                  </a>. 
                  После отмены доступ к Premium функциям сохраняется до конца оплаченного периода.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Политика возвратов</h2>
                <div className="bg-deep-blue/50 rounded-xl p-4 mb-4">
                  <h3 className="font-semibold text-neon-cyan mb-2">30 дней гарантии возврата денег</h3>
                  <p>
                    Мы предоставляем полный возврат средств в течение 30 дней с момента покупки, 
                    если вы не удовлетворены нашим продуктом.
                  </p>
                </div>
                
                <h3 className="font-semibold text-warm-white mb-2">Условия возврата:</h3>
                <ul className="list-disc pl-6 space-y-1">
                  <li>Запрос на возврат должен быть подан в течение 30 дней</li>
                  <li>Указание причины недовольства продуктом</li>
                  <li>Возврат обрабатывается в течение 5-7 рабочих дней</li>
                  <li>Возврат осуществляется тем же способом, которым была произведена оплата</li>
                </ul>

                <h3 className="font-semibold text-warm-white mb-2 mt-4">Как запросить возврат:</h3>
                <ol className="list-decimal pl-6 space-y-1">
                  <li>Отправьте письмо на <a href="mailto:refunds@navilon.tech" className="text-neon-cyan hover:text-neon-blue">refunds@navilon.tech</a></li>
                  <li>Укажите email, использованный при покупке</li>
                  <li>Опишите причину запроса возврата</li>
                  <li>Мы обработаем ваш запрос в течение 2 рабочих дней</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Ограничения</h2>
                <p>При использовании сервиса запрещается:</p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Распространять лицензионные ключи третьим лицам</li>
                  <li>Пытаться взломать или обойти систему лицензирования</li>
                  <li>Использовать сервис в коммерческих целях без разрешения</li>
                  <li>Нарушать авторские права</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Ответственность</h2>
                <p>
                  Мы не несем ответственности за прямые или косвенные убытки, 
                  связанные с использованием нашего продукта. Эффективность защиты от комаров 
                  может варьироваться в зависимости от условий использования.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Изменения условий</h2>
                <p>
                  Мы оставляем за собой право изменять данные условия. О существенных изменениях 
                  будем уведомлять пользователей по email за 30 дней до вступления в силу.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold text-warm-white mb-3">Поддержка</h2>
                <p>
                  По всем вопросам обращайтесь в нашу службу поддержки:
                </p>
                <div className="bg-medium-blue/30 rounded-xl p-4 mt-3">
                  <p>📧 Email: <a href="mailto:support@navilon.tech" className="text-neon-cyan hover:text-neon-blue">support@navilon.tech</a></p>
                  <p>💰 Возвраты: <a href="mailto:refunds@navilon.tech" className="text-neon-cyan hover:text-neon-blue">refunds@navilon.tech</a></p>
                  <p>⏰ Время ответа: в течение 24 часов</p>
                </div>
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