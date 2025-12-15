import { useState } from "react";
import { ArrowLeft } from "lucide-react";

type AuthPageType =
  | "login"
  | "2fa"
  | "forgot-password"
  | "reset-confirmation"
  | "create-admin"
  | "first-login-password"
  | "signup"
  | "signup-success";

interface AuthDemoPageProps {
  onBack?: () => void;
}

export function AuthDemoPage({ onBack }: AuthDemoPageProps) {
  const [selectedPage, setSelectedPage] = useState<AuthPageType>("login");

  const pages: { value: AuthPageType; label: string }[] = [
    { value: "login", label: "Admin Login" },
    { value: "2fa", label: "Two-Factor Auth" },
    { value: "forgot-password", label: "Forgot Password" },
    { value: "reset-confirmation", label: "Reset Confirmation" },
    { value: "create-admin", label: "Create Admin" },
    { value: "first-login-password", label: "First Login Password Change" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0F172A] via-[#1E293B] to-[#0F172A]">
      {/* Page Selector */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-[#1E293B]/95 backdrop-blur-md border-b border-white/10 px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {onBack && (
                <button
                  onClick={onBack}
                  className="flex items-center gap-2 px-4 py-2 bg-white/5 text-gray-400 rounded-lg hover:bg-white/10 hover:text-white transition-all"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back
                </button>
              )}
              <div>
                <h1 className="text-white font-bold text-lg">
                  Auth Pages Demo
                </h1>
                <p className="text-sm text-gray-400">
                  Select a page to preview
                </p>
              </div>
            </div>
            <div className="flex gap-2">
              {pages.map((page) => (
                <button
                  key={page.value}
                  onClick={() => setSelectedPage(page.value)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    selectedPage === page.value
                      ? "bg-[#8B5CF6] text-white shadow-lg shadow-[#8B5CF6]/25"
                      : "bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Auth Page Display */}
      <div className="pt-24 pb-12">
        <div className="max-w-2xl mx-auto px-6">
          <div className="bg-[#1E293B] border border-white/10 rounded-xl p-8 text-center">
            <h2 className="text-white text-xl font-semibold mb-2">Auth Demo</h2>
            <p className="text-gray-400 mb-4">
              Selected page:{" "}
              <span className="text-purple-400 font-medium capitalize">
                {selectedPage}
              </span>
            </p>
            <p className="text-sm text-gray-500">
              Use the unified login page for authentication. AdminAuthPage has
              been removed in favor of the unified auth flow.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
