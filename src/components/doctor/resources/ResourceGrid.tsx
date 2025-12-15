import { useState } from 'react';
import { FileText, Play, Image as ImageIcon, Eye, Download, Star, Bookmark, BookOpen } from 'lucide-react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';

const mockResources = [
  {
    id: 1,
    title: 'Managing Pollen Allergies: A Comprehensive Guide',
    description: 'Evidence-based strategies for diagnosing and treating seasonal and perennial pollen allergies in adults and children with medication protocols.',
    category: 'Clinical Guideline',
    categoryColor: 'bg-blue-100 text-blue-700',
    contentType: 'PDF',
    contentTypeColor: 'bg-blue-500',
    author: 'Dr. Sarah Ahmed',
    date: 'Dec 10, 2025',
    views: 234,
    downloads: 45,
    rating: 4.5,
    tags: ['#asthma', '#pollen', '#treatment'],
    thumbnail: 'document',
    isNew: false,
    isBookmarked: false,
  },
  {
    id: 2,
    title: 'Inhaler Technique: Step-by-Step Video Tutorial',
    description: 'Complete visual demonstration of proper inhaler usage techniques for patients with asthma and COPD, including common mistakes to avoid.',
    category: 'Patient Education',
    categoryColor: 'bg-green-100 text-green-700',
    contentType: 'Video',
    contentTypeColor: 'bg-red-500',
    author: 'Dr. Michael Chen',
    date: 'Dec 12, 2025',
    views: 567,
    downloads: 0,
    rating: 4.8,
    tags: ['#inhaler', '#education', '#video'],
    thumbnail: 'video',
    isNew: true,
    isBookmarked: true,
  },
  {
    id: 3,
    title: 'Emergency Anaphylaxis Management Protocol',
    description: 'Critical care guidelines for identifying and treating anaphylactic reactions in emergency settings with epinephrine administration protocols.',
    category: 'Emergency Protocol',
    categoryColor: 'bg-red-100 text-red-700',
    contentType: 'PDF',
    contentTypeColor: 'bg-blue-500',
    author: 'WHO Guidelines',
    date: 'Dec 8, 2025',
    views: 892,
    downloads: 156,
    rating: 4.9,
    tags: ['#emergency', '#anaphylaxis', '#protocol'],
    thumbnail: 'document',
    isNew: false,
    isBookmarked: false,
  },
  {
    id: 4,
    title: 'Pediatric Asthma Care: Evidence-Based Approaches',
    description: 'Comprehensive treatment strategies for managing asthma in children from infancy through adolescence, including growth considerations.',
    category: 'Treatment Protocol',
    categoryColor: 'bg-purple-100 text-purple-700',
    contentType: 'Article',
    contentTypeColor: 'bg-green-500',
    author: 'Dr. Emily Rodriguez',
    date: 'Dec 5, 2025',
    views: 423,
    downloads: 78,
    rating: 4.6,
    tags: ['#pediatric', '#asthma', '#children'],
    thumbnail: 'article',
    isNew: false,
    isBookmarked: false,
  },
  {
    id: 5,
    title: 'Environmental Triggers Identification Chart',
    description: 'Visual infographic showing common environmental allergens, seasonal patterns, and trigger avoidance strategies for patient education.',
    category: 'Patient Education',
    categoryColor: 'bg-green-100 text-green-700',
    contentType: 'Infographic',
    contentTypeColor: 'bg-orange-500',
    author: 'WheezeEase Team',
    date: 'Dec 13, 2025',
    views: 145,
    downloads: 34,
    rating: 4.3,
    tags: ['#environmental', '#triggers', '#infographic'],
    thumbnail: 'infographic',
    isNew: true,
    isBookmarked: false,
  },
  {
    id: 6,
    title: 'AI in Respiratory Medicine: 2025 Research Review',
    description: 'Latest findings on artificial intelligence applications in diagnosing and managing respiratory conditions including predictive analytics.',
    category: 'Research',
    categoryColor: 'bg-purple-100 text-purple-700',
    contentType: 'Article',
    contentTypeColor: 'bg-green-500',
    author: 'Dr. James Wilson',
    date: 'Dec 1, 2025',
    views: 678,
    downloads: 92,
    rating: 4.7,
    tags: ['#AI', '#research', '#respiratory'],
    thumbnail: 'article',
    isNew: false,
    isBookmarked: true,
  },
  {
    id: 7,
    title: 'Medication Adherence Tracking Template',
    description: 'Printable patient worksheet for monitoring medication usage, symptom patterns, and treatment compliance over time.',
    category: 'Patient Education',
    categoryColor: 'bg-green-100 text-green-700',
    contentType: 'PDF',
    contentTypeColor: 'bg-blue-500',
    author: 'Dr. Sarah Ahmed',
    date: 'Nov 28, 2025',
    views: 312,
    downloads: 89,
    rating: 4.4,
    tags: ['#medication', '#adherence', '#tracking'],
    thumbnail: 'document',
    isNew: false,
    isBookmarked: false,
  },
  {
    id: 8,
    title: 'Peak Flow Meter Usage: Patient Instructions',
    description: 'Multilingual guide (English/Urdu) with illustrations showing proper peak flow meter technique and result interpretation.',
    category: 'Patient Education',
    categoryColor: 'bg-green-100 text-green-700',
    contentType: 'PDF',
    contentTypeColor: 'bg-blue-500',
    author: 'Dr. Emily Rodriguez',
    date: 'Nov 25, 2025',
    views: 456,
    downloads: 123,
    rating: 4.6,
    tags: ['#peak-flow', '#instructions', '#multilingual'],
    thumbnail: 'document',
    isNew: false,
    isBookmarked: false,
  },
  {
    id: 9,
    title: 'Seasonal Allergy Patterns: Data Analysis 2024',
    description: 'Comprehensive study analyzing pollen counts, seasonal variations, and allergy symptom correlations across different regions.',
    category: 'Research',
    categoryColor: 'bg-purple-100 text-purple-700',
    contentType: 'Article',
    contentTypeColor: 'bg-green-500',
    author: 'Dr. Michael Chen',
    date: 'Nov 20, 2025',
    views: 523,
    downloads: 67,
    rating: 4.5,
    tags: ['#seasonal', '#data', '#analysis'],
    thumbnail: 'article',
    isNew: false,
    isBookmarked: false,
  },
];

interface ResourceGridProps {
  viewType: 'grid' | 'list';
  searchQuery: string;
  activeCategory: string;
  onResourceClick: (resource: any) => void;
}

export function ResourceGrid({ viewType, searchQuery, activeCategory, onResourceClick }: ResourceGridProps) {
  const [bookmarkedIds, setBookmarkedIds] = useState<number[]>([2, 6]);

  const toggleBookmark = (id: number, e: React.MouseEvent) => {
    e.stopPropagation();
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]
    );
  };

  // Filter resources based on search query and category
  const filteredResources = mockResources.filter((resource) => {
    // Category filter
    const categoryMatch = 
      activeCategory === 'all' ||
      (activeCategory === 'clinical' && resource.category === 'Clinical Guideline') ||
      (activeCategory === 'treatment' && resource.category === 'Treatment Protocol') ||
      (activeCategory === 'research' && resource.category === 'Research') ||
      (activeCategory === 'patient-education' && resource.category === 'Patient Education') ||
      (activeCategory === 'emergency' && resource.category === 'Emergency Protocol');

    if (!categoryMatch) return false;

    // Search filter
    if (!searchQuery.trim()) return true;

    const query = searchQuery.toLowerCase();
    return (
      resource.title.toLowerCase().includes(query) ||
      resource.description.toLowerCase().includes(query) ||
      resource.author.toLowerCase().includes(query) ||
      resource.category.toLowerCase().includes(query) ||
      resource.tags.some(tag => tag.toLowerCase().includes(query))
    );
  });

  const getContentTypeIcon = (type: string) => {
    switch (type) {
      case 'PDF':
        return FileText;
      case 'Video':
        return Play;
      case 'Infographic':
        return ImageIcon;
      default:
        return BookOpen;
    }
  };

  const getThumbnailGradient = (type: string) => {
    switch (type) {
      case 'document':
        return 'from-blue-400 to-blue-500';
      case 'video':
        return 'from-red-400 to-red-500';
      case 'article':
        return 'from-green-400 to-green-500';
      case 'infographic':
        return 'from-orange-400 to-orange-500';
      default:
        return 'from-[#059669] to-[#10B981]';
    }
  };

  if (viewType === 'list') {
    return (
      <div className="space-y-4">
        {filteredResources.length === 0 ? (
          <div className="bg-white rounded-xl p-12 border border-gray-200 text-center">
            <BookOpen className="w-12 h-12 text-[#6B7280] mx-auto mb-4" />
            <h3 className="font-bold text-[#1F2937] mb-2">No resources found</h3>
            <p className="text-sm text-[#6B7280]">
              {searchQuery 
                ? `No resources match "${searchQuery}". Try different keywords or clear your search.`
                : 'No resources available in this category.'}
            </p>
          </div>
        ) : (
          filteredResources.map((resource) => {
            const ContentTypeIcon = getContentTypeIcon(resource.contentType);
            return (
              <div
                key={resource.id}
                onClick={() => onResourceClick(resource)}
                className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#059669] transition-all cursor-pointer flex items-center gap-5"
              >
                {/* Thumbnail */}
                <div className={`w-20 h-20 rounded-lg bg-gradient-to-br ${getThumbnailGradient(resource.thumbnail)} flex-shrink-0 flex items-center justify-center`}>
                  <ContentTypeIcon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between gap-4 mb-2">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <Badge className={`${resource.categoryColor} text-xs`}>
                          {resource.category}
                        </Badge>
                        {resource.isNew && (
                          <div className="w-2 h-2 bg-red-500 rounded-full" />
                        )}
                      </div>
                      <h3 className="font-bold text-[#1F2937] mb-1 hover:text-[#059669] transition-colors">
                        {resource.title}
                      </h3>
                      <p className="text-sm text-[#6B7280] line-clamp-1">
                        {resource.description}
                      </p>
                    </div>

                    <Badge className={`${resource.contentTypeColor} text-white hover:${resource.contentTypeColor}`}>
                      {resource.contentType}
                    </Badge>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-xs text-[#6B7280]">
                      <span>{resource.author}</span>
                      <span>•</span>
                      <span>{resource.date}</span>
                      <span>•</span>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-1">
                          <Eye className="w-3 h-3" />
                          {resource.views}
                        </div>
                        {resource.downloads > 0 && (
                          <div className="flex items-center gap-1">
                            <Download className="w-3 h-3" />
                            {resource.downloads}
                          </div>
                        )}
                        <div className="flex items-center gap-1">
                          <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                          {resource.rating}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={(e) => toggleBookmark(resource.id, e)}
                        className="p-2 rounded-lg hover:bg-[#F8F9FA] transition-colors"
                      >
                        <Bookmark
                          className={`w-4 h-4 ${
                            bookmarkedIds.includes(resource.id)
                              ? 'fill-[#059669] text-[#059669]'
                              : 'text-[#6B7280]'
                          }`}
                        />
                      </button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-[#059669] text-[#059669] hover:bg-[#059669]/5"
                        onClick={(e) => {
                          e.stopPropagation();
                          onResourceClick(resource);
                        }}
                      >
                        View resource
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })
        )}
      </div>
    );
  }

  // Grid View
  return (
    <>
      {filteredResources.length === 0 ? (
        <div className="bg-white rounded-xl p-12 border border-gray-200 text-center col-span-3">
          <BookOpen className="w-12 h-12 text-[#6B7280] mx-auto mb-4" />
          <h3 className="font-bold text-[#1F2937] mb-2">No resources found</h3>
          <p className="text-sm text-[#6B7280]">
            {searchQuery 
              ? `No resources match "${searchQuery}". Try different keywords or clear your search.`
              : 'No resources available in this category.'}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-6">
          {filteredResources.map((resource) => {
            const ContentTypeIcon = getContentTypeIcon(resource.contentType);
            return (
              <div
                key={resource.id}
                onClick={() => onResourceClick(resource)}
                className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-lg hover:border-[#059669] transition-all cursor-pointer group"
              >
                {/* Thumbnail */}
                <div className={`h-40 bg-gradient-to-br ${getThumbnailGradient(resource.thumbnail)} relative`}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <ContentTypeIcon className="w-12 h-12 text-white opacity-60" />
                  </div>

                  {/* Content Type Badge */}
                  <Badge className={`absolute top-3 left-3 ${resource.contentTypeColor} text-white hover:${resource.contentTypeColor}`}>
                    {resource.contentType}
                  </Badge>

                  {/* New Badge */}
                  {resource.isNew && (
                    <div className="absolute top-3 left-20 w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                  )}

                  {/* Bookmark Icon */}
                  <button
                    onClick={(e) => toggleBookmark(resource.id, e)}
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur flex items-center justify-center hover:bg-white transition-colors"
                  >
                    <Bookmark
                      className={`w-4 h-4 ${
                        bookmarkedIds.includes(resource.id)
                          ? 'fill-[#059669] text-[#059669]'
                          : 'text-[#6B7280]'
                      }`}
                    />
                  </button>
                </div>

                {/* Content */}
                <div className="p-5">
                  {/* Category Tag */}
                  <Badge className={`${resource.categoryColor} mb-3 text-xs`}>
                    {resource.category}
                  </Badge>

                  {/* Title */}
                  <h3 className="font-bold text-[#1F2937] mb-2 line-clamp-2 group-hover:text-[#059669] transition-colors">
                    {resource.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#6B7280] mb-3 line-clamp-3">
                    {resource.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {resource.tags.map((tag, idx) => (
                      <span key={idx} className="text-xs text-[#6B7280] bg-[#F8F9FA] px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Meta Info */}
                  <div className="border-t border-gray-100 pt-3 mb-4">
                    <div className="text-xs text-[#6B7280] mb-2">
                      <div className="font-medium">{resource.author}</div>
                      <div>{resource.date}</div>
                    </div>

                    {/* Engagement Metrics */}
                    <div className="flex items-center gap-3 text-xs text-[#6B7280]">
                      <div className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {resource.views}
                      </div>
                      {resource.downloads > 0 && (
                        <div className="flex items-center gap-1">
                          <Download className="w-3 h-3" />
                          {resource.downloads}
                        </div>
                      )}
                      <div className="flex items-center gap-1">
                        <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                        {resource.rating}
                      </div>
                    </div>
                  </div>

                  {/* View Button */}
                  <Button
                    size="sm"
                    variant="outline"
                    className="w-full border-[#059669] text-[#059669] hover:bg-[#059669]/5"
                    onClick={(e) => {
                      e.stopPropagation();
                      onResourceClick(resource);
                    }}
                  >
                    View resource
                  </Button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}