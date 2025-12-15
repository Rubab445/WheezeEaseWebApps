import { useState } from 'react';
import { Search, ChevronDown, Plus, Grid3x3, List } from 'lucide-react';
import { EducationStatsCards } from '../components/education/EducationStatsCards';
import { CategoryFilter } from '../components/education/CategoryFilter';
import { ContentTypeToggles } from '../components/education/ContentTypeToggles';
import { ContentGrid } from '../components/education/ContentGrid';
import { ContentTable } from '../components/education/ContentTable';
import { ContentDetailDrawer } from '../components/education/ContentDetailDrawer';
import { AddEditContentModal } from '../components/education/AddEditContentModal';
import { AnalyticsSection } from '../components/education/AnalyticsSection';
import { BulkActionsBar } from '../components/education/BulkActionsBar';

export type ContentType = 'Article' | 'Video' | 'Infographic' | 'Quick Tip';
export type ContentStatus = 'Published' | 'Draft' | 'Needs Review' | 'Archived';
export type Category = 'Asthma Basics' | 'Trigger Management' | 'Medication Guide' | 'Lifestyle Tips' | 'Emergency Response' | 'Environmental Factors' | 'Diet & Nutrition';

export interface EducationalContent {
  id: string;
  title: string;
  type: ContentType;
  category: Category;
  excerpt: string;
  thumbnail: string;
  author: {
    name: string;
    avatar: string;
  };
  views: number;
  status: ContentStatus;
  createdDate: string;
  updatedDate: string;
  tags: string[];
  rating: number;
  comments: number;
  shares: number;
}

const mockContent: EducationalContent[] = [
  {
    id: 'EDU-001',
    title: 'Understanding Asthma Triggers',
    type: 'Article',
    category: 'Asthma Basics',
    excerpt: 'Learn about common triggers that can cause asthma symptoms and how to identify your personal triggers for better management.',
    thumbnail: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=225&fit=crop',
    author: { name: 'Dr. Sarah Ahmed', avatar: 'SA' },
    views: 2847,
    status: 'Published',
    createdDate: '2024-11-15',
    updatedDate: '2024-12-10',
    tags: ['triggers', 'prevention', 'basics'],
    rating: 4.8,
    comments: 24,
    shares: 156
  },
  {
    id: 'EDU-002',
    title: 'How to Use Your Inhaler Correctly',
    type: 'Video',
    category: 'Medication Guide',
    excerpt: 'Step-by-step video guide demonstrating proper inhaler technique to ensure you get the full benefit of your medication.',
    thumbnail: 'https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=400&h=225&fit=crop',
    author: { name: 'Dr. Ali Khan', avatar: 'AK' },
    views: 4521,
    status: 'Published',
    createdDate: '2024-11-20',
    updatedDate: '2024-12-08',
    tags: ['inhaler', 'medication', 'technique'],
    rating: 4.9,
    comments: 38,
    shares: 289
  },
  {
    id: 'EDU-003',
    title: 'Managing Pollen Allergies',
    type: 'Article',
    category: 'Environmental Factors',
    excerpt: 'Practical tips for reducing exposure to pollen and managing seasonal allergy symptoms effectively.',
    thumbnail: 'https://images.unsplash.com/photo-1490750967868-88aa4486c946?w=400&h=225&fit=crop',
    author: { name: 'Dr. Fatima Hassan', avatar: 'FH' },
    views: 1245,
    status: 'Draft',
    createdDate: '2024-12-05',
    updatedDate: '2024-12-12',
    tags: ['pollen', 'allergies', 'seasonal'],
    rating: 0,
    comments: 0,
    shares: 0
  },
  {
    id: 'EDU-004',
    title: 'Emergency Action Plan',
    type: 'Infographic',
    category: 'Emergency Response',
    excerpt: 'Quick reference guide for what to do during an asthma attack. Download and keep with you at all times.',
    thumbnail: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=400&h=225&fit=crop',
    author: { name: 'Dr. Sarah Ahmed', avatar: 'SA' },
    views: 3892,
    status: 'Published',
    createdDate: '2024-10-28',
    updatedDate: '2024-11-30',
    tags: ['emergency', 'action plan', 'attack'],
    rating: 5.0,
    comments: 45,
    shares: 412
  },
  {
    id: 'EDU-005',
    title: 'Foods That Help Respiratory Health',
    type: 'Article',
    category: 'Diet & Nutrition',
    excerpt: 'Discover which foods can support your respiratory system and reduce inflammation in your airways.',
    thumbnail: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=225&fit=crop',
    author: { name: 'Nutritionist Maya Ali', avatar: 'MA' },
    views: 892,
    status: 'Needs Review',
    createdDate: '2024-12-08',
    updatedDate: '2024-12-11',
    tags: ['nutrition', 'diet', 'health'],
    rating: 0,
    comments: 2,
    shares: 8
  },
  {
    id: 'EDU-006',
    title: 'Breathing Exercises for Better Lung Health',
    type: 'Video',
    category: 'Lifestyle Tips',
    excerpt: 'Learn effective breathing techniques that can improve lung capacity and reduce asthma symptoms.',
    thumbnail: 'https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=400&h=225&fit=crop',
    author: { name: 'Dr. Ali Khan', avatar: 'AK' },
    views: 2156,
    status: 'Published',
    createdDate: '2024-11-25',
    updatedDate: '2024-12-05',
    tags: ['breathing', 'exercises', 'wellness'],
    rating: 4.7,
    comments: 31,
    shares: 187
  },
];

export function EducationPage() {
  const [viewMode, setViewMode] = useState<'grid' | 'table'>('grid');
  const [selectedContent, setSelectedContent] = useState<EducationalContent | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [selectedType, setSelectedType] = useState<ContentType | 'All'>('All');
  const [selectedItems, setSelectedItems] = useState<string[]>([]);
  const [filterStatus, setFilterStatus] = useState<string>('All');

  const handleViewContent = (content: EducationalContent) => {
    setSelectedContent(content);
    setDrawerOpen(true);
  };

  const handleToggleSelect = (id: string) => {
    setSelectedItems(prev => 
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleSelectAll = () => {
    if (selectedItems.length === mockContent.length) {
      setSelectedItems([]);
    } else {
      setSelectedItems(mockContent.map(c => c.id));
    }
  };

  const filteredContent = mockContent.filter(content => {
    const matchesCategory = selectedCategory === 'All' || content.category === selectedCategory;
    const matchesType = selectedType === 'All' || content.type === selectedType;
    const matchesStatus = filterStatus === 'All' || content.status === filterStatus;
    return matchesCategory && matchesType && matchesStatus;
  });

  return (
    <div className="p-8">
      {/* Header */}
      <div className="flex items-start justify-between mb-8">
        <div>
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <span className="hover:text-purple-400 cursor-pointer transition-colors">Dashboard</span>
            <span>/</span>
            <span className="text-white">Education Content</span>
          </div>
          <h1 className="text-3xl text-white">Education Content</h1>
          <p className="text-gray-400 mt-1">Manage educational resources for patients</p>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search articles, topics..."
              className="pl-10 pr-4 py-2.5 bg-white/5 border border-white/10 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all w-64 text-sm"
            />
          </div>
          
          <button className="flex items-center gap-2 px-4 py-2.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 transition-all text-sm">
            <span>{filterStatus}</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          <button 
            onClick={() => setModalOpen(true)}
            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm"
          >
            <Plus className="w-4 h-4" />
            Add Content
          </button>
        </div>
      </div>

      {/* Stats Row */}
      <EducationStatsCards />

      {/* Category Filter */}
      <div className="mt-6">
        <CategoryFilter 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
      </div>

      {/* Content Type Toggles */}
      <div className="mt-6 flex items-center justify-between">
        <ContentTypeToggles 
          selectedType={selectedType}
          onSelectType={setSelectedType}
        />

        {/* View Toggle */}
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg p-1">
          <button
            onClick={() => setViewMode('grid')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all ${
              viewMode === 'grid'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <Grid3x3 className="w-4 h-4" />
            Grid
          </button>
          <button
            onClick={() => setViewMode('table')}
            className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm transition-all ${
              viewMode === 'table'
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            <List className="w-4 h-4" />
            Table
          </button>
        </div>
      </div>

      {/* Content Display */}
      <div className="mt-6">
        {viewMode === 'grid' ? (
          <ContentGrid 
            content={filteredContent}
            selectedItems={selectedItems}
            onViewContent={handleViewContent}
            onToggleSelect={handleToggleSelect}
          />
        ) : (
          <ContentTable 
            content={filteredContent}
            selectedItems={selectedItems}
            onViewContent={handleViewContent}
            onToggleSelect={handleToggleSelect}
            onSelectAll={handleSelectAll}
          />
        )}
      </div>

      {/* Analytics Section */}
      <div className="mt-8">
        <AnalyticsSection />
      </div>

      {/* Bulk Actions Bar */}
      {selectedItems.length > 0 && (
        <BulkActionsBar 
          count={selectedItems.length}
          onClear={() => setSelectedItems([])}
        />
      )}

      {/* Content Detail Drawer */}
      <ContentDetailDrawer
        content={selectedContent}
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />

      {/* Add/Edit Content Modal */}
      <AddEditContentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
