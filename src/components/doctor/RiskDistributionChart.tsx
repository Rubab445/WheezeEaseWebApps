import { Download, ExternalLink } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Low Risk', value: 70, color: '#22C55E', percentage: 55 },
  { name: 'Medium Risk', value: 38, color: '#F59E0B', percentage: 30 },
  { name: 'High Risk', value: 19, color: '#EF4444', percentage: 15 },
];

export function RiskDistributionChart() {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-bold text-[#1F2937]">Patient Risk Distribution</h2>
        </div>
        <div className="flex items-center gap-2">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors" title="Export">
            <Download className="w-4 h-4 text-[#6B7280]" />
          </button>
          <button className="flex items-center gap-1 text-sm text-[#059669] hover:underline">
            View all
            <ExternalLink className="w-3 h-3" />
          </button>
        </div>
      </div>

      <div className="flex items-center justify-center mb-6">
        <div className="relative w-64 h-64">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={data}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={100}
                paddingAngle={2}
                dataKey="value"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <p className="text-4xl font-bold text-[#1F2937]">{total}</p>
            <p className="text-sm text-[#6B7280]">Total Patients</p>
          </div>
        </div>
      </div>

      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
            <div className="flex items-center gap-3">
              <div 
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-sm font-medium text-[#1F2937]">{item.name}</span>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm text-[#6B7280]">{item.value} patients</span>
              <span className="text-sm font-bold text-[#1F2937] min-w-[3rem] text-right">{item.percentage}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}