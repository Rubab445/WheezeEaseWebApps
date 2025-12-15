import { X, User, Mail, Phone, Calendar, Thermometer, Droplets, Wind, Leaf, Pill, Clock, Lightbulb, Brain, TrendingUp, Flag, Share2, Download } from 'lucide-react';
import { SymptomLog } from '../../pages/SymptomLogsPage';

interface LogDetailDrawerProps {
  log: SymptomLog | null;
  open: boolean;
  onClose: () => void;
}

const previousLogs = [
  { date: 'Dec 10, 2025', severity: 6, symptoms: 'Wheezing, Coughing', riskScore: 62 },
  { date: 'Dec 7, 2025', severity: 5, symptoms: 'Shortness of breath', riskScore: 54 },
  { date: 'Dec 5, 2025', severity: 7, symptoms: 'Chest tightness, Wheezing', riskScore: 72 },
  { date: 'Dec 2, 2025', severity: 4, symptoms: 'Runny nose, Sneezing', riskScore: 45 },
  { date: 'Nov 28, 2025', severity: 8, symptoms: 'Wheezing, Difficulty breathing', riskScore: 86 },
];

const aiRecommendations = [
  'Monitor pollen levels closely - strong correlation detected with symptom severity',
  'Consider adjusting medication timing to early morning when AQI is typically lower',
  'Patient shows pattern of increased symptoms during high humidity days (>70%)',
  'Suggest indoor air purifier for bedroom - 60% of high-severity logs occur overnight',
  'Schedule follow-up with pulmonologist - severity trending upward over past 14 days'
];

export function LogDetailDrawer({ log, open, onClose }: LogDetailDrawerProps) {
  if (!log || !open) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-[500px] bg-[#0A0F1E] border-l border-white/10 shadow-2xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#0A0F1E]/95 backdrop-blur-xl border-b border-white/10 p-6 z-10">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl text-white">Log Details</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          
          <div className="flex items-center gap-3">
            <span className="text-sm text-purple-400 font-mono">#{log.id}</span>
            <span className="px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 text-xs">
              {log.date} {log.time}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Patient Info Card */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-4 flex items-center gap-2">
              <User className="w-4 h-4" />
              Patient Information
            </h3>
            <div className="flex items-start gap-4">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                <span className="text-lg text-white">{log.patientAvatar}</span>
              </div>
              <div className="flex-1">
                <p className="text-white font-medium text-lg mb-1">{log.patientName}</p>
                <p className="text-sm text-gray-400 mb-3">{log.patientId}</p>
                <div className="space-y-2">
                  <p className="text-xs text-gray-400 flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    ayesha.k@email.com
                  </p>
                  <p className="text-xs text-gray-400 flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    +92 300 1234567
                  </p>
                  <p className="text-xs text-gray-400 flex items-center gap-2">
                    <Calendar className="w-3 h-3" />
                    Age: 32 years
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Log Summary */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-4">Log Summary</h3>
            
            {/* Severity Gauge */}
            <div className="mb-6">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm text-gray-400">Severity Score</span>
                <div className="flex items-center gap-3">
                  <div className="w-32 h-2 bg-white/5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full bg-gradient-to-r ${
                        log.severity >= 7 ? 'from-red-500 to-pink-500' :
                        log.severity >= 4 ? 'from-yellow-500 to-orange-500' :
                        'from-green-500 to-emerald-500'
                      } shadow-lg`}
                      style={{ width: `${(log.severity / 10) * 100}%` }}
                    />
                  </div>
                  <span className="text-3xl text-white font-bold">{log.severity}/10</span>
                </div>
              </div>
              <span className={`text-xs px-3 py-1 rounded-full border ${
                log.severity >= 7 ? 'bg-red-500/20 text-red-400 border-red-500/30' :
                log.severity >= 4 ? 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' :
                'bg-green-500/20 text-green-400 border-green-500/30'
              }`}>
                {log.severity >= 7 ? 'Severe' : log.severity >= 4 ? 'Moderate' : 'Mild'}
              </span>
            </div>

            {/* Symptoms */}
            <div className="mb-5">
              <label className="text-xs text-gray-400 mb-2 block">Reported Symptoms</label>
              <div className="flex flex-wrap gap-2">
                {log.symptoms.map((symptom, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-2 rounded-lg bg-purple-500/10 border border-purple-500/30 text-purple-300 text-sm"
                  >
                    {symptom}
                  </span>
                ))}
              </div>
            </div>

            {/* Medications */}
            <div>
              <label className="text-xs text-gray-400 mb-2 block flex items-center gap-2">
                <Pill className="w-3 h-3" />
                Medications
              </label>
              <div className="space-y-2">
                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm text-white">Albuterol (Inhaler)</span>
                  </div>
                  <span className="text-xs text-gray-400">Taken at 14:15</span>
                </div>
                <div className="flex items-center justify-between p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-sm text-white">Montelukast 10mg</span>
                  </div>
                  <span className="text-xs text-gray-400">Taken at 08:00</span>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Triggers */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-4">Environmental Triggers</h3>
            
            <div className="grid grid-cols-2 gap-3">
              <div className="p-4 bg-pink-500/10 border border-pink-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-4 h-4 text-pink-400" />
                  <span className="text-xs text-gray-400">Pollen</span>
                </div>
                <p className="text-lg text-white">Very High</p>
                <p className="text-xs text-pink-400 mt-1">145 grains/m³</p>
              </div>

              <div className="p-4 bg-purple-500/10 border border-purple-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Wind className="w-4 h-4 text-purple-400" />
                  <span className="text-xs text-gray-400">AQI</span>
                </div>
                <p className="text-lg text-white">Unhealthy</p>
                <p className="text-xs text-purple-400 mt-1">112 AQI</p>
              </div>

              <div className="p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Droplets className="w-4 h-4 text-cyan-400" />
                  <span className="text-xs text-gray-400">Humidity</span>
                </div>
                <p className="text-lg text-white">High</p>
                <p className="text-xs text-cyan-400 mt-1">72%</p>
              </div>

              <div className="p-4 bg-orange-500/10 border border-orange-500/30 rounded-xl">
                <div className="flex items-center gap-2 mb-2">
                  <Thermometer className="w-4 h-4 text-orange-400" />
                  <span className="text-xs text-gray-400">Temperature</span>
                </div>
                <p className="text-lg text-white">Warm</p>
                <p className="text-xs text-orange-400 mt-1">28°C</p>
              </div>
            </div>
          </div>

          {/* Patient Notes */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-3">Patient Notes</h3>
            <div className="bg-white/5 border border-white/10 rounded-xl p-4">
              <p className="text-sm text-gray-300 leading-relaxed">
                "Started feeling wheezing around 2 PM after spending 30 minutes outside. The air quality seemed poor and I could see dust in the air. Used my rescue inhaler which helped within 10 minutes. Chest tightness persisted for about an hour. No outdoor activities planned for rest of day."
              </p>
            </div>
          </div>

          {/* AI Insights */}
          <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/30 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-white mb-4 flex items-center gap-2">
              <Brain className="w-4 h-4 text-purple-400" />
              AI Insights & Recommendations
            </h3>
            
            {/* Risk Score */}
            <div className="mb-5 p-4 bg-[#0E1629]/60 rounded-xl">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm text-gray-400">AI Risk Score</span>
                <span className="text-2xl text-white font-bold">{log.aiRiskScore}%</span>
              </div>
              <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                <div 
                  className={`h-full rounded-full bg-gradient-to-r ${
                    log.aiRiskScore >= 70 ? 'from-red-500 to-pink-500' :
                    log.aiRiskScore >= 50 ? 'from-yellow-500 to-orange-500' :
                    'from-green-500 to-emerald-500'
                  } shadow-lg`}
                  style={{ width: `${log.aiRiskScore}%` }}
                />
              </div>
            </div>

            {/* Pattern Detected */}
            <div className="mb-5 p-4 bg-cyan-500/10 border border-cyan-500/30 rounded-xl">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm text-white font-medium mb-1">Pattern Detected</p>
                  <p className="text-xs text-gray-300">
                    High pollen correlation: 85% of patient's high-severity logs occur when pollen count exceeds 120 grains/m³
                  </p>
                </div>
              </div>
            </div>

            {/* Recommendations */}
            <div>
              <label className="text-xs text-gray-400 mb-3 block flex items-center gap-2">
                <Lightbulb className="w-4 h-4 text-yellow-400" />
                Recommended Actions
              </label>
              <div className="space-y-2">
                {aiRecommendations.map((rec, idx) => (
                  <div key={idx} className="flex items-start gap-2 p-3 bg-white/5 rounded-lg">
                    <div className="w-1.5 h-1.5 rounded-full bg-purple-400 flex-shrink-0 mt-2" />
                    <p className="text-xs text-gray-300">{rec}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Previous Logs Timeline */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm text-gray-400 flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Previous Logs from Patient
              </h3>
              <span className="text-xs text-purple-400">Last 5 entries</span>
            </div>
            
            <div className="space-y-3">
              {previousLogs.map((prevLog, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all cursor-pointer">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-white">{prevLog.date}</span>
                      <div className="flex items-center gap-2">
                        <div className="w-12 h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full bg-gradient-to-r ${
                              prevLog.severity >= 7 ? 'from-red-500 to-pink-500' :
                              prevLog.severity >= 4 ? 'from-yellow-500 to-orange-500' :
                              'from-green-500 to-emerald-500'
                            }`}
                            style={{ width: `${(prevLog.severity / 10) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-gray-400 w-4">{prevLog.severity}</span>
                      </div>
                    </div>
                    <p className="text-xs text-gray-400">{prevLog.symptoms}</p>
                  </div>
                  <span className="text-xs text-purple-400 font-medium">{prevLog.riskScore}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pb-6">
            <button className="w-full px-5 py-3 rounded-xl bg-yellow-500/20 border border-yellow-500/30 text-yellow-300 hover:bg-yellow-500/30 transition-all flex items-center justify-center gap-2">
              <Flag className="w-4 h-4" />
              Flag for Review
            </button>
            <button className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2">
              <Share2 className="w-4 h-4" />
              Share with Doctor
            </button>
            <button className="w-full px-5 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
              <Download className="w-4 h-4" />
              Export PDF
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
