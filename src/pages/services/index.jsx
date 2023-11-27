import Service1 from "../../assets/img/service1.png";
import Service2 from "../../assets/img/service2.png";
import Service3 from "../../assets/img/service3.png";
import Service4 from "../../assets/img/service4.png";
const Services = () => {
  return (
    <section id="services">
      <div class="flex items-center justify-center min-h-screen bg-blue-500 py-20 rounded-2xl">
        <div class="flex flex-col">
          <div class="flex flex-col mt-8">
            <div class="container max-w-7xl px-4">
              <div class="flex flex-wrap justify-center text-center mb-24">
                <div class="w-full lg:w-6/12 px-4">
                  <h1 class="text-white-100 text-4xl font-bold mb-8">Service</h1>
                  <p class="text-white-100 text-lg font-light">
                    With over 100 years of combined experience, we've got a
                    well-seasoned team at the helm.
                  </p>
                </div>
              </div>
              <div class="flex flex-wrap">
                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={Service1}
                      />
                    </a>
                    <div class="text-center mt-6">
                      <h1 class="text-gray-900 text-xl font-bold mb-1">
                        Tranter Jaskulski
                      </h1>
                      <div class="text-gray-700 font-light mb-2">
                        Founder & Specialist
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={Service2}
                      />
                    </a>
                    <div class="text-center mt-6">
                      <h1 class="text-gray-900 text-xl font-bold mb-1">
                        Denice Jagna
                      </h1>
                      <div class="text-gray-700 font-light mb-2">
                        Tired & M. Specialist
                      </div>
                      <div
                        class="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                      ></div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={Service3}
                      />
                    </a>
                    <div class="text-center mt-6">
                      <h1 class="text-gray-900 text-xl font-bold mb-1">
                        Kenji Milton
                      </h1>
                      <div class="text-gray-700 font-light mb-2">
                        Team Memeber
                      </div>
                    </div>
                  </div>
                </div>
                <div class="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div class="flex flex-col">
                    <a href="#" class="mx-auto">
                      <img
                        class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src={Service4}
                      />
                    </a>
                    <div class="text-center mt-6">
                      <h1 class="text-gray-900 text-xl font-bold mb-1">
                        Doesn't matter
                      </h1>
                      <div class="text-gray-700 font-light mb-2">
                        Will be fired
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Services;
