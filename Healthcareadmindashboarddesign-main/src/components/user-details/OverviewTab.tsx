import { LineChart, Line, ResponsiveContainer, CartesianGrid, XAxis, YAxis, Tooltip, BarChart, Bar } from 'recharts';
import { ChevronDown, User, Mail, Phone, MapPin, Shield, Clock, Key, Smartphone, ExternalLink, Calendar } from 'lucide-react';

interface OverviewTabProps {
  role: 'Patient' | 'Doctor';
}

const riskData = [
  { day: '1', risk: 45, severity: 30 },
  { day: '5', risk: 52, severity: 38 },
  { day: '10', risk: 48, severity: 35 },
  { day: '15', risk: 65, severity: 48 },
  { day: '20', risk: 58, severity: 42 },
  { day: '25', risk: 72, severity: 55 },
  { day: '30', risk: 68, severity: 50 },
];

const envData = [
  { name: 'AQI', value: 112, fill: '#A855F7' },
  { name: 'Pollen', value: 145, fill: '#06B6D4' },
  { name: 'Humidity', value: 72, fill: '#EC4899' },
  { name: 'Temp', value: 28, fill: '#8B5CF6' },
];

export function OverviewTab({ role }: OverviewTabProps) {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Left Column - Analytics */}
      <div className="space-y-6">
        {/* Risk Trend Card */}
        <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg text-white">Risk Trend (30 days)</h3>
              <p className="text-sm text-gray-400 mt-1">Risk score and symptom severity tracking</p>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 transition-all text-xs">
              Last 30 days
              <ChevronDown className="w-3 h-3" />
            </button>
          </div>

          <div className="h-48">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={riskData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                <XAxis 
                  dataKey="day" 
                  tick={{ fill: '#94A3B8', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  label={{ value: 'Days', position: 'insideBottom', offset: -5, fill: '#64748B', fontSize: 11 }}
                />
                <YAxis 
                  tick={{ fill: '#94A3B8', fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  label={{ value: 'Score', angle: -90, position: 'insideLeft', fill: '#64748B', fontSize: 11 }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0E1629', 
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="risk" 
                  stroke="#A855F7" 
                  strokeWidth={2}
                  dot={{ fill: '#A855F7', r: 4 }}
                  name="Risk Score"
                />
                <Line 
                  type="monotone" 
                  dataKey="severity" 
                  stroke="#06B6D4" 
                  strokeWidth={2}
                  dot={{ fill: '#06B6D4', r: 4 }}
                  name="Severity"
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center gap-6 mt-4 pt-4 border-t border-white/5">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500" />
              <span className="text-xs text-gray-400">Risk Score</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500" />
              <span className="text-xs text-gray-400">Symptom Severity</span>
            </div>
          </div>
        </div>

        {/* Environment Correlation Card */}
        <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg text-white">Environment Correlation</h3>
              <p className="text-sm text-gray-400 mt-1">Environmental factors impact analysis</p>
            </div>
          </div>

          <div className="h-40 mb-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={envData} layout="vertical">
                <XAxis type="number" hide />
                <YAxis 
                  type="category" 
                  dataKey="name" 
                  tick={{ fill: '#94A3B8', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                  width={70}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#0E1629', 
                    border: '1px solid rgba(168, 85, 247, 0.3)',
                    borderRadius: '12px',
                    color: '#fff'
                  }}
                />
                <Bar 
                  dataKey="value" 
                  radius={[0, 8, 8, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-xl">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm text-green-400">Last sync: 2 mins ago</span>
            </div>
            <span className="text-xs text-green-300 px-2 py-1 rounded-full bg-green-500/20">API Online</span>
          </div>
        </div>
      </div>

      {/* Right Column - Info Cards */}
      <div className="space-y-6">
        {/* Basic Information */}
        <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg text-white mb-4 flex items-center gap-2">
            <User className="w-5 h-5 text-purple-400" />
            Basic Information
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Full Name</label>
                <p className="text-sm text-white">{role === 'Patient' ? 'Ayesha Khan' : 'Dr. Ali Raza'}</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Gender</label>
                <p className="text-sm text-white">{role === 'Patient' ? 'Female' : 'Male'}</p>
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Email Address</label>
              <p className="text-sm text-white flex items-center gap-2">
                <Mail className="w-4 h-4 text-cyan-400" />
                {role === 'Patient' ? 'ayesha.k@email.com' : 'dr.ali@clinic.com'}
              </p>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Phone Number</label>
              <p className="text-sm text-white flex items-center gap-2">
                <Phone className="w-4 h-4 text-cyan-400" />
                {role === 'Patient' ? '+92 300 1234567' : '+92 321 9876543'}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">City</label>
                <p className="text-sm text-white flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-pink-400" />
                  {role === 'Patient' ? 'Karachi' : 'Lahore'}
                </p>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Date of Birth</label>
                <p className="text-sm text-white flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  {role === 'Patient' ? 'Jan 15, 1992' : 'Mar 8, 1985'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Account & Security */}
        <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg text-white mb-4 flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" />
            Account & Security
          </h3>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Role</label>
                <span className={`px-3 py-1 rounded-full border text-xs ${
                  role === 'Patient' 
                    ? 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
                    : 'bg-purple-500/20 text-purple-400 border-purple-500/30'
                }`}>
                  {role}
                </span>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Status</label>
                <span className="px-3 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs">
                  Active
                </span>
              </div>
            </div>
            <div>
              <label className="text-xs text-gray-500 mb-1 block">Last Login</label>
              <p className="text-sm text-white flex items-center gap-2">
                <Clock className="w-4 h-4 text-green-400" />
                {role === 'Patient' ? '2 hours ago' : '30 mins ago'}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Password Reset Required</label>
                <p className="text-sm text-gray-400">No</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">2FA Enabled</label>
                <p className="text-sm text-white flex items-center gap-2">
                  <Smartphone className="w-4 h-4 text-green-400" />
                  Yes
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-white/5">
            <p className="text-xs text-gray-500 flex items-center gap-2">
              <Key className="w-3 h-3" />
              Role-based access is enforced by JWT
            </p>
          </div>
        </div>

        {/* Connections */}
        <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
          <h3 className="text-lg text-white mb-4">Connections</h3>
          {role === 'Patient' ? (
            <div>
              <label className="text-xs text-gray-500 mb-2 block">Primary Doctor</label>
              <div className="flex items-center justify-between p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-xs text-white">DA</span>
                  </div>
                  <div>
                    <p className="text-sm text-white">Dr. Ali Raza</p>
                    <p className="text-xs text-gray-400">Pulmonologist</p>
                  </div>
                </div>
                <button className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
                  View
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          ) : (
            <div>
              <label className="text-xs text-gray-500 mb-2 block">Assigned Patients</label>
              <div className="flex items-center justify-between p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <div>
                  <p className="text-2xl text-white">124</p>
                  <p className="text-xs text-gray-400 mt-1">Active patients under care</p>
                </div>
                <button className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors px-3 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30">
                  View list
                  <ExternalLink className="w-3 h-3" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
