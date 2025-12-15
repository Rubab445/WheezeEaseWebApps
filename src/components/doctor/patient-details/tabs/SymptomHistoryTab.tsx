import { Download, Calendar as CalendarIcon, ChevronDown } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const frequencyData = [
  { symptom: 'Wheezing', count: 45 },
  { symptom: 'Coughing', count: 38 },
  { symptom: 'Shortness of breath', count: 32 },
  { symptom: 'Chest tightness', count: 28 },
  { symptom: 'Sneezing', count: 24 },
  { symptom: 'Runny nose', count: 18 },
];

export function SymptomHistoryTab() {
  return (
    <div className="space-y-6">
      {/* Filter Bar */}
      <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Date Range */}
          <div className="relative">
            <button className="flex items-center gap-2 px-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-lg text-sm text-[#1F2937] hover:bg-gray-200 transition-colors">
              <CalendarIcon className="w-4 h-4" />
              Last 90 days
              <ChevronDown className="w-4 h-4" />
            </button>
          </div>

          {/* Severity Filter */}
          <div className="relative">
            <select className="appearance-none px-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-lg text-sm text-[#1F2937] cursor-pointer hover:bg-gray-200 focus:outline-none focus:border-[#059669]">
              <option>All Severity</option>
              <option>Mild</option>
              <option>Moderate</option>
              <option>Severe</option>
            </select>
          </div>

          {/* Symptom Type */}
          <div className="relative">
            <select className="appearance-none px-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-lg text-sm text-[#1F2937] cursor-pointer hover:bg-gray-200 focus:outline-none focus:border-[#059669]">
              <option>All Symptoms</option>
              <option>Wheezing</option>
              <option>Coughing</option>
              <option>Shortness of breath</option>
            </select>
          </div>
        </div>

        <button className="flex items-center gap-2 px-4 py-2 bg-[#059669] text-white rounded-lg hover:bg-[#048557] transition-colors">
          <Download className="w-4 h-4" />
          Export data
        </button>
      </div>

      {/* Symptom Frequency Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-[#1F2937] mb-6">Symptom Frequency (Last 90 days)</h2>
        
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={frequencyData} layout="vertical" margin={{ top: 5, right: 30, left: 120, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" horizontal={false} />
            <XAxis type="number" stroke="#6B7280" tick={{ fill: '#6B7280', fontSize: 12 }} />
            <YAxis 
              type="category" 
              dataKey="symptom" 
              stroke="#6B7280" 
              tick={{ fill: '#6B7280', fontSize: 12 }}
              width={110}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E0E0E0', 
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
            />
            <Bar dataKey="count" fill="#059669" radius={[0, 8, 8, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Symptom Severity Heatmap */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-[#1F2937] mb-6">Symptom Severity Heatmap (Last 90 days)</h2>
        
        <div className="grid grid-cols-13 gap-1">
          {Array.from({ length: 90 }).map((_, index) => {
            const severity = Math.floor(Math.random() * 10);
            const getColor = () => {
              if (severity === 0) return 'bg-gray-100';
              if (severity <= 3) return 'bg-[#22C55E]/30';
              if (severity <= 6) return 'bg-[#F59E0B]/50';
              return 'bg-[#EF4444]/70';
            };
            
            return (
              <div
                key={index}
                className={`aspect-square ${getColor()} rounded-sm hover:ring-2 hover:ring-[#059669] cursor-pointer transition-all`}
                title={`Severity: ${severity}/10`}
              />
            );
          })}
        </div>

        {/* Legend */}
        <div className="flex items-center justify-center gap-6 mt-6">
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-gray-100 rounded" />
            <span className="text-xs text-[#6B7280]">No symptoms</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#22C55E]/30 rounded" />
            <span className="text-xs text-[#6B7280]">Mild</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#F59E0B]/50 rounded" />
            <span className="text-xs text-[#6B7280]">Moderate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 bg-[#EF4444]/70 rounded" />
            <span className="text-xs text-[#6B7280]">Severe</span>
          </div>
        </div>
      </div>
    </div>
  );
}
