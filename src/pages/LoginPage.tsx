
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, ArrowLeft, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import VideoBackground from '@/components/VideoBackground';

const LoginPage = () => {
  const [isNGO, setIsNGO] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showForgotModal, setShowForgotModal] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    forgotEmail: ''
  });
  const [errors, setErrors] = useState({
    email: '',
    password: ''
  });
  const [isShaking, setIsShaking] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }

    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setIsShaking(true);
      setTimeout(() => setIsShaking(false), 500);
    } else {
      console.log('Login successful');
    }
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(formData.forgotEmail)) {
      setShowForgotModal(false);
      console.log('Password recovery instructions sent');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 relative overflow-hidden">
      <VideoBackground src="/assets/bg.mp4" />
      
      {/* Floating particles for ambiance */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full opacity-20"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${10 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Back button */}
      <Link
        to="/"
        className="absolute top-6 left-6 z-10 flex items-center space-x-2 text-white/80 hover:text-white transition-all duration-300 group"
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
        initial={{ opacity: 0, y: 40, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="w-full max-w-md bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20"
        animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
      >
        {/* Header with sparkle effect */}
        <div className="text-center mb-8">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-16 h-16 bg-gradient-to-br from-yellow-400 via-orange-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg"
          >
            <Sparkles className="text-white" size={28} />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent mb-2"
          >
            Welcome Back
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/70"
          >
            Continue your journey of making a difference
          </motion.p>
        </div>

        {/* Animated Mode Toggle */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6 }}
          className="flex items-center justify-center space-x-4 mb-8 p-4 bg-white/5 rounded-2xl border border-white/10"
        >
          <motion.span
            className={`text-sm font-medium transition-colors duration-300 ${
              !isNGO ? 'text-blue-300' : 'text-white/50'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            Volunteer
          </motion.span>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Switch
              checked={isNGO}
              onCheckedChange={setIsNGO}
              className="data-[state=checked]:bg-gradient-to-r data-[state=checked]:from-green-400 data-[state=checked]:to-emerald-500"
            />
          </motion.div>
          <motion.span
            className={`text-sm font-medium transition-colors duration-300 ${
              isNGO ? 'text-green-300' : 'text-white/50'
            }`}
            whileHover={{ scale: 1.05 }}
          >
            NGO
          </motion.span>
        </motion.div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Floating Label Email Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            className="relative"
          >
            <motion.div
              className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                formData.email
                  ? 'top-0 text-xs text-blue-300 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent px-2 -translate-y-1/2'
                  : 'top-1/2 text-sm text-white/50 -translate-y-1/2'
              }`}
              animate={{ y: formData.email ? -12 : 0 }}
            >
              Email Address
            </motion.div>
            <Input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="pt-6 pb-2 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
            />
            {errors.email && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-300 text-xs mt-1"
              >
                {errors.email}
              </motion.p>
            )}
          </motion.div>

          {/* Floating Label Password Input */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="relative"
          >
            <motion.div
              className={`absolute left-3 transition-all duration-300 pointer-events-none ${
                formData.password
                  ? 'top-0 text-xs text-blue-300 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent px-2 -translate-y-1/2'
                  : 'top-1/2 text-sm text-white/50 -translate-y-1/2'
              }`}
              animate={{ y: formData.password ? -12 : 0 }}
            >
              Password
            </motion.div>
            <Input
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="pt-6 pb-2 pr-12 bg-white/10 border-white/20 text-white placeholder:text-white/30 focus:border-blue-400 focus:bg-white/15 transition-all duration-300"
            />
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50 hover:text-white/80 transition-colors"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </motion.button>
            {errors.password && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-red-300 text-xs mt-1"
              >
                {errors.password}
              </motion.p>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 hover:from-blue-600 hover:via-purple-600 hover:to-pink-600 text-white py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg shadow-blue-500/25"
            >
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="flex items-center justify-center space-x-2"
              >
                <span>Sign In</span>
                <Sparkles size={18} className="animate-pulse" />
              </motion.span>
            </Button>
          </motion.div>
        </form>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0 }}
          className="text-right mt-4"
        >
          <button
            onClick={() => setShowForgotModal(true)}
            className="text-blue-300 hover:text-blue-200 text-sm font-medium transition-colors duration-300 hover:underline"
          >
            Forgot Password?
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="text-center mt-6"
        >
          <p className="text-white/70">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-300 hover:text-blue-200 font-medium transition-colors duration-300 hover:underline">
              Join the community
            </Link>
          </p>
        </motion.div>
      </motion.div>

      {/* Enhanced Forgot Password Modal */}
      {showForgotModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50"
          onClick={() => setShowForgotModal(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-6 max-w-md w-full mx-4"
            onClick={e => e.stopPropagation()}
          >
            <h3 className="text-xl font-bold text-white mb-4">Reset Password</h3>
            <form onSubmit={handleForgotPassword}>
              <div className="mb-4">
                <Label htmlFor="forgotEmail" className="text-white/80">Email Address</Label>
                <Input
                  id="forgotEmail"
                  type="email"
                  value={formData.forgotEmail}
                  onChange={(e) => setFormData({ ...formData, forgotEmail: e.target.value })}
                  className="mt-1 bg-white/10 border-white/20 text-white placeholder:text-white/30"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForgotModal(false)}
                  className="flex-1 border-white/20 text-white/80 hover:bg-white/10"
                >
                  Cancel
                </Button>
                <Button 
                  type="submit" 
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600"
                >
                  Send Instructions
                </Button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}
    </div>
  );
};

export default LoginPage;
