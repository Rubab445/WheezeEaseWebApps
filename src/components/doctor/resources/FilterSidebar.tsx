import { useState } from 'react';
import { Filter } from 'lucide-react';

export function FilterSidebar() {
  const [selectedContentTypes, setSelectedContentTypes] = useState<string[]>([]);
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);
  const [selectedAudience, setSelectedAudience] = useState<string>('');
  const [selectedLevel, setSelectedLevel] = useState<string>('');
  const [selectedDateRange, setSelectedDateRange] = useState<string>('');
  const [selectedLanguage, setSelectedLanguage] = useState<string[]>([]);

  const toggleContentType = (type: string) => {
    setSelectedContentTypes((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    );
  };

  const toggleTopic = (topic: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topic) ? prev.filter((t) => t !== topic) : [...prev, topic]
    );
  };

  const toggleLanguage = (lang: string) => {
    setSelectedLanguage((prev) =>
      prev.includes(lang) ? prev.filter((l) => l !== lang) : [...prev, lang]
    );
  };

  const clearFilters = () => {
    setSelectedContentTypes([]);
    setSelectedTopics([]);
    setSelectedAudience('');
    setSelectedLevel('');
    setSelectedDateRange('');
    setSelectedLanguage([]);
  };

  return (
    <div className="bg-white rounded-xl p-6 border border-gray-200 shadow-sm sticky top-0">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-[#059669]" />
          <h3 className="font-bold text-[#1F2937]">Filter Resources</h3>
        </div>
      </div>

      <div className="space-y-6">
        {/* Content Type */}
        <div>
          <h4 className="text-sm font-medium text-[#1F2937] mb-3">Content Type</h4>
          <div className="space-y-2">
            {['Articles', 'PDFs', 'Videos', 'Infographics', 'Presentations', 'Guidelines'].map((type) => (
              <label key={type} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedContentTypes.includes(type)}
                  onChange={() => toggleContentType(type)}
                  className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <span className="text-sm text-[#6B7280] group-hover:text-[#1F2937]">{type}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Topic */}
        <div>
          <h4 className="text-sm font-medium text-[#1F2937] mb-3">Topic</h4>
          <div className="space-y-2">
            {[
              'Asthma Management',
              'Allergy Treatment',
              'Pediatric Care',
              'Environmental Factors',
              'Medication Therapy',
              'Emergency Response',
              'Patient Counseling',
            ].map((topic) => (
              <label key={topic} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedTopics.includes(topic)}
                  onChange={() => toggleTopic(topic)}
                  className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <span className="text-sm text-[#6B7280] group-hover:text-[#1F2937]">{topic}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Audience */}
        <div>
          <h4 className="text-sm font-medium text-[#1F2937] mb-3">Audience</h4>
          <div className="space-y-2">
            {['Doctors (clinical)', 'Patients (education)', 'Both'].map((audience) => (
              <label key={audience} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="audience"
                  checked={selectedAudience === audience}
                  onChange={() => setSelectedAudience(audience)}
                  className="w-4 h-4 border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <span className="text-sm text-[#6B7280] group-hover:text-[#1F2937]">{audience}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Difficulty Level */}
        <div>
          <h4 className="text-sm font-medium text-[#1F2937] mb-3">Difficulty Level</h4>
          <div className="space-y-2">
            {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
              <label key={level} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="level"
                  checked={selectedLevel === level}
                  onChange={() => setSelectedLevel(level)}
                  className="w-4 h-4 border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <span className="text-sm text-[#6B7280] group-hover:text-[#1F2937]">{level}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Date Added */}
        <div>
          <h4 className="text-sm font-medium text-[#1F2937] mb-3">Date Added</h4>
          <div className="space-y-2">
            {['Last 7 days', 'Last 30 days', 'Last 6 months', 'Last year', 'All time'].map((range) => (
              <label key={range} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="radio"
                  name="dateRange"
                  checked={selectedDateRange === range}
                  onChange={() => setSelectedDateRange(range)}
                  className="w-4 h-4 border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <span className="text-sm text-[#6B7280] group-hover:text-[#1F2937]">{range}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Language */}
        <div>
          <h4 className="text-sm font-medium text-[#1F2937] mb-3">Language</h4>
          <div className="space-y-2">
            {['English', 'Urdu', 'Both'].map((lang) => (
              <label key={lang} className="flex items-center gap-2 cursor-pointer group">
                <input
                  type="checkbox"
                  checked={selectedLanguage.includes(lang)}
                  onChange={() => toggleLanguage(lang)}
                  className="w-4 h-4 rounded border-gray-300 text-[#059669] focus:ring-[#059669]"
                />
                <span className="text-sm text-[#6B7280] group-hover:text-[#1F2937]">{lang}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Clear Filters */}
        <button
          onClick={clearFilters}
          className="w-full text-sm font-medium text-[#059669] hover:text-[#047857] py-2 rounded-lg hover:bg-[#059669]/5 transition-colors"
        >
          Clear filters
        </button>
      </div>
    </div>
  );
}
