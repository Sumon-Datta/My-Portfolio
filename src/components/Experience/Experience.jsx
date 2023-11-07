import { motion } from "framer-motion";
import { BsHourglassSplit } from "react-icons/bs";
import { FaReact } from "react-icons/fa";
import { BiSolidRightArrow } from "react-icons/bi";
import { BiSolidLeftArrow } from "react-icons/bi";

const Experience = () => {
  return (
    <div className="experience bg-[#EFE1BD] py-8  h-auto w-full  px-10  md:px-20 ">
      <div className="content pb-4">
        <div className=" text-center  p-10">
          <h2 className="text-2xl tracking-widest uppercase">Experience</h2>
        </div>

        <div className="experience-company my-8">
          <div className="flex md:justify-center ">
            <div className="relative h-[95vh] md:h-[85vh] w-1 bg-white">
              <div className="icon grid  place-items-center">
                <motion.div
                  initial={{ scale: 0,rotate: 0, }}
                  whileInView={{ scale: 1, rotate: "360deg" }}
                  transition={{ type: "spring", stiffness: 70 }}
                  className="reactIcon bg-[#AE944F] border-4 border-white p-3 rounded-full absolute top-0"
                >
                  <FaReact className="text-4xl font-bold text-white " />
                </motion.div>
                <motion.div
                  initial={{ scale: 0, rotate: 0, }}
                  whileInView={{ scale: 1, rotate: "360deg"}}
                  transition={{ type: "spring", stiffness: 70 }}
                  className="reactIconTwo  bg-[#AE944F] border-4 border-white p-3 rounded-full absolute md:top-[44%] top-[48%] "
                >
                  <FaReact className="text-4xl font-bold text-white " />
                </motion.div>
                <motion.div
                  initial={{ scale: .7 }}
                  whileInView={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 70 }}
                  className="hourGlass flex justify-center items-center absolute bottom-0 bg-[#AE944F] border-4 border-white p-3 rounded-full "
                >
                  <BsHourglassSplit className="text-4xl font-bold text-white " />
                </motion.div>
              </div>

              {/* first experience */}

              {/* for mobile */}
              <motion.div
                initial={{ x: 250 }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring", stiffness: 70 }}
                className="card w-96 md:hidden block rounded-none bg-base-100 shadow-xl md:left-[-430px] right-[-50px] "
              >
                <div className="card-body">
                  <div className="badge p-3 bg-[#AE944F] text-white">
                    React JS
                  </div>
                  <p>Front-End Developer</p>
                  <span>MediaSoft Data System ltd</span>
                  <div className=" ">
                    <div className="technology">
                      <div className="badge p-3 mr-1 bg-[#f5e9c4] text-black">
                        Html
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Css
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Bootstrap
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Javascript
                      </div>
                      <div className="badge p-3 mr-1 bg-[#f5e9c4] text-black">
                        React JS
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Express
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Mongodb
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute block md:hidden left-[-12px] top-[25px]">
                  <BiSolidLeftArrow className="text-white" />
                </div>
              
                <div className="absolute hidden md:block right-[-12px] top-[25px]">
                  <BiSolidRightArrow className="text-white" />
                </div>
              </motion.div>
              {/* for mobile */}

              <motion.div
                initial={{ x: -250 }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring", stiffness: 70 }}
                className="card w-96 hidden md:block rounded-none bg-base-100 shadow-xl left-[-430px]"
              >
                <div className="card-body">
                  <div className="badge p-3 bg-[#AE944F] text-white">
                    React JS
                  </div>
                  <p>Front-End Developer</p>
                  <span>MediaSoft Data System ltd</span>
                  <div className=" ">
                    <div className="technology">
                      <div className="badge p-3 mr-1 bg-[#f5e9c4] text-black">
                        Html
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Css
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Bootstrap
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Javascript
                      </div>
                      <div className="badge p-3 mr-1 bg-[#f5e9c4] text-black">
                        React JS
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Express
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Mongodb
                      </div>
                    </div>
                  </div>
                </div>
                
              
                <div className="absolute hidden md:block right-[-12px] top-[25px]">
                  <BiSolidRightArrow className="text-white" />
                </div>
              </motion.div>

              {/* first experience */}

              {/* 2nd experience */}

              <motion.div
                initial={{ x: 250 }}
                whileInView={{ x: 0 }}
                transition={{ type: "spring", stiffness: 70 }}
                className="card w-96 rounded-none bg-base-100 shadow-xl absolute top-[48%] md:top-[44%] right-[-430px]"
              >
                <div className="card-body">
                  <div className="badge p-3 bg-[#AE944F] text-white">
                    React JS
                  </div>
                  <p>Front-End Developer</p>
                  <span>MediaSoft Data System ltd</span>
                  <div className=" ">
                    <div className="technology">
                      <div className="badge p-3 mr-1 bg-[#f5e9c4] text-black">
                        Html
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Css
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Bootstrap
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Javascript
                      </div>
                      <div className="badge p-3 mr-1 bg-[#f5e9c4] text-black">
                        React JS
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Express
                      </div>
                      <div className="badge p-3 m-1 bg-[#f5e9c4] text-black">
                        Mongodb
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute  left-[-12px] top-[25px]">
                  <BiSolidLeftArrow className="text-white" />
                </div>
              </motion.div>

              {/* 2nd experience */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
