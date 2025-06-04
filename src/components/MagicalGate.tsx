
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface MagicalGateProps {
  isOpen: boolean;
  onToggle: () => void;
  children?: React.ReactNode;
}

const MagicalGate: React.FC<MagicalGateProps> = ({ isOpen, onToggle, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  const runeSymbols = ['⟐', '⟑', '⟒', '⟓', '⟔', '⟕', '⟖', '⟗', '⟘', '⟙'];

  return (
    <div className="relative flex flex-col items-center">
      {/* Gate Structure */}
      <motion.div
        className="relative cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={onToggle}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* Gate Pillars */}
        <div className="flex items-end space-x-32">
          <motion.div
            className="w-8 h-64 bg-gradient-to-t from-stone-600 via-stone-500 to-stone-400 rounded-t-lg shadow-2xl"
            animate={{
              boxShadow: isHovered 
                ? '0 0 40px rgba(251, 191, 36, 0.5)' 
                : '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
            transition={{ duration: 0.3 }}
          />
          <motion.div
            className="w-8 h-64 bg-gradient-to-t from-stone-600 via-stone-500 to-stone-400 rounded-t-lg shadow-2xl"
            animate={{
              boxShadow: isHovered 
                ? '0 0 40px rgba(251, 191, 36, 0.5)' 
                : '0 10px 30px rgba(0, 0, 0, 0.3)'
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
        
        {/* Gate Arch */}
        <motion.div
          className="absolute top-8 left-1/2 transform -translate-x-1/2 w-40 h-20 border-8 border-stone-400 rounded-t-full"
          animate={{
            borderColor: isHovered ? '#fbbf24' : '#a8a29e',
            boxShadow: isHovered 
              ? '0 0 30px rgba(251, 191, 36, 0.4), inset 0 0 30px rgba(251, 191, 36, 0.2)' 
              : '0 0 20px rgba(0, 0, 0, 0.3)'
          }}
          transition={{ duration: 0.3 }}
        />
        
        {/* Floating Torches */}
        <motion.div
          className="absolute -left-16 top-12 w-4 h-4 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full"
          animate={{
            y: [0, -5, 0],
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 20px rgba(249, 115, 22, 0.6)',
              '0 0 30px rgba(249, 115, 22, 0.8)',
              '0 0 20px rgba(249, 115, 22, 0.6)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        />
        <motion.div
          className="absolute -right-16 top-12 w-4 h-4 bg-gradient-to-t from-orange-500 to-yellow-400 rounded-full"
          animate={{
            y: [0, -5, 0],
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 20px rgba(249, 115, 22, 0.6)',
              '0 0 30px rgba(249, 115, 22, 0.8)',
              '0 0 20px rgba(249, 115, 22, 0.6)'
            ]
          }}
          transition={{ duration: 2, repeat: Infinity, delay: 1 }}
        />
        
        {/* Magical Runes */}
        <div className="absolute inset-0 flex items-center justify-center">
          {runeSymbols.map((rune, index) => (
            <motion.div
              key={index}
              className="absolute text-2xl font-bold text-amber-400"
              style={{
                left: `${30 + index * 15}%`,
                top: `${20 + Math.sin(index) * 30}%`,
              }}
              animate={{
                opacity: isHovered ? [0.3, 1, 0.3] : [0.1, 0.3, 0.1],
                scale: isHovered ? [1, 1.2, 1] : [1, 1.05, 1],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 2 + index * 0.2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {rune}
            </motion.div>
          ))}
        </div>
        
        {/* Gate Opening Effect */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"
              initial={{ opacity: 0, scaleY: 0 }}
              animate={{ opacity: 1, scaleY: 1 }}
              exit={{ opacity: 0, scaleY: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            />
          )}
        </AnimatePresence>
      </motion.div>
      
      {/* Gate Content */}
      <AnimatePresence>
        {isOpen && children && (
          <motion.div
            className="mt-8 w-full max-w-2xl"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MagicalGate;
