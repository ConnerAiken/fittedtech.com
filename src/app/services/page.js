import Image from "next/image";
import { FreeEstimate } from "../components/freeEstimate";
import "./page.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

// Inspiration: https://www.hillsboroaviation.com/contract-charter/tours-excursions/

export default function Services() {
  const exampleServices = [
    {
      title: "Computer Repair",
      description:
        "Do you have a tech problem that you cannot figure out? We can help! Our team of experts can remotely diagnoise and troubleshoot your issue. We can also provide on-site support if needed. We offer a wide range of IT services to meet your needs!",
      href: "#",
      image: "/tech-support.jpg",
      tags: ["computer repair", "IT services", "on-site support"],
    },
    {
      title: "Data Backup, Recovery & Security",
      description:
        "We can help you protect your data from loss or theft. We can help you backup your data to the cloud, recover lost data, and secure your data from cyber attacks. We offer a wide range of data security services to meet your needs! Viruses, malware, and ransomware are no match for us!",
      href: "#",
      image: "/frustrated.jpg",
      tags: ["data backup", "data recovery", "cyber security"],
    },
    {
      title: "Smart Home & Office Setup",
      description:
        "We can help you setup your smart home or office. We can help you install smart devices, setup smart home automation, and secure your smart devices from cyber attacks. We offer a wide range of smart home and office services to meet your needs!",
      href: "#",
      image: "/help-desk.jpg",
      tags: ["smart home", "network configuration", "home automation"],
    },
  ];
  const exampleProjects = [
    {
      title: "Ticket Payment System",
      description:
        "CVMSD is a toll management company that helps recover unpaid tolls. We built a ticket payment system that intakes traffic violation instances, notifies drvers of their infraction and enables them to easily pay their tolls online.",
      href: "https://www.cvmsd.com",
      image: "/clients/cvmsd-ticket-payment.png",
      tags: ["full-stack", "payment system", "business automation"],
    },
    {
      title: "Vulnix Fire",
      description:
        "Vulnix Fire is a fire protection company that specializes in fire suppression systems. We built a business brochure and an estimation app that helps them provide quotes to their customers.",
      href: "https://www.vulnixfire.com",
      image: "/clients/vulnix-fire.png",
      tags: ["front-end", "estimation app", "business brochure"],
    },
    {
      title: "QR Code Metrics",
      description:
        "Pella reached out to us wanting to track the performance of their QR code marketing campaigns. We built a QR code metrics dashboard that tracks the number of scans, the location of the scan, and the time of the scan.",
      href: "https://www.pella.com",
      image: "/clients/pella-windows.png",
      tags: ["back-end", "QR code app", "data analytics"],
    },
  ];

  return (
    <>
      <section className="flex flex-col md:flex-row bg-white">
        <section className="hidden support-hero-section h-screen w-full text-white md:w-1/2 md:block">
          <div
            className="px-4 pt-5 pb-8 mx-auto transition delay-100 duration-300 ease-in-out hover:backdrop-blur-md"
            style={{ height: "94%", marginTop: "6%" }}
          >
            <div className="grid place-content-center px-4 pt-20 pb-8 mx-auto">
              <div className="bg-white p-6  text-black backdrop-brightness-125 backdrop-contrast-125 shadow-lg rounded-lg h-full">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">IT Services</h1>
                <p className="text-slate-800 md:text-lg lg:text-xl">
                  Do you have a tech problem that you cannot figure out? We can help!
                  <br />
                  <br />
                  Our team of experts can remotely diagnoise and troubleshoot your issue. We can also provide on-site support if needed. We offer a
                  wide range of IT services to meet your needs!
                  <br />
                </p>
                <br />
                <br />
                <h4 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-2xl xl:text-3xl text-slate">
                  What we offer..
                </h4>
                <div className="flex justify-center bg-slate-600 p-3">
                  {exampleServices.map((project) => {
                    return (
                      <Link
                        href={project.href}
                        key={project.title}
                        className={`
                            max-w-sm rounded overflow-hidden shadow-lg bg-slate-800 m-2 text-white
                            transition delay-100 duration-150 ease-in-out shadow-lg
                            hover:shadow-2xl 
                            hover:cursor-pointer
                        `}
                        target="_blank"
                      >
                        <Image src={project.image} className="w-full" alt={project.title} width={200} height={200} />
                        <div className="px-6 py-4">
                          <div className="font-bold text-xl mb-2">{project.title}</div>
                          <p className="text-base">{project.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                          {project.tags.map((tag) => {
                            return (
                              <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                key={project.title + "-" + tag}
                              >
                                #{tag}
                              </span>
                            );
                          })}
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <br />
              </div>
            </div>
          </div>
        </section>
        <section className="hidden engineering-hero-section h-screen w-full text-white md:w-1/2  md:block">
          <div
            className="px-4 pt-5 pb-8 mx-auto  transition delay-100 duration-300 ease-in-out hover:backdrop-blur-md"
            style={{ height: "94%", marginTop: "6%" }}
          >
            <div className="grid place-content-center px-4 pt-20 pb-8 mx-auto ">
              <div className="bg-slate-100/95 p-6 text-black backdrop-brightness-125 backdrop-contrast-125 shadow-lg rounded-lg h-full">
                <h1 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-4xl xl:text-5xl">Software Engineering</h1>
                <p className="text-slate-800 md:text-lg lg:text-xl">
                  If you have an idea, we can help you bring it to life!
                  <br />
                  <br />
                  Next to technology, our biggest passion is software engineering. We love to build things that make a difference. We specialize in
                  web and mobile applications of any shape and size. If you have a business, we can help you automate client or business operations!
                  <br />
                </p>
                <br />
                <h4 className="max-w-2xl mb-4 text-4xl font-extrabold leading-none tracking-tight md:text-2xl xl:text-3xl text-slate">
                  Our last few projects...
                </h4>
                <div className="flex justify-center bg-slate-600 p-3">
                  {exampleProjects.map((project) => {
                    return (
                      <Link
                        href={project.href}
                        key={project.title}
                        className={`
                            max-w-sm rounded overflow-hidden shadow-lg bg-slate-800 m-2 text-white
                            transition delay-100 duration-150 ease-in-out shadow-lg
                            hover:shadow-2xl 
                            hover:cursor-pointer
                        `}
                        target="_blank"
                      >
                        <Image src={project.image} className="w-full" alt={project.title} width={200} height={200} />
                        <div className="px-6 py-4">
                          <div className="font-bold text-xl mb-2">{project.title}</div>
                          <p className="text-base">{project.description}</p>
                        </div>
                        <div className="px-6 pt-4 pb-2">
                          {project.tags.map((tag) => {
                            return (
                              <span
                                className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
                                key={project.title + "-" + tag}
                              >
                                #{tag}
                              </span>
                            );
                          })}
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <br />
                {/* <div className="flex justify-center">
                  <button className="px-5 py-3 bg-slate-500 hover:bg-slate-600 transition delay-100 duration-150 ease-in-out text-white rounded-lg">
                    Read More
                  </button>
                </div> */}
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

