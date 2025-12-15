import { useState } from 'react';
import { X, ChevronRight, Calendar, Clock, User, FileText, Check, Search } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Badge } from '../../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

interface ScheduleAppointmentModalProps {
  onClose: () => void;
}

type Step = 1 | 2 | 3 | 4;

const mockPatients = [
  { id: 'p1', name: 'Sarah Ahmed', patientId: 'P-2847', riskScore: 68, lastVisit: '2 weeks ago', avatar: 'SA' },
  { id: 'p2', name: 'Michael Chen', patientId: 'P-3291', riskScore: 45, lastVisit: '1 month ago', avatar: 'MC' },
  { id: 'p3', name: 'Emily Rodriguez', patientId: 'P-1829', riskScore: 82, lastVisit: '3 days ago', avatar: 'ER' },
  { id: 'p4', name: 'David Kim', patientId: 'P-4567', riskScore: 52, lastVisit: '1 week ago', avatar: 'DK' },
  { id: 'p5', name: 'Lisa Johnson', patientId: 'P-8832', riskScore: 38, lastVisit: '2 months ago', avatar: 'LJ' },
];

export function ScheduleAppointmentModal({ onClose }: ScheduleAppointmentModalProps) {
  const [currentStep, setCurrentStep] = useState<Step>(1);
  const [selectedPatient, setSelectedPatient] = useState<string | null>(null);
  const [appointmentData, setAppointmentData] = useState({
    date: '2025-12-15',
    time: '10:00',
    duration: '30',
    type: 'Follow-up',
    location: 'In-clinic',
    reason: '',
    priority: 'Normal',
    recurring: false,
    sendConfirmation: true,
    addReminder: true,
  });
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPatients = mockPatients.filter((patient) =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.patientId.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedPatientData = mockPatients.find((p) => p.id === selectedPatient);

  const getRiskColor = (score: number) => {
    if (score >= 70) return 'text-red-600 bg-red-100';
    if (score >= 50) return 'text-amber-600 bg-amber-100';
    return 'text-green-600 bg-green-100';
  };

  const handleNext = () => {
    if (currentStep < 4) {
      setCurrentStep((currentStep + 1) as Step);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep((currentStep - 1) as Step);
    }
  };

  const handleSchedule = () => {
    // Handle scheduling logic
    console.log('Scheduling appointment:', { selectedPatient, appointmentData });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl w-full max-w-3xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-[#1F2937]">Schedule New Appointment</h2>
            <p className="text-sm text-[#6B7280] mt-0.5">Step {currentStep} of 4</p>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-[#6B7280]" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 py-4 border-b border-gray-200">
          <div className="flex items-center gap-2">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={`h-2 rounded-full flex-1 transition-all ${
                    step <= currentStep ? 'bg-[#059669]' : 'bg-gray-200'
                  }`}
                />
                {step < 4 && <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />}
              </div>
            ))}
          </div>
          <div className="flex justify-between mt-2">
            <span className={`text-xs ${currentStep >= 1 ? 'text-[#059669] font-medium' : 'text-[#6B7280]'}`}>
              Patient
            </span>
            <span className={`text-xs ${currentStep >= 2 ? 'text-[#059669] font-medium' : 'text-[#6B7280]'}`}>
              Date & Time
            </span>
            <span className={`text-xs ${currentStep >= 3 ? 'text-[#059669] font-medium' : 'text-[#6B7280]'}`}>
              Details
            </span>
            <span className={`text-xs ${currentStep >= 4 ? 'text-[#059669] font-medium' : 'text-[#6B7280]'}`}>
              Confirm
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Step 1: Select Patient */}
          {currentStep === 1 && (
            <div>
              <h3 className="font-bold text-[#1F2937] mb-4">Select Patient</h3>
              
              {/* Search */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Search by name or patient ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10"
                />
              </div>

              {/* Recent Patients */}
              {searchQuery === '' && (
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-[#6B7280] mb-3">Recent Patients</h4>
                </div>
              )}

              {/* Patient List */}
              <div className="space-y-3 max-h-96 overflow-y-auto">
                {filteredPatients.map((patient) => (
                  <button
                    key={patient.id}
                    onClick={() => setSelectedPatient(patient.id)}
                    className={`w-full p-4 rounded-lg border-2 transition-all text-left ${
                      selectedPatient === patient.id
                        ? 'border-[#059669] bg-[#059669]/5'
                        : 'border-gray-200 hover:border-[#059669]/50'
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white font-medium">
                        {patient.avatar}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h4 className="font-bold text-[#1F2937]">{patient.name}</h4>
                          <span className="text-sm text-[#6B7280]">{patient.patientId}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge className={`${getRiskColor(patient.riskScore)} hover:${getRiskColor(patient.riskScore)} text-xs`}>
                            Risk: {patient.riskScore}%
                          </Badge>
                          <span className="text-xs text-[#6B7280]">Last visit: {patient.lastVisit}</span>
                        </div>
                      </div>
                      {selectedPatient === patient.id && (
                        <Check className="w-5 h-5 text-[#059669]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Step 2: Select Date & Time */}
          {currentStep === 2 && (
            <div>
              <h3 className="font-bold text-[#1F2937] mb-4">Select Date & Time</h3>
              
              {/* Selected Patient Summary */}
              {selectedPatientData && (
                <div className="bg-[#F8F9FA] rounded-lg p-4 mb-6 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-sm font-medium">
                    {selectedPatientData.avatar}
                  </div>
                  <div>
                    <p className="font-medium text-[#1F2937]">{selectedPatientData.name}</p>
                    <p className="text-sm text-[#6B7280]">{selectedPatientData.patientId}</p>
                  </div>
                </div>
              )}

              <div className="space-y-4">
                {/* Date Picker */}
                <div>
                  <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                    Date
                  </label>
                  <Input
                    type="date"
                    value={appointmentData.date}
                    onChange={(e) => setAppointmentData({ ...appointmentData, date: e.target.value })}
                  />
                </div>

                {/* Time Picker */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                      Start Time
                    </label>
                    <Input
                      type="time"
                      value={appointmentData.time}
                      onChange={(e) => setAppointmentData({ ...appointmentData, time: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                      Duration
                    </label>
                    <Select
                      value={appointmentData.duration}
                      onValueChange={(value) => setAppointmentData({ ...appointmentData, duration: value })}
                    >
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="15">15 minutes</SelectItem>
                        <SelectItem value="30">30 minutes</SelectItem>
                        <SelectItem value="45">45 minutes</SelectItem>
                        <SelectItem value="60">60 minutes</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Available Slots */}
                <div className="bg-[#F8F9FA] rounded-lg p-4">
                  <h4 className="text-sm font-medium text-[#6B7280] mb-3">Available time slots</h4>
                  <div className="grid grid-cols-4 gap-2">
                    {['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30'].map((time) => (
                      <Button
                        key={time}
                        variant="outline"
                        size="sm"
                        className={time === appointmentData.time ? 'border-[#059669] bg-[#059669]/10 text-[#059669]' : ''}
                        onClick={() => setAppointmentData({ ...appointmentData, time })}
                      >
                        {time}
                      </Button>
                    ))}
                  </div>
                  <Button variant="link" className="text-[#059669] mt-3 p-0 h-auto">
                    Find next available slot →
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Appointment Details */}
          {currentStep === 3 && (
            <div>
              <h3 className="font-bold text-[#1F2937] mb-4">Appointment Details</h3>
              
              <div className="space-y-4">
                {/* Type */}
                <div>
                  <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                    Appointment Type
                  </label>
                  <Select
                    value={appointmentData.type}
                    onValueChange={(value) => setAppointmentData({ ...appointmentData, type: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Initial">Initial Consultation</SelectItem>
                      <SelectItem value="Follow-up">Follow-up</SelectItem>
                      <SelectItem value="Urgent">Urgent</SelectItem>
                      <SelectItem value="Routine">Routine Check-up</SelectItem>
                      <SelectItem value="Telehealth">Telehealth</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Location */}
                <div>
                  <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                    Location
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className={appointmentData.location === 'In-clinic' ? 'border-[#059669] bg-[#059669]/10 text-[#059669]' : ''}
                      onClick={() => setAppointmentData({ ...appointmentData, location: 'In-clinic' })}
                    >
                      In-clinic
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className={appointmentData.location === 'Telehealth' ? 'border-[#059669] bg-[#059669]/10 text-[#059669]' : ''}
                      onClick={() => setAppointmentData({ ...appointmentData, location: 'Telehealth' })}
                    >
                      Telehealth
                    </Button>
                  </div>
                </div>

                {/* Reason */}
                <div>
                  <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                    Reason for Visit
                  </label>
                  <Textarea
                    placeholder="Enter reason for visit..."
                    value={appointmentData.reason}
                    onChange={(e) => setAppointmentData({ ...appointmentData, reason: e.target.value })}
                    rows={4}
                    className="resize-none"
                  />
                </div>

                {/* Priority */}
                <div>
                  <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                    Priority
                  </label>
                  <div className="grid grid-cols-2 gap-3">
                    <Button
                      type="button"
                      variant="outline"
                      className={appointmentData.priority === 'Normal' ? 'border-[#059669] bg-[#059669]/10 text-[#059669]' : ''}
                      onClick={() => setAppointmentData({ ...appointmentData, priority: 'Normal' })}
                    >
                      Normal
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className={appointmentData.priority === 'Urgent' ? 'border-red-500 bg-red-50 text-red-600' : ''}
                      onClick={() => setAppointmentData({ ...appointmentData, priority: 'Urgent' })}
                    >
                      Urgent
                    </Button>
                  </div>
                </div>

                {/* Recurring */}
                <div className="flex items-center gap-3 p-4 bg-[#F8F9FA] rounded-lg">
                  <input
                    type="checkbox"
                    id="recurring"
                    checked={appointmentData.recurring}
                    onChange={(e) => setAppointmentData({ ...appointmentData, recurring: e.target.checked })}
                    className="w-4 h-4 text-[#059669] rounded"
                  />
                  <label htmlFor="recurring" className="text-sm text-[#1F2937] font-medium flex-1">
                    Recurring appointment
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Confirmation */}
          {currentStep === 4 && (
            <div>
              <h3 className="font-bold text-[#1F2937] mb-6">Confirm Appointment</h3>
              
              {/* Summary */}
              <div className="bg-[#F8F9FA] rounded-lg p-6 space-y-4 mb-6">
                {/* Patient */}
                {selectedPatientData && (
                  <div className="flex items-center gap-4 pb-4 border-b border-gray-200">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white font-medium text-lg">
                      {selectedPatientData.avatar}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1F2937]">{selectedPatientData.name}</h4>
                      <p className="text-sm text-[#6B7280]">{selectedPatientData.patientId}</p>
                    </div>
                  </div>
                )}

                {/* Details */}
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-5 h-5 text-[#6B7280] mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[#1F2937]">Date</p>
                      <p className="text-sm text-[#6B7280]">
                        {new Date(appointmentData.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Clock className="w-5 h-5 text-[#6B7280] mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[#1F2937]">Time & Duration</p>
                      <p className="text-sm text-[#6B7280]">
                        {appointmentData.time} ({appointmentData.duration} minutes)
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <FileText className="w-5 h-5 text-[#6B7280] mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-[#1F2937]">Type & Location</p>
                      <p className="text-sm text-[#6B7280]">
                        {appointmentData.type} • {appointmentData.location}
                      </p>
                    </div>
                  </div>

                  {appointmentData.reason && (
                    <div className="flex items-start gap-3">
                      <FileText className="w-5 h-5 text-[#6B7280] mt-0.5" />
                      <div>
                        <p className="text-sm font-medium text-[#1F2937]">Reason</p>
                        <p className="text-sm text-[#6B7280]">{appointmentData.reason}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Options */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                  <input
                    type="checkbox"
                    id="sendConfirmation"
                    checked={appointmentData.sendConfirmation}
                    onChange={(e) => setAppointmentData({ ...appointmentData, sendConfirmation: e.target.checked })}
                    className="w-4 h-4 text-[#059669] rounded"
                  />
                  <label htmlFor="sendConfirmation" className="text-sm text-[#1F2937] font-medium flex-1">
                    Send confirmation to patient
                  </label>
                </div>

                <div className="flex items-center gap-3 p-4 bg-white border border-gray-200 rounded-lg">
                  <input
                    type="checkbox"
                    id="addReminder"
                    checked={appointmentData.addReminder}
                    onChange={(e) => setAppointmentData({ ...appointmentData, addReminder: e.target.checked })}
                    className="w-4 h-4 text-[#059669] rounded"
                  />
                  <label htmlFor="addReminder" className="text-sm text-[#1F2937] font-medium flex-1">
                    Add to reminder notifications
                  </label>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200 flex items-center justify-between">
          <Button
            variant="outline"
            onClick={currentStep === 1 ? onClose : handleBack}
          >
            {currentStep === 1 ? 'Cancel' : 'Back'}
          </Button>
          <div className="flex items-center gap-2">
            {currentStep < 4 ? (
              <Button
                onClick={handleNext}
                disabled={currentStep === 1 && !selectedPatient}
                className="bg-[#059669] text-white hover:bg-[#047857]"
              >
                Continue
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            ) : (
              <Button
                onClick={handleSchedule}
                className="bg-gradient-to-r from-[#059669] to-[#10B981] text-white hover:opacity-90"
              >
                <Check className="w-4 h-4 mr-2" />
                Schedule Appointment
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
