import React from "react";
import Image from "next/image";
import { apple, closeLG, facebook, google, vector } from "@/assets/images";
import "./style.css";

export const Register = () => {
  return (
    <>
      <div className="container">
        <div className="menu_close">
          <Image src={closeLG} alt=" " />
        </div>
        <h1 className="h_login">REGISTER</h1>
        <button className="login_facebook">
          <Image src={facebook} alt=" " />

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
        <input
          className="password"
          type="password"
          name="Password"
          placeholder="password"
        />
        <i className="eye_icon"></i>
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
        {/* <div className="i_accept">
                <input className='accept_check' type="checkbox" id="" name="" value="check" />
                <label className='label_accept' >I accept the <a href="" className="link">Terms and Conditions</a> fight.tv *</label>
            </div> */}
        {/* <div className="receive_info">
                <input className='receive_check' type="checkbox" id="" name="" value="check" />
                <label className='label_receive' >I want to receive information about tickets, games and news by Email</label>
            </div> */}

        <a className="forgot_pass" href="#">
          I forgot password
        </a>
        <button className="btn_login" type="submit">
          <p className="p_login">Register</p>
        </button>
        <a className="register" href="#">
          Login
        </a>
      </div>
    </>
  );
};
