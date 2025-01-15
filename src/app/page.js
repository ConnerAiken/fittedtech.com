import Image from "next/image";
import { FreeEstimate } from "./components/freeEstimate";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      {/* Start block */}
      <section className="bg-white dark:bg-gray-900">
        <div className="grid max-w-screen-xl px-4 pt-20 pb-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 lg:pt-28">
          <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-5xl xl:text-6xl dark:text-white">
              Supporting Homes and Small Businesses
            </h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
              Fitted Tech provides home and small business IT services in the Snoqualmie Valley of Washington State. We&apos;re here to help.
            </p>
            <div className="space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
              <Link
                href="/services"
                className="inline-flex items-center justify-center w-full bg-ftBlue hover:bg-blue-600  text-white px-5 py-3 text-sm font-medium text-center text-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg sm:w-auto"
              >
                IT Services
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center w-full bg-ftGreen text-white px-5 py-3 mb-2 mr-2 text-sm font-medium text-gray-900 border border-gray-200 rounded-lg sm:w-auto focus:outline-none hover:bg-green-600 focus:z-10 dark:border-gray-800 "
              >
                Web and App Development
              </Link>
            </div>
          </div>
          <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <Image
              placeholder="blur"
              blurDataURL={
                "data:image/jpeg;base64,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ug1q6xq6DWrrGmg3prGrojWms6aDemsaaDemsaaDWms6aDWpqamg1qampoNampqaC6mpqagupqamgtrNpazairazaWs2oFrNpaxam6q2sWpazemPVhaxaluouY0II0m6ICsAAAAAAAAAAAAAAAAKrKouaqoDSqgjSiKKKgCmoCtausKkGtGQg9HV1jTXVyb01jTQb1dc9XQb01jV0G9NY1dBvTWNXRG9NY1dBvTWNNBvTWdNEb01jV0GtNZ00GtNZ00GtNZ00GtTWdNBrU1NTQXTWdNQXU1NTQXUtS1m1BbUtS1m1Kq2s2pazazuqtrFqWsXpPVi3pi3S1GsxRBFTdEBWAAAAAAAAAAAAAAAAAAAAFVlRaqsqjVURRVEEVRFFAAAAfZprGmujMdNNc9XQjerrnq6Eb1dc9XRG9XWNNQdNNY1dEb01jV0G9NY1dEb01jV0GtNZ00G9NZ00RrTWdNBrTWdTQa01nTQXTWdNQXU1NTQa1nU1LUVbUtS1m1KLazalrNrO6q2s2paxaZirawDSiCKzuiArIAAAAAAAAAAAAAAAAAAAAAAACiArQgi1VQFqiAtUAAAHX0emRttv0emAHT0vpz00SOurrl6WdCR101zla1EjerrGmiOmmsaug3q6xpojerrGroNaazq6IurrOmoNaazpoNaazpoi6azpoq6azpqC6mpqagupalrNqbotqWpazayq2s2pazauYpayI0oCKzuiArIAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAtVWVCqIItUQCugCugqCiiAKIKNasrIDpKuucrUojerrGrqMt6usauiNaus6ag1q6yCNaammgumoaC6amiC6mppoi6mpqIq6lprNqaLazaWpaypazaWs2rmBayWo2oggm6qArIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADoAsdQAgKgooigAKDUrIDcqysxYjLasqIqsqiNaIAqsqiKIAqAgCACCICURnQrNVmilrFq1mtYCCNFABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHQQdI2oBAAIABAVBYKIsILGokWIlVUVEqqiolFRRABAAEAAogICAhUZqpU3CpWatSotZrNarNawQBVAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbAd4oqKQACAARQFICwkWIlI0iozVBRKKCFFBEoAFABKAIVBUCoiiQrKVpkiVKzWqlZ3FrNZrdZqNYwLUaaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbFHpgAEAAgC4uBUxZFxcRKSKYqJQUEooqJUUVEqKAUAEoAhRFAqIoJURRCso0gMo0JFYsZsbsSxncazXOxl0sYsRvEAVQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHQawx60rOLjWGBWcXGsMRKmLi4uIlTFwxcEqYqiICgUUEQFBKAqCCglQAKIoiVEUBEaQERpEVEURWWbG2aKzYxY6WM2MxvNc6jdjCNAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6cMXFx63Os4Y1hiCYYuLgJhi4oiYYqoiKKCCiICggCggoiIKAgoIiKAgogiKAiKIrIqCojSIrFSxqpUaxixix0sZsI1muYtiM7jYAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+zBR63JBVwEMUREVQEUURFBAFBAFEQUQABAARBQEFREEUFQVAQVEVEaQVlGkRWUrSCs1mxus1Gsc7GXSxipG8ZFRhoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB9wo9biAACiACiIoACggCoiCgAAgAIAIIKCIKgAAIKiCCoKiNIioioKiKiKzUrVZo1jNYsdKxRvGEaqM7jSAMKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAKiIKA+4B7HIFARQEAVBFAQUAABAURAAAAQAEQVBABARQEAFQVEVEUBEVEVEVBpmpWqzUXGazW6zRvHOo1WTW8EVHPVAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAFVFRAUEAAfcA9jmAAACKAgAogAIKAACIACAAAAgAIgCAAAioKIqICKgqIqIqIqCpUq1KNM1mtVmo1jFZbrA3gioxrQAyAAAAAAAAAAAAAAAAAAAAAAAAAACooKAiKAiAAP//Z"
              }
              src="/seattle.jpg"
              alt="hero image"
              className="rounded"
              width={1200}
              height={400}
            />
          </div>
        </div>
      </section>
      {/* End block */}
      {/* Start block */}
      <section className="hidden md:block lg:block bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 pb-4 mx-auto lg:pb-2">
          <div className="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
            <a href="https://transformativemed.com/" className="flex items-center lg:justify-center">
              <Image src="/logos/transformativemed.png" width={200} height={75} alt="transformativemed.com logo" />
            </a>
            <a href="https://cvmsd.com/" className="flex items-center lg:justify-center">
              <Image src="/logos/cvmsd-logo.png" width={200} height={75} alt="csvmd.com logo" />
            </a>
            <a href="https://gswtrade.com/" className="flex items-center lg:justify-center ">
              <Image src="/logos/gswtrade-logo.png" width={200} height={75} alt="csvmd.com logo" />
            </a>
            <a href="https://vulnixfire.com/" className="flex items-center lg:justify-center">
              <Image src="/logos/vulnix-logo.png" width={200} height={75} alt="csvmd.com logo" />
            </a>
            <a href="https://www.pellaofpnw.com/" className="flex items-center lg:justify-center">
              <svg
                className="relative z-10 block h-[58px] max-w-full p-1.5 motion-safe:transition-all motion-safe:duration-300 sm:h-[62px] xl:h-[90px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 237.79 237.79"
              >
                <title>Pella</title>
                <path
                  fill="#ffde00"
                  d="m117.94,237.79c65.66.53,119.32-52.28,119.85-117.93C238.32,54.19,185.52.53,119.86,0,54.19-.52.53,52.28,0,117.94c-.53,65.66,52.27,119.32,117.94,119.85Z"
                ></path>
                <path
                  fill="#231f20"
                  d="m68.15,85.81c2.18-2.72,5.05-1.96,4.06.79-4.39,12.22-22.82,65.32-43.24,80.57-3.24,2.42-7.05,3.34-5.31-3.17,2.94-11.02,30.12-60.23,44.49-78.19Z"
                ></path>
                <path
                  fill="#231f20"
                  d="m19.26,99.04c6.19-8.37,16.46-16.58,31.63-24.64,15.35-8.16,28.62-11,35.39-11.14,21.54-.45,25.85,12.96,11.36,29.97-11.69,12.36-32.16,25.06-52.58,31.88,0,0-2.89-1.68-4.26-2.52-1.38-.84-1.1-1.66.43-2.34,18.75-8.34,32.63-16.16,42.07-23.69,10.13-8.07,15-15.46,16.58-19.99,1.23-3.55.7-5.48-3.88-5.23-5.15.27-13.91,2.66-21.15,5.55-16.03,6.39-34.36,16.49-40.58,21.54-2.42,1.97-1.97,3.2-.39,3.12,1.8-.09,2.08.4.95,1.57-1.8,1.88-7.77,4.86-12.23,5.55-7.06,1.11-7.02-4.65-3.34-9.64Z"
                ></path>
                <path
                  fill="#231f20"
                  d="m177.32,112.07c-6.05,6.4-13.81,11.61-19.16,14.36-9.4,4.84-14.69,4.35-13.54-9.36.81-9.8,20.06-49.7,47.33-61.72,5.83-2.57,10.7-1.27,7.35,5.35-9.07,17.89-27.74,36.64-44.77,50.5-9.71,7.89-18.13,13.95-25.1,17.86-10.03,5.63-16.36,4.05-15.29-9.74.73-9.36,17.72-51.9,48.03-66.71,6.05-2.96,11.03-1.86,7.55,5.17-17.96,36.31-69.78,76.89-76.6,82.22-4.41,3.45-8.25,5.28-11.35,5.85-6.66,1.39-9.79-3.74-8.16-9.18,1.35-4.75,6.08-9,13.73-15.58-5.34-2.1-5.1-5.34-1.36-9.92,2.94-3.6,14.12-12.81,22.06-14.6,4.43-1,6.63-.02,5.69,3.91-.68,2.82-1.99,4.57-3.98,6.6-1.53,1.55-2.24,1.11-2.27-.5-.02-.83-.6-1.28-2.62-.71-3.78,1.07-8.55,5.5-9.44,6.41-2.6,2.7-1.41,4.06,5.09,1.7,2.82-1.03,4.24.62,2.05,2.36-3.27,2.6-10.97,10-12.66,11.77-5.43,5.68-2.68,7.16,2.73,3.89,17.55-10.61,33.62-26.37,45.59-38.98,13.53-14.24,24.23-30.89,25.25-32.52,1.68-2.65.72-3.08-1.28-1.34-10.15,8.84-29.15,34.44-33.21,44.23-5.44,13.12-6.5,21.46,1.76,18.08,3.67-1.5,10.81-5.85,27.39-18.76,3.97-3.1,7.36-6.87,10.54-10.02,13.22-13.08,24.94-29.26,25.96-30.77,1.66-2.46.49-2.74-1.28-1.43-10.89,8.04-27.53,29.61-34.66,42.41-6.77,12.17-6.54,21.37,1.2,16.81,2.64-1.56,7.14-3.73,17.33-13.7l.09,6.08Z"
                ></path>
                <path
                  fill="#231f20"
                  d="m211.31,75.9c-20.03,1.34-38.34,30.3-40.76,39.78-3.47,13.54,7.5,9.68,11.02,7.89,9.61-4.91,28.58-22.38,31.93-27.78,3.59-5.8-.46-7.11-6.41-3.29-8.17,5.25-13.5,19.49-14.17,23.58-2.05,12.54,6.48,12.93,13.58,8.63,5.56-3.38,13.11-12.71,15.88-17.9,1.69-3.16.81-4.21-1.87-1.73-2.58,2.39-7.63,6.8-11.49,8.77-6.31,3.23-9.4.19-9.57-2.67-.42-7.26,4.28-13.1,6.27-14.58,1.49-1.12,2.24-.5,1.16,1.14-1.66,2.52-14.31,13.21-17.91,15.24-7.15,4.05-9.98,3.3-6.03-3.64,3.31-5.82,12.86-18.2,21.98-22.91,1.8-.93,5.31-1.73,5.26-.35-.07,1.75.51,2.22,1.69,1.63,1.88-.94,5.22-3.94,6.53-6.84.88-1.94,2.33-5.6-7.09-4.97Z"
                ></path>
                <path
                  fill="#231f20"
                  d="m218.32,122.55c.02-2.27,1.74-3.97,3.94-3.95s3.87,1.74,3.85,4.01-1.74,4-3.91,3.98-3.89-1.73-3.87-4.04Zm3.86,4.84c2.61.02,4.87-1.99,4.89-4.77s-2.2-4.8-4.81-4.82-4.89,1.99-4.91,4.74,2.2,4.82,4.83,4.85Zm-.98-4.43h.97s1.44,2.42,1.44,2.42h.94s-1.55-2.44-1.55-2.44c.81-.1,1.44-.52,1.45-1.51,0-1.09-.63-1.58-1.94-1.59l-2.11-.02-.04,5.53h.84s.02-2.39.02-2.39Zm0-.71v-1.71s1.16,0,1.16,0c.58,0,1.2.13,1.2.82,0,.85-.64.89-1.35.89h-1Z"
                ></path>
              </svg>
            </a>
            <a href="https://mvcchome.org/" className="flex items-center lg:justify-center  dark:invert">
              <Image src="/logos/missionviejo-logo.png" width={200} height={75} alt="mvcchome.org logo" />
            </a>
            {/* <a href="https://www.facebook.com/myweedbunny" className="flex items-center lg:justify-center">
              <Image src="/logos/weedbunny-logo.png" width={200} height={75} alt="weedbunny.com logo" />
            </a> */}
          </div>
        </div>
      </section>
      {/* End block */}
      {/* Start block */}
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* Row */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">On-site IT services for home & business</h2>
              <p className="mb-8 font-light lg:text-xl">
                We understand how critical it is for your technology to run smoothly, whether you&apos;re at home or managing a small business. Our
                technicians are here to provide comprehensive IT solutions directly at your location.
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
                    Computer Repair and Maintenance: From hardware repairs to software optimization, we keep your systems running efficiently.
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
                    Data Backup and Recovery: Protect your valuable data with our backup solutions and get quick recovery support when needed.
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
                    Virus and Malware Removal: Keep your devices safe from threats with our thorough cleaning and security measures.
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
                    Network Setup and Troubleshooting: Ensure your Wi-Fi and wired networks are fast, secure, and reliable.
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
                    Smart Home Integration: Connect and optimize your smart home devices for a seamless experience.
                  </span>
                </li>
              </ul>
              <p className="mb-8 font-light lg:text-xl">
                {" "}
                We are the only trusted provider for Web Development and IT Support in Snoqualmie Valley, servicing North Bend, Snoqualmie, Fall City,
                Carnation, Duvall, Issaquah, Sammamish and surrounding areas.
              </p>
            </div>
            <Image
              className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex"
              src="/help-desk.jpg"
              width={400}
              height={75}
              alt="dashboard feature image"
            />
          </div>
          {/* Row */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <Image className="hidden w-full mb-4 rounded-lg lg:mb-0 lg:flex" src="/planning.jpg" width={400} height={75} alt="feature image 2" />
            <div className="text-gray-500 sm:text-lg dark:text-gray-400">
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-gray-900 dark:text-white">Websites, Apps and Automation</h2>
              <p className="mb-8 font-light lg:text-xl">
                We have a team of veteran software engineers who can create custom websites and applications for your business. Whether it&apos;s a
                business operation that could be automated or a business brochure website, we can handle it and bring it to life quickly.
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
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Social Media Marketing</span>
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
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">Websites and Apps</span>
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
                  <span className="text-base font-medium leading-tight text-gray-900 dark:text-white">System and Server Management</span>
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
                    iOS, Android and any other native applications
                  </span>
                </li>
              </ul>
              <p className="font-light lg:text-xl">
                With a detailed estimate and project plan, we will get your new project launched on time and priced accurately.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* End block */}
      <FreeEstimate />
    </main>
  );
}

