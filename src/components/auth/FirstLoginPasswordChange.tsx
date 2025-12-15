import { useState } from 'react';
import { Lock, Eye, EyeOff, Check, X, Key, Loader2, AlertTriangle } from 'lucide-react';

interface FirstLoginPasswordChangeProps {
  onPasswordChanged: () => void;
}

export function FirstLoginPasswordChange({ onPasswordChanged }: FirstLoginPasswordChangeProps) {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Password requirements
  const requirements = [
    { label: 'Minimum 12 characters', met: newPassword.length >= 12 },
    { label: 'Uppercase letter', met: /[A-Z]/.test(newPassword) },
    { label: 'Lowercase letter', met: /[a-z]/.test(newPassword) },
    { label: 'Number', met: /[0-9]/.test(newPassword) },
    { label: 'Special character', met: /[!@#$%^&*(),.?":{}|<>]/.test(newPassword) }
  ];

  const allRequirementsMet = requirements.every(req => req.met);
  const passwordsMatch = newPassword && confirmPassword && newPassword === confirmPassword;
  const canSubmit = allRequirementsMet && passwordsMatch && currentPassword;

  // Password strength
  const getPasswordStrength = () => {
    const metCount = requirements.filter(req => req.met).length;
    if (metCount === 5) return { label: 'Strong', color: '#22C55E', width: '100%' };
    if (metCount >= 3) return { label: 'Medium', color: '#F59E0B', width: '66%' };
    if (metCount >= 1) return { label: 'Weak', color: '#EF4444', width: '33%' };
    return { label: '', color: '#E5E7EB', width: '0%' };
  };

  const strength = getPasswordStrength();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!canSubmit) return;

    setIsLoading(true);
    // Simulate API call
    setTimeout(() => {
      onPasswordChanged();
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="bg-white rounded-2xl p-12 shadow-lg shadow-[#8B5CF6]/8">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl mb-4">
          <Key className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-[#1F2937] mb-2">Change Your Password</h1>
        <p className="text-sm text-[#6B7280]">
          For security, please create a new password
        </p>
      </div>

      {/* Alert */}
      <div className="mb-6 bg-[#FFFBEB] border-l-4 border-[#F59E0B] rounded-lg p-4 flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-[#F59E0B] flex-shrink-0 mt-0.5" />
        <div className="flex-1">
          <p className="text-sm font-medium text-[#92400E] mb-1">
            This is your first login
          </p>
          <p className="text-sm text-[#92400E]">
            You must change your temporary password to continue.
          </p>
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Current Password */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Temporary Password
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <Lock className="w-5 h-5" />
            </div>
            <input
              type={showCurrentPassword ? 'text' : 'password'}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              placeholder="Enter temporary password"
              className="w-full h-12 pl-12 pr-12 border border-[#E5E7EB] rounded-lg text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowCurrentPassword(!showCurrentPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#1F2937] transition-colors"
            >
              {showCurrentPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* New Password */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            New Password
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <Lock className="w-5 h-5" />
            </div>
            <input
              type={showNewPassword ? 'text' : 'password'}
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              placeholder="Create a strong password"
              className="w-full h-12 pl-12 pr-12 border border-[#E5E7EB] rounded-lg text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
              required
            />
            <button
              type="button"
              onClick={() => setShowNewPassword(!showNewPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#1F2937] transition-colors"
            >
              {showNewPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
          </div>
          
          {/* Password Strength Indicator */}
          {newPassword && (
            <div className="mt-2">
              <div className="flex items-center justify-between mb-1">
                <span className="text-xs text-[#6B7280]">Password strength:</span>
                <span className="text-xs font-semibold" style={{ color: strength.color }}>
                  {strength.label}
                </span>
              </div>
              <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                <div 
                  className="h-full transition-all duration-300 rounded-full"
                  style={{ 
                    width: strength.width,
                    backgroundColor: strength.color
                  }}
                />
              </div>
            </div>
          )}

          {/* Requirements Checklist */}
          {newPassword && (
            <div className="mt-3 space-y-1.5">
              {requirements.map((req, index) => (
                <div key={index} className="flex items-center gap-2">
                  {req.met ? (
                    <Check className="w-4 h-4 text-[#22C55E]" />
                  ) : (
                    <X className="w-4 h-4 text-[#E5E7EB]" />
                  )}
                  <span className={`text-xs ${req.met ? 'text-[#22C55E]' : 'text-[#6B7280]'}`}>
                    {req.label}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Confirm New Password
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <Lock className="w-5 h-5" />
            </div>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="Re-enter new password"
              className={`w-full h-12 pl-12 pr-12 border rounded-lg text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 transition-all ${
                confirmPassword && !passwordsMatch
                  ? 'border-[#EF4444] focus:ring-[#EF4444]'
                  : confirmPassword && passwordsMatch
                  ? 'border-[#22C55E] focus:ring-[#22C55E]'
                  : 'border-[#E5E7EB] focus:ring-[#8B5CF6]'
              }`}
              required
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#1F2937] transition-colors"
            >
              {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
            </button>
            {confirmPassword && (
              <div className="absolute right-12 top-1/2 -translate-y-1/2">
                {passwordsMatch ? (
                  <Check className="w-5 h-5 text-[#22C55E]" />
                ) : (
                  <X className="w-5 h-5 text-[#EF4444]" />
                )}
              </div>
            )}
          </div>
          {confirmPassword && !passwordsMatch && (
            <p className="mt-1.5 text-xs text-[#EF4444]">Passwords do not match</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={!canSubmit || isLoading}
          className="w-full h-[52px] bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white rounded-lg font-semibold text-base hover:shadow-lg hover:shadow-[#8B5CF6]/25 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Changing Password...
            </>
          ) : (
            'Change Password & Continue'
          )}
        </button>
      </form>

      {/* Footer */}
      <div className="mt-6 text-center">
        <p className="text-sm text-[#6B7280]">
          Need help?{' '}
          <a href="#" className="text-[#8B5CF6] hover:text-[#7C3AED] font-medium transition-colors">
            Contact System Administrator
          </a>
        </p>
      </div>
    </div>
  );
}
