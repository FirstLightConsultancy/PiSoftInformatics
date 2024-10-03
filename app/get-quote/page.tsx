import React from "react";

export default function GetQuote() {
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
          <h1 className="text-5xl font-bold leading-tight mb-4">Get Quote</h1>
        </div>
      </div>
      <div className=" container bg-white border rounded-lg px-8 py-6 mx-auto my-24 max-w-7xl">
        <form>
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-x-10">
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

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Quick overview of your project: *
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  rows={5}
                ></textarea>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="budget"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Do you have a budget in mind? *
                </label>
                <select
                  id="budget"
                  name="budget"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                >
                  <option value=""> </option>
                  <option value="Rs5,000 to Rs10,000">
                    
                    ₹5,000 - ₹10,000
                  </option>
                  <option value="Rs11,000 to Rs20,000">
                    
                    ₹11,000 - ₹20,000
                  </option>
                  <option value=" Rs21,000 to Rs30,000">
                    
                    ₹21,000 - ₹30,000
                  </option>
                  <option value="Rs31,000 to Rs40,000">
                    
                    ₹31,000 - ₹40,000
                  </option>
                  <option value="Rs41,000 to Rs50,000">
                    
                    ₹41,000 - ₹50,000
                  </option>
                  <option value="Rs51,000 or above"> ₹51,000 or above </option>
                  <option value="Undetermined"> Undetermined </option>
                </select>
              </div>
            </div>

            <div>
              <div className="mb-4">
                <label
                  htmlFor="start"
                  className="block text-gray-700 font-medium mb-2"
                >
                  How soon are you ready to start?: *
                </label>
                <select
                  id="start"
                  name="start"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                >
                  <option value=""> </option>
                  <option value="Immediately"> Immediately </option>
                  <option value="1-2 Weeks"> 1-2 Weeks </option>
                  <option value="2-4 Weeks"> 2-4 Weeks </option>
                  <option value="4-8 Weeks"> 4-8 Weeks </option>
                  <option value="8+   Weeks"> 8+ Weeks </option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="webhosting"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Do you require web-hosting?: *
                </label>
                <select
                  id="webhosting"
                  name="webhosting"
                  className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
                  required
                >
                  <option value="">---</option>
                  <option value="Yes, I need web-hosting service">
                    Yes, I need web-hosting service
                  </option>
                  <option value="No, I currently have a web-hosting provider">
                    No, I currently have a web-hosting provider
                  </option>
                  <option value="Not sure, please send me more information">
                    Not sure, please send me more information
                  </option>
                  <option value="Others">Others</option>
                </select>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="webhosting"
                  className="block text-gray-700 font-medium mb-2"
                >
                  Services you require: *
                </label>
                <div className="form-group  px-5">
                  <input
                    className="form-checkbox"
                    id="input_9_1"
                    name="services[]"
                    value="Web design &amp; development"
                    type="checkbox"
                    required
                  />
                  <label id="label_input_9_0" htmlFor="input_9_1">
                    
                    Web design &amp; development
                  </label>
                </div>
                <div className="form-group  px-5">
                  <input
                    className="form-checkbox"
                    id="input_9_6"
                    name="services[]"
                    value="Application"
                    type="checkbox"
                  />
                  <label id="label_input_9_1" htmlFor="input_9_6">
                    
                    Mobile Application
                  </label>
                </div>
                <div className="form-group  px-5">
                  <input
                    className="form-checkbox"
                    id="input_9_7"
                    name="services[]"
                    value="Application"
                    type="checkbox"
                  />
                  <label id="label_input_9_1" htmlFor="input_9_7">
                    
                    Web Application
                  </label>
                </div>
                <div className="form-group  px-5">
                  <input
                    className="form-checkbox"
                    id="input_9_2"
                    name="services[]"
                    value="E-commerce store"
                    type="checkbox"
                  />
                  <label id="label_input_9_1" htmlFor="input_9_2">
                    
                    E-commerce store
                  </label>
                </div>
                <div className="form-group  px-5">
                  <input
                    className="form-checkbox"
                    id="input_9_3"
                    name="services[]"
                    value="Search engine optimization"
                    type="checkbox"
                  />
                  <label id="label_input_9_2" htmlFor="input_9_3">
                    
                    Search engine optimization
                  </label>
                </div>
                <div className="form-group  px-5">
                  <input
                    className="form-checkbox"
                    id="input_9_4"
                    name="services[]"
                    value="Social Media"
                    type="checkbox"
                  />
                  <label id="label_input_9_4" htmlFor="input_9_4">
                    
                    Social Media
                  </label>
                </div>
                <div className="form-group  px-5">
                  <input
                    className="form-checkbox"
                    id="input_9_5"
                    name="services[]"
                    value="Others"
                    type="checkbox"
                  />
                  <label id="label_input_9_4" htmlFor="input_9_5">
                    Others
                  </label>
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
              className="border border-gray-400 p-2 w-full rounded-lg focus:outline-none focus:border-blue-400"
              required
            />
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
