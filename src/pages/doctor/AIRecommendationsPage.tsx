import { useState } from 'react';
import { ChevronRight, Sparkles, RefreshCw, BarChart3, Download, CheckCircle2, Clock } from 'lucide-react';
import { AIRecommendationStats } from '../../components/doctor/ai-recommendations/AIRecommendationStats';
import { AIRecommendationFilters } from '../../components/doctor/ai-recommendations/AIRecommendationFilters';
import { AIRecommendationCard } from '../../components/doctor/ai-recommendations/AIRecommendationCard';
import { AIInsightsSidebar } from '../../components/doctor/ai-recommendations/AIInsightsSidebar';
import { AnalyticsModal } from '../../components/doctor/ai-recommendations/AnalyticsModal';
import { ModifyRecommendationModal } from '../../components/doctor/ai-recommendations/ModifyRecommendationModal';
import { toast } from 'sonner@2.0.3';

export type ViewMode = 'card' | 'list' | 'timeline';
export type Priority = 'all' | 'high' | 'medium' | 'low';
export type RecommendationStatus = 'all' | 'new' | 'under-review' | 'approved' | 'dismissed';

interface Recommendation {
  id: string;
  priority: 'high' | 'medium' | 'low';
  type: string;
  confidence: number;
  patientName: string;
  patientId: string;
  patientAvatar: string;
  riskScore: number;
  title: string;
  reasoning: string[];
  predictedOutcome: string;
  generatedTime: string;
  status: 'new' | 'under-review' | 'approved' | 'dismissed';
  bulkAction?: boolean;
  requiresValidation?: boolean;
  chartData?: boolean;
}

const mockRecommendations: Recommendation[] = [
  {
    id: 'rec-1',
    priority: 'high',
    type: 'Follow-up Required',
    confidence: 92,
    patientName: 'Ahmad Hassan',
    patientId: 'P-1002',
    patientAvatar: 'AH',
    riskScore: 84,
    title: 'Urgent: Schedule follow-up for patient showing symptom escalation',
    reasoning: [
      '5 severe symptom logs recorded in last 3 days',
      'Missed 4 medication doses this week',
      'Previous pattern shows escalation without intervention',
      'Environmental triggers currently high in patient area'
    ],
    predictedOutcome: 'Risk of severe episode: 78% within next 48 hours if no action taken',
    generatedTime: '2 hours ago',
    status: 'new',
  },
  {
    id: 'rec-2',
    priority: 'medium',
    type: 'Medication Adjustment',
    confidence: 87,
    patientName: 'Sarah Ahmed',
    patientId: 'P-1001',
    patientAvatar: 'SA',
    riskScore: 68,
    title: 'Adjust medication timing to morning for better adherence',
    reasoning: [
      'Patient logs show 85% compliance for morning doses vs 45% evening',
      '12-week pattern analysis confirms morning preference',
      'Medication efficacy peaks align with morning activity',
      'Patient lifestyle data supports morning schedule'
    ],
    predictedOutcome: 'Expected adherence improvement: 35% increase to ~95% compliance',
    generatedTime: '4 hours ago',
    status: 'new',
  },
  {
    id: 'rec-3',
    priority: 'high',
    type: 'Environmental Alert',
    confidence: 94,
    patientName: '12 patients in Gujrat',
    patientId: 'Multi-patient',
    patientAvatar: '12',
    riskScore: 0,
    title: 'Send preventive alert: Poor AQI expected tomorrow',
    reasoning: [
      'Air Quality Index forecast: 168 (Unhealthy) for next 48 hours',
      '12 affected patients with documented air pollution sensitivity',
      'Historical data shows 65% symptom increase during similar AQI levels',
      'Preventive medication can reduce impact by 45%'
    ],
    predictedOutcome: 'Bulk preventive alert can reduce emergency visits by estimated 8-10 patients',
    generatedTime: '1 hour ago',
    bulkAction: true,
    status: 'new',
  },
  {
    id: 'rec-4',
    priority: 'medium',
    type: 'Pattern Detection',
    confidence: 82,
    patientName: 'Ayesha Khan',
    patientId: 'P-1008',
    patientAvatar: 'AK',
    riskScore: 72,
    title: 'Potential new trigger identified: Cold weather correlation',
    reasoning: [
      'Strong correlation detected: symptoms increase when temp drops below 15°C',
      '8 out of 10 severe episodes occurred during cold weather (last 6 months)',
      'Patient has not reported cold as known trigger',
      'Similar pattern observed in 4 other patients with same condition profile'
    ],
    predictedOutcome: 'Requires doctor validation - If confirmed, preventive measures during cold weather can reduce episodes by 40%',
    generatedTime: '5 hours ago',
    requiresValidation: true,
    status: 'under-review',
  },
  {
    id: 'rec-5',
    priority: 'high',
    type: 'Medication Adjustment',
    confidence: 89,
    patientName: 'Fatima Khan',
    patientId: 'P-1003',
    patientAvatar: 'FK',
    riskScore: 58,
    title: 'Increase preventive medication during high pollen season',
    reasoning: [
      '15 symptom logs showing strong pollen correlation over 3 years',
      'Historical pattern: symptom severity increases 250% in spring months',
      'Current pollen forecast: High for next 7 days',
      'Patient has moderate pollen sensitivity (confirmed allergen test)'
    ],
    predictedOutcome: 'Expected risk reduction: 35% if preventive dose increased by 50%',
    generatedTime: '3 hours ago',
    chartData: true,
    status: 'new',
  },
  {
    id: 'rec-6',
    priority: 'low',
    type: 'Preventive Action',
    confidence: 76,
    patientName: 'Ali Hassan',
    patientId: 'P-1002',
    patientAvatar: 'AH',
    riskScore: 32,
    title: 'Recommend allergy testing for unidentified triggers',
    reasoning: [
      'Patient experiences unexplained symptoms 2-3 times monthly',
      'Known triggers account for only 60% of symptom episodes',
      'Symptom pattern suggests potential food or indoor allergen',
      'Comprehensive testing can identify hidden triggers'
    ],
    predictedOutcome: 'Identifying additional triggers could reduce unexplained episodes by 50-70%',
    generatedTime: '6 hours ago',
    status: 'new',
  },
  {
    id: 'rec-7',
    priority: 'medium',
    type: 'Follow-up Required',
    confidence: 85,
    patientName: 'Zainab Ali',
    patientId: 'P-1005',
    patientAvatar: 'ZA',
    riskScore: 78,
    title: 'Schedule respiratory function test - declining lung capacity trend',
    reasoning: [
      'Peak flow readings decreased 15% over last 3 months',
      'Patient reports increased shortness of breath during exercise',
      'Medication effectiveness appears reduced (patient feedback)',
      'Early intervention can prevent further decline'
    ],
    predictedOutcome: 'Early detection of lung function changes allows treatment adjustment before severe decline',
    generatedTime: '7 hours ago',
    status: 'approved',
  },
  {
    id: 'rec-8',
    priority: 'low',
    type: 'Preventive Action',
    confidence: 71,
    patientName: 'Omar Malik',
    patientId: 'P-1012',
    patientAvatar: 'OM',
    riskScore: 45,
    title: 'Suggest air purifier for home - indoor allergen exposure detected',
    reasoning: [
      'Symptoms primarily occur at home (80% of logs)',
      'Dust mite and mold sensitivity confirmed',
      'Indoor air quality improvement shown to reduce symptoms by 40% (studies)',
      'Cost-effective long-term preventive measure'
    ],
    predictedOutcome: 'Expected symptom frequency reduction: 30-40% with HEPA air purifier',
    generatedTime: '8 hours ago',
    status: 'new',
  },
];

export function AIRecommendationsPage() {
  const [viewMode, setViewMode] = useState<ViewMode>('card');
  const [selectedPriority, setSelectedPriority] = useState<Priority>('all');
  const [selectedStatus, setSelectedStatus] = useState<RecommendationStatus>('all');
  const [selectedCards, setSelectedCards] = useState<string[]>([]);
  const [recommendations, setRecommendations] = useState<Recommendation[]>(mockRecommendations);
  const [showAnalyticsModal, setShowAnalyticsModal] = useState(false);
  const [modifyingRecommendation, setModifyingRecommendation] = useState<Recommendation | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleSelectCard = (id: string) => {
    if (selectedCards.includes(id)) {
      setSelectedCards(selectedCards.filter(cardId => cardId !== id));
    } else {
      setSelectedCards([...selectedCards, id]);
    }
  };

  const handleApprove = (id: string) => {
    setRecommendations(prev => 
      prev.map(rec => rec.id === id ? { ...rec, status: 'approved' as const } : rec)
    );
    toast.success('Recommendation approved and applied!');
  };

  const handleDismiss = (id: string) => {
    setRecommendations(prev => 
      prev.map(rec => rec.id === id ? { ...rec, status: 'dismissed' as const } : rec)
    );
    toast.success('Recommendation dismissed');
  };

  const handleBulkApprove = () => {
    setRecommendations(prev => 
      prev.map(rec => selectedCards.includes(rec.id) ? { ...rec, status: 'approved' as const } : rec)
    );
    toast.success(`${selectedCards.length} recommendations approved!`);
    setSelectedCards([]);
  };

  const handleBulkDismiss = () => {
    setRecommendations(prev => 
      prev.map(rec => selectedCards.includes(rec.id) ? { ...rec, status: 'dismissed' as const } : rec)
    );
    toast.success(`${selectedCards.length} recommendations dismissed`);
    setSelectedCards([]);
  };

  const handleExport = () => {
    toast.success('Export started! CSV file will download shortly.');
  };

  const handleRefresh = () => {
    setIsRefreshing(true);
    toast.success('Refreshing recommendations...');
    setTimeout(() => {
      setIsRefreshing(false);
      toast.success('Recommendations updated!');
    }, 1500);
  };

  const handleModify = (rec: Recommendation) => {
    setModifyingRecommendation(rec);
  };

  const handleSaveModification = (notes: string) => {
    toast.success('Recommendation modified and applied!');
  };

  // Filter recommendations
  const filteredRecommendations = recommendations.filter(rec => {
    if (selectedPriority !== 'all' && rec.priority !== selectedPriority) return false;
    if (selectedStatus !== 'all' && rec.status !== selectedStatus) return false;
    return true;
  });

  return (
    <div className="flex h-screen overflow-hidden">
      {/* Main Content Area */}
      <div className="flex-1 overflow-y-auto p-6">
        {/* Top Header */}
        <div className="mb-6">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-3">
            <span className="hover:text-[#059669] cursor-pointer">Dashboard</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-[#1F2937] font-medium">AI Recommendations</span>
          </div>

          {/* Title and Actions */}
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <div className="w-10 h-10 bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-lg flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <h1 className="text-3xl font-bold text-[#1F2937]">AI Recommendations</h1>
              </div>
              <p className="text-sm text-[#6B7280]">AI-powered insights to optimize patient care</p>
            </div>

            <div className="flex items-center gap-3">
              {/* Model Version Badge */}
              <span className="px-3 py-1.5 bg-[#8B5CF6]/10 text-[#8B5CF6] rounded-full text-sm font-medium border border-[#8B5CF6]/20">
                Model version: v1.2
              </span>
              
              {/* Refresh Button */}
              <button 
                onClick={handleRefresh}
                disabled={isRefreshing}
                className="px-4 py-2 border-2 border-[#059669] text-[#059669] rounded-lg font-medium hover:bg-[#059669]/5 transition-colors flex items-center gap-2"
              >
                <RefreshCw className={`w-4 h-4 ${isRefreshing ? 'animate-spin' : ''}`} />
                {isRefreshing ? 'Refreshing...' : 'Refresh recommendations'}
              </button>

              {/* View Analytics Button */}
              <button 
                onClick={() => setShowAnalyticsModal(true)}
                className="px-4 py-2 border-2 border-[#059669] text-[#059669] rounded-lg font-medium hover:bg-[#059669]/5 transition-colors flex items-center gap-2"
              >
                <BarChart3 className="w-4 h-4" />
                View analytics
              </button>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <AIRecommendationStats />

        {/* Filter Bar */}
        <AIRecommendationFilters 
          viewMode={viewMode}
          onViewModeChange={setViewMode}
          selectedPriority={selectedPriority}
          onPriorityChange={setSelectedPriority}
          selectedStatus={selectedStatus}
          onStatusChange={setSelectedStatus}
        />

        {/* Results Count */}
        <div className="mb-4">
          <p className="text-sm text-[#6B7280]">
            Showing <span className="font-medium text-[#1F2937]">{filteredRecommendations.length}</span> of{' '}
            <span className="font-medium text-[#1F2937]">{recommendations.length}</span> recommendations
          </p>
        </div>

        {/* View Mode Rendering */}
        {viewMode === 'card' && (
          <div className="space-y-4">
            {filteredRecommendations.length === 0 ? (
              <div className="bg-white rounded-xl p-12 text-center border border-gray-200">
                <Sparkles className="w-12 h-12 text-[#6B7280] mx-auto mb-4" />
                <h3 className="font-bold text-[#1F2937] mb-2">No recommendations found</h3>
                <p className="text-sm text-[#6B7280]">
                  Try adjusting your filters or check back later for new AI insights.
                </p>
              </div>
            ) : (
              filteredRecommendations.map((rec) => (
                <AIRecommendationCard
                  key={rec.id}
                  {...rec}
                  isSelected={selectedCards.includes(rec.id)}
                  onSelect={handleSelectCard}
                  onApprove={() => handleApprove(rec.id)}
                  onDismiss={() => handleDismiss(rec.id)}
                  onModify={() => handleModify(rec)}
                />
              ))
            )}
          </div>
        )}

        {viewMode === 'list' && (
          <div className="bg-white rounded-xl border border-gray-200">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">
                      <input type="checkbox" className="rounded" />
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">Priority</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">Patient</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">Recommendation</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">Type</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">Confidence</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-[#6B7280] uppercase tracking-wider">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredRecommendations.map((rec) => (
                    <tr key={rec.id} className="hover:bg-gray-50">
                      <td className="px-6 py-4">
                        <input 
                          type="checkbox" 
                          checked={selectedCards.includes(rec.id)}
                          onChange={() => handleSelectCard(rec.id)}
                          className="rounded" 
                        />
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${
                          rec.priority === 'high' ? 'bg-red-100 text-red-700' :
                          rec.priority === 'medium' ? 'bg-orange-100 text-orange-700' :
                          'bg-green-100 text-green-700'
                        }`}>
                          {rec.priority}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-medium text-[#1F2937]">{rec.patientName}</div>
                        <div className="text-xs text-[#6B7280]">{rec.patientId}</div>
                      </td>
                      <td className="px-6 py-4 max-w-md">
                        <div className="text-sm text-[#1F2937] line-clamp-2">{rec.title}</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="text-xs text-[#6B7280]">{rec.type}</span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-[#059669]"
                              style={{ width: `${rec.confidence}%` }}
                            />
                          </div>
                          <span className="text-sm font-medium text-[#1F2937]">{rec.confidence}%</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                          rec.status === 'new' ? 'bg-[#059669]/10 text-[#059669]' :
                          rec.status === 'approved' ? 'bg-green-100 text-green-700' :
                          rec.status === 'dismissed' ? 'bg-red-100 text-red-700' :
                          'bg-orange-100 text-orange-700'
                        }`}>
                          {rec.status}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <button 
                            onClick={() => handleApprove(rec.id)}
                            className="text-[#059669] hover:underline text-sm font-medium"
                          >
                            Approve
                          </button>
                          <button 
                            onClick={() => handleDismiss(rec.id)}
                            className="text-red-600 hover:underline text-sm font-medium"
                          >
                            Dismiss
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {viewMode === 'timeline' && (
          <div className="space-y-6">
            {filteredRecommendations.map((rec, index) => (
              <div key={rec.id} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${
                    rec.priority === 'high' ? 'bg-red-500' :
                    rec.priority === 'medium' ? 'bg-orange-500' :
                    'bg-green-500'
                  }`} />
                  {index < filteredRecommendations.length - 1 && (
                    <div className="w-0.5 h-full bg-gray-300 my-2" />
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4 text-[#6B7280]" />
                        <span className="text-sm text-[#6B7280]">{rec.generatedTime}</span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-bold uppercase ${
                        rec.priority === 'high' ? 'bg-red-100 text-red-700' :
                        rec.priority === 'medium' ? 'bg-orange-100 text-orange-700' :
                        'bg-green-100 text-green-700'
                      }`}>
                        {rec.priority}
                      </span>
                    </div>
                    <h3 className="font-bold text-[#1F2937] mb-2">{rec.title}</h3>
                    <p className="text-sm text-[#6B7280] mb-3">
                      Patient: <span className="text-[#059669] font-medium">{rec.patientName}</span> ({rec.patientId})
                    </p>
                    <div className="flex items-center gap-3">
                      <button 
                        onClick={() => handleApprove(rec.id)}
                        className="px-4 py-2 bg-[#059669] text-white rounded-lg text-sm font-medium hover:bg-[#047857]"
                      >
                        Approve
                      </button>
                      <button 
                        onClick={() => handleDismiss(rec.id)}
                        className="px-4 py-2 border border-gray-300 text-[#6B7280] rounded-lg text-sm font-medium hover:bg-gray-50"
                      >
                        Dismiss
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        {filteredRecommendations.length > 0 && (
          <div className="mt-6 text-center">
            <p className="text-sm text-[#6B7280] mb-3">
              Showing {filteredRecommendations.length} of {recommendations.length} recommendations
            </p>
            <button className="px-6 py-2.5 border-2 border-[#059669] text-[#059669] rounded-lg font-medium hover:bg-[#059669]/5 transition-colors">
              Load more recommendations
            </button>
          </div>
        )}
      </div>

      {/* Right Sidebar */}
      <AIInsightsSidebar 
        onApproveHighConfidence={() => {
          const highConfidence = recommendations.filter(r => r.confidence >= 80 && r.status === 'new');
          highConfidence.forEach(r => handleApprove(r.id));
          toast.success(`${highConfidence.length} high-confidence recommendations approved!`);
        }}
        onDismissLowPriority={() => {
          const lowPriority = recommendations.filter(r => r.priority === 'low' && r.status === 'new');
          lowPriority.forEach(r => handleDismiss(r.id));
          toast.success(`${lowPriority.length} low-priority recommendations dismissed`);
        }}
        onExport={handleExport}
      />

      {/* Bulk Actions Bar (appears when cards selected) */}
      {selectedCards.length > 0 && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-[#1F2937] text-white px-8 py-4 rounded-2xl shadow-2xl flex items-center gap-6 z-50">
          <p className="font-medium">
            {selectedCards.length} recommendation{selectedCards.length > 1 ? 's' : ''} selected
          </p>
          <div className="flex items-center gap-3">
            <button 
              onClick={handleBulkApprove}
              className="px-4 py-2 bg-[#059669] hover:bg-[#047857] rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" />
              Approve all
            </button>
            <button 
              onClick={handleBulkDismiss}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
            >
              Dismiss all
            </button>
            <button 
              onClick={handleExport}
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Export
            </button>
            <button 
              className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg font-medium transition-colors"
              onClick={() => setSelectedCards([])}
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Modals */}
      {showAnalyticsModal && (
        <AnalyticsModal onClose={() => setShowAnalyticsModal(false)} />
      )}

      {modifyingRecommendation && (
        <ModifyRecommendationModal
          recommendation={modifyingRecommendation}
          onClose={() => setModifyingRecommendation(null)}
          onSave={handleSaveModification}
        />
      )}
    </div>
  );
}
