
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import HowItWorksSection from '../components/HowItWorksSection';
import GamificationSection from '../components/GamificationSection';
import CommunitySection from '../components/CommunitySection';
import Footer from '../components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <HowItWorksSection />
      <GamificationSection />
      <CommunitySection />
      <Footer />
    </div>
  );
};

export default Index;
