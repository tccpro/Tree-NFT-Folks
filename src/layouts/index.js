import { useLocation, Outlet } from "react-router-dom";
import { Box } from "@mui/material";
//
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";
import Scrollbar from "components/Scrollbar";
import ParticlesBg from "particles-bg";

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  let config = {};

  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>
      <MainFooter />
    </>
  );
}
