import { Bell, Plus, ChevronDown, Users, AlertTriangle, ClipboardCheck, Sparkles, TrendingUp, Calendar, Eye, MessageSquare, FileEdit, ChevronLeft, ChevronRight } from 'lucide-react';
import { KpiStatsRow } from '../../components/doctor/KpiStatsRow';
import { RiskDistributionChart } from '../../components/doctor/RiskDistributionChart';
import { RiskTrendChart } from '../../components/doctor/RiskTrendChart';
import { TodayScheduleCard } from '../../components/doctor/TodayScheduleCard';
import { HighRiskAlertsCard } from '../../components/doctor/HighRiskAlertsCard';
import { PatientsTable } from '../../components/doctor/PatientsTable';
import { AddPatientReviewModal } from '../../components/doctor/AddPatientReviewModal';
import { useState } from 'react';

export function DoctorDashboard() {
  const [showAddReviewModal, setShowAddReviewModal] = useState(false);
  
  const currentDate = new Date().toLocaleDateString('en-US', { 
    weekday: 'long', 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });

  return (
    <div className="p-8">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-[#1F2937]">Dashboard</h1>
          <p className="text-sm text-[#6B7280] mt-1">{currentDate}</p>
        </div>

        <div className="flex items-center gap-4">
          {/* Notification Bell */}
          <button className="relative p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Bell className="w-6 h-6 text-[#6B7280]" />
            <span className="absolute top-1 right-1 w-5 h-5 bg-[#EF4444] text-white text-xs rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Add Patient Review Button */}
          <button className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-lg hover:shadow-lg transition-all" onClick={() => setShowAddReviewModal(true)}>
            <Plus className="w-4 h-4" />
            Add Patient Review
          </button>

          {/* Doctor Avatar Dropdown */}
          <button className="flex items-center gap-2 px-3 py-2 hover:bg-gray-100 rounded-lg transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-sm">
              DS
            </div>
            <ChevronDown className="w-4 h-4 text-[#6B7280]" />
          </button>
        </div>
      </div>

      {/* KPI Stats Row */}
      <KpiStatsRow />

      {/* Main Charts Row */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <RiskDistributionChart />
        <RiskTrendChart />
      </div>

      {/* Secondary Row */}
      <div className="grid grid-cols-2 gap-6 mb-6">
        <TodayScheduleCard />
        <HighRiskAlertsCard />
      </div>

      {/* Patients Table */}
      <PatientsTable />

      {/* Add Patient Review Modal */}
      {showAddReviewModal && (
        <AddPatientReviewModal onClose={() => setShowAddReviewModal(false)} />
      )}
    </div>
  );
}