import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const collectionStats = [
  { label: 'Volume', value: '$18.4M', delta: '+24.9%' },
  { label: 'Floor Price', value: '2.84 ETH', delta: '+8.1%' },
  { label: 'Holders', value: '9,832', delta: '+1.5%' },
  { label: 'Sales', value: '1,284', delta: '+12.6%' },
];

const trendingCollections = [
  {
    name: 'Cyber Forge',
    owner: '@neonforge',
    floor: '2.14 ETH',
    volume: '$2.8M',
    change: '+18.2%',
    accent: 'linear-gradient(135deg, #68e1fd 0%, #7c4dff 100%)',
  },
  {
    name: 'Astra Guild',
    owner: '@astraguild',
    floor: '1.82 ETH',
    volume: '$2.1M',
    change: '+11.9%',
    accent: 'linear-gradient(135deg, #30d5c8 0%, #1f7ae0 100%)',
  },
  {
    name: 'Vanta Vault',
    owner: '@vanta',
    floor: '3.31 ETH',
    volume: '$3.6M',
    change: '+21.3%',
    accent: 'linear-gradient(135deg, #ffa94d 0%, #ff4d6d 100%)',
  },
];

const marketplaceItems = [
  {
    title: 'Neon Nomad #142',
    artist: 'Dawn Ledger',
    currency: 'ETH',
    price: '2.42',
    bid: '2.10 ETH',
    rarity: 'Epic',
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Quantum Bloom',
    artist: 'Luma Studio',
    currency: 'USDC',
    price: '6400',
    bid: '6,100 USDC',
    rarity: 'Rare',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Void Oracle',
    artist: 'Astra Labs',
    currency: 'ETH',
    price: '4.18',
    bid: '3.96 ETH',
    rarity: 'Legendary',
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
  },
  {
    title: 'Signal Drift',
    artist: 'Mono Frame',
    currency: 'ETH',
    price: '1.73',
    bid: '1.61 ETH',
    rarity: 'Rare',
    image: 'https://images.unsplash.com/photo-1493246507139-91e8fad9978e?auto=format&fit=crop&w=900&q=80',
  },
];

const portfolio = [
  { label: 'Portfolio Value', value: '$124.6K', accent: 'cyan' },
  { label: 'Unclaimed Rewards', value: '$18.3K', accent: 'violet' },
  { label: '24h P/L', value: '+$7.2K', accent: 'green' },
];

const activity = [
  { type: 'Bought', asset: 'Neon Nomad #142', value: '2.42 ETH', time: '12 min ago' },
  { type: 'Listed', asset: 'Helio Capsule', value: '1.2 ETH', time: '1 hr ago' },
  { type: 'Sold', asset: 'Vanta Echo', value: '3.7 ETH', time: '2 hrs ago' },
  { type: 'Staked', asset: 'Luma Vault', value: '8,400 USDC', time: '5 hrs ago' },
];

function App() {
  const [walletConnected, setWalletConnected] = React.useState(false);

  const handleConnect = () => setWalletConnected((value) => !value);

  return (
    <div className="page-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">D</div>
          <div>
            <div className="brand-name">DeeJae Exchange</div>
            <div className="brand-subtitle">Digital Asset Network</div>
          </div>
        </div>

        <nav className="nav">
          <a href="#marketplace">Marketplace</a>
          <a href="#collections">Collections</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#analytics">Analytics</a>
        </nav>

        <div className="header-actions">
          <button className="ghost-btn">Create</button>
          <button className="primary-btn" onClick={handleConnect}>
            {walletConnected ? '0x7A9C...4D2E' : 'Connect Wallet'}
          </button>
        </div>
      </header>

      <main className="content">
        <section className="hero panel">
          <div className="hero-copy">
            <span className="eyebrow">NFT exchange + digital asset platform</span>
            <h1>Trade premium digital assets across the next wave of web3 commerce.</h1>
            <p>
              Discover, mint, trade, and manage NFT collections and digital goods through a
              streamlined marketplace built for creators, collectors, and investors.
            </p>
            <div className="cta-row">
              <button className="primary-btn large">Explore Marketplace</button>
              <button className="ghost-btn large">Open Creator Studio</button>
            </div>
            <div className="mini-stats">
              {collectionStats.map((stat) => (
                <div key={stat.label} className="mini-card">
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                  <em>{stat.delta}</em>
                </div>
              ))}
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-card main-card">
              <div className="visual-header">
                <span>Featured drop</span>
                <span className="pill">Live</span>
              </div>
              <div className="art-panel" />
              <div className="art-meta">
                <div>
                  <small>Current bid</small>
                  <strong>3.84 ETH</strong>
                </div>
                <div>
                  <small>Ends in</small>
                  <strong>05:34:12</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="collections" className="section-header">
          <div>
            <span className="eyebrow">Trending</span>
            <h2>Top collections this week</h2>
          </div>
          <button className="ghost-btn">View all</button>
        </section>

        <section className="collection-grid">
          {trendingCollections.map((collection) => (
            <article key={collection.name} className="collection-card panel">
              <div className="thumb" style={{ background: collection.accent }} />
              <div className="collection-row">
                <div>
                  <h3>{collection.name}</h3>
                  <small>{collection.owner}</small>
                </div>
                <span className="trend">{collection.change}</span>
              </div>
              <div className="metric-row">
                <div>
                  <small>Floor</small>
                  <strong>{collection.floor}</strong>
                </div>
                <div>
                  <small>Volume</small>
                  <strong>{collection.volume}</strong>
                </div>
              </div>
            </article>
          ))}
        </section>

        <section id="marketplace" className="marketplace-layout">
          <div className="main-panel panel">
            <div className="section-header compact">
              <div>
                <span className="eyebrow">Marketplace</span>
                <h2>Curated digital assets</h2>
              </div>
              <div className="filter-box">Filter: All Assets</div>
            </div>

            <div className="asset-grid">
              {marketplaceItems.map((item) => (
                <article key={item.title} className="asset-card">
                  <div className="asset-image-wrap">
                    <img src={item.image} alt={item.title} />
                    <span className="rarity-tag">{item.rarity}</span>
                  </div>
                  <div className="asset-body">
                    <div className="asset-line">
                      <h3>{item.title}</h3>
                      <span>{item.currency}</span>
                    </div>
                    <small>{item.artist}</small>
                    <div className="asset-meta">
                      <div>
                        <small>Price</small>
                        <strong>{item.price} ETH</strong>
                      </div>
                      <div>
                        <small>Bid</small>
                        <strong>{item.bid}</strong>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <aside id="analytics" className="side-panel panel">
            <div className="section-header compact">
              <div>
                <span className="eyebrow">Portfolio</span>
                <h2>Overview</h2>
              </div>
            </div>

            <div className="portfolio-list">
              {portfolio.map((item) => (
                <div key={item.label} className={`portfolio-card ${item.accent}`}>
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>

            <div className="activity-panel">
              <div className="section-header compact small-gap">
                <div>
                  <span className="eyebrow">Activity</span>
                  <h3>Recent transactions</h3>
                </div>
              </div>

              <ul>
                {activity.map((entry) => (
                  <li key={`${entry.type}-${entry.asset}`}>
                    <div className="bullet" />
                    <div>
                      <strong>{entry.type}</strong>
                      <span>{entry.asset}</span>
                    </div>
                    <div className="activity-side">
                      <strong>{entry.value}</strong>
                      <small>{entry.time}</small>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
