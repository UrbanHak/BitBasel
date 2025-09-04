# BitBasel - Secure Bitcoin Ordinals Marketplace

**🔒 Security-First Digital Asset Trading Platform**

A modern Bitcoin Ordinals marketplace built with Next.js 14, featuring enterprise-grade security, multi-wallet integration, and comprehensive user protection.

![Security](https://img.shields.io/badge/Security-Enterprise%20Grade-red?style=flat-square&logo=shield)
![Next.js](https://img.shields.io/badge/Next.js-14.2.32-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-Strict-blue?style=flat-square&logo=typescript)
![Bitcoin](https://img.shields.io/badge/Bitcoin-Mainnet-f7931a?style=flat-square&logo=bitcoin)

## 🛡️ **Security Features**

### **Core Security Measures**
- **Client-Side Only Wallet Interactions** - No private keys ever transmitted or stored
- **Multi-Signature Transaction Support** - Enhanced security for high-value trades
- **Content Security Policy (CSP)** - Protection against XSS attacks
- **HTTPS Enforcement** - TLS 1.3 encryption for all communications
- **Input Sanitization** - Complete protection against injection attacks
- **Rate Limiting** - Protection against DDoS and brute force attacks

### **Wallet Security**
- **Hardware Wallet Support** - Ledger, Trezor integration
- **Message Signing Verification** - Cryptographic proof of ownership
- **Secure Session Management** - JWT tokens with proper expiration
- **Connection Monitoring** - Real-time wallet status tracking

## 🎨 Design Philosophy

BitBasel features a **sophisticated dark theme** inspired by the original BitBasel marketplace, with:

- **Professional Bitcoin aesthetic** with custom color palette
- **Machina typography** for a futuristic, technical feel  
- **Smooth animations** and micro-interactions
- **Mobile-first responsive design**
- **Accessible UI components** following modern standards

## 🚀 Features

### Core Marketplace Features
- **Bitcoin Ordinals Display** - Browse and discover inscriptions
- **Collection Management** - Curated collections with verification badges  
- **Advanced Filtering** - Search, sort, and filter by various criteria
- **Responsive Grid Layouts** - Optimized for all device sizes

### Wallet Integration
- **Multi-Wallet Support** - Unisat, Xverse, Ordinals Wallet, Leather, Phantom
- **Connection Management** - Persistent wallet sessions
- **Transaction Ready** - Built for Bitcoin transactions (frontend)
- **Security First** - Client-side only, no private key storage

### Technical Excellence
- **Next.js 14 App Router** - Latest React patterns and SSR
- **TypeScript Strict Mode** - Full type safety throughout
- **MobX State Management** - Reactive, efficient state updates
- **Modern CSS** - Custom properties, CSS Grid, Flexbox
- **Performance Optimized** - Code splitting and lazy loading

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | Next.js 14.2.32 with App Router |
| **Language** | TypeScript with strict type checking |
| **State Management** | MobX 6 for reactive state |
| **Styling** | Custom CSS with design system |
| **HTTP Client** | Axios for API communication |
| **Code Quality** | ESLint + Prettier + Husky |
| **Wallet Integration** | Multi-provider Bitcoin wallet support |

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd BitBasel

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Development Commands

```bash
# Development
npm run dev          # Start development server
npm run build        # Build for production
npm start           # Start production server

# Code Quality
npm run lint        # Run ESLint
npm run lint:fix    # Fix ESLint issues
npm run prettier    # Format code
npm run type-check  # TypeScript checking
```

## 📁 Project Structure

```
src/
├── app/                 # Next.js App Router pages
├── components/          # Reusable React components
│   ├── WalletConnect.tsx    # Multi-wallet connection
│   ├── MarketplaceGrid.tsx  # Ordinals/collections grid
│   ├── OrdinalCard.tsx      # Individual ordinal display
│   └── CollectionCard.tsx   # Collection display
├── store/              # MobX state management
│   ├── MarketplaceStore.ts  # Marketplace state
│   ├── WalletStore.ts       # Wallet connection state
│   └── StoreProvider.tsx    # React context provider
├── types/              # TypeScript definitions
├── styles/             # CSS stylesheets
├── data/               # Mock data for development
└── constants/          # App constants
```

## 🎯 Key Components

### Marketplace Grid
Displays Bitcoin Ordinals and Collections in responsive grid layouts with:
- Loading states and skeleton screens
- Search and filtering capabilities
- Sort options (price, date, rarity)
- Infinite scroll ready

### Wallet Connect
Multi-provider wallet integration supporting:
- **Unisat** (fully implemented)
- **Xverse** (structure ready)
- **Ordinals Wallet** (structure ready)
- **Leather** (structure ready)
- **Phantom** (structure ready)

### State Management
Reactive MobX stores handling:
- Ordinals and collections data
- Wallet connection state
- UI state (loading, errors, filters)
- Search and pagination

## 🎨 Design System

### Color Palette
```css
--color-primary: #1a1a1a      /* Main dark */
--color-secondary: #2a2a2a    /* Secondary dark */
--color-accent: #3a82f6       /* Blue accent */
--color-background: #0a0a0a   /* Deep black */
--color-surface: #151515      /* Card background */
--color-bitcoin: #f7931a      /* Bitcoin orange */
--color-ordinals: #ff6b35     /* Ordinals accent */
```

### Typography
- **Primary**: Machina (custom web font)
- **Fallback**: System fonts (-apple-system, BlinkMacSystemFont)
- **Hierarchy**: Responsive type scale with proper line heights

## 🔧 Configuration

### Environment Variables

Create `.env.development` and `.env.production` files:

```env
# API Configuration
API_URL=https://api.bitbasel.miami
BASE_URL=https://app.bitbasel.miami

# Wallet Configuration  
WALLET_CONNECT_PROJECT_ID=your_project_id

# Bitcoin Network
BITCOIN_NETWORK=mainnet
ORDINALS_API_URL=https://ordinals.com/api

# Social Media
TWITTER_URL=https://twitter.com/bitbasel
DISCORD_URL=https://discord.gg/bitbasel
TELEGRAM_URL=https://t.me/bitbasel
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

The application is optimized for deployment on:
- **Vercel** (recommended)
- **Netlify**  
- **AWS Amplify**
- Any static hosting service

## 📱 Browser Support

- **Modern browsers** with ES6+ support
- **Mobile Safari** and **Chrome** optimized
- **Bitcoin wallet extensions** compatible
- **Progressive Web App** ready

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)  
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Original BitBasel** - Inspiration for design and functionality
- **Bitcoin Ordinals** - Revolutionary digital artifacts on Bitcoin
- **Next.js Team** - Excellent React framework
- **MobX** - Reactive state management

---

**Built with ❤️ for the Bitcoin Ordinals community**

> This is a frontend showcase demonstrating modern web development practices for Bitcoin applications. For production use, connect to a proper Bitcoin Ordinals API and implement backend services.