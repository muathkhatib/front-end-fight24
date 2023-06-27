"use client";
import React, { useCallback } from "react";
import Link from "next/link";
import { navbarTvLinks } from "@/utils/statics";

interface NavLink {
  title: string;
  to: string;
  nestedNav?: NavLink[];
}

interface Props {
  setNestedList: (nestedList: NavLink[]) => void;
  setShowNested: (showNested: boolean) => void;
  lng: string;
}

const Nav: React.FC<Props> = ({ setNestedList, setShowNested, lng }) => {
  const handleMouseEnter = useCallback(
    (nestedNav: NavLink[] = []) => {
      //@ts-ignore
      setShowNested((prev) => !prev);
      if (nestedNav.length > 0) {
        setNestedList(nestedNav);
      }
    },
    [setNestedList, setShowNested]
  );

  return (
    <div className="w-full flex items-center">
      <nav className="w-full">
        <ul className="h-full w-full flex items-center justify-between">
          {navbarTvLinks.map(({ title, to, nestedNav }) => (
            <li
              className="cursor-pointer"
              onMouseEnter={() =>
                nestedNav && nestedNav.length > 0 && handleMouseEnter(nestedNav)
              }
              key={title}
            >
              <Link
                href={`/${to}`}
                className="hover:text-base-yellow hover:border-b-2 border-b-base-yellow pb-4 xs:mr-0 lg:mr-4 xs:text-xs xl:text-base"
              >
                {title.toUpperCase()}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
