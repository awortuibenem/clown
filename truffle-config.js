const HDWalletProvider = require('@truffle/hdwallet-provider');
require('dotenv').config();

const infuraKey = process.env.INFURA_KEY;
const mnemonic = process.env.MNEMONIC;

if (!infuraKey || !mnemonic) {
  throw new Error("Please set INFURA_KEY and MNEMONIC environment variables in the .env file.");
}

module.exports = {
  networks: {
    sepolia: {
      provider: () => new HDWalletProvider({
        mnemonic: {
          phrase: mnemonic
        },
        providerOrUrl: `https://sepolia.infura.io/v3/${infuraKey}`
      }),
      network_id: 11155111,
      gas: 5500000,
      confirmations: 2,
      timeoutBlocks: 200,
      skipDryRun: true
    },
  },
  compilers: {
    solc: {
      version: "^0.8.20",
    }
  }
};
