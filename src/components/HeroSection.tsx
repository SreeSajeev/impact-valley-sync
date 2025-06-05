
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import VideoBackground from './VideoBackground';
import EnchantedButton from './EnchantedButton';
import FloatingGem from './FloatingGem';
import { motion } from 'framer-motion';
import { WandSparkles, Compass } from 'lucide-react';

const HeroSection = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <VideoBackground src="/bg_2.mp4" />

      {/* Magical Forest Overlays */}
      <div className="absolute inset-0 z-10">
        {/* Mystical fog layers */}
        <div className="absolute inset-0 bg-gradient-to-b from-mystical-900/20 via-transparent to-forest-900/30" />
        <div 
          className="absolute inset-0 bg-gradient-to-t from-forest-800/40 via-transparent to-mystical-600/20"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />
        
        {/* Floating magical particles */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-mystical-300 to-ember-300 rounded-full opacity-60"
              animate={{
                x: [0, 100, 0],
                y: [0, -80, 0],
                opacity: [0.3, 0.8, 0.3],
                scale: [0.5, 1.2, 0.5],
              }}
              transition={{
                duration: 8 + i * 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${20 + Math.random() * 60}%`,
              }}
            />
          ))}
        </div>

        {/* Floating gems around the content */}
        <div className="absolute top-20 left-10">
          <FloatingGem type="sapphire" size="sm" />
        </div>
        <div className="absolute top-32 right-20">
          <FloatingGem type="emerald" size="sm" />
        </div>
        <div className="absolute bottom-40 left-20">
          <FloatingGem type="ruby" size="sm" />
        </div>
        <div className="absolute bottom-20 right-10">
          <FloatingGem type="diamond" size="sm" />
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Main Title */}
        <motion.h1 
          className="text-5xl md:text-7xl font-fantasy font-bold text-white mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="bg-gradient-to-r from-mystical-200 via-ember-200 to-forest-200 bg-clip-text text-transparent drop-shadow-2xl">
            SkillSync
          </span>
        </motion.h1>

        {/* Magical Subtitle */}
        <motion.div 
          className="text-xl md:text-2xl text-mystical-100 mb-8 font-mystical"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="mb-2 drop-shadow-lg">Embark on enchanted quests.</p>
          <p className="mb-2 drop-shadow-lg">Collect mystical gems.</p>
          <p className="text-ember-300 drop-shadow-lg">Become a Guardian of Good.</p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/volunteer-profile">
            <EnchantedButton variant="mystical" size="lg" className="group">
              <WandSparkles className="group-hover:animate-pulse" size={20} />
              <span>Begin Your Quest</span>
            </EnchantedButton>
          </Link>

          <Link to="/ngo-profile">
            <EnchantedButton variant="forest" size="lg" className="group">
              <Compass className="group-hover:animate-pulse" size={20} />
              <span>Guild Masters</span>
            </EnchantedButton>
          </Link>
        </motion.div>

        {/* Mystical Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="w-8 h-12 border-2 border-mystical-300/70 rounded-full flex justify-center backdrop-blur-sm bg-mystical-900/20">
            <motion.div 
              className="w-2 h-4 bg-gradient-to-b from-mystical-300 to-ember-300 rounded-full mt-2"
              animate={{ 
                opacity: [0.5, 1, 0.5],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
