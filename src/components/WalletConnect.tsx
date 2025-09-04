'use client';

import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useWalletStore } from '@/store/StoreProvider';
import { WalletProvider } from '@/types/wallet';

interface WalletProviderOption {
  id: WalletProvider;
  name: string;
  icon: string;
  description: string;
  installed?: () => boolean;
}

const walletProviders: WalletProviderOption[] = [
  {
    id: 'unisat',
    name: 'Unisat',
    icon: '🔶',
    description: 'Bitcoin & Ordinals wallet',
    installed: () => !!(window as any).unisat,
  },
  {
    id: 'xverse',
    name: 'Xverse',
    icon: '⚡',
    description: 'Bitcoin & Stacks wallet',
  },
  {
    id: 'ordinals-wallet',
    name: 'Ordinals Wallet',
    icon: '🎨',
    description: 'Dedicated Ordinals wallet',
  },
  {
    id: 'leather',
    name: 'Leather',
    icon: '🐂',
    description: 'Bitcoin & Stacks wallet',
  },
  {
    id: 'phantom',
    name: 'Phantom',
    icon: '👻',
    description: 'Multi-chain wallet',
  },
];

interface WalletConnectProps {
  onClose?: () => void;
  showModal?: boolean;
}

export const WalletConnect: React.FC<WalletConnectProps> = observer(
  ({ onClose, showModal = false }) => {
    const walletStore = useWalletStore();
    const [selectedProvider, setSelectedProvider] = useState<WalletProvider | null>(null);

    const handleConnect = async (provider: WalletProvider) => {
      setSelectedProvider(provider);

      try {
        await walletStore.connectWallet(provider);
        onClose?.();
      } catch (error) {
        console.error('Failed to connect wallet:', error);
      } finally {
        setSelectedProvider(null);
      }
    };

    const handleDisconnect = async () => {
      try {
        await walletStore.disconnectWallet();
        onClose?.();
      } catch (error) {
        console.error('Failed to disconnect wallet:', error);
      }
    };

    if (walletStore.isConnected && !showModal) {
      return (
        <div className="wallet-connected">
          <div className="wallet-info">
            <span className="wallet-provider">
              {walletProviders.find((p) => p.id === walletStore.walletInfo?.provider)?.icon || '🔗'}
            </span>
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
            <button className="close-btn" onClick={onClose}>
              ×
            </button>
          </div>

          {walletStore.error && (
            <div className="error-message">
              {walletStore.error}
              <button className="clear-error-btn" onClick={() => walletStore.clearError()}>
                ×
              </button>
            </div>
          )}

          <div className="wallet-providers">
            {walletProviders.map((provider) => {
              const isInstalled = provider.installed ? provider.installed() : true;
              const isConnecting = selectedProvider === provider.id && walletStore.connecting;

              return (
                <button
                  key={provider.id}
                  className={`wallet-provider ${!isInstalled ? 'not-installed' : ''}`}
                  onClick={() => (isInstalled ? handleConnect(provider.id) : null)}
                  disabled={!isInstalled || walletStore.connecting}
                >
                  <div className="provider-icon">{provider.icon}</div>
                  <div className="provider-info">
                    <div className="provider-name">{provider.name}</div>
                    <div className="provider-description">
                      {!isInstalled ? 'Not installed' : provider.description}
                    </div>
                  </div>
                  {isConnecting && <div className="connecting-spinner">⟳</div>}
                </button>
              );
            })}
          </div>

          <div className="wallet-modal-footer">
            <p className="text-small">
              By connecting a wallet, you agree to BitBasel's Terms of Service
            </p>
          </div>
        </div>
      </div>
    );
  }
);

export default WalletConnect;
