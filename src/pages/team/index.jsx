import React from "react";
import Menber1 from "../../assets/img/member1.jpg";
import Member2 from "../../assets/img/member2.jpg";
import Member3 from "../../assets/img/member3.jpg";
import Member4 from "../../assets/img/member3.jpg";
const Team = () => {
  return (
    <section id="team">
    <div className="flex items-center justify-center min-h-screen py-48 m-4 rounded-xl">
      <div className="flex flex-col">
        <div className="flex flex-col mt-8">
            <div className="flex flex-wrap justify-center text-center mb-24">
              <div className="w-full lg:w-6/12 px-4">
                <h1 className=" font-bold mb-8 text-blue-500 mt-12 text-center text-4xl  ">
                  Meet the Team
                </h1>
                <p className="text-gray-700 text-4xl font-light">
                  With over 100 years of combined experience, we've got a
                  well-seasoned team at the helm.
                </p>
              </div>
            </div>
            <div className="flex flex-wrap">
              <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                  <a href="#" className="mx-auto">
                    <img
                      className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                      src={Menber1}
                    />
                  </a>
                  <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                      Tranter Jaskulski
                    </h1>
                    <div className="text-gray-700 font-light mb-2">
                      Founder & Specialist
                    </div>
                    <div
                      className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                    >
                      <a
                        href="#"
                        className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                      >
                        <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2">hallo</i>
                      </a>             
                      <a
                        href="#"
                        className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                      >
                        <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2">hallo</i>
                      </a>            
                      <a
                        href="#"
                        className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                      >
                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2">hallo</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                 
                  <a href="#" className="mx-auto">
                    <img
                      className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                      src={Member2}
                    />
                  </a>               
                  <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                      Denice Jagna
                    </h1>          
                    <div className="text-gray-700 font-light mb-2">
                      Tired & M. Specialist
                    </div>            
                    <div
                      className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                    >
                      <a
                        href="#"
                        className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                      >
                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                      </a>
                      <a
                        href="#"
                        className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                      >
                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                      </a>                     
                      <a
                        href="#"
                        className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                      >
                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>          
              <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                  <a href="#" className="mx-auto">
                    <img
                      className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                      src={Member3}
                    />
                  </a>               
                  <div className="text-center mt-6">
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                      Kenji Milton
                    </h1>                 
                    <div className="text-gray-700 font-light mb-2">
                      Team Memeber
                    </div>               
                    <div
                      className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                    >
                      <a
                        href="#"
                        className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                      >
                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2">linkedin</i>
                      </a>
                      <a
                        href="#"
                        className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                      >
                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2">twitter</i>
                      </a>                  
                      <a
                        href="#"
                        className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                      >
                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2">intagram</i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>            
              <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                <div className="flex flex-col">
                
                  <a href="#" className="mx-auto">
                    <img
                      className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                      src={Member4}
                    />
                  </a>
                  <div className="text-center mt-6">    
                    <h1 className="text-gray-900 text-xl font-bold mb-1">
                      Doesn't matter
                    </h1>                
                    <div className="text-gray-700 font-light mb-2">
                      Will be fired
                    </div>                   
                    <div
                      className="flex items-center justify-center opacity-50 hover:opacity-100
                                transition-opacity duration-300"
                    >
                      <a
                        href="#"
                        className="flex rounded-full hover:bg-indigo-50 h-10 w-10"
                      >
                        <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                      </a>
                      <a
                        href="#"
                        className="flex rounded-full hover:bg-blue-50 h-10 w-10"
                      >
                        <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                      </a>              
                      <a
                        href="#"
                        className="flex rounded-full hover:bg-orange-50 h-10 w-10"
                      >
                        <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                      </a>
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
export default Team;
