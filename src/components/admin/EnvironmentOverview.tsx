import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Wind, Flower2, Droplets } from 'lucide-react';

const chartData = [
  { day: 1, aqi: 95, pollen: 120 },
  { day: 2, aqi: 102, pollen: 135 },
  { day: 3, aqi: 98, pollen: 125 },
  { day: 4, aqi: 110, pollen: 145 },
  { day: 5, aqi: 105, pollen: 140 },
  { day: 6, aqi: 115, pollen: 155 },
  { day: 7, aqi: 112, pollen: 150 },
  { day: 8, aqi: 108, pollen: 145 },
  { day: 9, aqi: 118, pollen: 160 },
  { day: 10, aqi: 112, pollen: 152 },
  { day: 11, aqi: 115, pollen: 158 },
  { day: 12, aqi: 110, pollen: 148 },
  { day: 13, aqi: 112, pollen: 150 },
  { day: 14, aqi: 108, pollen: 145 },
];

export function EnvironmentOverview() {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl text-white">Environment Snapshot</h2>
          <p className="text-sm text-gray-400 mt-1">14-day environmental trends</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50 animate-pulse" />
          <span className="text-xs text-green-400">API Status: Online</span>
        </div>
      </div>

      <div className="h-32 mb-6">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <Line 
              type="monotone" 
              dataKey="aqi" 
              stroke="#06B6D4" 
              strokeWidth={2}
              dot={false}
            />
            <Line 
              type="monotone" 
              dataKey="pollen" 
              stroke="#A855F7" 
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-3 gap-4">
        <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Wind className="w-4 h-4 text-cyan-400" />
            <span className="text-xs text-cyan-300">AQI Now</span>
          </div>
          <p className="text-2xl text-white">112</p>
          <p className="text-xs text-cyan-400 mt-1">Moderate</p>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Flower2 className="w-4 h-4 text-purple-400" />
            <span className="text-xs text-purple-300">Pollen</span>
          </div>
          <p className="text-2xl text-white">High</p>
          <p className="text-xs text-purple-400 mt-1">Level 8/10</p>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Droplets className="w-4 h-4 text-blue-400" />
            <span className="text-xs text-blue-300">Humidity</span>
          </div>
          <p className="text-2xl text-white">72%</p>
          <p className="text-xs text-blue-400 mt-1">Normal</p>
        </div>
      </div>
    </div>
  );
}
