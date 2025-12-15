import { Calendar, Clock, AlertTriangle, ClipboardList, Users, ChevronDown } from 'lucide-react';

interface ProfileHeroProps {
  role: 'Patient' | 'Doctor';
  name: string;
  email: string;
  status: 'Active' | 'Suspended' | 'Pending';
  createdDate: string;
  lastLogin: string;
  alertsCount: number;
  activityMetric: {
    label: string;
    value: string;
  };
  onRoleSwitch?: (role: 'Patient' | 'Doctor') => void;
}

const roleStyles = {
  Patient: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  Doctor: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
};

const statusStyles = {
  Active: 'bg-green-500/20 text-green-400 border-green-500/30',
  Suspended: 'bg-red-500/20 text-red-400 border-red-500/30',
  Pending: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
};

export function ProfileHero({
  role,
  name,
  email,
  status,
  createdDate,
  lastLogin,
  alertsCount,
  activityMetric,
  onRoleSwitch,
}: ProfileHeroProps) {
  const getInitials = (name: string) => {
    return name.split(' ').map(n => n[0]).join('').toUpperCase();
  };

  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-start justify-between">
        {/* Left: Profile Info */}
        <div className="flex items-start gap-4">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/30">
            <span className="text-2xl text-white">{getInitials(name)}</span>
          </div>
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h2 className="text-2xl text-white">{name}</h2>
              <span className={`px-3 py-1 rounded-full border text-xs ${roleStyles[role]}`}>
                {role}
              </span>
              <span className={`px-3 py-1 rounded-full border text-xs ${statusStyles[status]}`}>
                {status}
              </span>
            </div>
            <p className="text-sm text-gray-400">{email}</p>
            {onRoleSwitch && (
              <div className="mt-3">
                <button 
                  onClick={() => onRoleSwitch(role === 'Patient' ? 'Doctor' : 'Patient')}
                  className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-xs text-gray-400 hover:text-white hover:bg-white/10 transition-all"
                >
                  Switch view: {role === 'Patient' ? 'Doctor' : 'Patient'}
                  <ChevronDown className="w-3 h-3" />
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Right: KPI Chips */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-purple-500/10 border border-purple-500/30 rounded-xl p-4 min-w-[140px]">
            <div className="flex items-center gap-2 mb-1">
              <Calendar className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-gray-400">Created</span>
            </div>
            <p className="text-white">{createdDate}</p>
          </div>

          <div className="bg-cyan-500/10 border border-cyan-500/30 rounded-xl p-4 min-w-[140px]">
            <div className="flex items-center gap-2 mb-1">
              <Clock className="w-4 h-4 text-cyan-400" />
              <span className="text-xs text-gray-400">Last Login</span>
            </div>
            <p className="text-white">{lastLogin}</p>
          </div>

          <div className="bg-pink-500/10 border border-pink-500/30 rounded-xl p-4 min-w-[140px]">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="w-4 h-4 text-pink-400" />
              <span className="text-xs text-gray-400">Alerts (30d)</span>
            </div>
            <p className="text-white text-xl">{alertsCount}</p>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/30 rounded-xl p-4 min-w-[140px]">
            <div className="flex items-center gap-2 mb-1">
              {role === 'Patient' ? (
                <ClipboardList className="w-4 h-4 text-blue-400" />
              ) : (
                <Users className="w-4 h-4 text-blue-400" />
              )}
              <span className="text-xs text-gray-400">{activityMetric.label}</span>
            </div>
            <p className="text-white text-xl">{activityMetric.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
