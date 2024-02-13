import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Main from "../pages/Main";
import Lyrics from "../pages/Lyrics";
import Contacts from "../pages/Contacts";

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
        path: "/concerts",
        element: <Main />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "/music",
        element: <Main />,
      },
      {
        path: "/lyrics",
        element: <Lyrics />,
      },
      {
        path: "/news",
        element: <Main />,
      },
    ],
  },
]);

export default router;
