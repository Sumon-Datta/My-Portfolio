
import { BsFacebook, BsGithub, BsInstagram } from "react-icons/bs";
import { Link } from "react-router-dom";


const Footer = () => {
    return (
        <div className="bg-[#1F1F1F] py-8 grid place-content-center gap-3 h-[30vh] w-full ">
            <div className="content flex text-white gap-3 justify-center items-center">
                <Link to="https://www.instagram.com/thenameissumon/" ><BsInstagram className="text-lg" /></Link> 
                <Link><BsFacebook className="text-lg"/></Link> 
                <Link><BsGithub className="text-lg"/></Link> 
            </div>
            <div className="copyright flex justify-center">
            <h2 className="text-center text-white text-[12px]" >Copyright © Sumon Datta</h2>
            </div>
        </div>
    );
};

export default Footer;