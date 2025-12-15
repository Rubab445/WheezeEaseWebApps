import { Search, LayoutDashboard, Users, FileText, Sparkles, Calendar, Cloud, BookOpen, Settings, LogOut } from 'lucide-react';
import { DoctorPageType } from '../../App';

interface DoctorSidebarProps {
  currentPage: DoctorPageType;
  onNavigate: (page: DoctorPageType) => void;
  onLogout: () => void;
}

const navItems = [
  { id: 'dashboard' as const, label: 'Dashboard', icon: LayoutDashboard },
  { id: 'patients' as const, label: 'My Patients', icon: Users },
  { id: 'symptom-logs' as const, label: 'Symptom Logs', icon: FileText },
  { id: 'ai-recommendations' as const, label: 'AI Recommendations', icon: Sparkles },
  { id: 'appointments' as const, label: 'Appointments', icon: Calendar },
  { id: 'environment' as const, label: 'Environment', icon: Cloud },
  { id: 'resources' as const, label: 'Resources', icon: BookOpen },
  { id: 'settings' as const, label: 'Settings', icon: Settings },
];

export function DoctorSidebar({ currentPage, onNavigate, onLogout }: DoctorSidebarProps) {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 flex flex-col shadow-sm">
      {/* Logo Section */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-xl">
            🫁
          </div>
          <div>
            <h1 className="text-lg font-bold text-[#1F2937]">WheezeEase</h1>
            <p className="text-xs text-[#059669]">Doctor Portal</p>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search patients..."
            className="w-full pl-10 pr-4 py-2 bg-[#F8F9FA] border border-gray-200 rounded-lg text-sm text-[#1F2937] placeholder-gray-400 focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20"
          />
        </div>
      </div>

      {/* Navigation Menu */}
      <nav className="flex-1 px-3 py-2 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentPage === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all ${
                isActive
                  ? 'bg-[#059669] text-white shadow-md'
                  : 'text-[#6B7280] hover:bg-[#F8F9FA] hover:text-[#1F2937]'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      {/* Doctor Profile */}
      <div className="p-4 border-t border-gray-200">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-sm">
            SK
          </div>
          <div className="flex-1">
            <p className="text-sm font-medium text-[#1F2937]">Dr. Sarah Khan</p>
            <button 
              onClick={() => onNavigate('profile')}
              className="text-xs text-[#059669] hover:underline"
            >
              View profile
            </button>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="p-4 border-t border-gray-200">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 px-4 py-2.5 rounded-lg text-sm font-medium transition-all text-[#6B7280] hover:bg-red-50 hover:text-red-600"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}