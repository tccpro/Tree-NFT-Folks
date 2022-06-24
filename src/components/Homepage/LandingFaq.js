// material
import { useState } from "react";
import { alpha, useTheme, styled } from "@mui/material/styles";
import {
  Box,
  Grid,
  Button,
  Container,
  Typography,
  Stack,
  Link,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { varFadeInUp, MotionInView } from "components/animate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MintButton from "components/MintButton";
// ----------------------------------------------------------------------

const FAQS = [
  {
    title: "How can I mint an ENT NFT?",
    description:
      "Purchase Polygon from Coinbase. Withdraw the Polygon to a web 3.0 wallet (we recommend Metamask) and account for network fees ($5-10). Then connect your wallet to the entnft.org. Approve the transaction which is set for approximately 60 MATIC ($100 in USD) to mint your own random Ent NFT! If you have any questions about the process, reach out to the Ent NFT team and we're happy to help.",
  },
  {
    title: "Who currently operates Ent NFT?",
    description:
      "Ent NFT is operated by the Ent Foundation, a Colorado not-for-profit corporation. The Ent Foundation has applied for federal non-profit status under 501(c)(3) and while the decision is still pending, we expect to receive full federal non-profit status within six months.",
  },
  {
    title: "Can I donate without minting an NFT?",
    description:
      "Yes, absolutely! Please contact us directly on Discord or Twitter for direct donation only details.",
  },
];
const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(24, 0),
  backgroundImage: "url(/images/faq_bg.png)",
  backgroundSize: "cover",
}));

const Accordion = styled((props) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  marginBottom: "15px",
  background: "rgba(60, 176, 184, 0.1)",
  backdropFilter: "blur(80px)",
  border: `1px solid ${theme.palette.divider}`,
  borderRadius: "12px",
  "&:hover": { border: "1px solid yellow" },
  // "&:not(:last-child)": {
  //   borderBottom: 0,
  // },
  "&:before": {
    display: "none",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

const AccordionSummary = styled((props) => (
  <MuiAccordionSummary
    expandIcon={
      <KeyboardArrowDownIcon sx={{ fontSize: "2rem", color: "white" }} />
    }
    {...props}
  />
))(({ theme }) => ({
  borderRadius: "12px",
  height: 85,
  paddingLeft: "55px",
  paddingRight: "30px",
  "& .MuiAccordionSummary-expandIconWrapper.Mui-expanded": {
    transform: "rotate(180deg)",
  },
  "& .MuiAccordionSummary-content": {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  margin: "0px 55px",
  padding: "28px 0px",
  borderTop: "1px solid rgba(255, 255, 255, 0.25)",
}));
// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <RootStyle>
      <Container id="faq" maxWidth="md">
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
            Freequently Asked Questions
          </Typography>
        </MotionInView>
        <Box>
          <Accordion
            expanded={expanded === `panel0`}
            onChange={handleChange(`panel0`)}
          >
            <AccordionSummary>
              <Typography fontFamily="Amarante" fontSize={20} color="black">
                Q. Can I deduct the Mint of an Ent NFT?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16} color="black">
                <Typography component="span" color="#FFBC45">
                  Ans:{" "}
                </Typography>
                Yes, you'll be able to deduct the donation itself but not
                transaction fees. To receive tax documentation from a donation
                (of any size!) please fill out{" "}
                <Link
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfkvTTDsD6TpqIdnxvps5a7Dm94cz9fXBnNTKEdZGoNiHO0jA/viewform"
                  target="_blank"
                  fontSize={16}
                  color="#00f0ff"
                >
                  this form.
                </Link>
                . We also will release event details for 2022 events at the
                start of the new year. Stay tuned!
              </Typography>
            </AccordionDetails>
          </Accordion>
          {FAQS.map((item, index) => (
            <Accordion
              key={index}
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
            >
              <AccordionSummary>
                <Typography fontFamily="Amarante" fontSize={20} color="black">
                  Q. {item.title}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography fontSize={16} color="black">
                  <Typography component="span" color="#FFBC45">
                    Ans:{" "}
                  </Typography>
                  {item.description}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
          <Accordion
            expanded={expanded === `panel4`}
            onChange={handleChange(`panel4`)}
          >
            <AccordionSummary>
              <Typography fontFamily="Amarante" fontSize={20} color="black">
                Q. How else can I participate in the charity without minting?
              </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography fontSize={16} color="black">
                <Typography component="span" color="#FFBC45">
                  Ans:{" "}
                </Typography>
                You can purchase Ent NFT merch from the{" "}
                <Link
                  href="https://entnft.bigcartel.com/"
                  target="_blank"
                  fontSize={16}
                  color="#00f0ff"
                >
                  {" "}
                  Official Merch Store
                </Link>
                . We also will release event details for 2022 events at the
                start of the new year. Stay tuned!
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>

        <Grid
          container
          spacing={{ xs: 0, md: 12 }}
          justifyContent="center"
          direction="row-reverse"
          sx={{ mt: { xs: 5, md: 10 } }}
        >
          <Grid
            item
            xs={12}
            md={7}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3" color="#932A47" sx={{ mb: 3 }}>
                  BUY NOW
                </Typography>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  fontSize={16}
                  textAlign="justify"
                  sx={{
                    mb: 5,
                    lineHeight: 1.8,
                  }}
                  color="black"
                >
                  Join the Ent NFT mint event with a $100 donation and receive
                  your very own Ent NFT!
                  <br />
                  <br />
                  100% of the proceeds will go to charity (minus Polygon network
                  gas fees){" "}
                  <Link
                    href="https://www.paypal.com/donate/?hosted_button_id=CHUMS39RPF36A"
                    target="_blank"
                    color="#932A47"
                  >
                    Donate directly with USD{" "}
                  </Link>
                  and receive a manually ent mint for any donation of $100!
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={5}>
            <Stack
              justifyContent="center"
              alignItems="center"
              sx={{
                mx: { xs: "auto", md: "inherit" },
                background: "url(/images/mint_btn_bg.png)",
                width: 275,
                height: 208,
              }}
            >
              <MintButton />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
