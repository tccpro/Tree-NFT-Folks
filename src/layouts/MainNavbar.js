import { Link as RouterLink, useLocation } from "react-router-dom";
// material
import { styled } from "@mui/styles";
import {
  Box,
  Button,
  Stack,
  AppBar,
  Toolbar,
  Container,
  Typography,
  Hidden,
} from "@mui/material";
import { Link as ScrollLink } from "react-scroll";
import Logo from "components/Logo";
import ConnectButton from "components/ConnectButton";
import { Icon } from "@iconify/react";
import twitterFill from "@iconify/icons-cib/twitter";
import discordFill from "@iconify/icons-cib/discord";
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import MintButton from "components/MintButton";
import WithdrawButton from "components/WithdrawButton";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 64;
const APP_BAR_DESKTOP = 80;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  background:
    "linear-gradient(90.18deg, rgba(66, 35, 103, 0.57) 0%, rgba(49, 24, 79, 0.57) 100%)",
  backdropFilter: "blur(20px)",
  borderRadius: "0px 0px 15px 15px",
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP,
  },
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isMint = pathname === "/mint" || pathname === "/portal";
  return (
    <AppBar sx={{ boxShadow: 0, bgcolor: "transparent" }}>
      <ToolbarStyle disableGutters>
        <Container
          maxWidth="xl"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <RouterLink to="/">
            <Logo />
          </RouterLink>
          <Hidden mdUp>
            <MenuMobile />
          </Hidden>

          <Hidden mdDown>
            <MenuDesktop />
          </Hidden>
          <Box flex={1} />
          {isMint && <MintButton />}

          {/* <WithdrawButton /> */}
        </Container>
      </ToolbarStyle>
    </AppBar>
  );
}
