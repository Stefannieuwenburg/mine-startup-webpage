import { Carousel } from "flowbite-react";

import Image1 from "../../assets/img/slide-one.jpg";
import Image2 from "../../assets/img/slide-two.jpg";
import Image3 from "../../assets/img/slide-three.jpg";
import Image4 from "../../assets/img/slide-four.jpg";
const ImgCarousel = () => {
  return (
    <div>
      {/* header section */}
      <section>
        <div
          id="ImgCarousel"
          ClassName="w-full h-full sm:h-64 md:h-72 lg:h-72 xl:h-80 2xl:h-96 "
        >
          <Carousel>
            <div ClassName=" flex h-full items-center justify-center dark:text-white">
              <img src={Image1} alt="..." />
              <h1 ClassName="absolute text-5xl  text-gray-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Provinding high <br />
                <span ClassName="text-5xl">
                  quality service for men &amp; women
                </span>
              </h1>
              <button ClassName="absolute rounded-xl text-3xl text-white bg-blue-100 p-2 bottom-24 left-1/2 -translate-x-1/2 hover:bg-blue-800">
                Learn more
              </button>
            </div>
            <div ClassName="flex h-full items-center justify-center dark:text-white">
              <img src={Image2} alt="..." />
              <h1 ClassName="absolute text-5xl  text-gray-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Provinding high <br />
                <span ClassName="text-5xl">
                  quality service for men &amp; women
                </span>
              </h1>
              <button ClassName="absolute rounded-xl text-3xl text-white bg-blue-100 p-2 bottom-24 left-1/2 -translate-x-1/2 hover:bg-blue-800">
                Learn more
              </button>
            </div>
            <div ClassName="flex h-full items-center justify-center  dark:text-white">
              <img src={Image3} alt="..." />
              <h1 ClassName="absolute text-5xl  text-gray-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Provinding high <br />
                <span ClassName="text-5xl">
                  quality service for men &amp; women
                </span>
              </h1>
              <button ClassName="absolute rounded-xl text-3xl text-white bg-blue-100 p-2 bottom-24 left-1/2 -translate-x-1/2 hover:bg-blue-800">
                Learn more
              </button>
            </div>
            <div ClassName="flex h-full items-center justify-center  dark:text-white">
              <img src={Image4} alt="..." />
              <h1 ClassName="absolute text-5xl  text-gray-600 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                Provinding high <br />
                <span ClassName="text-5xl">
                  quality service for men &amp; women
                </span>
              </h1>
              <button ClassName="absolute rounded-xl text-3xl text-white bg-blue-100 p-2 bottom-24 left-1/2 -translate-x-1/2 hover:bg-blue-800">
                Learn more
              </button>
            </div>
          </Carousel>
        </div>
      </section>
    </div>
  );
};
export default ImgCarousel;
