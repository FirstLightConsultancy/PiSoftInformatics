import React from "react";

export default function MedicalStore() {
  return (
    <div>
      <div className="bg-black text-white min-h-screen">
        <section className="bg-animated cyber-grid py-20 relative overflow-hidden">
          <div className="container mx-auto px-4">
            <h2
              className="text-4xl font-bold text-center mb-12 neon-text glitch-effect"
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
          </div>
        </section>
      </div>
    </div>
  );
}
