"use client";
import React, { useState, useCallback } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import { useSelector, useDispatch } from "react-redux";

import { RootState } from "@/store";
import { toggleModal } from "@/store/Features/payment/paymentSlice";

// @ts-ignore
import PaymentMethod from "./components/PaymentMethod";
// @ts-ignore
import PaymentConfirmation from "./components/PaymentConfirmation";

function PaymentModal() {
  const [modalType, setModalType] = useState("method");
  const { isModalVisible } = useSelector((state: RootState) => state.payment);
  const dispatch = useDispatch();
  const handleModalClick = useCallback((e: any) => e.stopPropagation(), []);

  const typeHandler = useCallback(() => {
    switch (modalType) {
      case "method":
        return <PaymentMethod setModalType={setModalType} />;
      case "confirmation":
        return <PaymentConfirmation />;
      default:
        return <PaymentMethod />;
    }
  }, [modalType]);

  return (
    <>
      {isModalVisible && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-base-black bg-opacity-75 z-40 overflow-y-auto"
          onClick={() => dispatch(toggleModal())}
        >
          <div
            className="mx-auto p-4 bg-base-black rounded-lg"
            onClick={handleModalClick}
          >
            <div className="flex items-center justify-end">
              <div
                className="cursor-pointer"
                onClick={() => dispatch(toggleModal())}
              >
                <XMarkIcon className="w-6 h-6" />
              </div>
            </div>
            {typeHandler()}
          </div>
        </div>
      )}
    </>
  );
}

export default PaymentModal;
