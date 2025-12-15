import { BookOpen, Video, Image, Lightbulb } from 'lucide-react';
import { ContentType } from '../../pages/EducationPage';

interface ContentTypeTogglesProps {
  selectedType: ContentType | 'All';
  onSelectType: (type: ContentType | 'All') => void;
}

const types = [
  { name: 'All' as const, icon: BookOpen, count: 142 },
  { name: 'Article' as const, icon: BookOpen, count: 78 },
  { name: 'Video' as const, icon: Video, count: 32 },
  { name: 'Infographic' as const, icon: Image, count: 24 },
  { name: 'Quick Tip' as const, icon: Lightbulb, count: 8 },
];

export function ContentTypeToggles({ selectedType, onSelectType }: ContentTypeTogglesProps) {
  return (
    <div className="flex items-center gap-2">
      {types.map((type) => {
        const Icon = type.icon;
        return (
          <button
            key={type.name}
            onClick={() => onSelectType(type.name)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm transition-all ${
              selectedType === type.name
                ? 'bg-purple-500/20 text-purple-300 border border-purple-500/50'
                : 'bg-white/5 text-gray-400 border border-white/10 hover:bg-white/10 hover:text-white'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{type.name}</span>
            <span className={`px-2 py-0.5 rounded-full text-xs ${
              selectedType === type.name
                ? 'bg-purple-500/30 text-purple-200'
                : 'bg-white/10 text-gray-500'
            }`}>
              {type.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
