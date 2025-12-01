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
  backgroundType: 'solid' | 'gradient' | 'image';
  backgroundImages?: { [key: number]: string };
}

export const stylePresets: Preset[] = [
  {
    name: 'Midnight',
    font: fontOptions[1], // Sans-Serif
    goalTextColor: '#FFFFFF',
    bgColor: '#111827',
    frameColor: 'rgba(255, 255, 255, 0.15)',
    frameBorderColor: 'rgba(255, 255, 255, 0.2)',
    theme: themes[0], // Default
    backgroundType: 'gradient',
  },
  {
    name: 'Bento',
    font: fontOptions[0], // Titles
    goalTextColor: '#FFFFFF',
    bgColor: '#1F2937',
    frameColor: 'rgba(255, 255, 255, 0.3)',
    frameBorderColor: 'rgba(255, 255, 255, 0.4)',
    theme: themes[0], // Default
    backgroundType: 'image',
    backgroundImages: {
      3: '/assets/bento-box-3.png',
      4: '/assets/bento-box-4.png',
      5: '/assets/bento-box-5.png',
    },
  },
  {
    name: 'Sunrise',
    font: fontOptions[2], // Serif
    goalTextColor: '#1F2937',
    bgColor: '#FDBA74',
    frameColor: 'rgba(255, 255, 255, 0.3)',
    frameBorderColor: 'rgba(255, 255, 255, 0.4)',
    theme: themes[1], // Sunrise
    backgroundType: 'gradient',
  },
  {
    name: 'Ocean',
    font: fontOptions[1], // Sans-Serif
    goalTextColor: '#FFFFFF',
    bgColor: '#0369A1',
    frameColor: 'rgba(255, 255, 255, 0.2)',
    frameBorderColor: 'rgba(255, 255, 255, 0.3)',
    theme: themes[2], // Ocean
    backgroundType: 'gradient',
  },
  {
    name: 'Silver',
    font: fontOptions[1], // Sans-Serif
    goalTextColor: '#111827', // Dark text for contrast
    bgColor: '#D1D5DB',
    frameColor: 'rgba(255, 255, 255, 0.5)',
    frameBorderColor: 'rgba(255, 255, 255, 0.7)',
    theme: themes[4], // Silver
    backgroundType: 'gradient',
  },
  {
    name: 'Onyx',
    font: fontOptions[3], // Monospace
    goalTextColor: '#FFFFFF',
    bgColor: '#1F2937',
    frameColor: 'rgba(0, 0, 0, 0.3)',
    frameBorderColor: 'rgba(255, 255, 255, 0.2)',
    theme: themes[5], // Onyx
    backgroundType: 'gradient',
  },
];
