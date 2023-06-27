"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Disclosure } from "@headlessui/react";
import {
  number as cardNumberValidator,
  expirationDate as expirationDateValidator,
} from "card-validator";
import {
  PlusIcon,
  MinusIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

import {
  CreditCardIcon,
  CheckCircleIcon as CheckCircleOutLineIcon,
} from "@heroicons/react/24/outline";

import { classNames } from "@/utils";

import {
  discover,
  maestro,
  mastercard,
  paypal,
  protect,
  visa,
} from "@/assets/images/index";

function CreditCardDisclosure({ open }: { open: boolean }) {
  const [isCardNumberValid, setIsCardNumberValid] = useState(false);
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (event: any) => {
    const { value } = event.target;

    // Remove any non-digit characters from the input
    const digitsOnly = value.replace(/\D/g, "");

    // Add spaces after every 4 digits
    const formattedNumber = digitsOnly.replace(/(\d{4})/g, "$1 ");

    // Update the state with the formatted card number
    setCardNumber(formattedNumber);

    // Perform credit card number validation
    const validation = cardNumberValidator(digitsOnly);

    // Update the state with the validation result
    setIsCardNumberValid(validation.isValid);
  };
  return (
    <div className="border border-gray rounded-lg p-5 my-4">
      <Disclosure.Button className="flex items-center justify-between w-full">
        <div className="flex items-center">
          <CheckCircleIcon
            className={classNames(
              open ? "text-[#0A7AFF]" : "text-gray",
              "w-6 h-6 mr-4"
            )}
          />
          <h4 className="mr-8 flex items-center text-2xl font-bold text-white">
            Credit Card
          </h4>
          <div className="flex">
            <Image src={visa} className="" alt="" />
            <Image src={mastercard} className="mx-1" alt="" />
            <Image src={maestro} className="mx-1" alt="" />
            <Image src={discover} className="" alt="" />
          </div>
        </div>
        <div className="">
          {open ? (
            <MinusIcon className="w-[58px] h-[58px] text-gray" />
          ) : (
            <PlusIcon className="w-[58px] h-[58px] text-gray" />
          )}
        </div>
      </Disclosure.Button>
      <Disclosure.Panel>
        <form className="flex flex-wrap justify-between mt-5">
          <fieldset className="xs:w-full md:w-[48%] border border-gray px-3 py-3 rounded-lg">
            <legend className="px-3 text-gray">Card number</legend>
            <div className=" flex items-center justify-between">
              <input
                className="bg-base-black text-gray px-3 outline-none"
                type="text"
                placeholder="1234 5678 9101 3456"
                maxLength={19} // Including spaces, the maximum length is 19
                required
              />
              <CheckCircleOutLineIcon
                className={classNames(
                  isCardNumberValid ? "text-success-color" : "text-gray",
                  "w-6 h-6"
                )}
              />
            </div>
          </fieldset>
          <fieldset className="xs:w-full md:w-[48%] border px-3 py-3 border-gray rounded-lg">
            <legend className="px-3 text-gray">Expiration Date</legend>
            <div className=" flex items-center justify-between">
              <input
                className="bg-base-black text-gray px-3 outline-none"
                type="text"
                placeholder="MM/YY"
                maxLength={5} // MM/YY format has a maximum length of 5 characters
                required
              />
            </div>
          </fieldset>
          <fieldset className="xs:w-full md:w-[48%] border px-3 py-3 border-gray rounded-lg mt-5">
            <legend className="px-3 text-gray">Card Security Code</legend>
            <div className=" flex items-center justify-between">
              <input
                className="w-[95%] bg-base-black text-gray px-3 outline-none"
                type="password"
                placeholder="***"
                required
              />
              <CheckCircleOutLineIcon
                className={classNames(
                  false ? "text-success-color" : "text-gray",
                  "w-6 h-6"
                )}
              />
            </div>
          </fieldset>
        </form>
      </Disclosure.Panel>
    </div>
  );
}

export default CreditCardDisclosure;
