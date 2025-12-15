import { X, ExternalLink, CheckCircle, Phone, Mail, Leaf, Wind, Droplets, Thermometer, Lightbulb, Pill, Bell, Activity, User } from 'lucide-react';
import { Alert } from '../../pages/AlertsPage';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

interface AlertDetailDrawerProps {
  alert: Alert | null;
  open: boolean;
  onClose: () => void;
}

const severityStyles = {
  Low: 'bg-green-500/20 text-green-400 border-green-500/30',
  Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  High: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  Critical: 'bg-red-500/20 text-red-400 border-red-500/30',
};

const recommendations = [
  {
    icon: Pill,
    title: 'Take rescue inhaler immediately',
    description: 'Use Albuterol inhaler as prescribed',
    color: 'text-purple-400'
  },
  {
    icon: Bell,
    title: 'Avoid outdoor activities',
    description: 'Pollen levels are extremely high today',
    color: 'text-pink-400'
  },
  {
    icon: Activity,
    title: 'Monitor symptoms closely',
    description: 'Log any changes in breathing patterns',
    color: 'text-cyan-400'
  },
  {
    icon: User,
    title: 'Contact primary doctor if symptoms worsen',
    description: 'Schedule follow-up if condition persists',
    color: 'text-blue-400'
  },
];

export function AlertDetailDrawer({ alert, open, onClose }: AlertDetailDrawerProps) {
  if (!alert || !open) return null;

  const gaugeData = [
    { name: 'Risk', value: alert.riskPercent, color: alert.riskPercent >= 80 ? '#EF4444' : alert.riskPercent >= 60 ? '#F59E0B' : '#10B981' },
    { name: 'Remaining', value: 100 - alert.riskPercent, color: '#1E293B' },
  ];

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-[480px] bg-[#0A0F1E] border-l border-white/10 shadow-2xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#0A0F1E]/95 backdrop-blur-xl border-b border-white/10 p-6 z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-white">Alert Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-purple-400 font-mono">#{alert.id}</span>
            <span className={`px-3 py-1 rounded-full border text-xs ${severityStyles[alert.severity]}`}>
              {alert.severity}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Patient Card */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-3">Patient Information</h3>
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                  <span className="text-sm text-white">{alert.patientAvatar}</span>
                </div>
                <div>
                  <p className="text-white font-medium">{alert.patientName}</p>
                  <div className="flex flex-col gap-1 mt-2">
                    <p className="text-xs text-gray-400 flex items-center gap-2">
                      <Mail className="w-3 h-3" />
                      {alert.patientEmail}
                    </p>
                    <p className="text-xs text-gray-400 flex items-center gap-2">
                      <Phone className="w-3 h-3" />
                      +92 300 1234567
                    </p>
                  </div>
                </div>
              </div>
              <button className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors px-3 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
                View user
                <ExternalLink className="w-3 h-3" />
              </button>
            </div>
          </div>

          {/* Risk Score Gauge */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-4">Risk Assessment</h3>
            
            <div className="flex items-center gap-6">
              <div className="w-32 h-32 flex-shrink-0">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={gaugeData}
                      cx="50%"
                      cy="50%"
                      startAngle={180}
                      endAngle={0}
                      innerRadius={40}
                      outerRadius={60}
                      paddingAngle={0}
                      dataKey="value"
                    >
                      {gaugeData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
                <div className="text-center -mt-12">
                  <p className="text-3xl text-white font-bold">{alert.riskPercent}%</p>
                  <p className="text-xs text-gray-400 mt-1">Risk Score</p>
                </div>
              </div>

              <div className="flex-1 space-y-2">
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-xs text-gray-400">Confidence Level</span>
                  <span className="text-sm text-green-400">High (94%)</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-xs text-gray-400">Alert Type</span>
                  <span className="text-sm text-white">{alert.type}</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                  <span className="text-xs text-gray-400">Status</span>
                  <span className={`px-3 py-1 rounded-full border text-xs ${
                    alert.status === 'Resolved' 
                      ? 'bg-green-500/20 text-green-400 border-green-500/30'
                      : alert.status === 'Reviewed'
                      ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30'
                      : 'bg-gray-500/20 text-gray-400 border-gray-500/30'
                  }`}>
                    {alert.status}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Trigger Summary */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-4">Environmental Triggers</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-pink-500/10 border border-pink-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-4 h-4 text-pink-400" />
                  <span className="text-xs text-gray-400">Pollen</span>
                </div>
                <p className="text-xl text-white">Very High</p>
                <p className="text-xs text-pink-400 mt-1">145 grains/m³</p>
              </div>

              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Wind className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-gray-400">AQI</span>
                </div>
                <p className="text-xl text-white">Unhealthy</p>
                <p className="text-xs text-purple-400 mt-1">112 AQI</p>
              </div>

              <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-gray-400">Humidity</span>
                </div>
                <p className="text-xl text-white">High</p>
                <p className="text-xs text-cyan-400 mt-1">72%</p>
              </div>

              <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="w-4 h-4 text-orange-400" />
                  <span className="text-xs text-gray-400">Temperature</span>
                </div>
                <p className="text-xl text-white">Warm</p>
                <p className="text-xs text-orange-400 mt-1">28°C</p>
              </div>
            </div>
          </div>

          {/* AI Recommendations */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-4 flex items-center gap-2">
              <Lightbulb className="w-4 h-4 text-yellow-400" />
              AI Recommendations
            </h3>
            
            <div className="space-y-3">
              {recommendations.map((rec, idx) => {
                const Icon = rec.icon;
                return (
                  <div key={idx} className="p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all">
                    <div className="flex items-start gap-3">
                      <Icon className={`w-5 h-5 ${rec.color} flex-shrink-0 mt-0.5`} />
                      <div>
                        <p className="text-sm text-white mb-1">{rec.title}</p>
                        <p className="text-xs text-gray-400">{rec.description}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Timeline */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-4">Timeline</h3>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2 flex-shrink-0" />
                <div className="flex-1">
                  <p className="text-sm text-white">Alert Created</p>
                  <p className="text-xs text-gray-500">{alert.createdDate} at {alert.createdTime}</p>
                </div>
              </div>

              {alert.status !== 'New' && (
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-yellow-500 mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-white">Reviewed by Admin</p>
                    <p className="text-xs text-gray-500">Dec 13, 2025 at 15:00</p>
                  </div>
                </div>
              )}

              {alert.status === 'Resolved' && (
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-green-500 mt-2 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-sm text-white">Alert Resolved</p>
                    <p className="text-xs text-gray-500">Dec 13, 2025 at 16:30</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pb-6">
            <button className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2">
              <CheckCircle className="w-4 h-4" />
              Mark as Reviewed
            </button>
            <button className="w-full px-5 py-3 rounded-xl bg-green-500/20 border border-green-500/30 text-green-300 hover:bg-green-500/30 transition-all">
              Resolve Alert
            </button>
            <button className="w-full px-5 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition-all">
              Escalate to Doctor
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
