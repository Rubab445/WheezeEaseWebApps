import { useState } from 'react';
import { User, Mail, Shield, Building, Key, Copy, Check, Loader2, ChevronDown } from 'lucide-react';

interface CreateAdminFormProps {
  onAccountCreated: () => void;
}

export function CreateAdminForm({ onAccountCreated }: CreateAdminFormProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    role: '',
    department: '',
    tempPassword: ''
  });
  const [permissions, setPermissions] = useState({
    userManagement: false,
    doctorManagement: false,
    patientManagement: false,
    systemSettings: false,
    reportsAnalytics: false,
    apiAccess: false
  });
  const [passwordCopied, setPasswordCopied] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const generatePassword = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZabcdefghjkmnpqrstuvwxyz23456789!@#$%^&*';
    let password = '';
    for (let i = 0; i < 16; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    setFormData({ ...formData, tempPassword: password });
  };

  const copyPassword = () => {
    navigator.clipboard.writeText(formData.tempPassword);
    setPasswordCopied(true);
    setTimeout(() => setPasswordCopied(false), 2000);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      onAccountCreated();
      setIsLoading(false);
    }, 1500);
  };

  const roles = [
    { value: 'super-admin', label: 'Super Admin', description: 'Full system access' },
    { value: 'admin', label: 'Admin', description: 'Standard access' },
    { value: 'support-admin', label: 'Support Admin', description: 'Limited access' }
  ];

  const departments = [
    'System Administration',
    'User Management',
    'Support',
    'Analytics',
    'Operations'
  ];

  return (
    <div className="bg-white rounded-2xl p-12 shadow-lg shadow-[#8B5CF6]/8 max-h-[90vh] overflow-y-auto">
      {/* Header */}
      <div className="mb-8">
        <div className="flex items-center gap-2 mb-3">
          <h1 className="text-3xl font-bold text-[#1F2937]">Create Admin Account</h1>
          <span className="px-3 py-1 bg-[#8B5CF6] text-white rounded-full text-xs font-semibold">
            Super Admin Only
          </span>
        </div>
        <p className="text-sm text-[#6B7280]">
          Add a new administrator to the platform
        </p>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Administrator Full Name
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <User className="w-5 h-5" />
            </div>
            <input
              type="text"
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              placeholder="Enter full name"
              className="w-full h-12 pl-12 pr-4 border border-[#E5E7EB] rounded-lg text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Admin Email Address
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
              <Mail className="w-5 h-5" />
            </div>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="admin@wheezeease.com"
              className="w-full h-12 pl-12 pr-4 border border-[#E5E7EB] rounded-lg text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all"
              required
            />
          </div>
        </div>

        {/* Role */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Admin Role
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] z-10">
              <Shield className="w-5 h-5" />
            </div>
            <select
              value={formData.role}
              onChange={(e) => setFormData({ ...formData, role: e.target.value })}
              className="w-full h-12 pl-12 pr-10 border border-[#E5E7EB] rounded-lg text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all appearance-none bg-white"
              required
            >
              <option value="">Select role...</option>
              {roles.map((role) => (
                <option key={role.value} value={role.value}>
                  {role.label} - {role.description}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] pointer-events-none" />
          </div>
        </div>

        {/* Department */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Department
          </label>
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280] z-10">
              <Building className="w-5 h-5" />
            </div>
            <select
              value={formData.department}
              onChange={(e) => setFormData({ ...formData, department: e.target.value })}
              className="w-full h-12 pl-12 pr-10 border border-[#E5E7EB] rounded-lg text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all appearance-none bg-white"
              required
            >
              <option value="">Select department...</option>
              {departments.map((dept) => (
                <option key={dept} value={dept}>{dept}</option>
              ))}
            </select>
            <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B7280] pointer-events-none" />
          </div>
        </div>

        {/* Temporary Password */}
        <div>
          <label className="block text-sm font-medium text-[#1F2937] mb-2">
            Temporary Password
          </label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6B7280]">
                <Key className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={formData.tempPassword}
                onChange={(e) => setFormData({ ...formData, tempPassword: e.target.value })}
                placeholder="Click generate to create password"
                className="w-full h-12 pl-12 pr-12 border border-[#E5E7EB] rounded-lg text-[#1F2937] placeholder:text-[#9CA3AF] focus:outline-none focus:ring-2 focus:ring-[#8B5CF6] focus:border-transparent transition-all font-mono text-sm"
                required
                readOnly
              />
              {formData.tempPassword && (
                <button
                  type="button"
                  onClick={copyPassword}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#8B5CF6] hover:text-[#7C3AED] transition-colors"
                >
                  {passwordCopied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
                </button>
              )}
            </div>
            <button
              type="button"
              onClick={generatePassword}
              className="px-4 h-12 bg-[#8B5CF6] text-white rounded-lg font-medium hover:bg-[#7C3AED] transition-colors whitespace-nowrap"
            >
              Generate
            </button>
          </div>
          <p className="mt-1.5 text-xs text-[#6B7280]">
            Admin must change password on first login
          </p>
        </div>

        {/* Permissions */}
        <div className="pt-4 border-t border-[#E5E7EB]">
          <label className="block text-sm font-medium text-[#1F2937] mb-3">
            Access Permissions
          </label>
          <div className="space-y-2">
            {Object.entries({
              userManagement: 'User Management',
              doctorManagement: 'Doctor Management',
              patientManagement: 'Patient Management',
              systemSettings: 'System Settings',
              reportsAnalytics: 'Reports & Analytics',
              apiAccess: 'API Access'
            }).map(([key, label]) => (
              <label key={key} className="flex items-center gap-3 p-3 border border-[#E5E7EB] rounded-lg hover:bg-[#F9FAFB] transition-colors cursor-pointer">
                <input
                  type="checkbox"
                  checked={permissions[key as keyof typeof permissions]}
                  onChange={(e) => setPermissions({ ...permissions, [key]: e.target.checked })}
                  className="w-5 h-5 rounded border-[#E5E7EB] text-[#8B5CF6] focus:ring-[#8B5CF6] focus:ring-offset-0 cursor-pointer"
                />
                <span className="text-sm text-[#1F2937]">{label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={isLoading}
          className="w-full h-[52px] bg-gradient-to-r from-[#8B5CF6] to-[#7C3AED] text-white rounded-lg font-semibold text-base hover:shadow-lg hover:shadow-[#8B5CF6]/25 hover:-translate-y-0.5 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Creating Account...
            </>
          ) : (
            'Create Admin Account'
          )}
        </button>

        {/* Security Note */}
        <div className="bg-[#F3E8FF] border border-[#8B5CF6]/30 rounded-lg p-4 flex items-start gap-3">
          <Mail className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
          <p className="text-sm text-[#1F2937]">
            An email invitation will be sent to the new admin with login instructions.
          </p>
        </div>
      </form>
    </div>
  );
}
