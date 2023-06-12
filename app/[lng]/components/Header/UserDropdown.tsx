import React, { Fragment } from "react";
import { useSelector } from "react-redux";
import { Menu, Transition } from "@headlessui/react";
import { UserIcon } from "@heroicons/react/24/outline";
import { RootState } from "@/store";
import { classNames } from "@/utils";

export default function UserDropdown() {
  const { authInfo } = useSelector((state: RootState) => state.auth);
  return (
    <Menu
      as="div"
      className="relative inline-block text-left bg-base-black border border-gray rounded"
    >
      <div>
        <Menu.Button className="bg-[#141414] inline-flex w-full justify-center gap-x-1.5 rounded-md bg-base-black px-3 py-2 shadow-sm hover:bg-gray-50 text-gray">
          Anmelden
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-base-black shadow-lg ring-1 ring-gray ring-opacity-5 focus:outline-none border border-[#373232] overflow-hidden ">
          <div className="py-1 bg-base-black ">
            <div className="px-4 py-3 text-sm text-gray-900 border-b-[0.5px] border-b-gray">
              <div className="font-medium truncate flex items-center">
                <UserIcon className="text-gray w-6 h-6 mr-2" />
                <span>{authInfo?.email}</span>
              </div>
            </div>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm hover:text-base-yellow pl-[50px]"
                  )}
                >
                  Konto bearbeiten
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm hover:text-base-yellow pl-[50px]"
                  )}
                >
                  Passwort ändern
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block px-4 py-2 text-sm hover:text-base-yellow pl-[50px]"
                  )}
                >
                  Unterstützung
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <button
                  onClick={() => {
                    typeof window !== "undefined" &&
                      window.localStorage.removeItem("email");
                    window.location.reload();
                  }}
                  className={classNames(
                    active ? "bg-gray-100 text-gray-900" : "text-gray-700",
                    "block w-full px-4 py-2 text-left text-sm hover:text-base-yellow border-t-[0.5px] border-t-gray pl-[50px]"
                  )}
                >
                  Ausloggen
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}
