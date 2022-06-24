import { useEffect, useState, useRef } from "react";
import { Box, Stack, Typography } from "@mui/material";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Slider from "react-slick";
import { useEthers } from "@usedapp/core";
import { ethers } from "ethers";
import formatBigNumber from "utils/formatBigNumber";
import { useTreeFolksContract } from "hooks/useContract";

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

export default function StatsSlick() {
  const SliderRef = useRef();
  const [totalMinted, setTotalMinted] = useState(42);
  const { library, account, chainId } = useEthers();
  const TreeFolksContract = useTreeFolksContract();

  useEffect(() => {
    const totalSupply = async () => {
      const result = await TreeFolksContract.totalSupply();
      const total = formatBigNumber(result);
      console.log("totalMinted:", total, result);
      setTotalMinted(Number(total));
      return total;
    };
    if (account && chainId === 137) totalSupply();
  }, [TreeFolksContract, account, chainId]);

  const SliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                p: 4,
                background: "white",
                borderRadius: "30px",
                // minWidth: 312,
              }}
            >
              <Typography
                fontFamily="Amarante"
                color="black"
                fontSize={22}
                textAlign="center"
                sx={{ height: 66 }}
              >
                Number of Ent NFT Mints
              </Typography>
              <Typography fontSize={48} color="#FF2D60" fontWeight={700}>
                {totalMinted}
              </Typography>
              <Box component="img" src="/images/stat1.png" />
            </Stack>
          </Box>
          <Box sx={{ px: 1 }}>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                p: 4,
                background: "white",
                borderRadius: "30px",
                // minWidth: 312,
              }}
            >
              <Typography
                fontFamily="Amarante"
                color="black"
                fontSize={22}
                textAlign="center"
                sx={{ height: 66 }}
              >
                Number of Trees Planted
              </Typography>
              <Typography fontSize={48} color="#1DCF5D" fontWeight={700}>
                {totalMinted * 75}
              </Typography>
              <Box component="img" src="/images/stat2.png" />
            </Stack>
          </Box>
          <Box sx={{ px: 1 }}>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                p: 4,
                px: 3,
                background: "white",
                borderRadius: "30px",
                // minWidth: 312,
              }}
            >
              <Typography
                fontFamily="Amarante"
                color="black"
                fontSize={22}
                textAlign="center"
                sx={{ height: 66 }}
              >
                Estimated 100 Year Carbon Savings, metric tons
              </Typography>
              <Typography fontSize={48} color="#2466FF" fontWeight={700}>
                {totalMinted * 75 * 2.4}
              </Typography>
              <Box component="img" src="/images/stat3.png" />
            </Stack>
          </Box>

          <Box sx={{ px: 1 }}>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                p: 4,
                background: "white",
                borderRadius: "30px",
                // minWidth: 312,
              }}
            >
              <Typography
                fontFamily="Amarante"
                color="black"
                fontSize={22}
                textAlign="center"
                sx={{ height: 66 }}
              >
                Number of Ent NFT Mints
              </Typography>
              <Typography fontSize={48} color="#FF2D60" fontWeight={700}>
                {totalMinted}
              </Typography>
              <Box component="img" src="/images/stat1.png" />
            </Stack>
          </Box>
          <Box sx={{ px: 1 }}>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                p: 4,
                background: "white",
                borderRadius: "30px",
                // minWidth: 312,
              }}
            >
              <Typography
                fontFamily="Amarante"
                color="black"
                fontSize={22}
                textAlign="center"
                sx={{ height: 66 }}
              >
                Number of Trees Planted
              </Typography>
              <Typography fontSize={48} color="#1DCF5D" fontWeight={700}>
                {totalMinted * 75}
              </Typography>
              <Box component="img" src="/images/stat2.png" />
            </Stack>
          </Box>
          <Box sx={{ px: 1 }}>
            <Stack
              alignItems="center"
              justifyContent="center"
              sx={{
                p: 4,
                px: 3,
                background: "white",
                borderRadius: "30px",
                // minWidth: 312,
              }}
            >
              <Typography
                fontFamily="Amarante"
                color="black"
                fontSize={22}
                textAlign="center"
                sx={{ height: 66 }}
              >
                Estimated 100 Year Carbon Savings, metric tons
              </Typography>
              <Typography fontSize={48} color="#2466FF" fontWeight={700}>
                {totalMinted * 75 * 2.4}
              </Typography>
              <Box component="img" src="/images/stat3.png" />
            </Stack>
          </Box>
        </Slider>
      </Box>
    </>
  );
}
