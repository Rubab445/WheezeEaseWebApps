import { RefreshCw, Cloud, Leaf, Wind } from 'lucide-react';

const apiServices = [
  {
    name: 'OpenWeather API',
    icon: Cloud,
    status: 'Online',
    lastSync: '5 min ago',
    color: 'text-cyan-400'
  },
  {
    name: 'Pollen.com API',
    icon: Leaf,
    status: 'Online',
    lastSync: '5 min ago',
    color: 'text-pink-400'
  },
  {
    name: 'AQI API',
    icon: Wind,
    status: 'Online',
    lastSync: '5 min ago',
    color: 'text-purple-400'
  },
];

export function ApiStatusCard() {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg text-white">API Connections</h3>
          <p className="text-sm text-gray-400 mt-1">Data source status</p>
        </div>
      </div>

      <div className="space-y-3 mb-6">
        {apiServices.map((service, idx) => {
          const Icon = service.icon;
          return (
            <div 
              key={idx}
              className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-all border border-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
                  <Icon className={`w-5 h-5 ${service.color}`} />
                </div>
                <div>
                  <p className="text-sm text-white font-medium">{service.name}</p>
                  <p className="text-xs text-gray-500">Last sync: {service.lastSync}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-2">
                <div className={`w-2 h-2 rounded-full ${
                  service.status === 'Online' ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                }`} />
                <span className={`text-xs ${
                  service.status === 'Online' ? 'text-green-400' : 'text-red-400'
                }`}>
                  {service.status}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <button className="w-full px-5 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
        <RefreshCw className="w-4 h-4" />
        Refresh All
      </button>

      <div className="mt-4 pt-4 border-t border-white/5">
        <div className="flex items-center justify-between text-xs">
          <span className="text-gray-400">System health</span>
          <span className="text-green-400 flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            All systems operational
          </span>
        </div>
      </div>

      {/* Additional Stats */}
      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-xl">
          <p className="text-xs text-gray-400 mb-1">API Calls Today</p>
          <p className="text-lg text-white font-medium">2,847</p>
        </div>
        <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
          <p className="text-xs text-gray-400 mb-1">Uptime</p>
          <p className="text-lg text-white font-medium">99.8%</p>
        </div>
      </div>
    </div>
  );
}
