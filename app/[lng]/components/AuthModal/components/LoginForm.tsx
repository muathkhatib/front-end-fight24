"use client";
import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import { EyeIcon, EyeSlashIcon, XMarkIcon } from "@heroicons/react/24/solid";
import { FaFacebook, FaApple } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { setAuthModalType } from "@/store/Features/auth/authSlice";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const dispatch = useDispatch();

  const togglePasswordVisibility = useCallback(() => {
    setIsPasswordVisible((prev) => !prev);
  }, [setIsPasswordVisible]);

  const handleLogin = useCallback((e: any) => {
    e.preventDefault();
    const email = e.target.email.value;
    typeof window !== "undefined" &&
      window.localStorage.setItem("email", email);
    window.location.reload();
  }, []);

  return (
    <div className="pt-4 rounded-lg shadow-md">
      <div className="w-full mx-auto flex flex-col items-center">
        <h1 className="w-full text-center mb-1 text-2xl font-bold">LOGIN</h1>
        <p className="w-full border-blue-500 text-center">
          To use fight24.tv content, you must be older than 18 and registered.
        </p>

        <div className="w-full">
          <button className="w-full border border-gray flex items-center justify-center px-3 py-5 bg-white rounded-lg my-5">
            <FaFacebook className="text-[#0A7AFF] mr-4" />
            <p className="text-base-black">Login with Facebook</p>
          </button>

          <button className="w-full border border-gray flex items-center justify-center px-3 py-5 bg-white rounded-lg my-5">
            <FcGoogle className="mr-4" />
            <p className="text-base-black">Login with Google</p>
          </button>

          <button className="w-full border border-gray flex items-center justify-center px-3 py-5 bg-white rounded-lg my-5">
            <FaApple className="text-base-black mr-4" />
            <p className="text-base-black">Login with Apple</p>
          </button>
        </div>

        <div className="w-full flex py-5 items-center justify-between">
          <div className="w-[45%] border-t border-gray"></div>
          <span className="self-top h-5 text-gray">or</span>
          <div className="w-[45%] border-t border-gray"></div>
        </div>

        <form className="space-y-6 w-full" onSubmit={handleLogin}>
          <div>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              placeholder="Enter your email"
              required
              className="mt-2 block w-full rounded-lg text-gray shadow-sm bg-base-black placeholder:text-gray sm:text-sm sm:leading-6 p-5 border border-gray outline-none"
            />
          </div>

          <div className="flex mt-2 items-center justify-evenly border border-gray rounded-lg p-5">
            <input
              id="password"
              name="password"
              placeholder="Password"
              type={isPasswordVisible ? "text" : "password"}
              autoComplete="current-password"
              required
              className="w-11/12 text-gray shadow-sm bg-base-black placeholder:text-gray sm:text-sm sm:leading-6 outline-none"
            />
            {isPasswordVisible ? (
              <EyeSlashIcon
                className="text-gray cursor-pointer w-6 h-6"
                onClick={togglePasswordVisibility}
              />
            ) : (
              <EyeIcon
                className="text-gray cursor-pointer w-6 h-6"
                onClick={togglePasswordVisibility}
              />
            )}
          </div>

          <div className="flex items-center justify-between">
            <div className="w-full flex items-center justify-between">
              <div className="flex items-center">
                <input
                  className="mr-1"
                  type="checkbox"
                  id="remember_me"
                  name="remember_me"
                  value="check"
                />
                <label className="label_remember">Remember me?</label>
              </div>

              <span
                onClick={() => dispatch(setAuthModalType("forgot_password"))}
                className="text-gray cursor-pointer"
              >
                I forgot password
              </span>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="w-full text-center px-5 py-6 bg-base-yellow text-base-black font-bold rounded-lg"
            >
              LOG IN
            </button>
            <div
              onClick={() => dispatch(setAuthModalType("register"))}
              className="w-full text-center px-5 py-6 cursor-pointer"
            >
              REGISTER
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
