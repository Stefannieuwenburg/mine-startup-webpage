import { useState } from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import logo from "../../assets/logos/logo.png";
import {  FaWhatsapp } from "react-icons/fa";
const navigation = [
  { name: "Evde", href: "#" },
  { name: "Video", href: "#" },
  { name: "About", href: "#" },
  { name: "Tıbbi uzmanlık", href: "#" },
  { name: "Temas etmek", href: "#" },
  { name: "Bilgi", href: "#" },
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
        <div className="flex lg:flex-1">
          <a href="#" className="-m-1.5 p-1.5">
            <img className="h-16 w-16" src={logo} alt="" />
          </a>
          <span className="text-center m-4 text-2xl font-semibold">
            Prof. Dr. Zahide Mine Yazıcı
          </span>
        </div>
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
            <a
              key={item.name}
              href={item.href}
              className="text-3xl font-semibold leading-6 text-gray-700 hover:text-blue-100"
            >
              {item.name}
            </a>
          ))}
        </div>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <button>
            <FaWhatsapp
              className="bg-white text-green-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
              type="button"
            >
              Whatsapp
            </FaWhatsapp>
          </button>
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
            <a href="#" className="-m-1.5 p-1.5">
              <img className="h-20 w-auto" src={logo} alt="" />
              <span className="">Prof. Dr. Zahide Mine Yazıcı</span>
            </a>
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
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-700 hover:text-blue-400 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className="py-6">
                <button>
                  <FaWhatsapp
                    className="bg-white text-green-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2"
                    type="button"
                  >
                    Whatsapp
                  </FaWhatsapp>
                </button>
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
