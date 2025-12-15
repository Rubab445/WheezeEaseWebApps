import { Monitor, Smartphone, Tablet, MapPin, Check, X } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Badge } from '../../ui/badge';
import { SettingSection } from './SettingSection';
import { ToggleSwitch } from './ToggleSwitch';
import { useState } from 'react';

interface AccountSecurityTabProps {
  onChangesMade: () => void;
}

const activeSessions = [
  {
    id: 1,
    device: 'Windows PC - Chrome',
    icon: Monitor,
    location: 'Gujrat, Pakistan',
    ip: '192.168.1.1',
    lastActive: '2 minutes ago',
    isCurrent: true,
  },
  {
    id: 2,
    device: 'iPhone 14 - Safari',
    icon: Smartphone,
    location: 'Lahore, Pakistan',
    ip: '192.168.1.45',
    lastActive: '2 hours ago',
    isCurrent: false,
  },
  {
    id: 3,
    device: 'iPad Pro - Safari',
    icon: Tablet,
    location: 'Gujrat, Pakistan',
    ip: '192.168.1.32',
    lastActive: '1 day ago',
    isCurrent: false,
  },
];

const loginHistory = [
  { date: 'Dec 14, 2025 9:30 AM', device: 'Windows PC - Chrome', location: 'Gujrat, Pakistan', status: 'success' },
  { date: 'Dec 13, 2025 6:45 PM', device: 'iPhone 14 - Safari', location: 'Lahore, Pakistan', status: 'success' },
  { date: 'Dec 13, 2025 9:15 AM', device: 'Windows PC - Chrome', location: 'Gujrat, Pakistan', status: 'success' },
  { date: 'Dec 12, 2025 2:30 PM', device: 'iPad Pro - Safari', location: 'Gujrat, Pakistan', status: 'success' },
  { date: 'Dec 11, 2025 10:00 AM', device: 'Unknown Device', location: 'Karachi, Pakistan', status: 'failed' },
];

export function AccountSecurityTab({ onChangesMade }: AccountSecurityTabProps) {
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(false);
  const [passwordStrength, setPasswordStrength] = useState(0);

  const calculatePasswordStrength = (password: string) => {
    let strength = 0;
    if (password.length >= 8) strength += 25;
    if (password.match(/[a-z]/) && password.match(/[A-Z]/)) strength += 25;
    if (password.match(/[0-9]/)) strength += 25;
    if (password.match(/[^a-zA-Z0-9]/)) strength += 25;
    setPasswordStrength(strength);
  };

  return (
    <div>
      {/* Login & Password */}
      <SettingSection title="Login & Password" description="Manage your account credentials">
        <div className="space-y-6">
          {/* Current Email */}
          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Current Email
            </label>
            <div className="flex items-center gap-3">
              <Input
                type="email"
                value="dr.usman@wheezeease.pk"
                disabled
                className="flex-1 bg-[#F8F9FA]"
              />
              <Button variant="outline" className="border-[#059669] text-[#059669]">
                Change email
              </Button>
            </div>
          </div>

          {/* Change Password */}
          <div className="pt-6 border-t border-gray-200">
            <h4 className="font-medium text-[#1F2937] mb-4">Change Password</h4>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Current Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter current password"
                  onChange={onChangesMade}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  New Password
                </label>
                <Input
                  type="password"
                  placeholder="Enter new password"
                  onChange={(e) => {
                    calculatePasswordStrength(e.target.value);
                    onChangesMade();
                  }}
                  className="w-full"
                />
                {/* Password Strength Meter */}
                <div className="mt-2">
                  <div className="flex gap-1 mb-1">
                    {[25, 50, 75, 100].map((threshold) => (
                      <div
                        key={threshold}
                        className={`h-1 flex-1 rounded ${
                          passwordStrength >= threshold
                            ? passwordStrength === 100
                              ? 'bg-[#22C55E]'
                              : passwordStrength >= 75
                              ? 'bg-[#10B981]'
                              : passwordStrength >= 50
                              ? 'bg-[#F59E0B]'
                              : 'bg-red-500'
                            : 'bg-gray-200'
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-xs text-[#6B7280]">
                    {passwordStrength === 0 && 'Enter a password'}
                    {passwordStrength > 0 && passwordStrength < 50 && 'Weak password'}
                    {passwordStrength >= 50 && passwordStrength < 75 && 'Medium password'}
                    {passwordStrength >= 75 && passwordStrength < 100 && 'Strong password'}
                    {passwordStrength === 100 && 'Very strong password'}
                  </p>
                </div>
              </div>

              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Confirm New Password
                </label>
                <Input
                  type="password"
                  placeholder="Confirm new password"
                  onChange={onChangesMade}
                  className="w-full"
                />
              </div>

              <Button className="bg-[#059669] text-white hover:bg-[#047857]">
                Update password
              </Button>
            </div>
          </div>

          {/* Two-Factor Authentication */}
          <div className="pt-6 border-t border-gray-200">
            <h4 className="font-medium text-[#1F2937] mb-2">Two-Factor Authentication (2FA)</h4>
            <p className="text-sm text-[#6B7280] mb-4">
              Add an extra layer of security to your account
            </p>
            
            <ToggleSwitch
              enabled={twoFactorEnabled}
              onChange={(enabled) => {
                setTwoFactorEnabled(enabled);
                onChangesMade();
              }}
              label="Enable 2FA for enhanced security"
            />

            {twoFactorEnabled && (
              <div className="mt-4 p-4 bg-[#F8F9FA] rounded-lg">
                <p className="text-sm text-[#1F2937] mb-3">Scan this QR code with your authenticator app</p>
                <div className="w-48 h-48 bg-white rounded-lg border-2 border-gray-300 flex items-center justify-center mb-3">
                  <span className="text-xs text-[#6B7280]">QR Code Placeholder</span>
                </div>
                <Button size="sm" variant="outline">
                  Download backup codes
                </Button>
              </div>
            )}
          </div>
        </div>
      </SettingSection>

      {/* Active Sessions */}
      <SettingSection title="Active Sessions" description="Manage devices with access to your account">
        <div className="space-y-3">
          {activeSessions.map((session) => (
            <div
              key={session.id}
              className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center">
                  <session.icon className="w-6 h-6 text-[#6B7280]" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <p className="text-sm font-medium text-[#1F2937]">{session.device}</p>
                    {session.isCurrent && (
                      <Badge className="bg-[#22C55E] text-white hover:bg-[#22C55E] text-xs">
                        Current session
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#6B7280] mt-1">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {session.location}
                    </div>
                    <span>•</span>
                    <span>{session.ip}</span>
                    <span>•</span>
                    <span>{session.lastActive}</span>
                  </div>
                </div>
              </div>
              
              {!session.isCurrent && (
                <Button
                  variant="ghost"
                  size="sm"
                  className="text-red-500 hover:text-red-600 hover:bg-red-50"
                >
                  Revoke
                </Button>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <button className="text-sm text-[#059669] hover:text-[#047857] font-medium">
            View all sessions →
          </button>
        </div>
      </SettingSection>

      {/* Login History */}
      <SettingSection title="Login History" description="Recent account access attempts">
        <div className="space-y-2">
          {loginHistory.map((login, idx) => (
            <div
              key={idx}
              className="flex items-center justify-between py-3 border-b border-gray-200 last:border-0"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${
                  login.status === 'success' ? 'bg-[#22C55E]' : 'bg-red-500'
                }`} />
                <div>
                  <p className="text-sm font-medium text-[#1F2937]">{login.date}</p>
                  <p className="text-xs text-[#6B7280]">
                    {login.device} • {login.location}
                  </p>
                </div>
              </div>
              
              <Badge className={
                login.status === 'success'
                  ? 'bg-[#22C55E]/10 text-[#22C55E] hover:bg-[#22C55E]/10'
                  : 'bg-red-100 text-red-700 hover:bg-red-100'
              }>
                {login.status === 'success' ? (
                  <>
                    <Check className="w-3 h-3 mr-1" />
                    Success
                  </>
                ) : (
                  <>
                    <X className="w-3 h-3 mr-1" />
                    Failed
                  </>
                )}
              </Badge>
            </div>
          ))}
        </div>
      </SettingSection>
    </div>
  );
}
