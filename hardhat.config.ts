import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

require("dotenv").config();

const { ETHERSCAN_SEPOLIA_APIKEY, INFURA_SEPOLIA_URL, MNEMONIC } = process.env;

const config: HardhatUserConfig = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  // defaultNetwork: "sepolia",
  // etherscan: {
  //   apiKey: {
  //     sepolia: ETHERSCAN_SEPOLIA_APIKEY || "",
  //   },
  // },
  // networks: {
  //   hardhat: {},
  //   localhost: {
  //     accounts: {
  //       mnemonic: MNEMONIC,
  //       path: "m/44'/60'/0'/0",
  //       initialIndex: 0,
  //       count: 20,
  //       passphrase: "",
  //     },
  //   },
  //   sepolia: {
  //     url: INFURA_SEPOLIA_URL,
  //     accounts: {
  //       mnemonic: MNEMONIC,
  //       path: "m/44'/60'/0'/0",
  //       initialIndex: 0,
  //       count: 20,
  //       passphrase: "",
  //     },
  //   },
  // },
};

export default config;
