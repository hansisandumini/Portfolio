import { useState } from "react";
import { FaLink } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

function Experience() {
  const [showDetails, setShowDetails] = useState(false);
  const [showDetails2, setShowDetails2] = useState(false);
  const [showDetails3, setShowDetails3] = useState(false);

  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  const toggleDetails2 = () => {
    setShowDetails2(!showDetails2);
  };

  const toggleDetails3 = () => {
    setShowDetails3(!showDetails3);
  };

  const ofz = [
    {
      skills: ["Leadership", "Team Leadership"],
    },
  ];

  const ofz2 = [
    {
      skills: ["Word Press", "Team Working"],
    },
  ];

  const ofz3 = [
    {
      skills: ["Word Press", "Team Leadership"],
    },
  ];

  return (
    <section className="px-14   text-white " id="experience">
      <div className="flex flex-col gap-8 py-10 px-5 w-full">
        <div className="flex justify-center">
          <h1 className="text-white flex justify-center py-2 px-5 w-fit header bg-white bg-opacity-10 rounded">
            Experience
          </h1>
        </div>
        <h1 className="flex justify-center text-white font-bold text-4xl">
          Here is a quick summary of <br /> my most recent experiences
        </h1>
      </div>

      {/* ofz 1 */}
      <div className="flex flex-col md:px-60 py-5">
        <div className="bg-white bg-opacity-10 rounded px-4">
          <div className="border-b border-gray-600 flex justify-between py-4">
            <h1 className="flex items-center text-lg font-semibold">
              Apex Business Academy
            </h1>
            <h1 className="flex gap-4 items-center text-lg font-semibold">
              Mar 2021 - Mar 2022
              <button
                className="font-bold text-xl text-[#22c55e] hover:text-[#4ade80] transition-colors duration-300"
                onClick={toggleDetails}
              >
                {showDetails ? "-" : "+"}
              </button>
            </h1>
          </div>
          {showDetails && (
            <div className="py-4">
              <div className="flex w-1/3 justify-between items-center">
                <p className="flex items-center gap-1 text-gray-300">
                  <FaLocationDot />
                  Matara
                </p>
                <a
                  href="https://apexonline.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#22c55e] hover:text-[#4ade80] transition-colors duration-300"
                >
                  <FaLink />
                  apex.com
                </a>
              </div>
              <p className="flex items-center gap-1 py-2 text-gray-300">
                Work as an employer in the team
              </p>
              <span className="flex md:flex-row flex-col space-x-2 py-2">
                {ofz[0].skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 header bg-opacity-20 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* next ofz 2 */}
      <div className="flex flex-col md:px-60 py-5">
        <div className="bg-white bg-opacity-10 rounded px-4">
          <div className="border-b border-gray-600 flex justify-between py-4">
            <h1 className="flex items-center text-lg font-semibold">
              Nicepick Holdings PVT LTD
            </h1>
            <h1 className="flex gap-4 items-center text-lg font-semibold">
              Aug 2023 - Jan 2024
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
                  Bambalapitiya
                </p>
                <a
                  href="https://www.nicepick.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#22c55e] hover:text-[#4ade80] transition-colors duration-300"
                >
                  <FaLink />
                  NicePick.com
                </a>
              </div>
              <p className="flex items-center gap-1 py-2 text-gray-300">
                Wordpress web developer as an Intern
              </p>
              <span className="flex md:flex-row flex-col space-x-2 py-2">
                {ofz2[0].skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 header bg-opacity-20 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* next ofz 3 */}
      <div className="flex flex-col md:px-60 py-5">
        <div className="bg-white bg-opacity-10 rounded px-4">
          <div className="border-b border-gray-600 flex justify-between py-4">
            <h1 className="flex items-center text-lg font-semibold">
              360 Digital solutions pvt Ltd
            </h1>
            <h1 className="flex gap-4 items-center text-lg font-semibold">
              Feb 2024 - Current
              <button
                className="font-bold text-xl text-[#22c55e] hover:text-[#4ade80] transition-colors duration-300"
                onClick={toggleDetails3}
              >
                {showDetails3 ? "-" : "+"}
              </button>
            </h1>
          </div>
          {showDetails3 && (
            <div className="py-4">
              <div className="flex w-1/3 justify-between items-center">
                <p className="flex items-center gap-1 text-gray-300">
                  <FaLocationDot />
                  Kalutara
                </p>
                <a
                  href="https://360digital.lk/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-[#22c55e] hover:text-[#4ade80] transition-colors duration-300"
                >
                  <FaLink />
                  360Digital.com
                </a>
              </div>
              <p className="flex items-center gap-1 py-2 text-gray-300">
                Wordpress web developer as an intern
              </p>
              <span className="flex md:flex-row flex-col space-x-2 py-2">
                {ofz3[0].skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-2 header bg-opacity-20 rounded"
                  >
                    {skill}
                  </span>
                ))}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default Experience;
