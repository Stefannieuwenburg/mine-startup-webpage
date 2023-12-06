import React from "react";

const Video = () => {
  
  return (
    <>
      <section id="video" className=" mx-auto px-4 min-h-screen  m-4 ">
        <div className="flex justify-center items-center flex-col  bg-teal-400  ">
          <h1 className="text-white-100 text-5xl font-bold m-2 ">videolar</h1>
          <div class="bg-indigo-darkest text-center py-2 lg:px-4">
            <div
              class="p-2 bg-indigo-darker items-center text-indigo-lightest leading-none lg:rounded-full flex lg:inline-flex"
              role="alert"
            >
              <div className="flex flex-col items-center">
              <span class="flex bg-indigo uppercase p-4 text-2xl font-bold text-white-100 mr-3">
                Yeni
              </span>
              <span class="font-semibold  text-white-100 text-2xl flex-auto">
                Prof. Dr. Zahide Mine Yazıcı'nın sunum videosu
              </span>
              </div>
              <svg
                className="fill-current opacity-75 h-4 w-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <path d="M12.95 10.707l.707-.707L8 4.343 6.586 5.757 10.828 10l-4.242 4.243L8 15.657l4.95-4.95z" />
              </svg>
            </div>
          </div>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-1  md:grid-cols-2  md:gap-4 lg:grid-cols-3 place-items-center ">
          <div id='1'className="">
            <iframe
              className="p-2 rounded-lg bg-blue-800 w-full h-320"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/dcu41Gw2aMs?si=S6vQcYvAe48TnoPV"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className="text-blue-100">
              Prof. Dr. Zahide Mine Yazıcı, Üst Solunum Yolu Enfeksiyonlarının
              Sese Etkisi Nasıl Olur?
            </p>
          </div>
          <div id='2' className="">
            <iframe
              className="p-2 rounded-lg bg-blue-800 w-full h-320"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Ynd-AODxDS8?si=iyynxCHkwRsD2aJD"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className="text-blue-100">
              Prof. Dr. Zahide Mine Yazıcı,İşitme Kaybından Nasıl Şüphelenmek
              Gerekir?
            </p>
          </div>
          <div id='3' className="">
            <iframe
              className="p-2 rounded-lg bg-blue-800 w-full h-320"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/GiJJtKVYbAM?si=qNK7k-qATUKqcr0x"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className="text-blue-100">
              Prof. Dr. Zahide Mine Yazıcı,Üst Solunum Yolu Enfeksiyonuna Sebep
              Olan Etkenler Nelerdir?
            </p>
          </div>
          <div id='4'className="">
            <iframe
              className="p-2 rounded-lg bg-blue-800 w-full h-320"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/pFUzuYWAJdY?si=Mb-5w2aKlpA84P21"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className="text-blue-100">
              Prof. Dr. Zahide Mine Yazıcı,Reflü Hastalığının Sese Ekisi Nasıl
              Olur?
            </p>
          </div>
          <div id='5'className="">
            <iframe
              className="p-2 rounded-lg bg-blue-800 w-full h-320"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/1nMhqwqEnkc?si=WbPaaTZ8ZTn_XS-5"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className="text-blue-100">
              Prof. Dr. Zahide Mine Yazıcı,şitme Kaybı Açısından Riskli
              Çocukları Nasıl Tespit Edebiliriz?
            </p>
          </div>
          <div id='6' className="">
            <iframe
              className="p-2 rounded-lg bg-blue-800 w-full h-320"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/whCqDDde6-4?si=1Ao-cKNp5FqSz_N6"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
            <p className="text-blue-100">
              Prof. Dr. Zahide Mine Yazıcı,Üst Solunum Yolu
              Enfeksiyonunun Tedavisi Nasıldır?
            </p>
          </div>
        </div>
      </section>
    </>
  );
};
export default Video;
