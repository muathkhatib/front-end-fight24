"use client";
import React, { useEffect } from "react";
import Link from "next/link";

interface Props {
  data: {
    advertisementUrl: string;
    advertisementImage: {
      fields: {
        file: {
          url: string;
        };
      };
    };
    imageAlternation: string;
  };
}

function AdvertisementSection({ data }: Props) {
  useEffect(() => {
    console.log(data);
  }, [data]);
  return (
    <div className="container flex items-center justify-center my-16">
      <Link href={data.advertisementUrl} target="_blank" rel="noopener">
        <img
          src={`https:${data.advertisementImage.fields.file.url}`}
          alt={data.imageAlternation}
          className="object-contain  h-[300px] m-w-[250px]"
        />
      </Link>
    </div>
  );
}

export default AdvertisementSection;
