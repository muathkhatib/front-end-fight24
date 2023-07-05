"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import { useCountdown } from "@/hooks/useCountDown";
import useBreakpoints from "@/hooks/useBreakpoints";
import { toggleModal as paymentToggleModal } from "@/store/Features/payment/paymentSlice";
import { toggleModal as authToggleModal } from "@/store/Features/auth/authSlice";

import { RootState } from "@/store";
import { dateHandler } from "@/utils";

interface Props {
  item: {
    sys: {
      id: string;
    };
    fields: {
      matchDate: string;

      articleImage: {
        fields: {
          file: {
            url: string;
          };
        };
      };
      title: string;
      addressName: string;
      ticketPrice: number;
    };
  };
}

function CarouselChild({ item }: Props): JSX.Element {
  const { authInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const date = new Date(Date.parse(item.fields.matchDate));
  const [days, hours, minutes, seconds] = useCountdown(date);
  const { isMd, isLg } = useBreakpoints();
  const {
    year,
    month,
    day,
    hour,
    minutes: handledMinutes,
  } = dateHandler(item.fields.matchDate);

  const buyButtonHandler = useCallback(
    (e: any) => {
      e.preventDefault();
      if (authInfo.email) {
        return dispatch(paymentToggleModal());
      }
      return dispatch(authToggleModal());
    },
    [authInfo.email, dispatch]
  );

  return (
    <>
      <div
        className="bg-cover md:bg-80% xl:bg-80% 2xl:bg-80% xs:h-[80vh] flex bg-local bg-no-repeat bg-right"
        style={{
          backgroundImage: `url(https:${item.fields.articleImage.fields.file.url})`,
          backgroundSize: "cover",
        }}
      >
        <div className="h-full w-full flex items-center justify-between banner-gradient">
          <div className="xs:pl-12 lg:pl-[100px] xs:pr-4 md:pr-8 xs:w-full lg:w-2/5 h-full flex flex-col xs:justify-end md:justify-center lg:justify-center xs:items-start md:items-center lg:items-start">
            <h1 className="font-black text-5xl text-base-yellow">
              {item.fields.title}
            </h1>
            <h3 className="text-2xl font-bold my-5 mx-0">
              {day}.{month}.{year} {hour}:{handledMinutes} CET
            </h3>
            {isMd ||
              (isLg && <h5 className="w-4/12">{item.fields.addressName}</h5>)}
            <Link
              className="border border-base-gray rounded mt-4 w-[97px] h-[42px] flex items-center justify-center"
              href={`/events/${item?.sys?.id}`}
            >
              Mehr
            </Link>
          </div>
        </div>
      </div>

      <div className="xs:bg-none lg:bg-base-yellow mt-14">
        <div className="xl:pl-[70px] lg:pr-8 h-full flex xs:flex-col lg:flex-row justify-between">
          <div className="flex items-center xs:justify-center lg:justify-start  xs:w-full lg:w-2/5 xs:text-white lg:text-base-black px-8">
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

          <div className="xs:w-full xs:my-4  lg:w-3/5 bg-base-yellow flex xs:flex-col-reverse lg:flex-row items-center justify-between xs:px-2 lg:px-0 py-3">
            <button
              onClick={buyButtonHandler}
              className="bg-base-black font-bold text-2xl rounded-lg px-[125px] py-[19px]"
            >
              LIVE KAUFEN
            </button>

            <h2 className="text-base-black font-bold text-2xl xs:mb-3 lg:mb-0">
              nur {item.fields.ticketPrice} EUR
            </h2>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarouselChild;
