import React from "react";
import "./globals.css";

/* ---------- Reusable Components ---------- */

const Tag = ({ icon, text }) => (
  <div className="tag-item">
    {icon && <img src={icon} alt="icon" />}
    {text && <span>{text}</span>}
  </div>
);

const StatTag = ({ title, value }) => (
  <div className="stat-tag">
    <span>{title}</span>
    <span>{value}</span>
  </div>
);

const HighlightCard = ({ gradient, image, title, subtitle, name, amount, time, xp }) => (
  <div className="highlights-card">
    <div className={`gradient-wrapper ${gradient}`} />

    <div className="upper-card-wrapper">
      <img src={image} alt={title} />
      <div>
        <div>{title}</div>
        <div>{subtitle}</div>
      </div>
    </div>

    <div className="row-highlight-container">
      <span>{name}</span>
      <div className="amount">
        {amount} <img src="eth_icon.svg" alt="ETH" />
      </div>
    </div>

    <div className="row-highlight-second-container">
      <span>{time}</span>
      <span className="xp">{xp}</span>
    </div>
  </div>
);

const NFTCard = ({ image, name, bought, floor, change }) => (
  <div className="profile-long-container">
    <div className="img-container">
      <img src={image} alt={name} />
      <div className="tag">3 months</div>
    </div>

    <div className="nft-description-container">
      <h4>{name}</h4>

      <div className="row">
        <span>Bought</span>
        <span>{bought} ETH</span>
      </div>

      <div className="row">
        <span>Floor</span>
        <span>{floor} ETH ({change})</span>
      </div>
    </div>
  </div>
);

/* ---------- Main Page ---------- */

const HomePage = () => {
  const highlights = [
    {
      gradient: "gradient-1",
      image: "ens_linked_img.svg",
      title: "ENS Linked",
      subtitle: "ENS Linked",
      name: "dingaling.eth",
      amount: "1.82",
      time: "2 months ago",
      xp: "+200XP",
    },
    {
      gradient: "gradient-2",
      image: "best_flip_img.svg",
      title: "Best Flip",
      subtitle: "Sold",
      name: "CryptoPunk #2131",
      amount: "98.5",
      time: "10 days ago",
      xp: "+150XP",
    },
  ];

  const nfts = [
    { image: "azuki_img.svg", name: "Azuki #9839", bought: "2.82", floor: "12.74", change: "+21.6%" },
    { image: "mayac_img.svg", name: "MAYC #9839", bought: "2.82", floor: "12.74", change: "+21.6%" },
  ];

  return (
    <main className="container">
      {/* Fonts should ideally go in _document.js or layout.tsx */}
      <link href="https://fonts.googleapis.com/css?family=Familjen Grotesk" rel="stylesheet" />

      {/* ---------- Profile Card ---------- */}
      <section className="about-card">
        <div className="about-header">
          <img src="about_icon_img.svg" alt="profile" />
          <div>
            <h2>dingaling.eth</h2>
            <p>0xadgf....jkld</p>
          </div>
          <span className="level">LVL 2</span>
        </div>

        <div className="tags">
          <Tag icon="twitter_icon.svg" text="@dingalingts" />
          <Tag icon="globe_img.svg" />
        </div>

        <p className="bio">
          Investor / Collector of NFTs. Co-Founder of @nftboxes.
        </p>

        <div className="stats">
          <StatTag title="Art" value="12%" />
          <StatTag title="Utility" value="12%" />
          <StatTag title="PFP" value="12%" />
        </div>

        <button className="subscribe-btn">
          Subscribe <img src="subscribe_icon.svg" alt="subscribe" />
        </button>
      </section>

      {/* ---------- Highlights ---------- */}
      <section className="highlights">
        {highlights.map((item, i) => (
          <HighlightCard key={i} {...item} />
        ))}
      </section>

      {/* ---------- NFT List ---------- */}
      <section className="nft-list">
        {nfts.map((nft, i) => (
          <NFTCard key={i} {...nft} />
        ))}
      </section>
    </main>
  );
};

export default HomePage;
