import React from 'react';
import { Calendar, User, Clock, ArrowRight, Tag } from '../ui/icons';
import { useTranslation } from '../../hooks/useTranslation';

interface BlogPageProps {
  onNavigate: (page: string) => void;
}

export function BlogPage({ onNavigate }: BlogPageProps) {
  const { t } = useTranslation();

  const blogPosts = [
    {
      title: 'The Future of AI in Software Development',
      excerpt: 'Exploring how artificial intelligence is revolutionizing the way we build software, from automated code generation to intelligent testing.',
      author: 'Sarah Chen',
      date: '2024-01-15',
      readTime: '8',
      category: 'AI & Machine Learning',
      tags: ['AI', 'Development', 'Future Tech'],
      featured: true,
      image: '🤖'
    },
    {
      title: 'Building Scalable Cloud Architecture',
      excerpt: 'Best practices for designing cloud infrastructure that grows with your business needs while maintaining performance and security.',
      author: 'Michael Rodriguez',
      date: '2024-01-10',
      readTime: '12',
      category: 'Cloud Computing',
      tags: ['Cloud', 'Architecture', 'Scalability'],
      featured: false,
      image: '☁️'
    },
    {
      title: 'Mobile Game Development Trends in 2024',
      excerpt: 'Latest trends in mobile gaming including AR/VR integration, cross-platform development, and emerging monetization strategies.',
      author: 'Alex Johnson',
      date: '2024-01-08',
      readTime: '6',
      category: 'Game Development',
      tags: ['Gaming', 'Mobile', 'Trends'],
      featured: false,
      image: '🎮'
    },
    {
      title: 'Cybersecurity Best Practices for Startups',
      excerpt: 'Essential security measures every startup should implement to protect their data, customers, and intellectual property.',
      author: 'Emma Thompson',
      date: '2024-01-05',
      readTime: '10',
      category: 'Security',
      tags: ['Security', 'Startups', 'Best Practices'],
      featured: true,
      image: '🔒'
    },
    {
      title: 'The Rise of Low-Code Development',
      excerpt: 'How low-code platforms are democratizing software development and when traditional coding is still necessary.',
      author: 'David Kim',
      date: '2024-01-03',
      readTime: '7',
      category: 'Development',
      tags: ['Low-Code', 'Development', 'Tools'],
      featured: false,
      image: '⚡'
    },
    {
      title: 'IoT Integration in Smart Cities',
      excerpt: 'Case studies of successful IoT implementations in urban environments and their impact on city management and citizen life.',
      author: 'Lisa Wang',
      date: '2024-01-01',
      readTime: '9',
      category: 'IoT',
      tags: ['IoT', 'Smart Cities', 'Urban Tech'],
      featured: false,
      image: '🏙️'
    }
  ];

  const categories = ['All', 'AI & Machine Learning', 'Cloud Computing', 'Game Development', 'Security', 'Development', 'IoT'];

  return (
    <div className="min-h-screen bg-deep-blue">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-deep-blue to-medium-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              {t.blog.title}
            </h1>
            <p className="text-xl text-soft-gray mb-8">
              {t.blog.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 border-b border-medium-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <button
                key={index}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  index === 0
                    ? 'bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue'
                    : 'text-soft-gray hover:text-neon-blue border border-soft-gray/30 hover:border-neon-blue'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-warm-white mb-12 text-center">Featured Articles</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            {blogPosts.filter(post => post.featured).map((post, index) => (
              <article 
                key={index} 
                className="glass-effect rounded-2xl overflow-hidden hover:neon-glow transition-all duration-300 group cursor-pointer"
              >
                <div className="p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="text-4xl">{post.image}</div>
                    <div>
                      <span className="inline-block px-3 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30 mb-2">
                        {post.category}
                      </span>
                      <h3 className="text-2xl font-bold text-warm-white group-hover:text-neon-cyan transition-colors duration-300">
                        {post.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-soft-gray leading-relaxed mb-6">
                    {post.excerpt}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {post.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="inline-flex items-center gap-1 px-2 py-1 text-xs text-soft-gray"
                      >
                        <Tag className="h-3 w-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-sm text-soft-gray">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {post.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {post.readTime} {t.blog.readTime}
                      </span>
                    </div>
                    
                    <button className="flex items-center gap-1 text-neon-blue hover:text-neon-cyan transition-colors duration-300 group-hover:translate-x-1">
                      <span>Read More</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* All Posts Grid */}
          <h2 className="text-3xl font-bold text-warm-white mb-12 text-center">Latest Articles</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.filter(post => !post.featured).map((post, index) => (
              <article 
                key={index} 
                className="glass-effect rounded-2xl p-6 hover:neon-glow transition-all duration-300 group cursor-pointer"
              >
                <div className="text-3xl mb-4">{post.image}</div>
                
                <span className="inline-block px-3 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30 mb-4">
                  {post.category}
                </span>
                
                <h3 className="text-xl font-bold text-warm-white mb-3 group-hover:text-neon-cyan transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-soft-gray text-sm leading-relaxed mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-xs text-soft-gray">
                  <div className="flex items-center gap-2">
                    <User className="h-3 w-3" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-3 w-3" />
                    <span>{post.readTime} min</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 bg-gradient-to-r from-medium-blue to-deep-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-warm-white mb-4">
            Stay Updated
          </h2>
          <p className="text-soft-gray mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter to get the latest insights on technology trends, development best practices, and industry news.
          </p>
          
          <div className="max-w-md mx-auto flex gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-input-background border border-border rounded-lg text-warm-white placeholder-soft-gray focus:outline-none focus:ring-2 focus:ring-neon-blue"
            />
            <button className="bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue font-semibold px-6 py-3 rounded-lg hover:scale-105 transition-all duration-300 neon-glow">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}