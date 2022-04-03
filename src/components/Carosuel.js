import React from "react";
import web from "../images/web.jpg";
import eye from "../images/eye.jpg";
import soc from "../images/social.jpg";
import { FaLink } from "react-icons/fa";
import "../styles/Call.css";

function Carosuel() {
  return (
    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src={web}
                />
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Top-Notch
                  <br class="hidden lg:inline-block" />
                  Web Development Services
                </h1>
                <p class="mb-8 leading-relaxed">
                  Developing, Designing, Hosting and Maintenance – We Do it All.
                  Get in touch with us today!
                </p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    <FaLink className="mr-1" /> Get Quote
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src={eye}
                />
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  We Help Convert Eyeballs into Customers
                </h1>
                <p class="mb-8 leading-relaxed">
                  Don't let your Visitors Bounce Off! Convert them into
                  Customers and Boost your Sales with us.
                </p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    <FaLink className="mr-1" /> Get Quote
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <div class="carousel-item">
          <section class="text-gray-400 bg-gray-900 body-font">
            <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
              <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
                <img
                  class="object-cover object-center rounded"
                  alt="hero"
                  src={soc}
                />
              </div>
              <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
                <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                  Best Digital Marketing Company in Bangalore
                </h1>
                <p class="mb-8 leading-relaxed">
                  We provide End-to-End Digital Marketing Services in Bangalore,
                  India to all types of Businesses with 100% Results.
                </p>
                <div class="flex justify-center">
                  <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                    <FaLink className="mr-1" /> Get Quote
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carosuel;
