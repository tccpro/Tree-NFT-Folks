// material
import { useState } from "react";
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Box, Grid, Button, Container, Typography, Stack } from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { varFadeInUp, MotionInView } from "components/animate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
// ----------------------------------------------------------------------

const FAQS = [
  {
    title: "Can I deduct the Mint of an Ent NFT?",
    description:
      "Purchase Polygon from Coinbase. Withdraw the Polygon to a web 3.0 wallet (we recommend Metamask) and account for network fees ($5-10). Then connect your wallet to the entnft.org. Approve the transaction which is set for approximately 60 MATIC ($100 in USD) to mint your own random Ent NFT! If you have any questions about the process, reach out to the Ent NFT team and we're happy to help.",
  },
  {
    title: "How can I mint an ENT NFT?",
    description:
      "Purchase Polygon from Coinbase. Withdraw the Polygon to a web 3.0 wallet (we recommend Metamask) and account for network fees ($5-10). Then connect your wallet to the entnft.org. Approve the transaction which is set for approximately 60 MATIC ($100 in USD) to mint your own random Ent NFT! If you have any questions about the process, reach out to the Ent NFT team and we're happy to help.",
  },
  {
    title: "Who currently operates Ent NFT?",
    description:
      "Purchase Polygon from Coinbase. Withdraw the Polygon to a web 3.0 wallet (we recommend Metamask) and account for network fees ($5-10). Then connect your wallet to the entnft.org. Approve the transaction which is set for approximately 60 MATIC ($100 in USD) to mint your own random Ent NFT! If you have any questions about the process, reach out to the Ent NFT team and we're happy to help.",
  },
  {
    title: "Can I donate without minting an NFT?",
    description:
      "Purchase Polygon from Coinbase. Withdraw the Polygon to a web 3.0 wallet (we recommend Metamask) and account for network fees ($5-10). Then connect your wallet to the entnft.org. Approve the transaction which is set for approximately 60 MATIC ($100 in USD) to mint your own random Ent NFT! If you have any questions about the process, reach out to the Ent NFT team and we're happy to help.",
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  // marginBottom: '-2px',
  marginBottom: 80,
  // backgroundImage: "url(/images/roadmap_bg.png)",
  backgroundSize: "100% 100%",
}));

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <RootStyle>
      <Container id="roadmap" maxWidth="md">
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
            Roadmap
          </Typography>
        </MotionInView>

        <Box
          component="img"
          src="/images/roadmap.png"
          // sx={{ ml: { xs: 0, md: 8 } }}
        />
      </Container>
    </RootStyle>
  );
}
