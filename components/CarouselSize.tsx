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

export function CarouselSize() {
  return (<div className="text-center font-bold py-4">
          <p >Click on Any Booklet to Download</p>
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
          <CarouselItem key={index} className="basis-1/3  md:basis-1/3 lg:basis-1/12">
            <Card>
              {/* <CardContent className="flex items-center justify-center"> */}
              {/* <span className="text-3xl font-semibold">{index + 1}</span> */}
              <Image
                src="https://www.neusourcestartup.com/Content/v2/img/booklet/v1/Booklet16coverpag.jpeg"
                className="lg:w-[800px] w-[200px]"
                alt="CarouselSize"
                 layout="fill"
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
