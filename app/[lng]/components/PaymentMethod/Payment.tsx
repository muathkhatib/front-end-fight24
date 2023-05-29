import * as React from "react";
import Image from "next/image";
import "./style.css";
import {
  closeLG,
  discover,
  info,
  maestro,
  mastercard,
  paypal,
  protect,
  selected,
  vector,
  visa,
} from "../../assets/images/index";
export const PaymentMethod = () => {
  return (
    <>
      <div className="payment_method_popup">
        <h5 className="payment_method">PAYMENT METHOD</h5>
        <div className="pay_method">
          <div className="paypal_pay">
            <div className="container_paypal">
              <div className="paypal">
                <Image src={selected} alt="" />
                <p className="h1_paypal">paypal</p>
              </div>
              <p className="p_paypal">
                You will be redirected to the PayPal website after submitting
                your order
              </p>
              <div className="svg_paypal">
                <Image src={paypal} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="apple_pay">
          <div className="apple_container">
            <div className="apple">
              <Image src={selected} alt=" " />
              <h5 className="h1_apple">Apple Pay</h5>
            </div>
            <p className="p_apple">Your payment will be processed in EUR</p>
            <div className="pay">
              <div className="apple_svg">
                <Image src={vector} alt="" />
              </div>
              <h1 className="h1_pay">pay</h1>
            </div>
          </div>
        </div>

        <div className="credit_card">
          <div className="credit_container">
            <div className="credit_chackbox">
              <Image src={selected} alt="" />
              <h5 className="h5_credit">Credit Card</h5>
            </div>
            <div className="bank_card">
              <Image src={visa} alt="" />
              <Image src={mastercard} alt="" />
              <Image src={maestro} alt="" />
              <Image src={discover} alt="" />
            </div>
          </div>
          <div className="container_card_number">
            <fieldset className="input_card_number">
              <legend className="label_card">Card number</legend>
              <input
                className="input_card"
                type="text"
                placeholder="1234 5678 9101 3456"
              />
            </fieldset>
          </div>
          <div className="container_csc">
            <div className="container_info">
              <Image src={info} alt="" />
              <p className="p_card_security">
                The card security code (CSC) is usually a 3 or 4 - digit number.
                The CSC is typically printed on the back of a credit card.
              </p>
            </div>
          </div>
        </div>

        <div className="protect_your_payment">
          <Image src={protect} alt="" />
          <p className="p_protect">
            We protect your payment information using encryption to provide
            security.
          </p>
        </div>
        <div className="menu_close">
          <Image src={closeLG} alt="" />
        </div>
        <button className="btn_confirm">
          <p className="confirm">CONFIRM</p>
        </button>
      </div>
    </>
  );
};
