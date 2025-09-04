import { Ordinal, Collection, Gallery, MarketplaceStats, PriceData } from '@/types/ordinals';

// Mock Bitcoin Ordinals data - Digital Fine Arts Marketplace
export const mockOrdinals: Ordinal[] = [
  {
    id: '1',
    inscriptionId: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6',
    inscriptionNumber: 52341,
    address: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    outputValue: 546,
    sat: 1234567890123,
    satpoint: 'a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6:0:546',
    timestamp: '2024-03-15T10:30:00Z',
    mediaType: 'image/webp',
    mediaSize: 8432,
    mediaContent: 'https://ordinals.com/content/52341',
    metaTitle: 'Bitcoin Genesis Abstract',
    metaDescription: 'Abstract interpretation of Bitcoin\'s first block in golden gradients',
    price: 0.0045,
    priceUnit: 'btc',
    listed: true,
    owner: 'bc1qxy2kgdygjrsqtzq2n0yrf2493p83kkfjhx0wlh',
    collection: 'Crypto Genesis Art'
  },
  {
    id: '2',
    inscriptionId: 'b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1',
    inscriptionNumber: 67892,
    address: 'bc1qab2cd3ef4gh5ij6kl7mn8op9qr0st1uv2wx3yz4',
    outputValue: 546,
    sat: 1234567890124,
    satpoint: 'b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1:0:546',
    timestamp: '2024-03-14T15:22:00Z',
    mediaType: 'image/png',
    mediaSize: 12567,
    metaTitle: 'Ethereum Dreams #07',
    metaDescription: 'Surreal digital painting featuring Ethereum symbols in cosmic space',
    price: 150000,
    priceUnit: 'sats',
    listed: true,
    owner: 'bc1qab2cd3ef4gh5ij6kl7mn8op9qr0st1uv2wx3yz4',
    collection: 'Ethereum Cosmos'
  },
  {
    id: '3',
    inscriptionId: 'c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2',
    inscriptionNumber: 98765,
    address: 'bc1q9x8y7z6a5b4c3d2e1f0g9h8i7j6k5l4m3n2o1p0',
    outputValue: 546,
    sat: 1234567890125,
    satpoint: 'c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2:0:546',
    timestamp: '2024-03-13T08:45:00Z',
    mediaType: 'image/svg+xml',
    mediaSize: 342,
    metaTitle: 'Digital Bitcoin Mandala',
    metaDescription: 'Intricate geometric Bitcoin pattern with sacred geometry elements',
    price: 0.0089,
    priceUnit: 'btc',
    listed: true,
    owner: 'bc1q9x8y7z6a5b4c3d2e1f0g9h8i7j6k5l4m3n2o1p0',
    collection: 'Crypto Mandalas'
  },
  {
    id: '4',
    inscriptionId: 'd4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2c3',
    inscriptionNumber: 45678,
    address: 'bc1q1a2s3d4f5g6h7j8k9l0z1x2c3v4b5n6m7q8w9e0',
    outputValue: 546,
    sat: 1234567890126,
    satpoint: 'd4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2c3:0:546',
    timestamp: '2024-03-12T20:15:00Z',
    mediaType: 'image/webp',
    mediaSize: 5634,
    metaTitle: 'Ethereum Forest #12',
    metaDescription: 'Mystical forest scene with glowing Ethereum trees and digital wildlife',
    price: 75000,
    priceUnit: 'sats',
    listed: true,
    owner: 'bc1q1a2s3d4f5g6h7j8k9l0z1x2c3v4b5n6m7q8w9e0',
    collection: 'Ethereum Nature'
  },
  {
    id: '5',
    inscriptionId: 'e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2c3d4',
    inscriptionNumber: 123456,
    address: 'bc1qzyx9wvu8tsr7qpo6nml5kji4hgf3edc2ba1z0y9',
    outputValue: 546,
    sat: 1234567890127,
    satpoint: 'e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2c3d4:0:546',
    timestamp: '2024-03-11T12:00:00Z',
    mediaType: 'image/webp',
    mediaSize: 15432,
    metaTitle: 'Bitcoin Phoenix Rising',
    metaDescription: 'Majestic phoenix emerging from Bitcoin flames in digital art style',
    price: 0.0023,
    priceUnit: 'btc',
    listed: true,
    owner: 'bc1qzyx9wvu8tsr7qpo6nml5kji4hgf3edc2ba1z0y9',
    collection: 'Crypto Mythology'
  },
  {
    id: '6',
    inscriptionId: 'f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2c3d4e5',
    inscriptionNumber: 87654,
    address: 'bc1q0p9o8i7u6y5t4r3e2w1q0a9s8d7f6g5h4j3k2l1',
    outputValue: 546,
    sat: 1234567890128,
    satpoint: 'f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2c3d4e5:0:546',
    timestamp: '2024-03-10T16:30:00Z',
    mediaType: 'image/gif',
    mediaSize: 9876,
    metaTitle: 'Ethereum Galaxy Spiral',
    metaDescription: 'Animated spiral galaxy with Ethereum constellation patterns',
    price: 0.00156,
    priceUnit: 'btc',
    listed: false,
    owner: 'bc1q0p9o8i7u6y5t4r3e2w1q0a9s8d7f6g5h4j3k2l1',
    collection: 'Ethereum Cosmos'
  },
  {
    id: '7',
    inscriptionId: 'g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2c3d4e5f6',
    inscriptionNumber: 234567,
    address: 'bc1q2w3e4r5t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0m1',
    outputValue: 546,
    sat: 1234567890129,
    satpoint: 'g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2c3d4e5f6:0:546',
    timestamp: '2024-03-09T09:15:00Z',
    mediaType: 'image/png',
    mediaSize: 18956,
    metaTitle: 'Ethereum Crystal Cave',
    metaDescription: 'Underground crystal cave illuminated by Ethereum energy',
    price: 0.0078,
    priceUnit: 'btc',
    listed: true,
    owner: 'bc1q2w3e4r5t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0m1',
    collection: 'Ethereum Nature'
  },
  {
    id: '8',
    inscriptionId: 'h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2c3d4e5f6g7',
    inscriptionNumber: 345678,
    address: 'bc1q3e4r5t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0m1n2',
    outputValue: 546,
    sat: 1234567890130,
    satpoint: 'h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6a1b2c3d4e5f6g7:0:546',
    timestamp: '2024-03-08T14:45:00Z',
    mediaType: 'image/webp',
    mediaSize: 22341,
    metaTitle: 'Bitcoin Samurai Warrior',
    metaDescription: 'Legendary samurai with Bitcoin armor in traditional Japanese art style',
    price: 250000,
    priceUnit: 'sats',
    listed: true,
    owner: 'bc1q3e4r5t6y7u8i9o0p1a2s3d4f5g6h7j8k9l0m1n2',
    collection: 'Crypto Warriors'
  }
];

// Mock Collections data - Digital Fine Arts
export const mockCollections: Collection[] = [
  {
    id: 'crypto-genesis-art',
    name: 'Crypto Genesis Art',
    description: 'Abstract digital paintings inspired by Bitcoin\'s genesis block. Each piece represents the birth of decentralized currency through artistic interpretation.',
    creator: 'GenesisArtist.btc',
    totalItems: 2024,
    floorPrice: 0.0034,
    volume24h: 2.45,
    coverImage: '/images/collections/crypto-genesis-art.webp',
    verified: true,
    ordinals: [mockOrdinals[0]]
  },
  {
    id: 'ethereum-cosmos',
    name: 'Ethereum Cosmos',
    description: 'Surreal cosmic artworks featuring Ethereum themes. Galaxies, nebulae, and celestial bodies infused with cryptocurrency symbolism.',
    creator: 'CosmicEth.ord',
    totalItems: 3333,
    floorPrice: 0.0089,
    volume24h: 4.12,
    coverImage: '/images/collections/ethereum-cosmos.webp',
    verified: true,
    ordinals: [mockOrdinals[1], mockOrdinals[5]]
  },
  {
    id: 'crypto-mandalas',
    name: 'Crypto Mandalas',
    description: 'Sacred geometry meets cryptocurrency. Intricate mandala designs incorporating Bitcoin and blockchain patterns for meditation and contemplation.',
    creator: 'MandalaWisdom',
    totalItems: 1080,
    floorPrice: 0.0067,
    volume24h: 1.23,
    coverImage: '/images/collections/crypto-mandalas.webp',
    verified: true,
    ordinals: [mockOrdinals[2]]
  },
  {
    id: 'ethereum-nature',
    name: 'Ethereum Nature',
    description: 'Digital nature scenes where Ethereum energy flows through forests, caves, and mystical landscapes. Environmental art for the blockchain age.',
    creator: 'NatureETH.artist',
    totalItems: 1555,
    floorPrice: 0.0078,
    volume24h: 2.34,
    coverImage: '/images/collections/ethereum-nature.webp',
    verified: false,
    ordinals: [mockOrdinals[3], mockOrdinals[6]]
  },
  {
    id: 'crypto-mythology',
    name: 'Crypto Mythology',
    description: 'Legendary creatures and mythological beings reimagined for the digital age. Dragons, phoenixes, and gods of the cryptocurrency realm.',
    creator: 'MythMaker.btc',
    totalItems: 888,
    floorPrice: 0.0023,
    volume24h: 1.67,
    coverImage: '/images/collections/crypto-mythology.webp',
    verified: true,
    ordinals: [mockOrdinals[4]]
  },
  {
    id: 'crypto-warriors',
    name: 'Crypto Warriors',
    description: 'Elite digital warriors protecting the blockchain realm. Samurais, knights, and guardians armed with cryptocurrency power.',
    creator: 'WarriorMaster',
    totalItems: 777,
    floorPrice: 0.0125,
    volume24h: 3.45,
    coverImage: '/images/collections/crypto-warriors.webp',
    verified: true,
    ordinals: [mockOrdinals[7]]
  }
];

// Mock Galleries data
export const mockGalleries: Gallery[] = [
  {
    id: 'miami-crypto-gallery',
    name: 'Miami Crypto Gallery',
    description: 'Premier destination for Bitcoin art in Miami. Curating the finest Ordinals collections.',
    curator: 'miami.gallery',
    collections: [mockCollections[0], mockCollections[2]],
    featured: true,
    coverImage: '/images/galleries/miami-crypto.webp',
    socialLinks: {
      twitter: 'https://twitter.com/miamicryptogallery',
      discord: 'https://discord.gg/miamicrypto',
      website: 'https://miamicrypto.gallery'
    }
  },
  {
    id: 'ordinals-collective',
    name: 'Ordinals Collective',
    description: 'Community-driven gallery showcasing emerging Bitcoin artists and innovative inscriptions.',
    curator: 'collective.ord',
    collections: [mockCollections[1], mockCollections[3]],
    featured: true,
    coverImage: '/images/galleries/ordinals-collective.webp',
    socialLinks: {
      twitter: 'https://twitter.com/ordinalscollective',
      discord: 'https://discord.gg/ordinalscollective'
    }
  }
];

// Mock marketplace statistics
export const mockStats: MarketplaceStats = {
  totalVolume: 156.789,
  totalItems: 47323,
  totalCollections: 1247,
  activeListings: 8934,
  floorPrice: 0.00089,
  averagePrice: 0.0045
};

// Mock price data
export const mockPriceData: PriceData = {
  btcPrice: 67845.32,
  ckBtcPrice: 67823.45,
  lastUpdated: new Date().toISOString()
};