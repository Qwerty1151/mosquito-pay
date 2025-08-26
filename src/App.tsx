import React, { useState, useEffect } from 'react';
import { Navigation } from './components/Navigation';
import { Footer } from './components/Footer';
import { LandingPage } from './components/LandingPage';
import { PricingPage } from './components/PricingPage';
import { SuccessPage } from './components/SuccessPage';
import { FailPage } from './components/FailPage';
import { PrivacyPage } from './components/PrivacyPage';
import { TermsPage } from './components/TermsPage';
import { SEOHead } from './utils/seo.tsx';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');

  useEffect(() => {
    // Load page from URL path
    const path = window.location.pathname;
    switch (path) {
      case '/':
        setCurrentPage('home');
        break;
      case '/pricing':
        setCurrentPage('pricing');
        break;
      case '/success':
        setCurrentPage('success');
        break;
      case '/fail':
        setCurrentPage('fail');
        break;
      case '/privacy':
        setCurrentPage('privacy');
        break;
      case '/terms':
        setCurrentPage('terms');
        break;
      default:
        setCurrentPage('home');
    }
  }, []);

  const handlePageChange = (page: string) => {
    setCurrentPage(page);
    
    // Update URL without page reload
    const urls = {
      home: '/',
      pricing: '/pricing',
      success: '/success',
      fail: '/fail',
      privacy: '/privacy',
      terms: '/terms'
    };
    
    window.history.pushState({}, '', urls[page] || '/');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <LandingPage onNavigate={handlePageChange} />;
      case 'pricing':
        return <PricingPage onNavigate={handlePageChange} />;
      case 'success':
        return <SuccessPage onNavigate={handlePageChange} />;
      case 'fail':
        return <FailPage onNavigate={handlePageChange} />;
      case 'privacy':
        return <PrivacyPage onNavigate={handlePageChange} />;
      case 'terms':
        return <TermsPage onNavigate={handlePageChange} />;
      default:
        return <LandingPage onNavigate={handlePageChange} />;
    }
  };

  return (
    <div className="min-h-screen bg-deep-blue">
      <SEOHead currentPage={currentPage} />
      <Navigation currentPage={currentPage} onPageChange={handlePageChange} />
      <main className="pt-16 lg:pt-20">
        {renderPage()}
      </main>
      <Footer onNavigate={handlePageChange} />
    </div>
  );
}