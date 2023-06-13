import Image from "next/image";
import React from "react";
import "./style.css";
import {
  closeLG,
  email,
  facebookIcon,
  instagramIcon,
  linkedin,
  twitter,
} from "@/assets/images";
import { circleCheck } from "@/assets/images";

export const SharePayDone = () => {
  return (
    <>
      <div className="share_container">
        <h1 className="share">Share</h1>
        <div className="share_social">
          <Image src={instagramIcon} alt="" />
          <Image src={facebookIcon} alt="" />
          <Image src={twitter} alt="" />
          <Image src={email} alt="" />
          <Image src={linkedin} alt="" />
        </div>
        <div className="circle_check">
          <Image src={circleCheck} alt="" />
        </div>
        <p className="linke_cobied">LINKE COBIED</p>
      </div>
    </>
  );
};
