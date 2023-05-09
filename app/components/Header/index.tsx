import React from "react";
import Image from "next/image";
import { navLogo, LiveStreamIcon } from "../../assets/images";
import Link from "next/link";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import LanguageSelectBox from "./Languages";

interface Link {
  title: string;
  to: string;
}

const links: Link[] = [
  { title: "TV", to: "tv" },
  { title: "Veranstaltungen", to: "veranstaltungen" },
  { title: "Nachricht", to: "nachricht" },
  { title: "Eintrittskarten", to: "eintrittskarten" },
];

const Header = () => {
  return (
    <header className="pl-[90px] pr-[38px] pt-[18px] h-16 flex">
      <Link href="/" className="w-[138px]">
        <Image
          className="h-full w-full object-contain"
          src={navLogo}
          alt="Fight24 Logo"
        />
      </Link>
      <div className="w-11/12 flex items-center justify-between">
        <nav className="w-6/12">
          <ul className="h-full flex items-center justify-evenly">
            {links.map(({ title, to }) => (
              <li key={title}>
                <Link
                  className="hover:text-base-yellow hover:border-b border-b-base-yellow pb-4"
                  href={to}
                >
                  {title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center justify-between w-4/12">
          <button className="h-[44px]  border border-secondary-gray text-secondary-gray px-[20px] py-[10px] items-center justify-center flex rounded">
            <MagnifyingGlassIcon className="h-6 w-6 mx-1" />
            Suchen
          </button>
          <button className="h-[44px]  border border-secondary-gray text-secondary-gray px-[20px] py-[10px] items-center justify-center flex rounded">
            Anmelden
          </button>
          <button className="h-[44px]  bg-base-yellow border border-secondary-gray text-base-black px-[20px] py-[10px] items-center justify-center flex rounded">
            <Image src={LiveStreamIcon} alt="Live Stream Icon" />
            LIVE
          </button>
          <LanguageSelectBox />
        </div>
      </div>
    </header>
  );
};

export default Header;
