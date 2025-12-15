import { useState } from 'react';
import { Mail, ArrowLeft, Loader2, Send } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { toast } from 'sonner@2.0.3';

interface ForgotPasswordPageProps {
  onNavigateToLogin: () => void;
  onNavigateToConfirmation: (email: string) => void;
}

export function ForgotPasswordPage({ onNavigateToLogin, onNavigateToConfirmation }: ForgotPasswordPageProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const validateEmail = (email: string) => {
    if (!email.trim()) {
      return 'Email is required';
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return 'Invalid email format';
    }
    return '';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const validationError = validateEmail(email);
    if (validationError) {
      setError(validationError);
      toast.error(validationError);
      return;
    }
    
    setIsLoading(true);
    setError('');
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      toast.success('Password reset link sent!');
      onNavigateToConfirmation(email);
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Left Side - Branding */}
      <div className="w-1/2 bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] relative flex flex-col">
        {/* Logo */}
        <div className="absolute top-10 left-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-xl">
              🫁
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#059669]">WheezeEase</h1>
              <p className="text-xs text-[#6B7280]">Doctor Portal</p>
            </div>
          </div>
        </div>

        {/* Main Illustration */}
        <div className="flex-1 flex items-center justify-center">
          <div className="relative w-96 h-96">
            {/* Circular Platform Base */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Layered Circles */}
                <div className="w-80 h-80 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center shadow-2xl">
                      {/* Lock Icon for Forgot Password */}
                      <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#06B6D4] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">🔑</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-2xl">📧</span>
                </div>
                <div className="absolute top-1/4 -left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">🔒</span>
                </div>
                <div className="absolute bottom-1/4 -right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">✅</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="px-20 pb-16 text-center">
          <h2 className="text-xl font-medium text-[#059669] mb-2">
            Reset Your Password
          </h2>
          <p className="text-sm text-[#6B7280]">
            We'll help you get back to caring for your patients
          </p>
        </div>

        {/* Footer */}
        <div className="absolute bottom-10 left-10 text-xs text-[#6B7280]">
          <p>© 2025 WheezeEase. All rights reserved.</p>
          <div className="flex items-center gap-4 mt-2">
            <a href="#" className="hover:text-[#059669]">Privacy Policy</a>
            <span>•</span>
            <a href="#" className="hover:text-[#059669]">Terms of Service</a>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-1/2 flex items-center justify-center p-12 bg-white">
        {/* Language Selector */}
        <div className="absolute top-6 right-6">
          <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-[#6B7280] hover:border-[#059669] transition-colors flex items-center gap-2">
            🇬🇧 English ▼
          </button>
        </div>

        {/* Form Card */}
        <div className="w-full max-w-md">
          {/* Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
          </div>

          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="text-[#1F2937] mb-2">Forgot Password?</h1>
            <p className="text-sm text-[#6B7280]">
              Enter your email to reset your password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-[#1F2937] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                    setError('');
                  }}
                  placeholder="doctor@example.com"
                  className={`w-full pl-12 pr-4 py-3 border ${error ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent`}
                />
                {error && (
                  <p className="text-xs text-red-500 mt-1">{error}</p>
                )}
              </div>
            </div>

            {/* Info Box */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>
                  <h4 className="text-sm font-medium text-blue-900 mb-1">Password Reset Instructions</h4>
                  <p className="text-xs text-blue-700">
                    We'll send you an email with a link to reset your password. The link will be valid for 24 hours.
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-[52px] bg-gradient-to-r from-[#059669] to-[#047857] text-white hover:opacity-90 hover:shadow-lg transition-all text-base font-semibold"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                  Sending reset link...
                </>
              ) : (
                <>
                  Send Reset Link
                  <Send className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            {/* Back to Login */}
            <button
              type="button"
              onClick={onNavigateToLogin}
              className="w-full flex items-center justify-center gap-2 text-sm text-[#059669] hover:underline font-medium py-2"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
