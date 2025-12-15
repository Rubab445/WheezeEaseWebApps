import { TrendingUp, AlertTriangle, Wind, Activity, Clock, Pill } from 'lucide-react';

export function SymptomLogsStats() {
  return (
    <div className="grid grid-cols-3 gap-5 mb-6">
      {/* ROW 1 - Main KPIs */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-[#059669]/10 rounded-lg flex items-center justify-center">
            <Activity className="w-6 h-6 text-[#059669]" />
          </div>
        </div>
        <p className="text-4xl font-bold text-[#1F2937] mb-1">47</p>
        <p className="text-sm text-[#6B7280] mb-3">Total Logs Today</p>
        <div className="flex items-center gap-2 mb-3">
          <TrendingUp className="w-4 h-4 text-[#22C55E]" />
          <span className="text-sm text-[#22C55E] font-medium">+8 from yesterday</span>
        </div>
        {/* Small sparkline */}
        <div className="h-12 flex items-end gap-1">
          {[32, 28, 35, 42, 38, 45, 47].map((height, i) => (
            <div 
              key={i} 
              className="flex-1 bg-[#059669]/20 rounded-t"
              style={{ height: `${(height / 50) * 100}%` }}
            />
          ))}
        </div>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-[#EF4444]/10 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-[#EF4444]" />
          </div>
        </div>
        <p className="text-4xl font-bold text-[#1F2937] mb-1">12</p>
        <p className="text-sm text-[#6B7280] mb-3">Severe Symptoms</p>
        <div className="mb-3">
          <span className="px-2.5 py-1 bg-[#EF4444] text-white rounded-full text-xs font-medium">
            Requires attention
          </span>
        </div>
        <button className="text-sm text-[#059669] font-medium hover:underline">
          View patients →
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center">
            <Wind className="w-6 h-6 text-[#F59E0B]" />
          </div>
        </div>
        <p className="text-3xl font-bold text-[#1F2937] mb-1">Wheezing</p>
        <p className="text-sm text-[#6B7280] mb-3">Most Common Symptom</p>
        <p className="text-base font-medium text-[#1F2937]">32 reports today</p>
      </div>

      {/* ROW 2 - Insights */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center">
            <Activity className="w-6 h-6 text-[#F59E0B]" />
          </div>
        </div>
        <p className="text-sm text-[#6B7280] mb-2">Average Severity</p>
        <div className="flex items-center gap-4 mb-3">
          <p className="text-4xl font-bold text-[#F59E0B]">6.2</p>
          <span className="text-2xl text-[#6B7280]">/10</span>
        </div>
        {/* Gauge visualization */}
        <div className="relative w-32 h-32 mx-auto mb-2">
          <svg viewBox="0 0 100 100" className="transform -rotate-90">
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#E5E7EB"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              fill="none"
              stroke="#F59E0B"
              strokeWidth="8"
              strokeDasharray={`${(6.2 / 10) * 251.2} 251.2`}
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-sm text-[#6B7280]">Medium</span>
          </div>
        </div>
        <p className="text-xs text-[#6B7280] text-center">vs 5.8 last week</p>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-[#22C55E]/10 rounded-lg flex items-center justify-center">
            <Clock className="w-6 h-6 text-[#22C55E]" />
          </div>
        </div>
        <p className="text-sm text-[#6B7280] mb-2">Response Time</p>
        <div className="flex items-baseline gap-2 mb-3">
          <p className="text-4xl font-bold text-[#1F2937]">18</p>
          <span className="text-lg text-[#6B7280]">min</span>
        </div>
        <p className="text-sm text-[#6B7280] mb-3">Average time to doctor review</p>
        <span className="px-3 py-1 bg-[#22C55E]/10 text-[#22C55E] rounded-full text-xs font-medium border border-[#22C55E]/20">
          Good performance
        </span>
      </div>

      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-[#059669]/10 rounded-lg flex items-center justify-center">
            <Pill className="w-6 h-6 text-[#059669]" />
          </div>
        </div>
        <p className="text-sm text-[#6B7280] mb-2">Medication Adherence</p>
        <div className="flex items-baseline gap-2 mb-3">
          <p className="text-4xl font-bold text-[#1F2937]">78</p>
          <span className="text-lg text-[#6B7280]">%</span>
        </div>
        <p className="text-sm text-[#6B7280] mb-3">Based on logged doses</p>
        {/* Progress bar */}
        <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
          <div className="w-[78%] h-full bg-gradient-to-r from-[#059669] to-[#10B981]" />
        </div>
      </div>
    </div>
  );
}
