"use client";
import Image from "next/image";
import { useEffect, useRef } from "react";

interface Target {
  element: HTMLElement | null;
  count: number;
  suffix: string;
}

const animateCountUp = (target: Target, duration: number) => {
  let currentCount = 0;
  const increment = Math.ceil(target.count / (duration / 10));

  const interval = setInterval(() => {
    currentCount += increment;
    if (currentCount >= target.count) {
      clearInterval(interval);
      currentCount = target.count;
      if (target.element) {
        target.element.textContent = currentCount + target.suffix;
      }
    } else if (target.element) {
      target.element.textContent = currentCount.toString();
    }
  }, 10);
};

export default function AboutUs() {
  const starsCountRef = useRef<HTMLDivElement>(null);
  const downloadsCountRef = useRef<HTMLDivElement>(null);
  const sponsorsCountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets: Target[] = [
      { element: starsCountRef.current, count: 50, suffix: "+" },
      { element: downloadsCountRef.current, count: 350, suffix: "+" },
      { element: sponsorsCountRef.current, count: 300, suffix: "+" },
    ];

    const maxCount = Math.max(...targets.map((target) => target.count));

    targets.forEach((target) => {
      animateCountUp(target, maxCount / 1); // Adjust duration based on max count
    });
  }, []);

  return (
    <div>
      <section
        className="pt-10 overflow-hidden dark:bg-gray-800 md:pt-0 sm:pt-16 2xl:pt-16 py-24"
        style={{
          backgroundImage:
            'url("/assets/images/about-us-bg.jpg")',
          backgroundSize: "cover",
          backgroundAttachment: "fixed", // The key to the parallax effect
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "100vh",
          width: "100%",
        }}
      >
        {/* <div className="mx-auto max-w-7xl"> */}
        <div className="mx-auto max-w-[1350px]">
          <h2 className="text-3xl pb-10 text-center font-bold leading-tight text-white dark:text-white sm:text-4xl lg:text-5xl">
            {" "}
            <span className="relative inline-block  pb-12">
              {/* <span className="absolute inline-block w-full bottom-0.5 h-2 bg-yellow-300 dark:bg-gray-900"></span> */}
              <span className="relative"> About Us</span>
            </span>
          </h2>
          <div className="w-full max-w-[1550px] mx-auto">
            <blockquote className="relative grid items-center bg-white shadow-2xl md:grid-cols-3 rounded-xl">
              <Image
                alt="About Us"
                className="hidden object-cover w-full h-full rounded-l-xl md:block"
                style={{
                  clipPath: "polygon(0 0%, 100% 0%, 75% 100%, 0% 100%)",
                }}
src="/assets/images/about-us.jpg"              />

              <article className="relative p-6 md:p-8 md:col-span-2">
                <svg
                  className="absolute top-0 right-0 hidden w-28 h-28 -mt-12 -mr-12 text-primary-600 md:block"
                  width="256"
                  height="256"
                  viewBox="0 0 256 256"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
                    stroke="currentColor"
                    stroke-width="8"
                  ></path>
                </svg>

                <div className="space-y-8">
                  <svg
                    className="absolute rotate-180 top-0 left-0 hidden w-28 h-28 -mt-12 -ml-24 text-primary-600 md:block"
                    width="256"
                    height="256"
                    viewBox="0 0 256 256"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M65.44 153.526V149.526H61.44H20.48C11.3675 149.526 4 142.163 4 133.105V51.4211C4 42.3628 11.3675 35 20.48 35H102.4C111.513 35 118.88 42.3628 118.88 51.4211V166.187C118.88 195.935 95.103 220.165 65.44 220.979V153.526ZM198.56 153.526V149.526H194.56H153.6C144.487 149.526 137.12 142.163 137.12 133.105V51.4211C137.12 42.3628 144.487 35 153.6 35H235.52C244.633 35 252 42.3628 252 51.4211V166.187C252 195.935 228.223 220.165 198.56 220.979V153.526Z"
                      stroke="currentColor"
                      stroke-width="8"
                    ></path>
                  </svg>
                  <p className="text-base sm:leading-relaxed md:text-xl">
                    Pisoft Informatics Pvt. Ltd., based in Mohali (Punjab), is a
                    rapidly growing IT company specializing in ERP solutions,
                    software development, website development, design and
                    implementation, web services, networking, AMC’s, and
                    online/offline technical support. Our team of young,
                    competitive professionals, equipped with the latest
                    infrastructure, delivers dedicated, high-end solutions
                    tailored to our clients needs.
                    <br />
                    <br /> We pride ourselves on our user-friendly products and
                    proactive approach, maintaining strong communication and
                    follow-up throughout the project lifecycle, from requirement
                    gathering and analysis to design, development, and testing.
                    <br />
                    <br />
                  </p>

                  <button className="ml-64 justify-center bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 hover:scale-110 inline-block">
                    <i className="fas fa-rocket mr-2"></i>Explore Our Services
                  </button>
                </div>
              </article>
            </blockquote>
          </div>
        </div>
      </section>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
      />
      <div id="about" className="relative overflow-hidden bg-blue-700">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 lg:max-w-2xl lg:w-full bg-blue-600">
            <svg
              className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 transform translate-x-1/2"
              fill="none"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              aria-hidden="true"
            >
              <polygon points="50,0 100,0 50,100 0,100"></polygon>
            </svg>

            <div className="mx-auto text-center  dark:bg-gray-900 -ml-28 py-24 text-white">
              <h2 className="text-3xl font-bold leading-9 dark:text-white sm:text-4xl sm:leading-10">
                OUR ACHEVEMENT in 9+ YEARS
              </h2>
              <p className="mt-3 text-xl leading-7 text-white dark:text-gray-400 sm:mt-4">
                We’ve established over 100 long-term partnerships, working
                hand-in-hand with
                <br /> our clients to achieve their business goals.
              </p>
              <div className="mt-10 dark:bg-gray-900">
                <div className="relative">
                  <div className="absolute inset-0 h-1/2 dark:bg-gray-900"></div>
                  <div className="relative max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto  pb-12 justify-center">
                      <dl className="bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg rounded-xl p-4 shadow-2xl dark:bg-gray-800  sm:grid sm:grid-cols-3">
                        <div className="flex flex-col p-6 border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-r transform transition duration-500 hover:scale-125">
                          <dt
                            className="order-2 mt-2 text-lg font-medium leading-6 dark:text-gray-400"
                            id="item-1"
                          >
                            Working Employees
                          </dt>
                          <dd
                            className="order-1 text-5xl font-bold leading-none dark:text-indigo-100"
                            aria-describedby="item-1"
                            id="starsCount"
                            ref={starsCountRef}
                          >
                            0
                          </dd>
                        </div>
                        <div className="flex flex-col p-6 border-t border-b border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l sm:border-r transform transition duration-500 hover:scale-125">
                          <dt className="order-2 mt-2 text-lg font-medium leading-6 dark:text-gray-400">
                            Complete Projects
                          </dt>
                          <dd
                            className="order-1 text-5xl font-bold leading-none dark:text-indigo-100"
                            id="downloadsCount"
                            ref={downloadsCountRef}
                          >
                            0
                          </dd>
                        </div>
                        <div className="flex flex-col p-6 border-t border-gray-100 dark:border-gray-700 sm:border-0 sm:border-l transform transition duration-500 hover:scale-125">
                          <dt className="order-2 mt-2 text-lg font-medium leading-6 dark:text-gray-400">
                            Happy Customers
                          </dt>
                          <dd
                            className="order-1 text-5xl font-bold leading-none dark:text-indigo-100"
                            id="sponsorsCount"
                            ref={sponsorsCountRef}
                          >
                            0
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <Image
            className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="/assets/images/our-achievement.jpg"
            alt="Statistics"
             layout="fill"

          />
        </div>
        {/* <script>
    const targets = [
      { element: document.getElementById('starsCount'), count: 4670, suffix: '+' },
      { element: document.getElementById('downloadsCount'), count: 80000, suffix: '+' },
      { element: document.getElementById('sponsorsCount'), count: 100, suffix: '+' }
    ];
  
    // Find the maximum count among all targets
    const maxCount = Math.max(...targets.map(target => target.count));
  
    // Function to animate count-up effect
    function animateCountUp(target, duration) {
      let currentCount = 0;
      const increment = Math.ceil(target.count / (duration / 10));
  
      const interval = setInterval(() => {
        currentCount += increment;
        if (currentCount >= target.count) {
          clearInterval(interval);
          currentCount = target.count;
          target.element.textContent = currentCount + target.suffix;
        } else {
          target.element.textContent = currentCount;
        }
      }, 10);
    }
  
    // Animate count-up for each target with adjusted duration
    targets.forEach(target => {
      animateCountUp(target, maxCount / 100); // Adjust duration based on max count
    });
  </script> */}
      </div>
    </div>
  );
}
