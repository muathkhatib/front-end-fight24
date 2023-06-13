import React from "react";
import "./style.css";
import { closeLG } from "@/assets/images";
import Image from "next/image";

export const ForgotPassword = () => {
  return (
    <>
      <div className="forgot_container">
        <h3 className="h_forgot">FORGOT PASSWORD</h3>
        <p className="we_will_send">
          We will send a password reset link to your email. It is valid for a
          limited time.
        </p>
        <div className="close_menu">
          <Image src={closeLG} alt="" />
        </div>
        <input
          className="email"
          type="email"
          name=""
          id=""
          placeholder="Enter your email"
        />
        <button className="btn_reset" type="reset">
          <p className="reset">RESET PASSWORD</p>
        </button>
        <a
          className="to_login"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          TO LOGIN PAGE
        </a>
      </div>
    </>
  );
};
