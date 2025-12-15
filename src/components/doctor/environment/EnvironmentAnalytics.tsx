import { TrendingUp, Calendar, Activity } from 'lucide-react';

export function EnvironmentAnalytics() {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 overflow-hidden">
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <h3 className="font-medium text-[#1F2937]">Environmental Trends & Analytics</h3>
        <div className="flex gap-2">
          <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-[#F8F9FA] transition-colors">
            Last 7 days
          </button>
          <button className="px-3 py-1.5 text-sm bg-[#059669] text-white rounded-lg">
            Last 30 days
          </button>
          <button className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg hover:bg-[#F8F9FA] transition-colors">
            Last 90 days
          </button>
        </div>
      </div>

      <div className="p-6">
        {/* Charts Row */}
        <div className="grid grid-cols-3 gap-6 mb-6">
          {/* Chart 1: AQI Trend */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TrendingUp className="w-4 h-4 text-[#059669]" />
              <h4 className="font-medium text-[#1F2937]">AQI Trend - Last 30 Days</h4>
            </div>
            <div className="bg-[#F8F9FA] rounded-lg h-48 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-[#6B7280]">Multi-line chart</p>
                <p className="text-xs text-[#9CA3AF] mt-1">AQI for top 5 locations</p>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              {['Gujrat', 'Lahore', 'Faisalabad', 'Multan', 'Islamabad'].map((city, idx) => (
                <div key={city} className="flex items-center gap-1.5">
                  <div
                    className="w-2 h-2 rounded-full"
                    style={{
                      backgroundColor: ['#EF4444', '#FB923C', '#F59E0B', '#10B981', '#22C55E'][idx],
                    }}
                  />
                  <span className="text-xs text-[#6B7280]">{city}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Chart 2: Pollen Season Pattern */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Calendar className="w-4 h-4 text-[#059669]" />
              <h4 className="font-medium text-[#1F2937]">Pollen Season Pattern</h4>
            </div>
            <div className="bg-[#F8F9FA] rounded-lg h-48 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-[#6B7280]">Seasonal chart</p>
                <p className="text-xs text-[#9CA3AF] mt-1">Pollen levels over time</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-xs text-[#6B7280]">
                Peak season: <span className="font-medium text-[#1F2937]">March - May</span>
              </p>
            </div>
          </div>

          {/* Chart 3: Environment vs Symptoms */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-4 h-4 text-[#059669]" />
              <h4 className="font-medium text-[#1F2937]">Environment vs Symptoms</h4>
            </div>
            <div className="bg-[#F8F9FA] rounded-lg h-48 flex items-center justify-center">
              <div className="text-center">
                <p className="text-sm text-[#6B7280]">Dual-axis chart</p>
                <p className="text-xs text-[#9CA3AF] mt-1">Correlation analysis</p>
              </div>
            </div>
            <div className="mt-3">
              <p className="text-xs text-[#6B7280]">
                Correlation: <span className="font-medium text-[#1F2937]">+0.78 (Strong)</span>
              </p>
            </div>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-gradient-to-br from-[#059669]/10 to-[#10B981]/10 rounded-lg p-4 border border-[#059669]/20">
            <p className="text-sm text-[#6B7280] mb-2">Strongest Trigger</p>
            <p className="text-xl font-bold text-[#1F2937] mb-1">High Pollen</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-white rounded-full h-2">
                <div className="bg-[#059669] h-2 rounded-full" style={{ width: '42%' }} />
              </div>
              <span className="text-xs font-medium text-[#059669]">42%</span>
            </div>
            <p className="text-xs text-[#6B7280] mt-2">correlation with symptoms</p>
          </div>

          <div className="bg-gradient-to-br from-amber-100/50 to-amber-50 rounded-lg p-4 border border-amber-200">
            <p className="text-sm text-[#6B7280] mb-2">Most Affected Time</p>
            <p className="text-xl font-bold text-[#1F2937] mb-1">6 - 9 AM</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-white rounded-full h-2">
                <div className="bg-amber-500 h-2 rounded-full" style={{ width: '65%' }} />
              </div>
              <span className="text-xs font-medium text-amber-700">65%</span>
            </div>
            <p className="text-xs text-[#6B7280] mt-2">of symptom logs occur</p>
          </div>

          <div className="bg-gradient-to-br from-red-100/50 to-red-50 rounded-lg p-4 border border-red-200">
            <p className="text-sm text-[#6B7280] mb-2">Peak Risk Season</p>
            <p className="text-xl font-bold text-[#1F2937] mb-1">March - May</p>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-white rounded-full h-2">
                <div className="bg-red-500 h-2 rounded-full" style={{ width: '85%' }} />
              </div>
              <span className="text-xs font-medium text-red-700">85%</span>
            </div>
            <p className="text-xs text-[#6B7280] mt-2">increase in symptoms</p>
          </div>
        </div>
      </div>
    </div>
  );
}
