import { useState } from 'react';
import { CheckCircle, X, Edit3, ExternalLink, Clock, Sparkles, AlertCircle, Users } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

interface AIRecommendationCardProps {
  id: string;
  priority: 'high' | 'medium' | 'low';
  type: string;
  confidence: number;
  patientName: string;
  patientId: string;
  patientAvatar: string;
  riskScore: number;
  title: string;
  reasoning: string[];
  predictedOutcome: string;
  generatedTime: string;
  bulkAction?: boolean;
  requiresValidation?: boolean;
  chartData?: boolean;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onApprove?: () => void;
  onDismiss?: () => void;
  onModify?: () => void;
}

export function AIRecommendationCard({
  id,
  priority,
  type,
  confidence,
  patientName,
  patientId,
  patientAvatar,
  riskScore,
  title,
  reasoning,
  predictedOutcome,
  generatedTime,
  bulkAction = false,
  requiresValidation = false,
  chartData = false,
  isSelected,
  onSelect,
  onApprove,
  onDismiss,
  onModify
}: AIRecommendationCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Priority colors
  const priorityColors = {
    high: { border: '#EF4444', bg: '#FEF2F2', text: '#EF4444' },
    medium: { border: '#F59E0B', bg: '#FEF3C7', text: '#F59E0B' },
    low: { border: '#22C55E', bg: '#F0FDF4', text: '#22C55E' }
  };

  // Confidence color
  const getConfidenceColor = (conf: number) => {
    if (conf >= 80) return '#22C55E';
    if (conf >= 60) return '#F59E0B';
    return '#EF4444';
  };

  // Risk badge color
  const getRiskColor = (risk: number) => {
    if (risk >= 70) return { bg: '#FEF2F2', text: '#EF4444', label: 'High' };
    if (risk >= 40) return { bg: '#FEF3C7', text: '#F59E0B', label: 'Medium' };
    return { bg: '#F0FDF4', text: '#22C55E', label: 'Low' };
  };

  const riskColor = riskScore > 0 ? getRiskColor(riskScore) : null;

  // Sample chart data
  const sampleChartData = [
    { day: 'Mon', symptoms: 3, pollen: 45 },
    { day: 'Tue', symptoms: 5, pollen: 68 },
    { day: 'Wed', symptoms: 7, pollen: 82 },
    { day: 'Thu', symptoms: 8, pollen: 95 },
    { day: 'Fri', symptoms: 9, pollen: 110 },
    { day: 'Sat', symptoms: 7, pollen: 88 },
    { day: 'Sun', symptoms: 4, pollen: 52 }
  ];

  return (
    <div 
      className={`bg-white rounded-2xl p-6 shadow-sm border-l-4 hover:shadow-lg transition-all ${
        isSelected ? 'ring-2 ring-[#059669]' : ''
      }`}
      style={{ borderLeftColor: priorityColors[priority].border }}
    >
      {/* Header Row */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(id)}
            className="w-5 h-5 rounded border-gray-300 text-[#059669] focus:ring-[#059669] cursor-pointer"
          />

          {/* Priority Badge */}
          <span 
            className="px-3 py-1 rounded-full text-xs font-bold uppercase"
            style={{ 
              backgroundColor: priorityColors[priority].bg,
              color: priorityColors[priority].text 
            }}
          >
            {priority} Priority
          </span>

          {/* Type Chip */}
          <span className="px-3 py-1 bg-[#059669]/10 text-[#059669] rounded-full text-xs font-medium border border-[#059669]/20">
            {type}
          </span>

          {bulkAction && (
            <span className="px-3 py-1 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-xs font-medium border border-[#8B5CF6]/20 flex items-center gap-1">
              <Users className="w-3 h-3" />
              Bulk Action
            </span>
          )}

          {requiresValidation && (
            <span className="px-3 py-1 bg-[#F59E0B]/10 text-[#F59E0B] rounded-full text-xs font-medium border border-[#F59E0B]/20 flex items-center gap-1">
              <AlertCircle className="w-3 h-3" />
              Requires Validation
            </span>
          )}
        </div>

        {/* Confidence Score */}
        <div className="flex items-center gap-3">
          <div className="text-right">
            <p className="text-xs text-[#6B7280] mb-1">AI Confidence</p>
            <div className="flex items-center gap-2">
              <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full"
                  style={{ 
                    width: `${confidence}%`,
                    backgroundColor: getConfidenceColor(confidence)
                  }}
                />
              </div>
              <span 
                className="text-base font-bold"
                style={{ color: getConfidenceColor(confidence) }}
              >
                {confidence}%
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Patient Info Row */}
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white font-bold flex-shrink-0">
          {patientAvatar}
        </div>
        <div>
          <button className="font-medium text-[#059669] hover:underline">
            {patientName}
          </button>
          <p className="text-sm text-[#6B7280]">{patientId}</p>
        </div>
        {riskColor && (
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: riskColor.bg,
              color: riskColor.text 
            }}
          >
            Risk: {riskScore}% ({riskColor.label})
          </span>
        )}
      </div>

      {/* Recommendation Title */}
      <h3 className="text-lg font-bold text-[#1F2937] mb-4">
        {title}
      </h3>

      {/* AI Reasoning Section */}
      <div className="bg-gray-50 rounded-xl p-4 mb-4">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
          <p className="text-sm font-medium text-[#1F2937]">Based on analysis of:</p>
        </div>
        <ul className="space-y-2">
          {reasoning.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-[#6B7280]">
              <span className="text-[#059669] mt-1">•</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        {/* Supporting Chart */}
        {chartData && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <p className="text-xs text-[#6B7280] mb-2">Symptom Severity vs Pollen Levels (Last 7 days)</p>
            <ResponsiveContainer width="100%" height={120}>
              <LineChart data={sampleChartData}>
                <XAxis dataKey="day" stroke="#6B7280" fontSize={11} />
                <YAxis stroke="#6B7280" fontSize={11} />
                <Tooltip />
                <Line type="monotone" dataKey="symptoms" stroke="#EF4444" strokeWidth={2} dot={{ r: 3 }} name="Symptoms" />
                <Line type="monotone" dataKey="pollen" stroke="#F59E0B" strokeWidth={2} dot={{ r: 3 }} name="Pollen" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}
      </div>

      {/* Predicted Outcome */}
      <div className="bg-[#F0FDF4] border border-[#22C55E]/30 rounded-xl p-4 mb-4">
        <div className="flex items-start gap-2">
          <CheckCircle className="w-5 h-5 text-[#22C55E] flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-xs font-medium text-[#22C55E] mb-1">PREDICTED OUTCOME</p>
            <p className="text-sm text-[#1F2937]">{predictedOutcome}</p>
          </div>
        </div>
      </div>

      {/* Footer Row */}
      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
        <div className="flex items-center gap-3 text-xs text-[#6B7280]">
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>Generated {generatedTime}</span>
          </div>
          <span className="px-2 py-0.5 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded text-xs">v1.2</span>
        </div>

        <div className="flex items-center gap-2">
          <button className="text-sm text-[#059669] font-medium hover:underline flex items-center gap-1">
            <ExternalLink className="w-4 h-4" />
            View patient
          </button>
          <button className="px-4 py-2 border border-gray-300 text-[#6B7280] rounded-lg font-medium hover:bg-gray-50 transition-colors" onClick={onDismiss}>
            <X className="w-4 h-4 inline mr-1" />
            Dismiss
          </button>
          <button className="px-4 py-2 border-2 border-[#059669] text-[#059669] rounded-lg font-medium hover:bg-[#059669]/5 transition-colors" onClick={onModify}>
            <Edit3 className="w-4 h-4 inline mr-1" />
            Modify
          </button>
          <button className="px-5 py-2 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-lg font-medium hover:shadow-lg transition-all" onClick={onApprove}>
            <CheckCircle className="w-4 h-4 inline mr-1" />
            Approve & Apply
          </button>
        </div>
      </div>
    </div>
  );
}