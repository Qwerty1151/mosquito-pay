import React from 'react';
import { ExternalLink, ArrowRight } from '../ui/icons';
import { useTranslation } from '../../hooks/useTranslation';

interface CasesPageProps {
  onNavigate: (page: string) => void;
}

export function CasesPage({ onNavigate }: CasesPageProps) {
  const { t } = useTranslation();

  const cases = [
    {
      title: 'E-Commerce Platform Modernization',
      client: 'Global Retail Chain',
      category: 'Software Development',
      challenge: 'Legacy system unable to handle modern traffic demands and user expectations.',
      solution: 'Complete platform rebuild using microservices architecture with React and Node.js.',
      result: '300% increase in performance, 50% reduction in load times, 25% increase in conversion rates.',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      image: '🛒'
    },
    {
      title: 'AI-Powered Analytics Dashboard',
      client: 'Financial Services Company',
      category: 'AI & Machine Learning',
      challenge: 'Manual data analysis taking weeks, need for real-time insights.',
      solution: 'Custom ML models for predictive analytics with real-time dashboard.',
      result: 'Reduced analysis time from weeks to minutes, 40% improvement in decision accuracy.',
      technologies: ['Python', 'TensorFlow', 'React', 'PostgreSQL', 'Apache Kafka'],
      image: '📊'
    },
    {
      title: 'Mobile Game Development',
      client: 'Entertainment Startup',
      category: 'Game Development',
      challenge: 'Creating engaging mobile game with cross-platform compatibility.',
      solution: 'Unity-based mobile game with cloud saves and multiplayer features.',
      result: '1M+ downloads in first month, 4.8★ rating, featured on app stores.',
      technologies: ['Unity', 'C#', 'Firebase', 'Google Play Games', 'Game Center'],
      image: '🎮'
    },
    {
      title: 'Cloud Migration & DevOps',
      client: 'Healthcare Provider',
      category: 'Cloud Solutions',
      challenge: 'On-premise infrastructure limiting scalability and security.',
      solution: 'Complete cloud migration with automated CI/CD pipelines.',
      result: '60% cost reduction, 99.9% uptime, HIPAA compliance achieved.',
      technologies: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Jenkins'],
      image: '☁️'
    },
    {
      title: 'IoT Smart City Platform',
      client: 'Municipal Government',
      category: 'IoT & Smart Solutions',
      challenge: 'Need for intelligent city infrastructure management.',
      solution: 'Comprehensive IoT platform for traffic, lighting, and waste management.',
      result: '30% reduction in energy costs, 40% improvement in traffic flow.',
      technologies: ['IoT', 'React', 'Node.js', 'InfluxDB', 'Grafana'],
      image: '🏙️'
    },
    {
      title: 'Blockchain Supply Chain',
      client: 'Manufacturing Consortium',
      category: 'Blockchain',
      challenge: 'Lack of transparency in global supply chain operations.',
      solution: 'Blockchain-based tracking system for end-to-end visibility.',
      result: '100% product traceability, 25% reduction in counterfeit incidents.',
      technologies: ['Ethereum', 'Solidity', 'Web3.js', 'React', 'IPFS'],
      image: '🔗'
    }
  ];

  return (
    <div className="min-h-screen bg-deep-blue">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-deep-blue to-medium-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              {t.cases.title}
            </h1>
            <p className="text-xl text-soft-gray mb-8">
              {t.cases.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Cases Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {cases.map((caseStudy, index) => (
              <div 
                key={index} 
                className="p-8 glass-effect rounded-2xl hover:neon-glow transition-all duration-300 group"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{caseStudy.image}</div>
                  <div>
                    <h3 className="text-2xl font-bold text-warm-white mb-2">
                      {caseStudy.title}
                    </h3>
                    <p className="text-neon-blue font-medium mb-1">{caseStudy.client}</p>
                    <p className="text-sm text-soft-gray">{caseStudy.category}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="text-lg font-semibold text-neon-cyan mb-2">
                      {t.cases.challenge}
                    </h4>
                    <p className="text-soft-gray text-sm leading-relaxed">
                      {caseStudy.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-neon-cyan mb-2">
                      {t.cases.solution}
                    </h4>
                    <p className="text-soft-gray text-sm leading-relaxed">
                      {caseStudy.solution}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-neon-cyan mb-2">
                      {t.cases.result}
                    </h4>
                    <p className="text-soft-gray text-sm leading-relaxed">
                      {caseStudy.result}
                    </p>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-warm-white mb-3">
                    {t.cases.technologies}
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 text-xs bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <button className="flex items-center gap-2 text-neon-blue hover:text-neon-cyan transition-colors duration-300 group-hover:translate-x-1">
                  <span className="text-sm font-medium">View Full Case Study</span>
                  <ExternalLink className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-medium-blue to-deep-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-warm-white mb-4">
            Ready to create your success story?
          </h2>
          <p className="text-soft-gray mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you achieve similar results for your business.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue font-semibold py-3 px-8 rounded-lg hover:scale-105 transition-all duration-300 neon-glow"
          >
            Start Your Project
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}