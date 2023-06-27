"use client";
import React, { useState } from "react";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

import { classNames } from "@/utils";

interface Props {
  children: JSX.Element;
  stepsNames: string | number[];
  stepNumber: number;
}

function Stepper({ children, stepsNames, stepNumber }: Props) {
  return (
    <>
      {stepNumber > 0 && (
        <div className="flex flex-col items-center justify-center">
          <ol className="items-center space-y-4 sm:flex sm:space-x-6 sm:space-y-0 mb-4">
            {/* @ts-ignore */}
            {stepsNames.map((name: string | number, index: number) => (
              <li
                key={name}
                className={classNames(
                  index + 1 === stepNumber ? "text-base-yellow" : "text-gray",
                  "flex items-center space-x-2.5"
                )}
              >
                <span className="flex items-center justify-center w-8 h-8 shrink-0">
                  <CheckCircleIcon className="w-[42px] h-[42px]" />
                </span>
              </li>
            ))}
          </ol>

          <div className="text-center">
            <p>
              STEP {stepNumber} OF {stepsNames.length}
            </p>
          </div>
        </div>
      )}
      {children}
    </>
  );
}
export default Stepper;
