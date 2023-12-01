
const Footer = () => {
  return (
    <footer id="footer" className="relative bg-blue-100 pt-8 pb-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap text-left lg:text-left">
          <div className="w-full lg:w-6/12 px-4">
            <h4 className="text-3xl fonat-semibold text-gray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">Find us</h5>
            <div className="mt-6 lg:mb-0 mb-6">
              <button
                className="bg-white text-lightBlue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-twitter"></i>
              </button>
              <button
                className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-facebook-square"></i>
              </button>
              <button
                className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-dribbble"></i>
              </button>
              <button
                className="bg-white text-blueGray-800 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                type="button"
              >
                <i className="fab fa-github"></i>
              </button>
            </div>
          </div>
          <div className="w-full lg:w-6/12 px-4">
            <div className="flex flex-wrap items-top mb-6">
              <div className="w-full lg:w-4/12 px-4 ml-auto">
                <span className="block uppercase text-blueGray-500 text-2xl font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-800 font-semibold block pb-2 text-xl"
                      href="https://github.com/Stefannieuwenburg"
                    >
                      About Us
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-800 font-semibold block pb-2 text-xl"
                      href="https://github.com/Stefannieuwenburg"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-800 font-semibold block pb-2 text-xl"
                      href="https://www.github.com/Stefannieuwenburg"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-800 font-semibold block pb-2 text-xl"
                      href="https://github.com/Stefannieuwenburg"
                    >
                      Free Products
                    </a>
                  </li>
                </ul>
              </div>
              <div className="w-full lg:w-4/12 px-4">
                <span className="block uppercase  text-2xl font-semibold mb-2">
                  Other Resources
                </span>
                <ul className="list-unstyled">
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-800 font-semibold block pb-2 text-xl"
                      href="https://github.com/Stefannieuwenburg"
                    >
                      MIT License
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-800 font-semibold block pb-2 text-xl"
                      href="https://github.com/Stefannieuwenburg"
                    >
                      Terms &amp; Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-700 hover:text-gray-800 font-semibold block pb-2 text-xl"
                      href="https://github.com/Stefannieuwenburg"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      className="text-gray-600 hover:text-gray-800 font-semibold block pb-2 text-xl"
                      href="https://github.com/Stefannieuwenburg"
                    >
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="my-6 border-blueGray-300" />
        <div className="flex flex-wrap items-center md:justify-between justify-center">
          <div className="w-full md:w-4/12 px-4 mx-auto text-center">
            <div className="text-xl text-blueGray-500 font-semibold py-1">
              Copyright © <span id="get-current-year">2023</span>
              <a
                href="https://github.com/Stefannieuwenburg"
                className="text-gray-800 hover:text-gray-500 text-sm font-semibold block py-2 text-center hover:text-blueGray-800"
              >
                Creative by stefan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
