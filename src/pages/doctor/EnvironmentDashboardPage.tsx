import { useState } from 'react';
import { Leaf, RefreshCw, Send, Download, X, AlertTriangle } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { ToggleSwitch } from '../../components/doctor/settings/ToggleSwitch';
import { EnvironmentStats } from '../../components/doctor/environment/EnvironmentStats';
import { EnvironmentMap } from '../../components/doctor/environment/EnvironmentMap';
import { LocationCard } from '../../components/doctor/environment/LocationCard';
import { LocationDetailModal } from '../../components/doctor/environment/LocationDetailModal';
import { AlertPanel } from '../../components/doctor/environment/AlertPanel';
import { EnvironmentAnalytics } from '../../components/doctor/environment/EnvironmentAnalytics';
import { Badge } from '../../components/ui/badge';

export type ViewMode = 'grid' | 'list' | 'map-only';
export type RiskLevel = 'high' | 'medium' | 'low';

export interface LocationData {
  id: string;
  city: string;
  province: string;
  patientCount: number;
  aqi: number;
  aqiTrend: 'up' | 'down';
  aqiChange: number;
  pollenLevel: 'low' | 'medium' | 'high' | 'very-high';
  pollenTypes: {
    tree: 'low' | 'medium' | 'high';
    grass: 'low' | 'medium' | 'high';
    weed: 'low' | 'medium' | 'high';
  };
  temperature: number;
  humidity: number;
  windSpeed: number;
  weather: 'sunny' | 'cloudy' | 'rainy';
  riskLevel: RiskLevel;
  healthRiskScore: number;
  affectedPatients: number;
  patientSensitivity: {
    high: number;
    medium: number;
    low: number;
  };
  lastAlert?: string;
  coordinates: { lat: number; lng: number };
}

const mockLocations: LocationData[] = [
  {
    id: '1',
    city: 'Gujrat',
    province: 'Punjab',
    patientCount: 23,
    aqi: 145,
    aqiTrend: 'up',
    aqiChange: 23,
    pollenLevel: 'high',
    pollenTypes: { tree: 'high', grass: 'medium', weed: 'low' },
    temperature: 32,
    humidity: 68,
    windSpeed: 15,
    weather: 'sunny',
    riskLevel: 'high',
    healthRiskScore: 7.2,
    affectedPatients: 18,
    patientSensitivity: { high: 8, medium: 10, low: 5 },
    lastAlert: '2 hours ago',
    coordinates: { lat: 32.5742, lng: 74.0789 },
  },
  {
    id: '2',
    city: 'Lahore',
    province: 'Punjab',
    patientCount: 45,
    aqi: 178,
    aqiTrend: 'up',
    aqiChange: 35,
    pollenLevel: 'very-high',
    pollenTypes: { tree: 'high', grass: 'high', weed: 'medium' },
    temperature: 34,
    humidity: 72,
    windSpeed: 12,
    weather: 'cloudy',
    riskLevel: 'high',
    healthRiskScore: 8.5,
    affectedPatients: 38,
    patientSensitivity: { high: 15, medium: 20, low: 10 },
    lastAlert: '30 minutes ago',
    coordinates: { lat: 31.5204, lng: 74.3587 },
  },
  {
    id: '3',
    city: 'Islamabad',
    province: 'Capital',
    patientCount: 18,
    aqi: 65,
    aqiTrend: 'down',
    aqiChange: -12,
    pollenLevel: 'medium',
    pollenTypes: { tree: 'medium', grass: 'low', weed: 'low' },
    temperature: 28,
    humidity: 55,
    windSpeed: 20,
    weather: 'sunny',
    riskLevel: 'low',
    healthRiskScore: 3.5,
    affectedPatients: 5,
    patientSensitivity: { high: 2, medium: 8, low: 8 },
    lastAlert: '1 day ago',
    coordinates: { lat: 33.6844, lng: 73.0479 },
  },
  {
    id: '4',
    city: 'Faisalabad',
    province: 'Punjab',
    patientCount: 31,
    aqi: 122,
    aqiTrend: 'up',
    aqiChange: 18,
    pollenLevel: 'high',
    pollenTypes: { tree: 'medium', grass: 'high', weed: 'medium' },
    temperature: 33,
    humidity: 65,
    windSpeed: 14,
    weather: 'sunny',
    riskLevel: 'medium',
    healthRiskScore: 6.1,
    affectedPatients: 19,
    patientSensitivity: { high: 9, medium: 14, low: 8 },
    lastAlert: '4 hours ago',
    coordinates: { lat: 31.4504, lng: 73.1350 },
  },
  {
    id: '5',
    city: 'Multan',
    province: 'Punjab',
    patientCount: 27,
    aqi: 98,
    aqiTrend: 'down',
    aqiChange: -8,
    pollenLevel: 'medium',
    pollenTypes: { tree: 'medium', grass: 'medium', weed: 'low' },
    temperature: 35,
    humidity: 58,
    windSpeed: 16,
    weather: 'sunny',
    riskLevel: 'medium',
    healthRiskScore: 4.8,
    affectedPatients: 12,
    patientSensitivity: { high: 5, medium: 12, low: 10 },
    coordinates: { lat: 30.1575, lng: 71.5249 },
  },
  {
    id: '6',
    city: 'Karachi',
    province: 'Sindh',
    patientCount: 52,
    aqi: 88,
    aqiTrend: 'down',
    aqiChange: -5,
    pollenLevel: 'low',
    pollenTypes: { tree: 'low', grass: 'low', weed: 'low' },
    temperature: 30,
    humidity: 78,
    windSpeed: 25,
    weather: 'cloudy',
    riskLevel: 'low',
    healthRiskScore: 3.2,
    affectedPatients: 8,
    patientSensitivity: { high: 3, medium: 15, low: 34 },
    coordinates: { lat: 24.8607, lng: 67.0011 },
  },
];

export function EnvironmentDashboardPage() {
  const [autoRefresh, setAutoRefresh] = useState(true);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [riskFilter, setRiskFilter] = useState<RiskLevel | 'all'>('all');
  const [showCriticalAlert, setShowCriticalAlert] = useState(true);
  const [selectedLocation, setSelectedLocation] = useState<LocationData | null>(null);
  const [showAlertPanel, setShowAlertPanel] = useState(false);
  const [showAnalytics, setShowAnalytics] = useState(false);

  const filteredLocations = mockLocations.filter((loc) => {
    if (riskFilter === 'all') return true;
    return loc.riskLevel === riskFilter;
  });

  const criticalLocation = mockLocations.find((loc) => loc.aqi >= 151);

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-3">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-[#1F2937] font-medium">Environment</span>
        </div>

        {/* Title and Actions Row */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-lg flex items-center justify-center">
                <Leaf className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-[#1F2937]">Environment Dashboard</h1>
                <p className="text-sm text-[#6B7280] mt-0.5">
                  Real-time environmental monitoring for patient locations
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {/* Last Updated */}
            <div className="flex items-center gap-2 text-sm text-[#6B7280]">
              <RefreshCw className="w-4 h-4" />
              <span>Last updated: 5 min ago</span>
            </div>

            {/* Auto-refresh Toggle */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-[#6B7280]">Auto-refresh</span>
              <ToggleSwitch
                enabled={autoRefresh}
                onChange={setAutoRefresh}
              />
            </div>

            {/* Action Buttons */}
            <Button
              onClick={() => setShowAlertPanel(true)}
              className="bg-gradient-to-r from-[#059669] to-[#10B981] text-white hover:opacity-90"
            >
              <Send className="w-4 h-4 mr-2" />
              Send alerts
            </Button>

            <Button variant="outline" className="border-[#059669] text-[#059669]">
              <Download className="w-4 h-4 mr-2" />
              Download report
            </Button>
          </div>
        </div>
      </div>

      {/* Critical Alert Banner */}
      {showCriticalAlert && criticalLocation && (
        <div className="bg-red-50 border-b border-red-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <AlertTriangle className="w-5 h-5 text-red-600" />
              <div>
                <p className="text-sm font-medium text-red-900">
                  CRITICAL: Poor AQI ({criticalLocation.aqi}) detected in {criticalLocation.city} -{' '}
                  {criticalLocation.affectedPatients} patients affected
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button
                size="sm"
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50"
              >
                View patients
              </Button>
              <Button
                size="sm"
                className="bg-red-600 text-white hover:bg-red-700"
              >
                Send alert
              </Button>
              <button
                onClick={() => setShowCriticalAlert(false)}
                className="p-1 hover:bg-red-100 rounded"
              >
                <X className="w-4 h-4 text-red-600" />
              </button>
            </div>
          </div>
        </div>
      )}

      <div className="px-8 py-6">
        {/* Quick Stats */}
        <EnvironmentStats locations={mockLocations} />

        {/* Interactive Map */}
        <EnvironmentMap
          locations={mockLocations}
          onLocationClick={setSelectedLocation}
        />

        {/* Filter Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium text-[#1F2937]">Risk Level:</span>
              <div className="flex gap-2">
                {(['all', 'high', 'medium', 'low'] as const).map((level) => (
                  <button
                    key={level}
                    onClick={() => setRiskFilter(level)}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                      riskFilter === level
                        ? 'bg-[#059669] text-white'
                        : 'bg-white text-[#6B7280] hover:bg-gray-50 border border-gray-300'
                    }`}
                  >
                    {level.charAt(0).toUpperCase() + level.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={() => setShowAnalytics(!showAnalytics)}
              className="text-sm text-[#059669] hover:text-[#047857] font-medium"
            >
              {showAnalytics ? 'Hide' : 'Show'} analytics
            </button>
            
            <div className="flex gap-2">
              {(['grid', 'list', 'map-only'] as ViewMode[]).map((mode) => (
                <button
                  key={mode}
                  onClick={() => setViewMode(mode)}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    viewMode === mode
                      ? 'bg-[#059669] text-white'
                      : 'bg-white text-[#6B7280] hover:bg-gray-50 border border-gray-300'
                  }`}
                >
                  {mode === 'map-only' ? 'Map' : mode.charAt(0).toUpperCase() + mode.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Analytics Section */}
        {showAnalytics && <EnvironmentAnalytics />}

        {/* Location Cards Grid */}
        {viewMode === 'grid' && (
          <div className="grid grid-cols-3 gap-6">
            {filteredLocations.map((location) => (
              <LocationCard
                key={location.id}
                location={location}
                onViewDetails={() => setSelectedLocation(location)}
                onSendAlert={() => setShowAlertPanel(true)}
              />
            ))}
          </div>
        )}

        {/* Location List View */}
        {viewMode === 'list' && (
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <table className="w-full">
              <thead className="bg-[#F8F9FA] border-b border-gray-200">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase">
                    Location
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase">
                    Patients
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase">
                    AQI
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase">
                    Pollen
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase">
                    Weather
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase">
                    Risk Level
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#6B7280] uppercase">
                    Affected
                  </th>
                  <th className="px-4 py-3 text-right text-xs font-medium text-[#6B7280] uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredLocations.map((location) => (
                  <tr key={location.id} className="hover:bg-[#F8F9FA]">
                    <td className="px-4 py-4">
                      <div>
                        <p className="font-medium text-[#1F2937]">{location.city}</p>
                        <p className="text-xs text-[#6B7280]">{location.province}</p>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <Badge className="bg-[#F8F9FA] text-[#1F2937] hover:bg-[#F8F9FA]">
                        {location.patientCount} patients
                      </Badge>
                    </td>
                    <td className="px-4 py-4">
                      <Badge
                        className={`${
                          location.aqi <= 50
                            ? 'bg-green-100 text-green-700'
                            : location.aqi <= 100
                            ? 'bg-yellow-100 text-yellow-700'
                            : location.aqi <= 150
                            ? 'bg-orange-100 text-orange-700'
                            : 'bg-red-100 text-red-700'
                        } hover:bg-opacity-100`}
                      >
                        {location.aqi}
                      </Badge>
                    </td>
                    <td className="px-4 py-4">
                      <Badge
                        className={`${
                          location.pollenLevel === 'low'
                            ? 'bg-green-100 text-green-700'
                            : location.pollenLevel === 'medium'
                            ? 'bg-yellow-100 text-yellow-700'
                            : 'bg-red-100 text-red-700'
                        } hover:bg-opacity-100 capitalize`}
                      >
                        {location.pollenLevel}
                      </Badge>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-[#1F2937]">
                        {location.temperature}°C • {location.humidity}%
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <Badge
                        className={`${
                          location.riskLevel === 'high'
                            ? 'bg-red-100 text-red-700'
                            : location.riskLevel === 'medium'
                            ? 'bg-amber-100 text-amber-700'
                            : 'bg-green-100 text-green-700'
                        } hover:bg-opacity-100 capitalize`}
                      >
                        {location.riskLevel} Risk
                      </Badge>
                    </td>
                    <td className="px-4 py-4">
                      <span className="text-sm text-[#1F2937]">
                        {location.affectedPatients}/{location.patientCount}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button
                          size="sm"
                          variant="ghost"
                          onClick={() => setSelectedLocation(location)}
                        >
                          Details
                        </Button>
                        <Button
                          size="sm"
                          className="bg-[#059669] text-white hover:bg-[#047857]"
                        >
                          Alert
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {/* Location Detail Modal */}
      {selectedLocation && (
        <LocationDetailModal
          location={selectedLocation}
          onClose={() => setSelectedLocation(null)}
        />
      )}

      {/* Alert Panel */}
      {showAlertPanel && (
        <AlertPanel
          locations={mockLocations}
          onClose={() => setShowAlertPanel(false)}
        />
      )}
    </div>
  );
}
