"use client";
import React, { useCallback, Dispatch, SetStateAction } from "react";
import FreeSeatCard from "./FreeSeatCard";

interface Props {
  totalAmount: number;
  setTotalAmount: Dispatch<React.SetStateAction<number>>;
}

function StepOne({ totalAmount, setTotalAmount }: Props) {
  const promoCodeHandler = useCallback((e: any) => {
    e.preventDefault();
    const { code } = e.target;
  }, []);

  return (
    <div>
      <h3 className="text-center text-2xl font-bold">RECHNUNG</h3>
      <FreeSeatCard
        price={99.99}
        seatName="Sitzplätze 1. Reihe - Normalpreis"
        selectedValue={1}
        controlled
        callback={setTotalAmount}
      />
      <FreeSeatCard
        price={0}
        seatName="Sitzplätze 1. Reihe - Normalpreis"
        selectedValue={1}
        controlled={false}
      />
      <FreeSeatCard
        price={15.97}
        seatName="inkl. MwSt.:"
        selectedValue={1}
        controlled={false}
      />
      <div>
        <form
          className="flex items-center justify-end mt-8 mb-4"
          onSubmit={promoCodeHandler}
        >
          <input
            name="code"
            placeholder="Enter Code"
            className="bg-base-black border border-white text-white outline-none px-5 py-4 w-[260px] rounded mr-4"
          />
          <button
            className="text-base-black bg-gray px-[53.5px] py-4 rounded"
            type="submit"
          >
            Anvenden
          </button>
        </form>
        <h3 className="text-end text-2xl font-bold">
          Gesamtsumme: {totalAmount.toFixed(2)} EUR
        </h3>
      </div>
    </div>
  );
}

export default StepOne;
