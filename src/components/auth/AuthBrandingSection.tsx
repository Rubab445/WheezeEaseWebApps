import { Shield, BarChart3, Users, Settings, Database, Lock } from 'lucide-react';

interface AuthBrandingSectionProps {
  tagline: string;
}

export function AuthBrandingSection({ tagline }: AuthBrandingSectionProps) {
  return (
    <div className="flex-1 bg-gradient-to-br from-[#FAF5FF] to-[#F3E8FF] relative overflow-hidden flex flex-col">
      {/* Decorative Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle, #8B5CF6 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }} />
      </div>

      {/* Logo */}
      <div className="p-10 relative z-10">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] flex items-center justify-center shadow-lg">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-[#8B5CF6]">WheezeEase</h1>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-[#6B7280]" />
              <p className="text-sm text-[#6B7280]">Admin Portal</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Illustration */}
      <div className="flex-1 flex items-center justify-center relative z-10 px-10">
        <div className="relative">
          {/* Central Shield */}
          <div className="relative w-64 h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-3xl transform rotate-12 opacity-10 blur-2xl" />
            <div className="relative w-48 h-48 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-3xl flex items-center justify-center shadow-2xl shadow-purple-500/30">
              <Shield className="w-24 h-24 text-white" strokeWidth={1.5} />
              <div className="absolute -top-2 -right-2 w-12 h-12 bg-[#22C55E] rounded-full flex items-center justify-center shadow-lg">
                <svg className="w-7 h-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
          </div>

          {/* Floating Dashboard Card - Top Left */}
          <div className="absolute -top-8 -left-16 w-32 h-24 bg-white rounded-xl shadow-xl p-3 transform -rotate-6 hover:rotate-0 transition-transform">
            <BarChart3 className="w-6 h-6 text-[#8B5CF6] mb-2" />
            <div className="space-y-1">
              <div className="h-1.5 bg-[#8B5CF6]/30 rounded" />
              <div className="h-1.5 bg-[#8B5CF6]/20 rounded w-3/4" />
              <div className="h-1.5 bg-[#8B5CF6]/10 rounded w-1/2" />
            </div>
          </div>

          {/* Floating User Card - Top Right */}
          <div className="absolute -top-12 -right-20 w-36 h-20 bg-white rounded-xl shadow-xl p-3 transform rotate-6 hover:rotate-0 transition-transform">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#7C3AED]" />
              <div className="flex-1">
                <div className="h-2 bg-[#8B5CF6]/30 rounded mb-1.5" />
                <div className="h-2 bg-[#8B5CF6]/20 rounded w-2/3" />
              </div>
            </div>
          </div>

          {/* Floating Settings Icon - Bottom Left */}
          <div className="absolute -bottom-6 -left-12 w-16 h-16 bg-gradient-to-br from-[#8B5CF6] to-[#7C3AED] rounded-2xl shadow-xl flex items-center justify-center transform rotate-12 hover:rotate-0 transition-transform">
            <Settings className="w-8 h-8 text-white" />
          </div>

          {/* Floating Database Icon - Bottom Right */}
          <div className="absolute -bottom-10 -right-16 w-20 h-20 bg-white rounded-2xl shadow-xl flex items-center justify-center transform -rotate-12 hover:rotate-0 transition-transform">
            <Database className="w-10 h-10 text-[#8B5CF6]" />
          </div>

          {/* Connection Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ width: '400px', height: '400px', left: '-100px', top: '-100px' }}>
            <line x1="200" y1="200" x2="100" y2="120" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <line x1="200" y1="200" x2="300" y2="110" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <line x1="200" y1="200" x2="140" y2="280" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
            <line x1="200" y1="200" x2="280" y2="290" stroke="#8B5CF6" strokeWidth="1" strokeDasharray="4 4" opacity="0.3" />
          </svg>
        </div>
      </div>

      {/* Tagline */}
      <div className="relative z-10 px-10 pb-8">
        <div className="max-w-md mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <Shield className="w-5 h-5 text-[#8B5CF6]" />
            <h2 className="text-xl font-semibold text-[#8B5CF6]">{tagline}</h2>
          </div>
          
          {/* Security Badges */}
          <div className="flex items-center justify-center gap-3 mt-4">
            <div className="px-3 py-1.5 border border-[#8B5CF6]/30 rounded-full text-xs font-medium text-[#8B5CF6] flex items-center gap-1.5">
              <Lock className="w-3 h-3" />
              256-bit Encryption
            </div>
            <div className="px-3 py-1.5 border border-[#8B5CF6]/30 rounded-full text-xs font-medium text-[#8B5CF6]">
              HIPAA Compliant
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-10 relative z-10 border-t border-[#8B5CF6]/10">
        <div className="text-center">
          <p className="text-xs text-[#6B7280] mb-2">© 2025 WheezeEase Admin. All rights reserved.</p>
          <div className="flex items-center justify-center gap-4 text-xs">
            <a href="#" className="text-[#8B5CF6] hover:underline">Admin Support</a>
            <span className="text-[#E5E7EB]">|</span>
            <a href="#" className="text-[#8B5CF6] hover:underline">Documentation</a>
            <span className="text-[#E5E7EB]">|</span>
            <a href="#" className="text-[#8B5CF6] hover:underline">System Status</a>
          </div>
        </div>
      </div>
    </div>
  );
}
