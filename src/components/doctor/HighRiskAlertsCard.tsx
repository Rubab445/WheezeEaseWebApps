import { Bell, AlertTriangle } from 'lucide-react';

const alerts = [
  {
    id: '1',
    patient: 'Ali Hassan',
    avatar: 'AH',
    alertType: 'Symptom spike',
    alertColor: 'bg-[#EF4444] text-white',
    time: '2 hours ago',
    riskScore: 84,
  },
  {
    id: '2',
    patient: 'Zainab Ali',
    avatar: 'ZA',
    alertType: 'Environment trigger',
    alertColor: 'bg-[#F59E0B] text-white',
    time: '4 hours ago',
    riskScore: 78,
  },
  {
    id: '3',
    patient: 'Omar Farooq',
    avatar: 'OF',
    alertType: 'Missed medication',
    alertColor: 'bg-[#EF4444] text-white',
    time: '6 hours ago',
    riskScore: 72,
  },
  {
    id: '4',
    patient: 'Ayesha Malik',
    avatar: 'AM',
    alertType: 'Symptom spike',
    alertColor: 'bg-[#EF4444] text-white',
    time: '1 day ago',
    riskScore: 81,
  },
];

export function HighRiskAlertsCard() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm">
      <div className="flex items-center gap-2 mb-6">
        <Bell className="w-5 h-5 text-[#EF4444]" />
        <h2 className="text-lg font-bold text-[#1F2937]">High-Risk Alerts</h2>
      </div>

      <div className="space-y-3 mb-4">
        {alerts.map((alert) => (
          <div 
            key={alert.id}
            className="flex items-center gap-4 p-4 bg-[#F8F9FA] rounded-xl hover:shadow-md transition-all"
          >
            {/* Patient Avatar */}
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-sm font-medium">
              {alert.avatar}
            </div>

            {/* Patient Info */}
            <div className="flex-1">
              <p className="text-sm font-medium text-[#1F2937] mb-1">{alert.patient}</p>
              <div className="flex items-center gap-2 mb-1">
                <span className={`px-2 py-0.5 rounded-full text-xs font-medium ${alert.alertColor}`}>
                  {alert.alertType}
                </span>
                <span className="text-xs text-[#6B7280]">{alert.time}</span>
              </div>
            </div>

            {/* Risk Score */}
            <div className="flex flex-col items-end gap-2">
              <div className="flex items-center gap-1.5 px-2.5 py-1 bg-[#EF4444]/10 rounded-lg">
                <AlertTriangle className="w-3.5 h-3.5 text-[#EF4444]" />
                <span className="text-sm font-bold text-[#EF4444]">{alert.riskScore}%</span>
              </div>
              <button className="px-3 py-1 text-xs font-medium text-[#059669] border border-[#059669] rounded-lg hover:bg-[#059669] hover:text-white transition-all">
                Review
              </button>
            </div>
          </div>
        ))}
      </div>

      <button className="w-full py-2.5 text-sm text-[#059669] hover:bg-[#F8F9FA] rounded-lg transition-colors font-medium">
        View All Alerts
      </button>
    </div>
  );
}