import { useState } from 'react';
import { ChevronLeft, ChevronRight, Bookmark, Clock, User } from 'lucide-react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';

const featuredResources = [
  {
    id: 1,
    title: '2025 Updated Asthma Management Protocol',
    description: 'Latest evidence-based recommendations for treating moderate to severe asthma patients with new medication guidelines and treatment strategies.',
    category: 'Clinical Guideline',
    categoryColor: 'bg-blue-100 text-blue-700',
    author: 'Dr. Sarah Mitchell',
    date: 'Dec 12, 2025',
    readTime: '15 min read',
    thumbnail: 'clinical-guideline',
    isBookmarked: false,
  },
  {
    id: 2,
    title: 'AI-Powered Allergy Prediction: Latest Research',
    description: 'Groundbreaking study on using artificial intelligence to predict allergic reactions and optimize treatment plans for high-risk patients.',
    category: 'Research',
    categoryColor: 'bg-purple-100 text-purple-700',
    author: 'Dr. Michael Chen',
    date: 'Dec 10, 2025',
    readTime: '12 min read',
    thumbnail: 'research',
    isBookmarked: true,
  },
  {
    id: 3,
    title: 'Patient Education: Understanding Peak Flow Meters',
    description: 'Comprehensive visual guide and handouts for teaching patients how to properly use peak flow meters to monitor their asthma.',
    category: 'Patient Education',
    categoryColor: 'bg-green-100 text-green-700',
    author: 'Dr. Emily Rodriguez',
    date: 'Dec 8, 2025',
    readTime: '8 min read',
    thumbnail: 'patient-education',
    isBookmarked: false,
  },
  {
    id: 4,
    title: 'Emergency Anaphylaxis Response Protocol',
    description: 'Step-by-step emergency procedures for handling severe allergic reactions and anaphylaxis in clinical and home settings.',
    category: 'Emergency Protocol',
    categoryColor: 'bg-red-100 text-red-700',
    author: 'Dr. James Wilson',
    date: 'Dec 5, 2025',
    readTime: '10 min read',
    thumbnail: 'emergency',
    isBookmarked: false,
  },
];

export function FeaturedSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [bookmarks, setBookmarks] = useState<number[]>([2]);

  const visibleResources = [
    featuredResources[currentIndex],
    featuredResources[(currentIndex + 1) % featuredResources.length],
    featuredResources[(currentIndex + 2) % featuredResources.length],
  ];

  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + featuredResources.length) % featuredResources.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % featuredResources.length);
  };

  const toggleBookmark = (id: number) => {
    setBookmarks((prev) =>
      prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]
    );
  };

  const getThumbnailGradient = (type: string) => {
    switch (type) {
      case 'clinical-guideline':
        return 'from-blue-500 to-blue-600';
      case 'research':
        return 'from-purple-500 to-purple-600';
      case 'patient-education':
        return 'from-green-500 to-green-600';
      case 'emergency':
        return 'from-red-500 to-red-600';
      default:
        return 'from-[#059669] to-[#10B981]';
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-[#1F2937]">Featured This Week</h2>
        
        <div className="flex items-center gap-2">
          <button
            onClick={handlePrevious}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#059669] hover:bg-[#059669]/5 transition-colors"
          >
            <ChevronLeft className="w-4 h-4 text-[#6B7280]" />
          </button>
          <button
            onClick={handleNext}
            className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:border-[#059669] hover:bg-[#059669]/5 transition-colors"
          >
            <ChevronRight className="w-4 h-4 text-[#6B7280]" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-3 gap-6">
        {visibleResources.map((resource, idx) => (
          <div
            key={`${resource.id}-${idx}`}
            className="bg-[#F8F9FA] rounded-xl overflow-hidden border border-gray-200 hover:shadow-lg hover:border-[#059669] transition-all cursor-pointer group"
          >
            {/* Thumbnail */}
            <div className={`h-40 bg-gradient-to-br ${getThumbnailGradient(resource.thumbnail)} relative`}>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-6xl opacity-20">📚</div>
              </div>
              
              {/* Featured Badge */}
              <Badge className="absolute top-3 left-3 bg-[#059669] text-white hover:bg-[#059669]">
                Featured
              </Badge>
              
              {/* Bookmark Icon */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  toggleBookmark(resource.id);
                }}
                className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors"
              >
                <Bookmark
                  className={`w-4 h-4 ${
                    bookmarks.includes(resource.id)
                      ? 'fill-[#059669] text-[#059669]'
                      : 'text-[#6B7280]'
                  }`}
                />
              </button>
            </div>

            {/* Content */}
            <div className="p-5">
              {/* Category Tag */}
              <Badge className={`${resource.categoryColor} mb-3`}>
                {resource.category}
              </Badge>

              {/* Title */}
              <h3 className="font-bold text-[#1F2937] mb-2 line-clamp-2 group-hover:text-[#059669] transition-colors">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-[#6B7280] mb-4 line-clamp-2">
                {resource.description}
              </p>

              {/* Meta Info */}
              <div className="flex items-center gap-3 text-xs text-[#6B7280] mb-4">
                <div className="flex items-center gap-1">
                  <User className="w-3 h-3" />
                  {resource.author}
                </div>
                <span>•</span>
                <span>{resource.date}</span>
                <span>•</span>
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {resource.readTime}
                </div>
              </div>

              {/* Read Button */}
              <Button
                className="w-full bg-[#059669] text-white hover:bg-[#047857]"
                size="sm"
              >
                Read now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
