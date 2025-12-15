import { useState } from 'react';
import { ChevronLeft, ChevronRight, Clock } from 'lucide-react';
import { Button } from '../../ui/button';

// Mock appointments for week view
const mockWeekAppointments = [
  { id: 1, day: 1, startHour: 10, duration: 0.5, patientName: 'Sarah Ahmed', type: 'Follow-up', status: 'confirmed' },
  { id: 2, day: 1, startHour: 11, duration: 0.5, patientName: 'Michael Chen', type: 'Initial', status: 'confirmed' },
  { id: 3, day: 1, startHour: 14, duration: 0.5, patientName: 'Emily Rodriguez', type: 'Urgent', status: 'pending' },
  { id: 4, day: 2, startHour: 9, duration: 0.75, patientName: 'David Kim', type: 'Follow-up', status: 'confirmed' },
  { id: 5, day: 2, startHour: 15, duration: 0.5, patientName: 'Lisa Johnson', type: 'Initial', status: 'confirmed' },
  { id: 6, day: 3, startHour: 10.5, duration: 0.5, patientName: 'James Wilson', type: 'Check-up', status: 'confirmed' },
  { id: 7, day: 3, startHour: 14, duration: 0.5, patientName: 'Maria Garcia', type: 'Follow-up', status: 'confirmed' },
  { id: 8, day: 4, startHour: 11, duration: 0.5, patientName: 'Robert Taylor', type: 'Telehealth', status: 'confirmed' },
  { id: 9, day: 5, startHour: 9.5, duration: 0.5, patientName: 'Anna Lee', type: 'Initial', status: 'confirmed' },
  { id: 10, day: 5, startHour: 13, duration: 0.5, patientName: 'Thomas Brown', type: 'Follow-up', status: 'pending' },
];

export function WeekView() {
  const [currentWeekStart, setCurrentWeekStart] = useState(new Date(2025, 11, 8)); // Week of Dec 8, 2025

  const getWeekDays = (startDate: Date) => {
    const days = [];
    for (let i = 0; i < 7; i++) {
      const day = new Date(startDate);
      day.setDate(startDate.getDate() + i);
      days.push(day);
    }
    return days;
  };

  const weekDays = getWeekDays(currentWeekStart);
  const timeSlots = Array.from({ length: 24 }, (_, i) => i + 8); // 8 AM to 8 PM (12 hours)

  const previousWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() - 7);
    setCurrentWeekStart(newStart);
  };

  const nextWeek = () => {
    const newStart = new Date(currentWeekStart);
    newStart.setDate(newStart.getDate() + 7);
    setCurrentWeekStart(newStart);
  };

  const currentWeek = () => {
    const now = new Date();
    const dayOfWeek = now.getDay();
    const diff = now.getDate() - dayOfWeek;
    setCurrentWeekStart(new Date(now.setDate(diff)));
  };

  const formatHour = (hour: number) => {
    if (hour === 0) return '12 AM';
    if (hour < 12) return `${hour} AM`;
    if (hour === 12) return '12 PM';
    return `${hour - 12} PM`;
  };

  const getAppointmentStyle = (appointment: any) => {
    const top = ((appointment.startHour - 8) / 12) * 100;
    const height = (appointment.duration / 12) * 100;
    return { top: `${top}%`, height: `${height}%` };
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Urgent':
        return 'bg-red-500 border-red-600';
      case 'Follow-up':
        return 'bg-blue-500 border-blue-600';
      case 'Initial':
        return 'bg-purple-500 border-purple-600';
      case 'Telehealth':
        return 'bg-cyan-500 border-cyan-600';
      default:
        return 'bg-gray-500 border-gray-600';
    }
  };

  const getCurrentTimePosition = () => {
    const now = new Date();
    const currentHour = now.getHours() + now.getMinutes() / 60;
    if (currentHour < 8 || currentHour > 20) return null;
    return ((currentHour - 8) / 12) * 100;
  };

  const currentTimePos = getCurrentTimePosition();

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Week Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-[#1F2937]">
              Week of {weekDays[0].toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </h2>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={previousWeek}
                className="w-8 h-8 p-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextWeek}
                className="w-8 h-8 p-0"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={currentWeek}
            className="border-[#059669] text-[#059669] hover:bg-[#059669]/5"
          >
            This Week
          </Button>
        </div>
      </div>

      {/* Week Grid */}
      <div className="overflow-x-auto">
        <div className="min-w-[1000px]">
          {/* Day Headers */}
          <div className="grid grid-cols-8 border-b border-gray-200 bg-[#F8F9FA] sticky top-0 z-10">
            <div className="p-4 border-r border-gray-200">
              <Clock className="w-5 h-5 text-[#6B7280]" />
            </div>
            {weekDays.map((day, index) => {
              const isToday = day.toDateString() === new Date().toDateString();
              return (
                <div
                  key={index}
                  className={`p-4 border-r border-gray-200 text-center ${
                    isToday ? 'bg-[#059669]/10' : ''
                  }`}
                >
                  <div className={`text-sm font-medium mb-1 ${isToday ? 'text-[#059669]' : 'text-[#6B7280]'}`}>
                    {day.toLocaleDateString('en-US', { weekday: 'short' })}
                  </div>
                  <div className={`text-lg font-bold ${isToday ? 'text-[#059669]' : 'text-[#1F2937]'}`}>
                    {day.getDate()}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Time Grid */}
          <div className="relative">
            <div className="grid grid-cols-8">
              {/* Time Labels */}
              <div className="border-r border-gray-200">
                {timeSlots.map((hour) => (
                  <div
                    key={hour}
                    className="h-20 border-b border-gray-200 px-4 py-2 text-sm text-[#6B7280]"
                  >
                    {formatHour(hour)}
                  </div>
                ))}
              </div>

              {/* Day Columns */}
              {weekDays.map((day, dayIndex) => (
                <div key={dayIndex} className="relative border-r border-gray-200">
                  {/* Time Slots */}
                  {timeSlots.map((hour) => (
                    <div
                      key={hour}
                      className="h-20 border-b border-gray-200 hover:bg-[#F8F9FA] cursor-pointer transition-colors"
                    />
                  ))}

                  {/* Appointments */}
                  <div className="absolute inset-0 pointer-events-none">
                    {mockWeekAppointments
                      .filter((apt) => apt.day === dayIndex)
                      .map((apt) => {
                        const style = getAppointmentStyle(apt);
                        return (
                          <div
                            key={apt.id}
                            className={`absolute left-1 right-1 ${getTypeColor(apt.type)} text-white rounded-lg p-2 text-xs pointer-events-auto cursor-pointer hover:shadow-lg transition-shadow border-l-4`}
                            style={style}
                          >
                            <div className="font-medium truncate">{apt.patientName}</div>
                            <div className="text-white/90 truncate">{apt.type}</div>
                            {apt.status === 'pending' && (
                              <div className="text-xs bg-white/20 rounded px-1 mt-1 inline-block">
                                Pending
                              </div>
                            )}
                          </div>
                        );
                      })}
                  </div>
                </div>
              ))}
            </div>

            {/* Current Time Indicator */}
            {currentTimePos !== null && (
              <div
                className="absolute left-0 right-0 h-0.5 bg-red-500 z-20"
                style={{ top: `${currentTimePos}%` }}
              >
                <div className="absolute left-0 w-2 h-2 bg-red-500 rounded-full -translate-y-1/2" />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="border-t border-gray-200 p-4 bg-[#F8F9FA]">
        <div className="flex items-center gap-6 text-sm">
          <span className="text-[#6B7280] font-medium">Legend:</span>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-blue-500" />
            <span className="text-[#6B7280]">Follow-up</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-purple-500" />
            <span className="text-[#6B7280]">Initial</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-red-500" />
            <span className="text-[#6B7280]">Urgent</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-cyan-500" />
            <span className="text-[#6B7280]">Telehealth</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded bg-gray-500" />
            <span className="text-[#6B7280]">Other</span>
          </div>
        </div>
      </div>
    </div>
  );
}