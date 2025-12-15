import { useState } from 'react';
import { User, Mail, Lock, Eye, EyeOff, Building, Phone, AlertCircle, Loader2, CheckCircle } from 'lucide-react';

interface SignUpFormProps {
  onSignUpSuccess: () => void;
  onBackToLogin: () => void;
}

export function SignUpForm({ onSignUpSuccess, onBackToLogin }: SignUpFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    password: '',
    confirmPassword: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const passwordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength++;
    if (/\d/.test(password)) strength++;
    if (/[^a-zA-Z\d]/.test(password)) strength++;
    return strength;
  };

  const getStrengthColor = (strength: number) => {
    if (strength <= 1) return '#EF4444';
    if (strength === 2) return '#F59E0B';
    if (strength === 3) return '#10B981';
    return '#059669';
  };

  const getStrengthLabel = (strength: number) => {
    if (strength <= 1) return 'Weak';
    if (strength === 2) return 'Fair';
    if (strength === 3) return 'Good';
    return 'Strong';
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    // Validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    if (passwordStrength(formData.password) < 2) {
      setError('Password is too weak. Use at least 8 characters with mixed case and numbers.');
      return;
    }

    if (!agreeToTerms) {
      setError('You must agree to the Terms of Service and Privacy Policy');
      return;
    }

    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      onSignUpSuccess();
      setIsLoading(false);
    }, 2000);
  };

  const strength = passwordStrength(formData.password);

  return (
    <div className="bg-white rounded-2xl p-12 shadow-lg shadow-[#8B5CF6]/8 max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-[#1F2937] mb-2">Create Account</h1>
        <p className="text-sm text-[#6B7280]">Join WheezeEase Admin Portal</p>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 bg-[#FEF2F2] border-l-4 border-[#EF4444] rounded-lg p-4 flex items-start gap-3">
          <AlertCircle className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#EF4444]">{error}</p>
        </div>
      )}

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Full Name
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <User className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Enter your full name"
              className="w-full h-12 pl-12 pr-4 border border-[#E5E7EB] rounded-lg text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Email Address
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              className="w-full h-12 pl-12 pr-4 border border-[#E5E7EB] rounded-lg text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Phone Number
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <Phone className="w-5 h-5" />
            </div>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              placeholder="+1 (555) 000-0000"
              className="w-full h-12 pl-12 pr-4 border border-[#E5E7EB] rounded-lg text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* Organization */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Organization / Department
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <Building className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={formData.organization}
              onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
              placeholder="Your organization or department"
              className="w-full h-12 pl-12 pr-4 border border-[#E5E7EB] rounded-lg text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* Password */}
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
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              placeholder="Create a strong password"
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
          {/* Password Strength Indicator */}
          {formData.password && (
            <div className="mt-2">
              <div className="flex items-center gap-2 mb-1">
                <div className="flex-1 h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div
                    className="h-full transition-all duration-300"
                    style={{
                      width: `${(strength / 4) * 100}%`,
                      backgroundColor: getStrengthColor(strength)
                    }}
                  />
                </div>
                <span className="text-xs font-medium" style={{ color: getStrengthColor(strength) }}>
                  {getStrengthLabel(strength)}
                </span>
              </div>
              <p className="text-xs text-[#6B7280]">
                Use 8+ characters with uppercase, lowercase, numbers & symbols
              </p>
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Confirm Password
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <Lock className="w-5 h-5" />
            </div>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={formData.confirmPassword}
              onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
              placeholder="Re-enter your password"
              className="w-full h-12 pl-12 pr-12 border border-[#E5E7EB] rounded-lg text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#1F2937] transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          {formData.confirmPassword && (
            <div className="mt-1.5 flex items-center gap-1.5">
              {formData.password === formData.confirmPassword ? (
                <>
                  <CheckCircle className="w-4 h-4 text-[#10B981]" />
                  <span className="text-xs text-[#10B981]">Passwords match</span>
                </>
              ) : (
                <>
                  <AlertCircle className="w-4 h-4 text-[#EF4444]" />
                  <span className="text-xs text-[#EF4444]">Passwords do not match</span>
                </>
              )}
            </div>
          )}
        </div>

        {/* Terms and Conditions */}
        <div className="pt-2">
          <label className="flex items-start gap-3 cursor-pointer group">
            <input
              type="checkbox"
              checked={agreeToTerms}
              onChange={(e) => setAgreeToTerms(e.target.checked)}
              className="w-5 h-5 mt-0.5 rounded border-[#E5E7EB] text-[#8B5CF6] focus:ring-[#8B5CF6] focus:ring-offset-0 cursor-pointer"
              required
            />
            <span className="text-sm text-[#6B7280] leading-relaxed group-hover:text-[#1F2937] transition-colors">
              I agree to the{' '}
              <a href="#" className="text-[#8B5CF6] hover:text-[#7C3AED] font-medium">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#" className="text-[#8B5CF6] hover:text-[#7C3AED] font-medium">
                Privacy Policy
              </a>
            </span>
          </label>
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
              Creating Account...
            </>
          ) : (
            'Create Account'
          )}
        </button>

        {/* Info Notice */}
        <div className="bg-[#F3E8FF] border border-[#8B5CF6]/30 rounded-lg p-4 flex items-start gap-3">
          <Mail className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm text-[#1F2937] mb-1">
              Account requires approval
            </p>
            <p className="text-xs text-[#6B7280]">
              Your account will be reviewed by our team. You'll receive an email once approved.
            </p>
          </div>
        </div>
      </form>

      {/* Back to Login */}
      <div className="mt-6 pt-6 border-t border-[#E5E7EB]">
        <p className="text-center text-sm text-[#6B7280]">
          Already have an account?{' '}
          <button
            onClick={onBackToLogin}
            className="text-[#8B5CF6] hover:text-[#7C3AED] font-semibold transition-colors"
          >
            Sign in here
          </button>
        </p>
      </div>
    </div>
  );
}
