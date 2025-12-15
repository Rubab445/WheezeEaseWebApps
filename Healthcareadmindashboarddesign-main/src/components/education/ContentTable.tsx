import { Eye, Edit, Copy, Archive, Trash2 } from 'lucide-react';
import { EducationalContent } from '../../pages/EducationPage';

interface ContentTableProps {
  content: EducationalContent[];
  selectedItems: string[];
  onViewContent: (content: EducationalContent) => void;
  onToggleSelect: (id: string) => void;
  onSelectAll: () => void;
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

export function ContentTable({ content, selectedItems, onViewContent, onToggleSelect, onSelectAll }: ContentTableProps) {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-white/10">
              <th className="text-left py-4 px-6 w-12">
                <input
                  type="checkbox"
                  checked={selectedItems.length === content.length && content.length > 0}
                  onChange={onSelectAll}
                  className="w-4 h-4 rounded border-white/30 cursor-pointer"
                />
              </th>
              <th className="text-left py-4 px-4 text-sm text-gray-400 w-20">Thumbnail</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Title</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Category</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Type</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Author</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Created</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Views</th>
              <th className="text-left py-4 px-4 text-sm text-gray-400">Status</th>
              <th className="text-right py-4 px-6 text-sm text-gray-400">Actions</th>
            </tr>
          </thead>
          <tbody>
            {content.map((item) => (
              <tr
                key={item.id}
                className="border-b border-white/5 hover:bg-purple-500/5 transition-all group"
              >
                <td className="py-4 px-6">
                  <input
                    type="checkbox"
                    checked={selectedItems.includes(item.id)}
                    onChange={() => onToggleSelect(item.id)}
                    className="w-4 h-4 rounded border-white/30 cursor-pointer"
                  />
                </td>
                <td className="py-4 px-4">
                  <img 
                    src={item.thumbnail}
                    alt={item.title}
                    className="w-16 h-10 object-cover rounded-lg"
                  />
                </td>
                <td className="py-4 px-4">
                  <p className="text-sm text-white font-medium max-w-xs truncate">{item.title}</p>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full border text-xs ${categoryColors[item.category]}`}>
                    {item.category}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-gray-400">{item.type}</span>
                </td>
                <td className="py-4 px-4">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 flex items-center justify-center text-xs">
                      {item.author.avatar}
                    </div>
                    <span className="text-sm text-gray-400">{item.author.name}</span>
                  </div>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-gray-400">
                    {new Date(item.createdDate).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                  </span>
                </td>
                <td className="py-4 px-4">
                  <span className="text-sm text-white">{item.views.toLocaleString()}</span>
                </td>
                <td className="py-4 px-4">
                  <span className={`px-3 py-1 rounded-full border text-xs ${statusColors[item.status]}`}>
                    {item.status}
                  </span>
                </td>
                <td className="py-4 px-6">
                  <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => onViewContent(item)}
                      className="p-2 hover:bg-cyan-500/20 rounded-lg transition-colors"
                      title="View"
                    >
                      <Eye className="w-4 h-4 text-cyan-400" />
                    </button>
                    <button className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors" title="Edit">
                      <Edit className="w-4 h-4 text-purple-400" />
                    </button>
                    <button className="p-2 hover:bg-gray-500/20 rounded-lg transition-colors" title="Duplicate">
                      <Copy className="w-4 h-4 text-gray-400" />
                    </button>
                    <button className="p-2 hover:bg-orange-500/20 rounded-lg transition-colors" title="Archive">
                      <Archive className="w-4 h-4 text-orange-400" />
                    </button>
                    <button className="p-2 hover:bg-red-500/20 rounded-lg transition-colors" title="Delete">
                      <Trash2 className="w-4 h-4 text-red-400" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
