"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

function NewsItem({ data }: { data: any; readonly key: string | number }) {
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
        <h3 className="text-2xl font-bold">
          FIGHT NIGHT MANNHEIM XV: HERE TO STAY
        </h3>
        <h5 className="text-base-yellow ">
          Die Veranstaltung in der Quadratestadt geht in die nächste Runde
        </h5>
        <p className="text-gray">
          Denn nach den aktuellen Geschehnissen liegt ein dunkler Schatten über
          diesem Event - er wurde komplett gestrichen. Doch worum geht es
          eigentlich konkret? Als lokaler Veranstalter von Glory Rivals I
          fungiert die AFO (Antwerp Fighting Organisation) - und auf die scheint
          die Staatsanwaltschaft schon länger ein Auge geworfen zu haben ...
        </p>
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
