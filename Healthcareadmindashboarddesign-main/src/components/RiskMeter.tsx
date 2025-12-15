import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import { Download } from 'lucide-react';

const data = [
  { name: 'Low Risk', value: 55, color: '#06B6D4' },
  { name: 'Medium Risk', value: 30, color: '#A855F7' },
  { name: 'High Risk', value: 15, color: '#EC4899' },
];

export function RiskMeter() {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl text-white">High-Risk Monitor</h2>
          <p className="text-sm text-gray-400 mt-1">Active risk distribution</p>
        </div>
        <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

      <div className="flex items-center gap-8">
        <div className="relative w-48 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={60}
                outerRadius={80}
                startAngle={90}
                endAngle={-270}
                dataKey="value"
                strokeWidth={0}
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="text-4xl text-white">150</span>
            <span className="text-sm text-gray-400 mt-1">Active Cases</span>
          </div>
        </div>

        <div className="flex-1 space-y-4">
          {data.map((item) => (
            <div key={item.name} className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div 
                  className="w-3 h-3 rounded-full shadow-lg"
                  style={{ 
                    backgroundColor: item.color,
                    boxShadow: `0 0 12px ${item.color}80`
                  }}
                />
                <span className="text-sm text-gray-300">{item.name}</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                  <div 
                    className="h-full rounded-full transition-all"
                    style={{ 
                      width: `${item.value}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
                <span className="text-sm text-white w-12 text-right">{item.value}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
