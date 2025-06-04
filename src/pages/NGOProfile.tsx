
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Users, Trophy, Star, Crown, Sparkles, BookOpen, Target, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import MysticalBackground from '@/components/MysticalBackground';
import MysticalOrb from '@/components/MysticalOrb';
import FloatingGem from '@/components/FloatingGem';
import EnchantedButton from '@/components/EnchantedButton';

const NGOProfile = () => {
  const [hoveredQuest, setHoveredQuest] = useState<number | null>(null);

  const ngoData = {
    name: 'Guardians of the Green Realm',
    mission: 'Protectors of Nature and Champions of Environmental Magic',
    location: 'Crystal Falls, Mystical Territories',
    established: '2020',
    guildType: 'Environmental Sorcery',
    emblem: '🌿',
    stats: {
      questsCreated: 47,
      volunteersHelped: 312,
      gemsAwarded: 8750,
      realmsImpacted: 12
    },
    activeQuests: [
      {
        id: 1,
        title: 'Enchanted Forest Restoration',
        description: 'Help restore the magical woodland by planting mystical saplings',
        volunteers: 15,
        maxVolunteers: 25,
        rarity: 'legendary',
        points: 75,
        deadline: '2 moons remaining'
      },
      {
        id: 2,
        title: 'Crystal Lake Purification',
        description: 'Cleanse the sacred waters using ancient elemental magic',
        volunteers: 8,
        maxVolunteers: 12,
        rarity: 'epic',
        points: 50,
        deadline: '1 moon remaining'
      },
      {
        id: 3,
        title: 'Mystical Garden Tending',
        description: 'Tend to the healing herbs in the sanctuary gardens',
        volunteers: 3,
        maxVolunteers: 8,
        rarity: 'rare',
        points: 30,
        deadline: '3 suns remaining'
      }
    ],
    achievements: [
      { name: 'Forest Guardian', icon: '🌳', description: 'Restored 1000+ trees' },
      { name: 'Water Sage', icon: '💧', description: 'Purified 5 sacred lakes' },
      { name: 'Guild Master', icon: '👑', description: 'Led 300+ volunteers' }
    ],
    impactStory: [
      { year: '2020', milestone: 'Guild Founded', impact: 'Established the sacred sanctuary' },
      { year: '2021', milestone: 'First Great Restoration', impact: 'Brought life back to the Withered Woods' },
      { year: '2022', milestone: 'Crystal Lake Revival', impact: 'Restored clarity to the mystical waters' },
      { year: '2023', milestone: 'Realm Expansion', impact: 'Extended protection to 12 mystical realms' }
    ]
  };

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-amber-400 to-yellow-500';
      case 'epic': return 'from-purple-400 to-pink-500';
      case 'rare': return 'from-blue-400 to-cyan-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <MysticalBackground variant="sanctum">
      {/* Return Portal */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-10 flex items-center space-x-2 text-mystical-200 hover:text-amber-400 transition-all duration-300"
      >
        <motion.div
          whileHover={{ x: -4, scale: 1.1 }}
          className="flex items-center space-x-2 font-medieval"
        >
          <ArrowLeft size={20} />
          <span>Return to Realm</span>
        </motion.div>
      </Link>

      <div className="container mx-auto px-4 py-8">
        {/* Sanctum Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-5xl font-fantasy font-bold bg-gradient-to-r from-orange-300 via-amber-300 to-red-300 bg-clip-text text-transparent mb-4"
            animate={{
              textShadow: [
                '0 0 20px rgba(251, 146, 60, 0.5)',
                '0 0 40px rgba(251, 146, 60, 0.8)',
                '0 0 20px rgba(251, 146, 60, 0.5)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Sanctum of the Guildmasters
          </motion.h1>
          <p className="text-xl text-mystical-200 font-medieval">
            The Heart of the Realms of Giving
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Guild Information */}
          <div className="lg:col-span-2 space-y-6">
            {/* Guild Crest & Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/30 relative overflow-hidden"
            >
              {/* Floating Guild Emblem */}
              <div className="absolute top-4 right-4">
                <motion.div
                  animate={{ 
                    rotate: 360,
                    scale: [1, 1.1, 1]
                  }}
                  transition={{ 
                    rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                    scale: { duration: 3, repeat: Infinity }
                  }}
                  className="text-4xl"
                >
                  {ngoData.emblem}
                </motion.div>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                {/* Guild Shield */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative"
                >
                  <div className="w-32 h-32 bg-gradient-to-br from-amber-400 via-orange-500 to-red-500 rounded-full flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                    <span className="text-4xl relative z-10">{ngoData.emblem}</span>
                    
                    {/* Guild Rank Crown */}
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-2xl"
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      👑
                    </motion.div>
                  </div>
                </motion.div>

                <div className="flex-1">
                  <h1 className="text-3xl font-fantasy text-mystical-100 mb-2">{ngoData.name}</h1>
                  <p className="text-mystical-300 font-medieval mb-4">{ngoData.mission}</p>
                  
                  <div className="flex items-center text-mystical-400 text-sm space-x-6 font-medieval">
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {ngoData.location}
                    </span>
                    <span className="flex items-center">
                      <Crown size={14} className="mr-1 text-amber-400" />
                      Guild Master since {ngoData.established}
                    </span>
                  </div>
                </div>
              </div>

              {/* Guild Stats Crystals */}
              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-amber-600/30 to-orange-700/30 rounded-xl p-4 border border-amber-400/20 text-center"
                >
                  <motion.div
                    className="text-3xl font-bold text-amber-300 mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {ngoData.stats.questsCreated}
                  </motion.div>
                  <div className="text-sm text-mystical-400 font-medieval">Quests Created</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-emerald-600/30 to-green-700/30 rounded-xl p-4 border border-emerald-400/20 text-center"
                >
                  <motion.div
                    className="text-3xl font-bold text-emerald-300 mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    {ngoData.stats.volunteersHelped}
                  </motion.div>
                  <div className="text-sm text-mystical-400 font-medieval">Heroes Guided</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-600/30 to-mystical-700/30 rounded-xl p-4 border border-purple-400/20 text-center"
                >
                  <motion.div
                    className="text-3xl font-bold text-purple-300 mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    {ngoData.stats.gemsAwarded.toLocaleString()}
                  </motion.div>
                  <div className="text-sm text-mystical-400 font-medieval">Gems Awarded</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-blue-600/30 to-cyan-700/30 rounded-xl p-4 border border-blue-400/20 text-center"
                >
                  <motion.div
                    className="text-3xl font-bold text-blue-300 mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1.5 }}
                  >
                    {ngoData.stats.realmsImpacted}
                  </motion.div>
                  <div className="text-sm text-mystical-400 font-medieval">Realms Protected</div>
                </motion.div>
              </div>

              {/* Guild Achievements */}
              <div>
                <h3 className="text-xl font-fantasy text-mystical-100 mb-4 flex items-center">
                  <Trophy className="mr-3 text-amber-400" size={24} />
                  Sacred Achievements
                </h3>
                <div className="flex flex-wrap gap-3">
                  {ngoData.achievements.map((achievement, index) => (
                    <motion.div
                      key={achievement.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full font-medieval font-medium relative overflow-hidden group"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <span className="relative z-10 flex items-center space-x-2">
                        <span className="text-xl">{achievement.icon}</span>
                        <span>{achievement.name}</span>
                      </span>
                      
                      {/* Tooltip */}
                      <motion.div
                        className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-mystical-900 text-mystical-200 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap"
                        initial={{ y: 10 }}
                        whileHover={{ y: 0 }}
                      >
                        {achievement.description}
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Active Quests Board */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/30"
            >
              <h3 className="text-xl font-fantasy text-mystical-100 mb-6 flex items-center">
                <BookOpen className="mr-3 text-amber-400" size={24} />
                Active Guild Quests
              </h3>

              <div className="space-y-4">
                {ngoData.activeQuests.map((quest, index) => (
                  <motion.div
                    key={quest.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                    onHoverStart={() => setHoveredQuest(quest.id)}
                    onHoverEnd={() => setHoveredQuest(null)}
                    className={`p-6 rounded-xl bg-gradient-to-r ${getRarityColor(quest.rarity)}/20 border border-current/20 cursor-pointer group relative overflow-hidden`}
                  >
                    {/* Magical shimmer effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <h4 className="text-lg font-fantasy text-mystical-100 font-semibold">{quest.title}</h4>
                        <div className="flex items-center space-x-2">
                          <span className={`
                            px-2 py-1 rounded-full text-xs font-medieval capitalize
                            ${quest.rarity === 'legendary' ? 'bg-amber-400/20 text-amber-300' :
                              quest.rarity === 'epic' ? 'bg-purple-400/20 text-purple-300' :
                              'bg-blue-400/20 text-blue-300'}
                          `}>
                            {quest.rarity}
                          </span>
                          <div className="flex items-center text-amber-400 font-bold">
                            <Sparkles size={14} className="mr-1" />
                            <span>+{quest.points}</span>
                          </div>
                        </div>
                      </div>

                      <p className="text-mystical-300 font-medieval text-sm mb-4">{quest.description}</p>

                      <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center text-mystical-400 text-sm">
                            <Users size={14} className="mr-1" />
                            <span>{quest.volunteers}/{quest.maxVolunteers} Heroes</span>
                          </div>
                          <div className="text-mystical-400 text-sm font-medieval">
                            {quest.deadline}
                          </div>
                        </div>
                        
                        <Progress 
                          value={(quest.volunteers / quest.maxVolunteers) * 100} 
                          className="w-24 h-2"
                        />
                      </div>

                      {hoveredQuest === quest.id && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4"
                        >
                          <EnchantedButton variant="mystical" size="sm">
                            <Target size={16} />
                            <span>View Quest Details</span>
                          </EnchantedButton>
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Impact Chronicle & Stats */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Impact Chronicle */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-amber-400/30">
              <h3 className="text-xl font-fantasy text-mystical-100 mb-6 flex items-center">
                <Star className="mr-3 text-amber-400" size={24} />
                Chronicle of Impact
              </h3>

              <div className="space-y-4">
                {ngoData.impactStory.map((milestone, index) => (
                  <motion.div
                    key={milestone.year}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="relative pl-8 border-l-2 border-amber-400/30 last:border-l-0"
                  >
                    <motion.div
                      className="absolute -left-2 top-2 w-4 h-4 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: index * 0.5 }}
                    />
                    <div className="font-medieval text-amber-400 text-sm font-bold mb-1">{milestone.year}</div>
                    <div className="font-medieval text-mystical-200 font-semibold mb-1">{milestone.milestone}</div>
                    <div className="text-mystical-400 text-sm font-medieval">{milestone.impact}</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Mystical Stats Orbs */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-amber-400/30">
              <h3 className="text-xl font-fantasy text-mystical-100 mb-6 flex items-center">
                <Globe className="mr-3 text-amber-400" size={24} />
                Realm Influence
              </h3>

              <div className="grid grid-cols-2 gap-4 mb-6">
                <MysticalOrb color="amber" size="md">
                  <div className="text-center">
                    <div className="text-xl font-bold">78%</div>
                    <div className="text-xs">Quest Success</div>
                  </div>
                </MysticalOrb>

                <MysticalOrb color="emerald" size="md">
                  <div className="text-center">
                    <div className="text-xl font-bold">4.9</div>
                    <div className="text-xs">Hero Rating</div>
                  </div>
                </MysticalOrb>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between text-sm font-medieval">
                  <span className="text-mystical-300">Monthly Active Heroes</span>
                  <span className="text-amber-400 font-bold">156</span>
                </div>
                <div className="flex justify-between text-sm font-medieval">
                  <span className="text-mystical-300">Realm Expansion Rate</span>
                  <span className="text-emerald-400 font-bold">+23%</span>
                </div>
                <div className="flex justify-between text-sm font-medieval">
                  <span className="text-mystical-300">Hero Retention</span>
                  <span className="text-purple-400 font-bold">89%</span>
                </div>
              </div>
            </div>

            {/* Guild Gems Collection */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-amber-400/30">
              <h3 className="text-xl font-fantasy text-mystical-100 mb-6 flex items-center">
                <Sparkles className="mr-3 text-amber-400" size={24} />
                Sacred Gem Vault
              </h3>

              <div className="flex justify-center space-x-4 mb-4">
                <FloatingGem type="ruby" size="lg" points={2847} />
                <FloatingGem type="sapphire" size="lg" points={3201} />
                <FloatingGem type="emerald" size="lg" points={2702} />
              </div>

              <div className="text-center">
                <div className="text-2xl font-fantasy font-bold text-amber-400 mb-1">
                  {ngoData.stats.gemsAwarded.toLocaleString()}
                </div>
                <div className="text-sm text-mystical-400 font-medieval">Total Gems Distributed</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MysticalBackground>
  );
};

export default NGOProfile;
