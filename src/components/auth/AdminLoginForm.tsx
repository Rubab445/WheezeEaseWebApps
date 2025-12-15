import { useState } from 'react';
import { Mail, Lock, Eye, EyeOff, ShieldCheck, AlertCircle, Loader2 } from 'lucide-react';

interface AdminLoginFormProps {
  onLoginSuccess: (email: string) => void;
  onForgotPassword: () => void;
  onSignUpClick: () => void;
}

export function AdminLoginForm({ onLoginSuccess, onForgotPassword, onSignUpClick }: AdminLoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberDevice, setRememberDevice] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [show2FAAlert, setShow2FAAlert] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        onLoginSuccess(email);
      } else {
        setError('Invalid admin credentials. Please try again.');
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl p-12 shadow-lg shadow-[#8B5CF6]/8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1F2937] mb-2">Admin Login</h1>
        <p className="text-sm text-[#6B7280] mb-3">Sign in to manage WheezeEase platform</p>
        <div className="flex items-center gap-2 text-[#8B5CF6] text-xs">
          <Lock className="w-4 h-4" />
          <span className="font-medium">Secure admin authentication</span>
        </div>
      </div>

      {/* 2FA Alert Banner */}
      {show2FAAlert && (
        <div className="mb-6 bg-[#F3E8FF] border-l-4 border-[#8B5CF6] rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-[#1F2937]">Two-factor authentication required for admin access</p>
          </div>
          <button 
            onClick={() => setShow2FAAlert(false)}
            className="text-[#8B5CF6] hover:text-[#7C3AED]"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      )}

      {/* Error Message */}
      {error && (
        <div className="mb-6 bg-[#FEF2F2] border-l-4 border-[#EF4444] rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#EF4444]">{error}</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Admin Email
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@wheezeease.com"
              className="w-full h-12 pl-12 pr-4 border border-[#E5E7EB] rounded-lg text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
              required
            />
          </div>
          <p className="mt-1.5 text-xs text-[#6B7280]">Use your registered admin email</p>
        </div>

        {/* Password Input */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Password
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <Lock className="w-5 h-5" />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter your admin password"
              className="w-full h-12 pl-12 pr-12 border border-[#E5E7EB] rounded-lg text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#1F2937] transition-colors"
            >
              {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Remember Me & Forgot Password */}
        <div className="flex items-center justify-between pt-2">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={rememberDevice}
              onChange={(e) => setRememberDevice(e.target.checked)}
              className="w-4 h-4 rounded border-[#E5E7EB] text-[#8B5CF6] focus:ring-[#8B5CF6] focus:ring-offset-0 cursor-pointer"
            />
            <span className="text-sm text-[#6B7280]">Remember this device</span>
          </label>
          <button
            type="button"
            onClick={onForgotPassword}
            className="text-sm font-semibold text-[#8B5CF6] hover:text-[#7C3AED] transition-colors"
          >
            Forgot Password?
          </button>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-[52px] bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white rounded-lg font-semibold text-base hover:shadow-lg hover:shadow-[#8B5CF6]/25 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Signing in...
            </>
          ) : (
            <>
              Sign In to Admin Portal
              <ShieldCheck className="w-5 h-5" />
            </>
          )}
        </button>

        {/* Security Notice */}
        <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-3 flex items-start gap-2">
          <Lock className="w-4 h-4 text-[#6B7280] flex-shrink-0 mt-0.5" />
          <p className="text-xs text-[#6B7280]">
            Your session will be logged for security purposes
          </p>
        </div>
      </form>

      {/* Footer */}
      <div className="mt-8 pt-6 border-t border-[#E5E7EB] space-y-3">
        <p className="text-center text-sm text-[#6B7280]">
          Don't have an account?{' '}
          <button
            onClick={onSignUpClick}
            className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold transition-colors"
          >
            Sign up now
          </button>
        </p>
        <p className="text-center text-xs text-[#9CA3AF]">
          Need help? Contact System Administrator
        </p>
      </div>
    </div>
  );
}
