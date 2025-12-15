import { Search, SlidersHorizontal, LayoutGrid, List, Clock } from 'lucide-react';
import { ViewMode, Priority, RecommendationStatus } from '../../../pages/doctor/AIRecommendationsPage';

interface AIRecommendationFiltersProps {
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
  selectedPriority: Priority;
  onPriorityChange: (priority: Priority) => void;
  selectedStatus: RecommendationStatus;
  onStatusChange: (status: RecommendationStatus) => void;
}

export function AIRecommendationFilters({
  viewMode,
  onViewModeChange,
  selectedPriority,
  onPriorityChange,
  selectedStatus,
  onStatusChange
}: AIRecommendationFiltersProps) {
  const priorityOptions: Priority[] = ['all', 'high', 'medium', 'low'];
  const statusOptions: RecommendationStatus[] = ['all', 'new', 'under-review', 'approved', 'dismissed'];

  return (
    <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-200 mb-6">
      {/* Top Row: Priority and Status Chips */}
      <div className="flex items-center gap-6 mb-4 pb-4 border-b border-gray-200">
        {/* Priority Chips */}
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-[#6B7280]">Priority:</label>
          <div className="flex items-center gap-2">
            {priorityOptions.map((priority) => (
              <button
                key={priority}
                onClick={() => onPriorityChange(priority)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedPriority === priority
                    ? 'bg-[#059669] text-white'
                    : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
                }`}
              >
                {priority.charAt(0).toUpperCase() + priority.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Status Chips */}
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-[#6B7280]">Status:</label>
          <div className="flex items-center gap-2">
            {statusOptions.map((status) => (
              <button
                key={status}
                onClick={() => onStatusChange(status)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                  selectedStatus === status
                    ? 'bg-[#059669] text-white'
                    : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
                }`}
              >
                {status === 'all' ? 'All' : status.split('-').join(' ')}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Filters and View Toggle */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4 flex-1">
          {/* Category Dropdown */}
          <div className="relative">
            <select className="appearance-none px-4 py-2 pr-10 bg-gray-100 border border-gray-300 rounded-lg text-sm text-[#1F2937] cursor-pointer hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#059669]/50">
              <option>All Types</option>
              <option>Medication Adjustment</option>
              <option>Trigger Alert</option>
              <option>Preventive Action</option>
              <option>Follow-up Required</option>
              <option>Environmental Alert</option>
              <option>Pattern Detection</option>
            </select>
            <SlidersHorizontal className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
          </div>

          {/* Patient Filter */}
          <div className="relative flex-1 max-w-xs">
            <input
              type="text"
              placeholder="Search patients..."
              className="w-full px-4 py-2 pl-10 bg-gray-100 border border-gray-300 rounded-lg text-sm text-[#1F2937] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#059669]/50"
            />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
          </div>

          {/* Confidence Threshold */}
          <div className="flex items-center gap-3 px-4 py-2 bg-gray-100 rounded-lg">
            <label className="text-sm text-[#6B7280] whitespace-nowrap">Confidence:</label>
            <input
              type="range"
              min="0"
              max="100"
              defaultValue="70"
              className="w-32"
            />
            <span className="text-sm font-medium text-[#1F2937] min-w-[40px]">70%+</span>
          </div>

          {/* Date Range */}
          <div className="relative">
            <select className="appearance-none px-4 py-2 pr-10 bg-gray-100 border border-gray-300 rounded-lg text-sm text-[#1F2937] cursor-pointer hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#059669]/50">
              <option>Last 7 days</option>
              <option>Last 24 hours</option>
              <option>Last 30 days</option>
              <option>All time</option>
            </select>
            <Clock className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
          </div>

          {/* Sort By */}
          <div className="relative">
            <select className="appearance-none px-4 py-2 pr-10 bg-gray-100 border border-gray-300 rounded-lg text-sm text-[#1F2937] cursor-pointer hover:bg-gray-200 transition-colors focus:outline-none focus:ring-2 focus:ring-[#059669]/50">
              <option>Sort: Priority</option>
              <option>Sort: Confidence</option>
              <option>Sort: Date</option>
              <option>Sort: Patient Risk</option>
            </select>
          </div>

          {/* Clear Filters */}
          <button className="text-sm text-[#059669] font-medium hover:underline">
            Clear filters
          </button>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-2 ml-4 bg-gray-100 p-1 rounded-lg">
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
            onClick={() => onViewModeChange('list')}
            className={`p-2 rounded-md transition-colors ${
              viewMode === 'list'
                ? 'bg-white text-[#059669] shadow-sm'
                : 'text-[#6B7280] hover:text-[#1F2937]'
            }`}
            title="List View"
          >
            <List className="w-5 h-5" />
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
        </div>
      </div>
    </div>
  );
}
