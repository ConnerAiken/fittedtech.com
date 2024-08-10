"use client";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [isSending, setIsSending] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPhoneNumber = (phone) => {
    return /^(\+\d{1,2}\s?)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(phone);
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name || formData.name.length < 3) newErrors.name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.message) newErrors.message = "Message is required";
    if (!formData.subject) newErrors.subject = "Subject is required";
    if (formData.honeypot) newErrors.subject = "You are a bot!";

    if (!isValidEmail(formData.email)) newErrors.email = "Email is not valid";
    if (!isValidPhoneNumber(formData.phone)) newErrors.phone = "Phone number is not valid";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setIsSending(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      // Handle successful form submission (e.g., show a success message)
    } catch (error) {
      // Handle error during form submission (e.g., show an error message)
    } finally {
      setIsSending(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <main>
      {isSending && (
        <div className="w-full h-full fixed top-0 left-0 bg-white opacity-75 z-50">
          <div className="flex justify-center items-center mt-[50vh]">
            <FontAwesomeIcon icon={faCircleNotch} className="fa-spin text-violet-600" size={"5x"} />
          </div>
        </div>
      )}
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
          <div className="mx-auto w-full max-w-[550px]">
            <h1 className="text-2xl font-bold mb-4 text-center">Contact Us Now</h1>
            <form id="contactForm" method="POST" onSubmit={handleSubmit}>
              {/* Honeypot field */}
              <div className="hidden">
                <label htmlFor="honeypot">Don&apos;t fill this out if you&apos;re human:</label>
                <input type="text" id="honeypot" name="honeypot" onChange={handleChange} />
              </div>

              <div className="mb-5">
                <label htmlFor="name" className="mb-3 block text-base font-medium text-[#07074D]">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-2"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
              </div>

              <div className="mb-5">
                <label htmlFor="email" className="mb-3 block text-base font-medium text-[#07074D]">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-2"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
              </div>

              <div className="mb-5">
                <label htmlFor="phone" className="mb-3 block text-base font-medium text-[#07074D]">
                  Phone Number
                </label>
                <input
                  type="phone"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-2"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
              </div>

              <div className="mb-5">
                <label htmlFor="subject" className="mb-3 block text-base font-medium text-[#07074D]">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-2"
                />
                {errors.subject && <p className="text-red-500 text-sm">{errors.subject}</p>}
              </div>

              <div className="mb-5">
                <label htmlFor="message" className="mb-3 block text-base font-medium text-[#07074D]">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full rounded-md border border-gray-300 p-2"
                  rows={10}
                />
                {errors.message && <p className="text-red-500 text-sm">{errors.message}</p>}
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full rounded-md bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 text-white p-2"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}

