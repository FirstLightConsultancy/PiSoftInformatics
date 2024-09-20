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

export function Downloads() {
  return (<div className="text-4xl font-bold p-28">
          <p className="pb-10 text-center">Meet Our Team</p>
    <Carousel
      plugins={[
        Autoplay({
          delay: 1500,
        }),
      ]}
      opts={{
        align: "start",
        loop: true,
      }}
      className="w-full max-w-full px-1 pb-4"
    >
      <CarouselContent>
        {Array.from({ length: 25 }).map((_, index) => (
          <CarouselItem key={index} className="basis-1/3  md:basis-1/3 lg:basis-1/3">
            <Card>
              {/* <CardContent className="flex items-center justify-center"> */}
              {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
              <Image
                src="https://media.istockphoto.com/id/155145019/photo/senior-exectutive.jpg?s=612x612&w=0&k=20&c=wm3L3cDLjMLEETNrFF_zNM03w0OYJHCUBZ6TFLVT184="
                className="lg:w-[800px] w-[200px]"
                alt="Downloads"
              />
              {/* </CardContent> */}
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
