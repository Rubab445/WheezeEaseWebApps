import { Phone, Mail, Calendar, Clipboard, Pill, ChevronDown, AlertCircle } from 'lucide-react';
import { CircularProgress } from '../CircularProgress';

export function PatientHeroCard() {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 mb-6">
      <div className="flex gap-8">
        {/* LEFT SECTION - Patient Info + Metrics */}
        <div className="flex-1">
          <div className="flex gap-6 mb-6">
            {/* Large Avatar */}
            <div className="w-36 h-36 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-5xl font-bold shadow-lg flex-shrink-0">
              SA
            </div>
            
            <div className="flex flex-col justify-center">
              {/* Name & ID */}
              <h1 className="text-4xl font-bold text-[#1F2937] mb-2">Sarah Ahmed</h1>
              <p className="text-base text-[#6B7280] mb-4">PT-2024-1532</p>
              
              {/* Condition Chips */}
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#059669]/10 text-[#059669] rounded-full text-sm font-medium border border-[#059669]/20">
                  🫁 Asthma
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1.5 bg-[#F59E0B]/10 text-[#F59E0B] rounded-full text-sm font-medium border border-[#F59E0B]/20">
                  🌸 Pollen Allergy
                </span>
              </div>
              
              {/* Contact Icons */}
              <div className="flex items-center gap-3">
                <button className="p-2.5 bg-[#059669]/10 hover:bg-[#059669]/20 rounded-lg transition-colors" title="Call patient">
                  <Phone className="w-5 h-5 text-[#059669]" />
                </button>
                <button className="p-2.5 bg-[#059669]/10 hover:bg-[#059669]/20 rounded-lg transition-colors" title="Email patient">
                  <Mail className="w-5 h-5 text-[#059669]" />
                </button>
              </div>
            </div>
          </div>

          {/* Key Metrics - Grid Below Contact Icons */}
          <div className="grid grid-cols-4 gap-4">
            {/* Metric 1: Current Risk Score */}
            <div className="flex flex-col items-center bg-white border border-gray-200 rounded-xl p-4">
              <CircularProgress value={68} size={100} strokeWidth={8} color="#F59E0B" />
              <p className="text-xs text-[#6B7280] mt-3 mb-1">Current Risk Score</p>
              <p className="text-sm font-bold text-[#F59E0B]">Medium Risk</p>
            </div>

            {/* Metric 2: Last Symptom Log */}
            <div className="flex flex-col items-center bg-[#F8F9FA] border border-gray-200 rounded-xl p-4">
              <div className="w-12 h-12 bg-[#059669]/10 rounded-full flex items-center justify-center mb-2">
                <Clipboard className="w-6 h-6 text-[#059669]" />
              </div>
              <p className="text-xl font-bold text-[#1F2937] mb-1">2 hours</p>
              <p className="text-xs text-[#6B7280] mb-2">ago</p>
              <p className="text-xs text-[#6B7280] mb-2">Last Symptom Log</p>
              <span className="px-2.5 py-1 bg-[#F59E0B] text-white rounded-full text-xs font-medium">
                Moderate
              </span>
            </div>

            {/* Metric 3: Medication Adherence */}
            <div className="flex flex-col items-center bg-[#F8F9FA] border border-gray-200 rounded-xl p-4">
              <div className="w-12 h-12 bg-[#22C55E]/10 rounded-full flex items-center justify-center mb-2">
                <Pill className="w-6 h-6 text-[#22C55E]" />
              </div>
              <p className="text-xl font-bold text-[#1F2937] mb-1">85%</p>
              <p className="text-xs text-[#6B7280] mb-2">Medication Adherence</p>
              <div className="w-full h-1.5 bg-gray-200 rounded-full overflow-hidden mb-1">
                <div className="w-[85%] h-full bg-[#22C55E]" />
              </div>
              <p className="text-xs text-[#6B7280]">12/14 this week</p>
            </div>

            {/* Metric 4: Next Appointment */}
            <div className="flex flex-col items-center bg-[#F8F9FA] border border-gray-200 rounded-xl p-4">
              <div className="w-12 h-12 bg-[#059669]/10 rounded-full flex items-center justify-center mb-2">
                <Calendar className="w-6 h-6 text-[#059669]" />
              </div>
              <p className="text-base font-bold text-[#1F2937] mb-1">Dec 15,</p>
              <p className="text-base font-bold text-[#1F2937] mb-2">2025</p>
              <p className="text-xs text-[#6B7280] mb-1">Next Appointment</p>
              <p className="text-sm text-[#1F2937]">10:00 AM</p>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION - Emergency & Status */}
        <div className="w-64 space-y-4 flex-shrink-0">
          {/* Emergency Contact Card */}
          <div className="bg-[#FEF2F2] border-2 border-[#EF4444]/30 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-3">
              <AlertCircle className="w-5 h-5 text-[#EF4444]" />
              <p className="text-xs font-bold text-[#EF4444] uppercase">Emergency Contact</p>
            </div>
            <p className="text-base font-bold text-[#1F2937] mb-1">Ahmed Ahmed (Father)</p>
            <p className="text-sm text-[#6B7280] mb-3">+92 300 1234567</p>
            <button className="w-full px-4 py-2.5 bg-[#EF4444] text-white rounded-lg hover:bg-[#DC2626] transition-colors font-medium">
              Call now
            </button>
          </div>

          {/* Primary Doctor Badge */}
          <div className="bg-[#059669]/5 border border-[#059669]/20 rounded-xl p-4">
            <p className="text-xs font-medium text-[#6B7280] mb-1">Primary Doctor</p>
            <p className="text-sm font-bold text-[#059669]">Your patient since Mar 2024</p>
          </div>

          {/* Quick Status Dropdown */}
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-xs font-medium text-[#6B7280] mb-2">Patient Status</p>
            <div className="relative">
              <select className="w-full appearance-none px-3 py-2.5 bg-[#22C55E] text-white rounded-lg font-medium cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#22C55E]/50">
                <option>Active</option>
                <option>Monitoring</option>
                <option>Critical</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
