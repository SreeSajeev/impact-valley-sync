
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, ChevronRight, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Checkbox } from '@/components/ui/checkbox';
import VideoBackground from '@/components/VideoBackground';

const SignupPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isNGO, setIsNGO] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    orgName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    country: '',
    skills: [] as string[],
    availability: {} as Record<string, 'available' | 'maybe' | 'unavailable'>,
    preferences: {
      weekends: false,
      remote: false,
      evenings: false
    }
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const skillOptions = [
    'Teaching', 'Healthcare', 'Technology', 'Marketing', 'Finance', 
    'Legal', 'Design', 'Writing', 'Translation', 'Event Planning',
    'Social Media', 'Photography', 'Counseling', 'Research'
  ];

  const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

  const validateStep = (step: number) => {
    const newErrors: Record<string, string> = {};

    if (step === 1) {
      if (!formData.fullName) newErrors.fullName = 'Full name is required';
      if (!formData.email.includes('@')) newErrors.email = 'Valid email is required';
      if (!formData.phone) newErrors.phone = 'Phone number is required';
      if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
      if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, 3));
    }
  };

  const handleSkillToggle = (skill: string) => {
    setFormData(prev => ({
      ...prev,
      skills: prev.skills.includes(skill)
        ? prev.skills.filter(s => s !== skill)
        : [...prev.skills, skill]
    }));
  };

  const handleAvailabilityToggle = (day: string) => {
    const currentStatus = formData.availability[day];
    let newStatus: 'available' | 'maybe' | 'unavailable';
    
    if (!currentStatus || currentStatus === 'unavailable') {
      newStatus = 'available';
    } else if (currentStatus === 'available') {
      newStatus = 'maybe';
    } else {
      newStatus = 'unavailable';
    }

    setFormData(prev => ({
      ...prev,
      availability: { ...prev.availability, [day]: newStatus }
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSuccess(true);
    
    // Redirect after showing success
    setTimeout(() => {
      // Navigate to dashboard
    }, 2000);
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
    <div className="min-h-screen flex items-center justify-center p-4">
      <VideoBackground src="/assets/bg.mp4" />
      
      <motion.div className="w-full max-w-2xl bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3].map((step) => (
              <div
                key={step}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                  step <= currentStep
                    ? 'bg-blue-600 text-white'
                    : 'bg-gray-200 text-gray-500'
                }`}
              >
                {step < currentStep ? <Check size={16} /> : step}
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-blue-600 h-2 rounded-full"
              initial={{ width: '33%' }}
              animate={{ width: `${(currentStep / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Mode Toggle */}
        <div className="flex items-center justify-center space-x-4 mb-8">
          <span className={`text-sm font-medium ${!isNGO ? 'text-blue-600' : 'text-gray-500'}`}>
            Volunteer
          </span>
          <Switch
            checked={isNGO}
            onCheckedChange={setIsNGO}
            className="data-[state=checked]:bg-green-600"
          />
          <span className={`text-sm font-medium ${isNGO ? 'text-green-600' : 'text-gray-500'}`}>
            NGO
          </span>
        </div>

        {/* Step 1: Basic Info */}
        {currentStep === 1 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-center mb-6">
              {isNGO ? 'Organization Information' : 'Basic Information'}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="fullName">{isNGO ? 'Organization Name' : 'Full Name'}</Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="mt-1"
                />
                {errors.fullName && <p className="text-red-500 text-xs mt-1">{errors.fullName}</p>}
              </div>

              <div>
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="mt-1"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="mt-1"
                />
                {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
              </div>

              <div>
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  className="mt-1"
                />
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
              </div>

              <div className="md:col-span-2">
                <Label htmlFor="confirmPassword">Confirm Password</Label>
                <Input
                  id="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                  className="mt-1"
                />
                {errors.confirmPassword && <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>}
              </div>
            </div>
          </motion.div>
        )}

        {/* Step 2: Skills & Preferences (Volunteers) or Location (NGOs) */}
        {currentStep === 2 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {!isNGO ? (
              <>
                <h2 className="text-2xl font-bold text-center mb-6">Skills & Preferences</h2>
                
                {/* Skills Selection */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Select Your Skills</Label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                    {skillOptions.map((skill) => (
                      <motion.button
                        key={skill}
                        onClick={() => handleSkillToggle(skill)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-all ${
                          formData.skills.includes(skill)
                            ? 'bg-blue-600 text-white border-blue-600'
                            : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'
                        }`}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        {skill}
                        {formData.skills.includes(skill) && (
                          <Check className="inline ml-1" size={14} />
                        )}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Availability Calendar */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Weekly Availability</Label>
                  <div className="grid grid-cols-7 gap-2">
                    {weekDays.map((day) => (
                      <div key={day} className="text-center">
                        <div className="text-sm font-medium mb-2">{day}</div>
                        <button
                          onClick={() => handleAvailabilityToggle(day)}
                          className={`w-full h-12 rounded-lg border-2 transition-all hover:scale-105 ${getAvailabilityColor(formData.availability[day])}`}
                          title={`${day}: ${formData.availability[day] || 'unavailable'}`}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center space-x-4 mt-4 text-xs">
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <span>Available</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                      <span>Maybe</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-3 h-3 bg-red-500 rounded"></div>
                      <span>Unavailable</span>
                    </div>
                  </div>
                </div>

                {/* Preferences */}
                <div>
                  <Label className="text-lg font-semibold mb-4 block">Preferences</Label>
                  <div className="space-y-3">
                    {[
                      { key: 'weekends', label: 'Prefer working weekends' },
                      { key: 'remote', label: 'Comfortable with remote tasks' },
                      { key: 'evenings', label: 'Available for evening tasks' }
                    ].map((pref) => (
                      <div key={pref.key} className="flex items-center space-x-3">
                        <Checkbox
                          id={pref.key}
                          checked={formData.preferences[pref.key as keyof typeof formData.preferences]}
                          onCheckedChange={(checked) =>
                            setFormData({
                              ...formData,
                              preferences: { ...formData.preferences, [pref.key]: checked }
                            })
                          }
                        />
                        <Label htmlFor={pref.key}>{pref.label}</Label>
                      </div>
                    ))}
                  </div>
                </div>
              </>
            ) : (
              <>
                <h2 className="text-2xl font-bold text-center mb-6">Location Information</h2>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="address">Full Address</Label>
                    <Input
                      id="address"
                      value={formData.address}
                      onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                      className="mt-1"
                      placeholder="Enter full address"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="city">City</Label>
                      <Input
                        id="city"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="state">State</Label>
                      <Input
                        id="state"
                        value={formData.state}
                        onChange={(e) => setFormData({ ...formData, state: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="pincode">Pincode</Label>
                      <Input
                        id="pincode"
                        value={formData.pincode}
                        onChange={(e) => setFormData({ ...formData, pincode: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="country">Country</Label>
                      <Input
                        id="country"
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="mt-1"
                      />
                    </div>
                  </div>
                </div>
              </>
            )}
          </motion.div>
        )}

        {/* Step 3: Confirmation */}
        {currentStep === 3 && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            <h2 className="text-2xl font-bold text-center mb-6">Confirm & Submit</h2>
            
            <div className="bg-gray-50 rounded-lg p-6 space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800">Basic Information</h3>
                <p className="text-gray-600">{formData.fullName} • {formData.email}</p>
                <button
                  onClick={() => setCurrentStep(1)}
                  className="text-blue-600 text-sm hover:underline"
                >
                  Edit
                </button>
              </div>
              
              {!isNGO && (
                <div>
                  <h3 className="font-semibold text-gray-800">Skills</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {formData.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setCurrentStep(2)}
                    className="text-blue-600 text-sm hover:underline"
                  >
                    Edit
                  </button>
                </div>
              )}
            </div>
          </motion.div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-between mt-8">
          {currentStep > 1 && (
            <Button
              variant="outline"
              onClick={() => setCurrentStep(prev => prev - 1)}
              className="flex items-center space-x-2"
            >
              <span>Back</span>
            </Button>
          )}
          
          <div className="ml-auto">
            {currentStep < 3 ? (
              <Button
                onClick={handleNext}
                className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-700"
              >
                <span>Next</span>
                <ChevronRight size={16} />
              </Button>
            ) : (
              <Button
                onClick={handleSubmit}
                disabled={isSubmitting || isSuccess}
                className="flex items-center space-x-2 bg-green-600 hover:bg-green-700 min-w-[120px]"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                  />
                ) : isSuccess ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="w-4 h-4"
                  >
                    <Check size={16} />
                  </motion.div>
                ) : (
                  <span>Submit</span>
                )}
              </Button>
            )}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SignupPage;
