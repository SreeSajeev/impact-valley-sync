
import React, { useEffect, useState } from 'react';
import { Star, Trophy, Heart, Zap, Crown, Gem, Sword, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import FloatingGem from './FloatingGem';

const GamificationSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    volunteers: 0,
    tasksCompleted: 0,
    impactPoints: 0,
    badges: 0
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.3 }
    );

    const section = document.getElementById('gamification');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      const targets = { volunteers: 1247, tasksCompleted: 3892, impactPoints: 15678, badges: 89 };
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;
        
        setAnimatedStats({
          volunteers: Math.floor(targets.volunteers * progress),
          tasksCompleted: Math.floor(targets.tasksCompleted * progress),
          impactPoints: Math.floor(targets.impactPoints * progress),
          badges: Math.floor(targets.badges * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
          setAnimatedStats(targets);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  const hallOfHeroes = [
    { 
      rank: 1, 
      name: "Aria Moonwhisper", 
      points: 2450, 
      title: "Guardian of Light", 
      avatar: "AM",
      class: "Mystic Healer",
      gems: ["sapphire", "emerald", "ruby"] as const
    },
    { 
      rank: 2, 
      name: "Thorne Ironshield", 
      points: 2380, 
      title: "Forest Warden", 
      avatar: "TI",
      class: "Nature Guardian",
      gems: ["emerald", "sapphire"] as const
    },
    { 
      rank: 3, 
      name: "Luna Starweaver", 
      points: 2120, 
      title: "Quest Champion", 
      avatar: "LS",
      class: "Cosmic Sage",
      gems: ["ruby", "diamond"] as const
    },
    { 
      rank: 4, 
      name: "Kai Stormcaller", 
      points: 1890, 
      title: "Ember Knight", 
      avatar: "KS",
      class: "Storm Warrior",
      gems: ["sapphire"] as const
    },
    { 
      rank: 5, 
      name: "Sage Willowbrook", 
      points: 1654, 
      title: "Wisdom Keeper", 
      avatar: "SW",
      class: "Ancient Scholar",
      gems: ["emerald", "diamond"] as const
    }
  ];

  const legendaryBadges = [
    { 
      icon: Heart, 
      name: "Heart of the Realm", 
      description: "Completed 50+ community restoration quests", 
      color: "from-pink-400 to-red-500",
      rarity: "Legendary"
    },
    { 
      icon: Zap, 
      name: "Lightning Responder", 
      description: "Accepted urgent quests within the hour", 
      color: "from-yellow-400 to-orange-500",
      rarity: "Epic"
    },
    { 
      icon: Star, 
      name: "Master of All Trades", 
      description: "Achieved mastery in 3 mystical skill trees", 
      color: "from-blue-400 to-purple-500",
      rarity: "Mythic"
    },
    { 
      icon: Crown, 
      name: "Sovereign of Impact", 
      description: "Ascended to the top 10% of the Hall of Heroes", 
      color: "from-ember-400 to-mystical-500",
      rarity: "Divine"
    }
  ];

  const getRankCrown = (rank: number) => {
    if (rank === 1) return "👑";
    if (rank === 2) return "🥈";
    if (rank === 3) return "🥉";
    return "⭐";
  };

  return (
    <section id="gamification" className="py-20 bg-gradient-to-b from-forest-900 via-mystical-900 to-forest-800 relative overflow-hidden">
      {/* Magical Hall Background Effects */}
      <div className="absolute inset-0 opacity-20">
        {/* Floating mystical orbs */}
        <motion.div 
          className="absolute top-20 left-1/4 w-32 h-32 bg-mystical-500 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-20 right-1/4 w-40 h-40 bg-ember-500 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        />
        <motion.div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-forest-500 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 1 }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hall of Heroes Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-6"
          >
            <Trophy className="text-ember-400 mr-4" size={36} />
            <h2 className="text-4xl md:text-5xl font-fantasy font-bold bg-gradient-to-r from-ember-200 via-mystical-100 to-forest-200 bg-clip-text text-transparent">
              Hall of Heroes
            </h2>
            <Trophy className="text-mystical-400 ml-4" size={36} />
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-mystical-200 max-w-3xl mx-auto font-medieval"
          >
            Where legends are born and epic tales are written through acts of valor and compassion
          </motion.p>
        </div>

        {/* Mystical Stats Crystals */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[
            { label: "Brave Adventurers", value: animatedStats.volunteers, suffix: "+", color: "text-mystical-400", icon: Shield },
            { label: "Quests Completed", value: animatedStats.tasksCompleted, suffix: "+", color: "text-forest-400", icon: Sword },
            { label: "Impact Crystals", value: animatedStats.impactPoints, suffix: "+", color: "text-ember-400", icon: Gem },
            { label: "Legendary Badges", value: animatedStats.badges, suffix: "+", color: "text-yellow-400", icon: Star }
          ].map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={isVisible ? { opacity: 1, scale: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="bg-mystical-900/50 backdrop-blur-xl border border-mystical-400/30 rounded-2xl p-6 text-center hover:border-mystical-400/50 transition-all duration-300 relative overflow-hidden">
                  {/* Magical background glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-mystical-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative z-10">
                    <Icon className={`${stat.color} mx-auto mb-3`} size={24} />
                    <div className={`text-3xl md:text-4xl font-fantasy font-bold ${stat.color} mb-2`}>
                      {stat.value.toLocaleString()}{stat.suffix}
                    </div>
                    <div className="text-mystical-200 text-sm font-medieval">{stat.label}</div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Hall of Heroes Leaderboard */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h3 className="text-3xl font-fantasy font-bold text-mystical-100 mb-8 text-center flex items-center justify-center">
              <Crown className="text-ember-400 mr-3" size={28} />
              Champions of the Realm
            </h3>
            <div className="bg-mystical-900/30 backdrop-blur-xl border border-mystical-400/30 rounded-2xl p-6 relative overflow-hidden">
              {/* Magical border glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-mystical-500/10 via-transparent to-ember-500/10 opacity-50" />
              
              <div className="space-y-4 relative z-10">
                {hallOfHeroes.map((hero, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isVisible ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-mystical-800/30 rounded-xl hover:bg-mystical-700/40 transition-all duration-300 group border border-mystical-600/20"
                  >
                    <div className="flex items-center space-x-4">
                      {/* Rank with crown */}
                      <div className="relative">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-fantasy font-bold text-sm ${
                          index === 0 ? 'bg-gradient-to-br from-yellow-400 to-yellow-600 text-mystical-900' :
                          index === 1 ? 'bg-gradient-to-br from-gray-300 to-gray-500 text-mystical-900' :
                          index === 2 ? 'bg-gradient-to-br from-orange-400 to-orange-600 text-mystical-900' :
                          'bg-gradient-to-br from-mystical-600 to-mystical-700 text-mystical-100'
                        }`}>
                          {hero.rank}
                        </div>
                        <div className="absolute -top-2 -right-1 text-lg">
                          {getRankCrown(hero.rank)}
                        </div>
                      </div>
                      
                      {/* Avatar */}
                      <div className="w-12 h-12 bg-gradient-to-br from-mystical-400 to-ember-500 rounded-full flex items-center justify-center text-white font-fantasy font-bold shadow-lg">
                        {hero.avatar}
                      </div>
                      
                      {/* Hero Info */}
                      <div>
                        <div className="text-mystical-100 font-fantasy font-semibold">{hero.name}</div>
                        <div className="text-mystical-300 text-sm font-medieval">{hero.title} • {hero.class}</div>
                        
                        {/* Gems earned */}
                        <div className="flex space-x-1 mt-1">
                          {hero.gems.map((gemType, gemIndex) => (
                            <FloatingGem key={gemIndex} type={gemType} size="sm" className="w-4 h-4" />
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="text-ember-400 font-fantasy font-bold text-lg">
                      {hero.points.toLocaleString()}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Legendary Badges Collection */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isVisible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-fantasy font-bold text-mystical-100 mb-8 text-center flex items-center justify-center">
              <Star className="text-mystical-400 mr-3" size={28} />
              Legendary Badges
            </h3>
            <div className="grid grid-cols-1 gap-4">
              {legendaryBadges.map((badge, index) => {
                const Icon = badge.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isVisible ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                    className="group bg-mystical-900/30 backdrop-blur-xl border border-mystical-400/30 rounded-2xl p-6 hover:border-mystical-400/50 transition-all duration-300 hover:scale-105 relative overflow-hidden"
                  >
                    {/* Rarity glow */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${badge.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="flex items-center space-x-4 relative z-10">
                      <motion.div
                        className={`w-16 h-16 bg-gradient-to-br ${badge.color} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>
                      
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="text-mystical-100 font-fantasy font-semibold">{badge.name}</div>
                          <span className={`text-xs px-2 py-1 rounded-full font-medieval ${
                            badge.rarity === 'Divine' ? 'bg-gradient-to-r from-yellow-400 to-orange-500 text-mystical-900' :
                            badge.rarity === 'Mythic' ? 'bg-gradient-to-r from-purple-400 to-pink-500 text-white' :
                            badge.rarity === 'Legendary' ? 'bg-gradient-to-r from-orange-400 to-red-500 text-white' :
                            'bg-gradient-to-r from-blue-400 to-purple-500 text-white'
                          }`}>
                            {badge.rarity}
                          </span>
                        </div>
                        <p className="text-mystical-300 text-sm font-medieval">{badge.description}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GamificationSection;
