const { defender } = require("hardhat");

async function main() {
  const proxyAddress = "0xB2615b29E172BDa474Ec4E811e75804d571C3857";

  const BoxV2 = await ethers.getContractFactory("BoxV2");

  console.log("Preparing proposal...");
  const proposal = await defender.proposeUpgrade(proxyAddress, BoxV2);
  console.log("Upgrade proposal created at:", proposal.url);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
