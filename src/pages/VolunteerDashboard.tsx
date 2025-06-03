
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, Bell, Clock, Target, MapPin, Users, ArrowRight, Calendar, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import VideoBackground from '@/components/VideoBackground';
import Navigation from '@/components/Navigation';

const VolunteerDashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [notifications, setNotifications] = useState(3);

  const tasks = [
    {
      id: 1,
      title: "Beach Cleanup Drive",
      ngo: "Ocean Warriors",
      location: "Santa Monica Beach",
      skills: ["Environmental", "Community Service"],
      deadline: "2024-01-15",
      matchPercentage: 95,
      participants: 15,
      maxParticipants: 20,
      timeCommitment: "4 hours",
      points: 50,
      description: "Join us for a comprehensive beach cleanup to protect marine life.",
      urgency: "high"
    },
    {
      id: 2,
      title: "Teaching Mathematics to Kids",
      ngo: "Education First",
      location: "Community Center",
      skills: ["Teaching", "Mathematics"],
      deadline: "2024-01-20",
      matchPercentage: 88,
      participants: 8,
      maxParticipants: 10,
      timeCommitment: "2 hours",
      points: 75,
      description: "Help underprivileged children improve their math skills.",
      urgency: "medium"
    },
    {
      id: 3,
      title: "Food Distribution Event",
      ngo: "Helping Hands",
      location: "Downtown Center",
      skills: ["Community Service", "Event Planning"],
      deadline: "2024-01-12",
      matchPercentage: 92,
      participants: 12,
      maxParticipants: 15,
      timeCommitment: "3 hours",
      points: 40,
      description: "Distribute meals to families in need.",
      urgency: "high"
    }
  ];

  const getTimeLeft = (deadline: string) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate.getTime() - now.getTime();
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays <= 0) return "Expired";
    if (diffDays === 1) return "1 day left";
    return `${diffDays} days left`;
  };

  const getUrgencyColor = (urgency: string) => {
    switch (urgency) {
      case 'high': return 'from-red-500 to-pink-500';
      case 'medium': return 'from-yellow-500 to-orange-500';
      default: return 'from-green-500 to-emerald-500';
    }
  };

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.ngo.toLowerCase().includes(searchTerm.toLowerCase()) ||
    task.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  return (
    <div className="min-h-screen relative">
      <VideoBackground src="/assets/bg.mp4" />
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-2">
              Your Dashboard
            </h1>
            <p className="text-white/70">Discover opportunities to make a difference</p>
          </div>
          
          {/* Gamification Mini Dashboard */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 flex items-center space-x-4"
          >
            <div className="text-center">
              <motion.div
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-2xl font-bold text-yellow-400"
              >
                2,450
              </motion.div>
              <div className="text-xs text-white/60">Points</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-400">#12</div>
              <div className="text-xs text-white/60">Rank</div>
            </div>
            <motion.div
              whileHover={{ scale: 1.2 }}
              className="relative"
            >
              <Bell className="text-white/80" size={24} />
              {notifications > 0 && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center"
                >
                  {notifications}
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="sticky top-20 z-10 bg-white/10 backdrop-blur-xl rounded-2xl p-4 border border-white/20 mb-8"
        >
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={20} />
              <Input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search tasks, NGOs, or skills..."
                className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/30"
              />
            </div>
            
            <div className="flex items-center space-x-2">
              {['all', 'urgent', 'nearby', 'skills'].map((filter) => (
                <motion.button
                  key={filter}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedFilter(filter)}
                  className={`px-4 py-2 rounded-lg capitalize transition-all duration-300 ${
                    selectedFilter === filter
                      ? 'bg-blue-500 text-white'
                      : 'bg-white/10 text-white/80 hover:bg-white/20'
                  }`}
                >
                  {filter}
                </motion.button>
              ))}
            </div>
            
            <Button variant="outline" className="border-white/20 text-white/80 hover:bg-white/10">
              <Filter size={16} className="mr-2" />
              More Filters
            </Button>
          </div>
        </motion.div>

        {/* Tasks Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredTasks.map((task, index) => (
              <motion.div
                key={task.id}
                layout
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 group"
              >
                {/* Task Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                      {task.title}
                    </h3>
                    <p className="text-sm text-white/60 mb-2">by {task.ngo}</p>
                    <div className="flex items-center text-white/50 text-xs space-x-3">
                      <span className="flex items-center">
                        <MapPin size={12} className="mr-1" />
                        {task.location}
                      </span>
                      <span className="flex items-center">
                        <Clock size={12} className="mr-1" />
                        {task.timeCommitment}
                      </span>
                    </div>
                  </div>
                  
                  {/* Urgency Indicator */}
                  <motion.div
                    animate={{ scale: task.urgency === 'high' ? [1, 1.1, 1] : 1 }}
                    transition={{ duration: 2, repeat: task.urgency === 'high' ? Infinity : 0 }}
                    className={`w-3 h-3 rounded-full bg-gradient-to-r ${getUrgencyColor(task.urgency)}`}
                  />
                </div>

                {/* Match Percentage */}
                <div className="mb-4">
                  <div className="flex items-center justify-between text-sm mb-2">
                    <span className="text-white/80">Match Score</span>
                    <span className="font-semibold text-green-400">{task.matchPercentage}%</span>
                  </div>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${task.matchPercentage}%` }}
                    transition={{ delay: 0.5 + index * 0.1, duration: 1 }}
                    className="h-2 bg-gradient-to-r from-green-400 to-blue-500 rounded-full relative overflow-hidden"
                  >
                    <motion.div
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                    />
                  </motion.div>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {task.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="bg-blue-500/20 text-blue-300 text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <p className="text-white/70 text-sm mb-4 line-clamp-2">
                  {task.description}
                </p>

                {/* Participants & Deadline */}
                <div className="flex items-center justify-between text-sm text-white/60 mb-4">
                  <span className="flex items-center">
                    <Users size={14} className="mr-1" />
                    {task.participants}/{task.maxParticipants} volunteers
                  </span>
                  <span className="flex items-center">
                    <Calendar size={14} className="mr-1" />
                    {getTimeLeft(task.deadline)}
                  </span>
                </div>

                {/* Points Reward */}
                <div className="flex items-center justify-between text-sm mb-4">
                  <span className="flex items-center text-yellow-400">
                    <Star size={14} className="mr-1" />
                    {task.points} points
                  </span>
                  <Progress value={(task.participants / task.maxParticipants) * 100} className="w-20 h-2" />
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <span>Accept</span>
                    <ArrowRight size={16} />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 hover:bg-white/20 text-white/80 py-2 px-4 rounded-lg font-medium transition-all duration-300"
                  >
                    Details
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-8"
        >
          <Button
            variant="outline"
            className="border-white/20 text-white/80 hover:bg-white/10"
          >
            Load More Tasks
          </Button>
        </motion.div>
      </div>
    </div>
  );
};

export default VolunteerDashboard;
