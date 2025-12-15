import { useState, useRef, useEffect } from 'react';
import { Shield, ArrowLeft, Smartphone, Key, Loader2 } from 'lucide-react';

interface TwoFactorAuthFormProps {
  email: string;
  onVerifySuccess: () => void;
  onBackToLogin: () => void;
}

export function TwoFactorAuthForm({ email, onVerifySuccess, onBackToLogin }: TwoFactorAuthFormProps) {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timeLeft, setTimeLeft] = useState(45);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Countdown timer
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft]);

  const handleChange = (index: number, value: string) => {
    if (!/^\d*$/.test(value)) return; // Only allow digits

    const newCode = [...code];
    newCode[index] = value.slice(-1); // Only take last character
    setCode(newCode);
    setError('');

    // Auto-advance to next input
    if (value && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    // Auto-submit when all fields are filled
    if (newCode.every(digit => digit !== '') && index === 5) {
      handleVerify(newCode);
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newCode = pastedData.split('').concat(Array(6).fill('')).slice(0, 6);
    setCode(newCode);
    
    // Focus last filled input
    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex]?.focus();

    // Auto-submit if complete
    if (pastedData.length === 6) {
      handleVerify(newCode);
    }
  };

  const handleVerify = async (codeToVerify = code) => {
    setIsLoading(true);
    setError('');

    // Simulate API call
    setTimeout(() => {
      const codeString = codeToVerify.join('');
      if (codeString === '123456') {
        onVerifySuccess();
      } else {
        setError('Invalid code. Please try again.');
        setCode(['', '', '', '', '', '']);
        inputRefs.current[0]?.focus();
      }
      setIsLoading(false);
    }, 1000);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const isCodeComplete = code.every(digit => digit !== '');

  return (
    <div className="bg-white rounded-2xl p-12 shadow-lg shadow-[#8B5CF6]/8">
      {/* Header */}
      <div className="mb-8 text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl mb-4">
          <Shield className="w-8 h-8 text-white" />
        </div>
        <h1 className="text-3xl font-bold text-[#1F2937] mb-2">Two-Factor Authentication</h1>
        <p className="text-sm text-[#6B7280] mb-3">
          Enter the 6-digit code from your authenticator app
        </p>
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-[#F3E8FF] border border-[#8B5CF6]/30 rounded-lg">
          <div className="w-2 h-2 bg-[#8B5CF6] rounded-full animate-pulse" />
          <span className="text-sm font-medium text-[#8B5CF6]">
            Code expires in {formatTime(timeLeft)}
          </span>
        </div>
      </div>

      {/* Error Message */}
      {error && (
        <div className="mb-6 bg-[#FEF2F2] border-l-4 border-[#EF4444] rounded-lg p-4 text-sm text-[#EF4444]">
          {error}
        </div>
      )}

      {/* Code Input */}
      <div className="mb-8">
        <div className="flex items-center justify-center gap-3 mb-6">
          {code.map((digit, index) => (
            <input
              key={index}
              ref={el => inputRefs.current[index] = el}
              type="text"
              inputMode="numeric"
              maxLength={1}
              value={digit}
              onChange={(e) => handleChange(index, e.target.value)}
              onKeyDown={(e) => handleKeyDown(index, e)}
              onPaste={index === 0 ? handlePaste : undefined}
              className="w-14 h-16 text-center text-3xl font-bold border-2 border-[#E5E7EB] rounded-xl text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
              disabled={isLoading}
            />
          ))}
        </div>

        {/* Alternative Methods */}
        <div className="flex flex-col items-center gap-2">
          <button className="text-sm text-[#8B5CF6] hover:text-[#7C3AED] font-medium transition-colors flex items-center gap-1.5">
            <Key className="w-4 h-4" />
            Use backup code instead
          </button>
          <button className="text-sm text-[#8B5CF6] hover:text-[#7C3AED] font-medium transition-colors flex items-center gap-1.5">
            <Smartphone className="w-4 h-4" />
            Send code via SMS
          </button>
        </div>
      </div>

      {/* Verify Button */}
      <button
        onClick={() => handleVerify()}
        disabled={!isCodeComplete || isLoading}
        className="w-full h-[52px] bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white rounded-lg font-semibold text-base hover:shadow-lg hover:shadow-[#8B5CF6]/25 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
      >
        {isLoading ? (
          <>
            <Loader2 className="w-5 h-5 animate-spin" />
            Verifying...
          </>
        ) : (
          'Verify & Continue'
        )}
      </button>

      {/* Back to Login */}
      <div className="mt-6 text-center">
        <button
          onClick={onBackToLogin}
          className="text-sm text-[#8B5CF6] hover:text-[#7C3AED] font-medium transition-colors inline-flex items-center gap-1.5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to login
        </button>
      </div>
    </div>
  );
}
