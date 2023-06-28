"use client";
import React, {
  useState,
  useCallback,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { PlusIcon, MinusIcon } from "@heroicons/react/24/solid";
import { classNames } from "@/utils";

interface Props {
  price: number;
  selectedValue?: number;
  seatName: string;
  controlled: boolean;
  callback?: Dispatch<SetStateAction<number>>;
}

function FreeSeatCard({
  price,
  seatName,
  selectedValue = 0,
  controlled,
  callback,
}: Props) {
  const [numberOfSeats, setNumberOfSeats] = useState(selectedValue);

  const seatsHandler = useCallback(
    ({ type }: { type: string }) => {
      if (type === "plus") {
        setNumberOfSeats((prev) => prev + 1);
        return;
      } else if (type === "minus" && numberOfSeats > 0) {
        return setNumberOfSeats((prev) => prev - 1);
      } else {
        return;
      }
    },
    [numberOfSeats, price]
  );

  useEffect(() => {
    const totalAmount = numberOfSeats * price;
    typeof callback === "function" && callback(totalAmount);
  }, [numberOfSeats, price]);

  return (
    <div className="flex xs:flex-col md:flex-row items-center justify-between border border-secondary-dark-gray xs:my-4 md:my-[5px] px-[10px] py-[8px] rounded-lg">
      <h5 className="xs:my-4 md:my-0 xs:text-2xl md:text-base">{seatName}</h5>
      <div className="flex items-center">
        <span className="font-bold text-2xl ">
          {price === 0 ? "00.00" : price} EUR
        </span>
        <div className="ml-7 flex items-center justify-evenly w-[153px] bg-secondary-dark-gray py-3 rounded">
          {controlled && (
            <MinusIcon
              onClick={() => seatsHandler({ type: "minus" })}
              className={classNames(
                numberOfSeats === 0 ? "text-base-gray" : "text-white",
                "w-5 h-5 font-bold text-sm cursor-pointer"
              )}
            />
          )}
          <span className="font-bold  xs:text-base md:text-2xl select-none">
            {numberOfSeats}
          </span>
          {controlled && (
            <PlusIcon
              onClick={() => seatsHandler({ type: "plus" })}
              className="w-5 h-5 font-bold text-sm cursor-pointer"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default FreeSeatCard;
