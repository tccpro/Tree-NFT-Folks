import Loader from "react-loader-spinner";
import { Stack } from "@mui/material";
export default function Loading() {
  //other logic
  return (
    <Stack
      sx={{ width: 1, height: "calc(100vh - 200px)" }}
      justifyContent="center"
      alignItems="center"
    >
      <Loader
        type="Circles"
        color="#00BFFF"
        height={100}
        width={100}
        timeout={10000} //3 secs
      />
    </Stack>
  );
}
