import { BookOpen, Video, HelpCircle, MessageCircle, FileText, Bug, Lightbulb, Download, ExternalLink, RefreshCw } from 'lucide-react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { SettingSection } from './SettingSection';

export function HelpSupportTab() {
  return (
    <div>
      <SettingSection title="Getting Started" description="Resources to help you get up and running">
        <div className="grid grid-cols-3 gap-4">
          <button className="p-4 bg-[#F8F9FA] rounded-lg hover:bg-[#059669]/5 hover:border-[#059669] border border-transparent transition-all text-left">
            <div className="w-10 h-10 bg-[#059669]/10 rounded-lg flex items-center justify-center mb-3">
              <BookOpen className="w-5 h-5 text-[#059669]" />
            </div>
            <h4 className="font-medium text-[#1F2937] mb-1">Quick start guide</h4>
            <p className="text-xs text-[#6B7280]">Learn the basics in 5 minutes</p>
          </button>

          <button className="p-4 bg-[#F8F9FA] rounded-lg hover:bg-[#059669]/5 hover:border-[#059669] border border-transparent transition-all text-left">
            <div className="w-10 h-10 bg-[#059669]/10 rounded-lg flex items-center justify-center mb-3">
              <Video className="w-5 h-5 text-[#059669]" />
            </div>
            <h4 className="font-medium text-[#1F2937] mb-1">Video tutorials</h4>
            <p className="text-xs text-[#6B7280]">Watch step-by-step guides</p>
          </button>

          <button className="p-4 bg-[#F8F9FA] rounded-lg hover:bg-[#059669]/5 hover:border-[#059669] border border-transparent transition-all text-left">
            <div className="w-10 h-10 bg-[#059669]/10 rounded-lg flex items-center justify-center mb-3">
              <HelpCircle className="w-5 h-5 text-[#059669]" />
            </div>
            <h4 className="font-medium text-[#1F2937] mb-1">FAQs</h4>
            <p className="text-xs text-[#6B7280]">Find answers to common questions</p>
          </button>
        </div>
      </SettingSection>

      <SettingSection title="Support" description="Get help from our support team">
        <div className="space-y-3">
          <button className="w-full flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg hover:bg-[#059669]/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#059669] rounded-lg flex items-center justify-center">
                <MessageCircle className="w-5 h-5 text-white" />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-[#1F2937]">Contact support</h4>
                <p className="text-xs text-[#6B7280]">Chat with our support team</p>
              </div>
            </div>
            <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
              Available now
            </Badge>
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg hover:bg-[#059669]/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center">
                <FileText className="w-5 h-5 text-[#6B7280]" />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-[#1F2937]">Submit feedback</h4>
                <p className="text-xs text-[#6B7280]">Share your suggestions</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#6B7280]" />
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg hover:bg-[#059669]/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center">
                <Bug className="w-5 h-5 text-[#6B7280]" />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-[#1F2937]">Report a bug</h4>
                <p className="text-xs text-[#6B7280]">Help us improve the platform</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#6B7280]" />
          </button>

          <button className="w-full flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg hover:bg-[#059669]/5 transition-colors">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white border border-gray-300 rounded-lg flex items-center justify-center">
                <Lightbulb className="w-5 h-5 text-[#6B7280]" />
              </div>
              <div className="text-left">
                <h4 className="font-medium text-[#1F2937]">Feature request</h4>
                <p className="text-xs text-[#6B7280]">Suggest new features</p>
              </div>
            </div>
            <ExternalLink className="w-4 h-4 text-[#6B7280]" />
          </button>
        </div>
      </SettingSection>

      <SettingSection title="Documentation" description="Detailed guides and legal information">
        <div className="space-y-2">
          <button className="w-full flex items-center justify-between p-3 hover:bg-[#F8F9FA] rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <FileText className="w-4 h-4 text-[#6B7280]" />
              <span className="text-sm text-[#1F2937]">User manual</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#6B7280]">PDF • 2.4 MB</span>
              <Download className="w-4 h-4 text-[#6B7280]" />
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-3 hover:bg-[#F8F9FA] rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <ExternalLink className="w-4 h-4 text-[#6B7280]" />
              <span className="text-sm text-[#1F2937]">System requirements</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-3 hover:bg-[#F8F9FA] rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <ExternalLink className="w-4 h-4 text-[#6B7280]" />
              <span className="text-sm text-[#1F2937]">Privacy policy</span>
            </div>
          </button>

          <button className="w-full flex items-center justify-between p-3 hover:bg-[#F8F9FA] rounded-lg transition-colors">
            <div className="flex items-center gap-3">
              <ExternalLink className="w-4 h-4 text-[#6B7280]" />
              <span className="text-sm text-[#1F2937]">Terms of service</span>
            </div>
          </button>
        </div>
      </SettingSection>

      <SettingSection title="About" description="Application version and updates">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-[#F8F9FA] rounded-lg">
              <p className="text-xs text-[#6B7280] mb-1">App version</p>
              <p className="text-sm font-medium text-[#1F2937]">v1.2.0</p>
            </div>

            <div className="p-4 bg-[#F8F9FA] rounded-lg">
              <p className="text-xs text-[#6B7280] mb-1">Last updated</p>
              <p className="text-sm font-medium text-[#1F2937]">Dec 14, 2025</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <FileText className="w-4 h-4 mr-2" />
              Release notes
            </Button>
            <Button variant="outline" size="sm" className="border-[#059669] text-[#059669]">
              <RefreshCw className="w-4 h-4 mr-2" />
              Check for updates
            </Button>
          </div>

          <div className="pt-4 border-t border-gray-200">
            <p className="text-xs text-[#6B7280] text-center">
              © 2025 WheezeEase. All rights reserved.
            </p>
          </div>
        </div>
      </SettingSection>
    </div>
  );
}
