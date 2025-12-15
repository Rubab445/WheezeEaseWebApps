import { Calendar, Clock, Eye } from 'lucide-react';

const appointments = [
  {
    id: '1',
    time: '10:00 AM',
    patient: 'Sarah Ahmed',
    avatar: 'SA',
    status: 'Confirmed',
    statusColor: 'bg-[#22C55E] text-white',
    risk: 'low',
    riskColor: 'bg-[#22C55E]',
  },
  {
    id: '2',
    time: '11:30 AM',
    patient: 'Ali Hassan',
    avatar: 'AH',
    status: 'Confirmed',
    statusColor: 'bg-[#22C55E] text-white',
    risk: 'high',
    riskColor: 'bg-[#EF4444]',
  },
  {
    id: '3',
    time: '2:00 PM',
    patient: 'Fatima Khan',
    avatar: 'FK',
    status: 'Pending',
    statusColor: 'bg-[#F59E0B] text-white',
    risk: 'medium',
    riskColor: 'bg-[#F59E0B]',
  },
  {
    id: '4',
    time: '3:30 PM',
    patient: 'Ahmed Raza',
    avatar: 'AR',
    status: 'Confirmed',
    statusColor: 'bg-[#22C55E] text-white',
    risk: 'low',
    riskColor: 'bg-[#22C55E]',
  },
  {
    id: '5',
    time: '4:45 PM',
    patient: 'Zainab Ali',
    avatar: 'ZA',
    status: 'Pending',
    statusColor: 'bg-[#F59E0B] text-white',
    risk: 'high',
    riskColor: 'bg-[#EF4444]',
  },
];

export function TodayScheduleCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Calendar className="w-5 h-5 text-[#059669]" />
        <h2 className="text-lg font-bold text-[#1F2937]">Patient Reviews Today</h2>
      </div>

      <div className="space-y-3 mb-4">
        {appointments.map((appointment) => (
          <div 
            key={appointment.id}
            className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-xl hover:shadow-md transition-all cursor-pointer"
          >
            {/* Time Badge */}
            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-white rounded-lg border border-gray-200 min-w-[90px]">
              <Clock className="w-3.5 h-3.5 text-[#6B7280]" />
              <span className="text-xs font-medium text-[#1F2937]">{appointment.time}</span>
            </div>

            {/* Patient Info */}
            <div className="flex items-center gap-3 flex-1">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-xs font-medium">
                {appointment.avatar}
              </div>
              <span className="text-sm font-medium text-[#1F2937]">{appointment.patient}</span>
            </div>

            {/* Status & Risk */}
            <div className="flex items-center gap-2">
              <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${appointment.statusColor}`}>
                {appointment.status}
              </span>
              <div 
                className={`w-2.5 h-2.5 rounded-full ${appointment.riskColor}`}
                title={`${appointment.risk} risk`}
              />
            </div>

            {/* View Button */}
            <button className="p-1.5 hover:bg-white rounded-lg transition-colors" title="View">
              <Eye className="w-4 h-4 text-[#059669]" />
            </button>
          </div>
        ))}
      </div>

      <button className="w-full py-2.5 text-sm text-[#059669] hover:bg-[#F8F9FA] rounded-lg transition-colors font-medium">
        View Full Schedule
      </button>
    </div>
  );
}