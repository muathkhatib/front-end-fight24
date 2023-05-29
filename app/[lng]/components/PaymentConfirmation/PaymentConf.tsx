import React from "react";
import "./style.css";
import { circleCheck } from "@/assets/images";
import { closeLG } from "@/assets/images";
import Image from "next/image";

export const PaymentConfirmation = () => {
  return (
    <>
      <div className="container">
        <h1 className="Payment_confirmation">Payment confirmation</h1>
        <div className="menu_close">
          <Image src={closeLG} alt="" />
        </div>
        <p className="payment_successfully">
          Your payment has been successfully completed, you can review the
          content. Within 24 hours, the ticket will be sent to your e-mail
          address. If you have any difficulties, please contact us.
        </p>
        <div className="circle_check">
          <Image src={circleCheck} alt="" />
        </div>
        <p className="to_home_bage">TO HOME PAGE</p>
      </div>
    </>
  );
};
