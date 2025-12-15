import { Users, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

export function PatientStatsRow() {
  const stats = [
    {
      title: 'Total Patients',
      value: '127',
      icon: Users,
      iconColor: 'text-[#059669]',
      iconBg: 'bg-[#059669]/10',
    },
    {
      title: 'High-Risk',
      value: '18',
      icon: AlertTriangle,
      iconColor: 'text-[#EF4444]',
      iconBg: 'bg-[#EF4444]/10',
      badge: 'red',
    },
    {
      title: 'Reviewed Today',
      value: '12',
      icon: CheckCircle,
      iconColor: 'text-[#22C55E]',
      iconBg: 'bg-[#22C55E]/10',
      badge: 'green',
    },
    {
      title: 'Pending Reviews',
      value: '8',
      icon: Clock,
      iconColor: 'text-[#F59E0B]',
      iconBg: 'bg-[#F59E0B]/10',
      badge: 'amber',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.title}
            className="bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center gap-3">
              <div className={`w-10 h-10 ${stat.iconBg} rounded-lg flex items-center justify-center`}>
                <Icon className={`w-5 h-5 ${stat.iconColor}`} />
              </div>
              <div>
                <p className="text-2xl font-bold text-[#1F2937]">{stat.value}</p>
                <p className="text-xs text-[#6B7280]">{stat.title}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
