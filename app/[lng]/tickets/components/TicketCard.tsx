"use client";
import React, { useMemo, useCallback } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";

import { dateHandler } from "@/utils";
import { toggleModal as paymentToggleModal } from "@/store/Features/payment/paymentSlice";
import { toggleModal as authToggleModal } from "@/store/Features/auth/authSlice";
import { RootState } from "@/store";

import { useTranslation } from "../../../i18n/client";

export default function TicketCard({ data, lng }: any) {
  const { authInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const { t } = useTranslation(lng, "tickets");
  const { year, month, day, hour, minutes } = useMemo(
    () => dateHandler(data.eventTime),
    []
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

  const formattedPrice = useMemo(
    () =>
      data.price.toLocaleString(undefined, {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }),
    [data.price]
  );

  return (
    <div className="border border-gray mb-20 rounded-lg overflow-hidden">
      <div className="w-full h-3/5 ">
        <img
          src={`https:${data.ticketCover?.fields?.file?.url}`}
          className="object-cover"
        />
      </div>
      <div className="p-4 flex flex-col justify-between items-start">
        <h3 className="text-base-yellow font-black text-5xl mb-2">
          {data.eventTitle}
        </h3>
        <div className="w-2/3 flex text-2xl font-bold">
          <h4>
            {year}-{month}-{day}
          </h4>
          <h4 className="mx-2">
            {hour}:{minutes}
          </h4>
        </div>
        <div className="text-gray my-2">
          <span className="mr-4">
            Einlass: {hour + data?.enteringTime}:{minutes} CET
          </span>
          <span className="mr-4">
            Beginn: {hour}:{minutes} CET
          </span>
          <span>
            Ende: {hour + data?.eventDuration}:{minutes} CET
          </span>
        </div>
        <div className="mx-w-1/3">
          <Link
            className="hover:text-base-yellow"
            href={`https://maps.google.com/?ll=${data.location.lat},${data.location.lon}`}
            target="_blank"
          >
            Sporthalle Erzhausen Heinrichstraße 40, 64390 Erzhausen
          </Link>
        </div>
        <h4 className="font-bold text-2xl my-2">{formattedPrice} EUR</h4>
        <button
          className="xs:text-base lg:text-2xl font-bold bg-base-yellow text-base-black lg:px-16 lg:py-4 xs:px-2 xs:py-1 rounded-lg"
          onClick={buyButtonHandler}
        >
          {t("buyTicket")}
        </button>
      </div>
    </div>
  );
}
