import { useState } from 'react';
import { ChevronDown, RefreshCw, Settings, Download } from 'lucide-react';
import { EnvironmentStatusCards } from '../components/environment/EnvironmentStatusCards';
import { EnvironmentMap } from '../components/environment/EnvironmentMap';
import { EnvironmentTrendCharts } from '../components/environment/EnvironmentTrendCharts';
import { ThresholdAlertsCard } from '../components/environment/ThresholdAlertsCard';
import { ForecastCard } from '../components/environment/ForecastCard';
import { LocationsTable } from '../components/environment/LocationsTable';
import { ApiStatusCard } from '../components/environment/ApiStatusCard';
import { LocationDetailDrawer } from '../components/environment/LocationDetailDrawer';

export interface Location {
  id: string;
  city: string;
  province: string;
  aqi: number;
  aqiStatus: 'Good' | 'Moderate' | 'Unhealthy' | 'Hazardous';
  pollenLevel: 'Low' | 'Moderate' | 'High';
  humidity: number;
  temperature: number;
  patientsCount: number;
  apiStatus: 'Online' | 'Offline';
  lastUpdated: string;
  isActive?: boolean;
}

const mockLocations: Location[] = [
  {
    id: 'LOC-001',
    city: 'Gujrat',
    province: 'Punjab',
    aqi: 112,
    aqiStatus: 'Unhealthy',
    pollenLevel: 'High',
    humidity: 72,
    temperature: 28,
    patientsCount: 24,
    apiStatus: 'Online',
    lastUpdated: '5 min ago',
    isActive: true
  },
  {
    id: 'LOC-002',
    city: 'Lahore',
    province: 'Punjab',
    aqi: 156,
    aqiStatus: 'Unhealthy',
    pollenLevel: 'Moderate',
    humidity: 68,
    temperature: 30,
    patientsCount: 142,
    apiStatus: 'Online',
    lastUpdated: '5 min ago'
  },
  {
    id: 'LOC-003',
    city: 'Islamabad',
    province: 'ICT',
    aqi: 85,
    aqiStatus: 'Moderate',
    pollenLevel: 'Low',
    humidity: 55,
    temperature: 26,
    patientsCount: 68,
    apiStatus: 'Online',
    lastUpdated: '5 min ago'
  },
  {
    id: 'LOC-004',
    city: 'Karachi',
    province: 'Sindh',
    aqi: 92,
    aqiStatus: 'Moderate',
    pollenLevel: 'Moderate',
    humidity: 78,
    temperature: 32,
    patientsCount: 203,
    apiStatus: 'Online',
    lastUpdated: '6 min ago'
  },
];

export function EnvironmentPage() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleViewLocation = (location: Location) => {
    setSelectedLocation(location);
    setDrawerOpen(true);
  };

  const activeLocation = mockLocations.find(loc => loc.isActive) || mockLocations[0];

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Dashboard</span>
            <span>/</span>
            <span className="text-white">Environment Monitoring</span>
          </div>
          <h1 className="text-3xl text-white">Environment Monitoring</h1>
          <p className="text-gray-400 mt-1">Track air quality, pollen, and weather conditions affecting patients</p>
        </div>

        <div className="flex items-center gap-3">
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all text-sm">
            <span>Gujrat, Punjab</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all text-sm">
            <RefreshCw className="w-4 h-4" />
            <div className="flex flex-col items-start">
              <span className="text-xs text-gray-500">Last updated</span>
              <span className="text-xs text-white">5 min ago</span>
            </div>
          </button>
          <button className="p-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all">
            <Settings className="w-4 h-4" />
          </button>
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all text-sm">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Real-time Status Row */}
      <EnvironmentStatusCards location={activeLocation} />

      {/* Map Section */}
      <div className="mt-6">
        <EnvironmentMap locations={mockLocations} />
      </div>

      {/* Trend Charts Row */}
      <div className="mt-6">
        <EnvironmentTrendCharts />
      </div>

      {/* Threshold Alerts & Forecast Row */}
      <div className="mt-6 grid grid-cols-2 gap-6">
        <ThresholdAlertsCard />
        <ForecastCard />
      </div>

      {/* Locations Table & API Status */}
      <div className="mt-6 grid grid-cols-3 gap-6">
        <div className="col-span-2">
          <LocationsTable 
            locations={mockLocations}
            onViewLocation={handleViewLocation}
          />
        </div>
        <div>
          <ApiStatusCard />
        </div>
      </div>

      {/* Location Detail Drawer */}
      <LocationDetailDrawer
        location={selectedLocation}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </div>
  );
}
