import { Download, Shield, Check } from 'lucide-react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { SettingSection } from './SettingSection';
import { ToggleSwitch } from './ToggleSwitch';

interface DataPrivacyTabProps {
  onChangesMade: () => void;
}

const connectedDevices = [
  { id: 1, name: 'Windows PC - Chrome', lastUsed: 'Active now' },
  { id: 2, name: 'iPhone 14 - Safari', lastUsed: '2 hours ago' },
  { id: 3, name: 'iPad Pro - Safari', lastUsed: '1 day ago' },
];

export function DataPrivacyTab({ onChangesMade }: DataPrivacyTabProps) {
  return (
    <div>
      <SettingSection title="Data Management" description="Control your data and privacy">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg">
            <div>
              <p className="text-sm font-medium text-[#1F2937]">Download my data</p>
              <p className="text-xs text-[#6B7280] mt-1">
                Export all your account data and activity
              </p>
            </div>
            <Button variant="outline" className="border-[#059669] text-[#059669]">
              <Download className="w-4 h-4 mr-2" />
              Request export
            </Button>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg">
            <div>
              <p className="text-sm font-medium text-[#1F2937]">Data retention policy</p>
              <p className="text-xs text-[#6B7280] mt-1">
                Data is retained for 7 years as per healthcare regulations
              </p>
            </div>
          </div>

          <div className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg">
            <div>
              <p className="text-sm font-medium text-[#1F2937]">Activity log</p>
              <p className="text-xs text-[#6B7280] mt-1">
                View your complete activity history
              </p>
            </div>
            <Button variant="outline" size="sm">
              View activity
            </Button>
          </div>
        </div>
      </SettingSection>

      <SettingSection title="Privacy Settings" description="Manage your visibility and data sharing preferences">
        <div className="space-y-2">
          <ToggleSwitch
            enabled={true}
            onChange={onChangesMade}
            label="Show profile to patients"
            description="Allow patients to view your professional profile"
          />

          <ToggleSwitch
            enabled={false}
            onChange={onChangesMade}
            label="Allow platform to use anonymized data for research"
            description="Help improve healthcare outcomes through research"
          />

          <ToggleSwitch
            enabled={true}
            onChange={onChangesMade}
            label="Share treatment outcomes for AI improvement"
            description="Contribute to better AI recommendations (data is anonymized)"
          />
        </div>
      </SettingSection>

      <SettingSection title="HIPAA/GDPR Compliance" description="Healthcare data protection and compliance">
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-50 border border-green-200 rounded-lg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Shield className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-medium text-green-900">Compliance Status</p>
                  <Badge className="bg-green-600 text-white hover:bg-green-600">
                    <Check className="w-3 h-3 mr-1" />
                    Compliant
                  </Badge>
                </div>
                <p className="text-xs text-green-700">
                  Your account meets all HIPAA and GDPR requirements
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-[#F8F9FA] rounded-lg">
              <p className="text-xs text-[#6B7280] mb-1">Last audit</p>
              <p className="text-sm font-medium text-[#1F2937]">December 1, 2025</p>
            </div>
            <div className="p-4 bg-[#F8F9FA] rounded-lg">
              <p className="text-xs text-[#6B7280] mb-1">Next audit due</p>
              <p className="text-sm font-medium text-[#1F2937]">March 1, 2026</p>
            </div>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              View compliance report
            </Button>
            <Button variant="outline" size="sm">
              <Download className="w-4 h-4 mr-2" />
              Download DPA
            </Button>
          </div>
        </div>
      </SettingSection>

      <SettingSection title="Connected Devices" description="Manage devices with access to your account">
        <div className="space-y-3">
          {connectedDevices.map((device) => (
            <div
              key={device.id}
              className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg"
            >
              <div>
                <p className="text-sm font-medium text-[#1F2937]">{device.name}</p>
                <p className="text-xs text-[#6B7280] mt-1">Last used: {device.lastUsed}</p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="text-red-500 hover:text-red-600 hover:bg-red-50"
              >
                Revoke access
              </Button>
            </div>
          ))}
        </div>
      </SettingSection>
    </div>
  );
}
