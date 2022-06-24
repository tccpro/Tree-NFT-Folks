import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { scroller } from "react-scroll";
// material
import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
// components
import LandingHero from "components/Homepage/LandingHero";
import LandingStatistics from "components/Homepage/LandingStatistics";
import LandingIntroduce from "components/Homepage/LandingIntroduce";
import LandingRoadmap from "components/Homepage/LandingRoadmap";
import LandingFaq from "components/Homepage/LandingFaq";
import { Helmet } from "react-helmet-async";
import LandingTeam from "components/Homepage/LandingTeam";
import { Element } from "react-scroll";
// ----------------------------------------------------------------------

const RootStyle = styled(Box)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  background:
    "linear-gradient(180deg, #6A4142 0%, rgba(153, 72, 67, 0) 92.36%)",
}));

// ----------------------------------------------------------------------

export default function LandingPage() {
  const location = useLocation();
  const target = location.hash.slice(1);
  useEffect(() => {
    scroller.scrollTo(target, {
      duration: 1500,
      delay: 100,
      smooth: true,
    });
  });
  return (
    <>
      <Helmet>
        <meta property="og:title" content="Mint Ent NFT" />
        <meta property="og:site_name" content="Ent NFT" />
        <meta property="og:url" content="https://entnft.org/mint" />
        <meta
          property="og:description"
          content="Ent NFT: Mint to Plant Trees! Join the Ent NFT community today by visiting our 501(c)(3) Charity Mint Event."
        />
        <meta property="og:type" content="website" />
        {/* <meta
          property="og:image"
          content="https://entnft.org/images/og2.png"
        /> */}
        <meta property="og:image" content="%PUBLIC_URL%/og/og2.png" />
      </Helmet>
      <RootStyle>
        <LandingHero />
        <ContentStyle>
          <LandingStatistics />
          <Element name="intro">
            <LandingIntroduce />
          </Element>
          <LandingTeam />
          <Element name="roadmap">
            <LandingRoadmap />
          </Element>
          <Element name="faq">
            <LandingFaq />
          </Element>
        </ContentStyle>
      </RootStyle>
    </>
  );
}
