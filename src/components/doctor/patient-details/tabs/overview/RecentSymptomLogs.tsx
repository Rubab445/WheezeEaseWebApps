import { Eye } from 'lucide-react';

const symptomLogs = [
  {
    id: '1',
    date: 'Dec 13, 2025',
    time: '09:45 AM',
    symptoms: ['Wheezing', 'Cough'],
    severity: 6,
    triggers: ['Pollen', 'AQI'],
    medicationTaken: true,
    aiRisk: 68,
  },
  {
    id: '2',
    date: 'Dec 12, 2025',
    time: '07:30 PM',
    symptoms: ['Shortness of breath'],
    severity: 5,
    triggers: ['Dust'],
    medicationTaken: true,
    aiRisk: 52,
  },
  {
    id: '3',
    date: 'Dec 12, 2025',
    time: '10:15 AM',
    symptoms: ['Cough'],
    severity: 3,
    triggers: ['Pollen'],
    medicationTaken: false,
    aiRisk: 45,
  },
  {
    id: '4',
    date: 'Dec 11, 2025',
    time: '06:20 PM',
    symptoms: ['Wheezing', 'Shortness of breath'],
    severity: 7,
    triggers: ['AQI', 'Smoke'],
    medicationTaken: true,
    aiRisk: 72,
  },
  {
    id: '5',
    date: 'Dec 10, 2025',
    time: '08:45 AM',
    symptoms: ['Cough'],
    severity: 4,
    triggers: ['Pollen'],
    medicationTaken: true,
    aiRisk: 48,
  },
];

export function RecentSymptomLogs() {
  const getSeverityColor = (severity: number) => {
    if (severity <= 3) return '#22C55E';
    if (severity <= 6) return '#F59E0B';
    return '#EF4444';
  };

  const getTriggerColor = (trigger: string) => {
    if (trigger === 'Pollen') return 'bg-[#F59E0B] text-white';
    if (trigger === 'AQI') return 'bg-[#EF4444] text-white';
    if (trigger === 'Dust') return 'bg-[#6B7280] text-white';
    if (trigger === 'Smoke') return 'bg-[#374151] text-white';
    return 'bg-[#9CA3AF] text-white';
  };

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h2 className="text-lg font-bold text-[#1F2937] mb-4">Recent Symptom Logs</h2>
      
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F8F9FA] border-b border-gray-200">
            <tr>
              <th className="px-4 py-3 text-left text-xs font-bold text-[#1F2937] uppercase">Date & Time</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-[#1F2937] uppercase">Symptoms</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-[#1F2937] uppercase">Severity</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-[#1F2937] uppercase">Triggers</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-[#1F2937] uppercase">Medication</th>
              <th className="px-4 py-3 text-left text-xs font-bold text-[#1F2937] uppercase">AI Risk</th>
              <th className="px-4 py-3 text-center text-xs font-bold text-[#1F2937] uppercase">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {symptomLogs.map((log, index) => (
              <tr key={log.id} className={`hover:bg-[#F8F9FA] transition-colors ${index % 2 === 1 ? 'bg-gray-50/30' : ''}`}>
                {/* Date & Time */}
                <td className="px-4 py-3 whitespace-nowrap">
                  <p className="text-sm font-medium text-[#1F2937]">{log.date}</p>
                  <p className="text-xs text-[#6B7280]">{log.time}</p>
                </td>

                {/* Symptoms */}
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {log.symptoms.map((symptom, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 bg-[#059669]/10 text-[#059669] rounded-full text-xs font-medium border border-[#059669]/20"
                      >
                        {symptom}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Severity */}
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-bold text-[#1F2937]">{log.severity}/10</span>
                    <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full transition-all"
                        style={{
                          width: `${log.severity * 10}%`,
                          backgroundColor: getSeverityColor(log.severity),
                        }}
                      />
                    </div>
                  </div>
                </td>

                {/* Triggers */}
                <td className="px-4 py-3">
                  <div className="flex flex-wrap gap-1">
                    {log.triggers.map((trigger, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTriggerColor(trigger)}`}
                      >
                        {trigger}
                      </span>
                    ))}
                  </div>
                </td>

                {/* Medication */}
                <td className="px-4 py-3">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    log.medicationTaken 
                      ? 'bg-[#22C55E] text-white' 
                      : 'bg-[#EF4444] text-white'
                  }`}>
                    {log.medicationTaken ? 'Yes' : 'No'}
                  </span>
                </td>

                {/* AI Risk */}
                <td className="px-4 py-3">
                  <span className="text-sm font-bold text-[#1F2937]">{log.aiRisk}%</span>
                </td>

                {/* Action */}
                <td className="px-4 py-3 text-center">
                  <button className="p-2 hover:bg-[#059669]/10 rounded-lg transition-colors" title="View details">
                    <Eye className="w-4 h-4 text-[#059669]" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
