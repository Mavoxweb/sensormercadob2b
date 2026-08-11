'use client';

import React from 'react';

interface SensorSymbolProps {
  className?: string;
  color?: string;
}

export const SensorSymbol: React.FC<SensorSymbolProps> = ({ 
  className = "w-6 h-6", 
  color = "#F59E0B" 
}) => {
  return (
    <svg 
      className={className} 
      viewBox="0 0 100 100" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {/* Segmented outer circle ring connected with central integrated S */}
      <circle 
        cx="50" 
        cy="50" 
        r="42" 
        stroke={color} 
        strokeWidth="7" 
        strokeDasharray="200 60" 
        strokeDashoffset="15"
        strokeLinecap="round" 
      />
      {/* Integrated S curve structural with circle */}
      <path
        d="M64 33C59 27 47 26 38 32C28 39 30 49 43 53C56 57 58 68 47 73C37 77 26 74 22 67"
        stroke={color}
        strokeWidth="8.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="64" cy="33" r="4.5" fill={color} />
      <circle cx="22" cy="67" r="4.5" fill={color} />
    </svg>
  );
};
