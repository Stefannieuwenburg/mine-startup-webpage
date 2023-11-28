import Image from "../../assets/img/about.jpg";

const About = () => {
  return (
    <section id="about">
      <div className="min-h-screen w-full bg-blue-100 text-white-100 mt-12 text-center text-4xl ">
        <div className="flex flex-row text-center ">
          <h2 className="text-white  text-4xl ">About</h2>
          <div>
            <div className="w-full">
              <img className="img-responsive w-full " src={Image} alt="" />
            </div>
            <h4 className="m-4 text-center text-2xl w-1/2">
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