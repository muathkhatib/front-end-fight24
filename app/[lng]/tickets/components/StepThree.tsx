"use client";
import React from "react";
import { Disclosure } from "@headlessui/react";

import SepaDisclosure from "./Disclosures/SepaDisclosure";
import CreditCardDisclosure from "./Disclosures/CreditCardDisclosure";
import PaypalDisclosure from "./Disclosures/PaypalDisclosure";
import ApplePayDisclosure from "./Disclosures/ApplePayDisclosure";

function StepThree() {
  return (
    <>
      <Disclosure>{({ open }) => <SepaDisclosure open={open} />}</Disclosure>
      <Disclosure>
        {({ open }) => <CreditCardDisclosure open={open} />}
      </Disclosure>
      <Disclosure>{({ open }) => <PaypalDisclosure open={open} />}</Disclosure>
      <Disclosure>
        {({ open }) => <ApplePayDisclosure open={open} />}
      </Disclosure>
    </>
  );
}

export default StepThree;
