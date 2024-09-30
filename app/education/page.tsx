import React from "react";
import "./style.css";

export default function Education() {
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
                    src="/assets/images/our-modules/finance.png"
                    className="w-16  ml-5"
                  />{" "}
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
                  />                </div>
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
                  />                </div>
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
                  />                </div>
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
                  />                </div>
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
                  />                </div>
                <h3 className="text-2xl font-bold mb-2">Student Login Panel</h3>
                <p>
                  You can maintain student records as per the organization
                  requirement. It includes personal information, address
                  details, Courses for the candidates. Student management
                  reduces lots of end to end overheads.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
