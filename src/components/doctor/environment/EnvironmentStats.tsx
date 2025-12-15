import { MapPin, AlertTriangle, Users, Bell } from 'lucide-react';
import { LocationData } from '../../../pages/doctor/EnvironmentDashboardPage';

interface EnvironmentStatsProps {
  locations: LocationData[];
}

export function EnvironmentStats({ locations }: EnvironmentStatsProps) {
  const locationsMonitored = locations.length;
  const highRiskAreas = locations.filter((loc) => loc.riskLevel === 'high').length;
  const patientsAtRisk = locations.reduce((sum, loc) => sum + loc.affectedPatients, 0);
  const alertsSentToday = 18; // Mock value

  const stats = [
    {
      label: 'Locations Monitored',
      value: locationsMonitored,
      subtitle: 'Active patient cities',
      icon: MapPin,
      color: 'text-[#059669]',
      bgColor: 'bg-[#059669]/10',
    },
    {
      label: 'High-Risk Areas',
      value: highRiskAreas,
      subtitle: 'Requires immediate attention',
      icon: AlertTriangle,
      color: 'text-red-600',
      bgColor: 'bg-red-100',
      badge: true,
    },
    {
      label: 'Patients at Risk',
      value: patientsAtRisk,
      subtitle: 'Based on current environment',
      icon: Users,
      color: 'text-amber-600',
      bgColor: 'bg-amber-100',
    },
    {
      label: 'Alerts Sent Today',
      value: alertsSentToday,
      subtitle: 'View alert history',
      icon: Bell,
      color: 'text-green-600',
      bgColor: 'bg-green-100',
      link: true,
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {stats.map((stat, idx) => (
        <div
          key={idx}
          className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 hover:shadow-md transition-shadow"
        >
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 ${stat.bgColor} rounded-lg flex items-center justify-center`}>
              <stat.icon className={`w-6 h-6 ${stat.color}`} />
            </div>
            {stat.badge && (
              <span className="px-2 py-1 bg-red-100 text-red-700 text-xs font-medium rounded">
                Critical
              </span>
            )}
          </div>
          
          <div>
            <div className="flex items-end gap-2 mb-1">
              <span className="text-3xl font-bold text-[#1F2937]">{stat.value}</span>
            </div>
            <p className="text-sm font-medium text-[#1F2937] mb-1">{stat.label}</p>
            <p className="text-xs text-[#6B7280]">{stat.subtitle}</p>
            {stat.link && (
              <button className="text-xs text-[#059669] hover:text-[#047857] mt-2 font-medium">
                View details →
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
