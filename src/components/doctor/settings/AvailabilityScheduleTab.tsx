import { useState } from 'react';
import { Plus } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { SettingSection } from './SettingSection';
import { ToggleSwitch } from './ToggleSwitch';

interface AvailabilityScheduleTabProps {
  onChangesMade: () => void;
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

export function AvailabilityScheduleTab({ onChangesMade }: AvailabilityScheduleTabProps) {
  const [onCallStatus, setOnCallStatus] = useState(false);

  return (
    <div>
      {/* Working Hours */}
      <SettingSection title="Working Hours" description="Set your weekly availability schedule">
        <div className="space-y-3">
          {daysOfWeek.map((day) => (
            <div key={day} className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-lg">
              <div className="w-32">
                <ToggleSwitch
                  enabled={!['Saturday', 'Sunday'].includes(day)}
                  onChange={onChangesMade}
                  label={day}
                />
              </div>
              
              {!['Saturday', 'Sunday'].includes(day) && (
                <div className="flex-1 flex items-center gap-3">
                  <Input
                    type="time"
                    defaultValue="09:00"
                    onChange={onChangesMade}
                    className="w-32"
                  />
                  <span className="text-[#6B7280]">to</span>
                  <Input
                    type="time"
                    defaultValue="17:00"
                    onChange={onChangesMade}
                    className="w-32"
                  />
                  <button
                    onClick={onChangesMade}
                    className="text-sm text-[#059669] hover:text-[#047857] font-medium"
                  >
                    Set lunch break
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
        
        <div className="mt-4">
          <Button variant="outline" size="sm">
            Copy to all days
          </Button>
        </div>
      </SettingSection>

      {/* Appointment Settings */}
      <SettingSection title="Appointment Settings" description="Configure appointment booking preferences">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Default appointment duration
              </label>
              <select
                defaultValue="30 minutes"
                onChange={onChangesMade}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>15 minutes</option>
                <option>30 minutes</option>
                <option>45 minutes</option>
                <option>1 hour</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Buffer time between appointments
              </label>
              <select
                defaultValue="10 minutes"
                onChange={onChangesMade}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>5 minutes</option>
                <option>10 minutes</option>
                <option>15 minutes</option>
                <option>20 minutes</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Maximum appointments per day
              </label>
              <Input
                type="number"
                defaultValue="12"
                onChange={onChangesMade}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Advance booking limit
              </label>
              <select
                defaultValue="30 days"
                onChange={onChangesMade}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>7 days</option>
                <option>14 days</option>
                <option>30 days</option>
                <option>60 days</option>
                <option>90 days</option>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Allow same-day bookings"
              description="Patients can book appointments for today"
            />
          </div>
        </div>
      </SettingSection>

      {/* Leave & Time Off */}
      <SettingSection title="Leave & Time Off" description="Manage vacation days and unavailability">
        <div className="space-y-4">
          <div className="bg-[#F8F9FA] rounded-lg p-4 text-center">
            <p className="text-sm text-[#6B7280] mb-3">Calendar showing marked leave days</p>
            <div className="h-48 flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg">
              <span className="text-xs text-[#6B7280]">Calendar component placeholder</span>
            </div>
          </div>

          <Button className="bg-[#059669] text-white hover:bg-[#047857]">
            <Plus className="w-4 h-4 mr-2" />
            Add leave period
          </Button>

          <div className="pt-4 border-t border-gray-200">
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Out-of-office message
            </label>
            <Textarea
              placeholder="This message will be shown to patients when you're unavailable..."
              rows={3}
              onChange={onChangesMade}
              className="w-full resize-none"
            />
          </div>
        </div>
      </SettingSection>

      {/* Emergency Availability */}
      <SettingSection title="Emergency Availability" description="Configure on-call and emergency contact settings">
        <div className="space-y-4">
          <ToggleSwitch
            enabled={onCallStatus}
            onChange={(enabled) => {
              setOnCallStatus(enabled);
              onChangesMade();
            }}
            label="On-call status"
            description="Available for emergency consultations"
          />

          {onCallStatus && (
            <div className="bg-[#F8F9FA] rounded-lg p-4 space-y-4">
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Emergency contact number
                </label>
                <Input
                  type="tel"
                  placeholder="+92 300 1234567"
                  onChange={onChangesMade}
                  className="w-full"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Backup doctor assignment
                </label>
                <select
                  onChange={onChangesMade}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
                >
                  <option>Select backup doctor</option>
                  <option>Dr. Sarah Ahmed</option>
                  <option>Dr. Michael Chen</option>
                  <option>Dr. Emily Rodriguez</option>
                </select>
              </div>
            </div>
          )}
        </div>
      </SettingSection>
    </div>
  );
}