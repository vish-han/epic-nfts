require("@nomiclabs/hardhat-etherscan");
require( "@nomiclabs/hardhat-ethers");



/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.7",
  networks:{
  goerli  : {
      url:'https://aged-intensive-violet.ethereum-goerli.discover.quiknode.pro/dee808ac3a1c8dbbdb8fbc03d7ab989585f523c6/',
      accounts:['0794e7ce27e4c3b54bc1de24e3b1c8774095bb75cdbe44f879ff42b7660a6f3a'],
    }
  },
  etherscan: {
    apiKey:'RUS49Q72R5CSRQ79BXV4Y438WZHDFEZVTJ'
  }
};
