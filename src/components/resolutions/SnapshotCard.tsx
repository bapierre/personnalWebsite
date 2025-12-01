import React from 'react';
import Image from 'next/image';
import { layouts, LayoutVariation } from './layouts';
import { Theme } from './StyleSelector';
import { fontOptions } from '@/app/resolutions/constants';

interface SnapshotCardProps {
  goals: string[];
  font: typeof fontOptions[0];
  goalTextColor: string;
  bgColor: string;
  frameColor: string;
  frameBorderColor: string;
  theme: Theme;
  backgroundType: 'solid' | 'gradient' | 'image';
  backgroundImage?: string;
  userImage?: string | null;
}

const BentoBox: React.FC<{
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}> = ({ children, style, className }) => (
  <div
    style={style}
    className={`rounded-2xl p-4 flex items-center justify-center text-center ${className}`}
  >
    {children}
  </div>
);

const SnapshotCard: React.FC<SnapshotCardProps> = ({ 
  goals,
  font,
  goalTextColor,
  bgColor,
  frameColor,
  frameBorderColor,
  theme,
  backgroundType,
  backgroundImage,
  userImage,
}) => {
  const currentYear = new Date().getFullYear() + 1;

  const goalCount = goals.length > 5 ? 5 : goals.length;
  const layoutConfig = (layouts[goalCount] ? layouts[goalCount][0] : layouts[5][0]) as LayoutVariation;

  const gridStyle: React.CSSProperties = {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateRows: 'repeat(6, 1fr)',
    gap: '0.75rem',
    width: '100%',
    aspectRatio: '1 / 1',
    gridTemplateAreas: layoutConfig.gridTemplateAreas,
  };

  const containerStyle: React.CSSProperties = {
    backgroundColor: bgColor,
    backgroundImage: backgroundType === 'gradient' 
      ? `radial-gradient(at top left, ${theme.gradientFrom}, ${theme.gradientTo})`
      : backgroundType === 'image' && backgroundImage
      ? `url(${backgroundImage})`
      : 'none',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };

  return (
    <div id="snapshot-card-container" className="w-full max-w-xl p-6 rounded-3xl shadow-2xl" style={containerStyle}>
      <div style={gridStyle}>
        {goals.slice(0, 5).map((goal, index) => (
          <BentoBox 
            key={index} 
            style={{ 
              gridArea: `goal${index + 1}`,
              backgroundColor: frameColor,
              borderColor: frameBorderColor,
            }}
            className="border-2"
          >
            <p className={`text-lg font-semibold ${font.className}`} style={{ color: goalTextColor }}>{goal}</p>
          </BentoBox>
        ))}
        
        {layoutConfig.gridTemplateAreas.includes('quote') && (
          <BentoBox style={{ gridArea: 'quote', backgroundColor: frameColor, borderColor: frameBorderColor }} className="border-2">
            <p className={`text-2xl font-bold ${font.className}`} style={{ color: goalTextColor }}>
              In <span className="font-sans">{currentYear}</span> I will...
            </p>
          </BentoBox>
        )}
        
        <div style={{ gridArea: 'picture', borderColor: frameBorderColor }} className="relative overflow-hidden rounded-2xl border-2" >
           {userImage ? (
            <img src={userImage} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }}/>
          ) : (
            <div className="flex flex-col items-center justify-center h-full w-full bg-gray-700 p-2 text-white text-center text-sm"
                 style={{ borderColor: frameBorderColor, borderWidth: '2px' }}>
              <p className="mb-1">If you like this, give a follow to</p>
              <a href="https://twitter.com/VanpeltVentures" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 font-semibold text-base">
                @VanpeltVentures
              </a>
              <p className="mt-1">on X!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SnapshotCard;
