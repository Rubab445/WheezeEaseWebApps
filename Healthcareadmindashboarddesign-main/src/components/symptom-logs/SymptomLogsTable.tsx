import { Eye, Download, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';
import { SymptomLog } from '../../pages/SymptomLogsPage';

interface SymptomLogsTableProps {
  logs: SymptomLog[];
  selectedLogs: string[];
  onToggleLog: (id: string) => void;
  onToggleAll: () => void;
  onViewLog: (log: SymptomLog) => void;
}

const symptomColors: Record<string, string> = {
  'Wheezing': 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  'Shortness of breath': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  'Chest tightness': 'bg-pink-500/10 text-pink-300 border-pink-500/30',
  'Coughing': 'bg-blue-500/10 text-blue-300 border-blue-500/30',
  'Runny nose': 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30',
  'Sneezing': 'bg-green-500/10 text-green-300 border-green-500/30',
  'Itchy eyes': 'bg-yellow-500/10 text-yellow-300 border-yellow-500/30',
  'Difficulty breathing': 'bg-red-500/10 text-red-300 border-red-500/30',
};

const triggerColors: Record<string, string> = {
  'Pollen': 'bg-pink-500/10 text-pink-300 border-pink-500/30',
  'AQI': 'bg-purple-500/10 text-purple-300 border-purple-500/30',
  'Humidity': 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30',
  'Dust': 'bg-orange-500/10 text-orange-300 border-orange-500/30',
  'Smoke': 'bg-red-500/10 text-red-300 border-red-500/30',
  'Weather': 'bg-blue-500/10 text-blue-300 border-blue-500/30',
};

function getSeverityColor(severity: number) {
  if (severity >= 7) return 'from-red-500 to-pink-500';
  if (severity >= 4) return 'from-yellow-500 to-orange-500';
  return 'from-green-500 to-emerald-500';
}

function getSeverityLabel(severity: number) {
  if (severity >= 7) return 'Severe';
  if (severity >= 4) return 'Moderate';
  return 'Mild';
}

export function SymptomLogsTable({ logs, selectedLogs, onToggleLog, onToggleAll, onViewLog }: SymptomLogsTableProps) {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden">
      <div className="p-6 border-b border-white/5">
        <h2 className="text-xl text-white">All Symptom Logs</h2>
        <p className="text-sm text-gray-400 mt-1">Complete record of patient-reported symptoms</p>
      </div>

      {/* Bulk Actions Bar */}
      {selectedLogs.length > 0 && (
        <div className="bg-purple-500/10 border-b border-purple-500/30 px-6 py-3 flex items-center justify-between">
          <span className="text-sm text-purple-300">{selectedLogs.length} selected</span>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/30 transition-all text-sm flex items-center gap-2">
              <Download className="w-4 h-4" />
              Export selected
            </button>
            <button className="px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-all text-sm">
              Mark reviewed
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
                  checked={selectedLogs.length === logs.length}
                  onChange={onToggleAll}
                  className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20"
                />
              </th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Log ID</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Patient</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Date & Time</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Symptoms</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Severity</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Triggers</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Medication</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">AI Risk</th>
              <th className="text-right py-4 px-6 text-sm text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <tr
                key={log.id}
                className={`border-b border-white/5 hover:bg-purple-500/5 hover:shadow-lg hover:shadow-purple-500/10 transition-all group ${
                  index % 2 === 0 ? 'bg-white/[0.02]' : ''
                }`}
              >
                <td className="py-4 px-6">
                  <input
                    type="checkbox"
                    checked={selectedLogs.includes(log.id)}
                    onChange={() => onToggleLog(log.id)}
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20"
                  />
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-purple-400 font-mono">#{log.id}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-white">{log.patientAvatar}</span>
                    </div>
                    <div>
                      <p className="text-sm text-white">{log.patientName}</p>
                      <p className="text-xs text-gray-500">{log.patientId}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div>
                    <p className="text-sm text-white">{log.date}</p>
                    <p className="text-xs text-gray-500">{log.time}</p>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-wrap gap-1 max-w-[200px]">
                    {log.symptoms.slice(0, 2).map((symptom, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 rounded-full border text-xs ${
                          symptomColors[symptom] || 'bg-gray-500/10 text-gray-300 border-gray-500/30'
                        }`}
                      >
                        {symptom}
                      </span>
                    ))}
                    {log.symptoms.length > 2 && (
                      <span className="px-2 py-1 rounded-full bg-white/5 text-gray-400 border border-white/10 text-xs">
                        +{log.symptoms.length - 2}
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-[80px] h-2 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full bg-gradient-to-r ${getSeverityColor(log.severity)} shadow-lg transition-all`}
                          style={{ width: `${(log.severity / 10) * 100}%` }}
                        />
                      </div>
                      <span className="text-sm text-white font-medium w-6">{log.severity}</span>
                    </div>
                    <span className={`text-xs ${
                      log.severity >= 7 ? 'text-red-400' : log.severity >= 4 ? 'text-yellow-400' : 'text-green-400'
                    }`}>
                      {getSeverityLabel(log.severity)}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex flex-wrap gap-1 max-w-[150px]">
                    {log.triggers.map((trigger, idx) => (
                      <span
                        key={idx}
                        className={`px-2 py-1 rounded-full border text-xs ${
                          triggerColors[trigger] || 'bg-gray-500/10 text-gray-300 border-gray-500/30'
                        }`}
                      >
                        {trigger}
                      </span>
                    ))}
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full border text-xs ${
                    log.medicationTaken
                      ? 'bg-green-500/20 text-green-400 border-green-500/30'
                      : 'bg-red-500/20 text-red-400 border-red-500/30'
                  }`}>
                    {log.medicationTaken ? 'Yes' : 'No'}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 max-w-[60px] h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className={`h-full rounded-full ${
                          log.aiRiskScore >= 70 
                            ? 'bg-gradient-to-r from-red-500 to-pink-500' 
                            : log.aiRiskScore >= 50
                            ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                            : 'bg-gradient-to-r from-green-500 to-emerald-500'
                        }`}
                        style={{ width: `${log.aiRiskScore}%` }}
                      />
                    </div>
                    <span className="text-sm text-white font-medium">{log.aiRiskScore}%</span>
                  </div>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onViewLog(log)}
                      className="p-2 hover:bg-cyan-500/20 rounded-lg transition-colors"
                      title="View details"
                    >
                      <Eye className="w-4 h-4 text-cyan-400" />
                    </button>
                    <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors" title="Export">
                      <Download className="w-4 h-4 text-purple-400" />
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
        <span className="text-sm text-gray-400">Showing 1-8 of 1,248 logs</span>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-400">Rows per page</span>
            <select className="bg-[#141A2E] border border-white/10 rounded-lg px-3 py-1.5 text-sm text-white focus:outline-none focus:border-purple-500/50">
              <option>15</option>
              <option>25</option>
              <option>50</option>
            </select>
          </div>
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors disabled:opacity-30 disabled:cursor-not-allowed">
              <ChevronLeft className="w-4 h-4 text-gray-400" />
            </button>
            <span className="text-sm text-white px-3">1 / 84</span>
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
