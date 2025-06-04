import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../components/Navigation';
import MysticalOrb from '../components/MysticalOrb';
import EnchantedButton from '../components/EnchantedButton';

const NGODashboard = () => {
  const [quests, setQuests] = useState([
    { id: 1, title: "Rescue the Lost Unicorn", status: "Active" },
    { id: 2, title: "Defeat the Shadow Dragon", status: "Pending" },
    { id: 3, title: "Gather Herbs for Healing Potions", status: "Completed" },
  ]);

  const ngoData = {
    name: "Order of the Silver Dawn",
    description: "A guild dedicated to protecting the innocent and vanquishing evil.",
    impact: "5,000+ lives saved",
    rating: "4.8/5",
  };

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Mystical Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-mystical-900 via-mystical-800 to-ember-900">
        {/* Animated Mist */}
        <div className="absolute inset-0 bg-[url('/mist.png')] bg-repeat opacity-30 animate-mist" />

        {/* Floating Orbs */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full mix-blend-overlay animate-pulse" />
        <div className="absolute bottom-10 right-20 w-32 h-32 bg-gradient-to-tr from-yellow-400 to-orange-500 rounded-full mix-blend-overlay animate-pulse" />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <div className="relative z-10 pt-20 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <motion.h1
              className="text-4xl md:text-5xl font-fantasy text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Welcome to the Guild Control Tower
            </motion.h1>
            <motion.p
              className="text-mystical-200 font-medieval text-lg max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Manage your quests, view volunteer insights, and visualize your impact on the mystical realm.
            </motion.p>
          </div>

          {/* Dashboard Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Quest Management Console */}
            <div className="lg:col-span-2">
              <motion.div
                className="bg-mystical-800/30 backdrop-blur-xl rounded-3xl border border-mystical-400/30 p-8 shadow-2xl shadow-mystical-500/20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-fantasy text-mystical-100 mb-2">Quest Management Console</h3>
                  <p className="text-mystical-300 font-medieval">Oversee the quests and manage your volunteer forces</p>
                </div>

                {/* Quest List */}
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-mystical-700">
                    <thead>
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-mystical-200 uppercase tracking-wider">
                          Quest
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-mystical-200 uppercase tracking-wider">
                          Status
                        </th>
                        <th className="px-6 py-3 text-right text-xs font-medium text-mystical-200 uppercase tracking-wider">
                          Actions
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-mystical-700">
                      {quests.map((quest) => (
                        <tr key={quest.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-mystical-100 font-semibold">{quest.title}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                              quest.status === 'Active' ? 'bg-green-100 text-green-800' :
                              quest.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-red-100 text-red-800'
                            }`}>
                              {quest.status}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-right">
                            <EnchantedButton variant="mystical" size="sm">
                              <span>Manage</span>
                            </EnchantedButton>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Add New Quest Button */}
                <div className="mt-6 text-center">
                  <EnchantedButton variant="mystical">
                    <span>Create New Quest</span>
                  </EnchantedButton>
                </div>
              </motion.div>
            </div>

            {/* Volunteer Insight Globe */}
            <div>
              <motion.div
                className="bg-mystical-800/30 backdrop-blur-xl rounded-3xl border border-mystical-400/30 p-8 shadow-2xl shadow-mystical-500/20 mb-8"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
              >
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-fantasy text-mystical-100 mb-2">Volunteer Insight Globe</h3>
                  <p className="text-mystical-300 font-medieval">Mystical view of your realm's champions</p>
                </div>

                <div className="flex justify-center mb-6">
                  <MysticalOrb size="lg" color="sapphire" className="animate-pulse">
                    <div className="text-center">
                      <div className="text-2xl font-bold">247</div>
                      <div className="text-xs opacity-80">Active</div>
                    </div>
                  </MysticalOrb>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: "New Recruits", value: "23", icon: "✨" },
                    { label: "Gems Earned", value: "1.2k", icon: "💎" },
                    { label: "Quests Active", value: "45", icon: "📜" },
                    { label: "Realms Served", value: "8", icon: "🏰" },
                  ].map((stat, index) => (
                    <div key={index} className="bg-mystical-700/50 rounded-xl p-4 text-center border border-mystical-500/30">
                      <div className="text-2xl mb-2">{stat.icon}</div>
                      <div className="text-xl font-bold text-mystical-100">{stat.value}</div>
                      <div className="text-xs text-mystical-300 font-medieval">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Messaging Owl */}
              <motion.div
                className="bg-mystical-800/30 backdrop-blur-xl rounded-3xl border border-mystical-400/30 p-6 shadow-2xl shadow-mystical-500/20"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="text-center mb-4">
                  <h3 className="text-xl font-fantasy text-mystical-100 mb-2">Messaging Owl</h3>
                  <div className="text-4xl mb-4 animate-bounce">🦉</div>
                  <p className="text-mystical-300 font-medieval text-sm">3 new scrolls delivered</p>
                </div>
                
                <EnchantedButton variant="mystical" size="sm" className="w-full">
                  <span>Open Magical Inbox</span>
                </EnchantedButton>
              </motion.div>
            </div>
          </div>

          {/* Impact Visualization */}
          <motion.div
            className="bg-mystical-800/30 backdrop-blur-xl rounded-3xl border border-mystical-400/30 p-8 shadow-2xl shadow-mystical-500/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <div className="text-center mb-6">
              <h3 className="text-2xl font-fantasy text-mystical-100 mb-2">Impact Visualization</h3>
              <p className="text-mystical-300 font-medieval">Witness the ripples of your noble deeds across the realm</p>
            </div>

            {/* Impact Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-400 mb-2">{ngoData.impact}</div>
                <div className="text-sm text-mystical-200 font-medieval">Souls touched</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-400 mb-2">{ngoData.rating}</div>
                <div className="text-sm text-mystical-200 font-medieval">Guild Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-400 mb-2">Active</div>
                <div className="text-sm text-mystical-200 font-medieval">Volunteers</div>
              </div>
            </div>

            {/* Guild Description */}
            <div className="mt-8">
              <h4 className="text-xl font-fantasy text-mystical-100 mb-2">About {ngoData.name}</h4>
              <p className="text-mystical-300 font-medieval">{ngoData.description}</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NGODashboard;
