import Image from "../../assets/images/mine.jpg";

const Hero = () => {
  const HandleClickVideo = (e) => {
    e.preventDefault();
    document.querySelector("#video").scrollIntoView({
      behavior: "smooth",
    });
  };
  const HandleClickInfo = (e) => {
    e.preventDefault();
    document.querySelector("#info").scrollIntoView({
      behavior: "smooth",
    });
  };
  return (
    <section id="hero">
      <div className="flex px-2 md:px-20 items-center justify-center md:h-screen overflow-hidden">
        <div className="flex flex-col gap-6 md:flex-row items-center max-w-8xl">
          <div className="w-full md:w-1/2 lg:pr-32">
            <h2 className="text-4xl lg:text-5xl text-center md:text-left text-blue-900 leading-tight font-medium">
              Prof. Dr. Zahide Mine Yazıcı{" "}
            </h2>

            <h3 className="mt-6 md:mt-10 text-md lg:text-xl text-center md:text-left text-gray-700 font-light tracking-wider leading-relaxed">
              Prof. Dr. Zahide Mine Yazıcı, İstanbul Üniversitesi Tıp
              Fakültesi’nden mezun olduktan sonra, Marmara Hastanesi’nde Kulak
              Burun Boğaz (KBB) Hastalıkları uzmanlık eğitimi almıştır. <br />
              <br />
              Kulak cerrahisi, endoskopik sinüs cerrahisi, burun cerrahisi,
              çocuk KBB ve baş boyun cerrahisi alanlarında uzman Prof. Dr.
              Zahide Mine Yazıcı hastalarının tedavi ve tanı ihtiyaçlarına
              güvenilir çözümler sunmaktadır.
            </h3>
            <div className="mt-10 flex flex-col sm:flex-row justify-center md:justify-start">
              <button
                onClick={HandleClickInfo}
                className="w-full sm:w-40 px-4 py-3 rounded-xl font-semibold text-md  bg-blue-100 text-white border-2  hover:bg-blue-800"
              >
                Hakkımda
              </button>
              <button
                onClick={HandleClickVideo}
                className="w-full mt-4 sm:mt-0 sm:ml-4 sm:w-40 px-4 py-3 rounded-xl font-semibold text-md bg-teal-400   text-white-100 border-2  hover:bg-blue-800 hover:text-white"
              >
                Sunum videosu
              </button>
            </div>
          </div>
          <div className="w-full h-auto md:w-3/4 lg:w-2/3 flex justify-center md:justify-end">
            <img className="object-cover" src={Image} alt="hero" />
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;