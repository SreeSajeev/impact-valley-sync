
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Edit, MapPin, Phone, Mail, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import VideoBackground from '@/components/VideoBackground';

const NGOProfile = () => {
  const [expandedSections, setExpandedSections] = useState({
    orgInfo: true,
    taskSummary: true,
    settings: false
  });

  const [orgData, setOrgData] = useState({
    name: 'Green Earth Foundation',
    description: 'Working towards environmental conservation and sustainability',
    email: 'contact@greenearth.org',
    phone: '+1 555 123 4567',
    website: 'www.greenearth.org',
    address: '123 Eco Street, Green City, CA 90210',
    emailNotifications: true,
    showOnHomepage: true
  });

  const taskStats = {
    ongoing: 12,
    pending: 8,
    completed: 47,
    totalVolunteers: 156
  };

  const engagementData = [
    { month: 'Jan', volunteers: 120 },
    { month: 'Feb', volunteers: 135 },
    { month: 'Mar', volunteers: 142 },
    { month: 'Apr', volunteers: 156 },
    { month: 'May', volunteers: 148 },
    { month: 'Jun', volunteers: 156 }
  ];

  const toggleSection = (section: keyof typeof expandedSections) => {
    setExpandedSections(prev => ({
      ...prev,
      [section]: !prev[section]
    }));
  };

  const handleInputChange = (field: string, value: any) => {
    setOrgData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen p-4">
      <VideoBackground src="/assets/bg.mp4" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8"
        >
          <h1 className="text-3xl font-bold text-gray-800 mb-8">Organization Profile</h1>

          {/* Organization Info Section */}
          <Card className="mb-6">
            <CardHeader
              className="cursor-pointer"
              onClick={() => toggleSection('orgInfo')}
            >
              <CardTitle className="flex items-center justify-between">
                <span>Organization Information</span>
                {expandedSections.orgInfo ? <ChevronUp /> : <ChevronDown />}
              </CardTitle>
            </CardHeader>
            {expandedSections.orgInfo && (
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="orgName">Organization Name</Label>
                    <Input
                      id="orgName"
                      value={orgData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <Input
                        id="email"
                        value={orgData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-1 pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone</Label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <Input
                        id="phone"
                        value={orgData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-1 pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="website">Website</Label>
                    <div className="relative">
                      <Globe className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                      <Input
                        id="website"
                        value={orgData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="mt-1 pl-10"
                      />
                    </div>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="description">Description</Label>
                  <textarea
                    id="description"
                    value={orgData.description}
                    onChange={(e) => handleInputChange('description', e.target.value)}
                    className="mt-1 w-full p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    rows={3}
                  />
                </div>

                <div>
                  <Label htmlFor="address">Address</Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 text-gray-400" size={16} />
                    <textarea
                      id="address"
                      value={orgData.address}
                      onChange={(e) => handleInputChange('address', e.target.value)}
                      className="mt-1 w-full p-3 pl-10 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      rows={2}
                    />
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Task Summary Section */}
          <Card className="mb-6">
            <CardHeader
              className="cursor-pointer"
              onClick={() => toggleSection('taskSummary')}
            >
              <CardTitle className="flex items-center justify-between">
                <span>Task Summary</span>
                {expandedSections.taskSummary ? <ChevronUp /> : <ChevronDown />}
              </CardTitle>
            </CardHeader>
            {expandedSections.taskSummary && (
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-blue-50 border-l-4 border-blue-500 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-blue-600">{taskStats.ongoing}</div>
                    <div className="text-sm text-gray-600">Ongoing</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-yellow-50 border-l-4 border-yellow-500 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-yellow-600">{taskStats.pending}</div>
                    <div className="text-sm text-gray-600">Pending</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-green-50 border-l-4 border-green-500 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-green-600">{taskStats.completed}</div>
                    <div className="text-sm text-gray-600">Completed</div>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-purple-50 border-l-4 border-purple-500 rounded-lg p-4 text-center"
                  >
                    <div className="text-2xl font-bold text-purple-600">{taskStats.totalVolunteers}</div>
                    <div className="text-sm text-gray-600">Volunteers</div>
                  </motion.div>
                </div>

                {/* Analytics Charts */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Volunteer Engagement Chart */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Volunteer Engagement</h3>
                    <div className="space-y-3">
                      {engagementData.map((data, index) => (
                        <div key={data.month} className="flex items-center justify-between">
                          <span className="text-sm font-medium">{data.month}</span>
                          <div className="flex-1 mx-4">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${(data.volunteers / 200) * 100}%` }}
                              transition={{ delay: index * 0.1, duration: 0.5 }}
                              className="h-2 bg-gradient-to-r from-blue-400 to-purple-600 rounded-full"
                            />
                          </div>
                          <span className="text-sm text-gray-600">{data.volunteers}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Task Completion Chart */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <h3 className="text-lg font-semibold mb-4">Task Completion by Week</h3>
                    <div className="flex items-end justify-between h-32 space-x-2">
                      {[8, 12, 6, 15, 9, 11, 14].map((height, index) => (
                        <motion.div
                          key={index}
                          initial={{ height: 0 }}
                          animate={{ height: `${(height / 15) * 100}%` }}
                          transition={{ delay: index * 0.1, duration: 0.5 }}
                          className="bg-gradient-to-t from-green-400 to-green-600 rounded-t flex-1 min-h-[8px]"
                        />
                      ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs text-gray-500">
                      {['W1', 'W2', 'W3', 'W4', 'W5', 'W6', 'W7'].map((week) => (
                        <span key={week}>{week}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Settings Section */}
          <Card className="mb-6">
            <CardHeader
              className="cursor-pointer"
              onClick={() => toggleSection('settings')}
            >
              <CardTitle className="flex items-center justify-between">
                <span>Settings</span>
                {expandedSections.settings ? <ChevronUp /> : <ChevronDown />}
              </CardTitle>
            </CardHeader>
            {expandedSections.settings && (
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">Email Notifications</div>
                      <div className="text-sm text-gray-600">Receive updates about volunteer applications and task completions</div>
                    </div>
                    <Switch
                      checked={orgData.emailNotifications}
                      onCheckedChange={(checked) => handleInputChange('emailNotifications', checked)}
                    />
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <div className="font-medium">Show on Homepage</div>
                      <div className="text-sm text-gray-600">Display your organization in the public directory</div>
                    </div>
                    <Switch
                      checked={orgData.showOnHomepage}
                      onCheckedChange={(checked) => handleInputChange('showOnHomepage', checked)}
                    />
                  </div>
                </div>
              </CardContent>
            )}
          </Card>

          {/* Save Button */}
          <div className="flex justify-end">
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2">
              Save Changes
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NGOProfile;
