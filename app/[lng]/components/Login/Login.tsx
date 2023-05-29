"use client";

import React, { useState } from "react";
import Image from "next/image";
import { apple, closeLG, eye, facebook, google, vector } from "@/assets/images";
import "./style.css";

export const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  return (
    <>
      <div className="container">
        <div className="menu_close">
          <Image src={closeLG} alt=" " />
        </div>
        <h1 className="h_login">LOGIN</h1>
        <p className="to_use_fight">
          To use fight24.tv content, you must be older than 18 and registered.
        </p>
        <button className="login_facebook">
          <Image src={facebook} alt=" " />
          <div className="menu_close"></div>
          <p className="with_facebook">Login with Facebook</p>
        </button>
        <button className="login_google">
          <Image src={google} alt=" " />
          <p className="with_google">Login with Google</p>
        </button>
        <button className="login_apple">
          <Image src={apple} alt=" " />
          <p className="with_apple">Login with Apple</p>
        </button>

        <div className="line_or">
          <p className="lineOne"></p>
          <p className="or">or</p>
          <p className="line_two"></p>
        </div>
        <input
          className="email"
          type="email"
          name="Email"
          placeholder="Enter your Email"
        />
        {/* <div className='email'>
            </div> */}
        {/* <input className='password' type="password" name="Password" placeholder="password" />
            <i className='eye_icon'></i> */}
        <input
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Password"
          className="password"
        />
        <button
          className="absolute inset-y-0 right-80 flex items-center px-4 text-gray-600"
          onClick={togglePasswordVisibility}
        >
          <Image src={eye} alt="eye" />
        </button>

        {/* <div className='password'>
            </div> */}
        <div className="remember_me">
          <input
            className="remember_check"
            type="checkbox"
            id=""
            name=""
            value="check"
          />
          <label className="label_remember">Remember me?</label>
        </div>
        <a className="forgot_pass" href="#">
          I forgot password
        </a>
        <button className="btn_login" type="submit">
          <p className="p_login">Login</p>
        </button>
        <a className="register" href="#">
          Register
        </a>
      </div>
    </>
  );
};
