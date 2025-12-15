import { useState } from 'react';
import { Filter, Search, Calendar, Clock, User, Video, Eye, RefreshCw, X, CheckCircle } from 'lucide-react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Input } from '../../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

// Mock appointments data for list view
const mockListAppointments = [
  {
    id: 1,
    date: new Date(2025, 11, 14),
    time: '10:00 AM - 10:30 AM',
    duration: '30 min',
    patientName: 'Sarah Ahmed',
    patientId: 'P-2847',
    patientAvatar: 'SA',
    type: 'Follow-up',
    riskScore: 68,
    status: 'confirmed',
    lastSymptom: '2 hours ago, Moderate',
    notes: 'Follow-up on medication adjustment',
  },
  {
    id: 2,
    date: new Date(2025, 11, 14),
    time: '11:00 AM - 11:30 AM',
    duration: '30 min',
    patientName: 'Michael Chen',
    patientId: 'P-3291',
    patientAvatar: 'MC',
    type: 'Initial',
    riskScore: 45,
    status: 'confirmed',
    lastSymptom: '1 day ago, Mild',
    notes: 'New patient consultation',
  },
  {
    id: 3,
    date: new Date(2025, 11, 14),
    time: '2:00 PM - 2:30 PM',
    duration: '30 min',
    patientName: 'Emily Rodriguez',
    patientId: 'P-1829',
    patientAvatar: 'ER',
    type: 'Urgent',
    riskScore: 82,
    status: 'pending',
    lastSymptom: '30 minutes ago, Severe',
    notes: 'Urgent asthma exacerbation',
  },
  {
    id: 4,
    date: new Date(2025, 11, 15),
    time: '9:00 AM - 9:45 AM',
    duration: '45 min',
    patientName: 'David Kim',
    patientId: 'P-4567',
    patientAvatar: 'DK',
    type: 'Follow-up',
    riskScore: 52,
    status: 'confirmed',
    lastSymptom: '5 hours ago, Moderate',
    notes: 'Review treatment plan',
  },
  {
    id: 5,
    date: new Date(2025, 11, 15),
    time: '3:00 PM - 3:30 PM',
    duration: '30 min',
    patientName: 'Lisa Johnson',
    patientId: 'P-8832',
    patientAvatar: 'LJ',
    type: 'Initial',
    riskScore: 38,
    status: 'confirmed',
    lastSymptom: '3 days ago, Mild',
    notes: 'Initial assessment',
  },
  {
    id: 6,
    date: new Date(2025, 11, 16),
    time: '10:30 AM - 11:00 AM',
    duration: '30 min',
    patientName: 'James Wilson',
    patientId: 'P-7621',
    patientAvatar: 'JW',
    type: 'Check-up',
    riskScore: 30,
    status: 'completed',
    lastSymptom: '1 week ago, Mild',
    notes: 'Routine check-up',
  },
  {
    id: 7,
    date: new Date(2025, 11, 16),
    time: '2:00 PM - 2:30 PM',
    duration: '30 min',
    patientName: 'Maria Garcia',
    patientId: 'P-5543',
    patientAvatar: 'MG',
    type: 'Follow-up',
    riskScore: 55,
    status: 'confirmed',
    lastSymptom: '4 hours ago, Moderate',
    notes: 'Medication review',
  },
  {
    id: 8,
    date: new Date(2025, 11, 17),
    time: '11:00 AM - 11:30 AM',
    duration: '30 min',
    patientName: 'Robert Taylor',
    patientId: 'P-9012',
    patientAvatar: 'RT',
    type: 'Telehealth',
    riskScore: 42,
    status: 'confirmed',
    lastSymptom: '1 day ago, Mild',
    notes: 'Virtual consultation',
  },
];

export function ListView() {
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');
  const [typeFilter, setTypeFilter] = useState('all');

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
      case 'Telehealth':
        return 'bg-cyan-100 text-cyan-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed':
        return 'border-green-500';
      case 'pending':
        return 'border-amber-500';
      case 'completed':
        return 'border-gray-400';
      case 'cancelled':
        return 'border-red-500';
      default:
        return 'border-gray-300';
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
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-700 hover:bg-red-100">Cancelled</Badge>;
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 shadow-sm">
      {/* Filter Bar */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-4">
          {/* Search */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <Input
              type="text"
              placeholder="Search by patient name or ID..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>

          {/* Date Range */}
          <Select defaultValue="this-week">
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="today">Today</SelectItem>
              <SelectItem value="this-week">This Week</SelectItem>
              <SelectItem value="next-week">Next Week</SelectItem>
              <SelectItem value="this-month">This Month</SelectItem>
              <SelectItem value="custom">Custom Range</SelectItem>
            </SelectContent>
          </Select>

          {/* Status Filter */}
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="upcoming">Upcoming</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>

          {/* Type Filter */}
          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="initial">Initial</SelectItem>
              <SelectItem value="follow-up">Follow-up</SelectItem>
              <SelectItem value="urgent">Urgent</SelectItem>
              <SelectItem value="telehealth">Telehealth</SelectItem>
            </SelectContent>
          </Select>

          {/* Sort */}
          <Select defaultValue="date">
            <SelectTrigger className="w-40">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="date">Sort by Date</SelectItem>
              <SelectItem value="patient">Sort by Patient</SelectItem>
              <SelectItem value="status">Sort by Status</SelectItem>
              <SelectItem value="type">Sort by Type</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Appointment List */}
      <div className="p-6">
        <div className="space-y-4">
          {mockListAppointments.map((apt) => (
            <div
              key={apt.id}
              className={`bg-white border-l-4 ${getStatusColor(apt.status)} border border-gray-200 rounded-lg p-6 hover:shadow-md transition-all cursor-pointer`}
            >
              <div className="flex items-center gap-6">
                {/* Date & Time Section */}
                <div className="w-32 flex-shrink-0">
                  <div className="text-sm text-[#6B7280] mb-1">
                    {apt.date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })}
                  </div>
                  <div className="font-medium text-[#1F2937]">{apt.time}</div>
                  <Badge variant="outline" className="mt-2">
                    <Clock className="w-3 h-3 mr-1" />
                    {apt.duration}
                  </Badge>
                </div>

                {/* Patient Info Section */}
                <div className="flex-1">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white font-medium">
                      {apt.patientAvatar}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="font-bold text-[#1F2937]">{apt.patientName}</h3>
                        <span className="text-sm text-[#6B7280]">{apt.patientId}</span>
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getRiskColor(apt.riskScore)}`}>
                          Risk: {apt.riskScore}%
                        </span>
                      </div>
                      <div className="flex items-center gap-4 mb-2">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getTypeColor(apt.type)}`}>
                          {apt.type}
                        </span>
                        {apt.type === 'Telehealth' && (
                          <div className="flex items-center gap-1.5 text-sm text-cyan-600">
                            <Video className="w-4 h-4" />
                            <span>Virtual</span>
                          </div>
                        )}
                      </div>
                      <div className="text-sm text-[#6B7280]">
                        <span className="font-medium">Last symptom:</span> {apt.lastSymptom}
                      </div>
                      {apt.notes && (
                        <div className="text-sm text-[#6B7280] mt-1">
                          <span className="font-medium">Notes:</span> {apt.notes}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Status & Actions Section */}
                <div className="flex flex-col items-end gap-3">
                  {getStatusBadge(apt.status)}
                  <div className="flex items-center gap-2">
                    <Button size="sm" variant="outline" className="gap-1">
                      <Eye className="w-4 h-4" />
                      View
                    </Button>
                    {apt.status !== 'completed' && (
                      <>
                        <Button size="sm" variant="outline" className="gap-1">
                          <RefreshCw className="w-4 h-4" />
                          Reschedule
                        </Button>
                        {apt.status === 'confirmed' && (
                          <Button size="sm" className="bg-[#059669] text-white hover:bg-[#047857] gap-1">
                            <CheckCircle className="w-4 h-4" />
                            Start
                          </Button>
                        )}
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="border-t border-gray-200 p-4">
        <div className="flex items-center justify-between">
          <p className="text-sm text-[#6B7280]">
            Showing 1-8 of 48 appointments
          </p>
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm">Previous</Button>
            <Button variant="outline" size="sm" className="bg-[#059669] text-white border-[#059669]">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <Button variant="outline" size="sm">Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
}