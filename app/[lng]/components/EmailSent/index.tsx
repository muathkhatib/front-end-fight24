import React from "react";
import "./style.css";
import Image from "next/image";
import { closeLG } from "@/assets/images";

export const EmailSent = () => {
  return (
    <>
      <div className="email_container">
        <h3 className="emailsent">Email sent</h3>
        <div className="close_menu">
          <Image src={closeLG} alt="" />
        </div>
        <p className="sent_instruction">
          We have sent instructions for setting a new password to{" "}
          <span className="dci">dcjdkc56@gmail.com</span>
        </p>
      </div>
    </>
  );
};
