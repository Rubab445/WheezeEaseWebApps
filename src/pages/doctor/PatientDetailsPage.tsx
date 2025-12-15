import { useState } from 'react';
import { ArrowLeft, MessageSquare, Calendar, Plus } from 'lucide-react';
import { PatientHeroCard } from '../../components/doctor/patient-details/PatientHeroCard';
import { PatientDetailsTabs } from '../../components/doctor/patient-details/PatientDetailsTabs';
import { OverviewTab } from '../../components/doctor/patient-details/tabs/OverviewTab';
import { SymptomHistoryTab } from '../../components/doctor/patient-details/tabs/SymptomHistoryTab';
import { AIRecommendationsTab } from '../../components/doctor/patient-details/tabs/AIRecommendationsTab';
import { MedicalProfileTab } from '../../components/doctor/patient-details/tabs/MedicalProfileTab';
import { AppointmentsNotesTab } from '../../components/doctor/patient-details/tabs/AppointmentsNotesTab';
import { EnvironmentDataTab } from '../../components/doctor/patient-details/tabs/EnvironmentDataTab';
import { FloatingActionButton } from '../../components/doctor/patient-details/FloatingActionButton';

export type PatientDetailsTab = 'overview' | 'symptom-history' | 'ai-recommendations' | 'medical-profile' | 'appointments-notes' | 'environment-data';

interface PatientDetailsPageProps {
  onBack?: () => void;
}

export function PatientDetailsPage({ onBack }: PatientDetailsPageProps) {
  const [activeTab, setActiveTab] = useState<PatientDetailsTab>('overview');

  return (
    <div className="p-6 pb-20">
      {/* Top Header */}
      <div className="flex items-center justify-between mb-6">
        {/* Left: Breadcrumb & Back */}
        <div>
          <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-2">
            <span className="hover:text-[#059669] cursor-pointer">My Patients</span>
            <span>/</span>
            <span className="text-[#1F2937] font-medium">Patient Details</span>
          </div>
          <button className="flex items-center gap-2 text-[#059669] hover:underline font-medium" onClick={onBack}>
            <ArrowLeft className="w-4 h-4" />
            Back to patients
          </button>
        </div>

        {/* Right: Action Buttons */}
        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#059669] text-[#059669] rounded-lg hover:bg-[#059669]/5 transition-colors">
            <MessageSquare className="w-4 h-4" />
            Send message
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-white border border-[#059669] text-[#059669] rounded-lg hover:bg-[#059669]/5 transition-colors">
            <Calendar className="w-4 h-4" />
            Schedule appointment
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-lg hover:shadow-lg transition-all">
            <Plus className="w-4 h-4" />
            Add note
          </button>
        </div>
      </div>

      {/* Patient Hero Card */}
      <PatientHeroCard />

      {/* Tabs */}
      <PatientDetailsTabs activeTab={activeTab} onTabChange={setActiveTab} />

      {/* Tab Content */}
      <div className="mt-6">
        {activeTab === 'overview' && <OverviewTab />}
        {activeTab === 'symptom-history' && <SymptomHistoryTab />}
        {activeTab === 'ai-recommendations' && <AIRecommendationsTab />}
        {activeTab === 'medical-profile' && <MedicalProfileTab />}
        {activeTab === 'appointments-notes' && <AppointmentsNotesTab />}
        {activeTab === 'environment-data' && <EnvironmentDataTab />}
      </div>

      {/* Floating Action Button */}
      <FloatingActionButton />
    </div>
  );
}