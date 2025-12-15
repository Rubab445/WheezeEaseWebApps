import { useState } from 'react';
import { Settings as SettingsIcon, Check } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { SettingsNav } from '../../components/doctor/settings/SettingsNav';
import { ProfileSettingsTab } from '../../components/doctor/settings/ProfileSettingsTab';
import { AccountSecurityTab } from '../../components/doctor/settings/AccountSecurityTab';
import { NotificationsTab } from '../../components/doctor/settings/NotificationsTab';
import { DashboardPreferencesTab } from '../../components/doctor/settings/DashboardPreferencesTab';
import { AvailabilityScheduleTab } from '../../components/doctor/settings/AvailabilityScheduleTab';
import { EnvironmentAlertsTab } from '../../components/doctor/settings/EnvironmentAlertsTab';
import { PatientCommunicationTab } from '../../components/doctor/settings/PatientCommunicationTab';
import { DataPrivacyTab } from '../../components/doctor/settings/DataPrivacyTab';
import { SystemPreferencesTab } from '../../components/doctor/settings/SystemPreferencesTab';
import { IntegrationsTab } from '../../components/doctor/settings/IntegrationsTab';
import { HelpSupportTab } from '../../components/doctor/settings/HelpSupportTab';

export type SettingsTab = 
  | 'profile'
  | 'account-security'
  | 'notifications'
  | 'dashboard'
  | 'availability'
  | 'environment'
  | 'communication'
  | 'privacy'
  | 'system'
  | 'integrations'
  | 'help';

export function SettingsPage() {
  const [activeTab, setActiveTab] = useState<SettingsTab>('profile');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);

  const handleSave = () => {
    setHasUnsavedChanges(false);
    setShowSaveSuccess(true);
    setTimeout(() => setShowSaveSuccess(false), 3000);
  };

  const handleDiscard = () => {
    setHasUnsavedChanges(false);
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'profile':
        return <ProfileSettingsTab onChangesMade={() => setHasUnsavedChanges(true)} />;
      case 'account-security':
        return <AccountSecurityTab onChangesMade={() => setHasUnsavedChanges(true)} />;
      case 'notifications':
        return <NotificationsTab onChangesMade={() => setHasUnsavedChanges(true)} />;
      case 'dashboard':
        return <DashboardPreferencesTab onChangesMade={() => setHasUnsavedChanges(true)} />;
      case 'availability':
        return <AvailabilityScheduleTab onChangesMade={() => setHasUnsavedChanges(true)} />;
      case 'environment':
        return <EnvironmentAlertsTab onChangesMade={() => setHasUnsavedChanges(true)} />;
      case 'communication':
        return <PatientCommunicationTab onChangesMade={() => setHasUnsavedChanges(true)} />;
      case 'privacy':
        return <DataPrivacyTab onChangesMade={() => setHasUnsavedChanges(true)} />;
      case 'system':
        return <SystemPreferencesTab onChangesMade={() => setHasUnsavedChanges(true)} />;
      case 'integrations':
        return <IntegrationsTab onChangesMade={() => setHasUnsavedChanges(true)} />;
      case 'help':
        return <HelpSupportTab />;
      default:
        return null;
    }
  };

  return (
    <div className="bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-3">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-[#1F2937] font-medium">Settings</span>
        </div>

        {/* Title and Actions Row */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-lg flex items-center justify-center">
                <SettingsIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-[#1F2937]">Settings</h1>
                <p className="text-sm text-[#6B7280] mt-0.5">Manage your account and preferences</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Success Indicator */}
            {showSaveSuccess && (
              <div className="flex items-center gap-2 text-[#22C55E] bg-[#22C55E]/10 px-4 py-2 rounded-lg animate-in fade-in">
                <Check className="w-4 h-4" />
                <span className="text-sm font-medium">Changes saved</span>
              </div>
            )}

            {/* Discard Button */}
            {hasUnsavedChanges && (
              <Button
                variant="outline"
                onClick={handleDiscard}
                className="border-gray-300 text-[#6B7280] hover:bg-gray-50"
              >
                Discard changes
              </Button>
            )}

            {/* Save Button */}
            <Button
              onClick={handleSave}
              disabled={!hasUnsavedChanges}
              className="bg-gradient-to-r from-[#059669] to-[#10B981] text-white hover:opacity-90 shadow-md disabled:opacity-50"
            >
              Save all changes
            </Button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="px-8 py-6 flex gap-6">
        {/* Left Sidebar - Settings Navigation */}
        <div className="w-[300px] flex-shrink-0">
          <SettingsNav
            activeTab={activeTab}
            onTabChange={setActiveTab}
            hasUnsavedChanges={hasUnsavedChanges}
          />
        </div>

        {/* Right Panel - Settings Content */}
        <div className="flex-1">
          {renderTabContent()}
        </div>
      </div>
    </div>
  );
}
