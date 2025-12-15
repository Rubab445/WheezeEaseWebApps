import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area, ReferenceLine } from 'recharts';
import { ChevronDown, Lightbulb } from 'lucide-react';
import { useState } from 'react';

const environmentalData = [
  { date: 'Dec 7', aqi: 85, pollen: 6.2, humidity: 65, temp: 24 },
  { date: 'Dec 8', aqi: 92, pollen: 7.1, humidity: 68, temp: 26 },
  { date: 'Dec 9', aqi: 105, pollen: 7.8, humidity: 70, temp: 27 },
  { date: 'Dec 10', aqi: 118, pollen: 8.5, humidity: 72, temp: 28 },
  { date: 'Dec 11', aqi: 112, pollen: 8.2, humidity: 71, temp: 29 },
  { date: 'Dec 12', aqi: 98, pollen: 7.5, humidity: 68, temp: 27 },
  { date: 'Dec 13', aqi: 112, pollen: 8.2, humidity: 72, temp: 28 },
];

const healthImpactData = [
  { date: 'Dec 7', alerts: 8, symptoms: 12 },
  { date: 'Dec 8', alerts: 12, symptoms: 18 },
  { date: 'Dec 9', alerts: 18, symptoms: 24 },
  { date: 'Dec 10', alerts: 24, symptoms: 32 },
  { date: 'Dec 11', alerts: 20, symptoms: 28 },
  { date: 'Dec 12', alerts: 14, symptoms: 20 },
  { date: 'Dec 13', alerts: 22, symptoms: 30 },
];

export function EnvironmentTrendCharts() {
  const [visibleLines, setVisibleLines] = useState({
    aqi: true,
    pollen: true,
    humidity: true,
    temp: true
  });

  const toggleLine = (line: keyof typeof visibleLines) => {
    setVisibleLines(prev => ({ ...prev, [line]: !prev[line] }));
  };

  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Environmental Trends Chart */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg text-white">Environmental Trends (7 days)</h3>
            <p className="text-sm text-gray-400 mt-1">Multi-parameter environmental monitoring</p>
          </div>
          <button className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 transition-all text-xs">
            Last 7 days
            <ChevronDown className="w-3 h-3" />
          </button>
        </div>

        {/* Legend with toggles */}
        <div className="flex items-center gap-4 mb-4 flex-wrap">
          <button
            onClick={() => toggleLine('aqi')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all ${
              visibleLines.aqi 
                ? 'bg-purple-500/20 border border-purple-500/50' 
                : 'bg-white/5 border border-white/10 opacity-50'
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span className={visibleLines.aqi ? 'text-purple-300' : 'text-gray-400'}>AQI</span>
          </button>
          <button
            onClick={() => toggleLine('pollen')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all ${
              visibleLines.pollen 
                ? 'bg-cyan-500/20 border border-cyan-500/50' 
                : 'bg-white/5 border border-white/10 opacity-50'
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-cyan-500" />
            <span className={visibleLines.pollen ? 'text-cyan-300' : 'text-gray-400'}>Pollen</span>
          </button>
          <button
            onClick={() => toggleLine('humidity')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all ${
              visibleLines.humidity 
                ? 'bg-pink-500/20 border border-pink-500/50' 
                : 'bg-white/5 border border-white/10 opacity-50'
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-pink-500" />
            <span className={visibleLines.humidity ? 'text-pink-300' : 'text-gray-400'}>Humidity</span>
          </button>
          <button
            onClick={() => toggleLine('temp')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-lg text-xs transition-all ${
              visibleLines.temp 
                ? 'bg-orange-500/20 border border-orange-500/50' 
                : 'bg-white/5 border border-white/10 opacity-50'
            }`}
          >
            <div className="w-3 h-3 rounded-full bg-orange-500" />
            <span className={visibleLines.temp ? 'text-orange-300' : 'text-gray-400'}>Temp</span>
          </button>
        </div>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={environmentalData}>
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
                domain={[0, 150]}
              />
              <YAxis 
                yAxisId="right"
                orientation="right"
                tick={{ fill: '#94A3B8', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
                domain={[0, 100]}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0E1629', 
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '12px',
                  color: '#fff'
                }}
              />
              {/* Unhealthy zone */}
              <ReferenceLine yAxisId="left" y={100} stroke="#F97316" strokeDasharray="3 3" opacity={0.3} />
              
              {visibleLines.aqi && (
                <Line 
                  yAxisId="left"
                  type="monotone" 
                  dataKey="aqi" 
                  stroke="#A855F7" 
                  strokeWidth={3}
                  dot={{ fill: '#A855F7', r: 4, strokeWidth: 2, stroke: '#0E1629' }}
                  filter="url(#glow)"
                  name="AQI"
                />
              )}
              {visibleLines.pollen && (
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="pollen" 
                  stroke="#06B6D4" 
                  strokeWidth={3}
                  dot={{ fill: '#06B6D4', r: 4, strokeWidth: 2, stroke: '#0E1629' }}
                  filter="url(#glow)"
                  name="Pollen Index"
                />
              )}
              {visibleLines.humidity && (
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="humidity" 
                  stroke="#EC4899" 
                  strokeWidth={3}
                  dot={{ fill: '#EC4899', r: 4, strokeWidth: 2, stroke: '#0E1629' }}
                  filter="url(#glow)"
                  name="Humidity %"
                />
              )}
              {visibleLines.temp && (
                <Line 
                  yAxisId="right"
                  type="monotone" 
                  dataKey="temp" 
                  stroke="#F97316" 
                  strokeWidth={3}
                  dot={{ fill: '#F97316', r: 4, strokeWidth: 2, stroke: '#0E1629' }}
                  filter="url(#glow)"
                  name="Temperature"
                />
              )}
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-4 pt-4 border-t border-white/5">
          <p className="text-xs text-gray-400">Orange dashed line indicates unhealthy AQI threshold (100+)</p>
        </div>
      </div>

      {/* Health Impact Correlation Chart */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg text-white">Health Impact Correlation</h3>
            <p className="text-sm text-gray-400 mt-1">Environmental conditions vs patient symptoms</p>
          </div>
        </div>

        <div className="h-72">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={healthImpactData}>
              <defs>
                <linearGradient id="alertsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#EF4444" stopOpacity={0}/>
                </linearGradient>
                <linearGradient id="symptomsGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#A855F7" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#A855F7" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
              <XAxis 
                dataKey="date" 
                tick={{ fill: '#94A3B8', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <YAxis 
                tick={{ fill: '#94A3B8', fontSize: 11 }}
                axisLine={false}
                tickLine={false}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#0E1629', 
                  border: '1px solid rgba(168, 85, 247, 0.3)',
                  borderRadius: '12px',
                  color: '#fff'
                }}
              />
              <Area 
                type="monotone" 
                dataKey="alerts" 
                stackId="1"
                stroke="#EF4444" 
                strokeWidth={2}
                fill="url(#alertsGradient)"
                name="High-risk Alerts"
              />
              <Area 
                type="monotone" 
                dataKey="symptoms" 
                stackId="1"
                stroke="#A855F7" 
                strokeWidth={2}
                fill="url(#symptomsGradient)"
                name="Symptom Logs"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <span className="text-xs text-gray-400">High-risk Alerts</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500" />
            <span className="text-xs text-gray-400">Symptom Logs</span>
          </div>
        </div>

        {/* Insight */}
        <div className="mt-4 pt-4 border-t border-white/5">
          <div className="flex items-start gap-3 p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
            <Lightbulb className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-white font-medium mb-1">Key Insight</p>
              <p className="text-xs text-gray-300">64% of high-risk alerts occurred during poor AQI days (&gt;100). Strong correlation detected between environmental conditions and patient symptoms.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}