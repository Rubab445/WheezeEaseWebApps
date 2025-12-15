import { Wind, Clock, MapPin, CheckCircle } from 'lucide-react';

interface TimelineLogProps {
  id: string;
  patientName: string;
  patientAvatar: string;
  riskScore: number;
  timestamp: string;
  time: string;
  symptoms: string[];
  severity: number;
  location: string;
  reviewed: boolean;
  isNew: boolean;
}

const mockTimelineLogs: TimelineLogProps[] = [
  {
    id: '1',
    patientName: 'Ahmad Hassan',
    patientAvatar: 'AH',
    riskScore: 84,
    timestamp: '2 hours ago',
    time: '2:30 PM',
    symptoms: ['Wheezing', 'Coughing', 'Shortness of breath'],
    severity: 7,
    location: 'Gujrat, Punjab',
    reviewed: false,
    isNew: true
  },
  {
    id: '2',
    patientName: 'Sarah Ahmed',
    patientAvatar: 'SA',
    riskScore: 68,
    timestamp: '4 hours ago',
    time: '12:45 PM',
    symptoms: ['Wheezing', 'Chest tightness'],
    severity: 5,
    location: 'Lahore, Punjab',
    reviewed: false,
    isNew: true
  },
  {
    id: '3',
    patientName: 'Fatima Khan',
    patientAvatar: 'FK',
    riskScore: 58,
    timestamp: '6 hours ago',
    time: '10:20 AM',
    symptoms: ['Coughing', 'Shortness of breath'],
    severity: 8,
    location: 'Islamabad',
    reviewed: true,
    isNew: false
  }
];

export function SymptomLogTimeline() {
  const getSeverityColor = (sev: number) => {
    if (sev >= 8) return '#EF4444';
    if (sev >= 4) return '#F59E0B';
    return '#22C55E';
  };

  const getSeverityLabel = (sev: number) => {
    if (sev >= 8) return 'Severe';
    if (sev >= 4) return 'Moderate';
    return 'Mild';
  };

  const getRiskColor = (risk: number) => {
    if (risk >= 70) return { bg: '#FEF2F2', text: '#EF4444' };
    if (risk >= 40) return { bg: '#FEF3C7', text: '#F59E0B' };
    return { bg: '#F0FDF4', text: '#22C55E' };
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
      <h3 className="font-bold text-[#1F2937] mb-6">Timeline View</h3>
      
      {/* Date Header */}
      <div className="mb-6">
        <h4 className="font-bold text-[#1F2937] text-lg mb-1">Today</h4>
        <p className="text-sm text-[#6B7280]">Sunday, December 14, 2025</p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200" />

        {/* Timeline Items */}
        <div className="space-y-6">
          {mockTimelineLogs.map((log) => {
            const severityColor = getSeverityColor(log.severity);
            const riskColor = getRiskColor(log.riskScore);
            
            return (
              <div key={log.id} className="relative pl-16">
                {/* Time Marker */}
                <div className="absolute left-0 top-2 flex items-center gap-3">
                  <div 
                    className="w-4 h-4 rounded-full border-4 border-white z-10 shadow-md"
                    style={{ backgroundColor: severityColor }}
                  />
                  <span className="text-sm font-medium text-[#6B7280] w-16">{log.time}</span>
                </div>

                {/* Card */}
                <div 
                  className="bg-white border-l-4 rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                  style={{ borderLeftColor: severityColor }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white font-bold text-sm">
                        {log.patientAvatar}
                      </div>
                      <div>
                        <button className="font-bold text-[#059669] hover:underline">
                          {log.patientName}
                        </button>
                        <p className="text-xs text-[#6B7280]">{log.timestamp}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      {log.isNew && (
                        <span className="px-2.5 py-1 bg-[#8B5CF6] text-white rounded-full text-xs font-medium">
                          New
                        </span>
                      )}
                      <span 
                        className="px-2.5 py-1 rounded-full text-xs font-medium"
                        style={{ 
                          backgroundColor: riskColor.bg,
                          color: riskColor.text 
                        }}
                      >
                        Risk: {log.riskScore}%
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    {/* Symptoms */}
                    <div className="flex flex-wrap gap-2">
                      {log.symptoms.map((symptom, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-[#059669]/10 text-[#059669] rounded-lg text-sm font-medium border border-[#059669]/20 flex items-center gap-1.5"
                        >
                          <Wind className="w-3.5 h-3.5" />
                          {symptom}
                        </span>
                      ))}
                    </div>

                    {/* Info Row */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1.5 text-sm text-[#6B7280]">
                          <span>Severity:</span>
                          <span className="font-bold" style={{ color: severityColor }}>
                            {log.severity}/10
                          </span>
                          <span className="text-xs">({getSeverityLabel(log.severity)})</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-sm text-[#6B7280]">
                          <MapPin className="w-4 h-4" />
                          {log.location}
                        </div>
                      </div>
                      <div>
                        {log.reviewed ? (
                          <div className="flex items-center gap-1.5 text-[#22C55E] text-sm font-medium">
                            <CheckCircle className="w-4 h-4" />
                            Reviewed
                          </div>
                        ) : (
                          <button className="px-4 py-1.5 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all">
                            Review
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Yesterday Section */}
      <div className="mt-10 mb-6">
        <h4 className="font-bold text-[#1F2937] text-lg mb-1">Yesterday</h4>
        <p className="text-sm text-[#6B7280]">Saturday, December 13, 2025</p>
      </div>

      {/* Load More */}
      <div className="text-center mt-6 pt-6 border-t border-gray-200">
        <button className="text-sm text-[#059669] font-medium hover:underline">
          Load earlier logs →
        </button>
      </div>
    </div>
  );
}
