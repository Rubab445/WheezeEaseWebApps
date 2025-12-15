import { useState } from 'react';
import { X, TrendingUp, Calendar, Users, Bell } from 'lucide-react';
import { LocationData } from '../../../pages/doctor/EnvironmentDashboardPage';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';

interface LocationDetailModalProps {
  location: LocationData;
  onClose: () => void;
}

type TabType = 'current' | 'forecast' | 'patients' | 'history';

export function LocationDetailModal({ location, onClose }: LocationDetailModalProps) {
  const [activeTab, setActiveTab] = useState<TabType>('current');

  const tabs = [
    { id: 'current' as const, label: 'Current Conditions', icon: TrendingUp },
    { id: 'forecast' as const, label: '7-Day Forecast', icon: Calendar },
    { id: 'patients' as const, label: 'Patient List', icon: Users },
    { id: 'history' as const, label: 'Alert History', icon: Bell },
  ];

  const mockPatients = [
    { id: 1, name: 'Ahmad Hassan', avatar: 'AH', risk: 8.5, triggers: ['Pollen', 'AQI'], alertSent: true, lastLog: '2 hours ago' },
    { id: 2, name: 'Fatima Khan', avatar: 'FK', risk: 7.2, triggers: ['Pollen'], alertSent: true, lastLog: '5 hours ago' },
    { id: 3, name: 'Ali Raza', avatar: 'AR', risk: 6.8, triggers: ['AQI', 'Humidity'], alertSent: false, lastLog: '1 day ago' },
  ];

  const mockAlertHistory = [
    { date: 'Dec 14, 2025 10:30 AM', type: 'High AQI', patients: 18, aqi: 145 },
    { date: 'Dec 13, 2025 3:15 PM', type: 'High Pollen', patients: 15, aqi: 132 },
    { date: 'Dec 12, 2025 9:00 AM', type: 'Combined Risk', patients: 23, aqi: 156 },
  ];

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-[#1F2937]">
              {location.city}, {location.province}
            </h2>
            <p className="text-sm text-[#6B7280] mt-0.5">
              Environmental monitoring and patient impact
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F8F9FA] rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-[#6B7280]" />
          </button>
        </div>

        {/* Tabs */}
        <div className="px-6 border-b border-gray-200">
          <div className="flex gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-4 py-3 font-medium text-sm transition-colors relative ${
                  activeTab === tab.id
                    ? 'text-[#059669]'
                    : 'text-[#6B7280] hover:text-[#1F2937]'
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
                {activeTab === tab.id && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#059669]" />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Tab Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Current Conditions Tab */}
          {activeTab === 'current' && (
            <div className="space-y-6">
              {/* AQI Breakdown */}
              <div>
                <h3 className="font-medium text-[#1F2937] mb-3">Air Quality Index Breakdown</h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: 'PM2.5', value: '45 μg/m³', status: 'Moderate' },
                    { label: 'PM10', value: '78 μg/m³', status: 'Unhealthy' },
                    { label: 'O₃', value: '65 ppb', status: 'Moderate' },
                    { label: 'NO₂', value: '32 ppb', status: 'Good' },
                    { label: 'SO₂', value: '12 ppb', status: 'Good' },
                    { label: 'CO', value: '0.8 ppm', status: 'Good' },
                  ].map((pollutant) => (
                    <div key={pollutant.label} className="bg-[#F8F9FA] rounded-lg p-4">
                      <p className="text-xs text-[#6B7280] mb-1">{pollutant.label}</p>
                      <p className="text-lg font-bold text-[#1F2937] mb-1">{pollutant.value}</p>
                      <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 text-xs">
                        {pollutant.status}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>

              {/* Pollen Details */}
              <div>
                <h3 className="font-medium text-[#1F2937] mb-3">Detailed Pollen Data</h3>
                <div className="bg-[#F8F9FA] rounded-lg p-4">
                  <div className="grid grid-cols-3 gap-4">
                    <div>
                      <p className="text-xs text-[#6B7280] mb-2">Tree Pollen</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                        <div className="bg-red-500 h-2 rounded-full" style={{ width: '80%' }} />
                      </div>
                      <p className="text-sm font-medium text-[#1F2937]">High (8/10)</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6B7280] mb-2">Grass Pollen</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                        <div className="bg-amber-500 h-2 rounded-full" style={{ width: '50%' }} />
                      </div>
                      <p className="text-sm font-medium text-[#1F2937]">Medium (5/10)</p>
                    </div>
                    <div>
                      <p className="text-xs text-[#6B7280] mb-2">Weed Pollen</p>
                      <div className="w-full bg-gray-200 rounded-full h-2 mb-1">
                        <div className="bg-green-500 h-2 rounded-full" style={{ width: '30%' }} />
                      </div>
                      <p className="text-sm font-medium text-[#1F2937]">Low (3/10)</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Health Recommendations */}
              <div>
                <h3 className="font-medium text-[#1F2937] mb-3">Health Recommendations</h3>
                <div className="space-y-2">
                  <div className="flex gap-3 p-3 bg-red-50 rounded-lg border border-red-200">
                    <div className="w-1 bg-red-500 rounded" />
                    <div>
                      <p className="text-sm font-medium text-red-900">Limit Outdoor Activities</p>
                      <p className="text-xs text-red-700 mt-1">
                        High AQI and pollen levels. Sensitive individuals should stay indoors.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-3 p-3 bg-amber-50 rounded-lg border border-amber-200">
                    <div className="w-1 bg-amber-500 rounded" />
                    <div>
                      <p className="text-sm font-medium text-amber-900">Use Preventive Medication</p>
                      <p className="text-xs text-amber-700 mt-1">
                        Patients should use their prescribed inhalers and antihistamines.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Data Source */}
              <p className="text-xs text-[#6B7280] text-center">
                Data from OpenWeather API • Updated 5 minutes ago
              </p>
            </div>
          )}

          {/* 7-Day Forecast Tab */}
          {activeTab === 'forecast' && (
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-[#1F2937] mb-3">AQI Trend - Next 7 Days</h3>
                <div className="bg-[#F8F9FA] rounded-lg p-6 h-64 flex items-center justify-center">
                  <p className="text-sm text-[#6B7280]">Line chart showing AQI forecast</p>
                </div>
              </div>

              <div className="grid grid-cols-7 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
                  <div
                    key={day}
                    className={`p-3 rounded-lg text-center ${
                      idx === 2 || idx === 3 ? 'bg-red-50 border border-red-200' : 'bg-[#F8F9FA]'
                    }`}
                  >
                    <p className="text-xs text-[#6B7280] mb-1">{day}</p>
                    <p className="text-lg font-bold text-[#1F2937] mb-1">
                      {120 + idx * 10}
                    </p>
                    <Badge
                      className={`text-[10px] ${
                        idx === 2 || idx === 3
                          ? 'bg-red-100 text-red-700'
                          : 'bg-amber-100 text-amber-700'
                      } hover:bg-opacity-100`}
                    >
                      {idx === 2 || idx === 3 ? 'High Risk' : 'Moderate'}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Patient List Tab */}
          {activeTab === 'patients' && (
            <div>
              <h3 className="font-medium text-[#1F2937] mb-3">
                All Patients in {location.city}
              </h3>
              <div className="space-y-2">
                {mockPatients.map((patient) => (
                  <div
                    key={patient.id}
                    className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-full flex items-center justify-center text-white font-medium">
                        {patient.avatar}
                      </div>
                      <div>
                        <p className="font-medium text-[#1F2937]">{patient.name}</p>
                        <div className="flex gap-2 mt-1">
                          {patient.triggers.map((trigger) => (
                            <span
                              key={trigger}
                              className="text-xs px-2 py-0.5 bg-white text-[#6B7280] rounded"
                            >
                              {trigger}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <p className="text-xs text-[#6B7280]">Risk Score</p>
                        <p className="text-sm font-bold text-[#1F2937]">{patient.risk}/10</p>
                      </div>
                      <div>
                        {patient.alertSent ? (
                          <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                            Alert sent
                          </Badge>
                        ) : (
                          <Button size="sm" className="bg-[#059669] text-white hover:bg-[#047857]">
                            Send alert
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Alert History Tab */}
          {activeTab === 'history' && (
            <div>
              <h3 className="font-medium text-[#1F2937] mb-3">Alert History for {location.city}</h3>
              <div className="space-y-3">
                {mockAlertHistory.map((alert, idx) => (
                  <div
                    key={idx}
                    className="flex gap-4 p-4 bg-[#F8F9FA] rounded-lg"
                  >
                    <div className="w-2 bg-[#059669] rounded" />
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <p className="font-medium text-[#1F2937]">{alert.type}</p>
                          <p className="text-xs text-[#6B7280] mt-0.5">{alert.date}</p>
                        </div>
                        <Badge className="bg-[#059669]/10 text-[#059669] hover:bg-[#059669]/10">
                          {alert.patients} patients notified
                        </Badge>
                      </div>
                      <p className="text-sm text-[#6B7280]">AQI at time of alert: {alert.aqi}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-end gap-3">
          <Button variant="outline" onClick={onClose}>
            Close
          </Button>
          <Button className="bg-[#059669] text-white hover:bg-[#047857]">
            Send Alert to All Patients
          </Button>
        </div>
      </div>
    </div>
  );
}
