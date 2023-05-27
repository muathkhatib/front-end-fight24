"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShareIcon, ClockIcon } from "@heroicons/react/24/outline";

interface Props {
  data: any;
}

function UpcomingFightCard({ data }: Props) {
  const d = new Date(Date.parse(data.matchDate));
  const day = d.getDate();
  const monthNum = d.getMonth() + 1;
  const year = d.getFullYear().toString().slice(-2);
  const time = d.toLocaleTimeString([], { timeStyle: "short", hour12: false });

  return (
    <div className="flex-shrink-0 border border-light-gray rounded-lg overflow-hidden w-[296px] mr-2 pb-2 h-[324px] ">
      <div className="h-1/2">
        <Image
          src={`https:${data.fightImage.fields.file.url}`}
          className="w-full h-full object-cover object-top"
          alt="Card item name"
          width={data.fightImage.fields.file.details.image.width}
          height={data.fightImage.fields.file.details.image.height}
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
        <h3 className="font-bold text-2xl">{data.title}</h3>
        <div className="flex justify-between mt-2">
          <Link
            href="#"
            className="bg-base-yellow py-2 px-5 text-base-black rounded"
          >
            Kaufen
          </Link>
          <span className="text-base-yellow"> nur {data.ticketPrice} EUR</span>
          <ShareIcon className="w-4 text-light-gray" />
        </div>
      </div>
    </div>
  );
}

export default UpcomingFightCard;
