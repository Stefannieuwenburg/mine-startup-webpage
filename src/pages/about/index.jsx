import Item1 from "../../assets/img/item1.jpg";
import Item2 from "../../assets/img/item2.jpg";
import Item3 from "../../assets/img/item3.jpg";
const About = () => {
  return (
    <section id="about" className="mt-12">
      <div>
        <div className="flex flex-col">
          {/* section flex-col */}
          <div>
            <h2 className="text-blue-500 mt-12 text-center text-4xl ">
              about us
            </h2>
          </div>
          <div>
            <h4 className="m-4 text-center text-2xl">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled
            </h4>
          </div>
          <div className="md:flex flex-row ">
            {/* section flex-row */}
            {/* Cart */}
            <div className="md:w-1/3 pr-4 pl-4 ">
              <div className="relative clearfix">
                <div className="w-full">
                  <img className="img-responsive w-full" src={Item1} alt="" />
                </div>
                <div className="rounded-sm p-4 w-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300">
                  <div className="w-16 h-12 relative"></div>
                  <h3 className="text-white-100 text-center text-4xl">
                    Children’s specialist
                  </h3>
                  <p className="text-white-100 m-2 text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer.
                  </p>
                </div>
              </div>
            </div>
            {/* Cart */}
            <div className="md:w-1/3 pr-4 pl-4 ">
              <div className="relative clearfix">
                <div className="w-full">
                  <img className="img-responsive w-full " src={Item2} alt="" />
                </div>
                <div className=" rounded-sm p-4 w-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300 ">
                  <div className="w-16 h-12 relative"></div>
                  <h3 className=" text-white-100 text-center text-4xl">
                    Women specialist
                  </h3>
                  <p className=" text-white-100 text-center m-2">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer.
                  </p>
                </div>
              </div>
            </div>
            {/* Cart */}
            <div className="md:w-1/3 pr-4 pl-4 ">
              <div className="relative clearfix">
                <div className="w-full">
                  <img className="img-responsive w-full" src={Item3} alt="" />
                </div>
                <div className=" rounded-sm p-4 w-full transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-gray-500 duration-300 ">
                  <div className="w-16 h-12 relative "></div>
                  <h3 className="text-white-100 text-center text-4xl">
                    Men specialist
                  </h3>
                  <p className="text-white-100 m-2 text-center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer.
                  </p>
                </div>
              </div>
            </div>
            {/* end cart */}
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;