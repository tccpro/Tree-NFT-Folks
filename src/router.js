import { Suspense, lazy } from "react";
import { Navigate, useRoutes, useLocation } from "react-router-dom";

import MainLayout from "layouts";
import Homepage from "pages/Homepage";
import Mintpage from "pages/Mintpage";
import Termspage from "pages/Termspage";
import Formpage from "pages/Formpage";
import Loading from "components/Loading";

const Loadable = (Component) => (props) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { pathname } = useLocation();
  const isDashboard = pathname.includes("/dashboard");

  return (
    <Suspense fallback={<Loading />}>
      <Component {...props} />
    </Suspense>
  );
};

export default function Router() {
  return useRoutes([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { path: "/", element: <Homepage /> },
        { path: "/mint", element: <Mintpage /> },
        { path: "/terms", element: <Termspage /> },
        { path: "/portal", element: <Formpage /> },
      ],
    },
  ]);
}

// IMPORT COMPONENTS

// const Homepage = Loadable(lazy(() => import("pages/Homepage")));
