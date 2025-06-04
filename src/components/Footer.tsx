
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Star, Sparkles, Shield, Scroll } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-mystical-950 overflow-hidden">
      {/* Mystical Night Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-mystical-900 to-mystical-950" />
        
        {/* Floating Mystical Particles */}
        {[...Array(30)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-mystical-400 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${1 + Math.random() * 2}s`,
            }}
          />
        ))}

        {/* Ancient Runes Pattern */}
        <div className="absolute bottom-0 w-full h-32 opacity-10">
          <div className="flex justify-around items-end h-full text-mystical-400 text-4xl">
            {['ᚱ', 'ᚢ', 'ᚾ', 'ᛁ', 'ᚲ', 'ᛋ', 'ᛏ', 'ᚨ', 'ᚠ', 'ᚦ'].map((rune, i) => (
              <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.2}s` }}>
                {rune}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Mystical Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-mystical-400 via-mystical-500 to-ember-500 rounded-xl flex items-center justify-center shadow-lg shadow-mystical-500/30">
                <span className="text-white font-fantasy font-bold text-xl">S</span>
              </div>
              <span className="text-white font-fantasy font-bold text-2xl tracking-wide">SkillSync</span>
              <Sparkles className="w-6 h-6 text-mystical-400 animate-pulse" />
            </div>
            <p className="text-mystical-200 mb-6 max-w-md leading-relaxed font-medieval">
              Where hearts unite across mystical realms to weave threads of kindness and forge bonds of compassion. 
              Join our eternal quest to bring light to the world through the magic of volunteering.
            </p>
            
            {/* Enchanted Newsletter */}
            <div className="bg-mystical-800/30 backdrop-blur-sm rounded-2xl p-6 border border-mystical-400/20">
              <div className="flex items-center space-x-2 mb-3">
                <Scroll className="w-5 h-5 text-mystical-400" />
                <span className="text-mystical-200 font-medieval font-semibold">Join the Chronicle</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Your magical scroll address..."
                  className="flex-1 px-4 py-3 bg-mystical-900/50 border border-mystical-600/50 rounded-xl text-white placeholder-mystical-400 focus:outline-none focus:border-mystical-400 transition-colors duration-200 font-medieval"
                />
                <button className="bg-gradient-to-r from-mystical-500 to-ember-500 text-white px-6 py-3 rounded-xl font-medieval font-semibold hover:shadow-lg hover:shadow-mystical-500/25 transform hover:scale-105 transition-all duration-200">
                  <Sparkles className="w-4 h-4 inline mr-2" />
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Realm Links */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Shield className="w-5 h-5 text-mystical-400" />
              <h3 className="text-white font-fantasy text-lg">Realm Portals</h3>
            </div>
            <ul className="space-y-3">
              <li><Link to="/" className="text-mystical-200 hover:text-mystical-100 transition-colors duration-200 font-medieval flex items-center space-x-2 group">
                <span className="w-2 h-2 bg-mystical-400 rounded-full group-hover:scale-125 transition-transform"></span>
                <span>The Great Hall (Home)</span>
              </Link></li>
              <li><Link to="/volunteer-profile" className="text-mystical-200 hover:text-mystical-100 transition-colors duration-200 font-medieval flex items-center space-x-2 group">
                <span className="w-2 h-2 bg-mystical-400 rounded-full group-hover:scale-125 transition-transform"></span>
                <span>Soulstone Archive</span>
              </Link></li>
              <li><Link to="/ngo-profile" className="text-mystical-200 hover:text-mystical-100 transition-colors duration-200 font-medieval flex items-center space-x-2 group">
                <span className="w-2 h-2 bg-mystical-400 rounded-full group-hover:scale-125 transition-transform"></span>
                <span>Guild Sanctum</span>
              </Link></li>
              <li><Link to="/volunteer-dashboard" className="text-mystical-200 hover:text-mystical-100 transition-colors duration-200 font-medieval flex items-center space-x-2 group">
                <span className="w-2 h-2 bg-mystical-400 rounded-full group-hover:scale-125 transition-transform"></span>
                <span>Quest Hall</span>
              </Link></li>
              <li><Link to="/ngo-dashboard" className="text-mystical-200 hover:text-mystical-100 transition-colors duration-200 font-medieval flex items-center space-x-2 group">
                <span className="w-2 h-2 bg-mystical-400 rounded-full group-hover:scale-125 transition-transform"></span>
                <span>Guild Control Tower</span>
              </Link></li>
            </ul>
          </div>

          {/* Sacred Knowledge */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <Scroll className="w-5 h-5 text-mystical-400" />
              <h3 className="text-white font-fantasy text-lg">Sacred Knowledge</h3>
            </div>
            <ul className="space-y-3">
              <li><Link to="/signup" className="text-mystical-200 hover:text-mystical-100 transition-colors duration-200 font-medieval flex items-center space-x-2 group">
                <span className="w-2 h-2 bg-ember-400 rounded-full group-hover:scale-125 transition-transform"></span>
                <span>Join the Fellowship</span>
              </Link></li>
              <li><Link to="/login" className="text-mystical-200 hover:text-mystical-100 transition-colors duration-200 font-medieval flex items-center space-x-2 group">
                <span className="w-2 h-2 bg-ember-400 rounded-full group-hover:scale-125 transition-transform"></span>
                <span>Enter the Realm</span>
              </Link></li>
              <li><a href="#" className="text-mystical-200 hover:text-mystical-100 transition-colors duration-200 font-medieval flex items-center space-x-2 group">
                <span className="w-2 h-2 bg-ember-400 rounded-full group-hover:scale-125 transition-transform"></span>
                <span>Ancient Scrolls (Help)</span>
              </a></li>
              <li><a href="#" className="text-mystical-200 hover:text-mystical-100 transition-colors duration-200 font-medieval flex items-center space-x-2 group">
                <span className="w-2 h-2 bg-ember-400 rounded-full group-hover:scale-125 transition-transform"></span>
                <span>Sacred Laws (Terms)</span>
              </a></li>
              <li><a href="#" className="text-mystical-200 hover:text-mystical-100 transition-colors duration-200 font-medieval flex items-center space-x-2 group">
                <span className="w-2 h-2 bg-ember-400 rounded-full group-hover:scale-125 transition-transform"></span>
                <span>Privacy Covenant</span>
              </a></li>
            </ul>
          </div>
        </div>

        {/* Mystical Bottom Bar */}
        <div className="border-t border-mystical-700/50 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <div className="flex items-center space-x-3 text-mystical-200 mb-4 sm:mb-0 font-medieval">
            <span>Forged with ancient magic by the SkillSync Circle</span>
            <Heart className="w-4 h-4 text-ember-400 animate-pulse" />
            <span className="text-xl">🌟</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1 text-mystical-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
              ))}
            </div>
            <span className="text-mystical-300 text-sm font-medieval">
              © 2024 SkillSync Realm. All magic reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
