import { useState } from 'react';
import { X, Edit3, CheckCircle, AlertTriangle } from 'lucide-react';
import { Button } from '../../ui/button';
import { Textarea } from '../../ui/textarea';

interface ModifyRecommendationModalProps {
  recommendation: {
    title: string;
    patientName: string;
    type: string;
    priority: string;
  };
  onClose: () => void;
  onSave: (modifiedNote: string) => void;
}

export function ModifyRecommendationModal({ recommendation, onClose, onSave }: ModifyRecommendationModalProps) {
  const [modifiedTitle, setModifiedTitle] = useState(recommendation.title);
  const [doctorNotes, setDoctorNotes] = useState('');
  const [adjustedPriority, setAdjustedPriority] = useState(recommendation.priority);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSave = () => {
    setShowSuccess(true);
    setTimeout(() => {
      onSave(doctorNotes);
      onClose();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-3xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-lg flex items-center justify-center">
              <Edit3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1F2937]">Modify Recommendation</h2>
              <p className="text-sm text-[#6B7280]">Adjust AI recommendation before applying</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-[#6B7280]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {showSuccess ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-2">Recommendation Modified!</h3>
              <p className="text-[#6B7280] text-center max-w-md">
                Your changes have been saved and the modified recommendation will be applied.
              </p>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Info Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <AlertTriangle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-blue-900 mb-1">Modifying AI Recommendation</h4>
                    <p className="text-sm text-blue-700">
                      You're adjusting an AI-generated recommendation for <strong>{recommendation.patientName}</strong>. 
                      Your changes will override the AI suggestion and will be applied to the patient's care plan.
                    </p>
                  </div>
                </div>
              </div>

              {/* Original Recommendation */}
              <div>
                <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                  Original AI Recommendation
                </label>
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                  <div className="flex items-start gap-3 mb-3">
                    <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase ${
                      recommendation.priority === 'high' ? 'bg-red-100 text-red-700' :
                      recommendation.priority === 'medium' ? 'bg-orange-100 text-orange-700' :
                      'bg-green-100 text-green-700'
                    }`}>
                      {recommendation.priority} Priority
                    </span>
                    <span className="px-3 py-1 bg-[#059669]/10 text-[#059669] rounded-full text-xs font-medium">
                      {recommendation.type}
                    </span>
                  </div>
                  <p className="text-sm text-[#1F2937]">{recommendation.title}</p>
                </div>
              </div>

              {/* Modified Title */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Modified Recommendation Title
                </label>
                <Textarea
                  value={modifiedTitle}
                  onChange={(e) => setModifiedTitle(e.target.value)}
                  rows={3}
                  className="resize-none"
                  placeholder="Adjust the recommendation title..."
                />
              </div>

              {/* Adjusted Priority */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Adjust Priority Level
                </label>
                <div className="grid grid-cols-3 gap-3">
                  <button
                    type="button"
                    onClick={() => setAdjustedPriority('high')}
                    className={`px-4 py-3 border-2 rounded-lg text-sm font-medium transition-all ${
                      adjustedPriority === 'high'
                        ? 'border-red-500 bg-red-50 text-red-700'
                        : 'border-gray-200 text-[#6B7280] hover:border-red-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-bold">High Priority</div>
                      <div className="text-xs opacity-75 mt-1">Urgent action needed</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdjustedPriority('medium')}
                    className={`px-4 py-3 border-2 rounded-lg text-sm font-medium transition-all ${
                      adjustedPriority === 'medium'
                        ? 'border-orange-500 bg-orange-50 text-orange-700'
                        : 'border-gray-200 text-[#6B7280] hover:border-orange-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-bold">Medium Priority</div>
                      <div className="text-xs opacity-75 mt-1">Address soon</div>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => setAdjustedPriority('low')}
                    className={`px-4 py-3 border-2 rounded-lg text-sm font-medium transition-all ${
                      adjustedPriority === 'low'
                        ? 'border-green-500 bg-green-50 text-green-700'
                        : 'border-gray-200 text-[#6B7280] hover:border-green-300'
                    }`}
                  >
                    <div className="text-center">
                      <div className="font-bold">Low Priority</div>
                      <div className="text-xs opacity-75 mt-1">Monitor & review</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Doctor's Notes */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Doctor's Notes & Justification for Changes
                </label>
                <Textarea
                  value={doctorNotes}
                  onChange={(e) => setDoctorNotes(e.target.value)}
                  rows={4}
                  className="resize-none"
                  placeholder="Explain why you're modifying this recommendation and any additional clinical context..."
                />
                <p className="text-xs text-[#6B7280] mt-1">
                  These notes will be saved with the modified recommendation
                </p>
              </div>

              {/* What Happens Next */}
              <div className="bg-[#F0FDF4] border border-[#22C55E]/30 rounded-xl p-4">
                <h4 className="text-sm font-bold text-[#1F2937] mb-2">What happens next?</h4>
                <ul className="space-y-1 text-sm text-[#6B7280]">
                  <li>✓ Modified recommendation will be applied to patient's care plan</li>
                  <li>✓ Changes will be logged in patient history</li>
                  <li>✓ Your notes will be visible to other healthcare providers</li>
                  <li>✓ AI model will learn from your adjustment for future recommendations</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        {!showSuccess && (
          <div className="flex items-center justify-end gap-3 p-6 border-t border-gray-200">
            <Button
              variant="outline"
              onClick={onClose}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSave}
              disabled={!modifiedTitle.trim() || !doctorNotes.trim()}
              className="bg-gradient-to-r from-[#059669] to-[#10B981] text-white hover:opacity-90"
            >
              <CheckCircle className="w-4 h-4 mr-2" />
              Save & Apply Changes
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
