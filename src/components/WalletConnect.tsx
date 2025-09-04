'use client';

import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useWalletStore } from '@/store/StoreProvider';
import { WalletProvider } from '@/types/wallet';

const WALLET_PROVIDERS = [
  { 
    id: 'unisat', 
    name: 'Unisat', 
    icon: '🔶', 
    installed: () => !!(window as any).unisat 
  },
  { 
    id: 'xverse', 
    name: 'Xverse', 
    icon: '⚡', 
    installed: () => !!(window as any).BitcoinProvider && !!(window as any).StacksProvider 
  },
  { 
    id: 'ordinals-wallet', 
    name: 'Ordinals', 
    icon: '🎨', 
    installed: () => !!(window as any).ordinalsWallet 
  },
  { 
    id: 'leather', 
    name: 'Leather', 
    icon: '🐂', 
    installed: () => !!(window as any).LeatherProvider 
  },
  { 
    id: 'phantom', 
    name: 'Phantom', 
    icon: '👻', 
    installed: () => !!(window as any).phantom?.bitcoin 
  },
] as const;

interface WalletConnectProps {
  onClose?: () => void;
  showModal?: boolean;
}

const WalletConnect: React.FC<WalletConnectProps> = observer(({ onClose, showModal = false }) => {
  const walletStore = useWalletStore();
  const [connecting, setConnecting] = useState<string | null>(null);

  const handleConnect = async (provider: WalletProvider) => {
    setConnecting(provider);
    try {
      await walletStore.connectWallet(provider);
      onClose?.();
    } catch (error) {
      console.error('Failed to connect:', error);
    } finally {
      setConnecting(null);
    }
  };

  const handleDisconnect = async () => {
    try {
      await walletStore.disconnectWallet();
      onClose?.();
    } catch (error) {
      console.error('Failed to disconnect:', error);
    }
  };

  if (walletStore.isConnected && !showModal) {
    const provider = WALLET_PROVIDERS.find(p => p.id === walletStore.walletInfo?.provider);
    return (
      <div className="wallet-connected">
        <div className="wallet-info">
          <span className="wallet-provider">{provider?.icon || '🔗'}</span>
          <span className="wallet-address">{walletStore.shortAddress}</span>
          <span className="wallet-balance">{walletStore.balanceInBTC.toFixed(6)} BTC</span>
        </div>
        <button className="btn-outline disconnect-btn" onClick={handleDisconnect}>
          Disconnect
        </button>
      </div>
    );
  }

  if (!showModal) {
    return <button className="btn-primary connect-wallet-btn">Connect Wallet</button>;
  }

  return (
    <div className="wallet-modal-overlay" onClick={onClose}>
      <div className="wallet-modal" onClick={(e) => e.stopPropagation()}>
        <div className="wallet-modal-header">
          <h2 className="text-heading-2">Connect Wallet</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        {walletStore.error && (
          <div className="error-message">
            {walletStore.error}
            <button className="clear-error-btn" onClick={() => walletStore.clearError()}>×</button>
          </div>
        )}

        <div className="wallet-providers">
          {WALLET_PROVIDERS.map((provider) => {
            const isInstalled = provider.installed ? provider.installed() : true;
            const isConnecting = connecting === provider.id;

            return (
              <button
                key={provider.id}
                className={`wallet-provider ${!isInstalled ? 'not-installed' : ''}`}
                onClick={() => isInstalled && handleConnect(provider.id)}
                disabled={!isInstalled || !!connecting}
              >
                <div className="provider-icon">{provider.icon}</div>
                <div className="provider-info">
                  <div className="provider-name">{provider.name}</div>
                  <div className="provider-description">
                    {!isInstalled ? 'Not installed' : `${provider.name} wallet`}
                  </div>
                </div>
                {isConnecting && <div className="connecting-spinner">⟳</div>}
              </button>
            );
          })}
        </div>

        <div className="wallet-modal-footer">
          <p className="text-small">
            By connecting, you agree to BitBasel's Terms of Service
          </p>
        </div>
      </div>
    </div>
  );
});

export default WalletConnect;
