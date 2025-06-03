
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff } from 'lucide-react';
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
      // Handle login logic here
      console.log('Login successful');
    }
  };

  const handleForgotPassword = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateEmail(formData.forgotEmail)) {
      setShowForgotModal(false);
      // Show success toast here
      console.log('Password recovery instructions sent');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <VideoBackground src="/assets/bg.mp4" />
      
      <motion.div
        className="w-full max-w-md bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8"
        animate={isShaking ? { x: [-10, 10, -10, 10, 0] } : {}}
        transition={{ duration: 0.5 }}
      >
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to continue your volunteer journey</p>
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

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="relative">
            <Label
              htmlFor="email"
              className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                formData.email
                  ? 'top-0 text-xs text-blue-600 bg-white px-1 -translate-y-1/2'
                  : 'top-1/2 text-sm text-gray-500 -translate-y-1/2'
              }`}
            >
              Email Address
            </Label>
            <Input
              id="email"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="pt-4 pb-2 border-2 focus:border-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Password Input */}
          <div className="relative">
            <Label
              htmlFor="password"
              className={`absolute left-3 transition-all duration-200 pointer-events-none ${
                formData.password
                  ? 'top-0 text-xs text-blue-600 bg-white px-1 -translate-y-1/2'
                  : 'top-1/2 text-sm text-gray-500 -translate-y-1/2'
              }`}
            >
              Password
            </Label>
            <Input
              id="password"
              type={showPassword ? 'text' : 'password'}
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              className="pt-4 pb-2 pr-12 border-2 focus:border-blue-500"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </button>
            {errors.password && (
              <p className="text-red-500 text-xs mt-1">{errors.password}</p>
            )}
          </div>

          <Button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-3 rounded-lg font-semibold transition-all duration-200 hover:scale-105"
          >
            Sign In
          </Button>
        </form>

        <div className="text-right mt-4">
          <button
            onClick={() => setShowForgotModal(true)}
            className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            Forgot Password?
          </button>
        </div>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link to="/signup" className="text-blue-600 hover:text-blue-800 font-medium">
              Sign up
            </Link>
          </p>
        </div>
      </motion.div>

      {/* Forgot Password Modal */}
      {showForgotModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full mx-4"
          >
            <h3 className="text-xl font-bold mb-4">Reset Password</h3>
            <form onSubmit={handleForgotPassword}>
              <div className="mb-4">
                <Label htmlFor="forgotEmail">Email Address</Label>
                <Input
                  id="forgotEmail"
                  type="email"
                  value={formData.forgotEmail}
                  onChange={(e) => setFormData({ ...formData, forgotEmail: e.target.value })}
                  className="mt-1"
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex space-x-3">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setShowForgotModal(false)}
                  className="flex-1"
                >
                  Cancel
                </Button>
                <Button type="submit" className="flex-1">
                  Send Instructions
                </Button>
              </div>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
