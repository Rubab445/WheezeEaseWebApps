import { LayoutDashboard, Activity, Sparkles, FileText, Calendar, Cloud } from 'lucide-react';
import { PatientDetailsTab } from '../../../pages/doctor/PatientDetailsPage';

interface PatientDetailsTabsProps {
  activeTab: PatientDetailsTab;
  onTabChange: (tab: PatientDetailsTab) => void;
}

const tabs = [
  { id: 'overview' as const, label: 'Overview', icon: LayoutDashboard },
  { id: 'symptom-history' as const, label: 'Symptom History', icon: Activity },
  { id: 'ai-recommendations' as const, label: 'AI Recommendations', icon: Sparkles },
  { id: 'medical-profile' as const, label: 'Medical Profile', icon: FileText },
  { id: 'appointments-notes' as const, label: 'Appointments & Notes', icon: Calendar },
  { id: 'environment-data' as const, label: 'Environment Data', icon: Cloud },
];

export function PatientDetailsTabs({ activeTab, onTabChange }: PatientDetailsTabsProps) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
      <div className="flex items-center">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className={`flex-1 flex items-center justify-center gap-2 px-6 py-4 text-sm font-medium transition-all border-b-3 ${
                isActive
                  ? 'text-[#059669] border-b-[#059669] bg-[#059669]/5'
                  : 'text-[#6B7280] border-b-transparent hover:text-[#1F2937] hover:bg-gray-50'
              }`}
            >
              <Icon className="w-4 h-4" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
