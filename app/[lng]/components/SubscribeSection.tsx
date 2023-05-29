"use client";
import React, { useState, useCallback } from "react";

import { useTranslation } from "../../i18n/client";

interface Props {
  lng: string;
}

function SubscribeSection({ lng }: Props) {
  const [email, setEmail] = useState("");
  const { t } = useTranslation(lng, "home-page");
  const emailPlaceholder = t("emailPlaceholder");

  const handleEmailChange = useCallback((e: any) => {
    setEmail(e.target.value);
  }, []);

  const handleFormSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      // Do Somthing Here
    },
    [email]
  );

  return (
    <div className="w-[55%]  mx-auto px-4 py-8">
      <h1 className="text-5xl font-black mb-4 mx-auto text-center">
        {t("subscribeSectionTitle").toUpperCase()}
      </h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col items-center">
        <label htmlFor="email" className="block font-medium mb-2 self-start">
          {t("emailAddress")}
        </label>
        <input
          id="email"
          type="email"
          className="w-full border rounded text-light-gray bg-base-black px-5 py-3 mb-8"
          placeholder={emailPlaceholder}
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button
          type="submit"
          className="bg-base-yellow text-base-black rounded px-12 py-3"
        >
          {t("subscriptionBtn")}
        </button>
      </form>
    </div>
  );
}

export default SubscribeSection;
