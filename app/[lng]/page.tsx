import React from "react";
import Link from "next/link";
import { useTranslation } from "../i18n";
import ContentService from "../../src/utils/content-service";
import ListCardsSection from "@/components/ListCardsSection";
import UpcomingFightCard from "@/components/UpcomingFightCard";
import FreeLatestVideosCard from "@/components/FreeLatestVideosCard";
import NewsCardItem from "@/components/NewsCardItem";
import AdvertisementSection from "@/components/AdvertisementSection";
import SubscribeSection from "@/components/SubscribeSection";
import { yellowLiveStreamIcon } from "@/assets/images";

// import { PaymentMethod } from "@/components/PaymentMethod";
// import { SharePaymentMethod } from "@/components/SharePayment";
// import { SharePayDone } from "@/components/SharePaydDone";
// import { ForgotPassword } from "@/components/ForgotPassword";
// import { EmailSent } from "@/components/EmailSent";
import HomeBanner from "@/components/HomePage/HomeBanner";

interface HomePageProps {
  params: {
    lng: string;
  };
}

interface VideosFilterHandlerProps {
  videosList: any[];
  matchType: string;
}
async function Page({ params: { lng } }: HomePageProps) {
  const [upcomingFights, freeLatestVideos, advertisements] = await Promise.all([
    ContentService.instance.getEntriesByType("upComingFights"),
    ContentService.instance.getEntriesByType("freeLatestVideos"),
    ContentService.instance.getEntriesByType("advertisements"),
  ]);
  const { t } = await useTranslation(lng, "home-page");

  const listSections: string[] = ["Boxen", "MMA", "Royal FC"];

  function videosFilterHandler({
    videosList,
    matchType,
  }: VideosFilterHandlerProps) {
    return videosList
      .filter(
        (entry) =>
          entry.fields.matchType[0].toLowerCase() === matchType.toLowerCase()
      )
      .map((item) => <FreeLatestVideosCard key={item.sys.id} data={item} />);
  }

  return (
    <>
      <HomeBanner />
      <ListCardsSection
        icon={yellowLiveStreamIcon}
        title={t("upcomingFightsTitle")}
      >
        {upcomingFights.map((item) => (
          <UpcomingFightCard key={item.sys.id} data={item} />
        ))}
      </ListCardsSection>

      <ListCardsSection title={t("freeLatestVideosTitle")}>
        {freeLatestVideos.map((item) => (
          <FreeLatestVideosCard key={item.sys.id} data={item} />
        ))}
      </ListCardsSection>
      {/* @ts-ignore */}
      <AdvertisementSection data={advertisements[0].fields} />

      <ListCardsSection
        title={t("newsTitle")}
        type="secondary"
        showAllUrl="ddddd"
      >
        {[...Array(20).keys()].map((item) => (
          <NewsCardItem key={item} />
        ))}
      </ListCardsSection>

      <SubscribeSection lng={lng} />

      <ListCardsSection title={t("recommendedVideosTitle")}>
        {freeLatestVideos.map((item) => (
          <FreeLatestVideosCard key={item.sys.id} data={item} />
        ))}
      </ListCardsSection>

      {listSections.map((sectionName) => (
        <ListCardsSection key={sectionName} title={sectionName}>
          {videosFilterHandler({
            videosList: freeLatestVideos,
            matchType: sectionName,
          })}
        </ListCardsSection>
      ))}

      <div className="my-24 flex items-center justify-center">
        <Link
          href="#"
          className="bg-base-yellow rounded text-base-black px-12 py-3"
        >
          {t("moreVideosButton")}
        </Link>
      </div>
    </>
  );
}

export default Page;
