import { useState } from 'react';
import { SettingSection } from './SettingSection';
import { ToggleSwitch } from './ToggleSwitch';
import { Input } from '../../ui/input';

interface EnvironmentAlertsTabProps {
  onChangesMade: () => void;
}

export function EnvironmentAlertsTab({ onChangesMade }: EnvironmentAlertsTabProps) {
  const [aqiThreshold, setAqiThreshold] = useState(100);
  const [autoAlertsEnabled, setAutoAlertsEnabled] = useState(true);

  return (
    <div>
      <SettingSection title="Alert Thresholds" description="Set when to receive environmental alerts">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-3 block">
              AQI threshold
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="300"
                value={aqiThreshold}
                onChange={(e) => {
                  setAqiThreshold(Number(e.target.value));
                  onChangesMade();
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#059669]"
              />
              <div className="flex justify-between items-center">
                <span className="text-sm text-[#6B7280]">Alert when AQI exceeds: <strong className="text-[#1F2937]">{aqiThreshold}</strong></span>
                <span className="text-xs px-2 py-1 bg-orange-100 text-orange-700 rounded">
                  {aqiThreshold <= 50 ? 'Good' : aqiThreshold <= 100 ? 'Moderate' : aqiThreshold <= 150 ? 'Unhealthy for Sensitive' : 'Unhealthy'}
                </span>
              </div>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Pollen level threshold
            </label>
            <select
              defaultValue="High"
              onChange={onChangesMade}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
            >
              <option>Low</option>
              <option>Moderate</option>
              <option>High</option>
              <option>Very High</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Temperature extremes
            </label>
            <div className="grid grid-cols-2 gap-3">
              <div>
                <label className="text-xs text-[#6B7280] mb-1 block">Minimum (°C)</label>
                <Input
                  type="number"
                  defaultValue="0"
                  onChange={onChangesMade}
                  className="w-full"
                />
              </div>
              <div>
                <label className="text-xs text-[#6B7280] mb-1 block">Maximum (°C)</label>
                <Input
                  type="number"
                  defaultValue="40"
                  onChange={onChangesMade}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </SettingSection>

      <SettingSection title="Auto-Alert Settings" description="Automatically notify patients about environmental risks">
        <div className="space-y-4">
          <ToggleSwitch
            enabled={autoAlertsEnabled}
            onChange={(enabled) => {
              setAutoAlertsEnabled(enabled);
              onChangesMade();
            }}
            label="Enable automatic alerts"
            description="Send alerts to patients when thresholds are exceeded"
          />

          {autoAlertsEnabled && (
            <div className="bg-[#F8F9FA] rounded-lg p-4 space-y-4">
              <ToggleSwitch
                enabled={true}
                onChange={onChangesMade}
                label="Alert high-risk patients only"
                description="Send alerts only to patients with matching triggers"
              />

              <div className="flex items-center justify-between pt-2">
                <div className="flex-1">
                  <p className="text-sm font-medium text-[#1F2937]">Send daily environmental summary</p>
                  <p className="text-xs text-[#6B7280] mt-0.5">Daily digest of environmental conditions</p>
                </div>
                <Input
                  type="time"
                  defaultValue="08:00"
                  onChange={onChangesMade}
                  className="w-32"
                />
              </div>

              <div className="pt-4 border-t border-gray-200">
                <label className="text-sm font-medium text-[#1F2937] mb-3 block">
                  Preferred alert method
                </label>
                <div className="space-y-2">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      onChange={onChangesMade}
                      className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                    />
                    <span className="text-sm text-[#6B7280]">Push Notifications</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      defaultChecked
                      onChange={onChangesMade}
                      className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                    />
                    <span className="text-sm text-[#6B7280]">Email</span>
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      onChange={onChangesMade}
                      className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                    />
                    <span className="text-sm text-[#6B7280]">SMS</span>
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>
      </SettingSection>

      <SettingSection title="Patient Filters" description="Customize which patients receive alerts">
        <div className="space-y-4">
          <ToggleSwitch
            enabled={true}
            onChange={onChangesMade}
            label="Alert only patients with matching triggers"
            description="Send alerts based on patient's specific environmental sensitivities"
          />

          <div className="pt-4 border-t border-gray-200">
            <label className="text-sm font-medium text-[#1F2937] mb-3 block">
              Alert triggers
            </label>
            <div className="grid grid-cols-2 gap-2">
              {['Pollen', 'AQI', 'Cold Weather', 'Heat', 'Humidity', 'Dust'].map((trigger) => (
                <label key={trigger} className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    onChange={onChangesMade}
                    className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                  />
                  <span className="text-sm text-[#6B7280]">{trigger}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </SettingSection>
    </div>
  );
}