import { X, Download, Calendar, FileText, Table, FileSpreadsheet } from 'lucide-react';

interface ExportModalProps {
  onClose: () => void;
}

export function ExportModal({ onClose }: ExportModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#1F2937]">Download Report</h2>
            <p className="text-sm text-[#6B7280] mt-1">Export symptom logs and analytics</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6B7280] hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Content */}
        <div className="px-8 py-6 overflow-y-auto max-h-[calc(90vh-180px)]">
          {/* Date Range */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#1F2937] mb-3">
              Date Range
            </label>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs text-[#6B7280] mb-2">Start Date</label>
                <div className="relative">
                  <input
                    type="date"
                    defaultValue="2025-12-01"
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669]/50"
                  />
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                </div>
              </div>
              <div>
                <label className="block text-xs text-[#6B7280] mb-2">End Date</label>
                <div className="relative">
                  <input
                    type="date"
                    defaultValue="2025-12-14"
                    className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669]/50"
                  />
                  <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-3">
              <button className="px-3 py-1.5 bg-gray-100 text-[#6B7280] rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                Today
              </button>
              <button className="px-3 py-1.5 bg-gray-100 text-[#6B7280] rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                Last 7 days
              </button>
              <button className="px-3 py-1.5 bg-gray-100 text-[#6B7280] rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                Last 30 days
              </button>
              <button className="px-3 py-1.5 bg-gray-100 text-[#6B7280] rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors">
                This month
              </button>
            </div>
          </div>

          {/* Format Selection */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#1F2937] mb-3">
              Export Format
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button className="p-4 border-2 border-[#059669] bg-[#059669]/5 rounded-xl hover:bg-[#059669]/10 transition-colors">
                <FileText className="w-8 h-8 text-[#059669] mx-auto mb-2" />
                <p className="text-sm font-medium text-[#059669]">PDF</p>
                <p className="text-xs text-[#6B7280] mt-1">Formatted report</p>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <Table className="w-8 h-8 text-[#6B7280] mx-auto mb-2" />
                <p className="text-sm font-medium text-[#1F2937]">CSV</p>
                <p className="text-xs text-[#6B7280] mt-1">Raw data</p>
              </button>
              <button className="p-4 border-2 border-gray-200 rounded-xl hover:bg-gray-50 transition-colors">
                <FileSpreadsheet className="w-8 h-8 text-[#6B7280] mx-auto mb-2" />
                <p className="text-sm font-medium text-[#1F2937]">Excel</p>
                <p className="text-xs text-[#6B7280] mt-1">Spreadsheet</p>
              </button>
            </div>
          </div>

          {/* Include Options */}
          <div className="mb-6">
            <label className="block text-sm font-medium text-[#1F2937] mb-3">
              Include in Report
            </label>
            <div className="space-y-3">
              <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#1F2937]">Patient Details</p>
                  <p className="text-xs text-[#6B7280]">Names, IDs, risk scores</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#1F2937]">Symptom Logs</p>
                  <p className="text-xs text-[#6B7280]">All symptom entries with timestamps</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#1F2937]">Environment Data</p>
                  <p className="text-xs text-[#6B7280]">AQI, pollen, temperature, humidity</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <input
                  type="checkbox"
                  defaultChecked
                  className="w-5 h-5 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#1F2937]">AI Predictions</p>
                  <p className="text-xs text-[#6B7280]">Risk predictions and confidence scores</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#1F2937]">Charts and Graphs</p>
                  <p className="text-xs text-[#6B7280]">Visual analytics (PDF only)</p>
                </div>
              </label>
              <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
                <input
                  type="checkbox"
                  className="w-5 h-5 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#1F2937]">Doctor Notes</p>
                  <p className="text-xs text-[#6B7280]">Clinical notes and reviews</p>
                </div>
              </label>
            </div>
          </div>

          {/* Summary */}
          <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-4">
            <p className="text-sm font-medium text-[#1F2937] mb-2">Export Summary</p>
            <div className="space-y-1 text-sm text-[#6B7280]">
              <p>• Date range: Dec 1 - Dec 14, 2025</p>
              <p>• Total logs: 156</p>
              <p>• Format: PDF</p>
              <p>• Estimated file size: ~2.4 MB</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-8 py-5 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
          <button
            onClick={onClose}
            className="px-5 py-2.5 border border-gray-300 text-[#6B7280] rounded-lg font-medium hover:bg-gray-100 transition-colors"
          >
            Cancel
          </button>
          <button className="px-6 py-2.5 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-2">
            <Download className="w-5 h-5" />
            Generate Report
          </button>
        </div>
      </div>
    </div>
  );
}
