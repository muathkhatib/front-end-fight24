"use client";
import React, { useState, useCallback, useMemo, FC, ReactElement } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

import { eventSits } from "@/assets/images";

import FreeSeatCard from "./FreeSeatCard";
import Stepper from "./Stepper";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";

interface Props {
  data: any;
}

function BuyTicket({ data }: Props) {
  const [stepNumber, setStepNumber] = useState(0);
  const stepperMaxValue = useMemo(() => 3, []);
  const [totalAmount, setTotalAmount] = useState(0);

  const furtherStepHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if (stepNumber < stepperMaxValue) {
        return setStepNumber((prev) => prev + 1);
      }
      return;
    },
    [stepNumber, setStepNumber, stepperMaxValue]
  );

  const returnStepHandler = useCallback(
    (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      e.preventDefault();
      if (stepNumber > 0) {
        return setStepNumber((prev) => prev - 1);
      }
      return;
    },
    [stepNumber, setStepNumber]
  );

  const stepperChildrenHandler = useCallback(
    (maxValue: number) => {
      if (stepNumber > maxValue) {
        return null;
      }

      switch (stepNumber) {
        case 0:
          return (
            <div className="my-8">
              {data.fields.availableSeats.map((seat: any) => (
                <FreeSeatCard
                  key={seat.sys.id}
                  price={seat.fields.seatPrice}
                  seatName={seat.fields.seatName}
                  controlled
                  callback={setTotalAmount}
                />
              ))}
            </div>
          );
        case 1:
          return (
            <StepOne
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
            />
          );
        case 2:
          return (
            <StepTwo
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
            />
          );
        case 3:
          return <StepThree />;
        default:
          return (
            <StepOne
              totalAmount={totalAmount}
              setTotalAmount={setTotalAmount}
            />
          );
      }
    },
    [stepNumber, totalAmount, setTotalAmount]
  );

  return (
    <div className="container">
      <div className="flex xs:flex-col md:flex-row justify-between mt-[30px] xs:text-center md:text-start">
        <div>
          <h2 className="text-5xl font-black">THE CHOSEN</h2>
          <h4 className="text-2xl font-bold mt-8">25.02.2023 19:00 CET</h4>
          <h5 className="mt-4 w-[276px]">
            Sporthalle Erzhausen Heinrichstraße 40, 64390 Erzhausen
          </h5>
        </div>
        <div className="flex mt-4 xs:justify-evenly md:justify-start">
          <span className="text-gray mr-4">Teilen</span>
          <FaTwitter className="w-6 h-6  mr-4 text-base-yellow" />
          <FaFacebookF className="w-6 h-6  mr-4 text-base-yellow" />
          <FaInstagram className="w-6 h-6 mr-6 text-base-yellow" />
        </div>
      </div>
      <div>
        <div className="flex xs:flex-col md:flex-row items-center justify-between my-8">
          <h2 className="text-2xl font-bold">Freie Platzwahl</h2>
          <h2 className="">Mindestalter: 16</h2>
        </div>
      </div>

      <Stepper stepsNames={[1, 2, 3]} stepNumber={stepNumber}>
        {/* @ts-ignore */}
        {stepperChildrenHandler(stepperMaxValue)}
      </Stepper>

      <div className="flex xs:flex-col xl:flex-row items-center justify-between my-8">
        <div className="xs:w-full xl:w-[552px] xs:my-4 xl:my-0">
          {stepNumber === 0 && (
            <p>
              The Chosen geht in die nächste Runde - und wie immer wird in
              Hamburg feinstes Kickboxen geboten. Der 10. Juni ist also ein
              Pflichttermin für alle Kampfsportfans im hohen Norden!
            </p>
          )}
        </div>
        <div>
          <button
            onClick={returnStepHandler}
            className="border border-base-yellow text-2xl text-base-yellow rounded-lg py-[16px] px-[78.5px] xs:w-full xl:w-auto mr-2 xs:my-4 xl:my-0"
          >
            ZURÜCK
          </button>
          <button
            onClick={furtherStepHandler}
            className="text-base-black text-2xl bg-base-yellow py-[16px] px-[155px] rounded-lg xs:my-4 xl:my-0 xs:w-full xl:w-auto"
          >
            {stepNumber === stepperMaxValue ? "CONFIRM" : "WEITER"}
          </button>
        </div>
      </div>

      <div className="my-16">
        <Image src={eventSits} alt="Sits Map" className="w-full" />
      </div>

      <div>
        <h3 className="text-2xl font-bold my-8">Veranstaltungsplakat</h3>
        <img
          className="w-full"
          src={`https:${data.fields.fightImage.fields.file.url}`}
        />
      </div>

      <h5 className="text-end my-8">
        POWERED BY:{" "}
        <Link href="https://egocentric-systems.de/">
          EGOCENTRIC SYSTEMS GMBH
        </Link>
      </h5>
    </div>
  );
}

export default BuyTicket;
