import React from 'react'

export default function Retails() {
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
                    src="/assets/images/our-modules/hr-management.png"
                    className="w-16  ml-5"
                  />{" "}
                </div>
                <h3 className="text-2xl font-bold mb-2">
                Human Resource Management
                </h3>
                <p>
                You can maintain employee's records as per the organization requirement. It includes Personal information, goal sheets, appraisals, etc. for the employees with a rich set of tools empower the employee. This system can be allotted the same recruitment and appraisal structure.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "1s" }}
              >
                <div className="text-5xl mb-4 text-pink-500 feature-icon">
                <img
                    alt=""
                    src="/assets/images/our-modules/crm.png"
                    className="w-16  ml-5"
                  />                </div>
                <h3 className="text-2xl font-bold mb-2">Customer Management</h3>
                <p>
                Complete CRM system to manage client database that handles complete information of respective client along with personal and contact details etc. One can easily search desired information using various available filters for easy reporting.
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
                  />                </div>
                <h3 className="text-2xl font-bold mb-2">
                Billing And Collections
                </h3>
                <p>
                For any business made easy the bill generation and its management, receipts of collections and invoicing. Can also be used to track auto service bill generation and pendency.                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "0.5s" }}
              >
                <div className="text-5xl mb-4 text-green-400 feature-icon">
                <img
                    alt=""
                    src="/assets/images/our-modules/finance.png"
                    className="w-16  ml-5"
                  />                </div>
                <h3 className="text-2xl font-bold mb-2">Finance And Accounting Management</h3>
                <p>
                Account package to manage daily accounts along with performing complex tasks like profit and loss statement managing ledger and account heads to customized for easy usage and entries.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "1.5s" }}
              >
                <div className="text-5xl mb-4 text-yellow-400 feature-icon">
                <img
                    alt=""
                    src="/assets/images/our-modules/inventory-management.png"
                    className="w-16  ml-5"
                  />                </div>
                <h3 className="text-2xl font-bold mb-2">
                Stocks and Inventory Management
                </h3>
                <p>
                Here stock and inventory can be maintained of an organisation of internal usage or sales. Smoother system to search stocks by product and batch information. Has an ability to manage different warehouse and stores for easy management. Can be used to manage vendors and suppliers for indent and dispatches.
                </p>
              </div>
              <div
                className="feature-card rounded-lg p-6 floating"
                style={{ animationDelay: "2.5s" }}
              >
                <div className="text-5xl mb-4 text-red-500 feature-icon">
                <img
                    alt=""
                    src="/assets/images/our-modules/commission.png"
                    className="w-16 ml-5"
                  />                </div>
                <h3 className="text-2xl font-bold mb-2">Commission Payouts Management</h3>
                <p>
                A complete module to calculate commissions for various levels in hierarchy that can be configured for automatic calculation and disbursal for ease and accurate calcutaions.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
