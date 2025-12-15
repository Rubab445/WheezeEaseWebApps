import { CheckCircle, Mail, Clock } from 'lucide-react';

interface SignUpSuccessConfirmationProps {
  onBackToLogin: () => void;
}

export function SignUpSuccessConfirmation({ onBackToLogin }: SignUpSuccessConfirmationProps) {
  return (
    <div className="bg-white rounded-2xl p-12 shadow-lg shadow-[#8B5CF6]/8">
      {/* Success Icon */}
      <div className="flex justify-center mb-6">
        <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#10B981] to-[#059669] flex items-center justify-center">
          <CheckCircle className="w-12 h-12 text-white" />
        </div>
      </div>

      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-[#1F2937] mb-3">
          Account Created Successfully!
        </h1>
        <p className="text-base text-[#6B7280]">
          Your registration has been submitted for review
        </p>
      </div>

      {/* Info Cards */}
      <div className="space-y-4 mb-8">
        {/* Email Verification */}
        <div className="bg-[#F0FDF4] border border-[#10B981]/30 rounded-lg p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#10B981] flex items-center justify-center flex-shrink-0">
            <Mail className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-[#1F2937] mb-1">
              Check Your Email
            </h3>
            <p className="text-sm text-[#6B7280]">
              We've sent a verification email to your inbox. Please verify your email address to continue.
            </p>
          </div>
        </div>

        {/* Approval Process */}
        <div className="bg-[#F3E8FF] border border-[#8B5CF6]/30 rounded-lg p-4 flex items-start gap-3">
          <div className="w-10 h-10 rounded-lg bg-[#8B5CF6] flex items-center justify-center flex-shrink-0">
            <Clock className="w-5 h-5 text-white" />
          </div>
          <div>
            <h3 className="font-semibold text-[#1F2937] mb-1">
              Under Review
            </h3>
            <p className="text-sm text-[#6B7280]">
              Our team will review your application. You'll receive an email notification once your account is approved (typically within 24-48 hours).
            </p>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-[#F9FAFB] border border-[#E5E7EB] rounded-lg p-5 mb-8">
        <h3 className="font-semibold text-[#1F2937] mb-3">What happens next?</h3>
        <ul className="space-y-2 text-sm text-[#6B7280]">
          <li className="flex items-start gap-2">
            <span className="text-[#8B5CF6] mt-0.5">•</span>
            <span>Verify your email address using the link we sent</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#8B5CF6] mt-0.5">•</span>
            <span>Our team reviews your application and credentials</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#8B5CF6] mt-0.5">•</span>
            <span>You'll receive an approval email with login instructions</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-[#8B5CF6] mt-0.5">•</span>
            <span>Sign in and start managing your WheezeEase platform</span>
          </li>
        </ul>
      </div>

      {/* Back to Login Button */}
      <button
        onClick={onBackToLogin}
        className="w-full h-[52px] bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white rounded-lg font-semibold text-base hover:shadow-lg hover:shadow-[#8B5CF6]/25 hover:-translate-y-0.5 transition-all"
      >
        Back to Login
      </button>

      {/* Help Text */}
      <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
        <p className="text-center text-sm text-[#6B7280]">
          Didn't receive the email?{' '}
          <button className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold transition-colors">
            Resend verification
          </button>
        </p>
      </div>
    </div>
  );
}
