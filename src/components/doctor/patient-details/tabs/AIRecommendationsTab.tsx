import { Sparkles, TrendingUp, Check, X, Edit } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const recommendations = [
  {
    id: '1',
    title: 'Increase preventive medication during high pollen days',
    confidence: 92,
    status: 'new',
    trigger: 'Strong correlation detected between pollen levels and symptom severity',
    data: 'Analysis of 30-day symptom logs shows 85% of severe episodes occurred during high pollen count days',
  },
  {
    id: '2',
    title: 'Consider adding air purifier for bedroom',
    confidence: 87,
    status: 'under-review',
    trigger: 'Nighttime and early morning symptoms increasing',
    data: '67% of symptom logs occur between 10 PM - 8 AM, suggesting indoor allergen exposure',
  },
  {
    id: '3',
    title: 'Schedule pulmonary function test',
    confidence: 78,
    status: 'new',
    trigger: 'Declining medication adherence with increasing symptom severity',
    data: 'Last PFT was 8 months ago. Current symptoms suggest possible need for treatment adjustment',
  },
];

const trendData = [
  { month: 'Jul', applied: 2, dismissed: 1 },
  { month: 'Aug', applied: 3, dismissed: 0 },
  { month: 'Sep', applied: 2, dismissed: 2 },
  { month: 'Oct', applied: 4, dismissed: 1 },
  { month: 'Nov', applied: 3, dismissed: 1 },
  { month: 'Dec', applied: 2, dismissed: 0 },
];

export function AIRecommendationsTab() {
  const getStatusColor = (status: string) => {
    if (status === 'new') return 'bg-[#059669] text-white';
    if (status === 'under-review') return 'bg-[#F59E0B] text-white';
    if (status === 'applied') return 'bg-[#22C55E] text-white';
    return 'bg-[#6B7280] text-white';
  };

  const getStatusLabel = (status: string) => {
    if (status === 'new') return 'New';
    if (status === 'under-review') return 'Under Review';
    if (status === 'applied') return 'Applied';
    return 'Dismissed';
  };

  return (
    <div className="space-y-6">
      {/* AI Analysis Summary */}
      <div className="bg-gradient-to-br from-[#059669] to-[#10B981] rounded-2xl p-6 shadow-lg text-white">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center">
            <Sparkles className="w-6 h-6" />
          </div>
          <h2 className="text-2xl font-bold">AI Analysis Summary</h2>
        </div>
        
        <div className="grid grid-cols-3 gap-6">
          <div>
            <p className="text-white/80 text-sm mb-1">Overall Risk Assessment</p>
            <p className="text-2xl font-bold">Medium Risk</p>
          </div>
          <div>
            <p className="text-white/80 text-sm mb-1">Pattern Detection</p>
            <p className="text-lg font-medium">High correlation with pollen levels</p>
          </div>
          <div>
            <p className="text-white/80 text-sm mb-1">Prediction Confidence</p>
            <div className="flex items-center gap-2">
              <p className="text-2xl font-bold">87%</p>
              <TrendingUp className="w-5 h-5" />
            </div>
          </div>
        </div>
      </div>

      {/* Recommendation Cards */}
      <div className="space-y-4">
        <h2 className="text-lg font-bold text-[#1F2937]">Active Recommendations</h2>
        
        {recommendations.map((rec) => (
          <div key={rec.id} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200 hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-lg font-bold text-[#1F2937]">{rec.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(rec.status)}`}>
                    {getStatusLabel(rec.status)}
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-4 h-4 text-[#059669]" />
                  <span className="text-sm font-medium text-[#059669]">AI Confidence: {rec.confidence}%</span>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden max-w-[200px]">
                    <div 
                      className="h-full bg-[#059669]"
                      style={{ width: `${rec.confidence}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Trigger Analysis */}
            <div className="bg-[#F8F9FA] rounded-lg p-4 mb-4">
              <p className="text-xs font-bold text-[#6B7280] uppercase mb-2">Trigger Analysis</p>
              <p className="text-sm text-[#1F2937] mb-3">{rec.trigger}</p>
              <p className="text-xs font-bold text-[#6B7280] uppercase mb-2">Supporting Data</p>
              <p className="text-sm text-[#1F2937]">{rec.data}</p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3">
              <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-lg hover:shadow-lg transition-all">
                <Check className="w-4 h-4" />
                Approve & Apply
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-white border border-[#059669] text-[#059669] rounded-lg hover:bg-[#059669]/5 transition-colors">
                <Edit className="w-4 h-4" />
                Modify
              </button>
              <button className="px-4 py-2 text-[#6B7280] hover:text-[#EF4444] transition-colors">
                <X className="w-4 h-4 inline mr-1" />
                Dismiss
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Recommendation History Timeline */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <h2 className="text-lg font-bold text-[#1F2937] mb-6">Recommendation History</h2>
        
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={trendData} margin={{ top: 5, right: 30, left: 0, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#E0E0E0" vertical={false} />
            <XAxis 
              dataKey="month" 
              stroke="#6B7280"
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <YAxis 
              stroke="#6B7280"
              tick={{ fill: '#6B7280', fontSize: 12 }}
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: 'white', 
                border: '1px solid #E0E0E0', 
                borderRadius: '8px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="applied" 
              stroke="#22C55E" 
              strokeWidth={3}
              name="Applied"
            />
            <Line 
              type="monotone" 
              dataKey="dismissed" 
              stroke="#EF4444" 
              strokeWidth={3}
              name="Dismissed"
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
