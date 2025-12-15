import { TrendingUp, Target, Download, CheckCircle, XCircle, FileDown } from 'lucide-react';

interface AIInsightsSidebarProps {
  onApproveHighConfidence: () => void;
  onDismissLowPriority: () => void;
  onExport: () => void;
}

export function AIInsightsSidebar({ onApproveHighConfidence, onDismissLowPriority, onExport }: AIInsightsSidebarProps) {
  return (
    <div className="w-80 bg-[#F8F9FA] p-6 overflow-y-auto border-l border-gray-200">
      <h2 className="text-lg font-bold text-[#1F2937] mb-6">AI Insights Summary</h2>

      {/* Card 1: Common Patterns This Week */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <TrendingUp className="w-5 h-5 text-[#8B5CF6]" />
          <h3 className="font-bold text-[#1F2937]">Common Patterns This Week</h3>
        </div>

        <div className="space-y-3">
          <button className="w-full text-left p-3 bg-[#F8F9FA] hover:bg-gray-100 rounded-lg transition-colors group">
            <div className="flex items-start justify-between mb-1">
              <p className="text-sm font-medium text-[#1F2937] group-hover:text-[#059669]">
                Pollen spike correlation
              </p>
              <span className="px-2 py-0.5 bg-[#059669]/10 text-[#059669] rounded text-xs font-medium">
                18
              </span>
            </div>
            <p className="text-xs text-[#6B7280]">18 patients affected by high pollen levels</p>
          </button>

          <button className="w-full text-left p-3 bg-[#F8F9FA] hover:bg-gray-100 rounded-lg transition-colors group">
            <div className="flex items-start justify-between mb-1">
              <p className="text-sm font-medium text-[#1F2937] group-hover:text-[#059669]">
                Poor medication adherence
              </p>
              <span className="px-2 py-0.5 bg-[#EF4444]/10 text-[#EF4444] rounded text-xs font-medium">
                12
              </span>
            </div>
            <p className="text-xs text-[#6B7280]">12 patients with declining compliance</p>
          </button>

          <button className="w-full text-left p-3 bg-[#F8F9FA] hover:bg-gray-100 rounded-lg transition-colors group">
            <div className="flex items-start justify-between mb-1">
              <p className="text-sm font-medium text-[#1F2937] group-hover:text-[#059669]">
                Cold weather triggers
              </p>
              <span className="px-2 py-0.5 bg-[#F59E0B]/10 text-[#F59E0B] rounded text-xs font-medium">
                9
              </span>
            </div>
            <p className="text-xs text-[#6B7280]">9 patients showing cold sensitivity pattern</p>
          </button>

          <button className="w-full text-left p-3 bg-[#F8F9FA] hover:bg-gray-100 rounded-lg transition-colors group">
            <div className="flex items-start justify-between mb-1">
              <p className="text-sm font-medium text-[#1F2937] group-hover:text-[#059669]">
                Indoor allergen exposure
              </p>
              <span className="px-2 py-0.5 bg-[#059669]/10 text-[#059669] rounded text-xs font-medium">
                7
              </span>
            </div>
            <p className="text-xs text-[#6B7280]">7 patients with home-based symptoms</p>
          </button>
        </div>

        <button className="w-full mt-3 text-sm text-[#059669] font-medium hover:underline">
          View all patterns →
        </button>
      </div>

      {/* Card 2: Model Performance */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 mb-4">
        <div className="flex items-center gap-2 mb-4">
          <Target className="w-5 h-5 text-[#059669]" />
          <h3 className="font-bold text-[#1F2937]">Model Performance</h3>
        </div>

        <div className="space-y-4">
          {/* Accuracy Rate */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-[#6B7280]">Accuracy Rate</p>
              <p className="text-xl font-bold text-[#059669]">89%</p>
            </div>
            <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
              <div className="w-[89%] h-full bg-gradient-to-r from-[#059669] to-[#10B981]" />
            </div>
            <p className="text-xs text-[#6B7280] mt-1">Based on 342 validated recommendations</p>
          </div>

          {/* Recommendation Acceptance */}
          <div>
            <p className="text-sm text-[#6B7280] mb-2">Doctor Acceptance Rate</p>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1">
                <CheckCircle className="w-4 h-4 text-[#22C55E]" />
                <span className="text-sm font-medium text-[#1F2937]">78%</span>
              </div>
              <div className="flex items-center gap-1">
                <XCircle className="w-4 h-4 text-[#EF4444]" />
                <span className="text-sm font-medium text-[#1F2937]">22%</span>
              </div>
            </div>
          </div>

          {/* Last Updated */}
          <div className="pt-3 border-t border-gray-200">
            <p className="text-xs text-[#6B7280]">Model last updated: Dec 10, 2025</p>
            <p className="text-xs text-[#6B7280] mt-1">Training data: 15,432 patient records</p>
          </div>
        </div>

        <button className="w-full mt-4 text-sm text-[#059669] font-medium hover:underline">
          View detailed analytics →
        </button>
      </div>

      {/* Card 3: Quick Actions */}
      <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200">
        <div className="flex items-center gap-2 mb-4">
          <Download className="w-5 h-5 text-[#1F2937]" />
          <h3 className="font-bold text-[#1F2937]">Quick Actions</h3>
        </div>

        <div className="space-y-3">
          <button className="w-full px-4 py-3 bg-[#059669] text-white rounded-lg font-medium hover:bg-[#047857] transition-colors flex items-center justify-center gap-2" onClick={onApproveHighConfidence}>
            <CheckCircle className="w-4 h-4" />
            Approve all high-confidence
          </button>

          <button className="w-full px-4 py-3 bg-gray-100 text-[#1F2937] rounded-lg font-medium hover:bg-gray-200 transition-colors flex items-center justify-center gap-2" onClick={onDismissLowPriority}>
            <XCircle className="w-4 h-4" />
            Bulk dismiss low-priority
          </button>

          <button className="w-full px-4 py-3 bg-white border-2 border-[#059669] text-[#059669] rounded-lg font-medium hover:bg-[#059669]/5 transition-colors flex items-center justify-center gap-2" onClick={onExport}>
            <FileDown className="w-4 h-4" />
            Export recommendations
          </button>
        </div>

        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-xs text-[#6B7280] mb-2">Recommendation Summary</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6B7280]">Pending Review:</span>
              <span className="font-medium text-[#1F2937]">38</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6B7280]">Approved Today:</span>
              <span className="font-medium text-[#22C55E]">9</span>
            </div>
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#6B7280]">Dismissed Today:</span>
              <span className="font-medium text-[#EF4444]">3</span>
            </div>
          </div>
        </div>
      </div>

      {/* AI Version Info */}
      <div className="mt-4 p-4 bg-[#8B5CF6]/10 border border-[#8B5CF6]/20 rounded-xl">
        <p className="text-xs font-medium text-[#8B5CF6] mb-1">WheezeEase AI Engine</p>
        <p className="text-xs text-[#6B7280]">Version 1.2.0 - December 2025</p>
        <button className="text-xs text-[#8B5CF6] font-medium hover:underline mt-2">
          View changelog
        </button>
      </div>
    </div>
  );
}