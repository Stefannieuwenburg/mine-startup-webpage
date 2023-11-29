import React from "react";

const Video = () => {
  return (
    <>
      <section id="video" className=" mx-auto px-4 min-h-screen  m-4 ">
        <div className="flex justify-center items-center flex-col">
          <h1 className="text-blue-400 text-4xl font-bold mt-4 ">Video</h1>
          <p className="text-2xl mt-4 ">links</p>
        </div>

        <div className="grid  sm:grid-cols-2  md:grid-cols-3 gap-2 px-12 place-items-center border-4 m-4 ">
          <div className="bg-gray-200 p-20 m-2 rounded-xl">
            <iframe
              class="w-full aspect-video ..."
              src="https://www.youtube.com/..."
            ></iframe>
          </div>
          <div className="bg-gray-200 p-20 m-2 rounded-xl">
            <iframe
              class="w-full aspect-video ..."
              src="https://www.youtube.com/..."
            ></iframe>
          </div>
          <div className="bg-gray-200 p-20 m-2 rounded-xl">
            <iframe
              class="w-full aspect-video ..."
              src="https://www.youtube.com/..."
            ></iframe>
          </div>
        </div>
      </section>
    </>
  );
};
export default Video;
