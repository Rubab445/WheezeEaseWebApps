import { useState } from 'react';
import { X, FileQuestion, CheckCircle, Lightbulb } from 'lucide-react';
import { Button } from '../../ui/button';
import { Input } from '../../ui/input';
import { Textarea } from '../../ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../../ui/select';

interface RequestContentModalProps {
  onClose: () => void;
}

export function RequestContentModal({ onClose }: RequestContentModalProps) {
  const [contentType, setContentType] = useState('');
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');
  const [priority, setPriority] = useState('');
  const [preferredFormat, setPreferredFormat] = useState('');
  const [targetAudience, setTargetAudience] = useState('');
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  const canSubmit = contentType && topic && description && priority;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-[#059669] to-[#10B981] rounded-lg flex items-center justify-center">
              <FileQuestion className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#1F2937]">Request Content</h2>
              <p className="text-sm text-[#6B7280]">
                {showSuccess ? 'Request submitted successfully!' : 'Tell us what educational content you need'}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-5 h-5 text-[#6B7280]" />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6">
          {showSuccess ? (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <CheckCircle className="w-10 h-10 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-[#1F2937] mb-2">Request Submitted!</h3>
              <p className="text-[#6B7280] text-center max-w-md">
                Thank you for your request. Our content team will review it and notify you when the resource is available.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Suggestion Box */}
              <div className="bg-blue-50 border border-blue-200 rounded-xl p-4">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="text-sm font-bold text-blue-900 mb-1">Helpful Tip</h4>
                    <p className="text-sm text-blue-700">
                      Be specific about your needs. Include details about the condition, treatment area, or patient population you're addressing.
                    </p>
                  </div>
                </div>
              </div>

              {/* Content Type */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Content Type *
                </label>
                <Select value={contentType} onValueChange={setContentType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select content type..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="clinical">Clinical Guideline</SelectItem>
                    <SelectItem value="treatment">Treatment Protocol</SelectItem>
                    <SelectItem value="research">Research Summary</SelectItem>
                    <SelectItem value="patient-education">Patient Education Material</SelectItem>
                    <SelectItem value="case-study">Case Study</SelectItem>
                    <SelectItem value="video">Video Tutorial</SelectItem>
                    <SelectItem value="infographic">Infographic</SelectItem>
                    <SelectItem value="checklist">Checklist/Template</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Topic/Subject */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Topic / Subject *
                </label>
                <Input
                  type="text"
                  placeholder="e.g., Managing Exercise-Induced Asthma in Athletes"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                />
              </div>

              {/* Description */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Detailed Description *
                </label>
                <Textarea
                  placeholder="Describe what content you need, why it's important, and how it will be used. Include specific areas you'd like covered..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={5}
                  className="resize-none"
                />
                <p className="text-xs text-[#6B7280] mt-1">
                  {description.length} characters
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {/* Priority */}
                <div>
                  <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                    Priority *
                  </label>
                  <div className="space-y-2">
                    <button
                      type="button"
                      onClick={() => setPriority('urgent')}
                      className={`w-full px-4 py-2.5 border-2 rounded-lg text-sm font-medium transition-all ${
                        priority === 'urgent'
                          ? 'border-red-500 bg-red-50 text-red-700'
                          : 'border-gray-200 text-[#6B7280] hover:border-red-300'
                      }`}
                    >
                      <div className="text-left">
                        <div className="font-bold">Urgent</div>
                        <div className="text-xs opacity-75">Needed ASAP</div>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPriority('high')}
                      className={`w-full px-4 py-2.5 border-2 rounded-lg text-sm font-medium transition-all ${
                        priority === 'high'
                          ? 'border-orange-500 bg-orange-50 text-orange-700'
                          : 'border-gray-200 text-[#6B7280] hover:border-orange-300'
                      }`}
                    >
                      <div className="text-left">
                        <div className="font-bold">High</div>
                        <div className="text-xs opacity-75">Within 1 week</div>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPriority('normal')}
                      className={`w-full px-4 py-2.5 border-2 rounded-lg text-sm font-medium transition-all ${
                        priority === 'normal'
                          ? 'border-blue-500 bg-blue-50 text-blue-700'
                          : 'border-gray-200 text-[#6B7280] hover:border-blue-300'
                      }`}
                    >
                      <div className="text-left">
                        <div className="font-bold">Normal</div>
                        <div className="text-xs opacity-75">Within 2-4 weeks</div>
                      </div>
                    </button>
                    <button
                      type="button"
                      onClick={() => setPriority('low')}
                      className={`w-full px-4 py-2.5 border-2 rounded-lg text-sm font-medium transition-all ${
                        priority === 'low'
                          ? 'border-gray-500 bg-gray-50 text-gray-700'
                          : 'border-gray-200 text-[#6B7280] hover:border-gray-400'
                      }`}
                    >
                      <div className="text-left">
                        <div className="font-bold">Low</div>
                        <div className="text-xs opacity-75">No rush</div>
                      </div>
                    </button>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-6">
                  {/* Preferred Format */}
                  <div>
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      Preferred Format (Optional)
                    </label>
                    <Select value={preferredFormat} onValueChange={setPreferredFormat}>
                      <SelectTrigger>
                        <SelectValue placeholder="Any format" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="pdf">PDF Document</SelectItem>
                        <SelectItem value="video">Video</SelectItem>
                        <SelectItem value="infographic">Infographic</SelectItem>
                        <SelectItem value="article">Article/Blog</SelectItem>
                        <SelectItem value="slides">Slide Deck</SelectItem>
                        <SelectItem value="interactive">Interactive Tool</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Target Audience */}
                  <div>
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      Target Audience (Optional)
                    </label>
                    <Select value={targetAudience} onValueChange={setTargetAudience}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select audience..." />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="healthcare-providers">Healthcare Providers</SelectItem>
                        <SelectItem value="patients-general">Patients (General)</SelectItem>
                        <SelectItem value="patients-pediatric">Patients (Pediatric)</SelectItem>
                        <SelectItem value="patients-adult">Patients (Adult)</SelectItem>
                        <SelectItem value="caregivers">Caregivers/Family</SelectItem>
                        <SelectItem value="both">Both Providers & Patients</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Language Preference */}
                  <div>
                    <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                      Language (Optional)
                    </label>
                    <Select defaultValue="english">
                      <SelectTrigger>
                        <SelectValue />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="english">English</SelectItem>
                        <SelectItem value="urdu">Urdu</SelectItem>
                        <SelectItem value="bilingual">Bilingual (English/Urdu)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              </div>

              {/* Additional Comments */}
              <div>
                <label className="text-sm font-medium text-[#1F2937] mb-2 block">
                  Additional Comments (Optional)
                </label>
                <Textarea
                  placeholder="Any other details, references, or requirements..."
                  rows={3}
                  className="resize-none"
                />
              </div>

              {/* Footer */}
              <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                <p className="text-xs text-[#6B7280]">* Required fields</p>
                <div className="flex items-center gap-3">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={!canSubmit}
                    className="bg-gradient-to-r from-[#059669] to-[#10B981] text-white hover:opacity-90"
                  >
                    Submit Request
                  </Button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
