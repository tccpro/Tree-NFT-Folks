import { useEffect } from "react";
import Router from "./router";
import ThemeConfig from "theme";
import { setupNetwork } from "utils/wallet";

export default function App() {
  useEffect(() => {
    setupNetwork();
  });
  return (
    <ThemeConfig>
      <Router />
    </ThemeConfig>
  );
}
