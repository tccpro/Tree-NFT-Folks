// material
import { alpha, useTheme, styled } from "@mui/material/styles";
import { Box, Grid, Button, Container, Typography } from "@mui/material";
import ArrowForward from "@mui/icons-material/ArrowForward";
//
import { varFadeInUp, MotionInView } from "components/animate";
import StatsSlick from "components/StatsSlick";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(0),
  paddingBottom: theme.spacing(24),
  // backgroundImage: "url(/images/intro_bg.png)",
  backgroundRepeat: "no-repeat",
  backgroundSize: "500% 150%",
  marginTop: theme.spacing(-30),
  [theme.breakpoints.up("md")]: {
    backgroundSize: "cover",
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(0),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

export default function LandingHugePackElements() {
  return (
    <RootStyle>
      <Container maxWidth="md" sx={{ mb: 20 }}>
        <StatsSlick />
      </Container>

      <Container id="intro" maxWidth="md" sx={{ mb: { xs: 10, md: 0 } }}>
        <Grid container spacing={8} justifyContent="center">
          <Grid
            item
            xs={12}
            md={7}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  What Are Ent NFTs
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3" color="warning.main" sx={{ mb: 3 }}>
                  Mint an Ent NFT, Plant more Trees.
                </Typography>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  fontSize={16}
                  textAlign="justify"
                  sx={{
                    mb: 5,
                    lineHeight: 1.8,
                    color: "rgba(255, 255, 255, 0.8)",
                  }}
                >
                  Ent NFTs is an official 501(c)(3) organization with a series
                  of 10,000 forest inspired characters. The project aims to
                  build a community of individuals passionate about leaving the
                  world a better place than we found it.
                  <br />
                  <br />
                  With every Ent NFT mint, we’ll plant trees in the real world!
                  Furthermore, we’re aiming to have fun with the community while
                  doing so! This will include exlcusive events, merch discounts,
                  and a satelite image connecting your NFT directly to the trees
                  we go plant! With future aspirations to form into a DAO, Ent
                  NFTs is here for the long haul.
                  <br />
                  <br />
                  Join use today on Discord or Twitter & Mint your Ent NFT
                  before they’re all gone!
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={5} dir="ltr">
            <Box component="img" src="/images/intro1.png" sx={{ width: 1 }} />
          </Grid>
        </Grid>
      </Container>

      <Container maxWidth="md" sx={{ mb: { xs: 10, md: 0 } }}>
        <MotionInView variants={varFadeInUp}>
          <Typography variant="h2" textAlign="center" sx={{ mb: 3, mt: 5 }}>
            Ent Benefits
          </Typography>
        </MotionInView>
        <Grid
          container
          spacing={{ xs: 5, md: 12 }}
          justifyContent="center"
          direction="row-reverse"
        >
          <Grid
            item
            xs={12}
            md={7}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3" color="warning.main" sx={{ mb: 3 }}>
                  Plant Trees!
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
                >
                  With every mint of an Ent NFT, we will plant over 65 trees!
                  While the community will drive the decision process for where,
                  when, and how trees become planted (defining the final number)
                  - we’re committed to leaving the world in a better state than
                  we found it. Join us today!
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={5} dir="ltr">
            <Box component="img" src="/images/intro2.png" />
          </Grid>
        </Grid>

        <Grid container spacing={12} justifyContent="center">
          <Grid
            item
            xs={12}
            md={7}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3" color="warning.main" sx={{ mb: 3 }}>
                  Merch Store & Events
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
                >
                  Join a passionate community, focused on making the world
                  better tomorrow by acting today! Get merch store discounts and
                  exclusive event access with promotional POAP rewards to be
                  earned! With a focus on becoming a DAO, holding an Ent NFT
                  will put you at the front of the line of that transistion!
                </Typography>
              </MotionInView>
              <MotionInView variants={varFadeInUp}>
                <Button
                  color="warning"
                  href="https://entnft.bigcartel.com/"
                  target="_blank"
                  endIcon={<ArrowForward />}
                >
                  Shop Now
                </Button>
              </MotionInView>
            </ContentStyle>
          </Grid>

          <Grid item xs={12} md={5} dir="ltr">
            <Box component="img" src="/images/beanie.png" />
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
