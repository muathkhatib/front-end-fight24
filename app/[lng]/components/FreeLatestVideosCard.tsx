"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShareIcon } from "@heroicons/react/24/outline";
import { playCircle } from "../assets/images";

interface Props {
  data: any;
}

function FreeLatestVideosCard({ data }: Props) {
  return (
    <div className="flex-shrink-0 border border-light-gray rounded-lg overflow-hidden w-[296px] mr-2 pb-2 h-[296px] mb-2">
      <div className="h-1/2 relative overflow-hidden">
        <span
          className="absolute top-0 left-0 z-[-5] py-1 px-3"
          style={{
            backgroundColor: data.tagColor,
            color: data.tagTextColor,
          }}
        >
          {data.fields.tagName.toUpperCase()}
        </span>
        <Image
          src={`https:${data.fields.previewImage.fields.file.url}`}
          alt="Card item name"
          className="absolute z-[-10] w-full object-contain"
          width="296"
          height="150"
        />
        <Link
          href="#"
          className="w-[fit-content] h-[fit-content] absolute left-0 right-0 top-0 bottom-0 my-auto mx-auto z-[-5]"
        >
          <Image src={playCircle} alt="Card item name" />
        </Link>
      </div>
      <div className="h-1/2 px-2 flex flex-col justify-between">
        <div className="mt-3">
          <p className="text-light-gray">{data.fields.championName}</p>
          <Link href={`events/${data.sys.id}`} className="font-bold text-2xl">
            {data.fields.title}
          </Link>
        </div>

        <div className="flex justify-between mt-2">
          <span className="text-base-yellow">
            {data.fields.timeAndTypeOfCompetition}
          </span>
          <ShareIcon className="w-4 text-light-gray" />
        </div>
      </div>
    </div>
  );
}

export default FreeLatestVideosCard;
