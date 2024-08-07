"use client";
import Image from "next/image";
import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import "./page.css";

export default function Contact() {
  const onDrop = useCallback((acceptedFiles) => {
    // Do something with the files
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <>
      <section className="bg-gray-50 dark:bg-gray-800">
        <div className="max-w-screen-xl px-4 py-8 mx-auto space-y-12 lg:space-y-20 lg:py-24 lg:px-6">
          {/* Row */}
          <div className="items-center gap-8 lg:grid lg:grid-cols-2 xl:gap-16">
            <div className="text-black-500 sm:text-lg dark:text-black-400">
              <h1 className="max-w-2xl mb-4 text-3xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl dark:text-white">
                How does this work?
              </h1>
              <p className="text-gray-500 sm:text-lg dark:text-gray-400">
                We offer a variety of services to meet your needs. While it is difficult to provide an estimate without knowing the specifics of your
                project, we can provide a rough estimate based on the information you provide. Please fill out the form below to get started.
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
          <div className="mx-auto w-full max-w-[550px]">
            <h1 className="text-2xl font-bold mb-4 text-center">Get Your Free Estimate Now</h1>
            <form action="https://formbold.com/s/FORM_ID" method="POST">
              {/* Honeypot field */}
              <div className="hidden">
                <label htmlFor="honeypot">Don&apos;t fill this out if you&apos;re human:</label>
                <input type="text" id="honeypot" name="honeypot" />
              </div>

              <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Full Name"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="example@domain.com"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Enter your subject"
                  className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-5">
                <label htmlFor="docs" className="mb-3 block text-base font-medium text-[#07074D]">
                  Add Documents
                </label>
                <div
                  id="docs-container"
                  className="w-full border border-indigo-600 border-dashed  flex items-center justify-center bg-gray-50"
                  style={{ height: "15vh" }}
                  {...getRootProps()}
                >
                  <input {...getInputProps()} name="docs" id="docs" />
                  {isDragActive ? <p>Drop the files here ...</p> : <p>Drag and drop some files here, or click to select files</p>}
                </div>
              </div>
              <div className="mb-5">
                <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  id="message"
                  placeholder="Type your message"
                  className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
    </>
  );
}

