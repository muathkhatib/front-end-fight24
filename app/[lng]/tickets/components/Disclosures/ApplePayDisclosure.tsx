"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { FaApple } from "react-icons/fa";

import { classNames } from "@/utils";

function ApplePayDisclosure({ open }: { open: boolean }) {
  return (
    <div className="border border-gray rounded-lg p-5 my-4">
      <Disclosure.Button className="w-full flex items-center justify-between ">
        <div className="w-full flex items-center ">
          <CheckCircleIcon
            className={classNames(
              open ? "text-[#0A7AFF]" : "text-gray",
              "w-6 h-6 mr-4"
            )}
          />
          <h4 className=" mr-8 flex items-center text-2xl font-bold text-white">
            APPLE PAY <FaApple className="w-5 h-5 ml-4" />
          </h4>
          <p className="text-start text-gray text-sm open-sans-font	">
            Your payment will be processed in EUR
          </p>
        </div>
      </Disclosure.Button>
    </div>
  );
}

export default ApplePayDisclosure;
