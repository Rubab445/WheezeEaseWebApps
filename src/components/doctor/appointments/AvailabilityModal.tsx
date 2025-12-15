import { useState } from 'react';
import { X, Clock, Calendar, Check, Settings } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

interface AvailabilityModalProps {
  onClose: () => void;
}

const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

const timeSlots = [
  '08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30',
  '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00'
];

export function AvailabilityModal({ onClose }: AvailabilityModalProps) {
  const [availability, setAvailability] = useState({
    Monday: { morning: true, afternoon: true, evening: false },
    Tuesday: { morning: true, afternoon: true, evening: false },
    Wednesday: { morning: true, afternoon: true, evening: false },
    Thursday: { morning: true, afternoon: true, evening: false },
    Friday: { morning: true, afternoon: false, evening: false },
    Saturday: { morning: false, afternoon: false, evening: false },
    Sunday: { morning: false, afternoon: false, evening: false },
  });

  const [settings, setSettings] = useState({
    bufferTime: '15',
    maxPerDay: '12',
    appointmentTypes: {
      initial: true,
      followup: true,
      urgent: true,
      telehealth: true,
    },
    telehealthAvailable: true,
  });

  const toggleSlot = (day: string, slot: 'morning' | 'afternoon' | 'evening') => {
    setAvailability({
      ...availability,
      [day]: {
        ...availability[day as keyof typeof availability],
        [slot]: !availability[day as keyof typeof availability][slot],
      },
    });
  };

  const handleSave = () => {
    // Handle save logic
    console.log('Saving availability:', availability, settings);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#1F2937]">My Availability</h2>
            <p className="text-sm text-[#6B7280] mt-0.5">Set your weekly schedule and preferences</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-[#6B7280]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="grid grid-cols-3 gap-6">
            {/* Weekly Schedule (Left - spans 2 columns) */}
            <div className="col-span-2">
              <h3 className="font-bold text-[#1F2937] mb-4">Weekly Schedule</h3>
              
              {/* Time Legend */}
              <div className="flex items-center gap-4 mb-4 text-xs text-[#6B7280]">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-[#059669] rounded" />
                  <span>Available</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 bg-gray-200 rounded" />
                  <span>Unavailable</span>
                </div>
              </div>

              {/* Schedule Grid */}
              <div className="border border-gray-200 rounded-lg overflow-hidden">
                {/* Header Row */}
                <div className="grid grid-cols-4 bg-[#F8F9FA] border-b border-gray-200">
                  <div className="p-3 font-medium text-sm text-[#6B7280]">Day</div>
                  <div className="p-3 font-medium text-sm text-[#6B7280] text-center border-l border-gray-200">
                    Morning<br />
                    <span className="text-xs font-normal">(8 AM - 12 PM)</span>
                  </div>
                  <div className="p-3 font-medium text-sm text-[#6B7280] text-center border-l border-gray-200">
                    Afternoon<br />
                    <span className="text-xs font-normal">(12 PM - 5 PM)</span>
                  </div>
                  <div className="p-3 font-medium text-sm text-[#6B7280] text-center border-l border-gray-200">
                    Evening<br />
                    <span className="text-xs font-normal">(5 PM - 8 PM)</span>
                  </div>
                </div>

                {/* Day Rows */}
                {daysOfWeek.map((day) => (
                  <div key={day} className="grid grid-cols-4 border-b border-gray-200 last:border-b-0">
                    <div className="p-3 font-medium text-sm text-[#1F2937] flex items-center">
                      {day}
                    </div>
                    <div className="p-3 border-l border-gray-200 flex items-center justify-center">
                      <button
                        onClick={() => toggleSlot(day, 'morning')}
                        className={`w-full h-12 rounded-lg transition-all ${
                          availability[day as keyof typeof availability].morning
                            ? 'bg-[#059669] hover:bg-[#047857]'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                      >
                        {availability[day as keyof typeof availability].morning && (
                          <Check className="w-5 h-5 text-white mx-auto" />
                        )}
                      </button>
                    </div>
                    <div className="p-3 border-l border-gray-200 flex items-center justify-center">
                      <button
                        onClick={() => toggleSlot(day, 'afternoon')}
                        className={`w-full h-12 rounded-lg transition-all ${
                          availability[day as keyof typeof availability].afternoon
                            ? 'bg-[#059669] hover:bg-[#047857]'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                      >
                        {availability[day as keyof typeof availability].afternoon && (
                          <Check className="w-5 h-5 text-white mx-auto" />
                        )}
                      </button>
                    </div>
                    <div className="p-3 border-l border-gray-200 flex items-center justify-center">
                      <button
                        onClick={() => toggleSlot(day, 'evening')}
                        className={`w-full h-12 rounded-lg transition-all ${
                          availability[day as keyof typeof availability].evening
                            ? 'bg-[#059669] hover:bg-[#047857]'
                            : 'bg-gray-200 hover:bg-gray-300'
                        }`}
                      >
                        {availability[day as keyof typeof availability].evening && (
                          <Check className="w-5 h-5 text-white mx-auto" />
                        )}
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-4 flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const allAvailable = Object.fromEntries(
                      daysOfWeek.map(day => [day, { morning: true, afternoon: true, evening: true }])
                    );
                    setAvailability(allAvailable as any);
                  }}
                >
                  Select All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const allUnavailable = Object.fromEntries(
                      daysOfWeek.map(day => [day, { morning: false, afternoon: false, evening: false }])
                    );
                    setAvailability(allUnavailable as any);
                  }}
                >
                  Clear All
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    const weekdaysOnly = Object.fromEntries(
                      daysOfWeek.map(day => [
                        day,
                        {
                          morning: !['Saturday', 'Sunday'].includes(day),
                          afternoon: !['Saturday', 'Sunday'].includes(day),
                          evening: false,
                        }
                      ])
                    );
                    setAvailability(weekdaysOnly as any);
                  }}
                >
                  Weekdays Only
                </Button>
              </div>

              {/* Block-off Dates */}
              <div className="mt-6">
                <h4 className="font-bold text-[#1F2937] mb-3">Block-off Dates</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Input type="date" className="flex-1" />
                    <span className="text-[#6B7280]">to</span>
                    <Input type="date" className="flex-1" />
                    <Button variant="outline">Add</Button>
                  </div>
                  <p className="text-sm text-[#6B7280]">
                    Add vacation days, holidays, or other unavailable periods
                  </p>
                </div>
              </div>
            </div>

            {/* Settings (Right) */}
            <div className="space-y-6">
              <div>
                <h3 className="font-bold text-[#1F2937] mb-4">Settings</h3>

                {/* Buffer Time */}
                <div className="mb-4">
                  <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Buffer time between appointments
                  </label>
                  <Select
                    value={settings.bufferTime}
                    onValueChange={(value) => setSettings({ ...settings, bufferTime: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="0">No buffer</SelectItem>
                      <SelectItem value="5">5 minutes</SelectItem>
                      <SelectItem value="10">10 minutes</SelectItem>
                      <SelectItem value="15">15 minutes</SelectItem>
                      <SelectItem value="20">20 minutes</SelectItem>
                      <SelectItem value="30">30 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Max Appointments */}
                <div className="mb-4">
                  <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Max appointments per day
                  </label>
                  <Input
                    type="number"
                    value={settings.maxPerDay}
                    onChange={(e) => setSettings({ ...settings, maxPerDay: e.target.value })}
                    min="1"
                    max="20"
                  />
                </div>
              </div>

              {/* Appointment Types */}
              <div>
                <h4 className="font-bold text-[#1F2937] mb-3">Appointment Types Offered</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-lg">
                    <input
                      type="checkbox"
                      id="initial"
                      checked={settings.appointmentTypes.initial}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          appointmentTypes: { ...settings.appointmentTypes, initial: e.target.checked },
                        })
                      }
                      className="w-4 h-4 text-[#059669] rounded"
                    />
                    <label htmlFor="initial" className="text-sm text-[#1F2937] font-medium flex-1">
                      Initial Consultations
                    </label>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-lg">
                    <input
                      type="checkbox"
                      id="followup"
                      checked={settings.appointmentTypes.followup}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          appointmentTypes: { ...settings.appointmentTypes, followup: e.target.checked },
                        })
                      }
                      className="w-4 h-4 text-[#059669] rounded"
                    />
                    <label htmlFor="followup" className="text-sm text-[#1F2937] font-medium flex-1">
                      Follow-ups
                    </label>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-lg">
                    <input
                      type="checkbox"
                      id="urgent"
                      checked={settings.appointmentTypes.urgent}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          appointmentTypes: { ...settings.appointmentTypes, urgent: e.target.checked },
                        })
                      }
                      className="w-4 h-4 text-[#059669] rounded"
                    />
                    <label htmlFor="urgent" className="text-sm text-[#1F2937] font-medium flex-1">
                      Urgent Appointments
                    </label>
                  </div>

                  <div className="flex items-center gap-3 p-3 bg-[#F8F9FA] rounded-lg">
                    <input
                      type="checkbox"
                      id="telehealth"
                      checked={settings.appointmentTypes.telehealth}
                      onChange={(e) =>
                        setSettings({
                          ...settings,
                          appointmentTypes: { ...settings.appointmentTypes, telehealth: e.target.checked },
                        })
                      }
                      className="w-4 h-4 text-[#059669] rounded"
                    />
                    <label htmlFor="telehealth" className="text-sm text-[#1F2937] font-medium flex-1">
                      Telehealth
                    </label>
                  </div>
                </div>
              </div>

              {/* Telehealth Toggle */}
              <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-[#1F2937]">
                    Telehealth Availability
                  </span>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={settings.telehealthAvailable}
                      onChange={(e) => setSettings({ ...settings, telehealthAvailable: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#059669]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#059669]"></div>
                  </label>
                </div>
                <p className="text-xs text-[#6B7280]">
                  Enable virtual consultations via video call
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button
            onClick={handleSave}
            className="bg-gradient-to-r from-[#059669] to-[#10B981] text-white hover:opacity-90"
          >
            <Check className="w-4 h-4 mr-2" />
            Save Availability
          </Button>
        </div>
      </div>
    </div>
  );
}
