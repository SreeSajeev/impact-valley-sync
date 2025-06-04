
import React from 'react';
import { motion } from 'framer-motion';
import { Gem } from 'lucide-react';

interface FloatingGemProps {
  type: 'sapphire' | 'emerald' | 'ruby' | 'diamond';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  points?: number;
}

const FloatingGem: React.FC<FloatingGemProps> = ({ 
  type, 
  size = 'md', 
  className = '',
  points 
}) => {
  const colors = {
    sapphire: 'from-blue-400 to-blue-600',
    emerald: 'from-green-400 to-green-600',
    ruby: 'from-red-400 to-red-600',
    diamond: 'from-gray-200 to-gray-400',
  };

  const glowColors = {
    sapphire: 'shadow-blue-400/50',
    emerald: 'shadow-green-400/50',
    ruby: 'shadow-red-400/50',
    diamond: 'shadow-gray-400/50',
  };

  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const getGlowColor = (gemType: string) => {
    switch (gemType) {
      case 'sapphire': return '#3b82f6';
      case 'emerald': return '#10b981';
      case 'ruby': return '#ef4444';
      case 'diamond': return '#6b7280';
      default: return '#6b7280';
    }
  };

  return (
    <motion.div
      className={`relative ${sizes[size]} ${className}`}
      animate={{
        y: [0, -10, 0],
        rotateY: [0, 180, 360],
      }}
      transition={{
        y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        rotateY: { duration: 4, repeat: Infinity, ease: "linear" },
      }}
      whileHover={{ 
        scale: 1.2,
        transition: { duration: 0.2 }
      }}
    >
      <div className={`
        w-full h-full bg-gradient-to-br ${colors[type]} 
        rounded-full shadow-xl ${glowColors[type]}
        animate-gem-glow relative overflow-hidden
        before:absolute before:inset-0 before:bg-gradient-to-tr 
        before:from-white/30 before:to-transparent before:rounded-full
      `}>
        {points && (
          <motion.div
            className="absolute -top-2 -right-2 bg-mystical-600 text-white text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
          >
            {points}
          </motion.div>
        )}
      </div>
      
      <motion.div
        className="absolute inset-0 rounded-full"
        animate={{
          boxShadow: [
            `0 0 20px ${getGlowColor(type)}40`,
            `0 0 40px ${getGlowColor(type)}60`,
            `0 0 20px ${getGlowColor(type)}40`,
          ]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
    </motion.div>
  );
};

export default FloatingGem;
