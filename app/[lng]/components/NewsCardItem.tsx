"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";

import { convertToShortText } from "@/utils";

interface Props {
  key: number | string;
  data: any;
}

function NewsCardItem({ data }: Props) {
  const d = new Date(Date.parse(data.fields.date));
  const day = d.getDate();
  const month = d.getMonth() + 1;
  const year = d.getFullYear().toString().slice(-2);
  return (
    <div className="flex-shrink-0 border border-light-gray rounded-lg overflow-hidden w-[296px] mr-2 pb-2 h-[324px] bg-base-black">
      <div className="h-1/2">
        <Image
          src={`https:${data?.fields?.cardImage?.fields?.file?.url}`}
          alt="Card item name"
          className=""
          width="296"
          height="163"
        />
      </div>
      <div className="h-1/2 px-2">
        <div className="flex mt-3">
          <span className="text-base-yellow">
            {day}.{month}.{year}
          </span>
        </div>
        <Link href={`/news/${data?.sys?.id}`} className="font-bold text-2xl">
          {data.fields.title}
        </Link>
        <p className="text-base-yellow my-2"> {data.fields.subTitle}</p>
        <p className="text-light-gray my-2">
          {" "}
          {convertToShortText(data.fields.shortDescription, 34)}
        </p>
      </div>
    </div>
  );
}

export default NewsCardItem;
