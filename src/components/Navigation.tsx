
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Home, User, Building, LayoutDashboard, Users } from 'lucide-react';
import { motion } from 'framer-motion';

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
    <motion.nav 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-mystical-900/90 backdrop-blur-xl border-b border-mystical-400/30 shadow-lg shadow-mystical-500/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Magical Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <motion.div 
              className="w-12 h-12 bg-gradient-to-br from-mystical-400 via-mystical-500 to-ember-500 rounded-xl flex items-center justify-center shadow-lg shadow-mystical-500/30"
              whileHover={{ 
                scale: 1.1,
                rotate: 5,
                boxShadow: '0 10px 30px rgba(139, 108, 242, 0.5)'
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-white font-fantasy font-bold text-xl">S</span>
            </motion.div>
            <motion.span 
              className="text-white font-fantasy font-bold text-xl tracking-wide drop-shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              SkillSync
            </motion.span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {[
              { to: "/", label: "Home", icon: Home },
              { to: "/volunteer-profile", label: "Volunteer Profile", icon: User },
              { to: "/ngo-profile", label: "NGO Profile", icon: Building },
              { to: "/volunteer-dashboard", label: "Volunteer Dashboard", icon: LayoutDashboard },
              { to: "/ngo-dashboard", label: "NGO Dashboard", icon: Users },
            ].map((item, index) => (
              <motion.div
                key={item.to}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.1 }}
              >
                <Link 
                  to={item.to} 
                  className="group relative flex items-center space-x-2 text-mystical-100/80 hover:text-mystical-200 transition-all duration-300 font-medieval"
                >
                  <item.icon size={16} className="group-hover:scale-110 transition-transform" />
                  <span>{item.label}</span>
                  <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-mystical-400 to-ember-400 group-hover:w-full transition-all duration-300" />
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Enchanted CTA Button */}
          <motion.div 
            className="hidden md:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8 }}
          >
            <Link to="/signup">
              <motion.button
                className="bg-gradient-to-r from-ember-400 via-ember-500 to-mystical-500 text-white px-6 py-2 rounded-full font-medieval font-semibold shadow-lg shadow-ember-500/30 relative overflow-hidden"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: '0 10px 30px rgba(237, 121, 22, 0.4)'
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">Join the Adventure</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
              </motion.button>
            </Link>
          </motion.div>

          {/* Mobile menu button */}
          <motion.button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-mystical-200 p-2 rounded-lg hover:bg-mystical-800/50 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Menu size={24} />
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ 
            height: isMobileMenuOpen ? 'auto' : 0,
            opacity: isMobileMenuOpen ? 1 : 0 
          }}
          transition={{ duration: 0.3 }}
          className="md:hidden overflow-hidden bg-mystical-900/95 backdrop-blur-lg border-t border-mystical-400/20"
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {[
              { to: "/", label: "Home", icon: Home },
              { to: "/volunteer-profile", label: "Volunteer Profile", icon: User },
              { to: "/ngo-profile", label: "NGO Profile", icon: Building },
              { to: "/volunteer-dashboard", label: "Volunteer Dashboard", icon: LayoutDashboard },
              { to: "/ngo-dashboard", label: "NGO Dashboard", icon: Users },
            ].map((item) => (
              <Link 
                key={item.to}
                to={item.to} 
                className="flex items-center space-x-3 px-3 py-2 text-mystical-100/80 hover:text-mystical-200 hover:bg-mystical-800/50 rounded-lg transition-all duration-300 font-medieval"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon size={18} />
                <span>{item.label}</span>
              </Link>
            ))}
            <Link 
              to="/signup" 
              className="block mx-3 mt-4 bg-gradient-to-r from-ember-400 to-mystical-500 text-white px-4 py-2 rounded-full font-medieval font-semibold text-center shadow-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Join the Adventure
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navigation;
