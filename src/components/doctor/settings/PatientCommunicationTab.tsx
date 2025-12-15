import { Plus, Edit, Trash2 } from 'lucide-react';
import { Button } from '../../ui/button';
import { Textarea } from '../../ui/textarea';
import { SettingSection } from './SettingSection';
import { ToggleSwitch } from './ToggleSwitch';

interface PatientCommunicationTabProps {
  onChangesMade: () => void;
}

const messageTemplates = [
  { id: 1, name: 'Follow-up after consultation', preview: 'Thank you for your visit today. Please remember to...' },
  { id: 2, name: 'Medication reminder', preview: 'This is a friendly reminder to take your prescribed...' },
  { id: 3, name: 'Test results ready', preview: 'Your recent test results are now available...' },
];

export function PatientCommunicationTab({ onChangesMade }: PatientCommunicationTabProps) {
  return (
    <div>
      <SettingSection title="Default Message Settings" description="Configure automated messages sent to patients">
        <div className="space-y-6">
          <ToggleSwitch
            enabled={true}
            onChange={onChangesMade}
            label="Auto-reply when unavailable"
            description="Send automatic response during off-hours"
          />

          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Auto-reply message template
            </label>
            <Textarea
              placeholder="Thank you for your message. I'm currently unavailable..."
              rows={3}
              onChange={onChangesMade}
              className="w-full resize-none"
            />
          </div>

          <div className="pt-4 border-t border-gray-200">
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Greeting message template
            </label>
            <Textarea
              placeholder="Hello! Welcome to my practice. How can I assist you today?"
              rows={3}
              onChange={onChangesMade}
              className="w-full resize-none"
            />
          </div>

          <div className="pt-4 border-t border-gray-200">
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Appointment confirmation template
            </label>
            <Textarea
              placeholder="Your appointment is confirmed for [DATE] at [TIME]..."
              rows={3}
              onChange={onChangesMade}
              className="w-full resize-none"
            />
          </div>

          <div className="pt-4 border-t border-gray-200">
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Appointment reminder template
            </label>
            <Textarea
              placeholder="Reminder: You have an appointment tomorrow at [TIME]..."
              rows={3}
              onChange={onChangesMade}
              className="w-full resize-none"
            />
          </div>
        </div>
      </SettingSection>

      <SettingSection title="Communication Preferences" description="Manage how you interact with patients">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Response time goal
            </label>
            <select
              defaultValue="Within 2 hours"
              onChange={onChangesMade}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
            >
              <option>Within 1 hour</option>
              <option>Within 2 hours</option>
              <option>Within 4 hours</option>
              <option>Within 24 hours</option>
            </select>
          </div>

          <div className="pt-4 border-t border-gray-200 space-y-2">
            <ToggleSwitch
              enabled={false}
              onChange={onChangesMade}
              label="Allow patient messages outside working hours"
              description="Patients can send messages anytime (you can reply later)"
            />

            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Read receipts"
              description="Let patients know when you've read their message"
            />

            <ToggleSwitch
              enabled={true}
              onChange={onChangesMade}
              label="Typing indicators"
              description="Show typing status when composing replies"
            />
          </div>
        </div>
      </SettingSection>

      <SettingSection title="Message Templates" description="Quick message templates for common scenarios">
        <div className="space-y-3 mb-4">
          {messageTemplates.map((template) => (
            <div
              key={template.id}
              className="flex items-center justify-between p-4 bg-[#F8F9FA] rounded-lg"
            >
              <div className="flex-1">
                <p className="text-sm font-medium text-[#1F2937]">{template.name}</p>
                <p className="text-xs text-[#6B7280] mt-1 line-clamp-1">{template.preview}</p>
              </div>
              <div className="flex items-center gap-2">
                <Button variant="ghost" size="sm">
                  <Edit className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <Button variant="outline" className="border-[#059669] text-[#059669]">
          <Plus className="w-4 h-4 mr-2" />
          Add new template
        </Button>
      </SettingSection>
    </div>
  );
}