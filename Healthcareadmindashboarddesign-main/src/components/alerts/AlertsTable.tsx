import { Eye, FileCheck, CheckSquare, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Alert } from '../../pages/AlertsPage';

interface AlertsTableProps {
  alerts: Alert[];
  selectedAlerts: string[];
  onToggleAlert: (id: string) => void;
  onToggleAll: () => void;
  onViewAlert: (alert: Alert) => void;
}

const severityStyles = {
  Low: 'bg-green-500/20 text-green-400 border-green-500/30',
  Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  High: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  Critical: 'bg-red-500/20 text-red-400 border-red-500/30',
};

const statusStyles = {
  New: 'bg-gray-500/20 text-gray-400 border-gray-500/30',
  Reviewed: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Resolved: 'bg-green-500/20 text-green-400 border-green-500/30',
};

const triggerStyles = {
  Pollen: 'bg-pink-500/10 text-pink-300 border-pink-500/30',
  AQI: 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  Humidity: 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  Dust: 'bg-orange-500/10 text-orange-300 border-orange-500/30',
  Smoke: 'bg-red-500/10 text-red-300 border-red-500/30',
  Medication: 'bg-blue-500/10 text-blue-300 border-blue-500/30',
};

const typeIcons = {
  'Risk prediction': '🎯',
  'Missed medication': '💊',
  'Environment warning': '🌡️',
};

export function AlertsTable({ alerts, selectedAlerts, onToggleAlert, onToggleAll, onViewAlert }: AlertsTableProps) {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden">
      <div className="p-6 border-b border-white/5">
        <h2 className="text-xl text-white">Latest Alerts</h2>
        <p className="text-sm text-gray-400 mt-1">Real-time monitoring of risk predictions and system notifications</p>
      </div>

      {/* Bulk Actions Bar */}
      {selectedAlerts.length > 0 && (
        <div className="bg-purple-500/10 border-b border-purple-500/30 px-6 py-3 flex items-center justify-between">
          <span className="text-sm text-purple-300">{selectedAlerts.length} selected</span>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-lg bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/30 transition-all text-sm flex items-center gap-2">
              <FileCheck className="w-4 h-4" />
              Mark reviewed
            </button>
            <button className="px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 hover:bg-green-500/30 transition-all text-sm flex items-center gap-2">
              <CheckSquare className="w-4 h-4" />
              Resolve
            </button>
            <button className="px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 hover:bg-red-500/30 transition-all text-sm flex items-center gap-2">
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>
      )}

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-6 w-12">
                <input
                  type="checkbox"
                  checked={selectedAlerts.length === alerts.length}
                  onChange={onToggleAll}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20"
                />
              </th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Alert ID</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Patient</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Type</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Risk %</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Severity</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Trigger</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Created</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Status</th>
              <th className="text-right py-4 px-6 text-sm text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map((alert) => (
              <tr
                key={alert.id}
                className="border-b border-white/5 hover:bg-purple-500/5 hover:shadow-lg hover:shadow-purple-500/10 transition-all group"
              >
                <td className="py-4 px-6">
                  <input
                    type="checkbox"
                    checked={selectedAlerts.includes(alert.id)}
                    onChange={() => onToggleAlert(alert.id)}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20"
                  />
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-purple-400 font-mono">#{alert.id}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-white">{alert.patientAvatar}</span>
                    </div>
                    <div>
                      <p className="text-sm text-white">{alert.patientName}</p>
                      <p className="text-xs text-gray-500">{alert.patientEmail}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-gray-300 flex items-center gap-2">
                    <span>{typeIcons[alert.type]}</span>
                    {alert.type}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 max-w-[80px] h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          alert.riskPercent >= 80 
                            ? 'bg-gradient-to-r from-red-500 to-pink-500 shadow-lg shadow-red-500/30' 
                            : alert.riskPercent >= 60
                            ? 'bg-gradient-to-r from-yellow-500 to-orange-500 shadow-lg shadow-yellow-500/30'
                            : 'bg-gradient-to-r from-green-500 to-emerald-500 shadow-lg shadow-green-500/30'
                        }`}
                        style={{ width: `${alert.riskPercent}%` }}
                      />
                    </div>
                    <span className="text-sm text-white font-medium w-10">{alert.riskPercent}%</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full border text-xs ${severityStyles[alert.severity]}`}>
                    {alert.severity}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full border text-xs ${triggerStyles[alert.trigger]}`}>
                    {alert.trigger}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div>
                    <p className="text-sm text-white">{alert.createdDate}</p>
                    <p className="text-xs text-gray-500">{alert.createdTime}</p>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full border text-xs ${statusStyles[alert.status]}`}>
                    {alert.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onViewAlert(alert)}
                      className="p-2 hover:bg-cyan-500/20 rounded-lg transition-colors"
                      title="View"
                    >
                      <Eye className="w-4 h-4 text-cyan-400" />
                    </button>
                    <button className="p-2 hover:bg-yellow-500/20 rounded-lg transition-colors" title="Mark Reviewed">
                      <FileCheck className="w-4 h-4 text-yellow-400" />
                    </button>
                    <button className="p-2 hover:bg-green-500/20 rounded-lg transition-colors" title="Resolve">
                      <CheckSquare className="w-4 h-4 text-green-400" />
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

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-white/5">
        <span className="text-sm text-gray-400">Showing 1-8 of 256 alerts</span>
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
            <span className="text-sm text-white px-3">1 / 26</span>
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
