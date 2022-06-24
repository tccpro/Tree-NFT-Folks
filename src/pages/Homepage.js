// material
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Link as RouterLink } from "react-router-dom";
import {
  Box,
  Stack,
  Typography,
  Grid,
  Link,
  Button,
  Hidden,
} from "@mui/material";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { Icon } from "@iconify/react";
import twitter from "@iconify/icons-cib/twitter";
import AdjustIcon from "@mui/icons-material/Adjust";
import ContactSupportIcon from "@mui/icons-material/ContactSupport";
import ParkIcon from "@mui/icons-material/Park";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowButton from "components/ArrowButton";
import CookieConsent, { Cookies } from "react-cookie-consent";
import { Timeline } from "react-twitter-widgets";
// ----------------------------------------------------------------------

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div hidden={value !== index} {...other}>
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

// ----------------------------------------------------------------------

export default function LandingPage() {
  const [value, setValue] = useState(0);

  return (
    <Stack sx={{ bgcolor: "#e9e6e1", pt: 8 }}>
      <Stack
        alignItems="center"
        sx={{
          py: 5,
          px: 20,
          position: "relative",
        }}
      >
        <Hidden lgDown>
          <Box
            component="img"
            src="/left.png"
            sx={{
              width: 400,
              height: 0.7,
              position: "absolute",
              left: 0,
              top: 100,
            }}
          />
        </Hidden>
        <Stack
          alignItems="center"
          sx={{ position: "relative", zIndex: 2 }}
          spacing={3}
        >
          <Box component="img" src="/Ent Foundation.png" sx={{ width: 300 }} />
          <Typography
            variant="h1"
            color="#424646"
            fontFamily="Amarante"
            sx={{ my: 2 }}
          >
            Planting Hope
          </Typography>
          <Typography align="center" variant="h5" color="#424646">
            The Ent Foundation helps repair the damage caused by <br />{" "}
            wildfires by replanting trees in affected areas throughout Colorado.
          </Typography>
          <Typography align="center" variant="h5" color="#424646">
            We believe forests have a{" "}
            <Typography variant="h5" component="span" color="#b26f3e">
              {" "}
              critical role to play in combating climate change.
            </Typography>
          </Typography>

          <Typography color="#424646" align="center">
            Our mission is to work with local communities to help <br />{" "}
            reforest areas devastated by seasonal wildfires. <br /> Join today
            to donate your time and money to the tree planting cause!
          </Typography>

          <Button
            href="https://twitter.com/entnft_official"
            target="_blank"
            sx={{ color: "white" }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              sx={{
                width: 200,
                height: 48,
                background: "url(/green_arrow.png)",
                backgroundSize: "100% 100%",
              }}
            >
              <Icon icon={twitter} />
              <Typography fontSize={14}>LATEST UPDATE</Typography>
            </Stack>
          </Button>

          <Stack alignItems="center" spacing={1}>
            <Typography
              variant="festivo"
              color="#424646"
              fontSize={20}
              sx={{ mt: 3 }}
            >
              FIND OUT MORE ABOUT
            </Typography>
            <Typography
              align="center"
              variant="festivo"
              color="#b26f3e"
              fontSize={48}
            >
              OUR CAMPAIGN
            </Typography>
            <ArrowDownwardIcon sx={{ color: "#b26f3e", fontSize: 28 }} />
          </Stack>
        </Stack>
        <Hidden lgDown>
          <Box
            component="img"
            src="/right.png"
            sx={{
              width: 400,
              height: 0.7,
              position: "absolute",
              right: 0,
              top: 100,
            }}
          />
        </Hidden>
      </Stack>

      <Stack
        alignItems="center"
        sx={{
          background: "url(/our_campaign_bg.png)",
          pt: 10,
          px: { xs: 10, md: 20, lg: 40 },
        }}
      >
        <Typography align="center" variant="festivo" fontSize={64}>
          Our Campaign
        </Typography>
        <Typography
          align="center"
          variant="horatio"
          fontSize={24}
          color="#a6b8a9"
          sx={{ mt: 5 }}
        >
          We know that our mountain forests are an important tool to reduce
          global warming, and we are committed to helping these forests continue
          to grow and thrive.
        </Typography>
        <Typography
          align="center"
          variant="festivo"
          fontSize={36}
          sx={{ my: 4 }}
        >
          Planting Seeds: Improving Tomorrow by Acting Today
        </Typography>
        <Typography
          align="center"
          variant="horatio"
          fontSize={24}
          color="#a6b8a9"
        >
          By empowering individuals with tools to take action, we hope to
          inspire the next generation of forest management and tree replanting
          by mobilizing young people to improve the natural world.
        </Typography>

        <Stack direction="row" alignItems="center" spacing={2} sx={{ mt: 4 }}>
          <Typography align="center" variant="horatio" fontSize={24}>
            Check out the{" "}
          </Typography>
          <Button component={RouterLink} to="/mint" sx={{ color: "white" }}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              sx={{
                width: 200,
                height: 48,
                background: "url(/orange_arrow.png)",
                backgroundSize: "100% 100%",
              }}
            >
              <Typography variant="festivo" fontSize={18}>
                Ent NFT Mint
              </Typography>
            </Stack>
          </Button>
        </Stack>

        <Stack
          direction={{ xs: "column", sm: "row" }}
          sx={{ width: 1, mt: 10 }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            flex={1}
            onClick={() => setValue(0)}
            sx={{
              bgcolor: "#3c7a80",
              p: 2,
              cursor: "pointer",
              borderBottom: "6px solid #3c7a80",
              "&:hover": { borderBottom: "6px solid #a6b8a9" },
            }}
          >
            <AdjustIcon sx={{ fontSize: 50 }} />
            <Stack>
              <Typography variant="festivo" fontSize={40}>
                Plant
              </Typography>
              <Typography variant="festivo" color="#a6b8a9">
                Seeds for tomorrow
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            flex={1}
            onClick={() => setValue(1)}
            sx={{
              bgcolor: "#a6b8a9",
              p: 2,
              cursor: "pointer",
              borderBottom: "6px solid #a6b8a9",
              "&:hover": { borderBottom: "6px solid #424646" },
            }}
          >
            <ContactSupportIcon sx={{ fontSize: 50 }} />
            <Stack>
              <Typography variant="festivo" fontSize={40}>
                How
              </Typography>
              <Typography variant="festivo" color="#424646">
                you can help
              </Typography>
            </Stack>
          </Stack>

          <Stack
            direction="row"
            alignItems="center"
            spacing={2}
            flex={1}
            onClick={() => setValue(2)}
            sx={{
              bgcolor: "#424646",
              p: 2,
              cursor: "pointer",
              borderBottom: "6px solid #424646",
              "&:hover": { borderBottom: "6px solid #a6b8a9" },
            }}
          >
            <ParkIcon sx={{ fontSize: 50 }} />
            <Stack>
              <Typography variant="festivo" fontSize={40}>
                Why
              </Typography>
              <Typography variant="festivo" color="#a6b8a9">
                We plant trees?
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack alignItems="center" sx={{ my: 10 }}>
        <TabPanel value={value} index={0}>
          <Stack spacing={3}>
            <Typography variant="horatio" color="#424646">
              Ent Foundation is a 501(c)(3) Non-Profit organization targeting
              tree planting to support:
            </Typography>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ color: "#3c7a80" }}
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Promote and Implement tree planting activities
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ color: "#3c7a80" }}
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Advocate for healthy forest ecosystem
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ color: "#3c7a80" }}
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Improving tomorrow by acting today
              </Typography>
            </Stack>
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Stack spacing={3}>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ color: "#3c7a80" }}
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Raise awareness of all important aspects related to tree
                planting and forest rehabilitation
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ color: "#3c7a80" }}
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Providing the logistics needed to replant trees in fire torn
                forests
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ color: "#3c7a80" }}
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Create champions of the forest to advocate for future planting
                activity
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ color: "#3c7a80" }}
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Empowering folks to enjoy donating their time to a good cause
              </Typography>
            </Stack>
          </Stack>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Stack spacing={3}>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ color: "#3c7a80" }}
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Promote, advocate, and implement tree planting activities
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ color: "#3c7a80" }}
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Increase natural carbon capture
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ color: "#3c7a80" }}
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Improve efficiency and enjoyment of forests
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
              sx={{ color: "#3c7a80" }}
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Promote, advocate, and Implement tree planting activities
              </Typography>
            </Stack>
          </Stack>
        </TabPanel>
      </Stack>

      <Stack direction={{ xs: "column", md: "row" }} sx={{ height: 600 }}>
        <Stack
          flex={1}
          justifyContent="center"
          alignItems="center"
          sx={{
            background: "url(/problems_bg.jpg)",
            backgroundSize: "100% 100%",
            position: "relative",
            "&:hover": {
              "& .overlay": {
                opacity: 1,
              },
              "& .original": {
                opacity: 0,
              },
            },
          }}
        >
          <Stack
            alignItems="center"
            spacing={5}
            className="original"
            sx={{ transition: "all 0.3s", opacity: 1 }}
          >
            <Typography variant="festivo" fontSize={58}>
              The Problems
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              sx={{
                width: 200,
                height: 48,
                background: "url(/white_arrow.png)",
                backgroundSize: "100% 100%",
              }}
            >
              <Typography variant="festivo" fontSize={18} color="#424646">
                Let's find out
              </Typography>
            </Stack>
          </Stack>

          <Stack
            className="overlay"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            sx={{
              transition: "all 0.3s",
              position: "absolute",
              width: 1,
              height: 1,
              top: 0,
              left: 0,
              bgcolor: "rgba(0, 0, 0, 0.7)",
              opacity: 0,
            }}
          >
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Promote, advocate, and implement tree planting activities
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Increase natural carbon capture
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Improve efficiency and enjoyment of forests
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Promote, advocate, and Implement tree planting activities
              </Typography>
            </Stack>
          </Stack>
        </Stack>

        <Stack
          flex={1}
          justifyContent="center"
          alignItems="center"
          sx={{
            background: "url(/solutions_bg.jpg)",
            backgroundSize: "100% 100%",
            position: "relative",
            "&:hover": {
              "& .overlay": {
                opacity: 1,
              },
              "& .original": {
                opacity: 0,
              },
            },
          }}
        >
          <Stack
            alignItems="center"
            spacing={5}
            className="original"
            sx={{ transition: "all 0.3s", opacity: 1 }}
          >
            <Typography variant="festivo" fontSize={58}>
              The Solutions
            </Typography>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="center"
              spacing={2}
              sx={{
                width: 200,
                height: 48,
                background: "url(/white_arrow.png)",
                backgroundSize: "100% 100%",
              }}
            >
              <Typography variant="festivo" fontSize={18} color="#424646">
                Let's find out
              </Typography>
            </Stack>
          </Stack>

          <Stack
            className="overlay"
            justifyContent="center"
            alignItems="center"
            spacing={3}
            sx={{
              transition: "all 0.3s",
              position: "absolute",
              width: 1,
              height: 1,
              top: 0,
              left: 0,
              bgcolor: "rgba(0, 0, 0, 0.7)",
              opacity: 0,
            }}
          >
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Promote, advocate, and implement tree planting activities
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Increase natural carbon capture
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Improve efficiency and enjoyment of forests
              </Typography>
            </Stack>
            <Stack
              spacing={2}
              direction="row"
              alignItems="center"
              justifyContent="center"
            >
              <ArrowForwardIcon />
              <Typography variant="festivo">
                Promote, advocate, and Implement tree planting activities
              </Typography>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack direction={{ xs: "column", md: "row" }} sx={{ p: 5 }} spacing={10}>
        <Stack
          flex={1}
          sx={{ bgcolor: "rgba(178,198,181,0.2)", p: 3, position: "relative" }}
        >
          <Button
            href="https://twitter.com/entnft_official"
            target="_blank"
            sx={{ color: "white", position: "absolute", top: -20, left: -20 }}
          >
            <ArrowButton color="orange" title="Latest News" />
          </Button>
          {/* <Typography
            align="right"
            fontSize={14}
            variant="festivo"
            color="#424646"
            sx={{ mb: 3 }}
          >
            By Mel Watson 26 Jun 2022
          </Typography> */}

          <Stack alignItems="center" sx={{}}>
            <Stack
              alignItems="center"
              sx={{ width: 1, height: 600, overflow: "auto" }}
            >
              <Timeline
                dataSource={{
                  sourceType: "profile",
                  screenName: "entnft_official",
                }}
                options={{
                  chrome: "noheader, nofooter",
                }}
                style={{ width: "100%" }}
              />
            </Stack>
            {/* <Typography
              align="center"
              fontSize={30}
              variant="festivo"
              color="#424646"
              sx={{ mt: 3 }}
            >
              MY PLASTIC JOURNEY FROM SOURCE TO SOLUTION
            </Typography>
            <Typography
              align="center"
              fontSize={14}
              color="#424646"
              sx={{ mt: 3 }}
            >
              I set up RAW Foundation over a decade ago with one goal in mind –
              to rid the world of pointless…
            </Typography> */}
            <Button
              href="https://twitter.com/entnft_official"
              target="_blank"
              sx={{ color: "white", mt: 5 }}
            >
              <ArrowButton title="Continue Reading" color="orange" />
            </Button>
          </Stack>
        </Stack>

        <Stack
          flex={1}
          sx={{ bgcolor: "rgba(178,198,181,0.2)", p: 3, position: "relative" }}
        >
          <Button
            href="https://medium.com/@ent-foundation"
            target="_blank"
            sx={{ color: "white", position: "absolute", top: -20, left: -20 }}
          >
            <ArrowButton color="green" title="Latest Updates" />
          </Button>
          {/* <Typography
            align="right"
            fontSize={14}
            variant="festivo"
            color="#424646"
            sx={{ mb: 3 }}
          >
            By Mel Watson 26 Jun 2022
          </Typography> */}

          <Stack alignItems="center" sx={{ px: 2 }}>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{ height: 600, width: 1 }}
            >
              <Box component="img" src="/og/og1.png" sx={{ width: 1 }} />
              <Typography
                align="center"
                fontSize={30}
                variant="festivo"
                color="#424646"
                sx={{ mt: 3 }}
              >
                Buidling
              </Typography>
              <Typography
                // align="center"
                fontSize={14}
                color="#424646"
                sx={{ mt: 3 }}
              >
                We’re thrilled to share the relaunch of EntNFT.org and also
                excited to be joining ETHDenver over the coming weeks to Buidl!
                <br />
                Ent NFT Heads to ETHDenver <br />
                With the hackathon approaching quickly, we thought it’d be a
                good idea to write down the goals of The Ent Foundation
                attending ETHDenver this year!
                <br />
                We’re focused on three core objectives this year:
                <br />
                1. Connect and build the Ent Community <br />
                2. Establish a functional DAO to operate The Ent Foundation
                501(c)(3) status. <br />
                3. Establish strategic partners to help achieve the
                organization’s goals <br />
                ...
              </Typography>
            </Stack>

            <Button
              href="https://medium.com/@ent-foundation"
              target="_blank"
              sx={{ color: "white", mt: 5 }}
            >
              <ArrowButton title="Continue Reading" color="green" />
            </Button>
          </Stack>
        </Stack>
      </Stack>

      <Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          spacing={3}
          sx={{
            background: "url(/products_bg.jpg)",
            backgroundSize: "100% 250%",
            backgroundPositionY: "50%",
            height: 240,
          }}
        >
          <Typography variant="festivo" fontSize={50}>
            Plant Trees
          </Typography>
          <Typography variant="festivo" fontSize={24}>
            Support Ent Foundation
          </Typography>
        </Stack>

        <Grid container rowSpacing={3}>
          <Grid item xs={12} md={4}>
            <Stack alignItems="center" justifyContent="center" spacing={2}>
              <Box component="img" src="/merch/hat.jpg" sx={{ width: 1 }} />
              <Typography variant="festivo" fontSize={20} color="#424646">
                $33.50
              </Typography>
              <Typography
                variant="festivo"
                align="center"
                fontSize={26}
                color="#424646"
              >
                ENT NFT: PLANT TREES HAT
              </Typography>
              <Button
                variant="contained"
                color="warning"
                href="https://entnft.bigcartel.com/product/ent-nft-plant-trees-hat"
                target="_blank"
              >
                Buy Now
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack alignItems="center" justifyContent="center" spacing={2}>
              <Box component="img" src="/merch/sweater.jpg" sx={{ width: 1 }} />
              <Typography variant="festivo" fontSize={20} color="#424646">
                $33.50
              </Typography>
              <Typography
                variant="festivo"
                align="center"
                fontSize={26}
                color="#424646"
              >
                ENT NFT: LIGHTWEIGHT HOODIE (UNISEX)
              </Typography>
              <Button
                variant="contained"
                color="warning"
                href="https://entnft.bigcartel.com/product/ent-nft-lightweight-hoodie-unisex"
                target="_blank"
              >
                Buy Now
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack alignItems="center" justifyContent="center" spacing={2}>
              <Box component="img" src="/merch/beanie.jpg" sx={{ width: 1 }} />
              <Typography variant="festivo" fontSize={20} color="#424646">
                $27.5
              </Typography>
              <Typography
                variant="festivo"
                align="center"
                fontSize={26}
                color="#424646"
              >
                ENT NFT BEANIE
              </Typography>
              <Button
                variant="contained"
                color="warning"
                href="https://entnft.bigcartel.com/product/ent-nft-beanie"
                target="_blank"
              >
                Buy Now
              </Button>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                height: 500,
                position: "relative",
                background: "url(/connect_bg.jpg)",
                backgroundSize: "100% 100%",
              }}
            >
              <ArrowButton
                color="orange"
                title="CONNECT"
                sx={{ position: "absolute", top: 40, left: 30 }}
              />

              <Typography
                variant="festivo"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "white",
                }}
                component={Link}
                align="center"
                fontSize={50}
                href="https://medium.com/@ent-foundation"
                target="_blank"
              >
                {/* <Link href="https://abc.com"> */}
                Read the latest news <br /> from Ent Foundation
                {/* </Link> */}
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                height: 500,
                position: "relative",
                background: "url(/mint_bg.jpg)",
                backgroundSize: "100% 150%",
                backgroundPositionY: "30%",
              }}
            >
              <ArrowButton
                color="orange"
                title="MINT"
                sx={{ position: "absolute", top: 40, left: 30 }}
              />

              <Typography
                variant="festivo"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "white",
                }}
                align="center"
                fontSize={50}
                component={RouterLink}
                to="/mint"
              >
                Easy Mint
                <br /> (Matic or USD)
              </Typography>
            </Stack>
          </Grid>

          <Grid item xs={12} md={4}>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                height: 500,
                position: "relative",
                background: "url(/plant_bg.jpg)",
                backgroundSize: "100% 150%",
                backgroundPositionY: "60%",
              }}
            >
              <ArrowButton
                color="orange"
                title="PLANT"
                sx={{ position: "absolute", top: 40, left: 30 }}
              />

              <Typography
                variant="festivo"
                sx={{
                  cursor: "pointer",
                  textDecoration: "none",
                  color: "white",
                }}
                align="center"
                fontSize={50}
                component={RouterLink}
                to="/portal"
              >
                {/* <Link href="https://abc.com"> */}
                Create Your Own <br /> Ent Portal
                {/* </Link> */}
              </Typography>
            </Stack>
          </Grid>
        </Grid>
      </Stack>

      <CookieConsent
        location="bottom"
        buttonText="Accept cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{
          fontWeight: "bold",
          fontSize: 20,
          color: "#4e503b",
          padding: "10px 15px",
          borderRadius: "4px",
        }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.{" "}
      </CookieConsent>
    </Stack>
  );
}
