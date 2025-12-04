'use client';

import React from 'react';
import { stylePresets, Preset } from './presets';

interface PresetSelectorProps {
  onSelect: (preset: Preset) => void;
}

const PresetSelector: React.FC<PresetSelectorProps> = ({ onSelect }) => {
  const getBackgroundStyle = (preset: Preset): React.CSSProperties => {
    if (preset.backgroundType === 'gradient') {
      return {
        backgroundImage: `radial-gradient(at top left, ${preset.theme.gradientFrom}, ${preset.theme.gradientTo})`,
      };
    }
    return {
      backgroundColor: preset.bgColor,
    };
  };

  return (
    <div className="grid grid-cols-3 gap-2">
      {stylePresets.map((preset) => (
        <button
          key={preset.name}
          onClick={() => onSelect(preset)}
          className="aspect-square rounded-lg transition-transform hover:scale-105"
          style={getBackgroundStyle(preset)}
        >
          <span className="font-semibold text-white text-sm bg-black/30 rounded-full px-2 py-1">
            {preset.name}
          </span>
        </button>
      ))}
    </div>
  );
};

export default PresetSelector;
