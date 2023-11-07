import { createHashRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home from "../Home/Home";
import AboutMe from "../AboutMe/AboutMe";

const router = createHashRouter([
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

