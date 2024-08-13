import Image from "next/image";
import { FreeEstimate } from "../components/freeEstimate";
import ContentBlock from "./../components/contentBlock";
import Testimonials from "./../components/testimonials";

export default function About() {
  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">Who We Are</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Founded in the beautiful Snoqualmie Valley of Washington State, Fitted Tech is your trusted partner in IT services and website or
              application development.
              <br />
              <br />
              Pacific Northwest born and raised, our team of expert software engineers and IT professionals are dedicated to providing top-notch
              in-home services tailored to meet your specific needs.
            </p>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image src="/snoqualmie-falls.jpeg" alt="hero image" className="rounded" width={1200} height={400} />
          </div>
        </div>
      </section>
      {/* Start block */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* Row */}
          <div className="items-center">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Why Choose Us?</h2>
              <p className="mb-8 font-light lg:text-xl">
                There are a lot of companies that provide IT services and development services. So why choose us? Here are a few reasons.
              </p>
              {/* List */}
              <ul role="list" className="pt-8 space-y-5 border-t border-gray-200 my-7 dark:border-gray-700">
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    <b>Customer-Centric Approach</b> Our clients are at the heart and soul of everything we do. We believe in building long-term
                    relationships by delivering exceptional service and support.
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    <b>Expertise and Experience </b> With years of experience in the tech industry, our team brings a wealth of knowledge and
                    technical expertise to every project. We stay ahead of the curve with the latest trends and technologies to provide innovative
                    solutions.
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    <b>Customized Solutions</b> We understand that every business is unique. That’s why we offer personalized services tailored to
                    your specific requirements, ensuring that our solutions perfectly fit your needs.
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    <b>Our Commitment</b> We are committed to delivering high-quality, reliable, and affordable technology solutions that drive
                    success for our clients. Your satisfaction is our priority, and we strive to exceed your expectations in every interaction.
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Icon */}
                  <svg
                    className="flex-shrink-0 w-5 h-5 text-purple-500 dark:text-purple-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">
                    <b>Transparent Pricing</b> We have flexible payment options for your projects and transparent quotes/dispatch fees. We believe
                    there should be no surprises when it comes to pricing.
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <ContentBlock className="bg-white">
        <div class="container mx-auto px-4 grid grid-cols-2">
          <div className="w-full text-gray-500 sm:text-lg dark:text-gray-400">
            <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">
              Our Clients <span className="text-purple-500">Love Us</span>
            </h2>
            <p className="mb-8 font-light lg:text-xl">
              We bring a touch of magic to every project. With a dash of innovation, a pinch of creativity, and a whole lot of dedication, anything is
              possible. But don&apos;t just take our word for it.
            </p>
          </div>
          <div className="w-full">
            <Testimonials />
          </div>
        </div>
      </ContentBlock>
      {/* End block */}
      <FreeEstimate />
    </>
  );
}

