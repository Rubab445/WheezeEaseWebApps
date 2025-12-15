import { BookOpen, Eye, TrendingUp, Clock, MoreVertical } from 'lucide-react';

export function EducationStatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {/* Total Articles */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-purple-500/30 transition-all group">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
            <BookOpen className="w-6 h-6 text-purple-400" />
          </div>
          <button className="p-1 hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-2">Total Articles</p>
          <div className="flex items-end gap-3">
            <span className="text-3xl text-white">142</span>
            <span className="px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs mb-1">
              89 published
            </span>
          </div>
        </div>
      </div>

      {/* Most Viewed */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-cyan-500/30 transition-all group">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <Eye className="w-6 h-6 text-cyan-400" />
          </div>
          <button className="p-1 hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-2">Most Viewed</p>
          <p className="text-sm text-white mb-1 truncate">How to Use Your Inhaler</p>
          <span className="text-2xl text-cyan-400">4,521</span>
          <span className="text-xs text-gray-500 ml-1">views</span>
        </div>
      </div>

      {/* Patient Engagement */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-pink-500/30 transition-all group">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/30 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-pink-400" />
          </div>
          <button className="p-1 hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-2">Patient Engagement</p>
          <div className="flex items-end gap-2">
            <span className="text-3xl text-white">78%</span>
            <div className="flex items-center gap-1 mb-1">
              <TrendingUp className="w-3 h-3 text-green-400" />
              <span className="text-xs text-green-400">+12%</span>
            </div>
          </div>
          <p className="text-xs text-gray-500 mt-1">vs last month</p>
        </div>
      </div>

      {/* Pending Review */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl hover:shadow-2xl hover:border-yellow-500/30 transition-all group">
        <div className="flex items-start justify-between mb-4">
          <div className="w-12 h-12 rounded-xl bg-yellow-500/10 border border-yellow-500/30 flex items-center justify-center">
            <Clock className="w-6 h-6 text-yellow-400" />
          </div>
          <button className="p-1 hover:bg-white/10 rounded-lg transition-colors opacity-0 group-hover:opacity-100">
            <MoreVertical className="w-4 h-4 text-gray-400" />
          </button>
        </div>
        <div>
          <p className="text-sm text-gray-400 mb-2">Pending Review</p>
          <div className="flex items-end gap-3">
            <span className="text-3xl text-white">8</span>
            <span className="px-2 py-1 rounded-full bg-yellow-500/20 text-yellow-400 border border-yellow-500/30 text-xs mb-1">
              Needs action
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
