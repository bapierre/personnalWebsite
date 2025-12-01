'use client';

import React, { useState, useRef, useEffect } from 'react';
import { HexColorPicker } from 'react-colorful';

interface ColorPickerPopoverProps {
  label: string;
  color: string;
  onChange: (color: string) => void;
}

const ColorPickerPopover: React.FC<ColorPickerPopoverProps> = ({ label, color, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={popoverRef}>
      <div className="flex items-center justify-between">
        <label className="block text-sm font-medium">{label}</label>
        <button
          className="w-8 h-8 rounded-full border-2 border-gray-500"
          style={{ backgroundColor: color }}
          onClick={() => setIsOpen(!isOpen)}
        />
      </div>
      {isOpen && (
        <div className="absolute z-10 mt-2 right-0">
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </div>
  );
};

export default ColorPickerPopover;
