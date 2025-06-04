
import React from 'react';
import { motion } from 'framer-motion';

interface MysticalOrbProps {
  size?: 'sm' | 'md' | 'lg';
  color?: 'mystical' | 'amber' | 'emerald' | 'sapphire' | 'ruby';
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const MysticalOrb: React.FC<MysticalOrbProps> = ({
  size = 'md',
  color = 'mystical',
  children,
  className = '',
  onClick
}) => {
  const sizes = {
    sm: 'w-16 h-16',
    md: 'w-24 h-24',
    lg: 'w-32 h-32'
  };

  const colors = {
    mystical: 'from-mystical-400 to-mystical-600',
    amber: 'from-amber-400 to-amber-600',
    emerald: 'from-emerald-400 to-emerald-600',
    sapphire: 'from-blue-400 to-blue-600',
    ruby: 'from-red-400 to-red-600'
  };

  const glowColors = {
    mystical: 'rgba(139, 108, 242, 0.5)',
    amber: 'rgba(251, 191, 36, 0.5)',
    emerald: 'rgba(16, 185, 129, 0.5)',
    sapphire: 'rgba(59, 130, 246, 0.5)',
    ruby: 'rgba(239, 68, 68, 0.5)'
  };

  return (
    <motion.div
      className={`
        ${sizes[size]} bg-gradient-to-br ${colors[color]} rounded-full 
        flex items-center justify-center cursor-pointer relative overflow-hidden
        ${className}
      `}
      onClick={onClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      animate={{
        boxShadow: [
          `0 0 20px ${glowColors[color]}`,
          `0 0 40px ${glowColors[color]}`,
          `0 0 20px ${glowColors[color]}`
        ]
      }}
      transition={{ 
        boxShadow: { duration: 3, repeat: Infinity },
        scale: { duration: 0.2 }
      }}
    >
      <div className="absolute inset-2 bg-gradient-to-br from-white/30 to-transparent rounded-full" />
      <div className="relative z-10 text-white font-medieval text-center">
        {children}
      </div>
    </motion.div>
  );
};

export default MysticalOrb;
