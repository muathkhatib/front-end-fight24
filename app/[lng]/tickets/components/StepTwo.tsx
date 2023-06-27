"use client";
import React, { useState, useCallback, Dispatch, SetStateAction } from "react";
import { CalendarDaysIcon } from "@heroicons/react/24/solid";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

interface Props {
  totalAmount: number;
  setTotalAmount: Dispatch<SetStateAction<number>>;
}

function StepTwo({ totalAmount, setTotalAmount }: Props) {
  const [startDate, setStartDate] = useState(new Date());

  const promoCodeHandler = useCallback((e: any) => {
    e.preventDefault();
    const { code } = e.target;
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-bold">RECHNUNG</h3>
      <div>
        <form className="mt-8 mb-4" onSubmit={promoCodeHandler}>
          {/* Information Section */}
          <div className="xs:w-full md:w-[48%] mx-auto ">
            <h5 className="text-base-yellow mb-4">Name</h5>

            <fieldset className="flex border px-3 py-3 border-gray rounded-lg mb-4">
              <legend className="px-3 text-gray">Name</legend>
              <input
                className="bg-base-black text-gray px-3 outline-none"
                type="text"
                placeholder="Geben sie ihre Name"
                required
              />
            </fieldset>

            <fieldset className="flex items-center justify-between border px-3 py-3 border-gray rounded-lg mb-4">
              <legend className="px-3 text-gray">Geburtsdatum</legend>
              <DatePicker
                placeholderText="dd.mm.yyyy"
                selected={startDate}
                onChange={(date: Date) => setStartDate(date)}
                className="bg-base-black"
                calendarClassName="bg-base-yellow"
                showMonthDropdown
                showYearDropdown
                maxDate={new Date("12-31-2015")}
                yearDropdownItemNumber={15}
              />
              <CalendarDaysIcon className="w-6 h-6 text-gray" />
            </fieldset>

            <fieldset className="flex border px-3 py-3 border-gray rounded-lg mb-4">
              <legend className="px-3 text-gray">Firma</legend>
              <input
                className="w-full bg-base-black text-gray px-3 outline-none"
                type="text"
                placeholder="Geben Sie Ihr Unternehmen ein"
                required
              />
            </fieldset>
          </div>
          {/* Kontakt Section */}
          <div className="xs:w-full md:w-[48%] mx-auto ">
            <h5 className="text-base-yellow mb-4">Kontakt</h5>

            <fieldset className="flex border px-3 py-3 border-gray rounded-lg mb-4">
              <legend className="px-3 text-gray">E-Mailadresse</legend>
              <input
                className="w-full bg-base-black text-gray px-3 outline-none"
                type="text"
                placeholder="Geben sie ihre E-Mailadresse ein"
                required
              />
            </fieldset>
            <div>
              <fieldset className="flex border px-3 py-3 border-gray rounded-lg mb-4">
                <legend className="px-3 text-gray">Mobiltelefon</legend>
                <input
                  className="w-full bg-base-black text-gray px-3 outline-none"
                  type="text"
                  placeholder="Geben sie ihre Mobiltelefon"
                  required
                />
              </fieldset>
            </div>
          </div>
          {/* Address section */}
          <div className="xs:w-full md:w-[48%] mx-auto ">
            <h5 className="text-base-yellow mb-4">Kontakt</h5>

            <fieldset className="flex border px-3 py-3 border-gray rounded-lg mb-4">
              <legend className="px-3 text-gray">Straße und Hausnummer</legend>
              <input
                className="w-full bg-base-black text-gray px-3 outline-none"
                type="text"
                placeholder="Straße und Hausnummer"
                required
              />
            </fieldset>

            <fieldset className="flex border px-3 py-3 border-gray rounded-lg mb-4">
              <legend className="px-3 text-gray">Postleitzahl</legend>
              <input
                className="w-full bg-base-black text-gray px-3 outline-none"
                type="text"
                placeholder="Postleitzahl"
                required
              />
            </fieldset>

            <fieldset className="flex border px-3 py-3 border-gray rounded-lg mb-4">
              <legend className="px-3 text-gray">Stadt</legend>
              <input
                className="w-full bg-base-black text-gray px-3 outline-none"
                type="text"
                placeholder="Stadt"
                required
              />
            </fieldset>

            <fieldset className="flex border px-3 py-3 border-gray rounded-lg mb-4">
              <legend className="px-3 text-gray">Bundesland</legend>
              <input
                className="w-full bg-base-black text-gray px-3 outline-none"
                type="text"
                placeholder="Bundesland"
                required
              />
            </fieldset>

            <fieldset className="flex border px-3 py-3 border-gray rounded-lg mb-4">
              <legend className="px-3 text-gray">Land</legend>
              <input
                className="w-full bg-base-black text-gray px-3 outline-none"
                type="text"
                placeholder="Land"
                required
              />
            </fieldset>
          </div>
        </form>
        <h3 className="text-end text-2xl font-bold">
          Gesamtsumme: {totalAmount.toFixed(2)} EUR
        </h3>
      </div>
    </div>
  );
}

export default StepTwo;
