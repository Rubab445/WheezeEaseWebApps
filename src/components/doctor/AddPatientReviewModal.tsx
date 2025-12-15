import { useState } from 'react';
import { X, User, FileText, Star, AlertCircle, CheckCircle, Calendar, Clock, Stethoscope, Pill, Activity } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Badge } from '../ui/badge';

interface AddPatientReviewModalProps {
  onClose: () => void;
}

// Mock patient data
const mockPatients = [
  { id: 'P-2847', name: 'Sarah Ahmed', riskScore: 68, lastVisit: '2 days ago' },
  { id: 'P-3291', name: 'Michael Chen', riskScore: 45, lastVisit: '1 week ago' },
  { id: 'P-1829', name: 'Emily Rodriguez', riskScore: 82, lastVisit: '3 hours ago' },
  { id: 'P-4567', name: 'David Kim', riskScore: 52, lastVisit: '5 days ago' },
  { id: 'P-8832', name: 'Lisa Johnson', riskScore: 38, lastVisit: '1 week ago' },
  { id: 'P-7621', name: 'James Wilson', riskScore: 30, lastVisit: '2 weeks ago' },
];

export function AddPatientReviewModal({ onClose }: AddPatientReviewModalProps) {
  const [step, setStep] = useState(1);
  const [selectedPatient, setSelectedPatient] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [reviewType, setReviewType] = useState('');
  const [severity, setSeverity] = useState('');
  const [diagnosis, setDiagnosis] = useState('');
  const [symptoms, setSymptoms] = useState('');
  const [treatment, setTreatment] = useState('');
  const [medications, setMedications] = useState('');
  const [followUpDate, setFollowUpDate] = useState('');
  const [notes, setNotes] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedPatientData = mockPatients.find(p => p.id === selectedPatient);

  const getRiskColor = (score: number) => {
    if (score >= 70) return 'bg-red-100 text-red-700';
    if (score >= 50) return 'bg-amber-100 text-amber-700';
    return 'bg-green-100 text-green-700';
  };

  const handleSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const canProceedToStep2 = selectedPatient !== '';
  const canSubmit = reviewType && severity && diagnosis && symptoms && treatment;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1F2937]">Add Patient Review</h2>
              <p className="text-sm text-[#6B7280]">
                {step === 1 ? 'Select a patient' : `Review for ${selectedPatientData?.name}`}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-[#6B7280]" />
          </button>
        </div>

        {/* Progress Steps */}
        <div className="px-6 py-4 border-b border-gray-200 bg-[#F8F9FA]">
          <div className="flex items-center gap-4">
            <div className={`flex items-center gap-2 ${step >= 1 ? 'text-[#059669]' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-[#059669] text-white' : 'bg-gray-200'
              }`}>
                1
              </div>
              <span className="text-sm font-medium">Select Patient</span>
            </div>
            <div className={`flex-1 h-0.5 ${step >= 2 ? 'bg-[#059669]' : 'bg-gray-200'}`} />
            <div className={`flex items-center gap-2 ${step >= 2 ? 'text-[#059669]' : 'text-gray-400'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                step >= 2 ? 'bg-[#059669] text-white' : 'bg-gray-200'
              }`}>
                2
              </div>
              <span className="text-sm font-medium">Review Details</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {showSuccess ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-2">Review Added Successfully!</h3>
              <p className="text-[#6B7280] text-center">
                The patient review has been saved and will be available in the patient record.
              </p>
            </div>
          ) : step === 1 ? (
            <div>
              {/* Search Patient */}
              <div className="mb-6">
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Search Patient
                </label>
                <Input
                  type="text"
                  placeholder="Search by name or patient ID..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Patient List */}
              <div className="space-y-3">
                {filteredPatients.length === 0 ? (
                  <div className="text-center py-8 text-[#6B7280]">
                    No patients found
                  </div>
                ) : (
                  filteredPatients.map((patient) => (
                    <button
                      key={patient.id}
                      onClick={() => setSelectedPatient(patient.id)}
                      className={`w-full p-4 border-2 rounded-xl text-left transition-all hover:shadow-md ${
                        selectedPatient === patient.id
                          ? 'border-[#059669] bg-[#059669]/5'
                          : 'border-gray-200 hover:border-[#059669]/30'
                      }`}
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white font-medium">
                          {patient.name.split(' ').map(n => n[0]).join('')}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="font-bold text-[#1F2937]">{patient.name}</span>
                            <span className="text-sm text-[#6B7280]">{patient.id}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <Badge className={`${getRiskColor(patient.riskScore)} hover:${getRiskColor(patient.riskScore)}`}>
                              Risk: {patient.riskScore}%
                            </Badge>
                            <span className="text-xs text-[#6B7280]">Last visit: {patient.lastVisit}</span>
                          </div>
                        </div>
                        {selectedPatient === patient.id && (
                          <CheckCircle className="w-6 h-6 text-[#059669]" />
                        )}
                      </div>
                    </button>
                  ))
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Patient Info Card */}
              {selectedPatientData && (
                <div className="bg-gradient-to-r from-[#059669]/10 to-[#10B981]/10 border border-[#059669]/20 rounded-xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white font-medium">
                      {selectedPatientData.name.split(' ').map(n => n[0]).join('')}
                    </div>
                    <div>
                      <div className="font-bold text-[#1F2937]">{selectedPatientData.name}</div>
                      <div className="text-sm text-[#6B7280]">{selectedPatientData.id}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Review Type */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Review Type *
                </label>
                <Select value={reviewType} onValueChange={setReviewType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select review type..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="routine">Routine Check-up</SelectItem>
                    <SelectItem value="followup">Follow-up Visit</SelectItem>
                    <SelectItem value="emergency">Emergency Consultation</SelectItem>
                    <SelectItem value="symptom">Symptom Assessment</SelectItem>
                    <SelectItem value="medication">Medication Review</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Severity Level */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Severity Level *
                </label>
                <div className="grid grid-cols-4 gap-3">
                  <button
                    type="button"
                    onClick={() => setSeverity('mild')}
                    className={`px-4 py-3 border-2 rounded-lg text-sm font-medium transition-all ${
                      severity === 'mild'
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 text-[#6B7280] hover:border-green-300'
                    }`}
                  >
                    Mild
                  </button>
                  <button
                    type="button"
                    onClick={() => setSeverity('moderate')}
                    className={`px-4 py-3 border-2 rounded-lg text-sm font-medium transition-all ${
                      severity === 'moderate'
                        ? 'border-amber-500 bg-amber-50 text-amber-700'
                        : 'border-gray-200 text-[#6B7280] hover:border-amber-300'
                    }`}
                  >
                    Moderate
                  </button>
                  <button
                    type="button"
                    onClick={() => setSeverity('severe')}
                    className={`px-4 py-3 border-2 rounded-lg text-sm font-medium transition-all ${
                      severity === 'severe'
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200 text-[#6B7280] hover:border-red-300'
                    }`}
                  >
                    Severe
                  </button>
                  <button
                    type="button"
                    onClick={() => setSeverity('critical')}
                    className={`px-4 py-3 border-2 rounded-lg text-sm font-medium transition-all ${
                      severity === 'critical'
                        ? 'border-purple-500 bg-purple-50 text-purple-700'
                        : 'border-gray-200 text-[#6B7280] hover:border-purple-300'
                    }`}
                  >
                    Critical
                  </button>
                </div>
              </div>

              {/* Diagnosis */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  <Stethoscope className="w-4 h-4 inline mr-1" />
                  Diagnosis *
                </label>
                <Input
                  type="text"
                  placeholder="Enter diagnosis..."
                  value={diagnosis}
                  onChange={(e) => setDiagnosis(e.target.value)}
                />
              </div>

              {/* Symptoms */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  <Activity className="w-4 h-4 inline mr-1" />
                  Symptoms Observed *
                </label>
                <Textarea
                  placeholder="Describe the symptoms observed during the review..."
                  value={symptoms}
                  onChange={(e) => setSymptoms(e.target.value)}
                  rows={3}
                  className="resize-none"
                />
              </div>

              {/* Treatment Plan */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Treatment Plan *
                </label>
                <Textarea
                  placeholder="Outline the treatment plan..."
                  value={treatment}
                  onChange={(e) => setTreatment(e.target.value)}
                  rows={3}
                  className="resize-none"
                />
              </div>

              {/* Medications */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  <Pill className="w-4 h-4 inline mr-1" />
                  Medications Prescribed
                </label>
                <Textarea
                  placeholder="List medications and dosages..."
                  value={medications}
                  onChange={(e) => setMedications(e.target.value)}
                  rows={2}
                  className="resize-none"
                />
              </div>

              {/* Follow-up Date */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                    <Calendar className="w-4 h-4 inline mr-1" />
                    Follow-up Date
                  </label>
                  <Input
                    type="date"
                    value={followUpDate}
                    onChange={(e) => setFollowUpDate(e.target.value)}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                    <Clock className="w-4 h-4 inline mr-1" />
                    Time
                  </label>
                  <Input type="time" defaultValue="10:00" />
                </div>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Additional Notes
                </label>
                <Textarea
                  placeholder="Any additional notes or observations..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="resize-none"
                />
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {!showSuccess && (
          <div className="flex items-center justify-between p-6 border-t border-gray-200 bg-[#F8F9FA]">
            <Button
              variant="outline"
              onClick={() => {
                if (step === 1) {
                  onClose();
                } else {
                  setStep(1);
                }
              }}
            >
              {step === 1 ? 'Cancel' : 'Back'}
            </Button>
            <div className="flex items-center gap-3">
              {step === 2 && (
                <p className="text-xs text-[#6B7280]">* Required fields</p>
              )}
              <Button
                onClick={() => {
                  if (step === 1) {
                    setStep(2);
                  } else {
                    handleSubmit();
                  }
                }}
                disabled={step === 1 ? !canProceedToStep2 : !canSubmit}
                className="bg-gradient-to-r from-[#059669] to-[#10B981] text-white hover:opacity-90"
              >
                {step === 1 ? 'Continue' : 'Submit Review'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
