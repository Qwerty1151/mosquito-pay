import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe, Check } from '../ui/icons';
import { useTranslation } from '../../hooks/useTranslation';
import { offices, contactMethods, supportChannels } from '../../utils/contactData';

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  subject: string;
  message: string;
  service: string;
  budget: string;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    service: '',
    budget: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        service: '',
        budget: ''
      });
    }, 3000);
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case 'mail': return Mail;
      case 'phone': return Phone;
      case 'mapPin': return MapPin;
      case 'messageSquare': return MessageSquare;
      default: return Mail;
    }
  };

  return (
    <div className="min-h-screen bg-deep-blue">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-deep-blue to-medium-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6 gradient-text">
              {t.contact.title}
            </h1>
            <p className="text-xl text-soft-gray mb-8">
              {t.contact.subtitle}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactMethods.map((method, index) => {
              const IconComponent = getIconComponent(method.icon);
              return (
                <div key={index} className="text-center p-6 glass-effect rounded-2xl hover:neon-glow transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-neon-blue to-neon-cyan rounded-full mb-4 neon-glow">
                    <IconComponent className="h-8 w-8 text-deep-blue" />
                  </div>
                  <h3 className="text-xl font-semibold text-warm-white mb-2">
                    {method.title}
                  </h3>
                  <p className="text-soft-gray mb-4 text-sm">
                    {method.description}
                  </p>
                  <div className="text-neon-blue font-medium">
                    {method.contact}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-16 bg-medium-blue">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="glass-effect rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-warm-white mb-6">
                Send us a message
              </h2>
              
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500 rounded-full mb-4">
                    <Check className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-warm-white mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-soft-gray">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-warm-white mb-2">{t.contact.name} *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-deep-blue border border-border rounded-lg text-warm-white placeholder-soft-gray focus:outline-none focus:ring-2 focus:ring-neon-blue"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-warm-white mb-2">{t.contact.email} *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 bg-deep-blue border border-border rounded-lg text-warm-white placeholder-soft-gray focus:outline-none focus:ring-2 focus:ring-neon-blue"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-warm-white mb-2">{t.contact.company}</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-deep-blue border border-border rounded-lg text-warm-white placeholder-soft-gray focus:outline-none focus:ring-2 focus:ring-neon-blue"
                        placeholder="Your company name"
                      />
                    </div>
                    <div>
                      <label className="block text-warm-white mb-2">Service Interest</label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-deep-blue border border-border rounded-lg text-warm-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                      >
                        <option value="">Select a service</option>
                        <option value="software">Software Development</option>
                        <option value="games">Game Development</option>
                        <option value="ai">AI & Machine Learning</option>
                        <option value="cloud">Cloud Solutions</option>
                        <option value="mobile">Mobile Development</option>
                        <option value="consulting">IT Consulting</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-warm-white mb-2">Subject *</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-deep-blue border border-border rounded-lg text-warm-white placeholder-soft-gray focus:outline-none focus:ring-2 focus:ring-neon-blue"
                      placeholder="Brief subject of your inquiry"
                    />
                  </div>

                  <div>
                    <label className="block text-warm-white mb-2">{t.contact.message} *</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-deep-blue border border-border rounded-lg text-warm-white placeholder-soft-gray focus:outline-none focus:ring-2 focus:ring-neon-blue resize-none"
                      placeholder="Tell us about your project, requirements, or questions..."
                    />
                  </div>

                  <div>
                    <label className="block text-warm-white mb-2">Project Budget (Optional)</label>
                    <select
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-deep-blue border border-border rounded-lg text-warm-white focus:outline-none focus:ring-2 focus:ring-neon-blue"
                    >
                      <option value="">Select budget range</option>
                      <option value="<10k">Less than $10,000</option>
                      <option value="10k-50k">$10,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">More than $100,000</option>
                    </select>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-neon-blue to-neon-cyan text-deep-blue font-semibold py-4 px-6 rounded-lg hover:scale-105 transition-all duration-300 neon-glow disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-deep-blue"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        {t.common.send}
                        <Send className="h-5 w-5" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Contact Information & Offices */}
            <div className="space-y-8">
              {/* Support Channels */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-warm-white mb-6">Support Channels</h3>
                <div className="space-y-4">
                  {supportChannels.map((channel, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-deep-blue rounded-lg">
                      <Mail className="h-5 w-5 text-neon-blue mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-warm-white">{channel.name}</div>
                        <div className="text-neon-blue text-sm">{channel.email}</div>
                        <div className="text-soft-gray text-sm">{channel.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Global Offices */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-warm-white mb-6">Global Offices</h3>
                <div className="space-y-4">
                  {offices.slice(0, 3).map((office, index) => (
                    <div key={index} className="flex items-start gap-4 p-4 bg-deep-blue rounded-lg">
                      <MapPin className="h-5 w-5 text-neon-blue mt-1 flex-shrink-0" />
                      <div>
                        <div className="font-semibold text-warm-white">
                          {office.city}, {office.country}
                        </div>
                        <div className="text-soft-gray text-sm">{office.address}</div>
                        <div className="flex items-center gap-4 mt-2 text-sm">
                          <span className="text-neon-blue">{office.phone}</span>
                          <span className="text-soft-gray">{office.timezone}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business Hours */}
              <div className="glass-effect rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-warm-white mb-6">Business Hours</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-neon-blue" />
                    <span className="text-warm-white">Monday - Friday: 9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Globe className="h-5 w-5 text-neon-blue" />
                    <span className="text-warm-white">Available across multiple time zones</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MessageSquare className="h-5 w-5 text-neon-blue" />
                    <span className="text-warm-white">24/7 Emergency Support Available</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}