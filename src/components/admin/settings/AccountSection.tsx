import { Camera, Mail, Phone, User } from 'lucide-react';

interface AccountSectionProps {
  onChange: () => void;
}

export function AccountSection({ onChange }: AccountSectionProps) {
  return (
    <div className="space-y-6">
      {/* Admin Profile Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <h2 className="text-lg text-white mb-6">Admin Profile</h2>
        
        <div className="space-y-5">
          {/* Avatar Upload */}
          <div className="flex items-center gap-6">
            <div className="relative group">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white text-2xl">
                AD
              </div>
              <button className="absolute inset-0 bg-black/60 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Camera className="w-6 h-6 text-white" />
              </button>
            </div>
            <div>
              <h3 className="text-white font-medium mb-1">Admin User</h3>
              <p className="text-sm text-gray-400 mb-2">Upload a new profile picture</p>
              <button 
                onClick={onChange}
                className="text-sm text-purple-400 hover:text-purple-300 transition-colors"
              >
                Choose file
              </button>
            </div>
          </div>

          {/* Full Name */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
              <User className="w-4 h-4" />
              Full Name
            </label>
            <input
              type="text"
              defaultValue="Admin User"
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
            />
          </div>

          {/* Email (Read-only) */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
              <Mail className="w-4 h-4" />
              Email Address
            </label>
            <input
              type="email"
              defaultValue="admin@wheezeease.com"
              readOnly
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-gray-500 cursor-not-allowed"
            />
            <p className="text-xs text-gray-500 mt-1">Email cannot be changed</p>
          </div>

          {/* Phone Number */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
              <Phone className="w-4 h-4" />
              Phone Number
            </label>
            <input
              type="tel"
              defaultValue="+92 300 1234567"
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
            />
          </div>

          {/* Role Badge */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Role</label>
            <span className="inline-flex items-center px-4 py-2 rounded-lg bg-purple-500/20 text-purple-300 border border-purple-500/30 text-sm">
              Super Admin
            </span>
          </div>

          {/* Update Button */}
          <button className="w-full px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all">
            Update Profile
          </button>
        </div>
      </div>

      {/* Login Preferences Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <h2 className="text-lg text-white mb-6">Login Preferences</h2>
        
        <div className="space-y-4">
          {/* Email Notifications Toggle */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <p className="text-sm text-white">Email notifications for login</p>
              <p className="text-xs text-gray-500">Get notified when you sign in from a new device</p>
            </div>
            <button 
              onClick={onChange}
              className="relative w-12 h-6 rounded-full bg-purple-500 transition-all"
            >
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform" />
            </button>
          </div>

          {/* Remember Device Toggle */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <p className="text-sm text-white">Remember device (30 days)</p>
              <p className="text-xs text-gray-500">Stay signed in on this device</p>
            </div>
            <button 
              onClick={onChange}
              className="relative w-12 h-6 rounded-full bg-white/10 transition-all"
            >
              <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform" />
            </button>
          </div>

          {/* Session Timeout */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Session Timeout</label>
            <select 
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="15">15 minutes</option>
              <option value="30" selected>30 minutes</option>
              <option value="60">1 hour</option>
              <option value="240">4 hours</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
