import projectOne from "../../../public/projects images/pic-1.png";
import projectTwo from "../../../public/projects images/pic-2.jpeg";
import projectThree from "../../../public/projects images/pic-3.png";
import projectFour from "../../../public/projects images/pic-4.jpeg";
import projectFive from "../../../public/projects images/pic-5.jpeg";
import projectSix from "../../../public/projects images/pic-6.png";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects bg-[#EFE1BD] py-8  h-auto w-full  px-10  md:px-20 ">
      <div className="content pb-16">
        <div className=" text-center  p-10">
          <h2 className="text-2xl tracking-widest uppercase">Projects</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 ">
          <div className="projectImg  max-w-full h-[295px] md:h-[275px]">
            <div className="image max-w-full h-8/10">
              <img className="w-full h-full" src={projectOne} alt="" />
            </div>
            <div className="content h-2/10 flex justify-center items-center ">
              <span className="text-lg uppercase font-semibold ">Moto Bike</span>
            </div>
          </div>
          <div className="projectImg  max-w-full h-[295px] md:h-[275px]">
            <div className="image max-w-full h-8/10">
              <img className="w-full h-full" src={projectTwo} alt="" />
            </div>
            <div className="content h-2/10 flex justify-center items-center ">
              <span className="text-lg uppercase font-semibold">Moto Bike</span>
            </div>
          </div>
          <div className="projectImg  max-w-full h-[295px] md:h-[275px]">
            <div className="image max-w-full h-8/10">
              <img className="w-full h-full" src={projectThree} alt="" />
            </div>
            <div className="content h-2/10 flex justify-center items-center ">
              <span className="text-lg uppercase font-semibold">Moto Bike</span>
            </div>
          </div>
          <div className="projectImg  max-w-full h-[295px] md:h-[275px]">
            <div className="image max-w-full h-8/10">
              <img className="w-full h-full" src={projectFour} alt="" />
            </div>
            <div className="content h-2/10 flex justify-center items-center ">
              <span className="text-lg uppercase font-semibold">Moto Bike</span>
            </div>
          </div>
          <div className="projectImg  max-w-full h-[295px] md:h-[275px]">
            <div className="image max-w-full h-8/10">
              <img className="w-full h-full" src={projectFive} alt="" />
            </div>
            <div className="content h-2/10 flex justify-center items-center ">
              <span className="text-lg uppercase font-semibold">Moto Bike</span>
            </div>
          </div>
          <div className="projectImg  max-w-full h-[295px] md:h-[275px]">
            <div className="image max-w-full h-8/10">
              <img className="w-full h-full" src={projectSix} alt="" />
            </div>
            <div className="content h-2/10 flex justify-center items-center ">
              <span className="text-lg uppercase font-semibold">Moto Bike</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
