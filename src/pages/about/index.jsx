import Image from "../../assets/img/about.jpg";

const About = () => {
  return (
    <section id="about">
     <div class="flex pt-2 px-6 md:px-20  items-center justify-center bg-hero md:h-screen overflow-hidden">
    <div class="flex flex-col  gap-6 md:flex-row items-center max-w-8xl">
        <div class="w-full md:w-1/2 lg:pr-32">
            <h2 class="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">There’s a
                better way to talk with your customers.</h2>
            <h3
                class="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
                Help Scout is designed with your customers in mind. Provide email and live chat with a personal touch,
                and deliver help content right where your customers need it, all in one place, all for one low price.
            </h3>
            <div class="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
                <button class="w-full sm:w-40 px-4 py-3 rounded font-semibold text-md bg-blue-500 text-white border-2 border-blue-500">Info</button>
                <button class="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded font-semibold text-md bg-white text-blue-500 border-2 border-gray-500">Watch a Demo</button>
            </div>
        </div>
        <div class="w-full md:w-1/2 flex justify-center md:justify-end">
            <img src={Image} alt="hero"/>
        </div>
    </div>
</div>
    </section>
  );
};
export default About;