import { Clock, Calendar, Video, Bell, FileText, Settings, Download, RefreshCw, Plus, AlertCircle, Activity } from 'lucide-react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';
import { Progress } from '../../ui/progress';

export function RightPanel() {
  return (
    <div className="space-y-6">
      {/* Upcoming Appointment Card */}
      <div className="bg-white rounded-xl border-2 border-amber-200 shadow-sm p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-[#1F2937]">Next Appointment</h3>
          <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100">
            <Clock className="w-3 h-3 mr-1" />
            In 1h 15m
          </Badge>
        </div>

        {/* Patient Info */}
        <div className="flex flex-col items-center mb-6">
          <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-2xl font-medium mb-3">
            SA
          </div>
          <h4 className="text-xl font-bold text-[#1F2937] mb-1">Sarah Ahmed</h4>
          <p className="text-sm text-[#6B7280] mb-2">Patient ID: P-2847</p>
          
          {/* Risk Score Gauge */}
          <div className="w-full mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-[#6B7280]">Risk Score</span>
              <span className="text-sm font-bold text-amber-600">68%</span>
            </div>
            <Progress value={68} className="h-2 bg-gray-200" indicatorClassName="bg-amber-500" />
          </div>
        </div>

        {/* Appointment Details */}
        <div className="space-y-3 mb-6">
          <div className="flex items-start gap-3">
            <Calendar className="w-5 h-5 text-[#6B7280] mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-[#1F2937]">Follow-up Consultation</p>
              <p className="text-xs text-[#6B7280]">Duration: 30 minutes</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-[#6B7280] mt-0.5" />
            <div className="flex-1">
              <p className="text-sm font-medium text-[#1F2937]">3:00 PM - 3:30 PM</p>
              <p className="text-xs text-[#6B7280]">Today, December 14, 2025</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">Confirmed</Badge>
          </div>
        </div>

        {/* Pre-consultation Summary */}
        <div className="bg-[#F8F9FA] rounded-lg p-4 mb-4">
          <h5 className="text-sm font-bold text-[#1F2937] mb-3">Recent Activity</h5>
          <div className="space-y-2 text-sm">
            <div className="flex items-start gap-2">
              <Activity className="w-4 h-4 text-[#059669] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-[#1F2937]">Last symptom log</p>
                <p className="text-xs text-[#6B7280]">2 hours ago - Moderate severity</p>
              </div>
            </div>
            <div className="flex items-start gap-2">
              <FileText className="w-4 h-4 text-[#059669] mt-0.5 flex-shrink-0" />
              <div>
                <p className="font-medium text-[#1F2937]">Last AI recommendation</p>
                <p className="text-xs text-[#6B7280]">Medication adjustment suggested</p>
              </div>
            </div>
          </div>
          <a href="#" className="text-sm text-[#059669] hover:underline font-medium mt-3 inline-block">
            View full patient record →
          </a>
        </div>

        {/* Action Buttons */}
        <div className="space-y-2">
          <Button className="w-full bg-gradient-to-r from-[#059669] to-[#10B981] text-white hover:opacity-90">
            Start Consultation
          </Button>
          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Reschedule
            </Button>
            <Button variant="outline">
              <Bell className="w-4 h-4 mr-2" />
              Remind
            </Button>
          </div>
        </div>
      </div>

      {/* Quick Schedule Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="font-bold text-[#1F2937] mb-4">Quick Schedule</h3>
        <form className="space-y-4">
          {/* Patient Search */}
          <div>
            <label className="text-sm font-medium text-[#6B7280] mb-2 block">
              Select Patient
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Search patient..." />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="p1">Sarah Ahmed (P-2847)</SelectItem>
                <SelectItem value="p2">Michael Chen (P-3291)</SelectItem>
                <SelectItem value="p3">Emily Rodriguez (P-1829)</SelectItem>
                <SelectItem value="p4">David Kim (P-4567)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Date */}
          <div>
            <label className="text-sm font-medium text-[#6B7280] mb-2 block">
              Date
            </label>
            <Input type="date" defaultValue="2025-12-15" />
          </div>

          {/* Time and Duration */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                Time
              </label>
              <Input type="time" defaultValue="10:00" />
            </div>
            <div>
              <label className="text-sm font-medium text-[#6B7280] mb-2 block">
                Duration
              </label>
              <Select defaultValue="30">
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="15">15 min</SelectItem>
                  <SelectItem value="30">30 min</SelectItem>
                  <SelectItem value="45">45 min</SelectItem>
                  <SelectItem value="60">60 min</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Appointment Type */}
          <div>
            <label className="text-sm font-medium text-[#6B7280] mb-2 block">
              Type
            </label>
            <div className="grid grid-cols-2 gap-2">
              <Button type="button" variant="outline" className="border-[#059669] text-[#059669] bg-[#059669]/5">
                Initial
              </Button>
              <Button type="button" variant="outline">
                Follow-up
              </Button>
              <Button type="button" variant="outline">
                Urgent
              </Button>
              <Button type="button" variant="outline">
                Check-up
              </Button>
            </div>
          </div>

          {/* Notes */}
          <div>
            <label className="text-sm font-medium text-[#6B7280] mb-2 block">
              Notes (Optional)
            </label>
            <Textarea
              placeholder="Add appointment notes..."
              rows={3}
              className="resize-none"
            />
          </div>

          <Button className="w-full bg-[#059669] text-white hover:bg-[#047857]">
            <Plus className="w-4 h-4 mr-2" />
            Schedule
          </Button>
        </form>
      </div>

      {/* Today's Schedule Summary */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="font-bold text-[#1F2937] mb-4">Today's Timeline</h3>
        
        {/* Timeline */}
        <div className="relative pl-8 space-y-4">
          {/* Vertical line */}
          <div className="absolute left-2 top-0 bottom-0 w-0.5 bg-gray-200" />
          
          {/* Current time indicator */}
          <div className="absolute left-0 top-20 w-4 h-4 bg-red-500 rounded-full border-2 border-white z-10" />
          
          {/* Morning */}
          <div className="relative">
            <div className="absolute left-[-1.75rem] w-4 h-4 bg-[#059669] rounded-full border-2 border-white" />
            <div className="text-xs font-medium text-[#6B7280] mb-1">9:00 AM</div>
            <div className="text-sm font-medium text-[#1F2937]">Sarah Ahmed</div>
            <div className="text-xs text-[#6B7280]">Follow-up</div>
          </div>

          <div className="relative">
            <div className="absolute left-[-1.75rem] w-4 h-4 bg-[#059669] rounded-full border-2 border-white" />
            <div className="text-xs font-medium text-[#6B7280] mb-1">10:00 AM</div>
            <div className="text-sm font-medium text-[#1F2937]">Michael Chen</div>
            <div className="text-xs text-[#6B7280]">Initial</div>
          </div>

          {/* Lunch */}
          <div className="relative">
            <div className="absolute left-[-1.75rem] w-4 h-4 bg-gray-300 rounded-full border-2 border-white" />
            <div className="text-xs font-medium text-[#6B7280] mb-1">12:00 PM</div>
            <div className="text-sm font-medium text-[#6B7280] italic">Lunch Break</div>
          </div>

          {/* Afternoon */}
          <div className="relative">
            <div className="absolute left-[-1.75rem] w-4 h-4 bg-amber-500 rounded-full border-2 border-white" />
            <div className="text-xs font-medium text-[#6B7280] mb-1">2:00 PM</div>
            <div className="text-sm font-medium text-[#1F2937]">Emily Rodriguez</div>
            <div className="text-xs text-amber-600 font-medium">Urgent</div>
          </div>

          <div className="relative">
            <div className="absolute left-[-1.75rem] w-4 h-4 bg-[#059669] rounded-full border-2 border-white" />
            <div className="text-xs font-medium text-[#6B7280] mb-1">3:00 PM</div>
            <div className="text-sm font-medium text-[#1F2937]">David Kim</div>
            <div className="text-xs text-[#6B7280]">Telehealth</div>
          </div>
        </div>

        <Button variant="outline" className="w-full mt-6" size="sm">
          View detailed schedule →
        </Button>
      </div>

      {/* Quick Actions Card */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="font-bold text-[#1F2937] mb-4">Quick Actions</h3>
        <div className="space-y-2">
          <Button variant="outline" className="w-full justify-start">
            <AlertCircle className="w-4 h-4 mr-3 text-[#6B7280]" />
            Set unavailable time
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <RefreshCw className="w-4 h-4 mr-3 text-[#6B7280]" />
            Recurring appointments
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Download className="w-4 h-4 mr-3 text-[#6B7280]" />
            Export schedule
          </Button>
          <Button variant="outline" className="w-full justify-start">
            <Settings className="w-4 h-4 mr-3 text-[#6B7280]" />
            Appointment settings
          </Button>
        </div>
      </div>
    </div>
  );
}