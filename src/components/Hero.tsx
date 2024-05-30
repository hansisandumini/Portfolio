import TypeWriter from "typewriter-effect";
import { motion } from "framer-motion";
import ReactGA from "react-ga";
import { useEffect } from "react";
import Self from "../assets/self.jpg";
import { FaArrowRight, FaArrowDown } from "react-icons/fa6";
import { SiFacebook, SiLinkedin, SiGithub } from "react-icons/si";
function Hero() {
  useEffect(() => {
    ReactGA.pageview(window.location.pathname);
  }, []);

  const resumeClickAnalytics = (category = "", action = "", label = "") => {
    if (category && action && label) {
      ReactGA.event({ category, action, label });
    }
  };
  const config = {
    resume:
      "https://drive.google.com/file/d/1K-R5_JmHfZW2t1nvke0HYv3D54yxUaLl/view?usp=sharing",
  };
  const strings = ["Web Developer", "Mobile Developer"];

  return (
    <>
      <section className=" pb-10 px-32 flex flex-col md:flex-row py-32  justify-center ">
        <div className="md:w-1/2 flex justify-center flex-col space-y-4">
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-white text-5xl font-spaceMono"
          >
            Hello, I'm
          </motion.h1>
          <motion.h1
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.7 }}
            className="text-white md:text-5xl font-bold flex md:flex-row flex-col"
          >
            Hansi Sandumini
          </motion.h1>
          <motion.p
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.2 }}
            className="text-gray-200 text-2xl font-bold"
          >
            A passionate{" "}
            <span className="text-[#22c55e]">{"<Web Developer/>"}</span> with 1
            year of
            <br />
            experience creating user-friendly Applications
            <div className="TypeEffect">
              <TypeWriter
                options={{
                  strings: strings,
                  autoStart: true,
                  loop: true,
                  delay: 70,
                  deleteSpeed: 20,
                  wrapperClassName: "text-[#22c55e] text-2xl font-bold",
                }}
              />
            </div>
          </motion.p>
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 1.7 }}
            className="hidden md:block "
          >
            <div className="flex pt-16 gap-4">
              <button
                onClick={() =>
                  resumeClickAnalytics(
                    "Resume",
                    "Download Resume",
                    "Button label"
                  )
                }
                className="flex  items-center btn bg-[#22c55e] hover:bg-[#4ade80] text-white px-6 py-4 rounded-lg shadow-lg"
              >
                <a
                  className="flex items-center gap-2"
                  href={config.resume}
                  target="_blank"
                >
                  Download Resume
                  <FaArrowRight />
                </a>
              </button>
              <button className="btn text-white bg-white bg-opacity-10 px-6 py-4 rounded-lg shadow-lg">
                <a href="#work" className="flex items-center gap-4">
                  Projects
                  <FaArrowDown />
                </a>
              </button>
            </div>
          </motion.div>
        </div>
        <div className="md:w-1/3 flex flex-col justify-center items-center py-10 ">
          <div className="w-65 h-65 rounded-full overflow-hidden flex hover:shadow-white shadow-lg transition-shadow duration-300">
            <img
              className="w-full h-full object-cover"
              src={Self}
              alt="profile image"
            />
          </div>
          <div className="mt-2 flex flex-col text-center px-5 bg-white  rounded-lg bg-opacity-25 backdrop-filter ">
            <h1 className="text-white font-bold text-xl">Hansi Sandumini</h1>
            <div className="flex py-5 justify-center space-x-9">
              <a
                className="text-white hover:text-[#4ade80] transition-colors duration-300"
                href="https://github.com/hansisandumini"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub size={30} />
              </a>
              <a
                className="text-white hover:text-[#4ade80] transition-colors duration-300"
                href="https://www.linkedin.com/in/hansi-kottawaththa-957342214/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin size={30} />
              </a>
              <a
                className="text-white hover:text-[#4ade80] transition-colors duration-300"
                href="https://web.facebook.com/profile.php?id=100073963877696"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiFacebook size={30} />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
