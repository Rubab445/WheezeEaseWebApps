import { MapPin, ZoomIn, ZoomOut } from 'lucide-react';
import { LocationData } from '../../../pages/doctor/EnvironmentDashboardPage';
import { useState } from 'react';

interface EnvironmentMapProps {
  locations: LocationData[];
  onLocationClick: (location: LocationData) => void;
}

export function EnvironmentMap({ locations, onLocationClick }: EnvironmentMapProps) {
  const [hoveredLocation, setHoveredLocation] = useState<string | null>(null);
  const [showHeatmap, setShowHeatmap] = useState(false);

  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return '#22C55E';
    if (aqi <= 100) return '#FCD34D';
    if (aqi <= 150) return '#FB923C';
    if (aqi <= 200) return '#EF4444';
    return '#A855F7';
  };

  const getAQILabel = (aqi: number) => {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive';
    if (aqi <= 200) return 'Unhealthy';
    return 'Very Unhealthy';
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm mb-6 overflow-hidden">
      {/* Map Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
        <h3 className="font-medium text-[#1F2937]">Patient Location Map</h3>
        
        <div className="flex items-center gap-3">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={showHeatmap}
              onChange={(e) => setShowHeatmap(e.target.checked)}
              className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
            />
            <span className="text-sm text-[#6B7280]">Heat map overlay</span>
          </label>

          <div className="flex gap-1">
            <button className="p-2 hover:bg-[#F8F9FA] rounded-lg transition-colors">
              <ZoomIn className="w-4 h-4 text-[#6B7280]" />
            </button>
            <button className="p-2 hover:bg-[#F8F9FA] rounded-lg transition-colors">
              <ZoomOut className="w-4 h-4 text-[#6B7280]" />
            </button>
          </div>
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-[400px] bg-gradient-to-br from-blue-50 to-green-50">
        {/* Simplified map visualization */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <MapPin className="w-16 h-16 text-[#059669] mx-auto mb-3 opacity-20" />
            <p className="text-sm text-[#6B7280]">Interactive map showing {locations.length} patient locations</p>
          </div>
        </div>

        {/* Location Pins (positioned absolutely for demo) */}
        {locations.map((location, idx) => {
          const pinColor = getAQIColor(location.aqi);
          const pinSize = Math.min(40 + (location.patientCount / 2), 60);
          
          // Calculate position based on index for demo purposes
          const positions = [
            { top: '30%', left: '35%' },
            { top: '45%', left: '40%' },
            { top: '25%', left: '60%' },
            { top: '60%', left: '45%' },
            { top: '55%', left: '30%' },
            { top: '70%', left: '55%' },
          ];
          const position = positions[idx] || { top: '50%', left: '50%' };

          return (
            <div
              key={location.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110"
              style={{
                top: position.top,
                left: position.left,
                width: `${pinSize}px`,
                height: `${pinSize}px`,
              }}
              onMouseEnter={() => setHoveredLocation(location.id)}
              onMouseLeave={() => setHoveredLocation(null)}
              onClick={() => onLocationClick(location)}
            >
              <div
                className="w-full h-full rounded-full flex items-center justify-center shadow-lg border-4 border-white"
                style={{ backgroundColor: pinColor }}
              >
                <span className="text-white font-bold text-xs">{location.patientCount}</span>
              </div>

              {/* Tooltip */}
              {hoveredLocation === location.id && (
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white rounded-lg shadow-xl border border-gray-200 p-3 w-64 z-10">
                  <div className="mb-2">
                    <p className="font-medium text-[#1F2937]">{location.city}, {location.province}</p>
                    <p className="text-xs text-[#6B7280]">{location.patientCount} patients</p>
                  </div>
                  <div className="space-y-1 mb-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#6B7280]">AQI:</span>
                      <span className="font-medium" style={{ color: pinColor }}>
                        {location.aqi} - {getAQILabel(location.aqi)}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-[#6B7280]">Pollen:</span>
                      <span className="font-medium text-[#1F2937] capitalize">{location.pollenLevel}</span>
                    </div>
                  </div>
                  <button className="text-xs text-[#059669] hover:text-[#047857] font-medium">
                    View details →
                  </button>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Map Legend */}
      <div className="px-6 py-4 bg-[#F8F9FA] border-t border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div>
              <p className="text-xs font-medium text-[#6B7280] mb-2">AQI Scale</p>
              <div className="flex items-center gap-2">
                {[
                  { label: 'Good', color: '#22C55E', range: '0-50' },
                  { label: 'Moderate', color: '#FCD34D', range: '51-100' },
                  { label: 'Unhealthy', color: '#FB923C', range: '101-150' },
                  { label: 'Very Unhealthy', color: '#EF4444', range: '151-200' },
                  { label: 'Hazardous', color: '#A855F7', range: '201+' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-1.5">
                    <div
                      className="w-3 h-3 rounded-full"
                      style={{ backgroundColor: item.color }}
                    />
                    <span className="text-xs text-[#6B7280]">
                      {item.label} <span className="text-[#9CA3AF]">({item.range})</span>
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-medium text-[#6B7280] mb-2">Pin Size = Patient Count</p>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-full bg-[#059669] flex items-center justify-center text-[8px] text-white font-bold">
                10
              </div>
              <span className="text-xs text-[#6B7280]">Small</span>
              <div className="w-8 h-8 rounded-full bg-[#059669] flex items-center justify-center text-[10px] text-white font-bold">
                30
              </div>
              <span className="text-xs text-[#6B7280]">Large</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
