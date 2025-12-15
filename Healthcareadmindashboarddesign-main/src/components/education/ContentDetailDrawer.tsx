import { X, Eye, Share2, Calendar, User, Tag, Star, MessageSquare, Edit, ExternalLink, Archive } from 'lucide-react';
import { EducationalContent } from '../../pages/EducationPage';

interface ContentDetailDrawerProps {
  content: EducationalContent | null;
  open: boolean;
  onClose: () => void;
}

const categoryColors: Record<string, string> = {
  'Asthma Basics': 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  'Trigger Management': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  'Medication Guide': 'bg-pink-500/20 text-pink-300 border-pink-500/30',
  'Lifestyle Tips': 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  'Emergency Response': 'bg-red-500/20 text-red-300 border-red-500/30',
  'Environmental Factors': 'bg-green-500/20 text-green-300 border-green-500/30',
  'Diet & Nutrition': 'bg-yellow-500/20 text-yellow-300 border-yellow-500/30',
};

const relatedContent = [
  { id: '1', title: 'Recognizing Asthma Symptoms', thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=120&fit=crop' },
  { id: '2', title: 'Asthma Medication Types', thumbnail: 'https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=200&h=120&fit=crop' },
  { id: '3', title: 'Living Well with Asthma', thumbnail: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=200&h=120&fit=crop' },
];

export function ContentDetailDrawer({ content, open, onClose }: ContentDetailDrawerProps) {
  if (!content || !open) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed right-0 top-0 h-full w-[600px] bg-[#0A0F1E] border-l border-white/10 shadow-2xl z-50 overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-[#0A0F1E]/95 backdrop-blur-xl border-b border-white/10 p-6 z-10">
          <div className="flex items-start justify-between">
            <h2 className="text-xl text-white pr-8 leading-tight">{content.title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-6">
          {/* Thumbnail */}
          <div className="relative aspect-video rounded-2xl overflow-hidden">
            <img 
              src={content.thumbnail}
              alt={content.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4">
              <span className={`px-3 py-1.5 rounded-full border text-sm ${categoryColors[content.category]}`}>
                {content.category}
              </span>
            </div>
          </div>

          {/* Metadata Card */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-4">Content Information</h3>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Tag className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-500">Type</span>
                </div>
                <p className="text-sm text-white">{content.type}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <User className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-500">Author</span>
                </div>
                <p className="text-sm text-white">{content.author.name}</p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-500">Created</span>
                </div>
                <p className="text-sm text-white">
                  {new Date(content.createdDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-2 mb-1">
                  <Calendar className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-500">Updated</span>
                </div>
                <p className="text-sm text-white">
                  {new Date(content.updatedDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                </p>
              </div>
            </div>

            <div className="mt-4 pt-4 border-t border-white/5 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-white">{content.views.toLocaleString()}</span>
                  <span className="text-xs text-gray-500">views</span>
                </div>
                <div className="flex items-center gap-2">
                  <Share2 className="w-4 h-4 text-gray-500" />
                  <span className="text-sm text-white">{content.shares}</span>
                  <span className="text-xs text-gray-500">shares</span>
                </div>
              </div>

              <select className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm text-white focus:outline-none focus:border-purple-500/50">
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
                <option value="Archived">Archived</option>
              </select>
            </div>
          </div>

          {/* Content Preview */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-4">Content Preview</h3>
            <p className="text-sm text-gray-300 leading-relaxed mb-4">
              {content.excerpt}
            </p>
            <p className="text-sm text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Understanding your asthma triggers is essential for effective management and prevention of symptoms.
            </p>
            <p className="text-sm text-gray-400 leading-relaxed mt-3">
              Common triggers include pollen, dust mites, pet dander, smoke, and air pollution. Each person's triggers may be different, so it's important to identify your specific triggers through careful observation and medical testing.
            </p>
          </div>

          {/* Tags */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-3">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {content.tags.map((tag, idx) => (
                <span 
                  key={idx}
                  className="px-3 py-1.5 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/30 text-xs"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Patient Feedback */}
          {content.status === 'Published' && (
            <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
              <h3 className="text-sm text-gray-400 mb-4">Patient Feedback</h3>
              
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star 
                      key={star}
                      className={`w-5 h-5 ${star <= content.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-600'}`}
                    />
                  ))}
                </div>
                <span className="text-white font-medium">{content.rating.toFixed(1)}</span>
                <span className="text-sm text-gray-500">({content.comments} reviews)</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <MessageSquare className="w-4 h-4 text-gray-500" />
                <span className="text-white">{content.comments}</span>
                <span className="text-gray-500">comments from patients</span>
              </div>
            </div>
          )}

          {/* Related Content */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-gray-400 mb-4">Related Content</h3>
            
            <div className="space-y-3">
              {relatedContent.map((related) => (
                <div 
                  key={related.id}
                  className="flex items-center gap-3 p-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all cursor-pointer"
                >
                  <img 
                    src={related.thumbnail}
                    alt={related.title}
                    className="w-20 h-12 object-cover rounded-lg"
                  />
                  <p className="text-sm text-white flex-1">{related.title}</p>
                  <ExternalLink className="w-4 h-4 text-gray-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 pb-6">
            <button className="w-full px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2">
              <Edit className="w-4 h-4" />
              Edit Content
            </button>
            <div className="grid grid-cols-2 gap-3">
              <button className="px-5 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition-all flex items-center justify-center gap-2">
                <ExternalLink className="w-4 h-4" />
                Preview as Patient
              </button>
              <button className="px-5 py-3 rounded-xl border border-red-500/30 text-red-400 hover:bg-red-500/10 transition-all flex items-center justify-center gap-2">
                <Archive className="w-4 h-4" />
                Archive
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
