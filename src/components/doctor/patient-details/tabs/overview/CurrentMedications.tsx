import { Edit2 } from 'lucide-react';

const medications = [
  { name: 'Albuterol Inhaler', dosage: '2x daily', color: 'bg-[#059669]' },
  { name: 'Montelukast', dosage: '1x daily', color: 'bg-[#10B981]' },
  { name: 'Antihistamine', dosage: 'As needed', color: 'bg-[#22C55E]' },
];

export function CurrentMedications() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-[#1F2937] mb-4">Current Medications</h3>
      
      <div className="space-y-3">
        {medications.map((med, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg group hover:shadow-sm transition-all">
            <div className="flex items-center gap-3">
              <div className={`w-2 h-2 ${med.color} rounded-full`} />
              <div>
                <p className="text-sm font-medium text-[#1F2937]">{med.name}</p>
                <p className="text-xs text-[#6B7280]">{med.dosage}</p>
              </div>
            </div>
            <button className="p-1.5 opacity-0 group-hover:opacity-100 hover:bg-white rounded-lg transition-all" title="Edit medication">
              <Edit2 className="w-4 h-4 text-[#6B7280]" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
