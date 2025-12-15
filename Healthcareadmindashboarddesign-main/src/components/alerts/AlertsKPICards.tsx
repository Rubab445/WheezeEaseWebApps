import { AlertTriangle, AlertCircle, CheckCircle2, TrendingUp, MoreVertical } from 'lucide-react';

const kpis = [
  {
    icon: AlertTriangle,
    title: 'High Risk (24h)',
    value: '23',
    change: '+12%',
    positive: false,
    color: 'from-red-500 to-pink-600',
    borderColor: 'border-red-500/30',
    bgColor: 'bg-red-500/10'
  },
  {
    icon: AlertCircle,
    title: 'Medium Risk (24h)',
    value: '47',
    change: '+8%',
    positive: false,
    color: 'from-yellow-500 to-orange-600',
    borderColor: 'border-yellow-500/30',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: CheckCircle2,
    title: 'Resolved Alerts (7d)',
    value: '142',
    change: '+15%',
    positive: true,
    color: 'from-green-500 to-emerald-600',
    borderColor: 'border-green-500/30',
    bgColor: 'bg-green-500/10'
  },
  {
    icon: TrendingUp,
    title: 'Avg Risk Score (30d)',
    value: '64%',
    change: '-5%',
    positive: true,
    color: 'from-purple-500 to-cyan-600',
    borderColor: 'border-purple-500/30',
    bgColor: 'bg-purple-500/10'
  },
];

export function AlertsKPICards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        return (
          <div
            key={kpi.title}
            className={`relative bg-[#0E1629]/60 backdrop-blur-xl border ${kpi.borderColor} rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all group`}
          >
            <div className={`absolute inset-0 ${kpi.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
            
            <div className="relative">
              <div className="flex items-start justify-between mb-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <button className="p-1 hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
                  <MoreVertical className="w-4 h-4 text-gray-400" />
                </button>
              </div>
              
              <div>
                <p className="text-sm text-gray-400 mb-2">{kpi.title}</p>
                <div className="flex items-end gap-2">
                  <span className="text-3xl text-white">{kpi.value}</span>
                  <span className={`text-xs px-2 py-1 rounded-full mb-1 ${
                    kpi.positive 
                      ? 'bg-green-500/20 text-green-400 border border-green-500/30' 
                      : 'bg-red-500/20 text-red-400 border border-red-500/30'
                  }`}>
                    {kpi.change}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
