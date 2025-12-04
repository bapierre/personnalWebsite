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
  backgroundType: 'solid' | 'gradient';
  xUsername: string;
  containerId?: string;
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
  xUsername,
  containerId = 'snapshot-card-container',
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
    if (backgroundType === 'gradient') {
      return {
        backgroundImage: `linear-gradient(to right, ${theme.gradientFrom}, ${theme.gradientTo})`,
      };
    } else {
      return {
        backgroundColor: bgColor,
      };
    }
  };

  const getFontSize = (text: string) => {
    const length = text.length;
    if (length > 50) return 'text-sm md:text-base lg:text-lg';
    if (length > 35) return 'text-base md:text-lg lg:text-xl';
    if (length > 20) return 'text-lg md:text-xl lg:text-2xl';
    return 'text-lg md:text-xl lg:text-2xl';
  };

  return (
    <div
      id={containerId}
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
            <p className={`${getFontSize(goal)} font-semibold leading-tight`}>
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
            backgroundColor: frameColor,
            color: goalTextColor,
          }}
          className="rounded-2xl border-2 p-4 flex items-center justify-center text-center"
        >
          {xUsername && xUsername !== '@' ? (
            <p
              className="text-lg md:text-xl lg:text-2xl font-semibold leading-tight w-full"
              style={{
                overflowWrap: 'break-word',
                wordBreak: 'break-word',
              }}
            >
              {xUsername}
            </p>
          ) : (
            <p className="text-base md:text-lg lg:text-xl font-semibold leading-tight opacity-60">
              Type your X handle
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SnapshotCard;
