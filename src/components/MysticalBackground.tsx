
import React from 'react';
import { motion } from 'framer-motion';

interface MysticalBackgroundProps {
  variant?: 'gate' | 'archive' | 'sanctum' | 'quest-hall' | 'control-tower';
  children: React.ReactNode;
}

const MysticalBackground: React.FC<MysticalBackgroundProps> = ({ variant = 'gate', children }) => {
  const backgroundVariants = {
    gate: 'bg-gradient-to-b from-emerald-900 via-forest-800 to-mystical-900',
    archive: 'bg-gradient-to-b from-mystical-900 via-purple-800 to-indigo-900',
    sanctum: 'bg-gradient-to-b from-amber-900 via-orange-800 to-red-900',
    'quest-hall': 'bg-gradient-to-b from-slate-900 via-stone-800 to-amber-900',
    'control-tower': 'bg-gradient-to-b from-cyan-900 via-blue-800 to-mystical-900'
  };

  return (
    <div className={`min-h-screen relative overflow-hidden ${backgroundVariants[variant]}`}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-30">
        {/* Floating Magical Particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 8 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
        
        {/* Magical Wisps */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`wisp-${i}`}
            className="absolute w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-sm"
            animate={{
              x: [0, 200, 0],
              y: [0, -100, 0],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 12 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 1.5,
            }}
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + i * 10}%`,
            }}
          />
        ))}
        
        {/* Glowing Orbs */}
        <motion.div 
          className="absolute top-20 left-10 w-32 h-32 bg-mystical-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-20 w-40 h-40 bg-amber-400/20 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
      </div>
      
      {children}
    </div>
  );
};

export default MysticalBackground;
