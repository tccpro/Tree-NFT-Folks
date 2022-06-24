import { Box, Link, Stack, Typography } from "@mui/material";
import { styled } from "@mui/styles";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import { Icon } from "@iconify/react";
import instagramIcon from "@iconify/icons-cib/instagram";
import twitterIcon from "@iconify/icons-cib/twitter";
import youtubeIcon from "@iconify/icons-cib/youtube";
import discordIcon from "@iconify/icons-cib/discord";
import SvgIconStyle from "components/SvgIconStyle";

const LinkStyle = styled(Link)(({ theme }) => ({
  width: 40,
  height: 40,
  border: "1px solid #DDDDDD",
  borderRadius: "5px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "&:hover": { color: "#FFB400" },
}));

export default function MenuDesktop() {
  return (
    <Stack direction="row" alignItems="center" spacing={16} sx={{ ml: 30 }}>
      <Stack direction="row" alignItems="center" spacing={5}>
        <Typography
          component={RouterLink}
          to="/mint/#intro"
          color="white"
          fontSize={16}
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": { color: "#FFB400" },
          }}
        >
          About
        </Typography>
        <Typography
          component={RouterLink}
          to="/mint/#roadmap"
          color="white"
          fontSize={16}
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": { color: "#FFB400" },
          }}
        >
          Roadmap
        </Typography>
        <Typography
          component={RouterLink}
          to="/mint/#faq"
          color="white"
          fontSize={16}
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": { color: "#FFB400" },
          }}
        >
          Faq
        </Typography>
        <Typography
          component={Link}
          href="https://entnft.bigcartel.com/"
          color="white"
          fontSize={16}
          target="_blank"
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": { color: "#FFB400" },
          }}
        >
          Merch
        </Typography>
        <Typography
          component={RouterLink}
          to="/mint"
          color="white"
          fontSize={16}
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": { color: "#FFB400" },
          }}
        >
          Mint
        </Typography>
        <Typography
          component={RouterLink}
          to="/portal"
          color="white"
          fontSize={16}
          sx={{
            textDecoration: "none",
            cursor: "pointer",
            "&:hover": { color: "#FFB400" },
          }}
        >
          Portal
        </Typography>
      </Stack>

      <Stack direction="row" alignItems="center" spacing={2} sx={{ pr: 3 }}>
        {/* <LinkStyle href="#" underline="none" color="white" sx={{}}>
          <Icon icon={instagramIcon} />
        </LinkStyle> */}
        <LinkStyle
          href="https://twitter.com/entnft_official"
          underline="none"
          color="white"
          target="_blank"
        >
          <Icon icon={twitterIcon} />
        </LinkStyle>
        <LinkStyle
          href="https://discord.gg/uYJ9xDK6fb"
          underline="none"
          color="white"
          target="_blank"
        >
          <Icon icon={discordIcon} />
        </LinkStyle>
        <LinkStyle
          href="https://opensea.io/collection/ent-nft"
          underline="none"
          color="white"
          target="_blank"
        >
          <SvgIconStyle src="/opensea.svg" />
        </LinkStyle>
      </Stack>
    </Stack>
  );
}
