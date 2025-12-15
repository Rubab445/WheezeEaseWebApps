import { Cloud, Wind, Droplets, AlertTriangle } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const environmentSymptomData = [
  { date: 'Dec 1', aqi: 85, pollen: 6, severity: 3 },
  { date: 'Dec 3', aqi: 102, pollen: 7, severity: 5 },
  { date: 'Dec 5', aqi: 118, pollen: 8, severity: 6 },
  { date: 'Dec 7', aqi: 95, pollen: 7, severity: 4 },
  { date: 'Dec 9', aqi: 125, pollen: 9, severity: 7 },
  { date: 'Dec 11', aqi: 112, pollen: 8, severity: 6 },
  { date: 'Dec 13', aqi: 110, pollen: 8, severity: 5 },
];

const alertsHistory = [
  {
    id: '1',
    date: 'Dec 13, 2025',
    time: '08:00 AM',
    type: 'High Pollen Alert',
    message: 'Pollen count forecast: High. Recommend staying indoors.',
    sent: true,
  },
  {
    id: '2',
    date: 'Dec 12, 2025',
    time: '07:30 AM',
    type: 'AQI Warning',
    message: 'Air quality unhealthy for sensitive groups (AQI: 125)',
    sent: true,
  },
  {
    id: '3',
    date: 'Dec 10, 2025',
    time: '06:00 PM',
    type: 'Weather Alert',
    message: 'Temperature dropping below 15°C tonight. May trigger symptoms.',
    sent: true,
  },
];

export function EnvironmentDataTab() {
  return (
    <div className="space-y-6">
      {/* Environment vs Symptoms Chart */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-[#1F2937] mb-6">Environment vs Symptoms Correlation</h2>
        
        <div className="flex items-center gap-6 mb-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#6B7280]" />
            <span className="text-xs text-[#6B7280]">AQI Levels</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F59E0B]" />
            <span className="text-xs text-[#6B7280]">Pollen Count</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#EF4444]" />
            <span className="text-xs text-[#6B7280]">Symptom Severity</span>
          </div>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={environmentSymptomData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
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
              label={{ value: 'AQI / Pollen', angle: -90, position: 'insideLeft', fill: '#6B7280', fontSize: 12 }}
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
              dataKey="aqi" 
              stroke="#6B7280" 
              strokeWidth={3}
              dot={{ fill: '#6B7280', r: 4 }}
              name="AQI"
            />
            <Line 
              yAxisId="left"
              type="monotone" 
              dataKey="pollen" 
              stroke="#F59E0B" 
              strokeWidth={3}
              dot={{ fill: '#F59E0B', r: 4 }}
              name="Pollen (x10)"
            />
            <Line 
              yAxisId="right"
              type="monotone" 
              dataKey="severity" 
              stroke="#EF4444" 
              strokeWidth={3}
              dot={{ fill: '#EF4444', r: 4 }}
              name="Symptom Severity"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Current Environment Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#6B7280]/10 rounded-xl flex items-center justify-center">
              <Wind className="w-6 h-6 text-[#6B7280]" />
            </div>
            <div>
              <p className="text-xs text-[#6B7280]">Current AQI</p>
              <p className="text-2xl font-bold text-[#1F2937]">112</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-[#F59E0B] text-white rounded-full text-xs font-medium">
            Moderate
          </span>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center">
              <span className="text-2xl">🌸</span>
            </div>
            <div>
              <p className="text-xs text-[#6B7280]">Pollen Count</p>
              <p className="text-2xl font-bold text-[#1F2937]">8/10</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-[#EF4444] text-white rounded-full text-xs font-medium">
            High
          </span>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#059669]/10 rounded-xl flex items-center justify-center">
              <Droplets className="w-6 h-6 text-[#059669]" />
            </div>
            <div>
              <p className="text-xs text-[#6B7280]">Humidity</p>
              <p className="text-2xl font-bold text-[#1F2937]">68%</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-[#22C55E] text-white rounded-full text-xs font-medium">
            Normal
          </span>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-[#059669]/10 rounded-xl flex items-center justify-center">
              <Cloud className="w-6 h-6 text-[#059669]" />
            </div>
            <div>
              <p className="text-xs text-[#6B7280]">Temperature</p>
              <p className="text-2xl font-bold text-[#1F2937]">28°C</p>
            </div>
          </div>
          <span className="px-3 py-1 bg-[#22C55E] text-white rounded-full text-xs font-medium">
            Comfortable
          </span>
        </div>
      </div>

      {/* Location-Specific Data */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-[#1F2937] mb-4">Location-Specific Data (Gujrat, Punjab)</h2>
        
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-xs font-medium text-[#6B7280] mb-2">Primary Seasonal Triggers</p>
            <div className="space-y-2">
              <div className="flex items-center justify-between p-2 bg-[#F8F9FA] rounded-lg">
                <span className="text-sm text-[#1F2937]">Spring (Mar-May)</span>
                <span className="text-xs font-medium text-[#EF4444]">Tree Pollen High</span>
              </div>
              <div className="flex items-center justify-between p-2 bg-[#F8F9FA] rounded-lg">
                <span className="text-sm text-[#1F2937]">Winter (Nov-Feb)</span>
                <span className="text-xs font-medium text-[#F59E0B]">Cold Air</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-[#6B7280] mb-2">Air Quality Trends</p>
            <div className="space-y-2">
              <div className="p-2 bg-[#F8F9FA] rounded-lg">
                <p className="text-sm text-[#1F2937] mb-1">Weekly Average AQI</p>
                <p className="text-xl font-bold text-[#F59E0B]">105</p>
              </div>
              <div className="p-2 bg-[#F8F9FA] rounded-lg">
                <p className="text-sm text-[#1F2937] mb-1">Worst Hours</p>
                <p className="text-xs text-[#6B7280]">7-9 AM, 6-8 PM</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-[#6B7280] mb-2">Recommendations</p>
            <div className="space-y-2">
              <div className="flex items-start gap-2 p-2 bg-[#059669]/10 rounded-lg border border-[#059669]/20">
                <AlertTriangle className="w-4 h-4 text-[#059669] mt-0.5 flex-shrink-0" />
                <p className="text-xs text-[#059669]">Avoid outdoor exercise 7-9 AM</p>
              </div>
              <div className="flex items-start gap-2 p-2 bg-[#059669]/10 rounded-lg border border-[#059669]/20">
                <AlertTriangle className="w-4 h-4 text-[#059669] mt-0.5 flex-shrink-0" />
                <p className="text-xs text-[#059669]">Keep windows closed during high pollen days</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Trigger Alerts History */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-[#1F2937] mb-4">Trigger Alerts Sent to Patient</h2>
        
        <div className="space-y-3">
          {alertsHistory.map((alert) => (
            <div key={alert.id} className="flex items-start gap-4 p-4 bg-[#F8F9FA] rounded-lg">
              <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <AlertTriangle className="w-5 h-5 text-[#F59E0B]" />
              </div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-bold text-[#1F2937]">{alert.type}</p>
                    <p className="text-xs text-[#6B7280]">{alert.date} at {alert.time}</p>
                  </div>
                  <span className="px-2.5 py-1 bg-[#22C55E] text-white rounded-full text-xs font-medium">
                    Sent
                  </span>
                </div>
                <p className="text-sm text-[#6B7280]">{alert.message}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
