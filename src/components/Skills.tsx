import {
  Typescript,
  Vite,
  Tailwind,
  Git,
  Github,
  WordPress,
  Html,
  Php,
  Css,
  Jss,
} from "../assets";

const Skills = () => {
  const frondEnd = [
    { image: Html, skill: "HTML", alt: "html" },
    { image: Css, skill: "CSS", alt: "css" },
    { image: Jss, skill: "JS", alt: "js" },
    { image: Php, skill: "PHP", alt: "php" },
    { image: Vite, skill: "React", alt: "react" },
    { image: Vite, skill: "React Native", alt: "react_native" },
    { image: Typescript, skill: "Typescript", alt: "typescript" },
    { image: WordPress, skill: "Word Press", alt: "word_press" }, 
    { image: Tailwind, skill: "Tailwindcss", alt: "tailwind" },
    
    
  ];

  const others = [
    { image: Github, skill: "Github", alt: "Tailwind" },
    { image: Git, skill: "Git", alt: "Git" },
  ];

  return (
    <section className="px-5 py-32" id="skills">
      <div className="pb-10">
        <p className="flex justify-center backdrop-filter text-white bg-white bg-opacity-10 rounded-md px-4 py-2 w-fit mx-auto ">
          Skills
        </p>
      </div>
      <div className="flex  flex-col items-center">
        <p className="text-white font-bold text-4xl">
          The Skills, tools and technologies
        </p>
        <p className="text-white font-bold text-4xl pb-8">
          I am really good at:
        </p>
        <h1 className="text-white font-bold text-2xl pb-8">Frontend</h1>
        <div className="grid  grid-cols-3 md:grid-cols-6 gap-5 pb-10">
          {frondEnd.map((skills) => (
            <div
              key={skills.skill}
              className="flex flex-col items-center  hover:scale-105 hover:shadow-white transition-transform duration-300 bg-white  rounded-lg bg-opacity-25 backdrop-filter   py-2 px-3"
            >
              <img className="w-40 h-40" src={skills.image} alt={skills.alt} />
              <span className="text-gray-200 mt-2">{skills.skill}</span>
            </div>
          ))}
        </div>
        <h1 className="text-white font-bold text-2xl pb-8">
          Other Technologies
        </h1>
        <div className="grid  grid-cols-3 md:grid-cols-6 gap-5 pb-10">
          {others.map((skills) => (
            <div
              key={skills.skill}
              className="flex flex-col items-center  hover:scale-105 hover:shadow-white transition-transform duration-300 bg-white  rounded-lg bg-opacity-25 backdrop-filter   py-2 px-3"
            >
              <img className="w-40 h-40" src={skills.image} alt={skills.alt} />
              <span className="text-gray-200 mt-2">{skills.skill}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
