import { useState } from 'react';
import { Eye, MessageSquare, FileText, Calendar as CalendarIcon, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import { RiskLevel, PatientStatus } from '../../pages/doctor/MyPatientsPage';

interface PatientTableViewProps {
  searchQuery: string;
  riskFilter: RiskLevel;
  statusFilter: PatientStatus;
  onQuickNote: (patientId: string) => void;
  onViewDetails?: (patientId: string) => void;
}

interface Patient {
  id: string;
  name: string;
  avatar: string;
  patientId: string;
  age: number;
  gender: string;
  conditions: string[];
  riskScore: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  lastLog: string;
  triggers: string[];
  nextAppt: string;
  status: 'active' | 'needs-review' | 'critical';
}

const patients: Patient[] = [
  {
    id: '1',
    name: 'Sarah Ahmed',
    avatar: 'SA',
    patientId: 'P-1001',
    age: 34,
    gender: 'F',
    conditions: ['Asthma', 'Pollen Allergy'],
    riskScore: 32,
    riskLevel: 'low',
    lastLog: 'Dec 13, 2025 9:45 AM',
    triggers: ['Pollen'],
    nextAppt: 'Dec 20, 2025',
    status: 'active',
  },
  {
    id: '2',
    name: 'Ali Hassan',
    avatar: 'AH',
    patientId: 'P-1002',
    age: 45,
    gender: 'M',
    conditions: ['Severe Asthma'],
    riskScore: 84,
    riskLevel: 'high',
    lastLog: 'Dec 13, 2025 11:30 AM',
    triggers: ['AQI', 'Smoke'],
    nextAppt: 'Dec 14, 2025',
    status: 'critical',
  },
  {
    id: '3',
    name: 'Fatima Khan',
    avatar: 'FK',
    patientId: 'P-1003',
    age: 28,
    gender: 'F',
    conditions: ['Asthma', 'Dust Allergy'],
    riskScore: 58,
    riskLevel: 'medium',
    lastLog: 'Dec 13, 2025 8:15 AM',
    triggers: ['Dust'],
    nextAppt: 'Dec 18, 2025',
    status: 'needs-review',
  },
  {
    id: '4',
    name: 'Ahmed Raza',
    avatar: 'AR',
    patientId: 'P-1004',
    age: 52,
    gender: 'M',
    conditions: ['Seasonal Allergies'],
    riskScore: 28,
    riskLevel: 'low',
    lastLog: 'Dec 12, 2025 6:20 PM',
    triggers: [],
    nextAppt: 'Dec 27, 2025',
    status: 'active',
  },
  {
    id: '5',
    name: 'Zainab Ali',
    avatar: 'ZA',
    patientId: 'P-1005',
    age: 38,
    gender: 'F',
    conditions: ['Asthma'],
    riskScore: 78,
    riskLevel: 'high',
    lastLog: 'Dec 13, 2025 10:45 AM',
    triggers: ['Smoke', 'AQI'],
    nextAppt: 'Dec 14, 2025',
    status: 'critical',
  },
  {
    id: '6',
    name: 'Omar Farooq',
    avatar: 'OF',
    patientId: 'P-1006',
    age: 41,
    gender: 'M',
    conditions: ['Asthma'],
    riskScore: 72,
    riskLevel: 'high',
    lastLog: 'Dec 13, 2025 7:30 AM',
    triggers: ['Pollen', 'Dust'],
    nextAppt: 'Dec 15, 2025',
    status: 'needs-review',
  },
  {
    id: '7',
    name: 'Ayesha Malik',
    avatar: 'AM',
    patientId: 'P-1007',
    age: 29,
    gender: 'F',
    conditions: ['Severe Asthma'],
    riskScore: 81,
    riskLevel: 'critical',
    lastLog: 'Dec 13, 2025 11:00 AM',
    triggers: ['AQI'],
    nextAppt: 'Dec 13, 2025',
    status: 'critical',
  },
  {
    id: '8',
    name: 'Hassan Shah',
    avatar: 'HS',
    patientId: 'P-1008',
    age: 36,
    gender: 'M',
    conditions: ['Dust Allergy'],
    riskScore: 45,
    riskLevel: 'medium',
    lastLog: 'Dec 13, 2025 6:00 AM',
    triggers: ['Dust'],
    nextAppt: 'Dec 22, 2025',
    status: 'active',
  },
];

export function PatientTableView({ searchQuery, riskFilter, statusFilter, onQuickNote, onViewDetails }: PatientTableViewProps) {
  const [selectedPatients, setSelectedPatients] = useState<Set<string>>(new Set());
  const [rowsPerPage, setRowsPerPage] = useState(15);

  const getRiskColor = (level: string) => {
    if (level === 'low') return '#22C55E';
    if (level === 'medium') return '#F59E0B';
    if (level === 'high') return '#EF4444';
    return '#DC2626';
  };

  const getStatusColor = (status: string) => {
    if (status === 'active') return 'bg-[#22C55E] text-white';
    if (status === 'needs-review') return 'bg-[#F59E0B] text-white';
    return 'bg-[#EF4444] text-white';
  };

  const getStatusLabel = (status: string) => {
    if (status === 'active') return 'Active';
    if (status === 'needs-review') return 'Needs Review';
    return 'Critical';
  };

  const getTriggerColor = (trigger: string) => {
    if (trigger === 'Pollen') return 'bg-[#F59E0B] text-white';
    if (trigger === 'AQI') return 'bg-[#EF4444] text-white';
    if (trigger === 'Dust') return 'bg-[#6B7280] text-white';
    if (trigger === 'Smoke') return 'bg-[#374151] text-white';
    return 'bg-[#9CA3AF] text-white';
  };

  // Filter patients
  const filteredPatients = patients.filter((patient) => {
    const matchesSearch = searchQuery === '' || 
      patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.patientId.toLowerCase().includes(searchQuery.toLowerCase()) ||
      patient.conditions.some(c => c.toLowerCase().includes(searchQuery.toLowerCase()));
    
    const matchesRisk = riskFilter === 'all' || patient.riskLevel === riskFilter;
    const matchesStatus = statusFilter === 'all' || patient.status === statusFilter;

    return matchesSearch && matchesRisk && matchesStatus;
  });

  const togglePatientSelection = (patientId: string) => {
    const newSelection = new Set(selectedPatients);
    if (newSelection.has(patientId)) {
      newSelection.delete(patientId);
    } else {
      newSelection.add(patientId);
    }
    setSelectedPatients(newSelection);
  };

  const toggleAllPatients = () => {
    if (selectedPatients.size === filteredPatients.length) {
      setSelectedPatients(new Set());
    } else {
      setSelectedPatients(new Set(filteredPatients.map(p => p.id)));
    }
  };

  return (
    <div>
      {/* Bulk Actions Bar */}
      {selectedPatients.size > 0 && (
        <div className="bg-[#059669] text-white rounded-xl p-4 mb-4 shadow-lg flex items-center justify-between">
          <span className="font-medium">{selectedPatients.size} patient{selectedPatients.size > 1 ? 's' : ''} selected</span>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 bg-white text-[#059669] rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
              Send Message
            </button>
            <button className="px-4 py-2 bg-white text-[#059669] rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
              Schedule Appointment
            </button>
            <button className="px-4 py-2 bg-white text-[#059669] rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
              Export
            </button>
            <button className="px-4 py-2 bg-white text-[#059669] rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium">
              Mark Reviewed
            </button>
          </div>
        </div>
      )}

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden border border-gray-200">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-[#F8F9FA] border-b border-gray-200">
              <tr>
                <th className="px-6 py-4 text-left">
                  <input
                    type="checkbox"
                    checked={selectedPatients.size === filteredPatients.length && filteredPatients.length > 0}
                    onChange={toggleAllPatients}
                    className="w-4 h-4 text-[#059669] border-gray-300 rounded focus:ring-[#059669] cursor-pointer"
                  />
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#1F2937] uppercase tracking-wider">
                  Patient
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#1F2937] uppercase tracking-wider">
                  Age / Gender
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#1F2937] uppercase tracking-wider">
                  Condition
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#1F2937] uppercase tracking-wider">
                  Risk Score
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#1F2937] uppercase tracking-wider">
                  Last Symptom Log
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#1F2937] uppercase tracking-wider">
                  Main Triggers
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#1F2937] uppercase tracking-wider">
                  Next Appointment
                </th>
                <th className="px-6 py-4 text-left text-xs font-bold text-[#1F2937] uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-4 text-center text-xs font-bold text-[#1F2937] uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredPatients.map((patient, index) => (
                <tr
                  key={patient.id}
                  className={`hover:bg-[#059669]/5 transition-colors ${
                    index % 2 === 1 ? 'bg-[#F8F9FA]/30' : ''
                  }`}
                >
                  {/* Checkbox */}
                  <td className="px-6 py-4">
                    <input
                      type="checkbox"
                      checked={selectedPatients.has(patient.id)}
                      onChange={() => togglePatientSelection(patient.id)}
                      className="w-4 h-4 text-[#059669] border-gray-300 rounded focus:ring-[#059669] cursor-pointer"
                    />
                  </td>

                  {/* Patient */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-sm font-medium">
                        {patient.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-[#1F2937]">{patient.name}</p>
                        <p className="text-xs text-[#6B7280]">{patient.patientId}</p>
                      </div>
                    </div>
                  </td>

                  {/* Age/Gender */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm text-[#1F2937]">{patient.age} / {patient.gender}</p>
                  </td>

                  {/* Conditions */}
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {patient.conditions.map((condition, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 bg-[#F8F9FA] text-[#1F2937] rounded-full text-xs font-medium border border-gray-200"
                        >
                          {condition}
                        </span>
                      ))}
                    </div>
                  </td>

                  {/* Risk Score */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-bold text-[#1F2937] min-w-[3rem]">{patient.riskScore}%</span>
                      <div className="flex-1 w-20 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className="h-full transition-all"
                          style={{
                            width: `${patient.riskScore}%`,
                            backgroundColor: getRiskColor(patient.riskLevel),
                          }}
                        />
                      </div>
                    </div>
                  </td>

                  {/* Last Log */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm text-[#1F2937]">{patient.lastLog}</p>
                  </td>

                  {/* Triggers */}
                  <td className="px-6 py-4">
                    <div className="flex flex-wrap gap-1">
                      {patient.triggers.length > 0 ? (
                        patient.triggers.map((trigger, idx) => (
                          <span
                            key={idx}
                            className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTriggerColor(trigger)}`}
                          >
                            {trigger}
                          </span>
                        ))
                      ) : (
                        <span className="text-xs text-[#6B7280]">None</span>
                      )}
                    </div>
                  </td>

                  {/* Next Appointment */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <p className="text-sm text-[#1F2937]">{patient.nextAppt}</p>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                      {getStatusLabel(patient.status)}
                    </span>
                  </td>

                  {/* Actions */}
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center justify-center gap-2">
                      <button
                        className="p-2 hover:bg-[#059669]/10 rounded-lg transition-colors"
                        title="View patient"
                        onClick={() => onViewDetails && onViewDetails(patient.id)}
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
                        onClick={() => onQuickNote(patient.id)}
                        className="p-2 hover:bg-[#059669]/10 rounded-lg transition-colors"
                        title="Add note"
                      >
                        <FileText className="w-4 h-4 text-[#059669]" />
                      </button>
                      <button
                        className="p-2 hover:bg-[#059669]/10 rounded-lg transition-colors"
                        title="Schedule"
                      >
                        <CalendarIcon className="w-4 h-4 text-[#059669]" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Empty State */}
        {filteredPatients.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <p className="text-lg font-medium text-[#1F2937] mb-2">No patients found</p>
            <p className="text-sm text-[#6B7280]">Try adjusting your search or filters</p>
          </div>
        )}

        {/* Pagination Footer */}
        {filteredPatients.length > 0 && (
          <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#6B7280]">Rows per page:</span>
              <div className="relative">
                <select
                  value={rowsPerPage}
                  onChange={(e) => setRowsPerPage(Number(e.target.value))}
                  className="appearance-none pl-3 pr-8 py-1.5 bg-[#F8F9FA] rounded-lg text-sm text-[#1F2937] cursor-pointer hover:bg-gray-200 focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20"
                >
                  <option value={10}>10</option>
                  <option value={15}>15</option>
                  <option value={25}>25</option>
                  <option value={50}>50</option>
                </select>
                <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-sm text-[#6B7280]">
                Showing 1-{Math.min(rowsPerPage, filteredPatients.length)} of {filteredPatients.length}
              </span>
              <div className="flex items-center gap-1">
                <button
                  disabled
                  className="p-2 hover:bg-[#F8F9FA] rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <ChevronLeft className="w-4 h-4 text-[#6B7280]" />
                </button>
                <button className="p-2 hover:bg-[#F8F9FA] rounded-lg transition-colors">
                  <ChevronRight className="w-4 h-4 text-[#6B7280]" />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}