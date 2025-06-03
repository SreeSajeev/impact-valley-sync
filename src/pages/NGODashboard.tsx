
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Plus, Users, Target, Calendar, TrendingUp, Search, Filter, MoreHorizontal, CheckCircle, Clock, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import VideoBackground from '@/components/VideoBackground';
import Navigation from '@/components/Navigation';

const NGODashboard = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const stats = [
    { label: 'Active Tasks', value: 12, change: '+3', color: 'from-blue-500 to-blue-600', icon: Target },
    { label: 'Active Volunteers', value: 156, change: '+24', color: 'from-green-500 to-green-600', icon: Users },
    { label: 'Completed Tasks', value: 47, change: '+8', color: 'from-purple-500 to-purple-600', icon: CheckCircle },
    { label: 'This Month', value: 89, change: '+12%', color: 'from-orange-500 to-orange-600', icon: Calendar }
  ];

  const recentTasks = [
    {
      id: 1,
      title: "Beach Cleanup Drive",
      volunteers: 15,
      maxVolunteers: 20,
      status: "active",
      deadline: "2024-01-15",
      priority: "high",
      applications: 8
    },
    {
      id: 2,
      title: "Teaching Mathematics",
      volunteers: 8,
      maxVolunteers: 10,
      status: "recruiting",
      deadline: "2024-01-20",
      priority: "medium",
      applications: 12
    },
    {
      id: 3,
      title: "Food Distribution",
      volunteers: 15,
      maxVolunteers: 15,
      status: "completed",
      deadline: "2024-01-10",
      priority: "high",
      applications: 0
    }
  ];

  const skillData = [
    { skill: 'Environmental', volunteers: 45, tasks: 8 },
    { skill: 'Teaching', volunteers: 32, tasks: 6 },
    { skill: 'Healthcare', volunteers: 28, tasks: 4 },
    { skill: 'Community Service', volunteers: 51, tasks: 9 }
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'recruiting': return 'bg-yellow-500';
      case 'completed': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'high': return 'text-red-400';
      case 'medium': return 'text-yellow-400';
      case 'low': return 'text-green-400';
      default: return 'text-gray-400';
    }
  };

  return (
    <div className="min-h-screen relative">
      <VideoBackground src="/assets/bg.mp4" />
      <Navigation />
      
      <div className="container mx-auto px-4 py-8 mt-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center justify-between mb-8"
        >
          <div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-white to-green-100 bg-clip-text text-transparent mb-2">
              NGO Dashboard
            </h1>
            <p className="text-white/70">Manage your organization and volunteers</p>
          </div>
          
          <motion.div
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59, 130, 246, 0.3)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Button className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg">
              <Plus size={20} className="mr-2" />
              Create New Task
            </Button>
          </motion.div>
        </motion.div>

        {/* Stats Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 group"
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-xl flex items-center justify-center`}
                >
                  <stat.icon className="text-white" size={24} />
                </motion.div>
                <span className="text-green-400 text-sm font-medium">{stat.change}</span>
              </div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                className="text-3xl font-bold text-white mb-1"
              >
                {stat.value}
              </motion.div>
              <p className="text-white/70 text-sm">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Recent Assignments */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-2"
          >
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 overflow-hidden">
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold text-white">Recent Tasks</h3>
                  <div className="flex items-center space-x-2">
                    <div className="relative">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" size={16} />
                      <Input
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search tasks..."
                        className="pl-9 w-64 bg-white/10 border-white/20 text-white placeholder:text-white/30"
                      />
                    </div>
                    <Button variant="outline" size="sm" className="border-white/20 text-white/80 hover:bg-white/10">
                      <Filter size={16} />
                    </Button>
                  </div>
                </div>
              </div>
              
              <div className="divide-y divide-white/10">
                {recentTasks.map((task, index) => (
                  <motion.div
                    key={task.id}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
                    className="p-6 transition-all duration-300 group"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">
                            {task.title}
                          </h4>
                          <Badge className={`${getStatusColor(task.status)} text-white text-xs`}>
                            {task.status}
                          </Badge>
                          <span className={`text-xs ${getPriorityColor(task.priority)}`}>
                            {task.priority} priority
                          </span>
                        </div>
                        
                        <div className="flex items-center space-x-6 text-sm text-white/60">
                          <span className="flex items-center">
                            <Users size={14} className="mr-1" />
                            {task.volunteers}/{task.maxVolunteers} volunteers
                          </span>
                          <span className="flex items-center">
                            <Calendar size={14} className="mr-1" />
                            {task.deadline}
                          </span>
                          {task.applications > 0 && (
                            <span className="flex items-center text-blue-400">
                              <AlertCircle size={14} className="mr-1" />
                              {task.applications} new applications
                            </span>
                          )}
                        </div>
                        
                        <div className="mt-3">
                          <Progress 
                            value={(task.volunteers / task.maxVolunteers) * 100} 
                            className="h-2" 
                          />
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2 ml-4">
                        <Button variant="outline" size="sm" className="border-white/20 text-white/80 hover:bg-white/10">
                          View
                        </Button>
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 text-white/60 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                        >
                          <MoreHorizontal size={16} />
                        </motion.button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Analytics & Skill Distribution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
            className="space-y-6"
          >
            {/* Quick Actions */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {[
                  { label: 'View Applications', count: 12, color: 'bg-blue-500' },
                  { label: 'Pending Reviews', count: 5, color: 'bg-yellow-500' },
                  { label: 'Messages', count: 8, color: 'bg-green-500' }
                ].map((action, index) => (
                  <motion.button
                    key={action.label}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="w-full flex items-center justify-between p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all duration-300"
                  >
                    <span className="text-white/80">{action.label}</span>
                    <div className="flex items-center space-x-2">
                      <span className={`${action.color} text-white text-xs px-2 py-1 rounded-full`}>
                        {action.count}
                      </span>
                      <span className="text-white/60">→</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Skill Distribution */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4 flex items-center">
                <TrendingUp className="mr-2" size={20} />
                Volunteer Skills
              </h3>
              <div className="space-y-4">
                {skillData.map((item, index) => (
                  <motion.div
                    key={item.skill}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="group"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white/80 font-medium">{item.skill}</span>
                      <span className="text-white/60 text-sm">{item.volunteers} volunteers</span>
                    </div>
                    <div className="relative">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${(item.volunteers / 60) * 100}%` }}
                        transition={{ delay: 1 + index * 0.1, duration: 1 }}
                        className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full"
                      />
                      <div className="absolute top-0 left-0 w-full h-2 bg-white/10 rounded-full -z-10" />
                    </div>
                    <p className="text-xs text-white/50 mt-1">{item.tasks} active tasks</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Monthly Progress */}
            <div className="bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20">
              <h3 className="text-lg font-semibold text-white mb-4">Monthly Progress</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm text-white/80 mb-1">
                    <span>Tasks Completed</span>
                    <span>12/15</span>
                  </div>
                  <Progress value={80} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white/80 mb-1">
                    <span>Volunteer Goal</span>
                    <span>156/200</span>
                  </div>
                  <Progress value={78} className="h-2" />
                </div>
                <div>
                  <div className="flex justify-between text-sm text-white/80 mb-1">
                    <span>Impact Score</span>
                    <span>9.2/10</span>
                  </div>
                  <Progress value={92} className="h-2" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default NGODashboard;
