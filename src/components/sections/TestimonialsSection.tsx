import React from 'react';

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Анна К.",
      role: "Фрилансер",
      content: "Наконец-то могу работать на веранде летом! Раньше комары не давали сосредоточиться, а теперь спокойно работаю до поздна.",
      rating: 5,
      avatar: "👩‍💻"
    },
    {
      name: "Михаил С.",
      role: "IT-специалист", 
      content: "Скептически отнесся к идее, но попробовал. Реально помогает! Особенно ценю, что не нужно никаких устройств в розетку.",
      rating: 5,
      avatar: "👨‍💼"
    },
    {
      name: "Елена Р.",
      role: "Мама двоих детей",
      content: "Безопасно для детей, никакой химии. Летом в доме комаров стало в разы меньше. Рекомендую всем родителям!",
      rating: 5,
      avatar: "👩‍👧‍👦"
    },
    {
      name: "Дмитрий Л.",
      role: "Геймер",
      content: "Играю ночами, и комары всегда мешали. Установил расширение — и забыл об этой проблеме. Работает даже когда игра в полном экране.",
      rating: 5,
      avatar: "🎮"
    },
    {
      name: "Ольга В.",
      role: "Студентка",
      content: "В общежитии летом просто кошмар с комарами. Это расширение — спасение! Недорого и эффективно.",
      rating: 5,
      avatar: "👩‍🎓"
    },
    {
      name: "Андрей Н.",
      role: "Дачник",
      content: "Беру ноутбук на дачу, включаю расширение — и могу спокойно работать на улице. Лето без укусов — это реально!",
      rating: 5,
      avatar: "🌳"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-deep-blue to-medium-blue">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-warm-white mb-6">
            Что говорят <span className="gradient-text">пользователи</span>
          </h2>
          <p className="text-xl text-soft-gray max-w-3xl mx-auto">
            Реальные отзывы людей, которые уже избавились от проблемы с комарами
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="group">
              <div className="bg-gradient-to-br from-medium-blue/50 to-light-blue/30 backdrop-blur-lg rounded-2xl p-6 border border-white/10 group-hover:border-neon-blue/30 transition-all duration-300 h-full flex flex-col">
                
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Content */}
                <blockquote className="text-soft-gray leading-relaxed mb-6 flex-grow">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 rounded-full flex items-center justify-center text-xl">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-warm-white">{testimonial.name}</div>
                    <div className="text-sm text-soft-gray">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust indicators */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-br from-medium-blue/30 to-light-blue/20 backdrop-blur-lg rounded-2xl p-8 border border-white/10 max-w-3xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-2">500+</div>
                <div className="text-soft-gray">Довольных пользователей</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-2">4.9</div>
                <div className="text-soft-gray">Средняя оценка</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-cyan mb-2">30+</div>
                <div className="text-soft-gray">Стран использования</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}