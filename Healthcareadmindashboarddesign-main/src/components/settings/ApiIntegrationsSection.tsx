import { Plus, RefreshCw, TestTube, Eye, EyeOff, Edit, Trash2, Database, Zap } from 'lucide-react';
import { useState } from 'react';

interface ApiIntegrationsSectionProps {
  onChange: () => void;
}

const apis = [
  { id: '1', name: 'OpenWeather API', status: 'online', key: '••••••••••1a2b3c', lastSync: '2 minutes ago' },
  { id: '2', name: 'Pollen.com API', status: 'online', key: '••••••••••7x8y9z', lastSync: '5 minutes ago' },
  { id: '3', name: 'AQI Data API', status: 'offline', key: '••••••••••4m5n6p', lastSync: '2 hours ago' },
];

const webhooks = [
  { id: '1', url: 'https://api.example.com/webhook', events: ['user.created', 'alert.triggered'] },
  { id: '2', url: 'https://notify.example.com/hook', events: ['symptom.logged'] },
];

export function ApiIntegrationsSection({ onChange }: ApiIntegrationsSectionProps) {
  const [showKeys, setShowKeys] = useState<Record<string, boolean>>({});

  const toggleKeyVisibility = (apiId: string) => {
    setShowKeys(prev => ({ ...prev, [apiId]: !prev[apiId] }));
  };

  return (
    <div className="space-y-6">
      {/* Connected APIs Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <h2 className="text-lg text-white mb-6">Connected APIs</h2>
        
        <div className="space-y-4">
          {apis.map((api) => (
            <div key={api.id} className="p-5 bg-white/5 border border-white/10 rounded-xl">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${
                    api.status === 'online' ? 'bg-green-500' : 'bg-red-500'
                  } shadow-lg ${
                    api.status === 'online' ? 'shadow-green-500/50' : 'shadow-red-500/50'
                  }`} />
                  <div>
                    <h3 className="text-white font-medium">{api.name}</h3>
                    <p className="text-xs text-gray-500">Last sync: {api.lastSync}</p>
                  </div>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  api.status === 'online' 
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}>
                  {api.status}
                </span>
              </div>

              <div className="space-y-3">
                {/* API Key */}
                <div>
                  <label className="text-xs text-gray-400 mb-2 block">API Key</label>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-white font-mono text-sm">
                      {showKeys[api.id] ? 'sk_live_1a2b3c4d5e6f7g8h9i0j' : api.key}
                    </div>
                    <button
                      onClick={() => toggleKeyVisibility(api.id)}
                      className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                      title={showKeys[api.id] ? 'Hide' : 'Show'}
                    >
                      {showKeys[api.id] ? (
                        <EyeOff className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Eye className="w-4 h-4 text-gray-400" />
                      )}
                    </button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <button 
                    onClick={onChange}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-purple-500/20 border border-purple-500/30 text-purple-300 hover:bg-purple-500/30 transition-all text-sm"
                  >
                    <RefreshCw className="w-3 h-3" />
                    Regenerate Key
                  </button>
                  <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/30 transition-all text-sm">
                    <TestTube className="w-3 h-3" />
                    Test Connection
                  </button>
                </div>
              </div>
            </div>
          ))}

          <button 
            onClick={onChange}
            className="w-full flex items-center justify-center gap-2 px-5 py-3 rounded-lg border-2 border-dashed border-white/10 text-gray-400 hover:border-purple-500/30 hover:text-purple-300 hover:bg-purple-500/5 transition-all"
          >
            <Plus className="w-4 h-4" />
            Add New API
          </button>
        </div>
      </div>

      {/* Webhooks Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <h2 className="text-lg text-white mb-6">Webhooks</h2>
        
        <div className="space-y-4 mb-4">
          {/* Add Webhook Form */}
          <div className="p-4 bg-white/5 border border-white/10 rounded-xl">
            <label className="text-sm text-gray-400 mb-2 block">Webhook URL</label>
            <input
              type="url"
              placeholder="https://api.example.com/webhook"
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all mb-3"
            />

            <label className="text-sm text-gray-400 mb-2 block">Events to trigger</label>
            <div className="grid grid-cols-2 gap-2 mb-3">
              {['user.created', 'user.updated', 'alert.triggered', 'symptom.logged', 'environment.warning', 'system.error'].map((event) => (
                <label key={event} className="flex items-center gap-2 p-2 bg-white/5 rounded-lg cursor-pointer hover:bg-white/10 transition-colors">
                  <input 
                    type="checkbox" 
                    onChange={onChange}
                    className="w-4 h-4 rounded border-white/30" 
                  />
                  <span className="text-xs text-gray-300">{event}</span>
                </label>
              ))}
            </div>

            <button className="w-full px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all">
              <Plus className="w-4 h-4 inline mr-2" />
              Add Webhook
            </button>
          </div>

          {/* Configured Webhooks List */}
          {webhooks.map((webhook) => (
            <div key={webhook.id} className="flex items-center justify-between p-4 bg-white/5 border border-white/10 rounded-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <Zap className="w-4 h-4 text-cyan-400" />
                </div>
                <div>
                  <p className="text-sm text-white font-mono">{webhook.url}</p>
                  <div className="flex items-center gap-2 mt-1">
                    {webhook.events.map((event) => (
                      <span key={event} className="px-2 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-500/30 text-xs">
                        {event}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={onChange}
                  className="p-2 hover:bg-purple-500/20 rounded-lg transition-colors"
                  title="Edit"
                >
                  <Edit className="w-4 h-4 text-purple-400" />
                </button>
                <button 
                  onClick={onChange}
                  className="p-2 hover:bg-red-500/20 rounded-lg transition-colors"
                  title="Delete"
                >
                  <Trash2 className="w-4 h-4 text-red-400" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Database Connection Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center justify-center">
            <Database className="w-5 h-5 text-green-400" />
          </div>
          <div>
            <h2 className="text-lg text-white">Database Connection</h2>
            <p className="text-xs text-gray-500">MongoDB Atlas</p>
          </div>
        </div>
        
        <div className="space-y-4">
          {/* Connection String */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Connection String</label>
            <div className="flex items-center gap-2">
              <input
                type="password"
                value="mongodb+srv://••••••••••••••••••••••••••••"
                readOnly
                className="flex-1 px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white font-mono text-sm"
              />
              <button className="p-2 hover:bg-white/10 rounded-lg transition-colors" title="Show">
                <Eye className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </div>

          {/* Connection Status */}
          <div className="flex items-center justify-between p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500" />
              <span className="text-sm text-green-400">Connected</span>
            </div>
            <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-500/20 text-green-300 hover:bg-green-500/30 transition-all text-sm">
              <TestTube className="w-3 h-3" />
              Test Connection
            </button>
          </div>

          {/* Backup Settings */}
          <div>
            <label className="text-sm text-gray-400 mb-2 block">Backup Frequency</label>
            <select 
              onChange={onChange}
              className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
            >
              <option value="daily" selected>Daily</option>
              <option value="weekly">Weekly</option>
            </select>
          </div>

          {/* Last Backup */}
          <div className="p-4 bg-white/5 rounded-lg border border-white/10">
            <p className="text-xs text-gray-400 mb-1">Last Backup</p>
            <p className="text-sm text-white">December 13, 2025 at 3:00 AM</p>
          </div>
        </div>
      </div>
    </div>
  );
}
