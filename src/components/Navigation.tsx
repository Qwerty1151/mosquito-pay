import React from 'react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

export function Navigation({ currentPage, onPageChange }: NavigationProps) {
  const navItems = [
    { id: 'home', label: 'Главная', href: '/' },
    { id: 'pricing', label: 'Цены', href: '/pricing' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-deep-blue/90 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <button
            onClick={() => onPageChange('home')}
            className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-deep-blue" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div>
              <div className="text-warm-white font-semibold">Mosquito Repellent</div>
              <div className="text-soft-gray text-xs">by Navilon Dev</div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onPageChange(item.id)}
                className={`px-3 py-2 rounded-lg transition-all duration-200 ${
                  currentPage === item.id
                    ? 'text-neon-blue bg-medium-blue/50'
                    : 'text-soft-gray hover:text-warm-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            <button
              onClick={() => onPageChange('pricing')}
              className="bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue px-6 py-2 rounded-lg font-medium hover:shadow-lg hover:shadow-neon-blue/25 transition-all duration-200"
            >
              Купить Premium
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => onPageChange('pricing')}
              className="bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue px-4 py-2 rounded-lg font-medium text-sm"
            >
              Premium
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}