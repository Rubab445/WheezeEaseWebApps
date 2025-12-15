import { useState } from 'react';
import { ChevronRight, Save, X, User, Mail, Phone, MapPin, Calendar, Shield, Users as UsersIcon } from 'lucide-react';

interface EditUserPageProps {
  onBack: () => void;
}

export function EditUserPage({ onBack }: EditUserPageProps) {
  const [role, setRole] = useState('Patient');
  const [status, setStatus] = useState('Active');

  return (
    <div className="p-8">
      {/* Breadcrumb & Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-gray-400 mb-2">
            <button className="hover:text-purple-400 cursor-pointer transition-colors">
              Users & Roles
            </button>
            <ChevronRight className="w-4 h-4" />
            <button onClick={onBack} className="hover:text-purple-400 cursor-pointer transition-colors">
              User Details
            </button>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white">Edit User</span>
          </div>
          <h1 className="text-3xl text-white">Edit User</h1>
          <p className="text-gray-400 mt-1">Update user information and settings</p>
        </div>

        <div className="flex items-center gap-3">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 px-4 py-2.5 rounded-full border border-white/10 text-gray-300 hover:bg-white/5 transition-all text-sm"
          >
            <X className="w-4 h-4" />
            Cancel
          </button>
          <button className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all text-sm">
            <Save className="w-4 h-4" />
            Save Changes
          </button>
        </div>
      </div>

      {/* Form Content */}
      <div className="grid grid-cols-3 gap-6">
        {/* Left Column - Basic Information */}
        <div className="col-span-2 space-y-6">
          {/* Basic Information */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl text-white mb-6 flex items-center gap-2">
              <User className="w-5 h-5 text-purple-400" />
              Basic Information
            </h2>

            <div className="space-y-5">
              {/* Name Fields */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">First Name *</label>
                  <input
                    type="text"
                    defaultValue="Ayesha"
                    className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Last Name *</label>
                  <input
                    type="text"
                    defaultValue="Khan"
                    className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <Mail className="w-4 h-4 text-cyan-400" />
                  Email Address *
                </label>
                <input
                  type="email"
                  defaultValue="ayesha.k@email.com"
                  className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                  placeholder="Enter email address"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                  <Phone className="w-4 h-4 text-cyan-400" />
                  Phone Number
                </label>
                <input
                  type="tel"
                  defaultValue="+92 300 1234567"
                  className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                  placeholder="Enter phone number"
                />
              </div>

              {/* Location & DOB */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-pink-400" />
                    City
                  </label>
                  <input
                    type="text"
                    defaultValue="Karachi"
                    className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                    placeholder="Enter city"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2 flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-purple-400" />
                    Date of Birth
                  </label>
                  <input
                    type="date"
                    defaultValue="1992-01-15"
                    className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                  />
                </div>
              </div>

              {/* Gender */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Gender</label>
                <div className="flex gap-4">
                  {['Male', 'Female', 'Other'].map((gender) => (
                    <label key={gender} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="gender"
                        defaultChecked={gender === 'Female'}
                        className="w-4 h-4 text-purple-500 focus:ring-purple-500/20 bg-white/5 border-white/20"
                      />
                      <span className="text-sm text-gray-300">{gender}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Medical Information (if Patient) */}
          {role === 'Patient' && (
            <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl text-white mb-6 flex items-center gap-2">
                <UsersIcon className="w-5 h-5 text-cyan-400" />
                Medical Information
              </h2>

              <div className="space-y-5">
                {/* Asthma Type */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Asthma Type</label>
                  <select className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20">
                    <option>Allergic Asthma</option>
                    <option>Non-allergic Asthma</option>
                    <option>Exercise-induced Asthma</option>
                    <option>Occupational Asthma</option>
                  </select>
                </div>

                {/* Known Allergies */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Known Allergies</label>
                  <input
                    type="text"
                    defaultValue="Pollen, Dust mites, Pet dander, Mold"
                    className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                    placeholder="Enter allergies separated by commas"
                  />
                  <p className="text-xs text-gray-500 mt-1">Separate multiple allergies with commas</p>
                </div>

                {/* Current Medications */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Current Medications</label>
                  <textarea
                    rows={3}
                    defaultValue="Albuterol (Inhaler), Montelukast 10mg, Fluticasone"
                    className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 resize-none"
                    placeholder="Enter current medications"
                  />
                </div>

                {/* Emergency Contact */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Emergency Contact Name</label>
                    <input
                      type="text"
                      defaultValue="Ali Khan"
                      className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                      placeholder="Enter emergency contact"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-400 mb-2">Emergency Contact Phone</label>
                    <input
                      type="tel"
                      defaultValue="+92 321 9876543"
                      className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                      placeholder="Enter phone number"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Doctor Information (if Doctor) */}
          {role === 'Doctor' && (
            <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
              <h2 className="text-xl text-white mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-purple-400" />
                Doctor Information
              </h2>

              <div className="space-y-5">
                {/* Specialty */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Specialty *</label>
                  <input
                    type="text"
                    defaultValue="Pulmonologist"
                    className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                    placeholder="Enter specialty"
                  />
                </div>

                {/* Hospital/Clinic */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Hospital/Clinic *</label>
                  <input
                    type="text"
                    defaultValue="Aga Khan University Hospital"
                    className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                    placeholder="Enter hospital or clinic name"
                  />
                </div>

                {/* License ID */}
                <div>
                  <label className="block text-sm text-gray-400 mb-2">License/Registration ID *</label>
                  <input
                    type="text"
                    defaultValue="PMC-52184"
                    className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20 font-mono"
                    placeholder="Enter license ID"
                  />
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Right Column - Account Settings */}
        <div className="space-y-6">
          {/* Role & Status */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg text-white mb-5 flex items-center gap-2">
              <Shield className="w-5 h-5 text-purple-400" />
              Account Settings
            </h2>

            <div className="space-y-5">
              {/* Role */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Role *</label>
                <select 
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                >
                  <option>Patient</option>
                  <option>Doctor</option>
                  <option>Admin</option>
                </select>
              </div>

              {/* Status */}
              <div>
                <label className="block text-sm text-gray-400 mb-2">Status *</label>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="w-full bg-[#141A2E] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-purple-500/50 focus:ring-1 focus:ring-purple-500/20"
                >
                  <option>Active</option>
                  <option>Suspended</option>
                  <option>Pending</option>
                </select>
              </div>

              {/* Password Reset */}
              <div className="pt-4 border-t border-white/5">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20"
                  />
                  <span className="text-sm text-gray-300">Require password reset on next login</span>
                </label>
              </div>

              {/* 2FA */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 rounded border-white/20 bg-white/5 text-purple-500 focus:ring-purple-500/20"
                  />
                  <span className="text-sm text-gray-300">Two-factor authentication enabled</span>
                </label>
              </div>
            </div>
          </div>

          {/* Account Info */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg text-white mb-5">Account Info</h2>

            <div className="space-y-4">
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Account Created</label>
                <p className="text-sm text-white">Jan 15, 2025</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Last Login</label>
                <p className="text-sm text-white">2 hours ago</p>
              </div>
              <div>
                <label className="text-xs text-gray-500 mb-1 block">Last Modified</label>
                <p className="text-sm text-white">Dec 10, 2024</p>
              </div>
            </div>
          </div>

          {/* Danger Zone */}
          <div className="bg-red-500/10 border border-red-500/30 rounded-2xl p-6 shadow-xl">
            <h2 className="text-lg text-red-400 mb-4">Danger Zone</h2>
            <div className="space-y-3">
              <button className="w-full px-4 py-2 rounded-lg border border-red-500/30 text-red-300 hover:bg-red-500/20 transition-all text-sm">
                Suspend Account
              </button>
              <button className="w-full px-4 py-2 rounded-lg border border-red-500/30 text-red-300 hover:bg-red-500/20 transition-all text-sm">
                Delete Account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
