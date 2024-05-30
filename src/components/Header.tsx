import {
  Bars3Icon,
  UserIcon,
  HomeIcon,
  BriefcaseIcon,
  LightBulbIcon,
  TrophyIcon,
} from "@heroicons/react/16/solid";
import { useEffect, useState } from "react";
function Header() {
  const [toggle, setToggle] = useState<boolean>(false);
  const [isFixed, setIsFixed] = useState<boolean>(false);
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      if (prevScrollPos > currentScrollPos) {
        setIsFixed(false); // Scroll up, header should not be fixed
      } else {
        setIsFixed(true); // Scroll down, fix the header
      }
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const solutions = [
    {
      name: "Home",
      // description: "Get a better understanding of your traffic",
      href: "#",
      icon: HomeIcon,
    },
    {
      name: "About Me",
      // description: "Speak directly to your customers",
      href: "#about",
      icon: UserIcon,
    },
    {
      name: "Skills",
      // description: "Your customers' data will be safe and secure",
      href: "#skills",
      icon: LightBulbIcon,
    },
    {
      name: "Work",
      // description: "Connect with third-party tools",
      href: "#work",
      icon: TrophyIcon,
    },
    {
      name: "Experience",
      // description: "Build strategic funnels that will convert",
      href: "#experience",
      icon: BriefcaseIcon,
    },
  ];

  return (
    <header
      className={` py-5 px-5 md:px-20   ${
        isFixed ? "fixed top-0 left-0 right-0" : ""
      }`}
    >
      <div className="flex justify-between items-center rounded-lg  py-3 px-5   header">
        <div className="text-white">
          <a className="font-bold text-3xl" href="/">
            <span className="text-[#22c55e]">
              {"<H"}
              {"ansi"}
            </span>
            <span className="text-[#22c55e]">{"/ >"}</span>
          </a>
        </div>
        <div className="text-white font-bold text-2xl ">
          <nav className="hidden md:block">
            <ul className="flex text-lg">
              <li className="px-3 hover:text-[#4ade80] transition-colors duration-300">
                <a href="#">Home</a>
              </li>
              <li className="px-3 hover:text-[#4ade80] transition-colors duration-300">
                <a href="#about">About me</a>
              </li>
              <li className="px-3 hover:text-[#4ade80] transition-colors duration-300">
                <a href="#skills">Skills</a>
              </li>
              <li className="px-3 hover:text-[#4ade80] transition-colors duration-300">
                <a href="#work">Work</a>
              </li>
              <li className="px-3 hover:text-[#4ade80] transition-colors duration-300">
                <a href="#experience">Experience</a>
              </li>
            </ul>
          </nav>
        </div>
        <button
          className="block md:hidden text-white"
          onClick={() => setToggle(!toggle)}
        >
          <Bars3Icon className="h-6" />
        </button>
      </div>
      {toggle && (
        <div className="text-white block md:hidden mt-4 ">
          <div className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4">
            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4 space-y-1">
                {solutions.map((item) => (
                  <div
                    key={item.name}
                    className="group border relative flex  gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                    onClick={() => setToggle(!toggle)}
                  >
                    <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon
                        className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                        aria-hidden="true"
                      />
                    </div>
                    <div className="flex items-center">
                      <a
                        href={item.href}
                        className="font-semibold text-gray-900"
                      >
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      {/* <p className="mt-1 text-gray-600">{item.description}</p> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
