"use client";
import React, { useState, useCallback } from "react";

interface Props {
  title?: string;
}

function SubscribeSection({
  title = "Lassen Sie sich über Neuigkeiten und neue Kämpfe",
}: Props) {
  const [email, setEmail] = useState("");

  const handleEmailChange = useCallback((e: any) => {
    setEmail(e.target.value);
  }, []);

  const handleFormSubmit = useCallback(
    (e: any) => {
      e.preventDefault();
      console.log(email);
    },
    [email]
  );

  return (
    <div className="w-[55%]  mx-auto px-4 py-8">
      <h1 className="text-5xl font-black mb-4 mx-auto text-center">
        {title.toUpperCase()}
      </h1>
      <form onSubmit={handleFormSubmit} className="flex flex-col items-center">
        <label htmlFor="email" className="block font-medium mb-2 self-start">
          E-Mailadresse
        </label>
        <input
          id="email"
          type="email"
          className="w-full border rounded text-light-gray bg-base-black px-5 py-3 mb-8"
          placeholder="Geben Sie Ihre E-Mailadresse ein"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <button
          type="submit"
          className="bg-base-yellow text-base-black rounded px-12 py-3"
        >
          Anmeldung
        </button>
      </form>
    </div>
  );
}

export default SubscribeSection;
