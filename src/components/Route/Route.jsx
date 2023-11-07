import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: "/",
            element: <Home></Home>,   
        },
        {
            path: "/about",
            element: <AboutMe></AboutMe>,   
        }
      ]
    },
  ]);

export default router;

