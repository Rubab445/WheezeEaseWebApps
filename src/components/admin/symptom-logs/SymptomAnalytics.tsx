import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, ReferenceDot } from 'recharts';
import { ChevronDown } from 'lucide-react';

const symptomFrequencyData = [
  { symptom: 'Wheezing', count: 342, percentage: 27.4, color: '#A855F7' },
  { symptom: 'Shortness of breath', count: 298, percentage: 23.9, color: '#06B6D4' },
  { symptom: 'Chest tightness', count: 256, percentage: 20.5, color: '#EC4899' },
  { symptom: 'Coughing', count: 234, percentage: 18.8, color: '#3B82F6' },
  { symptom: 'Runny nose', count: 187, percentage: 15.0, color: '#8B5CF6' },
  { symptom: 'Sneezing', count: 156, percentage: 12.5, color: '#10B981' },
  { symptom: 'Itchy eyes', count: 134, percentage: 10.7, color: '#F59E0B' },
  { symptom: 'Difficulty breathing', count: 112, percentage: 9.0, color: '#EF4444' },
  { symptom: 'Fatigue', count: 98, percentage: 7.9, color: '#14B8A6' },
  { symptom: 'Headache', count: 76, percentage: 6.1, color: '#F97316' },
];

const severityTrendData = [
  { date: 'Dec 1', avgSeverity: 5.2, logCount: 35, isPeak: false },
  { date: 'Dec 5', avgSeverity: 5.8, logCount: 42, isPeak: false },
  { date: 'Dec 9', avgSeverity: 4.9, logCount: 38, isPeak: false },
  { date: 'Dec 13', avgSeverity: 7.2, logCount: 58, isPeak: true },
  { date: 'Dec 17', avgSeverity: 6.1, logCount: 45, isPeak: false },
  { date: 'Dec 21', avgSeverity: 8.4, logCount: 62, isPeak: true },
  { date: 'Dec 25', avgSeverity: 5.5, logCount: 41, isPeak: false },
  { date: 'Dec 29', avgSeverity: 6.3, logCount: 48, isPeak: false },
];

export function SymptomAnalytics() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Symptom Frequency - Bar Chart */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg text-white">Symptom Frequency</h3>
            <p className="text-sm text-gray-400 mt-1">Top 10 most reported symptoms</p>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 transition-all text-xs">
            Last 30 days
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={symptomFrequencyData} layout="vertical" margin={{ left: 20, right: 80 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" horizontal={false} />
              <XAxis type="number" hide />
              <YAxis 
                type="category" 
                dataKey="symptom" 
                tick={{ fill: '#94A3B8', fontSize: 12 }}
                axisLine={false}
                tickLine={false}
                width={140}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0E1629', 
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '12px',
                  color: '#fff'
                }}
                formatter={(value: any, name: string) => {
                  if (name === 'count') return [value, 'Count'];
                  return [value, name];
                }}
              />
              <Bar 
                dataKey="count" 
                radius={[0, 8, 8, 0]}
                fill="#A855F7"
                label={{ 
                  position: 'right', 
                  fill: '#94A3B8',
                  fontSize: 11,
                  formatter: (value: number, entry: any, index: number) => {
                    const dataPoint = symptomFrequencyData[index];
                    if (!dataPoint) return value;
                    return `${value} (${dataPoint.percentage}%)`;
                  }
                }}
              >
                {symptomFrequencyData.map((entry, index) => (
                  <Bar key={`bar-${index}`} dataKey="count" fill={entry.color} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
          <span className="text-sm text-gray-400">Total unique symptoms reported</span>
          <span className="text-xl text-white font-medium">24</span>
        </div>
      </div>

      {/* Severity Trend Over Time - Line Chart */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg text-white">Severity Trend Over Time</h3>
            <p className="text-sm text-gray-400 mt-1">Average severity score and log volume</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple-500 shadow-lg shadow-purple-500/50" />
              <span className="text-xs text-gray-400">Avg Severity</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-cyan-500 shadow-lg shadow-cyan-500/50" />
              <span className="text-xs text-gray-400">Log Count</span>
            </div>
          </div>
        </div>

        <div className="h-80">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={severityTrendData}>
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
                domain={[0, 10]}
                label={{ value: 'Severity (0-10)', angle: -90, position: 'insideLeft', fill: '#A855F7', fontSize: 11 }}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                tick={{ fill: '#94A3B8', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                label={{ value: 'Log Count', angle: 90, position: 'insideRight', fill: '#06B6D4', fontSize: 11 }}
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
                dataKey="avgSeverity" 
                stroke="#A855F7" 
                strokeWidth={3}
                dot={(props: any) => {
                  const { cx, cy, payload, index } = props;
                  return (
                    <circle
                      key={`severity-dot-${index}`}
                      cx={cx}
                      cy={cy}
                      r={payload.isPeak ? 6 : 4}
                      fill="#A855F7"
                      stroke="#0E1629"
                      strokeWidth={2}
                    />
                  );
                }}
                filter="url(#glow)"
                name="Avg Severity"
              />
              <Line 
                yAxisId="right"
                type="monotone" 
                dataKey="logCount" 
                stroke="#06B6D4" 
                strokeWidth={3}
                dot={{ fill: '#06B6D4', r: 4, strokeWidth: 2, stroke: '#0E1629' }}
                filter="url(#glow)"
                name="Log Count"
              />
              {severityTrendData.filter(d => d.isPeak).map((entry, index) => (
                <ReferenceDot
                  key={`peak-${index}`}
                  yAxisId="left"
                  x={entry.date}
                  y={entry.avgSeverity}
                  r={10}
                  fill="none"
                  stroke="#EF4444"
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-500" />
            <span className="text-xs text-gray-400">Red circles indicate peak high-severity days</span>
          </div>
        </div>
      </div>
    </div>
  );
}