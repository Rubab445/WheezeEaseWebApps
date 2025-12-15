import { useState, useEffect } from 'react';
import { Mail, CheckCircle, Shield, ArrowLeft, Clock } from 'lucide-react';

interface PasswordResetConfirmationProps {
  email: string;
  onBackToLogin: () => void;
}

export function PasswordResetConfirmation({ email, onBackToLogin }: PasswordResetConfirmationProps) {
  const [canResend, setCanResend] = useState(false);
  const [countdown, setCountdown] = useState(60);
  const [resendLoading, setResendLoading] = useState(false);

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(countdown - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResend = async () => {
    setResendLoading(true);
    // Simulate API call
    setTimeout(() => {
      setResendLoading(false);
      setCanResend(false);
      setCountdown(60);
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="bg-white rounded-2xl p-12 shadow-lg shadow-[#8B5CF6]/8">
      {/* Success Icon */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#22C55E] to-[#16A34A] rounded-full mb-4 relative">
          <CheckCircle className="w-10 h-10 text-white" strokeWidth={2.5} />
          <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-[#8B5CF6] rounded-full flex items-center justify-center">
            <Mail className="w-4 h-4 text-white" />
          </div>
        </div>
        <h1 className="text-3xl font-bold text-[#1F2937] mb-3">Check Your Email</h1>
        <p className="text-base text-[#6B7280] mb-2">
          We've sent password reset instructions to
        </p>
        <p className="text-base font-semibold text-[#8B5CF6] mb-4">
          {email}
        </p>
        <p className="text-sm text-[#6B7280] max-w-sm mx-auto">
          Follow the secure link in the email to reset your password. The link will expire in <span className="font-semibold text-[#1F2937]">1 hour</span> for security.
        </p>
      </div>

      {/* Security Note */}
      <div className="mb-6 bg-[#F3E8FF] border border-[#8B5CF6]/30 rounded-xl p-4 flex items-start gap-3">
        <Shield className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm text-[#1F2937]">
            If you don't receive the email within 5 minutes, check your spam folder or contact support.
          </p>
        </div>
      </div>

      {/* Back to Login Button */}
      <button
        onClick={onBackToLogin}
        className="w-full h-[52px] border-2 border-[#8B5CF6] text-[#8B5CF6] rounded-lg font-semibold text-base hover:bg-[#8B5CF6]/5 transition-all flex items-center justify-center gap-2 mb-4"
      >
        Back to Admin Login
      </button>

      {/* Resend Section */}
      <div className="pt-6 border-t border-[#E5E7EB]">
        <p className="text-center text-sm text-[#6B7280] mb-3">
          Didn't receive the email?
        </p>
        {canResend ? (
          <button
            onClick={handleResend}
            disabled={resendLoading}
            className="w-full h-12 bg-white border border-[#E5E7EB] text-[#8B5CF6] rounded-lg font-medium text-sm hover:bg-[#F9FAFB] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {resendLoading ? 'Sending...' : 'Resend Email'}
          </button>
        ) : (
          <div className="flex items-center justify-center gap-2 h-12 bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg text-sm text-[#6B7280]">
            <Clock className="w-4 h-4" />
            Resend available in {formatTime(countdown)}
          </div>
        )}
      </div>

      {/* Support Link */}
      <div className="mt-6 text-center">
        <a href="#" className="text-sm text-[#8B5CF6] hover:text-[#7C3AED] font-medium transition-colors">
          Contact Admin Support
        </a>
      </div>
    </div>
  );
}
