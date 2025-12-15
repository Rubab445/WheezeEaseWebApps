import { X, Paperclip, Save } from 'lucide-react';
import { useState } from 'react';

interface QuickNotePanelProps {
  patientId: string;
  onClose: () => void;
}

// Mock patient data - in real app would fetch based on patientId
const mockPatient = {
  id: '1',
  name: 'Sarah Ahmed',
  avatar: 'SA',
  patientId: 'P-1001',
};

export function QuickNotePanel({ patientId, onClose }: QuickNotePanelProps) {
  const [note, setNote] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const handleSave = () => {
    setIsSaving(true);
    // Simulate save
    setTimeout(() => {
      setIsSaving(false);
      onClose();
    }, 1000);
  };

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
      />

      {/* Slide-in Panel */}
      <div className="fixed right-0 top-0 bottom-0 w-[480px] bg-white shadow-2xl z-50 flex flex-col animate-slide-in">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gradient-to-r from-[#059669] to-[#10B981]">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white text-sm font-bold">
              {mockPatient.avatar}
            </div>
            <div>
              <h2 className="text-lg font-bold text-white">{mockPatient.name}</h2>
              <p className="text-sm text-white/80">{mockPatient.patientId}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-white/20 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 p-6 overflow-y-auto">
          <div className="mb-4">
            <label className="block text-sm font-medium text-[#1F2937] mb-2">
              Quick Note
            </label>
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder="Add a quick note about this patient..."
              rows={8}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg text-sm text-[#1F2937] placeholder-gray-400 focus:outline-none focus:border-[#059669] focus:ring-2 focus:ring-[#059669]/20 resize-none"
            />
          </div>

          <div className="mb-6">
            <button className="flex items-center gap-2 px-4 py-2 border border-gray-300 text-[#6B7280] rounded-lg hover:border-[#059669] hover:text-[#059669] hover:bg-[#059669]/5 transition-all text-sm">
              <Paperclip className="w-4 h-4" />
              Attach file
            </button>
          </div>

          {/* Recent Notes Preview */}
          <div className="border-t border-gray-200 pt-4">
            <h3 className="text-sm font-medium text-[#1F2937] mb-3">Recent Notes</h3>
            <div className="space-y-3">
              <div className="bg-[#F8F9FA] rounded-lg p-3">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium text-[#1F2937]">Dr. Sarah Khan</span>
                  <span className="text-xs text-[#6B7280]">Dec 10, 2025</span>
                </div>
                <p className="text-sm text-[#6B7280]">
                  Patient reported improved breathing. Reduced inhaler usage from 3x to 1x daily.
                </p>
              </div>
              <div className="bg-[#F8F9FA] rounded-lg p-3">
                <div className="flex items-start justify-between mb-2">
                  <span className="text-xs font-medium text-[#1F2937]">Dr. Sarah Khan</span>
                  <span className="text-xs text-[#6B7280]">Dec 5, 2025</span>
                </div>
                <p className="text-sm text-[#6B7280]">
                  Advised to avoid outdoor activities during high pollen count days.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-[#F8F9FA]">
          <div className="flex items-center gap-3">
            <button
              onClick={handleSave}
              disabled={isSaving || !note.trim()}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed font-medium"
            >
              <Save className="w-4 h-4" />
              {isSaving ? 'Saving...' : 'Save Note'}
            </button>
            <button
              onClick={onClose}
              className="px-6 py-3 text-[#6B7280] hover:bg-gray-200 rounded-lg transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-in {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
        .animate-slide-in {
          animation: slide-in 0.3s ease-out;
        }
      `}</style>
    </>
  );
}
