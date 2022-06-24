// scroll bar
import "simplebar/src/simplebar.css";
import "react-toastify/dist/ReactToastify.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
// Providers
import { SearchProvider } from "./contexts/SearchContext";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import { Provider as ReduxProvider } from "react-redux";
import {
  ChainId,
  DAppProvider,
  useEtherBalance,
  useEthers,
} from "@usedapp/core";

import { store } from "redux/store";
import { BrowserRouter } from "react-router-dom";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { ToastContainer } from "react-toastify";
import { HelmetProvider } from "react-helmet-async";

import { ReactGAM } from "utils/google-analytics";

const config = {
  readOnlyChainId: ChainId.Mainnet,
};

ReactGAM().init();
ReactGAM().trackPageView(window.location.pathname);

ReactDOM.render(
  <StrictMode>
    <HelmetProvider>
      <DAppProvider config={config}>
        <SearchProvider>
          <ReduxProvider store={store}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <BrowserRouter>
                <App />
                <ToastContainer />
              </BrowserRouter>
            </LocalizationProvider>
          </ReduxProvider>
        </SearchProvider>
      </DAppProvider>
    </HelmetProvider>
  </StrictMode>,
  document.getElementById("root")
);
