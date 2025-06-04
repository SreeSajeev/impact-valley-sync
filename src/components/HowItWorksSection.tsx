
import React, { useEffect, useState } from 'react';
import { Search, Heart, Star, Sparkles, Map, Crown } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingGem from './FloatingGem';

const HowItWorksSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const section = document.getElementById('how-it-works');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const questSteps = [
    {
      icon: Map,
      title: "Choose Your Quest",
      description: "Our magical AI discovers perfect volunteer adventures based on your unique skills and calling.",
      color: "from-mystical-400 to-mystical-600",
      gemType: "sapphire" as const,
      rune: "🗺️"
    },
    {
      icon: Heart,
      title: "Embark on Adventures",
      description: "Connect with Guild Masters (NGOs) on meaningful quests that create real change in your realm.",
      color: "from-forest-400 to-forest-600",
      gemType: "emerald" as const,
      rune: "⚔️"
    },
    {
      icon: Crown,
      title: "Ascend the Ranks",
      description: "Earn mystical gems, unlock legendary badges, and climb the Hall of Heroes while building your epic tale.",
      color: "from-ember-400 to-ember-600",
      gemType: "ruby" as const,
      rune: "👑"
    }
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gradient-to-b from-mystical-900 via-mystical-800 to-forest-900 relative overflow-hidden">
      {/* Mystical Cave Background Effects */}
      <div className="absolute inset-0 opacity-30">
        {/* Floating cave crystals */}
        <motion.div 
          className="absolute top-20 left-10 w-8 h-8 bg-mystical-400 rounded-full blur-sm"
          animate={{ 
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute top-40 right-20 w-6 h-6 bg-ember-400 rounded-full blur-sm"
          animate={{ 
            y: [0, -15, 0],
            opacity: [0.4, 0.8, 0.4]
          }}
          transition={{ duration: 3, repeat: Infinity, delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-40 left-1/4 w-10 h-10 bg-forest-400 rounded-full blur-md"
          animate={{ 
            y: [0, -25, 0],
            opacity: [0.2, 0.6, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
        
        {/* Cave entrance glow */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-96 h-96 bg-mystical-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/3 w-80 h-80 bg-ember-500/10 rounded-full blur-3xl" />
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-mystical-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Mystical Cave Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-6"
          >
            <Sparkles className="text-mystical-400 mr-4" size={32} />
            <h2 className="text-4xl md:text-5xl font-fantasy font-bold bg-gradient-to-r from-mystical-200 via-mystical-100 to-ember-200 bg-clip-text text-transparent">
              The Mystical Cave of Opportunities
            </h2>
            <Sparkles className="text-ember-400 ml-4" size={32} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-mystical-200 max-w-3xl mx-auto font-medieval"
          >
            Three enchanted steps to transform your skills into legendary adventures
          </motion.p>
        </div>

        {/* Enchanted Quest Steps */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-16">
          {questSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: index * 0.3 }}
                className="group text-center relative"
              >
                {/* Magical Circle Background */}
                <div className="relative mb-8 flex justify-center">
                  <motion.div
                    className={`relative w-32 h-32 bg-gradient-to-br ${step.color} rounded-full flex items-center justify-center shadow-2xl`}
                    whileHover={{ 
                      scale: 1.1, 
                      rotate: 5,
                      boxShadow: '0 25px 50px rgba(139, 108, 242, 0.4)'
                    }}
                    animate={{
                      boxShadow: [
                        '0 10px 30px rgba(139, 108, 242, 0.2)',
                        '0 20px 40px rgba(139, 108, 242, 0.4)',
                        '0 10px 30px rgba(139, 108, 242, 0.2)',
                      ]
                    }}
                    transition={{ 
                      boxShadow: { duration: 3, repeat: Infinity },
                      hover: { duration: 0.3 }
                    }}
                  >
                    {/* Inner glow */}
                    <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
                    
                    {/* Icon */}
                    <Icon className="w-12 h-12 text-white relative z-10" />
                    
                    {/* Floating Gem */}
                    <div className="absolute -top-3 -right-3">
                      <FloatingGem type={step.gemType} size="sm" />
                    </div>
                  </motion.div>

                  {/* Magical Rune */}
                  <motion.div
                    className="absolute -bottom-4 text-4xl"
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 4, repeat: Infinity }}
                  >
                    {step.rune}
                  </motion.div>

                  {/* Connecting Path (except last item) */}
                  {index < questSteps.length - 1 && (
                    <motion.div 
                      className="hidden md:block absolute top-16 left-full w-full h-1 bg-gradient-to-r from-mystical-400/50 to-transparent"
                      style={{ width: '100px', left: 'calc(100% + 20px)' }}
                      initial={{ scaleX: 0 }}
                      animate={isVisible ? { scaleX: 1 } : {}}
                      transition={{ duration: 1, delay: (index + 1) * 0.5 }}
                    />
                  )}
                </div>

                {/* Content */}
                <motion.h3 
                  className="text-2xl font-fantasy font-bold text-mystical-100 mb-4 group-hover:text-mystical-200 transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {step.title}
                </motion.h3>
                <p className="text-mystical-300 leading-relaxed font-medieval">
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Enchanted Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <motion.button
            className="relative bg-gradient-to-r from-mystical-500 via-mystical-600 to-ember-500 text-white px-12 py-4 rounded-full font-fantasy font-bold text-lg shadow-2xl overflow-hidden"
            whileHover={{ 
              scale: 1.05,
              boxShadow: '0 25px 50px rgba(139, 108, 242, 0.5)'
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative z-10 flex items-center space-x-3">
              <Star className="w-6 h-6" />
              <span>Begin Your Mystical Journey</span>
              <Star className="w-6 h-6" />
            </span>
            
            {/* Animated shimmer effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
              animate={{ x: ['-100%', '100%'] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
