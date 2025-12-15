import { Wind, Eye, FileText, CheckCircle, MoreVertical, ArrowUpDown } from 'lucide-react';

interface TableLog {
  id: string;
  status: 'new' | 'reviewed';
  time: string;
  patientName: string;
  patientAvatar: string;
  symptoms: string[];
  severity: number;
  triggers: string[];
  medicationTaken: boolean;
  aqi: number;
  aqiLevel: string;
  pollen: string;
  aiRisk: number;
  reviewer?: string;
}

const mockTableLogs: TableLog[] = [
  {
    id: '1',
    status: 'new',
    time: '2:30 PM',
    patientName: 'Ahmad Hassan',
    patientAvatar: 'AH',
    symptoms: ['Wheezing', 'Coughing', 'Shortness of breath'],
    severity: 7,
    triggers: ['Tree Pollen', 'High AQI'],
    medicationTaken: true,
    aqi: 145,
    aqiLevel: 'Unhealthy',
    pollen: 'High',
    aiRisk: 23
  },
  {
    id: '2',
    status: 'new',
    time: '12:45 PM',
    patientName: 'Sarah Ahmed',
    patientAvatar: 'SA',
    symptoms: ['Wheezing', 'Chest tightness'],
    severity: 5,
    triggers: ['Dust', 'Exercise'],
    medicationTaken: true,
    aqi: 78,
    aqiLevel: 'Moderate',
    pollen: 'Low',
    aiRisk: 12
  },
  {
    id: '3',
    status: 'reviewed',
    time: '10:20 AM',
    patientName: 'Fatima Khan',
    patientAvatar: 'FK',
    symptoms: ['Coughing', 'Shortness of breath'],
    severity: 8,
    triggers: ['Pollen', 'Cold Air'],
    medicationTaken: false,
    aqi: 92,
    aqiLevel: 'Moderate',
    pollen: 'Very High',
    aiRisk: 34,
    reviewer: 'Dr. Khan'
  },
  {
    id: '4',
    status: 'reviewed',
    time: '9:15 AM',
    patientName: 'Zainab Ali',
    patientAvatar: 'ZA',
    symptoms: ['Wheezing', 'Shortness of breath', 'Chest tightness'],
    severity: 9,
    triggers: ['Smoke', 'Air Pollution'],
    medicationTaken: true,
    aqi: 168,
    aqiLevel: 'Unhealthy',
    pollen: 'Moderate',
    aiRisk: 45,
    reviewer: 'Dr. Ahmed'
  },
  {
    id: '5',
    status: 'reviewed',
    time: '8:00 AM',
    patientName: 'Ali Hassan',
    patientAvatar: 'AH',
    symptoms: ['Coughing'],
    severity: 3,
    triggers: ['Cold Air'],
    medicationTaken: true,
    aqi: 45,
    aqiLevel: 'Good',
    pollen: 'Low',
    aiRisk: 5,
    reviewer: 'Dr. Khan'
  }
];

export function SymptomLogTable() {
  const getSeverityColor = (sev: number) => {
    if (sev >= 8) return '#EF4444';
    if (sev >= 4) return '#F59E0B';
    return '#22C55E';
  };

  const getAQIColor = (level: string) => {
    if (level === 'Unhealthy') return { bg: '#FEF2F2', text: '#EF4444' };
    if (level === 'Moderate') return { bg: '#FEF3C7', text: '#F59E0B' };
    return { bg: '#F0FDF4', text: '#22C55E' };
  };

  const getPollenColor = (level: string) => {
    if (level === 'Very High' || level === 'High') return { bg: '#FEF2F2', text: '#EF4444' };
    if (level === 'Moderate') return { bg: '#FEF3C7', text: '#F59E0B' };
    return { bg: '#F0FDF4', text: '#22C55E' };
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200 sticky top-0 z-10">
            <tr>
              <th className="w-10 p-4">
                <input 
                  type="checkbox" 
                  className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
              </th>
              <th className="px-4 py-3 text-left">
                <button className="flex items-center gap-1 text-xs font-medium text-[#6B7280] uppercase hover:text-[#059669]">
                  Status
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button className="flex items-center gap-1 text-xs font-medium text-[#6B7280] uppercase hover:text-[#059669]">
                  Time
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <button className="flex items-center gap-1 text-xs font-medium text-[#6B7280] uppercase hover:text-[#059669]">
                  Patient
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-[#6B7280] uppercase">Symptoms</span>
              </th>
              <th className="px-4 py-3 text-left">
                <button className="flex items-center gap-1 text-xs font-medium text-[#6B7280] uppercase hover:text-[#059669]">
                  Severity
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-[#6B7280] uppercase">Triggers</span>
              </th>
              <th className="px-4 py-3 text-center">
                <span className="text-xs font-medium text-[#6B7280] uppercase">Med</span>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-[#6B7280] uppercase">Environment</span>
              </th>
              <th className="px-4 py-3 text-center">
                <button className="flex items-center gap-1 text-xs font-medium text-[#6B7280] uppercase hover:text-[#059669] mx-auto">
                  AI Risk
                  <ArrowUpDown className="w-3 h-3" />
                </button>
              </th>
              <th className="px-4 py-3 text-left">
                <span className="text-xs font-medium text-[#6B7280] uppercase">Reviewer</span>
              </th>
              <th className="px-4 py-3 text-center">
                <span className="text-xs font-medium text-[#6B7280] uppercase">Actions</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {mockTableLogs.map((log) => {
              const severityColor = getSeverityColor(log.severity);
              const aqiColor = getAQIColor(log.aqiLevel);
              const pollenColor = getPollenColor(log.pollen);
              const isHighSeverity = log.severity >= 8;

              return (
                <tr 
                  key={log.id}
                  className={`border-b border-gray-100 hover:bg-[#059669]/5 transition-colors cursor-pointer ${
                    isHighSeverity ? 'bg-red-50/30' : ''
                  }`}
                >
                  {/* Checkbox */}
                  <td className="p-4">
                    <input 
                      type="checkbox" 
                      className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                    />
                  </td>

                  {/* Status */}
                  <td className="px-4 py-3">
                    {log.status === 'new' ? (
                      <span className="px-2.5 py-1 bg-[#8B5CF6] text-white rounded-full text-xs font-medium">
                        New
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                        Reviewed
                      </span>
                    )}
                  </td>

                  {/* Time */}
                  <td className="px-4 py-3">
                    <span className="text-sm font-medium text-[#1F2937]">{log.time}</span>
                  </td>

                  {/* Patient */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-xs font-bold">
                        {log.patientAvatar}
                      </div>
                      <button className="font-medium text-[#059669] hover:underline text-sm">
                        {log.patientName}
                      </button>
                    </div>
                  </td>

                  {/* Symptoms */}
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1 max-w-[200px]">
                      {log.symptoms.slice(0, 2).map((symptom, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 bg-[#059669]/10 text-[#059669] rounded text-xs font-medium flex items-center gap-1"
                        >
                          <Wind className="w-3 h-3" />
                          {symptom.length > 10 ? symptom.slice(0, 10) + '...' : symptom}
                        </span>
                      ))}
                      {log.symptoms.length > 2 && (
                        <span className="px-2 py-0.5 bg-gray-200 text-gray-700 rounded text-xs font-medium">
                          +{log.symptoms.length - 2}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Severity */}
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-2">
                      <div className="w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full rounded-full"
                          style={{ 
                            width: `${(log.severity / 10) * 100}%`,
                            backgroundColor: severityColor
                          }}
                        />
                      </div>
                      <span className="text-sm font-bold" style={{ color: severityColor }}>
                        {log.severity}
                      </span>
                    </div>
                  </td>

                  {/* Triggers */}
                  <td className="px-4 py-3">
                    <div className="flex flex-wrap gap-1 max-w-[150px]">
                      {log.triggers.slice(0, 2).map((trigger, idx) => (
                        <span 
                          key={idx}
                          className="px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-xs"
                        >
                          {trigger.length > 8 ? trigger.slice(0, 8) + '...' : trigger}
                        </span>
                      ))}
                      {log.triggers.length > 2 && (
                        <span className="px-2 py-0.5 bg-gray-200 text-gray-700 rounded text-xs">
                          +{log.triggers.length - 2}
                        </span>
                      )}
                    </div>
                  </td>

                  {/* Medication */}
                  <td className="px-4 py-3 text-center">
                    {log.medicationTaken ? (
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-green-100 text-green-700 rounded-full">
                        <CheckCircle className="w-4 h-4" />
                      </span>
                    ) : (
                      <span className="inline-flex items-center justify-center w-6 h-6 bg-red-100 text-red-700 rounded-full text-xs font-bold">
                        ✕
                      </span>
                    )}
                  </td>

                  {/* Environment */}
                  <td className="px-4 py-3">
                    <div className="space-y-1">
                      <span 
                        className="inline-block px-2 py-0.5 rounded text-xs font-medium"
                        style={{ 
                          backgroundColor: aqiColor.bg,
                          color: aqiColor.text 
                        }}
                      >
                        AQI {log.aqi}
                      </span>
                      <span 
                        className="inline-block px-2 py-0.5 rounded text-xs font-medium ml-1"
                        style={{ 
                          backgroundColor: pollenColor.bg,
                          color: pollenColor.text 
                        }}
                      >
                        {log.pollen}
                      </span>
                    </div>
                  </td>

                  {/* AI Risk */}
                  <td className="px-4 py-3 text-center">
                    <span className="text-sm font-bold text-[#8B5CF6]">
                      {log.aiRisk}%
                    </span>
                  </td>

                  {/* Reviewer */}
                  <td className="px-4 py-3">
                    {log.reviewer ? (
                      <span className="text-sm text-[#6B7280]">{log.reviewer}</span>
                    ) : (
                      <span className="text-sm text-amber-600 font-medium">Unassigned</span>
                    )}
                  </td>

                  {/* Actions */}
                  <td className="px-4 py-3">
                    <div className="flex items-center justify-center gap-1">
                      <button 
                        className="p-1.5 text-[#6B7280] hover:text-[#059669] hover:bg-[#059669]/10 rounded transition-colors"
                        title="View"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-1.5 text-[#6B7280] hover:text-[#059669] hover:bg-[#059669]/10 rounded transition-colors"
                        title="Add Note"
                      >
                        <FileText className="w-4 h-4" />
                      </button>
                      <button 
                        className="p-1.5 text-[#6B7280] hover:text-[#059669] hover:bg-[#059669]/10 rounded transition-colors"
                        title="More"
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#6B7280]">Rows per page:</span>
          <select className="px-3 py-1 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-[#059669]/50">
            <option>20</option>
            <option>50</option>
            <option>100</option>
          </select>
        </div>
        <p className="text-sm text-[#6B7280]">Showing 1-5 of 156 logs</p>
        <div className="flex items-center gap-2">
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm font-medium text-[#6B7280] hover:bg-gray-100 transition-colors">
            Previous
          </button>
          <button className="px-3 py-1 bg-[#059669] text-white rounded-lg text-sm font-medium">1</button>
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm font-medium text-[#6B7280] hover:bg-gray-100 transition-colors">2</button>
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm font-medium text-[#6B7280] hover:bg-gray-100 transition-colors">3</button>
          <button className="px-3 py-1 border border-gray-300 rounded-lg text-sm font-medium text-[#6B7280] hover:bg-gray-100 transition-colors">
            Next
          </button>
        </div>
      </div>
    </div>
  );
}
