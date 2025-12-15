import { Cloud, CloudRain, Sun, Wind } from 'lucide-react';

const forecast = [
  {
    date: 'Dec 14',
    day: 'Tomorrow',
    icon: Sun,
    aqi: 95,
    aqiStatus: 'Moderate',
    aqiColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    pollen: 'High',
    pollenColor: 'text-red-400',
    tempLow: 23,
    tempHigh: 31
  },
  {
    date: 'Dec 15',
    day: 'Sun',
    icon: Cloud,
    aqi: 88,
    aqiStatus: 'Moderate',
    aqiColor: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
    pollen: 'Moderate',
    pollenColor: 'text-yellow-400',
    tempLow: 22,
    tempHigh: 29
  },
  {
    date: 'Dec 16',
    day: 'Mon',
    icon: CloudRain,
    aqi: 62,
    aqiStatus: 'Good',
    aqiColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    pollen: 'Low',
    pollenColor: 'text-green-400',
    tempLow: 20,
    tempHigh: 26
  },
  {
    date: 'Dec 17',
    day: 'Tue',
    icon: Sun,
    aqi: 72,
    aqiStatus: 'Good',
    aqiColor: 'bg-green-500/20 text-green-400 border-green-500/30',
    pollen: 'Moderate',
    pollenColor: 'text-yellow-400',
    tempLow: 21,
    tempHigh: 28
  },
  {
    date: 'Dec 18',
    day: 'Wed',
    icon: Wind,
    aqi: 105,
    aqiStatus: 'Unhealthy',
    aqiColor: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
    pollen: 'High',
    pollenColor: 'text-red-400',
    tempLow: 24,
    tempHigh: 32
  },
];

export function ForecastCard() {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg text-white">5-Day Forecast</h3>
          <p className="text-sm text-gray-400 mt-1">Environmental predictions for planning</p>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-3">
        {forecast.map((day, idx) => {
          const Icon = day.icon;
          return (
            <div 
              key={idx}
              className="bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl p-4 transition-all text-center"
            >
              <div className="mb-3">
                <p className="text-xs text-gray-400 mb-1">{day.day}</p>
                <p className="text-sm text-white">{day.date}</p>
              </div>

              <div className="flex justify-center mb-3">
                <Icon className="w-8 h-8 text-cyan-400" />
              </div>

              <div className="space-y-2 mb-3">
                <div>
                  <p className="text-xs text-gray-400 mb-1">AQI</p>
                  <span className={`px-2 py-1 rounded-full border text-xs ${day.aqiColor}`}>
                    {day.aqi}
                  </span>
                </div>

                <div>
                  <p className="text-xs text-gray-400 mb-1">Pollen</p>
                  <span className={`text-xs font-medium ${day.pollenColor}`}>
                    {day.pollen}
                  </span>
                </div>
              </div>

              <div className="pt-3 border-t border-white/10">
                <p className="text-xs text-gray-400">
                  <span className="text-cyan-400">{day.tempLow}°</span>
                  {' / '}
                  <span className="text-orange-400">{day.tempHigh}°</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="mt-4 pt-4 border-t border-white/5">
        <p className="text-xs text-gray-400 flex items-center justify-center gap-2">
          <Cloud className="w-3 h-3" />
          Powered by OpenWeather API
        </p>
      </div>
    </div>
  );
}
