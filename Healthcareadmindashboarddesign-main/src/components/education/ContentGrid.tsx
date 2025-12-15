import { Eye, MoreVertical, Edit, Copy, Archive, Trash2 } from 'lucide-react';
import { EducationalContent } from '../../pages/EducationPage';
import { useState } from 'react';

interface ContentGridProps {
  content: EducationalContent[];
  selectedItems: string[];
  onViewContent: (content: EducationalContent) => void;
  onToggleSelect: (id: string) => void;
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

const statusColors: Record<string, string> = {
  'Published': 'bg-green-500/20 text-green-400 border-green-500/30',
  'Draft': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Needs Review': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  'Archived': 'bg-gray-500/20 text-gray-400 border-gray-500/30',
};

export function ContentGrid({ content, selectedItems, onViewContent, onToggleSelect }: ContentGridProps) {
  const [menuOpen, setMenuOpen] = useState<string | null>(null);

  return (
    <div className="grid grid-cols-3 gap-6">
      {content.map((item) => (
        <div
          key={item.id}
          className={`bg-[#0E1629]/60 backdrop-blur-xl border rounded-2xl shadow-xl hover:shadow-2xl transition-all overflow-hidden group cursor-pointer ${
            selectedItems.includes(item.id)
              ? 'border-purple-500/50 shadow-purple-500/20'
              : 'border-white/10 hover:border-purple-500/30'
          }`}
        >
          {/* Thumbnail */}
          <div className="relative aspect-video bg-white/5 overflow-hidden">
            <img 
              src={item.thumbnail} 
              alt={item.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            {/* Category Badge */}
            <div className="absolute top-3 left-3">
              <span className={`px-3 py-1 rounded-full border text-xs ${categoryColors[item.category]}`}>
                {item.category}
              </span>
            </div>
            {/* Checkbox */}
            <div className="absolute top-3 right-3">
              <input
                type="checkbox"
                checked={selectedItems.includes(item.id)}
                onChange={() => onToggleSelect(item.id)}
                onClick={(e) => e.stopPropagation()}
                className="w-4 h-4 rounded border-white/30 bg-black/30 cursor-pointer"
              />
            </div>
          </div>

          {/* Content */}
          <div className="p-5" onClick={() => onViewContent(item)}>
            <h3 className="text-white font-medium mb-2 line-clamp-2 leading-snug">
              {item.title}
            </h3>
            <p className="text-sm text-gray-400 mb-4 line-clamp-3">
              {item.excerpt}
            </p>

            {/* Meta */}
            <div className="flex items-center justify-between pt-4 border-t border-white/5">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center text-xs">
                  {item.author.avatar}
                </div>
                <span className="text-xs text-gray-400">{item.author.name}</span>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center gap-1">
                  <Eye className="w-3 h-3 text-gray-500" />
                  <span className="text-xs text-gray-400">{item.views.toLocaleString()}</span>
                </div>
                
                <span className={`px-2 py-1 rounded-full border text-xs ${statusColors[item.status]}`}>
                  {item.status}
                </span>

                {/* Menu */}
                <div className="relative">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setMenuOpen(menuOpen === item.id ? null : item.id);
                    }}
                    className="p-1 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    <MoreVertical className="w-4 h-4 text-gray-400" />
                  </button>

                  {menuOpen === item.id && (
                    <>
                      <div 
                        className="fixed inset-0 z-10" 
                        onClick={() => setMenuOpen(null)}
                      />
                      <div className="absolute right-0 top-full mt-1 w-40 bg-[#0E1629] border border-white/20 rounded-xl shadow-2xl z-20 py-1">
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10 flex items-center gap-2">
                          <Edit className="w-3 h-3" />
                          Edit
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10 flex items-center gap-2">
                          <Copy className="w-3 h-3" />
                          Duplicate
                        </button>
                        <button className="w-full px-4 py-2 text-left text-sm text-gray-300 hover:bg-white/10 flex items-center gap-2">
                          <Archive className="w-3 h-3" />
                          Archive
                        </button>
                        <div className="border-t border-white/10 my-1" />
                        <button className="w-full px-4 py-2 text-left text-sm text-red-400 hover:bg-red-500/10 flex items-center gap-2">
                          <Trash2 className="w-3 h-3" />
                          Delete
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
