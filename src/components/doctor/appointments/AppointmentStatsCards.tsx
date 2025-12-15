import { Calendar, Clock, AlertCircle, CheckCircle } from 'lucide-react';
import { Progress } from '../../ui/progress';

export function AppointmentStatsCards() {
  return (
    <div className="grid grid-cols-4 gap-6">
      {/* Card 1: Today's Appointments */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-[#6B7280]">Today's Appointments</h3>
          <Calendar className="w-5 h-5 text-[#059669]" />
        </div>
        <div className="mb-3">
          <div className="text-3xl font-bold text-[#1F2937] mb-1">7</div>
          <p className="text-sm text-[#6B7280]">3 completed, 4 upcoming</p>
        </div>
        <Progress value={43} className="h-2 bg-gray-200" indicatorClassName="bg-[#059669]" />
      </div>

      {/* Card 2: This Week */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-[#6B7280]">This Week</h3>
          <Calendar className="w-5 h-5 text-[#10B981]" />
        </div>
        <div className="mb-3">
          <div className="text-3xl font-bold text-[#1F2937] mb-1">23</div>
          <p className="text-sm text-[#6B7280]">Scheduled consultations</p>
        </div>
        <a href="#" className="text-sm text-[#059669] hover:underline font-medium">
          View week schedule →
        </a>
      </div>

      {/* Card 3: Pending Confirmations */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-[#6B7280]">Pending Confirmations</h3>
          <AlertCircle className="w-5 h-5 text-[#F59E0B]" />
        </div>
        <div className="mb-3">
          <div className="text-3xl font-bold text-[#1F2937] mb-1">5</div>
          <div className="inline-flex items-center gap-1.5 bg-amber-100 text-amber-700 px-2.5 py-1 rounded-full text-xs font-medium">
            Requires action
          </div>
        </div>
      </div>

      {/* Card 4: Average Duration */}
      <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-sm font-medium text-[#6B7280]">Average Duration</h3>
          <Clock className="w-5 h-5 text-[#6B7280]" />
        </div>
        <div className="mb-3">
          <div className="text-3xl font-bold text-[#1F2937] mb-1">28 min</div>
          <p className="text-sm text-[#6B7280]">Per consultation</p>
        </div>
      </div>
    </div>
  );
}