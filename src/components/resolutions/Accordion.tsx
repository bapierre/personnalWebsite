'use client';

import React, { useState } from 'react';

interface AccordionItemProps {
  title: string;
  isOpen?: boolean;
  onToggle?: () => void;
  children: React.ReactNode;
}

const AccordionItem: React.FC<AccordionItemProps> = ({ title, isOpen = false, onToggle = () => {}, children }) => (
  <div className="border border-gray-700 rounded-lg mb-2">
    <button
      onClick={onToggle}
      className="w-full flex justify-between items-center p-4 text-left font-semibold text-lg"
    >
      <span>{title}</span>
      <span className={`transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
        &#9660;
      </span>
    </button>
    {isOpen && <div className="p-4 border-t border-gray-700">{children}</div>}
  </div>
);

interface AccordionProps {
  children: React.ReactElement<AccordionItemProps>[];
}

const Accordion: React.FC<AccordionProps> = ({ children }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div>
      {React.Children.map(children, (child, index) =>
        React.cloneElement(child, {
          isOpen: openIndex === index,
          onToggle: () => handleToggle(index),
        })
      )}
    </div>
  );
};

export { Accordion, AccordionItem };
