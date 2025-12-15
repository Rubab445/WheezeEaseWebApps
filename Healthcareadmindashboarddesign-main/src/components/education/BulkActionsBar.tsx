import { X, CheckCircle, Archive, FolderEdit, Trash2 } from 'lucide-react';

interface BulkActionsBarProps {
  count: number;
  onClear: () => void;
}

export function BulkActionsBar({ count, onClear }: BulkActionsBarProps) {
  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-30">
      <div className="bg-[#0E1629] backdrop-blur-xl border border-white/20 rounded-2xl shadow-2xl px-6 py-4 flex items-center gap-4">
        <div className="flex items-center gap-2">
          <CheckCircle className="w-5 h-5 text-purple-400" />
          <span className="text-white font-medium">{count} selected</span>
        </div>

        <div className="w-px h-6 bg-white/20" />

        <div className="flex items-center gap-2">
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500/20 border border-green-500/30 text-green-300 hover:bg-green-500/30 transition-all text-sm">
            <CheckCircle className="w-4 h-4" />
            Publish
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-500/20 border border-orange-500/30 text-orange-300 hover:bg-orange-500/30 transition-all text-sm">
            <Archive className="w-4 h-4" />
            Archive
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-all text-sm">
            <FolderEdit className="w-4 h-4" />
            Change Category
          </button>

          <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-red-500/20 border border-red-500/30 text-red-300 hover:bg-red-500/30 transition-all text-sm">
            <Trash2 className="w-4 h-4" />
            Delete
          </button>
        </div>

        <div className="w-px h-6 bg-white/20" />

        <button
          onClick={onClear}
          className="p-2 hover:bg-white/10 rounded-lg transition-colors"
          title="Clear selection"
        >
          <X className="w-4 h-4 text-gray-400" />
        </button>
      </div>
    </div>
  );
}
