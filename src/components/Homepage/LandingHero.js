import { motion } from "framer-motion";
// material
import { styled } from "@mui/material/styles";
import {
  Box,
  Link,
  Container,
  Typography,
  Stack,
  Button,
  Hidden,
} from "@mui/material";
// routes
//
import {
  varFadeIn,
  varFadeInUp,
  varWrapEnter,
  varFadeInRight,
} from "components/animate";

import HeroSlick from "components/HeroSlick";
import ConnectButton from "components/ConnectButton";

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  background: "url(/images/hero_bg.png)",
  backgroundSize: "cover",
  backgroundPositionX: "-200px",
  [theme.breakpoints.up("md")]: {
    top: 0,
    left: 0,
    width: "100%",
    alignItems: "center",
    backgroundSize: "100% 100%",
    backgroundPositionX: "0",
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    margin: "auto",
    textAlign: "center",
    position: "relative",
    paddingTop: theme.spacing(15),
    [theme.breakpoints.up("md")]: {
      margin: "unset",
      textAlign: "left",
      paddingTop: theme.spacing(20),
    },
  })
);

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <>
      <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
        <Container maxWidth="md">
          <ContentStyle>
            <motion.div variants={varFadeInRight}>
              <Typography
                textAlign="center"
                sx={{
                  lineHeight: 1.5,
                  color: "#330B15",
                  fontSize: { xs: 32, md: 64 },
                  fontFamily: "Amarante",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                Plant more Trees <br /> Mint Ent NFT
              </Typography>
              <Typography
                textAlign="center"
                sx={{
                  lineHeight: 1,
                  color: "#fdeb0e",
                  fontSize: 30,
                  fontFamily: "Amarante",
                  textShadow: "0px 4px 4px rgba(0, 0, 0, 0.25)",
                }}
              >
                50 Matic per Mint
              </Typography>
            </motion.div>
            {/* <Stack
              spacing={5}
              direction="row"
              alignItems="flex-end"
              justifyContent="center"
              sx={{ pt: 10 }}
            > */}
            <Stack direction="row" justifyContent="center">
              <Box sx={{ width: 240 }}>
                <HeroSlick />
              </Box>
            </Stack>
            {/* </Stack> */}
            <Stack
              spacing={5}
              direction="row"
              alignItems="flex-end"
              justifyContent="center"
              sx={{ pt: 10, pb: 10 }}
            >
              <ConnectButton />
              <Button
                variant="outlined"
                color="warning"
                sx={{ width: 182, height: 56, fontSize: 16, borderRadius: 2 }}
                href="https://discord.com/invite/uYJ9xDK6fb"
                target="_blank"
              >
                Join The Forest
              </Button>
            </Stack>
          </ContentStyle>
        </Container>
      </RootStyle>
    </>
  );
}
