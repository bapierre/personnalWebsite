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
  const [backgroundType, setBackgroundType] = useState<'solid' | 'gradient'>('gradient');
  const [xUsername, setXUsername] = useState('@');

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

  const handleMoveGoalUp = (index: number) => {
    if (index === 0) return;
    const newGoals = [...goals];
    [newGoals[index - 1], newGoals[index]] = [newGoals[index], newGoals[index - 1]];
    setGoals(newGoals);
  };

  const handleMoveGoalDown = (index: number) => {
    if (index === goals.length - 1) return;
    const newGoals = [...goals];
    [newGoals[index], newGoals[index + 1]] = [newGoals[index + 1], newGoals[index]];
    setGoals(newGoals);
  };

  const handleXUsernameChange = (value: string) => {
    // Ensure it always starts with @
    if (!value.startsWith('@')) {
      setXUsername('@' + value);
    } else {
      setXUsername(value);
    }
  };

  const handlePresetSelect = (preset: Preset) => {
    setSelectedFont(preset.font);
    setGoalTextColor(preset.goalTextColor);
    setBgColor(preset.bgColor);
    setFrameColor(preset.frameColor);
    setFrameBorderColor(preset.frameBorderColor);
    setSelectedTheme(preset.theme);
    setBackgroundType(preset.backgroundType);
  };

  const handleDownload = async () => {
    // Get the visible snapshot card (desktop or mobile)
    const desktopNode = document.getElementById('snapshot-card-desktop');
    const mobileNode = document.getElementById('snapshot-card-mobile');
    const node = desktopNode?.offsetParent !== null ? desktopNode : mobileNode;

    if (!node) return;

    try {
      const dataUrl = await toPng(node, {
        cacheBust: false,
        pixelRatio: 2,
        skipFonts: false,
      });

      const link = document.createElement('a');
      link.download = 'my-resolutions-2026.png';
      link.href = dataUrl;
      link.click();
    } catch (err) {
      console.error('Export failed:', err);
      alert('Failed to export image. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white relative">
      <div className="absolute top-2 right-2 lg:top-4 lg:right-4 z-10">
        <Link href="/" passHref>
          <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-3 lg:px-4 rounded-lg transition-colors text-sm lg:text-base">
            <span className="sm:hidden">← Back</span>
            <span className="hidden sm:inline">← a cool portfolio</span>
          </button>
        </Link>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:block">
        <PanelGroup direction="horizontal" className="min-h-screen">
          <Panel defaultSize={30} minSize={20} className="p-4 lg:p-8 !overflow-y-auto">
          <StyleControls
            goals={goals}
            currentGoal={currentGoal}
            onAddGoal={handleAddGoal}
            onGoalChange={(e) => setCurrentGoal(e.target.value)}
            onDeleteGoal={handleDeleteGoal}
            onMoveGoalUp={handleMoveGoalUp}
            onMoveGoalDown={handleMoveGoalDown}
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
            }}
            frameColor={frameColor}
            onFrameColorChange={setFrameColor}
            frameBorderColor={frameBorderColor}
            onFrameBorderColorChange={setFrameBorderColor}
            selectedTheme={selectedTheme}
            onThemeChange={(theme) => {
              setSelectedTheme(theme);
              setBackgroundType('gradient');
            }}
            backgroundType={backgroundType}
            xUsername={xUsername}
            onXUsernameChange={handleXUsernameChange}
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
              xUsername={xUsername}
              containerId="snapshot-card-desktop"
            />
          </div>
        </Panel>
      </PanelGroup>
      </div>

      {/* Mobile Layout */}
      <div className="lg:hidden flex flex-col min-h-screen pt-16">
        <div className="p-4 bg-gray-900 border-b border-gray-700 overflow-y-auto">
          <StyleControls
            goals={goals}
            currentGoal={currentGoal}
            onAddGoal={handleAddGoal}
            onGoalChange={(e) => setCurrentGoal(e.target.value)}
            onDeleteGoal={handleDeleteGoal}
            onMoveGoalUp={handleMoveGoalUp}
            onMoveGoalDown={handleMoveGoalDown}
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
            }}
            frameColor={frameColor}
            onFrameColorChange={setFrameColor}
            frameBorderColor={frameBorderColor}
            onFrameBorderColorChange={setFrameBorderColor}
            selectedTheme={selectedTheme}
            onThemeChange={(theme) => {
              setSelectedTheme(theme);
              setBackgroundType('gradient');
            }}
            backgroundType={backgroundType}
            xUsername={xUsername}
            onXUsernameChange={handleXUsernameChange}
          />
        </div>
        <div className="flex-1 flex items-center justify-center p-4 bg-gray-800 overflow-auto">
          <div className="w-full max-w-md">
            <SnapshotCard
              goals={goals}
              font={selectedFont}
              goalTextColor={goalTextColor}
              bgColor={bgColor}
              frameColor={frameColor}
              frameBorderColor={frameBorderColor}
              theme={selectedTheme}
              backgroundType={backgroundType}
              xUsername={xUsername}
              containerId="snapshot-card-mobile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResolutionsPage;
