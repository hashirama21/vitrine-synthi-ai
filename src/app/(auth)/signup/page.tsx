"use client";

import React, { useState } from 'react';
import { Eye, EyeOff, Mail, Lock, User, Github, Chrome, Shield, Cpu, Network, Database, Layers, Grid, Hexagon, Phone, UserPlus, Check } from 'lucide-react';
import { useRouter } from 'next/navigation'

const RegisterPage = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [loginMethod, setLoginMethod] = useState('email'); // 'email' or 'phone'
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        password: '',
        confirmPassword: '',
        acceptTerms: false,
        acceptMarketing: false
    });


    const router = useRouter()

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (formData.password !== formData.confirmPassword) {
            alert('Passwords do not match!');
            return;
        }

        if (!formData.acceptTerms) {
            alert('Please accept the Terms and Conditions');
            return;
        }

        setIsLoading(true);

        // Simulation d'enregistrement
        setTimeout(() => {
            setIsLoading(false);
            console.log('Register attempt:', formData);
            alert('Registration successful! (Simulation)');
        }, 2000);
    };

    const handleSSOLogin = (provider) => {
        setIsLoading(true);
        console.log(`Register with ${provider}`);

        // Simulation SSO
        setTimeout(() => {
            setIsLoading(false);
            alert(`${provider} registration successful! (Simulation)`);
        }, 1500);
    };

    // Custom Keycloak icon component
    const KeycloakIcon = () => (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0L3 7v10l9 7 9-7V7L12 0zm0 2.5L19.5 8v8L12 21.5 4.5 16V8L12 2.5zm0 3L7 9v6l5 4 5-4V9l-5-3.5zm0 2L15 11v4l-3 2.5L9 15v-4l3-3.5z" />
        </svg>
    );

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex">
            {/* Left Side - Ultra Futuristic Design */}
            <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden">
                {/* Animated Background Layers */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#6b7db8] via-[#8a9fd9] to-[#b3c0de]"></div>

                {/* Geometric Pattern Layer */}
                <div className="absolute inset-0 opacity-20">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.3'%3E%3Cpolygon points='30,0 60,30 30,60 0,30'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                    }}></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Floating Hexagons */}
                    <div className="absolute top-20 left-20 w-16 h-16 border border-white/30 rotate-12 animate-pulse">
                        <Hexagon className="w-full h-full text-white/40" />
                    </div>
                    <div className="absolute top-40 right-32 w-12 h-12 border border-white/20 rotate-45 animate-bounce" style={{ animationDelay: '1s' }}>
                        <Grid className="w-full h-full text-white/30" />
                    </div>
                    <div className="absolute bottom-32 left-16 w-20 h-20 border border-white/25 -rotate-12 animate-pulse" style={{ animationDelay: '2s' }}>
                        <Network className="w-full h-full text-white/35" />
                    </div>
                    <div className="absolute bottom-20 right-20 w-14 h-14 border border-white/30 rotate-90 animate-bounce" style={{ animationDelay: '0.5s' }}>
                        <Layers className="w-full h-full text-white/40" />
                    </div>
                </div>

                {/* Central Content */}
                <div className="relative z-10 flex flex-col justify-center items-center text-white p-12 w-full">
                    {/* Main Logo/Icon */}
                    <div className="mb-12 relative">
                        {/* Outer Ring */}
                        <div className="w-32 h-32 border-2 border-white/30 rounded-full absolute animate-spin" style={{ animationDuration: '20s' }}></div>
                        <div className="w-28 h-28 border border-white/20 rounded-full absolute top-2 left-2 animate-spin" style={{ animationDuration: '15s', animationDirection: 'reverse' }}></div>

                        {/* Central Icon */}
                        <div className="w-24 h-24 bg-white/10 backdrop-blur-lg rounded-full flex items-center justify-center relative top-4 left-4 border border-white/30 shadow-2xl">
                            <div className="relative">
                                <UserPlus className="w-12 h-12 text-white animate-pulse" />
                                <div className="absolute -top-1 -left-1 w-14 h-14 border border-white/20 rounded-full animate-ping"></div>
                            </div>
                        </div>
                    </div>

                    <h1 className="text-5xl font-bold mb-6 text-center bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                        SYNTHI AI
                    </h1>
                    <p className="text-xl opacity-90 text-center max-w-md leading-relaxed mb-8">
                        Join the future of AI-powered business solutions with enterprise-grade security
                    </p>

                    {/* Feature Grid */}
                    <div className="grid grid-cols-2 gap-6 mt-8 opacity-80">
                        <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                            <Database className="w-8 h-8 mb-3 text-white" />
                            <span className="text-sm font-medium">AI-Powered</span>
                            <span className="text-xs opacity-70">Machine Learning</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                            <Network className="w-8 h-8 mb-3 text-white" />
                            <span className="text-sm font-medium">Enterprise</span>
                            <span className="text-xs opacity-70">Scalable Solutions</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                            <Shield className="w-8 h-8 mb-3 text-white" />
                            <span className="text-sm font-medium">Secure</span>
                            <span className="text-xs opacity-70">Data Protection</span>
                        </div>
                        <div className="flex flex-col items-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                            <Layers className="w-8 h-8 mb-3 text-white" />
                            <span className="text-sm font-medium">Innovation</span>
                            <span className="text-xs opacity-70">Cutting-edge Tech</span>
                        </div>
                    </div>

                    {/* Data Stream Animation */}
                    <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent">
                        <div className="w-8 h-px bg-white animate-pulse absolute" style={{
                            animation: 'slide 3s infinite linear'
                        }}></div>
                    </div>
                </div>

                {/* CSS for animations */}
                <style jsx>{`
          @keyframes slide {
            0% { left: 0; }
            100% { left: 100%; }
          }
        `}</style>
            </div>

            {/* Right Side - Register Form */}
            <div className="w-full lg:w-1/2 flex items-center justify-center p-6 lg:p-8">
                <div className="w-full max-w-md">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] rounded-2xl mb-4 shadow-lg">
                            <UserPlus className="w-8 h-8 text-white" />
                        </div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h2>
                        <p className="text-gray-600">Join our secure platform today</p>
                    </div>

                    {/* Login Method Toggle */}
                    <div className="mb-6">
                        <div className="flex bg-gray-100 rounded-xl p-1">
                            <button
                                type="button"
                                onClick={() => setLoginMethod('email')}
                                className={`flex-1 flex items-center justify-center py-2 px-4 rounded-lg font-medium transition-all duration-200 ${loginMethod === 'email'
                                        ? 'bg-white text-[#6b7db8] shadow-sm'
                                        : 'text-gray-600 hover:text-gray-800'
                                    }`}
                            >
                                <Mail className="w-4 h-4 mr-2" />
                                Email
                            </button>
                            <button
                                type="button"
                                onClick={() => setLoginMethod('phone')}
                                className={`flex-1 flex items-center justify-center py-2 px-4 rounded-lg font-medium transition-all duration-200 ${loginMethod === 'phone'
                                        ? 'bg-white text-[#6b7db8] shadow-sm'
                                        : 'text-gray-600 hover:text-gray-800'
                                    }`}
                            >
                                <Phone className="w-4 h-4 mr-2" />
                                Phone
                            </button>
                        </div>
                    </div>

                    {/* Register Form */}
                    <div className="space-y-4 mb-6">
                        {/* Name Fields */}
                        <div className="grid grid-cols-2 gap-3">
                            <div>
                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                    First Name
                                </label>
                                <input
                                    type="text"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8a9fd9] focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                    placeholder="John"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                    Last Name
                                </label>
                                <input
                                    type="text"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleInputChange}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8a9fd9] focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                    placeholder="Doe"
                                    required
                                />
                            </div>
                        </div>

                        {/* Email or Phone Input */}
                        <div>
                            <label htmlFor={loginMethod} className="block text-sm font-medium text-gray-700 mb-2">
                                {loginMethod === 'email' ? 'Email Address' : 'Phone Number'}
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    {loginMethod === 'email' ? (
                                        <Mail className="h-5 w-5 text-gray-400" />
                                    ) : (
                                        <Phone className="h-5 w-5 text-gray-400" />
                                    )}
                                </div>
                                <input
                                    type={loginMethod === 'email' ? 'email' : 'tel'}
                                    id={loginMethod}
                                    name={loginMethod}
                                    value={formData[loginMethod]}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8a9fd9] focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                    placeholder={loginMethod === 'email' ? 'your@email.com' : '+1 (555) 123-4567'}
                                    required
                                />
                            </div>
                        </div>

                        {/* Password Input */}
                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8a9fd9] focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Confirm Password Input */}
                        <div>
                            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <Lock className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className="w-full pl-10 pr-12 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#8a9fd9] focus:border-transparent transition-all duration-200 bg-white shadow-sm"
                                    placeholder="••••••••"
                                    required
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600"
                                >
                                    {showConfirmPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                                </button>
                            </div>
                        </div>

                        {/* Terms and Marketing Checkboxes */}
                        <div className="space-y-3">
                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="acceptTerms"
                                    name="acceptTerms"
                                    checked={formData.acceptTerms}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-[#6b7db8] focus:ring-[#8a9fd9] border-gray-300 rounded mt-0.5"
                                    required
                                />
                                <label htmlFor="acceptTerms" className="ml-2 block text-sm text-gray-700">
                                    I agree to the{' '}
                                    <button type="button" className="text-[#6b7db8] hover:text-[#8a9fd9] underline">
                                        Terms and Conditions
                                    </button>
                                    {' '}and{' '}
                                    <button type="button" className="text-[#6b7db8] hover:text-[#8a9fd9] underline">
                                        Privacy Policy
                                    </button>
                                </label>
                            </div>

                            <div className="flex items-start">
                                <input
                                    type="checkbox"
                                    id="acceptMarketing"
                                    name="acceptMarketing"
                                    checked={formData.acceptMarketing}
                                    onChange={handleInputChange}
                                    className="h-4 w-4 text-[#6b7db8] focus:ring-[#8a9fd9] border-gray-300 rounded mt-0.5"
                                />
                                <label htmlFor="acceptMarketing" className="ml-2 block text-sm text-gray-700">
                                    I want to receive marketing communications and product updates
                                </label>
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            onClick={handleSubmit}
                            disabled={isLoading}
                            className="w-full bg-gradient-to-r from-[#6b7db8] to-[#8a9fd9] text-white py-3 px-4 rounded-xl font-medium hover:from-[#5a6ca7] hover:to-[#7a8fc8] focus:outline-none focus:ring-2 focus:ring-[#8a9fd9] focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            {isLoading ? (
                                <div className="flex items-center justify-center">
                                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                                    Joining SYNTHI AI...
                                </div>
                            ) : (
                                'Start Your AI Journey'
                            )}
                        </button>
                    </div>

                    {/* SSO Providers - Icons Only in One Line */}
                    <div className="mb-6">
                        <div className="relative mb-4">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300"></div>
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-4 bg-white text-gray-500">or register with</span>
                            </div>
                        </div>

                        <div className="flex justify-center space-x-4">
                            {/* Keycloak SSO */}
                            <button
                                onClick={() => handleSSOLogin('Keycloak')}
                                disabled={isLoading}
                                className="p-3 border border-gray-300 rounded-xl bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#8a9fd9] transition-all duration-200 disabled:opacity-50 shadow-sm hover:shadow-md"
                                title="Register with Keycloak"
                            >
                                <KeycloakIcon />
                            </button>

                            {/* Google */}
                            <button
                                onClick={() => handleSSOLogin('Google')}
                                disabled={isLoading}
                                className="p-3 border border-gray-300 rounded-xl bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#8a9fd9] transition-all duration-200 disabled:opacity-50 shadow-sm hover:shadow-md"
                                title="Register with Google"
                            >
                                <Chrome className="w-5 h-5 text-[#6b7db8]" />
                            </button>

                            {/* GitHub */}
                            <button
                                onClick={() => handleSSOLogin('GitHub')}
                                disabled={isLoading}
                                className="p-3 border border-gray-300 rounded-xl bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#8a9fd9] transition-all duration-200 disabled:opacity-50 shadow-sm hover:shadow-md"
                                title="Register with GitHub"
                            >
                                <Github className="w-5 h-5 text-[#6b7db8]" />
                            </button>
                        </div>
                    </div>

                    {/* Sign In Link */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <button
                                type="button"
                                className="font-medium text-[#6b7db8] hover:text-[#8a9fd9] transition-colors"
                                onClick={() => router.push('/signin')}
                            >
                                Sign in
                            </button>
                        </p>
                    </div>

                    {/* Security Notice */}
                    <div className="mt-6 p-4 bg-[#b3c0de]/20 rounded-xl border border-[#b3c0de]/30">
                        <div className="flex items-center text-sm text-gray-600">
                            <Shield className="w-4 h-4 mr-2 text-[#6b7db8]" />
                            Your data is protected with enterprise-grade encryption
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;