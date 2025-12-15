import { Calendar, Clock, Plus, Paperclip, Tag } from 'lucide-react';

const upcomingAppointments = [
  {
    id: '1',
    date: 'Dec 15, 2025',
    time: '10:00 AM',
    type: 'Follow-up',
    status: 'confirmed',
  },
  {
    id: '2',
    date: 'Jan 12, 2026',
    time: '2:30 PM',
    type: 'Routine Checkup',
    status: 'pending',
  },
];

const pastAppointments = [
  {
    id: '3',
    date: 'Nov 20, 2025',
    time: '11:00 AM',
    type: 'Follow-up',
    notes: 'Patient reported improvement in symptoms. Adjusted medication dosage.',
  },
  {
    id: '4',
    date: 'Oct 15, 2025',
    time: '3:00 PM',
    type: 'Emergency',
    notes: 'Severe asthma attack. Administered nebulizer treatment. Prescribed oral steroids.',
  },
];

const doctorNotes = [
  {
    id: '1',
    date: 'Dec 10, 2025',
    time: '2:30 PM',
    doctor: 'Dr. Sarah Khan',
    tag: 'routine',
    content: 'Patient reported improved breathing. Reduced inhaler usage from 3x to 1x daily. Continue current medication regimen.',
  },
  {
    id: '2',
    date: 'Dec 5, 2025',
    time: '10:15 AM',
    doctor: 'Dr. Sarah Khan',
    tag: 'urgent',
    content: 'Advised to avoid outdoor activities during high pollen count days. Provided patient with pollen calendar.',
  },
];

export function AppointmentsNotesTab() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* LEFT: Appointments */}
      <div className="space-y-6">
        {/* Add Appointment Button */}
        <button className="w-full flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-lg hover:shadow-lg transition-all font-medium">
          <Plus className="w-5 h-5" />
          Schedule New Appointment
        </button>

        {/* Upcoming Appointments */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-[#1F2937] mb-4">Upcoming Appointments</h2>
          
          <div className="space-y-3">
            {upcomingAppointments.map((apt) => (
              <div key={apt.id} className="p-4 bg-[#F8F9FA] rounded-lg hover:shadow-sm transition-shadow">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-[#059669]/10 rounded-lg flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-[#059669]" />
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#1F2937]">{apt.date}</p>
                      <div className="flex items-center gap-1 text-xs text-[#6B7280]">
                        <Clock className="w-3 h-3" />
                        {apt.time}
                      </div>
                    </div>
                  </div>
                  <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                    apt.status === 'confirmed' ? 'bg-[#22C55E] text-white' : 'bg-[#F59E0B] text-white'
                  }`}>
                    {apt.status === 'confirmed' ? 'Confirmed' : 'Pending'}
                  </span>
                </div>
                <p className="text-sm text-[#6B7280]">{apt.type}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Past Appointments */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-[#1F2937] mb-4">Past Appointments</h2>
          
          <div className="space-y-3">
            {pastAppointments.map((apt) => (
              <div key={apt.id} className="p-4 bg-[#F8F9FA] rounded-lg">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-sm font-bold text-[#1F2937]">{apt.date}</p>
                    <p className="text-xs text-[#6B7280]">{apt.time} • {apt.type}</p>
                  </div>
                </div>
                {apt.notes && (
                  <p className="text-sm text-[#6B7280] mt-2 italic">"{apt.notes}"</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* RIGHT: Doctor Notes */}
      <div className="space-y-6">
        {/* Add Note Section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-[#1F2937] mb-4">Add New Note</h2>
          
          <textarea
            placeholder="Write your note here..."
            rows={6}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#1F2937] placeholder-gray-400 focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 resize-none mb-3"
          />

          <div className="flex items-center gap-3 mb-4">
            <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 text-[#6B7280] rounded-lg hover:border-[#059669] hover:text-[#059669] transition-colors text-sm">
              <Paperclip className="w-4 h-4" />
              Attach files
            </button>

            <div className="relative flex-1">
              <Tag className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <select className="w-full appearance-none pl-10 pr-4 py-2 border border-gray-300 rounded-lg text-sm text-[#1F2937] cursor-pointer focus:outline-none focus:border-[#059669]">
                <option>Routine</option>
                <option>Urgent</option>
                <option>Follow-up</option>
              </select>
            </div>
          </div>

          <button className="w-full px-4 py-3 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-lg hover:shadow-lg transition-all font-medium">
            Save Note
          </button>
        </div>

        {/* Previous Notes */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
          <h2 className="text-lg font-bold text-[#1F2937] mb-4">Previous Notes</h2>
          
          <div className="space-y-4">
            {doctorNotes.map((note) => {
              const getTagColor = (tag: string) => {
                if (tag === 'routine') return 'bg-[#059669] text-white';
                if (tag === 'urgent') return 'bg-[#EF4444] text-white';
                return 'bg-[#F59E0B] text-white';
              };

              return (
                <div key={note.id} className="p-4 bg-[#F8F9FA] rounded-lg border-l-4 border-[#059669]">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <p className="text-sm font-bold text-[#1F2937]">{note.doctor}</p>
                      <p className="text-xs text-[#6B7280]">{note.date} at {note.time}</p>
                    </div>
                    <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${getTagColor(note.tag)}`}>
                      {note.tag.charAt(0).toUpperCase() + note.tag.slice(1)}
                    </span>
                  </div>
                  <p className="text-sm text-[#1F2937] mt-3">{note.content}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
