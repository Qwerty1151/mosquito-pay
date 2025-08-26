import React from 'react';

interface SEOHeadProps {
  currentPage: string;
}

export function SEOHead({ currentPage }: SEOHeadProps) {
  const getPageMeta = (page: string) => {
    switch (page) {
      case 'home':
        return {
          title: 'Ultrasonic Mosquito Repellent - Защита от комаров в браузере',
          description: 'Эффективная защита от комаров прямо в вашем браузере. Без химии, без запаха. Premium подписка $4.99/месяц. Мгновенная активация.',
          keywords: 'отпугиватель комаров, браузерное расширение, ультразвук, защита от комаров, без химии'
        };
      case 'pricing':
        return {
          title: 'Premium подписка - Ultrasonic Mosquito Repellent',
          description: 'Получите Premium защиту от комаров за $4.99/месяц. Автоматическая смена частот, фоновая работа, синхронизация устройств.',
          keywords: 'premium подписка, оплата, защита от комаров, расширенные функции'
        };
      case 'success':
        return {
          title: 'Оплата успешна - Ultrasonic Mosquito Repellent',
          description: 'Ваша Premium подписка активирована. Лицензионный ключ отправлен на почту.',
          keywords: 'успешная оплата, активация, лицензия'
        };
      case 'fail':
        return {
          title: 'Ошибка оплаты - Ultrasonic Mosquito Repellent',
          description: 'Произошла ошибка при оплате. Попробуйте еще раз или обратитесь в поддержку.',
          keywords: 'ошибка оплаты, поддержка, помощь'
        };
      case 'privacy':
        return {
          title: 'Privacy Policy - Ultrasonic Mosquito Repellent',
          description: 'Политика конфиденциальности сервиса Ultrasonic Mosquito Repellent. Защита персональных данных.',
          keywords: 'политика конфиденциальности, защита данных, приватность'
        };
      case 'terms':
        return {
          title: 'Terms & Refunds - Ultrasonic Mosquito Repellent',
          description: 'Условия использования и политика возвратов. 30 дней гарантии возврата денег.',
          keywords: 'условия использования, возврат денег, гарантия'
        };
      default:
        return {
          title: 'Ultrasonic Mosquito Repellent - Защита от комаров в браузере',
          description: 'Эффективная защита от комаров прямо в вашем браузере. Без химии, без запаха.',
          keywords: 'отпугиватель комаров, браузерное расширение, ультразвук'
        };
    }
  };

  const meta = getPageMeta(currentPage);

  React.useEffect(() => {
    // Update document title
    document.title = meta.title;
    
    // Update meta description
    let descriptionMeta = document.querySelector('meta[name="description"]');
    if (!descriptionMeta) {
      descriptionMeta = document.createElement('meta');
      descriptionMeta.setAttribute('name', 'description');
      document.head.appendChild(descriptionMeta);
    }
    descriptionMeta.setAttribute('content', meta.description);
    
    // Update meta keywords
    let keywordsMeta = document.querySelector('meta[name="keywords"]');
    if (!keywordsMeta) {
      keywordsMeta = document.createElement('meta');
      keywordsMeta.setAttribute('name', 'keywords');
      document.head.appendChild(keywordsMeta);
    }
    keywordsMeta.setAttribute('content', meta.keywords);

    // Update Open Graph tags
    const updateOGTag = (property: string, content: string) => {
      let ogTag = document.querySelector(`meta[property="${property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', content);
    };

    updateOGTag('og:title', meta.title);
    updateOGTag('og:description', meta.description);
    updateOGTag('og:type', 'website');
    updateOGTag('og:url', `https://mosquito.navilon.tech${currentPage === 'home' ? '' : `/${currentPage}`}`);
    updateOGTag('og:site_name', 'Ultrasonic Mosquito Repellent');
    
    // Update Twitter Card tags
    const updateTwitterTag = (name: string, content: string) => {
      let twitterTag = document.querySelector(`meta[name="${name}"]`);
      if (!twitterTag) {
        twitterTag = document.createElement('meta');
        twitterTag.setAttribute('name', name);
        document.head.appendChild(twitterTag);
      }
      twitterTag.setAttribute('content', content);
    };

    updateTwitterTag('twitter:card', 'summary_large_image');
    updateTwitterTag('twitter:title', meta.title);
    updateTwitterTag('twitter:description', meta.description);

  }, [currentPage, meta]);

  return null;
}