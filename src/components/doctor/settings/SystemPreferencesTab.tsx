import { Upload, Download, Keyboard } from 'lucide-react';
import { Button } from '../../ui/button';
import { SettingSection } from './SettingSection';
import { ToggleSwitch } from './ToggleSwitch';

interface SystemPreferencesTabProps {
  onChangesMade: () => void;
}

export function SystemPreferencesTab({ onChangesMade }: SystemPreferencesTabProps) {
  return (
    <div>
      <SettingSection title="Language & Region" description="Configure language and regional settings">
        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Interface language
              </label>
              <select
                defaultValue="English"
                onChange={onChangesMade}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>English</option>
                <option>Urdu</option>
                <option>Arabic</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Secondary language
              </label>
              <select
                defaultValue="Urdu"
                onChange={onChangesMade}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>None</option>
                <option>Urdu</option>
                <option>Arabic</option>
                <option>Punjabi</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Region
              </label>
              <select
                defaultValue="Pakistan"
                onChange={onChangesMade}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>Pakistan</option>
                <option>United States</option>
                <option>United Kingdom</option>
                <option>India</option>
                <option>UAE</option>
              </select>
            </div>

            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Timezone
              </label>
              <select
                defaultValue="PKT (UTC+5)"
                onChange={onChangesMade}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>PKT (UTC+5)</option>
                <option>EST (UTC-5)</option>
                <option>GMT (UTC+0)</option>
                <option>IST (UTC+5:30)</option>
                <option>GST (UTC+4)</option>
              </select>
            </div>
          </div>
        </div>
      </SettingSection>

      <SettingSection title="Accessibility" description="Enhance usability for all users">
        <div className="space-y-2">
          <ToggleSwitch
            enabled={false}
            onChange={onChangesMade}
            label="Screen reader support"
            description="Optimize interface for screen readers"
          />

          <div className="flex items-center justify-between py-3">
            <div className="flex-1">
              <p className="text-sm font-medium text-[#1F2937]">Keyboard shortcuts</p>
              <p className="text-xs text-[#6B7280] mt-0.5">Enable keyboard navigation</p>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={onChangesMade}
                className="text-sm text-[#059669] hover:text-[#047857] font-medium flex items-center gap-1"
              >
                <Keyboard className="w-4 h-4" />
                View shortcuts
              </button>
              <div className="ml-2">
                <ToggleSwitch
                  enabled={true}
                  onChange={onChangesMade}
                />
              </div>
            </div>
          </div>

          <ToggleSwitch
            enabled={false}
            onChange={onChangesMade}
            label="Reduced motion"
            description="Minimize animations and transitions"
          />

          <div className="pt-3">
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Color blind mode
            </label>
            <select
              defaultValue="None"
              onChange={onChangesMade}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
            >
              <option>None</option>
              <option>Protanopia (Red-blind)</option>
              <option>Deuteranopia (Green-blind)</option>
              <option>Tritanopia (Blue-blind)</option>
            </select>
          </div>
        </div>
      </SettingSection>

      <SettingSection title="Advanced" description="Advanced system settings and configurations">
        <div className="space-y-4">
          <ToggleSwitch
            enabled={false}
            onChange={onChangesMade}
            label="Enable beta features"
            description="Access experimental features before official release"
          />

          <ToggleSwitch
            enabled={false}
            onChange={onChangesMade}
            label="Developer mode"
            description="Enable advanced debugging and testing features"
          />

          <div className="pt-4 border-t border-gray-200">
            <label className="text-sm font-medium text-[#1F2937] mb-3 block">
              Settings Backup
            </label>
            <div className="flex gap-3">
              <Button variant="outline" className="border-[#059669] text-[#059669]">
                <Download className="w-4 h-4 mr-2" />
                Export settings
              </Button>
              <Button variant="outline">
                <Upload className="w-4 h-4 mr-2" />
                Import settings
              </Button>
            </div>
          </div>
        </div>
      </SettingSection>
    </div>
  );
}