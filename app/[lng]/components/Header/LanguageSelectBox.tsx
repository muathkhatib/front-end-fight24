"use client";
import React, { Fragment } from "react";
import Image from "next/image";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, ChevronDownIcon } from "@heroicons/react/20/solid";
import { languagesIcon } from "../../assets/images";
import { i18n } from "@i18n/settings";
import { useRouter } from "next/navigation";
import { LNG } from "../../../../src/@types/generic";
import { classNames } from "../../utils";
import useBreakpoints from "@/hooks/useBreakpoints";

export default function LanguageSelectBox({ lng }: LNG): JSX.Element {
  const router = useRouter();
  const { isXs, isSm, isMd, isLg, active } = useBreakpoints();

  return (
    <Listbox value={lng.toUpperCase()} onChange={(value) => router.push(value)}>
      {({ open }) => (
        <>
          <div className="">
            <Listbox.Button className="relative cursor-default flex items-center">
              {isXs || isSm ? null : <Image src={languagesIcon} alt="" />}
              <div className="flex items-center ml-1">
                <span className="block truncate">{lng.toUpperCase()}</span>
                <ChevronDownIcon
                  className="h-5 w-5 text-base-gray pointer-events-none"
                  aria-hidden="true"
                />
              </div>
            </Listbox.Button>

            <Transition
              show={open}
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="absolute top-16 z-20 overflow-auto py-4 border border-base-gray flex flex-col items-center justify-between bg-base-black rounded">
                {i18n.locales.map((item) => (
                  <Listbox.Option
                    key={item}
                    className="cursor-pointer select-none px-4"
                    value={item}
                  >
                    {({ selected, active }) => (
                      <>
                        <div className="flex items-center mb-[10px]">
                          <span
                            className={classNames(
                              selected
                                ? "font-semibold text-base-yellow"
                                : "font-normal",
                              "block truncate"
                            )}
                          >
                            {item.toUpperCase()}
                          </span>
                        </div>
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </>
      )}
    </Listbox>
  );
}
