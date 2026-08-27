import { TransparencyExpense } from '../types';

export const TRANSPARENCY_EXPENSES: TransparencyExpense[] = [
  {
    category: 'Personalized Mementos & Trophies',
    description:
      'Custom engraved wooden plaques & desk nameplates for all 8 department professors & lab faculty',
    estimatedCost: 9500,
    status: 'Quotation Received',
    percentage: 38,
  },
  {
    category: 'Fresh Flower Bouquets & Greeting Cards',
    description:
      'Handcrafted floral bouquets and custom printed gratitude stationery signed by all batch students',
    estimatedCost: 4800,
    status: 'Allocated',
    percentage: 19,
  },
  {
    category: 'Celebration Cake & High-Tea Refreshments',
    description:
      '2.5kg custom Teacher’s Day butterscotch cake & tea/snacks for faculty lounge celebration',
    estimatedCost: 5200,
    status: 'Allocated',
    percentage: 21,
  },
  {
    category: 'Department Hall Stage & Decor',
    description:
      'Bespoke welcome banner, backdrop drape lighting, easel stands, and floral stage arrangements',
    estimatedCost: 3500,
    status: 'Pending Purchase',
    percentage: 14,
  },
  {
    category: 'Surplus & Contingency Reserve',
    description:
      'Emergency buffer for audio/mic setup, packaging gift wraps, and student volunteer arrangements',
    estimatedCost: 2000,
    status: 'Reserved',
    percentage: 8,
  },
];