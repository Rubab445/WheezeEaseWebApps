import { CheckCircle, X, FileText, ExternalLink, Clock, Sparkles, Wind, Droplets, Thermometer, MapPin, TrendingUp, TrendingDown, Minus, Check, MoreVertical, Pill } from 'lucide-react';

interface SymptomLogCardProps {
  id: string;
  patientName: string;
  patientId: string;
  patientAvatar: string;
  riskScore: number;
  timestamp: string;
  isNew: boolean;
  symptoms: string[];
  severity: number;
  triggers: string[];
  medicationTaken: boolean;
  medicationDetails: string;
  patientNotes: string;
  aqi: number;
  aqiLevel: string;
  pollen: string;
  location: string;
  temperature: number;
  humidity: number;
  aiRiskIncrease: number;
  aiConfidence: number;
  duration: string;
  symptomStatus: 'improving' | 'worsening' | 'stable' | 'resolved';
  reviewed: boolean;
  reviewerName?: string;
  reviewTime?: string;
  isSelected: boolean;
  onSelect: (id: string) => void;
  onReview?: (patientName: string, patientAvatar: string, riskScore: number) => void;
}

export function SymptomLogCard({
  id,
  patientName,
  patientId,
  patientAvatar,
  riskScore,
  timestamp,
  isNew,
  symptoms,
  severity,
  triggers,
  medicationTaken,
  medicationDetails,
  patientNotes,
  aqi,
  aqiLevel,
  pollen,
  location,
  temperature,
  humidity,
  aiRiskIncrease,
  aiConfidence,
  duration,
  symptomStatus,
  reviewed,
  reviewerName,
  reviewTime,
  isSelected,
  onSelect,
  onReview
}: SymptomLogCardProps) {
  // Severity color and border
  const getSeverityColor = (sev: number) => {
    if (sev >= 8) return { border: '#EF4444', bg: '#FEF2F2', text: '#EF4444', label: 'Severe' };
    if (sev >= 4) return { border: '#F59E0B', bg: '#FEF3C7', text: '#F59E0B', label: 'Moderate' };
    return { border: '#22C55E', bg: '#F0FDF4', text: '#22C55E', label: 'Mild' };
  };

  const severityColor = getSeverityColor(severity);

  // Risk badge color
  const getRiskColor = (risk: number) => {
    if (risk >= 70) return { bg: '#FEF2F2', text: '#EF4444', label: 'High Risk' };
    if (risk >= 40) return { bg: '#FEF3C7', text: '#F59E0B', label: 'Medium Risk' };
    return { bg: '#F0FDF4', text: '#22C55E', label: 'Low Risk' };
  };

  const riskColor = getRiskColor(riskScore);

  // AQI color
  const getAQIColor = (level: string) => {
    if (level === 'Unhealthy') return { bg: '#FEF2F2', text: '#EF4444' };
    if (level === 'Moderate') return { bg: '#FEF3C7', text: '#F59E0B' };
    return { bg: '#F0FDF4', text: '#22C55E' };
  };

  const aqiColor = getAQIColor(aqiLevel);

  // Pollen color
  const getPollenColor = (level: string) => {
    if (level === 'Very High' || level === 'High') return { bg: '#FEF2F2', text: '#EF4444' };
    if (level === 'Moderate') return { bg: '#FEF3C7', text: '#F59E0B' };
    return { bg: '#F0FDF4', text: '#22C55E' };
  };

  const pollenColor = getPollenColor(pollen);

  // Status icon
  const getStatusIcon = () => {
    switch (symptomStatus) {
      case 'improving': return <TrendingDown className="w-4 h-4 text-[#22C55E]" />;
      case 'worsening': return <TrendingUp className="w-4 h-4 text-[#EF4444]" />;
      case 'resolved': return <CheckCircle className="w-4 h-4 text-[#22C55E]" />;
      default: return <Minus className="w-4 h-4 text-[#F59E0B]" />;
    }
  };

  return (
    <div 
      className={`bg-white rounded-xl p-6 shadow-sm border-l-4 hover:shadow-lg transition-all ${
        isSelected ? 'ring-2 ring-[#059669]' : ''
      }`}
      style={{ borderLeftColor: severityColor.border }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-4">
          {/* Checkbox */}
          <input
            type="checkbox"
            checked={isSelected}
            onChange={() => onSelect(id)}
            className="w-5 h-5 rounded border-gray-300 text-[#059669] focus:ring-[#059669] cursor-pointer"
          />

          {/* Patient Info */}
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white font-bold flex-shrink-0">
            {patientAvatar}
          </div>
          <div>
            <button className="font-bold text-[#059669] hover:underline text-lg">
              {patientName}
            </button>
            <p className="text-sm text-[#6B7280]">{patientId}</p>
          </div>

          {/* Risk Badge */}
          <span 
            className="px-3 py-1 rounded-full text-xs font-medium"
            style={{ 
              backgroundColor: riskColor.bg,
              color: riskColor.text 
            }}
          >
            Risk: {riskScore}% ({riskColor.label})
          </span>
        </div>

        <div className="flex items-center gap-3">
          <span className="text-sm text-[#6B7280]">{timestamp}</span>
          {isNew && (
            <span className="px-3 py-1 bg-[#8B5CF6] text-white rounded-full text-xs font-medium">
              New
            </span>
          )}
        </div>
      </div>

      {/* Main Content - 2 Column Layout */}
      <div className="grid grid-cols-[1.5fr,1fr] gap-6 mb-5">
        {/* LEFT SECTION */}
        <div>
          {/* Symptom Chips */}
          <div className="flex flex-wrap gap-2 mb-4">
            {symptoms.map((symptom, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-[#059669]/10 text-[#059669] rounded-lg text-sm font-medium border border-[#059669]/20 flex items-center gap-2"
              >
                <Wind className="w-4 h-4" />
                {symptom}
              </span>
            ))}
          </div>

          {/* Severity Indicator */}
          <div className="mb-4">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-[#6B7280]">Severity Level</p>
              <div className="flex items-baseline gap-1">
                <span className="text-3xl font-bold" style={{ color: severityColor.text }}>
                  {severity}
                </span>
                <span className="text-lg text-[#6B7280]">/10</span>
                <span 
                  className="ml-2 px-2 py-0.5 rounded text-xs font-bold"
                  style={{ 
                    backgroundColor: severityColor.bg,
                    color: severityColor.text 
                  }}
                >
                  {severityColor.label}
                </span>
              </div>
            </div>
            {/* Visual Scale */}
            <div className="relative h-3 bg-gradient-to-r from-[#22C55E] via-[#F59E0B] to-[#EF4444] rounded-full overflow-hidden">
              <div 
                className="absolute top-0 h-full w-1 bg-white border-2 border-[#1F2937]"
                style={{ left: `${(severity / 10) * 100}%` }}
              />
            </div>
            <div className="flex justify-between text-xs text-[#6B7280] mt-1">
              <span>1</span>
              <span>5</span>
              <span>10</span>
            </div>
          </div>

          {/* Triggers */}
          <div className="mb-4">
            <p className="text-sm font-medium text-[#6B7280] mb-2">Reported Triggers:</p>
            <div className="flex flex-wrap gap-2">
              {triggers.map((trigger, index) => (
                <span 
                  key={index}
                  className="px-3 py-1.5 bg-[#F59E0B]/10 text-[#F59E0B] rounded-lg text-sm font-medium border border-[#F59E0B]/20"
                >
                  {trigger}
                </span>
              ))}
            </div>
          </div>

          {/* Medication Status */}
          <div className="mb-4 p-3 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              {medicationTaken ? (
                <>
                  <Check className="w-5 h-5 text-[#22C55E]" />
                  <span className="text-sm font-medium text-[#22C55E]">Medication taken: Yes</span>
                </>
              ) : (
                <>
                  <X className="w-5 h-5 text-[#EF4444]" />
                  <span className="text-sm font-medium text-[#EF4444]">Medication taken: No</span>
                </>
              )}
            </div>
            {medicationTaken && medicationDetails && (
              <div className="flex items-center gap-2 ml-7">
                <Pill className="w-4 h-4 text-[#6B7280]" />
                <p className="text-sm text-[#6B7280]">{medicationDetails}</p>
              </div>
            )}
          </div>

          {/* Patient Notes */}
          <div className="p-4 bg-blue-50 border-l-4 border-blue-400 rounded-lg">
            <div className="flex items-start gap-2">
              <span className="text-2xl text-blue-400">"</span>
              <p className="text-sm text-[#1F2937] italic flex-1">
                {patientNotes.length > 120 ? (
                  <>
                    {patientNotes.slice(0, 120)}...{' '}
                    <button className="text-[#059669] font-medium hover:underline">Read more</button>
                  </>
                ) : (
                  patientNotes
                )}
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="space-y-4">
          {/* Environment Snapshot */}
          <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
            <p className="text-xs font-medium text-[#6B7280] mb-3 uppercase">Environment at time of log</p>
            
            <div className="space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6B7280]">AQI:</span>
                <span 
                  className="px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{ 
                    backgroundColor: aqiColor.bg,
                    color: aqiColor.text 
                  }}
                >
                  {aqi} - {aqiLevel}
                </span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#6B7280]">Pollen:</span>
                <span 
                  className="px-2.5 py-1 rounded-full text-xs font-bold"
                  style={{ 
                    backgroundColor: pollenColor.bg,
                    color: pollenColor.text 
                  }}
                >
                  {pollen}
                </span>
              </div>

              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <MapPin className="w-4 h-4" />
                <span>{location}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-gray-200">
                <div className="flex items-center gap-1.5">
                  <Thermometer className="w-4 h-4 text-[#6B7280]" />
                  <span className="text-sm text-[#1F2937]">{temperature}°C</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <Droplets className="w-4 h-4 text-[#6B7280]" />
                  <span className="text-sm text-[#1F2937]">{humidity}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* AI Prediction */}
          <div className="bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="w-4 h-4 text-[#8B5CF6]" />
              <p className="text-xs font-bold text-[#8B5CF6] uppercase">AI Prediction</p>
            </div>
            <p className="text-base font-bold text-[#1F2937] mb-1">
              Risk increase: {aiRiskIncrease}%
            </p>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6B7280]">Confidence:</span>
              <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-[#8B5CF6]"
                  style={{ width: `${aiConfidence}%` }}
                />
              </div>
              <span className="text-xs font-bold text-[#8B5CF6]">{aiConfidence}%</span>
            </div>
          </div>

          {/* Duration Info */}
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="w-4 h-4 text-[#6B7280]" />
              <span className="text-sm font-medium text-[#6B7280]">Duration:</span>
            </div>
            <p className="text-lg font-bold text-[#1F2937] mb-2">{duration}</p>
            <div className="flex items-center gap-2">
              {getStatusIcon()}
              <span className="text-sm text-[#6B7280] capitalize">
                Symptoms {symptomStatus}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="flex items-center justify-between pt-5 border-t border-gray-200">
        <div>
          {reviewed ? (
            <div className="flex items-center gap-2 text-[#22C55E]">
              <CheckCircle className="w-5 h-5" />
              <span className="text-sm font-medium">
                Reviewed by {reviewerName} at {reviewTime}
              </span>
            </div>
          ) : (
            <span className="px-3 py-1.5 bg-[#F59E0B]/10 text-[#F59E0B] rounded-lg text-sm font-medium border border-[#F59E0B]/20">
              Pending review
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button className="text-sm text-[#059669] font-medium hover:underline flex items-center gap-1">
            <ExternalLink className="w-4 h-4" />
            View patient
          </button>
          <button className="px-4 py-2 border border-gray-300 text-[#6B7280] rounded-lg font-medium hover:bg-gray-50 transition-colors flex items-center gap-1">
            <FileText className="w-4 h-4" />
            Add note
          </button>
          {!reviewed && (
            <button className="px-5 py-2 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-lg font-medium hover:shadow-lg transition-all flex items-center gap-1" onClick={() => onReview?.(patientName, patientAvatar, riskScore)}>
              <CheckCircle className="w-4 h-4" />
              Mark reviewed
            </button>
          )}
          <button className="p-2 text-[#6B7280] hover:bg-gray-100 rounded-lg transition-colors">
            <MoreVertical className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}