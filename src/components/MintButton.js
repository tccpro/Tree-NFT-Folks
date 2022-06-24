// material
import { Box } from "@mui/material";
import { toast } from "react-toastify";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { useTreeFolksContract } from "hooks/useContract";
import { getErrorMessage } from "utils/getErrorMessage";

export default function Homepage() {
  const { library, account, activateBrowserWallet } = useEthers();
  const TreeFolksContract = useTreeFolksContract();

  const handleMint = async () => {
    try {
      const txOptions = {
        value: ethers.utils.parseEther("50"),
      };
      const result = await TreeFolksContract.mintNFTs(1, txOptions);
      toast.success(`You minted 1 TreeForks NFT successfully!`);
      console.log(result);
    } catch (error) {
      console.log("Error:", error);

      if (error.data) {
        toast.error(getErrorMessage(error));
      } else {
        // activateBrowserWallet();
        toast.error("Please switch the network to Polygon Mainnet");
      }
    }
  };
  return (
    <>
      {account ? (
        <Box
          component="img"
          src="/images/mint_btn.png"
          sx={{
            cursor: "pointer",
            transition: "all 0.3s",
            "&:hover": { transform: "scale(1.1)" },
          }}
          onClick={handleMint}
        />
      ) : (
        <Box
          component="img"
          src="/images/connect_btn.png"
          sx={{
            cursor: "pointer",
            transition: "all 0.3s",
            "&:hover": { transform: "scale(1.1)" },
          }}
          onClick={activateBrowserWallet}
        />
      )}
    </>
  );
}
