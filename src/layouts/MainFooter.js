import { useState } from "react";
import {
  Box,
  Link,
  Stack,
  Container,
  Typography,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  Button,
} from "@mui/material";
import { styled } from "@mui/styles";
import { Link as RouterLink } from "react-router-dom";
import Logo from "components/Logo";
import { Icon } from "@iconify/react";
import instagramIcon from "@iconify/icons-cib/instagram";
import twitterIcon from "@iconify/icons-cib/twitter";
import discordIcon from "@iconify/icons-cib/discord";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowButton from "components/ArrowButton";

const LinkStyle = styled(Link)(({ theme }) => ({
  width: 40,
  height: 40,
  border: "1px solid #DDDDDD",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  // "&:hover": { color: "#FFB400" },
}));
export default function MainFooter() {
  const [open, setOpen] = useState(false);
  return (
    <Stack
      direction={{ xs: "column", md: "row" }}
      spacing={10}
      sx={{ bgcolor: "#424646", px: 10, py: 5 }}
    >
      <Stack flex={1} spacing={1}>
        <Typography variant="festivo" fontSize={30}>
          PLANTING TREES
        </Typography>
        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{
            cursor: "pointer",
            "&:hover": {
              "& .arrow": {
                opacity: 1,
                transition: "all 0.5s",
              },
              color: "white",
            },
          }}
        >
          <ArrowForwardIcon className="arrow" sx={{ opacity: 1 }} />
          <Typography sx={{}} fontSize={14} color="#a6b8a9">
            Back to the Top
          </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{
            cursor: "pointer",
            "&:hover": {
              "& .arrow": {
                opacity: 1,
                transition: "all 0.5s",
              },
              color: "white",
            },
          }}
        >
          <ArrowForwardIcon className="arrow" sx={{ opacity: 0 }} />
          <Typography
            component={RouterLink}
            to="/mint"
            sx={{ textDecoration: "none" }}
            fontSize={14}
            color="#a6b8a9"
          >
            Mint
          </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{
            cursor: "pointer",
            "&:hover": {
              "& .arrow": {
                opacity: 1,
                transition: "all 0.5s",
              },
              color: "white",
            },
          }}
        >
          <ArrowForwardIcon className="arrow" sx={{ opacity: 0 }} />
          <Link
            target="_blank"
            href="https://entnft.bigcartel.com/"
            sx={{ textDecoration: "none" }}
            fontSize={14}
            color="#a6b8a9"
          >
            Merch
          </Link>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{
            cursor: "pointer",
            "&:hover": {
              "& .arrow": {
                opacity: 1,
                transition: "all 0.5s",
              },
              color: "white",
            },
          }}
        >
          <ArrowForwardIcon className="arrow" sx={{ opacity: 0 }} />
          <Typography
            component={RouterLink}
            to="/terms"
            sx={{ textDecoration: "none" }}
            fontSize={14}
            color="#a6b8a9"
          >
            Terms & Privacy
          </Typography>
        </Stack>

        <Stack
          direction="row"
          alignItems="center"
          spacing={2}
          sx={{
            cursor: "pointer",
            "&:hover": {
              "& .arrow": {
                opacity: 1,
                transition: "all 0.5s",
              },
              color: "white",
            },
          }}
        >
          <ArrowForwardIcon className="arrow" sx={{ opacity: 0 }} />
          <Typography
            component={RouterLink}
            to="/portal"
            sx={{ textDecoration: "none" }}
            fontSize={14}
            color="#a6b8a9"
          >
            Portal
          </Typography>
        </Stack>
      </Stack>

      <Stack flex={2} spacing={3}>
        <Typography variant="festivo" fontSize={30}>
          Support the Ent NFT Mint
        </Typography>
        <Typography fontSize={14} color="#a6b8a9">
          Through community, collaboration, and dedication we aim to help our
          forests regrow in the wake of more aggressive wildfires. As more
          frequent and powerful wildfires ravage forests, we can help slow the
          burn and regrow these forests after a fire faster! Together we can
          make tomorrow better by acting today! Join fellow tree enthusiasts at
          Ent NFT today!
        </Typography>
        <Stack spacing={5} direction="row" alignItems="center">
          <Button
            component={RouterLink}
            to="/mint"
            sx={{
              bgcolor: "transparent",
              "&:hover": { bgcolor: "transparent" },
            }}
          >
            <ArrowButton
              title="MINT NOW"
              color="white"
              sx={{ color: "#424646" }}
            />
          </Button>
          <Button
            href="https://www.paypal.com/donate/?hosted_button_id=CHUMS39RPF36A"
            target="_blank"
            sx={{
              background: "url(/donate.png)",
              backgroundSize: "100% 100%",
              height: 36,
              width: 120,
              p: 0,
              borderRadius: 5,
            }}
          />
        </Stack>
      </Stack>

      <Stack flex={2} spacing={3} alignItems="center">
        <Stack direction="row" alignItems="center" spacing={2}>
          <Box component="img" src="/splash_left_light.png" />
          <Typography variant="festivo" fontSize={50}>
            TAKE ACTION
          </Typography>
          <Box component="img" src="/splash_right_light.png" />
        </Stack>
        <Typography sx={{}} fontSize={14} color="#a6b8a9">
          Donate today via the NFT Mint or directly with USD donations accepted.
        </Typography>
        <Button
          href="https://entnft.org/mint"
          sx={{
            bgcolor: "transparent",
            "&:hover": { bgcolor: "transparent" },
          }}
        >
          <ArrowButton
            title="DONATE NOW"
            color="white"
            sx={{ color: "#424646" }}
          />
        </Button>
      </Stack>
    </Stack>
    // <Stack justifyContent="center" sx={{ minHeight: 120, py: 3 }}>
    //   <Container maxWidth="lg">
    //     <Stack
    //       direction={{ xs: "column", md: "row" }}
    //       alignItems="center"
    //       spacing={3}
    //       justifyContent="space-between"
    //     >
    //       <Logo sx={{ width: 90, height: 90 }} />
    //       <Typography fontSize={16} textAlign="center" sx={{ px: { xs: 5 } }}>
    //         © 2021 Tree Folk. All rights reserved.&nbsp;&nbsp;
    //         <Link
    //           to="/"
    //           color="#00f0ff"
    //           sx={{ cursor: "pointer" }}
    //           onClick={() => setOpen(true)}
    //         >
    //           Term & Privacy
    //         </Link>
    //       </Typography>
    //       <Stack direction="row" alignItems="center" spacing={2}>
    //         {/* <LinkStyle href="#" underline="none" color="white">
    //           <Icon icon={instagramIcon} />
    //         </LinkStyle> */}
    //         <LinkStyle
    //           href="https://twitter.com/entnft_official"
    //           underline="none"
    //           color="white"
    //           target="_blank"
    //           // sx={{ background: "#FFB400", border: "1px solid #FFB400" }}
    //         >
    //           <Icon icon={twitterIcon} />
    //         </LinkStyle>
    //         <LinkStyle
    //           href="https://discord.gg/uYJ9xDK6fb"
    //           target="_blank"
    //           underline="none"
    //           color="white"
    //         >
    //           <Icon icon={discordIcon} />
    //         </LinkStyle>
    //       </Stack>
    //     </Stack>
    //   </Container>

    //   <Dialog
    //     open={open}
    //     onClose={() => setOpen(false)}
    //     PaperProps={{
    //       sx: {
    //         bgcolor: "rgba(255, 255, 255, 0.3)",
    //         backdropFilter: "blur(10px)",
    //       },
    //     }}
    //   >
    //     <DialogTitle id="alert-dialog-title">Terms & Service</DialogTitle>
    //     <DialogContent>
    //       <DialogContentText color="black">
    //         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
    //         eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
    //         ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
    //         aliquip ex ea commodo consequat. Duis aute irure dolor in
    //         reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
    //         pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
    //         culpa qui officia deserunt mollit anim id est laborum.
    //       </DialogContentText>
    //     </DialogContent>
    //   </Dialog>
    // </Stack>
  );
}
