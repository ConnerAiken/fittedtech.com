import Image from "next/image";
import { FreeEstimate } from "../components/freeEstimate";
import "./page.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import HeaderPad from "./../components/headerPad";
import ContentBlock from "./../components/contentBlock";

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
      <HeaderPad />
      <ContentBlock>
        <p>hello</p>
      </ContentBlock>
      <FreeEstimate />
    </>
  );
}

