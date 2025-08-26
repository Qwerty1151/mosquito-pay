export interface Translation {
  // Navigation
  nav: {
    home: string;
    about: string;
    services: string;
    cases: string;
    blog: string;
    careers: string;
    contact: string;
    ambassador: string;
  };

  // Ambassador Page
  ambassador: {
    title: string;
    subtitle: string;
    heroTitle: string;
    heroDescription: string;
    heroButton: string;
    progressLabel: string;
    goalLabel: string;
    raisedLabel: string;
    aboutProject: string;
    howItWorks: string;
    latestDonors: string;
    totalStats: string;
    ambassadorRank: string;
    shareProject: string;
    faq: string;
    faqTrust: string;
    faqMoney: string;
    projects: {
      itEducation: {
        title: string;
        description: string;
        cta: string;
      };
      accessibility: {
        title: string;
        description: string;
        cta: string;
      };
      greentech: {
        title: string;
        description: string;
        cta: string;
      };
    };
    steps: {
      step1: string;
      step2: string;
      step3: string;
      step4: string;
    };
  };
  
  // Common
  common: {
    readMore: string;
    learnMore: string;
    getInTouch: string;
    ourServices: string;
    viewAll: string;
    loading: string;
    error: string;
    success: string;
    back: string;
    next: string;
    previous: string;
    send: string;
    submit: string;
    cancel: string;
    close: string;
  };

  // Hero Section
  hero: {
    title: string;
    subtitle: string;
    description: string;
    ctaContact: string;
    ctaServices: string;
  };

  // Services
  services: {
    title: string;
    subtitle: string;
    software: {
      title: string;
      description: string;
    };
    games: {
      title: string;
      description: string;
    };
    ai: {
      title: string;
      description: string;
    };
    consulting: {
      title: string;
      description: string;
    };
    cloud: {
      title: string;
      description: string;
    };
    mobile: {
      title: string;
      description: string;
    };
  };

  // About
  about: {
    title: string;
    subtitle: string;
    mission: string;
    vision: string;
    values: string;
    team: string;
    history: string;
    approach: string;
  };

  // Why Us
  whyUs: {
    title: string;
    subtitle: string;
    experience: string;
    projects: string;
    countries: string;
    clients: string;
  };

  // Testimonials
  testimonials: {
    title: string;
    subtitle: string;
  };

  // Cases
  cases: {
    title: string;
    subtitle: string;
    challenge: string;
    solution: string;
    result: string;
    technologies: string;
  };

  // Blog
  blog: {
    title: string;
    subtitle: string;
    readTime: string;
    author: string;
    date: string;
    category: string;
  };

  // Careers
  careers: {
    title: string;
    subtitle: string;
    openPositions: string;
    whyWorkHere: string;
    benefits: string;
    apply: string;
    requirements: string;
    responsibilities: string;
  };

  // Contact
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    company: string;
    message: string;
    phone: string;
    address: string;
    getInTouch: string;
    followUs: string;
  };

  // Footer
  footer: {
    description: string;
    quickLinks: string;
    services: string;
    company: string;
    legal: string;
    privacy: string;
    terms: string;
    subscribe: string;
    newsletter: string;
    rights: string;
  };

  // SEO
  seo: {
    home: {
      title: string;
      description: string;
      keywords: string;
    };
    about: {
      title: string;
      description: string;
      keywords: string;
    };
    services: {
      title: string;
      description: string;
      keywords: string;
    };
    cases: {
      title: string;
      description: string;
      keywords: string;
    };
    blog: {
      title: string;
      description: string;
      keywords: string;
    };
    careers: {
      title: string;
      description: string;
      keywords: string;
    };
    contact: {
      title: string;
      description: string;
      keywords: string;
    };
    ambassador: {
      title: string;
      description: string;
      keywords: string;
    };
  };
}

export const translations: Record<string, Translation> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      cases: "Cases",
      blog: "Blog",
      careers: "Careers",
      contact: "Contact",
      ambassador: "Support Project"
    },
    ambassador: {
      title: "Ambassador Program",
      subtitle: "Join us in making a difference",
      heroTitle: "I support IT education for children. Help me too!",
      heroDescription: "We are raising funds for free online programming courses for children from low-income families. Every ambassador helps their group of students enter the world of technology.",
      heroButton: "Support children's courses",
      progressLabel: "Progress",
      goalLabel: "Goal",
      raisedLabel: "Raised",
      aboutProject: "About the Project",
      howItWorks: "How It Works",
      latestDonors: "Latest Donors",
      totalStats: "Total Statistics",
      ambassadorRank: "Ambassador Ranking",
      shareProject: "Share Project",
      faq: "Frequently Asked Questions",
      faqTrust: "Why should I trust this platform?",
      faqMoney: "Where does the money go?",
      projects: {
        itEducation: {
          title: "I support IT education for children. Help me too!",
          description: "We are raising funds for free online programming courses for children from low-income families. Every ambassador helps their group of students enter the world of technology.",
          cta: "Support children's courses"
        },
        accessibility: {
          title: "I want technology to be accessible to everyone. Support me!",
          description: "Your donations help create free digital tools for people with disabilities - voice assistants, chatbots and mobile applications. Every contribution = a real feature for those who need it.",
          cta: "Support inclusive technologies"
        },
        greentech: {
          title: "I choose the future of the planet. Let's make it green together!",
          description: "Navilon GreenTech develops digital solutions for ecology: carbon footprint tracking, waste sorting, finding recycling points. Together we reduce harm to nature and build a sustainable future.",
          cta: "Support green technologies"
        }
      },
      steps: {
        step1: "You donate",
        step2: "Project develops",
        step3: "Ambassador gets support",
        step4: "We change the world together"
      }
    },
    common: {
      readMore: "Read More",
      learnMore: "Learn More",
      getInTouch: "Get in Touch",
      ourServices: "Our Services",
      viewAll: "View All",
      loading: "Loading...",
      error: "Error",
      success: "Success",
      back: "Back",
      next: "Next",
      previous: "Previous",
      send: "Send",
      submit: "Submit",
      cancel: "Cancel",
      close: "Close"
    },
    hero: {
      title: "Navilon Dev",
      subtitle: "Navigating Innovation",
      description: "International IT company specializing in software development, game development, AI solutions, and IT consulting. We transform ideas into cutting-edge digital solutions.",
      ctaContact: "Get in Touch",
      ctaServices: "Our Services"
    },
    services: {
      title: "Our Services",
      subtitle: "Comprehensive IT solutions for modern businesses",
      software: {
        title: "Software Development",
        description: "Custom enterprise solutions, web applications, and mobile apps built with cutting-edge technologies."
      },
      games: {
        title: "Game Development",
        description: "PC, mobile, AR/VR games with immersive experiences and innovative gameplay mechanics."
      },
      ai: {
        title: "AI & Innovation",
        description: "Machine learning, automation, and artificial intelligence solutions for business optimization."
      },
      consulting: {
        title: "IT Consulting",
        description: "Strategic technology consulting and digital transformation guidance for your business."
      },
      cloud: {
        title: "Cloud Solutions",
        description: "Scalable cloud infrastructure, migration services, and cloud-native application development."
      },
      mobile: {
        title: "Mobile Development",
        description: "Native and cross-platform mobile applications for iOS and Android platforms."
      }
    },
    about: {
      title: "About Navilon Dev",
      subtitle: "Navigating the future of technology",
      mission: "Our mission is to deliver innovative IT solutions that drive business growth and technological advancement.",
      vision: "To be the leading international IT company that shapes the future of digital innovation.",
      values: "Innovation, Quality, Collaboration, and Excellence in everything we do.",
      team: "Our Team",
      history: "Our Story",
      approach: "Our Approach"
    },
    whyUs: {
      title: "Why Choose Navilon Dev",
      subtitle: "Numbers that speak for themselves",
      experience: "Years of Experience",
      projects: "Projects Completed",
      countries: "Countries Served",
      clients: "Happy Clients"
    },
    testimonials: {
      title: "What Our Clients Say",
      subtitle: "Success stories from around the world"
    },
    cases: {
      title: "Case Studies",
      subtitle: "Explore our successful projects and solutions",
      challenge: "Challenge",
      solution: "Solution",
      result: "Result",
      technologies: "Technologies Used"
    },
    blog: {
      title: "Blog & Insights",
      subtitle: "Latest trends, technologies, and industry insights",
      readTime: "min read",
      author: "Author",
      date: "Date",
      category: "Category"
    },
    careers: {
      title: "Join Our Team",
      subtitle: "Be part of innovation",
      openPositions: "Open Positions",
      whyWorkHere: "Why Work at Navilon Dev",
      benefits: "Benefits & Perks",
      apply: "Apply Now",
      requirements: "Requirements",
      responsibilities: "Responsibilities"
    },
    contact: {
      title: "Get in Touch",
      subtitle: "Ready to start your project? Let's talk!",
      name: "Full Name",
      email: "Email Address",
      company: "Company",
      message: "Message",
      phone: "Phone",
      address: "Address",
      getInTouch: "Get in Touch",
      followUs: "Follow Us"
    },
    footer: {
      description: "International IT company specializing in software development, game development, AI solutions, and IT consulting.",
      quickLinks: "Quick Links",
      services: "Services",
      company: "Company",
      legal: "Legal",
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      subscribe: "Subscribe",
      newsletter: "Subscribe to our newsletter",
      rights: "All rights reserved."
    },
    seo: {
      home: {
        title: "Navilon Dev - International IT Company | Software Development & AI Solutions",
        description: "Navilon Dev is an international IT company specializing in software development, game development, AI solutions, and IT consulting. Transform your ideas into cutting-edge digital solutions.",
        keywords: "navilon dev, international IT company, software development, game development, AI solutions, IT consulting, web development, mobile apps, artificial intelligence"
      },
      about: {
        title: "About Navilon Dev - International IT Innovation Company",
        description: "Learn about Navilon Dev, an international IT company dedicated to innovation in software development, game development, and AI solutions. Discover our mission, values, and team.",
        keywords: "about navilon dev, IT company mission, international software development, technology innovation, AI solutions company"
      },
      services: {
        title: "IT Services - Software Development, Games, AI & Consulting | Navilon Dev",
        description: "Comprehensive IT services including software development, game development, AI solutions, cloud services, and IT consulting. Professional technology solutions for modern businesses.",
        keywords: "IT services, software development services, game development, AI solutions, cloud computing, IT consulting, web development, mobile development"
      },
      cases: {
        title: "Case Studies & Portfolio - Navilon Dev Success Stories",
        description: "Explore Navilon Dev's successful projects and case studies. Discover how we've helped businesses achieve their goals through innovative IT solutions.",
        keywords: "case studies, IT projects portfolio, software development projects, successful implementations, navilon dev portfolio"
      },
      blog: {
        title: "Tech Blog & Insights - Latest IT Trends | Navilon Dev",
        description: "Stay updated with the latest technology trends, industry insights, and expert opinions from Navilon Dev's blog. AI, software development, and innovation topics.",
        keywords: "tech blog, IT insights, technology trends, software development blog, AI articles, innovation insights"
      },
      careers: {
        title: "Careers at Navilon Dev - Join Our International IT Team",
        description: "Join Navilon Dev's international team of IT professionals. Explore career opportunities in software development, game development, AI, and IT consulting.",
        keywords: "IT careers, software developer jobs, game developer careers, AI engineer positions, IT consulting jobs, navilon dev careers"
      },
      contact: {
        title: "Contact Navilon Dev - Get Professional IT Solutions",
        description: "Contact Navilon Dev for professional IT services including software development, game development, AI solutions, and IT consulting. Get in touch for your project needs.",
        keywords: "contact navilon dev, IT services contact, software development inquiry, professional IT consulting, project consultation"
      },
      ambassador: {
        title: "Support IT Projects - Navilon Ambassador Program",
        description: "Join Navilon's Ambassador Program and support meaningful IT projects including children's education, accessibility solutions, and green technology initiatives. Make a difference today.",
        keywords: "charity platform, IT education, tech for good, accessibility technology, green tech, ambassador program, technology donations, social impact"
      }
    }
  },
  ru: {
    nav: {
      home: "Главная",
      about: "О нас",
      services: "Услуги",
      cases: "Кейсы",
      blog: "Блог",
      careers: "Карьера",
      contact: "Контакты",
      ambassador: "Поддержать проект"
    },
    ambassador: {
      title: "Программа амбасадоров",
      subtitle: "Присоединяйтесь к нам, чтобы изменить мир",
      heroTitle: "Я поддерживаю IT-образование для детей. Помоги и ты!",
      heroDescription: "Мы собираем средства на бесплатные онлайн-курсы программирования для детей из семей с низким доходом. Каждый амбасадор помогает своей группе учеников войти в мир технологий.",
      heroButton: "Поддержать курс для детей",
      progressLabel: "Прогресс",
      goalLabel: "Цель",
      raisedLabel: "Собрано",
      aboutProject: "О проекте",
      howItWorks: "Как это работает",
      latestDonors: "Последние доноры",
      totalStats: "Общая статистика",
      ambassadorRank: "Рейтинг амбасадора",
      shareProject: "Поделиться проектом",
      faq: "Часто задаваемые вопросы",
      faqTrust: "Почему стоит доверять этой платформе?",
      faqMoney: "Куда идут деньги?",
      projects: {
        itEducation: {
          title: "Я поддерживаю IT-образование для детей. Помоги и ты!",
          description: "Мы собираем средства на бесплатные онлайн-курсы программирования для детей из семей с низким доходом. Каждый амбасадор помогает своей группе учеников войти в мир технологий.",
          cta: "Поддержать курс для детей"
        },
        accessibility: {
          title: "Я хочу, чтобы технологии стали доступными каждому. Поддержи меня!",
          description: "Ваши пожертвования помогают создать бесплатные цифровые инструменты для людей с ограниченными возможностями — голосовые помощники, чат-боты и мобильные приложения. Каждый вклад = реальная функция для тех, кто в ней нуждается.",
          cta: "Поддержать инклюзивные технологии"
        },
        greentech: {
          title: "Я выбираю будущее планеты. Давайте сделаем его зелёным вместе!",
          description: "Navilon GreenTech разрабатывает цифровые решения для экологии: учёт углеродного следа, сортировка мусора, поиск пунктов переработки. Вместе мы сокращаем вред природе и строим устойчивое будущее.",
          cta: "Поддержать зелёные технологии"
        }
      },
      steps: {
        step1: "Вы жертвуете",
        step2: "Проект развивается",
        step3: "Амбасадор получает поддержку",
        step4: "Мы все вместе меняем мир"
      }
    },
    common: {
      readMore: "Читать далее",
      learnMore: "Узнать больше",
      getInTouch: "Связаться",
      ourServices: "Наши услуги",
      viewAll: "Посмотреть все",
      loading: "Загрузка...",
      error: "Ошибка",
      success: "Успех",
      back: "Назад",
      next: "Далее",
      previous: "Предыдущий",
      send: "Отправить",
      submit: "Отправить",
      cancel: "Отмена",
      close: "Закрыть"
    },
    hero: {
      title: "Navilon Dev",
      subtitle: "Навигация инноваций",
      description: "Международная IT-компания, специализирующаяся на разработке ПО, играх, AI-решениях и IT-консалтинге. Мы превращаем идеи в передовые цифровые решения.",
      ctaContact: "Связаться с нами",
      ctaServices: "Наши услуги"
    },
    services: {
      title: "Наши услуги",
      subtitle: "Комплексные IT-решения для современного бизнеса",
      software: {
        title: "Разработка ПО",
        description: "Корпоративные решения, веб-приложения и мобильные приложения на передовых технологиях."
      },
      games: {
        title: "Разработка игр",
        description: "PC, мобильные, AR/VR игры с захватывающим опытом и инновационной механикой."
      },
      ai: {
        title: "AI и инновации",
        description: "Машинное обучение, автоматизация и решения искусственного интеллекта для бизнеса."
      },
      consulting: {
        title: "IT-консалтинг",
        description: "Стратегический технологический консалтинг и руководство по цифровой трансформации."
      },
      cloud: {
        title: "Облачные решения",
        description: "Масштабируемая облачная инфраструктура, миграция и разработка облачных приложений."
      },
      mobile: {
        title: "Мобильная разработка",
        description: "Нативные и кросс-платформенные мобильные приложения для iOS и Android."
      }
    },
    about: {
      title: "О компании Navilon Dev",
      subtitle: "Навигация в будущее технологий",
      mission: "Наша миссия - предоставлять инновационные IT-решения, которые стимулируют рост бизнеса и технологический прогресс.",
      vision: "Стать ведущей международной IT-компанией, формирующей будущее цифровых инноваций.",
      values: "Инновации, качество, сотрудничество и превосходство во всем, что мы делаем.",
      team: "Наша команда",
      history: "Наша история",
      approach: "Наш подход"
    },
    whyUs: {
      title: "Почему выбирают Navilon Dev",
      subtitle: "Цифры, которые говорят сами за себя",
      experience: "Лет опыта",
      projects: "Проектов завершено",
      countries: "Стран обслуживается",
      clients: "Довольных клиентов"
    },
    testimonials: {
      title: "Что говорят наши клиенты",
      subtitle: "Истории успеха со всего мира"
    },
    cases: {
      title: "Кейсы",
      subtitle: "Изучите наши успешные проекты и решения",
      challenge: "Задача",
      solution: "Решение",
      result: "Результат",
      technologies: "Используемые технологии"
    },
    blog: {
      title: "Блог и аналитика",
      subtitle: "Последние тренды, технологии и отраслевая аналитика",
      readTime: "мин чтения",
      author: "Автор",
      date: "Дата",
      category: "Категория"
    },
    careers: {
      title: "Присоединяйтесь к нашей команде",
      subtitle: "Станьте частью инноваций",
      openPositions: "Открытые вакансии",
      whyWorkHere: "Почему стоит работать в Navilon Dev",
      benefits: "Льготы и привилегии",
      apply: "Подать заявку",
      requirements: "Требования",
      responsibilities: "Обязанности"
    },
    contact: {
      title: "Связаться с нами",
      subtitle: "Готовы начать свой проект? Давайте поговорим!",
      name: "Полное имя",
      email: "Email адрес",
      company: "Компания",
      message: "Сообщение",
      phone: "Телефон",
      address: "Адрес",
      getInTouch: "Связаться",
      followUs: "Подписывайтесь"
    },
    footer: {
      description: "Международная IT-компания, специализирующаяся на разработке ПО, играх, AI-решениях и IT-консалтинге.",
      quickLinks: "Быстрые ссылки",
      services: "Услуги",
      company: "Компания",
      legal: "Юридическая информация",
      privacy: "Политика конфиденциальности",
      terms: "Условия использования",
      subscribe: "Подписаться",
      newsletter: "Подпишитесь на нашу рассылку",
      rights: "Все права защищены."
    },
    seo: {
      home: {
        title: "Navilon Dev - Международная IT-компания | Разработка ПО и AI-решения",
        description: "Navilon Dev - международная IT-компания, специализирующаяся на разработке ПО, играх, AI-решениях и IT-консалтинге. Превращаем идеи в передовые цифровые решения.",
        keywords: "navilon dev, международная IT компания, разработка ПО, разработка игр, AI решения, IT консалтинг, веб разработка, мобильные приложения, искусственный интеллект"
      },
      about: {
        title: "О компании Navilon Dev - Международная IT-инновационная компания",
        description: "Узнайте о Navilon Dev - международной IT-компании, посвященной инновациям в разработке ПО, играх и AI-решениях. Откройте для себя нашу миссию, ценности и команду.",
        keywords: "о navilon dev, миссия IT компании, международная разработка ПО, технологические инновации, компания AI решений"
      },
      services: {
        title: "IT-услуги - Разработка ПО, игр, AI и консалтинг | Navilon Dev",
        description: "Комплексные IT-услуги включая разработку ПО, игр, AI-решения, облачные сервисы и IT-консалтинг. Профессиональные технологические решения для современного бизнеса.",
        keywords: "IT услуги, услуги разработки ПО, разработка игр, AI решения, облачные вычисления, IT консалтинг, веб разработка, мобильная разработка"
      },
      cases: {
        title: "Кейсы и портфолио - Истории успеха Navilon Dev",
        description: "Изучите успешные проекты и кейсы Navilon Dev. Узнайте, как мы помогали бизнесу достигать целей через инновационные IT-решения.",
        keywords: "кейсы, портфолио IT проектов, проекты разработки ПО, успешные внедрения, портфолио navilon dev"
      },
      blog: {
        title: "Технический блог и аналитика - Последние IT-тренды | Navilon Dev",
        description: "Следите за последними технологическими трендами, отраслевой аналитикой и экспертными мнениями в блоге Navilon Dev. AI, разработка ПО и инновации.",
        keywords: "технический блог, IT аналитика, технологические тренды, блог разработки ПО, статьи AI, инновационные идеи"
      },
      careers: {
        title: "Карьера в Navilon Dev - Присоединяйтесь к международной IT-команде",
        description: "Присоединяйтесь к международной команде IT-профессионалов Navilon Dev. Изучите карьерные возможности в разработке ПО, игр, AI и IT-консалтинге.",
        keywords: "IT карьера, вакансии разработчика ПО, карьера разработчика игр, позиции AI инженера, работа IT консультанта, карьера navilon dev"
      },
      contact: {
        title: "Контакты Navilon Dev - Получите профессиональные IT-решения",
        description: "Свяжитесь с Navilon Dev для получения профессиональных IT-услуг включая разработку ПО, игр, AI-решения и IT-консалтинг. Обратитесь для обсуждения вашего проекта.",
        keywords: "контакты navilon dev, контакты IT услуг, запрос разработки ПО, профессиональный IT консалтинг, консультация проекта"
      },
      ambassador: {
        title: "Поддержать IT-проекты - Программа амбасадоров Navilon",
        description: "Присоединяйтесь к программе амбасадоров Navilon и поддерживайте значимые IT-проекты: образование детей, решения для доступности и зеленые технологии. Измените мир сегодня.",
        keywords: "благотворительная платформа, IT образование, технологии для добра, доступные технологии, зеленые технологии, программа амбасадоров, пожертвования на технологии"
      }
    }
  },
  de: {
    nav: {
      home: "Startseite",
      about: "Über uns",
      services: "Dienstleistungen",
      cases: "Fallstudien",
      blog: "Blog",
      careers: "Karriere",
      contact: "Kontakt"
    },
    common: {
      readMore: "Mehr lesen",
      learnMore: "Mehr erfahren",
      getInTouch: "Kontakt aufnehmen",
      ourServices: "Unsere Dienstleistungen",
      viewAll: "Alle anzeigen",
      loading: "Wird geladen...",
      error: "Fehler",
      success: "Erfolg",
      back: "Zurück",
      next: "Weiter",
      previous: "Vorherige",
      send: "Senden",
      submit: "Senden",
      cancel: "Abbrechen",
      close: "Schließen"
    },
    hero: {
      title: "Navilon Dev",
      subtitle: "Navigation der Innovation",
      description: "Internationales IT-Unternehmen spezialisiert auf Softwareentwicklung, Spieleentwicklung, KI-Lösungen und IT-Beratung. Wir verwandeln Ideen in modernste digitale Lösungen.",
      ctaContact: "Kontakt aufnehmen",
      ctaServices: "Unsere Dienstleistungen"
    },
    services: {
      title: "Unsere Dienstleistungen",
      subtitle: "Umfassende IT-Lösungen für moderne Unternehmen",
      software: {
        title: "Softwareentwicklung",
        description: "Maßgeschneiderte Unternehmenslösungen, Webanwendungen und mobile Apps mit modernsten Technologien."
      },
      games: {
        title: "Spieleentwicklung",
        description: "PC-, Mobile-, AR/VR-Spiele mit immersiven Erfahrungen und innovativen Gameplay-Mechaniken."
      },
      ai: {
        title: "KI & Innovation",
        description: "Maschinelles Lernen, Automatisierung und KI-Lösungen für Geschäftsoptimierung."
      },
      consulting: {
        title: "IT-Beratung",
        description: "Strategische Technologieberatung und digitale Transformationsbegleitung für Ihr Unternehmen."
      },
      cloud: {
        title: "Cloud-Lösungen",
        description: "Skalierbare Cloud-Infrastruktur, Migrationsdienste und Cloud-native Anwendungsentwicklung."
      },
      mobile: {
        title: "Mobile Entwicklung",
        description: "Native und plattformübergreifende mobile Anwendungen für iOS- und Android-Plattformen."
      }
    },
    about: {
      title: "Über Navilon Dev",
      subtitle: "Navigation in die Zukunft der Technologie",
      mission: "Unsere Mission ist es, innovative IT-Lösungen zu liefern, die Geschäftswachstum und technologischen Fortschritt vorantreiben.",
      vision: "Das führende internationale IT-Unternehmen zu sein, das die Zukunft der digitalen Innovation prägt.",
      values: "Innovation, Qualität, Zusammenarbeit und Exzellenz in allem, was wir tun.",
      team: "Unser Team",
      history: "Unsere Geschichte",
      approach: "Unser Ansatz"
    },
    whyUs: {
      title: "Warum Navilon Dev wählen",
      subtitle: "Zahlen, die für sich sprechen",
      experience: "Jahre Erfahrung",
      projects: "Abgeschlossene Projekte",
      countries: "Bediente Länder",
      clients: "Zufriedene Kunden"
    },
    testimonials: {
      title: "Was unsere Kunden sagen",
      subtitle: "Erfolgsgeschichten aus aller Welt"
    },
    cases: {
      title: "Fallstudien",
      subtitle: "Entdecken Sie unsere erfolgreichen Projekte und Lösungen",
      challenge: "Herausforderung",
      solution: "Lösung",
      result: "Ergebnis",
      technologies: "Verwendete Technologien"
    },
    blog: {
      title: "Blog & Einblicke",
      subtitle: "Neueste Trends, Technologien und Brancheneinblicke",
      readTime: "Min Lesezeit",
      author: "Autor",
      date: "Datum",
      category: "Kategorie"
    },
    careers: {
      title: "Treten Sie unserem Team bei",
      subtitle: "Seien Sie Teil der Innovation",
      openPositions: "Offene Stellen",
      whyWorkHere: "Warum bei Navilon Dev arbeiten",
      benefits: "Vorteile & Vergünstigungen",
      apply: "Jetzt bewerben",
      requirements: "Anforderungen",
      responsibilities: "Verantwortlichkeiten"
    },
    contact: {
      title: "Kontakt aufnehmen",
      subtitle: "Bereit, Ihr Projekt zu starten? Sprechen wir!",
      name: "Vollständiger Name",
      email: "E-Mail-Adresse",
      company: "Unternehmen",
      message: "Nachricht",
      phone: "Telefon",
      address: "Adresse",
      getInTouch: "Kontakt aufnehmen",
      followUs: "Folgen Sie uns"
    },
    footer: {
      description: "Internationales IT-Unternehmen spezialisiert auf Softwareentwicklung, Spieleentwicklung, KI-Lösungen und IT-Beratung.",
      quickLinks: "Schnelllinks",
      services: "Dienstleistungen",
      company: "Unternehmen",
      legal: "Rechtliches",
      privacy: "Datenschutzerklärung",
      terms: "Nutzungsbedingungen",
      subscribe: "Abonnieren",
      newsletter: "Newsletter abonnieren",
      rights: "Alle Rechte vorbehalten."
    },
    seo: {
      home: {
        title: "Navilon Dev - Internationales IT-Unternehmen | Softwareentwicklung & KI-Lösungen",
        description: "Navilon Dev ist ein internationales IT-Unternehmen spezialisiert auf Softwareentwicklung, Spieleentwicklung, KI-Lösungen und IT-Beratung. Verwandeln Sie Ihre Ideen in modernste digitale Lösungen.",
        keywords: "navilon dev, internationales IT-Unternehmen, Softwareentwicklung, Spieleentwicklung, KI-Lösungen, IT-Beratung, Webentwicklung, mobile Apps, künstliche Intelligenz"
      },
      about: {
        title: "Über Navilon Dev - Internationales IT-Innovationsunternehmen",
        description: "Erfahren Sie mehr über Navilon Dev, ein internationales IT-Unternehmen, das sich der Innovation in Softwareentwicklung, Spieleentwicklung und KI-Lösungen widmet.",
        keywords: "über navilon dev, IT-Unternehmensmission, internationale Softwareentwicklung, Technologieinnovation, KI-Lösungsunternehmen"
      },
      services: {
        title: "IT-Dienstleistungen - Software, Spiele, KI & Beratung | Navilon Dev",
        description: "Umfassende IT-Dienstleistungen einschließlich Softwareentwicklung, Spieleentwicklung, KI-Lösungen, Cloud-Services und IT-Beratung.",
        keywords: "IT-Dienstleistungen, Softwareentwicklungsdienste, Spieleentwicklung, KI-Lösungen, Cloud-Computing, IT-Beratung"
      },
      cases: {
        title: "Fallstudien & Portfolio - Navilon Dev Erfolgsgeschichten",
        description: "Entdecken Sie Navilon Devs erfolgreiche Projekte und Fallstudien. Erfahren Sie, wie wir Unternehmen geholfen haben.",
        keywords: "Fallstudien, IT-Projektportfolio, Softwareentwicklungsprojekte, erfolgreiche Implementierungen"
      },
      blog: {
        title: "Tech-Blog & Einblicke - Neueste IT-Trends | Navilon Dev",
        description: "Bleiben Sie auf dem Laufenden mit den neuesten Technologietrends und Expertenansichten aus Navilon Devs Blog.",
        keywords: "Tech-Blog, IT-Einblicke, Technologietrends, Softwareentwicklungsblog, KI-Artikel"
      },
      careers: {
        title: "Karriere bei Navilon Dev - Internationales IT-Team beitreten",
        description: "Treten Sie Navilon Devs internationalem Team von IT-Profis bei. Entdecken Sie Karrieremöglichkeiten.",
        keywords: "IT-Karriere, Softwareentwickler-Jobs, Spieleentwickler-Karriere, KI-Ingenieur-Positionen"
      },
      contact: {
        title: "Kontakt Navilon Dev - Professionelle IT-Lösungen erhalten",
        description: "Kontaktieren Sie Navilon Dev für professionelle IT-Dienstleistungen. Nehmen Sie Kontakt für Ihre Projektanforderungen auf.",
        keywords: "Kontakt navilon dev, IT-Service-Kontakt, Softwareentwicklungsanfrage, professionelle IT-Beratung"
      }
    }
  },
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Services",
      cases: "Études de cas",
      blog: "Blog",
      careers: "Carrières",
      contact: "Contact"
    },
    common: {
      readMore: "Lire plus",
      learnMore: "En savoir plus",
      getInTouch: "Nous contacter",
      ourServices: "Nos services",
      viewAll: "Voir tout",
      loading: "Chargement...",
      error: "Erreur",
      success: "Succès",
      back: "Retour",
      next: "Suivant",
      previous: "Précédent",
      send: "Envoyer",
      submit: "Soumettre",
      cancel: "Annuler",
      close: "Fermer"
    },
    hero: {
      title: "Navilon Dev",
      subtitle: "Navigation de l'innovation",
      description: "Entreprise IT internationale spécialisée dans le développement logiciel, les jeux, les solutions IA et le conseil IT. Nous transformons les idées en solutions numériques de pointe.",
      ctaContact: "Nous contacter",
      ctaServices: "Nos services"
    },
    services: {
      title: "Nos services",
      subtitle: "Solutions IT complètes pour les entreprises modernes",
      software: {
        title: "Développement logiciel",
        description: "Solutions d'entreprise personnalisées, applications web et mobiles avec des technologies de pointe."
      },
      games: {
        title: "Développement de jeux",
        description: "Jeux PC, mobiles, AR/VR avec des expériences immersives et des mécaniques de jeu innovantes."
      },
      ai: {
        title: "IA & Innovation",
        description: "Apprentissage automatique, automatisation et solutions d'intelligence artificielle pour l'optimisation des affaires."
      },
      consulting: {
        title: "Conseil IT",
        description: "Conseil technologique stratégique et guidance de transformation numérique pour votre entreprise."
      },
      cloud: {
        title: "Solutions cloud",
        description: "Infrastructure cloud évolutive, services de migration et développement d'applications cloud-natives."
      },
      mobile: {
        title: "Développement mobile",
        description: "Applications mobiles natives et multiplateformes pour les plateformes iOS et Android."
      }
    },
    about: {
      title: "À propos de Navilon Dev",
      subtitle: "Navigation vers l'avenir de la technologie",
      mission: "Notre mission est de fournir des solutions IT innovantes qui stimulent la croissance des entreprises et l'avancement technologique.",
      vision: "Être l'entreprise IT internationale leader qui façonne l'avenir de l'innovation numérique.",
      values: "Innovation, qualité, collaboration et excellence dans tout ce que nous faisons.",
      team: "Notre équipe",
      history: "Notre histoire",
      approach: "Notre approche"
    },
    whyUs: {
      title: "Pourquoi choisir Navilon Dev",
      subtitle: "Des chiffres qui parlent d'eux-mêmes",
      experience: "Années d'expérience",
      projects: "Projets complétés",
      countries: "Pays servis",
      clients: "Clients satisfaits"
    },
    testimonials: {
      title: "Ce que disent nos clients",
      subtitle: "Histoires de succès du monde entier"
    },
    cases: {
      title: "Études de cas",
      subtitle: "Explorez nos projets et solutions réussis",
      challenge: "Défi",
      solution: "Solution",
      result: "Résultat",
      technologies: "Technologies utilisées"
    },
    blog: {
      title: "Blog & Insights",
      subtitle: "Dernières tendances, technologies et insights industriels",
      readTime: "min de lecture",
      author: "Auteur",
      date: "Date",
      category: "Catégorie"
    },
    careers: {
      title: "Rejoignez notre équipe",
      subtitle: "Faites partie de l'innovation",
      openPositions: "Postes ouverts",
      whyWorkHere: "Pourquoi travailler chez Navilon Dev",
      benefits: "Avantages & Bénéfices",
      apply: "Postuler maintenant",
      requirements: "Exigences",
      responsibilities: "Responsabilités"
    },
    contact: {
      title: "Contactez-nous",
      subtitle: "Prêt à démarrer votre projet ? Parlons-en !",
      name: "Nom complet",
      email: "Adresse email",
      company: "Entreprise",
      message: "Message",
      phone: "Téléphone",
      address: "Adresse",
      getInTouch: "Nous contacter",
      followUs: "Suivez-nous"
    },
    footer: {
      description: "Entreprise IT internationale spécialisée dans le développement logiciel, les jeux, les solutions IA et le conseil IT.",
      quickLinks: "Liens rapides",
      services: "Services",
      company: "Entreprise",
      legal: "Légal",
      privacy: "Politique de confidentialité",
      terms: "Conditions d'utilisation",
      subscribe: "S'abonner",
      newsletter: "Abonnez-vous à notre newsletter",
      rights: "Tous droits réservés."
    },
    seo: {
      home: {
        title: "Navilon Dev - Entreprise IT internationale | Développement logiciel & Solutions IA",
        description: "Navilon Dev est une entreprise IT internationale spécialisée dans le développement logiciel, les jeux, les solutions IA et le conseil IT.",
        keywords: "navilon dev, entreprise IT internationale, développement logiciel, développement de jeux, solutions IA, conseil IT"
      },
      about: {
        title: "À propos de Navilon Dev - Entreprise d'innovation IT internationale",
        description: "Découvrez Navilon Dev, une entreprise IT internationale dédiée à l'innovation dans le développement logiciel.",
        keywords: "à propos navilon dev, mission entreprise IT, développement logiciel international, innovation technologique"
      },
      services: {
        title: "Services IT - Logiciel, Jeux, IA & Conseil | Navilon Dev",
        description: "Services IT complets incluant développement logiciel, jeux, solutions IA, services cloud et conseil IT.",
        keywords: "services IT, services développement logiciel, développement jeux, solutions IA, cloud computing"
      },
      cases: {
        title: "Études de cas & Portfolio - Histoires de succès Navilon Dev",
        description: "Explorez les projets réussis et études de cas de Navilon Dev.",
        keywords: "études de cas, portfolio projets IT, projets développement logiciel, implémentations réussies"
      },
      blog: {
        title: "Blog Tech & Insights - Dernières tendances IT | Navilon Dev",
        description: "Restez à jour avec les dernières tendances technologiques du blog Navilon Dev.",
        keywords: "blog tech, insights IT, tendances technologiques, blog développement logiciel"
      },
      careers: {
        title: "Carrières chez Navilon Dev - Rejoindre l'équipe IT internationale",
        description: "Rejoignez l'équipe internationale de professionnels IT de Navilon Dev.",
        keywords: "carrières IT, emplois développeur logiciel, carrière développeur jeux, postes ingénieur IA"
      },
      contact: {
        title: "Contact Navilon Dev - Obtenez des solutions IT professionnelles",
        description: "Contactez Navilon Dev pour des services IT professionnels.",
        keywords: "contact navilon dev, contact services IT, demande développement logiciel, conseil IT professionnel"
      }
    }
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Acerca de",
      services: "Servicios",
      cases: "Casos",
      blog: "Blog",
      careers: "Carreras",
      contact: "Contacto"
    },
    common: {
      readMore: "Leer más",
      learnMore: "Saber más",
      getInTouch: "Contactar",
      ourServices: "Nuestros servicios",
      viewAll: "Ver todo",
      loading: "Cargando...",
      error: "Error",
      success: "Éxito",
      back: "Atrás",
      next: "Siguiente",
      previous: "Anterior",
      send: "Enviar",
      submit: "Enviar",
      cancel: "Cancelar",
      close: "Cerrar"
    },
    hero: {
      title: "Navilon Dev",
      subtitle: "Navegando la innovación",
      description: "Empresa IT internacional especializada en desarrollo de software, juegos, soluciones IA y consultoría IT. Transformamos ideas en soluciones digitales de vanguardia.",
      ctaContact: "Contactar",
      ctaServices: "Nuestros servicios"
    },
    services: {
      title: "Nuestros servicios",
      subtitle: "Soluciones IT integrales para empresas modernas",
      software: {
        title: "Desarrollo de software",
        description: "Soluciones empresariales personalizadas, aplicaciones web y móviles con tecnologías de vanguardia."
      },
      games: {
        title: "Desarrollo de juegos",
        description: "Juegos PC, móviles, AR/VR con experiencias inmersivas y mecánicas de juego innovadoras."
      },
      ai: {
        title: "IA e innovación",
        description: "Aprendizaje automático, automatización y soluciones de inteligencia artificial para optimización empresarial."
      },
      consulting: {
        title: "Consultoría IT",
        description: "Consultoría tecnológica estratégica y orientación de transformación digital para su empresa."
      },
      cloud: {
        title: "Soluciones en la nube",
        description: "Infraestructura en la nube escalable, servicios de migración y desarrollo de aplicaciones nativas en la nube."
      },
      mobile: {
        title: "Desarrollo móvil",
        description: "Aplicaciones móviles nativas y multiplataforma para plataformas iOS y Android."
      }
    },
    about: {
      title: "Acerca de Navilon Dev",
      subtitle: "Navegando hacia el futuro de la tecnología",
      mission: "Nuestra misión es entregar soluciones IT innovadoras que impulsen el crecimiento empresarial y el avance tecnológico.",
      vision: "Ser la empresa IT internacional líder que da forma al futuro de la innovación digital.",
      values: "Innovación, calidad, colaboración y excelencia en todo lo que hacemos.",
      team: "Nuestro equipo",
      history: "Nuestra historia",
      approach: "Nuestro enfoque"
    },
    whyUs: {
      title: "Por qué elegir Navilon Dev",
      subtitle: "Números que hablan por sí mismos",
      experience: "Años de experiencia",
      projects: "Proyectos completados",
      countries: "Países atendidos",
      clients: "Clientes satisfechos"
    },
    testimonials: {
      title: "Lo que dicen nuestros clientes",
      subtitle: "Historias de éxito de todo el mundo"
    },
    cases: {
      title: "Casos de estudio",
      subtitle: "Explore nuestros proyectos y soluciones exitosos",
      challenge: "Desafío",
      solution: "Solución",
      result: "Resultado",
      technologies: "Tecnologías utilizadas"
    },
    blog: {
      title: "Blog e insights",
      subtitle: "Últimas tendencias, tecnologías e insights de la industria",
      readTime: "min de lectura",
      author: "Autor",
      date: "Fecha",
      category: "Categoría"
    },
    careers: {
      title: "Únete a nuestro equipo",
      subtitle: "Sé parte de la innovación",
      openPositions: "Posiciones abiertas",
      whyWorkHere: "Por qué trabajar en Navilon Dev",
      benefits: "Beneficios y ventajas",
      apply: "Aplicar ahora",
      requirements: "Requisitos",
      responsibilities: "Responsabilidades"
    },
    contact: {
      title: "Ponte en contacto",
      subtitle: "¿Listo para iniciar tu proyecto? ¡Hablemos!",
      name: "Nombre completo",
      email: "Dirección de email",
      company: "Empresa",
      message: "Mensaje",
      phone: "Teléfono",
      address: "Dirección",
      getInTouch: "Contactar",
      followUs: "Síguenos"
    },
    footer: {
      description: "Empresa IT internacional especializada en desarrollo de software, juegos, soluciones IA y consultoría IT.",
      quickLinks: "Enlaces rápidos",
      services: "Servicios",
      company: "Empresa",
      legal: "Legal",
      privacy: "Política de privacidad",
      terms: "Términos de servicio",
      subscribe: "Suscribirse",
      newsletter: "Suscríbete a nuestro newsletter",
      rights: "Todos los derechos reservados."
    },
    seo: {
      home: {
        title: "Navilon Dev - Empresa IT internacional | Desarrollo de software y soluciones IA",
        description: "Navilon Dev es una empresa IT internacional especializada en desarrollo de software, juegos, soluciones IA y consultoría IT.",
        keywords: "navilon dev, empresa IT internacional, desarrollo software, desarrollo juegos, soluciones IA, consultoría IT"
      },
      about: {
        title: "Acerca de Navilon Dev - Empresa de innovación IT internacional",
        description: "Conoce sobre Navilon Dev, una empresa IT internacional dedicada a la innovación en desarrollo de software.",
        keywords: "acerca navilon dev, misión empresa IT, desarrollo software internacional, innovación tecnológica"
      },
      services: {
        title: "Servicios IT - Software, juegos, IA y consultoría | Navilon Dev",
        description: "Servicios IT integrales incluyendo desarrollo de software, juegos, soluciones IA y consultoría IT.",
        keywords: "servicios IT, servicios desarrollo software, desarrollo juegos, soluciones IA, cloud computing"
      },
      cases: {
        title: "Casos de estudio y portfolio - Historias de éxito Navilon Dev",
        description: "Explore los proyectos exitosos y casos de estudio de Navilon Dev.",
        keywords: "casos estudio, portfolio proyectos IT, proyectos desarrollo software, implementaciones exitosas"
      },
      blog: {
        title: "Blog tech e insights - Últimas tendencias IT | Navilon Dev",
        description: "Mantente actualizado con las últimas tendencias tecnológicas del blog de Navilon Dev.",
        keywords: "blog tech, insights IT, tendencias tecnológicas, blog desarrollo software"
      },
      careers: {
        title: "Carreras en Navilon Dev - Únete al equipo IT internacional",
        description: "Únete al equipo internacional de profesionales IT de Navilon Dev.",
        keywords: "carreras IT, trabajos desarrollador software, carrera desarrollador juegos, posiciones ingeniero IA"
      },
      contact: {
        title: "Contacto Navilon Dev - Obtén soluciones IT profesionales",
        description: "Contacta a Navilon Dev para servicios IT profesionales.",
        keywords: "contacto navilon dev, contacto servicios IT, consulta desarrollo software, consultoría IT profesional"
      }
    }
  },
  pl: {
    nav: {
      home: "Strona główna",
      about: "O nas",
      services: "Usługi",
      cases: "Studia przypadków",
      blog: "Blog",
      careers: "Kariera",
      contact: "Kontakt"
    },
    common: {
      readMore: "Czytaj więcej",
      learnMore: "Dowiedz się więcej",
      getInTouch: "Skontaktuj się",
      ourServices: "Nasze usługi",
      viewAll: "Zobacz wszystko",
      loading: "Ładowanie...",
      error: "Błąd",
      success: "Sukces",
      back: "Wstecz",
      next: "Dalej",
      previous: "Poprzedni",
      send: "Wyślij",
      submit: "Wyślij",
      cancel: "Anuluj",
      close: "Zamknij"
    },
    hero: {
      title: "Navilon Dev",
      subtitle: "Nawigacja innowacji",
      description: "Międzynarodowa firma IT specjalizująca się w tworzeniu oprogramowania, gier, rozwiązaniach AI i doradztwie IT. Przekształcamy pomysły w nowoczesne rozwiązania cyfrowe.",
      ctaContact: "Skontaktuj się",
      ctaServices: "Nasze usługi"
    },
    services: {
      title: "Nasze usługi",
      subtitle: "Kompleksowe rozwiązania IT dla nowoczesnych firm",
      software: {
        title: "Tworzenie oprogramowania",
        description: "Niestandardowe rozwiązania korporacyjne, aplikacje webowe i mobilne z najnowszymi technologiami."
      },
      games: {
        title: "Tworzenie gier",
        description: "Gry PC, mobilne, AR/VR z immersyjnymi doświadczeniami i innowacyjnymi mechanikami rozgrywki."
      },
      ai: {
        title: "AI i innowacje",
        description: "Uczenie maszynowe, automatyzacja i rozwiązania sztucznej inteligencji dla optymalizacji biznesu."
      },
      consulting: {
        title: "Doradztwo IT",
        description: "Strategiczne doradztwo technologiczne i wskazówki transformacji cyfrowej dla Twojej firmy."
      },
      cloud: {
        title: "Rozwiązania chmurowe",
        description: "Skalowalna infrastruktura chmurowa, usługi migracji i tworzenie aplikacji natywnych dla chmury."
      },
      mobile: {
        title: "Tworzenie aplikacji mobilnych",
        description: "Natywne i wieloplatformowe aplikacje mobilne dla platform iOS i Android."
      }
    },
    about: {
      title: "O Navilon Dev",
      subtitle: "Nawigacja w przyszłość technologii",
      mission: "Naszą misją jest dostarczanie innowacyjnych rozwiązań IT, które napędzają wzrost biznesu i postęp technologiczny.",
      vision: "Być wiodącą międzynarodową firmą IT, która kształtuje przyszłość innowacji cyfrowych.",
      values: "Innowacyjność, jakość, współpraca i doskonałość we wszystkim, co robimy.",
      team: "Nasz zespół",
      history: "Nasza historia",
      approach: "Nasze podejście"
    },
    whyUs: {
      title: "Dlaczego wybrać Navilon Dev",
      subtitle: "Liczby, które mówią same za siebie",
      experience: "Lat doświadczenia",
      projects: "Ukończonych projektów",
      countries: "Obsługiwanych krajów",
      clients: "Zadowolonych klientów"
    },
    testimonials: {
      title: "Co mówią nasi klienci",
      subtitle: "Historie sukcesu z całego świata"
    },
    cases: {
      title: "Studia przypadków",
      subtitle: "Poznaj nasze udane projekty i rozwiązania",
      challenge: "Wyzwanie",
      solution: "Rozwiązanie",
      result: "Wynik",
      technologies: "Używane technologie"
    },
    blog: {
      title: "Blog i spostrzeżenia",
      subtitle: "Najnowsze trendy, technologie i spostrzeżenia branżowe",
      readTime: "min czytania",
      author: "Autor",
      date: "Data",
      category: "Kategoria"
    },
    careers: {
      title: "Dołącz do naszego zespołu",
      subtitle: "Bądź częścią innowacji",
      openPositions: "Otwarte stanowiska",
      whyWorkHere: "Dlaczego warto pracować w Navilon Dev",
      benefits: "Korzyści i dodatki",
      apply: "Aplikuj teraz",
      requirements: "Wymagania",
      responsibilities: "Obowiązki"
    },
    contact: {
      title: "Skontaktuj się z nami",
      subtitle: "Gotowy rozpocząć swój projekt? Porozmawiajmy!",
      name: "Pełne imię",
      email: "Adres email",
      company: "Firma",
      message: "Wiadomość",
      phone: "Telefon",
      address: "Adres",
      getInTouch: "Skontaktuj się",
      followUs: "Śledź nas"
    },
    footer: {
      description: "Międzynarodowa firma IT specjalizująca się w tworzeniu oprogramowania, gier, rozwiązaniach AI i doradztwie IT.",
      quickLinks: "Szybkie linki",
      services: "Usługi",
      company: "Firma",
      legal: "Prawne",
      privacy: "Polityka prywatności",
      terms: "Warunki użytkowania",
      subscribe: "Subskrybuj",
      newsletter: "Subskrybuj nasz newsletter",
      rights: "Wszystkie prawa zastrzeżone."
    },
    seo: {
      home: {
        title: "Navilon Dev - Międzynarodowa firma IT | Tworzenie oprogramowania i rozwiązania AI",
        description: "Navilon Dev to międzynarodowa firma IT specjalizująca się w tworzeniu oprogramowania, gier, rozwiązaniach AI i doradztwie IT.",
        keywords: "navilon dev, międzynarodowa firma IT, tworzenie oprogramowania, tworzenie gier, rozwiązania AI, doradztwo IT"
      },
      about: {
        title: "O Navilon Dev - Międzynarodowa firma innowacji IT",
        description: "Poznaj Navilon Dev, międzynarodową firmę IT dedykowaną innowacjom w tworzeniu oprogramowania.",
        keywords: "o navilon dev, misja firmy IT, międzynarodowe tworzenie oprogramowania, innowacje technologiczne"
      },
      services: {
        title: "Usługi IT - Oprogramowanie, gry, AI i doradztwo | Navilon Dev",
        description: "Kompleksowe usługi IT obejmujące tworzenie oprogramowania, gier, rozwiązania AI i doradztwo IT.",
        keywords: "usługi IT, usługi tworzenia oprogramowania, tworzenie gier, rozwiązania AI, chmura obliczeniowa"
      },
      cases: {
        title: "Studia przypadków i portfolio - Historie sukcesu Navilon Dev",
        description: "Poznaj udane projekty i studia przypadków Navilon Dev.",
        keywords: "studia przypadków, portfolio projektów IT, projekty tworzenia oprogramowania, udane implementacje"
      },
      blog: {
        title: "Blog techniczny i spostrzeżenia - Najnowsze trendy IT | Navilon Dev",
        description: "Bądź na bieżąco z najnowszymi trendami technologicznymi z bloga Navilon Dev.",
        keywords: "blog techniczny, spostrzeżenia IT, trendy technologiczne, blog tworzenia oprogramowania"
      },
      careers: {
        title: "Kariera w Navilon Dev - Dołącz do międzynarodowego zespołu IT",
        description: "Dołącz do międzynarodowego zespołu profesjonalistów IT Navilon Dev.",
        keywords: "kariera IT, praca programista, kariera developer gier, stanowiska inżynier AI"
      },
      contact: {
        title: "Kontakt Navilon Dev - Uzyskaj profesjonalne rozwiązania IT",
        description: "Skontaktuj się z Navilon Dev w sprawie profesjonalnych usług IT.",
        keywords: "kontakt navilon dev, kontakt usługi IT, zapytanie tworzenie oprogramowania, profesjonalne doradztwo IT"
      }
    }
  },
  zh: {
    nav: {
      home: "首页",
      about: "关于我们",
      services: "服务",
      cases: "案例研究",
      blog: "博客",
      careers: "职业",
      contact: "联系我们"
    },
    common: {
      readMore: "阅读更多",
      learnMore: "了解更多",
      getInTouch: "联系我们",
      ourServices: "我们的服务",
      viewAll: "查看全部",
      loading: "加载中...",
      error: "错误",
      success: "成功",
      back: "返回",
      next: "下一个",
      previous: "上一个",
      send: "发送",
      submit: "提交",
      cancel: "取消",
      close: "关闭"
    },
    hero: {
      title: "Navilon Dev",
      subtitle: "引领创新导航",
      description: "国际IT公司，专业从事软件开发、游戏开发、AI解决方案和IT咨询。我们将想法转化为尖端的数字解决方案。",
      ctaContact: "联系我们",
      ctaServices: "我们的服务"
    },
    services: {
      title: "我们的服务",
      subtitle: "为现代企业提供全面的IT解决方案",
      software: {
        title: "软件开发",
        description: "使用尖端技术构建定制企业解决方案、Web应用程序和移动应用程序。"
      },
      games: {
        title: "游戏开发",
        description: "PC、移动、AR/VR游戏，具有沉浸式体验和创新的游戏机制。"
      },
      ai: {
        title: "AI与创新",
        description: "机器学习、自动化和人工智能解决方案，用于业务优化。"
      },
      consulting: {
        title: "IT咨询",
        description: "为您的企业提供战略技术咨询和数字化转型指导。"
      },
      cloud: {
        title: "云解决方案",
        description: "可扩展的云基础设施、迁移服务和云原生应用程序开发。"
      },
      mobile: {
        title: "移动开发",
        description: "为iOS和Android平台开发原生和跨平台移动应用程序。"
      }
    },
    about: {
      title: "关于Navilon Dev",
      subtitle: "引领技术未来",
      mission: "我们的使命是提供创新的IT解决方案，推动业务增长和技术进步。",
      vision: "成为塑造数字创新未来的领先国际IT公司。",
      values: "在我们所做的一切中体现创新、质量、协作和卓越。",
      team: "我们的团队",
      history: "我们的故事",
      approach: "我们的方法"
    },
    whyUs: {
      title: "为什么选择Navilon Dev",
      subtitle: "数据说明一切",
      experience: "年的经验",
      projects: "完成的项目",
      countries: "服务的国家",
      clients: "满意的客��"
    },
    testimonials: {
      title: "客户评价",
      subtitle: "来自世界各地的成功故事"
    },
    cases: {
      title: "案例研究",
      subtitle: "探索我们成功的项目和解决方案",
      challenge: "挑战",
      solution: "解决方案",
      result: "结果",
      technologies: "使用的技术"
    },
    blog: {
      title: "博客与洞察",
      subtitle: "最新趋势、技术和行业洞察",
      readTime: "分钟阅读",
      author: "作者",
      date: "日期",
      category: "类别"
    },
    careers: {
      title: "加入我们的团队",
      subtitle: "成为创新的一部分",
      openPositions: "职位空缺",
      whyWorkHere: "为什么在Navilon Dev工作",
      benefits: "福利和待遇",
      apply: "立即申请",
      requirements: "要求",
      responsibilities: "职责"
    },
    contact: {
      title: "联系我们",
      subtitle: "准备开始您的项目？让我们谈谈！",
      name: "全名",
      email: "电子邮件地址",
      company: "公司",
      message: "消息",
      phone: "电话",
      address: "地址",
      getInTouch: "联系我们",
      followUs: "关注我们"
    },
    footer: {
      description: "国际IT公司，专业从事软件开发、游戏开发、AI解决方案和IT咨询。",
      quickLinks: "快速链接",
      services: "服务",
      company: "公司",
      legal: "法律",
      privacy: "隐私政策",
      terms: "服务条款",
      subscribe: "订阅",
      newsletter: "订阅我们的新闻通讯",
      rights: "版权所有。"
    },
    seo: {
      home: {
        title: "Navilon Dev - 国际IT公司 | 软件开发与AI解决方案",
        description: "Navilon Dev是一家国际IT公司，专业从事软件开发、游戏开发、AI解决方案和IT咨询。将您的想法转化为尖端的数字解决方案。",
        keywords: "navilon dev, 国际IT公司, 软件开发, 游戏开发, AI解决方案, IT咨询, 网页开发, 移动应用, 人工智能"
      },
      about: {
        title: "关于Navilon Dev - 国际IT创新公司",
        description: "了解Navilon Dev，一家致力于软件开发、游戏开发和AI解决方案创新的国际IT公司。",
        keywords: "关于navilon dev, IT公司使命, 国际软件开发, 技术创新, AI解决方案公司"
      },
      services: {
        title: "IT服务 - 软件、游戏、AI与咨询 | Navilon Dev",
        description: "全面的IT服务，包括软件开发、游戏开发、AI解决方案、云服务和IT咨询。",
        keywords: "IT服务, 软件开发服务, 游戏开发, AI解决方案, 云计算, IT咨询"
      },
      cases: {
        title: "案例研究与作品集 - Navilon Dev成功故事",
        description: "探索Navilon Dev的成功项目和案例研究。",
        keywords: "案例研究, IT项目作品集, 软件开发项目, 成功实施"
      },
      blog: {
        title: "技术博客与洞察 - 最新IT趋势 | Navilon Dev",
        description: "通过Navilon Dev的博客了解最新的技术趋势和专家观点。",
        keywords: "技术博客, IT洞察, 技术趋势, 软件开发博客"
      },
      careers: {
        title: "Navilon Dev职业机会 - 加入国际IT团队",
        description: "加入Navilon Dev的国际IT专业团队。",
        keywords: "IT职业, 软件开发工作, 游戏开发职业, AI工程师职位"
      },
      contact: {
        title: "联系Navilon Dev - 获得专业IT解决方案",
        description: "联系Navilon Dev获得专业IT服务。",
        keywords: "联系navilon dev, IT服务联系, 软件开发咨询, 专业IT咨询"
      }
    }
  }
};

export const languages = [
  { code: 'en', name: 'English', flag: '🇺🇸' },
  { code: 'ru', name: 'Русский', flag: '🇷🇺' },
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' },
  { code: 'es', name: 'Español', flag: '🇪🇸' },
  { code: 'pl', name: 'Polski', flag: '🇵🇱' },
  { code: 'zh', name: '中文', flag: '🇨🇳' }
];

export const defaultLanguage = 'en';