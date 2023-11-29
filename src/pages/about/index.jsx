import Image from "../../assets/img/about.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="min-h-screen w-full bg-blue-100 text-white-100 mt-12 text-center text-4xl ">
        <div className="flex flex-row text-center ">
          <h2 className="text-white  text-xl mt-20 mx-4">
            <span className="text-5xl m-4">About</span> <br /> Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500s, when an unknown printer
            took a galley of type and scrambled Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled Lorem Ipsum has been the
            industry's standard
          </h2>
          <div>
            <div className="w-1/3 mt-20">
              <img className="max-w-full img-responsive " src={Image} alt="" />
            </div>
            <h4 className="mt-20 mx-4 text-center text-2xl w-2/3">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled Lorem Ipsum has been the industry's standard
              dummy text ever since the 1500s, when an unknown printer took a
              galley of type and scrambled Lorem Ipsum has been the industry's
              standard dummy text ever since the 1500s, when an unknown printer
              took a galley of type and scrambled
            </h4>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;