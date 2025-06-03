
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Check, User, Mail, Phone, Lock, Building, MapPin, Calendar, Plus, X, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import VideoBackground from '@/components/VideoBackground';

const SignupPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isNGO, setIsNGO] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const [volunteerData, setVolunteerData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    skills: [],
    availability: {},
    preferences: {
      weekends: false,
      remote: false,
      evening: false
    }
  });

  const [ngoData, setNgoData] = useState({
    orgName: '',
    email: '',
    phone: '',
    password: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: ''
  });

  const [selectedSkills, setSelectedSkills] = useState([]);
  const [skillSearchTerm, setSkillSearchTerm] = useState('');
  const [showSkillDropdown, setShowSkillDropdown] = useState(false);

  const availableSkills = [
    'Teaching', 'Healthcare', 'Technology', 'Environment', 'Community Service',
    'Fundraising', 'Event Planning', 'Marketing', 'Design', 'Writing',
    'Photography', 'Translation', 'Legal Aid', 'Counseling', 'Construction'
  ];

  const filteredSkills = availableSkills.filter(skill => 
    skill.toLowerCase().includes(skillSearchTerm.toLowerCase()) &&
    !selectedSkills.includes(skill)
  );

  const addSkill = (skill) => {
    setSelectedSkills([...selectedSkills, skill]);
    setSkillSearchTerm('');
    setShowSkillDropdown(false);
  };

  const removeSkill = (skillToRemove) => {
    setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setShowSuccess(true);
    
    // Redirect after success animation
    setTimeout(() => {
      // Navigate to dashboard
    }, 2000);
  };

  const progressPercentage = (currentStep / 3) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <VideoBackground src="/assets/bg.mp4" />
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-3 h-3 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -50, 0],
              rotate: [0, 360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${5 + i * 12}%`,
              top: `${10 + i * 8}%`,
            }}
          />
        ))}
      </div>

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

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-2"
          >
            Join the Community
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-white/70"
          >
            Start making a difference today
          </motion.p>
        </div>

        {/* Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3 }}
          className="flex items-center justify-center space-x-4 mb-8 p-4 bg-white/5 rounded-2xl border border-white/10"
        >
          <span className={`text-sm font-medium transition-colors duration-300 ${!isNGO ? 'text-blue-300' : 'text-white/50'}`}>
            Volunteer
          </span>
          <Switch
            checked={isNGO}
            onCheckedChange={setIsNGO}
            className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-green-400 data-[state=checked]:to-emerald-500"
          />
          <span className={`text-sm font-medium transition-colors duration-300 ${isNGO ? 'text-green-300' : 'text-white/50'}`}>
            NGO
          </span>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-8"
        >
          <div className="flex justify-between text-sm text-white/70 mb-2">
            <span className={currentStep >= 1 ? 'text-blue-300' : ''}>Basic Info</span>
            <span className={currentStep >= 2 ? 'text-blue-300' : ''}>{isNGO ? 'Organization' : 'Skills'}</span>
            <span className={currentStep >= 3 ? 'text-blue-300' : ''}>Confirm</span>
          </div>
          <Progress value={progressPercentage} className="h-2 bg-white/10" />
        </motion.div>

        {/* Form Steps */}
        <AnimatePresence mode="wait">
          {currentStep === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <Label className="text-white/80 mb-2 block">
                    <User size={16} className="inline mr-2" />
                    {isNGO ? 'Organization Name' : 'Full Name'}
                  </Label>
                  <Input
                    value={isNGO ? ngoData.orgName : volunteerData.fullName}
                    onChange={(e) => isNGO 
                      ? setNgoData({...ngoData, orgName: e.target.value})
                      : setVolunteerData({...volunteerData, fullName: e.target.value})
                    }
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                    placeholder={isNGO ? "Enter organization name" : "Enter your full name"}
                  />
                </div>
                <div className="relative">
                  <Label className="text-white/80 mb-2 block">
                    <Mail size={16} className="inline mr-2" />
                    Email
                  </Label>
                  <Input
                    type="email"
                    value={isNGO ? ngoData.email : volunteerData.email}
                    onChange={(e) => isNGO 
                      ? setNgoData({...ngoData, email: e.target.value})
                      : setVolunteerData({...volunteerData, email: e.target.value})
                    }
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                    placeholder="Enter email address"
                  />
                </div>
                <div className="relative">
                  <Label className="text-white/80 mb-2 block">
                    <Phone size={16} className="inline mr-2" />
                    Phone
                  </Label>
                  <Input
                    value={isNGO ? ngoData.phone : volunteerData.phone}
                    onChange={(e) => isNGO 
                      ? setNgoData({...ngoData, phone: e.target.value})
                      : setVolunteerData({...volunteerData, phone: e.target.value})
                    }
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                    placeholder="Enter phone number"
                  />
                </div>
                <div className="relative">
                  <Label className="text-white/80 mb-2 block">
                    <Lock size={16} className="inline mr-2" />
                    Password
                  </Label>
                  <Input
                    type="password"
                    value={isNGO ? ngoData.password : volunteerData.password}
                    onChange={(e) => isNGO 
                      ? setNgoData({...ngoData, password: e.target.value})
                      : setVolunteerData({...volunteerData, password: e.target.value})
                    }
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                    placeholder="Create password"
                  />
                </div>
                {!isNGO && (
                  <div className="relative md:col-span-2">
                    <Label className="text-white/80 mb-2 block">
                      <Lock size={16} className="inline mr-2" />
                      Confirm Password
                    </Label>
                    <Input
                      type="password"
                      value={volunteerData.confirmPassword}
                      onChange={(e) => setVolunteerData({...volunteerData, confirmPassword: e.target.value})}
                      className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                      placeholder="Confirm password"
                    />
                  </div>
                )}
              </div>
            </motion.div>
          )}

          {currentStep === 2 && !isNGO && (
            <motion.div
              key="step2-volunteer"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              {/* Skills Section */}
              <div>
                <Label className="text-white/80 mb-4 block text-lg">Select Your Skills</Label>
                <div className="relative">
                  <div className="flex items-center space-x-2 mb-4">
                    <div className="relative flex-1">
                      <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                      <Input
                        value={skillSearchTerm}
                        onChange={(e) => {
                          setSkillSearchTerm(e.target.value);
                          setShowSkillDropdown(true);
                        }}
                        onFocus={() => setShowSkillDropdown(true)}
                        className="pl-10 bg-white/10 border-white/20 text-white placeholder:text-white/30"
                        placeholder="Search skills..."
                      />
                      {showSkillDropdown && filteredSkills.length > 0 && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="absolute z-10 w-full mt-1 bg-white/10 backdrop-blur-xl border border-white/20 rounded-lg shadow-xl max-h-48 overflow-y-auto"
                        >
                          {filteredSkills.map((skill) => (
                            <motion.button
                              key={skill}
                              whileHover={{ backgroundColor: 'rgba(255,255,255,0.1)' }}
                              onClick={() => addSkill(skill)}
                              className="w-full text-left px-4 py-2 text-white/80 hover:text-white transition-colors"
                            >
                              {skill}
                            </motion.button>
                          ))}
                        </motion.div>
                      )}
                    </div>
                  </div>
                  
                  {/* Selected Skills */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    <AnimatePresence>
                      {selectedSkills.map((skill) => (
                        <motion.div
                          key={skill}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          exit={{ opacity: 0, scale: 0.8 }}
                          className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm flex items-center space-x-2"
                        >
                          <span>{skill}</span>
                          <motion.button
                            whileHover={{ scale: 1.2 }}
                            onClick={() => removeSkill(skill)}
                            className="text-white/80 hover:text-white"
                          >
                            <X size={14} />
                          </motion.button>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              {/* Preferences */}
              <div>
                <Label className="text-white/80 mb-4 block text-lg">Preferences</Label>
                <div className="space-y-4">
                  {[
                    { key: 'weekends', label: 'Available on weekends', icon: Calendar },
                    { key: 'remote', label: 'Comfortable with remote tasks', icon: User },
                    { key: 'evening', label: 'Prefer evening activities', icon: Calendar }
                  ].map((pref) => (
                    <motion.div
                      key={pref.key}
                      whileHover={{ scale: 1.02 }}
                      className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10"
                    >
                      <div className="flex items-center space-x-3">
                        <pref.icon size={20} className="text-blue-300" />
                        <span className="text-white/80">{pref.label}</span>
                      </div>
                      <Switch
                        checked={volunteerData.preferences[pref.key]}
                        onCheckedChange={(checked) => 
                          setVolunteerData({
                            ...volunteerData,
                            preferences: { ...volunteerData.preferences, [pref.key]: checked }
                          })
                        }
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 2 && isNGO && (
            <motion.div
              key="step2-ngo"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <Label className="text-white/80 mb-2 block">
                    <MapPin size={16} className="inline mr-2" />
                    Full Address
                  </Label>
                  <Input
                    value={ngoData.address}
                    onChange={(e) => setNgoData({...ngoData, address: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                    placeholder="Enter complete address"
                  />
                </div>
                <div>
                  <Label className="text-white/80 mb-2 block">City</Label>
                  <Input
                    value={ngoData.city}
                    onChange={(e) => setNgoData({...ngoData, city: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                    placeholder="City"
                  />
                </div>
                <div>
                  <Label className="text-white/80 mb-2 block">State</Label>
                  <Input
                    value={ngoData.state}
                    onChange={(e) => setNgoData({...ngoData, state: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                    placeholder="State"
                  />
                </div>
                <div>
                  <Label className="text-white/80 mb-2 block">Pincode</Label>
                  <Input
                    value={ngoData.pincode}
                    onChange={(e) => setNgoData({...ngoData, pincode: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                    placeholder="Pincode"
                  />
                </div>
                <div>
                  <Label className="text-white/80 mb-2 block">Country</Label>
                  <Input
                    value={ngoData.country}
                    onChange={(e) => setNgoData({...ngoData, country: e.target.value})}
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/30"
                    placeholder="Country"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {currentStep === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="space-y-6"
            >
              <div className="text-center">
                <h3 className="text-xl font-semibold text-white mb-4">Review Your Information</h3>
                <div className="bg-white/5 rounded-xl p-6 text-left">
                  {isNGO ? (
                    <div className="space-y-2 text-white/80">
                      <p><strong>Organization:</strong> {ngoData.orgName}</p>
                      <p><strong>Email:</strong> {ngoData.email}</p>
                      <p><strong>Phone:</strong> {ngoData.phone}</p>
                      <p><strong>Address:</strong> {ngoData.address}</p>
                    </div>
                  ) : (
                    <div className="space-y-2 text-white/80">
                      <p><strong>Name:</strong> {volunteerData.fullName}</p>
                      <p><strong>Email:</strong> {volunteerData.email}</p>
                      <p><strong>Phone:</strong> {volunteerData.phone}</p>
                      <p><strong>Skills:</strong> {selectedSkills.join(', ')}</p>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <Button
              onClick={() => setCurrentStep(currentStep - 1)}
              variant="outline"
              className="border-white/20 text-white/80 hover:bg-white/10"
            >
              <ArrowLeft size={16} className="mr-2" />
              Previous
            </Button>
          )}
          
          <div className="flex-1" />
          
          {currentStep < 3 ? (
            <Button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
            >
              Next
              <ArrowRight size={16} className="ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              disabled={isSubmitting}
              className="bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600"
            >
              {isSubmitting ? (
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                  className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                />
              ) : showSuccess ? (
                <Check size={16} />
              ) : (
                'Complete Registration'
              )}
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
