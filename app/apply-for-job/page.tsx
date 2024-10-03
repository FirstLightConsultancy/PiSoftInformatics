import React from "react";

export default function ApplyForJob() {
  // ClassicEditor
  // .create(document.querySelector('#content'))
  // .catch(error => {
  //   console.error(error);
  // });
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
          <h1 className="text-5xl font-bold leading-tight mb-4">
            Apply For Job
          </h1>
        </div>
      </div>
      <div className="container  ">
        <h1 className="text-5xl text-center py-5">Fill Your Details</h1>
        <p className="text-lg">
          This is the first step in discovering opportunities at Pisoft. We want
          to make sure you&apos;re prepared. We regularly post new positions and
          remove positions that are no longer open. We also actively remove
          roles that have been filled. If a job is not listed, that means we’re
          no longer taking applications for the position at this time. Please
          fill all your details properly.
          <br />
          <br />
          *All fields are mandatory.{" "}
        </p>
      </div>

      <div className=" container bg-white border rounded-lg px-8 py-6 mx-auto my-24 max-w-7xl">
        <form action="/submit-post" method="POST">
          <div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10">
              <div className="mb-4">
                <label
                  htmlFor="first"
                  className="block text-gray-700 font-medium mb-2"
                >
                  First Name *
                </label>
                <input
                  type="text"
                  id="first"
                  name="first"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                />
              </div>{" "}
              <div className="mb-4">
                <label
                  htmlFor="last"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Last Name *
                </label>
                <input
                  type="text"
                  id="last"
                  name="last"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="position"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Position Applied For *
                </label>
                <select
                  id="position"
                  name="position"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                >
                  <option value=""> Select Position</option>
                  <option>Operations</option>
                  <option>Software Developer</option>
                  <option>Business Development</option>
                  <option>Back Office</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="mobile"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Mobile *
                </label>
                <input
                  type="tel"
                  id="mobile"
                  name="mobile"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="max-w-2xl mx-auto">
                <div className="mb-6 ">
                  <label
                    htmlFor="resume"
                    className=" text-lg font-medium text-gray-800 mb-1"
                  >
                    Upload Resume *
                  </label>
                  <input
                    type="file"
                    id="resume"
                    name="resume"
                    accept="resume/*"
                    className="w-full border border-gray-400 p-1 rounded-lg focus:outline-none focus:border-blue-400"
                    required
                  />
                  <p className="text-end">upload only docx/doc/pdf file..</p>
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="gender"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Gender
                </label>
                <select
                  id="gender"
                  name="gender"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                >
                  <option value="">Select gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="mb-2.5 block text-base font-medium text-[#07074D]"
                >
                  Date Of Birth *
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-gray-400 bg-white py-1.5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="experience"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Experience *
                </label>
                <select
                  id="experience"
                  name="experience"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                >
                  <option value=""> Select Experience</option>
                  <option>Fresher</option>
                  <option>Less than 1 Year</option>
                  <option>1 to 2 Years</option>
                  <option>More than 2 Years</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  rows={3}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="remarks"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Remarks *
                </label>
                <textarea
                  id="remarks"
                  name="remarks"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  rows={3}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="skills"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Skills *
                </label>
                <textarea
                  id="skills"
                  name="skills"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  rows={3}
                  required
                ></textarea>
              </div>
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-10">
            <div className="mb-4">
                <label
                  htmlFor="payment"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Qualification *
                </label>
                <select
                  id="payment"
                  name="payment"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400 payment"
                  required
                >
                  <option value="">--</option>
                  <option>Yes</option>
                  <option>No</option>
                </select>

                <div className="SumoSelect sumo_qualification[]" tabIndex={0}>
                  <select
                    name="qualification[]"
                    className="form-control SlectBox SumoUnder"
                    id="qualification"
                    multiple
                    tabIndex={-1}
                  >
                    <option value="MBA">MBA</option>
                    <option value="MCA">MCA</option>
                    <option value="M.tech">M.tech</option>
                    <option value="B.tech">B.tech</option>
                    <option value="BCA">BCA</option>
                    <option value="B.sc">B.sc</option>
                    <option value="Other">Other</option>
                  </select>
                  <p className="CaptionCont SelectBox" title="Select Here">
                    <span className="placeholder">Select Here</span>
                    <label>
                      <i></i>
                    </label>
                  </p>
                  <div className="optWrapper multiple">
                    <ul className="options">
                      <li className="opt">
                        <span>
                          <i></i>
                        </span>
                        <label>MBA</label>
                      </li>
                      <li className="opt">
                        <span>
                          <i></i>
                        </span>
                        <label>MCA</label>
                      </li>
                      <li className="opt">
                        <span>
                          <i></i>
                        </span>
                        <label>M.tech</label>
                      </li>
                      <li className="opt">
                        <span>
                          <i></i>
                        </span>
                        <label>B.tech</label>
                      </li>
                      <li className="opt">
                        <span>
                          <i></i>
                        </span>
                        <label>BCA</label>
                      </li>
                      <li className="opt">
                        <span>
                          <i></i>
                        </span>
                        <label>B.sc</label>
                      </li>
                      <li className="opt">
                        <span>
                          <i></i>
                        </span>
                        <label>Other</label>
                      </li>
                    </ul>
                    <div className="MultiControls">
                      <p className="btnOk">OK</p>
                      <p className="btnCancel">Cancel</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Enter Captcha<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="border border-gray-400 p-2 w-48 rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="salary"
              className="block text-gray-700 font-medium mb-2"
            >
              Expected Salary<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="salary"
              name="salary"
              className="border border-gray-400 p-2 w-48 rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
          </div>
            </div>
             
          </div>

          
          
          <div className="mb-4">
            <input type="checkbox" className="form-checkbox" required />
            &nbsp;&nbsp;I Agree To The Terms &amp; Conditions.
          </div>
          <div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
