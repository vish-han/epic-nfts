import './App.css';
import twitterLogo from './twitter-logo.svg';
import React from "react";

// Constants
const TWITTER_HANDLE = 'vishaldev09';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const OPENSEA_LINK = '';
const TOTAL_MINT_COUNT = 50;

const App = () => {
  // Render Methods
  const renderNotConnectedContainer = () => (
    <button className="cta-button connect-wallet-button my-3">
      Connect to Wallet
    </button>
  );

  return (
    <div className="App flex">
      <div className="container pt-[150px]">
        <div className="header-container">
          <p className="header gradient-text">My NFT Collection</p>
          <p className="sub-text my-3">
            Each unique. Each beautiful. Discover your NFT today.
          </p>
          {renderNotConnectedContainer()}
        </div>
        <div className="footer-container">
          <img alt="Twitter Logo" className="twitter-logo" src={twitterLogo} />
          <a
            className="footer-text"
            href={TWITTER_LINK}
            target="_blank"
            rel="noreferrer"
          >{`built by @${TWITTER_HANDLE}`}</a>
        </div>
      </div>
    </div>
  );
};

export default App;