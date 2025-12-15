import { User, Shield, Bell, Plug, Settings, Database, Palette, Info } from 'lucide-react';
import { SettingsSection } from '../../pages/SettingsPage';

interface SettingsNavigationProps {
  activeSection: SettingsSection;
  onSectionChange: (section: SettingsSection) => void;
}

const navItems = [
  { id: 'account' as const, label: 'Account', icon: User },
  { id: 'security' as const, label: 'Security & Privacy', icon: Shield },
  { id: 'notifications' as const, label: 'Notifications', icon: Bell },
  { id: 'api' as const, label: 'API & Integrations', icon: Plug },
  { id: 'system' as const, label: 'System Configuration', icon: Settings },
  { id: 'data' as const, label: 'Data Management', icon: Database },
  { id: 'appearance' as const, label: 'Appearance', icon: Palette },
  { id: 'about' as const, label: 'About', icon: Info },
];

export function SettingsNavigation({ activeSection, onSectionChange }: SettingsNavigationProps) {
  return (
    <div className="sticky top-8 bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-xl">
      <nav className="space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeSection === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onSectionChange(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm transition-all relative ${
                isActive
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 shadow-lg shadow-purple-500/20'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {isActive && (
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-r-full" />
              )}
              <Icon className={`w-4 h-4 ${isActive ? 'text-purple-400' : ''}`} />
              <span className="font-medium">{item.label}</span>
            </button>
          );
        })}
      </nav>
    </div>
  );
}
