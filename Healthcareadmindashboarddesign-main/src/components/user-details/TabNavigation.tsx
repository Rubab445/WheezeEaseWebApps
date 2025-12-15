interface Tab {
  id: string;
  label: string;
}

interface TabNavigationProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
  role: 'Patient' | 'Doctor';
}

export function TabNavigation({ activeTab, onTabChange, role }: TabNavigationProps) {
  const tabs: Tab[] = [
    { id: 'overview', label: 'Overview' },
    { id: 'activity', label: 'Activity' },
    { id: 'alerts', label: 'Alerts & Risk' },
    { 
      id: 'roleDetails', 
      label: role === 'Patient' ? 'Medical Profile' : 'Doctor Profile & Verification'
    },
    ...(role === 'Doctor' ? [{ id: 'permissions', label: 'Permissions' }] : []),
  ];

  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-xl">
      <div className="flex items-center gap-2">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`relative px-6 py-3 rounded-xl text-sm transition-all ${
              activeTab === tab.id
                ? 'text-white bg-purple-500/20'
                : 'text-gray-400 hover:text-white hover:bg-white/5'
            }`}
          >
            {tab.label}
            {activeTab === tab.id && (
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full shadow-lg shadow-purple-500/50" />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
