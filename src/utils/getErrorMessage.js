/* eslint-disable no-console */
import React, { useEffect } from "react";
import {
  Web3ReactProvider,
  useWeb3React,
  UnsupportedChainIdError,
} from "@web3-react/core";
import {
  NoEthereumProviderError,
  UserRejectedRequestError as UserRejectedRequestErrorInjected,
} from "@web3-react/injected-connector";
// import { UserRejectedRequestError as UserRejectedRequestErrorFrame } from "@web3-react/frame-connector";

// export const MetamaskErrorMessage = (error) => {
//   const message = error.data
//     ? error.data.message
//     : "execution reverted: Unknown error";
//   return message.slice(20);
// };

export function getErrorMessage(error) {
  if (error instanceof NoEthereumProviderError) {
    return "No Ethereum browser extension detected, install MetaMask on desktop or visit from a dApp browser on mobile.";
  } else if (error instanceof UnsupportedChainIdError) {
    return "You're connected to an unsupported network.";
  } else if (
    error instanceof UserRejectedRequestErrorInjected
    // error instanceof UserRejectedRequestErrorFrame
  ) {
    return "Please authorize this website to access your Ethereum account.";
  } else {
    return (
      error?.data?.message ||
      error?.data?.reason ||
      error?.message ||
      "An unknown error occurred. Check the console for more details."
    );
  }
}
