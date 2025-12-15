import { X, Download, Printer, Share2, Bookmark, Flag, Star, ChevronLeft, ChevronRight, Eye, User, Calendar, Clock } from 'lucide-react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';

interface ResourceDetailModalProps {
  resource: any;
  onClose: () => void;
}

const relatedResources = [
  { id: 1, title: 'Advanced Asthma Treatment Options', thumbnail: 'from-blue-400 to-blue-500' },
  { id: 2, title: 'Managing Severe Allergic Reactions', thumbnail: 'from-purple-400 to-purple-500' },
  { id: 3, title: 'Patient Education Best Practices', thumbnail: 'from-green-400 to-green-500' },
];

const reviews = [
  {
    id: 1,
    author: 'Dr. James Wilson',
    rating: 5,
    date: 'Dec 11, 2025',
    comment: 'Excellent resource with comprehensive information. Very helpful for clinical practice.',
  },
  {
    id: 2,
    author: 'Dr. Emily Rodriguez',
    rating: 4,
    date: 'Dec 9, 2025',
    comment: 'Well-written and evidence-based. Could use more visual aids.',
  },
];

export function ResourceDetailModal({ resource, onClose }: ResourceDetailModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-6xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-200 flex items-center justify-between">
          <div className="flex-1 pr-8">
            <div className="flex items-center gap-3 mb-2">
              <Badge className={`${resource.categoryColor}`}>
                {resource.category}
              </Badge>
              <Badge className={`${resource.contentTypeColor} text-white`}>
                {resource.contentType}
              </Badge>
            </div>
            <h2 className="text-2xl font-bold text-[#1F2937]">{resource.title}</h2>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-[#6B7280]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto">
          <div className="grid grid-cols-[1fr_350px]">
            {/* Left Section - Main Content */}
            <div className="p-8 border-r border-gray-200">
              {/* Content Preview */}
              <div className="bg-[#F8F9FA] rounded-xl p-12 mb-6 min-h-[400px] flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Eye className="w-12 h-12 text-white" />
                  </div>
                  <p className="text-lg font-medium text-[#1F2937] mb-2">Resource Preview</p>
                  <p className="text-sm text-[#6B7280]">
                    Full content would be displayed here
                    <br />
                    (PDF viewer, article reader, or video player)
                  </p>
                </div>
              </div>

              {/* Description */}
              <div className="mb-6">
                <h3 className="font-bold text-[#1F2937] mb-3">Description</h3>
                <p className="text-[#6B7280] leading-relaxed">{resource.description}</p>
              </div>

              {/* Tags */}
              <div>
                <h3 className="font-bold text-[#1F2937] mb-3">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {resource.tags.map((tag: string, idx: number) => (
                    <button
                      key={idx}
                      className="px-3 py-1.5 bg-[#F8F9FA] text-[#6B7280] rounded-lg text-sm hover:bg-[#059669] hover:text-white transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Section - Metadata & Actions */}
            <div className="p-8 bg-[#F8F9FA] overflow-y-auto">
              {/* Resource Information */}
              <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
                <h3 className="font-bold text-[#1F2937] mb-4">Resource Information</h3>
                <div className="space-y-3 text-sm">
                  <div className="flex items-start gap-3">
                    <User className="w-4 h-4 text-[#6B7280] mt-0.5" />
                    <div>
                      <p className="text-[#6B7280]">Author</p>
                      <p className="font-medium text-[#1F2937]">{resource.author}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Calendar className="w-4 h-4 text-[#6B7280] mt-0.5" />
                    <div>
                      <p className="text-[#6B7280]">Published</p>
                      <p className="font-medium text-[#1F2937]">{resource.date}</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Clock className="w-4 h-4 text-[#6B7280] mt-0.5" />
                    <div>
                      <p className="text-[#6B7280]">Reading Time</p>
                      <p className="font-medium text-[#1F2937]">15 minutes</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Download className="w-4 h-4 text-[#6B7280] mt-0.5" />
                    <div>
                      <p className="text-[#6B7280]">File Size</p>
                      <p className="font-medium text-[#1F2937]">2.4 MB</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="space-y-2 mb-6">
                <Button className="w-full bg-[#059669] text-white hover:bg-[#047857]">
                  <Download className="w-4 h-4 mr-2" />
                  Download
                </Button>
                <Button variant="outline" className="w-full">
                  <Printer className="w-4 h-4 mr-2" />
                  Print
                </Button>
                <Button variant="outline" className="w-full">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
                <Button variant="outline" className="w-full border-[#059669] text-[#059669] hover:bg-[#059669]/5">
                  <Bookmark className="w-4 h-4 mr-2" />
                  Bookmark
                </Button>
                <button className="w-full text-sm text-[#6B7280] hover:text-[#1F2937] py-2">
                  <Flag className="w-4 h-4 inline mr-2" />
                  Report issue
                </button>
              </div>

              {/* Related Resources */}
              <div className="bg-white rounded-xl p-5 mb-6 shadow-sm">
                <h3 className="font-bold text-[#1F2937] mb-4">Related Resources</h3>
                <div className="space-y-3">
                  {relatedResources.map((related) => (
                    <div
                      key={related.id}
                      className="flex gap-3 p-3 rounded-lg hover:bg-[#F8F9FA] cursor-pointer transition-colors"
                    >
                      <div className={`w-16 h-16 rounded-lg bg-gradient-to-br ${related.thumbnail} flex-shrink-0`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-[#1F2937] line-clamp-2">
                          {related.title}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ratings & Reviews */}
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#1F2937]">Ratings & Reviews</h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                    <span className="font-medium text-[#1F2937]">{resource.rating}</span>
                  </div>
                </div>

                <Button variant="outline" size="sm" className="w-full mb-4 border-[#059669] text-[#059669] hover:bg-[#059669]/5">
                  Leave a review
                </Button>

                <div className="space-y-3">
                  {reviews.map((review) => (
                    <div key={review.id} className="pb-3 border-b border-gray-100 last:border-0">
                      <div className="flex items-center justify-between mb-2">
                        <p className="text-sm font-medium text-[#1F2937]">{review.author}</p>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: review.rating }).map((_, i) => (
                            <Star key={i} className="w-3 h-3 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                      </div>
                      <p className="text-xs text-[#6B7280] mb-1">{review.date}</p>
                      <p className="text-sm text-[#6B7280]">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="px-8 py-4 border-t border-gray-200 flex items-center justify-between bg-[#F8F9FA]">
          <Button variant="outline" size="sm">
            <ChevronLeft className="w-4 h-4 mr-2" />
            Previous resource
          </Button>
          <Button variant="outline" size="sm">
            Next resource
            <ChevronRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
