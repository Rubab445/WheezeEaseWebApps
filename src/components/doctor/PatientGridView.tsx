import { Calendar, Clock, FileText } from 'lucide-react';
import { RiskLevel, PatientStatus } from '../../pages/doctor/MyPatientsPage';

interface PatientGridViewProps {
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
  conditions: string[];
  riskScore: number;
  riskLevel: 'low' | 'medium' | 'high' | 'critical';
  lastLog: string;
  nextAppt: string;
  status: 'active' | 'needs-review' | 'critical';
}

const patients: Patient[] = [
  {
    id: '1',
    name: 'Sarah Ahmed',
    avatar: 'SA',
    patientId: 'P-1001',
    conditions: ['Asthma', 'Pollen Allergy'],
    riskScore: 32,
    riskLevel: 'low',
    lastLog: '2 hours ago',
    nextAppt: 'Dec 20, 2025',
    status: 'active',
  },
  {
    id: '2',
    name: 'Ali Hassan',
    avatar: 'AH',
    patientId: 'P-1002',
    conditions: ['Severe Asthma'],
    riskScore: 84,
    riskLevel: 'high',
    lastLog: '30 mins ago',
    nextAppt: 'Dec 14, 2025',
    status: 'critical',
  },
  {
    id: '3',
    name: 'Fatima Khan',
    avatar: 'FK',
    patientId: 'P-1003',
    conditions: ['Asthma', 'Dust Allergy'],
    riskScore: 58,
    riskLevel: 'medium',
    lastLog: '4 hours ago',
    nextAppt: 'Dec 18, 2025',
    status: 'needs-review',
  },
  {
    id: '4',
    name: 'Ahmed Raza',
    avatar: 'AR',
    patientId: 'P-1004',
    conditions: ['Seasonal Allergies'],
    riskScore: 28,
    riskLevel: 'low',
    lastLog: '1 day ago',
    nextAppt: 'Dec 27, 2025',
    status: 'active',
  },
  {
    id: '5',
    name: 'Zainab Ali',
    avatar: 'ZA',
    patientId: 'P-1005',
    conditions: ['Asthma', 'Smoke Sensitivity'],
    riskScore: 78,
    riskLevel: 'high',
    lastLog: '1 hour ago',
    nextAppt: 'Dec 14, 2025',
    status: 'critical',
  },
  {
    id: '6',
    name: 'Omar Farooq',
    avatar: 'OF',
    patientId: 'P-1006',
    conditions: ['Asthma'],
    riskScore: 72,
    riskLevel: 'high',
    lastLog: '3 hours ago',
    nextAppt: 'Dec 15, 2025',
    status: 'needs-review',
  },
  {
    id: '7',
    name: 'Ayesha Malik',
    avatar: 'AM',
    patientId: 'P-1007',
    conditions: ['Severe Asthma', 'AQI Sensitivity'],
    riskScore: 81,
    riskLevel: 'critical',
    lastLog: '45 mins ago',
    nextAppt: 'Dec 13, 2025',
    status: 'critical',
  },
  {
    id: '8',
    name: 'Hassan Shah',
    avatar: 'HS',
    patientId: 'P-1008',
    conditions: ['Dust Allergy'],
    riskScore: 45,
    riskLevel: 'medium',
    lastLog: '6 hours ago',
    nextAppt: 'Dec 22, 2025',
    status: 'active',
  },
  {
    id: '9',
    name: 'Layla Ibrahim',
    avatar: 'LI',
    patientId: 'P-1009',
    conditions: ['Asthma'],
    riskScore: 35,
    riskLevel: 'low',
    lastLog: '5 hours ago',
    nextAppt: 'Dec 25, 2025',
    status: 'active',
  },
];

export function PatientGridView({ searchQuery, riskFilter, statusFilter, onQuickNote, onViewDetails }: PatientGridViewProps) {
  const getRiskColor = (level: string) => {
    if (level === 'low') return { bg: 'bg-[#22C55E]', text: 'text-[#22C55E]', border: 'border-[#22C55E]' };
    if (level === 'medium') return { bg: 'bg-[#F59E0B]', text: 'text-[#F59E0B]', border: 'border-[#F59E0B]' };
    if (level === 'high') return { bg: 'bg-[#EF4444]', text: 'text-[#EF4444]', border: 'border-[#EF4444]' };
    return { bg: 'bg-[#DC2626]', text: 'text-[#DC2626]', border: 'border-[#DC2626]' };
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

  return (
    <div className="grid grid-cols-3 gap-6">
      {filteredPatients.map((patient) => {
        const riskColors = getRiskColor(patient.riskLevel);
        
        return (
          <div
            key={patient.id}
            className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:border-[#059669] hover:shadow-lg transition-all group"
          >
            {/* Top Section - Avatar & Risk Badge */}
            <div className="flex items-start justify-between mb-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-xl font-bold shadow-md">
                {patient.avatar}
              </div>
              <div className={`px-3 py-1 rounded-full text-xs font-bold ${riskColors.bg} text-white shadow-sm`}>
                {patient.riskScore}%
              </div>
            </div>

            {/* Patient Info */}
            <div className="mb-4">
              <h3 className="text-lg font-bold text-[#1F2937] mb-1">{patient.name}</h3>
              <p className="text-xs text-[#6B7280]">{patient.patientId}</p>
            </div>

            {/* Condition Chips */}
            <div className="flex flex-wrap gap-2 mb-4">
              {patient.conditions.map((condition, idx) => (
                <span
                  key={idx}
                  className="px-2.5 py-1 bg-[#F8F9FA] text-[#1F2937] rounded-full text-xs font-medium border border-gray-200"
                >
                  {condition}
                </span>
              ))}
            </div>

            {/* Risk Score Bar */}
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-[#1F2937]">Risk Score</span>
                <span className={`text-sm font-bold ${riskColors.text}`}>{patient.riskScore}%</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div
                  className={`h-full ${riskColors.bg} transition-all`}
                  style={{ width: `${patient.riskScore}%` }}
                />
              </div>
            </div>

            {/* Last Log & Next Appointment */}
            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <Clock className="w-4 h-4" />
                <span>Last log: {patient.lastLog}</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-[#6B7280]">
                <Calendar className="w-4 h-4" />
                <span>Next: {patient.nextAppt}</span>
              </div>
            </div>

            {/* Status Badge */}
            <div className="mb-4">
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(patient.status)}`}>
                {getStatusLabel(patient.status)}
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => onViewDetails?.(patient.id)}
                className="flex-1 px-4 py-2 border border-[#059669] text-[#059669] rounded-lg hover:bg-[#059669] hover:text-white transition-all text-sm font-medium"
              >
                View Details
              </button>
              <button
                onClick={() => onQuickNote(patient.id)}
                className="p-2 border border-gray-300 text-[#6B7280] rounded-lg hover:border-[#059669] hover:text-[#059669] hover:bg-[#059669]/5 transition-all"
                title="Quick Note"
              >
                <FileText className="w-4 h-4" />
              </button>
            </div>
          </div>
        );
      })}

      {/* Empty State */}
      {filteredPatients.length === 0 && (
        <div className="col-span-3 flex flex-col items-center justify-center py-16">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <Users className="w-10 h-10 text-gray-400" />
          </div>
          <p className="text-lg font-medium text-[#1F2937] mb-2">No patients found</p>
          <p className="text-sm text-[#6B7280]">Try adjusting your search or filters</p>
        </div>
      )}
    </div>
  );
}