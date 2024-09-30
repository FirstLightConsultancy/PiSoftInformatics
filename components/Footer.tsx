"use client";
import Image from "next/image";
import React from "react";
import { useState } from "react";

const socialIcons = [
  {
    name: "Facebook",
    icon: "icons/facebook.svg",
    href: "https://www.facebook.com",
  },
  {
    name: "Instagram",
    icon: "icons/instagram.svg",
    href: "https://www.instagram.com",
  },
  {
    name: "Twitter",
    icon: "icons/twitter.svg",
    href: "https://www.twitter.com",
  },
  {
    name: "Whatsapp",
    icon: "icons/whatsapp.svg",
    href: "https://www.whatsapp.com",
  },
  {
    name: "Linkedin",
    icon: "icons/linkedin.svg",
    href: "https://www.linkedin.com",
  },
  { name: "Gmail", icon: "icons/gmail.svg", href: "https://www.gmail.com" },
  {
    name: "Youtube",
    icon: "icons/youtube.svg",
    href: "https://www.youtube.com",
  },
];

export default function Footer() {
  const [hoveredIcon, setHoveredIcon] = useState<string | undefined>(undefined);

  return (
    <footer className="w-full bg-[#373737] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 -mt-10">
        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-4 lg:gap-8 py-14 max-w-xs mx-auto sm:max-w-2xl md:max-w-3xl lg:max-w-full">
          <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
            <img
              src="/assets/images/logo.png"
              alt=""
              className="h-24 bg-white"
            />
            <p className="py-8 text-md lg:max-w-xs text-center lg:text-left">
              Trusted in more than 100 countries & 5 million customers. Follow
              us on social media.
            </p>

            <div className="flex flex-col items-center -ml-16">
              {/* Social Icons List */}
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  // <a href={social.href} target="_blank">
                  <a key={social.href} target="_blank">
                    <img
                      key={index}
                      src={social.icon}
                      alt={social.name}
                      className="h-8 w-8 cursor-pointer transition-all duration-300 hover:scale-110 inline-block"
                      onMouseEnter={() => {
                        setHoveredIcon(social.icon);
                      }}
                      onMouseLeave={() => {
                        setHoveredIcon(undefined);
                      }}
                    />
                  </a>
                ))}
              </div>

              {/* Enlarged Icon */}
              <div className="h-[100px] ">{hoveredIcon && (
                <div className=" -mb-10 pt-10">
                  <img
                    src={hoveredIcon}
                    alt="Enlarged Icon"
                    className="h-24 w-24 transition-transform transform hover:scale-110"
                  />
                </div>
              )}</div>
              
            </div>
          </div>
          {/* End Col */}
          <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-lg font-medium mb-7">PisoftERP</h4>
            <ul className="text-md  transition-all duration-500">
              <li className="mb-3">
                <a href="javascript:;" className="">
                  Education
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className=" ">
                  Retail
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className=" ">
                  Finance
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className=" ">
                  Medical
                </a>
              </li>
            </ul>
          </div>
          {/* End Col */}
          <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-lg  font-medium mb-7">PORTALS</h4>
            <ul className="text-md  transition-all duration-500">
              <li className="mb-3">
                <a href="javascript:;" className="">
                  Elive Today
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className="mb-3">
                  ClassiKart Portal
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className="mb-3">
                  Chandigarh Web
                </a>
              </li>
              <li>
                <a href="javascript:;" className="mb-3">
                  Wonder Websites
                </a>
              </li>  
            </ul>
          </div>
          {/* End Col */}
          <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-lg  font-medium mb-7">WEB SERVICES</h4>
            <ul className="text-md  transition-all duration-500">
              <li className="mb-3">
                <a href="javascript:;" className="">
                Web Designing
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className=" ">
                Software Developement
                </a>
              </li>
              <li className="mb-3">
                <a href="javascript:;" className=" ">
                Digital Marketing
                </a>
              </li>
              
            </ul>
          </div>
          {/* End Col */}
          <div className="lg:mx-auto text-center sm:text-left">
            <h4 className="text-lg  font-medium mb-7">Office Address</h4>
            <p>Plot No. C - 86 (Second Floor), Phase 7, Industrial Area, Mohali, Punjab, India.
            </p><br/>
            <div className="flex">
            <img src="/icons/call.svg" alt="" className="h-5 mt-1"/><h2>+91 8288029930</h2>

            </div>
          </div>
        </div>
        {/* Grid */}
        <div className="py-7 border-t border-gray-200">
          <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
            <span className="text-md  ">
              ©<a href="https://pagedone.io/">Pisoft Informatics</a>2024, All
              rights reserved.
            </span>
            <ul className="flex items-center gap-9 mt-4 lg:mt-0">
              <li>
                <a href="javascript:;" className="text-md ">
                  Terms
                </a>
              </li>
              <li>
                <a href="javascript:;" className="text-md ">
                  Privacy
                </a>
              </li>
              <li>
                <a href="javascript:;" className="text-md ">
                  Cookies
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
