
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

interface EnchantedFormFieldProps {
  label: string;
  type?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  icon?: React.ReactNode;
}

const EnchantedFormField: React.FC<EnchantedFormFieldProps> = ({
  label,
  type = 'text',
  value,
  onChange,
  placeholder,
  required = false,
  icon
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [sparkles, setSparkles] = useState<Array<{ id: number; x: number; y: number }>>([]);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
    
    // Create sparkle effect on typing
    const newSparkle = {
      id: Date.now(),
      x: Math.random() * 300,
      y: Math.random() * 50
    };
    setSparkles(prev => [...prev, newSparkle]);
    
    // Remove sparkle after animation
    setTimeout(() => {
      setSparkles(prev => prev.filter(s => s.id !== newSparkle.id));
    }, 1000);
  };

  return (
    <motion.div
      className="relative mb-6"
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
    >
      {/* Magical Sparkles */}
      {sparkles.map((sparkle) => (
        <motion.div
          key={sparkle.id}
          className="absolute w-1 h-1 bg-yellow-400 rounded-full pointer-events-none z-10"
          style={{ left: sparkle.x, top: sparkle.y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: [0, 1, 0], 
            scale: [0, 1, 0],
            y: [0, -20]
          }}
          transition={{ duration: 1 }}
        />
      ))}
      
      {/* Glowing Frame */}
      <motion.div
        className={`absolute inset-0 rounded-lg border-2 transition-all duration-300 ${
          isFocused 
            ? 'border-amber-400/50 shadow-lg shadow-amber-400/25' 
            : 'border-mystical-400/30'
        }`}
        animate={{
          boxShadow: isFocused 
            ? '0 0 20px rgba(251, 191, 36, 0.3)' 
            : '0 0 10px rgba(139, 108, 242, 0.2)'
        }}
      />
      
      {/* Floating Runes */}
      <motion.div
        className="absolute -top-2 left-4 px-2 bg-gradient-to-r from-mystical-800 to-mystical-700 rounded-full"
        animate={{
          y: isFocused ? -2 : 0,
          scale: isFocused ? 1.05 : 1
        }}
      >
        <Label className="text-mystical-200 font-medieval text-sm flex items-center space-x-2">
          {icon && <span className="text-amber-400">{icon}</span>}
          <span>{label}</span>
          {required && <span className="text-red-400">*</span>}
        </Label>
      </motion.div>
      
      {/* Enchanted Input */}
      <div className="relative">
        <Input
          type={type}
          value={value}
          onChange={handleChange}
          onFocus={handleFocus}
          onBlur={handleBlur}
          placeholder={placeholder}
          className="pt-6 pb-3 px-4 bg-mystical-900/50 backdrop-blur-sm border-0 text-mystical-100 placeholder:text-mystical-400 font-medieval focus:bg-mystical-800/60 transition-all duration-300"
          required={required}
        />
        
        {/* Glowing Underline */}
        <motion.div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-amber-400 to-yellow-500"
          initial={{ width: 0 }}
          animate={{ width: isFocused ? '100%' : '0%' }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

export default EnchantedFormField;
