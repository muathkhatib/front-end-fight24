"use client";
import React, { useCallback, useEffect } from "react";
import Link from "next/link";
import { useSelector, useDispatch } from "react-redux";
import { ShareIcon, ClockIcon } from "@heroicons/react/24/outline";
import { toggleModal as paymentToggleModal } from "@/store/Features/payment/paymentSlice";
import { toggleModal as authToggleModal } from "@/store/Features/auth/authSlice";
import { RootState } from "@/store";
import { freeLatestVideoCardItem } from "@/assets/images";

interface Props {
  data: any;
  matchDate?: string;
}

function UpcomingFightCard({ data, matchDate }: Props) {
  const { authInfo } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  const d = new Date(Date.parse(data?.fields?.matchDate));
  const day = d.getDate();
  const monthNum = d.getMonth() + 1;
  const year = d.getFullYear().toString().slice(-2);
  const time = d.toLocaleTimeString([], { timeStyle: "short", hour12: false });

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
      <div className="flex-shrink-0 border border-dark-gray rounded-lg overflow-hidden w-[296px] mr-2 pb-2 h-[324px] ">
        <div className="h-1/2">
          <img
            src={
              data?.fields?.fightImage?.fields?.file?.url
                ? `https:${data?.fields?.fightImage?.fields?.file?.url}`
                : freeLatestVideoCardItem
            }
            className="w-full h-full object-cover object-top"
            alt="Card item name"
          />
        </div>
        <div className="h-1/2 px-2">
          <div className="flex mt-3">
            <span className="text-base-yellow">
              {day}.{monthNum}.{year}
            </span>
            <div className="flex mx-1 text-light-gray">
              <ClockIcon className="w-4 mx-1" /> {time} CET
            </div>
          </div>
          <Link
            href={`/events/${data?.sys?.id}`}
            className="font-bold text-2xl"
          >
            {data?.fields?.title}
          </Link>
          <div className="flex justify-between mt-2">
            <button
              type="button"
              className="bg-base-yellow py-2 px-5 text-base-black rounded"
              onClick={buyButtonHandler}
            >
              Kaufen
            </button>
            <span className="text-base-yellow">
              {" "}
              nur {data?.fields?.ticketPrice} EUR
            </span>
            <ShareIcon className="w-4 text-light-gray" />
          </div>
        </div>
      </div>
    </>
  );
}

export default UpcomingFightCard;
