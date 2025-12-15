import { useState } from 'react';
import { User, Mail, Phone, MapPin, Building2, Calendar, Award, Briefcase, Edit3, Save, X, Camera, CheckCircle2, Shield, Clock, Activity } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import { toast } from 'sonner@2.0.3';

export function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);
  const [activeTab, setActiveTab] = useState<'personal' | 'professional' | 'security' | 'activity'>('personal');
  
  const [formData, setFormData] = useState({
    fullName: 'Dr. Sarah Khan',
    email: 'sarah.khan@wheezeease.com',
    phone: '+92 300 1234567',
    specialization: 'Pulmonologist & Allergist',
    licenseNumber: 'PMC-12345',
    hospital: 'Lahore General Hospital',
    department: 'Respiratory Medicine',
    experience: '12 years',
    education: 'MBBS, FCPS (Pulmonology)',
    address: 'House 123, Sector F-7, Islamabad',
    bio: 'Specialist in respiratory diseases with focus on asthma and allergies. Dedicated to providing comprehensive care for patients with chronic respiratory conditions.',
  });

  const handleSave = () => {
    toast.success('Profile updated successfully!');
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    toast.info('Changes discarded');
  };

  return (
    <div className="bg-[#F8F9FA] min-h-screen">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-8 py-6">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-[#6B7280] mb-3">
          <span>Dashboard</span>
          <span>/</span>
          <span className="text-[#1F2937] font-medium">Profile</span>
        </div>

        {/* Title Row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-2xl font-bold">
                SK
              </div>
              <button className="absolute bottom-0 right-0 w-8 h-8 bg-white rounded-full border-2 border-gray-200 flex items-center justify-center hover:bg-gray-50 transition-colors">
                <Camera className="w-4 h-4 text-[#6B7280]" />
              </button>
            </div>
            <div>
              <h1 className="text-[#1F2937]">Dr. Sarah Khan</h1>
              <p className="text-sm text-[#6B7280] mt-1">Pulmonologist & Allergist • Lahore General Hospital</p>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex items-center gap-1 text-xs text-[#059669] bg-[#059669]/10 px-2 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3" />
                  Verified Doctor
                </div>
                <div className="flex items-center gap-1 text-xs text-[#6B7280] bg-gray-100 px-2 py-1 rounded-full">
                  <Award className="w-3 h-3" />
                  12 Years Experience
                </div>
              </div>
            </div>
          </div>

          <div>
            {!isEditing ? (
              <Button
                onClick={() => setIsEditing(true)}
                className="bg-gradient-to-r from-[#059669] to-[#10B981] text-white hover:opacity-90"
              >
                <Edit3 className="w-4 h-4 mr-2" />
                Edit Profile
              </Button>
            ) : (
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  onClick={handleCancel}
                >
                  <X className="w-4 h-4 mr-2" />
                  Cancel
                </Button>
                <Button
                  onClick={handleSave}
                  className="bg-gradient-to-r from-[#059669] to-[#10B981] text-white hover:opacity-90"
                >
                  <Save className="w-4 h-4 mr-2" />
                  Save Changes
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-200 px-8">
        <div className="flex items-center gap-1">
          <button
            onClick={() => setActiveTab('personal')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'personal'
                ? 'border-[#059669] text-[#059669]'
                : 'border-transparent text-[#6B7280] hover:text-[#1F2937]'
            }`}
          >
            <User className="w-4 h-4 inline mr-2" />
            Personal Information
          </button>
          <button
            onClick={() => setActiveTab('professional')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'professional'
                ? 'border-[#059669] text-[#059669]'
                : 'border-transparent text-[#6B7280] hover:text-[#1F2937]'
            }`}
          >
            <Briefcase className="w-4 h-4 inline mr-2" />
            Professional Details
          </button>
          <button
            onClick={() => setActiveTab('security')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'security'
                ? 'border-[#059669] text-[#059669]'
                : 'border-transparent text-[#6B7280] hover:text-[#1F2937]'
            }`}
          >
            <Shield className="w-4 h-4 inline mr-2" />
            Security & Privacy
          </button>
          <button
            onClick={() => setActiveTab('activity')}
            className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
              activeTab === 'activity'
                ? 'border-[#059669] text-[#059669]'
                : 'border-transparent text-[#6B7280] hover:text-[#1F2937]'
            }`}
          >
            <Activity className="w-4 h-4 inline mr-2" />
            Activity Log
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="px-8 py-8">
        <div className="max-w-5xl">
          {/* Personal Information Tab */}
          {activeTab === 'personal' && (
            <div className="space-y-6">
              {/* Personal Details Card */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-bold text-[#1F2937] mb-6">Personal Details</h2>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      Full Name
                    </label>
                    {isEditing ? (
                      <Input
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        placeholder="Enter full name"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                        <User className="w-5 h-5 text-[#6B7280]" />
                        <span className="text-[#1F2937]">{formData.fullName}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      Email Address
                    </label>
                    {isEditing ? (
                      <Input
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="Enter email"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                        <Mail className="w-5 h-5 text-[#6B7280]" />
                        <span className="text-[#1F2937]">{formData.email}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      Phone Number
                    </label>
                    {isEditing ? (
                      <Input
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="Enter phone number"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                        <Phone className="w-5 h-5 text-[#6B7280]" />
                        <span className="text-[#1F2937]">{formData.phone}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      Address
                    </label>
                    {isEditing ? (
                      <Input
                        value={formData.address}
                        onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                        placeholder="Enter address"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                        <MapPin className="w-5 h-5 text-[#6B7280]" />
                        <span className="text-[#1F2937]">{formData.address}</span>
                      </div>
                    )}
                  </div>

                  <div className="col-span-2">
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      Bio
                    </label>
                    {isEditing ? (
                      <Textarea
                        value={formData.bio}
                        onChange={(e) => setFormData({ ...formData, bio: e.target.value })}
                        rows={3}
                        placeholder="Tell us about yourself..."
                      />
                    ) : (
                      <div className="px-4 py-3 bg-gray-50 rounded-lg">
                        <p className="text-sm text-[#1F2937]">{formData.bio}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-4 gap-5">
                <div className="bg-gradient-to-br from-[#059669] to-[#10B981] rounded-xl p-5 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <User className="w-8 h-8 opacity-80" />
                  </div>
                  <p className="text-3xl font-bold mb-1">156</p>
                  <p className="text-sm opacity-90">Active Patients</p>
                </div>

                <div className="bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] rounded-xl p-5 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <Calendar className="w-8 h-8 opacity-80" />
                  </div>
                  <p className="text-3xl font-bold mb-1">234</p>
                  <p className="text-sm opacity-90">Appointments This Month</p>
                </div>

                <div className="bg-gradient-to-br from-[#8B5CF6] to-[#A78BFA] rounded-xl p-5 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <Activity className="w-8 h-8 opacity-80" />
                  </div>
                  <p className="text-3xl font-bold mb-1">1,842</p>
                  <p className="text-sm opacity-90">Symptom Logs Reviewed</p>
                </div>

                <div className="bg-gradient-to-br from-[#F59E0B] to-[#FCD34D] rounded-xl p-5 text-white">
                  <div className="flex items-center justify-between mb-2">
                    <Award className="w-8 h-8 opacity-80" />
                  </div>
                  <p className="text-3xl font-bold mb-1">12</p>
                  <p className="text-sm opacity-90">Years Experience</p>
                </div>
              </div>
            </div>
          )}

          {/* Professional Details Tab */}
          {activeTab === 'professional' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-bold text-[#1F2937] mb-6">Professional Information</h2>
                
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      Specialization
                    </label>
                    {isEditing ? (
                      <Input
                        value={formData.specialization}
                        onChange={(e) => setFormData({ ...formData, specialization: e.target.value })}
                        placeholder="Enter specialization"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                        <Award className="w-5 h-5 text-[#6B7280]" />
                        <span className="text-[#1F2937]">{formData.specialization}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      License Number
                    </label>
                    {isEditing ? (
                      <Input
                        value={formData.licenseNumber}
                        onChange={(e) => setFormData({ ...formData, licenseNumber: e.target.value })}
                        placeholder="Enter license number"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                        <Shield className="w-5 h-5 text-[#6B7280]" />
                        <span className="text-[#1F2937]">{formData.licenseNumber}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      Hospital/Clinic
                    </label>
                    {isEditing ? (
                      <Input
                        value={formData.hospital}
                        onChange={(e) => setFormData({ ...formData, hospital: e.target.value })}
                        placeholder="Enter hospital/clinic name"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                        <Building2 className="w-5 h-5 text-[#6B7280]" />
                        <span className="text-[#1F2937]">{formData.hospital}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      Department
                    </label>
                    {isEditing ? (
                      <Input
                        value={formData.department}
                        onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                        placeholder="Enter department"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                        <Briefcase className="w-5 h-5 text-[#6B7280]" />
                        <span className="text-[#1F2937]">{formData.department}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      Years of Experience
                    </label>
                    {isEditing ? (
                      <Input
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        placeholder="Enter years of experience"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                        <Calendar className="w-5 h-5 text-[#6B7280]" />
                        <span className="text-[#1F2937]">{formData.experience}</span>
                      </div>
                    )}
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      Education
                    </label>
                    {isEditing ? (
                      <Input
                        value={formData.education}
                        onChange={(e) => setFormData({ ...formData, education: e.target.value })}
                        placeholder="Enter education"
                      />
                    ) : (
                      <div className="flex items-center gap-3 px-4 py-3 bg-gray-50 rounded-lg">
                        <Award className="w-5 h-5 text-[#6B7280]" />
                        <span className="text-[#1F2937]">{formData.education}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-lg font-bold text-[#1F2937]">Certifications & Awards</h2>
                  <Button variant="outline" size="sm">
                    <Award className="w-4 h-4 mr-2" />
                    Add Certificate
                  </Button>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-start gap-4 p-4 bg-[#F0FDF4] border border-[#22C55E]/30 rounded-lg">
                    <div className="w-12 h-12 bg-[#22C55E] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[#1F2937]">Fellow of College of Physicians & Surgeons (FCPS)</h4>
                      <p className="text-sm text-[#6B7280] mt-1">Pulmonology • 2015</p>
                      <p className="text-xs text-[#22C55E] mt-2">Verified</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-[#F0FDF4] border border-[#22C55E]/30 rounded-lg">
                    <div className="w-12 h-12 bg-[#059669] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[#1F2937]">Board Certified in Allergy & Immunology</h4>
                      <p className="text-sm text-[#6B7280] mt-1">Pakistan Medical Commission • 2017</p>
                      <p className="text-xs text-[#22C55E] mt-2">Verified</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 p-4 bg-[#EDE9FE] border border-[#8B5CF6]/30 rounded-lg">
                    <div className="w-12 h-12 bg-[#8B5CF6] rounded-lg flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-medium text-[#1F2937]">Excellence in Patient Care Award</h4>
                      <p className="text-sm text-[#6B7280] mt-1">Lahore General Hospital • 2023</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Security & Privacy Tab */}
          {activeTab === 'security' && (
            <div className="space-y-6">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-bold text-[#1F2937] mb-6">Security Settings</h2>
                
                <div className="space-y-6">
                  {/* Change Password */}
                  <div>
                    <h3 className="text-sm font-medium text-[#1F2937] mb-3">Change Password</h3>
                    <div className="space-y-3">
                      <Input type="password" placeholder="Current password" />
                      <Input type="password" placeholder="New password" />
                      <Input type="password" placeholder="Confirm new password" />
                      <Button className="bg-[#059669] text-white hover:bg-[#047857]">
                        Update Password
                      </Button>
                    </div>
                  </div>

                  {/* Two-Factor Authentication */}
                  <div className="pt-6 border-t border-gray-200">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-sm font-medium text-[#1F2937] mb-1">Two-Factor Authentication</h3>
                        <p className="text-sm text-[#6B7280]">Add an extra layer of security to your account</p>
                      </div>
                      <Button variant="outline">Enable</Button>
                    </div>
                  </div>

                  {/* Active Sessions */}
                  <div className="pt-6 border-t border-gray-200">
                    <h3 className="text-sm font-medium text-[#1F2937] mb-3">Active Sessions</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center gap-3">
                          <div className="w-2 h-2 bg-green-500 rounded-full" />
                          <div>
                            <p className="text-sm font-medium text-[#1F2937]">Current Session - Chrome on Windows</p>
                            <p className="text-xs text-[#6B7280]">IP: 192.168.1.1 • Islamabad, Pakistan</p>
                          </div>
                        </div>
                        <span className="text-xs text-[#6B7280]">Active now</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-bold text-[#1F2937] mb-6">Privacy Settings</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-[#1F2937]">Profile Visibility</h4>
                      <p className="text-xs text-[#6B7280] mt-1">Control who can see your profile information</p>
                    </div>
                    <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm">
                      <option>All Staff</option>
                      <option>Department Only</option>
                      <option>Private</option>
                    </select>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <h4 className="text-sm font-medium text-[#1F2937]">Data Sharing</h4>
                      <p className="text-xs text-[#6B7280] mt-1">Share anonymized data for research</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" className="sr-only peer" defaultChecked />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#059669]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#059669]"></div>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Activity Log Tab */}
          {activeTab === 'activity' && (
            <div className="space-y-4">
              <div className="bg-white rounded-xl border border-gray-200 p-6">
                <h2 className="text-lg font-bold text-[#1F2937] mb-6">Recent Activity</h2>
                
                <div className="space-y-4">
                  {[
                    { action: 'Approved AI Recommendation', patient: 'Ahmad Hassan', time: '2 hours ago', icon: CheckCircle2, color: 'text-green-600' },
                    { action: 'Reviewed Symptom Log', patient: 'Sarah Ahmed', time: '4 hours ago', icon: Activity, color: 'text-blue-600' },
                    { action: 'Updated Patient Notes', patient: 'Fatima Khan', time: '6 hours ago', icon: Edit3, color: 'text-orange-600' },
                    { action: 'Completed Appointment', patient: 'Ali Hassan', time: '1 day ago', icon: Calendar, color: 'text-purple-600' },
                    { action: 'Uploaded Resource', patient: 'N/A', time: '2 days ago', icon: Award, color: 'text-pink-600' },
                  ].map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div key={index} className="flex items-start gap-4 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                        <div className={`w-10 h-10 rounded-full bg-white border-2 flex items-center justify-center ${item.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-[#1F2937]">{item.action}</p>
                          <p className="text-xs text-[#6B7280] mt-1">
                            {item.patient !== 'N/A' && `Patient: ${item.patient} • `}
                            {item.time}
                          </p>
                        </div>
                        <Clock className="w-4 h-4 text-[#6B7280]" />
                      </div>
                    );
                  })}
                </div>

                <button className="w-full mt-4 py-2 text-sm text-[#059669] font-medium hover:underline">
                  View All Activity →
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
