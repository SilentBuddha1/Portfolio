import React from 'react';
import { FaLinkedin, FaGithub } from "react-icons/fa";
import {FaSquareXTwitter} from "react-icons/fa6";
import {FaInstagram} from "react-icons/fa";
import { motion } from "framer-motion";

// Footer Component
function Footer() {
  return (
    <footer className="text-white py-8">
      <div className="max-w-screen-xl mx-auto px-6 md:flex md:items-center md:justify-between">
        {/* Left Section - Contact Info */}
        <motion.div
         whileInView={{ opacity: 1, x: 0 }}
         initial={{ opacity: 0, x: -200 }}
         transition={{ duration: 0.5, delay: 0.3 }}
         className="mb-4 md:mb-0">
          <p className="text-xl font-semibold">Ramchandra Karki</p>
          <p className="mt-1 text-sm">Pokhara, Nepal</p>
          <p className="mt-2 text-sm">Email: iamramchandrakarki@gmail.com</p>
        </motion.div>

        {/* Center Section - Social Media Links */}
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mb-4 md:mb-0 flex justify-center space-x-6">
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
        </motion.div>

        {/* Right Section - Copyright */}
        <motion.div 
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 0, x: 200 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Ramchandra Karki. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}

export default Footer;
