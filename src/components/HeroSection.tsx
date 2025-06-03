
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VideoBackground from './VideoBackground';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <VideoBackground src="/animebg_1.mp4" />

      {/* Commented out Animated Background Layers */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-900 via-blue-800 to-teal-600" />

        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-yellow-300 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 2}s`,
              }}
            />
          ))}
        </div>

        <div
          className="absolute bottom-0 w-full h-64 bg-gradient-to-t from-green-800 to-transparent opacity-80"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />

        <div
          className="absolute bottom-0 left-0 w-32 h-32 bg-green-700 rounded-full opacity-60"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        <div
          className="absolute bottom-0 right-0 w-24 h-24 bg-green-600 rounded-full opacity-40"
          style={{ transform: `translateY(${scrollY * 0.4}px)` }}
        />
      </div> */}

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
          <span className="bg-gradient-to-r from-blue-200 via-teal-200 to-green-200 bg-clip-text text-transparent">
            SkillSync
          </span>
        </h1>

        {/* Magical Subtitle */}
        <div className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in opacity-90">
          <p className="mb-2">Empowering volunteers.</p>
          <p className="mb-2">Streamlining impact.</p>
          <p className="text-yellow-300">One task at a time.</p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
          <Link
            to="/volunteer-signup"
            className="group bg-gradient-to-r from-coral-500 to-yellow-500 text-slate-900 px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl hover:shadow-coral-500/25 transform hover:scale-105 transition-all duration-300"
          >
            <span className="group-hover:animate-pulse">Start Your Journey</span>
          </Link>

          <Link
            to="/ngo-signup"
            className="group border-2 border-teal-400 text-teal-300 px-8 py-4 rounded-full font-semibold text-lg hover:bg-teal-400 hover:text-slate-900 transform hover:scale-105 transition-all duration-300"
          >
            <span className="group-hover:animate-pulse">For NGOs</span>
          </Link>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
