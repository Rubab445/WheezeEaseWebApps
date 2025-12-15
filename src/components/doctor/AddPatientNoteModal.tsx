import { useState } from 'react';
import { X, FileText, User, Search, CheckCircle, Paperclip, Save, AlertCircle, Tag, Clock } from 'lucide-react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface AddPatientNoteModalProps {
  onClose: () => void;
}

// Mock patient data
const mockPatients = [
  { 
    id: 'P-2847', 
    name: 'Sarah Ahmed', 
    riskScore: 68, 
    condition: 'Moderate Asthma',
    lastVisit: '2 days ago',
    avatar: 'SA'
  },
  { 
    id: 'P-3291', 
    name: 'Michael Chen', 
    riskScore: 45, 
    condition: 'Seasonal Allergies',
    lastVisit: '1 week ago',
    avatar: 'MC'
  },
  { 
    id: 'P-1829', 
    name: 'Emily Rodriguez', 
    riskScore: 82, 
    condition: 'Severe Asthma',
    lastVisit: '3 hours ago',
    avatar: 'ER'
  },
  { 
    id: 'P-4567', 
    name: 'David Kim', 
    riskScore: 52, 
    condition: 'Mild Asthma',
    lastVisit: '5 days ago',
    avatar: 'DK'
  },
  { 
    id: 'P-8832', 
    name: 'Lisa Johnson', 
    riskScore: 38, 
    condition: 'Dust Allergies',
    lastVisit: '1 week ago',
    avatar: 'LJ'
  },
  { 
    id: 'P-7621', 
    name: 'James Wilson', 
    riskScore: 30, 
    condition: 'Pollen Allergies',
    lastVisit: '2 weeks ago',
    avatar: 'JW'
  },
];

export function AddPatientNoteModal({ onClose }: AddPatientNoteModalProps) {
  const [step, setStep] = useState(1);
  const [selectedPatient, setSelectedPatient] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState('');
  const [noteType, setNoteType] = useState('');
  const [priority, setPriority] = useState('');
  const [noteTitle, setNoteTitle] = useState('');
  const [noteContent, setNoteContent] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [followUpRequired, setFollowUpRequired] = useState(false);
  const [followUpDate, setFollowUpDate] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const filteredPatients = mockPatients.filter(patient =>
    patient.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
    patient.condition.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const selectedPatientData = mockPatients.find(p => p.id === selectedPatient);

  const getRiskColor = (score: number) => {
    if (score >= 70) return 'bg-red-100 text-red-700';
    if (score >= 50) return 'bg-amber-100 text-amber-700';
    return 'bg-green-100 text-green-700';
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'urgent':
        return 'border-red-500 bg-red-50 text-red-700';
      case 'high':
        return 'border-orange-500 bg-orange-50 text-orange-700';
      case 'normal':
        return 'border-blue-500 bg-blue-50 text-blue-700';
      case 'low':
        return 'border-gray-500 bg-gray-50 text-gray-700';
      default:
        return 'border-gray-200 bg-white text-gray-700';
    }
  };

  const availableTags = [
    'Medication Change',
    'Symptom Update',
    'Lifestyle',
    'Emergency',
    'Follow-up Required',
    'Test Results',
    'Progress',
    'Concerns'
  ];

  const toggleTag = (tag: string) => {
    if (tags.includes(tag)) {
      setTags(tags.filter(t => t !== tag));
    } else {
      setTags([...tags, tag]);
    }
  };

  const handleSubmit = () => {
    setShowSuccess(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const canProceedToStep2 = selectedPatient !== '';
  const canSubmit = noteType && priority && noteTitle && noteContent;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1F2937]">Add Patient Note</h2>
              <p className="text-sm text-[#6B7280]">
                {step === 1 ? 'Select a patient to add a note' : `Add note for ${selectedPatientData?.name}`}
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
              <span className="text-sm font-medium">Note Details</span>
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
              <h3 className="text-xl font-bold text-[#1F2937] mb-2">Note Added Successfully!</h3>
              <p className="text-[#6B7280] text-center">
                The note has been saved to the patient's record and is now accessible.
              </p>
            </div>
          ) : step === 1 ? (
            <div>
              {/* Search Patient */}
              <div className="mb-6">
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  <Search className="w-4 h-4 inline mr-1" />
                  Search Patient
                </label>
                <Input
                  type="text"
                  placeholder="Search by name, ID, or condition..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full"
                />
              </div>

              {/* Patient List */}
              <div className="space-y-3 max-h-[450px] overflow-y-auto">
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
                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white font-medium text-lg">
                          {patient.avatar}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className="font-bold text-[#1F2937]">{patient.name}</span>
                            <span className="text-sm text-[#6B7280]">{patient.id}</span>
                          </div>
                          <div className="flex items-center gap-3 mb-2">
                            <Badge className={`${getRiskColor(patient.riskScore)} hover:${getRiskColor(patient.riskScore)}`}>
                              Risk: {patient.riskScore}%
                            </Badge>
                            <span className="text-sm text-[#6B7280]">{patient.condition}</span>
                          </div>
                          <div className="text-xs text-[#6B7280]">
                            <Clock className="w-3 h-3 inline mr-1" />
                            Last visit: {patient.lastVisit}
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
                      {selectedPatientData.avatar}
                    </div>
                    <div className="flex-1">
                      <div className="font-bold text-[#1F2937]">{selectedPatientData.name}</div>
                      <div className="text-sm text-[#6B7280]">{selectedPatientData.id} • {selectedPatientData.condition}</div>
                    </div>
                    <Badge className={`${getRiskColor(selectedPatientData.riskScore)}`}>
                      Risk: {selectedPatientData.riskScore}%
                    </Badge>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-2 gap-6">
                {/* Note Type */}
                <div>
                  <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                    Note Type *
                  </label>
                  <Select value={noteType} onValueChange={setNoteType}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select type..." />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="clinical">Clinical Observation</SelectItem>
                      <SelectItem value="progress">Progress Update</SelectItem>
                      <SelectItem value="medication">Medication Note</SelectItem>
                      <SelectItem value="symptom">Symptom Report</SelectItem>
                      <SelectItem value="consultation">Consultation Summary</SelectItem>
                      <SelectItem value="followup">Follow-up Note</SelectItem>
                      <SelectItem value="general">General Note</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Priority */}
                <div>
                  <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                    Priority *
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    <button
                      type="button"
                      onClick={() => setPriority('urgent')}
                      className={`px-3 py-2 border-2 rounded-lg text-xs font-medium transition-all ${
                        priority === 'urgent'
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-200 text-[#6B7280] hover:border-red-300'
                      }`}
                    >
                      Urgent
                    </button>
                    <button
                      type="button"
                      onClick={() => setPriority('high')}
                      className={`px-3 py-2 border-2 rounded-lg text-xs font-medium transition-all ${
                        priority === 'high'
                          ? 'border-orange-500 bg-orange-50 text-orange-700'
                          : 'border-gray-200 text-[#6B7280] hover:border-orange-300'
                      }`}
                    >
                      High
                    </button>
                    <button
                      type="button"
                      onClick={() => setPriority('normal')}
                      className={`px-3 py-2 border-2 rounded-lg text-xs font-medium transition-all ${
                        priority === 'normal'
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 text-[#6B7280] hover:border-blue-300'
                      }`}
                    >
                      Normal
                    </button>
                    <button
                      type="button"
                      onClick={() => setPriority('low')}
                      className={`px-3 py-2 border-2 rounded-lg text-xs font-medium transition-all ${
                        priority === 'low'
                          ? 'border-gray-500 bg-gray-50 text-gray-700'
                          : 'border-gray-200 text-[#6B7280] hover:border-gray-400'
                      }`}
                    >
                      Low
                    </button>
                  </div>
                </div>
              </div>

              {/* Note Title */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Note Title *
                </label>
                <Input
                  type="text"
                  placeholder="Enter a brief title for this note..."
                  value={noteTitle}
                  onChange={(e) => setNoteTitle(e.target.value)}
                />
              </div>

              {/* Note Content */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Note Content *
                </label>
                <Textarea
                  placeholder="Write your detailed note here..."
                  value={noteContent}
                  onChange={(e) => setNoteContent(e.target.value)}
                  rows={6}
                  className="resize-none"
                />
                <p className="text-xs text-[#6B7280] mt-1">
                  {noteContent.length} characters
                </p>
              </div>

              {/* Tags */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  <Tag className="w-4 h-4 inline mr-1" />
                  Tags (Optional)
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableTags.map((tag) => (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => toggleTag(tag)}
                      className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all ${
                        tags.includes(tag)
                          ? 'bg-[#059669] text-white'
                          : 'bg-gray-100 text-[#6B7280] hover:bg-gray-200'
                      }`}
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* Follow-up */}
              <div className="border-t border-gray-200 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <input
                    type="checkbox"
                    id="followup"
                    checked={followUpRequired}
                    onChange={(e) => setFollowUpRequired(e.target.checked)}
                    className="w-4 h-4 text-[#059669] border-gray-300 rounded focus:ring-[#059669]"
                  />
                  <label htmlFor="followup" className="text-sm font-medium text-[#1F2937]">
                    <AlertCircle className="w-4 h-4 inline mr-1" />
                    Follow-up required
                  </label>
                </div>

                {followUpRequired && (
                  <div className="ml-7 grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                        Follow-up Date
                      </label>
                      <Input
                        type="date"
                        value={followUpDate}
                        onChange={(e) => setFollowUpDate(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                        Time
                      </label>
                      <Input type="time" defaultValue="10:00" />
                    </div>
                  </div>
                )}
              </div>

              {/* Attachments */}
              <div className="border-t border-gray-200 pt-6">
                <label className="text-sm font-medium text-[#1F2937] mb-3 block">
                  Attachments (Optional)
                </label>
                <button
                  type="button"
                  className="flex items-center gap-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-lg text-[#6B7280] hover:border-[#059669] hover:text-[#059669] hover:bg-[#059669]/5 transition-all w-full justify-center"
                >
                  <Paperclip className="w-4 h-4" />
                  Attach files (images, documents, test results)
                </button>
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
                <Save className="w-4 h-4 mr-2" />
                {step === 1 ? 'Continue' : 'Save Note'}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
