import { FileText, Stethoscope, Pill, Beaker, GraduationCap, Leaf, AlertCircle, FolderOpen, Grid3x3 } from 'lucide-react';

type CategoryType = 'all' | 'clinical' | 'treatment' | 'research' | 'patient-education' | 'medication' | 'environmental' | 'emergency' | 'case-studies';

interface CategoryTabsProps {
  activeCategory: CategoryType;
  onCategoryChange: (category: CategoryType) => void;
}

const categories = [
  { id: 'all' as const, label: 'All Resources', icon: Grid3x3 },
  { id: 'clinical' as const, label: 'Clinical Guidelines', icon: Stethoscope },
  { id: 'treatment' as const, label: 'Treatment Protocols', icon: FileText },
  { id: 'research' as const, label: 'Research & Studies', icon: Beaker },
  { id: 'patient-education' as const, label: 'Patient Education', icon: GraduationCap },
  { id: 'medication' as const, label: 'Medication Information', icon: Pill },
  { id: 'environmental' as const, label: 'Environmental Triggers', icon: Leaf },
  { id: 'emergency' as const, label: 'Emergency Procedures', icon: AlertCircle },
  { id: 'case-studies' as const, label: 'Case Studies', icon: FolderOpen },
];

export function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  return (
    <div className="bg-white rounded-xl p-2 border border-gray-200 shadow-sm overflow-x-auto">
      <div className="flex items-center gap-2 min-w-max">
        {categories.map((category) => {
          const isActive = activeCategory === category.id;
          return (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-medium transition-all whitespace-nowrap ${
                isActive
                  ? 'bg-[#059669] text-white shadow-md'
                  : 'text-[#6B7280] hover:text-[#1F2937] hover:bg-[#F8F9FA]'
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
