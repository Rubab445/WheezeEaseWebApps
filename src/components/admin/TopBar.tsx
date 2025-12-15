import { ChevronDown } from 'lucide-react';

export function TopBar() {
  return (
    <div className="flex items-center justify-between">
      <div>
        <h1 className="text-3xl text-white">Analytics</h1>
        <p className="text-gray-400 mt-1">Dashboard overview and insights</p>
      </div>
      
      <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500/20 to-cyan-500/20 border border-purple-500/50 text-white hover:shadow-lg hover:shadow-purple-500/20 transition-all">
        <span className="text-sm">May 2025</span>
        <ChevronDown className="w-4 h-4" />
      </button>
    </div>
  );
}
