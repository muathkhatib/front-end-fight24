"use client";
import React, { createRef, useMemo } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/solid";
import { classNames } from "../utils";

interface Props {
  children: any;
  icon?: string | null;
  title: string;
  type?: string;
  showAllUrl?: string;
}

function ListCardsSection({
  children,
  icon,
  title,
  showAllUrl,
  type = "primary",
}: Props) {
  const scrollbarContainerRef = createRef<HTMLDivElement>();
  const scrollByAmount = useMemo(() => 296, []);

  const handleChevronLeftClick = () => {
    if (scrollbarContainerRef.current) {
      scrollbarContainerRef.current.scrollBy({
        left: -scrollByAmount,
        behavior: "smooth",
      });
    }
  };
  const handleChevronRightClick = () => {
    if (scrollbarContainerRef.current) {
      scrollbarContainerRef.current.scrollBy({
        left: scrollByAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <div
        className={classNames(
          type === "secondary" ? "bg-base-yellow" : "",
          "xs:pl-4 md:pl-6 my-8"
        )}
      >
        <div className="flex items-center justify-between">
          <div className="flex">
            <h1
              className={classNames(
                type === "secondary" ? "text-base-black" : "",
                "mr-2 font-black text-4xl"
              )}
            >
              {title}
            </h1>
            {icon && <Image src={icon} alt="Live Stream Icon" />}
          </div>
          <div>
            {showAllUrl && (
              <Link
                href={showAllUrl}
                className={classNames(
                  type === "secondary" ? "text-base-black" : "",
                  ""
                )}
              >
                {" "}
                Alles sehen{" "}
              </Link>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center">
          <ChevronLeftIcon
            className={classNames(
              type === "secondary" ? "text-base-black" : "",
              "w-9 cursor-pointer"
            )}
            onClick={handleChevronLeftClick}
          />
          <div
            className="w-full flex overflow-x-scroll mt-8 scrollbar-hide"
            ref={scrollbarContainerRef}
            onChange={(e) => console.log(e)}
          >
            {children}
          </div>
          <ChevronRightIcon
            className={classNames(
              type === "secondary" ? "text-base-black" : "",
              "w-9 cursor-pointer"
            )}
            onClick={handleChevronRightClick}
          />
        </div>
      </div>
    </>
  );
}

export default ListCardsSection;
