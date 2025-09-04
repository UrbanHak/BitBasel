'use client';

import React from 'react';
import Image from 'next/image';
import { Collection } from '@/types/ordinals';

interface CollectionCardProps {
  collection: Collection;
  onClick?: (collection: Collection) => void;
}

export const CollectionCard: React.FC<CollectionCardProps> = ({ collection, onClick }) => {
  const handleClick = () => {
    onClick?.(collection);
  };

  const formatVolume = (volume: number) => {
    if (volume >= 1000000) {
      return `${(volume / 1000000).toFixed(1)}M`;
    } else if (volume >= 1000) {
      return `${(volume / 1000).toFixed(1)}K`;
    }
    return volume.toString();
  };

  const formatPrice = (price: number) => {
    if (price >= 1) {
      return `${price.toFixed(3)} BTC`;
    }
    return `${(price * 100000000).toLocaleString()} sats`;
  };

  return (
    <div className="collection-card" onClick={handleClick}>
      <div className="collection-cover-container">
        <Image
          src="/images/placeholder-collection.svg"
          alt={collection.name}
          width={400}
          height={200}
          className="collection-cover"
          onError={(e) => {
            (e.target as HTMLImageElement).src = '/images/placeholder-collection.svg';
          }}
        />
        {collection.verified && <div className="verified-badge">✓ Verified</div>}
      </div>

      <div className="collection-info">
        <div className="collection-header">
          <div>
            <h3 className="collection-name">{collection.name}</h3>
            <p className="collection-creator">by {collection.creator}</p>
          </div>
        </div>

        <p className="collection-description">{collection.description}</p>

        <div className="collection-stats">
          <div className="stat-item">
            <div className="stat-value">{collection.totalItems}</div>
            <div className="stat-label">Items</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{formatPrice(collection.floorPrice)}</div>
            <div className="stat-label">Floor</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{formatVolume(collection.volume24h)}</div>
            <div className="stat-label">24h Volume</div>
          </div>
          <div className="stat-item">
            <div className="stat-value">{collection.ordinals.length}</div>
            <div className="stat-label">Listed</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionCard;
