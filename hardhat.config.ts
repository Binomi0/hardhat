import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";

const { ETHERSCAN_SEPOLIA_APIKEY, INFURA_SEPOLIA_URL, ADDRESS1, ADDRESS2 } =
  process.env;

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
  defaultNetwork: "sepolia",
  etherscan: {
    apiKey: {
      sepolia: ETHERSCAN_SEPOLIA_APIKEY || "",
    },
  },
  networks: {
    hardhat: {},
    sepolia: {
      url: INFURA_SEPOLIA_URL,
      accounts: [ADDRESS1 || "", ADDRESS2 || ""],
    },
  },
};

export default config;
