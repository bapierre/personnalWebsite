import React from 'react';
import { Accordion, AccordionItem } from './Accordion';
import ColorPickerPopover from './ColorPickerPopover';
import StyleSelector, { themes, Theme } from './StyleSelector';
import { fontOptions } from '../../app/resolutions/constants';
import PresetSelector from './PresetSelector';
import { Preset } from './presets';

interface StyleControlsProps {
  goals: string[];
  currentGoal: string;
  onAddGoal: (e: React.FormEvent) => void;
  onGoalChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onDeleteGoal: (index: number) => void;
  onDownload: () => void;
  onPresetSelect: (preset: Preset) => void;
  selectedFont: { name: string; className: string };
  onFontChange: (font: { name: string; className: string }) => void;
  goalTextColor: string;
  onGoalTextColorChange: (color: string) => void;
  bgColor: string;
  onBgColorChange: (color: string) => void;
  frameColor: string;
  onFrameColorChange: (color: string) => void;
  frameBorderColor: string;
  onFrameBorderColorChange: (color: string) => void;
  selectedTheme: Theme;
  onThemeChange: (theme: Theme) => void;
  backgroundType: 'solid' | 'gradient';
  onUserImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const StyleControls: React.FC<StyleControlsProps> = (props) => {
  return (
    <div className="w-full h-full flex flex-col">
      <h1 className="text-3xl font-bold mb-6 text-center lg:text-left" style={{ fontFamily: 'titles' }}>
        Customize Snapshot
      </h1>
      
      <label className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-lg transition-colors text-center cursor-pointer block mb-6">
        Upload your profile picture
        <input
          type="file"
          accept="image/*"
          onChange={props.onUserImageUpload}
          className="hidden"
        />
      </label>

      <div className="flex-grow overflow-y-auto pr-2">
        <Accordion>
          <AccordionItem title="Presets">
            <PresetSelector onSelect={props.onPresetSelect} />
          </AccordionItem>
          
          <AccordionItem title="Your Goals">
            <form onSubmit={props.onAddGoal} className="flex gap-2 mb-4">
              <input
                type="text"
                value={props.currentGoal}
                onChange={props.onGoalChange}
                placeholder={props.goals.length < 5 ? 'Add a goal...' : 'Max 5 goals reached'}
                disabled={props.goals.length >= 5}
                className="flex-grow bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all"
              />
              <button
                type="submit"
                disabled={props.goals.length >= 5 || !props.currentGoal.trim()}
                className="bg-purple-600 hover:bg-purple-700 disabled:bg-gray-700 disabled:cursor-not-allowed text-white font-bold py-2 px-4 rounded-lg transition-colors"
              >
                Add
              </button>
            </form>
            <div className="space-y-2">
              {props.goals.map((goal, index) => (
                <div key={index} className="bg-gray-800/50 rounded-lg p-3 text-sm flex justify-between items-center">
                  <span>{index + 1}. {goal}</span>
                  <button onClick={() => props.onDeleteGoal(index)} className="text-red-400 hover:text-red-500 ml-2">&times;</button>
                </div>
              ))}
            </div>
          </AccordionItem>

          <AccordionItem title="Appearance">
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Font Style</label>
                <select
                  value={props.selectedFont.className}
                  onChange={(e) => props.onFontChange(fontOptions.find(f => f.className === e.target.value) || fontOptions[0])}
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                >
                  {fontOptions.map(font => (
                    <option key={font.name} value={font.className} className={font.className}>
                      {font.name}
                    </option>
                  ))}
                </select>
              </div>
              <ColorPickerPopover label="Goal Text Color" color={props.goalTextColor} onChange={props.onGoalTextColorChange} />
              <ColorPickerPopover label="Frame Fill Color" color={props.frameColor} onChange={props.onFrameColorChange} />
              <ColorPickerPopover label="Frame Border Color" color={props.frameBorderColor} onChange={props.onFrameBorderColorChange} />
            </div>
          </AccordionItem>

          <AccordionItem title="Background">
            <div className="space-y-4">
              <div
                onClick={() => props.onBgColorChange(props.bgColor)} 
                className={`cursor-pointer p-2 rounded-lg ${props.backgroundType === 'solid' ? 'ring-2 ring-purple-500' : ''}`}
              >
                <ColorPickerPopover label="Solid Color" color={props.bgColor} onChange={props.onBgColorChange} />
              </div>
              <div 
                className={`cursor-pointer p-2 rounded-lg ${props.backgroundType === 'gradient' ? 'ring-2 ring-purple-500' : ''}`}
              >
                <StyleSelector selectedTheme={props.selectedTheme} onThemeChange={props.onThemeChange} />
              </div>
            </div>
          </AccordionItem>
        </Accordion>
      </div>

      <div className="mt-6">
        <button
          onClick={props.onDownload}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-4 rounded-lg transition-colors"
        >
          Download Snapshot
        </button>
      </div>
    </div>
  );
};
export default StyleControls;