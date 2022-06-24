import { Button } from "@mui/material";
import { useEthers, useEtherBalance } from "@usedapp/core";
export default function Logo() {
  const { activateBrowserWallet, deactivate, account } = useEthers();
  return (
    <>
      {account ? (
        <Button
          variant="contained"
          color="warning"
          sx={{ width: 182, height: 56, fontSize: 16, borderRadius: 2 }}
          onClick={deactivate}
        >
          {`${account.slice(0, 6)}...${account.slice(-6)}`}
        </Button>
      ) : (
        <Button
          variant="contained"
          color="warning"
          sx={{ width: 182, height: 56, fontSize: 16, borderRadius: 2 }}
          onClick={activateBrowserWallet}
        >
          Connect Wallet
        </Button>
      )}
    </>
  );
}
