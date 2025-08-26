import React from 'react';
import { MapPin, DollarSign, Clock, Users, ArrowRight } from '../ui/icons';
import { useTranslation } from '../../hooks/useTranslation';

interface CareersPageProps {
  onNavigate: (page: string) => void;
}

export function CareersPage({ onNavigate }: CareersPageProps) {
  const { t } = useTranslation();

  const openPositions = [
    {
      title: 'Senior Full-Stack Developer',
      department: 'Engineering',
      location: 'Remote / Berlin',
      type: 'Full-time',
      salary: '$80,000 - $120,000',
      experience: '5+ years',
      description: 'We are looking for an experienced full-stack developer to join our core product team.',
      requirements: [
        'Strong experience with React and Node.js',
        'Experience with cloud platforms (AWS/Azure)',
        'Knowledge of microservices architecture',
        'Excellent problem-solving skills'
      ],
      responsibilities: [
        'Develop and maintain web applications',
        'Collaborate with cross-functional teams',
        'Write clean, maintainable code',
        'Mentor junior developers'
      ]
    },
    {
      title: 'AI/ML Engineer',
      department: 'AI Research',
      location: 'San Francisco / Remote',
      type: 'Full-time',
      salary: '$100,000 - $150,000',
      experience: '3+ years',
      description: 'Join our AI team to develop cutting-edge machine learning solutions for enterprise clients.',
      requirements: [
        'PhD/Masters in Computer Science or related field',
        'Experience with TensorFlow/PyTorch',
        'Strong Python programming skills',
        'Knowledge of MLOps practices'
      ],
      responsibilities: [
        'Design and implement ML models',
        'Research new AI technologies',
        'Optimize model performance',
        'Collaborate with product teams'
      ]
    },
    {
      title: 'Game Developer (Unity)',
      department: 'Gaming',
      location: 'London / Remote',
      type: 'Full-time',
      salary: '$60,000 - $90,000',
      experience: '3+ years',
      description: 'Create engaging mobile and PC games using Unity engine for our gaming division.',
      requirements: [
        'Strong Unity3D and C# skills',
        'Experience with mobile game development',
        'Knowledge of game design principles',
        'Portfolio of shipped games'
      ],
      responsibilities: [
        'Develop game mechanics and features',
        'Optimize performance for mobile platforms',
        'Collaborate with artists and designers',
        'Implement gameplay systems'
      ]
    },
    {
      title: 'DevOps Engineer',
      department: 'Infrastructure',
      location: 'Toronto / Remote',
      type: 'Full-time',
      salary: '$70,000 - $110,000',
      experience: '4+ years',
      description: 'Help us scale our infrastructure and improve our deployment processes.',
      requirements: [
        'Experience with Kubernetes and Docker',
        'Knowledge of CI/CD pipelines',
        'AWS/Azure certification preferred',
        'Infrastructure as Code experience'
      ],
      responsibilities: [
        'Manage cloud infrastructure',
        'Automate deployment processes',
        'Monitor system performance',
        'Ensure security best practices'
      ]
    },
    {
      title: 'UX/UI Designer',
      department: 'Design',
      location: 'New York / Remote',
      type: 'Full-time',
      salary: '$55,000 - $85,000',
      experience: '3+ years',
      description: 'Design intuitive and beautiful user experiences for our software products.',
      requirements: [
        'Strong portfolio of web/mobile designs',
        'Proficiency in Figma, Sketch, or Adobe XD',
        'Understanding of user-centered design',
        'Experience with design systems'
      ],
      responsibilities: [
        'Create wireframes and prototypes',
        'Conduct user research',
        'Design user interfaces',
        'Collaborate with development teams'
      ]
    },
    {
      title: 'Technical Writer',
      department: 'Documentation',
      location: 'Remote',
      type: 'Contract',
      salary: '$40,000 - $60,000',
      experience: '2+ years',
      description: 'Create clear and comprehensive documentation for our technical products.',
      requirements: [
        'Excellent writing and communication skills',
        'Technical background preferred',
        'Experience with documentation tools',
        'Ability to work with engineering teams'
      ],
      responsibilities: [
        'Write technical documentation',
        'Create user guides and tutorials',
        'Maintain documentation consistency',
        'Work with SMEs to gather information'
      ]
    }
  ];

  const benefits = [
    {
      icon: '💰',
      title: 'Competitive Salary',
      description: 'Industry-leading compensation packages with performance bonuses'
    },
    {
      icon: '🏥',
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs'
    },
    {
      icon: '🌍',
      title: 'Remote-First',
      description: 'Work from anywhere with flexible hours and time zones'
    },
    {
      icon: '📚',
      title: 'Learning Budget',
      description: '$2,000 annual budget for courses, conferences, and certifications'
    },
    {
      icon: '🏖️',
      title: 'Unlimited PTO',
      description: 'Take time off when you need it with unlimited vacation policy'
    },
    {
      icon: '💻',
      title: 'Equipment',
      description: 'Latest MacBook Pro and all necessary equipment provided'
    }
  ];

  return (
    <div className="min-h-screen bg-deep-blue">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-deep-blue to-medium-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              {t.careers.title}
            </h1>
            <p className="text-xl text-soft-gray mb-8">
              {t.careers.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Why Work Here Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-warm-white mb-12 text-center">
            {t.careers.whyWorkHere}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div 
                key={index} 
                className="p-6 glass-effect rounded-2xl text-center hover:neon-glow transition-all duration-300"
              >
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-bold text-warm-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-soft-gray leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-gradient-to-r from-medium-blue/30 to-deep-blue/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-warm-white mb-12 text-center">
            {t.careers.openPositions}
          </h2>
          
          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <div 
                key={index} 
                className="p-6 glass-effect rounded-2xl hover:neon-glow transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                  <div className="lg:col-span-2">
                    <h3 className="text-2xl font-bold text-warm-white mb-2">
                      {position.title}
                    </h3>
                    
                    <div className="flex flex-wrap gap-4 mb-4 text-sm text-soft-gray">
                      <span className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {position.type}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-4 w-4" />
                        {position.salary}
                      </span>
                    </div>
                    
                    <p className="text-soft-gray leading-relaxed mb-4">
                      {position.description}
                    </p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-semibold text-neon-cyan mb-3">
                          {t.careers.requirements}
                        </h4>
                        <ul className="space-y-2">
                          {position.requirements.map((req, reqIndex) => (
                            <li key={reqIndex} className="flex items-start gap-2 text-sm text-soft-gray">
                              <div className="w-2 h-2 bg-neon-blue rounded-full mt-2 flex-shrink-0"></div>
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-neon-cyan mb-3">
                          {t.careers.responsibilities}
                        </h4>
                        <ul className="space-y-2">
                          {position.responsibilities.map((resp, respIndex) => (
                            <li key={respIndex} className="flex items-start gap-2 text-sm text-soft-gray">
                              <div className="w-2 h-2 bg-neon-cyan rounded-full mt-2 flex-shrink-0"></div>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col justify-between">
                    <div className="mb-4">
                      <span className="inline-block px-3 py-1 text-sm bg-neon-blue/20 text-neon-blue rounded-full border border-neon-blue/30">
                        {position.experience} experience
                      </span>
                    </div>
                    
                    <button className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue font-semibold py-3 px-6 rounded-lg hover:scale-105 transition-all duration-300 neon-glow flex items-center justify-center gap-2">
                      {t.careers.apply}
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-warm-white mb-4">
            Don't see the right position?
          </h2>
          <p className="text-soft-gray mb-8 max-w-2xl mx-auto">
            We're always looking for talented individuals to join our team. Send us your resume and let us know how you'd like to contribute to our mission.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue font-semibold py-3 px-8 rounded-lg hover:scale-105 transition-all duration-300 neon-glow"
          >
            Send Your Resume
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </section>
    </div>
  );
}