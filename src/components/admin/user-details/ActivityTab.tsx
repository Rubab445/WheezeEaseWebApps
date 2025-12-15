import { Eye, Search, ChevronLeft, ChevronRight } from 'lucide-react';

interface ActivityTabProps {
  role: 'Patient' | 'Doctor';
}

const patientLogs = [
  {
    id: '1',
    date: 'Dec 13, 2025',
    time: '14:30',
    severity: 'High',
    symptoms: ['Wheezing', 'Shortness of breath', 'Chest tightness'],
    trigger: 'Pollen',
    medication: 'Yes',
    riskScore: 84
  },
  {
    id: '2',
    date: 'Dec 12, 2025',
    time: '09:15',
    severity: 'Medium',
    symptoms: ['Coughing', 'Runny nose'],
    trigger: 'AQI',
    medication: 'No',
    riskScore: 58
  },
  {
    id: '3',
    date: 'Dec 11, 2025',
    time: '16:45',
    severity: 'Low',
    symptoms: ['Mild cough'],
    trigger: 'Dust',
    medication: 'Yes',
    riskScore: 35
  },
  {
    id: '4',
    date: 'Dec 10, 2025',
    time: '11:20',
    severity: 'High',
    symptoms: ['Wheezing', 'Coughing', 'Difficulty breathing'],
    trigger: 'Pollen',
    medication: 'Yes',
    riskScore: 78
  },
  {
    id: '5',
    date: 'Dec 9, 2025',
    time: '08:00',
    severity: 'Medium',
    symptoms: ['Sneezing', 'Itchy eyes'],
    trigger: 'Dust',
    medication: 'No',
    riskScore: 52
  },
];

const doctorActivity = [
  {
    id: '1',
    date: 'Dec 13, 2025',
    time: '10:30',
    action: 'Reviewed patient',
    patient: 'Sara M.',
    avatar: 'SM',
    notes: 'Updated treatment plan based on recent symptoms'
  },
  {
    id: '2',
    date: 'Dec 13, 2025',
    time: '09:15',
    action: 'Updated note',
    patient: 'Omar F.',
    avatar: 'OF',
    notes: 'Added medication allergy warning'
  },
  {
    id: '3',
    date: 'Dec 12, 2025',
    time: '15:45',
    action: 'Created recommendation',
    patient: 'Fatima H.',
    avatar: 'FH',
    notes: 'Recommended pulmonary function test'
  },
  {
    id: '4',
    date: 'Dec 12, 2025',
    time: '11:00',
    action: 'Reviewed patient',
    patient: 'Yusuf A.',
    avatar: 'YA',
    notes: 'Assessed risk levels and environmental factors'
  },
  {
    id: '5',
    date: 'Dec 11, 2025',
    time: '14:20',
    action: 'Updated note',
    patient: 'Layla S.',
    avatar: 'LS',
    notes: 'Documented emergency contact update'
  },
];

const severityStyles = {
  High: 'bg-red-500/20 text-red-400 border-red-500/30',
  Medium: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  Low: 'bg-green-500/20 text-green-400 border-green-500/30',
};

const actionTypeColors = {
  'Reviewed patient': 'bg-cyan-500/10 text-cyan-400',
  'Updated note': 'bg-purple-500/10 text-purple-400',
  'Created recommendation': 'bg-pink-500/10 text-pink-400',
};

export function ActivityTab({ role }: ActivityTabProps) {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden">
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl text-white">
              {role === 'Patient' ? 'Recent Symptom Logs' : 'Recent Activity'}
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              {role === 'Patient' 
                ? 'Complete log of reported symptoms and triggers' 
                : 'Doctor actions and patient interactions'
              }
            </p>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="w-64 bg-[#141A2E] border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50"
            />
          </div>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              {role === 'Patient' ? (
                <>
                  <th className="text-left py-4 px-6 text-sm text-gray-400">Date & Time</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-400">Severity</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-400">Symptoms</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-400">Trigger</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-400">Medication Taken</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-400">AI Risk Score</th>
                  <th className="text-right py-4 px-6 text-sm text-gray-400">Action</th>
                </>
              ) : (
                <>
                  <th className="text-left py-4 px-6 text-sm text-gray-400">Date & Time</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-400">Action Type</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-400">Patient Name</th>
                  <th className="text-left py-4 px-4 text-sm text-gray-400">Notes</th>
                  <th className="text-right py-4 px-6 text-sm text-gray-400">Action</th>
                </>
              )}
            </tr>
          </thead>
          <tbody>
            {role === 'Patient' ? (
              patientLogs.map((log) => (
                <tr key={log.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-sm text-white">{log.date}</p>
                      <p className="text-xs text-gray-500">{log.time}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full border text-xs ${severityStyles[log.severity as keyof typeof severityStyles]}`}>
                      {log.severity}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex flex-wrap gap-1 max-w-[200px]">
                      {log.symptoms.map((symptom, idx) => (
                        <span key={idx} className="px-2 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs">
                          {symptom}
                        </span>
                      ))}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-white">{log.trigger}</span>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`text-sm ${log.medication === 'Yes' ? 'text-green-400' : 'text-red-400'}`}>
                      {log.medication}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 max-w-[60px] h-1.5 bg-white/5 rounded-full overflow-hidden">
                        <div 
                          className={`h-full rounded-full ${
                            log.riskScore >= 70 
                              ? 'bg-gradient-to-r from-red-500 to-pink-500' 
                              : log.riskScore >= 50
                              ? 'bg-gradient-to-r from-yellow-500 to-orange-500'
                              : 'bg-gradient-to-r from-green-500 to-emerald-500'
                          }`}
                          style={{ width: `${log.riskScore}%` }}
                        />
                      </div>
                      <span className="text-sm text-white font-medium">{log.riskScore}%</span>
                    </div>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-cyan-500/20 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-cyan-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              doctorActivity.map((activity) => (
                <tr key={activity.id} className="border-b border-white/5 hover:bg-white/5 transition-colors group">
                  <td className="py-4 px-6">
                    <div>
                      <p className="text-sm text-white">{activity.date}</p>
                      <p className="text-xs text-gray-500">{activity.time}</p>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${actionTypeColors[activity.action as keyof typeof actionTypeColors]}`}>
                      {activity.action}
                    </span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs text-white">{activity.avatar}</span>
                      </div>
                      <span className="text-sm text-white">{activity.patient}</span>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <span className="text-sm text-gray-300">{activity.notes}</span>
                  </td>
                  <td className="py-4 px-6">
                    <div className="flex justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-cyan-500/20 rounded-lg transition-colors">
                        <Eye className="w-4 h-4 text-cyan-400" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between px-6 py-4 border-t border-white/5">
        <span className="text-sm text-gray-400">Showing 1-5 of {role === 'Patient' ? '42' : '38'} entries</span>
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
            <span className="text-sm text-white px-3">1 / {role === 'Patient' ? '5' : '4'}</span>
            <button className="p-2 hover:bg-white/5 rounded-lg transition-colors">
              <ChevronRight className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
