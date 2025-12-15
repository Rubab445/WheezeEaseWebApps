import { useState } from 'react';
import { SettingSection } from './SettingSection';
import { ToggleSwitch } from './ToggleSwitch';
import { Input } from '../../ui/input';

interface NotificationsTabProps {
  onChangesMade: () => void;
}

export function NotificationsTab({ onChangesMade }: NotificationsTabProps) {
  const [quietHoursEnabled, setQuietHoursEnabled] = useState(true);
  const [dailyDigestEnabled, setDailyDigestEnabled] = useState(true);
  const [weeklyReportEnabled, setWeeklyReportEnabled] = useState(true);

  return (
    <div>
      {/* Notification Channels */}
      <SettingSection title="Notification Channels" description="Choose how you want to receive notifications">
        <div className="space-y-2">
          <ToggleSwitch
            enabled={true}
            onChange={onChangesMade}
            label="Push Notifications"
            description="Receive notifications on your mobile device"
          />
          <ToggleSwitch
            enabled={true}
            onChange={onChangesMade}
            label="Email Notifications"
            description="Receive notifications via email"
          />
          <ToggleSwitch
            enabled={false}
            onChange={onChangesMade}
            label="SMS Alerts"
            description="Receive critical alerts via text message"
          />
          <ToggleSwitch
            enabled={true}
            onChange={onChangesMade}
            label="In-App Notifications"
            description="See notifications within the portal"
          />
        </div>
      </SettingSection>

      {/* Notification Preferences */}
      <SettingSection title="Notification Preferences" description="Customize what notifications you receive">
        {/* Patient Activity */}
        <div className="mb-6">
          <h4 className="font-medium text-[#1F2937] mb-3">Patient Activity</h4>
          <div className="space-y-2">
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="New symptom log submitted"
            />
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Severe symptom detected"
              description="Always enabled for patient safety"
              disabled
            />
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Patient missed medication"
            />
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Patient message received"
            />
          </div>
        </div>

        {/* AI Recommendations */}
        <div className="mb-6 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-[#1F2937] mb-3">AI Recommendations</h4>
          <div className="space-y-2">
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="New AI recommendation generated"
            />
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="High-priority recommendation"
            />
            <ToggleSwitch
              enabled={false}
              onChange={onChangesMade}
              label="AI prediction confidence change"
            />
          </div>
        </div>

        {/* Appointments */}
        <div className="mb-6 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-[#1F2937] mb-3">Appointments</h4>
          <div className="space-y-2">
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Appointment scheduled"
            />
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-[#1F2937]">Appointment reminder</p>
                <p className="text-xs text-[#6B7280] mt-0.5">Send reminder before appointment</p>
              </div>
              <select
                defaultValue="1 hour before"
                onChange={onChangesMade}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>15 minutes before</option>
                <option>30 minutes before</option>
                <option>1 hour before</option>
                <option>2 hours before</option>
                <option>1 day before</option>
              </select>
            </div>
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Appointment cancelled by patient"
            />
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Appointment confirmation pending"
            />
          </div>
        </div>

        {/* Environment */}
        <div className="mb-6 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-[#1F2937] mb-3">Environment</h4>
          <div className="space-y-2">
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="High AQI alert for patient locations"
            />
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="High pollen alert"
            />
            <ToggleSwitch
              enabled={false}
              onChange={onChangesMade}
              label="Weather warning"
            />
          </div>
        </div>

        {/* System */}
        <div className="pt-6 border-t border-gray-200">
          <h4 className="font-medium text-[#1F2937] mb-3">System</h4>
          <div className="space-y-2">
            <div className="flex items-center justify-between py-3">
              <div>
                <p className="text-sm font-medium text-[#1F2937]">New resources added</p>
              </div>
              <select
                defaultValue="Weekly digest"
                onChange={onChangesMade}
                className="px-3 py-1.5 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>Immediately</option>
                <option>Daily digest</option>
                <option>Weekly digest</option>
                <option>Never</option>
              </select>
            </div>
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Platform updates"
            />
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Maintenance notifications"
            />
          </div>
        </div>
      </SettingSection>

      {/* Quiet Hours */}
      <SettingSection title="Quiet Hours" description="Pause non-urgent notifications during specific hours">
        <div className="space-y-4">
          <ToggleSwitch
            enabled={quietHoursEnabled}
            onChange={(enabled) => {
              setQuietHoursEnabled(enabled);
              onChangesMade();
            }}
            label="Enable quiet hours"
          />

          {quietHoursEnabled && (
            <div className="bg-[#F8F9FA] rounded-lg p-4 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                    Start time
                  </label>
                  <Input
                    type="time"
                    defaultValue="22:00"
                    onChange={onChangesMade}
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                    End time
                  </label>
                  <Input
                    type="time"
                    defaultValue="07:00"
                    onChange={onChangesMade}
                    className="w-full"
                  />
                </div>
              </div>

              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  defaultChecked
                  onChange={onChangesMade}
                  className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <span className="text-sm text-[#6B7280]">
                  Emergency notifications override quiet hours
                </span>
              </label>
            </div>
          )}
        </div>
      </SettingSection>

      {/* Notification Summary */}
      <SettingSection title="Notification Summary" description="Receive periodic summaries instead of individual notifications">
        <div className="space-y-4">
          {/* Daily Digest */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <ToggleSwitch
                enabled={dailyDigestEnabled}
                onChange={(enabled) => {
                  setDailyDigestEnabled(enabled);
                  onChangesMade();
                }}
                label="Daily digest"
                description="Receive a daily summary of notifications"
              />
            </div>
            {dailyDigestEnabled && (
              <div className="ml-6">
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Send at
                </label>
                <Input
                  type="time"
                  defaultValue="08:00"
                  onChange={onChangesMade}
                  className="w-48"
                />
              </div>
            )}
          </div>

          {/* Weekly Report */}
          <div className="pt-4 border-t border-gray-200">
            <div className="flex items-center justify-between mb-3">
              <ToggleSwitch
                enabled={weeklyReportEnabled}
                onChange={(enabled) => {
                  setWeeklyReportEnabled(enabled);
                  onChangesMade();
                }}
                label="Weekly report"
                description="Receive a weekly activity summary"
              />
            </div>
            {weeklyReportEnabled && (
              <div className="ml-6">
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Send on
                </label>
                <select
                  defaultValue="Monday"
                  onChange={onChangesMade}
                  className="px-3 py-2 border border-gray-300 rounded-lg text-sm w-48 focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
                >
                  <option>Monday</option>
                  <option>Tuesday</option>
                  <option>Wednesday</option>
                  <option>Thursday</option>
                  <option>Friday</option>
                  <option>Saturday</option>
                  <option>Sunday</option>
                </select>
              </div>
            )}
          </div>

          {/* Email Format */}
          <div className="pt-4 border-t border-gray-200">
            <label className="text-sm font-medium text-[#1F2937] mb-3 block">
              Email format
            </label>
            <div className="space-y-2">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="emailFormat"
                  defaultChecked
                  onChange={onChangesMade}
                  className="w-4 h-4 text-[#059669] focus:ring-[#059669]"
                />
                <span className="text-sm text-[#6B7280]">HTML (Rich formatting)</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="emailFormat"
                  onChange={onChangesMade}
                  className="w-4 h-4 text-[#059669] focus:ring-[#059669]"
                />
                <span className="text-sm text-[#6B7280]">Plain text</span>
              </label>
            </div>
          </div>
        </div>
      </SettingSection>
    </div>
  );
}