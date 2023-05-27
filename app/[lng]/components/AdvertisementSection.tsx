import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Props {
  data: {
    advertisementUrl: string;
    advertisementImage: {
      fields: {
        file: {
          url: string;
          details: {
            image: {
              width: number;
            };
          };
        };
      };
    };
    imageAlternation: string;
  };
}

function AdvertisementSection({ data }: Props) {
  return (
    <div className="container flex items-center justify-center my-16">
      <Link href={data.advertisementUrl} target="_blank" rel="noopener">
        <Image
          src={`https:${data.advertisementImage.fields.file.url}`}
          alt={data.imageAlternation}
          className="object-contain  h-[300px]"
          width={data.advertisementImage.fields.file.details.image.width}
          height="300"
        />
      </Link>
    </div>
  );
}

export default AdvertisementSection;
