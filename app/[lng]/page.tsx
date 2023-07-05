// @ts-nocheck
import React from "react";
import Link from "next/link";
import { useTranslation } from "../i18n";
import ContentService from "@contentfulClient";
import ListCardsSection from "@/components/ListCardsSection";
import UpcomingFightCard from "@/components/UpcomingFightCard";
import FreeLatestVideosCard from "@/components/FreeLatestVideosCard";
import NewsCardItem from "@/components/NewsCardItem";
import AdvertisementSection from "@/components/AdvertisementSection";
import SubscribeSection from "@/components/SubscribeSection";
import { yellowLiveStreamIcon } from "@/assets/images";
import HomeBanner from "@/components/HomePage/HomeBanner";

export const revalidate = 10;

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
  const [upComingFights, freeLatestVideos, advertisements, news] =
    await Promise.all([
      ContentService.instance.getEntriesByType("upComingFights", lng),
      ContentService.instance.getEntriesByType("freeLatestVideos", lng),
      ContentService.instance.getEntriesByType("advertisements", lng),
      ContentService.instance.getEntriesByType("news", lng),
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
      <HomeBanner upComingFights={upComingFights} />
      <ListCardsSection
        icon={yellowLiveStreamIcon}
        title={t("upcomingFightsTitle")}
      >
        {upComingFights.map((item) => (
          <UpcomingFightCard key={item.sys.id} data={item} />
        ))}
      </ListCardsSection>

      <ListCardsSection title={t("freeLatestVideosTitle")}>
        {freeLatestVideos.map((item) => (
          <FreeLatestVideosCard key={item.sys.id} data={item} />
        ))}
      </ListCardsSection>

      <AdvertisementSection
        data={advertisements}
        positionName="Home Page Center"
      />

      <ListCardsSection
        title={t("newsTitle")}
        type="secondary"
        showAllUrl="/news"
      >
        {news.map((item) => (
          <NewsCardItem key={item.sys.id} data={item} />
        ))}
      </ListCardsSection>

      <SubscribeSection lng={lng} />

      <ListCardsSection title={t("recommendedVideosTitle")}>
        {freeLatestVideos.map((item) => (
          <FreeLatestVideosCard key={item.sys.id} data={item} />
        ))}
      </ListCardsSection>

      {listSections.map(
        (sectionName) =>
          videosFilterHandler({
            videosList: freeLatestVideos,
            matchType: sectionName,
          }).length > 0 && (
            <ListCardsSection key={sectionName} title={sectionName}>
              {videosFilterHandler({
                videosList: freeLatestVideos,
                matchType: sectionName,
              })}
            </ListCardsSection>
          )
      )}

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
