import { ethers } from "hardhat";

async function main() {
  const lockedAmount = ethers.utils.parseEther("0.001");

  const Airline = await ethers.getContractFactory("AirlineCoin");
  const airLine = await Airline.deploy('Airline Coin', 'AIRL');

  await airLine.deployed();

  console.log(
    `Lock with ${ethers.utils.formatEther(lockedAmount)} deployed to ${airLine.address}`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
