
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Star, Crown, Map, Gift, Users, Calendar, Target, Sparkles, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import MysticalBackground from '@/components/MysticalBackground';
import MagicalScroll from '@/components/MagicalScroll';
import FloatingGem from '@/components/FloatingGem';
import MysticalOrb from '@/components/MysticalOrb';
import EnchantedButton from '@/components/EnchantedButton';

const VolunteerDashboard = () => {
  const [selectedRegion, setSelectedRegion] = useState('all');
  const [rewardChestOpen, setRewardChestOpen] = useState(false);

  const heroData = {
    name: 'Alex the Kind-Hearted',
    title: 'Guardian of Good',
    level: 15,
    xp: 2450,
    nextLevelXp: 3000,
    familiar: '🦋',
    streakDays: 7,
    totalQuests: 34,
    rank: 12
  };

  const dailyQuests = [
    {
      title: 'Morning Meditation Garden',
      description: 'Help tend to the mystical healing herbs in the dawn sanctuary',
      rarity: 'common' as const,
      points: 25,
      deadline: '6 hours remaining'
    },
    {
      title: 'Crystal Lake Teaching Circle',
      description: 'Share knowledge with young seekers by the sacred waters',
      rarity: 'rare' as const,
      points: 50,
      deadline: '1 day remaining'
    },
    {
      title: 'Starlight Food Distribution',
      description: 'Distribute enchanted sustenance to those in need under the stars',
      rarity: 'epic' as const,
      points: 75,
      deadline: '2 days remaining'
    }
  ];

  const regions = [
    { id: 'all', name: 'All Realms', color: 'mystical', unlocked: true },
    { id: 'forest', name: 'Emerald Forest', color: 'emerald', unlocked: true },
    { id: 'crystal', name: 'Crystal Peaks', color: 'sapphire', unlocked: true },
    { id: 'fire', name: 'Ember Valleys', color: 'ruby', unlocked: false },
    { id: 'sky', name: 'Sky Citadels', color: 'amber', unlocked: false }
  ];

  const leaderboardTop3 = [
    { name: 'Luna Starweaver', level: 23, xp: 5420, avatar: '🌟' },
    { name: 'Theron Earthshaper', level: 21, xp: 4890, avatar: '🗿' },
    { name: 'Aria Lightbringer', level: 19, xp: 3750, avatar: '✨' }
  ];

  const recentRewards = [
    { type: 'gem', name: 'Sapphire of Service', rarity: 'rare' },
    { type: 'title', name: 'Forest Friend', rarity: 'common' },
    { type: 'familiar', name: 'Mystical Butterfly', rarity: 'epic' }
  ];

  const getTimeOfDayGreeting = () => {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morrow';
    if (hour < 18) return 'Blessed day';
    return 'Starlit evening';
  };

  const handleQuestAccept = (questTitle: string) => {
    console.log(`Quest accepted: ${questTitle}`);
    // Add quest acceptance logic
  };

  return (
    <MysticalBackground variant="quest-hall">
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
        {/* Welcome Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.h1
            className="text-5xl font-fantasy font-bold bg-gradient-to-r from-slate-300 via-stone-200 to-amber-300 bg-clip-text text-transparent mb-4"
            animate={{
              textShadow: [
                '0 0 20px rgba(148, 163, 184, 0.5)',
                '0 0 40px rgba(148, 163, 184, 0.8)',
                '0 0 20px rgba(148, 163, 184, 0.5)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            Hall of Quests
          </motion.h1>
          <motion.p
            className="text-2xl text-mystical-200 font-medieval"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            {getTimeOfDayGreeting()}, {heroData.name}! Your destiny awaits within these sacred halls.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Hero Status Panel */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Hero Avatar & Progress */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-stone-400/30">
              <div className="text-center mb-6">
                <motion.div
                  className="relative mx-auto mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-stone-400 via-mystical-500 to-amber-400 rounded-full flex items-center justify-center text-2xl font-bold text-white relative mx-auto">
                    <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                    <span className="relative z-10">{heroData.name.split(' ').map(n => n[0]).join('')}</span>
                    
                    {/* Floating Familiar */}
                    <motion.div
                      className="absolute -top-2 -right-2 text-2xl"
                      animate={{ 
                        y: [-2, 2, -2],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      {heroData.familiar}
                    </motion.div>
                  </div>
                  
                  {/* XP Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-amber-400/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                <h3 className="text-xl font-fantasy text-mystical-100 font-semibold">{heroData.name}</h3>
                <div className="bg-gradient-to-r from-amber-400 to-yellow-500 text-mystical-900 px-3 py-1 rounded-full text-sm font-medieval font-bold mb-2 inline-block">
                  {heroData.title}
                </div>
                <div className="text-mystical-400 font-medieval text-sm">Heart Level {heroData.level}</div>
              </div>

              {/* Progress Bar */}
              <div className="mb-4">
                <div className="flex justify-between text-sm text-mystical-400 mb-2 font-medieval">
                  <span>Quest Energy</span>
                  <span>{heroData.xp}/{heroData.nextLevelXp}</span>
                </div>
                <Progress value={(heroData.xp / heroData.nextLevelXp) * 100} className="h-3 bg-mystical-800/50" />
                <p className="text-xs text-mystical-500 mt-1 font-medieval">
                  {heroData.nextLevelXp - heroData.xp} XP to next level
                </p>
              </div>

              {/* Hero Stats */}
              <div className="space-y-2 text-sm font-medieval">
                <div className="flex justify-between">
                  <span className="text-mystical-400">Quest Streak</span>
                  <span className="text-amber-400 font-bold flex items-center">
                    <Star size={14} className="mr-1" />
                    {heroData.streakDays} days
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mystical-400">Total Quests</span>
                  <span className="text-emerald-400 font-bold">{heroData.totalQuests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mystical-400">Realm Rank</span>
                  <span className="text-purple-400 font-bold">#{heroData.rank}</span>
                </div>
              </div>
            </div>

            {/* Mystical Map */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-stone-400/30">
              <h3 className="text-lg font-fantasy text-mystical-100 mb-4 flex items-center">
                <Map className="mr-2 text-amber-400" size={20} />
                Realm Map
              </h3>
              
              <div className="space-y-3">
                {regions.map((region, index) => (
                  <motion.button
                    key={region.id}
                    onClick={() => setSelectedRegion(region.id)}
                    className={`
                      w-full p-3 rounded-xl text-left transition-all duration-300 font-medieval text-sm
                      ${selectedRegion === region.id 
                        ? 'bg-amber-400/20 border border-amber-400/50 text-amber-300' 
                        : 'bg-mystical-800/30 text-mystical-400 hover:bg-mystical-700/30'
                      }
                      ${!region.unlocked ? 'opacity-50 cursor-not-allowed' : ''}
                    `}
                    whileHover={region.unlocked ? { scale: 1.02 } : {}}
                    disabled={!region.unlocked}
                  >
                    <div className="flex items-center justify-between">
                      <span>{region.name}</span>
                      {region.unlocked ? (
                        <div className="w-3 h-3 bg-emerald-400 rounded-full animate-pulse" />
                      ) : (
                        <div className="text-xs text-mystical-500">Locked</div>
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Leaderboard Peek */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-stone-400/30">
              <h3 className="text-lg font-fantasy text-mystical-100 mb-4 flex items-center">
                <Crown className="mr-2 text-amber-400" size={20} />
                Hall of Heroes
              </h3>
              
              <div className="space-y-3">
                {leaderboardTop3.map((hero, index) => (
                  <motion.div
                    key={hero.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="text-xl">{hero.avatar}</div>
                    <div className="flex-1">
                      <div className="text-mystical-200 font-medieval text-sm font-semibold">{hero.name}</div>
                      <div className="text-mystical-400 text-xs">Level {hero.level} • {hero.xp.toLocaleString()} XP</div>
                    </div>
                    <div className="text-amber-400 font-bold text-lg">#{index + 1}</div>
                  </motion.div>
                ))}
              </div>
              
              <Link to="/leaderboard">
                <EnchantedButton variant="secondary" size="sm" className="w-full mt-4">
                  <Users size={16} />
                  <span>View Full Leaderboard</span>
                </EnchantedButton>
              </Link>
            </div>
          </motion.div>

          {/* Main Quest Area */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Daily Quest Board */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-8 border border-stone-400/30">
              <h2 className="text-2xl font-fantasy text-mystical-100 mb-6 flex items-center">
                <BookOpen className="mr-3 text-amber-400" size={24} />
                Daily Quest Scrolls
              </h2>
              
              <div className="grid gap-6">
                {dailyQuests.map((quest, index) => (
                  <motion.div
                    key={quest.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                  >
                    <MagicalScroll
                      title={quest.title}
                      description={quest.description}
                      rarity={quest.rarity}
                      points={quest.points}
                      onAccept={() => handleQuestAccept(quest.title)}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid md:grid-cols-3 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-mystical-900/60 backdrop-blur-xl rounded-xl p-4 border border-stone-400/30 text-center"
              >
                <Calendar className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-amber-300 font-fantasy">7</div>
                <div className="text-sm text-mystical-400 font-medieval">Quest Streak</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-mystical-900/60 backdrop-blur-xl rounded-xl p-4 border border-stone-400/30 text-center"
              >
                <Target className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-emerald-300 font-fantasy">12</div>
                <div className="text-sm text-mystical-400 font-medieval">Quests This Week</div>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-mystical-900/60 backdrop-blur-xl rounded-xl p-4 border border-stone-400/30 text-center"
              >
                <Sparkles className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-purple-300 font-fantasy">450</div>
                <div className="text-sm text-mystical-400 font-medieval">XP This Week</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Rewards & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Reward Chest */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-stone-400/30">
              <h3 className="text-lg font-fantasy text-mystical-100 mb-4 flex items-center">
                <Gift className="mr-2 text-amber-400" size={20} />
                Mystical Rewards
              </h3>
              
              <motion.div
                className="text-center mb-4"
                whileHover={{ scale: 1.05 }}
                onClick={() => setRewardChestOpen(!rewardChestOpen)}
              >
                <motion.div
                  className="w-20 h-16 mx-auto mb-2 text-6xl cursor-pointer"
                  animate={{
                    rotateY: rewardChestOpen ? 180 : 0,
                    scale: rewardChestOpen ? 1.1 : 1
                  }}
                >
                  📦
                </motion.div>
                <p className="text-mystical-400 font-medieval text-sm">
                  {rewardChestOpen ? 'Rewards Revealed!' : 'Click to open chest'}
                </p>
              </motion.div>

              {rewardChestOpen && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-3"
                >
                  {recentRewards.map((reward, index) => (
                    <motion.div
                      key={reward.name}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-mystical-800/40 rounded-lg p-3 text-center"
                    >
                      <div className="text-xl mb-1">
                        {reward.type === 'gem' ? '💎' : reward.type === 'title' ? '👑' : '🦋'}
                      </div>
                      <div className="text-mystical-200 font-medieval text-sm font-semibold">{reward.name}</div>
                      <div className={`text-xs capitalize ${
                        reward.rarity === 'epic' ? 'text-purple-400' :
                        reward.rarity === 'rare' ? 'text-blue-400' : 'text-gray-400'
                      }`}>
                        {reward.rarity}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Mystical Orbs Collection */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-stone-400/30">
              <h3 className="text-lg font-fantasy text-mystical-100 mb-4 flex items-center">
                <Sparkles className="mr-2 text-amber-400" size={20} />
                Sacred Gems
              </h3>
              
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div className="text-center">
                  <FloatingGem type="emerald" size="md" />
                  <div className="text-mystical-400 font-medieval text-xs mt-2">Empathy</div>
                </div>
                <div className="text-center">
                  <FloatingGem type="sapphire" size="md" />
                  <div className="text-mystical-400 font-medieval text-xs mt-2">Service</div>
                </div>
              </div>
              
              <div className="text-center">
                <MysticalOrb color="amber" size="sm">
                  <div className="text-center">
                    <div className="text-lg font-bold">5</div>
                    <div className="text-xs">Total</div>
                  </div>
                </MysticalOrb>
              </div>
            </div>

            {/* Weekly Challenges */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-stone-400/30">
              <h3 className="text-lg font-fantasy text-mystical-100 mb-4 flex items-center">
                <Target className="mr-2 text-amber-400" size={20} />
                Weekly Trials
              </h3>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm font-medieval mb-1">
                    <span className="text-mystical-300">Complete 10 Quests</span>
                    <span className="text-amber-400">7/10</span>
                  </div>
                  <Progress value={70} className="h-2 bg-mystical-800/50" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm font-medieval mb-1">
                    <span className="text-mystical-300">Earn 500 XP</span>
                    <span className="text-emerald-400">450/500</span>
                  </div>
                  <Progress value={90} className="h-2 bg-mystical-800/50" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm font-medieval mb-1">
                    <span className="text-mystical-300">Help 3 Different Guilds</span>
                    <span className="text-purple-400">2/3</span>
                  </div>
                  <Progress value={67} className="h-2 bg-mystical-800/50" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MysticalBackground>
  );
};

export default VolunteerDashboard;
