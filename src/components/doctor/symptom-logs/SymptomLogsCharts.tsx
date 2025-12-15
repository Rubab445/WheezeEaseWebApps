import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell, PieChart, Pie, Legend } from 'recharts';

const symptomFrequencyData = [
  { date: 'Dec 1', mild: 8, moderate: 12, severe: 3 },
  { date: 'Dec 2', mild: 10, moderate: 15, severe: 5 },
  { date: 'Dec 3', mild: 7, moderate: 11, severe: 2 },
  { date: 'Dec 4', mild: 12, moderate: 18, severe: 7 },
  { date: 'Dec 5', mild: 9, moderate: 14, severe: 4 },
  { date: 'Dec 6', mild: 11, moderate: 16, severe: 6 },
  { date: 'Dec 7', mild: 13, moderate: 20, severe: 8 },
  { date: 'Dec 8', mild: 8, moderate: 13, severe: 3 },
  { date: 'Dec 9', mild: 10, moderate: 17, severe: 5 },
  { date: 'Dec 10', mild: 14, moderate: 22, severe: 9 },
  { date: 'Dec 11', mild: 11, moderate: 19, severe: 6 },
  { date: 'Dec 12', mild: 9, moderate: 15, severe: 4 },
  { date: 'Dec 13', mild: 12, moderate: 21, severe: 8 }
];

const symptomTypeData = [
  { name: 'Wheezing', value: 35, color: '#059669' },
  { name: 'Coughing', value: 28, color: '#10B981' },
  { name: 'Shortness of breath', value: 22, color: '#34D399' },
  { name: 'Chest tightness', value: 15, color: '#6EE7B7' }
];

export function SymptomLogsCharts() {
  const totalSymptoms = symptomTypeData.reduce((acc, item) => acc + item.value, 0);

  return (
    <div className="grid grid-cols-2 gap-5 mt-6">
      {/* Chart 1: Symptom Frequency */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-[#1F2937] mb-4">Symptom Frequency (Last 30 Days)</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={symptomFrequencyData}>
            <XAxis 
              dataKey="date" 
              stroke="#6B7280" 
              fontSize={12}
              angle={-45}
              textAnchor="end"
              height={80}
            />
            <YAxis stroke="#6B7280" fontSize={12} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#1F2937',
                border: 'none',
                borderRadius: '8px',
                color: '#fff'
              }}
              labelStyle={{ color: '#fff', marginBottom: '8px' }}
            />
            <Bar dataKey="mild" stackId="a" fill="#22C55E" radius={[0, 0, 0, 0]} name="Mild (1-3)" />
            <Bar dataKey="moderate" stackId="a" fill="#F59E0B" radius={[0, 0, 0, 0]} name="Moderate (4-7)" />
            <Bar dataKey="severe" stackId="a" fill="#EF4444" radius={[4, 4, 0, 0]} name="Severe (8-10)" />
          </BarChart>
        </ResponsiveContainer>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#22C55E] rounded" />
            <span className="text-sm text-[#6B7280]">Mild</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#F59E0B] rounded" />
            <span className="text-sm text-[#6B7280]">Moderate</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-[#EF4444] rounded" />
            <span className="text-sm text-[#6B7280]">Severe</span>
          </div>
        </div>
      </div>

      {/* Chart 2: Symptom Type Breakdown */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <h3 className="text-lg font-bold text-[#1F2937] mb-4">Symptom Type Breakdown</h3>
        <div className="relative">
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={symptomTypeData}
                cx="50%"
                cy="50%"
                innerRadius={70}
                outerRadius={110}
                paddingAngle={2}
                dataKey="value"
              >
                {symptomTypeData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip
                contentStyle={{
                  backgroundColor: '#1F2937',
                  border: 'none',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
            </PieChart>
          </ResponsiveContainer>
          {/* Center text */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <p className="text-3xl font-bold text-[#1F2937]">{totalSymptoms}</p>
            <p className="text-sm text-[#6B7280]">Total</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-3 mt-4">
          {symptomTypeData.map((item) => (
            <div key={item.name} className="flex items-center justify-between p-2 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded" style={{ backgroundColor: item.color }} />
                <span className="text-sm text-[#1F2937]">{item.name}</span>
              </div>
              <span className="text-sm font-bold text-[#1F2937]">{item.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
