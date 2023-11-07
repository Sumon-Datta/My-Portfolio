import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3 } from "react-icons/bi";
import { DiSass } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";
import { BiLogoJavascript } from "react-icons/bi";
import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { GrNode } from "react-icons/gr";
import { SiExpress } from "react-icons/si";

const Skills = () => {
  return (
    <div className="skills bg-[#1F1F1F] py-9 md:pb-20  h-auto w-full  px-10  md:px-20 ">
      <div className="content pb-10 md:pb-16">
        <div className=" text-center  p-10">
          <h2 className="text-2xl text-white tracking-widest uppercase">
            Skills
          </h2>
        </div>
        <div className="icon md:py-9 grid grid-cols-3 place-items-center md:grid-cols-10 gap-4">
          <div className="html grid place-items-center text-white bg-[#2A2929] h-24 w-[105px]  rounded-lg">
            <AiFillHtml5 className="text-5xl" /> 
            <h3 className="text-[11px] text-center uppercase">html5</h3>
          </div>
          <div className="css grid place-items-center text-white bg-[#2A2929] h-24 w-[105px]  rounded-lg">
            <BiLogoCss3 className="text-5xl" />
            <h3 className="text-[11px] text-center uppercase">css3</h3>
          </div>
          <div className="sass grid place-items-center text-white bg-[#2A2929] h-24 w-[105px]  rounded-lg">
            <DiSass className="text-5xl"/>
            <h3 className="text-[11px] text-center uppercase">sass</h3>
          </div>
          <div className="bootstrap grid place-items-center text-white bg-[#2A2929] h-24 w-[105px]  rounded-lg">
            <FaBootstrap className="text-5xl"/>
            <h3 className="text-[11px]  uppercase">bootstrap</h3>
          </div>
          <div className="tailwind grid place-items-center text-white bg-[#2A2929] h-24 w-[105px]  rounded-lg">
            <SiTailwindcss className="text-5xl"/>
            <h3 className="text-[11px] text-center uppercase">tailwind</h3>
          </div>
          <div className="js grid place-items-center text-white bg-[#2A2929] h-24 w-[105px]  rounded-lg">
            <BiLogoJavascript className="text-5xl"/>
            <h3 className="text-[11px] text-center uppercase">javascript</h3>
          </div>
          <div className="react grid place-items-center text-white bg-[#2A2929] h-24 w-[105px]  rounded-lg">
            <FaReact className="text-5xl"/>
            <h3 className="text-[11px] text-center uppercase">react</h3>
          </div>
          <div className="mongodb grid place-items-center text-white bg-[#2A2929] h-24 w-[105px]  rounded-lg">
            <BiLogoMongodb className="text-5xl"/>
            <h3 className="text-[11px] text-center uppercase">mongodb</h3>
          </div>
          <div className="node grid place-items-center text-white bg-[#2A2929] h-24 w-[105px]  rounded-lg">
            <GrNode className="text-5xl"/>
            <h3 className="text-[11px] text-center uppercase">node </h3>
          </div>
          <div className="express grid place-items-center text-white bg-[#2A2929] h-24 w-[105px]  rounded-lg">
            <SiExpress className="text-5xl"/>
            <h3 className="text-[11px] text-center uppercase">express</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
