import { AlertTriangle, X } from 'lucide-react';

interface UnsavedChangesBarProps {
  onSave: () => void;
  onDiscard: () => void;
}

export function UnsavedChangesBar({ onSave, onDiscard }: UnsavedChangesBarProps) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30">
      <div className="bg-[#0E1629] backdrop-blur-xl border border-orange-500/50 rounded-2xl shadow-2xl shadow-orange-500/20 px-6 py-4 flex items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-orange-500/20 border border-orange-500/30 flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
          </div>
          <div>
            <p className="text-white font-medium">Unsaved Changes</p>
            <p className="text-xs text-gray-400">You have unsaved changes that will be lost if you navigate away</p>
          </div>
        </div>

        <div className="w-px h-12 bg-white/20" />

        <div className="flex items-center gap-3">
          <button
            onClick={onDiscard}
            className="px-5 py-2.5 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-all"
          >
            Discard
          </button>

          <button
            onClick={onSave}
            className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all"
          >
            Save Changes
          </button>
        </div>

        <div className="w-px h-12 bg-white/20" />

        <button
          onClick={onDiscard}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          title="Dismiss"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
