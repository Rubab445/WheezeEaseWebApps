import { ChevronDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
  { date: 'Dec 1', avgRisk: 45, highRiskCount: 12 },
  { date: 'Dec 4', avgRisk: 48, highRiskCount: 14 },
  { date: 'Dec 7', avgRisk: 52, highRiskCount: 16 },
  { date: 'Dec 10', avgRisk: 49, highRiskCount: 15 },
  { date: 'Dec 13', avgRisk: 55, highRiskCount: 18 },
  { date: 'Dec 16', avgRisk: 53, highRiskCount: 17 },
  { date: 'Dec 19', avgRisk: 51, highRiskCount: 16 },
  { date: 'Dec 22', avgRisk: 48, highRiskCount: 15 },
  { date: 'Dec 25', avgRisk: 46, highRiskCount: 13 },
  { date: 'Dec 28', avgRisk: 50, highRiskCount: 18 },
];

export function RiskTrendChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-bold text-[#1F2937]">Risk Trend (30 days)</h2>
        <button className="flex items-center gap-2 px-3 py-1.5 bg-[#F8F9FA] rounded-lg text-sm text-[#6B7280] hover:bg-gray-200 transition-colors">
          Last 30 days
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="flex items-center gap-6 mb-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#059669]" />
          <span className="text-xs text-[#6B7280]">Average Risk Score</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
          <span className="text-xs text-[#6B7280]">High-Risk Cases</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" vertical={false} />
          <XAxis 
            dataKey="date" 
            stroke="#6B7280"
            tick={{ fill: '#6B7280', fontSize: 12 }}
            axisLine={{ stroke: '#E0E0E0' }}
          />
          <YAxis 
            yAxisId="left"
            stroke="#6B7280"
            tick={{ fill: '#6B7280', fontSize: 12 }}
            axisLine={{ stroke: '#E0E0E0' }}
            label={{ value: 'Avg Risk', angle: -90, position: 'insideLeft', fill: '#6B7280', fontSize: 12 }}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            stroke="#6B7280"
            tick={{ fill: '#6B7280', fontSize: 12 }}
            axisLine={{ stroke: '#E0E0E0' }}
            label={{ value: 'Count', angle: 90, position: 'insideRight', fill: '#6B7280', fontSize: 12 }}
          />
          <Tooltip 
            contentStyle={{ 
              backgroundColor: 'white', 
              border: '1px solid #E0E0E0', 
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
            }}
          />
          <Line 
            yAxisId="left"
            type="monotone" 
            dataKey="avgRisk" 
            stroke="#059669" 
            strokeWidth={3}
            dot={{ fill: '#059669', r: 4 }}
            activeDot={{ r: 6 }}
            name="Avg Risk Score"
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="highRiskCount" 
            stroke="#F59E0B" 
            strokeWidth={3}
            dot={{ fill: '#F59E0B', r: 4 }}
            activeDot={{ r: 6 }}
            name="High-Risk Cases"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}