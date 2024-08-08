import { createBrowserRouter } from "react-router-dom";
import { Home } from "../views/home";
import { Docs } from "../views/docs";
import { Root } from "../views";
import { Error } from "../components/Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <Error.NotFound/>,
    children: [
      {
        path: "",
        element: <Home/>
      },
      {
        path: "docs/:topic?/:category?/:article?",
        element: <Docs/>
      }
    ]
  }
])