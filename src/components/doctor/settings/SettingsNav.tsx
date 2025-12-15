import { User, Shield, Bell, LayoutDashboard, Calendar, Wind, MessageSquare, Lock, Sliders, Puzzle, HelpCircle } from 'lucide-react';
import { SettingsTab } from '../../../pages/doctor/SettingsPage';

interface SettingsNavProps {
  activeTab: SettingsTab;
  onTabChange: (tab: SettingsTab) => void;
  hasUnsavedChanges: boolean;
}

const navItems = [
  { id: 'profile' as const, label: 'Profile Settings', icon: User },
  { id: 'account-security' as const, label: 'Account & Security', icon: Shield },
  { id: 'notifications' as const, label: 'Notifications', icon: Bell },
  { id: 'dashboard' as const, label: 'Dashboard Preferences', icon: LayoutDashboard },
  { id: 'availability' as const, label: 'Availability & Schedule', icon: Calendar },
  { id: 'environment' as const, label: 'Environment Alerts', icon: Wind },
  { id: 'communication' as const, label: 'Patient Communication', icon: MessageSquare },
  { id: 'privacy' as const, label: 'Data & Privacy', icon: Lock },
  { id: 'system' as const, label: 'System Preferences', icon: Sliders },
  { id: 'integrations' as const, label: 'Integrations', icon: Puzzle },
  { id: 'help' as const, label: 'Help & Support', icon: HelpCircle },
];

export function SettingsNav({ activeTab, onTabChange, hasUnsavedChanges }: SettingsNavProps) {
  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-2 sticky top-6">
      <div className="space-y-1">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all relative ${
                isActive
                  ? 'bg-[#059669] text-white shadow-md'
                  : 'text-[#6B7280] hover:bg-[#F8F9FA] hover:text-[#1F2937]'
              }`}
            >
              <item.icon className="w-5 h-5" />
              <span className="flex-1 text-left">{item.label}</span>
              
              {/* Unsaved Changes Indicator */}
              {hasUnsavedChanges && isActive && (
                <div className="w-2 h-2 bg-[#F59E0B] rounded-full" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}
