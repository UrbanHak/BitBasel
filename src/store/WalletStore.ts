import { makeAutoObservable, runInAction } from 'mobx';
import { WalletInfo, WalletProvider, TransactionStatus } from '@/types/wallet';

export class WalletStore {
  // State
  walletInfo: WalletInfo | null = null;
  connecting = false;
  error: string | null = null;
  transactions: TransactionStatus[] = [];

  // Available wallet providers
  availableProviders: WalletProvider[] = [
    'unisat',
    'xverse',
    'ordinals-wallet',
    'leather',
    'phantom',
  ];

  constructor() {
    makeAutoObservable(this);
    this.checkExistingConnection();
  }

  // Check for existing wallet connection on app start
  private async checkExistingConnection() {
    try {
      // Only run in browser environment
      if (typeof window === 'undefined') return;
      
      const savedWallet = localStorage.getItem('bitbasel_wallet');
      if (savedWallet) {
        const { provider } = JSON.parse(savedWallet);
        await this.connectWallet(provider, false);
      }
    } catch (error) {
      console.error('Error checking existing connection:', error);
    }
  }

  // Connect to wallet
  async connectWallet(provider: WalletProvider, saveConnection = true) {
    this.connecting = true;
    this.error = null;

    try {
      let walletInfo: WalletInfo;

      switch (provider) {
        case 'unisat':
          walletInfo = await this.connectUnisat();
          break;
        case 'xverse':
          walletInfo = await this.connectXverse();
          break;
        case 'ordinals-wallet':
          walletInfo = await this.connectOrdinalsWallet();
          break;
        case 'leather':
          walletInfo = await this.connectLeather();
          break;
        case 'phantom':
          walletInfo = await this.connectPhantom();
          break;
        default:
          throw new Error(`Unsupported wallet provider: ${provider}`);
      }

      runInAction(() => {
        this.walletInfo = walletInfo;
        this.connecting = false;
      });

      if (saveConnection) {
        localStorage.setItem(
          'bitbasel_wallet',
          JSON.stringify({
            provider,
            address: walletInfo.address,
          })
        );
      }

      return walletInfo;
    } catch (error) {
      runInAction(() => {
        this.error = error instanceof Error ? error.message : 'Failed to connect wallet';
        this.connecting = false;
      });
      throw error;
    }
  }

  // Disconnect wallet
  async disconnectWallet() {
    try {
      if (this.walletInfo?.provider === 'unisat' && (window as any).unisat) {
        await (window as any).unisat.disconnect();
      }

      runInAction(() => {
        this.walletInfo = null;
        this.error = null;
      });

      localStorage.removeItem('bitbasel_wallet');
    } catch (error) {
      console.error('Error disconnecting wallet:', error);
    }
  }

  // Wallet-specific connection methods
  private async connectUnisat(): Promise<WalletInfo> {
    if (!(window as any).unisat) {
      throw new Error('Unisat wallet not found. Please install the Unisat extension.');
    }

    const unisat = (window as any).unisat;
    const accounts = await unisat.requestAccounts();
    const publicKey = await unisat.getPublicKey();
    const balance = await unisat.getBalance();
    const network = await unisat.getNetwork();

    return {
      address: accounts[0],
      publicKey,
      balance: balance.confirmed,
      network: network === 'livenet' ? 'mainnet' : 'testnet',
      connected: true,
      provider: 'unisat',
    };
  }

  private async connectXverse(): Promise<WalletInfo> {
    // Placeholder - implement actual Xverse connection
    throw new Error('Xverse wallet integration coming soon');
  }

  private async connectOrdinalsWallet(): Promise<WalletInfo> {
    // Placeholder - implement actual Ordinals Wallet connection
    throw new Error('Ordinals Wallet integration coming soon');
  }

  private async connectLeather(): Promise<WalletInfo> {
    // Placeholder - implement actual Leather wallet connection
    throw new Error('Leather wallet integration coming soon');
  }

  private async connectPhantom(): Promise<WalletInfo> {
    // Placeholder - implement actual Phantom wallet connection
    throw new Error('Phantom wallet integration coming soon');
  }

  // Transaction methods
  async signMessage(message: string): Promise<string> {
    if (!this.walletInfo) {
      throw new Error('No wallet connected');
    }

    switch (this.walletInfo.provider) {
      case 'unisat':
        if (!(window as any).unisat) {
          throw new Error('Unisat wallet not available');
        }
        return await (window as any).unisat.signMessage(message);
      default:
        throw new Error(`Signing not supported for ${this.walletInfo.provider}`);
    }
  }

  async sendBitcoin(toAddress: string, amount: number): Promise<string> {
    if (!this.walletInfo) {
      throw new Error('No wallet connected');
    }

    switch (this.walletInfo.provider) {
      case 'unisat':
        if (!(window as any).unisat) {
          throw new Error('Unisat wallet not available');
        }
        const txid = await (window as any).unisat.sendBitcoin(toAddress, amount);

        // Track transaction
        runInAction(() => {
          this.transactions.push({
            txid,
            status: 'pending',
            confirmations: 0,
            timestamp: new Date().toISOString(),
          });
        });

        return txid;
      default:
        throw new Error(`Transaction not supported for ${this.walletInfo.provider}`);
    }
  }

  // Update wallet balance
  async updateBalance() {
    if (!this.walletInfo) return;

    try {
      switch (this.walletInfo.provider) {
        case 'unisat':
          if ((window as any).unisat) {
            const balance = await (window as any).unisat.getBalance();
            runInAction(() => {
              if (this.walletInfo) {
                this.walletInfo.balance = balance.confirmed;
              }
            });
          }
          break;
        default:
          break;
      }
    } catch (error) {
      console.error('Error updating balance:', error);
    }
  }

  // Clear error
  clearError() {
    this.error = null;
  }

  // Computed values
  get isConnected() {
    return !!this.walletInfo?.connected;
  }

  get shortAddress() {
    if (!this.walletInfo?.address) return '';
    const addr = this.walletInfo.address;
    return `${addr.slice(0, 6)}...${addr.slice(-4)}`;
  }

  get balanceInBTC() {
    return (this.walletInfo?.balance || 0) / 100000000;
  }
}
