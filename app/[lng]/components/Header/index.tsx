"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch } from "react-redux";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { UserIcon } from "@heroicons/react/24/outline";

import useBreakpoints from "@/hooks/useBreakpoints";

import FreeLatestVideosCard from "@/components/FreeLatestVideosCard";

import { toggleModal } from "@/store/Features/auth/authSlice";
import { LNG } from "../../../../src/@types/generic";
import { staticCardObject } from "@/utils/statics";

import Nav from "./Nav";
import UserDropdown from "./UserDropdown";
import LanguageSelectBox from "./LanguageSelectBox";
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

const Header: React.FC<LNG> = ({ lng }) => {
  const [showNested, setShowNested] = useState(false);
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [nestedList, setNestedList] = useState<NavLink[]>([]);
  const { isXs, isSm, isMd, isLg } = useBreakpoints();
  const auth =
    typeof window !== "undefined" && window.localStorage.getItem("email");

  const dispatch = useDispatch();

  const renderSearchButton = () => (
    <>
      <button
        onClick={() => setShowSearchBar((c) => !c)}
        className="rounded py-2 xs:px-0 md:px-5 xs:border-0 md:border md:border-base-gray text-base-gray flex items-center"
      >
        <MagnifyingGlassIcon className="h-6 w-6 xs:mr-0 md:mr-2" />
        {!isXs && !isSm && "Suchen"}
      </button>

      {showSearchBar ? (
        <div className="bg-base-black xs:w-screen md:w-[52vw] absolute right-0 z-20 top-28 rounded-lg p-1 shadow-md">
          <div className="px-2 mb-4">
            <input
              className="bg-base-black placeholder‑base-gray border rounded px-4 py-2 w-full outline-0 ring-0"
              placeholder="Look for fighters, fight name or event"
            />
          </div>

          <div className="p-2 flex xs:flex-col xl:flex-row justify-between">
            <div className="xs:w-full xl:w-1/4">
              <div>
                <h5 className="text-base-yellow font-bold">Recent EVENTS</h5>
                <div className="flex flex-col">
                  <span className="text-base-gray">VIDOVIC vs SKOURTIS</span>
                  <span className="text-base-gray">NFC 12</span>
                  <span className="text-base-gray">UAE Warriors 35</span>
                </div>
              </div>
              <div>
                <h5 className="text-base-yellow font-bold">popular searches</h5>
                <div className="flex flex-col">
                  <span className="text-base-gray">VIDOVIC vs SKOURTIS</span>
                  <span className="text-base-gray">NFC 12</span>
                  <span className="text-base-gray">UAE Warriors 35</span>
                </div>
              </div>
              <div>
                <h5 className="text-base-yellow font-bold">
                  Featured categories
                </h5>
                <div className="flex flex-wrap">
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
                    Kickboxen
                  </span>
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
                    Boxen
                  </span>
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
                    MMA
                  </span>
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
                    Am Beliebtesten
                  </span>
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
                    GCP 8
                  </span>
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
                    ROYAL FC
                  </span>
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
                    NEWS
                  </span>
                </div>
              </div>
              <div>
                <h5 className="text-base-yellow font-bold">
                  Featured fighters
                </h5>
                <div className="flex flex-wrap">
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
                    QUEALLY
                  </span>
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
                    PITBULL2
                  </span>
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
                    NABIEV
                  </span>
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
                    SALVATORE PRAHIM
                  </span>
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
                    DONKERWOLCKE
                  </span>
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
                    ROYAL FC
                  </span>
                  <span className="text-base-gray border border-base-gray mr-2 my-1 p-2 rounded">
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
                {Array.from({ length: 8 }, (_, i) => (i + 1).toString()).map(
                  (e) => (
                    <FreeLatestVideosCard key={e} data={staticCardObject} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );

  const renderLoginButton = () => (
    <div className="py-1 xs:mx-1 md:mx-2 text-base-gray">
      {!auth ? (
        <button
          onClick={() =>
            auth ? console.log("Logged in") : dispatch(toggleModal())
          }
          className="rounded border border-base-gray p-2"
        >
          <UserIcon className="w-6 h-6" />
        </button>
      ) : (
        <UserDropdown />
      )}
    </div>
  );

  const renderLiveStreamButton = () => (
    <Link
      href="/live"
      className="bg-base-yellow text-base-black rounded px-1 py-1 flex items-center xs:mr-[0.5rem] md:mr-8"
    >
      <Image
        className="h-8 object-cover"
        src={blackLiveStreamIcon}
        alt="Live Stream Icon"
      />
      {!isXs && !isSm && "LIVE"}
    </Link>
  );

  return (
    <header className="relative xs:pl-4 p lg:pl-[100px] xs:pr-4 md:pr-8 py-3 bg-base-black">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="xs:mr-0 lg:mr-8">
            <Image
              className="w-full xs:h-8 md:h-11 object-contain"
              src={navLogo}
              alt="Fight24 Logo"
            />
          </div>
          <div>
            {isLg && (
              <div>
                <Nav
                  setNestedList={setNestedList}
                  setShowNested={setShowNested}
                  lng={lng}
                />
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between">
          {renderSearchButton()}
          {renderLoginButton()}
          {renderLiveStreamButton()}
          <LanguageSelectBox lng={lng} />
        </div>
      </div>

      {(isXs || isSm || isMd) && (
        <div className="w-full mt-2">
          <Nav
            setNestedList={setNestedList}
            setShowNested={setShowNested}
            lng={lng}
          />
        </div>
      )}

      {showNested && nestedList.length > 0 && (
        <div className="absolute bg-base-gray xs:-bottom-16 md:-bottom-24 lg:-bottom-16 z-10 w-[92%]">
          <div className="flex items-center justify-between overflow-x-auto">
            {nestedList.map(({ title, to }) => (
              <Link
                href={`/${to}`}
                key={to}
                className="text-base-yellow xs:text-xs md:text-base xs:pt-6 md:pt-6 xs:pb-[10px] md:pb-6 mx-4 hover:border-b-2 border-b-base-yellow"
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
