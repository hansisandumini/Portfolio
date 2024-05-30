function About() {
  const para = [
    {
      description:
        "I am a highly motivated individual who is undertaking BEng. Software Engineering in a desired university. I have skills in both software and hardware and a vast range of skills in programming such as web development, data structures and algorithms",
    },
  ];
  return (
    <section
      className="flex px-[15%] flex-col md:flex-row justify-evenly items-center  "
      id="about"
    >
      <div className=" flex flex-col md:flex-row justify-center py-10">
        <div className="flex flex-col items-center space-y-5 md:mr-10">
          <h1 className="text-white  bg-white  backdrop-filter bg-opacity-10 rounded-md px-4 py-2 w-fit">
            About Me
          </h1>
          <h1 className="text-white font-bold text-4xl">
            Transforming vision into exceptional portfolios
          </h1>
          {para.map((des, index) => (
            <p key={index} className="text-[#cbd5e1] text-xl font-space-mono">
              {des.description}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
