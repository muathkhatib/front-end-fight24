"use client";
import React, { useEffect, useCallback } from "react";
import Image from "next/image";
import { useSelector, useDispatch } from "react-redux";

import { openContentBanner, navLogo } from "@/assets/images";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

import { toggleModal as paymentToggleModal } from "@/store/Features/payment/paymentSlice";
import { toggleModal as authToggleModal } from "@/store/Features/auth/authSlice";
import { dateHandler } from "@/utils";

import { RootState } from "@/store";

export default function EventItem({ data }: any) {
  const { authInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const { year, month, day, hour, minutes } = dateHandler(
    data?.fields.matchDate
  );

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
  console.log({ data });
  return (
    <div className="container">
      <img
        src={`https:${data.fields.articleImage.fields.file.url}`}
        alt="111"
        className="w-full h-[80vh] object-cover"
      />
      <p className="my-4 leading-[21px]">{data.fields.description}</p>

      <h1 className="font-black text-5xl mb-4 mt-6">{data.fields.title}</h1>

      <div className="font-bold text-2xl">
        {day}.{month}.{year} {hour}:{minutes} CET
      </div>

      <div className="mt-6">
        {data.fields.availability && (
          <span className="text-gray">
            AVAILABLE: {data.fields.availability}
          </span>
        )}
        {data.fields.reLivePrice && data.fields.onDemand48hrs ? (
          <div className="flex text-gray">
            {data.fields.reLivePrice && (
              <h5>
                RE-LIVE NEXT DAY:{" "}
                <span className="text-white">{data.fields.reLivePrice}</span>
              </h5>
            )}
            {data.fields.onDemand48hrs && (
              <h5 className="mx-4">
                ON DEMAND (48H+):{" "}
                <span className="text-white">{data.fields.onDemand48hrs}</span>
              </h5>
            )}
          </div>
        ) : null}
      </div>

      <h4 className="font-bold text-2xl my-6">
        nur {data.fields.ticketPrice} EUR
      </h4>
      <div className="flex justify-between xs:flex-col md:flex-row xs:items-start md:items-end">
        <button
          onClick={buyButtonHandler}
          className="px-[125px] py-[18px] font-bold  text-2xl text-base-black bg-base-yellow rounded-lg xs:mb-4 md:mb-0"
        >
          KAUFEN LIVE
        </button>
        <div className="flex items-center">
          <div className="flex">
            <span className="text-gray mr-4">Teilen</span>
            <FaTwitter className="w-6 h-6  mr-4 text-gray" />
            <FaFacebookF className="w-6 h-6  mr-4 text-gray" />
            <FaInstagram className="w-6 h-6 mr-6 text-gray" />
          </div>
          <div className="w-[138px] h-[47px]">
            <Image
              src={navLogo}
              alt="Fight24 Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
