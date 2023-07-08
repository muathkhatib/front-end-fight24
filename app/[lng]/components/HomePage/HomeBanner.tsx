"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import CarouselChild from "./CarouselChild";
import { Flowbite } from "flowbite-react";

const customTheme = {
  carousel: {
    root: {
      base: "relative h-full w-full",
      leftControl:
        "absolute top-0 left-0 flex h-full items-center justify-center px-4 focus:outline-none",
      rightControl:
        "absolute top-0 right-0 flex h-full items-center justify-center px-4 focus:outline-none",
    },
    indicators: {
      active: {
        off: "bg-white hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-base-yellow dark:bg-gray-800",
      },
      base: "h-2 w-6",
      wrapper:
        "absolute xs:bottom-[30%] sm:bottom-[25%] md:bottom-[25%] lg:bottom-[25%] xs:left-[30%] sm:left-[20%] md:left-[50%] lg:left-[16%] xl:left-[11%] flex -translate-x-1/2 space-x-3",
    },
    control: {
      base: "",
      icon: "w-9 h-9",
    },
  },
};

function HomeBanner({ upComingFights }: { upComingFights: any }): JSX.Element {
  return (
    <>
      <Flowbite theme={{ theme: customTheme }}>
        {/* <div className=""> */}
        <Carousel>
          {upComingFights
            .filter((e: any) => !!e.fields.bannerItem)
            .map((item: any) => (
              <CarouselChild key={item.sys.id} item={item} />
            ))}
        </Carousel>
        {/* </div> */}
      </Flowbite>
    </>
  );
}

export default HomeBanner;
