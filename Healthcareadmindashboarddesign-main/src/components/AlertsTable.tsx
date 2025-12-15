import { Eye, CheckCircle, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

const alerts = [
  {
    id: 'A1032',
    patient: 'Ayesha K.',
    riskScore: 84,
    trigger: 'Pollen',
    date: 'Dec 13, 2025',
    status: 'New',
    statusColor: 'cyan'
  },
  {
    id: 'A1031',
    patient: 'Ali R.',
    riskScore: 77,
    trigger: 'AQI',
    date: 'Dec 13, 2025',
    status: 'Reviewed',
    statusColor: 'purple'
  },
  {
    id: 'A1030',
    patient: 'Sara M.',
    riskScore: 92,
    trigger: 'Dust',
    date: 'Dec 12, 2025',
    status: 'New',
    statusColor: 'cyan'
  },
  {
    id: 'A1029',
    patient: 'Omar F.',
    riskScore: 68,
    trigger: 'Pollen',
    date: 'Dec 12, 2025',
    status: 'Resolved',
    statusColor: 'green'
  },
  {
    id: 'A1028',
    patient: 'Fatima H.',
    riskScore: 81,
    trigger: 'AQI',
    date: 'Dec 12, 2025',
    status: 'Reviewed',
    statusColor: 'purple'
  },
  {
    id: 'A1027',
    patient: 'Yusuf A.',
    riskScore: 75,
    trigger: 'Dust',
    date: 'Dec 11, 2025',
    status: 'New',
    statusColor: 'cyan'
  },
  {
    id: 'A1026',
    patient: 'Layla S.',
    riskScore: 89,
    trigger: 'Pollen',
    date: 'Dec 11, 2025',
    status: 'Reviewed',
    statusColor: 'purple'
  },
  {
    id: 'A1025',
    patient: 'Hassan K.',
    riskScore: 72,
    trigger: 'AQI',
    date: 'Dec 11, 2025',
    status: 'Resolved',
    statusColor: 'green'
  },
];

const statusStyles = {
  cyan: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  purple: 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  green: 'bg-green-500/20 text-green-400 border-green-500/30',
};

export function AlertsTable() {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl text-white">Latest High-Risk Alerts</h2>
          <p className="text-sm text-gray-400 mt-1">Recent patient risk notifications</p>
        </div>
        <button className="px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm">
          Create Report
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-4 text-sm text-gray-400">Alert ID</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Patient</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Risk Score</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Main Trigger</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Date</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Status</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert) => (
              <tr 
                key={alert.id}
                className="border-b border-white/5 hover:bg-white/5 transition-colors group"
              >
                <td className="py-4 px-4">
                  <span className="text-sm text-purple-400">#{alert.id}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                      <span className="text-xs text-white">{alert.patient[0]}</span>
                    </div>
                    <span className="text-sm text-white">{alert.patient}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 max-w-[80px] h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          alert.riskScore >= 80 
                            ? 'bg-gradient-to-r from-red-500 to-pink-500' 
                            : 'bg-gradient-to-r from-yellow-500 to-orange-500'
                        }`}
                        style={{ width: `${alert.riskScore}%` }}
                      />
                    </div>
                    <span className="text-sm text-white">{alert.riskScore}%</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-gray-300">{alert.trigger}</span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-gray-400">{alert.date}</span>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full border text-xs ${statusStyles[alert.statusColor as keyof typeof statusStyles]}`}>
                    {alert.status}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button className="p-2 hover:bg-cyan-500/20 rounded-lg transition-colors" title="View">
                      <Eye className="w-4 h-4 text-cyan-400" />
                    </button>
                    <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors" title="Mark Reviewed">
                      <CheckCircle className="w-4 h-4 text-purple-400" />
                    </button>
                    <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors" title="Delete">
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
        <span className="text-sm text-gray-400">Showing 8 of 38 alerts</span>
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
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
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
  );
}
