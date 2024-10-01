import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
} from "react-icons/fa";

const Footer = () => {
  var circleclasses =
    "inline-block p-2 rounded-full w-10 mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300";
  var iconStyles = { color: "white", fontSize: "1.5em" };

  return (
    <footer
      id="footer"
      className="flex flex-col space-y-10 justify-center m-10 "
    >
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium text-xl text-center">
        <a className="hover:text-gray-900" href="#hero">
          Ana Sayfa
        </a>
        <a className="hover:text-gray-900" href="#video">
          Video
        </a>
        <a className="hover:text-gray-900" href="#info">
          Hakkımda
        </a>
        <a className="hover:text-gray-900" href="#specialiteit">
          Klinik Uzmanlıklar
        </a>
        <a className="hover:text-gray-900" href="#contact">
          İletişim
        </a>
      </nav>

      <div className="flex justify-center space-x-5">
        <a
          href="https://www.linkedin.com/in/zahide-mine-yaz%C4%B1c%C4%B1-252a70228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ background: "#3e75eb" }} className={circleclasses}>
            <FaLinkedin style={iconStyles} />
          </span>
        </a>
        <a
          href="mailto:drminealmaz@hotmail.com?body=Prof. Dr. Mine Yazıcı,"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ background: "#0a2e7a" }} className={circleclasses}>
            <FaRegEnvelope style={iconStyles} />
          </span>
        </a>
        <a
          href="https://www.instagram.com/prof.dr.mineyazici?igsh=OXE3MTF0c29tdm14"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ background: "#983b3b" }} className={circleclasses}>
            <FaInstagram style={iconStyles} />
          </span>
        </a>
        <a
          target="_blank"
          aria-label="Chat on WhatsApp"
          href="https://wa.me/+905011554838"
        >
          <FaWhatsapp
            className="bg-green-400 text-white-100 shadow-lg font-normal h-10 w-10 items-center justify-center align-center  outline-none focus:outline-none mr-2
              inline-block p-2 rounded-full  mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"
            type="button"
          ></FaWhatsapp>
        </a>
      </div>
      <p className=" text-center py-4">
        @copyright developed by
        <span className="text-brightColor"> Stefan nieuwenburg</span> | All
        rights reserved
      </p>
    </footer>
  );
};

export default Footer;
