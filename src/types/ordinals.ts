// Bitcoin Ordinals Types
export interface Ordinal {
  id: string;
  inscriptionId: string;
  inscriptionNumber: number;
  address: string;
  outputValue: number;
  sat: number;
  satpoint: string;
  timestamp: string;
  mediaType: string;
  mediaSize: number;
  mediaContent?: string;
  metaTitle?: string;
  metaDescription?: string;
  price?: number;
  priceUnit?: 'sats' | 'btc' | 'ckbtc';
  listed: boolean;
  owner: string;
  collection?: string;
}

export interface Collection {
  id: string;
  name: string;
  description: string;
  creator: string;
  totalItems: number;
  floorPrice: number;
  volume24h: number;
  coverImage: string;
  verified: boolean;
  ordinals: Ordinal[];
}

export interface Gallery {
  id: string;
  name: string;
  description: string;
  curator: string;
  collections: Collection[];
  featured: boolean;
  coverImage: string;
  socialLinks?: {
    twitter?: string;
    discord?: string;
    website?: string;
  };
}

export interface MarketplaceStats {
  totalVolume: number;
  totalItems: number;
  totalCollections: number;
  activeListings: number;
  floorPrice: number;
  averagePrice: number;
}

export interface PriceData {
  btcPrice: number;
  ckBtcPrice: number;
  lastUpdated: string;
}
