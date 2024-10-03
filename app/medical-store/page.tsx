"use client"

import ImageCarousel from "@/components/ImageCarousal/ImageCarousel";
import React from "react";

export default function MedicalStore() {
  const images = [
    "/assets/images/education/pisoftERP.png",
    "/assets/images/education/pisoftERP1.png",
    "/assets/images/education/pisoftERP2.png",
    "/assets/images/education/pisoftERP_med.png",
  ];
  return (
    <div>
      <div className="relative bg-gradient-to-r from-purple-600 to-blue-600 h-[300px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
          src="/assets/images/breadcrumb.jpg"
          alt="Background Image"
            className="object-cover object-center w-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Medical Store
          </h1>
        </div>
      </div>
      <div className="py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-7xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            MEDICAL & HEALTHCARE SYSTEM MANAGEMENT ERP (MHSME)
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            PisoftERP build Clinics, Hospital and other business directly connected with medical and healthcare industry. For a doctor or hospital the system manages patient details, visits, medical history. Manage diagnosis and prescription with patient history for sharing precise information for further referral and treatments.
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Booking of appointment, managing and maintaining records of visitors with an easy online booking system by patients. Helps laboratories, core facilities, and biotech’s companies providing services to clients or partners to keep track of samples arriving for processing, track status and generate reports. Stock and inventory can be maintained of an organisation for internal usage or sales. Smoother system to search stocks by product and batch information. Has an ability to manage different warehouse and stores for easy management. Can be used to manage vendors and suppliers for indent and dispatches.
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
                    src="/assets/images/our-modules/patient.png"
                    className="w-16  ml-5"
                  />{" "}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Patient Management System
                </h3>
                <p>
                  For a doctor or hospital the system manages patient details,
                  visits, medical history.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-5xl mb-4 text-pink-500 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/appointment.png"
                    className="w-16  ml-5"
                  />{" "}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Appointment Management
                </h3>
                <p>
                  Booking of appointment, managing and maintaining records of
                  visitors with an easy online booking by patients and customers
                  and maintaining records of visitors.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "2s" }}
              >
                <div className="text-5xl mb-4 text-purple-500 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/clinic.png"
                    className="w-16  ml-5"
                  />{" "}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Clinic OPD Management
                </h3>
                <p>
                  Manage diagnosis and prescription with patient history for
                  sharing precise information for further referral and
                  treatments.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-5xl mb-4 text-green-400 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/pathology.png"
                    className="w-16  ml-5"
                  />{" "}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Pathology Tests Management
                </h3>
                <p>
                  Helps laboratories, core facilities, and biotech’s providing
                  services to clients or partners to keep track of samples
                  arriving for processing, track status and generate reports
                  while maintaining records.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-5xl mb-4 text-yellow-400 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/score-evaluation.png"
                    className="w-16  ml-5"
                  />{" "}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Billing And Collections Management
                </h3>
                <p>
                  For any business made easy the bill generation and its
                  management, receipts of collections and invoicing. Can also be
                  used to track auto service bill generation and pendency.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "2.5s" }}
              >
                <div className="text-5xl mb-4 text-red-500 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/finance.png"
                    className="w-16 ml-5"
                  />{" "}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Finance And Accounting Management
                </h3>
                <p>
                  Account package to manage daily accounts along with performing
                  complex tasks like profit and loss statement managing ledger
                  and account heads to customized for easy usage and entries.
                </p>
              </div>
            </div>
            <div className="my-8 flex justify-center ">
              <p className="relative rounded-full px-4 py-1.5 text-sm leading-6 text-black ring-1 ring-inset ring-gray-900/10 hover:ring-gray-900/20 bg-white  hover:bg-lime-500 hover:text-white">
                <a
                  href="http://pisofterp.com/mhsme.php"
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
