require("@nomiclabs/hardhat-etherscan");
require( "@nomiclabs/hardhat-ethers");



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  networks:{
    mumbai: {
      url:'https://black-icy-haze.matic-testnet.discover.quiknode.pro/mktp-a945e075e34e7ef1e96e424d6cc01a21aa79d006/',
      accounts:['0794e7ce27e4c3b54bc1de24e3b1c8774095bb75cdbe44f879ff42b7660a6f3a'],
    }
  },
  etherscan: {
    apiKey:'IFV6388YUDJQQAT24KE62B5QTMAWBXUKDG'
  }
};
