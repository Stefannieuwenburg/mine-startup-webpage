
import React from "react";
import {
  FaFacebookF,
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

const Footer = () => {
  var circleclasses =
     "inline-block p-2 rounded-full w-10 mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300";
  var iconStyles = { color: "white", fontSize: "1.5em" };
  const handleClickPopup = (e) => {
    e.preventDefault(alert("WhatsApp: +05011554838"));
  };
  return (
    <footer
      id="footer"
      className="flex flex-col space-y-10 justify-center m-10"
    >
      <nav className="flex justify-center flex-wrap gap-6 text-gray-500 font-medium">
        <a className="hover:text-gray-900" href="#hero">
          Evde
        </a>
        <a className="hover:text-gray-900" href="#video">
          Video
        </a>
        <a className="hover:text-gray-900" href="#info">
          hakkinda
        </a>
        <a className="hover:text-gray-900" href="#specialiteit">
          tibbi uzmanlik
        </a>
        <a className="hover:text-gray-900" href="#contact">
          Temas etmek
        </a>
        <a className="hover:text-gray-900" href="#footer">
          Bilgi
        </a>
      </nav>

      <div className="flex justify-center space-x-5">
        <a
          href="https://facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ background: "#3e75eb" }} className={circleclasses}>
            <FaFacebookF style={iconStyles} />
          </span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ background: "#0a2e7a" }} className={circleclasses}>
            <FaLinkedin style={iconStyles} />
          </span>
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span style={{ background: "#983b3b" }} className={circleclasses}>
            <FaInstagram style={iconStyles} />
          </span>
        </a>

        <a>
          <span
            onClick={handleClickPopup}
            style={{ background: "#04880a" }}
            className={circleclasses}
          >
            <FaWhatsapp style={iconStyles} />
          </span>
        </a>
      </div>
      <p className="text-center text-gray-700 font-medium">
        &copy; 2023 Prof. Dr. Zahide Mine Yazıcı. All rights reservered.
      </p>
    </footer>
  );
};

export default Footer;
