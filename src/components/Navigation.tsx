
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-slate-900/80 backdrop-blur-lg border-b border-blue-400/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-500 rounded-lg flex items-center justify-center transform group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <span className="text-white font-bold text-xl tracking-tight">SkillSync</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white/80 hover:text-white transition-colors duration-200">How It Works</Link>
            <Link to="/volunteers" className="text-white/80 hover:text-white transition-colors duration-200">For Volunteers</Link>
            <Link to="/ngos" className="text-white/80 hover:text-white transition-colors duration-200">For NGOs</Link>
            <Link to="/leaderboard" className="text-white/80 hover:text-white transition-colors duration-200">Leaderboard</Link>
            <Link to="/community" className="text-white/80 hover:text-white transition-colors duration-200">Community</Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link 
              to="/join" 
              className="bg-gradient-to-r from-coral-400 to-yellow-400 text-slate-900 px-6 py-2 rounded-full font-semibold hover:shadow-lg hover:shadow-coral-400/25 transform hover:scale-105 transition-all duration-200"
            >
              Join Now
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-blue-400/20">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">How It Works</Link>
              <Link to="/volunteers" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">For Volunteers</Link>
              <Link to="/ngos" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">For NGOs</Link>
              <Link to="/leaderboard" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">Leaderboard</Link>
              <Link to="/community" className="block px-3 py-2 text-white/80 hover:text-white transition-colors">Community</Link>
              <Link 
                to="/join" 
                className="block mx-3 mt-4 bg-gradient-to-r from-coral-400 to-yellow-400 text-slate-900 px-4 py-2 rounded-full font-semibold text-center"
              >
                Join Now
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
