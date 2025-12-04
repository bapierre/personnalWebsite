import { themes, Theme } from './StyleSelector';
import { fontOptions } from '@/app/resolutions/constants';

export interface Preset {
  name: string;
  font: typeof fontOptions[0];
  goalTextColor: string;
  bgColor: string;
  frameColor: string;
  frameBorderColor: string;
  theme: Theme;
  backgroundType: 'solid' | 'gradient';
}

export const stylePresets: Preset[] = [
  {
    name: 'Midnight',
    font: fontOptions[1], // Sans-Serif
    goalTextColor: '#FFFFFF',
    bgColor: '#111827',
    frameColor: 'rgba(255, 255, 255, 0.05)',
    frameBorderColor: 'rgba(255, 255, 255, 0.1)',
    theme: themes[0], // Default
    backgroundType: 'gradient',
  },
  {
    name: 'Sunrise',
    font: fontOptions[2], // Serif
    goalTextColor: '#1F2937',
    bgColor: '#FDBA74',
    frameColor: 'rgba(255, 255, 255, 0.2)',
    frameBorderColor: 'rgba(255, 255, 255, 0.3)',
    theme: themes[1], // Sunrise
    backgroundType: 'gradient',
  },
  {
    name: 'Ocean',
    font: fontOptions[1], // Sans-Serif
    goalTextColor: '#FFFFFF',
    bgColor: '#0369A1',
    frameColor: 'rgba(255, 255, 255, 0.1)',
    frameBorderColor: 'rgba(255, 255, 255, 0.2)',
    theme: themes[2], // Ocean
    backgroundType: 'gradient',
  },
  {
    name: 'Silver',
    font: fontOptions[1], // Sans-Serif
    goalTextColor: '#111827', // Dark text for contrast
    bgColor: '#D1D5DB',
    frameColor: 'rgba(255, 255, 255, 0.4)',
    frameBorderColor: 'rgba(255, 255, 255, 0.6)',
    theme: themes[4], // Silver
    backgroundType: 'gradient',
  },
  {
    name: 'Onyx',
    font: fontOptions[3], // Monospace
    goalTextColor: '#FFFFFF',
    bgColor: '#1F2937',
    frameColor: 'rgba(0, 0, 0, 0.2)',
    frameBorderColor: 'rgba(255, 255, 255, 0.1)',
    theme: themes[5], // Onyx
    backgroundType: 'gradient',
  },
  {
    name: 'Sunset',
    font: fontOptions[0], // Default
    goalTextColor: '#FFFFFF',
    bgColor: '#DC2626',
    frameColor: 'rgba(255, 255, 255, 0.15)',
    frameBorderColor: 'rgba(255, 255, 255, 0.25)',
    theme: themes[3], // Sunset
    backgroundType: 'gradient',
  },
  {
    name: 'Forest',
    font: fontOptions[2], // Serif
    goalTextColor: '#FFFFFF',
    bgColor: '#047857',
    frameColor: 'rgba(255, 255, 255, 0.1)',
    frameBorderColor: 'rgba(255, 255, 255, 0.2)',
    theme: themes[2], // Ocean (teal-blue, closest to forest)
    backgroundType: 'solid',
  },
  {
    name: 'Coral',
    font: fontOptions[1], // Sans-Serif
    goalTextColor: '#1F2937',
    bgColor: '#FDA4AF',
    frameColor: 'rgba(255, 255, 255, 0.3)',
    frameBorderColor: 'rgba(255, 255, 255, 0.4)',
    theme: themes[1], // Sunrise
    backgroundType: 'solid',
  },
  {
    name: 'Neon',
    font: fontOptions[3], // Monospace
    goalTextColor: '#10B981',
    bgColor: '#000000',
    frameColor: 'rgba(16, 185, 129, 0.1)',
    frameBorderColor: 'rgba(16, 185, 129, 0.4)',
    theme: themes[0], // Default
    backgroundType: 'solid',
  },
];
