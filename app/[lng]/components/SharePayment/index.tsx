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

export const SharePaymentMethod = () => {
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
        <input
          className="password"
          name="password"
          placeholder="https://fight24.tv/news/fight-night-mannheim-xv-here-to-stay-507rm"
        />
        <div className="colse_menu">
          <Image src={closeLG} alt="" />
        </div>
        <button className="btn_live" type="submit">
          <p className="coby_link">COPY LINK</p>
        </button>
      </div>
    </>
  );
};
