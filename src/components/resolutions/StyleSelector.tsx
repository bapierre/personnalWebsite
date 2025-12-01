import React from 'react';

export const themes = [
  {
    name: 'Default',
    gradientFrom: '#6b21a8',
    gradientTo: '#312e81',
  },
  {
    name: 'Sunrise',
    gradientFrom: '#f97316',
    gradientTo: '#facc15',
  },
  {
    name: 'Ocean',
    gradientFrom: '#14b8a6',
    gradientTo: '#2563eb',
  },
  {
    name: 'Sunset',
    gradientFrom: '#ef4444',
    gradientTo: '#f97316',
  },
  {
    name: 'Silver',
    gradientFrom: '#E5E7EB',
    gradientTo: '#9CA3AF',
  },
  {
    name: 'Onyx',
    gradientFrom: '#1F2937',
    gradientTo: '#111827',
  },
];

export type Theme = typeof themes[0];

interface StyleSelectorProps {
  selectedTheme: Theme;
  onThemeChange: (theme: Theme) => void;
}

const StyleSelector: React.FC<StyleSelectorProps> = ({ selectedTheme, onThemeChange }) => {
  return (
    <div>
      <label className="block text-sm font-medium my-2">Or pick a gradient theme:</label>
      <div className="flex justify-center gap-3">
        {themes.map((theme) => (
          <button
            key={theme.name}
            onClick={() => onThemeChange(theme)}
            className={`w-12 h-12 rounded-full border-2 transition-transform duration-200 ${
              selectedTheme.name === theme.name ? 'border-white scale-110' : 'border-transparent'
            }`}
          >
            <div 
              className="w-full h-full rounded-full"
              style={{ backgroundImage: `linear-gradient(to right, ${theme.gradientFrom}, ${theme.gradientTo})` }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default StyleSelector;
