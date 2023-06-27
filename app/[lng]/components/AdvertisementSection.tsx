// @ts-nocheck
"use client";
import React from "react";
import ReactHtmlParser from "react-html-parser";
import Link from "next/link";

interface Props {
  positionName: string;
  data: {
    fields: {
      adsCode: string;
      adsType: string;
      advertismentType: string;
      redirectTo: string;
      advertisementImage: {
        fields: {
          title: string;
          file: {
            title: string;
            url: string;
            details: {
              image: {
                width: number;
                height: number;
              };
            };
          };
        };
      };
    }[];
  };
}

function AdvertisementSection({ data, positionName }: Props) {
  return (
    <div className="container flex items-center justify-center my-16 h-[300px]">
      {(data.advertismentType as string) === "code" ? (
        ReactHtmlParser(data.adsCode)
      ) : (
        <>
          {data
            .filter(
              (e: any) =>
                e.fields.advertismentPosition.toLowerCase() ===
                positionName.toLowerCase()
            )
            .map((elm: any) => (
              <Link
                key={elm.sys.id}
                href={elm.fields.redirectTo}
                target="_blank"
              >
                <img
                  src={`https:${elm.fields.advertisementImage.fields.file.url}`}
                  alt={elm.fields.advertisementImage.fields.title}
                  className="h-full object-none"
                />
              </Link>
            ))}
        </>
      )}
    </div>
  );
}

export default AdvertisementSection;
