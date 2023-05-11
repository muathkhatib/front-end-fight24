"use client";
import React from "react";
import { useTranslation } from "../i18n";
import { PAGE_PARAMS } from "../../src/@types/generic";

export default async function Page({ params: { lng } }: PAGE_PARAMS) {
  const { t } = await useTranslation(lng, "home-page");

  return (
    <>
      {/* @ts-ignore  */}
      <h1>{t("title")}</h1>
    </>
  );
}
