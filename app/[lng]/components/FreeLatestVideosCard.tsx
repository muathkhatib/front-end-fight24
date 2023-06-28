"use client";
import React, { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ShareIcon } from "@heroicons/react/24/outline";
import { playCircle, freeLatestVideoCardItem } from "@/assets/images";

interface Props {
  readonly key: string | number;
  data: any;
  showTypeName?: boolean;
}

function FreeLatestVideosCard({ data, showTypeName }: Props) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex-shrink-0 border border-light-gray rounded-lg overflow-hidden w-[296px] mr-2 pb-2 h-[296px] mb-2">
        <div className="h-1/2 relative overflow-hidden">
          {data.fields.tagName && (
            <span
              className="absolute top-0 left-0 z-[-5] py-1 px-3"
              style={{
                backgroundColor: data.fields.tagColor,
                color: data.fields.tagTextColor,
              }}
            >
              {data.fields.tagName.toUpperCase()}
            </span>
          )}
          <img
            src={
              data?.fields?.previewImage?.fields?.file?.url
                ? `https://${data.fields.previewImage.fields.file.url}`
                : freeLatestVideoCardItem
            }
            alt="Card item name"
            className="absolute z-[-10] w-full object-contain"
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
            <Link href={`/tv/${data.sys.id}`} className="font-bold text-2xl">
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
      {showTypeName && (
        <div>
          <h3 className="text-base-gray text-2xl font-bold">
            {data.fields.matchType[0]}
          </h3>
        </div>
      )}
    </div>
  );
}

export default FreeLatestVideosCard;
