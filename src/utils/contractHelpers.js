import { ethers } from "ethers";
import TreeFolksAbi from "contracts/TreeFolksAbi.json";
import { TreeFolksAddress } from "contracts/address.js";

// const RPC_URL = getRpcUrl()
// const simpleRpcProvider = new ethers.providers.JsonRpcProvider(RPC_URL)

const getContract = (abi, address, signer) => {
  const signerOrProvider = signer;
  return new ethers.Contract(address, abi, signerOrProvider);
};
