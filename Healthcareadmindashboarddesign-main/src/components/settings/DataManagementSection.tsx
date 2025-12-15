import { Calendar, Database, Upload, Download, RefreshCw, AlertTriangle } from 'lucide-react';

interface DataManagementSectionProps {
  onChange: () => void;
}

export function DataManagementSection({ onChange }: DataManagementSectionProps) {
  return (
    <div className="space-y-6">
      {/* Data Retention Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
            <Calendar className="w-5 h-5 text-orange-400" />
          </div>
          <h2 className="text-lg text-white">Data Retention</h2>
        </div>
        
        <div className="space-y-4">
          {/* Symptom Logs Retention */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Symptom Logs Retention</label>
            <select 
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="1">1 year</option>
              <option value="2" selected>2 years</option>
              <option value="5">5 years</option>
              <option value="indefinite">Indefinite</option>
            </select>
          </div>

          {/* Alert History Retention */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Alert History Retention</label>
            <select 
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="1">1 year</option>
              <option value="2">2 years</option>
              <option value="5" selected>5 years</option>
              <option value="indefinite">Indefinite</option>
            </select>
          </div>

          {/* Deleted Accounts Cleanup */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Deleted Accounts Cleanup</label>
            <select 
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="30">30 days</option>
              <option value="90" selected>90 days</option>
              <option value="never">Never</option>
            </select>
          </div>

          {/* Run Cleanup Button */}
          <button 
            onClick={onChange}
            className="w-full px-5 py-2.5 rounded-lg border border-orange-500/30 text-orange-300 hover:bg-orange-500/10 transition-all flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-4 h-4" />
            Run Cleanup Now
          </button>
        </div>
      </div>

      {/* Backup & Export Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
            <Database className="w-5 h-5 text-green-400" />
          </div>
          <h2 className="text-lg text-white">Backup & Export</h2>
        </div>
        
        <div className="space-y-4">
          {/* Auto Backup Toggle */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <p className="text-sm text-white">Automatic backups</p>
              <p className="text-xs text-gray-500">Schedule regular system backups</p>
            </div>
            <button 
              onClick={onChange}
              className="relative w-12 h-6 rounded-full bg-purple-500 transition-all"
            >
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform" />
            </button>
          </div>

          {/* Backup Frequency */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Backup Frequency</label>
            <select 
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="daily" selected>Daily at 3:00 AM</option>
              <option value="weekly">Weekly on Sunday</option>
              <option value="monthly">Monthly on 1st</option>
            </select>
          </div>

          {/* Last Backup Status */}
          <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm text-green-400">Last Backup</p>
              <span className="px-2 py-0.5 rounded-full bg-green-500/20 text-green-400 border border-green-500/30 text-xs">
                Success
              </span>
            </div>
            <p className="text-xs text-gray-400">December 13, 2025 at 3:00 AM</p>
            <p className="text-xs text-gray-500 mt-1">Size: 2.4 GB • Duration: 4m 23s</p>
          </div>

          {/* Backup Actions */}
          <div className="space-y-2">
            <button className="w-full px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2">
              <Database className="w-4 h-4" />
              Create Backup Now
            </button>

            <button className="w-full px-5 py-2.5 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Download Latest Backup
            </button>

            <button 
              onClick={onChange}
              className="w-full px-5 py-2.5 rounded-lg border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all flex items-center justify-center gap-2"
            >
              <AlertTriangle className="w-4 h-4" />
              Restore from Backup
            </button>
          </div>
        </div>
      </div>

      {/* Data Import Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
            <Upload className="w-5 h-5 text-cyan-400" />
          </div>
          <h2 className="text-lg text-white">Data Import</h2>
        </div>
        
        <div className="space-y-4">
          {/* Import Users */}
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
            <h3 className="text-sm text-white mb-2">Import Users</h3>
            <p className="text-xs text-gray-500 mb-3">Upload a CSV or JSON file with user data</p>
            <button 
              onClick={onChange}
              className="w-full px-4 py-2.5 rounded-lg border-2 border-dashed border-white/10 text-gray-400 hover:border-purple-500/30 hover:text-purple-300 hover:bg-purple-500/5 transition-all flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Choose File
            </button>
          </div>

          {/* Import Symptom Logs */}
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
            <h3 className="text-sm text-white mb-2">Import Symptom Logs</h3>
            <p className="text-xs text-gray-500 mb-3">Upload patient symptom data from external systems</p>
            <button 
              onClick={onChange}
              className="w-full px-4 py-2.5 rounded-lg border-2 border-dashed border-white/10 text-gray-400 hover:border-purple-500/30 hover:text-purple-300 hover:bg-purple-500/5 transition-all flex items-center justify-center gap-2"
            >
              <Upload className="w-4 h-4" />
              Choose File
            </button>
          </div>

          {/* Supported Formats */}
          <div className="p-4 bg-white/5 rounded-lg">
            <p className="text-xs text-gray-400 mb-2">Supported Formats</p>
            <div className="flex gap-2">
              <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs">CSV</span>
              <span className="px-2 py-1 rounded bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs">JSON</span>
            </div>
          </div>

          {/* Download Templates */}
          <button className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors">
            <Download className="w-4 h-4" />
            Download Import Templates
          </button>
        </div>
      </div>
    </div>
  );
}
