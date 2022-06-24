import { useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Slider from "react-slick";

function NextArrow(props) {
  const { onClick } = props;
  return (
    <Box
      sx={{
        right: -100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        width: 48,
        height: 48,
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        cursor: "pointer",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <ChevronRightIcon sx={{ color: "#FFB400", fontSize: 30 }} />
    </Box>
  );
}

function PrevArrow(props) {
  const { onClick } = props;
  return (
    <Box
      sx={{
        left: -100,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "white",
        width: 48,
        height: 48,
        position: "absolute",
        top: "50%",
        transform: "translate(0, -50%)",
        cursor: "pointer",
        borderRadius: "50%",
      }}
      onClick={onClick}
    >
      <ChevronLeftIcon sx={{ color: "#FFB400", fontSize: 30 }} />
    </Box>
  );
}

export default function HeroSlick() {
  const SliderRef = useRef();

  const SliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Box>
        <Slider {...SliderSettings} ref={SliderRef}>
          <Box sx={{ px: 1 }}>
            <Box component="img" src="/images/slider1.png" />
          </Box>
          <Box sx={{ px: 1 }}>
            <Box component="img" src="/images/slider2.png" />
          </Box>
          <Box sx={{ px: 1 }}>
            <Box component="img" src="/images/slider3.png" />
          </Box>
        </Slider>
      </Box>
    </>
  );
}
