import { X, MapPin, TrendingUp, Users, AlertTriangle, Download, Wind, Leaf, Droplets, Thermometer } from 'lucide-react';
import { Location } from '../../pages/EnvironmentPage';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface LocationDetailDrawerProps {
  location: Location | null;
  open: boolean;
  onClose: () => void;
}

const last24HoursAQI = [
  { time: '00:00', value: 95 },
  { time: '04:00', value: 88 },
  { time: '08:00', value: 102 },
  { time: '12:00', value: 118 },
  { time: '16:00', value: 125 },
  { time: '20:00', value: 112 },
];

const last24HoursPollen = [
  { time: '00:00', value: 6.5 },
  { time: '04:00', value: 5.8 },
  { time: '08:00', value: 7.2 },
  { time: '12:00', value: 8.5 },
  { time: '16:00', value: 8.8 },
  { time: '20:00', value: 8.2 },
];

export function LocationDetailDrawer({ location, open, onClose }: LocationDetailDrawerProps) {
  if (!location || !open) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-[500px] bg-[#0A0F1E] border-l border-white/10 shadow-2xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#0A0F1E]/95 backdrop-blur-xl border-b border-white/10 p-6 z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-white">Location Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <MapPin className="w-5 h-5 text-purple-400" />
            <div>
              <p className="text-white font-medium">{location.city}, {location.province}</p>
              <p className="text-xs text-gray-400">Pakistan</p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Current Conditions */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-4">Current Conditions</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Wind className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-gray-400">AQI</span>
                </div>
                <p className="text-2xl text-white mb-1">{location.aqi}</p>
                <span className="text-xs text-purple-400">{location.aqiStatus}</span>
              </div>

              <div className="p-4 bg-pink-500/10 border border-pink-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-4 h-4 text-pink-400" />
                  <span className="text-xs text-gray-400">Pollen</span>
                </div>
                <p className="text-2xl text-white mb-1">{location.pollenLevel}</p>
                <span className="text-xs text-pink-400">8.2/10 index</span>
              </div>

              <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-gray-400">Humidity</span>
                </div>
                <p className="text-2xl text-white mb-1">{location.humidity}%</p>
                <span className="text-xs text-cyan-400">High</span>
              </div>

              <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="w-4 h-4 text-orange-400" />
                  <span className="text-xs text-gray-400">Temperature</span>
                </div>
                <p className="text-2xl text-white mb-1">{location.temperature}°C</p>
                <span className="text-xs text-orange-400">Feels 30°C</span>
              </div>
            </div>
          </div>

          {/* 24-Hour AQI Trend */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-gray-400">AQI - Last 24 Hours</h3>
              <span className="text-xs text-purple-400">Live updates</span>
            </div>
            
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={last24HoursAQI}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis 
                    dataKey="time" 
                    tick={{ fill: '#94A3B8', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fill: '#94A3B8', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    width={30}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0E1629', 
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#A855F7" 
                    strokeWidth={2}
                    dot={{ fill: '#A855F7', r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* 24-Hour Pollen Trend */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-gray-400">Pollen Index - Last 24 Hours</h3>
              <span className="text-xs text-pink-400">Live updates</span>
            </div>
            
            <div className="h-32">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={last24HoursPollen}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
                  <XAxis 
                    dataKey="time" 
                    tick={{ fill: '#94A3B8', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis 
                    tick={{ fill: '#94A3B8', fontSize: 10 }}
                    axisLine={false}
                    tickLine={false}
                    width={30}
                    domain={[0, 10]}
                  />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0E1629', 
                      border: '1px solid rgba(236, 72, 153, 0.3)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#EC4899" 
                    strokeWidth={2}
                    dot={{ fill: '#EC4899', r: 3 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Patient Impact Stats */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-4 flex items-center gap-2">
              <Users className="w-4 h-4" />
              Patient Impact Statistics
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <span className="text-sm text-gray-400">Patients in area</span>
                <span className="text-lg text-white font-medium">{location.patientsCount}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <span className="text-sm text-gray-400">High-risk alerts (7d)</span>
                <span className="text-lg text-red-400 font-medium">8</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-xl">
                <span className="text-sm text-gray-400">Symptom logs (7d)</span>
                <span className="text-lg text-purple-400 font-medium">24</span>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="bg-gradient-to-br from-yellow-500/10 to-orange-500/10 border border-yellow-500/30 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-white mb-4 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-yellow-400" />
              Health Recommendations
            </h3>
            
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-3 bg-white/5 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 mt-2" />
                <p className="text-xs text-gray-300">Advise patients to limit outdoor activities during peak hours (12 PM - 4 PM)</p>
              </div>
              <div className="flex items-start gap-2 p-3 bg-white/5 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 mt-2" />
                <p className="text-xs text-gray-300">High pollen count detected - recommend pre-medication for allergic patients</p>
              </div>
              <div className="flex items-start gap-2 p-3 bg-white/5 rounded-lg">
                <div className="w-1.5 h-1.5 rounded-full bg-yellow-400 flex-shrink-0 mt-2" />
                <p className="text-xs text-gray-300">AQI above healthy levels - suggest using air purifiers indoors</p>
              </div>
            </div>
          </div>

          {/* Historical Data Selector */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-4">Historical Data</h3>
            
            <div className="flex gap-2">
              <button className="flex-1 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/50 text-purple-300 text-sm">
                Last 7 days
              </button>
              <button className="flex-1 px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-gray-400 text-sm hover:bg-white/10">
                Last 30 days
              </button>
            </div>

            <div className="mt-4 p-4 bg-white/5 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">Average AQI (7d)</span>
                <span className="text-sm text-white">106</span>
              </div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-400">Peak AQI recorded</span>
                <span className="text-sm text-red-400">128</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">Unhealthy days</span>
                <span className="text-sm text-orange-400">5 of 7</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pb-6">
            <button className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Export Location Data
            </button>
            <button className="w-full px-5 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <TrendingUp className="w-4 h-4" />
              View Full Analytics
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
