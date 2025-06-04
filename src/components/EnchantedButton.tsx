
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface EnchantedButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'mystical' | 'forest';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
  disabled?: boolean;
}

const EnchantedButton: React.FC<EnchantedButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  onClick,
  type = 'button',
  disabled = false,
}) => {
  const variants = {
    primary: 'bg-gradient-to-r from-mystical-500 to-mystical-600 hover:from-mystical-600 hover:to-mystical-700 text-white shadow-lg shadow-mystical-500/25',
    secondary: 'bg-gradient-to-r from-forest-500 to-forest-600 hover:from-forest-600 hover:to-forest-700 text-white shadow-lg shadow-forest-500/25',
    mystical: 'bg-gradient-to-r from-mystical-400 via-mystical-500 to-ember-500 hover:from-mystical-500 hover:via-mystical-600 hover:to-ember-600 text-white shadow-xl shadow-mystical-400/30',
    forest: 'bg-gradient-to-r from-forest-400 to-ember-500 hover:from-forest-500 hover:to-ember-600 text-white shadow-xl shadow-forest-400/30',
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'relative font-medieval rounded-full font-semibold transition-all duration-300 transform overflow-hidden',
        'before:absolute before:inset-0 before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:translate-x-[-100%] hover:before:animate-shimmer',
        variants[variant],
        sizes[size],
        'disabled:opacity-50 disabled:cursor-not-allowed',
        className
      )}
      whileHover={{ 
        scale: 1.05,
        boxShadow: variant === 'mystical' 
          ? '0 20px 40px rgba(139, 108, 242, 0.4)' 
          : '0 10px 25px rgba(0, 0, 0, 0.2)'
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <span className="relative z-10 flex items-center justify-center space-x-2">
        {children}
      </span>
    </motion.button>
  );
};

export default EnchantedButton;
