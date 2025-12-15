import { Sparkles, AlertTriangle, CheckCircle2, Target } from 'lucide-react';

export function AIRecommendationStats() {
  return (
    <div className="grid grid-cols-4 gap-5 mb-6">
      {/* Card 1: Total Recommendations */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-[#8B5CF6]/10 rounded-lg flex items-center justify-center">
            <Sparkles className="w-6 h-6 text-[#8B5CF6]" />
          </div>
        </div>
        <p className="text-4xl font-bold text-[#1F2937] mb-1">47</p>
        <p className="text-sm text-[#6B7280] mb-3">Total Recommendations</p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#6B7280]">Across 127 patients</span>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[#8B5CF6]">
          <Sparkles className="w-3.5 h-3.5" />
          <span className="text-sm font-medium">+12 today</span>
        </div>
      </div>

      {/* Card 2: High Priority */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-[#EF4444]/10 rounded-lg flex items-center justify-center">
            <AlertTriangle className="w-6 h-6 text-[#EF4444]" />
          </div>
        </div>
        <p className="text-4xl font-bold text-[#1F2937] mb-1">18</p>
        <p className="text-sm text-[#6B7280] mb-3">High Priority</p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#6B7280]">Require immediate review</span>
        </div>
        <div className="mt-3">
          <span className="px-2.5 py-1 bg-[#EF4444] text-white rounded-full text-xs font-medium">
            Action needed
          </span>
        </div>
      </div>

      {/* Card 3: Approved Today */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-[#22C55E]/10 rounded-lg flex items-center justify-center">
            <CheckCircle2 className="w-6 h-6 text-[#22C55E]" />
          </div>
        </div>
        <p className="text-4xl font-bold text-[#1F2937] mb-1">9</p>
        <p className="text-sm text-[#6B7280] mb-3">Approved Today</p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#6B7280]">Applied to treatment plans</span>
        </div>
        <div className="mt-3 flex items-center gap-1.5 text-[#22C55E]">
          <CheckCircle2 className="w-3.5 h-3.5" />
          <span className="text-sm font-medium">+3 this hour</span>
        </div>
      </div>

      {/* Card 4: AI Confidence */}
      <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 bg-[#059669]/10 rounded-lg flex items-center justify-center">
            <Target className="w-6 h-6 text-[#059669]" />
          </div>
        </div>
        <p className="text-4xl font-bold text-[#1F2937] mb-1">91%</p>
        <p className="text-sm text-[#6B7280] mb-3">AI Confidence</p>
        <div className="flex items-center gap-2">
          <span className="text-xs text-[#6B7280]">Average confidence score</span>
        </div>
        <div className="mt-3">
          {/* Mini Gauge */}
          <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
            <div className="w-[91%] h-full bg-gradient-to-r from-[#059669] to-[#10B981]" />
          </div>
        </div>
      </div>
    </div>
  );
}
