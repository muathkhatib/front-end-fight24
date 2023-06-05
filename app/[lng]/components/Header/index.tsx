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
import FreeLatestVideosCard from "@/components/FreeLatestVideosCard";
import { staticCardObject } from "@/utils/statics";

interface NavLink {
  title: string;
  to: string;
}

interface Link {
  title: string;
  to: string;
  nestedNav?: NavLink[];
}

const Header: React.FC<LNG> = ({ lng }) => {
  const [showNested, setShowNested] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [nestedList, setNestedList] = useState<NavLink[]>([]);
  const { isXs, isSm, isMd, isLg } = useBreakpoints();

  const renderSearchButton = () => (
    <>
      <button
        onClick={() => setShowSearchBar((c) => !c)}
        className="h-full border border-gray text-gray px-[20px] py-[10px] items-center justify-center flex rounded sm:border-none xs:border-none mx-1"
      >
        <MagnifyingGlassIcon className="h-6 w-6 mx-1" />
        {!isXs && !isSm && "Suchen"}
      </button>

      {showSearchBar ? (
        <div className="bg-base-black xs:w-screen md:w-[52vw] absolute right-0 top-28 rounded-lg p-1 shadow-md">
          <div className="px-2 mb-4">
            <input
              className="bg-base-black placeholder‑gray border rounded px-4 py-2 w-full outline-0 ring-0"
              placeholder="Look for fighters, fight name or event"
            />
          </div>

          <div className="p-2 flex xs:flex-col md:flex-row justify-between">
            <div className="w-1/4">
              <div>
                <h5 className="text-base-yellow font-bold">Recent EVENTS</h5>
                <div className="flex flex-col">
                  <span className="text-gray">VIDOVIC vs SKOURTIS</span>
                  <span className="text-gray">NFC 12</span>
                  <span className="text-gray">UAE Warriors 35</span>
                </div>
              </div>
              <div>
                <h5 className="text-base-yellow font-bold">popular searches</h5>
                <div className="flex flex-col">
                  <span className="text-gray">VIDOVIC vs SKOURTIS</span>
                  <span className="text-gray">NFC 12</span>
                  <span className="text-gray">UAE Warriors 35</span>
                </div>
              </div>
              <div>
                <h5 className="text-base-yellow font-bold">
                  Featured categories
                </h5>
                <div className="flex flex-wrap">
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    Kickboxen
                  </span>
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    Boxen
                  </span>
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    MMA
                  </span>
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    Am Beliebtesten
                  </span>
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    GCP 8
                  </span>
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    ROYAL FC
                  </span>
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    NEWS
                  </span>
                </div>
              </div>
              <div>
                <h5 className="text-base-yellow font-bold">
                  Featured fighters
                </h5>
                <div className="flex flex-wrap">
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    QUEALLY
                  </span>
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    PITBULL2
                  </span>
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    NABIEV
                  </span>
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    SALVATORE PRAHIM
                  </span>
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    DONKERWOLCKE
                  </span>
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    ROYAL FC
                  </span>
                  <span className="text-gray border border-gray mr-2 my-1 p-2 rounded">
                    NEWS
                  </span>
                </div>
              </div>
            </div>

            <div className="w-3/4 h-[749px] overflow-y-scroll scrollbar-hide">
              <h5 className="text-base-yellow font-bold mb-4">
                Featured Top Views
              </h5>
              <div className="flex flex-wrap items-end">
                <FreeLatestVideosCard data={staticCardObject} />
                <FreeLatestVideosCard data={staticCardObject} />
                <FreeLatestVideosCard data={staticCardObject} />
                <FreeLatestVideosCard data={staticCardObject} />
                <FreeLatestVideosCard data={staticCardObject} />
                <FreeLatestVideosCard data={staticCardObject} />
                <FreeLatestVideosCard data={staticCardObject} />
                <FreeLatestVideosCard data={staticCardObject} />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
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
              <Link
                href={`${lng}/${to}`}
                key={to}
                className="text-base-yellow px-3"
              >
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
