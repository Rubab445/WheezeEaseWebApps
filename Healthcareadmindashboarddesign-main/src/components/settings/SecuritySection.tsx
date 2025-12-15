import { Lock, Smartphone, Monitor, MapPin, Shield, Download, ExternalLink, X } from 'lucide-react';
import { useState } from 'react';

interface SecuritySectionProps {
  onChange: () => void;
}

const activeSessions = [
  { id: '1', device: 'Windows PC - Chrome', location: 'Gujrat, Punjab', ip: '192.168.1.1', lastActive: '5 minutes ago', current: true },
  { id: '2', device: 'iPhone 13 - Safari', location: 'Lahore, Punjab', ip: '192.168.1.45', lastActive: '2 hours ago', current: false },
  { id: '3', device: 'MacBook Pro - Chrome', location: 'Islamabad, ICT', ip: '192.168.2.10', lastActive: '1 day ago', current: false },
];

export function SecuritySection({ onChange }: SecuritySectionProps) {
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange();
    const password = e.target.value;
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    if (/[^A-Za-z0-9]/.test(password)) strength += 25;
    setPasswordStrength(strength);
  };

  return (
    <div className="space-y-6">
      {/* Password & Authentication Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <h2 className="text-lg text-white mb-6">Password & Authentication</h2>
        
        <div className="space-y-4">
          {/* Current Password */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
              <Lock className="w-4 h-4" />
              Current Password
            </label>
            <input
              type="password"
              placeholder="Enter current password"
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
            />
          </div>

          {/* New Password */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">New Password</label>
            <input
              type="password"
              placeholder="Enter new password"
              onChange={handlePasswordChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
            />
          </div>

          {/* Confirm Password */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Confirm New Password</label>
            <input
              type="password"
              placeholder="Confirm new password"
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
            />
          </div>

          {/* Password Strength Indicator */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-gray-400">Password Strength</span>
              <span className={`text-xs ${
                passwordStrength === 0 ? 'text-gray-500' :
                passwordStrength <= 25 ? 'text-red-400' :
                passwordStrength <= 50 ? 'text-orange-400' :
                passwordStrength <= 75 ? 'text-yellow-400' :
                'text-green-400'
              }`}>
                {passwordStrength === 0 ? 'Not set' :
                 passwordStrength <= 25 ? 'Weak' :
                 passwordStrength <= 50 ? 'Fair' :
                 passwordStrength <= 75 ? 'Good' :
                 'Strong'}
              </span>
            </div>
            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
              <div 
                className={`h-full transition-all duration-300 ${
                  passwordStrength <= 25 ? 'bg-red-500' :
                  passwordStrength <= 50 ? 'bg-orange-500' :
                  passwordStrength <= 75 ? 'bg-yellow-500' :
                  'bg-green-500'
                }`}
                style={{ width: `${passwordStrength}%` }}
              />
            </div>
          </div>

          {/* Change Password Button */}
          <button className="w-full px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all">
            Change Password
          </button>

          {/* 2FA Section */}
          <div className="pt-4 border-t border-white/5">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <Smartphone className="w-5 h-5 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-white">Two-Factor Authentication</p>
                  <p className="text-xs text-gray-500">Add an extra layer of security</p>
                </div>
              </div>
              <button 
                onClick={() => {
                  setTwoFactorEnabled(!twoFactorEnabled);
                  onChange();
                }}
                className={`relative w-12 h-6 rounded-full transition-all ${
                  twoFactorEnabled ? 'bg-purple-500' : 'bg-white/10'
                }`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  twoFactorEnabled ? 'right-1' : 'left-1'
                }`} />
              </button>
            </div>

            {twoFactorEnabled && (
              <div className="mt-4 p-4 bg-white/5 rounded-lg border border-purple-500/30">
                <p className="text-sm text-gray-400 mb-3">Scan this QR code with your authenticator app</p>
                <div className="w-32 h-32 bg-white rounded-lg mx-auto mb-3 flex items-center justify-center">
                  <span className="text-xs text-gray-500">QR Code</span>
                </div>
                <p className="text-xs text-center text-gray-500">Or enter code: <span className="text-purple-400">ABCD-EFGH-IJKL</span></p>
              </div>
            )}

            {!twoFactorEnabled && (
              <button className="w-full px-5 py-2.5 rounded-lg border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all">
                Setup 2FA
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Active Sessions Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <h2 className="text-lg text-white mb-6">Active Sessions</h2>
        
        <div className="space-y-3 mb-4">
          {activeSessions.map((session) => (
            <div key={session.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                  <Monitor className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <p className="text-sm text-white">{session.device}</p>
                    {session.current && (
                      <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs">
                        Current
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {session.location}
                    </span>
                    <span>IP: {session.ip}</span>
                    <span>{session.lastActive}</span>
                  </div>
                </div>
              </div>
              {!session.current && (
                <button className="px-3 py-1.5 rounded-lg text-xs text-red-400 border border-red-500/30 hover:bg-red-500/10 transition-all">
                  Revoke
                </button>
              )}
            </div>
          ))}
        </div>

        <button className="w-full px-5 py-2.5 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all">
          Sign Out All Devices
        </button>
      </div>

      {/* Data Privacy Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <h2 className="text-lg text-white mb-6">Data Privacy</h2>
        
        <div className="space-y-4">
          {/* Compliance Badges */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">HIPAA Compliant</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30">
              <Shield className="w-4 h-4 text-green-400" />
              <span className="text-sm text-green-400">GDPR Compliant</span>
            </div>
          </div>

          {/* Links */}
          <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
            <ExternalLink className="w-4 h-4" />
            View Privacy Policy
          </button>

          {/* Download Audit Log */}
          <button className="w-full px-5 py-2.5 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
            <Download className="w-4 h-4" />
            Download Data Audit Log
          </button>
        </div>
      </div>
    </div>
  );
}
