export function KnownTriggers() {
  const triggers = [
    { name: 'Tree Pollen', emoji: '🌳', sensitivity: 'high', color: 'bg-[#EF4444]' },
    { name: 'Dust Mites', emoji: '🪰', sensitivity: 'medium', color: 'bg-[#F59E0B]' },
    { name: 'Air Pollution', emoji: '🏭', sensitivity: 'medium', color: 'bg-[#F59E0B]' },
    { name: 'Cold Weather', emoji: '❄️', sensitivity: 'low', color: 'bg-[#22C55E]' },
  ];

  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-[#1F2937] mb-4">Known Triggers</h3>
      
      <div className="space-y-3">
        {triggers.map((trigger, index) => (
          <div key={index} className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{trigger.emoji}</span>
              <div>
                <p className="text-sm font-medium text-[#1F2937]">{trigger.name}</p>
                <p className="text-xs text-[#6B7280] capitalize">{trigger.sensitivity} sensitivity</p>
              </div>
            </div>
            <div className={`w-3 h-3 ${trigger.color} rounded-full`} title={`${trigger.sensitivity} sensitivity`} />
          </div>
        ))}
      </div>
    </div>
  );
}
