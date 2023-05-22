"use client";
import React, { useState } from "react";
import Link from "next/link";
interface NavLink {
  title: string;
  to: string;
  nestedNav?: NavLink[];
}

interface Props {
  links: Array<NavLink>;
  setNestedList: (nestedList: NavLink[]) => void;
  setShowNested: (showNested: boolean) => void;
}

const Nav: React.FC<Props> = ({ links, setNestedList, setShowNested }) => {
  const handleMouseEnter = (nestedNav: NavLink[] = []) => {
    setShowNested(true);
    setNestedList(nestedNav);
  };

  const handleMouseLeave = () => {
    setShowNested(false);
    setNestedList([]);
  };

  return (
    <div className="flex items-center justify-between">
      <nav className="w-full">
        <ul className="h-full w-full flex items-center justify-evenly">
          {links.map(({ title, to, nestedNav }) => (
            <li
              className="cursor-pointer"
              onClick={() => {
                handleMouseEnter(nestedNav);
              }}
              key={title}
            >
              <span className="hover:text-base-yellow hover:border-b border-b-base-yellow pb-4">
                {title}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Nav;
