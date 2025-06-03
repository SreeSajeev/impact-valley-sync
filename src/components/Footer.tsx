
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-slate-900 overflow-hidden">
      {/* Starry Night Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900 to-slate-950" />
        
        {/* Twinkling Stars */}
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Mountain Silhouettes */}
        <div className="absolute bottom-0 w-full">
          <svg viewBox="0 0 1200 200" className="w-full h-32 text-slate-800 fill-current">
            <path d="M0,200 L0,100 L200,50 L400,80 L600,40 L800,70 L1000,30 L1200,60 L1200,200 Z" />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-teal-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-white font-bold text-2xl">SkillSync</span>
            </div>
            <p className="text-blue-200 mb-6 max-w-md leading-relaxed">
              Connecting passionate volunteers with meaningful opportunities to create lasting impact in their communities through AI-powered matching.
            </p>
            
            {/* Newsletter Signup */}
            <div className="flex flex-col sm:flex-row gap-3">
              <input
                type="email"
                placeholder="Enter your email for impact updates"
                className="flex-1 px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-teal-400 transition-colors duration-200"
              />
              <button className="bg-gradient-to-r from-teal-500 to-blue-500 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg hover:shadow-teal-500/25 transform hover:scale-105 transition-all duration-200">
                Subscribe
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-200 hover:text-white transition-colors duration-200">About Us</Link></li>
              <li><Link to="/how-it-works" className="text-blue-200 hover:text-white transition-colors duration-200">How It Works</Link></li>
              <li><Link to="/volunteers" className="text-blue-200 hover:text-white transition-colors duration-200">For Volunteers</Link></li>
              <li><Link to="/ngos" className="text-blue-200 hover:text-white transition-colors duration-200">For NGOs</Link></li>
              <li><Link to="/impact" className="text-blue-200 hover:text-white transition-colors duration-200">Impact Reports</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-4">Support</h3>
            <ul className="space-y-2">
              <li><Link to="/help" className="text-blue-200 hover:text-white transition-colors duration-200">Help Center</Link></li>
              <li><Link to="/contact" className="text-blue-200 hover:text-white transition-colors duration-200">Contact Us</Link></li>
              <li><Link to="/terms" className="text-blue-200 hover:text-white transition-colors duration-200">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-blue-200 hover:text-white transition-colors duration-200">Privacy Policy</Link></li>
              <li><Link to="/community-guidelines" className="text-blue-200 hover:text-white transition-colors duration-200">Community Guidelines</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-blue-200 mb-4 sm:mb-0">
            <span>Crafted with purpose by the SkillSync team</span>
            <Heart className="w-4 h-4 text-coral-400 animate-pulse" />
            <span>🌍</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-yellow-400">
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
              <Star className="w-4 h-4 fill-current" />
            </div>
            <span className="text-blue-200 text-sm">
              © 2024 SkillSync. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
