export type SegmentType = 'supermercado' | 'hortifruti' | 'acougue' | 'padaria';

export type CampaignType = 'semana' | 'fim_de_semana' | 'especiais';

export type UnitCount = 5 | 10 | 20 | 50;

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  originalPrice: string;
  offerPrice: string;
  unit: string;
  tag?: string;
  imageUrl?: string;
}

export interface StoreStatus {
  id: string;
  storeName: string;
  code: string;
  status: 'ready' | 'syncing' | 'pending';
  customOfferCount?: number;
  lastSyncTime?: string;
}

export interface FormatTypeOption {
  id: string;
  name: string;
  ratio: string;
  dimension: string;
  useCase: string;
  iconName: string;
}

export interface WorkflowStep {
  number: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tag: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
