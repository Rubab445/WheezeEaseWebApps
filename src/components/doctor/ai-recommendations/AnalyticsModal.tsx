import { X, TrendingUp, CheckCircle, XCircle, Clock, Target, BarChart3 } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface AnalyticsModalProps {
  onClose: () => void;
}

const weeklyData = [
  { day: 'Mon', approved: 8, dismissed: 2, pending: 5 },
  { day: 'Tue', approved: 12, dismissed: 1, pending: 7 },
  { day: 'Wed', approved: 10, dismissed: 3, pending: 4 },
  { day: 'Thu', approved: 15, dismissed: 2, pending: 6 },
  { day: 'Fri', approved: 9, dismissed: 4, pending: 8 },
  { day: 'Sat', approved: 6, dismissed: 1, pending: 3 },
  { day: 'Sun', approved: 7, dismissed: 2, pending: 5 },
];

const categoryData = [
  { name: 'Medication Adjustment', value: 28 },
  { name: 'Follow-up Required', value: 22 },
  { name: 'Environmental Alert', value: 18 },
  { name: 'Pattern Detection', value: 16 },
  { name: 'Preventive Action', value: 16 },
];

const confidenceData = [
  { range: '90-100%', count: 18 },
  { range: '80-89%', count: 25 },
  { range: '70-79%', count: 12 },
  { range: '60-69%', count: 8 },
  { range: '<60%', count: 4 },
];

const COLORS = ['#059669', '#10B981', '#34D399', '#6EE7B7', '#A7F3D0'];

export function AnalyticsModal({ onClose }: AnalyticsModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-lg flex items-center justify-center">
              <BarChart3 className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1F2937]">AI Recommendations Analytics</h2>
              <p className="text-sm text-[#6B7280]">Performance insights and trends</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-[#6B7280]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {/* Stats Row */}
          <div className="grid grid-cols-4 gap-5 mb-6">
            <div className="bg-gradient-to-br from-[#059669] to-[#10B981] rounded-xl p-5 text-white">
              <div className="flex items-center justify-between mb-2">
                <CheckCircle className="w-8 h-8 opacity-80" />
                <span className="text-xs bg-white/20 px-2 py-1 rounded">+12%</span>
              </div>
              <p className="text-3xl font-bold mb-1">67</p>
              <p className="text-sm opacity-90">Approved This Week</p>
            </div>

            <div className="bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] rounded-xl p-5 text-white">
              <div className="flex items-center justify-between mb-2">
                <Clock className="w-8 h-8 opacity-80" />
                <span className="text-xs bg-white/20 px-2 py-1 rounded">38</span>
              </div>
              <p className="text-3xl font-bold mb-1">38</p>
              <p className="text-sm opacity-90">Pending Review</p>
            </div>

            <div className="bg-gradient-to-br from-[#EF4444] to-[#F87171] rounded-xl p-5 text-white">
              <div className="flex items-center justify-between mb-2">
                <XCircle className="w-8 h-8 opacity-80" />
                <span className="text-xs bg-white/20 px-2 py-1 rounded">-5%</span>
              </div>
              <p className="text-3xl font-bold mb-1">15</p>
              <p className="text-sm opacity-90">Dismissed This Week</p>
            </div>

            <div className="bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-xl p-5 text-white">
              <div className="flex items-center justify-between mb-2">
                <Target className="w-8 h-8 opacity-80" />
                <span className="text-xs bg-white/20 px-2 py-1 rounded">89%</span>
              </div>
              <p className="text-3xl font-bold mb-1">89%</p>
              <p className="text-sm opacity-90">Model Accuracy</p>
            </div>
          </div>

          {/* Charts Grid */}
          <div className="grid grid-cols-2 gap-6 mb-6">
            {/* Weekly Trend */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1F2937] mb-4">Weekly Recommendation Activity</h3>
              <ResponsiveContainer width="100%" height={250}>
                <BarChart data={weeklyData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                  <XAxis dataKey="day" stroke="#6B7280" fontSize={12} />
                  <YAxis stroke="#6B7280" fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="approved" fill="#059669" name="Approved" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="dismissed" fill="#EF4444" name="Dismissed" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="pending" fill="#F59E0B" name="Pending" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Recommendations by Category */}
            <div className="bg-white border border-gray-200 rounded-xl p-5">
              <h3 className="font-bold text-[#1F2937] mb-4">Recommendations by Category</h3>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Confidence Distribution */}
          <div className="bg-white border border-gray-200 rounded-xl p-5 mb-6">
            <h3 className="font-bold text-[#1F2937] mb-4">Confidence Score Distribution</h3>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={confidenceData} layout="vertical">
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis type="number" stroke="#6B7280" fontSize={12} />
                <YAxis dataKey="range" type="category" stroke="#6B7280" fontSize={12} width={80} />
                <Tooltip />
                <Bar dataKey="count" fill="#8B5CF6" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-[#F0FDF4] border border-[#22C55E]/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <TrendingUp className="w-5 h-5 text-[#22C55E]" />
                <h4 className="font-bold text-[#1F2937]">Acceptance Rate</h4>
              </div>
              <p className="text-3xl font-bold text-[#22C55E] mb-1">78%</p>
              <p className="text-sm text-[#6B7280]">Doctors approve 78% of recommendations</p>
              <div className="mt-3 w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="w-[78%] h-full bg-[#22C55E]" />
              </div>
            </div>

            <div className="bg-[#FEF3C7] border border-[#F59E0B]/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-[#F59E0B]" />
                <h4 className="font-bold text-[#1F2937]">Avg Review Time</h4>
              </div>
              <p className="text-3xl font-bold text-[#F59E0B] mb-1">4.2h</p>
              <p className="text-sm text-[#6B7280]">Average time to review and action</p>
              <p className="text-xs text-[#6B7280] mt-2">↓ 15% improvement this week</p>
            </div>

            <div className="bg-[#EDE9FE] border border-[#8B5CF6]/30 rounded-xl p-5">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-[#8B5CF6]" />
                <h4 className="font-bold text-[#1F2937]">Patient Impact</h4>
              </div>
              <p className="text-3xl font-bold text-[#8B5CF6] mb-1">156</p>
              <p className="text-sm text-[#6B7280]">Patients benefited from AI recommendations</p>
              <p className="text-xs text-[#6B7280] mt-2">↑ 23% from last week</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-gray-200">
          <p className="text-sm text-[#6B7280]">Last updated: Dec 14, 2025 at 2:30 PM</p>
          <div className="flex items-center gap-3">
            <button className="px-4 py-2 border border-gray-300 text-[#6B7280] rounded-lg hover:bg-gray-50 transition-colors">
              Export Report
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-lg hover:opacity-90 transition-opacity"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
