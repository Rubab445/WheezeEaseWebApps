import { Check, X, ExternalLink, Key } from 'lucide-react';
import { Button } from '../../ui/button';
import { Badge } from '../../ui/badge';
import { SettingSection } from './SettingSection';
import { ToggleSwitch } from './ToggleSwitch';

interface IntegrationsTabProps {
  onChangesMade: () => void;
}

const integrations = [
  {
    id: 1,
    name: 'Google Calendar',
    description: 'Sync appointments with your Google Calendar',
    logo: '📅',
    connected: true,
    features: ['Two-way sync', 'Appointment reminders', 'Automatic updates'],
  },
  {
    id: 2,
    name: 'Hospital EMR System',
    description: 'Connect with your hospital\'s electronic medical records',
    logo: '🏥',
    connected: false,
    features: ['Patient records sync', 'Lab results', 'Medication history'],
  },
  {
    id: 3,
    name: 'Telemedicine Platform',
    description: 'Enable video consultations with patients',
    logo: '💻',
    connected: true,
    features: ['Video calls', 'Screen sharing', 'Chat integration'],
  },
  {
    id: 4,
    name: 'Zoom',
    description: 'Use Zoom for virtual consultations',
    logo: '🎥',
    connected: false,
    features: ['HD video', 'Waiting room', 'Recording'],
  },
];

export function IntegrationsTab({ onChangesMade }: IntegrationsTabProps) {
  return (
    <div>
      <SettingSection title="Connected Services" description="Manage third-party integrations">
        <div className="space-y-4">
          {integrations.map((integration) => (
            <div
              key={integration.id}
              className="border border-gray-200 rounded-xl p-5 hover:border-[#059669] transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-[#F8F9FA] rounded-lg flex items-center justify-center text-2xl">
                    {integration.logo}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h4 className="font-medium text-[#1F2937]">{integration.name}</h4>
                      {integration.connected ? (
                        <Badge className="bg-green-100 text-green-700 hover:bg-green-100">
                          <Check className="w-3 h-3 mr-1" />
                          Connected
                        </Badge>
                      ) : (
                        <Badge className="bg-gray-100 text-gray-600 hover:bg-gray-100">
                          <X className="w-3 h-3 mr-1" />
                          Not connected
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm text-[#6B7280] mb-3">{integration.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {integration.features.map((feature, idx) => (
                        <span
                          key={idx}
                          className="text-xs bg-[#F8F9FA] text-[#6B7280] px-2 py-1 rounded"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 pt-4 border-t border-gray-200">
                {integration.connected ? (
                  <>
                    {integration.id === 1 && (
                      <ToggleSwitch
                        enabled={true}
                        onChange={onChangesMade}
                        label="Sync appointments"
                      />
                    )}
                    {integration.id === 3 && (
                      <ToggleSwitch
                        enabled={true}
                        onChange={onChangesMade}
                        label="Video call integration"
                      />
                    )}
                    <div className="flex-1"></div>
                    <Button variant="outline" size="sm">
                      Configure
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-red-500 hover:text-red-600 hover:bg-red-50"
                    >
                      Disconnect
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-[#059669] text-[#059669] hover:bg-[#059669]/5"
                    >
                      Connect
                    </Button>
                    <button className="text-sm text-[#6B7280] hover:text-[#059669] flex items-center gap-1">
                      Learn more
                      <ExternalLink className="w-3 h-3" />
                    </button>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </SettingSection>

      <SettingSection title="API Access" description="Manage API keys and developer settings">
        <div className="space-y-4">
          <div className="p-4 bg-[#F8F9FA] rounded-lg">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <Key className="w-4 h-4 text-[#6B7280]" />
                <span className="text-sm font-medium text-[#1F2937]">API Key</span>
              </div>
              <Button variant="outline" size="sm" className="border-[#059669] text-[#059669]">
                Generate new key
              </Button>
            </div>
            <p className="text-xs text-[#6B7280]">
              Use API keys to integrate WheezeEase with your custom applications
            </p>
          </div>

          <div className="flex gap-3">
            <Button variant="outline" size="sm">
              <ExternalLink className="w-4 h-4 mr-2" />
              API documentation
            </Button>
            <Button variant="outline" size="sm">
              Configure webhooks
            </Button>
          </div>
        </div>
      </SettingSection>
    </div>
  );
}
