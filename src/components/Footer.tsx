import { FaGithub } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <div className="py-4 px-20 flex justify-between header text-white ]">
      <div className="flex items-center ">&copy;Hansi | {year}</div>
      <div className="md:flex hidden md:space-x-7">
        <a
          className="text-white hover:text-[#4ade80] transition-colors duration-300"
          href="https://www.instagram.com/tittoo_007?igsh=c3RpdDM3cHFuaWpo"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram size={30} />
        </a>
        <a
          className="text-white hover:text-[#4ade80] transition-colors duration-300"
          href="https://web.facebook.com/profile.php?id=100073963877696"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} />
        </a>
        <a
          className="text-white hover:text-[#4ade80] transition-colors duration-300"
          href="https://www.linkedin.com/in/hansi-kottawaththa-957342214/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} />
        </a>
        <a
          className="text-white hover:text-[#4ade80] transition-colors duration-300"
          href="https://github.com/hansisandumini"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={30} />
        </a>
      </div>
    </div>
  );
}

export default Footer;
