import { Edit2, AlertCircle, Heart, Activity, FileText } from 'lucide-react';

export function MedicalProfileTab() {
  return (
    <div className="grid grid-cols-2 gap-6">
      {/* Asthma Information */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#059669]/10 rounded-xl flex items-center justify-center">
              <Activity className="w-5 h-5 text-[#059669]" />
            </div>
            <h2 className="text-lg font-bold text-[#1F2937]">Asthma Information</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Edit2 className="w-4 h-4 text-[#6B7280]" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs font-medium text-[#6B7280] mb-1">Type</p>
            <p className="text-sm font-medium text-[#1F2937]">Moderate Persistent Asthma</p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#6B7280] mb-1">Diagnosed</p>
            <p className="text-sm font-medium text-[#1F2937]">2018</p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#6B7280] mb-1">Severity</p>
            <span className="px-3 py-1 bg-[#F59E0B] text-white rounded-full text-xs font-medium">
              Moderate
            </span>
          </div>
          <div>
            <p className="text-xs font-medium text-[#6B7280] mb-1">Control Level</p>
            <p className="text-sm font-medium text-[#1F2937]">Partially Controlled</p>
          </div>
          <div>
            <p className="text-xs font-medium text-[#6B7280] mb-1">Peak Flow Baseline</p>
            <p className="text-sm font-medium text-[#1F2937]">380 L/min (predicted: 420 L/min)</p>
          </div>
        </div>
      </div>

      {/* Allergy Profile */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#F59E0B]/10 rounded-xl flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-[#F59E0B]" />
            </div>
            <h2 className="text-lg font-bold text-[#1F2937]">Allergy Profile</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Edit2 className="w-4 h-4 text-[#6B7280]" />
          </button>
        </div>

        <div className="space-y-3">
          <div className="p-3 bg-[#F8F9FA] rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-[#1F2937]">Tree Pollen</p>
              <span className="px-2 py-0.5 bg-[#EF4444] text-white rounded-full text-xs font-medium">
                Severe
              </span>
            </div>
            <p className="text-xs text-[#6B7280]">IgE: 145 kU/L (Last tested: Jun 2024)</p>
          </div>

          <div className="p-3 bg-[#F8F9FA] rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-[#1F2937]">Dust Mites</p>
              <span className="px-2 py-0.5 bg-[#F59E0B] text-white rounded-full text-xs font-medium">
                Moderate
              </span>
            </div>
            <p className="text-xs text-[#6B7280]">IgE: 68 kU/L (Last tested: Jun 2024)</p>
          </div>

          <div className="p-3 bg-[#F8F9FA] rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <p className="text-sm font-medium text-[#1F2937]">Pet Dander</p>
              <span className="px-2 py-0.5 bg-[#22C55E] text-white rounded-full text-xs font-medium">
                Mild
              </span>
            </div>
            <p className="text-xs text-[#6B7280]">IgE: 22 kU/L (Last tested: Jun 2024)</p>
          </div>

          <button className="w-full mt-2 text-sm text-[#059669] hover:underline font-medium">
            View full allergy test results
          </button>
        </div>
      </div>

      {/* Medical History */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#EF4444]/10 rounded-xl flex items-center justify-center">
              <Heart className="w-5 h-5 text-[#EF4444]" />
            </div>
            <h2 className="text-lg font-bold text-[#1F2937]">Medical History</h2>
          </div>
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Edit2 className="w-4 h-4 text-[#6B7280]" />
          </button>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs font-bold text-[#6B7280] uppercase mb-2">Past Hospitalizations</p>
            <div className="space-y-2">
              <div className="text-sm text-[#1F2937]">
                <p className="font-medium">Severe asthma exacerbation - Jan 2023</p>
                <p className="text-xs text-[#6B7280]">3 days, IV steroids administered</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-[#6B7280] uppercase mb-2">Emergency Visits</p>
            <p className="text-sm text-[#1F2937]">2 visits in last 12 months</p>
          </div>

          <div>
            <p className="text-xs font-bold text-[#6B7280] uppercase mb-2">Comorbidities</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-[#F8F9FA] text-[#1F2937] rounded-full text-xs font-medium border border-gray-200">
                Seasonal Allergies
              </span>
              <span className="px-3 py-1 bg-[#F8F9FA] text-[#1F2937] rounded-full text-xs font-medium border border-gray-200">
                GERD
              </span>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-[#6B7280] uppercase mb-2">Family History</p>
            <p className="text-sm text-[#1F2937]">Mother: Asthma, Father: Seasonal allergies</p>
          </div>
        </div>
      </div>

      {/* Current Treatment Plan */}
      <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-[#059669]/10 rounded-xl flex items-center justify-center">
              <FileText className="w-5 h-5 text-[#059669]" />
            </div>
            <h2 className="text-lg font-bold text-[#1F2937]">Current Treatment Plan</h2>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <p className="text-xs font-bold text-[#6B7280] uppercase mb-3">Daily Medications</p>
            <div className="space-y-3">
              <div className="p-3 bg-[#F8F9FA] rounded-lg">
                <p className="text-sm font-medium text-[#1F2937] mb-1">Albuterol Inhaler (100mcg)</p>
                <p className="text-xs text-[#6B7280]">2 puffs, twice daily (morning and evening)</p>
              </div>
              <div className="p-3 bg-[#F8F9FA] rounded-lg">
                <p className="text-sm font-medium text-[#1F2937] mb-1">Montelukast (10mg)</p>
                <p className="text-xs text-[#6B7280]">1 tablet, once daily (evening)</p>
              </div>
              <div className="p-3 bg-[#F8F9FA] rounded-lg">
                <p className="text-sm font-medium text-[#1F2937] mb-1">Cetirizine (10mg)</p>
                <p className="text-xs text-[#6B7280]">1 tablet, as needed for allergies</p>
              </div>
            </div>
          </div>

          <div>
            <p className="text-xs font-bold text-[#6B7280] uppercase mb-2">Emergency Action Plan</p>
            <div className="p-3 bg-[#EF4444]/10 border border-[#EF4444]/20 rounded-lg">
              <p className="text-sm text-[#1F2937] mb-2">
                <strong>Red Zone (Severe):</strong> Peak flow &lt; 250 L/min
              </p>
              <p className="text-xs text-[#6B7280]">
                Take 4-6 puffs albuterol, call emergency services if no improvement in 15 minutes
              </p>
            </div>
          </div>

          <button className="w-full px-4 py-3 bg-gradient-to-r from-[#059669] to-[#10B981] text-white rounded-lg hover:shadow-lg transition-all font-medium">
            Edit Treatment Plan
          </button>
        </div>
      </div>
    </div>
  );
}
