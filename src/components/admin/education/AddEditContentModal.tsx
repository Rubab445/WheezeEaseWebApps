import { X, Upload, Image as ImageIcon, Bold, Italic, List, Link as LinkIcon, Calendar, Bell } from 'lucide-react';

interface AddEditContentModalProps {
  open: boolean;
  onClose: () => void;
}

export function AddEditContentModal({ open, onClose }: AddEditContentModalProps) {
  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] max-h-[90vh] bg-[#0A0F1E] border border-white/10 rounded-2xl shadow-2xl z-50 overflow-hidden flex flex-col">
        {/* Header */}
        <div className="bg-[#0E1629]/60 backdrop-blur-xl border-b border-white/10 p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl text-white">Add New Content</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-5 h-5 text-gray-400" />
            </button>
          </div>
        </div>

        {/* Form Content - Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6">
          {/* Content Details Section */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-white mb-4">Content Details</h3>
            
            <div className="space-y-4">
              {/* Title */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Title *</label>
                <input
                  type="text"
                  placeholder="Enter content title..."
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                />
              </div>

              {/* Type and Category */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Content Type *</label>
                  <select className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50">
                    <option value="">Select type...</option>
                    <option value="Article">Article</option>
                    <option value="Video">Video</option>
                    <option value="Infographic">Infographic</option>
                    <option value="Quick Tip">Quick Tip</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm text-gray-400 mb-2 block">Category *</label>
                  <select className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50">
                    <option value="">Select category...</option>
                    <option value="Asthma Basics">Asthma Basics</option>
                    <option value="Trigger Management">Trigger Management</option>
                    <option value="Medication Guide">Medication Guide</option>
                    <option value="Lifestyle Tips">Lifestyle Tips</option>
                    <option value="Emergency Response">Emergency Response</option>
                    <option value="Environmental Factors">Environmental Factors</option>
                    <option value="Diet & Nutrition">Diet & Nutrition</option>
                  </select>
                </div>
              </div>

              {/* Thumbnail Upload */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Thumbnail Image</label>
                <div className="border-2 border-dashed border-white/10 rounded-xl p-8 text-center hover:border-purple-500/30 transition-all cursor-pointer bg-white/5">
                  <Upload className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-white mb-1">Drop image here or click to upload</p>
                  <p className="text-xs text-gray-500">Recommended: 1200x675px (16:9 ratio)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content Body Section */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-white mb-4">Content Body</h3>
            
            {/* Rich Text Editor Toolbar */}
            <div className="flex items-center gap-2 p-2 bg-white/5 border border-white/10 rounded-lg mb-3">
              <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Bold">
                <Bold className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Italic">
                <Italic className="w-4 h-4 text-gray-400" />
              </button>
              <div className="w-px h-6 bg-white/10" />
              <button className="p-2 hover:bg-white/10 rounded transition-colors" title="List">
                <List className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Link">
                <LinkIcon className="w-4 h-4 text-gray-400" />
              </button>
              <button className="p-2 hover:bg-white/10 rounded transition-colors" title="Image">
                <ImageIcon className="w-4 h-4 text-gray-400" />
              </button>
            </div>

            {/* Editor Area */}
            <textarea
              placeholder="Write your content here..."
              rows={10}
              className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none"
            />
          </div>

          {/* SEO & Metadata Section */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-white mb-4">SEO & Metadata</h3>
            
            <div className="space-y-4">
              {/* Excerpt */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Short Description / Excerpt</label>
                <textarea
                  placeholder="Brief summary (max 150 characters)..."
                  rows={3}
                  maxLength={150}
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all resize-none"
                />
                <p className="text-xs text-gray-500 mt-1">0 / 150 characters</p>
              </div>

              {/* Tags */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Tags</label>
                <input
                  type="text"
                  placeholder="Enter tags separated by commas..."
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all"
                />
              </div>

              {/* Target Audience */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block">Target Audience</label>
                <select className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50">
                  <option value="all">All Patients</option>
                  <option value="high-risk">High-risk Patients</option>
                  <option value="parents">Parents & Caregivers</option>
                </select>
              </div>
            </div>
          </div>

          {/* Settings Section */}
          <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-xl">
            <h3 className="text-sm text-white mb-4">Publishing Settings</h3>
            
            <div className="space-y-4">
              {/* Featured Content Toggle */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-sm text-white">Featured Content</p>
                  <p className="text-xs text-gray-500">Show on homepage</p>
                </div>
                <button className="relative w-12 h-6 rounded-full bg-white/10 transition-all">
                  <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform" />
                </button>
              </div>

              {/* Allow Comments Toggle */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div>
                  <p className="text-sm text-white">Allow Comments</p>
                  <p className="text-xs text-gray-500">Enable patient feedback</p>
                </div>
                <button className="relative w-12 h-6 rounded-full bg-purple-500 transition-all">
                  <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform" />
                </button>
              </div>

              {/* Push Notification Toggle */}
              <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                <div className="flex items-center gap-2">
                  <Bell className="w-4 h-4 text-gray-400" />
                  <div>
                    <p className="text-sm text-white">Send Push Notification</p>
                    <p className="text-xs text-gray-500">Notify patients on publish</p>
                  </div>
                </div>
                <button className="relative w-12 h-6 rounded-full bg-white/10 transition-all">
                  <div className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full transition-transform" />
                </button>
              </div>

              {/* Schedule Publish */}
              <div>
                <label className="text-sm text-gray-400 mb-2 block flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  Schedule Publish (Optional)
                </label>
                <input
                  type="datetime-local"
                  className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white focus:outline-none focus:border-purple-500/50"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="bg-[#0E1629]/60 backdrop-blur-xl border-t border-white/10 p-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-lg text-gray-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <div className="flex items-center gap-3">
              <button className="px-5 py-2.5 rounded-lg border border-white/10 text-gray-300 hover:bg-white/5 transition-all">
                Save as Draft
              </button>
              <button className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/30 transition-all">
                Publish Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
