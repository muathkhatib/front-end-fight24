"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronUpIcon,
  ChevronRightIcon,
  PlusIcon,
  MinusIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/solid";

import {
  CreditCardIcon,
  CheckCircleIcon as CheckCircleOutLineIcon,
} from "@heroicons/react/24/outline";

import { classNames } from "@/utils";

function SepaDisclosure({ open }: { open: boolean }) {
  return (
    <div className="border border-base-gray rounded-lg p-5 my-4">
      <Disclosure.Button className="flex items-center justify-between">
        <div className="w-[90%] flex items-center">
          <CheckCircleIcon
            className={classNames(
              open ? "text-[#0A7AFF]" : "text-base-gray",
              "w-6 h-6 mr-4"
            )}
          />
          <h4 className="mr-8 flex items-center text-2xl font-bold text-white">
            SEPA <CreditCardIcon className="ml-4 w-[33px] h-[40px]" />{" "}
          </h4>
          <p className="w-[90%] text-start text-base-gray text-sm open-sans-font	">
            Mit Bereitstellung ihrer IBAN und Bestätigung der Zahlung,
            autorisieren Sie Sports Media Network GmbH - Co. KG und Stripe,
            unseren Zahlungsserviceanbieter, Anweisungen zur Belastung Ihres
            Bankkontos an Ihre Bank zu senden. Sie sind berechtigt innerhalb von
            acht Wochen, beginnend mit dem Belastungsdatum, die Erstattung des
            belasteten Betrages zu verlangen. Es gelten dabei die mit Ihrem
            Kreditinstitut vereinbarten Bedingungen.
          </p>
        </div>
        <div className="justify-self-end">
          {open ? (
            <MinusIcon className="w-[58px] h-[58px] text-base-gray" />
          ) : (
            <PlusIcon className="w-[58px] h-[58px] text-base-gray" />
          )}
        </div>
      </Disclosure.Button>
      <Disclosure.Panel>
        <form className="flex flex-wrap justify-between mt-5">
          <fieldset className="xs:w-full md:w-[48%] border border-base-gray px-3 py-3 rounded-lg">
            <legend className="px-3 text-base-gray">Name</legend>
            <div className=" flex items-center justify-between">
              <input
                className="w-[95%] bg-base-black text-base-gray px-3 outline-none"
                type="text"
                placeholder="Geben sie ihre Name"
                required
              />
            </div>
          </fieldset>
          <fieldset className="xs:w-full md:w-[48%] border px-3 py-3 border-base-gray rounded-lg">
            <legend className="px-3 text-base-gray">E-Mailadresse</legend>
            <div className=" flex items-center justify-between">
              <input
                className="w-[95%] bg-base-black text-base-gray px-3 outline-none"
                type="text"
                placeholder="Geben sie ihre E-Mailadresse ein"
                required
              />
            </div>
          </fieldset>
          <fieldset className="xs:w-full md:w-[48%] border px-3 py-3 border-base-gray rounded-lg mt-5">
            <legend className="px-3 text-base-gray">IBAN number</legend>
            <div className=" flex items-center justify-between">
              <input
                className="w-[95%] bg-base-black text-base-gray px-3 outline-none"
                type="text"
                placeholder="DE12 3456 7891 0134 56"
                required
              />
              <CheckCircleOutLineIcon
                className={classNames(
                  false ? "text-success-color" : "text-base-gray",
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

export default SepaDisclosure;
