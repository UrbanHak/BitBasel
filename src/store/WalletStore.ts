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

      // Fetch balance after connection
      setTimeout(() => this.updateBalance(), 1000);

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
    if (!(window as any).BitcoinProvider || !(window as any).StacksProvider) {
      throw new Error('Xverse wallet not found. Please install the Xverse extension.');
    }

    const xverse = (window as any).BitcoinProvider;
    const response = await xverse.connect();
    
    if (response.status === 'success') {
      const addressResponse = await xverse.getAddresses();
      const address = addressResponse.result.addresses[0];
      
      return {
        address: address.address,
        publicKey: address.publicKey || '',
        balance: 0, // Will be fetched separately
        network: 'mainnet',
        connected: true,
        provider: 'xverse',
      };
    }
    
    throw new Error('Failed to connect to Xverse wallet');
  }

  private async connectOrdinalsWallet(): Promise<WalletInfo> {
    if (!(window as any).ordinalsWallet) {
      throw new Error('Ordinals Wallet not found. Please install the Ordinals Wallet extension.');
    }

    const ordinalsWallet = (window as any).ordinalsWallet;
    const accounts = await ordinalsWallet.requestAccounts();
    const publicKey = await ordinalsWallet.getPublicKey();
    const network = await ordinalsWallet.getNetwork();

    return {
      address: accounts[0],
      publicKey,
      balance: 0, // Will be fetched separately
      network: network === 'livenet' ? 'mainnet' : 'testnet',
      connected: true,
      provider: 'ordinals-wallet',
    };
  }

  private async connectLeather(): Promise<WalletInfo> {
    if (!(window as any).LeatherProvider) {
      throw new Error('Leather wallet not found. Please install the Leather extension.');
    }

    const leather = (window as any).LeatherProvider;
    const response = await leather.request('getAddresses');
    
    if (response.result && response.result.addresses.length > 0) {
      const address = response.result.addresses[0];
      
      return {
        address: address.address,
        publicKey: address.publicKey || '',
        balance: 0, // Will be fetched separately
        network: 'mainnet',
        connected: true,
        provider: 'leather',
      };
    }
    
    throw new Error('Failed to connect to Leather wallet');
  }

  private async connectPhantom(): Promise<WalletInfo> {
    if (!(window as any).phantom?.bitcoin) {
      throw new Error('Phantom Bitcoin not found. Please install Phantom with Bitcoin support.');
    }

    const phantom = (window as any).phantom.bitcoin;
    const response = await phantom.connect();
    
    if (response.address) {
      return {
        address: response.address,
        publicKey: response.publicKey || '',
        balance: 0, // Will be fetched separately
        network: 'mainnet',
        connected: true,
        provider: 'phantom',
      };
    }
    
    throw new Error('Failed to connect to Phantom wallet');
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
      let newBalance = 0;
      
      switch (this.walletInfo.provider) {
        case 'unisat':
          if ((window as any).unisat) {
            const balance = await (window as any).unisat.getBalance();
            newBalance = balance.confirmed;
          }
          break;
        case 'xverse':
          if ((window as any).BitcoinProvider) {
            const response = await (window as any).BitcoinProvider.getBalance();
            newBalance = response.confirmed || 0;
          }
          break;
        case 'ordinals-wallet':
          if ((window as any).ordinalsWallet) {
            const balance = await (window as any).ordinalsWallet.getBalance();
            newBalance = balance.confirmed || balance.total || 0;
          }
          break;
        case 'leather':
        case 'phantom':
          // These wallets may require different balance fetching approaches
          // For now, keep existing balance
          break;
        default:
          break;
      }

      runInAction(() => {
        if (this.walletInfo && newBalance > 0) {
          this.walletInfo.balance = newBalance;
        }
      });
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
