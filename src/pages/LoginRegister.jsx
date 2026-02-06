import React, { useState } from 'react';
import { Eye, EyeOff, CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

export default function PSPSAuth() {
  const [isLogin, setIsLogin] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [selectedReason, setSelectedReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });
  
  const [otpSent, setOtpSent] = useState({
    email: false,
    mobile: false
  });
  
  const [formData, setFormData] = useState({
    firstName: '',
    middleName: '',
    lastName: '',
    email: '',
    emailOtp: '',
    mobile: '',
    smsOtp: '',
    password: '',
    confirmPassword: '',
    city: '',
    referralCode: '',
    website: '',
    loginId: '',
    loginPassword: ''
  });

  // Make sure this matches your backend port
  const API_URL = 'http://localhost:5000/api/auth';

  const showMessage = (type, text) => {
    setMessage({ type, text });
    setTimeout(() => setMessage({ type: '', text: '' }), 5000);
  };

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Send Email OTP
  const sendEmailOtp = async () => {
    if (!formData.email) {
      showMessage('error', 'Please enter email address');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      showMessage('error', 'Please enter a valid email');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/send-email-otp`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email })
      });

      const data = await response.json();
      
      if (data.success) {
        setOtpSent({ ...otpSent, email: true });
        showMessage('success', data.message || 'OTP sent to your email!');
        console.log('Email OTP Response:', data);
      } else {
        showMessage('error', data.message || 'Failed to send OTP');
      }
    } catch (error) {
      console.error('Email OTP Error:', error);
      showMessage('error', 'Network error. Please check if backend is running.');
    } finally {
      setLoading(false);
    }
  };

  // Send SMS OTP
  const sendSmsOtp = async () => {
    if (!formData.mobile) {
      showMessage('error', 'Please enter mobile number');
      return;
    }

    // Mobile validation
    const mobileRegex = /^[+]?[0-9]{10,13}$/;
    if (!mobileRegex.test(formData.mobile.replace(/\s/g, ''))) {
      showMessage('error', 'Please enter a valid mobile number');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/send-sms-otp`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ mobile: formData.mobile })
      });

      const data = await response.json();
      
      if (data.success) {
        setOtpSent({ ...otpSent, mobile: true });
        showMessage('success', data.message || 'OTP sent to your mobile!');
        console.log('SMS OTP Response:', data);
        // Show SMS OTP in console for development
        if (data.devNote) {
          console.log('🔐', data.devNote);
        }
      } else {
        showMessage('error', data.message || 'Failed to send SMS OTP');
      }
    } catch (error) {
      console.error('SMS OTP Error:', error);
      showMessage('error', 'Network error. Please check if backend is running.');
    } finally {
      setLoading(false);
    }
  };

  // Register User
  const handleRegister = async () => {
    // Validation
    if (!formData.firstName || !formData.lastName || !formData.email || 
        !formData.mobile || !formData.password || !formData.confirmPassword || 
        !formData.city || !selectedReason) {
      showMessage('error', 'Please fill all required fields');
      return;
    }

    if (!formData.emailOtp || !formData.smsOtp) {
      showMessage('error', 'Please enter both OTPs');
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      showMessage('error', 'Passwords do not match');
      return;
    }

    if (formData.password.length < 6) {
      showMessage('error', 'Password must be at least 6 characters');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/register`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          firstName: formData.firstName,
          middleName: formData.middleName,
          lastName: formData.lastName,
          email: formData.email,
          emailOtp: formData.emailOtp,
          mobile: formData.mobile,
          smsOtp: formData.smsOtp,
          password: formData.password,
          confirmPassword: formData.confirmPassword,
          city: formData.city,
          referralCode: formData.referralCode,
          website: formData.website,
          roleReason: selectedReason
        })
      });

      const data = await response.json();
      
      if (data.success) {
        showMessage('success', data.message || 'Registration successful! You can now login.');
        console.log('Registration Response:', data);
        
        // Switch to login after 2 seconds
        setTimeout(() => {
          setIsLogin(true);
          // Reset form
          setFormData({
            firstName: '',
            middleName: '',
            lastName: '',
            email: '',
            emailOtp: '',
            mobile: '',
            smsOtp: '',
            password: '',
            confirmPassword: '',
            city: '',
            referralCode: '',
            website: '',
            loginId: '',
            loginPassword: ''
          });
          setSelectedReason('');
          setOtpSent({ email: false, mobile: false });
        }, 2000);
      } else {
        showMessage('error', data.message || 'Registration failed');
      }
    } catch (error) {
      console.error('Registration Error:', error);
      showMessage('error', 'Network error. Please check if backend is running.');
    } finally {
      setLoading(false);
    }
  };

  // Login User
  const handleLogin = async () => {
    if (!formData.loginId || !formData.loginPassword) {
      showMessage('error', 'Please enter login credentials');
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(`${API_URL}/login`, {
        method: 'POST',
        headers: { 
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          loginId: formData.loginId,
          password: formData.loginPassword,
          rememberMe
        })
      });

      const data = await response.json();
      
     if (data.success) {
  showMessage('success', data.message || `Welcome back, ${data.user.name}!`);

  // ✅ JWT TOKEN SAVE
  localStorage.setItem("token", data.token);

  // ✅ USER DATA SAVE
  localStorage.setItem("user", JSON.stringify(data.user));

  console.log("JWT Token:", data.token);
  console.log("User:", data.user);

  // ✅ REDIRECT AFTER LOGIN
  setTimeout(() => {
    window.location.href = "/services/3d-graphics";
  }, 1000);
}

      
      else {
        showMessage('error', data.message || 'Login failed');
      }
    } catch (error) {
      console.error('Login Error:', error);
      showMessage('error', 'Network error. Please check if backend is running.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
      <div className="w-full max-w-4xl">
        {/* Message Alert */}
        {message.text && (
          <div className={`fixed top-4 right-4 left-4 md:left-auto md:w-96 z-50 flex items-center gap-3 px-6 py-4 rounded-lg shadow-2xl animate-slide-in ${
            message.type === 'success' 
              ? 'bg-gradient-to-r from-green-600 to-green-700' 
              : 'bg-gradient-to-r from-red-600 to-red-700'
          }`}>
            {message.type === 'success' ? <CheckCircle size={24} /> : <AlertCircle size={24} />}
            <span className="flex-1">{message.text}</span>
            <button 
              onClick={() => setMessage({ type: '', text: '' })}
              className="ml-2 hover:bg-white/20 rounded p-1"
            >
              ✕
            </button>
          </div>
        )}

        {/* Logo */}
        <div className="mb-8 flex justify-center">
          <div className="py-20">
            <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg w-20 h-20 flex items-center justify-center shadow-lg">
              <div className="text-black text-2xl font-bold">PSPS</div>
            </div>
          </div>
        </div>

        {/* Welcome Header */}
        <div className="text-center mb-6">
          <div className="inline-block border-2 border-yellow-600 rounded-full px-32 py-2 shadow-lg">
            <h1 className="text-2xl font-light">
              WEL<span className="text-yellow-500">COME</span>
            </h1>
          </div>
        </div>

        {/* Login/Register Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => {
              setIsLogin(true);
              setMessage({ type: '', text: '' });
            }}
            className={`px-8 py-2 rounded-full border-2 transition-all ${
              isLogin
                ? 'bg-yellow-600 border-yellow-600 text-black font-semibold shadow-lg'
                : 'border-gray-600 text-gray-400 hover:border-gray-400'
            }`}
          >
            Login
          </button>
          <span className="text-yellow-600 text-2xl">|</span>
          <button
            onClick={() => {
              setIsLogin(false);
              setMessage({ type: '', text: '' });
            }}
            className={`px-8 py-2 rounded-full border-2 transition-all ${
              !isLogin
                ? 'bg-yellow-600 border-yellow-600 text-black font-semibold shadow-lg'
                : 'border-gray-600 text-gray-400 hover:border-gray-400'
            }`}
          >
            Register
          </button>
        </div>

        {/* Forms */}
        <div>
          {isLogin ? (
            // Login Form
            <div className="space-y-6 max-w-xl mx-auto">
              <div>
                <label className="block text-sm mb-2 font-medium">Login Id</label>
                <input
                  type="text"
                  name="loginId"
                  value={formData.loginId}
                  onChange={handleInputChange}
                  placeholder="email@example.com or mobile number"
                  className="w-full bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-yellow-600 transition-colors"
                />
              </div>

              <div>
                <label className="block text-sm mb-2 font-medium">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="loginPassword"
                    value={formData.loginPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••••"
                    className="w-full bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 pr-12 focus:outline-none focus:border-yellow-600 transition-colors"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between text-sm">
                <label className="flex items-center gap-2 cursor-pointer hover:text-yellow-500 transition-colors">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 accent-yellow-600 cursor-pointer"
                  />
                  <span>Remember Me</span>
                </label>
                <button className="text-gray-400 hover:text-yellow-600 transition-colors">
                  Forget Password?
                </button>
              </div>

              <button
                onClick={handleLogin}
                disabled={loading}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-3 rounded-full hover:from-yellow-600 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Logging in...
                  </>
                ) : (
                  'Login'
                )}
              </button>

              <div className="text-center">
                <p className="text-gray-400 mb-2">Don't have an account?</p>
                <button
                  onClick={() => setIsLogin(false)}
                  className="text-yellow-600 hover:text-yellow-500 font-semibold transition-colors"
                >
                  Create a new account →
                </button>
              </div>
            </div>
          ) : (
            // Register Form
            <div className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm mb-2 font-medium">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="First Name"
                    className="w-full bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-yellow-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">Middle Name</label>
                  <input
                    type="text"
                    name="middleName"
                    value={formData.middleName}
                    onChange={handleInputChange}
                    placeholder="Middle Name"
                    className="w-full bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-yellow-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Last Name"
                    className="w-full bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-yellow-600 transition-colors"
                  />
                </div>
              </div>

              {/* Email and Mobile */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 font-medium">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="xyz@gmail.com"
                      className="flex-1 bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-yellow-600 transition-colors"
                    />
                    <button
                      onClick={sendEmailOtp}
                      disabled={loading || otpSent.email}
                      className="px-6 py-3 bg-yellow-600 text-black rounded-full hover:bg-yellow-700 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg transition-all flex items-center gap-2"
                    >
                      {loading ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : otpSent.email ? (
                        <>Sent <CheckCircle size={16} /></>
                      ) : (
                        'Send OTP'
                      )}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">
                    Mobile Number <span className="text-red-500">*</span>
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="flex-1 bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-yellow-600 transition-colors"
                    />
                    <button
                      onClick={sendSmsOtp}
                      disabled={loading || otpSent.mobile}
                      className="px-6 py-3 bg-yellow-600 text-black rounded-full hover:bg-yellow-700 text-sm font-semibold disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap shadow-lg transition-all flex items-center gap-2"
                    >
                      {loading ? (
                        <Loader2 size={16} className="animate-spin" />
                      ) : otpSent.mobile ? (
                        <>Sent <CheckCircle size={16} /></>
                      ) : (
                        'Send OTP'
                      )}
                    </button>
                  </div>
                </div>
              </div>

              {/* OTP Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 font-medium">
                    Email OTP <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="emailOtp"
                    value={formData.emailOtp}
                    onChange={handleInputChange}
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                    className="w-full bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-yellow-600 transition-colors tracking-widest text-center"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">
                    SMS OTP <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="smsOtp"
                    value={formData.smsOtp}
                    onChange={handleInputChange}
                    placeholder="Enter 6-digit OTP"
                    maxLength={6}
                    className="w-full bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-yellow-600 transition-colors tracking-widest text-center"
                  />
                </div>
              </div>

              {/* Password Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 font-medium">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
                      name="password"
                      value={formData.password}
                      onChange={handleInputChange}
                      placeholder="••••••••••"
                      className="w-full bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 pr-12 focus:outline-none focus:border-yellow-600 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      placeholder="Re-enter password"
                      className="w-full bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 pr-12 focus:outline-none focus:border-yellow-600 transition-colors"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                    </button>
                  </div>
                </div>
              </div>

              {/* City and Referral */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm mb-2 font-medium">
                    City / Location <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleInputChange}
                    placeholder="City Name"
                    className="w-full bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-yellow-600 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm mb-2 font-medium">Referral Code (optional)</label>
                  <input
                    type="text"
                    name="referralCode"
                    value={formData.referralCode}
                    onChange={handleInputChange}
                    placeholder="Enter referral code"
                    className="w-full bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-yellow-600 transition-colors"
                  />
                </div>
              </div>

              {/* Website */}
              <div>
                <label className="block text-sm mb-2 font-medium">Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleInputChange}
                  placeholder="https://example.com"
                  className="w-full bg-transparent border-2 border-gray-700 rounded-full px-6 py-3 focus:outline-none focus:border-yellow-600 transition-colors"
                />
              </div>

              {/* Reason Radio Buttons */}
              <div>
                <label className="block text-sm mb-4 font-medium">
                  Choose Your Reason to Register <span className="text-red-500">*</span>
                </label>
                <div className="space-y-3">
                  {[
                    { value: 'casting', label: 'Casting Agency / Production House - Hire Talent' },
                    { value: 'talent', label: 'Model / Actor / Actress - Search for Work' },
                    { value: 'client', label: 'Client - Ad Shoots, Website Design, Social Media Management & More' }
                  ].map((option) => (
                    <label 
                      key={option.value}
                      className={`flex items-start gap-3 cursor-pointer p-4 border-2 rounded-lg transition-all ${
                        selectedReason === option.value 
                          ? 'border-yellow-600 bg-yellow-600/10' 
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                    >
                      <input
                        type="radio"
                        name="reason"
                        value={option.value}
                        checked={selectedReason === option.value}
                        onChange={(e) => setSelectedReason(e.target.value)}
                        className="mt-1 accent-yellow-600 cursor-pointer"
                      />
                      <span className="text-sm text-gray-300">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <button
                onClick={handleRegister}
                disabled={loading}
                className="w-full bg-gradient-to-r from-yellow-500 to-yellow-600 text-black font-semibold py-3 rounded-full hover:from-yellow-600 hover:to-yellow-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Creating Account...
                  </>
                ) : (
                  'Register'
                )}
              </button>

              <div className="text-center">
                <p className="text-gray-400 mb-2">Already have an account?</p>
                <button
                  onClick={() => setIsLogin(true)}
                  className="text-yellow-600 hover:text-yellow-500 font-semibold transition-colors"
                >
                  Login here →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}