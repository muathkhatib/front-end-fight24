"use client";
import React from "react";
import { banners } from "../../assets/images";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { useCountdown } from "@/hooks/useCountDown";
import useBreakpoints from "@/hooks/useBreakpoints";

function HomeBanner(): JSX.Element {
  const dateStr = "20 Dec 2023 19:00:00 GMT";
  const date = new Date(Date.parse(dateStr));
  const [days, hours, minutes, seconds] = useCountdown(date);
  const { isMd, isLg } = useBreakpoints();

  return (
    <>
      <div
        className="sm:bg-contain lg:bg-80% xl:bg-80% 2xl:bg-80% xs:h-[80vh] lg-[500px] flex bg-local bg-no-repeat bg-right"
        style={{ backgroundImage: `url(${banners.bannerOne.src})` }}
      >
        <div className="h-full w-full flex items-center justify-between banner-gradient">
          <ChevronLeftIcon className="xs:w-9 cursor-pointer" />
          <div className="container w-full h-full flex flex-col xs:justify-end md:justify-center lg:justify-center xs:items-start md:items-center lg:items-start">
            <h1 className="font-black text-5xl text-base-yellow lg:mt-16 xs:mt-0 lg:w-3/12 xs:w-auto">
              3.BOXNACHT LANDAU
            </h1>
            <h3 className="text-2xl font-bold my-5 mx-0">
              25.02.2023 19:00 CET
            </h3>
            {isMd ||
              (isLg && (
                <h5 className="w-2/12">
                  The Ring Boxing Club München Landsberger Str. 454 Rgb 81241
                  München
                </h5>
              ))}
            <Link
              className="border border-gray rounded mt-4 py-[10px] px-[20px]"
              href="#"
            >
              Mehr
            </Link>
            <div className="flex justify-between mt-24 w-32">
              <div className="bg-base-yellow w-6 h-2  " />
              <div className="bg-white w-6 h-2" />
              <div className="bg-white w-6 h-2" />
              <div className="bg-white w-6 h-2" />
            </div>
          </div>
          <ChevronRightIcon className="xs:w-9 cursor-pointer" />
        </div>
      </div>

      <div className="xs:bg-none lg:bg-base-yellow mt-8">
        <div className="lg:container h-full flex xs:flex-col lg:flex-row justify-between">
          <div className="flex items-center  xs:w-full lg:w-2/5 xs:text-white lg:text-base-black px-8">
            <div className="flex flex-col items-center justify-center w-16 mr-8">
              <h2 className="font-black text-5xl ">{days}</h2>
              <h4 className="text-xs  "> TAGE </h4>
            </div>
            <div className="flex flex-col items-center justify-center w-16  mr-8">
              <h2 className="font-black text-5xl">{hours}</h2>
              <h4 className="text-xs  "> STUNDEN </h4>
            </div>
            <div className="flex flex-col items-center justify-center w-16  mr-8">
              <h2 className="font-black text-5xl ">{minutes}</h2>
              <h4 className="text-xs  "> MINUTEN </h4>
            </div>
            <div className="flex flex-col items-center justify-center w-16">
              <h2 className="font-black text-5xl ">{seconds}</h2>
              <h4 className="text-xs  "> SEKUNDEN </h4>
            </div>
          </div>

          <div className="xs:w-full lg:w-3/5 bg-base-yellow flex xs:flex-col-reverse lg:flex-row items-center justify-between xs:px-2 lg:px-0 py-3">
            <Link
              href="#"
              className="bg-base-black font-bold text-2xl rounded-lg px-[125px] py-[19px]"
            >
              LIVE KAUFEN
            </Link>

            <h2 className="text-base-black font-bold text-2xl xs:mb-3 lg:mb-0">
              nur 9,95 EUR
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeBanner;
