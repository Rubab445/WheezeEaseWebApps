import { ChevronLeft, ChevronRight, Clock, User, Video, Phone, AlertCircle } from 'lucide-react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';

interface DayViewProps {
  selectedDate: Date;
}

// Mock appointments for day view
const mockDayAppointments = [
  {
    id: 1,
    startTime: '09:00',
    endTime: '09:30',
    patientName: 'Sarah Ahmed',
    patientId: 'P-2847',
    patientAvatar: 'SA',
    type: 'Follow-up',
    riskScore: 68,
    status: 'confirmed',
    reason: 'Medication adjustment review',
    lastSymptom: '2 hours ago',
    notes: 'Patient reported improvement in symptoms',
  },
  {
    id: 2,
    startTime: '10:00',
    endTime: '10:30',
    patientName: 'Michael Chen',
    patientId: 'P-3291',
    patientAvatar: 'MC',
    type: 'Initial',
    riskScore: 45,
    status: 'confirmed',
    reason: 'Initial consultation',
    lastSymptom: '1 day ago',
    notes: 'New patient - seasonal allergies',
  },
  {
    id: 3,
    startTime: '11:00',
    endTime: '11:45',
    patientName: 'Emily Rodriguez',
    patientId: 'P-1829',
    patientAvatar: 'ER',
    type: 'Urgent',
    riskScore: 82,
    status: 'confirmed',
    reason: 'Asthma exacerbation',
    lastSymptom: '30 minutes ago',
    notes: 'Requires immediate attention',
  },
  {
    id: 4,
    startTime: '14:00',
    endTime: '14:30',
    patientName: 'David Kim',
    patientId: 'P-4567',
    patientAvatar: 'DK',
    type: 'Telehealth',
    riskScore: 52,
    status: 'confirmed',
    reason: 'Treatment plan review',
    lastSymptom: '5 hours ago',
    notes: 'Virtual consultation via video call',
  },
  {
    id: 5,
    startTime: '15:00',
    endTime: '15:30',
    patientName: 'Lisa Johnson',
    patientId: 'P-8832',
    patientAvatar: 'LJ',
    type: 'Follow-up',
    riskScore: 38,
    status: 'confirmed',
    reason: 'Check medication effectiveness',
    lastSymptom: '3 days ago',
    notes: 'Stable condition',
  },
];

export function DayView({ selectedDate }: DayViewProps) {
  const timeSlots = Array.from({ length: 13 }, (_, i) => i + 8); // 8 AM to 8 PM

  const formatHour = (hour: number) => {
    if (hour === 0) return '12:00 AM';
    if (hour < 12) return `${hour}:00 AM`;
    if (hour === 12) return '12:00 PM';
    return `${hour - 12}:00 PM`;
  };

  const getRiskColor = (score: number) => {
    if (score >= 70) return 'text-red-600 bg-red-100';
    if (score >= 50) return 'text-amber-600 bg-amber-100';
    return 'text-green-600 bg-green-100';
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Urgent':
        return 'bg-red-100 text-red-700 border-red-300';
      case 'Follow-up':
        return 'bg-blue-100 text-blue-700 border-blue-300';
      case 'Initial':
        return 'bg-purple-100 text-purple-700 border-purple-300';
      case 'Telehealth':
        return 'bg-cyan-100 text-cyan-700 border-cyan-300';
      default:
        return 'bg-gray-100 text-gray-700 border-gray-300';
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
      {/* Day Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-[#1F2937]">
              {selectedDate.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
            </h2>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="sm" className="w-8 h-8 p-0">
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="outline" className="text-[#6B7280]">
              <Clock className="w-3 h-3 mr-1" />
              5 appointments
            </Badge>
            <Button
              variant="outline"
              className="border-[#059669] text-[#059669] hover:bg-[#059669]/5"
            >
              Today
            </Button>
          </div>
        </div>
      </div>

      {/* Day Schedule */}
      <div>
        <div className="p-6 space-y-4">
          {mockDayAppointments.map((apt) => (
            <div
              key={apt.id}
              className={`bg-white border-2 rounded-xl p-6 hover:shadow-lg transition-all cursor-pointer ${getTypeColor(apt.type)}`}
            >
              {/* Time and Status Row */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-[#059669]" />
                    <span className="font-bold text-[#1F2937]">
                      {apt.startTime} - {apt.endTime}
                    </span>
                  </div>
                  <Badge variant="outline" className="text-[#6B7280]">
                    {parseInt(apt.endTime.split(':')[0]) * 60 + parseInt(apt.endTime.split(':')[1]) -
                      (parseInt(apt.startTime.split(':')[0]) * 60 + parseInt(apt.startTime.split(':')[1]))} min
                  </Badge>
                </div>
                {getStatusBadge(apt.status)}
              </div>

              {/* Patient Info */}
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-lg font-medium flex-shrink-0">
                  {apt.patientAvatar}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-[#1F2937]">{apt.patientName}</h3>
                    <span className="text-sm text-[#6B7280]">{apt.patientId}</span>
                    {apt.type === 'Telehealth' && (
                      <Badge className="bg-cyan-100 text-cyan-700 hover:bg-cyan-100">
                        <Video className="w-3 h-3 mr-1" />
                        Virtual
                      </Badge>
                    )}
                  </div>
                  <div className="flex items-center gap-3 mb-3">
                    <Badge className={`${getRiskColor(apt.riskScore)} hover:${getRiskColor(apt.riskScore)}`}>
                      Risk Score: {apt.riskScore}%
                    </Badge>
                    {apt.type === 'Urgent' && (
                      <Badge className="bg-red-100 text-red-700 hover:bg-red-100">
                        <AlertCircle className="w-3 h-3 mr-1" />
                        Urgent
                      </Badge>
                    )}
                  </div>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium text-[#1F2937]">Reason:</span>{' '}
                      <span className="text-[#6B7280]">{apt.reason}</span>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium text-[#1F2937]">Last symptom logged:</span>{' '}
                      <span className="text-[#6B7280]">{apt.lastSymptom}</span>
                    </div>
                    {apt.notes && (
                      <div className="text-sm">
                        <span className="font-medium text-[#1F2937]">Notes:</span>{' '}
                        <span className="text-[#6B7280]">{apt.notes}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Buffer Time Indicator */}
              {apt.id !== mockDayAppointments[mockDayAppointments.length - 1].id && (
                <div className="border-t border-gray-200 pt-3 mt-4">
                  <p className="text-xs text-[#6B7280] flex items-center gap-2">
                    <Clock className="w-3 h-3" />
                    15 min buffer before next appointment
                  </p>
                </div>
              )}

              {/* Actions */}
              <div className="flex items-center gap-3 pt-4 border-t border-gray-200 mt-4">
                <Button className="flex-1 bg-[#059669] text-white hover:bg-[#047857]">
                  View Patient Record
                </Button>
                <Button variant="outline" className="flex-1">
                  Start Consultation
                </Button>
                {apt.type === 'Telehealth' && (
                  <Button className="bg-cyan-600 text-white hover:bg-cyan-700">
                    <Video className="w-4 h-4 mr-2" />
                    Join Video Call
                  </Button>
                )}
              </div>
            </div>
          ))}

          {/* Break Time */}
          <div className="bg-gray-50 border-2 border-dashed border-gray-300 rounded-xl p-6 text-center">
            <Clock className="w-8 h-8 text-[#6B7280] mx-auto mb-2" />
            <p className="font-medium text-[#1F2937]">Lunch Break</p>
            <p className="text-sm text-[#6B7280]">12:00 PM - 1:00 PM</p>
          </div>
        </div>
      </div>

      {/* Summary Footer */}
      <div className="border-t border-gray-200 p-4 bg-[#F8F9FA]">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-6">
            <div>
              <span className="font-medium text-[#1F2937]">Total appointments:</span>{' '}
              <span className="text-[#6B7280]">5</span>
            </div>
            <div>
              <span className="font-medium text-[#1F2937]">Total time:</span>{' '}
              <span className="text-[#6B7280]">3 hours 15 minutes</span>
            </div>
            <div>
              <span className="font-medium text-[#1F2937]">Breaks:</span>{' '}
              <span className="text-[#6B7280]">1 hour 15 minutes</span>
            </div>
          </div>
          <Button variant="outline" size="sm">
            Export Schedule
          </Button>
        </div>
      </div>
    </div>
  );
}