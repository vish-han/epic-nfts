import './App.css';
import twitterLogo from './twitter-logo.svg';
import React,{useEffect,useState} from "react";
import{ethers} from 'ethers';
import { CONTRACT_ADDRESS,ABI } from './constant';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// Constants
const TWITTER_HANDLE = 'vishaldev09';
const TWITTER_LINK = `https://twitter.com/${TWITTER_HANDLE}`;
const OPENSEA_LINK = '';
const TOTAL_MINT_COUNT = 50;

const App = () => {
  const[currentAccount,setCurrentAccount]=useState("")
  const [loading,setLoading]=useState(null)
  const checkIfWalletConnected = async () => {

    if (!window.ethereum) {
      console.log("Make sure you have metamask!");
      return;
    } else {
      console.log("We have the ethereum object", window.ethereum);
    }

    const accounts = await window.ethereum.request({ method: 'eth_accounts' });
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account:", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  
  }
  toast('🦄 Minting Started!', {
    position: "bottom-center",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    });
  // Render Methods
  const renderNotConnectedContainer = () => (
    <button className="cta-button connect-wallet-button my-3" onClick={connectWallet}>
      Connect to Wallet
    </button>
  );
  const connectWallet = async () => {
    try {
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      /*
      * Fancy method to request access to account.
      */
      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      /*
      * Boom! This should print out public address once we authorize Metamask.
      */

      
      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]); 
    } catch (error) {
      console.log(error);
    }
  }
  const askContractToMintNft = async () => {
    
  
    try {
      const { ethereum } = window;
  
      if (ethereum) {
        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const connectedContract = new ethers.Contract(CONTRACT_ADDRESS, ABI, signer);
  
        console.log("Going to pop wallet now to pay gas...")
        let nftTxn = await connectedContract.makeAnEpicNFT();
  
        console.log("Mining...please wait.")
        setLoading(true)
        await nftTxn.wait();
        setLoading(false)
        console.log(`Mined, see transaction: https://goerli.etherscan.io/tx/${nftTxn.hash}`);
  
      } else {
        console.log("Ethereum object doesn't exist!");
      }
    } catch (error) {
      console.log(error)
    }
  }
const chainCheck= async () => {
  let chainId = await window.ethereum.request({ method: 'eth_chainId' });
console.log("Connected to chain " + chainId);

// String, hex code of the chainId of the Rinkebey test network
const goerliChainId = "0x5"; 
if (chainId !== goerliChainId) {
	alert("You are not connected to the Goerli Test Network!");
}
}
  useEffect(() => {
    chainCheck();
    checkIfWalletConnected();
    
  },[])

  return (
    <div className="App flex">
      <div className="container pt-[250px]">
        <div className="header-container">
          <p className="header gradient-text">My NFT Collection</p>
          <p className="sub-text my-3">
            Each unique. Each beautiful. Discover your NFT today.
          </p>
          {currentAccount === "" ? (
            renderNotConnectedContainer()
          ) : (
            <button onClick={askContractToMintNft} className="cta-button connect-wallet-button">
              {loading?"Miniting....":"Mint NFT"}
             
            </button>)}
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