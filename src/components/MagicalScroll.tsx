
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface MagicalScrollProps {
  title: string;
  description?: string;
  rarity?: 'common' | 'rare' | 'epic' | 'legendary';
  points?: number;
  onAccept?: () => void;
  className?: string;
}

const MagicalScroll: React.FC<MagicalScrollProps> = ({
  title,
  description,
  rarity = 'common',
  points,
  onAccept,
  className = ''
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isAccepted, setIsAccepted] = useState(false);

  const rarityColors = {
    common: 'from-gray-600 to-gray-700 border-gray-500',
    rare: 'from-blue-600 to-blue-700 border-blue-500',
    epic: 'from-purple-600 to-purple-700 border-purple-500',
    legendary: 'from-amber-600 to-amber-700 border-amber-500'
  };

  const rarityGlow = {
    common: 'rgba(107, 114, 128, 0.3)',
    rare: 'rgba(59, 130, 246, 0.3)',
    epic: 'rgba(147, 51, 234, 0.3)',
    legendary: 'rgba(251, 191, 36, 0.3)'
  };

  const handleAccept = () => {
    setIsAccepted(true);
    if (onAccept) {
      setTimeout(onAccept, 1000);
    }
  };

  return (
    <AnimatePresence>
      {!isAccepted && (
        <motion.div
          className={`
            relative bg-gradient-to-br ${rarityColors[rarity]} rounded-xl p-6 
            border-2 backdrop-blur-sm cursor-pointer ${className}
          `}
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
          whileHover={{ scale: 1.02, y: -5 }}
          animate={{
            boxShadow: isHovered 
              ? `0 10px 40px ${rarityGlow[rarity]}` 
              : `0 5px 20px ${rarityGlow[rarity]}`
          }}
          exit={{
            scale: 0,
            opacity: 0,
            rotate: 360,
            transition: { duration: 1 }
          }}
          layout
        >
          {/* Scroll decorations */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-400 rounded-tl-lg opacity-60" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-400 rounded-tr-lg opacity-60" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-400 rounded-bl-lg opacity-60" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-400 rounded-br-lg opacity-60" />

          {/* Floating sparkles */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-amber-400 rounded-full"
              style={{
                left: `${20 + i * 30}%`,
                top: `${10 + i * 20}%`,
              }}
              animate={{
                y: [0, -10, 0],
                opacity: [0.3, 1, 0.3],
                scale: [0.5, 1, 0.5]
              }}
              transition={{
                duration: 2 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.3
              }}
            />
          ))}

          <div className="relative z-10">
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-lg font-fantasy text-mystical-100 font-semibold">{title}</h3>
              <div className="flex items-center space-x-2">
                <span className={`
                  px-2 py-1 rounded-full text-xs font-medieval capitalize
                  ${rarity === 'legendary' ? 'bg-amber-400/20 text-amber-300' :
                    rarity === 'epic' ? 'bg-purple-400/20 text-purple-300' :
                    rarity === 'rare' ? 'bg-blue-400/20 text-blue-300' :
                    'bg-gray-400/20 text-gray-300'}
                `}>
                  {rarity}
                </span>
                {points && (
                  <div className="flex items-center text-amber-400 font-bold">
                    <Sparkles size={14} className="mr-1" />
                    <span>{points}</span>
                  </div>
                )}
              </div>
            </div>
            
            {description && (
              <p className="text-mystical-300 font-medieval text-sm mb-4">{description}</p>
            )}

            <motion.button
              onClick={handleAccept}
              className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-mystical-900 py-2 rounded-lg font-medieval font-semibold relative overflow-hidden"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10">Accept Quest</span>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MagicalScroll;
