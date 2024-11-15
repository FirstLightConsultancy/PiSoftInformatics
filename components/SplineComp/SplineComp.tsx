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
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import ImageCarouselHome from "../ImageCarousalHome/ImageCarouselHome";

export default function SplineComp() {
  const images = [
    "/assets/technologies/android.png",
    "/assets/technologies/angular.png",
    "/assets/technologies/aws.png",
    "/assets/technologies/java.png",
    "/assets/technologies/jquery.png",
    "/assets/technologies/php.png",
    "/assets/technologies/python.png",
    "/assets/technologies/swift.png",
    "/assets/technologies/wordpress.png",
  ];

  const carouselData = [
    { id: 1, title: "Android", image: "/assets/technologies/android.png" },
    { id: 2, title: "Angular", image: "/assets/technologies/angular.png" },
    { id: 3, title: "AWS", image: "/assets/technologies/aws.png" },
    { id: 4, title: "JAVA", image: "/assets/technologies/java.png" },
    { id: 5, title: "JQuery", image: "/assets/technologies/jquery.png" },
    { id: 6, title: "PHP", image: "/assets/technologies/php.png" },
    { id: 7, title: "Python", image: "/assets/technologies/python.png" },
    { id: 8, title: "Swift", image: "/assets/technologies/swift.png" },
    { id: 9, title: "Wordpress", image: "/assets/technologies/wordpress.png" },
    
  ];
  const plugin = React.useRef(
    Autoplay({ delay: 2000})
  )
  return (
    <div className="relative">
      <div className="grid lg:grid-cols-2 top-0 right-0 pl-5 bg-gray-100">
        <div className="text-black p-10">
          <h1 className="font-semibold text-6xl">
            Empowering Innovation with Cutting-Edge Tools
          </h1>
          <h3 className=" text-xl text-justify">
            <br />
            
            We leverage the latest and most advanced technologies to deliver innovative, scalable solutions tailored to your business needs. Our diverse tech stack ensures high performance, security, and flexibility in every project.
          </h3>
          
    <div className="flow-root sm:mt-20">
            <div className=" pt-3">
              <ImageCarouselHome images={images}  />
            </div>
          </div>
        </div>
        
        <section className="h-[600px] bg-black">
          <Spline scene="https://prod.spline.design/IXTSbGyJCKPpuQVy/scene.splinecode" />

        </section>
      </div>
    </div>
  );
}
