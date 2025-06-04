
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, BookOpen, Eye, MessageCircle, TrendingUp, Globe, Settings, Plus, Crown, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Progress } from '@/components/ui/progress';
import MysticalBackground from '@/components/MysticalBackground';
import MysticalOrb from '@/components/MysticalOrb';
import FloatingGem from '@/components/FloatingGem';
import EnchantedButton from '@/components/EnchantedButton';

const NGODashboard = () => {
  const [selectedTimeframe, setSelectedTimeframe] = useState('week');
  const [newMessages, setNewMessages] = useState(3);

  const guildData = {
    name: 'Guardians of the Green Realm',
    guildMaster: 'Elena Natureweaver',
    totalHeroes: 312,
    activeQuests: 8,
    completedQuests: 47,
    gemsDistributed: 8750,
    realmsProtected: 12,
    monthlyGrowth: 23
  };

  const activeQuests = [
    {
      id: 1,
      title: 'Enchanted Forest Restoration',
      volunteers: 15,
      maxVolunteers: 25,
      priority: 'high',
      status: 'active',
      applications: 8,
      completion: 60
    },
    {
      id: 2,
      title: 'Crystal Lake Purification',
      volunteers: 8,
      maxVolunteers: 12,
      priority: 'medium',
      status: 'active',
      applications: 3,
      completion: 40
    },
    {
      id: 3,
      title: 'Mystical Garden Tending',
      volunteers: 3,
      maxVolunteers: 8,
      priority: 'low',
      status: 'recruiting',
      applications: 12,
      completion: 15
    }
  ];

  const recentApplications = [
    {
      id: 1,
      volunteerName: 'Kai Earthsong',
      questTitle: 'Forest Restoration',
      avatar: '🌱',
      level: 12,
      timeAgo: '2 hours ago',
      skills: ['Environmental Magic', 'Healing Arts']
    },
    {
      id: 2,
      volunteerName: 'Zara Stormcaller',
      questTitle: 'Lake Purification',
      avatar: '💧',
      level: 18,
      timeAgo: '4 hours ago',
      skills: ['Water Magic', 'Leadership']
    },
    {
      id: 3,
      volunteerName: 'Felix Brightleaf',
      questTitle: 'Garden Tending',
      avatar: '🍃',
      level: 8,
      timeAgo: '6 hours ago',
      skills: ['Plant Magic', 'Teaching']
    }
  ];

  const impactMetrics = {
    thisWeek: {
      newVolunteers: 23,
      questsCompleted: 7,
      hoursVolunteered: 156,
      gemsAwarded: 425
    },
    thisMonth: {
      newVolunteers: 89,
      questsCompleted: 24,
      hoursVolunteered: 672,
      gemsAwarded: 1850
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'text-red-400 bg-red-400/20';
      case 'medium': return 'text-amber-400 bg-amber-400/20';
      case 'low': return 'text-emerald-400 bg-emerald-400/20';
      default: return 'text-gray-400 bg-gray-400/20';
    }
  };

  const handleMessageOwl = () => {
    setNewMessages(0);
    // Open messaging interface
  };

  const getCurrentMetrics = () => {
    return selectedTimeframe === 'week' ? impactMetrics.thisWeek : impactMetrics.thisMonth;
  };

  return (
    <MysticalBackground variant="control-tower">
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
        {/* Control Tower Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <motion.h1
            className="text-5xl font-fantasy font-bold bg-gradient-to-r from-cyan-300 via-blue-300 to-mystical-300 bg-clip-text text-transparent mb-4"
            animate={{
              textShadow: [
                '0 0 20px rgba(34, 211, 238, 0.5)',
                '0 0 40px rgba(34, 211, 238, 0.8)',
                '0 0 20px rgba(34, 211, 238, 0.5)'
              ]
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            The Guild Control Tower
          </motion.h1>
          <motion.p
            className="text-xl text-mystical-200 font-medieval"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Command the Forces of Kindness, Master {guildData.guildMaster}
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-6">
          {/* Guild Status Orb */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Guild Master Panel */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-cyan-400/30">
              <div className="text-center mb-6">
                <motion.div
                  className="relative mx-auto mb-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-400 via-blue-500 to-mystical-500 rounded-full flex items-center justify-center text-2xl font-bold text-white relative mx-auto">
                    <div className="absolute inset-2 bg-gradient-to-br from-white/20 to-transparent rounded-full" />
                    <span className="relative z-10">🏰</span>
                    
                    {/* Guild Master Crown */}
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2 text-2xl"
                      animate={{ 
                        y: [-2, 2, -2],
                        rotate: [0, 5, -5, 0]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      👑
                    </motion.div>
                  </div>
                  
                  {/* Power Ring */}
                  <motion.div
                    className="absolute inset-0 rounded-full border-4 border-cyan-400/30"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                </motion.div>

                <h3 className="text-xl font-fantasy text-mystical-100 font-semibold">{guildData.name}</h3>
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-3 py-1 rounded-full text-sm font-medieval font-bold mb-2 inline-block">
                  Guild Master
                </div>
                <div className="text-mystical-400 font-medieval text-sm">{guildData.guildMaster}</div>
              </div>

              {/* Guild Stats */}
              <div className="space-y-3 text-sm font-medieval">
                <div className="flex justify-between">
                  <span className="text-mystical-400">Active Heroes</span>
                  <span className="text-cyan-400 font-bold">{guildData.totalHeroes}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mystical-400">Active Quests</span>
                  <span className="text-emerald-400 font-bold">{guildData.activeQuests}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mystical-400">Realms Protected</span>
                  <span className="text-purple-400 font-bold">{guildData.realmsProtected}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-mystical-400">Monthly Growth</span>
                  <span className="text-amber-400 font-bold">+{guildData.monthlyGrowth}%</span>
                </div>
              </div>
            </div>

            {/* Messaging Owl */}
            <motion.div
              className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-cyan-400/30 cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={handleMessageOwl}
            >
              <h3 className="text-lg font-fantasy text-mystical-100 mb-4 flex items-center">
                <MessageCircle className="mr-2 text-cyan-400" size={20} />
                Mystical Messenger
              </h3>
              
              <div className="text-center">
                <motion.div
                  className="text-6xl mb-3"
                  animate={{ 
                    y: [-5, 5, -5],
                    rotate: [0, 2, -2, 0]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                >
                  🦉
                </motion.div>
                
                {newMessages > 0 && (
                  <motion.div
                    className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold mx-auto mb-2"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {newMessages}
                  </motion.div>
                )}
                
                <p className="text-mystical-400 font-medieval text-sm">
                  {newMessages > 0 ? `${newMessages} new scrolls await` : 'No new messages'}
                </p>
              </div>
            </motion.div>

            {/* Quick Actions */}
            <div className="space-y-3">
              <EnchantedButton variant="mystical" className="w-full">
                <Plus size={16} />
                <span>Summon New Quest</span>
              </EnchantedButton>
              
              <EnchantedButton variant="secondary" className="w-full">
                <Settings size={16} />
                <span>Guild Settings</span>
              </EnchantedButton>
            </div>
          </motion.div>

          {/* Main Control Console */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Impact Visualization Crystal */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/30">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-fantasy text-mystical-100 flex items-center">
                  <TrendingUp className="mr-3 text-cyan-400" size={24} />
                  Impact Crystal Timeline
                </h2>
                
                <div className="flex space-x-2">
                  <button
                    onClick={() => setSelectedTimeframe('week')}
                    className={`px-4 py-2 rounded-full font-medieval text-sm transition-all ${
                      selectedTimeframe === 'week'
                        ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/50'
                        : 'text-mystical-400 hover:text-cyan-300'
                    }`}
                  >
                    This Week
                  </button>
                  <button
                    onClick={() => setSelectedTimeframe('month')}
                    className={`px-4 py-2 rounded-full font-medieval text-sm transition-all ${
                      selectedTimeframe === 'month'
                        ? 'bg-cyan-400/20 text-cyan-300 border border-cyan-400/50'
                        : 'text-mystical-400 hover:text-cyan-300'
                    }`}
                  >
                    This Month
                  </button>
                </div>
              </div>

              <div className="grid md:grid-cols-4 gap-4 mb-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-emerald-600/30 to-green-700/30 rounded-xl p-4 border border-emerald-400/20 text-center"
                >
                  <Users className="w-8 h-8 text-emerald-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-emerald-300 font-fantasy">{getCurrentMetrics().newVolunteers}</div>
                  <div className="text-sm text-mystical-400 font-medieval">New Heroes</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-amber-600/30 to-yellow-700/30 rounded-xl p-4 border border-amber-400/20 text-center"
                >
                  <BookOpen className="w-8 h-8 text-amber-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-amber-300 font-fantasy">{getCurrentMetrics().questsCompleted}</div>
                  <div className="text-sm text-mystical-400 font-medieval">Quests Completed</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-purple-600/30 to-mystical-700/30 rounded-xl p-4 border border-purple-400/20 text-center"
                >
                  <Globe className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-purple-300 font-fantasy">{getCurrentMetrics().hoursVolunteered}</div>
                  <div className="text-sm text-mystical-400 font-medieval">Hours of Service</div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-cyan-600/30 to-blue-700/30 rounded-xl p-4 border border-cyan-400/20 text-center"
                >
                  <Sparkles className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-cyan-300 font-fantasy">{getCurrentMetrics().gemsAwarded}</div>
                  <div className="text-sm text-mystical-400 font-medieval">Gems Awarded</div>
                </motion.div>
              </div>
            </div>

            {/* Quest Management Console */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-8 border border-cyan-400/30">
              <h2 className="text-2xl font-fantasy text-mystical-100 mb-6 flex items-center">
                <BookOpen className="mr-3 text-cyan-400" size={24} />
                Active Quest Scrolls
              </h2>

              <div className="space-y-4">
                {activeQuests.map((quest, index) => (
                  <motion.div
                    key={quest.id}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.4 + index * 0.1 }}
                    whileHover={{ scale: 1.01, x: 5 }}
                    className="bg-mystical-800/40 rounded-xl p-6 border border-cyan-400/20 relative overflow-hidden group"
                  >
                    {/* Magical shimmer */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-400/10 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />

                    <div className="relative z-10">
                      <div className="flex justify-between items-start mb-3">
                        <h3 className="text-lg font-fantasy text-mystical-100 font-semibold">{quest.title}</h3>
                        <div className="flex items-center space-x-2">
                          <span className={`px-2 py-1 rounded-full text-xs font-medieval capitalize ${getPriorityColor(quest.priority)}`}>
                            {quest.priority}
                          </span>
                          <span className="bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded-full text-xs font-medieval">
                            {quest.status}
                          </span>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-4 mb-4">
                        <div>
                          <div className="text-mystical-400 text-sm font-medieval mb-1">Heroes Assigned</div>
                          <div className="text-mystical-200 font-bold">{quest.volunteers}/{quest.maxVolunteers}</div>
                          <Progress value={(quest.volunteers / quest.maxVolunteers) * 100} className="h-2 mt-1" />
                        </div>
                        <div>
                          <div className="text-mystical-400 text-sm font-medieval mb-1">Applications</div>
                          <div className="text-amber-400 font-bold flex items-center">
                            <Eye size={16} className="mr-1" />
                            {quest.applications}
                          </div>
                        </div>
                        <div>
                          <div className="text-mystical-400 text-sm font-medieval mb-1">Completion</div>
                          <div className="text-emerald-400 font-bold">{quest.completion}%</div>
                          <Progress value={quest.completion} className="h-2 mt-1" />
                        </div>
                      </div>

                      <div className="flex space-x-3">
                        <EnchantedButton variant="secondary" size="sm">
                          <Eye size={16} />
                          <span>View Details</span>
                        </EnchantedButton>
                        <EnchantedButton variant="mystical" size="sm">
                          <Users size={16} />
                          <span>Manage Heroes</span>
                        </EnchantedButton>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Hero Applications & Guild Insights */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Recent Applications */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-cyan-400/30">
              <h3 className="text-lg font-fantasy text-mystical-100 mb-4 flex items-center">
                <Users className="mr-2 text-cyan-400" size={20} />
                Hero Applications
              </h3>
              
              <div className="space-y-3">
                {recentApplications.map((application, index) => (
                  <motion.div
                    key={application.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="bg-mystical-800/40 rounded-lg p-3 cursor-pointer group"
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="text-xl">{application.avatar}</div>
                      <div className="flex-1">
                        <div className="text-mystical-200 font-medieval text-sm font-semibold">{application.volunteerName}</div>
                        <div className="text-mystical-400 text-xs">Level {application.level} • {application.timeAgo}</div>
                      </div>
                    </div>
                    <div className="text-xs text-mystical-400 font-medieval mb-2">
                      Applied for: {application.questTitle}
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {application.skills.map((skill) => (
                        <span key={skill} className="bg-cyan-400/20 text-cyan-300 px-2 py-1 rounded text-xs font-medieval">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <EnchantedButton variant="mystical" size="sm" className="w-full mt-4">
                <Eye size={16} />
                <span>Review All Applications</span>
              </EnchantedButton>
            </div>

            {/* Guild Gem Vault */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-cyan-400/30">
              <h3 className="text-lg font-fantasy text-mystical-100 mb-4 flex items-center">
                <Crown className="mr-2 text-cyan-400" size={20} />
                Guild Gem Vault
              </h3>
              
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="text-center">
                  <FloatingGem type="sapphire" size="md" />
                  <div className="text-mystical-400 font-medieval text-xs mt-2">Wisdom</div>
                </div>
                <div className="text-center">
                  <FloatingGem type="emerald" size="md" />
                  <div className="text-mystical-400 font-medieval text-xs mt-2">Growth</div>
                </div>
              </div>
              
              <div className="text-center">
                <MysticalOrb color="cyan" size="sm">
                  <div className="text-center">
                    <div className="text-lg font-bold">{(guildData.gemsDistributed / 1000).toFixed(1)}K</div>
                    <div className="text-xs">Distributed</div>
                  </div>
                </MysticalOrb>
              </div>
            </div>

            {/* Guild Performance */}
            <div className="bg-mystical-900/60 backdrop-blur-xl rounded-3xl p-6 border border-cyan-400/30">
              <h3 className="text-lg font-fantasy text-mystical-100 mb-4 flex items-center">
                <TrendingUp className="mr-2 text-cyan-400" size={20} />
                Guild Performance
              </h3>
              
              <div className="space-y-3">
                <div>
                  <div className="flex justify-between text-sm font-medieval mb-1">
                    <span className="text-mystical-300">Hero Satisfaction</span>
                    <span className="text-emerald-400 font-bold">94%</span>
                  </div>
                  <Progress value={94} className="h-2 bg-mystical-800/50" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm font-medieval mb-1">
                    <span className="text-mystical-300">Quest Success Rate</span>
                    <span className="text-amber-400 font-bold">87%</span>
                  </div>
                  <Progress value={87} className="h-2 bg-mystical-800/50" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm font-medieval mb-1">
                    <span className="text-mystical-300">Monthly Growth</span>
                    <span className="text-cyan-400 font-bold">+{guildData.monthlyGrowth}%</span>
                  </div>
                  <Progress value={guildData.monthlyGrowth * 2} className="h-2 bg-mystical-800/50" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </MysticalBackground>
  );
};

export default NGODashboard;
