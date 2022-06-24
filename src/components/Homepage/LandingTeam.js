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
  IconButton,
} from "@mui/material";
import MuiAccordion from "@mui/material/Accordion";
import MuiAccordionSummary from "@mui/material/AccordionSummary";
import MuiAccordionDetails from "@mui/material/AccordionDetails";
import { varFadeInUp, MotionInView } from "components/animate";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Icon } from "@iconify/react";
import linkedinIcon from "@iconify/icons-cib/linkedin";
// ----------------------------------------------------------------------

const TEAMS = [
  {
    name: "Jacob Fox",
    image: "jacob",
    description: "Board-Chair",
    linkedin: "https://www.linkedin.com/in/jacob-fox-b5b13386/",
  },
  {
    name: "Nick Brait",
    image: "unname",
    description: "Board-Chair",
    linkedin: "https://www.linkedin.com/in/nick-brait-737bb22b/",
  },
];

const RootStyle = styled("div")(({ theme }) => ({
  marginBottom: "-2px",
  // backgroundImage: "url(/images/roadmap_bg.png)",
  backgroundSize: "100% 100%",
}));

// ----------------------------------------------------------------------

export default function LandingTeam() {
  return (
    <RootStyle>
      <Container id="roadmap" maxWidth="md" sx={{ mb: 20 }}>
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" textAlign="center" sx={{ mb: 10 }}>
            Team Members
          </Typography>
          <Stack direction="row" justifyContent="center" spacing={10}>
            {TEAMS.map((team, index) => (
              <Stack key={index} alignItems="center" spacing={1}>
                <Box
                  component="img"
                  src={`/teams/${team.image}.png`}
                  sx={{ width: 300, borderRadius: 2 }}
                />
                <Typography variant="h4">{team.name}</Typography>
                <Typography>{team.description}</Typography>
                <IconButton target="_blank" href={team.linkedin}>
                  <Icon icon={linkedinIcon} color="white" />
                </IconButton>
              </Stack>
            ))}
          </Stack>
        </MotionInView>
      </Container>
    </RootStyle>
  );
}
