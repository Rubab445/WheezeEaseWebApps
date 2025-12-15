import { useState } from 'react';
import { Calendar, ChevronLeft, ChevronRight, Plus, Settings, Clock, Users, AlertCircle, CheckCircle, Filter, List, Grid, LayoutList } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { AppointmentStatsCards } from '../../components/doctor/appointments/AppointmentStatsCards';
import { CalendarView } from '../../components/doctor/appointments/CalendarView';
import { ListView } from '../../components/doctor/appointments/ListView';
import { WeekView } from '../../components/doctor/appointments/WeekView';
import { DayView } from '../../components/doctor/appointments/DayView';
import { RightPanel } from '../../components/doctor/appointments/RightPanel';
import { ScheduleAppointmentModal } from '../../components/doctor/appointments/ScheduleAppointmentModal';
import { AvailabilityModal } from '../../components/doctor/appointments/AvailabilityModal';

type ViewType = 'calendar' | 'list' | 'week' | 'day';

export function AppointmentsPage() {
  const [currentView, setCurrentView] = useState<ViewType>('calendar');
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [showScheduleModal, setShowScheduleModal] = useState(false);
  const [showAvailabilityModal, setShowAvailabilityModal] = useState(false);

  return (
    <div>
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-3">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-[#1F2937] font-medium">Appointments</span>
        </div>

        {/* Title and Actions Row */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-lg flex items-center justify-center">
                <Calendar className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-[#1F2937]">Appointments</h1>
                <p className="text-sm text-[#6B7280] mt-0.5">Manage your consultation schedule</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* View Toggle Pills */}
            <div className="flex items-center bg-[#F8F9FA] rounded-lg p-1 gap-1">
              <button
                onClick={() => setCurrentView('calendar')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  currentView === 'calendar'
                    ? 'bg-[#059669] text-white shadow-md'
                    : 'text-[#6B7280] hover:text-[#1F2937]'
                }`}
              >
                Calendar
              </button>
              <button
                onClick={() => setCurrentView('list')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  currentView === 'list'
                    ? 'bg-[#059669] text-white shadow-md'
                    : 'text-[#6B7280] hover:text-[#1F2937]'
                }`}
              >
                List
              </button>
              <button
                onClick={() => setCurrentView('week')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  currentView === 'week'
                    ? 'bg-[#059669] text-white shadow-md'
                    : 'text-[#6B7280] hover:text-[#1F2937]'
                }`}
              >
                Week
              </button>
              <button
                onClick={() => setCurrentView('day')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${
                  currentView === 'day'
                    ? 'bg-[#059669] text-white shadow-md'
                    : 'text-[#6B7280] hover:text-[#1F2937]'
                }`}
              >
                Day
              </button>
            </div>

            <Button
              variant="outline"
              onClick={() => setShowAvailabilityModal(true)}
              className="border-[#059669] text-[#059669] hover:bg-[#059669]/5"
            >
              <Settings className="w-4 h-4 mr-2" />
              My availability
            </Button>

            <Button
              onClick={() => setShowScheduleModal(true)}
              className="bg-gradient-to-r from-[#059669] to-[#10B981] text-white hover:opacity-90 shadow-md"
            >
              <Plus className="w-4 h-4 mr-2" />
              Schedule appointment
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Row */}
      <div className="px-8 py-6">
        <AppointmentStatsCards />
      </div>

      {/* Main Content */}
      <div className="px-8 pb-8 flex gap-6">
        {/* Left Column - Calendar/List Views */}
        <div className="flex-1 min-w-0">
          {currentView === 'calendar' && (
            <CalendarView selectedDate={selectedDate} onSelectDate={setSelectedDate} />
          )}
          {currentView === 'list' && <ListView />}
          {currentView === 'week' && <WeekView />}
          {currentView === 'day' && <DayView selectedDate={selectedDate} />}
        </div>

        {/* Right Column - Details & Actions */}
        <div className="w-[450px] flex-shrink-0">
          <RightPanel />
        </div>
      </div>

      {/* Modals */}
      {showScheduleModal && (
        <ScheduleAppointmentModal onClose={() => setShowScheduleModal(false)} />
      )}

      {showAvailabilityModal && (
        <AvailabilityModal onClose={() => setShowAvailabilityModal(false)} />
      )}
    </div>
  );
}