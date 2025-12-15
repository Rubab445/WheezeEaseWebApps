import { useState } from 'react';
import { SettingSection } from './SettingSection';
import { ToggleSwitch } from './ToggleSwitch';

interface DashboardPreferencesTabProps {
  onChangesMade: () => void;
}

export function DashboardPreferencesTab({ onChangesMade }: DashboardPreferencesTabProps) {
  const [fontSize, setFontSize] = useState(50);
  const [accentColor, setAccentColor] = useState('#059669');

  return (
    <div>
      {/* Dashboard Layout */}
      <SettingSection title="Dashboard Layout" description="Customize your dashboard view">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Default view on login
            </label>
            <select
              defaultValue="Dashboard Overview"
              onChange={onChangesMade}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
            >
              <option>Dashboard Overview</option>
              <option>My Patients</option>
              <option>Today's Appointments</option>
              <option>Symptom Logs</option>
              <option>AI Recommendations</option>
            </select>
          </div>

          <div className="space-y-2 pt-4 border-t border-gray-200">
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Show quick stats"
              description="Display patient count, appointments, and alerts"
            />
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Show today's schedule"
              description="View upcoming appointments on dashboard"
            />
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Show recent activity"
              description="Display recent patient interactions"
            />
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Show AI recommendations"
              description="Display high-priority AI insights"
            />
          </div>
        </div>
      </SettingSection>

      {/* Data Display */}
      <SettingSection title="Data Display" description="Configure how dates, times, and measurements are displayed">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Date format
              </label>
              <select
                defaultValue="DD/MM/YYYY"
                onChange={onChangesMade}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>DD/MM/YYYY</option>
                <option>MM/DD/YYYY</option>
                <option>YYYY-MM-DD</option>
                <option>DD-MMM-YYYY</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Temperature unit
              </label>
              <select
                defaultValue="Celsius (°C)"
                onChange={onChangesMade}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>Celsius (°C)</option>
                <option>Fahrenheit (°F)</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-3 block">
                Time format
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="timeFormat"
                    defaultChecked
                    onChange={onChangesMade}
                    className="w-4 h-4 text-[#059669] focus:ring-[#059669]"
                  />
                  <span className="text-sm text-[#6B7280]">12-hour (2:30 PM)</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="timeFormat"
                    onChange={onChangesMade}
                    className="w-4 h-4 text-[#059669] focus:ring-[#059669]"
                  />
                  <span className="text-sm text-[#6B7280]">24-hour (14:30)</span>
                </label>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-3 block">
                Measurement system
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="measurement"
                    defaultChecked
                    onChange={onChangesMade}
                    className="w-4 h-4 text-[#059669] focus:ring-[#059669]"
                  />
                  <span className="text-sm text-[#6B7280]">Metric</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="measurement"
                    onChange={onChangesMade}
                    className="w-4 h-4 text-[#059669] focus:ring-[#059669]"
                  />
                  <span className="text-sm text-[#6B7280]">Imperial</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </SettingSection>

      {/* Theme Preferences */}
      <SettingSection title="Theme Preferences" description="Personalize the appearance of your portal">
        <div className="space-y-6">
          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-3 block">
              Theme
            </label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={onChangesMade}
                className="p-4 border-2 border-[#059669] bg-white rounded-lg hover:bg-[#F8F9FA] transition-colors"
              >
                <div className="w-full h-16 bg-white border border-gray-300 rounded mb-2"></div>
                <p className="text-sm font-medium text-[#1F2937]">Light</p>
              </button>
              <button
                onClick={onChangesMade}
                className="p-4 border-2 border-gray-300 bg-white rounded-lg hover:bg-[#F8F9FA] transition-colors"
              >
                <div className="w-full h-16 bg-gray-900 rounded mb-2"></div>
                <p className="text-sm font-medium text-[#6B7280]">Dark</p>
              </button>
              <button
                onClick={onChangesMade}
                className="p-4 border-2 border-gray-300 bg-white rounded-lg hover:bg-[#F8F9FA] transition-colors"
              >
                <div className="w-full h-16 bg-gradient-to-r from-white to-gray-900 rounded mb-2"></div>
                <p className="text-sm font-medium text-[#6B7280]">Auto</p>
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Accent color
            </label>
            <div className="flex items-center gap-3">
              <input
                type="color"
                value={accentColor}
                onChange={(e) => {
                  setAccentColor(e.target.value);
                  onChangesMade();
                }}
                className="w-16 h-10 rounded-lg border border-gray-300 cursor-pointer"
              />
              <input
                type="text"
                value={accentColor}
                onChange={(e) => {
                  setAccentColor(e.target.value);
                  onChangesMade();
                }}
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              />
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-3 block">
              Font size
            </label>
            <div className="space-y-2">
              <input
                type="range"
                min="0"
                max="100"
                value={fontSize}
                onChange={(e) => {
                  setFontSize(Number(e.target.value));
                  onChangesMade();
                }}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#059669]"
              />
              <div className="flex justify-between text-xs text-[#6B7280]">
                <span>Small</span>
                <span>Medium</span>
                <span>Large</span>
              </div>
            </div>
          </div>

          <ToggleSwitch
            enabled={false}
            onChange={onChangesMade}
            label="High contrast mode"
            description="Increase contrast for better visibility (Accessibility)"
          />
        </div>
      </SettingSection>

      {/* Table & List Preferences */}
      <SettingSection title="Table & List Preferences" description="Configure how data tables are displayed">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Default rows per page
            </label>
            <select
              defaultValue="20 rows"
              onChange={onChangesMade}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
            >
              <option>20 rows</option>
              <option>50 rows</option>
              <option>100 rows</option>
            </select>
          </div>

          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-3 block">
              Table density
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="density"
                  defaultChecked
                  onChange={onChangesMade}
                  className="w-4 h-4 text-[#059669] focus:ring-[#059669]"
                />
                <span className="text-sm text-[#6B7280]">Comfortable</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="density"
                  onChange={onChangesMade}
                  className="w-4 h-4 text-[#059669] focus:ring-[#059669]"
                />
                <span className="text-sm text-[#6B7280]">Compact</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="density"
                  onChange={onChangesMade}
                  className="w-4 h-4 text-[#059669] focus:ring-[#059669]"
                />
                <span className="text-sm text-[#6B7280]">Spacious</span>
              </label>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <ToggleSwitch
                  enabled={true}
                  onChange={onChangesMade}
                  label="Auto-refresh data"
                  description="Automatically update data without manual refresh"
                />
              </div>
              <select
                defaultValue="Every minute"
                onChange={onChangesMade}
                className="ml-4 px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>Every 30 seconds</option>
                <option>Every minute</option>
                <option>Every 5 minutes</option>
                <option>Every 15 minutes</option>
              </select>
            </div>
          </div>
        </div>
      </SettingSection>
    </div>
  );
}