"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

import { convertToShortText } from "@/utils";

function NewsItem({
  data,
  lng,
}: {
  data: any;
  lng: string;
  readonly key: string | number;
}) {
  const testText = documentToReactComponents(data?.fields?.articleContent);
  return (
    <div className="w-[48%] my-4 rounded border border-gray ">
      <Image
        src={`https:${data.fields.image.fields.file.url}`}
        alt={data.fields.image.fields.title}
        width={data.fields.image.fields.file.details.image.width}
        height={data.fields.image.fields.file.details.image.height}
      />
      <div className="px-2">
        <span className="text-base-yellow ">23.11.22</span>
        <Link href={`/${lng}/news/${data.sys.id}`}>
          <h3 className="text-2xl font-bold">{data.fields.title}</h3>
        </Link>
        <h5 className="text-base-yellow ">{data.fields.subTitle}</h5>
        <p className="text-gray">{data.fields.shortDescription} ...</p>
        <div className="w-full flex justify-between  my-3">
          <Link href="#" className="border border-gray rounded py-3 px-7">
            Mehr
          </Link>
          <div className="flex justify-between items-center w-1/5">
            <span className="text-gray">Teilen</span>
            <Link href="#" className="text-base-yellow ">
              <FaTwitter />
            </Link>
            <Link href="#" className="text-base-yellow ">
              <FaFacebookF />
            </Link>
            <Link href="#" className="text-base-yellow ">
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsItem;
