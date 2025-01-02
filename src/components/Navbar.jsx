import React from "react";
import logo from "../assets/logo.ico";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import { TbBrandRust } from "react-icons/tb";
const Navbar = () => {
  return (
    <nav className=" mb-20 flex items-center justify-between">
      <div className="flex flex-shrink-0 items-center text-6xl">
        <TbBrandRust/>
        {/*<h1 className="h-8 w-8  text-2xl">RC</h1>*/}
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
      <a href="https://www.linkedin.com/in/ramchandrakarki" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <i className="fab fa-github text-2xl hover:text-green-500 hover:text-3xl"><FaLinkedin/></i>
          </a>
          <a href="https://github.com/silentbuddha1" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <i className="fab fa-github text-2xl hover:text-green-500 hover:text-3xl"><FaGithub/></i>
          </a>
          <a href="https://x.com/Ramchan86881206" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <i className="fab fa-github text-2xl hover:text-green-500 hover:text-3xl"><FaSquareXTwitter /></i>
          </a>
          <a href="https://www.instagram.com/ramchandrakarki2000" target="_blank" rel="noopener noreferrer" className="text-white hover:text-gray-400">
            <i className="fab fa-github text-2xl hover:text-green-500 hover:text-3xl"><FaInstagram /></i>
          </a>
        
      </div>
    </nav>

  );
};

export default Navbar;
