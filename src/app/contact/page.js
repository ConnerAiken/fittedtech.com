import Image from "next/image";

export default function Contact() {
  return (
    <main>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* Row */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-black-500 sm:text-lg dark:text-black-400">
              <h1 className="max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl dark:text-white">
                Get in Touch!
              </h1>
              <p className="text-gray-500 sm:text-lg dark:text-gray-400">
                We&apos;d love to hear from you! Whether you have a question about our services, need assistance with a project, or want to discuss a
                custom solution, our team is here to help.
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
        </div>
      </section>
      <section className="bg-gray-200 dark:bg-gray-800">
        <div className="max-w-screen-xl flex items-center justify-center px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div class="mx-auto w-full max-w-[550px]">
            <h1 class="text-2xl font-bold mb-4 text-center">Contact Us Now</h1>
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              {/* Honeypot field */}
              <div className="hidden">
                <label htmlFor="honeypot">Don&apos;t fill this out if you&apos;re human:</label>
                <input type="text" id="honeypot" name="honeypot" />
              </div>

              <div class="mb-5">
                <label htmlFor="name" class="mb-3 block text-base font-medium text-[#07074D]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label htmlFor="email" class="mb-3 block text-base font-medium text-[#07074D]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label htmlFor="subject" class="mb-3 block text-base font-medium text-[#07074D]">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  class="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div class="mb-5">
                <label htmlFor="message" class="mb-3 block text-base font-medium text-[#07074D]">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  class="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                ></textarea>
              </div>
              <div>
                <button
                  disabled
                  className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0 dark:bg-purple-600 dark:hover:bg-purple-700 focus:outline-none dark:focus:ring-purple-800"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          <div className="items-start  gap-8 lg:grid lg:grid-cols-3 xl:gap-16">
            <div class="mb-8">
              <h1 class="text-2xl font-bold mb-4">Phone or Email</h1>
              <p>
                Give us a call at <strong>+1 (206) 651-4296</strong>. Our support team is available Monday through Sunday, 9 AM to 5 PM PST.
              </p>
              <br />
              <p>
                Please email us at <strong>contact@fittedtech.com</strong>. We will respond to your inquiry within 24 hours.
              </p>
            </div>

            <div class="mb-8">
              <h1 class="text-2xl font-bold mb-4">Business Hours</h1>
              <p>Our office is open Monday through Friday, from 9 AM to 5 PM PST. We are closed on weekends and public holidays.</p>
            </div>

            <div class="mb-8">
              <h1 class="text-2xl font-bold mb-4">Follow Us</h1>
              <p>Stay updated with the latest news and updates from Fitted Tech by following us on social media:</p>
              <ul class="list-disc pl-6">
                <li>
                  <strong>Facebook:</strong>{" "}
                  <a href="https://www.facebook.com/profile.php?id=61563964858799" class="text-blue-600">
                    facebook.com/fittedtech
                  </a>
                </li>
                <li>
                  <strong>Instagram:</strong>{" "}
                  <a href="https://www.instagram.com/fittedtech/" class="text-blue-600">
                    instagram.com/fittedtech
                  </a>
                </li>
                <li>
                  <strong>Discord:</strong>{" "}
                  <a href="https://discord.gg/x9H5pEph5n" class="text-blue-600">
                    https://discord.gg/x9H5pEph5n
                  </a>
                </li>
                <li>
                  <strong>LinkedIn:</strong>{" "}
                  <a href="https://linkedin.com/company/fittedtech" class="text-blue-600">
                    linkedin.com/company/fittedtech
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

