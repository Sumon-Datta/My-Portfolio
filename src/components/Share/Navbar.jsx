import { useState } from 'react';
import { BsGithub } from 'react-icons/Bs';
import { HiOutlineBars3CenterLeft } from 'react-icons/hi2';
import { MdOutlineClose } from 'react-icons/Md';
import { Link } from 'react-router-dom';
import "./Navbar.css"




const Navbar = () => {

    const [open,setOpen] = useState(true)

    const [show, setShow] = useState(true)

    const handleOpen = () =>{
        console.log("object")
    }

    return (
        <div className="md:flex justify-between align-middle text-white font-semibold p-6 px-14 bg-indigo-500" >
           <div className="logo text-lg flex justify-between ">
            <div> Sumon  <span className=" text-yellow-300 " >Datta</span> </div>
           <div className='md:hidden' onClick={()=>setOpen(!open)} >
            {
                open? <HiOutlineBars3CenterLeft  className='text-3xl text-white font-extrabold cursor-pointer' onClick={()=>handleOpen()} ></HiOutlineBars3CenterLeft>:
                <MdOutlineClose className='text-3xl text-white font-extrabold cursor-pointer' onClick={()=>setShow(!true)} ></MdOutlineClose>
            }
           
           </div>
            </div> 
            <div className="navLink lg:flex block  list-none lg:gap-7 mx-5 text-lg cursor-pointer ">
               
           

            
               
            {
                show&&
                
                <>
                
                
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
                </>
             
            }
            {
                !show&&
                <>
                <li>Home</li>
                <li>About</li>
                <li>Projects</li>
                <li>Skills</li>
                <li>Experience</li>
                <li>Contact</li>
                </>
             
            }
            </div>
           
            
            
            <div className="github">
                <Link to='https://github.com/Sumon-Datta/VirgoB/blob/main/src/components/Footer/Footer.js'>
            <BsGithub className='text-2xl' ></BsGithub>
            </Link>
            </div>

          
        </div>
    );
};

export default Navbar;