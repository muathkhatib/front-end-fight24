"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import Image from "next/image";
import { CheckCircleIcon } from "@heroicons/react/24/solid";
import { classNames } from "@/utils";
import { paypal } from "@/assets/images/index";

function PaypalDisclosure({ open }: { open: boolean }) {
  return (
    <div className="border border-base-gray rounded-lg p-5 my-4">
      <Disclosure.Button className="w-full flex items-center justify-between">
        <div className="w-full flex items-center">
          <CheckCircleIcon
            className={classNames(
              open ? "text-[#0A7AFF]" : "text-base-gray",
              "w-6 h-6 mr-4"
            )}
          />
          <h4 className="mr-8 flex items-center text-2xl font-bold text-white">
            PAYPAL <Image src={paypal} className="ml-4 border" alt="" />{" "}
          </h4>
          <p className="w-[90%] text-start text-base-gray text-sm open-sans-font	">
            You will be redirected to the PayPal website after submitting your
            order
          </p>
        </div>
      </Disclosure.Button>
    </div>
  );
}

export default PaypalDisclosure;
