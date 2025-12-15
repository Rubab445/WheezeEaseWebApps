import { X, Upload, Link as LinkIcon } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

interface UploadResourceModalProps {
  onClose: () => void;
}

export function UploadResourceModal({ onClose }: UploadResourceModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-8">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-8 py-6 border-b border-gray-200 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#1F2937]">Upload Resource</h2>
            <p className="text-sm text-[#6B7280] mt-1">Add new educational content to the library</p>
          </div>
          
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-[#6B7280]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-8">
          <form className="space-y-6">
            {/* Title */}
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Resource Title <span className="text-red-500">*</span>
              </label>
              <Input
                type="text"
                placeholder="Enter resource title..."
                className="w-full"
              />
            </div>

            {/* Description */}
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Description <span className="text-red-500">*</span>
              </label>
              <Textarea
                placeholder="Provide a brief description of the resource..."
                rows={4}
                className="w-full resize-none"
              />
            </div>

            {/* Category and Content Type */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Category <span className="text-red-500">*</span>
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clinical">Clinical Guideline</SelectItem>
                    <SelectItem value="treatment">Treatment Protocol</SelectItem>
                    <SelectItem value="research">Research & Studies</SelectItem>
                    <SelectItem value="patient-education">Patient Education</SelectItem>
                    <SelectItem value="medication">Medication Information</SelectItem>
                    <SelectItem value="environmental">Environmental Triggers</SelectItem>
                    <SelectItem value="emergency">Emergency Procedures</SelectItem>
                    <SelectItem value="case-studies">Case Studies</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Content Type <span className="text-red-500">*</span>
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="article">Article</SelectItem>
                    <SelectItem value="pdf">PDF Document</SelectItem>
                    <SelectItem value="video">Video</SelectItem>
                    <SelectItem value="infographic">Infographic</SelectItem>
                    <SelectItem value="presentation">Presentation</SelectItem>
                    <SelectItem value="guideline">Guideline</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* File Upload or URL */}
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Upload File or Provide URL <span className="text-red-500">*</span>
              </label>
              
              {/* File Upload */}
              <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-[#059669] transition-colors cursor-pointer mb-3">
                <Upload className="w-12 h-12 text-[#6B7280] mx-auto mb-3" />
                <p className="text-sm font-medium text-[#1F2937] mb-1">
                  Click to upload or drag and drop
                </p>
                <p className="text-xs text-[#6B7280]">
                  PDF, DOC, PPT, MP4, or Images (max. 50MB)
                </p>
              </div>

              {/* Or URL */}
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-xs">
                  <span className="bg-white px-2 text-[#6B7280]">OR</span>
                </div>
              </div>

              <div className="mt-3">
                <Input
                  type="url"
                  placeholder="https://example.com/resource"
                  className="w-full"
                />
              </div>
            </div>

            {/* Tags */}
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Tags
              </label>
              <Input
                type="text"
                placeholder="Enter tags separated by commas (e.g., asthma, treatment, pediatric)"
                className="w-full"
              />
            </div>

            {/* Target Audience and Language */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Target Audience
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select audience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="doctors">Doctors (clinical)</SelectItem>
                    <SelectItem value="patients">Patients (education)</SelectItem>
                    <SelectItem value="both">Both</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Language
                </label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="english">English</SelectItem>
                    <SelectItem value="urdu">Urdu</SelectItem>
                    <SelectItem value="both">Both (Multilingual)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Difficulty Level */}
            <div>
              <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                Difficulty Level
              </label>
              <div className="flex gap-3">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="difficulty"
                    value="beginner"
                    className="w-4 h-4 text-[#059669] focus:ring-[#059669]"
                  />
                  <span className="text-sm text-[#6B7280]">Beginner</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="difficulty"
                    value="intermediate"
                    className="w-4 h-4 text-[#059669] focus:ring-[#059669]"
                  />
                  <span className="text-sm text-[#6B7280]">Intermediate</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer">
                  <input
                    type="radio"
                    name="difficulty"
                    value="advanced"
                    className="w-4 h-4 text-[#059669] focus:ring-[#059669]"
                  />
                  <span className="text-sm text-[#6B7280]">Advanced</span>
                </label>
              </div>
            </div>
          </form>
        </div>

        {/* Footer */}
        <div className="px-8 py-4 border-t border-gray-200 flex items-center justify-end gap-3 bg-[#F8F9FA]">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button className="bg-gradient-to-r from-[#059669] to-[#10B981] text-white hover:opacity-90">
            Submit for review
          </Button>
        </div>
      </div>
    </div>
  );
}
