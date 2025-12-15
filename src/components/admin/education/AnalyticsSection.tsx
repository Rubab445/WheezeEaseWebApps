import { TrendingUp, ExternalLink } from 'lucide-react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const topContent = [
  { rank: 1, title: 'How to Use Your Inhaler Correctly', views: 4521, engagement: '94%', shares: 289 },
  { rank: 2, title: 'Emergency Action Plan', views: 3892, engagement: '92%', shares: 412 },
  { rank: 3, title: 'Understanding Asthma Triggers', views: 2847, engagement: '88%', shares: 156 },
  { rank: 4, title: 'Breathing Exercises for Better Lung Health', views: 2156, engagement: '85%', shares: 187 },
  { rank: 5, title: 'Managing Pollen Allergies', views: 1245, engagement: '78%', shares: 84 },
];

const categoryData = [
  { name: 'Asthma Basics', value: 24, color: '#A855F7' },
  { name: 'Environmental', value: 28, color: '#10B981' },
  { name: 'Medication', value: 22, color: '#EC4899' },
  { name: 'Diet', value: 22, color: '#F59E0B' },
  { name: 'Lifestyle', value: 16, color: '#F97316' },
  { name: 'Emergency', value: 12, color: '#EF4444' },
  { name: 'Triggers', value: 18, color: '#06B6D4' },
];

export function AnalyticsSection() {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl text-white">Content Analytics</h2>
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-purple-500/30 text-purple-300 hover:bg-purple-500/10 transition-all text-sm">
          View Full Analytics
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {/* Top Performing Content */}
        <div className="col-span-2">
          <h3 className="text-sm text-gray-400 mb-4 flex items-center gap-2">
            <TrendingUp className="w-4 h-4" />
            Top Performing Content (30 days)
          </h3>
          
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">
            <table className="w-full">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-xs text-gray-400 w-12">Rank</th>
                  <th className="text-left py-3 px-4 text-xs text-gray-400">Title</th>
                  <th className="text-left py-3 px-4 text-xs text-gray-400">Views</th>
                  <th className="text-left py-3 px-4 text-xs text-gray-400">Engagement</th>
                  <th className="text-left py-3 px-4 text-xs text-gray-400">Shares</th>
                </tr>
              </thead>
              <tbody>
                {topContent.map((item) => (
                  <tr key={item.rank} className="border-b border-white/5 hover:bg-white/5 transition-colors">
                    <td className="py-3 px-4">
                      <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs ${
                        item.rank === 1 ? 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30' :
                        item.rank === 2 ? 'bg-gray-400/20 text-gray-300 border border-gray-400/30' :
                        item.rank === 3 ? 'bg-orange-500/20 text-orange-400 border border-orange-500/30' :
                        'bg-white/10 text-gray-400'
                      }`}>
                        {item.rank}
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <p className="text-sm text-white truncate max-w-xs">{item.title}</p>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-white">{item.views.toLocaleString()}</span>
                    </td>
                    <td className="py-3 px-4">
                      <div className="flex items-center gap-2">
                        <div className="flex-1 max-w-[60px] h-1.5 bg-white/5 rounded-full overflow-hidden">
                          <div 
                            className="h-full rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                            style={{ width: item.engagement }}
                          />
                        </div>
                        <span className="text-sm text-white">{item.engagement}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4">
                      <span className="text-sm text-gray-400">{item.shares}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Content by Category */}
        <div>
          <h3 className="text-sm text-gray-400 mb-4">Content by Category</h3>
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-4">
            <div className="h-48">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={40}
                    outerRadius={70}
                    paddingAngle={2}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: '#0E1629', 
                      border: '1px solid rgba(168, 85, 247, 0.3)',
                      borderRadius: '8px',
                      fontSize: '12px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-4 space-y-2">
              {categoryData.map((category, idx) => (
                <div key={idx} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <div 
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: category.color }}
                    />
                    <span className="text-gray-400">{category.name}</span>
                  </div>
                  <span className="text-white">{category.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
