import React from "react";

const Video = () => {
  return (
    <>
      <section id="video" className=" mx-auto px-4 min-h-screen  m-4 ">
        <div className="flex justify-center items-center flex-col bg-teal-400  ">
          <h1 className="text-white-100  text-4xl font-bold m-4 ">Video</h1>
          <p className="text-2xl mt-3 text-slate-100 ">links</p>
        </div>

        <div className="mt-4 grid gap-4 sm:grid-cols-1  md:grid-cols-2  md:gap-4 lg:grid-cols-3 place-items-center ">
          <div className="">
            <iframe
              className="p-2 rounded-lg bg-blue-800 w-full h-320"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5yMvczLR8X4?si=eP4eCwcsLF6bavCA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="">
            <iframe
              className="p-2 rounded-lg bg-blue-800 w-full h-320"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5yMvczLR8X4?si=eP4eCwcsLF6bavCA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
          <div className="">
            <iframe
              className="p-2 rounded-lg bg-blue-800 w-full h-320"
              width="560"
              height="315"
              src="https://www.youtube.com/embed/5yMvczLR8X4?si=eP4eCwcsLF6bavCA"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
export default Video;
