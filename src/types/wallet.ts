// Wallet Connection Types
export interface WalletInfo {
  address: string;
  publicKey: string;
  balance: number;
  network: 'mainnet' | 'testnet';
  connected: boolean;
  provider: WalletProvider;
}

export type WalletProvider =
  | 'unisat'
  | 'xverse'
  | 'ordinals-wallet'
  | 'sparrow'
  | 'leather'
  | 'phantom';

export interface WalletConnection {
  connect: (provider: WalletProvider) => Promise<WalletInfo>;
  disconnect: () => Promise<void>;
  signMessage: (message: string) => Promise<string>;
  signTransaction: (txHex: string) => Promise<string>;
  sendBitcoin: (address: string, amount: number) => Promise<string>;
  getBalance: () => Promise<number>;
}

export interface TransactionStatus {
  txid: string;
  status: 'pending' | 'confirmed' | 'failed';
  confirmations: number;
  timestamp: string;
}
