import React from "react";

export default function Finance() {
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
                    src="/assets/images/our-modules/agent.png"
                    className="w-16  ml-5"
                  />{" "}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Advisor / Agent Management
                </h3>
                <p>
                  This module is meant for a management of advisors connected
                  with a financial organisation as agents. The system can
                  self-generate hierarchy for management and mapping to use with
                  different services offered by the organisation.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-5xl mb-4 text-pink-500 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/investments.png"
                    className="w-16  ml-5"
                  />{" "}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Deposits and Investments
                </h3>
                <p>
                  A system prepared for a financial institution wherein one can
                  easily configure and manage all deposit products life Fixed
                  deposits, Recurring Deposit and Monthly Income Scheme.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "2s" }}
              >
                <div className="text-5xl mb-4 text-purple-500 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/members.png"
                    className="w-16  ml-5"
                  />{" "}
                </div>
                <h3 className="text-2xl font-bold mb-2">Members Management</h3>
                <p>
                  Using this module one can easily handle member’s information
                  of a society or multi-level marketing system for easy access
                  to manage system members and can also develop hierarchy as per
                  system input of various levels.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-5xl mb-4 text-green-400 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/crm.png"
                    className="w-16  ml-5"
                  />{" "}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Customer Relationship Management
                </h3>
                <p>
                  Complete CRM system to manage client database that handles
                  complete information of respective client along with personal
                  and contact details etc. One can easily search desired
                  information using various available filters for easy
                  reporting.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-5xl mb-4 text-yellow-400 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/loan-management.png"
                    className="w-16  ml-5"
                  />{" "}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Financial Products - Loans
                </h3>
                <p>
                  System is capable of handling various loan products for an
                  easy management of interest calculations and penalty payment
                  along with principal amount payable. A system for loan
                  application and approval is maintained for an easy access of
                  information.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "2.5s" }}
              >
                <div className="text-5xl mb-4 text-red-500 feature-icon">
                  <img
                    alt=""
                    src="/assets/images/our-modules/lead.png"
                    className="w-16 ml-5"
                  />{" "}
                </div>
                <h3 className="text-2xl font-bold mb-2">Lead Management</h3>
                <p>
                  Complete solution to where you can capture details of new lead
                  and system will automatically generates some unique details
                  e.g. lead no. to communicate with the system in future. You
                  maintain follow-ups with detailed remarks.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
