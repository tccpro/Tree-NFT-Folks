// material
import { Box, Button } from "@mui/material";
import { toast } from "react-toastify";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import { useTreeFolksContract } from "hooks/useContract";

export default function Homepage() {
  const { library, account } = useEthers();
  const TreeFolksContract = useTreeFolksContract();
  console.log("TreeFolks", TreeFolksContract);
  // const balance = async () => {
  //   const result = await TreeFolksContract.balance;
  // };

  const handleWithdraw = async () => {
    try {
      // const txOptions = {
      //   value: ethers.utils.parseEther("60"),
      // };
      const result = await TreeFolksContract.withdraw();
      toast.success(`You withdrawed successfully!`);
      console.log(result);
    } catch (error) {
      console.log("Error:", error);
      if (error.data) {
        toast.error(error.data.message);
      } else {
        toast.error("Please switch the network to Polygon Mainnet");
      }
    }
  };
  return (
    <>
      <Button
        variant="contained"
        sx={{
          cursor: "pointer",
          transition: "all 0.3s",
          "&:hover": { transform: "scale(1.1)" },
        }}
        onClick={handleWithdraw}
      >
        WIthdraw
      </Button>
    </>
  );
}
