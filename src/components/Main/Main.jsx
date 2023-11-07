import { Outlet } from "react-router-dom";
import NavLink from "../Share/NavLink";
import AboutMe from "../AboutMe/AboutMe";
import Footer from "../Share/Footer";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Experience from "../Experience/Experience";


const Main = () => {
    return (
        <div>
            <NavLink></NavLink>
            <Outlet></Outlet>
            <AboutMe></AboutMe>
            <Projects></Projects>
            <Skills></Skills>
            <Experience></Experience>
            <Footer></Footer>
        </div>
    );
};

export default Main;