'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CampaignState } from './CampaignSimulation';

interface HeroConnectionsProps {
  currentState: CampaignState;
}

export const HeroConnections: React.FC<HeroConnectionsProps> = ({ currentState }) => {
  const isTransmitting = currentState === 'distributing' || currentState === 'completed';

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sensorLineGradA" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F59E0B" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#69433C" stopOpacity="0.1" />
        </linearGradient>
        <linearGradient id="sensorLineGradB" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#69433C" stopOpacity="0.1" />
          <stop offset="100%" stopColor="#F59E0B" stopOpacity="0.4" />
        </linearGradient>
      </defs>

      {/* Line: Matriz Card → Smartphone (top-left to center) */}
      <path
        d="M 130 80 C 180 120, 210 180, 260 230"
        fill="none"
        stroke="url(#sensorLineGradA)"
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />

      {/* Line: Smartphone → Stores Card (center-bottom to bottom-right) */}
      <path
        d="M 320 400 C 370 440, 410 460, 470 490"
        fill="none"
        stroke="url(#sensorLineGradB)"
        strokeWidth="1.5"
        strokeDasharray="5 5"
      />

      {/* Animated pulse dots along lines when distributing */}
      {isTransmitting && (
        <>
          <motion.circle
            cx="0"
            cy="0"
            r="4"
            fill="#F59E0B"
            animate={{
              cx: [130, 180, 230, 260],
              cy: [80, 120, 170, 230],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              times: [0, 0.3, 0.7, 1],
            }}
          />
          <motion.circle
            cx="0"
            cy="0"
            r="4"
            fill="#F59E0B"
            animate={{
              cx: [320, 370, 420, 470],
              cy: [400, 440, 460, 490],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.8,
              times: [0, 0.3, 0.7, 1],
            }}
          />
        </>
      )}
    </svg>
  );
};
