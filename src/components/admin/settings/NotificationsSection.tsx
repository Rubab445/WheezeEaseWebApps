import { Bell, Mail, Smartphone, Moon, Clock } from 'lucide-react';

interface NotificationsSectionProps {
  onChange: () => void;
}

const notificationTypes = [
  { id: 'high-risk', label: 'High-risk alerts', email: true, inApp: true, sms: false },
  { id: 'new-users', label: 'New user registrations', email: true, inApp: true, sms: false },
  { id: 'system-errors', label: 'System errors', email: true, inApp: true, sms: false },
  { id: 'api-failures', label: 'API failures', email: true, inApp: true, sms: false },
  { id: 'daily-summary', label: 'Daily summary reports', email: true, inApp: false, sms: false },
  { id: 'weekly-analytics', label: 'Weekly analytics', email: true, inApp: false, sms: false },
  { id: 'critical-patient', label: 'Critical patient alerts', email: true, inApp: true, sms: true },
];

export function NotificationsSection({ onChange }: NotificationsSectionProps) {
  return (
    <div className="space-y-6">
      {/* Admin Notifications Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <h2 className="text-lg text-white mb-6">Admin Notifications</h2>
        
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left py-3 px-4 text-xs text-gray-400 font-medium">Notification Type</th>
                <th className="text-center py-3 px-4 text-xs text-gray-400 font-medium">
                  <div className="flex items-center justify-center gap-2">
                    <Mail className="w-3 h-3" />
                    Email
                  </div>
                </th>
                <th className="text-center py-3 px-4 text-xs text-gray-400 font-medium">
                  <div className="flex items-center justify-center gap-2">
                    <Bell className="w-3 h-3" />
                    In-App
                  </div>
                </th>
                <th className="text-center py-3 px-4 text-xs text-gray-400 font-medium">
                  <div className="flex items-center justify-center gap-2">
                    <Smartphone className="w-3 h-3" />
                    SMS
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {notificationTypes.map((notification) => (
                <tr key={notification.id} className="border-b border-white/5">
                  <td className="py-4 px-4">
                    <span className="text-sm text-white">{notification.label}</span>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      <button 
                        onClick={onChange}
                        className={`relative w-10 h-5 rounded-full transition-all ${
                          notification.email ? 'bg-purple-500' : 'bg-white/10'
                        }`}
                      >
                        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                          notification.email ? 'right-0.5' : 'left-0.5'
                        }`} />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      <button 
                        onClick={onChange}
                        className={`relative w-10 h-5 rounded-full transition-all ${
                          notification.inApp ? 'bg-purple-500' : 'bg-white/10'
                        }`}
                      >
                        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                          notification.inApp ? 'right-0.5' : 'left-0.5'
                        }`} />
                      </button>
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      <button 
                        onClick={onChange}
                        className={`relative w-10 h-5 rounded-full transition-all ${
                          notification.sms ? 'bg-purple-500' : 'bg-white/10'
                        }`}
                      >
                        <div className={`absolute top-0.5 w-4 h-4 bg-white rounded-full transition-transform ${
                          notification.sms ? 'right-0.5' : 'left-0.5'
                        }`} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Alert Thresholds Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <h2 className="text-lg text-white mb-6">Alert Thresholds</h2>
        
        <div className="space-y-5">
          {/* High-risk Alert Trigger */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <label className="text-sm text-gray-400">High-risk alert trigger</label>
              <span className="text-sm text-purple-400">85%</span>
            </div>
            <input
              type="range"
              min="70"
              max="95"
              defaultValue="85"
              onChange={onChange}
              className="w-full h-2 bg-white/5 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-purple-500 [&::-webkit-slider-thumb]:cursor-pointer"
            />
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>70%</span>
              <span>95%</span>
            </div>
          </div>

          {/* Environment Warning Level */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Environment warning level (AQI threshold)</label>
            <select 
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="100">100 - Unhealthy for Sensitive Groups</option>
              <option value="150" selected>150 - Unhealthy</option>
              <option value="200">200 - Very Unhealthy</option>
              <option value="300">300 - Hazardous</option>
            </select>
          </div>

          {/* Missed Medication Reminders Toggle */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <p className="text-sm text-white">Missed medication reminders</p>
              <p className="text-xs text-gray-500">Alert when patients miss medications</p>
            </div>
            <button 
              onClick={onChange}
              className="relative w-12 h-6 rounded-full bg-purple-500 transition-all"
            >
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform" />
            </button>
          </div>

          {/* Unusual Activity Detection Toggle */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <p className="text-sm text-white">Unusual activity detection</p>
              <p className="text-xs text-gray-500">Monitor for suspicious behavior</p>
            </div>
            <button 
              onClick={onChange}
              className="relative w-12 h-6 rounded-full bg-purple-500 transition-all"
            >
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Quiet Hours Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center">
              <Moon className="w-5 h-5 text-indigo-400" />
            </div>
            <div>
              <h2 className="text-lg text-white">Quiet Hours</h2>
              <p className="text-xs text-gray-500">Pause non-critical notifications</p>
            </div>
          </div>
          <button 
            onClick={onChange}
            className="relative w-12 h-6 rounded-full bg-white/10 transition-all"
          >
            <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform" />
          </button>
        </div>
        
        <div className="space-y-4 opacity-50 pointer-events-none">
          {/* Time Pickers */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Start Time
              </label>
              <input
                type="time"
                defaultValue="22:00"
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
              />
            </div>
            <div>
              <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
                <Clock className="w-4 h-4" />
                End Time
              </label>
              <input
                type="time"
                defaultValue="08:00"
                className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
              />
            </div>
          </div>

          {/* Exceptions */}
          <div>
            <label className="text-sm text-gray-400 mb-3 block">Exceptions (bypass quiet hours)</label>
            <div className="space-y-2">
              <label className="flex items-center gap-3 p-3 bg-white/5 rounded-lg cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-white/30" />
                <span className="text-sm text-white">Critical patient alerts</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-white/5 rounded-lg cursor-pointer">
                <input type="checkbox" defaultChecked className="w-4 h-4 rounded border-white/30" />
                <span className="text-sm text-white">System failures</span>
              </label>
              <label className="flex items-center gap-3 p-3 bg-white/5 rounded-lg cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-white/30" />
                <span className="text-sm text-white">High-risk alerts</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
