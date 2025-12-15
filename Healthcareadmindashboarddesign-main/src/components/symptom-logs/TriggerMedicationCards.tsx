import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { ExternalLink } from 'lucide-react';

const triggerData = [
  { name: 'Pollen', value: 32, color: '#A855F7' },
  { name: 'Air Quality', value: 28, color: '#06B6D4' },
  { name: 'Dust', value: 18, color: '#EC4899' },
  { name: 'Smoke', value: 12, color: '#F97316' },
  { name: 'Weather', value: 10, color: '#3B82F6' },
];

export function TriggerMedicationCards() {
  const total = triggerData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Common Triggers - Donut Chart */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg text-white mb-6">Common Triggers</h3>
        
        <div className="flex items-center gap-8">
          <div className="flex-shrink-0 w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={triggerData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {triggerData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex-1 space-y-2">
            {triggerData.map((item) => {
              const percentage = ((item.value / total) * 100).toFixed(1);
              return (
                <div key={item.name} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-300">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-white font-medium">{item.value}%</span>
                    <span className="text-xs text-gray-500 w-12 text-right">{percentage}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-sm text-gray-400">Environmental correlation enabled</span>
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
        </div>
      </div>

      {/* Medication Adherence */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg text-white">Medication Adherence</h3>
          <button className="flex items-center gap-1 text-xs text-cyan-400 hover:text-cyan-300 transition-colors">
            View details
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>

        <div className="space-y-6">
          {/* Medication Taken */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-400">Logs with medication taken</span>
              <span className="text-2xl text-green-400 font-medium">68%</span>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full shadow-lg shadow-green-500/30 transition-all"
                style={{ width: '68%' }}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-500">849 logs</span>
              <span className="text-xs text-green-400">Good adherence</span>
            </div>
          </div>

          {/* Medication Missed */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <span className="text-sm text-gray-400">Missed medication</span>
              <span className="text-2xl text-red-400 font-medium">32%</span>
            </div>
            <div className="h-3 bg-white/5 rounded-full overflow-hidden">
              <div 
                className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full shadow-lg shadow-red-500/30 transition-all"
                style={{ width: '32%' }}
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <span className="text-xs text-gray-500">399 logs</span>
              <span className="text-xs text-red-400">Needs attention</span>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
            <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
              <p className="text-xs text-gray-400 mb-1">Avg adherence rate</p>
              <p className="text-xl text-white">73%</p>
            </div>
            <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
              <p className="text-xs text-gray-400 mb-1">Improvement vs last month</p>
              <p className="text-xl text-cyan-400">+5%</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
