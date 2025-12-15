import { PieChart, Pie, Cell, ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const severityData = [
  { name: 'Low', value: 42, color: '#06B6D4' },
  { name: 'Medium', value: 68, color: '#A855F7' },
  { name: 'High', value: 35, color: '#EC4899' },
  { name: 'Critical', value: 12, color: '#EF4444' },
];

const trendData = [
  { date: 'Dec 1', riskScore: 58, alertCount: 12 },
  { date: 'Dec 5', riskScore: 62, alertCount: 15 },
  { date: 'Dec 9', riskScore: 55, alertCount: 10 },
  { date: 'Dec 13', riskScore: 68, alertCount: 18 },
  { date: 'Dec 17', riskScore: 64, alertCount: 14 },
  { date: 'Dec 21', riskScore: 72, alertCount: 22 },
  { date: 'Dec 25', riskScore: 58, alertCount: 11 },
  { date: 'Dec 29', riskScore: 65, alertCount: 16 },
];

export function AlertsCharts() {
  const total = severityData.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Alerts by Severity - Donut Chart */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <h3 className="text-lg text-white mb-6">Alerts by Severity</h3>
        
        <div className="flex items-center gap-8">
          <div className="flex-shrink-0 w-48 h-48">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={severityData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={4}
                  dataKey="value"
                >
                  {severityData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex-1 space-y-3">
            {severityData.map((item) => {
              const percentage = ((item.value / total) * 100).toFixed(1);
              return (
                <div key={item.name} className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-sm text-gray-300">{item.name}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-white font-medium">{item.value}</span>
                    <span className="text-xs text-gray-500 w-12 text-right">{percentage}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-sm text-gray-400">Total Alerts</span>
          <span className="text-xl text-white font-medium">{total}</span>
        </div>
      </div>

      {/* Risk Trend Over Time - Line Chart */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-lg text-white">Risk Trend Over Time</h3>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
              <span className="text-xs text-gray-400">Risk Score</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
              <span className="text-xs text-gray-400">Alert Count</span>
            </div>
          </div>
        </div>

        <div className="h-56">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData}>
              <defs>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
                  <feMerge>
                    <feMergeNode in="coloredBlur"/>
                    <feMergeNode in="SourceGraphic"/>
                  </feMerge>
                </filter>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
              <XAxis 
                dataKey="date" 
                tick={{ fill: '#94A3B8', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                yAxisId="left"
                tick={{ fill: '#94A3B8', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                label={{ value: 'Risk Score', angle: -90, position: 'insideLeft', fill: '#A855F7', fontSize: 11 }}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                tick={{ fill: '#94A3B8', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                label={{ value: 'Alert Count', angle: 90, position: 'insideRight', fill: '#06B6D4', fontSize: 11 }}
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
                yAxisId="left"
                type="monotone" 
                dataKey="riskScore" 
                stroke="#A855F7" 
                strokeWidth={3}
                dot={{ fill: '#A855F7', r: 4, strokeWidth: 2, stroke: '#0E1629' }}
                filter="url(#glow)"
                name="Risk Score"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="alertCount" 
                stroke="#06B6D4" 
                strokeWidth={3}
                dot={{ fill: '#06B6D4', r: 4, strokeWidth: 2, stroke: '#0E1629' }}
                filter="url(#glow)"
                name="Alert Count"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
