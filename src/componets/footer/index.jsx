import React from "react";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white-100 py-4">
      <div className=" flex justify-center items-center">
        <p className="text-gray-700 mr-2">&copy; Stefan Nieuwenburg</p>
        <a href="https://github.com" className="text-gray-700 mr-2">
          <FaGithub />
        </a>
        <a href="https://twitter.com" className="text-gray-700 mr-2">
          <FaTwitter />
        </a>
        <a href="https://linkedin.com" className="text-gray-700">
          <FaLinkedin />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
