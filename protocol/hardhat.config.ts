require('dotenv').config();
import '@nomiclabs/hardhat-waffle';
import 'hardhat-typechain';
import '@nomiclabs/hardhat-etherscan';

import { HardhatUserConfig } from 'hardhat/config';
import { NetworksUserConfig } from 'hardhat/types';

import './tasks';

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more
const {
  RINKEBY_NETWORK_RPC_URL,
  RINKEBY_MNEMONIC,
  MAINNET_PRIVATE_KEY,
  MAINNET_NETWORK_RPC_URL,
  ETHERSCAN_API_KEY,
} = process.env;

const config: HardhatUserConfig = {
  solidity: '0.8.0',
  networks: {},
  etherscan: {
    // Your API key for Etherscan
    // Obtain one at https://etherscan.io/
    apiKey: ETHERSCAN_API_KEY ?? '',
  },
};

if (RINKEBY_NETWORK_RPC_URL && RINKEBY_MNEMONIC) {
  (config.networks as NetworksUserConfig).rinkeby = {
    url: RINKEBY_NETWORK_RPC_URL,
    accounts: {
      mnemonic: RINKEBY_MNEMONIC,
    },
  };
}

if (MAINNET_NETWORK_RPC_URL && MAINNET_PRIVATE_KEY) {
  (config.networks as NetworksUserConfig).mainnet = {
    url: MAINNET_NETWORK_RPC_URL,
    accounts: [MAINNET_PRIVATE_KEY],
  };
}

export default config;
