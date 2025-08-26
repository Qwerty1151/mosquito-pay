import { useState, useEffect } from 'react';
import { translations, defaultLanguage, Translation } from '../utils/translations';

export function useTranslation() {
  const [currentLanguage, setCurrentLanguage] = useState<string>(defaultLanguage);
  const [t, setT] = useState<Translation>(translations[defaultLanguage]);

  useEffect(() => {
    // Load language from localStorage
    const savedLanguage = localStorage.getItem('navilon-dev-language');
    if (savedLanguage && translations[savedLanguage]) {
      setCurrentLanguage(savedLanguage);
      setT(translations[savedLanguage]);
    }
  }, []);

  const changeLanguage = (languageCode: string) => {
    if (translations[languageCode]) {
      setCurrentLanguage(languageCode);
      setT(translations[languageCode]);
      localStorage.setItem('navilon-dev-language', languageCode);
    }
  };

  return {
    t,
    currentLanguage,
    changeLanguage,
    availableLanguages: Object.keys(translations)
  };
}