import { useState } from 'react';
import { BookOpen, Search, Bookmark, Upload, Plus, Grid, List } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Input } from '../../components/ui/input';
import { QuickAccessCards } from '../../components/doctor/resources/QuickAccessCards';
import { FeaturedSection } from '../../components/doctor/resources/FeaturedSection';
import { CategoryTabs } from '../../components/doctor/resources/CategoryTabs';
import { FilterSidebar } from '../../components/doctor/resources/FilterSidebar';
import { ResourceGrid } from '../../components/doctor/resources/ResourceGrid';
import { ResourceDetailModal } from '../../components/doctor/resources/ResourceDetailModal';
import { UploadResourceModal } from '../../components/doctor/resources/UploadResourceModal';
import { RequestContentModal } from '../../components/doctor/resources/RequestContentModal';

type ViewType = 'grid' | 'list';
type CategoryType = 'all' | 'clinical' | 'treatment' | 'research' | 'patient-education' | 'medication' | 'environmental' | 'emergency' | 'case-studies';

export function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [viewType, setViewType] = useState<ViewType>('grid');
  const [activeCategory, setActiveCategory] = useState<CategoryType>('all');
  const [selectedResource, setSelectedResource] = useState<any>(null);
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [bookmarkedCount, setBookmarkedCount] = useState(12);
  const [showRequestContentModal, setShowRequestContentModal] = useState(false);

  return (
    <div className="bg-[#F8F9FA]">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-3">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-[#1F2937] font-medium">Resources</span>
        </div>

        {/* Title and Actions Row */}
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <div>
                <h1 className="text-[#1F2937]">Resources & Education</h1>
                <p className="text-sm text-[#6B7280] mt-0.5">Evidence-based clinical information and patient education materials</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Search Bar */}
            <div className="relative w-[400px]">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#6B7280]" />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-full border-gray-300 focus:border-[#059669] focus:ring-[#059669]"
              />
            </div>

            {/* Bookmarks Button */}
            <Button
              variant="outline"
              className="border-[#059669] text-[#059669] hover:bg-[#059669]/5 relative"
            >
              <Bookmark className="w-4 h-4 mr-2" />
              Bookmarks
              {bookmarkedCount > 0 && (
                <Badge className="ml-2 bg-[#059669] text-white hover:bg-[#059669]">
                  {bookmarkedCount}
                </Badge>
              )}
            </Button>

            {/* Upload Resource Button */}
            <Button
              onClick={() => setShowUploadModal(true)}
              className="bg-gradient-to-r from-[#059669] to-[#10B981] text-white hover:opacity-90 shadow-md"
            >
              <Upload className="w-4 h-4 mr-2" />
              Upload resource
            </Button>

            {/* Request Content Button */}
            <Button
              onClick={() => setShowRequestContentModal(true)}
              className="border-gray-300 text-[#6B7280] hover:bg-gray-50"
            >
              <Plus className="w-4 h-4 mr-2" />
              Request content
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Access Row */}
      <div className="px-8 py-6">
        <QuickAccessCards />
      </div>

      {/* Featured Section */}
      <div className="px-8 pb-6">
        <FeaturedSection />
      </div>

      {/* Category Tabs */}
      <div className="px-8 pb-6">
        <CategoryTabs activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </div>

      {/* Main Content Area with Filter Sidebar */}
      <div className="px-8 pb-8 flex gap-6">
        {/* Filter Sidebar */}
        <div className="w-[250px] flex-shrink-0">
          <FilterSidebar />
        </div>

        {/* Resource Grid/List */}
        <div className="flex-1">
          {/* Sort and View Toggle Bar */}
          <div className="flex items-center justify-between mb-6">
            <p className="text-sm text-[#6B7280]">
              Showing <span className="font-medium text-[#1F2937]">156 resources</span>
            </p>

            <div className="flex items-center gap-4">
              {/* Sort Dropdown */}
              <div className="flex items-center gap-2">
                <span className="text-sm text-[#6B7280]">Sort by:</span>
                <select className="text-sm border border-gray-300 rounded-lg px-3 py-1.5 text-[#1F2937] focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]">
                  <option>Most Recent</option>
                  <option>Most Popular</option>
                  <option>Alphabetical</option>
                  <option>Relevance</option>
                </select>
              </div>

              {/* View Toggle */}
              <div className="flex items-center bg-white rounded-lg border border-gray-300 p-1">
                <button
                  onClick={() => setViewType('grid')}
                  className={`p-1.5 rounded transition-colors ${
                    viewType === 'grid'
                      ? 'bg-[#059669] text-white'
                      : 'text-[#6B7280] hover:text-[#1F2937]'
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewType('list')}
                  className={`p-1.5 rounded transition-colors ${
                    viewType === 'list'
                      ? 'bg-[#059669] text-white'
                      : 'text-[#6B7280] hover:text-[#1F2937]'
                  }`}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Resource Grid */}
          <ResourceGrid
            viewType={viewType}
            searchQuery={searchQuery}
            activeCategory={activeCategory}
            onResourceClick={setSelectedResource}
          />
        </div>
      </div>

      {/* Modals */}
      {selectedResource && (
        <ResourceDetailModal
          resource={selectedResource}
          onClose={() => setSelectedResource(null)}
        />
      )}

      {showUploadModal && (
        <UploadResourceModal onClose={() => setShowUploadModal(false)} />
      )}

      {showRequestContentModal && (
        <RequestContentModal onClose={() => setShowRequestContentModal(false)} />
      )}
    </div>
  );
}