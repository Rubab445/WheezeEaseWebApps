import { useState } from 'react';
import { CheckCircle2, Mail, ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '../../../components/ui/button';
import { toast } from 'sonner@2.0.3';

interface PasswordResetConfirmationPageProps {
  email: string;
  onNavigateToLogin: () => void;
}

export function PasswordResetConfirmationPage({ email, onNavigateToLogin }: PasswordResetConfirmationPageProps) {
  const [isResending, setIsResending] = useState(false);

  const handleResend = () => {
    setIsResending(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsResending(false);
      toast.success('Reset link sent again!');
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
                      {/* Email/Success Icon */}
                      <svg className="w-32 h-32 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating Elements - Success theme */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#22C55E] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">✓</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-2xl">📬</span>
                </div>
                <div className="absolute top-1/4 -left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">✉️</span>
                </div>
                <div className="absolute bottom-1/4 -right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">🔐</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="px-20 pb-16 text-center">
          <h2 className="text-xl font-medium text-[#059669] mb-2">
            Check Your Inbox
          </h2>
          <p className="text-sm text-[#6B7280]">
            Password reset instructions are on the way
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

      {/* Right Side - Confirmation Message */}
      <div className="w-1/2 flex items-center justify-center p-12 bg-white">
        {/* Language Selector */}
        <div className="absolute top-6 right-6">
          <button className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm text-[#6B7280] hover:border-[#059669] transition-colors flex items-center gap-2">
            🇬🇧 English ▼
          </button>
        </div>

        {/* Content Card */}
        <div className="w-full max-w-md text-center">
          {/* Success Icon */}
          <div className="mb-6 flex justify-center">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#22C55E] to-[#10B981] flex items-center justify-center animate-scale-in">
              <CheckCircle2 className="w-12 h-12 text-white" />
            </div>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h1 className="text-[#1F2937] mb-3">Check Your Email</h1>
            <p className="text-sm text-[#6B7280] mb-4">
              We've sent a password reset link to
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-lg">
              <Mail className="w-4 h-4 text-[#059669]" />
              <span className="text-sm font-medium text-[#1F2937]">{email}</span>
            </div>
          </div>

          {/* Instructions */}
          <div className="bg-[#F0FDF4] border border-[#22C55E]/30 rounded-xl p-6 mb-8 text-left">
            <h3 className="text-sm font-bold text-[#1F2937] mb-3">Next Steps:</h3>
            <ul className="space-y-2 text-sm text-[#6B7280]">
              <li className="flex items-start gap-2">
                <span className="text-[#059669] font-bold mt-0.5">1.</span>
                <span>Check your email inbox for a message from WheezeEase</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#059669] font-bold mt-0.5">2.</span>
                <span>Click the link in the email to reset your password</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#059669] font-bold mt-0.5">3.</span>
                <span>Create a new strong password for your account</span>
              </li>
            </ul>
            
            <div className="mt-4 pt-4 border-t border-[#22C55E]/20">
              <div className="flex items-start gap-2 text-xs text-[#6B7280]">
                <svg className="w-4 h-4 text-[#F59E0B] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                </svg>
                <span>The reset link will expire in <strong>24 hours</strong></span>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="space-y-4">
            <Button
              onClick={onNavigateToLogin}
              className="w-full h-[52px] bg-gradient-to-r from-[#059669] to-[#047857] text-white hover:opacity-90 hover:shadow-lg transition-all text-base font-semibold"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Login
            </Button>

            {/* Resend Link */}
            <div className="text-sm text-[#6B7280]">
              Didn't receive the email?{' '}
              <button
                onClick={handleResend}
                disabled={isResending}
                className="text-[#059669] font-semibold hover:underline disabled:opacity-50 inline-flex items-center gap-1"
              >
                {isResending ? (
                  <>
                    <Loader2 className="w-3 h-3 animate-spin" />
                    Resending...
                  </>
                ) : (
                  'Resend'
                )}
              </button>
            </div>

            {/* Help Text */}
            <div className="pt-4 border-t border-gray-200">
              <p className="text-xs text-[#6B7280]">
                Make sure to check your spam folder if you don't see the email in your inbox.
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes scale-in {
          from {
            transform: scale(0);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        
        .animate-scale-in {
          animation: scale-in 0.5s ease-out;
        }
      `}</style>
    </div>
  );
}
