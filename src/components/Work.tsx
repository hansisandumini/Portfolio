import { useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HomeTeq } from "../assets";
import { FaGithub, FaLink } from "react-icons/fa";

const Work = () => {
  const config = [
    {
      image: HomeTeq,
      title: "Hometeq",
      date: "This is an online shopping platform website with login and signup pages",
      views: 35,
      likes: 20,
      shares: 15,
      githubcode: "https://github.com/hansisandumini",
      technology: ["PHP", "HTML", "CSS", "MySql"],
    },
  ];

  const [showDetails2, setShowDetails2] = useState(false);
  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };
  const skinConsult = [
    {
      skills: ["OOP", "Java", "Java Swing"],
    },
  ];

  return (
    <section className=" px-[10%]  flex flex-col items-center" id="work">
      <div className="w-fit">
        <h1 className="backdrop-filter text-white flex justify-center py-2 px-5 bg-white bg-opacity-10 rounded">
          Work
        </h1>
      </div>
      <div>
        <h1 className="text-white text-4xl flex justify-center py-6 font-bold">
          Things I've built so far
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 justify-center py-5">
          {config.map((post, index) => (
            <div
              key={index}
              className="bg-white bg-opacity-10 rounded-lg overflow-hidden hover:shadow-white hover:shadow-ilg hover:scale-105 transition-all duraton-300"
            >
              <img
                src={post.image}
                className="object-cover h-100 w-full"
                alt=""
              />
              <div className="p-6">
                <span className="block text-white font-bold text-lg">
                  {post.title}
                </span>
                <h3 className="mt-3 flex flex-col text-sm font-semibold pb-4 border-b border-gray-600 text-gray-400">
                  <p className="">{post.date}</p>
                  <span className="grid grid-cols-3 gap-2  mt-2 ">
                    {post.technology.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 flex items-center bg-white bg-opacity-20 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </span>
                </h3>
                <div className="text-white mt-2 flex justify-between">
                  <a
                    className="flex items-center gap-1 text-white hover:text-[#cbd5e1] transition-colors duration-300"
                    href={post.githubcode}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    View Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:px-60 py-5">
          <div className="bg-white bg-opacity-10 rounded px-4">
            <div className="border-b border-gray-600 flex justify-between py-4">
              <h1 className="text-white flex items-center text-lg font-semibold">
                Skin Consultation Management @University of Westminster
              </h1>
              <h1 className="flex gap-4 items-center text-lg font-semibold">
                <button
                  className="font-bold text-xl text-[#22c55e] hover:text-[#4ade80] transition-colors duration-300"
                  onClick={toggleDetails2}
                >
                  {showDetails2 ? "-" : "+"}
                </button>
              </h1>
            </div>
            
            {showDetails2 && (
              <div className="py-4">
                <div className="flex w-1/3 justify-between items-center">
                  <p className="flex items-center gap-1 text-gray-300">
                    <FaLocationDot />
                    Westminster
                  </p>
                  <a
                    href="https://www.westminster.ac.uk/study/student-life"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-[#22c55e] hover:text-[#4ade80] transition-colors duration-300"
                  >
                    <FaLink />
                    .UOW.life
                  </a>
                </div>
                <p className="flex items-center gap-1 py-2 text-gray-300">
                  Have Create a Console System for a manager which can add new
                  doctors, Delete if needed, add or cancel consultation, print
                  and save them Show doctors and consultant time
                </p>
                <span className="flex md:flex-row flex-col space-x-2 py-2">
                  {skinConsult[0].skills.map((skill, index) => (
                    <span
                      key={index}
                      className="px-3 py-2 header bg-opacity-20 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </span>
                <div className="text-white mt-2 flex justify-between">
                  <a
                    className="flex items-center gap-1 text-white hover:text-[#cbd5e1] transition-colors duration-300"
                    href={'https://github.com/hansisandumini/WestminsterSkinConsultation'}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub />
                    View Code
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Work;
