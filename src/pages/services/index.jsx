import Item1 from "../../assets/img/item1.jpg";
import Item2 from "../../assets/img/item2.jpg";
import Item3 from "../../assets/img/item3.jpg";
const Services = () => {
  return (
    <section id="services ">
      <div className="min-h-screen w-full bg-blue-100 text-white">
        <h1 className="text-5xl font-bold text-center ">
          {" "}
          Tıbbi İlgi Alanları
        </h1>
        <div className="flex flex-col">
          {/* section flex-col */}

          <div>
            <h4 className="m-4 text-center text-2xl">
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled
            </h4>
          </div>
          {/* section flex-row */}
          <div className="md:flex flex-row ">
            {/* Cart */}
            <div className="md:w-1/3 pr-4 pl-4 ">
              <div className="relative clearfix">
                <div className="w-full">
                  <img className="img-responsive w-full" src={Item1} alt="" />
                </div>
                <div className="rounded-sm p-4 w-full transition ease-in-out delay-150 bg-blue-950 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 duration-300">
                  <div className="w-16 h-12 relative"></div>
                  <h3 className="text-white-100 text-center text-4xl">
                    Rinoloji
                  </h3>
                  <p className="text-white-100 m-1 text-center">
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
                <div className=" rounded-sm p-4 w-full transition ease-in-out delay-150 bg-blue-950 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 duration-300 ">
                  <div className="w-16 h-12 relative"></div>
                  <h3 className=" text-white-100 text-center text-4xl">
                    Otoloji
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
                <div className=" rounded-sm p-4 w-full transition ease-in-out delay-150 bg-blue-950 hover:-translate-y-1 hover:scale-110 hover:bg-blue-800 duration-300 ">
                  <div className="w-16 h-12 relative "></div>
                  <h3 className="text-white-100 text-center text-4xl">
                    Pediatrik KBB
                  </h3>
                  <p className="text-white-100 m-1 text-center">
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
export default Services;
