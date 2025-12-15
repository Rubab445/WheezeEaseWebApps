import { Globe, Users, Brain, ExternalLink } from 'lucide-react';

interface SystemConfigSectionProps {
  onChange: () => void;
}

export function SystemConfigSection({ onChange }: SystemConfigSectionProps) {
  return (
    <div className="space-y-6">
      {/* General Settings Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
            <Globe className="w-5 h-5 text-purple-400" />
          </div>
          <h2 className="text-lg text-white">General Settings</h2>
        </div>
        
        <div className="space-y-4">
          {/* System Name */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">System Name</label>
            <input
              type="text"
              defaultValue="WheezeEase"
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
            />
          </div>

          {/* Timezone */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">System Timezone</label>
            <select 
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="utc">UTC (GMT+0:00)</option>
              <option value="pkt" selected>PKT - Pakistan Time (GMT+5:00)</option>
              <option value="ist">IST - India Time (GMT+5:30)</option>
              <option value="est">EST - Eastern Time (GMT-5:00)</option>
              <option value="pst">PST - Pacific Time (GMT-8:00)</option>
            </select>
          </div>

          {/* Date Format */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Date Format</label>
            <select 
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="dd/mm/yyyy">DD/MM/YYYY</option>
              <option value="mm/dd/yyyy" selected>MM/DD/YYYY</option>
              <option value="yyyy-mm-dd">YYYY-MM-DD</option>
            </select>
          </div>

          {/* Time Format */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <p className="text-sm text-white">24-hour time format</p>
              <p className="text-xs text-gray-500">Display time as 13:00 instead of 1:00 PM</p>
            </div>
            <button 
              onClick={onChange}
              className="relative w-12 h-6 rounded-full bg-white/10 transition-all"
            >
              <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform" />
            </button>
          </div>

          {/* Language */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Language</label>
            <select 
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="en" selected>English</option>
              <option value="ur">Urdu</option>
            </select>
          </div>
        </div>
      </div>

      {/* User Management Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <Users className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-lg text-white">User Management</h2>
        </div>
        
        <div className="space-y-4">
          {/* Auto-approve Doctors */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <p className="text-sm text-white">Auto-approve new doctors</p>
              <p className="text-xs text-gray-500">Automatically verify doctor registrations</p>
            </div>
            <button 
              onClick={onChange}
              className="relative w-12 h-6 rounded-full bg-white/10 transition-all"
            >
              <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform" />
            </button>
          </div>

          {/* Require Email Verification */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <p className="text-sm text-white">Require email verification</p>
              <p className="text-xs text-gray-500">Users must verify email before access</p>
            </div>
            <button 
              onClick={onChange}
              className="relative w-12 h-6 rounded-full bg-purple-500 transition-all"
            >
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform" />
            </button>
          </div>

          {/* Password Expiry */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Password Expiry</label>
            <select 
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="never" selected>Never</option>
              <option value="30">30 days</option>
              <option value="90">90 days</option>
              <option value="180">180 days</option>
            </select>
          </div>

          {/* Max Failed Login Attempts */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Max Failed Login Attempts</label>
            <input
              type="number"
              min="3"
              max="10"
              defaultValue="5"
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
            />
          </div>

          {/* Account Lockout Duration */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Account Lockout Duration</label>
            <select 
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="15">15 minutes</option>
              <option value="30" selected>30 minutes</option>
              <option value="60">1 hour</option>
              <option value="1440">24 hours</option>
            </select>
          </div>
        </div>
      </div>

      {/* AI & Predictions Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
            <Brain className="w-5 h-5 text-pink-400" />
          </div>
          <h2 className="text-lg text-white">AI & Predictions</h2>
        </div>
        
        <div className="space-y-4">
          {/* Enable AI Recommendations */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <p className="text-sm text-white">Enable AI recommendations</p>
              <p className="text-xs text-gray-500">Use AI for patient risk predictions</p>
            </div>
            <button 
              onClick={onChange}
              className="relative w-12 h-6 rounded-full bg-purple-500 transition-all"
            >
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform" />
            </button>
          </div>

          {/* Model Version */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Model Version</label>
            <select 
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="v1.0">v1.0 - Stable</option>
              <option value="v1.1">v1.1 - Enhanced</option>
              <option value="v2.0" selected>v2.0 - Latest (Recommended)</option>
            </select>
          </div>

          {/* Prediction Confidence Threshold */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm text-gray-400">Prediction confidence threshold</label>
              <span className="text-sm text-purple-400">75%</span>
            </div>
            <input
              type="range"
              min="60"
              max="95"
              defaultValue="75"
              onChange={onChange}
              className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>60%</span>
              <span>95%</span>
            </div>
          </div>

          {/* Auto-retrain Model */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <p className="text-sm text-white">Auto-retrain model</p>
              <p className="text-xs text-gray-500">Retrain with new data monthly</p>
            </div>
            <button 
              onClick={onChange}
              className="relative w-12 h-6 rounded-full bg-purple-500 transition-all"
            >
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform" />
            </button>
          </div>

          {/* Model Performance Link */}
          <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
            <ExternalLink className="w-4 h-4" />
            View Model Performance
          </button>
        </div>
      </div>
    </div>
  );
}
