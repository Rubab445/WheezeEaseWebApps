import { Brain, Zap, Package } from 'lucide-react';

export function AIEngineStatus() {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl text-white">AI Engine Status</h2>
          <p className="text-sm text-gray-400 mt-1">Model performance metrics</p>
        </div>
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/30">
          <Brain className="w-5 h-5 text-white" />
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-gray-300">Predictions Today</span>
            </div>
            <span className="text-lg text-white">1,024</span>
          </div>
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-cyan-500 to-purple-500 rounded-full"
              style={{ width: '78%' }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">78% of daily target</p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Zap className="w-4 h-4 text-purple-400" />
              <span className="text-sm text-gray-300">Avg Response Time</span>
            </div>
            <span className="text-lg text-white">220ms</span>
          </div>
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
              style={{ width: '92%' }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Excellent performance</p>
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <Package className="w-4 h-4 text-green-400" />
              <span className="text-sm text-gray-300">Model Version</span>
            </div>
            <span className="px-3 py-1 rounded-full bg-green-500/20 border border-green-500/30 text-green-400 text-xs">
              v1.0
            </span>
          </div>
          <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"
              style={{ width: '100%' }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-1">Latest stable release</p>
        </div>
      </div>
    </div>
  );
}
