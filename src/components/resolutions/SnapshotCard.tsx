import React from 'react';
import { layouts } from './layouts';
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
  const layout = layouts[goals.length]?.[0];

  if (!layout) {
    return (
      <div className="text-center p-8 bg-gray-800 rounded-lg">
        <p className="text-gray-400">Please add 3-5 goals to see the preview</p>
      </div>
    );
  }

  const getBackgroundStyle = () => {
    if (backgroundType === 'image' && backgroundImage) {
      return {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      };
    } else if (backgroundType === 'gradient') {
      return {
        backgroundImage: `linear-gradient(to right, ${theme.gradientFrom}, ${theme.gradientTo})`,
      };
    } else {
      return {
        backgroundColor: bgColor,
      };
    }
  };

  return (
    <div
      id="snapshot-card-container"
      className={`w-full max-w-xl p-6 rounded-3xl shadow-2xl ${font.className}`}
      style={{
        ...getBackgroundStyle(),
      }}
    >
      <div
        className="w-full grid"
        style={{
          gridTemplateAreas: layout.gridTemplateAreas,
          gridTemplateRows: 'repeat(6, 1fr)',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: '0.75rem',
          aspectRatio: '1 / 1',
        }}
      >
        {/* Goals */}
        {goals.map((goal, index) => (
          <div
            key={index}
            style={{
              gridArea: `goal${index + 1}`,
              backgroundColor: frameColor,
              borderColor: frameBorderColor,
              color: goalTextColor,
            }}
            className="rounded-2xl border-2 p-6 flex items-center justify-center text-center overflow-hidden"
          >
            <p className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight">
              {goal}
            </p>
          </div>
        ))}

        {/* Quote Section */}
        <div
          style={{
            gridArea: 'quote',
            backgroundColor: frameColor,
            borderColor: frameBorderColor,
            color: goalTextColor,
          }}
          className="rounded-2xl border-2 p-6 flex flex-col items-center justify-center text-center"
        >
          <p className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">2026</p>
          <p className="text-sm md:text-base lg:text-lg opacity-80">Resolutions</p>
        </div>

        {/* Picture Section */}
        <div
          style={{
            gridArea: 'picture',
            borderColor: frameBorderColor,
            backgroundColor: userImage ? 'transparent' : frameColor,
            color: goalTextColor,
          }}
          className="relative overflow-hidden rounded-2xl border-2"
        >
          {userImage ? (
            <img
              src={userImage}
              alt="Profile"
              className="absolute inset-0 w-full h-full object-cover"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-center p-4">
              <div>
                <p className="text-sm md:text-base opacity-70">Upload your photo</p>
                <p className="text-xs md:text-sm opacity-50 mt-1">in the left panel</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SnapshotCard;
