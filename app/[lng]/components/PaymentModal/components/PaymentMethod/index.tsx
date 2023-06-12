import React, { useState } from "react";
import Image from "next/image";

import {
  number as cardNumberValidator,
  expirationDate as expirationDateValidator,
} from "card-validator";

import {
  discover,
  maestro,
  mastercard,
  paypal,
  protect,
  visa,
} from "@/assets/images/index";

import { CheckCircleIcon } from "@heroicons/react/24/solid";
import {
  CheckCircleIcon as CheckCircleOutLineIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";

import { FaApple } from "react-icons/fa";
import { classNames } from "@/utils";

function Methods({ setModalType }: any) {
  const [cardNumber, setCardNumber] = useState("");
  const [isCardNumberValid, setIsCardNumberValid] = useState(false);
  const [expirationDate, setExpirationDate] = useState("");
  const [isExpirationDateValid, setIsExpirationDateValid] = useState(false);

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

  const handleExpirationDateChange = (event: any) => {
    const { value } = event.target;

    // Remove any non-digit characters from the input
    const digitsOnly = value.replace(/\D/g, "");

    // Format the expiration date as MM/YY
    const formattedDate = digitsOnly
      .slice(0, 4)
      .replace(/(\d{2})(\d{2})/, "$1/$2");

    // Update the state with the formatted expiration date
    setExpirationDate(formattedDate);

    // Perform expiration date validation
    const validation = expirationDateValidator(formattedDate);

    // Check if MM is between 01 and 12
    const isValidMM =
      validation.isValid &&
      parseInt(digitsOnly.slice(0, 2), 10) >= 1 &&
      parseInt(digitsOnly.slice(0, 2), 10) <= 12;

    // Check if YY is between current year and next 10 years
    const currentYear = new Date().getFullYear() % 100; // Get last two digits of current year
    const minYear = currentYear;
    const maxYear = currentYear + 10;
    const isValidYY =
      validation.isValid &&
      parseInt(digitsOnly.slice(2, 4), 10) >= minYear &&
      parseInt(digitsOnly.slice(2, 4), 10) <= maxYear;

    // Update the state with the validation result
    setIsExpirationDateValid(validation.isValid && isValidMM && isValidYY);
  };

  return (
    <>
      <div className="xs:w-[95vw] md:w-[595px] pt-4 rounded-lg shadow-md">
        <div className="w-full mx-auto flex flex-col items-center">
          <h3 className="text-2xl mb-6 font-bold">PAYMENT METHOD</h3>

          <div className="w-full flex items-center justify-between border p-5 border border-gray rounded-lg mb-2">
            <div className="flex items-center">
              <CheckCircleIcon className="w-6 h-6 text-gray mr-4" />
              <h5 className="text-2xl font-bold ">Paypal</h5>
            </div>
            <p className="w-3/6 text-gray">
              You will be redirected to the PayPal website after submitting your
              order
            </p>
            <Image src={paypal} className="border" alt="" />
          </div>

          <div className="w-full flex items-center justify-between border p-5 border border-gray rounded-lg mb-2">
            <div className="flex items-center">
              <CheckCircleIcon className="w-6 h-6 text-gray mr-4" />
              <h5 className="text-2xl font-bold ">Apple Pay</h5>
            </div>
            <p className="w-3/6 text-gray">
              Your payment will be processed in EUR
            </p>
            <div className="flex items-center">
              <FaApple className="text-white w-5 h-5 mr-2" />
              <h1 className="text-2xl font-bold">PAY</h1>
            </div>
          </div>

          <div className="w-full border p-5 border border-gray rounded-lg mb-2">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center">
                <CheckCircleIcon className="w-6 h-6 text-gray mr-4" />
                <h5 className="text-2xl font-bold">Credit Card</h5>
              </div>
              <div className="flex">
                <Image src={visa} className="" alt="" />
                <Image src={mastercard} className="mx-1" alt="" />
                <Image src={maestro} className="mx-1" alt="" />
                <Image src={discover} className="" alt="" />
              </div>
            </div>

            <div className="mt-4">
              <div className="w-full flex xs:flex-col md:flex-row items-center justify-between mb-4">
                <fieldset className="xs:w-full md:w-[48%] flex border px-3 py-3 border-gray rounded-lg">
                  <legend className="px-3">Card number</legend>
                  <input
                    className="bg-base-black text-gray px-3 outline-none"
                    type="text"
                    placeholder="1234 5678 9101 3456"
                    value={cardNumber}
                    onChange={handleCardNumberChange}
                    maxLength={19} // Including spaces, the maximum length is 19
                    required
                  />
                  <CheckCircleOutLineIcon
                    className={classNames(
                      isCardNumberValid ? "text-success-color" : "text-gray",
                      "w-6 h-6"
                    )}
                  />
                </fieldset>

                <fieldset
                  className={classNames(
                    isExpirationDateValid
                      ? "border-success-color"
                      : "border-gray",
                    "xs:w-full md:w-[48%] flex border px-3 py-3 rounded-lg"
                  )}
                >
                  <legend className="px-3">Expiration Date</legend>
                  <input
                    className="bg-base-black text-gray px-3 outline-none"
                    type="text"
                    placeholder="MM/YY"
                    value={expirationDate}
                    onChange={handleExpirationDateChange}
                    maxLength={5} // MM/YY format has a maximum length of 5 characters
                    required
                  />
                </fieldset>
              </div>

              <div className="w-full flex xs:flex-col md:flex-row flex items-center justify-between mb-4">
                <fieldset className="xs:w-full md:w-[48%] flex border px-3 py-3 border-gray rounded-lg">
                  <legend className="px-3">Card Security Code</legend>
                  <input
                    className="bg-base-black text-gray px-3 outline-none"
                    type="text"
                    placeholder="***"
                    maxLength={3}
                    required
                  />
                </fieldset>

                <div className="xs:w-full md:w-[48%] flex items-start justify-between xs:mt-4 md:mt-0">
                  <InformationCircleIcon className="text-gray w-[8%]" />
                  <p className="text-gray text-sm w-[90%]">
                    The card security code (CSC) is usually a 3 or 4 - digit
                    number. The CSC is typically printed on the back of a credit
                    card.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center text-sm text-gray mt-7">
            <Image src={protect} className="mr-4" alt="" />
            <p className="">
              We protect your payment information using encryption to provide
              security.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setModalType("confirmation")}
            className="bg-base-yellow py-3 px-12 mt-5 rounded text-base-black"
          >
            CONFIRM
          </button>
        </div>
      </div>
    </>
  );
}

export default Methods;
