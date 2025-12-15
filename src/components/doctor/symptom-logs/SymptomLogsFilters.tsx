import { Search, SlidersHorizontal, Calendar, LayoutGrid, List, Clock } from 'lucide-react';
import { ViewMode, SeverityLevel, ReviewStatus } from '../../../pages/doctor/SymptomLogsPage';

interface SymptomLogsFiltersProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  selectedSeverity: SeverityLevel;
  onSeverityChange: (severity: SeverityLevel) => void;
  selectedStatus: ReviewStatus;
  onStatusChange: (status: ReviewStatus) => void;
  showUnreviewedOnly: boolean;
  onShowUnreviewedOnlyChange: (value: boolean) => void;
  showSevereOnly: boolean;
  onShowSevereOnlyChange: (value: boolean) => void;
}

export function SymptomLogsFilters({
  viewMode,
  onViewModeChange,
  selectedSeverity,
  onSeverityChange,
  selectedStatus,
  onStatusChange,
  showUnreviewedOnly,
  onShowUnreviewedOnlyChange,
  showSevereOnly,
  onShowSevereOnlyChange
}: SymptomLogsFiltersProps) {
  const severityOptions: { value: SeverityLevel; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'mild', label: 'Mild (1-3)' },
    { value: 'moderate', label: 'Moderate (4-7)' },
    { value: 'severe', label: 'Severe (8-10)' }
  ];

  const statusOptions: { value: ReviewStatus; label: string }[] = [
    { value: 'all', label: 'All' },
    { value: 'new', label: 'New' },
    { value: 'reviewed', label: 'Reviewed' },
    { value: 'follow-up', label: 'Requires Follow-up' }
  ];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 mb-6">
      {/* Row 1: Patient Search + Severity + Status */}
      <div className="flex items-center gap-4 mb-4 pb-4 border-b border-gray-200">
        {/* Patient Search */}
        <div className="relative flex-1 max-w-md">
          <input
            type="text"
            placeholder="Search by patient name or ID..."
            className="w-full px-4 py-2 pl-10 bg-gray-50 border border-gray-300 rounded-lg text-sm text-[#1F2937] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#059669]/50"
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
        </div>

        {/* Severity Chips */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-[#6B7280] mr-1">Severity:</label>
          {severityOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onSeverityChange(option.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedSeverity === option.value
                  ? 'bg-[#059669] text-white'
                  : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>

        {/* Status Chips */}
        <div className="flex items-center gap-2">
          <label className="text-sm font-medium text-[#6B7280] mr-1">Status:</label>
          {statusOptions.map((option) => (
            <button
              key={option.value}
              onClick={() => onStatusChange(option.value)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                selectedStatus === option.value
                  ? 'bg-[#059669] text-white'
                  : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* Row 2: Advanced Filters */}
      <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
        <div className="flex items-center gap-4">
          {/* Symptom Type Multi-select */}
          <div className="relative">
            <select className="appearance-none px-4 py-2 pr-10 bg-gray-50 border border-gray-300 rounded-lg text-sm text-[#1F2937] cursor-pointer hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#059669]/50">
              <option>All Symptoms</option>
              <option>Wheezing</option>
              <option>Coughing</option>
              <option>Shortness of breath</option>
              <option>Chest tightness</option>
              <option>Difficulty breathing</option>
            </select>
            <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
          </div>

          {/* Trigger Filter */}
          <div className="relative">
            <select className="appearance-none px-4 py-2 pr-10 bg-gray-50 border border-gray-300 rounded-lg text-sm text-[#1F2937] cursor-pointer hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#059669]/50">
              <option>All Triggers</option>
              <option>Pollen</option>
              <option>Air Quality (AQI)</option>
              <option>Dust</option>
              <option>Exercise</option>
              <option>Cold Air</option>
              <option>Smoke</option>
              <option>Other</option>
            </select>
            <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
          </div>

          {/* Medication Taken */}
          <div className="relative">
            <select className="appearance-none px-4 py-2 pr-10 bg-gray-50 border border-gray-300 rounded-lg text-sm text-[#1F2937] cursor-pointer hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#059669]/50">
              <option>Medication: All</option>
              <option>Medication: Yes</option>
              <option>Medication: No</option>
            </select>
          </div>

          {/* Date Range */}
          <div className="relative">
            <button className="px-4 py-2 bg-gray-50 border border-gray-300 rounded-lg text-sm text-[#1F2937] hover:bg-gray-100 transition-colors flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#6B7280]" />
              Date range
            </button>
          </div>

          {/* Sort By */}
          <div className="relative">
            <select className="appearance-none px-4 py-2 pr-10 bg-gray-50 border border-gray-300 rounded-lg text-sm text-[#1F2937] cursor-pointer hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-[#059669]/50">
              <option>Sort: Most Recent</option>
              <option>Sort: Severity</option>
              <option>Sort: Patient Risk</option>
              <option>Sort: Unreviewed First</option>
            </select>
          </div>
        </div>
      </div>

      {/* Row 3: Toggles and View Options */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-6">
          {/* Show Unreviewed Only Toggle */}
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={showUnreviewedOnly}
                onChange={(e) => onShowUnreviewedOnlyChange(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#059669] transition-colors" />
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
            </div>
            <span className="text-sm font-medium text-[#1F2937]">Show unreviewed only</span>
          </label>

          {/* Show Severe Only Toggle */}
          <label className="flex items-center gap-3 cursor-pointer">
            <div className="relative">
              <input
                type="checkbox"
                checked={showSevereOnly}
                onChange={(e) => onShowSevereOnlyChange(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-checked:bg-[#EF4444] transition-colors" />
              <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform peer-checked:translate-x-5" />
            </div>
            <span className="text-sm font-medium text-[#1F2937]">Show severe only</span>
          </label>

          {/* Clear Filters */}
          <button className="text-sm text-[#059669] font-medium hover:underline">
            Clear all filters
          </button>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
          <button
            onClick={() => onViewModeChange('card')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'card'
                ? 'bg-white text-[#059669] shadow-sm'
                : 'text-[#6B7280] hover:text-[#1F2937]'
            }`}
            title="Card View"
          >
            <LayoutGrid className="w-5 h-5" />
          </button>
          <button
            onClick={() => onViewModeChange('timeline')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'timeline'
                ? 'bg-white text-[#059669] shadow-sm'
                : 'text-[#6B7280] hover:text-[#1F2937]'
            }`}
            title="Timeline View"
          >
            <Clock className="w-5 h-5" />
          </button>
          <button
            onClick={() => onViewModeChange('table')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'table'
                ? 'bg-white text-[#059669] shadow-sm'
                : 'text-[#6B7280] hover:text-[#1F2937]'
            }`}
            title="Table View"
          >
            <List className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}