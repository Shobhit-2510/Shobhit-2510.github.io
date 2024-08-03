import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white flex flex-col h-[20vh] md:h-[30vh] justify-center">
      <div className="content flex justify-center gap-4 md:gap-16 items-center ">
        <div className="left">
          <h1 className="text-sm md:text-xl mb-2 text-center">
            Contact details:
          </h1>
          <h2 className="text-xs md:text-sm text-center">
            <a href="tel:+919319894169">+91-9319894169</a>
          </h2>
          <h2 className="text-xs md:text-sm text-center">
            <a href="tel:+9193118199982">+91-9311819982</a>
          </h2>
        </div>
        <div className="mid">
          <h1 className="text-sm md:text-xl mb-2 text-center">Email:</h1>
          <h1 className="flex justify-center items-center">
            <a
              href="mailto: sshobhit1106@gmail.com"
              className="text-xs md:text-sm text-center"
            >
              sshobhit1106@gmail.com
            </a>
          </h1>
          <h1 className="flex justify-center items-center">
            <a
              href="mailto: ch7230769@chemical.iitd.ac.in"
              className="text-xs md:text-sm text-center"
            >
              ch7230769@.iitd.ac.in
            </a>
          </h1>
        </div>
        <div className="right">
          <h1 className="text-sm md:text-xl mb-2">Follow on:</h1>
          <h2 className="text-xs md:text-sm flex justify-evenly">
            <a href="https://github.com/Shobhit-2510" target="_blank">
              <img
                src="./images/github-mark-white.png"
                alt=""
                className=" w-6 h-6 md:h-8 md:w-8 rounded-full"
              />
            </a>
            <a href="https://www.instagram.com/shobhit_549/" target="_blank">
              <img
                src="./images/insta.png"
                alt=""
                className="bg-white w-6 h-6 md:h-8 md:w-8 rounded-[7px] md:rounded-[10px]"
              />
            </a>
          </h2>
        </div>
        <div className="line bg-gray-400 w-[1px] h-full hidden sm:block "></div>
        <div className="rightmost  flex-col justify-center hidden sm:flex ">
          <h1 className="text-sm md:text-xl mb-2">Links</h1>
          <Link className="text-xs md:text-sm" to="/">
            Home
          </Link>
          <Link className="text-xs md:text-sm" to="/Projects">
            Projects
          </Link>
          <Link className="text-xs md:text-sm" to="/Resume">
            Resume
          </Link>
          <Link className="text-xs md:text-sm" to="/About">
            About
          </Link>
          <Link className="text-xs md:text-sm" to="/Contact">
            Contact
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
