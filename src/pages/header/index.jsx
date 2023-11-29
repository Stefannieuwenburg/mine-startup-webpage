import { Carousel } from "flowbite-react";

import Image1 from "../../assets/img/slide-one.jpg";
import Image2 from "../../assets/img/slide-two.jpg";
import Image3 from "../../assets/img/slide-three.jpg";
import Image4 from "../../assets/img/slide-four.jpg";
const Header = () => {
  return (
    <div>
      {/* header section */}
      <section>
        <div
          id="header"
          className=" min-h-screen sm:h-64 xl:h-80 2xl:h-96 mt-20 mx-auto px-4 "
        >
          <Carousel>
            <div className=" flex h-full items-center justify-center   dark:text-white">
              <img src={Image1} alt="..." />
              <h1 class="absolute text-5xl  text-gray-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Provinding high <br />
                <span className="text-5xl">
                  quality service for men &amp; women
                </span>
              </h1>
              <button class="absolute rounded-xl text-3xl text-white bg-blue-100 p-2 bottom-24 left-1/2 -translate-x-1/2 hover:bg-blue-800">
                Learn more
              </button>
            </div>
            <div className="flex h-full items-center justify-center dark:text-white">
              <img src={Image2} alt="..." />
              <h1 class="absolute text-5xl  text-gray-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Provinding high <br />
                <span className="text-5xl">
                  quality service for men &amp; women
                </span>
              </h1>
              <button class="absolute rounded-xl text-3xl text-white bg-blue-100 p-2 bottom-24 left-1/2 -translate-x-1/2 hover:bg-blue-800">
                Learn more
              </button>
            </div>
            <div className="flex h-full items-center justify-center  dark:text-white">
              <img src={Image3} alt="..." />
              <h1 class="absolute text-5xl  text-gray-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Provinding high <br />
                <span className="text-5xl">
                  quality service for men &amp; women
                </span>
              </h1>
              <button class="absolute rounded-xl text-3xl text-white bg-blue-100 p-2 bottom-24 left-1/2 -translate-x-1/2 hover:bg-blue-800">
                Learn more
              </button>
            </div>
            <div className="flex h-full items-center justify-center  dark:text-white">
              <img src={Image4} alt="..." />
              <h1 class="absolute text-5xl  text-gray-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Provinding high <br />
                <span className="text-5xl">
                  quality service for men &amp; women
                </span>
              </h1>
              <button class="absolute rounded-xl text-3xl text-white bg-blue-100 p-2 bottom-24 left-1/2 -translate-x-1/2 hover:bg-blue-800">
                Learn more
              </button>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
};
export default Header;
