import { useState } from 'react';
import { X, Send, CheckCircle } from 'lucide-react';
import { LocationData } from '../../../pages/doctor/EnvironmentDashboardPage';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Textarea } from '../../ui/textarea';

interface AlertPanelProps {
  locations: LocationData[];
  onClose: () => void;
}

type AlertType = 'aqi' | 'pollen' | 'combined' | 'custom';

export function AlertPanel({ locations, onClose }: AlertPanelProps) {
  const [step, setStep] = useState(1);
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);
  const [alertType, setAlertType] = useState<AlertType>('combined');
  const [message, setMessage] = useState(
    '⚠️ Environmental Alert: Poor air quality detected in your area. Limit outdoor activities and use preventive medication. Stay safe!'
  );
  const [recipientFilter, setRecipientFilter] = useState<'all' | 'high-risk' | 'custom'>('high-risk');
  const [deliveryMethods, setDeliveryMethods] = useState({
    push: true,
    sms: false,
    email: true,
    inApp: true,
  });

  const highRiskLocations = locations.filter((loc) => loc.riskLevel === 'high');

  const toggleLocation = (id: string) => {
    setSelectedLocations((prev) =>
      prev.includes(id) ? prev.filter((l) => l !== id) : [...prev, id]
    );
  };

  const selectAllHighRisk = () => {
    setSelectedLocations(highRiskLocations.map((loc) => loc.id));
  };

  const affectedPatientCount = locations
    .filter((loc) => selectedLocations.includes(loc.id))
    .reduce((sum, loc) => sum + (recipientFilter === 'high-risk' ? loc.patientSensitivity.high : loc.patientCount), 0);

  return (
    <div className="fixed inset-0 bg-black/50 flex items-end justify-end z-50">
      <div className="bg-white h-full w-[480px] shadow-2xl flex flex-col animate-in slide-in-from-right">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="font-bold text-[#1F2937]">Send Environmental Alert</h2>
            <p className="text-xs text-[#6B7280] mt-0.5">
              Step {step} of 5
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-[#F8F9FA] rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-[#6B7280]" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-3 border-b border-gray-200">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-[#059669] h-2 rounded-full transition-all"
              style={{ width: `${(step / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Step 1: Select Locations */}
          {step === 1 && (
            <div>
              <h3 className="font-medium text-[#1F2937] mb-3">Select Locations</h3>
              <Button
                size="sm"
                variant="outline"
                onClick={selectAllHighRisk}
                className="mb-4 border-[#059669] text-[#059669]"
              >
                Select all high-risk areas ({highRiskLocations.length})
              </Button>

              <div className="space-y-2">
                {locations.map((location) => (
                  <label
                    key={location.id}
                    className={`flex items-center justify-between p-3 border rounded-lg cursor-pointer transition-colors ${
                      selectedLocations.includes(location.id)
                        ? 'border-[#059669] bg-[#059669]/5'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={selectedLocations.includes(location.id)}
                        onChange={() => toggleLocation(location.id)}
                        className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                      />
                      <div>
                        <p className="font-medium text-[#1F2937]">{location.city}</p>
                        <p className="text-xs text-[#6B7280]">
                          AQI: {location.aqi} • {location.patientCount} patients
                        </p>
                      </div>
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
                      {location.riskLevel}
                    </Badge>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Alert Type */}
          {step === 2 && (
            <div>
              <h3 className="font-medium text-[#1F2937] mb-4">Alert Type</h3>
              <div className="space-y-2">
                {[
                  { id: 'aqi' as const, label: 'High AQI Warning', desc: 'Alert about poor air quality' },
                  { id: 'pollen' as const, label: 'High Pollen Alert', desc: 'Alert about elevated pollen levels' },
                  { id: 'combined' as const, label: 'Combined Risk Alert', desc: 'Alert about multiple environmental factors' },
                  { id: 'custom' as const, label: 'Custom Message', desc: 'Write your own alert message' },
                ].map((type) => (
                  <label
                    key={type.id}
                    className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                      alertType === type.id
                        ? 'border-[#059669] bg-[#059669]/5'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="alertType"
                      checked={alertType === type.id}
                      onChange={() => setAlertType(type.id)}
                      className="mt-0.5 w-4 h-4 text-[#059669] focus:ring-[#059669]"
                    />
                    <div>
                      <p className="font-medium text-[#1F2937]">{type.label}</p>
                      <p className="text-xs text-[#6B7280] mt-0.5">{type.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 3: Alert Message */}
          {step === 3 && (
            <div>
              <h3 className="font-medium text-[#1F2937] mb-4">Alert Message</h3>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                className="w-full resize-none mb-2"
              />
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs text-[#6B7280]">{message.length} characters</span>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                  />
                  <span className="text-sm text-[#6B7280]">Add personalized recommendations</span>
                </label>
              </div>
            </div>
          )}

          {/* Step 4: Recipients */}
          {step === 4 && (
            <div>
              <h3 className="font-medium text-[#1F2937] mb-4">Recipients</h3>
              <div className="space-y-2">
                {[
                  { id: 'all' as const, label: 'All patients in affected areas', desc: `${affectedPatientCount} patients` },
                  { id: 'high-risk' as const, label: 'High-risk patients only', desc: 'Patients with high environmental sensitivity' },
                  { id: 'custom' as const, label: 'Custom selection', desc: 'Choose specific patients' },
                ].map((option) => (
                  <label
                    key={option.id}
                    className={`flex items-start gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
                      recipientFilter === option.id
                        ? 'border-[#059669] bg-[#059669]/5'
                        : 'border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    <input
                      type="radio"
                      name="recipients"
                      checked={recipientFilter === option.id}
                      onChange={() => setRecipientFilter(option.id)}
                      className="mt-0.5 w-4 h-4 text-[#059669] focus:ring-[#059669]"
                    />
                    <div>
                      <p className="font-medium text-[#1F2937]">{option.label}</p>
                      <p className="text-xs text-[#6B7280] mt-0.5">{option.desc}</p>
                    </div>
                  </label>
                ))}
              </div>
            </div>
          )}

          {/* Step 5: Delivery */}
          {step === 5 && (
            <div>
              <h3 className="font-medium text-[#1F2937] mb-4">Delivery Method</h3>
              
              <div className="space-y-3 mb-6">
                {[
                  { id: 'push', label: 'Push Notification', desc: 'Instant mobile notification' },
                  { id: 'sms', label: 'SMS', desc: 'Text message (charges may apply)' },
                  { id: 'email', label: 'Email', desc: 'Detailed email with recommendations' },
                  { id: 'inApp', label: 'In-App Notification', desc: 'Notification within the patient app' },
                ].map((method) => (
                  <label
                    key={method.id}
                    className="flex items-center justify-between p-3 border border-gray-300 rounded-lg cursor-pointer hover:border-gray-400"
                  >
                    <div className="flex items-center gap-3">
                      <input
                        type="checkbox"
                        checked={deliveryMethods[method.id as keyof typeof deliveryMethods]}
                        onChange={(e) =>
                          setDeliveryMethods((prev) => ({
                            ...prev,
                            [method.id]: e.target.checked,
                          }))
                        }
                        className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                      />
                      <div>
                        <p className="font-medium text-[#1F2937]">{method.label}</p>
                        <p className="text-xs text-[#6B7280]">{method.desc}</p>
                      </div>
                    </div>
                  </label>
                ))}
              </div>

              {/* Summary */}
              <div className="bg-[#F8F9FA] rounded-lg p-4 space-y-2">
                <h4 className="font-medium text-[#1F2937] mb-2">Alert Summary</h4>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6B7280]">Locations:</span>
                  <span className="font-medium text-[#1F2937]">{selectedLocations.length}</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6B7280]">Recipients:</span>
                  <span className="font-medium text-[#1F2937]">{affectedPatientCount} patients</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[#6B7280]">Delivery:</span>
                  <span className="font-medium text-[#1F2937]">
                    {Object.values(deliveryMethods).filter(Boolean).length} methods
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={() => (step > 1 ? setStep(step - 1) : onClose())}
          >
            {step > 1 ? 'Back' : 'Cancel'}
          </Button>
          
          {step < 5 ? (
            <Button
              onClick={() => setStep(step + 1)}
              disabled={step === 1 && selectedLocations.length === 0}
              className="bg-[#059669] text-white hover:bg-[#047857]"
            >
              Continue
            </Button>
          ) : (
            <Button className="bg-[#059669] text-white hover:bg-[#047857]">
              <Send className="w-4 h-4 mr-2" />
              Send Alert
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
