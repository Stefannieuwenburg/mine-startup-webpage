import Image from "../../assets/img/mine.jpg";

const Hero = () => {
  return (
    <section id="hero">
      <div class="flex px-2 md:px-20 items-center justify-center md:h-screen overflow-hidden">
        <div class="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
          <div class="w-full md:w-1/2 lg:pr-32">
            <h2 class="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
              Prof. Dr. Zahide Mine Yazıcı{" "}
            </h2>

            <h3 class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
              Help Scout is designed with your customers in mind. Provide email
              and live chat with a personal touch, and deliver help content
              right where your customers need it, all in one place, all for one
              low price.
            </h3>
            <div class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
              <button className="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md  bg-blue-100 text-white border-2  hover:bg-blue-800">
                Info
              </button>
              <button className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-teal-400   text-white-100 border-2  hover:bg-blue-800 hover:text-white">
                Watch a Demo
              </button>
            </div>
          </div>
          <div class="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src={Image} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;