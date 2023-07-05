import React from "react";
import Link from "next/link";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

function PaymentConfirmation() {
  return (
    <>
      <div className="xs:w-[95vw] md:w-[595px] pt-4 rounded-lg shadow-md">
        <div className="w-full mx-auto flex flex-col items-center justify-center">
          <h3 className="text-2xl mb-3 font-bold">PAYMENT METHOD</h3>
          <p className="text-base-gray mb-3 text-center">
            Your payment has been successfully completed, you can review the
            content. Within 24 hours, the ticket will be sent to your e-mail
            address. If you have any difficulties, please contact us.
          </p>
          <CheckCircleIcon className="text-success-color w-20 h-20" />
          <Link href="/" className="bg-none text-base-gray cursor-pointer mt-6">
            TO HOME PAGE
          </Link>
        </div>
      </div>
    </>
  );
}

export default PaymentConfirmation;
