import { useState } from 'react';
import { Search, Download, Plus, Grid3x3, List, ChevronRight } from 'lucide-react';
import { PatientStatsRow } from '../../components/doctor/PatientStatsRow';
import { PatientFilterBar } from '../../components/doctor/PatientFilterBar';
import { PatientGridView } from '../../components/doctor/PatientGridView';
import { PatientTableView } from '../../components/doctor/PatientTableView';
import { QuickNotePanel } from '../../components/doctor/QuickNotePanel';
import { AddPatientNoteModal } from '../../components/doctor/AddPatientNoteModal';

export type ViewMode = 'grid' | 'table';
export type RiskLevel = 'all' | 'low' | 'medium' | 'high' | 'critical';
export type PatientStatus = 'all' | 'active' | 'needs-review' | 'critical';

interface MyPatientsPageProps {
  onViewPatientDetails?: () => void;
}

export function MyPatientsPage({ onViewPatientDetails }: MyPatientsPageProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');
  const [riskFilter, setRiskFilter] = useState<RiskLevel>('all');
  const [statusFilter, setStatusFilter] = useState<PatientStatus>('all');
  const [selectedPatientId, setSelectedPatientId] = useState<string | null>(null);
  const [showQuickNote, setShowQuickNote] = useState(false);
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);

  const handleQuickNote = (patientId: string) => {
    setSelectedPatientId(patientId);
    setShowQuickNote(true);
  };

  const handleClearFilters = () => {
    setRiskFilter('all');
    setStatusFilter('all');
    setSearchQuery('');
  };

  return (
    <div className="p-8">
      {/* Top Header */}
      <div className="mb-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-3">
          <span className="hover:text-[#059669] cursor-pointer">Dashboard</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#1F2937] font-medium">My Patients</span>
        </div>

        {/* Title and Actions */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-3xl font-bold text-[#1F2937]">My Patients</h1>
            <p className="text-sm text-[#6B7280] mt-1">Manage and monitor your assigned patients</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative w-[400px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search by name, ID, condition..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-white border border-gray-300 rounded-lg text-sm text-[#1F2937] placeholder-gray-400 focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20"
              />
            </div>

            {/* Export Button */}
            <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#059669] text-[#059669] rounded-lg hover:bg-[#059669]/5 transition-colors">
              <Download className="w-4 h-4" />
              Export list
            </button>

            {/* Add Patient Note Button */}
            <button
              className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-lg hover:shadow-lg transition-all"
              onClick={() => setShowAddNoteModal(true)}
            >
              <Plus className="w-4 h-4" />
              Add patient note
            </button>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <PatientStatsRow />

      {/* Filter Bar */}
      <PatientFilterBar
        riskFilter={riskFilter}
        setRiskFilter={setRiskFilter}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter}
        onClearFilters={handleClearFilters}
      />

      {/* View Toggle */}
      <div className="flex items-center justify-end gap-2 mb-6">
        <button
          onClick={() => setViewMode('grid')}
          className={`p-2 rounded-lg transition-colors ${
            viewMode === 'grid'
              ? 'bg-[#059669] text-white'
              : 'bg-white text-[#6B7280] hover:bg-gray-100'
          }`}
          title="Grid View"
        >
          <Grid3x3 className="w-5 h-5" />
        </button>
        <button
          onClick={() => setViewMode('table')}
          className={`p-2 rounded-lg transition-colors ${
            viewMode === 'table'
              ? 'bg-[#059669] text-white'
              : 'bg-white text-[#6B7280] hover:bg-gray-100'
          }`}
          title="Table View"
        >
          <List className="w-5 h-5" />
        </button>
      </div>

      {/* Patient List - Grid or Table */}
      {viewMode === 'grid' ? (
        <PatientGridView 
          searchQuery={searchQuery}
          riskFilter={riskFilter}
          statusFilter={statusFilter}
          onQuickNote={handleQuickNote}
          onViewDetails={onViewPatientDetails}
        />
      ) : (
        <PatientTableView
          searchQuery={searchQuery}
          riskFilter={riskFilter}
          statusFilter={statusFilter}
          onQuickNote={handleQuickNote}
          onViewDetails={onViewPatientDetails}
        />
      )}

      {/* Quick Note Panel */}
      {showQuickNote && selectedPatientId && (
        <QuickNotePanel
          patientId={selectedPatientId}
          onClose={() => setShowQuickNote(false)}
        />
      )}

      {/* Add Patient Note Modal */}
      {showAddNoteModal && (
        <AddPatientNoteModal
          onClose={() => setShowAddNoteModal(false)}
        />
      )}
    </div>
  );
}