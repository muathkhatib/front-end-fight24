import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShareIcon, ClockIcon } from "@heroicons/react/24/outline";

import { freeLatestVideoCardItem, playCircle } from "../assets/images";
import { classNames } from "../utils";

interface Props {
  key: number;
  tagName?: string;
  teamName?: string;
  title?: string;
  desctiption?: string;
}

function FreeLatestVideosCard({
  tagName = "Live",
  teamName = "ROYAL FC",
  title = "Carsten Hühn vs Leon Tschan",
  desctiption = "CHAMPIONS FULL NIGHT",
}: Props) {
  return (
    <div className="flex-shrink-0 border border-light-gray rounded-lg overflow-hidden w-[296px] mr-2 pb-2 h-[324px] ">
      <div className="h-1/2 relative">
        <span
          className={classNames(
            tagName.length <= 2
              ? "bg-base-black"
              : tagName.length <= 4
              ? "bg-base-yellow text-base-black"
              : "bg-white text-base-black",
            "absolute top-0 left-0 z-10 py-1 px-3"
          )}
        >
          {tagName}
        </span>
        <Image
          src={freeLatestVideoCardItem}
          alt="Card item name"
          className="absolute z-0"
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
          <span className="text-light-gray">{teamName}</span>
        </div>
        <h3 className="font-bold text-2xl">{title}</h3>
        <div className="flex justify-between mt-2">
          <span className="text-base-yellow"> {desctiption}</span>
          <ShareIcon className="w-4 text-light-gray" />
        </div>
      </div>
    </div>
  );
}

export default FreeLatestVideosCard;
