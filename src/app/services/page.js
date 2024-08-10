import Image from "next/image";
import { FreeEstimate } from "../components/freeEstimate";
import "./page.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Inspiration: https://www.hillsboroaviation.com/contract-charter/tours-excursions/

export default function Services() {
  return (
    <>
      <section className="flex flex-col md:flex-row">
        <section className="hidden support-hero-section h-screen w-full text-white md:w-1/2 md:block">
          <div
            className="px-4 pt-20 pb-8 mx-auto transition delay-100 duration-300 ease-in-out hover:backdrop-blur-md"
            style={{ height: "94%", marginTop: "6%" }}
          >
            <div className="grid place-content-center px-4 pt-20 pb-8 mx-auto">
              <div className="bg-gradient-to-r from-ftBlue to-ftGreen/90 p-6 text-black backdrop-brightness-125 backdrop-contrast-125 hover:skew-x-1 transition delay-100 duration-150 ease-in-out shadow-lg hover:shadow-2xl rounded-lg">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">IT Services</h1>
                <p className="max-w-2xl mb-6 text-black lg:mb-8 md:text-lg lg:text-xl">
                  Do you have a tech problem that you cannot figure out? We can help!
                  <br />
                  <br />
                  Our team of experts can remotely diagnoise and troubleshoot your issue. We can also provide on-site support if needed. We offer a
                  wide range of IT services to meet your needs!
                  <br />
                </p>
                <div className="flex justify-center">
                  <button className="px-5 py-3 bg-slate-500 hover:bg-slate-600 transition delay-100 duration-150 ease-in-out text-white rounded-lg">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden engineering-hero-section h-screen w-full text-white md:w-1/2  md:block">
          <div
            className="px-4 pt-20 pb-8 mx-auto h-5/6 transition delay-100 duration-300 ease-in-out hover:backdrop-blur-md"
            style={{ height: "94%", marginTop: "6%" }}
          >
            <div className="grid place-content-center px-4 pt-20 pb-8 mx-auto ">
              <div className="bg-gradient-to-r from-ftGreen to-ftBlue/90 p-6 text-black backdrop-brightness-125 backdrop-contrast-125 hover:-skew-x-1 transition delay-100 duration-150 ease-in-out shadow-lg hover:shadow-2xl  rounded-lg">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">Software Engineering</h1>
                <p className="max-w-2xl mb-6 text-black text-gray-500 lg:mb-8 md:text-lg lg:text-xl">
                  If you have an idea, we can help you bring it to life!
                  <br />
                  <br />
                  Our true passion is software engineering. We love to build things that make a difference. We specialize in web and mobile
                  applications of any shape and size.
                  <br />
                </p>
                <div className="flex justify-center">
                  <button className="px-5 py-3 bg-slate-500 hover:bg-slate-600 transition delay-100 duration-150 ease-in-out text-white rounded-lg">
                    Read More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="visible md:hidden pt-20" />
      </section>
      <FreeEstimate />
    </>
  );
}

