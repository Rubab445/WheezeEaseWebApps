import { Shield, Eye, FileEdit, Brain, Download, Save, Info } from 'lucide-react';

export function PermissionsTab() {
  const permissions = [
    {
      category: 'Patient Data Access',
      icon: Eye,
      iconColor: 'text-cyan-400',
      items: [
        { id: 'view_logs', label: 'View patient symptom logs', description: 'Access to all symptom log entries', enabled: true },
        { id: 'view_medical', label: 'View medical history', description: 'Complete medical records and history', enabled: true },
        { id: 'view_alerts', label: 'View patient alerts', description: 'Real-time alerts and notifications', enabled: true },
        { id: 'export_data', label: 'Export patient data', description: 'Download patient data in CSV/PDF format', enabled: false },
      ]
    },
    {
      category: 'Clinical Actions',
      icon: FileEdit,
      iconColor: 'text-purple-400',
      items: [
        { id: 'add_notes', label: 'Add doctor notes', description: 'Create clinical notes and observations', enabled: true },
        { id: 'update_treatment', label: 'Update treatment plans', description: 'Modify patient treatment protocols', enabled: true },
        { id: 'prescribe_meds', label: 'Prescribe medications', description: 'Write and manage prescriptions', enabled: true },
        { id: 'order_tests', label: 'Order diagnostic tests', description: 'Request lab tests and imaging', enabled: false },
      ]
    },
    {
      category: 'AI & Analytics',
      icon: Brain,
      iconColor: 'text-pink-400',
      items: [
        { id: 'view_predictions', label: 'View AI risk predictions', description: 'Access AI-generated risk assessments', enabled: true },
        { id: 'view_recommendations', label: 'View AI recommendations', description: 'AI treatment suggestions and insights', enabled: true },
        { id: 'override_ai', label: 'Override AI suggestions', description: 'Ability to dismiss AI recommendations', enabled: true },
        { id: 'train_model', label: 'Contribute to model training', description: 'Provide feedback to improve AI', enabled: false },
      ]
    },
    {
      category: 'Reports & Export',
      icon: Download,
      iconColor: 'text-blue-400',
      items: [
        { id: 'export_summary', label: 'Export patient summary', description: 'Generate patient summary reports', enabled: true },
        { id: 'generate_reports', label: 'Generate clinical reports', description: 'Create detailed medical reports', enabled: true },
        { id: 'export_analytics', label: 'Export analytics data', description: 'Download aggregate analytics', enabled: false },
        { id: 'bulk_export', label: 'Bulk export (multiple patients)', description: 'Export data for multiple patients', enabled: false },
      ]
    },
  ];

  return (
    <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-purple-400" />
            Permissions Matrix
          </h2>
          <p className="text-sm text-gray-400 mt-1">Manage role-based access control for this doctor</p>
        </div>
      </div>

      <div className="space-y-6">
        {permissions.map((section) => {
          const Icon = section.icon;
          return (
            <div key={section.category} className="border border-white/10 rounded-2xl p-5 bg-white/5">
              <h3 className="text-white mb-4 flex items-center gap-2">
                <Icon className={`w-5 h-5 ${section.iconColor}`} />
                {section.category}
              </h3>
              <div className="space-y-3">
                {section.items.map((item) => (
                  <label
                    key={item.id}
                    className="flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-xl cursor-pointer transition-all group"
                  >
                    <div className="flex items-center gap-3 flex-1">
                      <input
                        type="checkbox"
                        defaultChecked={item.enabled}
                        className="w-5 h-5 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20 cursor-pointer"
                      />
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-300 group-hover:text-white transition-colors">
                            {item.label}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5">{item.description}</p>
                      </div>
                    </div>
                    {item.enabled ? (
                      <span className="text-xs px-2 py-1 rounded-full bg-green-500/20 text-green-400 border border-green-500/30">
                        Enabled
                      </span>
                    ) : (
                      <span className="text-xs px-2 py-1 rounded-full bg-gray-500/20 text-gray-400 border border-gray-500/30">
                        Disabled
                      </span>
                    )}
                  </label>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* Save Button */}
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-white/5">
        <button className="flex-1 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all flex items-center justify-center gap-2">
          <Save className="w-4 h-4" />
          Save Changes
        </button>
        <button className="px-5 py-3 rounded-xl border border-white/10 text-gray-300 hover:bg-white/5 transition-all">
          Cancel
        </button>
      </div>

      {/* Info Note */}
      <div className="mt-4 p-4 bg-blue-500/10 border border-blue-500/30 rounded-xl">
        <p className="text-xs text-blue-300 flex items-start gap-2">
          <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
          Changes to permissions will take effect immediately and are logged in the audit trail. 
          Some permissions may require additional admin approval for security purposes.
        </p>
      </div>
    </div>
  );
}
