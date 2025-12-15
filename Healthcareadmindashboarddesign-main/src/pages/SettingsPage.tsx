import { useState } from 'react';
import { SettingsNavigation } from '../components/settings/SettingsNavigation';
import { AccountSection } from '../components/settings/AccountSection';
import { SecuritySection } from '../components/settings/SecuritySection';
import { NotificationsSection } from '../components/settings/NotificationsSection';
import { ApiIntegrationsSection } from '../components/settings/ApiIntegrationsSection';
import { SystemConfigSection } from '../components/settings/SystemConfigSection';
import { DataManagementSection } from '../components/settings/DataManagementSection';
import { AppearanceSection } from '../components/settings/AppearanceSection';
import { AboutSection } from '../components/settings/AboutSection';
import { UnsavedChangesBar } from '../components/settings/UnsavedChangesBar';

export type SettingsSection = 
  | 'account' 
  | 'security' 
  | 'notifications' 
  | 'api' 
  | 'system' 
  | 'data' 
  | 'appearance' 
  | 'about';

export function SettingsPage() {
  const [activeSection, setActiveSection] = useState<SettingsSection>('account');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);

  const handleSave = () => {
    // Save logic here
    setHasUnsavedChanges(false);
    console.log('Settings saved');
  };

  const handleDiscard = () => {
    setHasUnsavedChanges(false);
    console.log('Changes discarded');
  };

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Dashboard</span>
            <span>/</span>
            <span className="text-white">Settings</span>
          </div>
          <h1 className="text-3xl text-white">Settings</h1>
          <p className="text-gray-400 mt-1">Manage system configuration and preferences</p>
        </div>

        <button 
          onClick={handleSave}
          disabled={!hasUnsavedChanges}
          className={`px-5 py-2.5 rounded-full text-white transition-all ${
            hasUnsavedChanges
              ? 'bg-gradient-to-r from-purple-500 to-pink-500 hover:shadow-lg hover:shadow-purple-500/30'
              : 'bg-white/10 cursor-not-allowed opacity-50'
          }`}
        >
          Save Changes
        </button>
      </div>

      {/* Two-column layout */}
      <div className="flex gap-6">
        {/* Left Navigation */}
        <div className="w-64 flex-shrink-0">
          <SettingsNavigation 
            activeSection={activeSection}
            onSectionChange={setActiveSection}
          />
        </div>

        {/* Right Content Panel */}
        <div className="flex-1 space-y-6">
          {activeSection === 'account' && <AccountSection onChange={() => setHasUnsavedChanges(true)} />}
          {activeSection === 'security' && <SecuritySection onChange={() => setHasUnsavedChanges(true)} />}
          {activeSection === 'notifications' && <NotificationsSection onChange={() => setHasUnsavedChanges(true)} />}
          {activeSection === 'api' && <ApiIntegrationsSection onChange={() => setHasUnsavedChanges(true)} />}
          {activeSection === 'system' && <SystemConfigSection onChange={() => setHasUnsavedChanges(true)} />}
          {activeSection === 'data' && <DataManagementSection onChange={() => setHasUnsavedChanges(true)} />}
          {activeSection === 'appearance' && <AppearanceSection onChange={() => setHasUnsavedChanges(true)} />}
          {activeSection === 'about' && <AboutSection />}
        </div>
      </div>

      {/* Floating Action Bar */}
      {hasUnsavedChanges && (
        <UnsavedChangesBar 
          onSave={handleSave}
          onDiscard={handleDiscard}
        />
      )}
    </div>
  );
}
