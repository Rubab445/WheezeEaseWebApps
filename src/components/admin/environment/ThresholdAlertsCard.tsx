import { Bell, Settings, Edit } from 'lucide-react';

const thresholds = [
  {
    parameter: 'AQI',
    condition: 'AQI > 150',
    action: 'Send patient warnings',
    enabled: true,
    color: 'text-purple-400'
  },
  {
    parameter: 'Pollen',
    condition: 'Pollen = High',
    action: 'Notify high-risk patients',
    enabled: true,
    color: 'text-pink-400'
  },
  {
    parameter: 'Humidity',
    condition: 'Humidity > 80%',
    action: 'Trigger recommendations',
    enabled: false,
    color: 'text-cyan-400'
  },
  {
    parameter: 'Temperature',
    condition: 'Temp > 35°C',
    action: 'Heat advisory alerts',
    enabled: true,
    color: 'text-orange-400'
  },
];

export function ThresholdAlertsCard() {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg text-white flex items-center gap-2">
            <Bell className="w-5 h-5 text-purple-400" />
            Alert Thresholds & Automation
          </h3>
          <p className="text-sm text-gray-400 mt-1">Configure automated patient notifications</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {thresholds.map((threshold, idx) => (
          <div 
            key={idx} 
            className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10"
          >
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-2">
                <span className={`${threshold.color} font-medium`}>{threshold.parameter}</span>
                <span className="text-xs text-gray-500 px-2 py-1 bg-white/5 rounded-full font-mono">
                  {threshold.condition}
                </span>
              </div>
              <p className="text-sm text-gray-400">{threshold.action}</p>
            </div>
            
            <div className="flex items-center gap-3">
              {/* Toggle Switch */}
              <button 
                className={`relative w-12 h-6 rounded-full transition-all ${
                  threshold.enabled 
                    ? 'bg-purple-500 shadow-lg shadow-purple-500/30' 
                    : 'bg-white/10'
                }`}
              >
                <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                  threshold.enabled ? 'translate-x-7' : 'translate-x-1'
                }`} />
              </button>
              
              {/* Edit Button */}
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors">
                <Edit className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2">
        <Settings className="w-4 h-4" />
        Configure Alerts
      </button>

      <div className="mt-4 pt-4 border-t border-white/5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">Active automations</span>
          <span className="text-green-400 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            3 of 4 enabled
          </span>
        </div>
      </div>
    </div>
  );
}
