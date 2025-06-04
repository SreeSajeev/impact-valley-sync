
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, User, Mail, Phone, Lock, Building, MapPin, Search, Star, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Progress } from '@/components/ui/progress';
import MysticalBackground from '@/components/MysticalBackground';
import EnchantedFormField from '@/components/EnchantedFormField';
import MagicalGate from '@/components/MagicalGate';
import EnchantedButton from '@/components/EnchantedButton';

const SignupPage = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isNGO, setIsNGO] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);

  const [volunteerData, setVolunteerData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    skills: [],
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

  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [skillSearchTerm, setSkillSearchTerm] = useState('');

  const availableSkills = [
    'Teaching', 'Healthcare', 'Technology', 'Environment', 'Community Service',
    'Fundraising', 'Event Planning', 'Marketing', 'Design', 'Writing',
    'Photography', 'Translation', 'Legal Aid', 'Counseling', 'Construction'
  ];

  const filteredSkills = availableSkills.filter(skill => 
    skill.toLowerCase().includes(skillSearchTerm.toLowerCase()) &&
    !selectedSkills.includes(skill)
  );

  const addSkill = (skill: string) => {
    setSelectedSkills([...selectedSkills, skill]);
    setSkillSearchTerm('');
  };

  const removeSkill = (skillToRemove: string) => {
    setSelectedSkills(selectedSkills.filter(skill => skill !== skillToRemove));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setShowSuccess(true);
    setTimeout(() => {
      // Navigate to dashboard
    }, 2000);
  };

  const progressPercentage = (currentStep / 3) * 100;

  return (
    <MysticalBackground variant="gate">
      {/* Back Portal */}
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

      <div className="flex items-center justify-center min-h-screen p-4">
        <div className="w-full max-w-4xl">
          {/* Gate of Fellowship Header */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <motion.h1
              className="text-6xl font-fantasy font-bold bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-300 bg-clip-text text-transparent mb-4"
              animate={{
                textShadow: [
                  '0 0 20px rgba(251, 191, 36, 0.5)',
                  '0 0 40px rgba(251, 191, 36, 0.8)',
                  '0 0 20px rgba(251, 191, 36, 0.5)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              The Gate of Fellowship
            </motion.h1>
            <motion.p
              className="text-xl text-mystical-200 font-medieval max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Pledge your heart to the Realm of Kindness and embark upon a journey of noble purpose
            </motion.p>
          </motion.div>

          {/* Mystical Mode Toggle */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="flex items-center justify-center space-x-6 mb-12"
          >
            <motion.div
              className="bg-mystical-800/50 backdrop-blur-xl rounded-full p-6 border border-amber-400/30"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-4">
                <motion.span
                  className={`text-lg font-medieval transition-colors duration-300 ${
                    !isNGO ? 'text-amber-400' : 'text-mystical-300'
                  }`}
                  animate={{ scale: !isNGO ? 1.1 : 1 }}
                >
                  🧙‍♂️ Seeker of Good
                </motion.span>
                <Switch
                  checked={isNGO}
                  onCheckedChange={setIsNGO}
                  className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-amber-400 data-[state=checked]:to-yellow-500"
                />
                <motion.span
                  className={`text-lg font-medieval transition-colors duration-300 ${
                    isNGO ? 'text-amber-400' : 'text-mystical-300'
                  }`}
                  animate={{ scale: isNGO ? 1.1 : 1 }}
                >
                  🏰 Guild Master
                </motion.span>
              </div>
            </motion.div>
          </motion.div>

          {/* The Magical Gate */}
          <MagicalGate isOpen={gateOpen} onToggle={() => setGateOpen(!gateOpen)}>
            {gateOpen && (
              <motion.div
                className="bg-mystical-900/80 backdrop-blur-xl rounded-3xl p-8 border border-amber-400/30 shadow-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                {/* Enchanted Progress Runes */}
                <div className="mb-8">
                  <div className="flex justify-between text-sm text-mystical-300 mb-2 font-medieval">
                    <span className={currentStep >= 1 ? 'text-amber-400' : ''}>⟐ Sacred Oath</span>
                    <span className={currentStep >= 2 ? 'text-amber-400' : ''}>{isNGO ? '⟑ Guild Charter' : '⟑ Skills Awakening'}</span>
                    <span className={currentStep >= 3 ? 'text-amber-400' : ''}>⟒ Fellowship Seal</span>
                  </div>
                  <Progress value={progressPercentage} className="h-3 bg-mystical-800/50" />
                </div>

                {/* Form Steps with Magical Transitions */}
                <AnimatePresence mode="wait">
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="space-y-6"
                    >
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-fantasy text-amber-400 mb-2">Sacred Oath of {isNGO ? 'Guild Mastery' : 'Service'}</h3>
                        <p className="text-mystical-300 font-medieval">Inscribe your essence upon the mystical scrolls</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <EnchantedFormField
                          label={isNGO ? "Guild Name" : "Your True Name"}
                          value={isNGO ? ngoData.orgName : volunteerData.fullName}
                          onChange={(value) => isNGO 
                            ? setNgoData({...ngoData, orgName: value})
                            : setVolunteerData({...volunteerData, fullName: value})
                          }
                          placeholder={isNGO ? "Enter your guild's sacred name" : "Your name as known in the realm"}
                          icon={isNGO ? <Building size={16} /> : <User size={16} />}
                          required
                        />
                        
                        <EnchantedFormField
                          label="Ethereal Message Scroll"
                          type="email"
                          value={isNGO ? ngoData.email : volunteerData.email}
                          onChange={(value) => isNGO 
                            ? setNgoData({...ngoData, email: value})
                            : setVolunteerData({...volunteerData, email: value})
                          }
                          placeholder="your.mystical@realm.com"
                          icon={<Mail size={16} />}
                          required
                        />
                        
                        <EnchantedFormField
                          label="Crystal Communication Stone"
                          value={isNGO ? ngoData.phone : volunteerData.phone}
                          onChange={(value) => isNGO 
                            ? setNgoData({...ngoData, phone: value})
                            : setVolunteerData({...volunteerData, phone: value})
                          }
                          placeholder="+1 (555) 123-4567"
                          icon={<Phone size={16} />}
                          required
                        />
                        
                        <EnchantedFormField
                          label="Secret Incantation"
                          type="password"
                          value={isNGO ? ngoData.password : volunteerData.password}
                          onChange={(value) => isNGO 
                            ? setNgoData({...ngoData, password: value})
                            : setVolunteerData({...volunteerData, password: value})
                          }
                          placeholder="Create your magical passphrase"
                          icon={<Lock size={16} />}
                          required
                        />
                        
                        {!isNGO && (
                          <div className="md:col-span-2">
                            <EnchantedFormField
                              label="Confirm Secret Incantation"
                              type="password"
                              value={volunteerData.confirmPassword}
                              onChange={(value) => setVolunteerData({...volunteerData, confirmPassword: value})}
                              placeholder="Repeat your magical passphrase"
                              icon={<Lock size={16} />}
                              required
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
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-fantasy text-amber-400 mb-2">Awakening of Sacred Skills</h3>
                        <p className="text-mystical-300 font-medieval">Channel your inner powers for the greater good</p>
                      </div>

                      {/* Skill Selection Grimoire */}
                      <div className="bg-mystical-800/30 rounded-2xl p-6 border border-amber-400/20">
                        <div className="relative mb-4">
                          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-400" />
                          <input
                            value={skillSearchTerm}
                            onChange={(e) => setSkillSearchTerm(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 bg-mystical-900/50 border border-amber-400/30 rounded-lg text-mystical-100 placeholder:text-mystical-400 font-medieval focus:border-amber-400 focus:outline-none"
                            placeholder="Search for your mystical abilities..."
                          />
                        </div>

                        {/* Available Skills Scrolls */}
                        {skillSearchTerm && (
                          <div className="mb-4 max-h-32 overflow-y-auto">
                            {filteredSkills.map((skill) => (
                              <motion.button
                                key={skill}
                                onClick={() => addSkill(skill)}
                                className="block w-full text-left p-2 text-mystical-200 hover:text-amber-400 hover:bg-mystical-800/50 rounded font-medieval transition-colors"
                                whileHover={{ x: 5 }}
                              >
                                ✨ {skill}
                              </motion.button>
                            ))}
                          </div>
                        )}

                        {/* Selected Skills Gems */}
                        <div className="space-y-2">
                          <h4 className="text-amber-400 font-medieval">Your Awakened Powers:</h4>
                          <div className="flex flex-wrap gap-2">
                            {selectedSkills.map((skill) => (
                              <motion.div
                                key={skill}
                                className="bg-gradient-to-r from-amber-500 to-yellow-500 text-mystical-900 px-4 py-2 rounded-full font-medieval text-sm flex items-center space-x-2"
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                whileHover={{ scale: 1.05 }}
                              >
                                <span>💎 {skill}</span>
                                <button
                                  onClick={() => removeSkill(skill)}
                                  className="hover:text-red-600 transition-colors"
                                >
                                  ✕
                                </button>
                              </motion.div>
                            ))}
                          </div>
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
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-fantasy text-amber-400 mb-2">Guild Charter Inscription</h3>
                        <p className="text-mystical-300 font-medieval">Establish your sacred guild's domain</p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <EnchantedFormField
                            label="Guild Sanctum Address"
                            value={ngoData.address}
                            onChange={(value) => setNgoData({...ngoData, address: value})}
                            placeholder="123 Mystic Lane, Enchanted Quarter"
                            icon={<MapPin size={16} />}
                            required
                          />
                        </div>
                        
                        <EnchantedFormField
                          label="Realm City"
                          value={ngoData.city}
                          onChange={(value) => setNgoData({...ngoData, city: value})}
                          placeholder="Crystal Falls"
                          required
                        />
                        
                        <EnchantedFormField
                          label="Province"
                          value={ngoData.state}
                          onChange={(value) => setNgoData({...ngoData, state: value})}
                          placeholder="Mystical Territories"
                          required
                        />
                        
                        <EnchantedFormField
                          label="Portal Code"
                          value={ngoData.pincode}
                          onChange={(value) => setNgoData({...ngoData, pincode: value})}
                          placeholder="12345"
                          required
                        />
                        
                        <EnchantedFormField
                          label="Kingdom"
                          value={ngoData.country}
                          onChange={(value) => setNgoData({...ngoData, country: value})}
                          placeholder="United Realms"
                          required
                        />
                      </div>
                    </motion.div>
                  )}

                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="text-center space-y-6"
                    >
                      <div className="mb-8">
                        <h3 className="text-3xl font-fantasy text-amber-400 mb-4">Fellowship Seal of Binding</h3>
                        <p className="text-mystical-300 font-medieval">Your oath shall be recorded in the Book of Heroes</p>
                      </div>

                      <motion.div
                        className="bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-2xl p-8 border border-amber-400/50"
                        animate={{
                          boxShadow: [
                            '0 0 30px rgba(251, 191, 36, 0.3)',
                            '0 0 50px rgba(251, 191, 36, 0.5)',
                            '0 0 30px rgba(251, 191, 36, 0.3)'
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity }}
                      >
                        <Star className="w-16 h-16 text-amber-400 mx-auto mb-4" />
                        <h4 className="text-xl font-medieval text-mystical-200 mb-4">
                          Welcome to the Fellowship, {isNGO ? ngoData.orgName || 'Noble Guild' : volunteerData.fullName || 'Brave Soul'}!
                        </h4>
                        <p className="text-mystical-300 font-medieval">
                          Your journey of kindness begins now. May your deeds shine like stars in the realm.
                        </p>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Runes */}
                <div className="flex justify-between mt-8">
                  {currentStep > 1 && (
                    <EnchantedButton
                      variant="secondary"
                      onClick={() => setCurrentStep(currentStep - 1)}
                    >
                      <ArrowLeft size={16} />
                      <span>Previous Scroll</span>
                    </EnchantedButton>
                  )}
                  
                  <div className="flex-1" />
                  
                  {currentStep < 3 ? (
                    <EnchantedButton
                      variant="mystical"
                      onClick={() => setCurrentStep(currentStep + 1)}
                    >
                      <span>Next Scroll</span>
                      <ArrowLeft size={16} className="rotate-180" />
                    </EnchantedButton>
                  ) : (
                    <EnchantedButton
                      variant="mystical"
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <Sparkles size={16} className="animate-spin" />
                          <span>Binding Oath...</span>
                        </>
                      ) : (
                        <>
                          <Star size={16} />
                          <span>Pledge & Enter Fellowship</span>
                          <Star size={16} />
                        </>
                      )}
                    </EnchantedButton>
                  )}
                </div>
              </motion.div>
            )}
          </MagicalGate>

          {/* Call to Open Gate */}
          {!gateOpen && (
            <motion.div
              className="text-center mt-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <p className="text-mystical-300 font-medieval text-lg">
                Click upon the sacred gate to begin your oath of fellowship
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </MysticalBackground>
  );
};

export default SignupPage;
