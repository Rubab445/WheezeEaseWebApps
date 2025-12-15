import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Legend } from 'recharts';
import { ChevronDown } from 'lucide-react';

const data = [
  { month: 'Jan', low: 120, medium: 80, high: 40 },
  { month: 'Feb', low: 140, medium: 90, high: 35 },
  { month: 'Mar', low: 130, medium: 95, high: 50 },
  { month: 'Apr', low: 150, medium: 85, high: 45 },
  { month: 'May', low: 160, medium: 100, high: 55 },
  { month: 'Jun', low: 155, medium: 90, high: 48 },
  { month: 'Jul', low: 145, medium: 105, high: 60 },
  { month: 'Aug', low: 135, medium: 95, high: 52 },
  { month: 'Sep', low: 140, medium: 88, high: 45 },
  { month: 'Oct', low: 150, medium: 92, high: 50 },
  { month: 'Nov', low: 165, medium: 85, high: 42 },
  { month: 'Dec', low: 170, medium: 95, high: 48 },
];

export function RiskTrend() {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-start justify-between mb-6">
        <div>
          <h2 className="text-xl text-white">Predicted Risk Trend</h2>
          <p className="text-sm text-gray-400 mt-1">Monthly risk distribution</p>
          <div className="mt-4">
            <span className="text-3xl text-white">62</span>
            <span className="text-lg text-gray-400 ml-2">Avg Risk Score</span>
          </div>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 hover:bg-purple-500/20 transition-all text-sm">
          <span>Jan 2025 – Dec 2025</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="h-64 mt-6">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} barGap={0}>
            <CartesianGrid strokeDasharray="3 3" stroke="#1E293B" vertical={false} />
            <XAxis 
              dataKey="month" 
              tick={{ fill: '#94A3B8', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <YAxis 
              tick={{ fill: '#94A3B8', fontSize: 12 }}
              axisLine={false}
              tickLine={false}
            />
            <Legend 
              wrapperStyle={{ paddingTop: '20px' }}
              iconType="circle"
              formatter={(value) => {
                const labels: { [key: string]: string } = {
                  low: 'Low Risk',
                  medium: 'Medium Risk',
                  high: 'High Risk'
                };
                return <span style={{ color: '#94A3B8', fontSize: '12px' }}>{labels[value]}</span>;
              }}
            />
            <Bar 
              dataKey="low" 
              stackId="a" 
              fill="#06B6D4" 
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="medium" 
              stackId="a" 
              fill="#A855F7" 
              radius={[0, 0, 0, 0]}
            />
            <Bar 
              dataKey="high" 
              stackId="a" 
              fill="#EC4899" 
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
