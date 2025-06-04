
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit, MapPin, Phone, Mail, Star, Trophy, Target, Calendar, Settings, ArrowLeft, Crown, Gem, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import MysticalBackground from '@/components/MysticalBackground';
import FloatingGem from '@/components/FloatingGem';
import EnchantedButton from '@/components/EnchantedButton';

const VolunteerProfile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Alex the Kind-Hearted',
    email: 'alex.seeker@mysticalrealm.com',
    phone: '+1 555 123 4567',
    location: 'Crystal Falls, Mystical Territories',
    bio: 'A devoted seeker of good, wielding the powers of compassion and environmental magic.',
    skills: ['Environmental Sorcery', 'Teaching Arts', 'Event Conjuring'],
    preferences: {
      weekends: true,
      remote: false,
      evening: true
    }
  });

  const [gamificationData] = useState({
    heartLevel: 15,
    questXP: 2450,
    rank: 12,
    title: 'Guardian of Good',
    familiar: '🦋', // Mystical butterfly companion
    badges: [
      { 
        name: 'Emerald of Empathy', 
        element: 'emerald',
        description: 'Earned by helping children with special needs',
        lore: 'This sacred gem pulses with the heartbeat of those you have comforted'
      },
      { 
        name: 'Sapphire of Service', 
        element: 'sapphire',
        description: 'Completed 25+ community quests',
        lore: 'Forged in the depths of selfless dedication'
      },
      { 
        name: 'Ruby of Leadership', 
        element: 'ruby',
        description: 'Led 10+ volunteer teams',
        lore: 'Burns with the fire of inspiration you kindle in others'
      }
    ],
    recentQuests: [
      { task: 'Enchanted Forest Restoration', points: 50, date: '2 moons ago', rarity: 'legendary' },
      { task: 'Crystal Lake Teaching Circle', points: 75, date: '1 moon ago', rarity: 'epic' },
      { task: 'Starlight Food Distribution', points: 40, date: '3 suns ago', rarity: 'rare' }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [hoveredBadge, setHoveredBadge] = useState<string | null>(null);

  const getRarityColor = (rarity: string) => {
    switch (rarity) {
      case 'legendary': return 'from-amber-400 to-yellow-500';
      case 'epic': return 'from-purple-400 to-pink-500';
      case 'rare': return 'from-blue-400 to-cyan-500';
      default: return 'from-gray-400 to-gray-500';
    }
  };

  const getTitleCrown = (title: string) => {
    const crowns = {
      'Novice Sprout': '🌱',
      'Gem Seeker': '💎',
      'Task Warden': '⚔️',
      'Guardian of Good': '👑'
    };
    return crowns[title] || '✨';
  };

  return (
    <MysticalBackground variant="archive">
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
        {/* Archive Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <motion.h1
            className="text-5xl font-fantasy font-bold bg-gradient-to-r from-purple-300 via-mystical-200 to-amber-300 bg-clip-text text-transparent mb-4"
            animate={{
              textShadow: [
                '0 0 20px rgba(139, 108, 242, 0.5)',
                '0 0 40px rgba(139, 108, 242, 0.8)',
                '0 0 20px rgba(139, 108, 242, 0.5)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            The Soulstone Archive
          </motion.h1>
          <p className="text-xl text-mystical-200 font-medieval">
            Chronicle of the Kind-Hearted Hero
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Hero Character Sheet */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Magical Profile Stone */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-8 border border-purple-400/30 relative overflow-hidden">
              {/* Floating Magical Elements */}
              <div className="absolute top-4 right-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="text-3xl"
                >
                  {gamificationData.familiar}
                </motion.div>
              </div>

              <div className="flex items-center space-x-6 mb-6">
                {/* Avatar Orb */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <motion.div
                    className="w-32 h-32 bg-gradient-to-br from-purple-400 via-mystical-500 to-amber-400 rounded-full flex items-center justify-center text-3xl font-bold text-white relative overflow-hidden"
                    animate={{
                      boxShadow: [
                        '0 0 30px rgba(139, 108, 242, 0.5)',
                        '0 0 50px rgba(139, 108, 242, 0.8)',
                        '0 0 30px rgba(139, 108, 242, 0.5)'
                      ]
                    }}
                    transition={{ duration: 3, repeat: Infinity }}
                  >
                    {/* Magical Inner Glow */}
                    <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                    <span className="relative z-10">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </span>
                    
                    {/* Character Level Crown */}
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-2xl"
                      animate={{ y: [-2, 2, -2] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      {getTitleCrown(gamificationData.title)}
                    </motion.div>
                  </motion.div>
                  
                  <motion.div
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <Camera className="text-white" size={24} />
                  </motion.div>
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-3">
                      <h1 className="text-3xl font-fantasy text-mystical-100">{profileData.name}</h1>
                      <motion.div
                        className="bg-gradient-to-r from-amber-400 to-yellow-500 text-mystical-900 px-3 py-1 rounded-full text-sm font-medieval font-bold"
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                      >
                        {gamificationData.title}
                      </motion.div>
                    </div>
                    <EnchantedButton
                      variant="secondary"
                      size="sm"
                      onClick={() => setIsEditing(!isEditing)}
                    >
                      <Edit size={16} />
                      <span>{isEditing ? 'Seal Scroll' : 'Edit Chronicle'}</span>
                    </EnchantedButton>
                  </div>
                  
                  <p className="text-mystical-300 font-medieval mb-4">{profileData.bio}</p>
                  
                  <div className="flex items-center text-mystical-400 text-sm space-x-6 font-medieval">
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {profileData.location}
                    </span>
                    <span className="flex items-center">
                      <Crown size={14} className="mr-1 text-amber-400" />
                      Heart Level {gamificationData.heartLevel}
                    </span>
                  </div>
                </div>
              </div>

              {/* Hero Stats Crystal Display */}
              <div className="grid md:grid-cols-3 gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-600/30 to-mystical-700/30 rounded-xl p-4 border border-purple-400/20 text-center"
                >
                  <motion.div
                    className="text-3xl font-bold text-purple-300 mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {gamificationData.questXP.toLocaleString()}
                  </motion.div>
                  <div className="text-sm text-mystical-400 font-medieval">Quest Experience</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-amber-600/30 to-yellow-700/30 rounded-xl p-4 border border-amber-400/20 text-center"
                >
                  <motion.div
                    className="text-3xl font-bold text-amber-300 mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                  >
                    #{gamificationData.rank}
                  </motion.div>
                  <div className="text-sm text-mystical-400 font-medieval">Realm Ranking</div>
                </motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-emerald-600/30 to-green-700/30 rounded-xl p-4 border border-emerald-400/20 text-center"
                >
                  <motion.div
                    className="text-3xl font-bold text-emerald-300 mb-1"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    {gamificationData.badges.length}
                  </motion.div>
                  <div className="text-sm text-mystical-400 font-medieval">Sacred Gems</div>
                </motion.div>
              </div>

              {/* Sacred Skills Runestones */}
              <div className="mb-6">
                <Label className="text-mystical-200 mb-4 block text-lg font-medieval">⚡ Awakened Powers</Label>
                <div className="flex flex-wrap gap-3">
                  {profileData.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="bg-gradient-to-r from-mystical-500 to-purple-500 text-white px-6 py-3 rounded-full font-medieval font-medium relative overflow-hidden"
                    >
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                        animate={{ x: ['-100%', '100%'] }}
                        transition={{ duration: 3, repeat: Infinity }}
                      />
                      <span className="relative z-10">✨ {skill}</span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Mystical Preferences Altars */}
              <div>
                <Label className="text-mystical-200 mb-4 block text-lg font-medieval">🔮 Sacred Preferences</Label>
                <div className="space-y-3">
                  {[
                    { key: 'weekends', label: 'Available during weekend rituals', icon: '🌙', description: 'Moonlit ceremonies and gatherings' },
                    { key: 'remote', label: 'Remote astral projection work', icon: '🌌', description: 'Tasks performed from mystical distance' },
                    { key: 'evening', label: 'Evening starlight activities', icon: '⭐', description: 'Under the guidance of celestial bodies' }
                  ].map((pref) => (
                    <motion.div
                      key={pref.key}
                      whileHover={{ scale: 1.01, x: 5 }}
                      className="flex items-center justify-between p-4 bg-mystical-800/40 rounded-xl border border-mystical-600/30 backdrop-blur-sm"
                    >
                      <div className="flex items-center space-x-4">
                        <span className="text-2xl">{pref.icon}</span>
                        <div>
                          <div className="text-mystical-200 font-medieval">{pref.label}</div>
                          <div className="text-xs text-mystical-400">{pref.description}</div>
                        </div>
                      </div>
                      <Switch
                        checked={profileData.preferences[pref.key]}
                        disabled={!isEditing}
                        onCheckedChange={(checked) => {
                          setProfileData({
                            ...profileData,
                            preferences: { ...profileData.preferences, [pref.key]: checked }
                          });
                        }}
                        className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-amber-400 data-[state=checked]:to-yellow-500"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Mystical Achievements Codex */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Sacred Gems Collection */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-purple-400/30">
              <h3 className="text-xl font-fantasy text-mystical-100 mb-6 flex items-center">
                <Gem className="mr-3 text-amber-400" size={24} />
                Sacred Gem Collection
              </h3>
              
              <div className="space-y-4">
                {gamificationData.badges.map((badge, index) => (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                    onHoverStart={() => setHoveredBadge(badge.name)}
                    onHoverEnd={() => setHoveredBadge(null)}
                    className="relative p-4 rounded-xl bg-gradient-to-r from-mystical-800/50 to-purple-800/50 border border-purple-400/20 cursor-pointer group overflow-hidden"
                  >
                    <div className="flex items-center space-x-4">
                      <FloatingGem type={badge.element as any} size="md" />
                      <div className="flex-1">
                        <div className="font-medieval text-mystical-100 font-semibold">{badge.name}</div>
                        <div className="text-xs text-mystical-400">{badge.description}</div>
                        {hoveredBadge === badge.name && (
                          <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="mt-2 text-xs text-amber-300 italic font-medieval"
                          >
                            "{badge.lore}"
                          </motion.div>
                        )}
                      </div>
                    </div>
                    
                    {/* Magical Shimmer Effect */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-400/10 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Quest Chronicles */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-purple-400/30">
              <h3 className="text-xl font-fantasy text-mystical-100 mb-6 flex items-center">
                <Target className="mr-3 text-emerald-400" size={24} />
                Recent Quest Chronicles
              </h3>
              
              <div className="space-y-3">
                {gamificationData.recentQuests.map((quest, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className={`p-4 rounded-xl bg-gradient-to-r ${getRarityColor(quest.rarity)}/20 border border-current/20 group`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="font-medieval text-mystical-100 text-sm font-semibold mb-1">{quest.task}</div>
                        <div className="text-xs text-mystical-400 flex items-center space-x-2">
                          <span>{quest.date}</span>
                          <span className="w-1 h-1 bg-mystical-400 rounded-full"></span>
                          <span className="capitalize font-medium">{quest.rarity}</span>
                        </div>
                      </div>
                      <motion.div
                        className="text-amber-400 font-bold text-lg flex items-center space-x-1"
                        animate={{ scale: [1, 1.1, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                      >
                        <Sparkles size={16} />
                        <span>+{quest.points}</span>
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Heart Level Progress */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-purple-400/30">
              <h3 className="text-xl font-fantasy text-mystical-100 mb-6 flex items-center">
                <Star className="mr-3 text-yellow-400" size={24} />
                Heart Level Progress
              </h3>
              
              <div className="text-center mb-4">
                <motion.div
                  className="text-4xl font-fantasy font-bold bg-gradient-to-r from-yellow-400 to-amber-500 bg-clip-text text-transparent mb-2"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  Level {gamificationData.heartLevel}
                </motion.div>
                <p className="text-mystical-400 font-medieval text-sm">Path to Legendary Hero</p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-mystical-400 mb-2 font-medieval">
                    <span>Current Heart Energy</span>
                    <span>{gamificationData.questXP}/3000</span>
                  </div>
                  <Progress value={(gamificationData.questXP / 3000) * 100} className="h-3 bg-mystical-800/50" />
                  <p className="text-xs text-mystical-500 mt-1 font-medieval">550 XP to next Heart Level</p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </MysticalBackground>
  );
};

export default VolunteerProfile;
