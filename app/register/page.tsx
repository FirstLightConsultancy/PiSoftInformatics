import React from "react";

export default function Register() {
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
          <h1 className="text-5xl font-bold leading-tight mb-4">Register</h1>
        </div>
      </div>
      <div className=" container bg-white border rounded-lg px-8 py-6 mx-auto my-24 max-w-7xl">
        <form>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
            <div>
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Registration Date *
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-gray-400 bg-white py-1.5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
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
              <div className="mb-4">
                <label
                  htmlFor="date"
                  className="mb-3 block text-base font-medium text-[#07074D]"
                >
                  Date Of Birth *
                </label>
                <input
                  type="date"
                  name="date"
                  id="date"
                  className="w-full rounded-md border border-gray-400 bg-white py-1.5 px-6 text-base font-medium text-[#6B7280] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="program"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Training Program *
                </label>
                <select
                  id="program"
                  name="program"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                >
                  <option value="">Select Training Program</option>
                  <option>6 Weeks Industrial Training</option>

                  <option>6 Months Industrial Training</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="address"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Permanent Address *
                </label>
                <textarea
                  id="address"
                  name="address"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  rows={5}
                  required
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="details"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Pursuing Details *
                </label>
                <textarea
                  id="details"
                  name="details"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  rows={5}
                  required
                ></textarea>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="relativename"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Father&apos;s/Husband&apos;s Name *
                </label>
                <input
                  type="text"
                  id="relativename"
                  name="relativename"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                />
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
                  htmlFor="module"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Module *
                </label>
                <select
                  id="module"
                  name="module"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                >
                  <option value="">Select Module</option>
                  <option>PHP</option>
                  <option>JAVA</option>
                  <option>Android</option>
                  <option>Python</option>
                  <option>Full Stack Development</option>
                  <option>Software Testing</option>
                  <option>Digital Marketing &amp; SEO </option>
                  <option>Data Science</option>
                  <option>Artifical Intelegence </option>
                  <option>Machine Learning </option>
                  <option>Business Analysis </option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="correspondenceaddress"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Correspondence Address
                </label>
                <textarea
                  id="correspondenceaddress"
                  name="correspondenceaddress"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  rows={5}
                ></textarea>
              </div>
              

              <div className="mb-4">
                <label
                  htmlFor="payment"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Quick Payment *
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
              </div>
            </div>
          </div>

          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Terms & Consitions
            </label>
            <ul className="list-disc list-inside">
              <li>All disputes subjects to Mohali jurisdiction only.</li>
              <input type="checkbox" className="career" required />
              &nbsp;&nbsp;I Agree To The Terms &amp; Conditions.
            </ul>{" "}
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
