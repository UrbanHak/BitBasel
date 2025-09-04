'use client';

import React, { createContext, useContext, ReactNode } from 'react';
import { MarketplaceStore } from './MarketplaceStore';
import { WalletStore } from './WalletStore';

// Root store that combines all stores
class RootStore {
  marketplace: MarketplaceStore;
  wallet: WalletStore;

  constructor() {
    this.marketplace = new MarketplaceStore();
    this.wallet = new WalletStore();
  }
}

// Create context
const StoreContext = createContext<RootStore | null>(null);

// Store provider component
interface StoreProviderProps {
  children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
  const store = React.useMemo(() => new RootStore(), []);

  return <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;
};

// Hook to use store
export const useStore = (): RootStore => {
  const store = useContext(StoreContext);
  if (!store) {
    throw new Error('useStore must be used within StoreProvider');
  }
  return store;
};

// Individual store hooks for convenience
export const useMarketplaceStore = () => {
  const { marketplace } = useStore();
  return marketplace;
};

export const useWalletStore = () => {
  const { wallet } = useStore();
  return wallet;
};

export default StoreProvider;
