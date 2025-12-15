import { useState } from 'react';
import { ChevronLeft, ChevronRight, Plus, Clock, User, Video } from 'lucide-react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';

interface CalendarViewProps {
  selectedDate: Date;
  onSelectDate: (date: Date) => void;
}

// Mock appointments data
const mockAppointments = [
  {
    id: 1,
    date: new Date(2025, 11, 14),
    time: '10:00 AM - 10:30 AM',
    patientName: 'Sarah Ahmed',
    patientAvatar: 'SA',
    type: 'Follow-up',
    riskScore: 68,
    status: 'confirmed',
  },
  {
    id: 2,
    date: new Date(2025, 11, 14),
    time: '11:00 AM - 11:30 AM',
    patientName: 'Michael Chen',
    patientAvatar: 'MC',
    type: 'Initial',
    riskScore: 45,
    status: 'confirmed',
  },
  {
    id: 3,
    date: new Date(2025, 11, 14),
    time: '2:00 PM - 2:30 PM',
    patientName: 'Emily Rodriguez',
    patientAvatar: 'ER',
    type: 'Urgent',
    riskScore: 82,
    status: 'pending',
  },
  {
    id: 4,
    date: new Date(2025, 11, 15),
    time: '9:00 AM - 9:45 AM',
    patientName: 'David Kim',
    patientAvatar: 'DK',
    type: 'Follow-up',
    riskScore: 52,
    status: 'confirmed',
  },
  {
    id: 5,
    date: new Date(2025, 11, 15),
    time: '3:00 PM - 3:30 PM',
    patientName: 'Lisa Johnson',
    patientAvatar: 'LJ',
    type: 'Initial',
    riskScore: 38,
    status: 'confirmed',
  },
  {
    id: 6,
    date: new Date(2025, 11, 16),
    time: '10:30 AM - 11:00 AM',
    patientName: 'James Wilson',
    patientAvatar: 'JW',
    type: 'Check-up',
    riskScore: 30,
    status: 'completed',
  },
];

export function CalendarView({ selectedDate, onSelectDate }: CalendarViewProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date(2025, 11, 1)); // December 2025

  const getDaysInMonth = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const daysInMonth = lastDay.getDate();
    const startingDayOfWeek = firstDay.getDay();

    return { daysInMonth, startingDayOfWeek, firstDay, lastDay };
  };

  const { daysInMonth, startingDayOfWeek } = getDaysInMonth(currentMonth);

  const previousMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const goToToday = () => {
    const today = new Date();
    setCurrentMonth(new Date(today.getFullYear(), today.getMonth(), 1));
    onSelectDate(today);
  };

  const isSameDay = (date1: Date, date2: Date) => {
    return (
      date1.getFullYear() === date2.getFullYear() &&
      date1.getMonth() === date2.getMonth() &&
      date1.getDate() === date2.getDate()
    );
  };

  const isToday = (day: number) => {
    const today = new Date();
    return (
      currentMonth.getFullYear() === today.getFullYear() &&
      currentMonth.getMonth() === today.getMonth() &&
      day === today.getDate()
    );
  };

  const isSelected = (day: number) => {
    return (
      currentMonth.getFullYear() === selectedDate.getFullYear() &&
      currentMonth.getMonth() === selectedDate.getMonth() &&
      day === selectedDate.getDate()
    );
  };

  const getAppointmentsForDay = (day: number) => {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    return mockAppointments.filter((apt) => isSameDay(apt.date, date));
  };

  const getAppointmentsForSelectedDate = () => {
    return mockAppointments.filter((apt) => isSameDay(apt.date, selectedDate));
  };

  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];

  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const getRiskColor = (score: number) => {
    if (score >= 70) return 'text-red-600 bg-red-100';
    if (score >= 50) return 'text-amber-600 bg-amber-100';
    return 'text-green-600 bg-green-100';
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Urgent':
        return 'bg-red-100 text-red-700';
      case 'Follow-up':
        return 'bg-blue-100 text-blue-700';
      case 'Initial':
        return 'bg-purple-100 text-purple-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Confirmed</Badge>;
      case 'pending':
        return <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">Pending</Badge>;
      case 'completed':
        return <Badge className="bg-gray-100 text-gray-700 hover:bg-gray-100">Completed</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
      {/* Calendar Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-[#1F2937]">
              {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
            </h2>
            <div className="flex items-center gap-2">
              <Button
                variant="outline"
                size="sm"
                onClick={previousMonth}
                className="w-8 h-8 p-0"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                size="sm"
                onClick={nextMonth}
                className="w-8 h-8 p-0"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={goToToday}
            className="border-[#059669] text-[#059669] hover:bg-[#059669]/5"
          >
            Today
          </Button>
        </div>
      </div>

      {/* Calendar Grid */}
      <div className="p-6">
        {/* Week days header */}
        <div className="grid grid-cols-7 gap-2 mb-2">
          {weekDays.map((day) => (
            <div key={day} className="text-center text-sm font-medium text-[#6B7280] py-2">
              {day}
            </div>
          ))}
        </div>

        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-2">
          {/* Empty cells for days before month starts */}
          {Array.from({ length: startingDayOfWeek }).map((_, index) => (
            <div key={`empty-${index}`} className="h-24" />
          ))}

          {/* Days of the month */}
          {Array.from({ length: daysInMonth }).map((_, index) => {
            const day = index + 1;
            const appointments = getAppointmentsForDay(day);
            const hasAppointments = appointments.length > 0;

            return (
              <button
                key={day}
                onClick={() => onSelectDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day))}
                className={`h-24 border rounded-lg p-2 text-left transition-all hover:border-[#059669] hover:shadow-md ${
                  isSelected(day)
                    ? 'border-[#059669] bg-[#059669]/5 shadow-md'
                    : isToday(day)
                    ? 'border-[#059669] border-2'
                    : 'border-gray-200'
                }`}
              >
                <div className={`text-sm font-medium mb-1 ${
                  isSelected(day) ? 'text-[#059669]' : isToday(day) ? 'text-[#059669]' : 'text-[#1F2937]'
                }`}>
                  {day}
                </div>
                {hasAppointments && (
                  <div className="space-y-1">
                    {appointments.slice(0, 2).map((apt, idx) => (
                      <div
                        key={idx}
                        className={`w-2 h-2 rounded-full ${
                          apt.status === 'completed' ? 'bg-gray-400' :
                          apt.status === 'confirmed' ? 'bg-green-500' :
                          apt.type === 'Urgent' ? 'bg-red-500' :
                          'bg-amber-500'
                        }`}
                      />
                    ))}
                    {appointments.length > 2 && (
                      <div className="text-xs text-[#6B7280] font-medium">
                        +{appointments.length - 2}
                      </div>
                    )}
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Day View Panel - Selected Date Appointments */}
      <div className="border-t border-gray-200 bg-[#F8F9FA]">
        <div className="p-6">
          <h3 className="font-bold text-[#1F2937] mb-4">
            {selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </h3>
        </div>
        
        <div className="space-y-3 px-6 pb-6">
          {getAppointmentsForSelectedDate().length === 0 ? (
            <div className="text-center py-8">
              <p className="text-[#6B7280] mb-4">No appointments scheduled</p>
              <Button
                variant="outline"
                size="sm"
                className="border-[#059669] text-[#059669] hover:bg-[#059669]/5"
              >
                <Plus className="w-4 h-4 mr-2" />
                Schedule appointment
              </Button>
            </div>
          ) : (
            getAppointmentsForSelectedDate().map((apt) => (
              <div
                key={apt.id}
                className="bg-white rounded-lg p-4 border border-gray-200 hover:shadow-md transition-shadow cursor-pointer"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-sm font-medium">
                      {apt.patientAvatar}
                    </div>
                    <div>
                      <div className="font-medium text-[#1F2937]">{apt.patientName}</div>
                      <div className="text-sm text-[#6B7280] flex items-center gap-2">
                        <Clock className="w-3.5 h-3.5" />
                        {apt.time}
                      </div>
                    </div>
                  </div>
                  {getStatusBadge(apt.status)}
                </div>

                <div className="flex items-center gap-2 mb-2">
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getTypeColor(apt.type)}`}>
                    {apt.type}
                  </span>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getRiskColor(apt.riskScore)}`}>
                    Risk: {apt.riskScore}%
                  </span>
                </div>

                <div className="flex items-center gap-2 pt-3 border-t border-gray-100">
                  <Button size="sm" className="flex-1 bg-[#059669] text-white hover:bg-[#047857]">
                    View details
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Reschedule
                  </Button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}