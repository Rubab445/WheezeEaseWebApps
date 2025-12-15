import { useState } from 'react';
import { Mail, ArrowLeft, Lock, RefreshCw, AlertTriangle, Loader2 } from 'lucide-react';

interface ForgotPasswordFormProps {
  onResetSent: (email: string) => void;
  onBackToLogin: () => void;
}

export function ForgotPasswordForm({ onResetSent, onBackToLogin }: ForgotPasswordFormProps) {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      onResetSent(email);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl p-12 shadow-lg shadow-[#8B5CF6]/8">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl mb-4">
          <Lock className="w-8 h-8 text-white" />
          <RefreshCw className="w-5 h-5 text-white absolute translate-x-3 translate-y-3" />
        </div>
        <h1 className="text-3xl font-bold text-[#1F2937] mb-2">Reset Admin Password</h1>
        <p className="text-sm text-[#6B7280]">
          Enter your admin email to receive reset instructions
        </p>
      </div>

      {/* Security Warning */}
      <div className="mb-6 bg-[#FFFBEB] border-l-4 border-[#F59E0B] rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm text-[#92400E]">
            Password resets are monitored for security. Contact support if you didn't request this.
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Email Input */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Admin Email Address
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <div className="relative">
                <Mail className="w-5 h-5" />
                <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#8B5CF6] rounded-full flex items-center justify-center">
                  <Lock className="w-2 h-2 text-white" />
                </div>
              </div>
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
              Sending...
            </>
          ) : (
            'Send Reset Instructions'
          )}
        </button>

        {/* Additional Info */}
        <div className="bg-[#F3E8FF] border border-[#8B5CF6]/30 rounded-lg p-4 flex items-start gap-3">
          <svg className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <p className="text-sm text-[#1F2937]">
            Reset links expire after <span className="font-semibold">1 hour</span>. Contact support if you need immediate access.
          </p>
        </div>
      </form>

      {/* Back to Login */}
      <div className="mt-8 text-center">
        <button
          onClick={onBackToLogin}
          className="text-sm text-[#8B5CF6] hover:text-[#7C3AED] font-medium transition-colors inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Admin Login
        </button>
      </div>
    </div>
  );
}
