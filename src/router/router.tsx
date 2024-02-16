import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Main from "../pages/Main";
import Lyrics from "../pages/Lyrics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    //   errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/lyrics",
        element: <Lyrics />,
      },
      {
        path: "/artists",
        element: <Main />,
      },
      {
        path: "/side-projects",
        element: <Main />,
      },
    ],
  },
]);

export default router;
