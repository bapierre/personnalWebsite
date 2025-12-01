'use client';

import { useState } from 'react';
import SnapshotCard from '../../components/resolutions/SnapshotCard';
import { toPng } from 'html-to-image';
import StyleControls from '../../components/resolutions/StyleControls';
import { fontOptions } from './constants';
import { themes, Theme } from '../../components/resolutions/StyleSelector';
import {
  Panel,
  PanelGroup,
  PanelResizeHandle,
} from "react-resizable-panels";
import Link from 'next/link';

import { Preset } from '@/components/resolutions/presets';

const ResolutionsPage = () => {
  const [goals, setGoals] = useState<string[]>([
    "Finish my side project",
    "Read 12 books",
    "Run a half-marathon",
    "Learn a new language",
    "Travel to a new country"
  ]);
  const [currentGoal, setCurrentGoal] = useState('');
  const [selectedFont, setSelectedFont] = useState(fontOptions[0]);
  const [goalTextColor, setGoalTextColor] = useState('#FFFFFF');
  const [bgColor, setBgColor] = useState('#1A202C');
  const [frameColor, setFrameColor] = useState('rgba(255, 255, 255, 0.05)');
  const [frameBorderColor, setFrameBorderColor] = useState('rgba(255, 255, 255, 0.1)');
  const [selectedTheme, setSelectedTheme] = useState<Theme>(themes[0]);
  const [backgroundType, setBackgroundType] = useState<'solid' | 'gradient' | 'image'>('gradient');
  const [backgroundImages, setBackgroundImages] = useState<{ [key: number]: string } | undefined>();
  const [userImage, setUserImage] = useState<string | null>(null);

  const handleAddGoal = (e: React.FormEvent) => {
    e.preventDefault();
    if (currentGoal.trim() && goals.length < 5) {
      setGoals([...goals, currentGoal.trim()]);
      setCurrentGoal('');
    }
  };

  const handleDeleteGoal = (index: number) => {
    setGoals(goals.filter((_, i) => i !== index));
  };

  const handlePresetSelect = (preset: Preset) => {
    setSelectedFont(preset.font);
    setGoalTextColor(preset.goalTextColor);
    setBgColor(preset.bgColor);
    setFrameColor(preset.frameColor);
    setFrameBorderColor(preset.frameBorderColor);
    setSelectedTheme(preset.theme);
    setBackgroundType(preset.backgroundType);
    if (preset.backgroundType === 'image' && preset.backgroundImages) {
      setBackgroundImages(preset.backgroundImages);
    } else {
      setBackgroundImages(undefined);
    }
  };

  const handleDownload = () => {
    const node = document.getElementById('snapshot-card-container');
    if (!node) return;

    const exportToPng = () => {
      toPng(node, { 
          cacheBust: true, 
          pixelRatio: 2,
          width: node.clientWidth,
          height: node.clientHeight,
        })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'my-resolutions.png';
          link.href = dataUrl;
          link.click();
        })
        .catch((err) => {
          console.error('Oops, something went wrong!', err);
        });
    };

    if (backgroundImage) {
      const img = new Image();
      img.onload = exportToPng;
      img.onerror = (err) => {
        console.error('Failed to load background image for export', err);
        exportToPng(); // Try to export anyway
      };
      img.src = backgroundImage;
    } else {
      exportToPng();
    }
  };
  
  const handleUserImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setUserImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const backgroundImage = backgroundImages?.[goals.length]

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="absolute top-4 right-4 z-10">
        <Link href="/" passHref>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded-lg transition-colors">
            ← a cool portfolio
          </button>
        </Link>
      </div>

      <PanelGroup direction="horizontal" className="min-h-screen">
        <Panel defaultSize={30} minSize={20} className="p-4 lg:p-8 !overflow-y-auto">
          <StyleControls
            goals={goals}
            currentGoal={currentGoal}
            onAddGoal={handleAddGoal}
            onGoalChange={(e) => setCurrentGoal(e.target.value)}
            onDeleteGoal={handleDeleteGoal}
            onDownload={handleDownload}
            onPresetSelect={handlePresetSelect}
            selectedFont={selectedFont}
            onFontChange={setSelectedFont}
            goalTextColor={goalTextColor}
            onGoalTextColorChange={setGoalTextColor}
            bgColor={bgColor}
            onBgColorChange={(color) => {
              setBgColor(color);
              setBackgroundType('solid');
              setBackgroundImages(undefined);
            }}
            frameColor={frameColor}
            onFrameColorChange={setFrameColor}
            frameBorderColor={frameBorderColor}
            onFrameBorderColorChange={setFrameBorderColor}
            selectedTheme={selectedTheme}
            onThemeChange={(theme) => {
              setSelectedTheme(theme);
              setBackgroundType('gradient');
              setBackgroundImages(undefined);
            }}
            backgroundType={backgroundType}
            onUserImageUpload={handleUserImageUpload}
          />
        </Panel>
        <PanelResizeHandle className="w-2 bg-gray-700 hover:bg-purple-600 active:bg-purple-500 transition-colors" />
        <Panel>
          <div className="h-full flex items-center justify-center p-4 bg-gray-800">
            <SnapshotCard
              goals={goals}
              font={selectedFont}
              goalTextColor={goalTextColor}
              bgColor={bgColor}
              frameColor={frameColor}
              frameBorderColor={frameBorderColor}
              theme={selectedTheme}
              backgroundType={backgroundType}
              backgroundImage={backgroundImage}
              userImage={userImage}
            />
          </div>
        </Panel>
      </PanelGroup>
    </div>
  );
};

export default ResolutionsPage;

