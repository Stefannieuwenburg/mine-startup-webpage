import React from "react";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaPhone,
} from "react-icons/fa";
import Item1 from "../../assets/images/desk2.jpg";

const Contact = () => {
  const circleclasses =
    "inline-block p-4 m-4 rounded-full w-14 mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300";
  const iconStyles = { color: "white", fontSize: "1.5em" };

  return (
    <>
      <div id="contact" className="container w-full my-4 mx-auto md:px-4">
        <section className="mb-32 text-center">
          <div className="py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="grid lg:grid-cols-2 gap-4 items-start py-16 px-4">
                {/* Left side: Image */}
                <div>
                  <img
                    src={Item1}
                    alt="Desk"
                    className="rounded-xl shadow-lg w-full lg:w-auto lg:max-w-[400px]"
                  />
                </div>
                {/* Right side: Buttons */}
                <div className="flex flex-col">
                  <h2 className="mb-4 text-3xl font-bold text-white-100 bg-blue-100 rounded-lg">
                    İletişim
                  </h2>
                  <div className="flex justify-center">
                    <div className="flex flex-col">
                      <a href="">
                        <span
                          style={{ background: "#000000" }}
                          className={circleclasses}
                        >
                          <FaPhone style={iconStyles} />
                        </span>
                        <span className="text-2xl font-bold">
                          <br />
                          +905011554838
                        </span>
                      </a>
                      <a
                        href="https://www.linkedin.com/in/zahide-mine-yaz%C4%B1c%C4%B1-252a70228?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          style={{ background: "#3e75eb" }}
                          className={circleclasses}
                        >
                          <FaLinkedin style={iconStyles} />
                        </span>
                        <span className="text-2xl">
                          <br />
                          LinkedIn
                        </span>
                      </a>
                      <a
                        href="mailto:minezahide@yahoo.com?body=Prof. Dr. Mine Yazıcı,"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          style={{ background: "#0a2e7a" }}
                          className={circleclasses}
                        >
                          <FaRegEnvelope style={iconStyles} />
                        </span>
                        <span className="text-2xl">
                          <br />
                          E-Mail
                        </span>
                      </a>
                      <a
                        href="https://www.instagram.com/prof.dr.mineyazici?igsh=OXE3MTF0c29tdm14"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <span
                          style={{ background: "#983b3b" }}
                          className={circleclasses}
                        >
                          <FaInstagram style={iconStyles} />
                        </span>
                        <span className="text-2xl">
                          <br />
                          Instagram
                        </span>
                      </a>
                      <a
                        target="_blank"
                        aria-label="Chat on WhatsApp"
                        href="https://wa.me/+905011554838"
                      >
                        <FaWhatsapp
                          className="bg-green-400 text-white-100 shadow-lg font-normal h-12 w-12 m-2 items-center justify-center align-center outline-none focus:outline-none mr-2 inline-block p-2 rounded-full mx-auto transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:duration-300"
                          type="button"
                        ></FaWhatsapp>
                        <span className="text-2xl">
                          <br />
                          WhatsApp
                        </span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
