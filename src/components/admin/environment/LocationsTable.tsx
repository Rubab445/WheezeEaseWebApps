import { Eye, Trash2, Plus } from 'lucide-react';
import { Location } from '../../pages/EnvironmentPage';

interface LocationsTableProps {
  locations: Location[];
  onViewLocation: (location: Location) => void;
}

const aqiColors = {
  'Good': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Moderate': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Unhealthy': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Hazardous': 'bg-red-500/20 text-red-400 border-red-500/30',
};

const pollenColors = {
  'Low': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Moderate': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'High': 'bg-red-500/20 text-red-400 border-red-500/30',
};

export function LocationsTable({ locations, onViewLocation }: LocationsTableProps) {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden">
      <div className="p-6 border-b border-white/5">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl text-white">Monitored Locations</h2>
            <p className="text-sm text-gray-400 mt-1">Real-time environmental data across regions</p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-all text-sm">
            <Plus className="w-4 h-4" />
            Add Location
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-6 text-sm text-gray-400">Location</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Current AQI</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Pollen Level</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Humidity</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Temperature</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Patients</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Status</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Last Updated</th>
              <th className="text-right py-4 px-6 text-sm text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {locations.map((location) => (
              <tr
                key={location.id}
                className={`border-b border-white/5 hover:bg-purple-500/5 hover:shadow-lg hover:shadow-purple-500/10 transition-all group ${
                  location.isActive ? 'bg-purple-500/5' : ''
                }`}
              >
                <td className="py-4 px-6">
                  <div>
                    <p className="text-sm text-white font-medium">{location.city}</p>
                    <p className="text-xs text-gray-500">{location.province}, Pakistan</p>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <span className={`px-3 py-1 rounded-full border text-xs ${aqiColors[location.aqiStatus]}`}>
                      {location.aqi}
                    </span>
                    <span className="text-xs text-gray-500">{location.aqiStatus}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full border text-xs ${pollenColors[location.pollenLevel]}`}>
                    {location.pollenLevel}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="flex-1 max-w-[60px] h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-500"
                        style={{ width: `${location.humidity}%` }}
                      />
                    </div>
                    <span className="text-sm text-white">{location.humidity}%</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-white">{location.temperature}°C</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500" />
                    <span className="text-sm text-white">{location.patientsCount}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      location.apiStatus === 'Online' ? 'bg-green-500 animate-pulse' : 'bg-red-500'
                    }`} />
                    <span className={`text-xs ${
                      location.apiStatus === 'Online' ? 'text-green-400' : 'text-red-400'
                    }`}>
                      {location.apiStatus}
                    </span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="text-xs text-gray-500">{location.lastUpdated}</span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onViewLocation(location)}
                      className="p-2 hover:bg-cyan-500/20 rounded-lg transition-colors"
                      title="View details"
                    >
                      <Eye className="w-4 h-4 text-cyan-400" />
                    </button>
                    <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors" title="Remove">
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
