import { Eye, MessageSquare, FileEdit, ChevronLeft, ChevronRight, ChevronDown } from 'lucide-react';

const patients = [
  {
    id: 'P-1001',
    name: 'Sarah Ahmed',
    avatar: 'SA',
    lastLog: 'Dec 13, 2025 9:45 AM',
    riskScore: 32,
    riskLevel: 'low',
    trigger: 'Pollen',
    triggerColor: 'bg-[#F59E0B] text-white',
    status: 'Active',
    statusColor: 'bg-[#22C55E] text-white',
    nextAppt: 'Dec 20, 2025',
  },
  {
    id: 'P-1002',
    name: 'Ali Hassan',
    avatar: 'AH',
    lastLog: 'Dec 13, 2025 8:30 AM',
    riskScore: 84,
    riskLevel: 'high',
    trigger: 'AQI',
    triggerColor: 'bg-[#EF4444] text-white',
    status: 'Critical',
    statusColor: 'bg-[#EF4444] text-white',
    nextAppt: 'Dec 14, 2025',
  },
  {
    id: 'P-1003',
    name: 'Fatima Khan',
    avatar: 'FK',
    lastLog: 'Dec 13, 2025 7:15 AM',
    riskScore: 58,
    riskLevel: 'medium',
    trigger: 'Dust',
    triggerColor: 'bg-[#6B7280] text-white',
    status: 'Needs Review',
    statusColor: 'bg-[#F59E0B] text-white',
    nextAppt: 'Dec 18, 2025',
  },
  {
    id: 'P-1004',
    name: 'Ahmed Raza',
    avatar: 'AR',
    lastLog: 'Dec 12, 2025 6:20 PM',
    riskScore: 28,
    riskLevel: 'low',
    trigger: 'None',
    triggerColor: 'bg-[#9CA3AF] text-white',
    status: 'Active',
    statusColor: 'bg-[#22C55E] text-white',
    nextAppt: 'Dec 27, 2025',
  },
  {
    id: 'P-1005',
    name: 'Zainab Ali',
    avatar: 'ZA',
    lastLog: 'Dec 13, 2025 5:00 AM',
    riskScore: 78,
    riskLevel: 'high',
    trigger: 'Smoke',
    triggerColor: 'bg-[#374151] text-white',
    status: 'Critical',
    statusColor: 'bg-[#EF4444] text-white',
    nextAppt: 'Dec 14, 2025',
  },
  {
    id: 'P-1006',
    name: 'Omar Farooq',
    avatar: 'OF',
    lastLog: 'Dec 12, 2025 10:30 PM',
    riskScore: 72,
    riskLevel: 'high',
    trigger: 'Pollen',
    triggerColor: 'bg-[#F59E0B] text-white',
    status: 'Needs Review',
    statusColor: 'bg-[#F59E0B] text-white',
    nextAppt: 'Dec 15, 2025',
  },
  {
    id: 'P-1007',
    name: 'Ayesha Malik',
    avatar: 'AM',
    lastLog: 'Dec 13, 2025 3:45 AM',
    riskScore: 81,
    riskLevel: 'high',
    trigger: 'AQI',
    triggerColor: 'bg-[#EF4444] text-white',
    status: 'Critical',
    statusColor: 'bg-[#EF4444] text-white',
    nextAppt: 'Dec 13, 2025',
  },
  {
    id: 'P-1008',
    name: 'Hassan Shah',
    avatar: 'HS',
    lastLog: 'Dec 12, 2025 8:00 PM',
    riskScore: 45,
    riskLevel: 'medium',
    trigger: 'Dust',
    triggerColor: 'bg-[#95A5A6] text-white',
    status: 'Active',
    statusColor: 'bg-[#27AE60] text-white',
    nextAppt: 'Dec 22, 2025',
  },
];

export function PatientsTable() {
  const getRiskColor = (level: string) => {
    if (level === 'low') return '#22C55E';
    if (level === 'medium') return '#F59E0B';
    return '#EF4444';
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h2 className="text-lg font-bold text-[#2D3436]">My Patients - Recent Activity</h2>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#F8F9FA] border-b border-gray-200">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#2D3436] uppercase tracking-wider">
                Patient
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#2D3436] uppercase tracking-wider">
                Last Symptom Log
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#2D3436] uppercase tracking-wider">
                Risk Score
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#2D3436] uppercase tracking-wider">
                Main Trigger
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#2D3436] uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-4 text-left text-xs font-bold text-[#2D3436] uppercase tracking-wider">
                Next Appointment
              </th>
              <th className="px-6 py-4 text-center text-xs font-bold text-[#2D3436] uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient, index) => (
              <tr 
                key={patient.id}
                className={`hover:bg-[#059669]/5 transition-colors cursor-pointer ${
                  index % 2 === 1 ? 'bg-[#F8F9FA]/30' : ''
                }`}
              >
                {/* Patient */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-sm font-medium">
                      {patient.avatar}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[#2D3436]">{patient.name}</p>
                      <p className="text-xs text-[#636E72]">{patient.id}</p>
                    </div>
                  </div>
                </td>

                {/* Last Log */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm text-[#2D3436]">{patient.lastLog}</p>
                </td>

                {/* Risk Score */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center gap-3">
                    <span className="text-sm font-bold text-[#2D3436] min-w-[3rem]">{patient.riskScore}%</span>
                    <div className="flex-1 w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all"
                        style={{ 
                          width: `${patient.riskScore}%`,
                          backgroundColor: getRiskColor(patient.riskLevel)
                        }}
                      />
                    </div>
                  </div>
                </td>

                {/* Trigger */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${patient.triggerColor}`}>
                    {patient.trigger}
                  </span>
                </td>

                {/* Status */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${patient.statusColor}`}>
                    {patient.status}
                  </span>
                </td>

                {/* Next Appointment */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <p className="text-sm text-[#2D3436]">{patient.nextAppt}</p>
                </td>

                {/* Actions */}
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center justify-center gap-2">
                    <button 
                      className="p-2 hover:bg-[#059669]/10 rounded-lg transition-colors"
                      title="View patient"
                    >
                      <Eye className="w-4 h-4 text-[#059669]" />
                    </button>
                    <button 
                      className="p-2 hover:bg-[#059669]/10 rounded-lg transition-colors"
                      title="Message patient"
                    >
                      <MessageSquare className="w-4 h-4 text-[#059669]" />
                    </button>
                    <button 
                      className="p-2 hover:bg-[#059669]/10 rounded-lg transition-colors"
                      title="Edit notes"
                    >
                      <FileEdit className="w-4 h-4 text-[#059669]" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Table Footer */}
      <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-[#636E72]">Rows per page:</span>
          <button className="flex items-center gap-1 px-3 py-1.5 bg-[#F8F9FA] rounded-lg text-sm text-[#2D3436] hover:bg-gray-200 transition-colors">
            10
            <ChevronDown className="w-4 h-4" />
          </button>
        </div>

        <div className="flex items-center gap-4">
          <span className="text-sm text-[#636E72]">Showing 1-10 of 127</span>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-[#F8F9FA] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed">
              <ChevronLeft className="w-4 h-4 text-[#636E72]" />
            </button>
            <button className="p-2 hover:bg-[#F8F9FA] rounded-lg transition-colors">
              <ChevronRight className="w-4 h-4 text-[#636E72]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}