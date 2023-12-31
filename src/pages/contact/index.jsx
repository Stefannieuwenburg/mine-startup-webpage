import React from "react";
import Map from "../../assets/images/map.png";
import {
  FaWhatsapp,
  FaInstagram,
  FaLinkedin,
  FaRegEnvelope,
  FaRegCalendarAlt,
} from "react-icons/fa";
const Contact = () => {
  var circleclasses =
    "inline-block p-2 m-2 rounded-full w-10 mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300";
  var iconStyles = { color: "white", fontSize: "1.5em" };
  return (
    <>
      <div id="contact" className="container my-24 mx-auto md:px-6">
        <section className="mb-32 text-center">
          <div className="py-12 md:px-12">
            <div className="container mx-auto xl:px-32">
              <div className="grid gap-x-20 items-center lg:grid-cols-2 gap-2">
                <div className="mb-12 md:mt-12 lg:mt-0 lg:mb-0">
                  <div className="relative z-[1] block rounded-xl bg-gray-50 px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.7)] dark:shadow-black/20 md:px-12 lg:-mr-14 border-4 border-teal-400">
                    <h2 className="mb-8 text-3xl font-bold text-white-100 bg-blue-100 rounded-lg ">
                      İletişim
                    </h2>
                    {/* inside contact div */}
                    <div className="flex justify-center">
                      <div className="flex flex-col">
                        <a
                          href="https://www.medicana.com.tr/"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span
                            style={{ background: "#c91b0f" }}
                            className={circleclasses}
                          >
                            {" "}
                            <FaRegCalendarAlt style={iconStyles} />
                          </span>
                          <span className="text-lg font-bold">
                            <br />
                            Pazartesi - Cuma: 9:30 AM to 6:30 PM
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
                          <span className="text-lg font-bold">
                            <br />
                            LinkedIn
                          </span>
                        </a>
                        <a
                          href="mailto:Zahide.yazici@medicana.com.tr?body=Prof. Dr. Mine Yazıcı,"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <span
                            style={{ background: "#0a2e7a" }}
                            className={circleclasses}
                          >
                            <FaRegEnvelope style={iconStyles} />
                          </span>
                          <span className="text-lg font-bold">
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
                          <span className="text-lg font-bold">
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
                            className="bg-green-400 text-white-100 shadow-lg font-normal h-10 w-10 items-center justify-center align-center  outline-none focus:outline-none mr-2
                            inline-block p-2 rounded-full  mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"
                            type="button"
                          ></FaWhatsapp>
                          <span className="text-lg font-bold">
                            <br />
                            WhatsApp
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:mb-12 lg:mb-0">
                  <div className="p-2 relative h-auto m-1 rounded-lg shadow-lg dark:shadow-black/20 border-solid border-2 border-sky-500 bg-gray-50">
                    <img className="object-cover" src={Map} alt="Map" />
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
