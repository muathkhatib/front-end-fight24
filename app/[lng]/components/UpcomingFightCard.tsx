import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShareIcon, ClockIcon } from "@heroicons/react/24/outline";

import { streamCardItem } from "../assets/images";

interface Props {
  key: number;
  date?: string;
  title?: string;
  price?: string;
}

function UpcomingFightCard({
  date = "20 May 2023 19:00:00 GMT",
  title = "ELI MUNGANGA VS. HAMOYOUN SALEHI",
  price = "9,95",
}: Props) {
  const d = new Date(Date.parse(date));
  const day = d.getDate();
  const monthNum = d.getMonth() + 1;
  const year = d.getFullYear().toString().slice(-2);
  const time = d.toLocaleTimeString([], { timeStyle: "short", hour12: false });

  return (
    <div className="flex-shrink-0 border border-light-gray rounded-lg overflow-hidden w-[296px] mr-2 pb-2 h-[324px] ">
      <div className="h-1/2">
        <Image src={streamCardItem} alt="Card item name" />
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
        <h3 className="font-bold text-2xl">{title}</h3>
        <div className="flex justify-between mt-2">
          <Link
            href="#"
            className="bg-base-yellow py-2 px-5 text-base-black rounded"
          >
            Kaufen
          </Link>
          <span className="text-base-yellow"> nur {price} EUR</span>
          <ShareIcon className="w-4 text-light-gray" />
        </div>
      </div>
    </div>
  );
}

export default UpcomingFightCard;
