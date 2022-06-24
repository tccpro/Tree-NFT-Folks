import { useEffect, useState } from "react";
// material
import { styled } from "@mui/material/styles";
import { Box, Stack, Typography, Container } from "@mui/material";
// components
import ReactPlayer from "react-player";
import ConnectButton from "components/ConnectButton";
import { useEthers } from "@usedapp/core";
import { formatUnits } from "ethers/lib/utils";
import { useTreeFolksContract } from "hooks/useContract";
import { toast } from "react-toastify";
// ----------------------------------------------------------------------

const RootStyle = styled(Box)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  paddingTop: 80,
  paddingBottom: 100,
  overflow: "hidden",
  position: "relative",
  background:
    "linear-gradient(180deg, #6A4142 0%, rgba(153, 72, 67, 0) 92.36%)",
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  const { account } = useEthers();
  const [ownedNfts, setOwnedNfts] = useState([]);
  const TreeFolksContract = useTreeFolksContract();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await TreeFolksContract.tokensOfOwner(account);
        const ownedNfts = res.map((item) => formatUnits(item, 0));
        setOwnedNfts(ownedNfts);
      } catch (error) {
        toast.error("Please switch to Polygon network");
      }
    };
    if (account) {
      fetchData();
    }
  }, [TreeFolksContract, account]);
  return (
    <>
      <RootStyle>
        <ContentStyle>
          <Container maxWidth="lg">
            <Stack alignItems="center">
              <Typography
                align="center"
                sx={{
                  lineHeight: 1.5,
                  color: "white",
                  mt: 10,
                  fontSize: { xs: 32, md: 64 },
                  fontFamily: "Amarante",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                Welcome to the MVP Ent NFT Portal
              </Typography>

              <Typography>
                Here you can connect your Polygon wallet to view all your Ent
                NFTs! Furthermore, we plan to build this connection out further
                to connect your wallet address to a Google Satellite view of the
                trees the Ent Foundation plants on your behalf!
              </Typography>

              <Stack alignItems="center" spacing={5} sx={{ mt: 5 }}>
                {account ? (
                  <>
                    <Typography
                      sx={{
                        lineHeight: 1.5,
                        color: "white",
                        mt: 10,
                        fontSize: 30,
                        fontFamily: "Amarante",
                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      You have {ownedNfts.length} NFTs
                    </Typography>
                    <Stack>
                      {ownedNfts?.map((item, index) => (
                        <Box
                          component="img"
                          src={`https://entnft.mypinata.cloud/ipfs/Qma9Xd1b3hy3nwPMbZ5of2ooH9LEhMps6rhnfT5LVuTTM3/${item}.png`}
                          key={index}
                          sx={{ width: 300 }}
                        />
                      ))}
                    </Stack>
                  </>
                ) : (
                  <>
                    <Typography
                      sx={{
                        lineHeight: 1.5,
                        color: "white",
                        mt: 10,
                        fontSize: 20,
                        fontFamily: "Amarante",
                        textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                      }}
                    >
                      Please connect your wallet to view your Ent NFT
                      collection.
                    </Typography>
                    <ConnectButton />
                  </>
                )}
              </Stack>

              <Stack alignItems="center" sx={{ mt: 10 }}>
                <Typography
                  align="center"
                  sx={{
                    lineHeight: 1.5,
                    color: "white",
                    mt: 10,
                    fontSize: { xs: 32, md: 52 },
                    fontFamily: "Amarante",
                    textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                  }}
                >
                  Google Satellite Preview
                </Typography>
                <ReactPlayer url="https://youtu.be/8L0LJysz8OI" />
              </Stack>

              <Box
                component="iframe"
                src="https://docs.google.com/forms/d/e/1FAIpQLSeNp4B_vtmI3Kj5N1nIirT4C7d0Vhh-l_vq-C6i5k7Cf5kd0g/viewform?embedded=true"
                sx={{ width: 1, maxWidth: 720, height: 1000, border: "none" }}
              />
            </Stack>
          </Container>
        </ContentStyle>
      </RootStyle>
    </>
  );
}
