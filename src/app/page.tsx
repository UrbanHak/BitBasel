'use client';

import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import MarketplaceGrid from '@/components/MarketplaceGrid';
import { useMarketplaceStore } from '@/store/StoreProvider';

const HomePage: React.FC = observer(() => {
  const marketplaceStore = useMarketplaceStore();

  useEffect(() => {
    // Fetch initial data
    marketplaceStore.fetchStats();
    marketplaceStore.fetchPriceData();
  }, [marketplaceStore]);

  return (
    <>
      <Navigation />

      <main>
        {/* Hero Section */}
        <section className="hero">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title">
                Your City's
                <br />
                <span className="hero-highlight">CryptoArt Community</span>
              </h1>
              <p className="hero-description">
                Discover, collect, and trade Bitcoin Ordinal inscriptions on the blockchain. Join
                Miami's premier marketplace for digital art that lives forever on Bitcoin.
              </p>
              <div className="hero-actions">
                <button className="btn-primary hero-btn">Explore Ordinals</button>
                <button className="btn-outline hero-btn">Learn More</button>
              </div>

              {/* Market Stats */}
              {marketplaceStore.stats && (
                <div className="hero-stats">
                  <div className="stat-card">
                    <div className="stat-value">
                      {marketplaceStore.stats.totalItems.toLocaleString()}
                    </div>
                    <div className="stat-label">Inscriptions</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">
                      {marketplaceStore.stats.totalVolume.toFixed(1)}
                    </div>
                    <div className="stat-label">BTC Volume</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">{marketplaceStore.stats.totalCollections}</div>
                    <div className="stat-label">Collections</div>
                  </div>
                  <div className="stat-card">
                    <div className="stat-value">{marketplaceStore.stats.activeListings}</div>
                    <div className="stat-label">Listed</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Featured Collections */}
        <section className="featured-section">
          <div className="container">
            <div className="section-header">
              <h2 className="text-heading-2">Featured Collections</h2>
              <p className="section-subtitle">
                Curated collections from verified artists and creators
              </p>
            </div>
            <MarketplaceGrid type="collections" featured={true} />
            <div className="section-footer">
              <button className="btn-outline">View All Collections</button>
            </div>
          </div>
        </section>

        {/* Latest Inscriptions */}
        <section className="latest-section">
          <div className="container">
            <div className="section-header">
              <h2 className="text-heading-2">Latest Inscriptions</h2>
              <p className="section-subtitle">
                Recently minted Bitcoin Ordinals ready for collection
              </p>
            </div>
            <MarketplaceGrid type="ordinals" featured={true} />
            <div className="section-footer">
              <button className="btn-outline">Explore Marketplace</button>
            </div>
          </div>
        </section>

        {/* Newsletter Signup */}
        <section className="newsletter-section">
          <div className="container">
            <div className="newsletter-content">
              <h2 className="text-heading-2">Stay Updated</h2>
              <p>Get the latest news on Bitcoin Ordinals, featured drops, and community events.</p>
              <form className="newsletter-form">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                  required
                />
                <button type="submit" className="btn-primary">
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
});

export default HomePage;
