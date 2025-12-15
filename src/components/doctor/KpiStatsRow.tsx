import { Users, AlertTriangle, ClipboardCheck, Sparkles, TrendingUp } from 'lucide-react';

export function KpiStatsRow() {
  const stats = [
    {
      title: 'Total Patients',
      value: '127',
      subtitle: 'Active patients',
      trend: '+8 this month',
      trendUp: true,
      icon: Users,
      iconColor: 'text-[#059669]',
      iconBg: 'bg-[#059669]/10',
    },
    {
      title: 'High-Risk Patients',
      value: '18',
      subtitle: 'Require attention',
      trend: '+3 since last week',
      trendUp: false,
      icon: AlertTriangle,
      iconColor: 'text-[#EF4444]',
      iconBg: 'bg-[#EF4444]/10',
    },
    {
      title: 'Reviews Today',
      value: '12',
      subtitle: 'Scheduled reviews',
      trend: '4 pending',
      trendUp: null,
      icon: ClipboardCheck,
      iconColor: 'text-[#059669]',
      iconBg: 'bg-[#059669]/10',
    },
    {
      title: 'AI Alerts',
      value: '24',
      subtitle: 'New recommendations',
      trend: '+6 today',
      trendUp: true,
      icon: Sparkles,
      iconColor: 'text-[#059669]',
      iconBg: 'bg-[#059669]/10',
    },
  ];

  return (
    <div className="grid grid-cols-4 gap-6 mb-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div 
            key={stat.title}
            className="bg-white rounded-2xl p-6 shadow-sm border-t-[3px] border-t-[#059669] hover:shadow-md transition-shadow"
          >
            <div className="flex items-start justify-between mb-4">
              <div className={`w-12 h-12 ${stat.iconBg} rounded-xl flex items-center justify-center`}>
                <Icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
            </div>
            
            <div className="mb-1">
              <p className="text-3xl font-bold text-[#1F2937]">{stat.value}</p>
            </div>
            
            <p className="text-sm text-[#6B7280] mb-2">{stat.subtitle}</p>
            
            <div className="flex items-center gap-1">
              {stat.trendUp !== null && (
                <TrendingUp 
                  className={`w-4 h-4 ${
                    stat.trendUp ? 'text-[#22C55E]' : 'text-[#EF4444]'
                  } ${!stat.trendUp ? 'rotate-180' : ''}`} 
                />
              )}
              <span className={`text-xs ${
                stat.trendUp === true ? 'text-[#22C55E]' : 
                stat.trendUp === false ? 'text-[#EF4444]' : 
                'text-[#6B7280]'
              }`}>
                {stat.trend}
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
}