import { Contract } from '@ethersproject/contracts'
import { getAddress } from "@ethersproject/address";
import { AddressZero } from "@ethersproject/constants";

// returns the checksummed address if the address is valid, otherwise returns false
export function isAddress(value) {
  try {
    return getAddress(value);
  } catch {
    return false;
  }
}

// account is not optional
export function getSigner(library, account) {
  return library.getSigner(account).connectUnchecked();
}

// account is optional
export function getProviderOrSigner(library, account = "") {
  return account ? getSigner(library, account) : library;
}

// account is optional
export function getContract(address, ABI, library, account = "") {
  if (!isAddress(address) || address === AddressZero) {
    throw Error(`Invalid 'address' parameter '${address}'.`);
  }

  return new Contract(address, ABI, getProviderOrSigner(library, account));
}
