'use client';

import { useState, useEffect, useCallback } from 'react';

export type CampaignState =
  | 'idle'
  | 'products'
  | 'images'
  | 'prices'
  | 'branding'
  | 'ready'
  | 'distributing'
  | 'completed';

export interface ProductItem {
  id: string;
  name: string;
  unit: string;
  price: string;
  originalPrice: string;
  badge: string;
  image: string;
  status: string;
}

export const CAMPAIGN_PRODUCTS: ProductItem[] = [
  {
    id: 'prod-1',
    name: 'ARROZ 5KG',
    unit: 'Pacote 5kg',
    price: 'R$ 24,90',
    originalPrice: 'R$ 31,90',
    badge: 'OFERTAÇO',
    image: '/tiojoao-fb.webp',
    status: 'Validado',
  },
  {
    id: 'prod-2',
    name: 'CAFÉ 500G',
    unit: 'Pacote 500g',
    price: 'R$ 18,90',
    originalPrice: 'R$ 24,50',
    badge: 'DESTAQUE',
    image: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80',
    status: 'Validado',
  },
  {
    id: 'prod-3',
    name: 'LEITE 1L',
    unit: 'Caixa 1L',
    price: 'R$ 4,79',
    originalPrice: 'R$ 6,29',
    badge: 'IMBATÍVEL',
    image: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80',
    status: 'Validado',
  },
  {
    id: 'prod-4',
    name: 'FEIJÃO 1KG',
    unit: 'Pacote 1kg',
    price: 'R$ 7,99',
    originalPrice: 'R$ 10,90',
    badge: 'OFERTA',
    image: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=400&q=80',
    status: 'Validado',
  },
];

const STATE_TIMINGS: Record<CampaignState, number> = {
  idle: 1800,
  products: 1600,
  images: 1600,
  prices: 1600,
  branding: 1800,
  ready: 2200,
  distributing: 2500,
  completed: 4000,
};

const STATE_ORDER: CampaignState[] = [
  'idle',
  'products',
  'images',
  'prices',
  'branding',
  'ready',
  'distributing',
  'completed',
];

export function useCampaignSimulation(autoPlay: boolean = true) {
  const [currentState, setCurrentState] = useState<CampaignState>('idle');
  const [isPaused, setIsPaused] = useState<boolean>(!autoPlay);

  const nextState = useCallback(() => {
    setCurrentState((prev) => {
      const currentIndex = STATE_ORDER.indexOf(prev);
      const nextIndex = (currentIndex + 1) % STATE_ORDER.length;
      return STATE_ORDER[nextIndex];
    });
  }, []);

  const setSpecificState = useCallback((state: CampaignState) => {
    setCurrentState(state);
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const duration = STATE_TIMINGS[currentState];
    const timer = setTimeout(() => {
      nextState();
    }, duration);

    return () => clearTimeout(timer);
  }, [currentState, isPaused, nextState]);

  return {
    currentState,
    isPaused,
    setIsPaused,
    setSpecificState,
    nextState,
    stateIndex: STATE_ORDER.indexOf(currentState),
    totalStates: STATE_ORDER.length,
  };
}
