"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShareIcon, ClockIcon } from "@heroicons/react/24/outline";

import { freeLatestVideoCardItem, playCircle } from "../assets/images";
import { classNames } from "../utils";

interface Props {
  data: any;
}

function FreeLatestVideosCard({ data }: Props) {
  return (
    <div className="flex-shrink-0 border border-light-gray rounded-lg overflow-hidden w-[296px] mr-2 pb-2 h-[324px] ">
      <div className="h-1/2 relative overflow-hidden">
        <span
          className="absolute top-0 left-0 z-10 py-1 px-3"
          style={{
            backgroundColor: data.tagColor,
            color: data.tagTextColor,
          }}
        >
          {data.tagName.toUpperCase()}
        </span>
        <Image
          src={`https:${data.previewImage.fields.file.url}`}
          alt="Card item name"
          className="absolute z-0 w-full object-contain"
          width="296"
          height="150"
        />
        <Link
          href="#"
          className="w-[fit-content] h-[fit-content] absolute left-0 right-0 top-0 bottom-0 my-auto mx-auto z-10"
        >
          <Image src={playCircle} alt="Card item name" />
        </Link>
      </div>
      <div className="h-1/2 px-2">
        <div className="flex mt-3">
          <span className="text-light-gray">{data.championName}</span>
        </div>
        <h3 className="font-bold text-2xl">{data.title}</h3>
        <div className="flex justify-between mt-2">
          <span className="text-base-yellow">
            {data.timeAndTypeOfCompetition}
          </span>
          <ShareIcon className="w-4 text-light-gray" />
        </div>
      </div>
    </div>
  );
}

export default FreeLatestVideosCard;
