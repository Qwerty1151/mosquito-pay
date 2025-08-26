import React, { useState } from 'react';
import { useTranslation } from '../../hooks/useTranslation';
import { Button } from '../ui/button';
import { Card } from '../ui/card';
import { Progress } from '../ui/progress';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { Separator } from '../ui/separator';
import { 
  Heart, 
  Share2, 
  Users, 
  Target, 
  TrendingUp, 
  Award,
  Gift,
  Globe,
  Leaf,
  Code,
  Accessibility,
  ArrowRight,
  CheckCircle,
  Star,
  Trophy
} from 'lucide-react';
import { motion } from 'motion/react';

interface AmbassadorPageProps {
  onNavigate: (page: string) => void;
}

type ProjectType = 'itEducation' | 'accessibility' | 'greentech';

interface DonorData {
  name: string;
  amount: number;
  timestamp: string;
}

interface AmbassadorStats {
  totalRaised: number;
  donorsCount: number;
  rank: number;
  level: string;
}

export function AmbassadorPage({ onNavigate }: AmbassadorPageProps) {
  const { t } = useTranslation();
  const [selectedProject, setSelectedProject] = useState<ProjectType>('itEducation');
  
  // Mock data
  const projectGoal = 50000;
  const currentAmount = 32450;
  const progressPercentage = (currentAmount / projectGoal) * 100;

  const recentDonors: DonorData[] = [
    { name: "Alex Chen", amount: 500, timestamp: "2 hours ago" },
    { name: "Sarah Johnson", amount: 250, timestamp: "4 hours ago" },
    { name: "Михаил К.", amount: 1000, timestamp: "6 hours ago" },
    { name: "Emma Wilson", amount: 150, timestamp: "8 hours ago" },
    { name: "David Brown", amount: 300, timestamp: "12 hours ago" },
  ];

  const ambassadorStats: AmbassadorStats = {
    totalRaised: 128350,
    donorsCount: 234,
    rank: 7,
    level: "Gold Ambassador"
  };

  const projectIcons = {
    itEducation: Code,
    accessibility: Accessibility,
    greentech: Leaf
  };

  const ProjectIcon = projectIcons[selectedProject];

  const currentProjectData = t.ambassador.projects[selectedProject];

  return (
    <div className="min-h-screen bg-gradient-to-br from-deep-blue via-medium-blue to-deep-blue">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-16">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-blue/10 to-neon-cyan/10" />
        
        {/* Dynamic background based on selected project */}
        <div className="absolute inset-0 opacity-20">
          {selectedProject === 'itEducation' && (
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1603354350317-6f7aaa5911c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZHJlbiUyMGNvZGluZyUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc1NTgzODg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`
              }}
            />
          )}
          {selectedProject === 'accessibility' && (
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1617729420525-a8aa35b2a649?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhY2Nlc3NpYmlsaXR5JTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NTU4ODI3MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`
              }}
            />
          )}
          {selectedProject === 'greentech' && (
            <div 
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1741665790160-650592f1bbf8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMHRlY2hub2xvZ3klMjBlbnZpcm9ubWVudHxlbnwxfHx8fDE3NTU4ODI3MDZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)`
              }}
            />
          )}
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Ambassador Info */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"
              >
                <div className="flex items-center justify-center lg:justify-start mb-8">
                  <Avatar className="w-24 h-24 border-4 border-neon-blue shadow-lg shadow-neon-blue/30">
                    <AvatarImage src="https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc1NTg2NzAyNXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" alt="Ambassador" />
                    <AvatarFallback className="bg-gradient-to-br from-neon-blue to-neon-cyan text-deep-blue font-bold text-xl">
                      AM
                    </AvatarFallback>
                  </Avatar>
                  <div className="ml-6">
                    <Badge className="bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue font-semibold mb-2">
                      {ambassadorStats.level}
                    </Badge>
                    <div className="flex items-center text-soft-gray">
                      <Trophy className="w-4 h-4 mr-2 text-neon-blue" />
                      Rank #{ambassadorStats.rank}
                    </div>
                  </div>
                </div>

                <h1 className="text-4xl lg:text-5xl font-bold mb-6 gradient-text">
                  {currentProjectData.title}
                </h1>
                
                <p className="text-xl text-soft-gray mb-8 leading-relaxed">
                  {currentProjectData.description}
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue font-semibold hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
                  >
                    <Heart className="w-5 h-5 mr-2" />
                    {currentProjectData.cta}
                  </Button>
                  
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-deep-blue transition-all duration-300"
                  >
                    <Share2 className="w-5 h-5 mr-2" />
                    {t.ambassador.shareProject}
                  </Button>
                </div>
              </motion.div>

              {/* Progress Card */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <Card className="p-8 glass-effect border-neon-blue/20">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-warm-white">
                      {t.ambassador.progressLabel}
                    </h3>
                    <ProjectIcon className="w-8 h-8 text-neon-blue" />
                  </div>

                  <Progress 
                    value={progressPercentage} 
                    className="h-3 mb-6 bg-medium-blue"
                  />

                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-neon-cyan mb-2">
                        ${currentAmount.toLocaleString()}
                      </div>
                      <div className="text-soft-gray">
                        {t.ambassador.raisedLabel}
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-neon-blue mb-2">
                        ${projectGoal.toLocaleString()}
                      </div>
                      <div className="text-soft-gray">
                        {t.ambassador.goalLabel}
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 pt-6 border-t border-neon-blue/20">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-warm-white mb-1">
                        {Math.round(progressPercentage)}%
                      </div>
                      <div className="text-sm text-soft-gray">Complete</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Selection */}
      <section className="py-16 bg-gradient-to-r from-medium-blue/50 to-light-blue/50">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-warm-white">
              Choose a Project to Support
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              {(['itEducation', 'accessibility', 'greentech'] as ProjectType[]).map((project) => {
                const ProjectIcon = projectIcons[project];
                const isSelected = selectedProject === project;
                
                return (
                  <Card
                    key={project}
                    className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
                      isSelected 
                        ? 'bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 border-neon-blue' 
                        : 'glass-effect border-neon-blue/20 hover:border-neon-blue/50'
                    }`}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="flex items-center mb-4">
                      <ProjectIcon className={`w-8 h-8 mr-3 ${isSelected ? 'text-neon-blue' : 'text-soft-gray'}`} />
                      {isSelected && <CheckCircle className="w-5 h-5 text-neon-cyan ml-auto" />}
                    </div>
                    
                    <h3 className={`text-lg font-semibold mb-3 ${isSelected ? 'text-neon-cyan' : 'text-warm-white'}`}>
                      {t.ambassador.projects[project].title.split('.')[0]}
                    </h3>
                    
                    <p className="text-sm text-soft-gray line-clamp-3">
                      {t.ambassador.projects[project].description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-16 text-warm-white">
              {t.ambassador.howItWorks}
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { key: 'step1', icon: Gift, color: 'text-neon-blue' },
                { key: 'step2', icon: TrendingUp, color: 'text-neon-cyan' },
                { key: 'step3', icon: Users, color: 'text-electric-blue' },
                { key: 'step4', icon: Globe, color: 'text-neon-blue' }
              ].map((step, index) => {
                const StepIcon = step.icon;
                return (
                  <div key={step.key} className="text-center relative">
                    {index < 3 && (
                      <ArrowRight className="hidden md:block absolute top-8 -right-8 w-6 h-6 text-neon-blue/50" />
                    )}
                    
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 border-2 border-neon-blue/30 flex items-center justify-center">
                      <StepIcon className={`w-8 h-8 ${step.color}`} />
                    </div>
                    
                    <div className="w-8 h-8 mx-auto mb-4 rounded-full bg-neon-blue text-deep-blue flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    
                    <h3 className="text-lg font-semibold text-warm-white mb-3">
                      {t.ambassador.steps[step.key as keyof typeof t.ambassador.steps]}
                    </h3>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats and Donors */}
      <section className="py-16 bg-gradient-to-r from-medium-blue/30 to-light-blue/30">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
            
            {/* Latest Donors */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="p-8 glass-effect border-neon-blue/20">
                <h3 className="text-2xl font-bold text-warm-white mb-6 flex items-center">
                  <Heart className="w-6 h-6 mr-3 text-neon-cyan" />
                  {t.ambassador.latestDonors}
                </h3>
                
                <div className="space-y-4">
                  {recentDonors.map((donor, index) => (
                    <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-medium-blue/30">
                      <div className="flex items-center">
                        <Avatar className="w-10 h-10 border border-neon-blue/30">
                          <AvatarFallback className="bg-neon-blue/20 text-neon-cyan">
                            {donor.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div className="ml-3">
                          <div className="text-warm-white font-medium">{donor.name}</div>
                          <div className="text-sm text-soft-gray">{donor.timestamp}</div>
                        </div>
                      </div>
                      <div className="text-neon-cyan font-bold">
                        ${donor.amount}
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Ambassador Stats */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <Card className="p-8 glass-effect border-neon-blue/20">
                <h3 className="text-2xl font-bold text-warm-white mb-6 flex items-center">
                  <Trophy className="w-6 h-6 mr-3 text-neon-blue" />
                  {t.ambassador.totalStats}
                </h3>
                
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-cyan mb-2">
                      ${ambassadorStats.totalRaised.toLocaleString()}
                    </div>
                    <div className="text-soft-gray">Total Raised</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-neon-blue mb-2">
                      {ambassadorStats.donorsCount}
                    </div>
                    <div className="text-soft-gray">Supporters</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 glass-effect border-neon-blue/20">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-lg font-semibold text-warm-white">{ambassadorStats.level}</div>
                    <div className="text-soft-gray">Rank #{ambassadorStats.rank} globally</div>
                  </div>
                  <div className="flex items-center">
                    <Star className="w-8 h-8 text-neon-blue fill-current" />
                    <Star className="w-8 h-8 text-neon-blue fill-current" />
                    <Star className="w-8 h-8 text-neon-blue fill-current" />
                  </div>
                </div>
              </Card>

              <Button 
                size="lg" 
                className="w-full bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue font-semibold hover:shadow-lg hover:shadow-neon-blue/30 transition-all duration-300"
              >
                <Gift className="w-5 h-5 mr-2" />
                Donate Now - ${currentProjectData.cta.split(' ').pop()}
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-center mb-16 text-warm-white">
              {t.ambassador.faq}
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 glass-effect border-neon-blue/20">
                <h3 className="text-xl font-semibold text-neon-cyan mb-4">
                  {t.ambassador.faqTrust}
                </h3>
                <p className="text-soft-gray leading-relaxed">
                  Navilon is a trusted international IT company with years of experience. 
                  All donations are tracked transparently, and we provide regular updates 
                  on project progress. Our platform is secure and verified.
                </p>
              </Card>

              <Card className="p-8 glass-effect border-neon-blue/20">
                <h3 className="text-xl font-semibold text-neon-cyan mb-4">
                  {t.ambassador.faqMoney}
                </h3>
                <p className="text-soft-gray leading-relaxed">
                  100% of donations go directly to the selected projects. We cover 
                  operational costs separately. You can track exactly how your 
                  contribution is being used through our transparent reporting system.
                </p>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button 
                variant="outline"
                onClick={() => onNavigate('contact')}
                className="border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-deep-blue transition-all duration-300"
              >
                Learn More About Navilon
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}