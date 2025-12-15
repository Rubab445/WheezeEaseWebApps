import { Palette, Sun, Moon, Monitor, RotateCcw } from 'lucide-react';
import { useState } from 'react';

interface AppearanceSectionProps {
  onChange: () => void;
}

const accentColors = [
  { name: 'Purple', value: '#A855F7', active: true },
  { name: 'Blue', value: '#3B82F6', active: false },
  { name: 'Cyan', value: '#06B6D4', active: false },
  { name: 'Pink', value: '#EC4899', active: false },
  { name: 'Green', value: '#10B981', active: false },
  { name: 'Orange', value: '#F59E0B', active: false },
];

export function AppearanceSection({ onChange }: AppearanceSectionProps) {
  const [selectedTheme, setSelectedTheme] = useState<'dark' | 'light' | 'auto'>('dark');
  const [selectedSidebar, setSelectedSidebar] = useState<'expanded' | 'collapsed' | 'auto'>('expanded');
  const [selectedColor, setSelectedColor] = useState(accentColors[0].value);

  return (
    <div className="space-y-6">
      {/* Theme Preferences Card */}
      <div className="bg-[#0E1629]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 shadow-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
            <Palette className="w-5 h-5 text-purple-400" />
          </div>
          <h2 className="text-lg text-white">Theme Preferences</h2>
        </div>
        
        <div className="space-y-6">
          {/* Theme Selection */}
          <div>
            <label className="text-sm text-gray-400 mb-3 block">Theme Mode</label>
            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => {
                  setSelectedTheme('dark');
                  onChange();
                }}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                  selectedTheme === 'dark'
                    ? 'bg-purple-500/20 border-purple-500/50 shadow-lg shadow-purple-500/20'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center ${
                  selectedTheme === 'dark' ? 'border-purple-500/50 bg-gray-900' : 'border-white/20 bg-gray-900'
                }`}>
                  <Moon className={`w-6 h-6 ${selectedTheme === 'dark' ? 'text-purple-400' : 'text-gray-500'}`} />
                </div>
                <span className={`text-sm ${selectedTheme === 'dark' ? 'text-purple-300' : 'text-gray-400'}`}>
                  Dark
                </span>
              </button>

              <button
                onClick={() => {
                  setSelectedTheme('light');
                  onChange();
                }}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                  selectedTheme === 'light'
                    ? 'bg-purple-500/20 border-purple-500/50 shadow-lg shadow-purple-500/20'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center ${
                  selectedTheme === 'light' ? 'border-purple-500/50 bg-white' : 'border-white/20 bg-white'
                }`}>
                  <Sun className={`w-6 h-6 ${selectedTheme === 'light' ? 'text-purple-500' : 'text-gray-400'}`} />
                </div>
                <span className={`text-sm ${selectedTheme === 'light' ? 'text-purple-300' : 'text-gray-400'}`}>
                  Light
                </span>
              </button>

              <button
                onClick={() => {
                  setSelectedTheme('auto');
                  onChange();
                }}
                className={`flex flex-col items-center gap-2 p-4 rounded-xl border transition-all ${
                  selectedTheme === 'auto'
                    ? 'bg-purple-500/20 border-purple-500/50 shadow-lg shadow-purple-500/20'
                    : 'bg-white/5 border-white/10 hover:bg-white/10'
                }`}
              >
                <div className={`w-12 h-12 rounded-lg border-2 flex items-center justify-center ${
                  selectedTheme === 'auto' ? 'border-purple-500/50 bg-gradient-to-br from-gray-900 to-white' : 'border-white/20 bg-gradient-to-br from-gray-900 to-white'
                }`}>
                  <Monitor className={`w-6 h-6 ${selectedTheme === 'auto' ? 'text-purple-400' : 'text-gray-500'}`} />
                </div>
                <span className={`text-sm ${selectedTheme === 'auto' ? 'text-purple-300' : 'text-gray-400'}`}>
                  Auto
                </span>
              </button>
            </div>
          </div>

          {/* Accent Color Picker */}
          <div>
            <label className="text-sm text-gray-400 mb-3 block">Accent Color</label>
            <div className="grid grid-cols-6 gap-3">
              {accentColors.map((color) => (
                <button
                  key={color.value}
                  onClick={() => {
                    setSelectedColor(color.value);
                    onChange();
                  }}
                  className={`relative w-full aspect-square rounded-xl border-2 transition-all ${
                    selectedColor === color.value
                      ? 'border-white scale-110 shadow-lg'
                      : 'border-white/20 hover:scale-105'
                  }`}
                  style={{ backgroundColor: color.value }}
                  title={color.name}
                >
                  {selectedColor === color.value && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  )}
                </button>
              ))}
            </div>
            <p className="text-xs text-gray-500 mt-2">
              Selected: <span className="text-white">{accentColors.find(c => c.value === selectedColor)?.name}</span>
            </p>
          </div>

          {/* Sidebar Style */}
          <div>
            <label className="text-sm text-gray-400 mb-3 block">Sidebar Style</label>
            <div className="grid grid-cols-3 gap-3">
              {['expanded', 'collapsed', 'auto'].map((style) => (
                <button
                  key={style}
                  onClick={() => {
                    setSelectedSidebar(style as typeof selectedSidebar);
                    onChange();
                  }}
                  className={`px-4 py-3 rounded-lg border text-sm transition-all ${
                    selectedSidebar === style
                      ? 'bg-purple-500/20 border-purple-500/50 text-purple-300'
                      : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'
                  }`}
                >
                  {style.charAt(0).toUpperCase() + style.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* Chart Animations */}
          <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
            <div>
              <p className="text-sm text-white">Chart animations</p>
              <p className="text-xs text-gray-500">Enable smooth chart transitions</p>
            </div>
            <button 
              onClick={onChange}
              className="relative w-12 h-6 rounded-full bg-purple-500 transition-all"
            >
              <div className="absolute top-1 right-1 w-4 h-4 bg-white rounded-full transition-transform" />
            </button>
          </div>

          {/* Reset to Defaults */}
          <button 
            onClick={() => {
              setSelectedTheme('dark');
              setSelectedColor(accentColors[0].value);
              setSelectedSidebar('expanded');
              onChange();
            }}
            className="flex items-center gap-2 text-sm text-purple-400 hover:text-purple-300 transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Reset to Defaults
          </button>
        </div>
      </div>
    </div>
  );
}
