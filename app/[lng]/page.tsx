import React from "react";
import Link from "next/link";
import { useTranslation } from "../i18n";
import { PAGE_PARAMS } from "../../src/@types/generic";
import HomeBanner from "./components/HomePage/HomeBanner";
import ListCardsSection from "./components/ListCardsSection";
import UpcomingFightCard from "./components/UpcomingFightCard";
import FreeLatestVideosCard from "./components/FreeLatestVideosCard";
import NewsCardItem from "./components/NewsCardItem";
import AdvertisementSection from "./components/AdvertisementSection";
import SubscribeSection from "./components/SubscribeSection";
import { yellowLiveStreamIcon, advertisement } from "./assets/images";
import { Register } from "./components/register";
import { Login } from "./components/Login/Login";
import { PaymentMethod } from "./components/PaymentMethod/Payment";
import { SharePaymentMethod } from "./components/SharePayment";
import { SharePayDone } from "./components/SharePaydDone";
import { ForgotPassword } from "./components/ForgotPassword";
import { EmailSent } from "./components/EmailSent";

const listOfNumbers = [...Array(20).keys()];

export default async function Page({ params: { lng } }: PAGE_PARAMS) {
  const { t } = await useTranslation(lng, "home-page");

  return (
    <>
      <HomeBanner />
      <ListCardsSection icon={yellowLiveStreamIcon} title="Kommende Kämpfe">
        {listOfNumbers.map((item) => (
          <UpcomingFightCard key={item} />
        ))}
      </ListCardsSection>

      <ListCardsSection title="Free Neueste Videos">
        {listOfNumbers.map((item) => (
          <FreeLatestVideosCard key={item} />
        ))}
      </ListCardsSection>

      <AdvertisementSection
        imgSrc={advertisement}
        imgAlt="Ad 1"
        url="https://www.youtube.com"
      />

      <ListCardsSection title="NEWS" type="secondary" showAllUrl="ddddd">
        {listOfNumbers.map((item) => (
          <NewsCardItem key={item} />
        ))}
      </ListCardsSection>

      <SubscribeSection />

      <ListCardsSection title="Empfohlene Videos">
        {listOfNumbers.map((item) => (
          <FreeLatestVideosCard key={item} />
        ))}
      </ListCardsSection>

      <ListCardsSection title="Boxen">
        {listOfNumbers.map((item) => (
          <FreeLatestVideosCard key={item} />
        ))}
      </ListCardsSection>

      <ListCardsSection title="MMA">
        {listOfNumbers.map((item) => (
          <FreeLatestVideosCard key={item} />
        ))}
      </ListCardsSection>

      <ListCardsSection title="Royal FC">
        {listOfNumbers.map((item) => (
          <FreeLatestVideosCard key={item} />
        ))}
      </ListCardsSection>

      <div className="my-24 flex items-center justify-center">
        <Link
          href="#"
          className="bg-base-yellow rounded text-base-black px-12 py-3"
        >
          More Videos
        </Link>
      </div>
      {/* <PaymentMethod /> */}
      {/* <Login /> */}
      {/* <Register /> */}
      {/* <SharePaymentMethod /> */}
      {/* <SharePayDone /> */}
      {/* <ForgotPassword /> */}
      {/* <EmailSent /> */}
    </>
  );
}
