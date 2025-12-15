import { TrendingUp, TrendingDown, Thermometer, Droplet, Wind, Leaf, Send, Users, ArrowRight } from 'lucide-react';
import { LocationData } from '../../../pages/doctor/EnvironmentDashboardPage';
import { Badge } from '../../ui/badge';
import { Button } from '../../ui/button';

interface LocationCardProps {
  location: LocationData;
  onViewDetails: () => void;
  onSendAlert: () => void;
}

export function LocationCard({ location, onViewDetails, onSendAlert }: LocationCardProps) {
  const getAQIColor = (aqi: number) => {
    if (aqi <= 50) return { bg: 'bg-green-100', text: 'text-green-700', border: 'border-green-500' };
    if (aqi <= 100) return { bg: 'bg-yellow-100', text: 'text-yellow-700', border: 'border-yellow-500' };
    if (aqi <= 150) return { bg: 'bg-orange-100', text: 'text-orange-700', border: 'border-orange-500' };
    if (aqi <= 200) return { bg: 'bg-red-100', text: 'text-red-700', border: 'border-red-500' };
    return { bg: 'bg-purple-100', text: 'text-purple-700', border: 'border-purple-500' };
  };

  const getAQIStatus = (aqi: number) => {
    if (aqi <= 50) return 'Good';
    if (aqi <= 100) return 'Moderate';
    if (aqi <= 150) return 'Unhealthy for Sensitive Groups';
    if (aqi <= 200) return 'Unhealthy';
    return 'Very Unhealthy';
  };

  const getPollenColor = (level: string) => {
    if (level === 'low') return 'bg-green-100 text-green-700';
    if (level === 'medium') return 'bg-yellow-100 text-yellow-700';
    return 'bg-red-100 text-red-700';
  };

  const getRiskBorderColor = (risk: string) => {
    if (risk === 'high') return 'border-l-red-500';
    if (risk === 'medium') return 'border-l-amber-500';
    return 'border-l-green-500';
  };

  const aqiColors = getAQIColor(location.aqi);

  return (
    <div className={`bg-white rounded-xl border border-gray-200 shadow-sm border-l-4 ${getRiskBorderColor(location.riskLevel)} hover:shadow-md transition-all`}>
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200">
        <div className="flex items-start justify-between mb-2">
          <div>
            <h3 className="font-bold text-[#1F2937] mb-1">
              {location.city}, {location.province}
            </h3>
            <Badge className="bg-[#F8F9FA] text-[#1F2937] hover:bg-[#F8F9FA]">
              <Users className="w-3 h-3 mr-1" />
              {location.patientCount} patients
            </Badge>
          </div>
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
        </div>
      </div>

      {/* Environmental Metrics */}
      <div className="p-5 space-y-3">
        {/* AQI */}
        <div className={`${aqiColors.bg} rounded-lg p-3`}>
          <div className="flex items-start justify-between mb-1">
            <span className="text-xs font-medium text-[#6B7280]">Air Quality Index</span>
            <div className="flex items-center gap-1">
              {location.aqiTrend === 'up' ? (
                <TrendingUp className="w-3 h-3 text-red-500" />
              ) : (
                <TrendingDown className="w-3 h-3 text-green-500" />
              )}
              <span className="text-xs text-[#6B7280]">
                {location.aqiTrend === 'up' ? '+' : ''}{location.aqiChange}
              </span>
            </div>
          </div>
          <div className="flex items-end justify-between">
            <div>
              <span className={`text-2xl font-bold ${aqiColors.text}`}>{location.aqi}</span>
            </div>
            <span className={`text-xs font-medium ${aqiColors.text}`}>
              {getAQIStatus(location.aqi)}
            </span>
          </div>
          <p className="text-xs text-[#6B7280] mt-1">vs yesterday: {location.aqiTrend === 'up' ? '+' : ''}{location.aqiChange}</p>
        </div>

        {/* Pollen Count */}
        <div className="bg-[#F8F9FA] rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Leaf className="w-4 h-4 text-[#6B7280]" />
              <span className="text-xs font-medium text-[#6B7280]">Pollen Count</span>
            </div>
            <Badge className={`${getPollenColor(location.pollenLevel)} hover:bg-opacity-100 capitalize text-xs`}>
              {location.pollenLevel}
            </Badge>
          </div>
          <div className="flex flex-wrap gap-1.5">
            <span className={`text-[10px] px-2 py-0.5 rounded ${getPollenColor(location.pollenTypes.tree)}`}>
              Tree: {location.pollenTypes.tree}
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded ${getPollenColor(location.pollenTypes.grass)}`}>
              Grass: {location.pollenTypes.grass}
            </span>
            <span className={`text-[10px] px-2 py-0.5 rounded ${getPollenColor(location.pollenTypes.weed)}`}>
              Weed: {location.pollenTypes.weed}
            </span>
          </div>
        </div>

        {/* Weather Conditions */}
        <div className="grid grid-cols-3 gap-2">
          <div className="bg-[#F8F9FA] rounded-lg p-2 text-center">
            <Thermometer className="w-4 h-4 text-[#6B7280] mx-auto mb-1" />
            <p className="text-xs font-medium text-[#1F2937]">{location.temperature}°C</p>
          </div>
          <div className="bg-[#F8F9FA] rounded-lg p-2 text-center">
            <Droplet className="w-4 h-4 text-[#6B7280] mx-auto mb-1" />
            <p className="text-xs font-medium text-[#1F2937]">{location.humidity}%</p>
          </div>
          <div className="bg-[#F8F9FA] rounded-lg p-2 text-center">
            <Wind className="w-4 h-4 text-[#6B7280] mx-auto mb-1" />
            <p className="text-xs font-medium text-[#1F2937]">{location.windSpeed} km/h</p>
          </div>
        </div>

        {/* Health Risk Index */}
        <div className="bg-[#F8F9FA] rounded-lg p-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#6B7280]">Health Risk Index</span>
            <span className="text-lg font-bold text-[#1F2937]">{location.healthRiskScore}/10</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
            <div
              className={`h-2 rounded-full ${
                location.healthRiskScore >= 7
                  ? 'bg-red-500'
                  : location.healthRiskScore >= 5
                  ? 'bg-amber-500'
                  : 'bg-green-500'
              }`}
              style={{ width: `${(location.healthRiskScore / 10) * 100}%` }}
            />
          </div>
          <p className="text-xs text-[#6B7280]">
            {location.healthRiskScore >= 7
              ? 'High risk for asthma patients'
              : location.healthRiskScore >= 5
              ? 'Moderate risk for sensitive individuals'
              : 'Low risk for most patients'}
          </p>
        </div>
      </div>

      {/* Patient Impact */}
      <div className="px-5 pb-4 pt-2 border-t border-gray-200">
        <div className="mb-3">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-[#6B7280]">Affected Patients</span>
            <span className="text-xs font-medium text-[#1F2937]">
              {location.affectedPatients}/{location.patientCount}
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#059669] h-2 rounded-full"
              style={{ width: `${(location.affectedPatients / location.patientCount) * 100}%` }}
            />
          </div>
        </div>

        <div className="flex items-center gap-3 text-xs mb-3">
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-red-500 rounded-full" />
            <span className="text-[#6B7280]">High: {location.patientSensitivity.high}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-amber-500 rounded-full" />
            <span className="text-[#6B7280]">Med: {location.patientSensitivity.medium}</span>
          </div>
          <div className="flex items-center gap-1">
            <div className="w-2 h-2 bg-green-500 rounded-full" />
            <span className="text-[#6B7280]">Low: {location.patientSensitivity.low}</span>
          </div>
        </div>

        {/* Forecast Preview */}
        <div className="bg-[#F8F9FA] rounded-lg p-2 mb-3">
          <p className="text-xs font-medium text-[#6B7280] mb-2">Next 24 hours</p>
          <div className="flex gap-2">
            {['3h', '6h', '12h', '24h'].map((time, idx) => (
              <div
                key={time}
                className={`flex-1 text-center py-1 rounded text-[10px] ${
                  idx === 2 ? 'bg-red-100 text-red-700' : 'bg-white text-[#6B7280]'
                }`}
              >
                {time}
              </div>
            ))}
          </div>
          <button className="text-xs text-[#059669] hover:text-[#047857] mt-2 font-medium w-full text-center">
            View 7-day forecast →
          </button>
        </div>
      </div>

      {/* Footer Actions */}
      <div className="px-5 py-3 bg-[#F8F9FA] border-t border-gray-200 flex items-center justify-between">
        <Button
          size="sm"
          variant="outline"
          onClick={onViewDetails}
          className="border-[#059669] text-[#059669] hover:bg-[#059669]/5"
        >
          View patients
        </Button>
        <Button
          size="sm"
          onClick={onSendAlert}
          className={`${
            location.riskLevel === 'high'
              ? 'bg-[#059669] text-white hover:bg-[#047857]'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={location.riskLevel === 'low'}
        >
          <Send className="w-3 h-3 mr-1" />
          Send alert
        </Button>
        <button
          onClick={onViewDetails}
          className="text-xs text-[#6B7280] hover:text-[#059669] flex items-center gap-1"
        >
          Details
          <ArrowRight className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
}
