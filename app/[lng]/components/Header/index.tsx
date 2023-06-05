"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";
import useBreakpoints from "@/hooks/useBreakpoints";
import Nav from "./Nav";
import LanguageSelectBox from "./LanguageSelectBox";
import { LNG } from "../../../../src/@types/generic";
import { navLogo, blackLiveStreamIcon } from "../../assets/images";

interface NavLink {
  title: string;
  to: string;
}

interface Link {
  title: string;
  to: string;
  nestedNav?: NavLink[];
}

const links: Link[] = [
  {
    title: "TV",
    to: "tv",
    nestedNav: [
      {
        title: "Armdrücken",
        to: "ddd",
      },
      {
        title: "BJJ",
        to: "ddd",
      },
      {
        title: "Boxen",
        to: "ddd",
      },
      {
        title: "Doku",
        to: "ddd",
      },
      {
        title: "Karate",
        to: "ddd",
      },
      {
        title: "Kickboxen",
        to: "ddd",
      },
      {
        title: "MMA",
        to: "ddd",
      },
      {
        title: "Muay Thai",
        to: "ddd",
      },
      {
        title: "Pro Wrestling",
        to: "ddd",
      },
      {
        title: "Ringen",
        to: "ddd",
      },
      {
        title: "Show",
        to: "ddd",
      },
      {
        title: "Talk",
        to: "ddd",
      },
    ],
  },
  {
    title: "Veranstaltungen",
    to: "veranstaltungen",
  },
  {
    title: "Nachricht",
    to: "nachricht",
  },
  {
    title: "Eintrittskarten",
    to: "eintrittskarten",
  },
];

const Header: React.FC<LNG> = ({ lng }) => {
  const [showNested, setShowNested] = useState(false);
  const [nestedList, setNestedList] = useState<NavLink[]>([]);
  const { isXs, isSm, isMd, isLg } = useBreakpoints();

  const renderSearchButton = () => (
    <button className="h-full border border-gray text-gray px-[20px] py-[10px] items-center justify-center flex rounded sm:border-none xs:border-none mx-1">
      <MagnifyingGlassIcon className="h-6 w-6 mx-1" />
      {!isXs && !isSm && "Suchen"}
    </button>
  );

  const renderLoginButton = () => (
    <button className="h-full text-gray  border border-gray text-gray items-center justify-center flex rounded p-1  mx-2">
      <UserIcon className="h-full w-6 m-1" />
      {/* Anmelden */}
    </button>
  );

  const renderLiveStreamButton = () => (
    <button className="xs:w-16 sm:w-16 md:w-20 lg:w-20 h-full bg-base-yellow border border-base-yellow text-base-black border flex items-center justify-center rounded py-1">
      <Image
        className="h-[30px] w-[35px] object-cover mr-1"
        src={blackLiveStreamIcon}
        alt="Live Stream Icon"
      />
      {!isXs && !isSm && "LIVE"}
    </button>
  );

  return (
    <header className="md:container lg:container py-[18px] h-16 flex sm:flex-col xs:flex-col xs:mb-10 lg:mb-4 sticky">
      <div className="flex items-center justify-between w-full">
        <Link href="/" className="">
          <Image
            className="h-full w-full object-contain"
            src={navLogo}
            alt="Fight24 Logo"
          />
        </Link>

        {(isMd || isLg) && (
          <div className="w-5/12">
            <Nav
              links={links}
              setNestedList={setNestedList}
              setShowNested={setShowNested}
              lng={lng}
            />
          </div>
        )}

        <div className="flex items-center justify-between ">
          {renderSearchButton()}
          {renderLoginButton()}
          {renderLiveStreamButton()}
          <LanguageSelectBox lng={lng} />
        </div>
      </div>

      {(isXs || isSm) && (
        <div className="w-full">
          <Nav
            links={links}
            setNestedList={setNestedList}
            setShowNested={setShowNested}
            lng={lng}
          />
        </div>
      )}

      {showNested && nestedList.length > 0 && (
        <div className="bg-[#8F8F8F]">
          <div className="container flex items-center justify-between py-6 z-20">
            {nestedList.map(({ title, to }) => (
              <Link href={to} key={to} className="text-base-yellow px-3">
                {title}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
