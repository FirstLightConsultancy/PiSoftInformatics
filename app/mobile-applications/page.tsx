import React from "react";

export default function MobileApplications() {
  return (
    <div>
      <div className="relative h-[400px] text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
          src="/assets/images/breadcrumb.jpg"
          alt="Background Image"
            className="object-cover object-center w-full"
          />
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>

        <div className="relative flex flex-col justify-center items-center h-full text-center">
          <h1 className="text-5xl font-bold leading-tight pb-4">
            Mobile Applications
          </h1>
        </div>
      </div>

      <div className="flex flex-wrap text-white">
        <div className="w-full sm:w-8/12  bg-gray-800">
          <div className="container mx-auto h-full sm:p-10">
            <header className="container px-4 lg:flex mt-10 items-center h-full lg:mt-0">
              <div className="w-full">
                <h1 className="text-4xl lg:text-6xl font-bold">
                  Crafting innovative
                  <span className="text-green-300"> apps </span>
                  that bring ideas to life, right at your
                  <span className="text-green-300"> fingertips.</span>
                </h1>
                <div className="w-20 h-2 bg-green-300 my-4"></div>
                <p className="text-xl mb-10">
                  The use of Android-based smart phones is booming, with more
                  than 200,000 Android apps being already developed. The Android
                  mobile phone market is growing at an impressive rate of 32 per
                  cent every month, with new handsets being released all the
                  time. It is the most revolutionary technology bundled with
                  Android SDK. And it includes APIs, debugging tools, handset
                  emulator and sample code. Plus as it is an open source
                  platform, Android facilitate in making wide ranges of
                  application for utility and business practices. Android
                  Utility Applications help in extending the functional
                  capability of the Android phone by providing added features
                  for end users.
                </p>

                <p className="text-xl">
                  Only experienced & skillful programmers can make the best use
                  of Android SDK for developing cutting-edge Android Utility
                  Applications. Our Android developers&apos; team uses latest
                  development technologies, Java and Android framework for
                  creation of custom applications for Smart phones, PDAs, Pocket
                  PC and other mobile devices. Having multitasking and
                  multithreaded environment, Android helps developers have
                  significantly more control over things like an application&apos;s
                  appearance and ultimate capabilities. So developing Games and
                  entertainment application on Android platform always requires
                  skillful expertise that our Android developers&apos; team carries.
                </p>
              </div>
            </header>
          </div>
        </div>
        <img
          // src="/assets/images/erp/erp.jpg"
          src="https://img.freepik.com/free-psd/phone-x-hand-phone-x-was-created-developed-by-apple-inc_1142-53211.jpg?t=st=1727342113~exp=1727345713~hmac=33aaa3d267ee05d11d1a9b4818e1af5035006a9be8b70e02191c2aac54ec7f29&w=360"
          alt="Background Image"
          className="w-full h-36 object-cover sm:h-screen sm:w-4/12"
        />
      </div>
    </div>
  );
}
