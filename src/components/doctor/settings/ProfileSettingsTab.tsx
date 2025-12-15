import { useState } from 'react';
import { Upload, Check, X } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Badge } from '../../ui/badge';
import { SettingSection } from './SettingSection';

interface ProfileSettingsTabProps {
  onChangesMade: () => void;
}

export function ProfileSettingsTab({ onChangesMade }: ProfileSettingsTabProps) {
  const [selectedLanguages, setSelectedLanguages] = useState(['English', 'Urdu']);
  const [bioLength, setBioLength] = useState(0);
  const maxBioLength = 500;

  const toggleLanguage = (lang: string) => {
    if (selectedLanguages.includes(lang)) {
      setSelectedLanguages(selectedLanguages.filter(l => l !== lang));
    } else {
      setSelectedLanguages([...selectedLanguages, lang]);
    }
    onChangesMade();
  };

  return (
    <div>
      {/* Personal Information */}
      <SettingSection title="Personal Information" description="Update your profile details">
        {/* Profile Photo */}
        <div className="mb-6 pb-6 border-b border-gray-200">
          <label className="text-sm font-medium text-[#1F2937] mb-3 block">Profile Photo</label>
          <div className="flex items-center gap-6">
            <div className="w-[120px] h-[120px] rounded-full bg-gradient-to-br from-[#059669] to-[#10B981] flex items-center justify-center text-white text-4xl font-bold">
              DU
            </div>
            <div>
              <Button
                variant="outline"
                className="border-[#059669] text-[#059669] hover:bg-[#059669]/5 mb-2"
              >
                <Upload className="w-4 h-4 mr-2" />
                Change photo
              </Button>
              <p className="text-xs text-[#6B7280] mb-1">JPG, PNG or GIF (max. 5MB)</p>
              <button className="text-xs text-red-500 hover:text-red-600">Remove photo</button>
            </div>
          </div>
        </div>

        {/* Basic Information */}
        <div className="space-y-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Full Name <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                defaultValue="Dr. Muhammad Usman Ali"
                onChange={onChangesMade}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Specialization <span className="text-red-500">*</span>
              </label>
              <select
                onChange={onChangesMade}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>Pulmonologist</option>
                <option>General Practitioner</option>
                <option>Allergist</option>
                <option>Immunologist</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Medical License Number
              </label>
              <div className="relative">
                <Input
                  type="text"
                  defaultValue="ML-2458-PK"
                  onChange={onChangesMade}
                  className="w-full pr-10"
                />
                <Badge className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#22C55E] text-white hover:bg-[#22C55E]">
                  <Check className="w-3 h-3 mr-1" />
                  Verified
                </Badge>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Years of Experience
              </label>
              <Input
                type="number"
                defaultValue="8"
                onChange={onChangesMade}
                className="w-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Hospital/Clinic
              </label>
              <Input
                type="text"
                defaultValue="University of Gujrat Hospital"
                onChange={onChangesMade}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Department
              </label>
              <Input
                type="text"
                defaultValue="Respiratory Medicine"
                onChange={onChangesMade}
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-4 mb-6 pt-6 border-t border-gray-200">
          <h4 className="font-medium text-[#1F2937]">Contact Information</h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Email <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <Input
                  type="email"
                  defaultValue="dr.usman@wheezeease.pk"
                  onChange={onChangesMade}
                  className="w-full pr-10"
                />
                <Check className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#22C55E]" />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Phone <span className="text-red-500">*</span>
              </label>
              <div className="flex gap-2">
                <select className="px-3 py-2 border border-gray-300 rounded-lg text-sm w-24 focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]">
                  <option>+92</option>
                  <option>+1</option>
                  <option>+44</option>
                </select>
                <Input
                  type="tel"
                  defaultValue="300 1234567"
                  onChange={onChangesMade}
                  className="flex-1"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Alternative Phone (Optional)
              </label>
              <Input
                type="tel"
                placeholder="Enter alternative phone"
                onChange={onChangesMade}
                className="w-full"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Location
              </label>
              <select
                onChange={onChangesMade}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-[#059669] focus:ring-1 focus:ring-[#059669]"
              >
                <option>Gujrat, Punjab</option>
                <option>Lahore, Punjab</option>
                <option>Islamabad, Capital</option>
                <option>Karachi, Sindh</option>
              </select>
            </div>
          </div>
        </div>

        {/* Professional Bio */}
        <div className="pt-6 border-t border-gray-200">
          <label className="text-sm font-medium text-[#1F2937] mb-2 block">
            Professional Bio
          </label>
          <Textarea
            placeholder="Write a brief professional bio..."
            rows={4}
            maxLength={maxBioLength}
            onChange={(e) => {
              setBioLength(e.target.value.length);
              onChangesMade();
            }}
            className="w-full resize-none mb-2"
          />
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                onChange={onChangesMade}
              />
              <span className="text-sm text-[#6B7280]">Visible to patients</span>
            </label>
            <span className="text-xs text-[#6B7280]">
              {bioLength} / {maxBioLength} characters
            </span>
          </div>
        </div>

        {/* Languages Spoken */}
        <div className="pt-6 border-t border-gray-200">
          <label className="text-sm font-medium text-[#1F2937] mb-3 block">
            Languages Spoken
          </label>
          <div className="flex flex-wrap gap-2 mb-3">
            {selectedLanguages.map((lang) => (
              <Badge
                key={lang}
                className="bg-[#059669] text-white hover:bg-[#059669] px-3 py-1.5"
              >
                {lang}
                <button
                  onClick={() => toggleLanguage(lang)}
                  className="ml-2 hover:text-white/80"
                >
                  <X className="w-3 h-3" />
                </button>
              </Badge>
            ))}
          </div>
          <div className="flex gap-2">
            {['Punjabi', 'Arabic', 'Hindi'].map((lang) => (
              !selectedLanguages.includes(lang) && (
                <button
                  key={lang}
                  onClick={() => toggleLanguage(lang)}
                  className="px-3 py-1.5 text-sm border border-gray-300 rounded-lg text-[#6B7280] hover:border-[#059669] hover:text-[#059669] transition-colors"
                >
                  + {lang}
                </button>
              )
            ))}
          </div>
        </div>

        <div className="pt-6 border-t border-gray-200">
          <Button className="bg-[#059669] text-white hover:bg-[#047857]">
            Update profile
          </Button>
        </div>
      </SettingSection>

      {/* Professional Credentials */}
      <SettingSection title="Professional Credentials" description="Manage your certifications and qualifications">
        <div className="space-y-4">
          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Medical Degree
            </label>
            <div className="flex gap-3">
              <Input
                type="text"
                defaultValue="MBBS, University of Health Sciences"
                onChange={onChangesMade}
                className="flex-1"
              />
              <Button variant="outline" className="border-[#059669] text-[#059669]">
                <Upload className="w-4 h-4 mr-2" />
                Upload Certificate
              </Button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-[#1F2937] mb-2 block">
              Certifications
            </label>
            <div className="space-y-2 mb-3">
              <div className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
                <span className="text-sm text-[#1F2937]">Board Certified in Pulmonology (2018)</span>
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                  Remove
                </Button>
              </div>
              <div className="flex items-center justify-between p-3 bg-[#F8F9FA] rounded-lg">
                <span className="text-sm text-[#1F2937]">Advanced Cardiac Life Support (ACLS)</span>
                <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600">
                  Remove
                </Button>
              </div>
            </div>
            <Button variant="outline" size="sm">
              + Add certification
            </Button>
          </div>
        </div>
      </SettingSection>
    </div>
  );
}
