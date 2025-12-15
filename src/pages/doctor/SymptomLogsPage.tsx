import { useState } from 'react';
import { ChevronRight, Clipboard, Download, BarChart3, ChevronDown, ChevronUp } from 'lucide-react';
import { SymptomLogsStats } from '../../components/doctor/symptom-logs/SymptomLogsStats';
import { SymptomLogsCharts } from '../../components/doctor/symptom-logs/SymptomLogsCharts';
import { SymptomLogsFilters } from '../../components/doctor/symptom-logs/SymptomLogsFilters';
import { SymptomLogCard } from '../../components/doctor/symptom-logs/SymptomLogCard';
import { SymptomLogTimeline } from '../../components/doctor/symptom-logs/SymptomLogTimeline';
import { SymptomLogTable } from '../../components/doctor/symptom-logs/SymptomLogTable';
import { ExportModal } from '../../components/doctor/symptom-logs/ExportModal';
import { QuickReviewPanel } from '../../components/doctor/symptom-logs/QuickReviewPanel';

export type ViewMode = 'card' | 'timeline' | 'table';
export type SeverityLevel = 'all' | 'mild' | 'moderate' | 'severe';
export type ReviewStatus = 'all' | 'new' | 'reviewed' | 'follow-up';

export function SymptomLogsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('card');
  const [showAnalytics, setShowAnalytics] = useState(true);
  const [showCharts, setShowCharts] = useState(false);
  const [selectedSeverity, setSelectedSeverity] = useState<SeverityLevel>('all');
  const [selectedStatus, setSelectedStatus] = useState<ReviewStatus>('all');
  const [showUnreviewedOnly, setShowUnreviewedOnly] = useState(false);
  const [showSevereOnly, setShowSevereOnly] = useState(false);
  const [selectedLogs, setSelectedLogs] = useState<string[]>([]);
  const [showExportModal, setShowExportModal] = useState(false);
  const [showReviewPanel, setShowReviewPanel] = useState(false);
  const [selectedPatient, setSelectedPatient] = useState<{ name: string; avatar: string; riskScore: number } | null>(null);

  const handleSelectLog = (id: string) => {
    if (selectedLogs.includes(id)) {
      setSelectedLogs(selectedLogs.filter(logId => logId !== id));
    } else {
      setSelectedLogs([...selectedLogs, id]);
    }
  };

  const handleOpenReviewPanel = (patientName: string, patientAvatar: string, riskScore: number) => {
    setSelectedPatient({ name: patientName, avatar: patientAvatar, riskScore });
    setShowReviewPanel(true);
  };

  const handleCloseReviewPanel = () => {
    setShowReviewPanel(false);
    setSelectedPatient(null);
  };

  return (
    <div className="bg-[#F8F9FA]">
      {/* Top Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-3">
          <span className="hover:text-[#059669] cursor-pointer">Dashboard</span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-[#1F2937] font-medium">Symptom Logs</span>
        </div>

        {/* Title and Actions */}
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-lg flex items-center justify-center">
                <Clipboard className="w-5 h-5 text-white" />
              </div>
              <h1 className="text-[#1F2937]">Symptom Logs</h1>
            </div>
            <p className="text-sm text-[#6B7280]">Monitor patient-reported symptoms across your caseload</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Date Range Selector */}
            <div className="relative">
              <select className="appearance-none px-4 py-2 pr-10 bg-white border border-gray-300 rounded-lg text-sm font-medium text-[#1F2937] cursor-pointer hover:border-[#059669] transition-colors focus:outline-none focus:ring-2 focus:ring-[#059669]/50">
                <option>Last 7 days</option>
                <option>Today</option>
                <option>Last 30 days</option>
                <option>Custom range</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280] pointer-events-none" />
            </div>

            {/* Download Report Button */}
            <button 
              onClick={() => setShowExportModal(true)}
              className="px-4 py-2 border border-[#059669] text-[#059669] rounded-lg font-medium hover:bg-[#059669]/5 transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download report
            </button>

            {/* View Analytics Toggle */}
            <button 
              onClick={() => setShowAnalytics(!showAnalytics)}
              className={`px-4 py-2 rounded-lg font-medium transition-colors flex items-center gap-2 ${
                showAnalytics 
                  ? 'bg-[#059669] text-white' 
                  : 'border border-[#059669] text-[#059669] hover:bg-[#059669]/5'
              }`}
            >
              <BarChart3 className="w-4 h-4" />
              View analytics
            </button>
          </div>
        </div>
      </div>

      <div className="px-8 py-6 pb-20">
        {/* Analytics Dashboard */}
        {showAnalytics && (
          <div className="mb-6">
            <SymptomLogsStats />
            
            {/* Charts Section Toggle */}
            <button
              onClick={() => setShowCharts(!showCharts)}
              className="w-full mt-4 px-4 py-2 bg-white border border-gray-200 rounded-lg text-sm font-medium text-[#059669] hover:bg-gray-50 transition-colors flex items-center justify-center gap-2"
            >
              {showCharts ? (
                <>
                  <ChevronUp className="w-4 h-4" />
                  Hide detailed charts
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" />
                  Show detailed charts
                </>
              )}
            </button>

            {showCharts && <SymptomLogsCharts />}
          </div>
        )}

        {/* Filters */}
        <SymptomLogsFilters
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          selectedSeverity={selectedSeverity}
          onSeverityChange={setSelectedSeverity}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
          showUnreviewedOnly={showUnreviewedOnly}
          onShowUnreviewedOnlyChange={setShowUnreviewedOnly}
          showSevereOnly={showSevereOnly}
          onShowSevereOnlyChange={setShowSevereOnly}
        />

        {/* New Logs Notification Banner */}
        <div className="bg-[#059669]/10 border border-[#059669] rounded-xl p-4 mb-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-[#059669] rounded-full animate-pulse" />
            <p className="font-medium text-[#059669]">5 new symptom logs received</p>
          </div>
          <button className="px-4 py-2 bg-[#059669] text-white rounded-lg font-medium hover:bg-[#047857] transition-colors">
            Refresh to view
          </button>
        </div>

        {/* View Content - Card/Timeline/Table */}
        {viewMode === 'card' && (
          <div className="space-y-3">
            <SymptomLogCard
              id="log-1"
              patientName="Ahmad Hassan"
              patientId="P-1002"
              patientAvatar="AH"
              riskScore={84}
              timestamp="2 hours ago"
              isNew={true}
              symptoms={['Wheezing', 'Coughing', 'Shortness of breath']}
              severity={7}
              triggers={['Tree Pollen', 'High AQI']}
              medicationTaken={true}
              medicationDetails="Albuterol Inhaler - 2 puffs"
              patientNotes="Symptoms started after morning walk in park. Felt tightness within 15 minutes. Had to sit down and rest."
              aqi={145}
              aqiLevel="Unhealthy"
              pollen="High"
              location="Gujrat, Punjab"
              temperature={32}
              humidity={68}
              aiRiskIncrease={23}
              aiConfidence={85}
              duration="45 minutes"
              symptomStatus="improving"
              reviewed={false}
              isSelected={selectedLogs.includes('log-1')}
              onSelect={handleSelectLog}
              onReview={handleOpenReviewPanel}
            />

            <SymptomLogCard
              id="log-2"
              patientName="Sarah Ahmed"
              patientId="P-1001"
              patientAvatar="SA"
              riskScore={68}
              timestamp="4 hours ago"
              isNew={true}
              symptoms={['Wheezing', 'Chest tightness']}
              severity={5}
              triggers={['Dust', 'Exercise']}
              medicationTaken={true}
              medicationDetails="Preventive inhaler - 1 puff before exercise"
              patientNotes="Mild wheezing during evening workout. Took preventive dose but still felt some tightness."
              aqi={78}
              aqiLevel="Moderate"
              pollen="Low"
              location="Lahore, Punjab"
              temperature={28}
              humidity={55}
              aiRiskIncrease={12}
              aiConfidence={78}
              duration="30 minutes"
              symptomStatus="stable"
              reviewed={false}
              isSelected={selectedLogs.includes('log-2')}
              onSelect={handleSelectLog}
              onReview={handleOpenReviewPanel}
            />

            <SymptomLogCard
              id="log-3"
              patientName="Fatima Khan"
              patientId="P-1003"
              patientAvatar="FK"
              riskScore={58}
              timestamp="6 hours ago"
              isNew={false}
              symptoms={['Coughing', 'Shortness of breath']}
              severity={8}
              triggers={['Pollen', 'Cold Air']}
              medicationTaken={false}
              medicationDetails=""
              patientNotes="Woke up with severe coughing fit. Forgot to take medication before bed. Symptoms much worse than usual."
              aqi={92}
              aqiLevel="Moderate"
              pollen="Very High"
              location="Islamabad"
              temperature={18}
              humidity={72}
              aiRiskIncrease={34}
              aiConfidence={91}
              duration="2 hours"
              symptomStatus="worsening"
              reviewed={true}
              reviewerName="Dr. Khan"
              reviewTime="5:45 PM"
              isSelected={selectedLogs.includes('log-3')}
              onSelect={handleSelectLog}
              onReview={handleOpenReviewPanel}
            />

            <SymptomLogCard
              id="log-4"
              patientName="Zainab Ali"
              patientId="P-1005"
              patientAvatar="ZA"
              riskScore={78}
              timestamp="8 hours ago"
              isNew={false}
              symptoms={['Wheezing', 'Shortness of breath', 'Chest tightness']}
              severity={9}
              triggers={['Smoke', 'Air Pollution']}
              medicationTaken={true}
              medicationDetails="Emergency inhaler - 3 puffs + oral steroid"
              patientNotes="Severe episode triggered by nearby construction smoke. Used emergency medication but symptoms persisted. Very concerned."
              aqi={168}
              aqiLevel="Unhealthy"
              pollen="Moderate"
              location="Karachi, Sindh"
              temperature={35}
              humidity={82}
              aiRiskIncrease={45}
              aiConfidence={94}
              duration="3 hours"
              symptomStatus="improving"
              reviewed={true}
              reviewerName="Dr. Ahmed"
              reviewTime="3:20 PM"
              isSelected={selectedLogs.includes('log-4')}
              onSelect={handleSelectLog}
              onReview={handleOpenReviewPanel}
            />

            <SymptomLogCard
              id="log-5"
              patientName="Ali Hassan"
              patientId="P-1004"
              patientAvatar="AH"
              riskScore={32}
              timestamp="10 hours ago"
              isNew={false}
              symptoms={['Coughing']}
              severity={3}
              triggers={['Cold Air']}
              medicationTaken={true}
              medicationDetails="Preventive inhaler - 1 puff"
              patientNotes="Slight cough in morning. Temperature dropped overnight. Symptoms mild and resolved quickly."
              aqi={45}
              aqiLevel="Good"
              pollen="Low"
              location="Rawalpindi"
              temperature={15}
              humidity={45}
              aiRiskIncrease={5}
              aiConfidence={68}
              duration="15 minutes"
              symptomStatus="resolved"
              reviewed={true}
              reviewerName="Dr. Khan"
              reviewTime="1:10 PM"
              isSelected={selectedLogs.includes('log-5')}
              onSelect={handleSelectLog}
              onReview={handleOpenReviewPanel}
            />

            <SymptomLogCard
              id="log-6"
              patientName="Ayesha Khan"
              patientId="P-1008"
              patientAvatar="AK"
              riskScore={72}
              timestamp="12 hours ago"
              isNew={true}
              symptoms={['Wheezing', 'Shortness of breath']}
              severity={6}
              triggers={['Pollen', 'Humidity']}
              medicationTaken={true}
              medicationDetails="Regular inhaler - 2 puffs"
              patientNotes="Humid weather making breathing difficult. Pollen count also high today. Taking medication as prescribed."
              aqi={88}
              aqiLevel="Moderate"
              pollen="High"
              location="Faisalabad"
              temperature={31}
              humidity={78}
              aiRiskIncrease={18}
              aiConfidence={82}
              duration="1 hour"
              symptomStatus="stable"
              reviewed={false}
              isSelected={selectedLogs.includes('log-6')}
              onSelect={handleSelectLog}
              onReview={handleOpenReviewPanel}
            />
          </div>
        )}

        {viewMode === 'timeline' && <SymptomLogTimeline />}
        {viewMode === 'table' && <SymptomLogTable />}

        {/* Pagination */}
        <div className="mt-6 text-center">
          <p className="text-sm text-[#6B7280] mb-3">Showing 1-6 of 156 symptom logs</p>
          <button className="px-6 py-2.5 border-2 border-[#059669] text-[#059669] rounded-lg font-medium hover:bg-[#059669]/5 transition-colors">
            Load more logs
          </button>
        </div>

        {/* Bulk Actions Bar */}
        {selectedLogs.length > 0 && (
          <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#1F2937] text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-6 z-50">
            <p className="font-medium">
              {selectedLogs.length} log{selectedLogs.length > 1 ? 's' : ''} selected
            </p>
            <div className="flex items-center gap-3">
              <button className="px-4 py-2 bg-[#059669] hover:bg-[#047857] rounded-lg font-medium transition-colors">
                Mark reviewed
              </button>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors">
                Assign follow-up
              </button>
              <button className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors">
                Export
              </button>
              <button 
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
                onClick={() => setSelectedLogs([])}
              >
                Cancel
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Export Modal */}
      {showExportModal && (
        <ExportModal onClose={() => setShowExportModal(false)} />
      )}

      {/* Quick Review Panel */}
      {showReviewPanel && selectedPatient && (
        <QuickReviewPanel
          patientName={selectedPatient.name}
          patientAvatar={selectedPatient.avatar}
          riskScore={selectedPatient.riskScore}
          onClose={handleCloseReviewPanel}
        />
      )}
    </div>
  );
}
