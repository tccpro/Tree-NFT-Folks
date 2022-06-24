// material
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Box, Grid, Button, Container, Typography, Stack } from "@mui/material";
//
import { varFadeInUp, MotionInView } from "components/animate";
import StatsSlick from "components/StatsSlick";
import { TreeFolksAddress } from "contracts/address";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(24, 0),
  background:
    "linear-gradient(180deg, #6A4142 0%, rgba(153, 72, 67, 0) 92.36%)",
  backgroundSize: "cover",
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

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  return (
    <RootStyle>
      <Container maxWidth="md" sx={{ mb: 10 }}>
        <MotionInView variants={varFadeInUp}>
          <Typography
            variant="h2"
            textAlign="center"
            sx={{ textShadow: "0px 4px 4px rgba(255, 194, 0, 0.3)" }}
          >
            Tree Planting Statistics
          </Typography>
          <Typography fontSize={14} align="center">Smart Contract: {TreeFolksAddress}</Typography>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
