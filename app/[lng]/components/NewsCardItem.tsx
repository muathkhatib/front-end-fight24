"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ShareIcon, ClockIcon } from "@heroicons/react/24/outline";

import { freeLatestVideoCardItem, playCircle } from "../assets/images";
import { classNames } from "../utils";

interface Props {
  key: number;
  title?: string;
  desctiption?: string;
  publishDate?: string;
  content?: string;
}

function NewsCardItem({
  title = "GLORY 81: FIGHT24 ÜBERTRÄGT",
  desctiption = "Kampf von Luis Tavares fällt aus",
  publishDate = "20 Nov 2022 19:00:00 GMT",
  content = "Die Ergebnisse der Veranstaltung Die Ergebnisse der Veranstaltung Die Ergebnisse der Veranstaltung",
}: Props) {
  const d = new Date(Date.parse(publishDate));
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear().toString().slice(-2);
  const slicedContent = content.slice(0, 38);

  return (
    <div className="flex-shrink-0 border border-light-gray rounded-lg overflow-hidden w-[296px] mr-2 pb-2 h-[324px] bg-base-black">
      <div className="h-1/2">
        <Image
          src={freeLatestVideoCardItem}
          alt="Card item name"
          className=""
        />
      </div>
      <div className="h-1/2 px-2">
        <div className="flex mt-3">
          <span className="text-base-yellow">
            {day}.{month}.{year}
          </span>
        </div>
        <h3 className="font-bold text-2xl">{title}</h3>
        <p className="text-base-yellow my-2"> {desctiption}</p>
        <p className="text-light-gray my-2"> {slicedContent} ...</p>
      </div>
    </div>
  );
}

export default NewsCardItem;
