
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Edit, MapPin, Phone, Mail, Star, Trophy, Target, Calendar, Settings, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import VideoBackground from '@/components/VideoBackground';

const VolunteerProfile = () => {
  const [profileData, setProfileData] = useState({
    name: 'Alex Johnson',
    email: 'alex.johnson@email.com',
    phone: '+1 555 123 4567',
    location: 'San Francisco, CA',
    bio: 'Passionate about environmental conservation and community service.',
    skills: ['Environmental', 'Teaching', 'Event Planning'],
    preferences: {
      weekends: true,
      remote: false,
      evening: true
    }
  });

  const [gamificationData] = useState({
    points: 2450,
    rank: 12,
    badges: [
      { name: 'Eco Warrior', icon: '🌱', description: 'Completed 10+ environmental tasks' },
      { name: 'Team Player', icon: '🤝', description: 'Collaborated on 5+ group projects' },
      { name: 'Dedicated Helper', icon: '⭐', description: 'Maintained 95%+ completion rate' }
    ],
    recentActivities: [
      { task: 'Beach Cleanup Drive', points: 50, date: '2 days ago' },
      { task: 'Teaching Session', points: 75, date: '1 week ago' },
      { task: 'Food Distribution', points: 40, date: '2 weeks ago' }
    ]
  });

  const [isEditing, setIsEditing] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);

  const handleSave = async () => {
    // Simulate save
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsEditing(false);
    setHasChanges(false);
    // Show success toast
  };

  return (
    <div className="min-h-screen relative">
      <VideoBackground src="/assets/bg.mp4" />
      
      {/* Back button */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-10 flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300"
      >
        <motion.div
          whileHover={{ x: -4 }}
          className="flex items-center space-x-2"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </motion.div>
      </Link>

      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid lg:grid-cols-3 gap-8"
        >
          {/* Left Panel - Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-2 space-y-6"
          >
            {/* Profile Header */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
              <div className="flex items-center space-x-6 mb-6">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative group"
                >
                  <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center text-2xl font-bold text-white">
                    {profileData.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <motion.div
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-black/50 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer"
                  >
                    <Camera className="text-white" size={20} />
                  </motion.div>
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h1 className="text-2xl font-bold text-white">{profileData.name}</h1>
                    <Button
                      onClick={() => setIsEditing(!isEditing)}
                      variant="outline"
                      size="sm"
                      className="border-white/20 text-white/80 hover:bg-white/10"
                    >
                      <Edit size={16} className="mr-2" />
                      {isEditing ? 'Cancel' : 'Edit'}
                    </Button>
                  </div>
                  <p className="text-white/70 mb-2">{profileData.bio}</p>
                  <div className="flex items-center text-white/60 text-sm space-x-4">
                    <span className="flex items-center">
                      <MapPin size={14} className="mr-1" />
                      {profileData.location}
                    </span>
                    <span className="flex items-center">
                      <Trophy size={14} className="mr-1" />
                      Rank #{gamificationData.rank}
                    </span>
                  </div>
                </div>
              </div>

              {/* Contact Info */}
              <div className="grid md:grid-cols-2 gap-4 mb-6">
                <div>
                  <Label className="text-white/80 mb-2 block">
                    <Mail size={16} className="inline mr-2" />
                    Email
                  </Label>
                  <Input
                    value={profileData.email}
                    disabled={!isEditing}
                    onChange={(e) => setProfileData({...profileData, email: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                  />
                </div>
                <div>
                  <Label className="text-white/80 mb-2 block">
                    <Phone size={16} className="inline mr-2" />
                    Phone
                  </Label>
                  <Input
                    value={profileData.phone}
                    disabled={!isEditing}
                    onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                  />
                </div>
              </div>

              {/* Skills */}
              <div className="mb-6">
                <Label className="text-white/80 mb-4 block text-lg">Skills</Label>
                <div className="flex flex-wrap gap-2">
                  {profileData.skills.map((skill, index) => (
                    <motion.div
                      key={skill}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-2 rounded-full text-sm font-medium"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Preferences */}
              <div>
                <Label className="text-white/80 mb-4 block text-lg">Preferences</Label>
                <div className="space-y-3">
                  {[
                    { key: 'weekends', label: 'Available on weekends', icon: Calendar },
                    { key: 'remote', label: 'Remote work preferred', icon: Settings },
                    { key: 'evening', label: 'Evening activities', icon: Calendar }
                  ].map((pref) => (
                    <motion.div
                      key={pref.key}
                      whileHover={{ scale: 1.01 }}
                      className="flex items-center justify-between p-3 bg-white/5 rounded-xl border border-white/10"
                    >
                      <div className="flex items-center space-x-3">
                        <pref.icon size={18} className="text-blue-300" />
                        <span className="text-white/80">{pref.label}</span>
                      </div>
                      <Switch
                        checked={profileData.preferences[pref.key]}
                        disabled={!isEditing}
                        onCheckedChange={(checked) => {
                          setProfileData({
                            ...profileData,
                            preferences: { ...profileData.preferences, [pref.key]: checked }
                          });
                          setHasChanges(true);
                        }}
                      />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Save Button */}
              {isEditing && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 flex justify-end"
                >
                  <Button
                    onClick={handleSave}
                    disabled={!hasChanges}
                    className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 disabled:opacity-50"
                  >
                    Save Changes
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Panel - Gamification Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="space-y-6"
          >
            {/* Points & Rank */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Star className="mr-2 text-yellow-400" size={20} />
                Your Progress
              </h3>
              
              <div className="text-center mb-6">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", delay: 0.5 }}
                  className="text-4xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent mb-2"
                >
                  {gamificationData.points.toLocaleString()}
                </motion.div>
                <p className="text-white/70">Total Points</p>
                
                <div className="mt-4 p-3 bg-white/5 rounded-xl">
                  <div className="flex items-center justify-between text-sm text-white/80 mb-2">
                    <span>Global Rank</span>
                    <span className="font-semibold">#{gamificationData.rank}</span>
                  </div>
                  <Progress value={75} className="h-2" />
                  <p className="text-xs text-white/60 mt-1">Next rank in 550 points</p>
                </div>
              </div>
            </div>

            {/* Badges */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Trophy className="mr-2 text-yellow-400" size={20} />
                Achievements
              </h3>
              
              <div className="space-y-3">
                {gamificationData.badges.map((badge, index) => (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.1)' }}
                    className="flex items-center space-x-3 p-3 rounded-xl transition-all duration-300 cursor-pointer group"
                  >
                    <div className="text-2xl group-hover:scale-110 transition-transform">
                      {badge.icon}
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-white">{badge.name}</div>
                      <div className="text-xs text-white/60">{badge.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Recent Activities */}
            <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <Target className="mr-2 text-green-400" size={20} />
                Recent Activities
              </h3>
              
              <div className="space-y-3">
                {gamificationData.recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="flex items-center justify-between p-3 bg-white/5 rounded-xl"
                  >
                    <div className="flex-1">
                      <div className="font-medium text-white text-sm">{activity.task}</div>
                      <div className="text-xs text-white/60">{activity.date}</div>
                    </div>
                    <div className="text-green-400 font-semibold">+{activity.points}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default VolunteerProfile;
