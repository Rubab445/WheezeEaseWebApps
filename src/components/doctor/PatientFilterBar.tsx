import { ChevronDown, X } from 'lucide-react';
import { RiskLevel, PatientStatus } from '../../pages/doctor/MyPatientsPage';

interface PatientFilterBarProps {
  riskFilter: RiskLevel;
  setRiskFilter: (filter: RiskLevel) => void;
  statusFilter: PatientStatus;
  setStatusFilter: (filter: PatientStatus) => void;
  onClearFilters: () => void;
}

const riskLevels: { id: RiskLevel; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'low', label: 'Low' },
  { id: 'medium', label: 'Medium' },
  { id: 'high', label: 'High' },
  { id: 'critical', label: 'Critical' },
];

const statusOptions: { id: PatientStatus; label: string }[] = [
  { id: 'all', label: 'All Status' },
  { id: 'active', label: 'Active' },
  { id: 'needs-review', label: 'Needs Review' },
  { id: 'critical', label: 'Critical' },
];

export function PatientFilterBar({
  riskFilter,
  setRiskFilter,
  statusFilter,
  setStatusFilter,
  onClearFilters,
}: PatientFilterBarProps) {
  const hasActiveFilters = riskFilter !== 'all' || statusFilter !== 'all';

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6 flex-1">
          {/* Risk Level Chips */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-[#1F2937] mr-2">Risk:</span>
            {riskLevels.map((level) => (
              <button
                key={level.id}
                onClick={() => setRiskFilter(level.id)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-all ${
                  riskFilter === level.id
                    ? 'bg-[#059669] text-white shadow-md'
                    : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
                }`}
              >
                {level.label}
              </button>
            ))}
          </div>

          {/* Status Dropdown */}
          <div className="relative">
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value as PatientStatus)}
              className="appearance-none pl-4 pr-10 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-[#1F2937] font-medium cursor-pointer hover:bg-gray-200 focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20"
            >
              {statusOptions.map((option) => (
                <option key={option.id} value={option.id}>
                  {option.label}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
          </div>

          {/* Sort By Dropdown */}
          <div className="relative">
            <select className="appearance-none pl-4 pr-10 py-2 bg-gray-100 border border-gray-200 rounded-lg text-sm text-[#1F2937] font-medium cursor-pointer hover:bg-gray-200 focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20">
              <option>Sort: Last Activity</option>
              <option>Sort: Risk Score</option>
              <option>Sort: Name</option>
              <option>Sort: Next Appointment</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
          </div>
        </div>

        {/* Clear Filters */}
        {hasActiveFilters && (
          <button
            onClick={onClearFilters}
            className="flex items-center gap-1.5 px-3 py-2 text-sm font-medium text-[#059669] hover:bg-[#059669]/5 rounded-lg transition-colors"
          >
            <X className="w-4 h-4" />
            Clear filters
          </button>
        )}
      </div>
    </div>
  );
}
