"use client";
import React from "react";
import { Carousel } from "flowbite-react";
import CarouselChild from "./CarouselChild";
import { Flowbite } from "flowbite-react";

const customTheme = {
  carousel: {
    indicators: {
      active: {
        off: "bg-white hover:bg-white dark:bg-gray-800/50 dark:hover:bg-gray-800",
        on: "bg-base-yellow dark:bg-gray-800",
      },
      base: "h-2 w-6",
      wrapper:
        "absolute xs:bottom-64 md:bottom-80 lg:bottom-44 xs:left-[30%] sm:left-[20%] md:left-[50%] lg:left-[16%] xl:left-[11%] flex -translate-x-1/2 space-x-3",
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
        <div className="">
          <Carousel>
            {upComingFights
              .filter((e: any) => !!e.fields.bannerItem)
              .map((item: any) => (
                <CarouselChild key={item.sys.id} item={item} />
              ))}
          </Carousel>
        </div>
      </Flowbite>
    </>
  );
}

export default HomeBanner;
