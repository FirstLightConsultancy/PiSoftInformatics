"use client";
import React from "react";
import "./style.css";

import ImageCarousel from "@/components/ImageCarousal/ImageCarousel";

export default function Education() {
  const images = [
    "/assets/images/education/pisoftERP.png",
    "/assets/images/education/pisoftERP1.png",
    "/assets/images/education/pisoftERP2.png",
    "/assets/images/education/pisoftERP_edu.png",
  ];

  return (
    <div>
      <div className="relative h-[300px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/images/breadcrumb.jpg"
            alt="Background Image"
            className="object-cover object-center w-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">Education</h1>
        </div>
      </div>
      <div className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              EDUCATION SYSTEM MANAGEMENT ERP (ESME)
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              PisoftERP is an internet based web application that can be
              accessed throughout the organization or from any place just using
              a web browser. Following a rational approach, this system is
              designed for better interaction between students, teachers,
              parents & management.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              PisoftERP handles various academic and non-academic activities of
              the organisation. The system includes basics as well as many other
              specialized capabilities, including a real time review of Grades,
              Attendance, Fee, Hostel, Transport, Medical, Inventory etc. for
              employees, students and parents over the Internet. The application
              gives us the room to handle the responsibilities either for a new
              or old organisation already following various work flow
              activities. Using secure login the system can be accessed by every
              stake holder through internet connected computers or mobile
              devices. Every user will have a home page with his/her profile
              management facilities to perform desired tasks as per the profile
              and rights assigned by the administrator.
            </p>
            
          </div>
          <div className="mt-10  flow-root sm:mt-20">
            <div className=" rounded-xl bg-blue-300 ring-1 ring-inset ring-gray-900/10  lg:rounded-2xl pt-3">
              <ImageCarousel images={images} />
            </div>
          </div>
        </div>
      </div>
      <div className="bg-blue-500 text-gray-700 min-h-screen">
        <section className="py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl font-bold text-center mb-24 neon-text glitch-effect"
              data-text="The Most Flexible & Easy To Use Features."
            >
              The Most Flexible & Easy To Use Features.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-black">
              <div className="feature-card rounded-lg p-6 floating">
                <div className="text-5xl mb-4 text-cyan-400 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/finance.png"
                    className="w-16  ml-5"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Finance and Accounting Management
                </h3>
                <p>
                  Account package to manage daily accounts along with performing
                  complex tasks like profit and loss statement managing ledger
                  and account heads to customized for easy usage and entries.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-5xl mb-4 text-pink-500 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/lead.png"
                    className="w-16  ml-5"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Lead Management</h3>
                <p>
                  Complete solution to where you can capture details of new lead
                  and system will automatically generates some unique details
                  e.g. lead no. to communicate with the system in future.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "2s" }}
              >
                <div className="text-5xl mb-4 text-purple-500 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/score-evaluation.png"
                    className="w-16  ml-5"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Student Score and Evaluation
                </h3>
                <p>
                  Maintain subject of class, grades, credits, student&apos;s
                  marks, Date-sheets, Faculty mapping, Exam scheduling as per
                  the organization requirement. You can mark student attendance
                  as per the organization regulation. Manage timetable of
                  student and teacher.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-5xl mb-4 text-green-400 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/student.png"
                    className="w-16  ml-5"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Students Management</h3>
                <p>
                  You can maintain student records as per the organization
                  requirement. It includes personal information, address
                  details, Courses for the candidates. Student management
                  reduces lots of end to end overheads.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-5xl mb-4 text-yellow-400 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/hr-management.png"
                    className="w-16  ml-5"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Human Resource Management
                </h3>
                <p>
                  You can maintain employee&apos;s records as per the
                  organization requirement. It includes Personal information,
                  goal sheets, appraisals, etc. for the employees with a rich
                  set of tools empower the employee. This system can be allotted
                  the same recruitment and appraisal structure.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "2.5s" }}
              >
                <div className="text-5xl mb-4 text-red-500 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/login-panel.png"
                    className="w-16 ml-5"
                  />
                </div>
                <h3 className="text-2xl font-bold mb-2">Student Login Panel</h3>
                <p>
                  You can maintain student records as per the organization
                  requirement. It includes personal information, address
                  details, Courses for the candidates. Student management
                  reduces lots of end to end overheads.
                </p>
              </div>
              
            </div>
            <div className="my-8 flex justify-center ">
              <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-black ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20 bg-white  hover:bg-lime-500 hover:text-white">
                <a
                  href="https://pisofterp.com/esme.php"
                  target="_blank"
                  className="font-semibold "
                >
                  <span className="absolute inset-0"></span> View full list of features
                  <span>→</span>
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
