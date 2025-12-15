import { Wind, Leaf, Droplets, Thermometer, TrendingUp, Info } from 'lucide-react';
import { Location } from '../../pages/EnvironmentPage';

interface EnvironmentStatusCardsProps {
  location: Location;
}

const aqiColors = {
  'Good': { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', pill: 'bg-green-500/20 text-green-400 border-green-500/30' },
  'Moderate': { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400', pill: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  'Unhealthy': { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400', pill: 'bg-orange-500/20 text-orange-400 border-orange-500/30' },
  'Hazardous': { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', pill: 'bg-red-500/20 text-red-400 border-red-500/30' },
};

const pollenColors = {
  'Low': { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400' },
  'Moderate': { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400' },
  'High': { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400' },
};

export function EnvironmentStatusCards({ location }: EnvironmentStatusCardsProps) {
  const aqiStyle = aqiColors[location.aqiStatus];
  const pollenStyle = pollenColors[location.pollenLevel];

  return (
    <div className="grid grid-cols-4 gap-6">
      {/* AQI Card */}
      <div className={`relative bg-[#0E1629]/60 backdrop-blur-xl border ${aqiStyle.border} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all group`}>
        <div className={`absolute inset-0 ${aqiStyle.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl ${aqiStyle.bg} border ${aqiStyle.border} flex items-center justify-center`}>
              <Wind className={`w-6 h-6 ${aqiStyle.text}`} />
            </div>
            <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
              <Info className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          
          <div>
            <p className="text-sm text-gray-400 mb-2">Air Quality Index (AQI)</p>
            <div className="flex items-end gap-3 mb-3">
              <span className={`text-5xl ${aqiStyle.text}`}>{location.aqi}</span>
              <span className={`px-3 py-1 rounded-full border text-xs mb-2 ${aqiStyle.pill}`}>
                {location.aqiStatus}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
              <TrendingUp className="w-3 h-3 text-red-400" />
              <span>↑ 8 from yesterday</span>
            </div>
            
            {/* Mini sparkline */}
            <div className="h-8 flex items-end gap-1">
              {[45, 52, 48, 58, 65, 72, 85, 92, 88, 95, 102, 112].map((val, idx) => (
                <div
                  key={idx}
                  className={`flex-1 rounded-t ${aqiStyle.bg} border-t-2 ${aqiStyle.border}`}
                  style={{ height: `${(val / 150) * 100}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Pollen Card */}
      <div className={`relative bg-[#0E1629]/60 backdrop-blur-xl border ${pollenStyle.border} rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all group`}>
        <div className={`absolute inset-0 ${pollenStyle.bg} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className={`w-12 h-12 rounded-xl ${pollenStyle.bg} border ${pollenStyle.border} flex items-center justify-center`}>
              <Leaf className={`w-6 h-6 ${pollenStyle.text}`} />
            </div>
            <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
              <Info className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          
          <div>
            <p className="text-sm text-gray-400 mb-2">Pollen Count</p>
            <div className="mb-3">
              <span className={`text-5xl ${pollenStyle.text}`}>{location.pollenLevel}</span>
              <p className="text-sm text-gray-500 mt-1">8.2/10 index</p>
            </div>
            
            <div className="flex flex-wrap gap-2 mb-3">
              <span className="px-2 py-1 rounded-full bg-pink-500/10 text-pink-300 border border-pink-500/30 text-xs">
                Tree pollen
              </span>
              <span className="px-2 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs">
                Grass pollen
              </span>
            </div>
            
            <div className="text-xs text-gray-500">
              <TrendingUp className="w-3 h-3 inline text-red-400 mr-1" />
              High for 3 days
            </div>
            
            {/* Pollen level bar */}
            <div className="mt-3 h-2 bg-white/5 rounded-full overflow-hidden">
              <div className={`h-full rounded-full ${pollenStyle.bg} border-t ${pollenStyle.border}`} style={{ width: '82%' }} />
            </div>
          </div>
        </div>
      </div>

      {/* Humidity Card */}
      <div className="relative bg-[#0E1629]/60 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all group">
        <div className="absolute inset-0 bg-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
              <Droplets className="w-6 h-6 text-cyan-400" />
            </div>
            <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
              <Info className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          
          <div>
            <p className="text-sm text-gray-400 mb-2">Humidity</p>
            <div className="flex items-center justify-between mb-3">
              <span className="text-5xl text-cyan-400">{location.humidity}%</span>
              
              {/* Circular gauge */}
              <div className="relative w-16 h-16">
                <svg className="transform -rotate-90 w-16 h-16">
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    className="text-white/5"
                  />
                  <circle
                    cx="32"
                    cy="32"
                    r="28"
                    stroke="currentColor"
                    strokeWidth="4"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 28}`}
                    strokeDashoffset={`${2 * Math.PI * 28 * (1 - location.humidity / 100)}`}
                    className="text-cyan-400"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
            </div>
            <p className="text-sm text-cyan-300 mb-2">High humidity</p>
            <p className="text-xs text-gray-500">May affect breathing comfort</p>
          </div>
        </div>
      </div>

      {/* Temperature Card */}
      <div className="relative bg-[#0E1629]/60 backdrop-blur-xl border border-orange-500/30 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all group">
        <div className="absolute inset-0 bg-orange-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <div className="relative">
          <div className="flex items-start justify-between mb-4">
            <div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
              <Thermometer className="w-6 h-6 text-orange-400" />
            </div>
            <button className="p-1 hover:bg-white/10 rounded-lg transition-colors">
              <Info className="w-4 h-4 text-gray-400" />
            </button>
          </div>
          
          <div>
            <p className="text-sm text-gray-400 mb-2">Temperature</p>
            <div className="mb-3">
              <span className="text-5xl text-orange-400">{location.temperature}°C</span>
            </div>
            <p className="text-sm text-gray-400 mb-2">Feels like <span className="text-orange-300">30°C</span></p>
            <div className="flex items-center gap-3 text-xs text-gray-500">
              <div className="flex items-center gap-1">
                <span className="text-cyan-400">↓</span>
                <span>Low 22°</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="text-red-400">↑</span>
                <span>High 32°</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
