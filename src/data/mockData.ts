import { TransparencyExpense } from '../types';

export const TRANSPARENCY_EXPENSES: TransparencyExpense[] = [
  {
    category: 'Personalized Mementos & Trophies',
    description: 'Custom engraved wooden plaques & desk nameplates for department professors & lab faculty',
    estimatedCost: 1900,
    status: 'Quotation Received',
    percentage: 38,
  },
  {
    category: 'Fresh Flower Bouquets & Greeting Cards',
    description: 'Handcrafted floral bouquets and custom printed gratitude stationery signed by all batch students',
    estimatedCost: 950,
    status: 'Allocated',
    percentage: 19,
  },
  {
    category: 'Celebration Cake & High-Tea Refreshments',
    description: 'Custom Teacher’s Day butterscotch cake & tea/snacks for faculty lounge celebration',
    estimatedCost: 1050,
    status: 'Allocated',
    percentage: 21,
  },
  {
    category: 'Department Hall Stage & Decor',
    description: 'Bespoke welcome banner, backdrop drape lighting, easel stands, and floral stage arrangements',
    estimatedCost: 700,
    status: 'Pending Purchase',
    percentage: 14,
  },
  {
    category: 'Surplus & Contingency Reserve',
    description: 'Emergency buffer for audio/mic setup, packaging gift wraps, and student volunteer arrangements',
    estimatedCost: 400,
    status: 'Reserved',
    percentage: 8,
  },
];
