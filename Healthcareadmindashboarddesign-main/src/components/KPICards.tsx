import { Heart, Stethoscope, AlertTriangle, ClipboardList, MoreVertical } from 'lucide-react';

const kpis = [
  {
    icon: Heart,
    title: 'Total Patients',
    value: '2,348',
    change: '+8.1%',
    positive: true,
    color: 'from-purple-500 to-purple-600'
  },
  {
    icon: Stethoscope,
    title: 'Total Doctors',
    value: '126',
    change: '+2.4%',
    positive: true,
    color: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: AlertTriangle,
    title: 'High-Risk Alerts (24h)',
    value: '38',
    change: '+12%',
    positive: false,
    color: 'from-pink-500 to-red-600'
  },
  {
    icon: ClipboardList,
    title: 'Logs Today',
    value: '756',
    change: '+3.1%',
    positive: true,
    color: 'from-blue-500 to-indigo-600'
  },
];

export function KPICards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {kpis.map((kpi) => {
        const Icon = kpi.icon;
        return (
          <div
            key={kpi.title}
            className="relative bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:shadow-purple-500/10 transition-all group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
            
            <div className="relative flex items-start justify-between">
              <div className="flex-1">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.color} flex items-center justify-center mb-4 shadow-lg shadow-purple-500/30`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                
                <p className="text-sm text-gray-400 mb-2">{kpi.title}</p>
                <div className="flex items-end gap-3">
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
              
              <button className="text-gray-400 hover:text-white transition-colors opacity-0 group-hover:opacity-100">
                <MoreVertical className="w-5 h-5" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
