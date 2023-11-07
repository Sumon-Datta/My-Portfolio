import mypicforabout from "../../../public/flag images/395705301_354376326955259_6794571180859989848_n.jpg";
import "./AboutMe.css";
import mernIcon from "../../../public/flag images/mern3.png";
import threeDot from "../../../public/flag images/Untitled-1.png";


const AboutMe = () => {
  return (
    <div className="bg-white my-8  h-auto w-full px-16  md:px-32 ">
      <div className="about text-center mb-8">
        <h2 className="text-2xl tracking-widest uppercase">About Me</h2>
      </div>
      <div className="mx-auto my-16 grid grid-cols-1 sm:grid-cols-5 h-full w-full gap-4">
        <div className="left-side flex md:justify-start justify-center items-center  sm:col-span-2 ">
          <div className="mypic content">
            <img className=" w-[250px] " src={mypicforabout} alt="" />
            <div className="icon flex justify-center mt-3 ">
              <img className="w-[240px]" src={mernIcon} alt="" />
            </div>
          </div>
        </div>
        <div className="right-side flex justify-center items-center   sm:col-span-3 ">
          <div className="content text-justify w-full">
            <div className="card rounded-none border-2 w-full bg-base-100 ">
                <div className=" bg-blue-gray-400">
                <img className="w-20 p-4" src={threeDot} alt="" />
                </div>
             
              <div className="card-body ">
                <span className="my-3 text-xl font-semibold" >
                    Hi :)
                </span>
                <span className="text-sm [word-spacing:2px]">
                👋 I'm Davina Griss. Fictional person for preview purposes :) I'm working with newest front-end frameworks like Angular, React and Vue. What you are seeing now is portfolio template from Dorota1997. If you like this portfolio template, make sure to ⭐ the repository to make it more recognizable for other users. Thank you 💜
                </span>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
    
  );
};

export default AboutMe;
