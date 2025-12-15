import { Stethoscope, FileText, Play, Beaker, ArrowRight } from 'lucide-react';

const quickAccessItems = [
  {
    id: 1,
    title: 'Clinical Guidelines',
    icon: Stethoscope,
    count: '23 guidelines',
    linkText: 'View all',
    iconColor: 'text-[#059669]',
    bgColor: 'bg-[#059669]/10',
  },
  {
    id: 2,
    title: 'Patient Handouts',
    icon: FileText,
    count: '45 printable PDFs',
    linkText: 'Browse',
    iconColor: 'text-[#10B981]',
    bgColor: 'bg-[#10B981]/10',
  },
  {
    id: 3,
    title: 'Video Library',
    icon: Play,
    count: '12 educational videos',
    linkText: 'Watch',
    iconColor: 'text-[#059669]',
    bgColor: 'bg-[#059669]/10',
  },
  {
    id: 4,
    title: 'Latest Research',
    icon: Beaker,
    count: '8 new articles this month',
    linkText: 'Read',
    iconColor: 'text-[#10B981]',
    bgColor: 'bg-[#10B981]/10',
  },
];

export function QuickAccessCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {quickAccessItems.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all cursor-pointer group"
        >
          <div className={`w-12 h-12 rounded-lg ${item.bgColor} flex items-center justify-center mb-4`}>
            <item.icon className={`w-6 h-6 ${item.iconColor}`} />
          </div>
          
          <h3 className="font-bold text-[#1F2937] mb-1">{item.title}</h3>
          <p className="text-sm text-[#6B7280] mb-4">{item.count}</p>
          
          <a
            href="#"
            className="text-sm font-medium text-[#059669] hover:text-[#047857] flex items-center gap-1 group-hover:gap-2 transition-all"
          >
            {item.linkText}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      ))}
    </div>
  );
}
