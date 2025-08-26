import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown, Globe } from './ui/icons';
import { useTranslation } from '../hooks/useTranslation';
import { languages } from '../utils/translations';

export function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const { currentLanguage, changeLanguage } = useTranslation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find(lang => lang.code === currentLanguage) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode: string) => {
    changeLanguage(languageCode);
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-medium-blue/50 hover:bg-medium-blue transition-all duration-300 hover:neon-glow border border-border"
      >
        <span className="text-lg">{currentLang.flag}</span>
        <span className="hidden sm:inline text-warm-white font-medium">
          {currentLang.name}
        </span>
        <Globe className="h-4 w-4 text-soft-gray sm:hidden" />
        <ChevronDown className={`h-4 w-4 text-soft-gray transition-transform duration-200 ${
          isOpen ? 'rotate-180' : ''
        }`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 glass-effect rounded-lg border border-border shadow-xl z-50">
          <div className="py-2">
            {languages.map((language) => (
              <button
                key={language.code}
                onClick={() => handleLanguageChange(language.code)}
                className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-medium-blue/50 transition-colors duration-200 ${
                  currentLanguage === language.code 
                    ? 'bg-medium-blue text-neon-blue' 
                    : 'text-warm-white'
                }`}
              >
                <span className="text-lg">{language.flag}</span>
                <span className="font-medium">{language.name}</span>
                {currentLanguage === language.code && (
                  <span className="ml-auto text-neon-blue">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}