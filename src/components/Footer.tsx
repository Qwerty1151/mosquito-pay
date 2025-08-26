import React from 'react';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="bg-deep-blue border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-deep-blue" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                </svg>
              </div>
              <div>
                <div className="text-warm-white font-semibold">Mosquito Repellent</div>
                <div className="text-soft-gray text-sm">by Navilon Dev</div>
              </div>
            </div>
            <p className="text-soft-gray mb-4 max-w-md">
              Эффективная защита от комаров прямо в вашем браузере. 
              Без химии, без запаха, без лишних устройств.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://navilon.tech" className="text-neon-cyan hover:text-neon-blue transition-colors">
                Наvilon Dev
              </a>
              <span className="text-soft-gray">•</span>
              <span className="text-soft-gray">Технологии для жизни</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold text-warm-white mb-4">Навигация</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('home')}
                  className="text-soft-gray hover:text-neon-cyan transition-colors"
                >
                  Главная
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('pricing')}
                  className="text-soft-gray hover:text-neon-cyan transition-colors"
                >
                  Цены
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-soft-gray hover:text-neon-cyan transition-colors"
                >
                  Как работает
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold text-warm-white mb-4">Документы</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => onNavigate('privacy')}
                  className="text-soft-gray hover:text-neon-cyan transition-colors"
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('terms')}
                  className="text-soft-gray hover:text-neon-cyan transition-colors"
                >
                  Terms & Refunds
                </button>
              </li>
              <li>
                <a 
                  href="mailto:support@navilon.tech"
                  className="text-soft-gray hover:text-neon-cyan transition-colors"
                >
                  Поддержка
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-soft-gray text-sm">
            © 2024 Navilon Dev. Все права защищены.
          </div>
          
          <div className="flex items-center gap-6 text-sm">
            <div className="text-soft-gray">Защита от комаров нового поколения</div>
            <button 
              onClick={() => onNavigate('pricing')}
              className="bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue px-4 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-neon-blue/25 transition-all"
            >
              Купить Premium
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}