import { ChevronDown } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, ComposedChart } from 'recharts';

const data = [
  { date: 'Nov 14', riskScore: 45, symptomSeverity: 3 },
  { date: 'Nov 17', riskScore: 52, symptomSeverity: 4 },
  { date: 'Nov 20', riskScore: 58, symptomSeverity: 5 },
  { date: 'Nov 23', riskScore: 72, symptomSeverity: 7 },
  { date: 'Nov 26', riskScore: 68, symptomSeverity: 6 },
  { date: 'Nov 29', riskScore: 75, symptomSeverity: 7 },
  { date: 'Dec 2', riskScore: 71, symptomSeverity: 6 },
  { date: 'Dec 5', riskScore: 65, symptomSeverity: 5 },
  { date: 'Dec 8', riskScore: 70, symptomSeverity: 6 },
  { date: 'Dec 11', riskScore: 68, symptomSeverity: 6 },
  { date: 'Dec 13', riskScore: 68, symptomSeverity: 5 },
];

export function RiskTrendChart() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
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
          <span className="text-xs text-[#6B7280]">Risk Score</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
          <span className="text-xs text-[#6B7280]">Symptom Severity</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-8 h-2 bg-[#EF4444]/20 rounded" />
          <span className="text-xs text-[#6B7280]">High-Risk Zone</span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={320}>
        <ComposedChart data={data} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
          <defs>
            <linearGradient id="highRiskZone" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#EF4444" stopOpacity={0.1} />
              <stop offset="100%" stopColor="#EF4444" stopOpacity={0.05} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" vertical={false} />
          
          {/* High-risk zone shading (above 70) */}
          <Area
            yAxisId="left"
            type="monotone"
            dataKey={() => 100}
            fill="url(#highRiskZone)"
            stroke="none"
            baseValue={70}
          />
          
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
            label={{ value: 'Risk Score', angle: -90, position: 'insideLeft', fill: '#6B7280', fontSize: 12 }}
            domain={[0, 100]}
          />
          <YAxis 
            yAxisId="right"
            orientation="right"
            stroke="#6B7280"
            tick={{ fill: '#6B7280', fontSize: 12 }}
            axisLine={{ stroke: '#E0E0E0' }}
            label={{ value: 'Severity', angle: 90, position: 'insideRight', fill: '#6B7280', fontSize: 12 }}
            domain={[0, 10]}
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
            dataKey="riskScore" 
            stroke="#059669" 
            strokeWidth={3}
            dot={{ fill: '#059669', r: 4 }}
            activeDot={{ r: 6 }}
            name="Risk Score"
          />
          <Line 
            yAxisId="right"
            type="monotone" 
            dataKey="symptomSeverity" 
            stroke="#F59E0B" 
            strokeWidth={3}
            dot={{ fill: '#F59E0B', r: 4 }}
            activeDot={{ r: 6 }}
            name="Symptom Severity"
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  );
}