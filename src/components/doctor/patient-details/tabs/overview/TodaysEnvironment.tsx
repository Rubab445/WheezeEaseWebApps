import { CheckCircle, ExternalLink, Wind, Droplets, Thermometer } from 'lucide-react';

export function TodaysEnvironment() {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
      <h3 className="text-lg font-bold text-[#1F2937] mb-4">Today's Environment</h3>
      
      <div className="space-y-3">
        {/* AQI */}
        <div className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#F59E0B]/10 rounded-lg flex items-center justify-center">
              <Wind className="w-4 h-4 text-[#F59E0B]" />
            </div>
            <div>
              <p className="text-xs text-[#6B7280]">AQI</p>
              <p className="text-sm font-medium text-[#1F2937]">112</p>
            </div>
          </div>
          <span className="px-2.5 py-1 bg-[#F59E0B] text-white rounded-full text-xs font-medium">
            Moderate
          </span>
        </div>

        {/* Pollen */}
        <div className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#EF4444]/10 rounded-lg flex items-center justify-center">
              <span className="text-lg">🌸</span>
            </div>
            <div>
              <p className="text-xs text-[#6B7280]">Pollen</p>
              <p className="text-sm font-medium text-[#1F2937]">High</p>
            </div>
          </div>
          <span className="px-2.5 py-1 bg-[#EF4444] text-white rounded-full text-xs font-medium">
            Alert
          </span>
        </div>

        {/* Humidity */}
        <div className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#059669]/10 rounded-lg flex items-center justify-center">
              <Droplets className="w-4 h-4 text-[#059669]" />
            </div>
            <div>
              <p className="text-xs text-[#6B7280]">Humidity</p>
              <p className="text-sm font-medium text-[#1F2937]">68%</p>
            </div>
          </div>
        </div>

        {/* Temperature */}
        <div className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-[#059669]/10 rounded-lg flex items-center justify-center">
              <Thermometer className="w-4 h-4 text-[#059669]" />
            </div>
            <div>
              <p className="text-xs text-[#6B7280]">Temperature</p>
              <p className="text-sm font-medium text-[#1F2937]">28°C</p>
            </div>
          </div>
        </div>
      </div>

      {/* Notification Status */}
      <div className="flex items-center gap-2 mt-4 p-3 bg-[#22C55E]/10 rounded-lg border border-[#22C55E]/20">
        <CheckCircle className="w-4 h-4 text-[#22C55E]" />
        <span className="text-xs font-medium text-[#22C55E]">Patient has been notified</span>
      </div>

      {/* Link */}
      <button className="w-full mt-3 flex items-center justify-center gap-1.5 text-sm text-[#059669] hover:underline font-medium">
        View full environment data
        <ExternalLink className="w-3 h-3" />
      </button>
    </div>
  );
}
