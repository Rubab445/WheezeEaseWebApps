import { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  ArrowRight,
  X,
  Stethoscope,
  Shield,
} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { toast } from "sonner@2.0.3";

interface UnifiedLoginPageProps {
  onNavigateToCreateAccount: () => void;
  onNavigateToForgotPassword: () => void;
  onLoginSuccess: (portal: "admin" | "doctor") => void;
}

export function UnifiedLoginPage({
  onNavigateToCreateAccount,
  onNavigateToForgotPassword,
  onLoginSuccess,
}: UnifiedLoginPageProps) {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [selectedPortal, setSelectedPortal] = useState<"doctor" | "admin">(
    "doctor"
  );

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form");
      return;
    }

    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful!");

      setTimeout(() => {
        onLoginSuccess(selectedPortal);
      }, 500);
    }, 1500);
  };

  const handleSocialLogin = (provider: string) => {
    setIsLoading(true);

    // Simulate social login process
    setTimeout(() => {
      setIsLoading(false);
      toast.success(`Logged in with ${provider}!`);

      setTimeout(() => {
        onLoginSuccess(selectedPortal);
      }, 500);
    }, 1500);
  };

  return (
    <div className="flex h-screen bg-white overflow-hidden">
      {/* Left Side - Branding */}
      <div className="w-1/2 bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] relative flex flex-col overflow-hidden">
        {/* Logo */}
        <div className="pt-10 pl-10 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-xl">
              🫁
            </div>
            <div>
              <h1 className="text-xl font-bold text-[#059669]">WheezeEase</h1>
              <p className="text-xs text-[#6B7280]">Healthcare Platform</p>
            </div>
          </div>
        </div>

        {/* Main Illustration */}
        <div className="flex-1 flex items-center justify-center py-8">
          <div className="relative w-96 h-96">
            {/* Circular Platform Base */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Layered Circles */}
                <div className="w-80 h-80 rounded-full bg-white/50 backdrop-blur-sm flex items-center justify-center">
                  <div className="w-64 h-64 rounded-full bg-white/60 backdrop-blur-sm flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center shadow-2xl">
                      {/* Stethoscope Icon */}
                      <svg
                        className="w-32 h-32 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-[#06B6D4] rounded-full flex items-center justify-center shadow-lg animate-bounce">
                  <span className="text-2xl">💊</span>
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-[#10B981] rounded-full flex items-center justify-center shadow-lg animate-pulse">
                  <span className="text-2xl">🫀</span>
                </div>
                <div className="absolute top-1/4 -left-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">🩺</span>
                </div>
                <div className="absolute bottom-1/4 -right-8 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <span className="text-xl">📋</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tagline */}
        <div className="px-20 py-6 text-center">
          <h2 className="text-xl font-medium text-[#059669] mb-2">
            Welcome to WheezeEase
          </h2>
          <p className="text-sm text-[#6B7280]">
            AI-Powered Allergy & Asthma Management Platform
          </p>
        </div>

        {/* Footer */}
        <div className="px-10 pb-10 pt-4">
          <div className="text-xs text-[#6B7280]">
            <p>© 2025 WheezeEase. All rights reserved.</p>
            <div className="flex items-center gap-4 mt-2">
              <a href="#" className="hover:text-[#059669] transition-colors">
                Privacy Policy
              </a>
              <span>•</span>
              <a href="#" className="hover:text-[#059669] transition-colors">
                Terms of Service
              </a>
            </div>
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
          {/* Header */}
          <div className="mb-10">
            <h2 className="text-5xl font-extrabold text-[#0F172A] mb-4 leading-tight">
              Welcome Back
            </h2>
            <p className="text-lg text-[#475569] font-medium">
              Sign in to your account
            </p>
          </div>

          {/* Portal Selector */}
          <div className="mb-8 bg-gray-100 rounded-xl p-1 grid grid-cols-2 gap-1">
            <button
              type="button"
              onClick={() => setSelectedPortal("doctor")}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                selectedPortal === "doctor"
                  ? "bg-white text-[#059669] shadow-md"
                  : "text-[#6B7280] hover:text-[#059669]"
              }`}
            >
              <Stethoscope className="w-5 h-5" />
              <span>Doctor Portal</span>
            </button>
            <button
              type="button"
              onClick={() => setSelectedPortal("admin")}
              className={`flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all ${
                selectedPortal === "admin"
                  ? "bg-white text-[#8B5CF6] shadow-md"
                  : "text-[#6B7280] hover:text-[#8B5CF6]"
              }`}
            >
              <Shield className="w-5 h-5" />
              <span>Admin Portal</span>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Social Login */}
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => handleSocialLogin("Google")}
                disabled={isLoading}
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-lg text-base font-medium text-[#1F2937] hover:bg-gray-50 hover:border-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin text-[#4285F4]" />
                ) : (
                  <svg className="w-5 h-5" viewBox="0 0 24 24">
                    <path
                      fill="#4285F4"
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                    />
                    <path
                      fill="#34A853"
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    />
                    <path
                      fill="#FBBC05"
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    />
                    <path
                      fill="#EA4335"
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    />
                  </svg>
                )}
                <span>Google</span>
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin("Facebook")}
                disabled={isLoading}
                className="flex items-center justify-center gap-2 px-4 py-3 border-2 border-gray-300 rounded-lg text-base font-medium text-[#1F2937] hover:bg-gray-50 hover:border-gray-400 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <Loader2 className="w-5 h-5 animate-spin text-[#1877F2]" />
                ) : (
                  <svg
                    className="w-5 h-5 text-[#1877F2]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                )}
                <span>Facebook</span>
              </button>
            </div>

            {/* Divider */}
            <div className="relative my-8">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t-2 border-gray-200"></div>
              </div>
              <div className="relative flex justify-center text-sm font-medium uppercase">
                <span className="bg-white px-4 text-[#6B7280]">
                  Or continue with email
                </span>
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-base font-semibold text-[#0F172A] mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      email: e.target.value,
                    })
                  }
                  placeholder="your.email@example.com"
                  className={`w-full pl-12 pr-4 py-3.5 text-base border ${
                    errors.email ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent transition-all`}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-2 font-medium">
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-base font-semibold text-[#0F172A] mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280]" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={formData.password}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      password: e.target.value,
                    })
                  }
                  placeholder="Enter your password"
                  className={`w-full pl-12 pr-12 py-3.5 text-base border ${
                    errors.password ? "border-red-500" : "border-gray-300"
                  } rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-transparent transition-all`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#6B7280] hover:text-[#1F2937] transition-colors"
                >
                  {showPassword ? (
                    <EyeOff className="w-5 h-5" />
                  ) : (
                    <Eye className="w-5 h-5" />
                  )}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-500 mt-2 font-medium">
                  {errors.password}
                </p>
              )}
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={formData.rememberMe}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      rememberMe: e.target.checked,
                    })
                  }
                  className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <span className="text-base text-[#475569] font-medium">
                  Remember me
                </span>
              </label>
              <button
                type="button"
                onClick={onNavigateToForgotPassword}
                className="text-base text-[#059669] hover:underline font-bold"
              >
                Forgot Password?
              </button>
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
                  Signing in...
                </>
              ) : (
                <>
                  Sign In
                  <ArrowRight className="w-5 h-5 ml-2" />
                </>
              )}
            </Button>

            {/* Footer Link */}
            <p className="text-center text-base text-[#475569] font-medium">
              Don't have an account?{" "}
              <button
                type="button"
                onClick={onNavigateToCreateAccount}
                className="text-[#059669] font-bold hover:underline"
              >
                Create Account
              </button>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
