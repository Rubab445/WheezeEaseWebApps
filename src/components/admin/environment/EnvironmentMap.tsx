import { MapPin, Plus, ZoomIn, ZoomOut, Layers } from 'lucide-react';
import { Location } from '../../pages/EnvironmentPage';
import { useState } from 'react';

interface EnvironmentMapProps {
  locations: Location[];
}

const aqiColors = {
  'Good': '#10B981',
  'Moderate': '#F59E0B',
  'Unhealthy': '#F97316',
  'Hazardous': '#EF4444',
};

export function EnvironmentMap({ locations }: EnvironmentMapProps) {
  const [activeLayer, setActiveLayer] = useState<'AQI' | 'Pollen' | 'Humidity' | 'Temperature'>('AQI');
  const [hoveredLocation, setHoveredLocation] = useState<Location | null>(null);

  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg text-white">Regional Air Quality Map</h3>
          <p className="text-sm text-gray-400 mt-1">Real-time environmental monitoring across Pakistan</p>
        </div>
        
        {/* Layer toggles */}
        <div className="flex items-center gap-2">
          <Layers className="w-4 h-4 text-gray-400" />
          {(['AQI', 'Pollen', 'Humidity', 'Temperature'] as const).map((layer) => (
            <button
              key={layer}
              onClick={() => setActiveLayer(layer)}
              className={`px-3 py-1.5 rounded-lg text-xs transition-all ${
                activeLayer === layer
                  ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                  : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10'
              }`}
            >
              {layer}
            </button>
          ))}
        </div>
      </div>

      {/* Map Container */}
      <div className="relative h-96 bg-[#0A0F1E] rounded-xl border border-white/10 overflow-hidden">
        {/* Simplified map background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0A0F1E] via-[#0E1629] to-[#0A0F1E]">
          {/* Grid overlay */}
          <svg className="w-full h-full opacity-10">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        {/* Location pins */}
        <div className="absolute inset-0">
          {/* Gujrat - top right */}
          <LocationPin 
            location={locations[0]} 
            style={{ top: '35%', right: '30%' }}
            onHover={setHoveredLocation}
            hoveredLocation={hoveredLocation}
          />
          
          {/* Lahore - top center */}
          <LocationPin 
            location={locations[1]} 
            style={{ top: '30%', right: '40%' }}
            onHover={setHoveredLocation}
            hoveredLocation={hoveredLocation}
          />
          
          {/* Islamabad - top left */}
          <LocationPin 
            location={locations[2]} 
            style={{ top: '25%', left: '35%' }}
            onHover={setHoveredLocation}
            hoveredLocation={hoveredLocation}
          />
          
          {/* Karachi - bottom center */}
          <LocationPin 
            location={locations[3]} 
            style={{ bottom: '20%', left: '45%' }}
            onHover={setHoveredLocation}
            hoveredLocation={hoveredLocation}
          />
        </div>

        {/* Controls */}
        <div className="absolute bottom-4 right-4 flex flex-col gap-2">
          <button className="w-10 h-10 bg-[#0E1629]/80 backdrop-blur-xl border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
            <ZoomIn className="w-4 h-4 text-gray-300" />
          </button>
          <button className="w-10 h-10 bg-[#0E1629]/80 backdrop-blur-xl border border-white/10 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all">
            <ZoomOut className="w-4 h-4 text-gray-300" />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 bg-[#0E1629]/80 backdrop-blur-xl border border-white/10 rounded-xl p-3">
          <p className="text-xs text-gray-400 mb-2">AQI Scale</p>
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green-500" />
              <span className="text-xs text-gray-300">0-50 Good</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <span className="text-xs text-gray-300">51-100 Moderate</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-orange-500" />
              <span className="text-xs text-gray-300">101-150 Unhealthy</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <span className="text-xs text-gray-300">151+ Hazardous</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom controls */}
      <div className="flex items-center justify-between mt-4">
        <p className="text-xs text-gray-500">Showing {locations.length} monitored locations</p>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-all text-sm">
          <Plus className="w-4 h-4" />
          Add location
        </button>
      </div>
    </div>
  );
}

interface LocationPinProps {
  location: Location;
  style: React.CSSProperties;
  onHover: (location: Location | null) => void;
  hoveredLocation: Location | null;
}

function LocationPin({ location, style, onHover, hoveredLocation }: LocationPinProps) {
  const isHovered = hoveredLocation?.id === location.id;
  const color = aqiColors[location.aqiStatus];
  
  return (
    <div 
      className="absolute transform -translate-x-1/2 -translate-y-1/2"
      style={style}
      onMouseEnter={() => onHover(location)}
      onMouseLeave={() => onHover(null)}
    >
      {/* Glow effect for active location */}
      {location.isActive && (
        <div className="absolute inset-0 w-8 h-8 -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          <div className="absolute inset-0 bg-purple-500/30 rounded-full animate-ping" />
          <div className="absolute inset-0 bg-purple-500/20 rounded-full" />
        </div>
      )}
      
      {/* Pin */}
      <div className={`relative cursor-pointer transition-transform ${isHovered ? 'scale-125' : ''}`}>
        <MapPin 
          className="w-8 h-8 drop-shadow-lg" 
          fill={color}
          color={color}
        />
        {location.isActive && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-white" />
          </div>
        )}
      </div>

      {/* Tooltip */}
      {isHovered && (
        <div className="absolute left-1/2 -translate-x-1/2 bottom-full mb-2 w-48 bg-[#0E1629] border border-white/20 rounded-xl p-3 shadow-2xl z-10">
          <div className="text-white font-medium mb-2">{location.city}, {location.province}</div>
          <div className="space-y-1 text-xs">
            <div className="flex justify-between">
              <span className="text-gray-400">AQI:</span>
              <span style={{ color }}>{location.aqi} ({location.aqiStatus})</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Pollen:</span>
              <span className="text-white">{location.pollenLevel}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Humidity:</span>
              <span className="text-white">{location.humidity}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-400">Temp:</span>
              <span className="text-white">{location.temperature}°C</span>
            </div>
          </div>
          {/* Arrow */}
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-l-8 border-r-8 border-t-8 border-transparent border-t-white/20" />
        </div>
      )}
    </div>
  );
}
