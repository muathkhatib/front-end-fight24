"use client";
import React, { useState, useCallback } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

interface NavLink {
  title: string;
  to: string;
  nestedNav?: NavLink[];
}

interface Props {
  links: Array<NavLink>;
  setNestedList: (nestedList: NavLink[]) => void;
  setShowNested: (showNested: boolean) => void;
  lng: string;
}

const Nav: React.FC<Props> = ({ links, setNestedList, setShowNested, lng }) => {
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
    <div className="flex items-center justify-between">
      <nav className="w-full">
        <ul className="h-full w-full flex items-center justify-evenly">
          {links.map(({ title, to, nestedNav }) => (
            <li
              className="cursor-pointer"
              onMouseEnter={() => handleMouseEnter(nestedNav)}
              key={title}
            >
              <Link
                href={`/${lng}/${to}`}
                className="hover:text-base-yellow hover:border-b border-b-base-yellow pb-4"
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
