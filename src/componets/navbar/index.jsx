import { useState } from "react";
import {Link} from "react-scroll";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { FaWhatsapp,FaPhone} from "react-icons/fa";

const navigation = [
  { name: "Ana Sayfa", href: "hero" },
  { name: "Video", href: "video" },
  { name: "Hakkımda", href: "info" },
  { name: "Klinik Uzmanlıklar", href: "specialiteit" },
  { name: "İletişim", href: "contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div>
      {/* nav */}
      <nav
        className="flex items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1"></div>
        <div className="text-3xl font-semibold leading-6"></div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-10 w-10" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <Link
              to={item.href}
              key={item.name}
              smooth
              duration={700}
              className="text-3xl font-semibold leading-6 text-gray-700 hover:text-blue-100"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <FaPhone
            className="bg-black text-white-100 font-normal items-center justify-center align-center h-12 w-12 focus:outline-none mr-2
              inline-block p-2 rounded-full  mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"
          ></FaPhone>{" "}
          <span className="text-xl text-gray-700 font-normal m-4">+905011554838
          </span>
          <a
            target="_blank"
            aria-label="Chat on WhatsApp"
            href="https://wa.me/+905011554838"
          >
            <FaWhatsapp
              className="bg-green-400 text-white-100 shadow-lg font-normal h-12 w-12 items-center justify-center align-center  outline-none focus:outline-none mr-2
              inline-block p-2 rounded-full  mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"
              type="button"
            ></FaWhatsapp>{" "}
            <span className="text-xl text-gray-700 font-normal mt-2">
              {" "}
                WhatsApp
            </span>
          </a>
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <span className="text-xl">Prof. Dr. Zahide Mine Yazıcı</span>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    onClick={() => setMobileMenuOpen(false)}
                    key={item.name}
                    to={item.href}
                    smooth
                    duration={700}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:text-blue-400 hover:bg-gray-50"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
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
                  <br />
                  <span className="mt-4 mb-4 text-l text-gray-700">
                    Prof. Dr. Zahide Mine Yazıcı
                  </span>
                </a>
                <br />
                <FaPhone
                  className="bg-black text-white-100 font-normal items-center justify-center align-center h-10 w-10 mt-4 mb-4 focus:outline-none mr-2
              inline-block p-2 rounded-full  mx-auto transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover: duration-300"
                ></FaPhone>{" "}
                <br />
                <span className="text-l text-gray-700"> +905011554838</span>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
      {/* nav */}
    </div>
  );
};
export default Navbar;
