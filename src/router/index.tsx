//Import React Router
import { createBrowserRouter } from "react-router-dom";

//Import components
import { Home } from "../views/home";
import { Docs } from "../views/docs";
import { Root } from "../views";
import { Error } from "../components/Error";
import { Doc } from "../views/docs/[slug]";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <Error.NotFound />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "docs",
        element: <Docs />,
      },
      {
        path: "docs/:topic?/:category?/:article?",
        element: <Doc />,
      },
    ],
  },
]);
