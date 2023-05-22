import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  imgSrc: string;
  imgAlt: string;
  url: string;
}

function AdvertisementSection({ imgSrc, imgAlt, url }: Props) {
  return (
    <div className="container flex items-center justify-center my-16">
      <Link href={url} target="_blank" rel="noopener">
        <Image
          src={imgSrc}
          alt={imgAlt}
          className="object-contain  h-[300px] w-[250px]"
        />
      </Link>
    </div>
  );
}

export default AdvertisementSection;
