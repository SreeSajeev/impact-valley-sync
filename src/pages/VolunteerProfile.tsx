
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Camera, Star, Trophy, Target, Save } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import VideoBackground from '@/components/VideoBackground';

const VolunteerProfile = () => {
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 8900',
    location: 'San Francisco, CA',
    skills: ['Teaching', 'Healthcare', 'Technology'],
    availability: {} as Record<string, 'available' | 'maybe' | 'unavailable'>,
    preferences: {
      weekends: true,
      remote: false,
      evenings: true
    }
  });

  const [hasChanges, setHasChanges] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const skillOptions = ['Teaching', 'Healthcare', 'Technology', 'Marketing', 'Finance', 'Legal', 'Design', 'Writing'];

  const gamificationData = {
    points: 2847,
    rank: 12,
    badges: [
      { name: 'Community Helper', icon: '🏆', description: 'Completed 50+ tasks' },
      { name: 'Consistent Volunteer', icon: '⭐', description: 'Active for 6 months' },
      { name: 'Skill Master', icon: '🎯', description: 'Expert in 3+ skills' }
    ],
    recentTasks: 15,
    completionRate: 94
  };

  const handleInputChange = (field: string, value: any) => {
    setProfileData(prev => ({ ...prev, [field]: value }));
    setHasChanges(true);
  };

  const handleSkillToggle = (skill: string) => {
    const updatedSkills = profileData.skills.includes(skill)
      ? profileData.skills.filter(s => s !== skill)
      : [...profileData.skills, skill];
    handleInputChange('skills', updatedSkills);
  };

  const handleAvailabilityToggle = (day: string) => {
    const currentStatus = profileData.availability[day];
    let newStatus: 'available' | 'maybe' | 'unavailable';
    
    if (!currentStatus || currentStatus === 'unavailable') {
      newStatus = 'available';
    } else if (currentStatus === 'available') {
      newStatus = 'maybe';
    } else {
      newStatus = 'unavailable';
    }

    handleInputChange('availability', { ...profileData.availability, [day]: newStatus });
  };

  const handleSave = async () => {
    setIsSaving(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSaving(false);
    setHasChanges(false);
    // Show success toast
  };

  const getAvailabilityColor = (status?: string) => {
    switch (status) {
      case 'available': return 'bg-green-500';
      case 'maybe': return 'bg-yellow-500';
      case 'unavailable': return 'bg-red-500';
      default: return 'bg-gray-200';
    }
  };

  return (
    <div className="min-h-screen p-4">
      <VideoBackground src="/assets/bg.mp4" />
      
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Panel: Profile */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8"
          >
            <h1 className="text-3xl font-bold text-gray-800 mb-8">My Profile</h1>

            {/* Profile Photo */}
            <div className="flex justify-center mb-8">
              <div className="relative group">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
                  {profileData.name.split(' ').map(n => n[0]).join('')}
                </div>
                <div className="absolute inset-0 bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center cursor-pointer">
                  <Camera className="text-white" size={24} />
                </div>
              </div>
            </div>

            {/* Basic Info */}
            <div className="space-y-6 mb-8">
              <div>
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profileData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  className="mt-1"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    value={profileData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="mt-1"
                  />
                </div>
                <div>
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    value={profileData.phone}
                    onChange={(e) => handleInputChange('phone', e.target.value)}
                    className="mt-1"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="location">Location</Label>
                <Input
                  id="location"
                  value={profileData.location}
                  onChange={(e) => handleInputChange('location', e.target.value)}
                  className="mt-1"
                />
              </div>
            </div>

            {/* Skills */}
            <div className="mb-8">
              <Label className="text-lg font-semibold mb-4 block">Skills</Label>
              <div className="grid grid-cols-2 gap-2">
                {skillOptions.map((skill) => (
                  <motion.button
                    key={skill}
                    onClick={() => handleSkillToggle(skill)}
                    className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                      profileData.skills.includes(skill)
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {skill}
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Availability Calendar */}
            <div className="mb-8">
              <Label className="text-lg font-semibold mb-4 block">Weekly Availability</Label>
              <div className="grid grid-cols-7 gap-2">
                {weekDays.map((day) => (
                  <div key={day} className="text-center">
                    <div className="text-sm font-medium mb-2">{day}</div>
                    <button
                      onClick={() => handleAvailabilityToggle(day)}
                      className={`w-full h-12 rounded-lg border-2 transition-all hover:scale-105 ${getAvailabilityColor(profileData.availability[day])}`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Preferences */}
            <div className="mb-8">
              <Label className="text-lg font-semibold mb-4 block">Preferences</Label>
              <div className="space-y-4">
                {[
                  { key: 'weekends', label: 'Prefer working weekends', icon: '📅' },
                  { key: 'remote', label: 'Comfortable with remote tasks', icon: '💻' },
                  { key: 'evenings', label: 'Available for evening tasks', icon: '🌙' }
                ].map((pref) => (
                  <div key={pref.key} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl">{pref.icon}</span>
                      <span className="font-medium">{pref.label}</span>
                    </div>
                    <Switch
                      checked={profileData.preferences[pref.key as keyof typeof profileData.preferences]}
                      onCheckedChange={(checked) =>
                        handleInputChange('preferences', { ...profileData.preferences, [pref.key]: checked })
                      }
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <motion.div whileHover={{ scale: hasChanges ? 1.02 : 1 }}>
              <Button
                onClick={handleSave}
                disabled={!hasChanges || isSaving}
                className={`w-full py-3 rounded-lg font-semibold transition-all ${
                  hasChanges
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                } ${hasChanges ? 'animate-pulse' : ''}`}
              >
                {isSaving ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                  />
                ) : (
                  <Save className="mr-2" size={20} />
                )}
                {isSaving ? 'Saving...' : 'Save Profile'}
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Panel: Gamification Dashboard */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Dashboard</h2>

            {/* Points Counter */}
            <div className="bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl p-6 text-white mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-yellow-100 mb-2">Total Points</p>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-4xl font-bold"
                  >
                    {gamificationData.points.toLocaleString()}
                  </motion.div>
                </div>
                <Star className="text-yellow-200" size={48} />
              </div>
            </div>

            {/* Rank */}
            <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-2xl p-6 text-white mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-purple-100 mb-2">Global Rank</p>
                  <div className="text-4xl font-bold">#{gamificationData.rank}</div>
                </div>
                <Trophy className="text-purple-200" size={48} />
              </div>
            </div>

            {/* Badges */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Achievements</h3>
              <div className="space-y-3">
                {gamificationData.badges.map((badge, index) => (
                  <motion.div
                    key={badge.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, boxShadow: "0 8px 25px rgba(0,0,0,0.1)" }}
                    className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg cursor-pointer"
                    title={badge.description}
                  >
                    <div className="text-3xl">{badge.icon}</div>
                    <div>
                      <div className="font-semibold text-gray-800">{badge.name}</div>
                      <div className="text-sm text-gray-600">{badge.description}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-blue-600">{gamificationData.recentTasks}</div>
                <div className="text-sm text-gray-600">Tasks This Month</div>
              </div>
              <div className="bg-green-50 rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-green-600">{gamificationData.completionRate}%</div>
                <div className="text-sm text-gray-600">Completion Rate</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default VolunteerProfile;
