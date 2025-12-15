import { X, Wind, MapPin, Thermometer, Droplets, Sparkles, Save, Calendar, MessageSquare, Pill, CheckSquare } from 'lucide-react';

interface QuickReviewPanelProps {
  patientName: string;
  patientAvatar: string;
  riskScore: number;
  onClose: () => void;
}

export function QuickReviewPanel({ patientName, patientAvatar, riskScore, onClose }: QuickReviewPanelProps) {
  const getRiskColor = (risk: number) => {
    if (risk >= 70) return { bg: '#FEF2F2', text: '#EF4444' };
    if (risk >= 40) return { bg: '#FEF3C7', text: '#F59E0B' };
    return { bg: '#F0FDF4', text: '#22C55E' };
  };

  const riskColor = getRiskColor(riskScore);

  return (
    <div className="fixed inset-y-0 right-0 w-[600px] bg-white shadow-2xl z-50 flex flex-col">
      {/* Header */}
      <div className="px-8 py-6 border-b border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h2 className="text-2xl font-bold text-[#1F2937]">Quick Review</h2>
            <p className="text-sm text-[#6B7280] mt-1">Add clinical notes and assessment</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-[#6B7280] hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Patient Info Header */}
        <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
          <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-xl font-bold">
            {patientAvatar}
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-[#1F2937] text-lg">{patientName}</h3>
            <div className="flex items-center gap-2 mt-1">
              <span className="text-sm text-[#6B7280]">Patient ID: P-1002</span>
              <span 
                className="px-2.5 py-1 rounded-full text-xs font-medium"
                style={{ 
                  backgroundColor: riskColor.bg,
                  color: riskColor.text 
                }}
              >
                Risk: {riskScore}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-8 py-6">
        {/* Full Symptom Log Details */}
        <div className="mb-6">
          <h3 className="font-bold text-[#1F2937] mb-3">Symptom Details</h3>
          <div className="space-y-3">
            {/* Symptoms */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-xs font-medium text-[#6B7280] mb-2 uppercase">Symptoms</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1.5 bg-[#059669]/10 text-[#059669] rounded-lg text-sm font-medium border border-[#059669]/20 flex items-center gap-2">
                  <Wind className="w-4 h-4" />
                  Wheezing
                </span>
                <span className="px-3 py-1.5 bg-[#059669]/10 text-[#059669] rounded-lg text-sm font-medium border border-[#059669]/20 flex items-center gap-2">
                  <Wind className="w-4 h-4" />
                  Coughing
                </span>
                <span className="px-3 py-1.5 bg-[#059669]/10 text-[#059669] rounded-lg text-sm font-medium border border-[#059669]/20 flex items-center gap-2">
                  <Wind className="w-4 h-4" />
                  Shortness of breath
                </span>
              </div>
            </div>

            {/* Severity */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-xs font-medium text-[#6B7280] mb-2 uppercase">Severity</p>
              <div className="flex items-center gap-4">
                <span className="text-3xl font-bold text-[#F59E0B]">7</span>
                <span className="text-lg text-[#6B7280]">/10</span>
                <span className="px-3 py-1 bg-[#FEF3C7] text-[#F59E0B] rounded-full text-sm font-bold">
                  Moderate
                </span>
              </div>
            </div>

            {/* Environment */}
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-xs font-medium text-[#6B7280] mb-3 uppercase">Environment</p>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-xs text-[#6B7280] mb-1">AQI</p>
                  <p className="text-sm font-bold text-[#EF4444]">145 - Unhealthy</p>
                </div>
                <div>
                  <p className="text-xs text-[#6B7280] mb-1">Pollen</p>
                  <p className="text-sm font-bold text-[#EF4444]">High</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4 text-[#6B7280]" />
                  <p className="text-sm font-medium text-[#1F2937]">32°C</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <Droplets className="w-4 h-4 text-[#6B7280]" />
                  <p className="text-sm font-medium text-[#1F2937]">68%</p>
                </div>
              </div>
              <div className="flex items-center gap-1.5 mt-2 text-sm text-[#6B7280]">
                <MapPin className="w-4 h-4" />
                <span>Gujrat, Punjab</span>
              </div>
            </div>
          </div>
        </div>

        {/* Environment Correlation Chart */}
        <div className="mb-6 p-4 bg-[#8B5CF6]/5 border border-[#8B5CF6]/20 rounded-xl">
          <div className="flex items-center gap-2 mb-3">
            <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
            <h3 className="font-bold text-[#1F2937]">AI Analysis</h3>
          </div>
          <p className="text-sm text-[#6B7280] mb-2">
            High AQI and pollen levels are strong contributing factors. Risk increase: <span className="font-bold text-[#8B5CF6]">23%</span>
          </p>
          <p className="text-xs text-[#6B7280]">Confidence: 85%</p>
        </div>

        {/* Add Doctor Note */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#1F2937] mb-3">
            Add Clinical Notes
          </label>
          <textarea
            placeholder="Add your clinical observations and recommendations..."
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm text-[#1F2937] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#059669]/50 resize-none"
          />
        </div>

        {/* Severity Assessment */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#1F2937] mb-3">
            Severity Assessment
          </label>
          <select className="w-full px-4 py-2.5 border border-gray-300 rounded-lg text-sm text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#059669]/50">
            <option>Select assessment...</option>
            <option>Mild - No immediate action needed</option>
            <option>Moderate - Monitor closely</option>
            <option>Severe - Requires immediate attention</option>
            <option>Critical - Emergency intervention required</option>
          </select>
        </div>

        {/* Recommended Actions */}
        <div className="mb-6">
          <label className="block text-sm font-bold text-[#1F2937] mb-3">
            Recommended Actions
          </label>
          <div className="space-y-2">
            <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
              />
              <div className="flex items-center gap-2 flex-1">
                <Calendar className="w-4 h-4 text-[#6B7280]" />
                <span className="text-sm text-[#1F2937]">Schedule follow-up appointment</span>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
              />
              <div className="flex items-center gap-2 flex-1">
                <Pill className="w-4 h-4 text-[#6B7280]" />
                <span className="text-sm text-[#1F2937]">Adjust medication dosage</span>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
              />
              <div className="flex items-center gap-2 flex-1">
                <MessageSquare className="w-4 h-4 text-[#6B7280]" />
                <span className="text-sm text-[#1F2937]">Send patient message</span>
              </div>
            </label>
            <label className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors">
              <input
                type="checkbox"
                className="w-5 h-5 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
              />
              <div className="flex items-center gap-2 flex-1">
                <CheckSquare className="w-4 h-4 text-[#6B7280]" />
                <span className="text-sm text-[#1F2937]">Monitor closely for next 48 hours</span>
              </div>
            </label>
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
          <Save className="w-5 h-5" />
          Save & Mark Reviewed
        </button>
      </div>
    </div>
  );
}
