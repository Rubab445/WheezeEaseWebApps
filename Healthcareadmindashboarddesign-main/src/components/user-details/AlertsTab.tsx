import { AlertTriangle, CheckCircle, XCircle, Clock, Eye, ChevronLeft, ChevronRight } from 'lucide-react';

const kpis = [
  {
    icon: AlertTriangle,
    title: 'Total Alerts (30d)',
    value: '38',
    color: 'from-purple-500 to-purple-600',
    borderColor: 'border-purple-500/30',
    bgColor: 'bg-purple-500/10'
  },
  {
    icon: XCircle,
    title: 'High-Risk Alerts',
    value: '12',
    color: 'from-red-500 to-pink-600',
    borderColor: 'border-red-500/30',
    bgColor: 'bg-red-500/10'
  },
  {
    icon: Clock,
    title: 'Missed Medication',
    value: '5',
    color: 'from-yellow-500 to-orange-600',
    borderColor: 'border-yellow-500/30',
    bgColor: 'bg-yellow-500/10'
  },
  {
    icon: CheckCircle,
    title: 'Resolved',
    value: '24',
    color: 'from-green-500 to-emerald-600',
    borderColor: 'border-green-500/30',
    bgColor: 'bg-green-500/10'
  },
];

const alerts = [
  {
    id: 'A1032',
    type: 'High Risk Prediction',
    risk: 84,
    trigger: 'Pollen count: Very High',
    date: 'Dec 13, 2025',
    time: '14:30',
    status: 'New',
    statusColor: 'cyan'
  },
  {
    id: 'A1028',
    type: 'Environmental Alert',
    risk: 72,
    trigger: 'AQI: Unhealthy',
    date: 'Dec 12, 2025',
    time: '09:15',
    status: 'Reviewed',
    statusColor: 'purple'
  },
  {
    id: 'A1025',
    type: 'Symptom Escalation',
    risk: 68,
    trigger: 'Multiple severe symptoms',
    date: 'Dec 11, 2025',
    time: '16:45',
    status: 'Resolved',
    statusColor: 'green'
  },
  {
    id: 'A1020',
    type: 'Medication Missed',
    risk: 55,
    trigger: 'Schedule deviation: 4 hours',
    date: 'Dec 10, 2025',
    time: '11:20',
    status: 'Resolved',
    statusColor: 'green'
  },
  {
    id: 'A1015',
    type: 'High Risk Prediction',
    risk: 78,
    trigger: 'Dust + High humidity',
    date: 'Dec 9, 2025',
    time: '08:00',
    status: 'Reviewed',
    statusColor: 'purple'
  },
];

const statusStyles = {
  cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  green: 'bg-green-500/20 text-green-400 border-green-500/30',
};

export function AlertsTab() {
  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-4 gap-6">
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          return (
            <div
              key={kpi.title}
              className={`relative bg-[#0E1629]/60 backdrop-blur-xl border ${kpi.borderColor} rounded-2xl p-5 shadow-xl hover:shadow-2xl transition-all group`}
            >
              <div className={`absolute inset-0 ${kpi.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="relative flex items-start gap-3">
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${kpi.color} flex items-center justify-center shadow-lg`}>
                  <Icon className="w-6 h-6 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs text-gray-400 mb-1">{kpi.title}</p>
                  <span className="text-2xl text-white">{kpi.value}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Alert History Table */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden">
        <div className="p-6 border-b border-white/5">
          <h2 className="text-xl text-white">Alert History</h2>
          <p className="text-sm text-gray-400 mt-1">Complete record of all alerts and notifications</p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-4 px-6 text-sm text-gray-400">Alert ID</th>
                <th className="text-left py-4 px-4 text-sm text-gray-400">Type</th>
                <th className="text-left py-4 px-4 text-sm text-gray-400">Risk %</th>
                <th className="text-left py-4 px-4 text-sm text-gray-400">Trigger</th>
                <th className="text-left py-4 px-4 text-sm text-gray-400">Date & Time</th>
                <th className="text-left py-4 px-4 text-sm text-gray-400">Status</th>
                <th className="text-right py-4 px-6 text-sm text-gray-400">Action</th>
              </tr>
            </thead>
            <tbody>
              {alerts.map((alert) => (
                <tr key={alert.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6">
                    <span className="text-sm text-purple-400 font-mono">#{alert.id}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-white">{alert.type}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-[80px] h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            alert.risk >= 70 
                              ? 'bg-gradient-to-r from-red-500 to-pink-500' 
                              : 'bg-gradient-to-r from-yellow-500 to-orange-500'
                          }`}
                          style={{ width: `${alert.risk}%` }}
                        />
                      </div>
                      <span className="text-sm text-white font-medium w-10">{alert.risk}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-300">{alert.trigger}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div>
                      <p className="text-sm text-white">{alert.date}</p>
                      <p className="text-xs text-gray-500">{alert.time}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full border text-xs ${statusStyles[alert.statusColor as keyof typeof statusStyles]}`}>
                      {alert.status}
                    </span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-cyan-500/20 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-cyan-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/5">
          <span className="text-sm text-gray-400">Showing 1-5 of 38 alerts</span>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400">Rows per page</span>
              <select className="bg-[#141A2E] border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-purple-500/50">
                <option>10</option>
                <option>25</option>
                <option>50</option>
              </select>
            </div>
            <div className="flex items-center gap-2">
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors disabled:opacity-30">
                <ChevronLeft className="w-4 h-4 text-gray-400" />
              </button>
              <span className="text-sm text-white px-3">1 / 4</span>
              <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
