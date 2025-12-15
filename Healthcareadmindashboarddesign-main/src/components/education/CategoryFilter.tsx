import { Plus } from 'lucide-react';

interface CategoryFilterProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
}

const categories = [
  { name: 'All', count: 142 },
  { name: 'Asthma Basics', count: 24 },
  { name: 'Trigger Management', count: 18 },
  { name: 'Medication Guide', count: 22 },
  { name: 'Lifestyle Tips', count: 16 },
  { name: 'Emergency Response', count: 12 },
  { name: 'Environmental Factors', count: 28 },
  { name: 'Diet & Nutrition', count: 22 },
];

export function CategoryFilter({ selectedCategory, onSelectCategory }: CategoryFilterProps) {
  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-xl">
      <div className="flex items-center gap-3 overflow-x-auto scrollbar-hide">
        {categories.map((category) => (
          <button
            key={category.name}
            onClick={() => onSelectCategory(category.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap transition-all ${
              selectedCategory === category.name
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50 shadow-lg shadow-purple-500/20'
                : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            <span>{category.name}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              selectedCategory === category.name
                ? 'bg-purple-500/30 text-purple-200'
                : 'bg-white/10 text-gray-500'
            }`}>
              {category.count}
            </span>
          </button>
        ))}
        
        <button className="flex items-center gap-2 px-4 py-2 rounded-full text-sm whitespace-nowrap bg-white/5 text-purple-400 border border-purple-500/30 hover:bg-purple-500/10 transition-all ml-2">
          <Plus className="w-4 h-4" />
          Add category
        </button>
      </div>
    </div>
  );
}
