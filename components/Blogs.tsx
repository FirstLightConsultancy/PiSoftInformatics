"use client";
import * as React from "react";
import { Card, CardContent } from "@/components/ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function Blogs() {
  return (
    <div className="text-center font-bold lg:p-28 bg-gradient-to-r from-blue-500 to-blue-200 text-white">
      <h1 className="font-extrabold text-[10px] md:text-[40px] leading-10 md:leading-normal">
        Blogs
      </h1>

      <p className=" text-xl md:text-2xl font-bold pb-10">
        Know relevant updates, before its too late
      </p>

      <Carousel
        plugins={[
          Autoplay({
            delay: 2800,
          }),
        ]}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full max-w-full px-1 pb-4"
      >
        <CarouselContent>
          {Array.from({ length: 10 }).map((_, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2  md:basis-1/2 lg:basis-1/3"
            >
              <Card>
                {/* <div className="rounded overflow-hidden shadow-lg">

            <a href="#"></a>
            <div className="relative">
                <a href="#">
                    <img className="w-full"
                        src="https://images.pexels.com/photos/196667/pexels-photo-196667.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Photos
                    </div>
                </a>

                <a href="!#">
                    <div
                        className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <span className="font-bold">27</span>
                        <small>March</small>
                    </div>
                </a>
            </div>
            <div className="px-6 py-4">

                <a href="#"
                    className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best
                    View in Newyork City</a>
                <p className="text-gray-500 text-sm">
                    The city that never sleeps
                </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
                <span href="#" className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row items-center">
                    <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                        style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <g>
                            <g>
                                <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256
			c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128
			c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                            </g>
                        </g>
                    </svg>
                    <span className="ml-1">6 mins ago</span></span>
            </div>
        </div>
        <div className="rounded overflow-hidden shadow-lg">
            <a href="#"></a>
            <div className="relative">
                <a href="#">
                    <img className="w-full"
                        src="https://images.pexels.com/photos/1653877/pexels-photo-1653877.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=1&amp;w=500"
                        alt="Sunset in the mountains"/>
                    <div
                        className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25">
                    </div>
                </a>
                <a href="#!">
                    <div
                        className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Photos
                    </div>
                </a>

                <a href="!#">
                    <div
                        className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <span className="font-bold">20</span>
                        <small>March</small>
                    </div>
                </a>
            </div>
            <div className="px-6 py-4">

                <a href="#"
                    className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out">Best
                    Pizza in Town</a>
                <p className="text-gray-500 text-sm">
                    The collection of best pizza images in Newyork city
                </p>
            </div>
            <div className="px-6 py-4 flex flex-row items-center">
                <span href="#"
                    className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                    <svg height="13px" width="13px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512"
                        style="enable-background:new 0 0 512 512;" xml:space="preserve">
                        <g>
                            <g>
                                <path
                                    d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z">
                                </path>
                            </g>
                        </g>
                    </svg>
                    <span className="ml-1">3 mins read</span></span>
            </div>
        </div> */}
                <div className="rounded overflow-hidden shadow-lg">
                  <a href="#"></a>
                  <div className="relative">
                    <a href="#">
                      <img
                        className="w-full"
                        src="/assets/images/blog.jpg"
                        alt="Sunset in the mountains"
                      />
                      <div className="hover:bg-transparent transition duration-300 absolute bottom-0 top-0 right-0 left-0 bg-gray-900 opacity-25"></div>
                    </a>
                    <a href="#!">
                      <div className="absolute bottom-0 left-0 bg-indigo-600 px-4 py-2 text-white text-sm hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        Photos
                      </div>
                    </a>

                    <a href="!#">
                      <div className="text-sm absolute top-0 right-0 bg-indigo-600 px-4 text-white rounded-full h-16 w-16 flex flex-col items-center justify-center mt-3 mr-3 hover:bg-white hover:text-indigo-600 transition duration-500 ease-in-out">
                        <span className="font-bold">15</span>
                        <small>April</small>
                      </div>
                    </a>
                  </div>
                  <div className="px-6 py-4">
                    <a
                      href="#"
                      className="font-semibold text-lg inline-block hover:text-indigo-600 transition duration-500 ease-in-out"
                    >
                      Best IT Company
                    </a>
                    <p className="text-gray-500 text-sm">
                      Expert guidance to optimize your IT infrastructure and
                      improve overall performance.{" "}
                    </p>
                  </div>
                  <div className="px-6 py-4 flex flex-row items-center">
                    <span className="py-1 text-sm font-regular text-gray-900 mr-1 flex flex-row justify-between items-center">
                      <svg
                        height="13px"
                        width="13px"
                        version="1.1"
                        id="Layer_1"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g>
                          <g>
                            <path d="M256,0C114.837,0,0,114.837,0,256s114.837,256,256,256s256-114.837,256-256S397.163,0,256,0z M277.333,256 c0,11.797-9.536,21.333-21.333,21.333h-85.333c-11.797,0-21.333-9.536-21.333-21.333s9.536-21.333,21.333-21.333h64v-128 c0-11.797,9.536-21.333,21.333-21.333s21.333,9.536,21.333,21.333V256z"></path>
                          </g>
                        </g>
                      </svg>
                      <span className="ml-1">6 mins read</span>
                    </span>
                  </div>
                </div>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        {/* <CarouselPrevious /> */}
        {/* <CarouselNext /> */}
      </Carousel>
    </div>
  );
}
