import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import { navigationMap } from "shared/model/navigation";

const Home = lazy(() => import("pages/home"));

export const router = createBrowserRouter([
  {
    path: navigationMap.Base,
    children: [
      {
        path: navigationMap.Home,
        element: <Home />,
      },
    ],
  },
]);

export default router;
